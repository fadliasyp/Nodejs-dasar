import fs from 'fs'

const reader = fs.createReadStream('target.log')
reader.addListener('data', (data) => {
    console.info(data.toString())
})
console.info('hahaha')