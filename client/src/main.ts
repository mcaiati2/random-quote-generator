import './style.css'

const quoteButton = document.querySelector('#quote-btn');

// Make an http GET request to our Express server route '/api/quote' and get back a quote
async function getQuote() {
    const quoteOutput = document.querySelector<HTMLElement>('.quote');
    const catInput = document.querySelector<HTMLInputElement>('#category-input');
    const category = catInput?.value;
    const resObj = await fetch(`/api/quote?cat=${category}`);
    // needs to be parsed to JSON 
    const data = await resObj.json();

    if (data.quote && quoteOutput) {
        quoteOutput.style.color = 'initial';
        quoteOutput.innerText = data.quote;
    } else if (data.message && quoteOutput) {
        quoteOutput.style.color = 'red';
        quoteOutput.style.color = data.message;
    }

    console.log(data);
}


quoteButton?.addEventListener('click', getQuote);