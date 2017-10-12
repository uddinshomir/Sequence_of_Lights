# Sequence_of_Lights
GA WDI Project 1-GAme

****Explanation of Technologies used****
I used HTML, CSS,  Javascript( Jquery)  to create my game.

The HTML are the 9 divs on the page. There is a div at the top for the level number. There is also 
a button on the bottom which starts the game.

Using CSS I gave the body a background image that would contrast the pink divs. Also the CSS
has a class which would be assign to the divs temporarily to make the color of the divs white.

In the JS I have several functions, and object which contains two blank arrays, variables I will need
and event listeners. Jquery is utilized for DOM manipulation. The functions are called inside a document.ready
event listener so that the document is loaded befroe functions are called. I assigned a click function to 
the start button and within that click function I make the level increase and call another function to generate
a random sequence. The function that generates the random sequence has a function within in it that
generates a random number and pushes that number into the random squence array using obeject
prototype. I also defined a variable i for the index of my sequence which was set to 0. 
The next part of the random sequence function I set an interval that sets the variable id and box which are 
defined globally to the id and class of the divs that have the same id number as the number generated within
the random sequence array. Once those ids and classes are retrieved then they are used as the parameter 
of another function called the makeActive function which changes the div color from pink to white 
temporarily. I also increased i within the interval so that it will be the index of every value within the random
seqeunce array. The makeActive function requires two parameters id and box. I take the first parameter id and use
it to  select my divs which have ids numbered 0-8. Then aftering selecting that div I add a class which takes the box 
paramter and adds the string value "Active" to it. The class boxActive in the css has a background of white so 
the divs color will change to white. Since this has to be temporary I make set a time out here where every 500
milliseconds within the makeActive class I am removing the class by using the same id and box parameter. After I call
the makeActive within the random sequence function I have an if condition where if the value of i equals 
the length of the array meaning the index no longer references any values within the array then clear the interval that 
I made. This interval otherwise runs every 1000 milliseconds till it is cleared when i reachs the same number
as the length of the random sqence array. The next part is to have an event listener for the user seqeunce.
All the divs which have a class of box have a click function on them. I defined id and the variable box to be
the id and class of the div that is clicked using the value "this". Then I push into the user sequence array
using object prototypes the variable id which is the number of the div. In order to show that the div has been clicked
I used the makeActive and the parameters are the id and box that were defined within this click function.
Once the user sequence array and the random sequence array are defined then I had to check for errors, increase
the level and declare a win. I used three different if statements. The first checks for errors where a function
check is called. The function check has a for loop that loops through both the random sequence and the user 
sequence and if the values in the arrays are not equal to each other it returns true otherwise it returns false. When
it returns true the if statement is read and another function errorAlert is called to display an incorrect message then
the user sequence is set back to a blank array.  The function errorAlert first has a counter variable set to 0. Then I
have a interval called myError where the display-inline class is selected and the text is set as incorrect then the
counter is increased. The interval is set to every 500 milliseconds so the counter increases every 500 milliseconds
and then when it reachs three there is an if statement which sets the display back to the level and the counter back to 
0 and also clears the myError interval. Then if no error is made there is an if statement that checks the length of the
user sequence against the random sequence and the makes sure the length of the user sequence is less then the 
total number of levels. If these two statements are true then the level increases and the user sequence
is cleared. Finally an if statement checks to see if the user sequence length is equal to the totalLevels 
if so the display text is set to win.

*** Approach Taken ***
After making my css and HTML where all the 9 divs are given numbered ids and the same class, I had
to make random sequence when the start button was clicked. Then as the level increased this sequence
had to have the same numbers as that of the level. The user had to be able to click the divs where the div
clicked would generate a sequence. These sequences had to match for a win or if the user clicked wrong then 
a error message would show. 



*** User Story***
The user sees the game page and the start button. User clicks start button and notices the level increases to 1.
User sees one div change color. User drags mouse to div and clicks the div. The User notices that the level count
increases and the second level begins where two divs change color. User clicks mouse in the order
that the divs changed color. Then level three begins. User continues in this manner until final level where
the user does not see the level change but a you win meesage. When the user clicks a div that did not light up
or a div that did but not in the right order the user sees an incorrect message. User has to reclick the divs from 
the first one that chnaged color on the level to the last in the right order for the next level to start.


***How to Use Instructions***
1. Click the start to begin
2. Click the div that lights up
3. If clicked correctly next level will begin if not click the right div after the incorrect message pops up.
4. Repeat the procedure for levels 2 and 3.
5.After level 3 win is dispalyed and the game is done.




***Unsolved problems***
1. A few instances a div would dissappear if the div repeatedly changed color. I blieve the removeClass ends up 
      removing  div since it runs every 500 seconds. DIvs that end up repeating within the sequence get removed.
2. The game finishes at the level but I needed to have the start button turn into a reset button.
3. The div that changes color is not independent of the previous divs that changes color. So if level 1 div
      id 2 changes color then in level 2 div id 2 will change color first then another div. I dont want the
      sequence to build up like that. 







