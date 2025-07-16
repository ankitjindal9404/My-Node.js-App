const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Vercel provides a dynamic port, use `process.env.PORT`

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Your other routes go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app for Vercel to use
module.exports = app;
