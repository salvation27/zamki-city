$(document).ready(function(){
  $('[data-submit]').on('click', function(e){
      e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
              var re = new RegExp(regexp);
              return this.optional(element) || re.test(value);
          },
          "Please check your input."
      );
  function valEl(el){
     
          el.validate({
        rules:{
          tel:{
            required:true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name:{
            required:true
          },
          email:{
            required:true,
            email:true
          }
        },
          messages:{
            tel:{
                required:'Поле обязательно для заполнения',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Поле обязательно для заполнения',
            },
            email:{
              required:'Поле обязательно для заполнения', 
              email:'Неверный формат E-mail'
            }
        },            
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch($formId){
            case'goToNewPage':
              $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                  })
                  .always(function (response) {  
                      //ссылка на страницу "спасибо" - редирект
                      location.href='https://wayup.in/lm/landing-page-marathon/success';
                      //отправка целей в Я.Метрику и Google Analytics
                      ga('send', 'event', 'masterklass7', 'register');
          yaCounter27714603.reachGoal('lm17lead');
              });
          break;        
          case'popupResult':
            $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize(),
                })
                .always(function (response) {                    
                setTimeout(function (){
                 $('#loader').fadeOut();
                },800);
                setTimeout(function (){
                  $('#overlay').fadeIn();
                },100);
                $('#overlay').on('click', function(e) {
        $('#overlay').fadeOut();
    });
                    
            });
        break;          
        }       
return false; 
    }                           
  })
 }                        
     
              $('.js-form').each(function() {
                valEl($(this)); 
              });
    $('[data-scroll]').on('click', function(){
      $('html, body').animate({
            scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
        }, 2000);
        event.preventDefault();
    })             
   });




// таймер

   jQuery(function($){
   $("#phone").mask("+7(999) 999-9999");
   });





 jQuery(function($){
   $("#hone").mask("+7(999) 999-9999");
   });




 jQuery(function($){
   $("#viz_mas2").mask("+7(999) 999-9999");
   });
 
// цыфры для всплывающих окон в карточках

jQuery(function($){
   $("#d1").mask("+7(999) 999-9999");
   });
  
jQuery(function($){
   $("#d2").mask("+7(999) 999-9999");
   });

jQuery(function($){
   $("#d3").mask("+7(999) 999-9999");
   });


jQuery(function($){
   $("#d4").mask("+7(999) 999-9999");
   });

// цыфры для всплывающих окон в карточках

// цыфры для прайса цен
jQuery(function($){
   $("#p1").mask("+7(999) 999-9999");
   });
jQuery(function($){
   $("#p2").mask("+7(999) 999-9999");
   });

jQuery(function($){
   $("#p3").mask("+7(999) 999-9999");
   });

jQuery(function($){
   $("#p4").mask("+7(999) 999-9999");
   });




// цыфры для прайса цен


 // $(".menu_hidden").click(function(){
 //    $(".menu_menu").toggleClass("mobileMenu");
 //  });


 $(".menu_hidden").click(function(){
    $(".menu_menu").toggleClass("lef");
  });






$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});








// плавная прокрутка



$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2000, 'swing', function () {
 window.location.hash = target;
 });
 });



// слайдер


$('.single-item').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// модальное окно!!!!!!!!!!!!!!!! тут

$(function(){
  $('.arct').click(function(){
    $('#exampleModal').arcticmodal();
    
  });
});


//   $('button.popap').click(function() {
//     var parent = $(this).attr('data-parent');
//     var modal = $(this).attr('data-target')
//     $(modal).find('input[name=target]').val(parent);
//   })
// })

// mini сайдер
 $('.single-item').slick({
  dots: true,
 });



// гамбургер



// слайдер замков

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 7000,
 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




// форма


// slider
