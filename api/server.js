const express = require("express");
const cors=require("cors");

const app = express()
app.use(cors());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  

app.get('/', (req, res) => {
  res.send('Hello from index route')
})

app.get('/protected', (req, res) => {
  res.send('Hello from protected route!')
})

app.listen(4000, () => {
  console.log(` listening on port 4000`)
})