// Capital letter means that a function is global
var Gallery = function(option) {
  // selector where we want to find gallery

  // by default they are filled
  option.selector ? option.selector : "";
  option.colorButton ? option.colorButton: "#000";
  /*myOption = {

  };*/

  $boxWithImages = $(option.selector);
  //$boxWithImages = $(option.color);

  var images = $boxWithImages.children();

  init();

  function init() {
    // Hide all without first image
    // We consider that user hasn't css file with display none property
    for(var i = 0; i < images.length; i++)
    {
      if(!i) // if i != 0
        $(images[i]).show();
      else
        $(images[i]).hide();
    }

    // set an id
    $('#slider').append('<input type="button" style="background: ' + option.colorButton + '" value="Prev">');
    $('#slider').append('<input type="button" style="background: ' + option.colorButton + '" value="Next">');
  }

  var currentIndex = 0;

  $('input[value="Next"]').on('click', function () {

      // recalculate array of images
      var images = $boxWithImages.find('img');
      console.log(images);
      console.log("Into 'Next' function. Current index: " + currentIndex);


      // test ajax
      if (currentIndex === images.length - 2) {
          $(images[currentIndex - 1]).hide();
          loadImagesViaAjax(images.length, option.selector);
      }
          

    if(currentIndex < images.length - 1) {
      currentIndex++;

      for(var i = 0; i < images.length; i++)
        $(images[i]).hide();

      $(images[currentIndex]).show();

      $('#debug').text(currentIndex);
    }
  });

  $('input[value="Prev"]').on('click', function() {
    if(currentIndex > 0) {
      currentIndex--;

      for(var i = 0; i < images.length; i++)
        $(images[i]).hide();

      $(images[currentIndex]).show();

      $('#debug').text(currentIndex);
    }
  });
}
