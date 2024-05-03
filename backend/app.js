const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');

const port = 8080;
const app = express();



app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/professional', professionalRoutes);

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});