
const quizQuestions = [
    "What is the capital of Ghana?",
    "What is the currency of Ghana?",
    "What is the largest city in Ghana?",
    "What is the smallest city in Ghana?",
    "What is the population of Ghana?"
];

const quizOptions = [
    ["Accra", "Kumasi", "Tema", "Takoradi"],
    ["Cedi", "Dollar", "Euro", "Pound"],
    ["Accra", "Kumasi", "Tema", "Takoradi"],
    ["Accra", "Kumasi", "Tema", "Takoradi"],
    ["20 million", "30 million", "40 million", "50 million"]
];

const quizAnswers = [
    "Accra",
    "Cedi",
    "Accra",
    "Accra",
    "30 million"
];


var currentQuestionIndex =  0;
var score = 0;
var quizStarted = false;

const startQuizBtn = document.getElementById("startQuiz");
const waitStateBox = document.querySelector(".wait-state");
const quizBox = document.querySelector("#quiz");
const questionText = document.getElementById("question");
const optionsBox = document.querySelector("#options");

startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
    currentQuestionIndex =  0;
    quizStarted = true;
    score = 0;
    waitStateBox.style.display = "none";
    quizBox.style.display = "block";
    loadCurrentQuestion();
}

function loadCurrentQuestion(){
    questionText.textContent = quizQuestions[currentQuestionIndex];
    let optionButton;
    for(let i = 0; i< quizOptions[0].length; i++){
        optionButton = document.createElement("button");
        optionButton.innerText = quizOptions[currentQuestionIndex][i];
        optionsBox.appendChild(optionButton);
    }
}

