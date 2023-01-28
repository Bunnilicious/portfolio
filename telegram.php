<?php
ini_set('display_errors', 1);

  /* https://api.telegram.org/bot5730680976:AAGTW54b7_qe12BYMhRRV6s9UVMo-mQhRKQ/getUpdates,
  где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
  

  $name = $_COOKIE['user_name'];
  $phone = $_COOKIE['user_phone'];
  $email = $_COOKIE['user_email'];
  $text = $_COOKIE['user_text'];
  // echo ($_GET)
  // print_r ($_GET)
  // echo ($_POST)
  // print_r ($_POST)
  // $arr = ($_GET);
  // // $arr = var_dump(json_decode($_POST));

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

?>