const express = require('express');
const path = require('path');

const cors = require('cors');
require('dotenv').config(path.resolve(process.cwd(), '.env'))


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static('./img/', path.join(__dirname, './data/upload')));

app.options('*', cors());


const FindPlans = require('./src/controllers/FindPlans');
app.post('/api/getPlan', FindPlans);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'./../build/index.html'));
});


const port = process.env.PORT;

app.listen(port, function () {
	console.log(`CORS-ready server is running on localhost:${port}! Image files exposed at /img/`);
});


