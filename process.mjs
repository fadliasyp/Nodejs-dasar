import process from 'process'

process.addListener('exit', (exitCode) => {
    console.info(`NodeJs exit with code ${exitCode}`)
})

console.info(process.version)
console.info(process.argv)
console.table(process.report)

console.info('hello fadli') 
process.exit(1)
