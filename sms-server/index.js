require('dotenv').config();

const express = require('express');
const app = express()
const port = process.env.PORT;
const path = require('path');

const api = require('./routes/api');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile((path.join(__dirname, 'dist/index.html')));
});

app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).json('Something broke!')
});
app.listen(port, () => {
	console.log('Enviroment ->',process.env.NODE_ENV)
	console.log(`Example app listening at http://localhost:${port}`)});