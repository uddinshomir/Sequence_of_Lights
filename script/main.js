//variables

randomSeq = [ ];

userSeq = [ ];

level = 0;

let id;

let box;





//When document is ready have click function and start random sequence.
$(document).ready( function(){
$(".start").click( function(){

  randomSequence();
})



})


function randomSequence() {
  console.log(level);
  $(".display").text(level);
  getRandomNum();
  let i=0;
  let firstInterval = setInterval {}
}



function getRandomNum() {
let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);
randomSeq.push(randomNum);
}


function makeActive (id, box) {
$("#" + id).addClass(box + "-active")
setTimeout(function() {
  $("#" + id).removeClass(box + "-active");
  },500)
}
