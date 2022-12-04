/* When start button is cliked -------> event Bubble? (appendChild)?
    1. timer starts ------------------> timerInterval + eventListener
    2. first question is presented ---> eventListener
*/


/* When answer is selected -------------------------------------------------> event Bubble? (appendChild)?

    - If answer is correct -------------------------------------------------> IF statement
        1. 'Correct!' will appear under a faded line below the question  ---> dataAttribute? 
        2.  User will be presented with another question -------------------> eventListener?

    - Else (incorrect) -----------------------------------------------------> ELSE statement
        1. 'Wrong ):' will appear under a faded line below the question ----> dataAttribute?
        2. Time will be deducted from the clock ----------------------------> timeInterval
        3. User will be presented with another question --------------------> eventListener?
*/


/* When all questions have been answered or timer reaches 0 ----> eventListener + timerInterval? 
    
    - User is presented with an end screen that includes: ------> eventListener
        > their score ------------------------------------------> dataAttirbute + local storage?
        > the option to save their initials and score ----------> local storage
*/ 


// Variables

var questions = [
    {
        title: "What is the first index of an array?",
        choices: ["2", "1", "0", "custom"],
        answer: "0"
    },

    {
        title: "Which of the following is NOT an example of an HTML event?",
        choices: ["The web page loading", "User clicking a mouse", "User hitting a key", "User turning off their laptop"],
        answer: "User turning off their laptop"
    },

    {
        title: "Commonly used data types do NOT include:",
        choices: ["strings", "alerts", "numbers", "booleans"],
        answer: "alerts"
    },

    {
        title: "The condition in which an IF / ELSE statement is enclosed within ______.",
        choices: ["Quotes ''", "Curly Brackets {}", "Parentheses ()", "Square Brackets []"],
        answer: "Parentheses ()"
    },

    {
        title: "In JavaScript what can arrays be used to store?",
        choices: ["Strings and Booleans", "Numbers", "Other Arrays", "All of the Above"],
        answer: "All of the Above"
    },

    {
        title: "How do you call a function named 'exFunction'?",
        choices: ["Call exFunction()", "Call exFunction", "Call function exFunction", "exFunction()"],
        answer: "exFunction()"
    },

    {
        title: "Which operator is used to assign a value to a variable?",
        choices: ["=", "-", "x", "+"],
        answer: "="
    },

    {
        title: "How would you write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["if i =! 5", "if (i != 5)", "if (i <> 5)", "if i <> 5"],
        answer: "if (i != 5)"
    },

];
