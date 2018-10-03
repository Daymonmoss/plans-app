const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));
app.options('*', cors())


const FindPlans = require('./src/controllers/FindPlans');
app.post('/api/getPlan', FindPlans);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'./../build/index.html'));
});

app.listen(8080, function () {
	console.log('CORS-ready server is running on localhost:80!');
});


