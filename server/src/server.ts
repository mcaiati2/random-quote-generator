import express from 'express';

const app = express();

const quotes = [
    'JavaScript is the language of the web. Embrace it!',
    'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    'The best way to learn JavaScript is to build projects.',
    'Debugging is like being the detective in a crime movie where you are also the murderer.',
    'Code is like humor. When you have to explain it, its bad.',
    'First, solve the problem. Then, write the code.',
    'JavaScript is the duct tape of the Internet.',
    'Learning JavaScript is a marathon, not a sprint.',
    'The only way to learn a new programming language is by writing programs in it.',
    'JavaScript is the art of turning coffee into code.',
    'Dont worry if it doesnt work right. If everything did, youd be out of a job.',
    'JavaScript is the Swiss Army knife of web development.',
    'The more you code, the better you get at it.',
    'JavaScript is the key to unlocking the full potential of the web.',
    'Keep calm and code JavaScript.'
  ];

// Random quote GET route
app.get('/api/quote', (_, responseObj) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  responseObj.send({
    quote: randomQuote
  });
})


// Start the server
app.listen(3333, () => {
  console.log('Server started on port 3333');
});
