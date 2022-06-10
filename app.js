const express = require('express');
const Router = require('./wallet/createMnemonic');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ['GET', 'POST'],
      credentials: true,            
    })
  );

app.get('/', function(req, res) {
    res.status(200).send({"message": "Mnemonic server is running..."});
  });

app.use('/wallet', Router);

app.listen(port, () => {
    console.log(`server start!`);
  });
  
  module.exports = app;