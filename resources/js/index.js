const familyOne = document.getElementById("familyOne");
const familyTwo = document.getElementById("familyTwo");

const startButton = document.getElementById("startButton");

gameContainer.classList.add("d-none");

const familyOneScore = document.getElementById("familyOneScore");
const familyTwoScore = document.getElementById("familyTwoScore");

const scoreholderOne = document.getElementById("scoreholderOne");
const scoreholder = document.getElementById("scoreholderTotal");
const scoreholderTwo = document.getElementById("scoreholderTwo");

const answerOne = document.getElementById("answerOne");
const answerTwo = document.getElementById("answerTwo");
const answerThree = document.getElementById("answerThree");
const answerFour = document.getElementById("answerFour");
const answerFive = document.getElementById("answerFive");
const answerSix = document.getElementById("answerSix");
const answerSeven = document.getElementById("answerSeven");
const answerEight = document.getElementById("answerEight");

const question = document.getElementById("question");
const userGuess = document.getElementById("userGuess");

const submitButton = document.getElementById("submitButton");
newGameButton.classList.add("d-none");

const strike1 = document.getElementById("strike1");
const strike2 = document.getElementById("strike2");
const strike3 = document.getElementById("strike3");






const teamHolder = document.getElementById("teamHolder");
var questionSelector = 0;
var correctCounter = 0;
var questionsArrayMax = questions.length;
var teamTurn = 1;
scoreholderOne.value = 0;
scoreholderTwo.value = 0;
var roundCounter = 1;




function selectQuestion() {
    questionSelector = Math.floor(Math.random() * Math.floor(questionsArrayMax));
};

function clearPlaceholders() {
    answerOne.placeholder = "";
    answerTwo.placeholder = "";
    answerThree.placeholder = "";
    answerFour.placeholder = "";
    answerFive.placeholder = "";
    answerSix.placeholder = "";
    answerSeven.placeholder = "";
    answerEight.placeholder = "";
}

function setPlaceholders() {
    scoreholder.value = 0;
    if (questions[questionSelector].numberOfQuestions == 1) {
        answerOne.placeholder = "1"
    }
    else if (questions[questionSelector].numberOfQuestions == 2) {
        answerOne.placeholder = "1"
        answerTwo.placeholder = "2"
    }
    else if (questions[questionSelector].numberOfQuestions == 3) {
        answerOne.placeholder = "1"
        answerTwo.placeholder = "2"
        answerThree.placeholder = "3"
    }
    else if (questions[questionSelector].numberOfQuestions == 4) {
        answerOne.placeholder = "1"
        answerTwo.placeholder = "2"
        answerThree.placeholder = "3"
        answerFour.placeholder = "4"
    }
    else if (questions[questionSelector].numberOfQuestions == 5) {
        answerOne.placeholder = "1"
        answerTwo.placeholder = "2"
        answerThree.placeholder = "3"
        answerFour.placeholder = "4"
        answerFive.placeholder = "5"
    }
    else if (questions[questionSelector].numberOfQuestions == 6) {
        answerOne.placeholder = "1"
        answerTwo.placeholder = "2"
        answerThree.placeholder = "3"
        answerFour.placeholder = "4"
        answerFive.placeholder = "5"
        answerSix.placeholder = "6"
    }
    else if (questions[questionSelector].numberOfQuestions == 7) {
        answerOne.placeholder = "1"
        answerTwo.placeholder = "2"
        answerThree.placeholder = "3"
        answerFour.placeholder = "4"
        answerFive.placeholder = "5"
        answerSix.placeholder = "6"
        answerSeven.placeholder = "7"
    }
    else if (questions[questionSelector].numberOfQuestions == 8) {
        answerOne.placeholder = "1"
        answerTwo.placeholder = "2"
        answerThree.placeholder = "3"
        answerFour.placeholder = "4"
        answerFive.placeholder = "5"
        answerSix.placeholder = "6"
        answerSeven.placeholder = "7"
        answerEight.placeholder = "8"
    }
}
 
 function guessChecker() {
    if (userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].answerOne || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].answerOne || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].answerOne || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].alternateanswers1 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].alternateanswers1 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers1) {
        answerOne.placeholder = questions[questionSelector].answerOne;
        scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answerOnePts;
            
    }
    else if (userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].answerTwo || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].answerTwo || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].answerTwo || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].alternateanswers2 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].alternateanswers2 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers2) {
        answerTwo.placeholder = questions[questionSelector].answerTwo;
        scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answerTwoPts;
        
    }
    else if (userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].answerThree || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].answerThree || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].answerThree || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].alternateanswers3 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].alternateanswers3 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers3) {
        answerThree.placeholder = questions[questionSelector].answerThree;
        scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answerThreePts;
            
    }
    else if (userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].answerFour || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].answerFour || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].answerFour || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].alternateanswers4 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].alternateanswers4 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers4) {
        answerFour.placeholder = questions[questionSelector].answerFour;
        scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answerFourPts;
            
    }
    else if (userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].answerFive || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].answerFive || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].answerFive || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].alternateanswers5 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].alternateanswers5 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers5) {
        answerFive.placeholder = questions[questionSelector].answerFive;
        scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answerFivePts;
            
    }
    else if (userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].answerSix || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].answerSix || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].answerSix || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].alternateanswers6 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].alternateanswers6 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers6) {
        answerSix.placeholder = questions[questionSelector].answerSix;
        scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answerSixPts;
            
    }
    else if (userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].answerSeven || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].answerSeven || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].answerSeven || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].alternateanswers7 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].alternateanswers7 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers7) {
        answerSeven.placeholder = questions[questionSelector].answerSeven;
        scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answerSevenPts;
            
    }
    else if (userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].answerEight || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].answerEight || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].answerEight || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) === questions[questionSelector].alternateanswers8 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1) + "s" === questions[questionSelector].alternateanswers8 || userGuess.value.charAt(0).toUpperCase() + userGuess.value.slice(1).slice(0, -1) === questions[questionSelector].alternateanswers8) {
        answerEight.placeholder = questions[questionSelector].answerEight;
        scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answerEightPts;
            
    }
 }