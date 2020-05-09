require("@fancyapps/fancybox");

var Swal = require('sweetalert');
var namespace = '.moclub.ru';

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


(function ($) {
  function formatNumber(num)
  {
    num = num.replace(/\D/g, '');
    return ("" + num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, function($1) { return $1 + " " });
  }

  $.fn.thousandSeparate = function () {
    return this.each(function () {
      var $input = $(this);
      $input.bind('keyup' + namespace, function (e) {
        $input.val(formatNumber($input.val()));
      });
    });
  };

  $.fn.initialYandexMap = function() {
    return this.each(function() {
      var $container = $(this);
      var lat = $container.data('lat');
      var lon = $container.data('lon');

      if (!lat || !lon) {
        return false;
      }

      var map = new ymaps.Map($container[0], {
        center: [lat.replace(',', '.'), lon.replace(',', '.')],
        zoom: $container.data('zoom') || 12,
        controls: ['zoomControl']
      });

      var mark$ = new ymaps.Placemark([lat.replace(',', '.'), lon.replace(',', '.')]);

      map.behaviors.disable('scrollZoom');
      map.geoObjects.add(mark$);
    });
  };

  $.fn.ajaxFormSubmit = function () {
    return this.each(function() {
      var $form = $(this);

      $form.bind('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var cb = $form.data('callback') || function () { return false; };
        var head = $form.data('head') || 'Готово';
        var text = $form.data('text') || 'Благодарим за обращение, наши менеджеры скоро свяжутся с Вами';
        var csrftoken = getCookie('csrftoken');
        var data = $form.serializeArray();

        data['csrfmiddlewaretoken'] = csrftoken;

        $.ajax({
          'type': 'PUT',
          'url': $form.attr('action'),
          'data': data,
          'success': function () {
            $('.modal').modal('hide');
            $form[0].reset();

            Swal(head, text, 'success');
            cb();
          },
          'beforeSend': function(xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
          }
        });
      })
    });
  };

  $.fn.uploadFile = function() {
    var namespace = '.reutov.upload';
    var allowed_formats = [
      'application/pdf',
      'image/jpeg',
      'image/png',
    ];

    var upload_files = function (files, url, cb) {
      cb = cb || function(r) { return false; };
      var reader = new FileReader();

      (function(file$) {
        if (allowed_formats.indexOf(file$.type) === -1) {
          Swal({
            icon: 'error',
            title: 'Внимание!',
            text: 'Недопустимый формат файла. Принимаются только файлы в формате PDF или JPG'
          });
          return;
        }

        reader.onload = function (event) {
          var csrftoken = getCookie('csrftoken');
          var request = $.ajax({
            'type': 'PUT',
            'url': url,
            'data': {
              'file_data': (event.srcElement || event.target)['result'],
              'file_name': file$.name,
              'csrfmiddlewaretoken': csrftoken,
            },
            'beforeSend': function(xhr, settings) {
              xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
          });

          request.done(function (response) {
            cb(response);
          });
        };

        reader.readAsDataURL(file$);
      })(files[0]);
    };

    return this.each(function () {
      var $file = $(this);
      var $form = $file.closest('form');
      var $container = $file.closest('.file-upload');

      $file.on('change' + namespace, function() {
        upload_files($file[0].files, $file.data('file-upload'), function(r) {
          var $input = $('<input/>', {'type': 'hidden', 'name': 'upload_file'});
          $input.val(r['file']);
          $container.find('.placeholder').text(r['text']);
          $form.append($input);
        });
      });
    });
  };
})(jQuery);


$(function () {
  var $body = $('body');

  $('[data-thousand-separate]').thousandSeparate();
  $("[data-fancybox]").fancybox();

  
  $body.on('click' + namespace, '.ajax-modal', function(e){
    e.preventDefault();
    var $obj = $(this).data("target");
    $($obj+' .modal-content').load($(this).data("remote"),function(){
      $($obj).modal({show:true});
    });
  });

  if (window.ymaps) {
    ymaps.ready(function () {
      $("#map").initialYandexMap();
    });
  }

});
