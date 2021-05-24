const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/ok', (req, res) => {
  res.send('ok');
});

app.get('/not-found', (req, res) => {
  res.status(404).send('not found');
});

app.get('/error', (req, res) => {
  console.log("[ERROR] WAT WOOOT " + new Date());
  res.status(500).send("error");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})