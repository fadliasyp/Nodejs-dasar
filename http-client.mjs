import https from 'https'

const endpoint = 'https://eod0ryx9vn1wl6z.m.pipedream.net'

const request = https.request(endpoint, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Accept'  : 'application/json'
    }    
}, (response) => {
    response.addListener('data', (data) => {
        console.info(`recive data : ${data.toString()}`)
    })
})

const body = JSON.stringify({
    firstName: 'eko',
    lastName: 'khanedy'
})

request.write(body)
request.end()