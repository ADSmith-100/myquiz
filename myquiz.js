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
$(document).ready(function(){

    $('.start button').click(function(e){
        //e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        $('.tally').show();
        showQuestion();
        updateQuestNum();

    });

    //$('.quiz ul').on('click', 'li',function(){
        //$('.selected').removeClass('selected');
        //$(this).addClass('selected');
    //});

    $('.quiz button').click(function(e){
        e.preventDefault();
          if($("input[name='choice']:checked").length){
          let guess = parseInt($("input[name='choice']:checked").attr('id'));
          console.log(guess);
          checkAnswer(guess);
        } else {
            alert('Please choose an answer')
        }
    });

    $('.correct button').click(function(e){
        e.preventDefault();
        
        if(currentQuestion >= questions.length){
            updateTally();
            $('.tally').show();
            showSummary();

            
        }   else {
            $('.quiz').show();
        }
        $('.correct').hide();
        updateQuestNum();
        //$('.tally').show();
        
    });

    $('.incorrect button').click(function(e){
        e.preventDefault();
        
        if(currentQuestion >= questions.length){
            
            showSummary()
            
        }   else {
            $('.quiz').show();
        }
        $('.incorrect').hide();
        $('.incorrect span').html('');
        //$('.tally').show();
        updateQuestNum();

    });

    $('.summary button').click(function(e){
        e.preventDefault();
        restartQuiz();
        updateQuestNum();
    });

});

 



//function stubs


function showQuestion(){
    //creates question local variable and initializes it to questions array 
    //at position currentQuestion, which will start at the first question 
    //(array position 0)
    let question = questions[currentQuestion];
    //change all to form/radio buttons 
    $('.quiz h2').text(question.title);
    $('.quiz form').html('');
    for(let i = 0; i<question.answers.length; i++){
        $('.quiz form').append(`<input type="radio" id="${i}" name="choice" value="choice">
        <label for="choice">${question.answers[i]}</label><br>`)
    };
    //let myQuestion = currentQuestion + 1;
    //$('.number span').text(`${myQuestion} out of ${questions.length}`);
    $('.tally').show();
}
//`<li id="${i}">${question.answers[i]}</li>`
//<input type="radio" id="choice" name="choice" value="choice">
 // <label for="choice">choice</label><br></br>

 function checkAnswer(guess){
    let question = questions[currentQuestion];
    if(question.correct === guess){
        score++
        goodAnswer();
    }
        else {
            badAnswer();
        }
    currentQuestion++;      
    //if(currentQuestion >= questions.length){
     //   showSummary();
    //}   else {
        showQuestion();
    
    
}

function goodAnswer(){
    $('.quiz').hide();
    $('.correct').show();
    updateTally();
    //updateQuestNum();
    //$('.tally').hide();
    
}

function badAnswer(){
    $('.quiz').hide();
    $('.incorrect').show();
    $('.tally').hide();
    let question = questions[currentQuestion];
    let smartAnswer = question.correct;
    $('.incorrect span').append(` <span> ${question.answers[smartAnswer]}</span>`);
    $('.incorrect span').append('');
    //updateQuestNum();
    }

function updateQuestNum() {
    let myQuestion = currentQuestion + 1;
    $('.number span').text(`${myQuestion} out of ${questions.length}`);
}


function updateTally() {
    let currentScore = score;
    
    $('.score span').text(`${currentScore}`);
    
}


function showSummary(){
    $('.tally').hide();
    $('.quiz').hide();
    $('.summary').show();
    $('.summary p').text("Congrats you scored "+score+" out of "+questions.length+" correct!")
    
}

function restartQuiz(){
    $('.summary').hide();
    $('.quiz').show();
    $('.score span').text(`0`);
    score = 0;
    currentQuestion = 0;
    showQuestion();
}