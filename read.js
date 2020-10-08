let fs = require('fs')

let file = ' ' /* Fichier */

fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    let write = fs.createWriteStream(' ') /* Le nom de ta copie */

    read.on('data', (chunk) => {
        progress += chunk.length
        console.log("Read : " + Math.round(100 * progress / total) + "%")
    })
    read.on('end', () => {
        console.log("Finish.")
    })
})
