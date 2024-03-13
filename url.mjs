import {URL} from 'url'
const pzn = new URL ('https://www.programerzamannow.com/belajar?kelas=nodejs')


pzn.host = 'www.khanedy.com'
console.info(pzn.toString())
console.info(pzn.href)
console.info(pzn.protocol)
console.info(pzn.hostname)
console.info(pzn.pathname)
console.info(pzn.host)

