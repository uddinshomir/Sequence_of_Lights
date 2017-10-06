*** Shomir Uddin / October 5th,2017 ***

# Sequence of Lights Proposal

## What is Sequence of Lights?

-There are several tiles on the page.The tile lights up and the user has to click the tiles that lights up in the order that it lights up.In order to win the user has to get through level 5.I want to make this game because I played a similiar game for a while and really enjoyed it. I can't recall the name of the game however. 

## Wireframe

https://github.com/uddinshomir/Sequence_of_Lights/blob/master/Pages_Wireframe.JPG
https://github.com/uddinshomir/Sequence_of_Lights/blob/master/Game_Page_Wireframe.JPG


## Initial thoughts on game structure
-I am not sure how I will randomize the tile the lights up. I am also how I will include the build of levels.Level 1 is where 1 tile glows up. Level 2 is where 2 light up and the user has to click both in the proper order.this gradual increase in tile lighting up  is something I am not sure how to implement right now. If I can I will increase the number of level required to win. I chose 5 since its a small testable number.The focus isn't the complexity of the game yet but getting the basics establish. The game is also a very scaleable game where more can always be add and things can vary. 

Additional ideas-Different modes
            
Crazy Mode - There is no order any number of tile can light up at any time.The speed of lighting will be set to fast mode possible, where user is able to see the light up but it will require heavy attention.
Tile increase- Light up happens and # of tile increases as well.
Complete randomness- Random number of tiles with random number of light ups with random number  of speed. 
Infinite levels- No way to win. User just keeps going on score based on what level you got to is recorded. 


## Phases of Completion

        Phase 0
                
                -Set number of tiles. I decided (5x5) 25 tiles in total.
                -Place 5x5 tiles on site.



        Phase 1

                -Have a start button that begins the process of lighting up. Event listener.
                - Indicate level 1. 
                - Get tile to light up.

        Phase 2 

                - Get mouse to click on light and indicate level 1 ends and level 2 begins. 
                - If wrong tile is click indicate user loses. 
                - Get two  different  randome tiles to light up on level 2. Must refresh to see randomness. 
                - If any wrong tile is clicked on any level indicate user loses. 
        
        Phase 3
                - repeat mouse click both lights on level 2 and level 2 ends level 3 begins.\
                - Get three random tiles to light up on level 3. Must refresh to see randomness.
                - Repeat process of clicking on said number of tiles and level ending.
                - Add 4 tiles that light up on level 4 and 5 that light up on level 5. Be able to 
                  see the order is random and that clicking on proper sequence ends level.

        Phase 4
                - Level 5, no level 6 starts, user is indicated they won the Sequence of Lights. 


## Links and Resources


