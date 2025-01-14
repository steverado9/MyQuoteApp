const Quote = document.getElementById('content');
const Button = document.querySelector('.btn');

//using an asynchronous function to call an asynchronous function
Button.addEventListener('click', async () => { //add an event listener to the button
    Quote.textContent = await getData(); //text content of the quote element should be the returned data
})

async function getData() { 
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
    return `"${randomQuote}" ~${randomAuthor}`; //return the randomquote and randomAuthor
}



