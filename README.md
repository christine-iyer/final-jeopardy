### Practice What You Learned

* jService
* jService API
* jService is an API that has Jeopardy trivia questions and answers available to the public.

http://jservice.io/

## Make a Jeopardy Trivia App using jService!

### Sample Jeopardy Trivia App appearance

&#9744; Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive.

&#9744; On click, have this button make a GETrequest to get random trivia data. Let's start you off with a win by giving you the URL: http://jservice.io/api/random

&#9744; Make some html elements like a divwhere you will display the question, category and points. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).

&#9744; Make another divin your HTML where you display the answer

&#9744; Add an on click function that toggles whether or not you can see the answer.

&#9744; Add other elements to your page to make it make sense and look good (see attached image)

&#9744; Make a divthat has an h2and two buttons

&#9744; Inside the h2keep score, start at 0

&#9744; Make one buttonadd the points to the score and the other to subtract points from the score (just add or subtract 100 points using the points value from jService is Hungry for More)

&#9744; Add a little style and color to your app


&#9744; Once Completed deploy using NPM RUN BUILD && Netlify

&#9744; This should be pushed to github as a repo. The repo is the deliverable.
 
&#9744; In the readme of your project link to your live Netlify link

### Hungry for More?

* jService+

&#9744; Use the points provided for the question to add and subtract from the score React docs: lifting state up

&#9744; Create a third buttonthat resets the score to 0

&#9744; Make another buttontitled Get 10 Questions.

&#9744; Make a request to get random trivia data that returns 10 items: ex: 'http://jservice.io/api/random?count=10'

&#9744; Use what you learned today to display all 10 of the questions.

&#9744; Include a button with each of the questions to reveal that will reveal the answer when clicked. (You may find it easy to reveal ALL the answers, revealing just the answer of one question is challenging!)

&#9744; Use the documentation to look at the categories that are available with jService. Choose 1. Make a request to get the trivia information for that category. Display them on your page in the same way as before (a question with an answer button);

&#9744; Research other APIs! Find one that looks interesting and make a "GET" request for some data.



```jsx
{
"id": 7427,
"answer": "Sinclair Lewis",
"question": "Author who briefly worked as a janitor at Upton Sinclair's commune",
"value": 400,
"airdate": "1986-09-08T12:00:00.000Z",
"created_at": "2022-07-27T00:28:51.776Z",
"updated_at": "2022-07-27T00:28:51.776Z",
"category_id": 1004,
"game_id": 4080,
"invalid_count": null,
"category": {
"id": 1004,
"title": "\"lewis\" & \"clark\"",
"created_at": "2022-07-27T00:28:51.574Z",
"updated_at": "2022-07-27T00:28:51.574Z",
"clues_count": 5
}
}
```

random.js

```
https://jservice.io/api/random
```