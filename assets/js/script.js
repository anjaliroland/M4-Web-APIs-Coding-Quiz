//outline of what needs to happen to meet the acceptance criteria

        /* When start button is cliked
                1. timer starts
                2. first question is presented 
        */


        /* When answer is selected

                - If answer is correct
                    1. 'Correct!' will appear under a faded line below the question
                    2.  User will be presented with another question
                - Else (incorrect)
                    1. 'Wrong ):' will appear under a faded line below the question
                    2. Time will be deducted from the clock
                    3. User will be presented with another question
         */


        /* When all questions have been answered or timer reaches 0
                    
                - User is presented with an end screen that includes:
                    > their score
                    > the option to save their initials and score
        */ 


//questions array and question related variables
var questionSource = [
    {
        question: "What is the first index of an array?",
        choices: ["a. 2", "b. 1", "c. 0", "d. custom"],
        answer: "c"
    },

    {
        question: "Which of the following is NOT an example of an HTML event?",
        choices: ["a. The web page loading", "b. User clicking a mouse", "c. User hitting a key", "d. User turning off their laptop"],
        answer: "d"
    },

    {
        question: "Commonly used data types do NOT include:",
        choices: ["a. strings", "b. alerts", "c. numbers", "d. booleans"],
        answer: "b"
    },

    {
        question: "The condition in which an IF / ELSE statement is enclosed within ______.",
        choices: ["a. Quotes ''", "b. Curly Brackets {}", "c. Parentheses ()", "d. Square Brackets []"],
        answer: "c"
    },

    {
        question: "In JavaScript what can arrays be used to store?",
        choices: ["a. Strings and Booleans", "b. Numbers", "c. Other Arrays", "d. All of the Above"],
        answer: "d"
    },

    {
        question: "How do you call a function named 'exFunction'?",
        choices: ["a. Call exFunction()", "b. Call exFunction", "c. Call function exFunction", "d. exFunction()"],
        answer: "d"
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["a. =", "b. -", "c. x", "d. +"],
        answer: "a"
    },

    {
        question: "How would you write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["a. if i =! 5", "b. if (i != 5)", "c. if (i <> 5)", "d. if i <> 5"],
        answer: "b"
    },

];
var reactButtons = document.querySelectorAll(".choices");
var answerBtn1 = document.querySelector("#answer-1");
var answerBtn2 = document.querySelector("#answer-2");
var answerBtn3 = document.querySelector("#answer-3");
var answerBtn4 = document.querySelector("#answer-4");
var checkAnswers = document.querySelector("#check");
var scoreBoard = document.querySelector("#submitPage");
var finalScore = document.querySelector("#totalScore");
var userInitial =document.querySelector("#initials");


// timer variables and functions
var timeLeft = document.getElementById("timer");
var secondsLeft = 80;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

function countdown() {
    var timerInterval = setInterval(function () {

    secondsLeft--;
    timeLeft.textContent = "Time left: " + secondsLeft + " s";
    
    if (secondsLeft <= 0){
        clearInterval(timerInterval);
        timeLeft.textContent = "Time is up!"; 
        finish.textContent = "Time is up!";
        gameOver();

    } else  if(questionCount >= questionSource.length +1) {
        clearInterval(timerInterval);
        gameOver();
    } 
    }, 1000);
}


// start page and game page variables and start page functions
var startBtn = document.querySelector("#startBtn");
var startPage =document.querySelector("#start");
var gamePage = document.querySelector("#gamePage");
var questionID = document.querySelector("#question-id");
function startQuiz () {
        startPage.style.display = "none";
        gamePage.style.display = "block";
        questionNumber = 0
        countdown();
        showQuestion(questionNumber);
      
}

//game page functions
function showQuestion (n) {
        questionID.textContent = questionSource[n].question;
        answerBtn1.textContent = questionSource[n].choices[0];
        answerBtn2.textContent = questionSource[n].choices[1];
        answerBtn3.textContent = questionSource[n].choices[2];
        answerBtn4.textContent = questionSource[n].choices[3];
        questionNumber = n;
    }
 
function checked(event) {
    event.preventDefault();
    checkAnswers.style.display = "block";
    setTimeout(function () {
        checkAnswers.style.display = 'none';
    }, 1000);


    if (questionSource[questionNumber].answer == event.target.value) {
        checkAnswers.textContent = "Correct!"; 
        totalScore = totalScore + 1;
    } else {
        secondsLeft = secondsLeft - 10;
        checkAnswers.textContent = "Wrong! The correct answer is " + questionSource[questionNumber].answer + " .";
    }

    if (questionNumber < questionSource.length -1 ) {
        showQuestion(questionNumber +1);
    } else {
    gameOver();
}
questionCount++;
}


// scoring variables and functions
var submitBtn =document.querySelector("#submitBtn");
var highscorePage =document.querySelector("#highscorePage");
var recordScore =document.querySelector("#record-score");
var scoreCheck =document.querySelector("#score-check");
var finish =document.querySelector("#finish");

function gameOver() {
    gamePage.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(scoreBoard);
    finalScore.textContent = "Your final score is :" + totalScore ; 
    timeLeft.style.display = "none"; 
};

function getScore () {
    var currentList =localStorage.getItem("ScoreList");
    if (currentList !== null ){
        freshList = JSON.parse(currentList);
        return freshList;
    } else {
        freshList = [];
    }
    return freshList;
};

function renderScore () {
    recordScore.innerHTML = "";
    recordScore.style.display ="block";
    var highScores = sort();   
    var topFive = highScores.slice(0,5);
    
    for (var i = 0; i < topFive.length; i++) {
        var item = topFive[i];
        var li = document.createElement("li");
        li.textContent = item.user + " - " + item.score;
        li.setAttribute("data-index", i);
        recordScore.appendChild(li);
    }
};

function sort () {
    var unsortedList = getScore();
    
    if (getScore == null ){
        return;
    } else{
    unsortedList.sort(function(a,b){
        return b.score - a.score;
    })
    
    return unsortedList;
}};

function addItem (n) {
    var addedList = getScore();
    
    addedList.push(n);
    localStorage.setItem("ScoreList", JSON.stringify(addedList));
};

function saveScore () {
    var scoreItem ={
        user: userInitial.value,
        score: totalScore
    }
    addItem(scoreItem);
    renderScore();
}

//event listeners
startBtn.addEventListener("click", startQuiz);

reactButtons.forEach(function(click){
    click.addEventListener("click", checked);
});

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    scoreBoard.style.display = "none";
    startPage.style.display = "none";
    highscorePage.style.display = "block";
    gamePage.style.display ="none";
    saveScore();
});

scoreCheck.addEventListener("click", function(event) {
    event.preventDefault();
    scoreBoard.style.display = "none";
    startPage.style.display = "none";
    highscorePage.style.display = "block";
    gamePage.style.display ="none";
    renderScore();
});


// back button and clear button variables and functions
var backBtn =document.querySelector("#backBtn");
var clearBtn=document.querySelector("#clearBtn");

backBtn.addEventListener("click",function(event){
    event.preventDefault();
    scoreBoard.style.display = "none";
    startPage.style.display = "block";
    highscorePage.style.display = "none";
    gamePage.style.display ="none";
    location.reload();
});

clearBtn.addEventListener("click",function(event) {
    event.preventDefault();
    localStorage.clear();
    renderScore();
});