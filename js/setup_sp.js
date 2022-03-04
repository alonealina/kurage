$(function () {

  setInterval(function () {
    $('.haikei1_sp').removeClass('fade15dr0dl blur1');
    setTimeout(function () {
      $('.haikei1_sp').addClass('blur1')
    }, 6500);
  }, 11500);
  setInterval(function () {
    $('.haikei2_sp').removeClass('fade10dr0dl blur2');
    setTimeout(function () {
      $('.haikei2_sp').addClass('blur2')
    }, 2300);
  }, 8400);
  setInterval(function () {
    $('.haikei2_sp').removeClass('fade10dr0dl blur2');
    setTimeout(function () {
      $('.haikei2_sp').addClass('blur2')
    }, 3900);
  }, 6000);

  $(window).scroll(function () {
    scroll = $(window).scrollTop();
    console.log(scroll);

    if (scroll > 5) {
      $('.logo1').removeClass('fade10dr12dl');
      $('.logo1').addClass('blur3');
      $('.scroll').removeClass('fade5dr20dl');
      $('.scroll').addClass('blur3');
    }

    if (scroll < 1000) {
      $('.haikei5_sp').removeClass('opa5');
      $('.haikei6_sp').addClass('opa5');
    } else if (scroll < 2000) {
      $('.haikei5_sp').addClass('opa5');
      $('.haikei6_sp').removeClass('opa5');
      $('.haikei11_sp').addClass('opa5');
      $('.service_title_sp').css({top: '0px'});
      $('#golf_wear_sp').css({top: '80px'});
      $('#graphic_design_sp').css({top: '130px'});
      $('#ec_site_sp').css({top: '180px'});
      $('#video_production_sp').css({top: '230px'});
    } else if (scroll < 3000) {
      $('.haikei6_sp').addClass('opa5');
      $('.haikei11_sp').removeClass('opa5');
      $('.haikei12_sp').addClass('opa5');
    } else if (scroll < 4000) {
      $('.haikei11_sp').addClass('opa5');
      $('.haikei12_sp').removeClass('opa5');
    } 

  });

  $('#golf_wear_sp').on('click', function () {
    $('.haikei6_sp').addClass('opa5');
    $('.haikei7_sp').removeClass('opa5');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
  });

  $('#graphic_design_sp').on('click', function () {
    $('.haikei6_sp').addClass('opa5');
    $('.haikei8_sp').removeClass('opa5');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
  });

  $('#ec_site_sp').on('click', function () {
    $('.haikei6_sp').addClass('opa5');
    $('.haikei9_sp').removeClass('opa5');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
  });

  $('#video_production_sp').on('click', function () {
    $('.haikei6_sp').addClass('opa5');
    $('.haikei10_sp').removeClass('opa5');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
  });

  $('.service_back_btn_sp').on('click', function () {
    $('.haikei6_sp').removeClass('opa5');
    $('.haikei7_sp').addClass('opa5');
    $('.haikei8_sp').addClass('opa5');
    $('.haikei9_sp').addClass('opa5');
    $('.haikei10_sp').addClass('opa5');
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.removeEventListener('mousewheel', disableScroll, { passive: false });
  });

  function disableScroll(event) {
    event.preventDefault();
  }

  let page = 1;

  $.ajax({
    type: "GET",
    url: "news_list_get_sp.php",
    data: { "page" : page },
    dataType : "json",
  }).done(function(data){
    if (data) {
      $('.news_div_sp').html(data);
      $('.news_back_btn').addClass('opa5');
    } else {
      console.log(data)
    }
  }).fail(function(XMLHttpRequest, status, e){
    alert("ニュースの取得に失敗しました");
    console.log(e)
  });



});


function clickNewsSp(id) {
  $.ajax({
    type: "GET",
    url: "news_detail_get_sp.php",
    data: {
      "id": id
    },
    dataType: "json",
  }).done(function (data) {
    if (data) {
      $('.news_div_sp').html(data);
      $('.news_back_btn_sp').removeClass('opa5');
    } else {
      console.log(data)
    }
  }).fail(function (XMLHttpRequest, status, e) {
    alert("ニュースの取得に失敗しました");
    console.log(e)
  });
}