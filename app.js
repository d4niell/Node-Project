const http = require('http')
const fs = require('fs')
const axio = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const port = 8000
const app = express()
const url = 'https://google.com'
const server = http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'text/html'})
    fs.readFile('index.html', function(error,data){
      if (error) {
        res.writeHead(404)
        res.writable("Error: " + error)
      } else {
        res.writable(data)
      }
      res.end()
    })
})
server.listen(port, function(error){
    if (error) {
      console.log('something went wrong:' + error)
    } else {
      console.log('Server is listening on port ' + port)
    }
})

axio(url)
    .then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      const articles = []
      $('.vcVZ7d', html).each(function(){
          const title =   $(this).text()
          const url   =   $(this).find('a').attr('href')
          articles.push({
            title,
            url
          })
      })
      console.log(articles)
    }).catch(err => console.log(err))