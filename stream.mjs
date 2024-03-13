import fs from 'fs'

const writer = fs.createWriteStream('target.log')

writer.write('fadli')
writer.write('asyp')
writer.write('jihan')
writer.end();

const reader = fs.createReadStream('target.log')
reader.addListener('data', (data) => {
    console.info(data.toString())
})
console.info('hahaha')