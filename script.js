const fs = require('fs')
let CONF_DATA

async function getConferenceData() {
    try {
        const data = fs.readFileSync('./data/conferences.json')
        CONF_DATA = JSON.parse(data)
    } catch (error) {
        console.log(error)
    }
}

getConferenceData()
console.log(CONF_DATA.length)