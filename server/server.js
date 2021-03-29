const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({message: 'It Works!'});
})

app.listen(3001, () => {
  console.log("API server listening on http://localhost:3001");
});
