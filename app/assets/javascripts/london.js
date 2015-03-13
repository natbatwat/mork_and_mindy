$(document).ready(function(){
  var tardis_lat = 51.492137
  var tardos_long = -0.192878
  // to be cut/pasted at end of challenge before
  $('h1').on("click", function(){
    function initialize() {
      var earlsCourt = new google.maps.LatLng(51.492137,-0.192878);
      var mapOptions = {
        center: earlsCourt,
        zoom: 14
      };
      var map = new google.maps.Map(
          document.getElementById('map-canvas'), mapOptions);
      var panoramaOptions = {
        position: earlsCourt,
        pov: {
          heading: 34,
          pitch: 10
        }
      };
      var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
      map.setStreetView(panorama);
      }
    initialize();
  });
  // north
  // 51.492235,-0.193035
  // 51.492333,-0.193195
  // 51.492449,-0.193401
  // south
  // 51.492108,-0.192822
  // 51.492036,-0.192702

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
  
  
  


});