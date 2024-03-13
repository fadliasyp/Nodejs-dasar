import readline from 'readline'
// import readline from 'readline/promises'
import process from 'process'

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question('masukan nama anda : ', (nama) => {
    input.question('masukan no hp anda : ', (noHp) => {
        console.info(`helo ${nama} nomor anda ${noHp}`)
        input.close()
    })
})

//pakai promise await 
// const answer = await input.question('nama kamu : ')
// const daerah = await input.question('nama daerah kamu : ')
// console.info(`ooh nama ${answer} dan daearah kamu ${daerah}`)

// input.close()