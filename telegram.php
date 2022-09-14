<?php

  /* https://api.telegram.org/bot5730680976:AAGTW54b7_qe12BYMhRRV6s9UVMo-mQhRKQ/getUpdates,
  где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

  $name = $_POST['user_name'];
  $phone = $_POST['user_phone'];
  $email = $_POST['user_email'];
  $text = $_POST['user_text'];
  $token = "5730680976:AAGTW54b7_qe12BYMhRRV6s9UVMo-mQhRKQ";
  $chat_id = "-696397730";
  $arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email:' => $email,
    'Текст: ' => $text
  );

  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

  if ($sendToTelegram) {
    header('Location: thank-you.html');
    echo "yes";
  } else {
    echo "Error";
  }
?>