const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Ensure you're using the port from environment variable

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app and server for tests
module.exports = { app, server };
