$(document).ready(function(){
  var tardis_lat = 51.492137
  var tardos_long = -0.192878

  function getLong(){
    var mapUrl = $('a').attr('href');
    var newMapUrl = mapUrl.split('=');
    var nextMapUrl = newMapUrl.shift();
    var coordinates = newMapUrl.shift();
    var latLong = coordinates.split(',')[1];
    var longitude = latLong.substr(5);
    var long = longitude.substr(0, longitude.length-2);
    console.log(long);
    temps(long);
  }

  // console.log(coordinates);
  // console.log(latLong);
  // console.log(longitude);
  // console.log(long);
 

  function temps(long){
    if (long >= 2850 && long <= 2900) {
      $('.mindy-container-london').append('<h3>You have made it. One last challenge.</h3>');
    } else if (long > 3200 || long < 2550) {
      $('.mindy-container-london').append('<h3>Cold. Try turning around.</h3>');
    } else if (long > 3100 || long < 2650) {
      $('.mindy-container-london').append('<h3>Warm.</h3>');
    } else if (long > 3000 || long < 2750) {
      $('.mindy-container-london').append('<h3>Warmer.</h3>');
    } else if (long > 2900 || long < 2850) {
      $('.mindy-container-london').append('<h3>Hot!</h3>');
    } else {
      console.log('out of bounds');
    }
  }

  $(document).keypress(function(e){
    console.log(e.keyCode);
    if (e.keyCode === 38){
      getLong();
    } else {
      console.log('wrong key')
    }
    
  });


  // to be cut/pasted at end of challenge before
  $('#london-click').on("click", function(){
    console.log('lon clicked')
    function initialize() {
      var earlsCourt = new google.maps.LatLng(51.4924328,-0.1933711);
      var mapOptions = {
        center: earlsCourt,
        zoom: 17
      };
      var map = new google.maps.Map(
          document.getElementById('map-canvas'), mapOptions);
      var panoramaOptions = {
        position: earlsCourt,
        pov: {
          heading: -30,
          pitch: 2
        }
      };
      var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
      map.setStreetView(panorama);
      $('#map-canvas').css({"width": "45%", "height": "100%", "float": "left"})
    }
    initialize();
  });
});