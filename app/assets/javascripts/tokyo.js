$(document).ready(function() {
    if($('.fa-picture-o').hasClass('hide') === false){
      $('.instagram-feed').addClass('hide');
    };
    console.log("time to drag!");
    $('.drag-elements-1').sortable({
      cancel: ".disabled"
    });
    $('.drag-elements-2').sortable({
      cancel: ".disabled"
    });
    $('.drag-elements-3').sortable({
      cancel: ".disabled"
    });
    $("#t, #i, #p" ).disableSelection();
    $('.drag-elements-1').on('mouseup', function(){
      if ($('.drag-elements-1 .tile-o').index() === 1 && $('.drag-elements-1 .tile-y').index() === 3){
      console.log('tokyo!');
      $('.tickone').removeClass('hide');
      };
    })
    $('.mindy-text-3').on('mouseup', function(){
      if ($('.drag-elements-2 .tile-m').index() === 1 && $('.drag-elements-2 .tile-p').index() === 2 && $('.drag-elements-2 .tile-e').index() === 3 && $('.drag-elements-2 .tile-r').index() === 4 && $('.drag-elements-2 .tile-i').index() === 5 && $('.drag-elements-2 .tile-a').index() === 6) {
      console.log('imperial!');
      $('.ticktwo').removeClass('hide');
      };
    })
    $('.mindy-text-3').on('mouseup', function(){
      if ($('.drag-elements-3 .tile-l').index() === 2 && $('.drag-elements-3 .tile-c').index() === 4 && $('.drag-elements-3 .tile-a').index() === 1 && $('.drag-elements-3 .tile-e').index() === 5) {
      console.log('palace!');
      $('.tickthree').removeClass('hide');
      };
    })

  $('#tok-next-3').click(function(){
    if (($('.mindy-text-3').find('.hide').length === 0) === true) {
      console.log('TOKYO')
      function initialize(){
        var mapOptions = {
          scrollwheel: false,
          zoom: 13,
          center: new google.maps.LatLng(35.689916,139.754391)
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      }
      initialize();
      $('.mindy-text-3').addClass('hide');
      $('.mindy-text-4').removeClass('hide');
      $('#tokyo-partial').addClass('hide');
      $('#roswell-partial').removeClass('hide');
    }
  });
});