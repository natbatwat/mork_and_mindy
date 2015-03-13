$(document).ready(function () {
  var actualkey;
  //group
  var note1;
  var note2;
  var note3;
  var note4;
  var note5;
  var array = ["a", "p", "r", "b", "q"]
  var winArray = ["a", "p", "r", "b", "q"]


  function compareArrays(array) {
    array = array.join('');
    console.log(array)
    if (array.match(/aprbq/g) === null) {
      array = []
    } else {
     $('.encounters-container').empty();
     $('.encounters-container').append('<h4>Press the Up Arrow</h4>');
    }
  }

  compareArrays(array);


  function startColor(key) {
    $('#' + key).css({'border': '5px solid pink'});
  }

  function endColor(key) {
    $('#' + key).css({'border': 'none'});
  }
      
  $(document).keypress(function(e){
    actualkey=String.fromCharCode(e.keyCode)
    switch(actualkey) {
      case 'a':
        startColor('a');
        console.log(actualkey);
        array.push('a');
        note1.play();
        break;
      case 'p':
        startColor('p');
        array.push('p');
        note2.play();
        break;
      case 'r':
        startColor('r');
        array.push('r');
        note3.play();
        break;
      case 'b':
        startColor('b');
        array.push('b');
        note4.play();
        break;
      case 'q':
        startColor('q');
        array.push('q');
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
      note2 = soundManager.createSound({
        url: 'audio/note2.wav',
        onfinish: function() {
           // endColor('p');
         }
      });
      note3 = soundManager.createSound({
        url: 'audio/note3.wav',
        onfinish: function() {
           // endColor('d');
         }
      });
      note4 = soundManager.createSound({
        url: 'audio/note4.wav',
        onfinish: function() {
           // endColor('y');
         }
      });
      note5 = soundManager.createSound({
        url: 'audio/note5.wav',
        onfinish: function() {
           // endColor('u');
         }
      });
    },
    ontimeout: function() {
      // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
    
  });
  
});