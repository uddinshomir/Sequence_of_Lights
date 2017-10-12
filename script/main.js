
// Need a counter variable for the level.
level = 0;



// Need a global variable to reference id of my divs.
let id;


// Need a class variable to reference classes of my divs.
let box;



// Sequences will be stored in an object. These are blank arrays that I will push numbers into.
let sequence = {
  random: [ ],
  user: [ ]
};


//Number of levels for the user to win.
const totalLevels = 3;


//When document is ready have click function and start random sequence. I will call all necessary functions
//within the document.ready function so that the functions are called after the document has loaded.
//  The button with class start is assigned a click function. Once clicked Level increases by 1
// and RandomSequence function is called.

$(document).ready( function(){
$(".start").click( function(){
  level++;
  randomSequence();
})



// in this click function which assigned to all divs with the class box meaning all divs are clickable
// the id and class of the div is set equal to id and class. The id that is clicked is then pushed into the user
// sequence. In order to see the click in action the makeActive function is called to make the div color chage white
// this indicates to the user that the div was clicked.

$(".box").click(function(){
  id = $(this).attr("id");
  box = $(this).attr("class");
  sequence.user.push(id);
  console.log(sequence.user);
  makeActive(id,box);




// the check function only activates if any value in the user sequence is not the same as the value in the
// random sequence. When the check returns true in the case the user clicks a div that was not in the random
// sequence

  if (check()) {
    errorAlert();
    sequence.user = [ ];
  }

//  if the user sequence length and the random sequence length is equal to each other and the length
// of the user sequence is less than the number of levels then the level count will increase
// the user sequence will reset to a bank array and the random sequence function will be called again.

 if( sequence.user.length == sequence.random.length && sequence.user.length < totalLevels) {
  level++;
  sequence.user = [ ];
  randomSequence();
 }

 // when the user sequence length is equal to the total levels the user wins. The display is changed to the
 // text you win. Still trying to get the game to reset after all the levels are completed.

 if (sequence.user.length == totalLevels) {
  $(".display-inline").text('You Win');
  // level = 0;
  // sequence.user = [ ];
  // // sequence.random = [ ];
  // // randomSequence();
}




})

})


// This function randomSequence first takes the div class display-inline and changes the text to the current level
// then function getRandomNum is called which takes a random number and pushes it into the random sequence
// array. A variable i is set to 0 to reference indexes which is used a few lines down. Then a variable firstInterval is
// set equal to a setInterval. Within the Interval the id is set as the a value within the random sequence which
// was populated by the getRandomNum. Then the variable box is set to the class of one of the divs.
// Using these two variables I use the function makeActive which changes the class of the div to box-active
// and makes the div background color white. Then the value of i increases. When the value of i is equivalent
// to the length of the random sequence clearInterval will terminate firstInterval meaning no more divs will light up
// and firstInterval will not run every 1 second.

function randomSequence() {
  $(".display-inline").text(level);
  getRandomNum();
  let i=0;
  let firstInterval = setInterval(function(){
    id = sequence.random[i];
    console.log(sequence.random);
    box = $("#" + id).attr("class");
    console.log(id,box);
    makeActive(id,box);
    i++;
    if (i === sequence.random.length){
      clearInterval(firstInterval);
    }
  }, 1000);
}


//check function loops through the user sequence and the random seqence and at every index if the values are not
// equal it returns true. If all the values are equal it returns false.

function check() {
for (var i = 0; i < sequence.user.length; i++)
  if (sequence.user[i] != sequence.random[i]) {
    return true;
  }
  else{
    return false;
  }
}
// function errorAlert is used to display when a user makes an error. Here we have a counter set to 0 to remove
// the error message later. The error message is an intervalt since it will e dispalyed for a length of time in this
// case for 500 milliseconds.First the display has the text incorrect placed in it then the coutner increases
// the counter increases every second and when it reaches 3 the level is displayed again the userError interval
// is cleared. The user sequence is set to a blank array and the counter is setback to 0.
//This means once an  error is made the user is notified of the error and can begin clicking the first
// div in the sequence again.
function errorAlert() {
  console.log("Error");
  let counter = 0;
  let userError = setInterval (function() {
    $(".display-inline").text("Incorrect");
    counter++;
    if (counter == 3) {
      $(".display-inline").text(level);
      clearInterval(userError);
      sequence.user = [ ];
      counter = 0;
      }
    },500)
}




//  The function getRandomNum has a varaible called randomnum equal to a number from 0-8.
// Math.random generates a number from 0-1 then it is multiplied by 9 which will give values between
// 0-9. Then Math.floor rounds those values down to give whole numbers. sequence.random.push
function getRandomNum() {
let randomNum = Math.floor(Math.random() * 9);
// console.log(randomNum);
sequence.random.push(randomNum);
}

// This function makeActive takes a parameter id and box. Using the id a class is added to the div
// which takes the second parameter box referring to the class div and adding it to the string "Active"
// the setTimeout is ued to remove the new "boxActive" class every 500 milliseconds.
function makeActive (id, box) {
$("#" + id).addClass(box + "Active")
setTimeout(function() {
  $("#" + id).removeClass(box + "Active");
  },500)
}







//  Here is the reference for the Simon Says game which helped me make this:
/***************************************************************************************
*    Title: Simon Says
*    Author: George Luis
*    Date: NA
*    Code version: NA
*    Availability: https://codepen.io/zentech/pen/XaYygR
*
***************************************************************************************/



