const fs = require('fs-extra')

fs.readJSON('cardData.json').then(cards => { 
    cards.map(card => { fs.appendFile('cardNames.json', JSON.stringify({ name: card.name, id: card.id, oracleId: card.oracle_id }) + "\n").then(() => {
        console.log('success!')
      })
      .catch(err => {
        console.error(err)
      })}) 
  })
  .catch(err => {
    console.error(err)
  })