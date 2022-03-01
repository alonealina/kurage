$(function(){
  $("#news_button").on("click", function(event){
    let page = 1;

    $.ajax({
      type: "GET",
      url: "news_list_get.php",
      data: { "page" : page },
      dataType : "json",
    }).done(function(data){
      if (data) {
        console.log(data)
        $('.news_div').html(data);
        $('.news_back_btn').addClass('opa5');
      } else {
        console.log(data)
      }
    }).fail(function(XMLHttpRequest, status, e){
      alert("ニュースの取得に失敗しました");
      console.log(e)
    });
  });
});

$(function(){
  $(".news_back_btn").on("click", function(event){
    let page = 1;

    $.ajax({
      type: "GET",
      url: "news_list_get.php",
      data: { "page" : page },
      dataType : "json",
    }).done(function(data){
      if (data) {
        console.log(data)
        $('.news_div').html(data);
        $('.news_back_btn').addClass('opa5');
      } else {
        console.log(data)
      }
    }).fail(function(XMLHttpRequest, status, e){
      alert("ニュースの取得に失敗しました");
      console.log(e)
    });
  });
});