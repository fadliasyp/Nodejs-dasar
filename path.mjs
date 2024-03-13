import path from 'path'

const file = '/Users/khanedy/contoh.txt'

console.info(path.dirname(file))
console.info(path.basename(file))
console.info(path.extname(file))
console.info(path.delimiter)
console.info(path.isAbsolute(file))
console.info(path.normalize(file))
console.info(path.parse(file))
console.info(path.posix)

