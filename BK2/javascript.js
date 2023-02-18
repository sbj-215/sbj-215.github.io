var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {


  makeSound(event.key);

buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("tunes/w.wav");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tunes/a.wav");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('tunes/s.wav');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('tunes/d.wav');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('tunes/j.wav');
      snare.play();
      break;

    case "k":
      var crash = new Audio('tunes/k.wav');
      crash.play();
      break;

    case "l":
      var kick = new Audio('tunes/l.wav');
      kick.play();
      break;
    
      case "e":
        var e = new Audio('tunes/e.wav');
        e.play();
        break;
  
      case "f":
        var f = new Audio('tunes/f.wav');
        f.play();
        break;
  
      case "t":
        var t = new Audio('tunes/t.wav');
        t.play();
        break;
  
      case "y":
        var y = new Audio('tunes/y.wav');
        y.play();
        break;
  
      case "u":
        var u = new Audio('tunes/u.wav');
        u.play();
        break;
        
        case "o":
        var o = new Audio('tunes/o.wav');
        o.play();
        break;
  
      case "p":
        var p = new Audio('tunes/p.wav');
        p.play();
        break;
  
      case "g":
        var g = new Audio('tunes/g.wav');
        g.play();
        break;
  
      case "h":
        var h = new Audio('tunes/h.wav');
        h.play();
        break;
  
      case "m":
          var m = new Audio('tunes/;.wav');
          m.play();
          break;
    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

