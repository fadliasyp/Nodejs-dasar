import {EventEmitter} from 'events'
const emiter = new EventEmitter();

emiter.addListener('hello', (name) => {
    console.info(`helo ${name}`)
})
emiter.addListener('hello', (name) => {
    console.info(`hai ${name}`)
})

emiter.emit('hello', 'eko')
// di addlistener triger 'hello' nya harus sama dengan
// sama emiter.emit yaitu 'hello' nya
 emiter.addListener('helo', (name) => {
    console.info(`hahaha ${name}`)
 })
 emiter.emit('helo', 'kaka')