$(document).ready(function() {
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
    if ($('.mindy-text-3').find('.hide').length === 0){
      console.log('new map!');
      function initialize_tokyo() {
        var mapOptions = {
          zoom: 13,
          center: new google.maps.LatLng(35.688259,139.752337)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      initialize_tokyo();
    };
    // $('#trash').ready(function(event){
    //     var trash_x = event.pageX;
    //     var trash_y = event.pageY;
    //     console.log(trash_x);
    //     console.log(trash_y);
    // })
    // $('#file-1').on('drag', function(event){
    //     var file_1_x = event.pageX;
    //     var file_1_y = event.pageY;
    // })
    // $('#file-2').on('drag', function(event){
    //     var file_2_x = event.pageX;
    //     var file_2_y = event.pageY;
    // })
    // $('#file-3').on('drag', function(event){
    //     var file_3_x = event.pageX;
    //     var file_3_y = event.pageY;
    // })
});
