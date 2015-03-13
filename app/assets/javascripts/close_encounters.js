$(document).ready(function () {
  var actualkey;
  //group
  var note1;
  var note2;
  var note3;
  var note4;
  var note5;
  var array = []
  var counter = []
  $('h2').append('<h3>' + counter.length + '</h3>')

  function compareArrays(arr) {
    arrayString = arr.join('');
    if (arrayString.match(/alien/g) === null) {
      array = []
      return false;
    } else {
     $('.encounters-container').empty();
     $('.encounters-container').append('<h4>Press the Up Arrow</h4>');
    }
  }
  
  function checkArray(arr){
    console.log(arr);
    if (arr.length < 5) {
      console.log('Keep Going');
    } else {
      compareArrays(arr);
    }
  }

  // function incrementCounter(key){
  //   if (counter.length < 5) {
  //     console.log(counter);
  //     counter.push(key);
  //   } else {
  //     counter = [];
  //     return false;
  //   }
  // }


  function startColor(key) {
    $('#' + key).css({'border': '5px solid pink'});
  }

  function endColor(key) {
    $('#' + key).css({'border': 'none'});
  }
  if ($('.fa-street-view').hasClass('hide') === false) {
    console.log('sound on')
    $(document).keypress(function(e){
      actualkey=String.fromCharCode(e.keyCode)
      switch(actualkey) {
        case 'a':
          startColor('a');
          console.log(actualkey);
          array.push('a');
          array
          note1.play();
          checkArray(array);
          incrementCounter('a')
          break;
        case 'l':
          startColor('l');
          array.push('l');
          array
          note2.play();
          checkArray(array);
          incrementCounter('l')
          break;
        case 'i':
          startColor('i');
          array.push('i');
          array
          note3.play();
          checkArray(array);
          incrementCounter('i')
          break;
        case 'e':
          startColor('e');
          array.push('e');
          array
          note4.play();
          checkArray(array);
          incrementCounter('e')
          break;
        case 'n':
          startColor('n');
          array.push('n');
          array
          note5.play();
          checkArray(array);
          incrementCounter('n')
          break;
      }
    });
  }
  soundManager.setup({
    url: 'assets/swf',
    onready: function() {
      console.log('note1');
      note1 = soundManager.createSound({
        url: '/assets/note1.wav',
        onfinish: function() {
           // endColor('a');
        }
      });
      note2 = soundManager.createSound({
        url: '/assets/note2.wav',
        onfinish: function() {
           // endColor('p');
         }
      });
      note3 = soundManager.createSound({
        url: '/assets/note3.wav',
        onfinish: function() {
           // endColor('d');
         }
      });
      note4 = soundManager.createSound({
        url: '/assets/note4.wav',
        onfinish: function() {
           // endColor('y');
         }
      });
      note5 = soundManager.createSound({
        url: '/assets/note5.wav',
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