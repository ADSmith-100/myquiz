//global variables
let score = 0;
let currentQuestion = 0;

//questions array, each ? is an object
let questions = [
    {
        title: "Enter Questions here",
        answers: ["x","y","z","a"],
        correct: 1

    },   
    {
        title: "Enter Questions here",
        answers: ["x","y","z","a"],
        correct: 1

    },   
    {
        title: "Enter Questions here",
        answers: ["x","y","z","a"],
        correct: 1

    },   
    {
        title: "Enter Questions here",
        answers: ["x","y","z","a"],
        correct: 1

    },   
    {
        title: "Enter Questions here",
        answers: ["x","y","z","a"],
        correct: 1

    },   
]

//event listeners

 



//function stubs


function showQuestion(){
    //creates question local variable and initializes it to questions array 
    //at position currentQuestion, which will start at the first question 
    //(array position 0)
    let question = questions[currentQuestion];
    //change all to form/radio buttons 
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for(let i = 0; i<question.answers.length; i++){
        $('.quiz ul').append(`<li id="${i}">${question.answers[i]}</li>`)
    };
}

function checkAnswer() {

}

function showSummary(){

}


function restartQuiz() {

}