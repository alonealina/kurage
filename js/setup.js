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
    $('.right_sevice').removeClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
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
    $('.right_sevice').addClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
  });

  $('.blue_right1').on('click', function () {
    $('.haikei6').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei11').addClass('opa5');
    $('.haikei12').addClass('opa5');
    $('.haikei13').addClass('opa5');
    $('.haikei7').removeClass('opa5');
    $('.right_company').removeClass('fade15dr0dl');
    $('.right_sevice').addClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
  });

  $('.blue_right2').on('click', function () {
    $('.haikei6').addClass('opa5');
    $('.haikei7').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei11').addClass('opa5');
    $('.haikei12').addClass('opa5');
    $('.haikei13').addClass('opa5');
    $('.haikei8').removeClass('opa5');
    $('.right_company').removeClass('fade15dr0dl');
    $('.right_sevice').addClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
  });

  $('.blue_right3').on('click', function () {
    $('.haikei6').addClass('opa5');
    $('.haikei7').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei11').addClass('opa5');
    $('.haikei12').addClass('opa5');
    $('.haikei13').addClass('opa5');
    $('.haikei9').removeClass('opa5');
    $('.right_company').removeClass('fade15dr0dl');
    $('.right_sevice').addClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
  });

  $('.blue_right4_2').on('click', function () {
    $('.haikei6').addClass('opa5');
    $('.haikei7').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei11').addClass('opa5');
    $('.haikei12').addClass('opa5');
    $('.haikei13').addClass('opa5');
    $('.haikei10').removeClass('opa5');
    $('.right_company').removeClass('fade15dr0dl');
    $('.right_sevice').addClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
  });

  $('.blue2_right2').on('click', function () {
    $('.haikei5').addClass('opa5');
    $('.haikei7').addClass('opa5');
    $('.haikei8').addClass('opa5');
    $('.haikei9').addClass('opa5');
    $('.haikei10').addClass('opa5');
    $('.haikei11').addClass('opa5');
    $('.haikei12').addClass('opa5');
    $('.haikei13').addClass('opa5');
    $('.haikei6').removeClass('opa5');
    $('.right_company').removeClass('fade15dr0dl');
    $('.right_sevice').addClass('fade15dr0dl');
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
    $('.right_sevice').removeClass('fade15dr0dl');
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
    $('.right_sevice').removeClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_link').removeClass('fade15dr0dl');
    document.getElementById('right_title_link1').style.top = "0px";
    document.getElementById('right_title_link2').style.top = "0px";
    document.getElementById('right_title_link3').style.top = "0px";
    document.getElementById('right_title_link1').style.opacity = "0";
    document.getElementById('right_title_link2').style.opacity = "0";
    document.getElementById('right_title_link3').style.opacity = "0";

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
    $('.right_sevice').removeClass('fade15dr0dl');
    $('.right_news').removeClass('fade15dr0dl');
    $('.right_contact').removeClass('fade15dr0dl');
    $('.right_link').addClass('fade15dr0dl');
    $('.right_title_link').removeClass('opa5');
    document.getElementById('right_title_link1').style.top = "30px";
    document.getElementById('right_title_link2').style.top = "40px";
    document.getElementById('right_title_link3').style.top = "50px";
    document.getElementById('right_title_link1').style.opacity = "0.4";
    document.getElementById('right_title_link2').style.opacity = "0.7";
    document.getElementById('right_title_link3').style.opacity = "1.0";

    
  });

  // SVG、ボタン、NEWS内容、CONTACT内容、LINK内容
  $('.left2').on('click', function () {
    document.getElementById('logo_svg').style.fill = "#8890B9";
    document.getElementById('company_button').style.color = "#8890B9";
    document.getElementById('service_button').style.color = "#262626";
    document.getElementById('news_button').style.color = "#262626";
    document.getElementById('contact_button').style.color = "#262626";
    document.getElementById('link_button').style.color = "#262626";
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
    $('.top_btn').removeClass('fade10dr15dl');
    document.getElementById('link_content').style.top = "50%";
  });
  $('.left3').on('click', function () {
    document.getElementById('logo_svg').style.fill = "#8DCFC9";
    document.getElementById('company_button').style.color = "#262626";
    document.getElementById('service_button').style.color = "#8DCFC9";
    document.getElementById('news_button').style.color = "#262626";
    document.getElementById('contact_button').style.color = "#262626";
    document.getElementById('link_button').style.color = "#262626";
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
    $('.top_btn').removeClass('fade10dr15dl');
    document.getElementById('link_content').style.top = "50%";
  });
  $('.left4').on('click', function () {
    document.getElementById('logo_svg').style.fill = "#D196A3";
    document.getElementById('company_button').style.color = "#262626";
    document.getElementById('service_button').style.color = "#262626";
    document.getElementById('news_button').style.color = "#D196A3";
    document.getElementById('contact_button').style.color = "#262626";
    document.getElementById('link_button').style.color = "#262626";
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
    document.getElementById('logo_svg').style.fill = "#977FA4";
    document.getElementById('company_button').style.color = "#262626";
    document.getElementById('service_button').style.color = "#262626";
    document.getElementById('news_button').style.color = "#262626";
    document.getElementById('contact_button').style.color = "#977FA4";
    document.getElementById('link_button').style.color = "#262626";
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
    document.getElementById('logo_svg').style.fill = "#CCCCCC";
    document.getElementById('company_button').style.color = "#262626";
    document.getElementById('service_button').style.color = "#262626";
    document.getElementById('news_button').style.color = "#262626";
    document.getElementById('contact_button').style.color = "#262626";
    document.getElementById('link_button').style.color = "#CCCCCC";
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
      console.log(data)
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