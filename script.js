
async function getQuote () {
    const response = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
    const data = await response.json()
    return {
        author : data.data.author,
        quote : data.data.content
    }
}

function displayQuote() {
    const qCard = document.getElementById("quoteCard")
    getQuote()
    .then(({quote , author}) => {
        const authorDiv = document.createElement("div")
        const quoteDiv = document.createElement("div")
        authorDiv.innerHTML = author
        quoteDiv.innerHTML = quote
        authorDiv.setAttribute("id","authorDiv")
        quoteDiv.setAttribute("id","quoteDiv")
        qCard.appendChild(quoteDiv)
        qCard.appendChild(authorDiv)
    })
}

displayQuote()




