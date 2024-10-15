// Server - some software that is running on the computer. cycling and waiting.
// If you make a server locally, it will use your local ip address by default. 127.0.0.1 - local domain
import express from 'express';
import cors from 'cors';

// Common convention - calling on express, and you're stiring the data to the express app. this app now has a bunch of methods on it.
const app = express();

// We need a database of quotes
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

/*
Route that sends back a random quote from the database
- Create a GET route with the path of 'quote'
-Your callback should reference the responseObj and use an underscore for the requestObj
- Your code block should createa  variable randomQuote that is assigned a random string from the quotes array
- Use the responseObj.send method to send an object back with a property of quote that has the value of your randomQuote string
ie. it sends back an object like the one below:
{
  quote: 'Javascript is the tool that turnds ideas into reality
}
*/


// Making a route. Server is going to listen for a GET request. This is a GET route.
// On our computer, our local address/domain. localhost is the free domain that your computer's OS gives you. 3333 is the port.
// Every software on your computer has to run on a separate port. We're creating a server and it has to run on a unqiue port number that no other software is running on.

// 1 required argument, the route.
// Domain is going to be localhost:3333/

// if you wanted them to only have to type your domain, you'd enter it like this with a /.
// 1st argument is the request object, and then 2nd argument is the response object.
// requestObj is info you get from the browser.
// responseObj is what we use to send something back to the browser
// app.get('/', (_, responseObj) => {
//   responseObj.send('Hi there from the server');
// })
// we need to enter the second parameter, so we enter _ for the first one

// callback function
// app.get('/data', (_, responseObj) => {
//   const data = {
//     name: 'Mike',
//     age: 31
//   };

//   responseObj.send(data)
// });

// Allow other domains to make requests to our server
app.use(cors());

app.get('/api/quote', (_, responseObj) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  responseObj.send({
    quote: randomQuote
  });
})



// we choose a port number that isn't taken by any other program on your computer. 
// when the server starts up, we can make it do something when it starts
app.listen(3333, () => {
  console.log('Server started on port 3333');
});

// all client tools can make http requests. they are typically trigering those requests through url. our client side browser is making an http request to our backend server that's running in our terminal. 