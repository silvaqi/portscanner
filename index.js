const dns = require('dns');
const prompt = require('prompt')
const portscanner = require('portscanner')

function message(warning){
    warning = 'Put the url without protocol http/s'
    console.log(warning)
}
message()

prompt.start()

// My Version
/*prompt.get(['url'], function (error, result){
    dns.lookup(result.url, (err, address, family) => {
        console.log(address)
        const obj1 = {
            http: 80,
            https: 443,
            ssh: 22
        }
        portscanner.checkPortStatus(obj1.http, address, function (error, status){
            console.log(status)
        })
    })
})*/

// ChatGPT Version
prompt.get(['url'], function (error, result){
    dns.lookup(result.url, (err, address, family) => {
        console.log(address)
        const obj1 = {
            http: 80,
            https: 443,
            ssh: 22
        }
        for (const key in obj1) {
            portscanner.checkPortStatus(obj1[key], address, function (error, status){
                console.log(`${key}: ${status}`)
            })
        }
    })
})

