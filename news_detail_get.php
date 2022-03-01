<?php
try {
    $id = $_GET['id'];
    $pdo = new PDO('mysql:host=localhost;dbname=kurage;charset=utf8', 'root', '');
    $qry = $pdo->prepare('select * from news WHERE id = '. $id);
    $qry->execute();
    $html = '';
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