import $ from 'jquery'
import ApexCharts from 'ApexCharts'
import daterangepicker from 'daterangepicker'
import circleProgress from 'jquery-circle-progress'
import slick from 'slick-carousel'
require('../scss/styles.scss');


$(function () {
  var options1 = {
    chart: {
      type: "line",
      height: 44,
      sparkline: {
        enabled: !0
      }
    },
    colors: ["#F6B021"],
    stroke: {
      width: 3,
      curve: "smooth"
    },
    markers: {
      size: 0
    },
    tooltip: {
      fixed: {
        enabled: !0
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function(t) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 22, 59, 23, 2]
    }],
    yaxis: {
      max: 80,
    }
  };


  var nextoptions1 = {
    chart: {
      type: "area",
      height: 152,
      sparkline: {
        enabled: !0
      }
    },
    stroke: {
      width: 5,
      curve: "smooth"
    },
    colors: ["#F6B021"],
    markers: {
      size: 5,
      colors: ['#fff'],
      strokeColors: ["#F6B021"],
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3
      }
    },
    tooltip: {
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function(t) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: .4,
        opacityTo: 0.5,
        stops: [0, 100]
      }
    },
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 22, 59, 23, 2]
    }],
    yaxis: {
      min: 0,
      max: 65,
    }
  };

  if ($('#chartx-1').length) {
    var chart = new ApexCharts(document.querySelector("#chartx-1"), options1);
    chart.render();
    var options2 = JSON.parse(JSON.stringify(options1));
    options2.colors[0] = '#60B5C5';
    var chart = new ApexCharts(document.querySelector("#chartx-2"), options2);
    chart.render();
    var options3 = JSON.parse(JSON.stringify(options1));
    options3.colors[0] = '#33BC72';
    var chart = new ApexCharts(document.querySelector("#chartx-3"), options3);
    chart.render();
    var options4 = JSON.parse(JSON.stringify(options1));
    options4.colors[0] = '#2D55C6';
    var chart = new ApexCharts(document.querySelector("#chartx-4"), options4);
    chart.render();
    var options5 = JSON.parse(JSON.stringify(options1));
    options5.colors[0] = '#A0C537';
    var chart = new ApexCharts(document.querySelector("#chartx-5"), options5);
    chart.render();
    var options6 = JSON.parse(JSON.stringify(options1));
    options6.colors[0] = '#D42147';
    var chart = new ApexCharts(document.querySelector("#chartx-6"), options6);
    chart.render();
  }

  if ($('#nextchartx-1').length) {
    var nextchart = new ApexCharts(document.querySelector("#nextchartx-1"), nextoptions1);
    nextchart.render();
    var nextoptions2 = JSON.parse(JSON.stringify(nextoptions1));
    nextoptions2.colors[0] = '#60B5C5';
    nextoptions2.markers.strokeColors[0] = '#60B5C5';
    var nextchart = new ApexCharts(document.querySelector("#nextchartx-2"), nextoptions2);
    nextchart.render();
    var nextoptions3 = JSON.parse(JSON.stringify(nextoptions1));
    nextoptions3.colors[0] = '#33BC72';
    nextoptions3.markers.strokeColors[0] = '#33BC72';
    var nextchart = new ApexCharts(document.querySelector("#nextchartx-3"), nextoptions3);
    nextchart.render();
    var nextoptions4 = JSON.parse(JSON.stringify(nextoptions1));
    nextoptions4.colors[0] = '#2D55C6';
    nextoptions4.markers.strokeColors[0] = '#2D55C6';
    var nextchart = new ApexCharts(document.querySelector("#nextchartx-4"), nextoptions4);
    nextchart.render();
    var nextoptions5 = JSON.parse(JSON.stringify(nextoptions1));
    nextoptions5.colors[0] = '#A0C537';
    nextoptions5.markers.strokeColors[0] = '#A0C537';
    var nextchart = new ApexCharts(document.querySelector("#nextchartx-5"), nextoptions5);
    nextchart.render();
    var nextoptions6 = JSON.parse(JSON.stringify(nextoptions1));
    nextoptions6.colors[0] = '#D42147';
    nextoptions6.markers.strokeColors[0] = '#D42147';
    var nextchart = new ApexCharts(document.querySelector("#nextchartx-6"), nextoptions6);
    nextchart.render();
  }


  if ($('#alt1chartx-0').length) {
    var alt1options1 = JSON.parse(JSON.stringify(nextoptions1));
    alt1options1.colors[0] = '#F6B021';
    alt1options1.markers = {size: 0};
    var alt1chart = new ApexCharts(document.querySelector("#alt1chartx-0"), alt1options1);
    alt1chart.render();
    var alt1options2 = JSON.parse(JSON.stringify(nextoptions1));
    alt1options2.colors[0] = '#60B5C5';
    alt1options2.markers = {size: 0};
    var alt1chart = new ApexCharts(document.querySelector("#alt1chartx-2"), alt1options2);
    alt1chart.render();
    var alt1options3 = JSON.parse(JSON.stringify(nextoptions1));
    alt1options3.colors[0] = '#33BC72';
    alt1options3.markers = {size: 0};
    var alt1chart = new ApexCharts(document.querySelector("#alt1chartx-3"), alt1options3);
    alt1chart.render();
    var alt1options4 = JSON.parse(JSON.stringify(nextoptions1));
    alt1options4.colors[0] = '#2D55C6';
    alt1options4.markers = {size: 0};
    var alt1chart = new ApexCharts(document.querySelector("#alt1chartx-4"), alt1options4);
    alt1chart.render();
    var alt1options5 = JSON.parse(JSON.stringify(nextoptions1));
    alt1options5.colors[0] = '#A0C537';
    alt1options5.markers = {size: 0};
    var alt1chart = new ApexCharts(document.querySelector("#alt1chartx-5"), alt1options5);
    alt1chart.render();
    var alt1options6 = JSON.parse(JSON.stringify(nextoptions1));
    alt1options6.colors[0] = '#D42147';
    alt1options6.markers = {size: 0};
    var alt1chart = new ApexCharts(document.querySelector("#alt1chartx-6"), alt1options6);
    alt1chart.render();
  }





  $('.daterange-trigger').daterangepicker(
    {
      timePicker:!0,
      buttonClasses:"btn btn-success",
      cancelClass:"btn-link bg-transparent rm-border text-danger",
      opens:"centered",
      drops:"down",
      startDate:"11/12/2018",
      endDate:"12/18/2018"
    }
  );


  $(".circle-alt1").each(function(){
    $(this).circleProgress({
      value: '.'+$(this).data('value'),
      size: 74,
      lineCap: "round",
      fill: {
        color: $(this).data('color')
      }
    }).on("circle-animation-progress", function(e, i, n) {
      $(this).find("small").html("<span>" + n.toFixed(2).substr(2) + "<span>%")
    })
  });

  $('.slick-photo-gallery__full').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots: true,
    asNavFor: '.slick-photo-gallery__thumbnails',
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
        variableWidth: true,
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        variableWidth: true,
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        variableWidth: true,
      },
    ]
  });

  $('.slick-photo-gallery__thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slick-photo-gallery__full',
    dots: false,
    arrows: false,
    focusOnSelect: true,
  });



  $('.slick-photo-help-gallery__full.help-part').each(function() {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
          variableWidth: true,
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
          variableWidth: true,
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
          variableWidth: true,
        },
      ]
    });
  });

  $('.slick-photo-help-gallery__full.modal-part').each(function() {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      dots: true,
    });
  })


  $('a[data-target="#helpModal"]').on('click', function (e) {
    setTimeout(function(){
      $('.slick-photo-help-gallery__full.modal-part').slick('setPosition');
    }, 150);
    setTimeout(function(){
      $('.slick-photo-help-gallery__full.modal-part').slick('setPosition');
    }, 300);
  });




});
