const http = require('http');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio  = require('cheerio');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const url = 'https://www.theguardian.com/uk'; //todo joblist for search_input -> (internal javascript code)
axios(url)
    .then(response => {
        const htmldata = response.data;
        //console.log(htmldata);
        const $ = cheerio.load(htmldata);
        const html = []
        $(".fc-item__title", htmldata).each(function() { 
          const text =   $(this).text() // filters the data by returning only the text content
          const link_href = $(this).find('a').attr('href'); // returns everything inside of the element "href" attribute
            html.push({
                text,
                link_href
            })
        })
        if (html.length > 0) {
            console.log('successfully scraped "', url, '" with', html.length, "rows");
            var startTime = performance.now()
            fs.writeFile('scrape_data.txt', htmldata,  err => {
                if (err) {console.log(`error: ${err}`);}
                });
                const filePath = path.join(process.cwd(), 'scrape_data.txt');
                var endTime = performance.now()
                console.log('local save at: "', filePath, '" took',(endTime - startTime), "milliseconds");
            
        }
        //console.log(html);
    }).catch(error => console.log(error));


const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    );

    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    console.log(`File path: ${filePath}`);
    console.log(`Content-Type: ${contentType}`)

    res.writeHead(200, {'Content-Type': contentType});

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});
var date = new Date();
server.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`No errors found. :) \n${date}`);
        console.log(`Server listening at port ${port}...`);
    }
});


