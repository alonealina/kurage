$(function () {
  console.log($(window).scrollTop());

  setInterval(function () {
    $('.haikei1').removeClass('fade15dr0dl blur1');
    setTimeout(function () {
      $('.haikei1').addClass('blur1')
    }, 6500);
  }, 11500);
  setInterval(function () {
    $('.haikei2').removeClass('fade10dr0dl blur2');
    setTimeout(function () {
      $('.haikei2').addClass('blur2')
    }, 2300);
  }, 8400);
  setInterval(function () {
    $('.haikei2').removeClass('fade10dr0dl blur2');
    setTimeout(function () {
      $('.haikei2').addClass('blur2')
    }, 3900);
  }, 6000);

  $(window).scroll(function () {
    if ($(window).scrollTop() > 5) {
      $('.logo1').removeClass('fade10dr12dl');
      $('.logo1').addClass('blur3');
      $('.scroll').removeClass('fade5dr20dl');
      $('.scroll').addClass('blur3');
      $('.haikei4').removeClass('opa5');
      $('.left1').addClass('blur4');
      $('.left2').addClass('anim1');
      $('.left3').addClass('anim2');
      $('.left4').addClass('anim3');
      $('.left5').addClass('anim4');
      $('.left6').addClass('anim5');
    }
  });

  $('.left2').on('click', function () {
    $('.haikei6').addClass('opa5');
    $('.haikei7').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei11').addClass('opa5');
    $('.haikei12').addClass('opa5');
    $('.haikei13').addClass('opa5');
    $('.news_back_btn').addClass('opa5');
    $('.haikei5').removeClass('opa5');
    $('.right_company').addClass('fade15dr0dl');
    $('.right_service').removeClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
    $('input[id="profile"]').prop('checked', true);
    $('.company_line').addClass('company_width');
    $('.company_title').addClass('fade10dr10dl');
    $('.company_content').addClass('fade10dr15dl');
    $('.company_title').removeClass('company_mt');
    $('.company_content').removeClass('company_mt');

  });

  $('.left3').on('click', function () {
    $('.haikei5').addClass('opa5');
    $('.haikei7').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei11').addClass('opa5');
    $('.haikei12').addClass('opa5');
    $('.haikei13').addClass('opa5');
    $('.news_back_btn').addClass('opa5');
    $('.haikei6').removeClass('opa5');
    $('.right_company').removeClass('fade15dr0dl');
    $('.right_service').addClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
  });

  $('.left4').on('click', function () {
    $('.haikei5').addClass('opa5');
    $('.haikei6').addClass('opa5');
    $('.haikei7').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei12').addClass('opa5');
    $('.haikei13').addClass('opa5');
    $('.news_back_btn').addClass('opa5');
    $('.haikei11').removeClass('opa5');
    $('.right_bg').addClass('fade15dr0dl');
    $('.right_company').removeClass('fade15dr0dl');
    $('.right_service').removeClass('fade15dr0dl');
    $('.right_news').addClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
  });

  $('.left5').on('click', function () {
    $('.haikei5').addClass('opa5');
    $('.haikei6').addClass('opa5');
    $('.haikei7').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei11').addClass('opa5');
    $('.haikei13').addClass('opa5');
    $('.news_back_btn').addClass('opa5');
    $('.haikei12').removeClass('opa5');
    $('.right_company').removeClass('fade15dr0dl');
    $('.right_service').removeClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');

  });

  $('.left6').on('click', function () {
    $('.haikei5').addClass('opa5');
    $('.haikei6').addClass('opa5');
    $('.haikei7').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei11').addClass('opa5');
    $('.haikei12').addClass('opa5');
    $('.news_back_btn').addClass('opa5');
    $('.haikei13').removeClass('opa5');
    $('.right_bg').addClass('fade15dr0dl');
    $('.right_company').removeClass('fade15dr0dl');
    $('.right_service').removeClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').addClass('fade15dr0dl');
    $('.right_title_link').removeClass('opa5');
    
  });


  // SVG、ボタン
  $('.left2').on('click', function () {
    document.getElementById('logo_svg').style.fill = "#8890B9";
    document.getElementById('company_button').style.color = "#8890B9";
    document.getElementById('service_button').style.color = "#262626";
    document.getElementById('news_button').style.color = "#262626";
    document.getElementById('contact_button').style.color = "#262626";
    document.getElementById('link_button').style.color = "#262626";
  });
  $('.left3').on('click', function () {
    document.getElementById('logo_svg').style.fill = "#8DCFC9";
    document.getElementById('company_button').style.color = "#262626";
    document.getElementById('service_button').style.color = "#8DCFC9";
    document.getElementById('news_button').style.color = "#262626";
    document.getElementById('contact_button').style.color = "#262626";
    document.getElementById('link_button').style.color = "#262626";
  });
  $('.left4').on('click', function () {
    document.getElementById('logo_svg').style.fill = "#D196A3";
    document.getElementById('company_button').style.color = "#262626";
    document.getElementById('service_button').style.color = "#262626";
    document.getElementById('news_button').style.color = "#D196A3";
    document.getElementById('contact_button').style.color = "#262626";
    document.getElementById('link_button').style.color = "#262626";
  });
  $('.left5').on('click', function () {
    document.getElementById('logo_svg').style.fill = "#977FA4";
    document.getElementById('company_button').style.color = "#262626";
    document.getElementById('service_button').style.color = "#262626";
    document.getElementById('news_button').style.color = "#262626";
    document.getElementById('contact_button').style.color = "#977FA4";
    document.getElementById('link_button').style.color = "#262626";
  });
  $('.left6').on('click', function () {
    document.getElementById('logo_svg').style.fill = "#CCCCCC";
    document.getElementById('company_button').style.color = "#262626";
    document.getElementById('service_button').style.color = "#262626";
    document.getElementById('news_button').style.color = "#262626";
    document.getElementById('contact_button').style.color = "#262626";
    document.getElementById('link_button').style.color = "#CCCCCC";
  });


  // SERVICE内容
  $('.left2').on('click', function () {
    document.getElementById('golf_wear').style.top = "600px";
    document.getElementById('graphic_design').style.top = "600px";
    document.getElementById('ec_site').style.top = "600px";
    document.getElementById('video_production').style.top = "600px";
    $('#service_top_btn').removeClass('fade10dr15dl');
    $('#service_title1').removeClass('fade15dr0dl');
    $('#service_line1').removeClass('fade10dr0dl');
    $('#service_title2').removeClass('fade15dr0dl');
    $('#service_line2').removeClass('fade10dr0dl');
    $('#service_title3').removeClass('fade15dr0dl');
    $('#service_line3').removeClass('fade10dr0dl');
    $('#service_title4').removeClass('fade15dr0dl');
    $('#service_line4').removeClass('fade10dr0dl');
    document.getElementById('service_title1').style.marginTop = '100px'; 
    document.getElementById('service_line1').style.width = '0%';
    document.getElementById('service_title2').style.marginTop = '100px'; 
    document.getElementById('service_line2').style.width = '0%';
    document.getElementById('service_title3').style.marginTop = '100px'; 
    document.getElementById('service_line3').style.width = '0%';
    document.getElementById('service_title4').style.marginTop = '100px'; 
    document.getElementById('service_line4').style.width = '0%';
    $('.service_img').removeClass('fade10dr15dl');
    $('.blue2_right4').removeClass('fade10dr10dl');
    $('.service_back_btn').removeClass('fade10dr15dl');
  });
  $('.left3').on('click', function () {
    document.getElementById('golf_wear').style.top = "100px";
    document.getElementById('graphic_design').style.top = "200px";
    document.getElementById('ec_site').style.top = "300px";
    document.getElementById('video_production').style.top = "400px";
    $('#service_top_btn').removeClass('fade10dr15dl');
    $('#service_title1').removeClass('fade15dr0dl');
    $('#service_line1').removeClass('fade10dr0dl');
    $('#service_title2').removeClass('fade15dr0dl');
    $('#service_line2').removeClass('fade10dr0dl');
    $('#service_title3').removeClass('fade15dr0dl');
    $('#service_line3').removeClass('fade10dr0dl');
    $('#service_title4').removeClass('fade15dr0dl');
    $('#service_line4').removeClass('fade10dr0dl');
    document.getElementById('service_title1').style.marginTop = '100px'; 
    document.getElementById('service_line1').style.width = '0%';
    document.getElementById('service_title2').style.marginTop = '100px'; 
    document.getElementById('service_line2').style.width = '0%';
    document.getElementById('service_title3').style.marginTop = '100px'; 
    document.getElementById('service_line3').style.width = '0%';
    document.getElementById('service_title4').style.marginTop = '100px'; 
    document.getElementById('service_line4').style.width = '0%';
    $('.service_img').removeClass('fade10dr15dl');
    $('.blue2_right4').removeClass('fade10dr10dl');
    $('.service_back_btn').removeClass('fade10dr15dl');
  });
  $('.left4').on('click', function () {
    document.getElementById('golf_wear').style.top = "600px";
    document.getElementById('graphic_design').style.top = "600px";
    document.getElementById('ec_site').style.top = "600px";
    document.getElementById('video_production').style.top = "600px";
    $('#service_top_btn').removeClass('fade10dr15dl');
    $('#service_title1').removeClass('fade15dr0dl');
    $('#service_line1').removeClass('fade10dr0dl');
    $('#service_title2').removeClass('fade15dr0dl');
    $('#service_line2').removeClass('fade10dr0dl');
    $('#service_title3').removeClass('fade15dr0dl');
    $('#service_line3').removeClass('fade10dr0dl');
    $('#service_title4').removeClass('fade15dr0dl');
    $('#service_line4').removeClass('fade10dr0dl');
    document.getElementById('service_title1').style.marginTop = '100px'; 
    document.getElementById('service_line1').style.width = '0%';
    document.getElementById('service_title2').style.marginTop = '100px'; 
    document.getElementById('service_line2').style.width = '0%';
    document.getElementById('service_title3').style.marginTop = '100px'; 
    document.getElementById('service_line3').style.width = '0%';
    document.getElementById('service_title4').style.marginTop = '100px'; 
    document.getElementById('service_line4').style.width = '0%';
    $('.service_img').removeClass('fade10dr15dl');
    $('.blue2_right4').removeClass('fade10dr10dl');
    $('.service_back_btn').removeClass('fade10dr15dl');
  });
  $('.left5').on('click', function () {
    document.getElementById('golf_wear').style.top = "600px";
    document.getElementById('graphic_design').style.top = "600px";
    document.getElementById('ec_site').style.top = "600px";
    document.getElementById('video_production').style.top = "600px";
    $('#service_top_btn').removeClass('fade10dr15dl');
    $('#service_title1').removeClass('fade15dr0dl');
    $('#service_line1').removeClass('fade10dr0dl');
    $('#service_title2').removeClass('fade15dr0dl');
    $('#service_line2').removeClass('fade10dr0dl');
    $('#service_title3').removeClass('fade15dr0dl');
    $('#service_line3').removeClass('fade10dr0dl');
    $('#service_title4').removeClass('fade15dr0dl');
    $('#service_line4').removeClass('fade10dr0dl');
    document.getElementById('service_title1').style.marginTop = '100px'; 
    document.getElementById('service_line1').style.width = '0%';
    document.getElementById('service_title2').style.marginTop = '100px'; 
    document.getElementById('service_line2').style.width = '0%';
    document.getElementById('service_title3').style.marginTop = '100px'; 
    document.getElementById('service_line3').style.width = '0%';
    document.getElementById('service_title4').style.marginTop = '100px'; 
    document.getElementById('service_line4').style.width = '0%';
    $('.service_img').removeClass('fade10dr15dl');
    $('.blue2_right4').removeClass('fade10dr10dl');
    $('.service_back_btn').removeClass('fade10dr15dl');
  });
  $('.left6').on('click', function () {
    document.getElementById('golf_wear').style.top = "600px";
    document.getElementById('graphic_design').style.top = "600px";
    document.getElementById('ec_site').style.top = "600px";
    document.getElementById('video_production').style.top = "600px";
    $('#service_top_btn').removeClass('fade10dr15dl');
    $('#service_title1').removeClass('fade15dr0dl');
    $('#service_line1').removeClass('fade10dr0dl');
    $('#service_title2').removeClass('fade15dr0dl');
    $('#service_line2').removeClass('fade10dr0dl');
    $('#service_title3').removeClass('fade15dr0dl');
    $('#service_line3').removeClass('fade10dr0dl');
    $('#service_title4').removeClass('fade15dr0dl');
    $('#service_line4').removeClass('fade10dr0dl');
    document.getElementById('service_title1').style.marginTop = '100px'; 
    document.getElementById('service_line1').style.width = '0%';
    document.getElementById('service_title2').style.marginTop = '100px'; 
    document.getElementById('service_line2').style.width = '0%';
    document.getElementById('service_title3').style.marginTop = '100px'; 
    document.getElementById('service_line3').style.width = '0%';
    document.getElementById('service_title4').style.marginTop = '100px'; 
    document.getElementById('service_line4').style.width = '0%';
    $('.service_img').removeClass('fade10dr15dl');
    $('.blue2_right4').removeClass('fade10dr10dl');
    $('.service_back_btn').removeClass('fade10dr15dl');
  });
  $('.blue_right1').on('click', function () {
    $('.haikei6').addClass('opa5');
    $('.haikei7').removeClass('opa5');
    $('#service_title1').addClass('fade15dr0dl');
    $('#service_line1').addClass('fade10dr0dl');
    document.getElementById('service_title1').style.marginTop = '0px'; 
    document.getElementById('service_line1').style.width = '100%';
    $('.service_img').addClass('fade10dr15dl');
    $('.blue2_right4').addClass('fade10dr10dl');
    $('.service_back_btn').addClass('fade10dr15dl');
  });
  $('.blue_right2').on('click', function () {
    $('.haikei6').addClass('opa5');
    $('.haikei8').removeClass('opa5');
    $('#service_title2').addClass('fade15dr0dl');
    $('#service_line2').addClass('fade10dr0dl');
    document.getElementById('service_title2').style.marginTop = '0px'; 
    document.getElementById('service_line2').style.width = '100%';
    $('.service_img').addClass('fade10dr15dl');
    $('.blue2_right4').addClass('fade10dr10dl');
    $('.service_back_btn').addClass('fade10dr15dl');
  });
  $('.blue_right3').on('click', function () {
    $('.haikei6').addClass('opa5');
    $('.haikei9').removeClass('opa5');
    $('#service_title3').addClass('fade15dr0dl');
    $('#service_line3').addClass('fade10dr0dl');
    document.getElementById('service_title3').style.marginTop = '0px'; 
    document.getElementById('service_line3').style.width = '100%';
    $('.service_img').addClass('fade10dr15dl');
    $('.blue2_right4').addClass('fade10dr10dl');
    $('.service_back_btn').addClass('fade10dr15dl');
  });
  $('.blue_right4').on('click', function () {
    $('.haikei6').addClass('opa5');
    $('.haikei10').removeClass('opa5');
    $('#service_title4').addClass('fade15dr0dl');
    $('#service_line4').addClass('fade10dr0dl');
    document.getElementById('service_title4').style.marginTop = '0px'; 
    document.getElementById('service_line4').style.width = '100%';
    $('.service_img').addClass('fade10dr15dl');
    $('.blue2_right4').addClass('fade10dr10dl');
    $('.service_back_btn').addClass('fade10dr15dl');
  });
  $('.service_back_btn').on('click', function () {
    $('.haikei7').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei6').removeClass('opa5');
    $('#service_title1').removeClass('fade15dr0dl');
    $('#service_line1').removeClass('fade10dr0dl');
    $('#service_title2').removeClass('fade15dr0dl');
    $('#service_line2').removeClass('fade10dr0dl');
    $('#service_title3').removeClass('fade15dr0dl');
    $('#service_line3').removeClass('fade10dr0dl');
    $('#service_title4').removeClass('fade15dr0dl');
    $('#service_line4').removeClass('fade10dr0dl');
    document.getElementById('service_title1').style.marginTop = '100px'; 
    document.getElementById('service_line1').style.width = '0%';
    document.getElementById('service_title2').style.marginTop = '100px'; 
    document.getElementById('service_line2').style.width = '0%';
    document.getElementById('service_title3').style.marginTop = '100px'; 
    document.getElementById('service_line3').style.width = '0%';
    document.getElementById('service_title4').style.marginTop = '100px'; 
    document.getElementById('service_line4').style.width = '0%';
    $('.service_img').removeClass('fade10dr15dl');
    $('.blue2_right4').removeClass('fade10dr10dl');
    $('.service_back_btn').removeClass('fade10dr15dl');
  });


  // NEWS内容、CONTACT内容、LINK内容
  $('.left2').on('click', function () {
    $('#news_title').removeClass('fade15dr0dl');
    $('#news_line').removeClass('fade10dr0dl');
    document.getElementById('news_title').style.marginTop = '100px'; 
    document.getElementById('news_line').style.width = '0%';
    $('.news_div').removeClass('fade10dr10dl');
    $('#news_top_btn').removeClass('fade10dr15dl');
    $('#contact_title').removeClass('fade15dr0dl');
    $('#contact_line').removeClass('fade10dr0dl');
    document.getElementById('contact_title').style.marginTop = '100px';
    document.getElementById('contact_line').style.width = '0%';
    $('.contact_div').removeClass('fade10dr10dl');
    $('#send_button').removeClass('fade10dr12dl');
    $('#contact_top_btn').removeClass('fade10dr15dl');
    document.getElementById('link_content').style.top = "50%";
  });
  $('.left3').on('click', function () {
    $('#news_title').removeClass('fade15dr0dl');
    $('#news_line').removeClass('fade10dr0dl');
    document.getElementById('news_title').style.marginTop = '100px'; 
    document.getElementById('news_line').style.width = '0%';
    $('.news_div').removeClass('fade10dr10dl');
    $('#news_top_btn').removeClass('fade10dr15dl');
    $('#contact_title').removeClass('fade15dr0dl');
    $('#contact_line').removeClass('fade10dr0dl');
    document.getElementById('contact_title').style.marginTop = '100px'; 
    document.getElementById('contact_line').style.width = '0%';
    $('.contact_div').removeClass('fade10dr10dl');
    $('#send_button').removeClass('fade10dr12dl');
    $('#contact_top_btn').removeClass('fade10dr15dl');
    document.getElementById('link_content').style.top = "50%";
  });
  $('.left4').on('click', function () {
    $('#news_title').addClass('fade15dr0dl');
    $('#news_line').addClass('fade10dr0dl');
    document.getElementById('news_title').style.marginTop = '0px'; 
    document.getElementById('news_line').style.width = '100%';
    $('.news_div').addClass('fade10dr10dl');
    $('#news_top_btn').addClass('fade10dr15dl');
    $('#contact_title').removeClass('fade15dr0dl');
    $('#contact_line').removeClass('fade10dr0dl');
    document.getElementById('contact_title').style.marginTop = '100px'; 
    document.getElementById('contact_line').style.width = '0%';
    $('.contact_div').removeClass('fade10dr10dl');
    $('#send_button').removeClass('fade10dr12dl');
    $('#contact_top_btn').removeClass('fade10dr15dl');
    document.getElementById('link_content').style.top = "50%";
  });
  $('.left5').on('click', function () {
    $('#news_title').removeClass('fade15dr0dl');
    $('#news_line').removeClass('fade10dr0dl');
    document.getElementById('news_title').style.marginTop = '100px'; 
    document.getElementById('news_line').style.width = '0%';
    $('.news_div').removeClass('fade10dr10dl');
    $('#news_top_btn').removeClass('fade10dr15dl');
    $('#contact_title').addClass('fade15dr0dl');
    $('#contact_line').addClass('fade10dr0dl');
    document.getElementById('contact_title').style.marginTop = '0px'; 
    document.getElementById('contact_line').style.width = '100%';
    $('.contact_div').addClass('fade10dr10dl');
    $('#send_button').addClass('fade10dr12dl');
    $('#contact_top_btn').addClass('fade10dr15dl');
    document.getElementById('link_content').style.top = "50%";
  });
  $('.left6').on('click', function () {
    $('#news_title').removeClass('fade15dr0dl');
    $('#news_line').removeClass('fade10dr0dl');
    document.getElementById('news_title').style.marginTop = '100px'; 
    document.getElementById('news_line').style.width = '0%';
    $('.news_div').removeClass('fade10dr10dl');
    $('#news_top_btn').removeClass('fade10dr15dl');
    $('#contact_title').removeClass('fade15dr0dl');
    $('#contact_line').removeClass('fade10dr0dl');
    document.getElementById('contact_title').style.marginTop = '100px'; 
    document.getElementById('contact_line').style.width = '0%';
    $('.contact_div').removeClass('fade10dr10dl');
    $('#send_button').removeClass('fade10dr12dl');
    $('#contact_top_btn').removeClass('fade10dr15dl');
    document.getElementById('link_content').style.top = "37%";
  });


});

function clickNews(id) {
  $.ajax({
    type: "GET",
    url: "news_detail_get.php",
    data: {
      "id": id
    },
    dataType: "json",
  }).done(function (data) {
    if (data) {
      $('.news_div').html(data);
      $('.news_back_btn').removeClass('opa5');
    } else {
      console.log(data)
    }
  }).fail(function (XMLHttpRequest, status, e) {
    alert("ニュースの取得に失敗しました");
    console.log(e)
  });
}