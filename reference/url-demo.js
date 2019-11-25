const url = require('url')


//instantiate a new URL object
const myUrl = new URL("http://mywebsite.com:8000/hello.html?id=100&status=active")

//Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

//Host or root domain
console.log(myUrl.host)

//Hostname- doesn't include the port, if we have port 8000, host gets port, hostname does not
console.log(myUrl.hostname)

//Pathname - /hello.html
console.log(myUrl.pathname)

//Seralized query
console.log(myUrl.search)

//Params object - search params - create object of query
console.log(myUrl.searchParams)

//Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

//Loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`)
})