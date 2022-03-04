<?php
try {
    $page = $_GET['page'];
    $pdo = new PDO('mysql:host=localhost;dbname=kurage;charset=utf8', 'root', '');
    $qry = $pdo->prepare('select * from news LIMIT 0, 10');
    $qry->execute();
    $html = '';
    foreach($qry->fetchAll() as $row){
        $html .= '<a class="news_a_sp" href="javascript:clickNewsSp('. $row["id"] .')">
        <div class="news_column_sp">
          <div class="news_date_sp">' . $row["created_at"] . '</div>
          <div class="news_title_sp">' . $row["title"] . '</div>
          <div class="news_line_sp"></div></div></a>';
    }
    echo json_encode($html);
} catch (Exception $e) {
    echo json_encode($e->getMessage());
}
?>