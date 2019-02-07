const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//git add .
//git commit -m ""
//git push heroku master
//heroku open
//console.developers.google.com
//passport js
