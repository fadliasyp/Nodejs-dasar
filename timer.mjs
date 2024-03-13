import timers from 'timers/promises'


// tidak promises
// setInterval(() => {
//     console.info(`sekarang waktu ${new Date()}`)
// }, 5000);

// await timers.setTimeout(1000)
// console.info(new Date())

for await (const startTime of timers.setInterval(5000, new Date())){
    // console.info(`start mulai dari ${new Date()}`)
    console.info(new Date())
}