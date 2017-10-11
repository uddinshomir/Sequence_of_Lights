


// Necessary variables I will need in the body.

level = 0; // Need a counter variable for the level.

let id; // Need a global variable to reference id of my divs.

let box; // Need a class variable to reference classes of my divs.

let sequence = {
  random: [ ],
  user: [ ]
};

// randomSeq = [ ];

// userSeq = [ ];// array filled with clicks by user.

const totalLevels = 5;


//When document is ready have click function and start random sequence.
$(document).ready( function(){
$(".start").click( function(){
  level++;
  randomSequence();
})



// sequence that user clicks.


$(".box").click(function(){
  id = $(this).attr("id");
  box = $(this).attr("class");
  sequence.user.push(id);
  console.log(sequence.user);
  makeActive(id,box);


//make sure user sequence is correct

  if (!check()) {
    errorAlert();
    sequence.user = [ ];
  }

  // check if sequence is done. Proceed to next level,

 if( sequence.user.length == sequence.random.length && sequence.user.length < totalLevels) {
  level++;
  sequence.user.length = [ ];
  randomSequence();
 }

if (sequence.user.length == totalLevels) {
  $(".display-inline").text('You Win');
}




})

})









// Sequence generated that user has to click. Must generate random numbers to fill a blank array.


function randomSequence() {
  // console.log(level);
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

function check() {
for (var i = 0; i < sequence.user.length; i++)
  if (sequence.user[i] != sequence.random[i]) {
    return false;
  }
    return true;
}

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




// generating random num to fill random sequence array.
function getRandomNum() {
let randomNum = Math.floor(Math.random() * 9);
// console.log(randomNum);
sequence.random.push(randomNum);
}

// Function to turn pinks divs into white. This function adds a class to the div to make it active and then removes
// that class. Class has a style where background is white.
function makeActive (id, box) {
$("#" + id).addClass(box + "Active")
setTimeout(function() {
  $("#" + id).removeClass(box + "Active");
  },500)
}







//  Logic based on Simon Says game:
/***************************************************************************************
*    Title: Simon Says
*    Author: George Luis
*    Date: NA
*    Code version: NA
*    Availability: https://codepen.io/zentech/pen/XaYygR
*
***************************************************************************************/



