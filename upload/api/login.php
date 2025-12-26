<?php

// CORS 허용
header("Access-Control-Allow-Origin: http://183.110.224.225");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// OPTIONS 요청 처리 (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include '../config/database.php';

// LoginForm.jsx에서 userid, userpw를 입력받아서 기존 DB에 존재하는지 확인 후 로그인 성공 / 실패
// php://input를 통해 읽고 json_decode로 배열로 변환
// 변환한 데이터를 담을 변수를 생성 -> $변수이름
$data = json_decode(file_get_contents("php://input"),true);

// 가져온 userid와 userpw를 담을 변수 생성
$userEmail = $data['userEmail'];
$userPw = $data['userPw'];

// 예외처리 => 빈값 체크
// empty(value) => value가 비어있으면 true, 아니면 false
if(empty($userEmail) || empty($userPw)){
    echo json_encode([
        'status' => 'fail',
        'message' => '아이디와 비밀번호를 모두 입력해야합니다.'
    ]);
    exit;
}

// DB에서 사용자 정보 조회
$sql = 'SELECT nickname FROM users WHERE userEmail = ? AND userPw = ? LIMIT 1';

// DB에 연결해야 SQL문을 실행할 수 있다.
$stmt = $conn->prepare($sql);
// 바인딩
// bind_param('데이터 타입', 입력받은 값)
$stmt->bind_param('ss', $userEmail, $userPw);

// sql문 실행
$stmt->execute();

// select문은 결과값을 result에 담아야함 (select만)
$result = $stmt->get_result();

// 결과를 변수에 담는다
$response = [];

// num_rows => 행의 개수 출력 매서드
if($result->num_rows >= 1){

    $row = $result->fetch_assoc();

    // 로그인할 이메일, pw가 존재할 때
    $response['status'] = 'success';
    $response['message'] = '로그인 성공';
    // 로그인 성공시 nickname을 $response['nickname']에 담아야 nickname을 화면에 출력할 수 있음
    $response['nickname'] = $row['nickname'];;
}else{
    // 로그인할 이메일, pw가 존재하지 않을때
    $response['status'] = 'fail';
    $response['message'] = '아이디 또는 비밀번호가 일치하지 않습니다.';
}
// react의 오브젝트 배열로 변환 => json_encode($response)
// {'status' : 'success', 'message' : '로그인 성공'}
echo json_encode($response);
// DB를 연결하고 SQL문을 사용했기때문에 반납한다.
$stmt->close();
$conn->close();

?>