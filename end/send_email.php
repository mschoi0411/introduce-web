<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "ssh10006@naver.com"; // 받을 이메일 주소
  $subject = "새 연락처 메시지";
  $headers = "From: " . $email . "\r\n" .
             "Reply-To: " . $email . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  $body = "이름: $name\n" .
          "이메일: $email\n" .
          "메세지:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    echo "메세지가 성공적으로 전송되었습니다.";
  } else {
    echo "메세지 전송에 실패했습니다. 나중에 다시 시도해주세요.";
  }
}
?>