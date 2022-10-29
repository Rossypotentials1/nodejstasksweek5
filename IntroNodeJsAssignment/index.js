var path = require ('path')
var fs = require('fs')
var http = require ('http')
var server = http.createServer(function(request, response) {
   if(request.url === '/'){
        var filePath = filePath = filePath.join(__dirname, 'public', 'index.html')
        fs.readFile(filePath, 'utf8',(err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
        
   }

   if(request.url === '/contactPage.html'){
    var filePath = filePath = filePath.join(__dirname, 'public', 'contactPage.html')
    fs.readFile(filePath, 'utf8',(err, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data)
    })
    
}

if(request.url === '/aboutMe.html'){
    var filePath = filePath = filePath.join(__dirname, 'public', 'aboutMe.html')
    fs.readFile(filePath, 'utf8',(err, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data)
    })
    
}

})


const port = 8080


server.listen(port,  () => {
    console.log("server is running on port $ {port}")
})