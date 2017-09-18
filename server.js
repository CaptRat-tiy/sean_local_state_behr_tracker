const express = require('express');
const path = require('path');
//what does line 4 do?  App opens on localhost:8080
const port = process.env.PORT || 8081;
const app = express();
const DIST_DIR = path.resolve(__dirname, "dist");

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'))
});

app.listen(port);
// app.listen(process.env.PORT || 8080);
console.log('Server started');
