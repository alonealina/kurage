$(function(){
  $("#send_button").on("click", function(event){
    let name = $('input[name="name"]').val();
    let mail = $('input[name="mail"]').val();
    let tel = $('input[name="tel"]').val();
    let content = document.getElementById('mail_content').value;
    if (name.length === 0 || mail.length === 0 || content.length === 0) {
      alert("氏名・返信用メールアドレス・お問い合わせ内容を入力してください");
      return;
    }
    $('.contact_div').html('<br>送信中');
    $.ajax({
      type: "POST",
      url: "mail_send.php",
      data: { "name" : name, "mail" : mail, "tel" : tel, "content" : content },
      dataType : "json"
    }).done(function(data){
      if (data) {
        $('.contact_div').html('<br>送信が完了いたしました。<br>対応に3営業日いただいております。<br>もう少々お待ちいただけると幸いです。');
      } else {

      }
    }).fail(function(XMLHttpRequest, status, e){
      alert("メール送信に失敗しました");
    });
  });
});

$(function(){
  $("#send_button_sp").on("click", function(event){
    let name = $('input[name="name_sp"]').val();
    let mail = $('input[name="mail_sp"]').val();
    let tel = $('input[name="tel_sp"]').val();
    let content = document.getElementById('mail_content_sp').value;
    if (name.length === 0 || mail.length === 0 || content.length === 0) {
      alert("氏名・返信用メールアドレス・お問い合わせ内容を入力してください");
      return;
    }
    $('.contact_div_sp').html('<br>送信中');
    $.ajax({
      type: "POST",
      url: "mail_send.php",
      data: { "name" : name, "mail" : mail, "tel" : tel, "content" : content },
      dataType : "json"
    }).done(function(data){
      if (data) {
        $('.contact_div_sp').html('<br>送信が完了いたしました。<br>対応に3営業日いただいております。<br>もう少々お待ちいただけると幸いです。');
      } else {

      }
    }).fail(function(XMLHttpRequest, status, e){
      alert("メール送信に失敗しました");
    });
  });
});