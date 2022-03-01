$(function () {
  console.log($(window).scrollTop());

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
    if ($(window).scrollTop() > 5) {
      $('.logo1').removeClass('fade10dr12dl');
      $('.logo1').addClass('blur3');
      $('.scroll').removeClass('fade5dr20dl');
      $('.scroll').addClass('blur3');
      $('.haikei5_sp').addClass('fade5dr20dl');
      $('.haikei5_sp').removeClass('opa5');
      $('.left1').addClass('blur4');
      $('.left2').addClass('anim1');
      $('.left3').addClass('anim2');
      $('.left4').addClass('anim3');
      $('.left5').addClass('anim4');
      $('.left6').addClass('anim5');
    }
  });

  // $('.left2').on('click', function () {
  //   $('.haikei6').addClass('opa5');
  //   $('.haikei7').addClass('opa5');
  //   $('.haikei8').addClass('opa5');
  //   $('.haikei9').addClass('opa5');
  //   $('.haikei10').addClass('opa5');
  //   $('.haikei11').addClass('opa5');
  //   $('.haikei12').addClass('opa5');
  //   $('.haikei13').addClass('opa5');
  //   $('.haikei5').removeClass('opa5');
  //   $('.right_company').addClass('fade15dr0dl');
  //   $('.right_sevice').removeClass('fade15dr0dl');
  //   $('.right_news').removeClass('fade15dr0dl');
  //   $('.right_contact').removeClass('fade15dr0dl');
  //   $('.right_link').removeClass('fade15dr0dl');
  //   $('#page1').addClass('bg_white');
  //   $('#page1').removeClass('bg_blue');
  //   $('#page1').removeClass('bg_green');
  //   $('#page1').removeClass('bg_red');
  //   $('#page1').removeClass('bg_black');
  //   var elements = document.getElementsByClassName('button_p');
  //   for (i = 0; i < elements.length; i++) {
  //     elements[i].style.color = "#262626";
  //   }
  // });

  // $('.left3').on('click', function () {
  //   $('.haikei5').addClass('opa5');
  //   $('.haikei7').addClass('opa5');
  //   $('.haikei8').addClass('opa5');
  //   $('.haikei9').addClass('opa5');
  //   $('.haikei10').addClass('opa5');
  //   $('.haikei11').addClass('opa5');
  //   $('.haikei12').addClass('opa5');
  //   $('.haikei13').addClass('opa5');
  //   $('.haikei6').removeClass('opa5');
  //   $('.right_company').removeClass('fade15dr0dl');
  //   $('.right_sevice').addClass('fade15dr0dl');
  //   $('.right_news').removeClass('fade15dr0dl');
  //   $('.right_contact').removeClass('fade15dr0dl');
  //   $('.right_link').removeClass('fade15dr0dl');
  //   $('#page1').removeClass('bg_white');
  //   $('#page1').addClass('bg_blue');
  //   $('#page1').removeClass('bg_green');
  //   $('#page1').removeClass('bg_red');
  //   $('#page1').removeClass('bg_black');
  //   var elements = document.getElementsByClassName('button_p');
  //   for (i = 0; i < elements.length; i++) {
  //     elements[i].style.color = "#FFFFFF";
  //   }
  // });

  // $('.blue_right1').on('click', function () {
  //   $('.haikei6').addClass('opa5');
  //   $('.haikei8').addClass('opa5');
  //   $('.haikei9').addClass('opa5');
  //   $('.haikei10').addClass('opa5');
  //   $('.haikei11').addClass('opa5');
  //   $('.haikei12').addClass('opa5');
  //   $('.haikei13').addClass('opa5');
  //   $('.haikei7').removeClass('opa5');
  //   $('.right_company').removeClass('fade15dr0dl');
  //   $('.right_sevice').addClass('fade15dr0dl');
  //   $('.right_news').removeClass('fade15dr0dl');
  //   $('.right_contact').removeClass('fade15dr0dl');
  //   $('.right_link').removeClass('fade15dr0dl');
  // });

  // $('.blue_right2').on('click', function () {
  //   $('.haikei6').addClass('opa5');
  //   $('.haikei7').addClass('opa5');
  //   $('.haikei9').addClass('opa5');
  //   $('.haikei10').addClass('opa5');
  //   $('.haikei11').addClass('opa5');
  //   $('.haikei12').addClass('opa5');
  //   $('.haikei13').addClass('opa5');
  //   $('.haikei8').removeClass('opa5');
  //   $('.right_company').removeClass('fade15dr0dl');
  //   $('.right_sevice').addClass('fade15dr0dl');
  //   $('.right_news').removeClass('fade15dr0dl');
  //   $('.right_contact').removeClass('fade15dr0dl');
  //   $('.right_link').removeClass('fade15dr0dl');
  // });

  // $('.blue_right3').on('click', function () {
  //   $('.haikei6').addClass('opa5');
  //   $('.haikei7').addClass('opa5');
  //   $('.haikei8').addClass('opa5');
  //   $('.haikei10').addClass('opa5');
  //   $('.haikei11').addClass('opa5');
  //   $('.haikei12').addClass('opa5');
  //   $('.haikei13').addClass('opa5');
  //   $('.haikei9').removeClass('opa5');
  //   $('.right_company').removeClass('fade15dr0dl');
  //   $('.right_sevice').addClass('fade15dr0dl');
  //   $('.right_news').removeClass('fade15dr0dl');
  //   $('.right_contact').removeClass('fade15dr0dl');
  //   $('.right_link').removeClass('fade15dr0dl');
  // });

  // $('.blue_right4_2').on('click', function () {
  //   $('.haikei6').addClass('opa5');
  //   $('.haikei7').addClass('opa5');
  //   $('.haikei8').addClass('opa5');
  //   $('.haikei9').addClass('opa5');
  //   $('.haikei11').addClass('opa5');
  //   $('.haikei12').addClass('opa5');
  //   $('.haikei13').addClass('opa5');
  //   $('.haikei10').removeClass('opa5');
  //   $('.right_company').removeClass('fade15dr0dl');
  //   $('.right_sevice').addClass('fade15dr0dl');
  //   $('.right_news').removeClass('fade15dr0dl');
  //   $('.right_contact').removeClass('fade15dr0dl');
  //   $('.right_link').removeClass('fade15dr0dl');
  // });

  // $('.blue2_right2').on('click', function () {
  //   $('.haikei5').addClass('opa5');
  //   $('.haikei7').addClass('opa5');
  //   $('.haikei8').addClass('opa5');
  //   $('.haikei9').addClass('opa5');
  //   $('.haikei10').addClass('opa5');
  //   $('.haikei11').addClass('opa5');
  //   $('.haikei12').addClass('opa5');
  //   $('.haikei13').addClass('opa5');
  //   $('.haikei6').removeClass('opa5');
  //   $('.right_company').removeClass('fade15dr0dl');
  //   $('.right_sevice').addClass('fade15dr0dl');
  //   $('.right_news').removeClass('fade15dr0dl');
  //   $('.right_contact').removeClass('fade15dr0dl');
  //   $('.right_link').removeClass('fade15dr0dl');
  // });

  // $('.left4').on('click', function () {
  //   $('.haikei5').addClass('opa5');
  //   $('.haikei6').addClass('opa5');
  //   $('.haikei7').addClass('opa5');
  //   $('.haikei8').addClass('opa5');
  //   $('.haikei9').addClass('opa5');
  //   $('.haikei10').addClass('opa5');
  //   $('.haikei12').addClass('opa5');
  //   $('.haikei13').addClass('opa5');
  //   $('.haikei11').removeClass('opa5');
  //   $('.right_bg').addClass('fade15dr0dl');
  //   $('.right_company').removeClass('fade15dr0dl');
  //   $('.right_sevice').removeClass('fade15dr0dl');
  //   $('.right_news').addClass('fade15dr0dl');
  //   $('.right_contact').removeClass('fade15dr0dl');
  //   $('.right_link').removeClass('fade15dr0dl');
  //   $('#page1').removeClass('bg_white');
  //   $('#page1').removeClass('bg_blue');
  //   $('#page1').addClass('bg_green');
  //   $('#page1').removeClass('bg_red');
  //   $('#page1').removeClass('bg_black');
  //   var elements = document.getElementsByClassName('button_p');
  //   for (i = 0; i < elements.length; i++) {
  //     elements[i].style.color = "#FFFFFF";
  //   }
  // });

  // $('.left5').on('click', function () {
  //   $('.haikei5').addClass('opa5');
  //   $('.haikei6').addClass('opa5');
  //   $('.haikei7').addClass('opa5');
  //   $('.haikei8').addClass('opa5');
  //   $('.haikei9').addClass('opa5');
  //   $('.haikei10').addClass('opa5');
  //   $('.haikei11').addClass('opa5');
  //   $('.haikei13').addClass('opa5');
  //   $('.haikei12').removeClass('opa5');
  //   $('.right_bg').addClass('fade15dr0dl');
  //   $('.right_company').removeClass('fade15dr0dl');
  //   $('.right_sevice').removeClass('fade15dr0dl');
  //   $('.right_news').removeClass('fade15dr0dl');
  //   $('.right_contact').addClass('fade15dr0dl');
  //   $('.right_link').removeClass('fade15dr0dl');
  //   $('#page1').removeClass('bg_white');
  //   $('#page1').removeClass('bg_blue');
  //   $('#page1').removeClass('bg_green');
  //   $('#page1').addClass('bg_red');
  //   $('#page1').removeClass('bg_black');
  //   var elements = document.getElementsByClassName('button_p');
  //   for (i = 0; i < elements.length; i++) {
  //     elements[i].style.color = "#FFFFFF";
  //   }
  // });

  // $('.left6').on('click', function () {
  //   $('.haikei5').addClass('opa5');
  //   $('.haikei6').addClass('opa5');
  //   $('.haikei7').addClass('opa5');
  //   $('.haikei8').addClass('opa5');
  //   $('.haikei9').addClass('opa5');
  //   $('.haikei10').addClass('opa5');
  //   $('.haikei11').addClass('opa5');
  //   $('.haikei12').addClass('opa5');
  //   $('.haikei13').removeClass('opa5');
  //   $('.right_bg').addClass('fade15dr0dl');
  //   $('.right_company').removeClass('fade15dr0dl');
  //   $('.right_sevice').removeClass('fade15dr0dl');
  //   $('.right_news').removeClass('fade15dr0dl');
  //   $('.right_contact').removeClass('fade15dr0dl');
  //   $('.right_link').addClass('fade15dr0dl');
  //   $('#page1').removeClass('bg_white');
  //   $('#page1').removeClass('bg_blue');
  //   $('#page1').removeClass('bg_green');
  //   $('#page1').removeClass('bg_red');
  //   $('#page1').addClass('bg_black');
  //   var elements = document.getElementsByClassName('button_p');
  //   for (i = 0; i < elements.length; i++) {
  //     elements[i].style.color = "#FFFFFF";
  //   }
  // });
});

