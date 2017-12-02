const express = require('express')
const app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, 'src')));
// viewed at http://localhost:8080
app.get('/',  (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))