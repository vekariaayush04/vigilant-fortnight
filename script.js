
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
    let n = qCard.childElementCount
    console.log(n);
    
    if(n > 0){
        const authorDiv = document.getElementById("authorDiv")
        const quoteDiv = document.getElementById("quoteDiv")
        qCard.removeChild(authorDiv,qCard)
        qCard.removeChild(quoteDiv,qCard)
    }
    getQuote()
    .then(({quote , author}) => {
        const authorDiv = document.createElement("div")
        const quoteDiv = document.createElement("div")
        authorDiv.innerHTML = `~ ${author}`
        quoteDiv.innerHTML = quote
        authorDiv.setAttribute("id","authorDiv")
        quoteDiv.setAttribute("id","quoteDiv")
        qCard.appendChild(quoteDiv)
        qCard.appendChild(authorDiv)
    })
}

displayQuote()

const button = document.getElementById("addQuote")
button.addEventListener("click",(e) => {
    e.preventDefault()
    displayQuote()
})

const button2 = document.getElementById("copyQuote")
button2.addEventListener("click",(e) => {
    e.preventDefault()
    const quoteDiv = document.getElementById("quoteDiv")
    navigator.clipboard.writeText(quoteDiv.innerHTML)
        .then(() => {
            alert("Quote copied to clipboard successfully");
        })
        .catch(err => {
            console.error("Error copying text: ", err);
        })
    // alert("Quote copied to clipboard successfully")
    
})

const button3 = document.getElementById("share")
button3.addEventListener("click",(e) => {
    e.preventDefault()
    const qCard = document.getElementById("quoteCard")
    const content = qCard.innerText
    const url = `https://twitter.com/intent/tweet?text=${content}`
    window.open(url, "_blank")    
})







