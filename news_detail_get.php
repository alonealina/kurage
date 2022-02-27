<?php
try {
    $id = $_GET['id'];
    $pdo = new PDO('mysql:host=localhost;dbname=kurage;charset=utf8', 'kurage', 'admin');
    $qry = $pdo->prepare('select * from news WHERE id = '. $id);
    $qry->execute();
    $html = '<p class="news_right2"><span style="position:relative;right:555px;">News</span></p>';
    foreach($qry->fetchAll() as $row){
        $html .= '<p class="news_detail_date">'.$row["created_at"].'</p>'.
            '<p class="news_detail_title">'.$row["title"].'</p>'.
            '<p class="news_detail_content">'.$row["content"].'</p>';
    }
    echo json_encode($html);
} catch (Exception $e) {
    echo json_encode($e->getMessage());
}
?>