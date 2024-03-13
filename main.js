// DOM 
const quotCon = document.getElementById('quote-container');

const quoteText = document.getElementById('quote');

const authorName = document.getElementById('author');

const twitterBtn = document.getElementById('twitter');

const newQuoteBtn = document.getElementById('new-quote');

const loader = document.getElementById('loader');

//GET QUOTE FROM API 

// https://api.quotable.io/random

//SHOW LOADING
const showLoading = () => {
    loader.hidden = false;
    quotCon.hidden = true;
}

// HIDDEN LOADING
const hideLoading = () => {
    if(!loader.hidden) {
        quotCon.hidden = false;
        loader.hidden = true
    }
}

const getQuote = async() => {              // using async and await method

    showLoading()
    const apiUrl = 'https://api.quotable.io/random';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json()
        // console.log(data) 

        if(data.author === '') {
            authorName.innerText = 'Unknown';
        }else {
            authorName.innerText = data.author;
        }


        // check quote length to determine the styling

        if(data.content.length > 50) {
            quoteText.classList.add('long-quote');
        }else {
            quoteText.classList.remove('long-quote')
        }

       
        quoteText.innerText = data.content
        
        hideLoading()
    } catch (error) {
        console.log('Error fetching quote', error)
            //retry fetching quote
    }
}

// Tweet
const tweetQuote = () => {
    const quote = quoteText.innerText;
    const author = authorName.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`

    window.open(twitterUrl, "_blank")
}

// Event listners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote()