$(document).ready(function () {
  var actualkey;
  //group
  var note1;
  var note2;
  var note3;
  var note4;
  var note5;

  function startColor(key) {
    $('#' + key).css({'border': '1px solid pink'});
  }

  function endColor(key) {
    $('#' + key).css({'border': 'none'});
  }
      
  $('document').keypress(function(e){
    console.log('hello');
    actualkey=String.fromCharCode(e.keyCode)
    switch(actualkey) {
      case 'a':
        startColor('a');
        console.log(actualkey);
        console.log('a');
        note1.play();
        break;
      case 'p':
        startColor('p');
        note2.play();
        break;
      case 'r':
        startColor('r');
        note3.play();
        break;
      case 'b':
        startColor('b');
        note4.play();
        break;
      case 'q':
        startColor('q');
        note5.play();
        break;
    }
  });

  soundManager.setup({
    url: 'assets/swf',
    onready: function() {
      console.log('note1');
      note1 = soundManager.createSound({
        url: 'assets/audio/note1.wav',
        onfinish: function() {
           // endColor('a');
        }
      });
      // note2 = soundManager.createSound({
      //   url: 'audio/note2.wav',
      //   onfinish: function() {
      //      // endColor('p');
      //    }
      // });
      // note3 = soundManager.createSound({
      //   url: 'audio/note3.wav',
      //   onfinish: function() {
      //      // endColor('d');
      //    }
      // });
      // note4 = soundManager.createSound({
      //   url: 'audio/note4.wav',
      //   onfinish: function() {
      //      // endColor('y');
      //    }
      // });
      // note5 = soundManager.createSound({
      //   url: 'audio/note5.wav',
      //   onfinish: function() {
      //      // endColor('u');
      //    }
      // });
    },
    ontimeout: function() {
      // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
    
  });
  
});