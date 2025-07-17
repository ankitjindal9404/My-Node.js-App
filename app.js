const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Initialize server in local dev environment, not in production
let server;
if (process.env.NODE_ENV !== 'production') {
  server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Export app and server for serverless environment
module.exports = { app, server };
