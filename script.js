// DOM 
const quotCon = document.getElementById('quote-container');

const quoteText = document.getElementById('quote');

const authorName = document.getElementById('author');

const twitterBtn = document.getElementById('twitter');

const newQuoteBtn = document.getElementById('new-quote');


// https://type.fit/api/quotes
//*********** TO GENRATE NEW QUOTE( new QUOTE from our API)*****************//

let apiQuote = [];

function newQuote() {
    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
    // console.log(quote)

    authorName.textContent = quote.author
    quoteText.textContent = quote.text
}

async function getQuote() {
    const apiUrl = "https://type.fit/api/quotes"

    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json()

        console.log(apiQuote)

        newQuote()


    }catch(error) {
        console.log(error)
    }
}

getQuote()

