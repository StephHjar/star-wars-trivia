# Star Wars Legends Trivia

Star Wars Legends Trivia is an online quiz for Star Wars fans to test their knowledge of Legends material (previously known as the Expanded Universe, i.e. spinoff books and comics from before the newer Disney movies were released, which are now no longer considered part of the Star Wars canon). The site is targeted towards fans of Star Wars (especially superfans of this more niche part of Star Wars fandom), and fans of trivia games in general. 

The Star Wars Legends Trivia site is a fully responsive website that allows players to answer multiple choice trivia questions on desktop, tablet, or mobile. Players will see their score as they play, and will have the option to replay the trivia game as often as they like. They can also share their results after completing the quiz. Questions are displayed in a random order for replayability. 

Responsive Mockup from [ui.dev](https://ui.dev/amiresponsive):
![Responsive Mockup](assets/images/README/responsive-layout.png)

## Wireframes

Wireframes were created before development, for desktop, tablet, and mobile. This helped to guide design and code structure.

### Desktop Wireframes
![Desktop Wireframe for Results Screen](assets/images/README/Wireframe-Desktop-Gameplay.png)
![Desktop Wireframe for Results Screen](assets/images/README/Wireframe-Desktop-Results.png)

### Tablet Wireframes
![Tablet Wireframe for Results Screen](assets/images/README/Wireframe-Tablet-Gameplay.png)
![Tablet Wireframe for Results Screen](assets/images/README/Wireframe-Tablet-Results.png)

### Mobile Wireframes
![Mobile Wireframe for Results Screen](assets/images/README/Wireframe-Mobile-Gameplay.png)
![Mobile Wireframe for Results Screen](assets/images/README/Wireframe-Mobile-Results.png)

## Features 

### Existing Features

- __The Star Wars Legends Trivia Logo and Heading__

  - The logo functions as a heading describing the purpose of the site (trivia related to Star Wars Legends). Alt text is included for screen readers, and the logo is responsive (changes size and layout depending on the screen size.)
- Logo on Desktop:
![Logo on Desktop](assets/images/README/header-desktop.png)
- Logo on Mobile:
![Logo on Mobile](assets/images/README/header-mobile.png)

- __The Instructions Area__

- The instructions area gives the user clear instructions about how to play the game. There is an X in the top right corner to close the instructions when they are no longer needed. 
- ![Instructions Area](assets/images/README/instructions-area.png)

- __The Game Area__

-  Questions are displayed in a random order (for replayability), along with 3 answer options in the buttons below. 
- The game area (questions change every time an answer is selected): 

- ![Game Area](assets/images/README/game-area.png)

- __The Score Area__

- This section will allow the user to see how many correct answers they have provided, against the total number of questions in the quiz. 

- ![Score Area](assets/images/README/score-area.png)

- __Footer__

- The footer links the player to Wookieepedia (the Star Wars Wikipedia), to help brush up their Star Wars knowledge. 

- ![Footer](assets/images/README/footer.png)

### Features Left to Implement

- A high score board, where players can log their score and compare it with other players'. This will require the data to be stored in a database, which is beyond my abilities at this stage, but will be added in the future. 

- Other Star Wars Trivia categories, like: the Original Trilogy, Prequels, Old Republic, and Disney Canon. This will give the player the option of playing multiple different trivia games with different subject matters. 

- A "Contact Me" page, so players can give direct feedback to the developer, including suggestions for new questions, bug reports, and features requests. Using JavaScript libraries to create a functioning Contact Me form was beyond the scope of this project at this time. 

## Testing 

### Manual Testing
- This page was manually tested for functionality and responsiveness on the following devices: iPad Air, iPhone XR, iPhone 12 Pro Max, MacBookAir, and MacBook Pro. It was manually tested in both Chrome and Safari. 

- Chrome Developer tools were used to test responsiveness - every device option was tested, and I checked all screen sizes from 300px to 3000px. 

- WAVE was used to generate an accessibility report, with no errors found.
- ![WAVE accessibility report](assets/images/README/wave-accessibility.png)

- __Lighthouse Testing__ 
- Lighthouse within Chrome Developer Tools was used to test for Performance, Accessibility, Best Practices, and SEO. 
- Desktop Results: 
![Desktop Lighthouse Test Results](assets/images/README/lighthouse-desktop.png)
- Mobile Results: 
![Mobile Lighthouse Test Results](assets/images/README/lighthouse-mobile.png)
- Scores for Performance and Best Practices are lower on Mobile because fixed image sizes are not specified (for the header and lightsaber images), which causes longer loading times. While not optimal, this is intentional so that the image size adjusts with the screen size, to make the site responsive. 

### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fstephhjar.github.io%2Fstar-wars-trivia%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fstephhjar.github.io%2Fstar-wars-trivia%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - script.js: When first passed, 1 extra semicolon and 3 missing semicolons were found. On second pass, no errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
        - There are 23 functions in this file.
        - Function with the largest signature take 1 arguments, while the median is 0.
        - Largest function has 8 statements in it, while the median is 3.
        - The most complex function has a cyclomatic complexity value of 8 while the median is 1.
    - questions.js: No errors were found when passing through the official [Jshint validator](https://jshint.com/). No metrics were returned.

### Fixed Bugs

- The check answer function was not working correctly because the answers in each button were set to 'text-transform: uppercase', which meant they did not match the text in the array. Removed the text-transform and the function started working correctly.

- The background colour of each button was set to change to red or green if the answer was incorrect (red) or correct (green), but then background colour would stay red or green throughout the next questions. Added an 'onmouseup' event to the 'renderNextQuestion' function that reset the styling to null (CSS default). This resolved the error. Used [this page](https://stackoverflow.com/questions/10698942/how-to-return-a-javascript-set-style-property-to-css-default) on StackOverflow to help troubleshoot.

- The drop shadow that appears on each button on hover was not working if that button was clicked to answer the previous question. Changed CSS style rule that removes the drop shadow from ":focus" to ":active" and this resolved the error, as the button is no longer active after it has been clicked, but it is still in focus. Removed the drop shadow from smaller screen size devices / touch screen devices as the active property stays active after a tap is over.
- The checkAnswer and renderNextQuestion functions were running twice on touch screen devices, due to the screen sometimes reading both 'touchstart' and 'mousedown', and 'touchend' and 'mouseup' events on buttons. Added scripting to detect whether a user is on a touchscreen device, and only running one event listener as relevant.

- The function to tell whether a user was on a touch screen device was also reading my Macbook Air as a touch screen device, which meant the buttons were not working on my laptop (were waiting for touchstart and touchend events, instead of mousedown and mouseup events). I found code on [Codeburst.io](https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685) that reads whether a touch event has actually happened, instead of whether a device is touch screen enabled, and this resolved the error. 

- Every time the instructions window was opened by clicking "How to Play", the page reloaded entirely. I used StackOverflow to troubleshoot, and discovered via [this page](https://stackoverflow.com/questions/4823973/javascript-page-reloads-with-eventlistener-click) that this was because the "How to Play" link was empty (a href="") instead of (a href="#").

- I was getting 3 errors in the [WAVE Accessibility Report](https://wave.webaim.org/) due to having buttons with no content. My 3 answer buttons had no content in the main HTML document, as the answers are populated using JavaScript. I tried to solve this by adding aria-labels within the same JavaScript function, but this didn't resolve the error, and just resulted in redundant aria-labels. I solved it by adding placeholder text in the HTML document ("Answer A", "Answer B", and "Answer C") which will be overwritten by the JavaScript function. 

### Unfixed Bugs

- None

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - From [the GitHub repository](https://github.com/StephHjar/star-wars-trivia), navigate to the Settings tab 
  - On the left-hand side of the page, select the 'Pages' option
  - At the top of the page under 'Source', select 'Branch: main' from the first dropdown menu. Select '/(root)' from the second dropdown menu. Click save.
  - A notice will appear above the Source section saying 'Your site is ready to be published at' followed by the URL, with a blue background
  - Once the site is published, this notice will update to 'Your site is published at', followed by the URL, with a green background

The live link can be found here - https://stephhjar.github.io/star-wars-trivia

## Credits 

### Content 

- All trivia questions were written by the developer. Answers were verified for accuracy on [Wookieepedia](https://starwars.fandom.com/wiki/Main_Page)
- The README structure and suggested content was from [Code Institute's Love Maths README template](https://github.com/Code-Institute-Solutions/readme-love-maths/blob/master/README.md).
- This article [CSS-Tricks](https://css-tricks.com/perfect-full-page-background-image/) was used for tips on how to make a full-page background image responsive. 
- [This page](https://www.w3schools.com/howto/howto_css_image_responsive.asp) on W3 Schools was used to learn how to make the logo image responsive.
- [This page](https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array) on StackOverflow was used to understand how to select a random object from an array.
- Code Insitutute's [Love Maths Walkthrough](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=first) was used for help in connecting event listeners to buttons and for incrementing the score.
- [This code on Hubspot](https://blog.hubspot.com/website/scrolling-text-css) was used to add the scrolling text to the splash page.
- Part of [this code on GeeksforGeeks](https://www.geeksforgeeks.org/how-to-detect-touch-screen-device-using-javascript/?ref=lbp) was used to detect whether a user is on a touch screen device. 
- Part of [this code on codeburst.io](https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685) was used to detect whether a touch event has actually happened, and adjust button behaviour accordingly. 
- Code from [CSS-Tricks](https://css-tricks.com/adding-stroke-to-web-text/) was used to add an outline to yellow text.
- I used [this thread](https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript) on Stack Overflow (and specifically adapted [this response](https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript) and [this response](https://stackoverflow.com/a/30810322)) to write the shareResults function, allowing the user to copy and paste their results to and from their clipboard.
- [This page on StackOverflow](https://stackoverflow.com/questions/4823973/javascript-page-reloads-with-eventlistener-click) was used to troubleshoot when an empty 'a' element was causing the page to reload every time an event listener was called.

### Media

- The background photo is from [Shutterstock](https://www.shutterstock.com/image-vector/star-warp-hyperspace-jump-traces-moving-1550816240)
- [CloudConvert](https://cloudconvert.com/) was used to convert all images to WEBP format.
- The R2D2 icon used in the Favicon is from [Icon-Icons.com](https://icon-icons.com/download/34499/PNG/512/).
- Lightsaber image in the opening scroll is by Robert W. Schönholz on [Pixabay](https://pixabay.com/users/robertschoenholz-3164230/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2908144>)
- [Favicon.io](https://favicon.io/) was used to create the favicon. 
- [Google Fonts](https://fonts.google.com/specimen/Oswald) was used for the Oswald font.
- [TinyPNG](https://tinypng.com/) was used to compress images.
- [Pixlr](https://pixlr.com/x/#editor) was used to edit the logo for use on smaller devices. 

### Thank You
- To the Code Institute Slack community for feedback and support! 
- To my mentor, Narender, for invaluable feedback throughout the project, and for pushing me to figure out my own solutions! 