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
      $('.haikei5_sp').removeClass('none');
      $('.haikei6_sp').addClass('none');
      $('.haikei11_sp').addClass('none');
      $('.haikei12_sp').addClass('none');
      $('.haikei13_sp').addClass('none');
    } else if (scroll < 2000) {
      $('.haikei5_sp').addClass('none');
      $('.haikei6_sp').removeClass('none');
      $('.haikei11_sp').addClass('none');
      $('.haikei12_sp').addClass('none');
      $('.haikei13_sp').addClass('none');
    } else if (scroll < 3000) {
      $('.haikei5_sp').addClass('none');
      $('.haikei6_sp').addClass('none');
      $('.haikei11_sp').removeClass('none');
      $('.haikei13_sp').addClass('none');
      $('.haikei12_sp').addClass('none');
    } else if (scroll < 4000) {
      $('.haikei5_sp').addClass('none');
      $('.haikei6_sp').addClass('none');
      $('.haikei11_sp').addClass('none');
      $('.haikei12_sp').removeClass('none');
      $('.haikei13_sp').addClass('none');
    } else {
      $('.haikei5_sp').addClass('none');
      $('.haikei6_sp').addClass('none');
      $('.haikei11_sp').addClass('none');
      $('.haikei12_sp').addClass('none');
      $('.haikei13_sp').removeClass('none');

    }

    if (scroll < 1000) {
      $('.service_title_sp').css({top: '700px'});
      $('#golf_wear_sp').css({top: '700px'});
      $('#graphic_design_sp').css({top: '700px'});
      $('#ec_site_sp').css({top: '700px'});
      $('#video_production_sp').css({top: '700px'});
    } else {
      $('.service_title_sp').css({top: '0px'});
      $('#golf_wear_sp').css({top: '80px'});
      $('#graphic_design_sp').css({top: '130px'});
      $('#ec_site_sp').css({top: '180px'});
      $('#video_production_sp').css({top: '230px'});
    }

    if (scroll < 4000) {
      $('.link_sp1').css({top: '700px'});
      $('.link_sp2').css({top: '700px'});
      $('.link_sp3').css({top: '700px'});
      $('.link_sp4').css({top: '700px'});
    } else {
      $('.link_sp1').css({top: '50px'});
      $('.link_sp2').css({top: '100px'});
      $('.link_sp3').css({top: '150px'});
      $('.link_sp4').css({top: '200px'});
    }

  });

  $('#menu_company').on('click', function () {
    document.documentElement.scrollTop = 500;
  });

  $('#menu_service').on('click', function () {
    document.documentElement.scrollTop = 1500;
  });

  $('#menu_news').on('click', function () {
    document.documentElement.scrollTop = 2500;
  });

  $('#menu_contact').on('click', function () {
    document.documentElement.scrollTop = 3500;
  });

  $('#menu_link').on('click', function () {
    document.documentElement.scrollTop = 4500;
  });

  $('#golf_wear_sp').on('click', function () {
    $('.haikei6_sp').addClass('none');
    $('.haikei7_sp').removeClass('none');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
  });

  $('#graphic_design_sp').on('click', function () {
    $('.haikei6_sp').addClass('none');
    $('.haikei8_sp').removeClass('none');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
  });

  $('#ec_site_sp').on('click', function () {
    $('.haikei6_sp').addClass('none');
    $('.haikei9_sp').removeClass('none');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
  });

  $('#video_production_sp').on('click', function () {
    $('.haikei6_sp').addClass('none');
    $('.haikei10_sp').removeClass('none');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
  });

  $('.service_back_btn_sp').on('click', function () {
    $('.haikei6_sp').removeClass('none');
    $('.haikei7_sp').addClass('none');
    $('.haikei8_sp').addClass('none');
    $('.haikei9_sp').addClass('none');
    $('.haikei10_sp').addClass('none');
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
      $('.news_back_btn').addClass('none');
    } else {
      console.log(data)
    }
  }).fail(function(XMLHttpRequest, status, e){
    alert("??????????????????????????????????????????");
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
      $('.news_back_btn_sp').removeClass('none');
    } else {
      console.log(data)
    }
  }).fail(function (XMLHttpRequest, status, e) {
    alert("??????????????????????????????????????????");
    console.log(e)
  });
}

$(function() {  
  $('.hamburger').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.global_menu_sp').removeClass('none');       
      $('.global_menu_sp').addClass('menu_active');
    } else {
      $('.global_menu_sp').removeClass('menu_active');
      $('.global_menu_sp').addClass('none');   
    }
  });
});