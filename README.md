# Star Wars Legends Trivia

Star Wars Legends Trivia is an online quiz for Star Wars fans to test their knowledge of Legends material (previously known as the Expanded Universe, i.e. spinoff books and comics from before the newer Disney movies were released, which are now no longer considered part of the Star Wars canon). The site is targeted towards fans of Star Wars (especially superfans of this more niche part of Star Wars fandom), and fans of trivia games in general. 

The Star Wars Legends Trivia site is a fully responsive website that allows players to answer multiple choice trivia questions on desktop, tablet, or mobile. Players will see their score as they play, and will have the option to replay the trivia game as often as they like. They can also share their results after completing the quiz. 

![Responsive Mockup](LINK TO GO HERE)

## Features 

### Existing Features

- __The Star Wars Legends Trivia Logo and Heading__

  - 

![Logo](IMAGE TO GO HERE)

- __The Game Area__

  -  Questions are displayed in a random order (for replayability), and answers are also displayed randomly (so players can't simply memorize the order of the answers). 

![Game](IMAGE TO GO HERE)

- __The Score Area__

  - This section will allow the user to see exactly how many correct answers they have provided, and the number of total questions in the quiz. 

![score](IMAGE TO GO HERE)

For some/all of your features, you may choose to reference the specific project files that implement them.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

- A high score board, where players can log their score and compare it with other players'. This will require the data to be stored in a database, which is beyond my abilities at this stage, but will be added in the future. 

- Other Star Wars Trivia categories, like: the Original Trilogy, Prequels, Old Republic, and Disney Canon. This will give the player the option of playing multiple different trivia games with different subject matter. 

## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- All trivia questions were written by the developer. Answers were verified for accuracy on [Wookieepedia](https://starwars.fandom.com/wiki/Main_Page)
- The README structure and suggested content was from [Code Institute's Love Maths README template](https://github.com/Code-Institute-Solutions/readme-love-maths/blob/master/README.md).
- This article [CSS-Tricks](https://css-tricks.com/perfect-full-page-background-image/) was used for tips on how to make a full-page background image responsive. 
- [This page](https://www.w3schools.com/howto/howto_css_image_responsive.asp) on W3 Schools was used to learn how to make the logo image responsive.

### Media

- The background photo is from [Shutterstock](https://www.shutterstock.com/image-vector/star-warp-hyperspace-jump-traces-moving-1550816240)
- [CloudConvert](https://cloudconvert.com/) was used to convert all images to WEBP format.
- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)