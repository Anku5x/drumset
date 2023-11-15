function keySwitch(whichKey) {
  switch (whichKey) {                                                    //taking values from inner text for Clicks and event.key (key pressed) from 
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(whichKey);
  }
}

var numberOfButtons = document.querySelectorAll(".drumButton").length;

for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".drumButton")
    [i].addEventListener("click", function () {
      var buttonClass = this.innerText;
      keySwitch(buttonClass);                                       //calling function keySwitch for click event,   
    });                                                             //the value of inner text is going to the whichKey parameter.
}

document.addEventListener("keypress", function (event) {
  var keyPress = event.key;
  keySwitch(keyPress);                                              //calling the function keySwitch for key event, value of keyPress going to whichKey
  buttonAnimation(keyPress);                                        //calling the function buttonAinmation value of keyPress going to theKeyPressed
});                                                                 //animations begin here
                                                                    
function buttonAnimation(theKeyPressed) {                           //theKeyPressed will take the value from event function. 
  switch (theKeyPressed) {
    case "w":                                                       //according to the key that is pressed, 
      var numberOfKey = 0;                                          //the numberOfKey will add the value of .drumButton class array in the next querySelector
      break;
    case "a":
      var numberOfKey = 1;
      break;
    case "s":
      numberOfKey = 2;
      break;
    case "d":
      var numberOfKey = 3;
      break;
    case "j":
      var numberOfKey = 4;
      break;
    case "k":
      var numberOfKey = 5;
      break;
    case "l":
      var numberOfKey = 6;
      break;
    default:
      console.log("wrong key pressed");
      break;
  }

  document
    .querySelectorAll(".drumButton")
    [numberOfKey].classList.add("bg-primary");
  setTimeout(function () {
    document
      .querySelectorAll(".drumButton")
      [numberOfKey].classList.remove("bg-primary");
  }, 150);
}
//animation for clicks, there is no other way of doing this. 
document
  .querySelectorAll(".drumButton")[0]
  .addEventListener("mouseenter", () =>
    document.querySelectorAll(".drumButton")[0].classList.add("bg-primary")                                 
  );
document
  .querySelectorAll(".drumButton")[0]
  .addEventListener("mouseleave", () =>
    document.querySelectorAll(".drumButton")[0].classList.remove("bg-primary")
  );

document
  .querySelectorAll(".drumButton")[1]
  .addEventListener("mouseenter", () =>
    document.querySelectorAll(".drumButton")[1].classList.add("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[1]
  .addEventListener("mouseleave", () =>
    document.querySelectorAll(".drumButton")[1].classList.remove("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[2]
  .addEventListener("mouseenter", () =>
    document.querySelectorAll(".drumButton")[2].classList.add("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[2]
  .addEventListener("mouseleave", () =>
    document.querySelectorAll(".drumButton")[2].classList.remove("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[3]
  .addEventListener("mouseenter", () =>
    document.querySelectorAll(".drumButton")[3].classList.add("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[3]
  .addEventListener("mouseleave", () =>
    document.querySelectorAll(".drumButton")[3].classList.remove("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[4]
  .addEventListener("mouseenter", () =>
    document.querySelectorAll(".drumButton")[4].classList.add("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[4]
  .addEventListener("mouseleave", () =>
    document.querySelectorAll(".drumButton")[4].classList.remove("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[5]
  .addEventListener("mouseenter", () =>
    document.querySelectorAll(".drumButton")[5].classList.add("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[5]
  .addEventListener("mouseleave", () =>
    document.querySelectorAll(".drumButton")[5].classList.remove("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[6]
  .addEventListener("mouseenter", () =>
    document.querySelectorAll(".drumButton")[6].classList.add("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[6]
  .addEventListener("mouseleave", () =>
    document.querySelectorAll(".drumButton")[6].classList.remove("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[7]
  .addEventListener("mouseenter", () =>
    document.querySelectorAll(".drumButton")[7].classList.add("bg-primary")
  );
document
  .querySelectorAll(".drumButton")[7]
  .addEventListener("mouseleave", () =>
    document.querySelectorAll(".drumButton")[7].classList.remove("bg-primary")
  );
