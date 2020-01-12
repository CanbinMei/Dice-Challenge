//Generate a random number from 1 - 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Create a string images/dice1.png - images/dice6.png.
var randomDiceImageSource1 = "images/dice" + randomNumber1 + ".png";

// Set img1 to new random image.
var image1 = document.querySelector(".img1").setAttribute("src", randomDiceImageSource1);


//Generate a random number from 1 - 6.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create a string images/dice1.png - images/dice6.png.
var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";

// Set img2 to new random image.
var image2 = document.querySelector(".img2").setAttribute("src", randomDiceImageSource2);


// if(randomNumber1 === 1) {
//   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// }
// if(randomNumber1 === 2) {
//   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// }
// if(randomNumber1 === 3) {
//   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// }
// if(randomNumber1 === 4) {
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// }
// if(randomNumber1 === 5) {
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// }
// if(randomNumber1 === 6) {
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
// }
//
// var randomNumber2 = Math.floor(6 * Math.random()) + 1;
//
// if(randomNumber2 === 1) {
//   document.querySelector(".img2").setAttribute("src", "images/dice1.png");
// }
// if(randomNumber2 === 2) {
//   document.querySelector(".img2").setAttribute("src", "images/dice2.png");
// }
// if(randomNumber2 === 3) {
//   document.querySelector(".img2").setAttribute("src", "images/dice3.png");
// }
// if(randomNumber2 === 4) {
//   document.querySelector(".img2").setAttribute("src", "images/dice4.png");
// }
// if(randomNumber2 === 5) {
//   document.querySelector(".img2").setAttribute("src", "images/dice5.png");
// }
// if(randomNumber2 === 6) {
//   document.querySelector(".img2").setAttribute("src", "images/dice6.png");
// }

// Display whoever wins.
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
