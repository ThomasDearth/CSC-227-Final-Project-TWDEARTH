const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('original_project'));

app.get('/', (req, res) => {
    // res.send('Hello World!');
    fs.readFile('original_project/finalProject.html', function(err, data) {
        if (err) {
            console.log("Whoops! Something went wrong reading the file.");
        } else {
            res.send(data.toString());
        }
    })
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});