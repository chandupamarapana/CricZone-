// Array of quiz questions, each containing id, question, options, and the correct answer.

const quizArray = [
    {
        id:"0",
        question:"What is the highest individual score by a batsman in a Test match?",
        options:[
            "278",
            "374",
            "400*",
            "501",

        ],
        correct:"374",
    },
    {
        id:"1",
        question:"Who is the only cricketer to have scored 100 international centuries in their career? ",
        options:[
            "Ricky Ponting ",
            "Sachin Tendulkar ",
            "Brian Lara ",
            "Jacques Kallis",

        ],
        correct:"Sachin Tendulkar",
    },
    {
        id:"2",
        question:"Which country won the first-ever Cricket World Cup held in 1975? ",
        options:[
            "Australia",
            "England",
            "West Indies",
            "India",

        ],
        correct:"West Indies",
    },
    {
        id:"3",
        question:"In limited-overs cricket, what does the term 'Powerplay' refer to? ",
        options:[
            "The period when only fast bowlers are allowed to bowl ",
            "The first six overs of a match when fielding restrictions apply",
            "The batting team's strategy to score maximum runs ",
            "The time when the match enters a decisive phase",

        ],
        correct:"The first six overs of a match when fielding restrictions apply",
    },
    {
        id:"4",
        question:"Which country won the ICC Cricket World Cup in 2019? ",
        options:[
            "Australia",
            "India",
            "England",
            "New Zealand",

        ],
        correct:"England",
    },
    {
        id:"5",
        question:"Which cricket stadium is known as the 'Home of Cricket'?",
        options:[
            "Eden Gardens, Kolkata ",
            "The Oval, London ",
            "Lord's Cricket Ground, London",
            "Melbourne Cricket Ground (MCG), Melbourne",

        ],
        correct:"Lord's Cricket Ground, London",
    },
    {
        id:"6",
        question:"What is the highest team total in a T20 International match?",
        options:[
            "260/6 ",
            "225/7 ",
            "278/3 ",
            "208/5",

        ],
        correct:"260/6",
    },
    {
        id:"7",
        question:"What is the distance between the popping crease and the bowling crease in international cricket?",
        options:[
            " 18 yards",
            " 20 yards",
            " 24 yards",
            " 22 yards",

        ],
        correct:"22 yards",
    },
    {
        id:"8",
        question:"What is the maximum width of a cricket bat allowed under the laws of cricket?",
        options:[
            "3 inches",
            "3.25 inches",
            "3.5 inches",
            "4 inches",

        ],
        correct:"4 inches",
    },
    {
        id:"9",
        question:"What does the cricketing term 'Yorker' refer to?",
        options:[
            "A slow and spinning delivery",
            "A fast and short-pitched delivery",
            "A full-length delivery aimed at the batsman's toes",
            "A wide delivery outside the off-stump",

        ],
        correct:"A full-length delivery aimed at the batsman's toes",
    },
    
   
    

];
let timeRemaining = document.querySelector(".time-remaining"); //Element to display the remaining time
let quizContainer = document.getElementById("container"); //Element holding the quiz questions
let nextButton = document.getElementById("next-button"); //Button moving to the next question
let theQuestionCount = document.querySelector(".Number-of-Questions"); //question count displaying element
let displayContainer = document.getElementById("display-container"); //displays the quiz questions
let scoreContainer = document.querySelector(".score-container"); //final score displaying element
let restart = document.getElementById("restart"); //button of restarting the quiz
let playerScore = document.getElementById("player-score"); //player score displaying element
let theStartScreen = document.querySelector(".Start-screen"); //initial start screen
let startingButton = document.getElementById("start-button"); //starting button quiz
let questionCount; //current question number
let theScoreCount = 0; //player score storing variable
let count; //remaining time variable
let countdown; //storing the interval for the countdown timer

// Event listener for the "Restart" button to restart the quiz when clicked.
restart.addEventListener("click", ()=> {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");

});
// Event listener for the "Next" button to move to the next question when clicked.
nextButton.addEventListener("click",(displaynext = () =>{
    questionCount += 1;
// Check if all questions are answered and display the final score if so.

    if(questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        playerScore.innerHTML = "The score is " + theScoreCount + " out of 10";
    } // Update the question count display, display the next question, and reset the timer.
    else{
        theQuestionCount.innerHTML = questionCount + 1 +"  "+ "of" + "  " + quizArray.length + "  " + "Questions";
        quizDisplay(questionCount);
        timerDisplay();

    }
})
);
// Function to update the countdown timer display.

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeRemaining.innerHTML = `${count}s`;
        // Check if time is up and display the final score if so.
        if (count == 0){
            displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        clearInterval(countdown);
        playerScore.innerHTML = "The score is " + theScoreCount + " out of 10";
        }

    }, 1000);
};
// Function to display a specific question based on the questionCount.
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) =>{
        card.classList.add("hide");

    });
    quizCards[questionCount].classList.remove("hide");
};
// Function to create the quiz by shuffling questions and options.
function quizCreater(){
    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray){
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        theQuestionCount.innerHTML = 1 + "of" + quizArray.length + "Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
// Creating buttons for each option and add them to the div.
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">
        ${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">
        ${i.options[3]}</button>
        
        
        
        `;
        quizContainer.appendChild(div);

       

    }

}
// Function to check the user's answer and update the score.
function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    console.log(theScoreCount)

    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        theScoreCount++;

    }
    else{
        userOption.classList.add("incorrect");
        // Highlighting the correct option if the user's answer is incorrect.

        options.forEach((element) =>{
            if(element.innerText == quizArray[questionCount].
                correct){

                    element.classList.add("correct");
            }
            
        });
    }

    clearInterval(countdown);
    options.forEach((element) =>{
        element.disabled = true;
    });
    // If all questions are answered, display the final score.
    if (questionCount === quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
    }
    
    
}
// Function to initialize the quiz, reset variables, and display the first question.
function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    theScoreCount = 0;
    count = 61;
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}
startingButton.addEventListener("click", () =>{
    theStartScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});
window.onload = () =>{
    theStartScreen.classList.remove("hide");
    displayContainer.classList.add("hide");

};







