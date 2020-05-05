//global variables
let score = 0;
let currentQuestion = 0;

//questions array, each ? is an object
let questions = [
    {
        title: "What celebration was going on when Fry fell into the cryogenic chamber and was frozen?",
        answers: ["Christmas","New Year's Eve","Kwanza","Halloween"],
        correct: 1

    },   
    {
        title: "What did Dr. Zoidberg receive for selling all of his stock in Planet Express?",
        answers: ["One Million Dollars","A helicopter","A sandwich","5 bux"],
        correct: 2

    },   
    {
        title: "At the end of the fourth season, who is the President of Earth?",
        answers: ["Al Gore","Bender","The head of Richard Nixon","Kodos"],
        correct: 2

    },   
    {
        title: "Where was Bender manufactured?",
        answers: ["Mexico","The Professor's Lab","USA","Mars"],
        correct: 0

    },   
    {
        title: "What is Bender’s middle name?",
        answers: ["Milhouse","Sue","Ricardo","Bending"],
        correct: 3

    },   
    {
        title: "How many eyes does Leela have?",
        answers: ["one","two","three","zero"],
        correct: 0

    },   
    {
        title: "What is Fry’s relation to Professor Farnsworth?",
        answers: ["his son","his grandson","his newphew","his uncle"],
        correct: 3

    },   
    {
        title: "Who is Zapp Brannigan’s assistant?",
        answers: ["Fry","Amy","Kif","Zoidberg"],
        correct: 2

    },   
    {
        title: "What sport did Hermes compete in at the Olympics?",
        answers: ["the limbo","100 meter dash","shotput","blurnsball"],
        correct: 0

    },
    {
        title: "Who is the janitor of Planet Express?",
        answers: ["Jimbo","Scruffy","Fry","Bender"],
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
            $('.tally').show();
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
    //$('.tally').hide();
    let question = questions[currentQuestion];
    let smartAnswer = question.correct;
    $('.incorrect span').append(` <span> ${question.answers[smartAnswer]}</span>`);
    $('.incorrect span').append('');
    //updateQuestNum();
    }

function updateQuestNum() {
    let myQuestion = currentQuestion + 1;
    $('.number span').text(`${myQuestion} / ${questions.length}`);
}


function updateTally() {
    let currentScore = score;
    
    $('.score span').text(`${currentScore}`);
    
}


function showSummary(){
    $('.tally').hide();
    $('.quiz').hide();
    $('.summary').show();
    $('.summary p').text("You scored "+score+" out of "+questions.length+" correct!")
    
}

function restartQuiz(){
    $('.summary').hide();
    $('.quiz').show();
    $('.score span').text(`0`);
    score = 0;
    currentQuestion = 0;
    showQuestion();
}