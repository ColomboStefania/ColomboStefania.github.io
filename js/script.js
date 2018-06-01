$(document).ready(function (){

  function hideCard() {
    var card = document.getElementById("jumbotronCard");
    if (card.style.display === "none") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
  }
  hideCard();
});

var flashCardArray = [
  ["1", "1a"],
  ["2", "2a"],
  ["3", "3a"],
  ["4", "4a"],
  ["5", "5a"],
];



var startGame1 = function() {

  //PROMPT USER - INPUT NAME - DISPLAY NAME ON THE PAGE
  var userName = window.prompt("Welcome! What is your name?");
  var welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.innerHTML = "Welcome " + userName;
  //DISPLAY FLASHCARD
  showCard()
  displayQuestion()
  displayQuestion()
  //

};

function showCard() {
  var card = document.getElementById("jumbotronCard");
  if (card.style.display === "none") {
      card.style.display = "block";
  } else {
      card.style.display = "none";
  }
};

function displayQuestion() {
  console.log('hello');
  //RANDOMI
  //var i = Math.floor(Math.random()*flashCardArray.length); i < flashCardArray.length; i += Math.floor(Math.random()*flashCardArray.length)) {
    //flashCardArray[i]
  //console.log (flashCardArray[i])

  // Get the question
  // Get ArrayX
  // Get an item Array
  const randomNumber = Math.floor(Math.random() * flashCardArray.length)
  console.log(randomNumber);
  var randomQuestion = flashCardArray[randomNumber][0];
  // Get the question
  // Get random item
  // Get a random question

  // Display it
  var question = document.getElementById ("questionIndex")
  question.innerHTML = randomQuestion;
  var index = document.getElementById ("randomNumberCard")
  index.innerHTML = randomNumber;


  // Figure out how to display

};

var startButton = document.getElementById ("startGame")
startButton.addEventListener ("onclick" , startGame1);
