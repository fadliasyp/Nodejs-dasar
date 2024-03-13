import net from 'net'

const server = net.createServer((client) => {
    console.info(`client conected`)

    client.addListener('data', (data) => {
        console.info(`receive data ${data.toString()}`)
        client.write(`hello ${data.toString()}\r\n`)
    })
})
server.listen(3000, 'localhost')