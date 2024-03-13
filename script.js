// DOM 
const quotCon = document.getElementById('quote-container');

const quoteText = document.getElementById('quote');

const authorName = document.getElementById('author');

const twitterBtn = document.getElementById('twitter');

const newQuoteBtn = document.getElementById('new-quote');

const loader = document.getElementById('loader');


// https://type.fit/api/quotes
//*********** TO GENRATE NEW QUOTE( new QUOTE from our API)*****************//

let apiQuote = [];

// SHOW LOADING     (this is the funtion to show loader and to it and to make it work)
function loading() {
    loader.hidden = false;
    quotCon.hidden = true
}

// HIDE THE LOADING
function complete() {
    quotCon.hidden = false;
    loader.hidden = true;
}

function newQuote() {

    loading()

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
    }else {
        quoteText.textContent = quote.Text
    }
  
    quoteText.textContent = quote.text

    complete()
}



async function getQuote() {
    const apiUrl = "https://type.fit/api/quotes"

    loading()
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json()

        console.log(apiQuote)

        newQuote()


    }catch(error) {
        console.log(error)
    }
} 

function tweetQuote () {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorName.textContent}`
    window.open(twitterUrl, "_blank")      // by adding underscore blank, it will open anew tab wen clicked
}



// Event Listener   (so that when we click on new quote button, it will bring new quote)
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)    //then we will call it like this, and it will open new quote
getQuote()

