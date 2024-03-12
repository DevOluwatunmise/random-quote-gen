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
    console.log(quote);

    if(!quote.author){                          //in case the author name is not available or written
        authorName.textContent = 'unknown'
    }else {
        authorName.textContent =quote.author
    }

    // Check quote lenght to determing the styling

    if(quote.text.length > 50) {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.Text

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

// Event Listener   (so that when we click on new quote button, it will bring new quote)
newQuoteBtn.addEventListener('click', newQuote)

getQuote()

