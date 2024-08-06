const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'public')));

// This section defines and requires ejs and ejs-mate as the primary view engine.
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// This app.get function renders the home page at views/home.ejs
app.get('/', (req, res) => {
    res.render('home')
});
app.get('/cats', (req, res) => {
    res.render('cats')
})


app.listen(3000, () => {
    console.log('listening on port 3000!')
});