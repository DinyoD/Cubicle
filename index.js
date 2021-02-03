const express = require('express');

const env = process.env.NODE_ENV || "development";
const config = require('./config/config')[env];

const routes = require('./routes');

const app = express();

require('./config/express')(app);

app.use(routes);

app.listen(config.PORT, ()=> console.log(`Server is running on port ${config.PORT}`))
