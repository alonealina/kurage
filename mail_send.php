<?php
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $tel = $_POST['tel'];
    $content = $_POST['content'];
    $to = 'william_billl2008@yahoo.co.jp';
    $from = 'info@stock-star.net';
    $title = '【KURAGE】HPからお問い合わせが届きました。';
    $message = 'HPからお問い合わせが届きましたので、ご対応をお願い致します。'."\r\n"."\r\n".
        '-----------------------------------------------------------------'."\r\n".
        'お名前：'.$name."\r\n"."\r\n".
        'メールアドレス：'.$mail."\r\n"."\r\n".
        '電話番号：'.$tel."\r\n"."\r\n".
        'お問い合わせ内容：'.$content."\r\n"."\r\n".
        '-----------------------------------------------------------------';
    $header="From: {$from}\nReply-To: {$from}\nContent-Type: text/plain; 
        MIME-Version: 1.0; Content-Transfer-Encoding: 7bit; charset=ISO-2022-JP";
    mb_language("Japanese");
    mb_internal_encoding("UTF-8");
    $result = mb_send_mail($to, $title, $message, $header);
    echo json_encode($result);
    exit;