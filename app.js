const express = require('express');
const routers = require('./routes')
const conectaMongodb = require('./config/mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/', routers);
conectaMongodb();

app.listen(3000, () => console.log('App Online'));