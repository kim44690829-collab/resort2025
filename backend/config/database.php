<?php
//CORS 설정(React에서 접근 가능하도록 지정)
// header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// OPTIONS 요청 처리 (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
http_response_code(200);
exit();
}

// 데이터베이스 연결정보
define('db_host', 'localhost');
define('db_user', 'root');
define('db_pass', '');
define('db_name', 'resort'); // php의 스키마 이름

// 데이터 베이스 연결 함수 생성
function getDBConnection(){
    $conn = new mysqli(db_host, db_user, db_pass, db_name);

    // 연결 오류 체크 코드
    if($conn->connect_error){
        die(json_encode([
            "status" => "fail",
            "message" => "DB 연결 실패".$conn->connect_error
        ]));
    }
    // utf-8 설정 : 한글 깨짐 현상 방지
    $conn->set_charset('utf8mb4');
    return $conn;
}

// 연결 객체 생성
$conn = getDBConnection();

?>