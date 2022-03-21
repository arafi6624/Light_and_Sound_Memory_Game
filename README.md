# Pre-work - The Tiles and Sound game

The Tiles and Sound Game is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Abdul Rafi

Time spent: 6 hours spent in total

Link to project: https://glitch.com/edit/#!/achieved-island-end

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

## Video Walkthrough (GIF)

Start and stop:
![](Start_Stop_Small.gif)

3 attempts and game lost:
![](Game_Lost_Small3.gif)

Full game won:
![](Game_Won.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- I used the HTML reference page on w3schools (https://www.w3schools.com/html/html_attributes.asp), color pallet from coolors (https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51), 
  MDN Web Docs for JS reference and to implement rng feature (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), rawpixel.com for the images (https://www.rawpixel.com/topic/12/pngs), 
  and note frequency values from marcgg blog (https://marcgg.com/blog/2016/11/01/javascript-audio/).  
  
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

- The challenge that I encountered in creating this submission was when I tried to implement the "three attempts" feature of the game. It was difficult for me to decide where to place the code that would increment the 'attempts' variable each time the user made a mistake. I wanted to increment the variable until it reached three attempts, after which the game would stop. I figured the code had to be inside the guess() function because it should run when the user makes a mistake. Next, I looked at the part of the guess() function that would invoke the loseGame() function when the user makes a mistake. I decided to put the block of code in the if-else statement before the loseGame() function is called. I realized that this should intercept the calling of the loseGame() function until the three attempts have been used up. Of course, the user had no idea they made a mistake so I had to use an alert to notify the user. Lastly, I wanted to reset the user's guess sequence up until the mistake and it took me a while to figure out how to do that. Through persistence, I was able to figure out that the 'guessCounter' variable was keeping track of the number of guesses of the sequence the user made and it was simply a matter of setting that to zero and calling the playClueSequence() function to replay the sequence up until that point to the user. Lastly, there was a bug where the number of attempts wouldn't reset after the game, and the game was lost immediately after the first mistake. Since the 'attempts' variable was keeping track of the number of attempts used, I knew it was simply a matter of setting it equal to zero at the start of every game but initializing it every time the startGame() function was called. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- After creating this submission, I don't have any particular questions about web development, but I am very interested in learning more about creating dynamic web applications with proper backend functionality using JavaScript. While I did learn the basics of Web Development using HTML, CSS, JS, and the Django framework through courses from Udemy, I'm still unfamiliar with using JavaScript to create the backend for web applications. I want to learn more about using React or Angular to create web applications and catch the benefits of using one over the other. I would also like to learn more about Node.js and its differences compared to React or Angular.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- If I had a few more hours to work on this project, I would spend them trying to improve the efficiency of the program. I've heard the saying "Bad programmers worry about the code. Good programmers worry about data structures and their relationships" from Linus Torvalds repeated many times in my academic journey and always tried to stick to it. While I may not be a great programmer, I understand the importance of creating efficient programs and in a world where time is everything, the efficiency of any program is the key. I would also try to create a better UI. A better visual experience for the user is one of the most important factors to developing any web application because the interaction between the user and the application itself is through the UI. I would add additional features such as a score counter, highest score counter, a global high score tracker and other interactive features that creates a sense of community and competition between all users of the application. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/BHj8S8H3Xu8)


## License

    Copyright Abdul Rafi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.N
