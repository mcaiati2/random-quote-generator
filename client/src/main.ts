import './style.css'

// Mkae an http GET request to our Express server route '/api/quote' and get back a quote
async function getQuote() {
    const resObj = await fetch('/api/quote')
    // needs to be parsed to JSON 
    const data = await resObj.json();

    console.log(data);
}


getQuote();