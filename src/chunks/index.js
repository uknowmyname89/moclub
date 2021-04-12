import $ from 'jquery'
import slick from 'slick-carousel'
require('../scss/styles.scss');

import 'js-datepicker/src/datepicker';
import 'js-datepicker/dist/datepicker.min.css';
import datepicker from 'js-datepicker'


$(function () {
  if($('.datepicker').length){
    const picker = datepicker('.datepicker', {
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value
      },
      position: 'br',
      customDays: ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'],
      customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    });
  };
  $('.pic-slider').each(function(){
    $(this).slick({
      dots: false,
      infinite: true,
      autoplay: true,
      prevArrow: $('.pic-slider-prev'),
      nextArrow: $('.pic-slider-next'),
      speed: 300,
      slidesToShow: 1,
      arrows : true,
      slidesToScroll: 1,
    })
  });
  $('.act-slider').each(function(){
    $(this).slick({
      dots: false,
      infinite: true,
      autoplay: true,
      prevArrow: $('.act-slider-prev'),
      nextArrow: $('.act-slider-next'),
      speed: 300,
      slidesToShow: 3,
      arrows : true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    })
  });
  $('.four-slider').each(function(){
    var obj = $(this);
    $(this).slick({
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 4,
      arrows : false,
      slidesToScroll: 4,
      appendDots: obj.closest('.container').find('.inner-slider-dots'),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    })
  });
  $('.rest-slider').each(function(){
    $(this).slick({
      centerMode: true,
      slidesToShow: 3,
      centerPadding: '40px',
      dots: false,
      arrows: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 2420,
          settings: {
            centerPadding: '15%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1420,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        },
      ]
    })
  });
});
