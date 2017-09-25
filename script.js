// Shape starts off hidden.
document.getElementById("square").style.display = "none";

// The "Variable Bank"; functions can call the variables outside of the functions
var created = "";
var clicked = "";
var timed = "";
var color = "";
// var score = 20;
var high = 100;
var highest = 0.497; // a randomly chosen high score --> incentive for the playerN

// generates a random colour for the shape in hexadecimal
function getColor() {
  colorArray = "0123456789ABCDEF".split("");            // creates an array of all hexadecimal digits
  color = "#";
  for (i = 0; i < 6; i++) {
    color += colorArray[Math.floor(Math.random() * 16)];  // randomly chooses 6 of the digits
  }
  return color;
}

// for every time the function runs, a new random interval between shap appearances is generated
function makeBox() {
    setTimeout(function() {
      document.getElementById("square").style.display = "block";  // shape is displayed after some time
      created = Date.now(); // initial time: when shape is displayed on-screen
  }, Math.random()*3000)
}

// function returnScore() {
//   if (score <= timed) {
//     return score;
//   } else {
//     score = timed;
//     return score;
//   }
// }
//
// function highscore() {
//   document.getElementById("highscore").innerHTML = "Current Highscore: " + Math.min(timed, score);
//   if (score < 0.497) {
//     document.getElementById("highestscore").innerHTML = "Highest score of all time: " + score + "s";
//   } else {
//     return score;
//   }
// }


// functions that change the shapes properties when user clicks the object
document.getElementById("square").onclick = function() {
  document.getElementById("start").style.display = "none";            // hides the "click square to start"
  this.style.position = "absolute";
  this.style.top = Math.random() * (650 - 300) + 300;                 // sets the new position of the shape between 700 and 300 pixels from the top
  this.style.right = Math.random() * (1000 - 400) + 400;                            // sets the new horizontal position anywhere on the screen
  this.style.backgroundColor = getColor();                            // assigns the new randomly generated colour to the new shape
  this.style.borderRadius = Math.floor(Math.random() * 99) + "%"      // assigns a random border radius to the shape
  this.style.display = "none";                                        // hides the shape once clicked
  clicked = Date.now();                                               // time when shape is clicked
  timed = (clicked - created) / 1000;                                 // converts time from milliseconds to seconds (subtracts initial time from final time)
  // highscore();
  // returnScore();
  document.getElementById("time").innerHTML = "You clicked it in " + timed + "s"; // displays the time it took to click

  if (timed < highest) {
      document.getElementById("highestscore").innerHTML = "Highest score of all time: " + timed + "s";
      highest = timed
  }
  if (timed < high){
      document.getElementById("highscore").innerHTML = "Current Highscore: " + timed + "s";
      high = timed;
  }

  makeBox();
}


// "Function Bank" so they're actually used in the other functions
getColor();
makeBox();
