// Outline:
// ****************************************************************
// 1. Variables as objects

// 2. Variables that are score counters (wins, losses)

// 3. Functions

// 4. Main processs

// ****************************************************************
// TOOLS:

// -Offers a way to run JavaScript code as soon as the page's Document Object Model (DOM) becomes safe to manipulate.


$( document ).ready(function() {
//   // Handler for .ready() called.
// });



// -Create a click function:

//   $("insert div id" name).click(function(){
    
//   });



// -Adds/changes content of element with id name:

//   document.getElementById("insert div id name").innerHTML = "Insert desired text";




// *******************
// *******************


// var triviaData = {
//   questionOne: {
//     question: "how much wood could a woodchop",
//     correctAnswer: "foo",
//     incorrectAnswers: [
//       "bar", "wat", "foo"
//     ]
//   },
//   questionTwo: ...
// }



// var correctAnswersCounter = 0;

// var incorrectAnswersCounter = 0;





/*Executes code after entire page loads
$(document).ready(function() {

//Once the page loads, activate the following click button functions.

/***********************************
               DATA
*************************************/
  
 



  // var questions = [
  //   "",
  //   ""

  // ]


  // var answers = [
  //   "",
  //   ""

  // ]

   



  $("#Button-Start").click(function() {
      startGame();

  
  });





  $("#Button-Start-Over").click(function() {
      startGameover();
  
  });



  // $("#Button-Start").click(function() {
  //     startGame();
  
  // });


});
    

  



//   function countDown() {


//   }


//   function stopTimer() {



//   }


//   function incorrectAnswer() {

//   }


//   function correctAnswer() {


//   }
  

//   function endGame () {

//   }


//   function startOver () {


//   }


// });



function startGame() {
    
    // Change to question and answers screen, after start button is clicked


    console.log("game is started!");
    // findSelectedPlayer

    
      //data for selected players
      //use js to change display to show selected player
    // findOpponent
  
}

function findSelectedPlayer() {

}



function startGameover() {
    
    alert("Reset Game");
  
}













// Click Events here:
  /*
  

  $("insert div").click(insert variable.insert some function);

  */

  // //Timer object
  // var gameTimer = {
  //   time:0,
  //   lap:1
  //   // reset: function () {
  //   //     stopwatch.time = "foo"

  //   // }
  // }



  // var count = function(){

  //   /*Increments the timer by one*/
  //   gameTimer.time++;

  //   var converted = gameTimer.timeConverter(gameTimer.time);


  //   $('Insert div id').html(converted);

  // }

 // /* var startButton;
 //  /*Large, clickable Start button that, when pushed, transitions to the question, answer, and timer screen
 //  (add hover CSS effect)*/
 //  // function startGame() {
 //    startButton = $(".Button-Start").click(function(){
 //      console.log("game is started");
  
 //  })


 //  /*Initiates the timer*/
 //  //Performs timer just built every 1000 mili-seconds
 //  function startTimer() {
 //    counter = setInterval(gameTimer.count, 1000);



 //  }


 //  /*A timer counting down, time remaining, from say, 30 seconds. 

 //  If timer reaches 0, the game will transtion to an out of time (function?) prompt with the correct answer*/
 //  function timerDown () {


 //  };



 //  /*Stop timer will stop the timer from continusing to countdown*/
 //  //Keeps from counting up
 //  function stopTimer () {
 //    clearInterval(counter);


 //  };


 //  Transitions game to out of time prompt with the correct answer for the question. After a certain amount of time (5 secs?), transitions to the next question, or to game over screen if everything has been answered
  
 //  function outOftime () {


 //  };




 //  function question() {

 //  }



 //  /*Tells user "Correct!", after 5 seconds, display the next question without user input*/
 //  function correctAnswer() {


 //  }



 //  /*Tell user "Nope/Incorrect!" and show the correct answer below, display the next question without user input*/
 //  function incorrectAnswer () {
    
 //  }



 //  /*Shows all done: the user's correct answers; incorrect answers; and unanswered? also shows the start over? button*/
 //  function endGame() {

 //  }




 //  /*When the start over button is clicked, the game will transtion striaght to the next question, thus resetting the game*/
 //  function startOver() {

 //  }


 //  startGame();