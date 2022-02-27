<?php
try {
    $page = $_GET['page'];
    $pdo = new PDO('mysql:host=localhost;dbname=provision;charset=utf8', 'provision', 'admin');
    $qry = $pdo->prepare('select * from news LIMIT 0, 10');
    $qry->execute();
    $html = '<p class="news_right2"><span style="position:relative;right:555px;">News</span></p>';
    foreach($qry->fetchAll() as $row){
        $html .= '<a class="news_a" href="javascript:clickNews('. $row["id"] .');"><p class="news_right3">' . $row["created_at"] . '<span style="position:relative;left:50px;">' . $row["title"] . '</span></p></a>';
    }
    echo json_encode($html);
} catch (Exception $e) {
    echo json_encode($e->getMessage());
}
?>