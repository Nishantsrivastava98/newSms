const express = require('express')
const app = express()
const port = 3000;
const path = require('path');

const api = require('./routes/api');


app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile((path.join(__dirname, 'dist/index.html')));
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));