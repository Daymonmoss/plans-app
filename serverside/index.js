const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.post('/api/sendmail', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.status(200).send("I got ya!");

});


app.listen(80, function () {
	console.log('Server is up on port 80!');
});


