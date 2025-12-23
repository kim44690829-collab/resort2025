<?php

// CORS 허용
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// OPTIONS 요청 처리 (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// DB 연결이 들어있는 database.php를 포함
include '../config/database.php';

// 클라이언트에서 보낸 JSON데이터 읽기
$data = json_decode(file_get_contents("php://input"), true);

// 입력 데이터 변수 저장
$userEmail = $data['userEmail'];
$userPw = $data['userPw'];
$userGender = $data['userGender'];
$userPhone = $data['userPhone'];
$userBirth = $data['userBirth'];
$nickname = $data['nickname'];

// 공백처리
$userEmail  = trim($userEmail);
$nickname   = trim($nickname);
$userPhone  = trim($userPhone);
$userBirth = trim($userBirth);

// 예외 처리 => 빈값 체크
if(empty($userEmail) || empty($userPw) || $userGender === '' || empty($userPhone) || empty($userBirth) || empty($nickname)){
    echo json_encode([
        "status" => "fail",
        "message" => "모든 필드명을 입력하세요"
    ]);
    // if문을 빠져나오는 명령어
    exit;
}

// 이메일 형식 검증
// filter_var() => 값이 특정 규칙에 맞는지 검사하는 PHP 내장 함수
// !filter_var => 값이 특정 규칙에 맞지 않으면 아래 코드를 수행
// FILTER_VALIDATE_EMAIL => 값이 이메일 형식인지 검사

if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => "fail",
        "message" => "이메일 형식이 올바르지 않습니다."
    ]);
    exit;
}

// 비밀번호 규칙 검증
// strlen => 문자열 길이(몇 글자인지) 를 구하는 PHP 기본 함수 (바이트 길이를 반환하기 때문에 한글 x)
if (strlen($userPw) < 8) {
    echo json_encode([
        "status" => "fail",
        "message" => "비밀번호는 최소 8자 이상이어야 합니다."
    ]);
    exit;
}

// 휴대폰 번호 숫자 & 길이 검증
// preg_match => 문자열이 특정 패턴(정규식)에 맞지 않으면
// !preg_match('/^010\d{8}$/', $userPhone) => 휴대폰 번호가 정해진 패턴('/^010\d{8}$/')과 다르면
// / ~~~ / => 시작과 끝 (이 안에 정규식이 들어갈겁니다.)
// ^010 => 문자열이 010으로 시작됩니다.
// \d => 숫자 한개 , {8} => 앞 패턴을 8번 반복하겠다. 결론 => 숫자 한개를 8번 반복하겠다. = 숫자 8자리
// $ 끝

if (!preg_match('/^010\d{8}$/', $userPhone)) {
    echo json_encode([
        "status" => "fail",
        "message" => "휴대폰 번호 형식이 올바르지 않습니다."
    ]);
    exit;
}

// 생년월일 유효성 체크

if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $userBirth)) {
    echo json_encode([
        "status" => "fail",
        "message" => "생년월일 형식은 YYYY-MM-DD 입니다."
    ]);
    exit;
}

// explode() => 문자열을 특정 기준으로 잘라서 배열로 만드는 PHP 함수 ('기준 문자', 문자열)
// checkdate() => 날짜가 실제로 존재하는지 검사하는 PHP 내장 함수

[$year, $month, $day] = explode('-', $userBirth);

if (!checkdate((int)$month, (int)$day, (int)$year)) {
    echo json_encode([
        "status" => "fail",
        "message" => "유효하지 않은 생년월일입니다."
    ]);
    exit;
}

// 성별 값 검증
// in_array(값, 배열, strict) => 이 값이 배열 안에 있나 확인하는 PHP 기본 함수
// strict => 값뿐만 아니라 타입까지 똑같아야 통과
// $userGender 의 값이 [0, 1]안에 있으면 true, 아니면 false
// !in_array($userGender, ['0', '1'], true) => $userGender 의 값이 문자열 ['0', '1']중 하나가 아니면 아래 코드를 출력해라
if (!in_array($userGender, ['0', '1'], true)) {
    echo json_encode([
        "status" => "fail",
        "message" => "성별 값이 올바르지 않습니다."
    ]);
    exit;
}

// 닉네임 길이, 형식 검증
if (!preg_match('/^[가-힣a-zA-Z0-9]{2,20}$/u', $nickname)) {
    echo json_encode([
        "status" => "fail",
        "message" => "닉네임은 2~20자, 한글/영문/숫자만 가능합니다."
    ]);
    exit;
}

// 중복 id 체크 예외 처리
$sql = "SELECT userEmail, userPhone, nickname FROM users WHERE userEmail = ? OR userPhone = ? OR nickname = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $userEmail, $userPhone, $nickname);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    if ($row['userEmail'] === $userEmail) {
        $message = "이미 사용 중인 이메일입니다.";
    } else if ($row['userPhone'] === $userPhone) {
        $message = "이미 등록된 휴대폰 번호입니다.";
    } else if ($row['nickname'] === $nickname) {
        $message = "이미 사용 중인 닉네임입니다.";
    }else {
        $message = "알 수 없는 오류가 발생했습니다.";
    }

    echo json_encode([
        "status" => "fail",
        "message" => $message
    ]);

    $conn->close();
    $stmt->close();
    exit;
}

// insert
$userGender = (int)$userGender;
$sql2 = "INSERT INTO users(userEmail, userPw, userGender, userPhone, userBirth, nickname) VALUES (?,?,?,?,?,?)";
$stmt = $conn->prepare($sql2);
$stmt->bind_param("ssisss", $userEmail, $userPw, $userGender, $userPhone, $userBirth, $nickname);

// 실행 후 결과 확인
$response = [];
if($stmt->execute()){
    // insert 성공
    $response["status"] = "success";
    $response["message"] = "회원가입 완료";
}else{
    // insert 실패
    $response["status"] = "fail";
    $response["message"] = "회원가입 실패" . $stmt->error;
}

// 클라이언트에서 JSON으로 결과 전송
echo json_encode($response);

// 연결 종료
$stmt->close();
$conn->close();

?>