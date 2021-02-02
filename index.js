const express = require('express');
const env = process.env.NODE_ENV.trim() || "development";
const config = require('./config/config')[env];

const app = express();

require('./config/express')(app);

app.get('/', (req, res) => {
    res.render('home', {layout: false})
})

app.listen(config.PORT, ()=> console.log(`Server is running on port ${config.PORT}`))
