import dns from 'dns/promises'

const adress = await dns.lookup('www.programmerzamannow.com')

console.info(adress.address)
console.info(adress.family)

