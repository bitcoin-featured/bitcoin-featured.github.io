$(document).ready(function() {
  $.ajax({
    url: 'http://127.0.0.1:5500/data.json',

    success: function(respuesta) {
      var galleryContainer = $('.galleryContainer');

      $.each(respuesta, function(index, elemento) {
        /* console.log(elemento); */
        galleryContainer.append(
          '<div class="col-md-4 filtr-item thumbnail" data-category="all" data-sort="' +
            elemento.title +
            '">' +
            '<img src=' +
            elemento.img_small +
            ' data-toggle="modal" data-target="#exampleModalCenter" data-toggle="modal" data-target="#exampleModalCenter"></img>' +
            '<input type="hidden" value="' +
            elemento.img +
            '">' +
            '<input type="hidden" value="' +
            elemento.title +
            '">' +
            '<span class="item-desc">' +
            elemento.title +
            '</span>' +
            '</div>'
        );
      });

      var filterizd = $('.filtr-container').filterizr({});

      $('.filterListItem').on('click', function() {
        $('.filterListItem').removeClass('active');
        $(this).addClass('active');
      });
    },

    error: function() {
      console.log('No se ha podido obtener la información');
    }
  });

  $('.galleryContainer').on('click', '.thumbnail img', function() {
    /* console.log('click');
    console.log(
      'valor de ' +
        $(this)
          .next()
          .val()
      $('.thumbnail img')
          .next()
          .val()
    ); */
    $('.modal-title').html(
      $(this)
        .next()
        .next()
        .val()
    );
    $('#picture').attr('src', '');
    $('#picture').attr(
      'src',
      $(this)
        .next()
        .val()
    );
  });
});
