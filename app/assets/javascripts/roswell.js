$(document).ready(function(){
  var next4 = $('#ros-next');
  var input = $('#input-box');
  
  next4.click(function(){
    $('.mindy-text-4').children('.active').addClass('done').removeClass('active');
    $('.mindy-text-4').children('.hide').first().removeClass('hide').addClass('active');
  })

  function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }

  var movies = ['alien', 'et', 'guardiansofthegalaxy', 'starwars'];
  var randomMovie = getRandomSubarray(movies, 1)[0];
  var randomMovieToUnhide = $('#' + randomMovie);
  console.log('MOVIE SELECTED' + randomMovie);
  randomMovieToUnhide.removeClass('hide');

  $('#ros-next').click(function(){
    if (input.val().toLowerCase().replace(/\s/g,'') === randomMovie) {
      function initialize() {
        console.log('movie map');
        var mapOptions = {
          zoom: 7,
          center: new google.maps.LatLng(33.968333, -105.243333)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      initialize();
    };
  })

});