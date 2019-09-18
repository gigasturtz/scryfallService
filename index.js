const fetch = require('node-fetch')
const fs = require('fs')


async function getURIFromScryfall() {
    const cardUri = await fetch('https://api.scryfall.com/bulk-data').then(response => response.json()).then(data => data.data[0].permalink_uri)
    return cardUri
}

async function getCardsFromCardUri() {
    const url = await getURIFromScryfall()
    fetch(url).then(r => r.json()).then(j => fs.writeFile("cardData.json", JSON.stringify(j), function(err) {
                        if(err) {
                            return console.log(err);
                        }
                    
                        console.log("The file was saved!")
                    }) )
}
getCardsFromCardUri()