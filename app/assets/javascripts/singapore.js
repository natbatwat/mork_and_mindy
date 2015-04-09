$(document).ready(function(){
  console.log('ready');
  var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}];
  
  var input = $('#input-box');
  var next1 = $('#sg-next-1');
  next1.click(function(){
    console.log('next1 clicked');
    $('.mindy-text-1').children('.active').addClass('done').removeClass('active');
    $('.mindy-text-1').children('.hide').first().removeClass('hide').addClass('active');

    if ($('.mindy-text-1').children('.hide').length === 0){
      console.log('last');
      $('.instagram-feed').removeClass('hide');
      $('.mindy-text-1').addClass('hide');
      $('.mindy-text-2').removeClass('hide');
    };

    if ($('.mindy-text-1').children('.active').first().hasClass('dy')) {
      console.log('dy');
      console.log(input.val());
      line = $('.mindy-text-1').children('.active').first()[0].children[0];
      line.innerText = input.val().toUpperCase();
    };
  });

  var next2 = $('#sg-next-2');
  next2.click(function(){
    console.log('next2 clicked');
    $('.mindy-text-2').children('.active').addClass('done').removeClass('active');
    $('.mindy-text-2').children('.hide').first().removeClass('hide').addClass('active');
    var map;
    if (input.val().toLowerCase() === 'singapore') {
      $('.instagram-feed').addClass('hide');
      function initialize() {
        console.log('new map');
        var mapOptions = {
          zoom: 13,
          center: new google.maps.LatLng(1.3000, 103.8000)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        map.setOptions({styles: styles});
      }
      initialize();
      $('.mindy-text-2').addClass('hide');
      $('.mindy-text-3').removeClass('hide');
      $('#sg-partial').addClass('hide');
      $('#tokyo-partial').removeClass('hide');
    };

    if ($('.mindy-text-2').children('.hide').length === 0){
      console.log('last');
      $('.instagram-feed').addClass('hide');
      $('.mindy-text-2').addClass('hide');
      $('.mindy-text-3').removeClass('hide');
      $('#sg-partial').addClass('hide');
      $('#tokyo-partial').removeClass('hide');
    };
  })
})