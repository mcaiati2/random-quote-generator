import {Router, Request, Response} from 'express';
// axios allows you to send headers as a second argument
import axios from 'axios';
const router = Router();

const people = [
    {
        id: 1,
        name: 'JD'
    },
    {
        id: 2,
        name: 'Sarah'
    },
    {
        id: 3,
        name: 'Bob'
    }
];


// dynamic route. Get Person By ID. called once for every object in the array.
router.get('/api/person/:personId', (requestObj: Request, responseObj: Response) => {
  const person = people.find((personObj) => {
    // requestObj is all the info from the client
    if (personObj.id == Number(requestObj.params.personId)) {
        return personObj;
    }
    return false;
  });

  responseObj.json(person || {
    message: 'A person with that ID could not be found.'
  });
});

// :Response is telling ts that it's going to be a Response object
router.get('/api/quote', async (requestObj: Request, responseObj: Response): Promise<any> => {
    console.log(requestObj.query);
    // building url we're making a request with

    if (!requestObj.query.cat) {
        return responseObj.json({
            message: 'You must provide a cat parameter with the cateogry that you would like'
        });
    }
    
    const url = `https://api.api-ninjas.com/v1/quotes?category=${requestObj.query.cat}`;

    try {
    const res = await axios.get(url, {
        headers: {
            'X-API-Key': process.env.API_KEY
        }
    });

    // digging into the data array at the index of 0 and then returning it's quote property.
    console.log(res.data)
    // responseObj.send({
    //   quote: randomQuote
    // });

    responseObj.json({
        quote: res.data[0].quote
    });
} catch(error) {
        responseObj.json({
            message: 'You must type a known category'
        })
    }
  });

export default router;