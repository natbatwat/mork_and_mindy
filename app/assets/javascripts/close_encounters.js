$(document).ready(function () {
  var actualkey;
  //group
  var note1;
  var note2;
  var note3;
  var note4;
  var note5;
  
  function startColor(key) {
    $('#' + key).css({'background-color': 'white'});
  }

  function endColor(key) {
    $('#' + key).css({'background-color': 'yellow'});
  }
      

  $(document).keypress(function(e){
    actualkey=String.fromCharCode(e.keyCode)
    switch(actualkey) {
      case 'a':
        startColor('a');
        groupWar.play();
        break;
      case 's':
        startColor('s');
        whatGood.play();
        break;
      case 'd':
        startColor('d');
        nothing.play();
        break;
      case 'y':
        startColor('y');
        huhOne.play();
        break;
      case 'u':
        startColor('u');
        huhTwo.play();
        break;
      case 'i':
        startColor('i');
        huhThree.play();
        break;
      case 'o':
        startColor('o');
        huhFour.play();
        break;
      case 'b':
        startColor('b');
        huhFive.play();
        break;
      case 'j':
        startColor('j');
        absolutely.play();
        break;
      case 'k':
        startColor('k');
        sayItAgain.play();
        break;
      case 'l':
        startColor('l');
        goodGod.play();
        break;
      case 'f':
        startColor('f');
        iSaidWar.play();
        break;
      case 'h':
        startColor('h');
        ahWar.play();
        break;
      case 'n':
        startColor('n');
        listenToMeOne.play();
        break;
      case 'm':
        startColor('m');
        listenTwo.play();
        break;
      case 'v':
        startColor('v');
        lookout.play();
        break;
      case 'c':
        startColor('c');
        ohLord.play();
        break;
      case 'g':
        startColor('g');
        yeah.play();
        break;
    }
  });

  soundManager.setup({
    url: 'js/soundmanager2/swf',
    onready: function() {
      groupWar = soundManager.createSound({
        url: 'audio/group_war.wav',
        onfinish: function() {
           endColor('a');
         }
      });
      whatGood = soundManager.createSound({
        url: 'audio/what_is_it_good_for.wav',
        onfinish: function() {
           endColor('s');
         }
      });
      nothing = soundManager.createSound({
        url: 'audio/nothing.wav',
        onfinish: function() {
           endColor('d');
         }
      });
      huhOne = soundManager.createSound({
        url: 'audio/huh.wav',
        onfinish: function() {
           endColor('y');
         }
      });
      huhTwo = soundManager.createSound({
        url: 'audio/huh-2.wav',
        onfinish: function() {
           endColor('u');
         }
      });
      huhThree = soundManager.createSound({
        url: 'audio/huh_3.wav',
        onfinish: function() {
           endColor('i');
         }
      });
      huhFour = soundManager.createSound({
        url: 'audio/huha.wav',
        onfinish: function() {
           endColor('o');
         }
      });
      huhFive = soundManager.createSound({
        url: 'audio/uh_huh.wav',
        onfinish: function() {
           endColor('b');
         }
      });
      absolutely = soundManager.createSound({
        url: 'audio/absolutely.wav',
        onfinish: function() {
           endColor('j');
         }
      });
      sayItAgain = soundManager.createSound({
        url: 'audio/say_it_again.wav',
        onfinish: function() {
           endColor('k');
         }
      });
      ahWar = soundManager.createSound({
        url: 'audio/ah_war.wav',
        onfinish: function() {
           endColor('h');
         }
      });
      goodGod = soundManager.createSound({
        url: 'audio/good_god.wav',
        onfinish: function() {
           endColor('l');
         }
      });
      iSaidWar = soundManager.createSound({
        url: 'audio/i_said_war.wav',
        onfinish: function() {
           endColor('f');
         }
      });
      listenToMeOne = soundManager.createSound({
        url: 'audio/listen_to_me.wav',
        onfinish: function() {
           endColor('n');
         }
      });
      listenTwo = soundManager.createSound({
        url: 'audio/listen_two.wav',
        onfinish: function() {
           endColor('m');
         }
      });
      lookout = soundManager.createSound({
        url: 'audio/lookout.wav',
        onfinish: function() {
           endColor('v');
         }
      });
      ohLord = soundManager.createSound({
        url: 'audio/oh_lord.wav',
        onfinish: function() {
           endColor('c');
         }
      });
      yeah = soundManager.createSound({
        url: 'audio/yeah.wav',
        onfinish: function() {
           endColor('g');
         }
      });
    },
    ontimeout: function() {
      // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
    
  });
  
});