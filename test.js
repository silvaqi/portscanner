const portscanner = require('portscanner')

const object1 = {http: 80, https: 443, ssh: 22}
//const format = Object.values(object1)

for(const property in object1){
    portscanner.checkPortStatus(`${object1[property]}`, '142.251.211.238', function (error, status){
        console.log(`${property}`, status)
    })
}