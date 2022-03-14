var score
var time


    const quizContainer = document.getElementById('quiz');




const questionList = [
    {
        question: "Commonly used data types DO NOT include:",
    answers:{
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
    },
correctAnswer:"c"},
{
question: "The condition in an if/else is enlcosed with ________> ",
    answers:{
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d:"square brackets",
    },
    correctAnswer:"c"},
    {
        question: "Arrays in JavaScript can be used to store:",
        answers:{
            a:"numbers and strings",
            b: "other arrays",
            c:"booleans",
            d:"all of the above",
        },
        correctAnswer: "d"},
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers:{
        a: "commas",
        b: "curly brackets",
        c:"quotes",
        d: "parenthesis",
    },
        correctAnswer: "c"},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers:{
            a: "JaveScript",
            b: "terminal/bash",
            c: "for loops",
            d: "console.log",
        },
        correctAnswer:"d",
}

]
var quizNow = function (){
    const output = [];

    questionList.forEach(
        (currentQuestion,questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers){
                answers.push(
                    `<label><input type="button" name="question${questionNumber}" value="${letter}"/>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML =output.join('');

}

//startBtn.addEventListener("click", startQuiz())
startBtn.addEventListener("click", quizNow())
