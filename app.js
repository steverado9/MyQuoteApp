const body = document.querySelector('body')
const quote = document.getElementById('content');
const author = document.getElementById('author');
const button = document.querySelector('.btn');

//Using an onload function on the body element
async function myFunction() {
    const result = await getQuoteFromApi();
    quote.textContent = `"${result.randomQuote}"`;
    author.textContent = `~${result.randomAuthor}`;
}

//using an asynchronous function to call an asynchronous function
button.addEventListener('click', async () => { //add an event listener to the button
    const result = await getQuoteFromApi(); //await and async function go together. The function is called inside a variable
    quote.textContent = `"${result.randomQuote}"`; //called the value of randomquote using it's key
    author.textContent = `~${result.randomAuthor}`; //called the value of random author using it's key
})

async function getQuoteFromApi() {
    let randomQuote = "";
    let randomAuthor = "";
    const url = "https://dummyjson.com/quotes/random"; //putting the url where you'll get data inside url variable
    try { //try
        const response = await fetch(url); //fetch the data using the url 
        if (!response.ok) { //if the fetched data is not okay
            throw new Error(`Response status: ${response.status}`); //throw this error
        }

        const json = await response.json(); //we put response.json inside a json variable
        randomQuote = json.quote; //we get the quote and put it inside a variable
        randomAuthor = json.author; //we get the author and put it inside a variable

    } catch (error) { //we catch the error
        console.error(error.message); //display this error message
    }
    return {
        randomQuote: randomQuote,
        randomAuthor: randomAuthor
    } //return the randomquote and randomAuthor inside an object
}



