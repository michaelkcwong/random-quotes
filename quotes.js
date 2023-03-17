const newQuoteButton = document.querySelector('#js-new-quote');
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
  console.log("quote button was clicked");
}