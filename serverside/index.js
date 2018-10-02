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

app.listen(80, function () {
	console.log('CORS-ready server is running on port 80!');
});


