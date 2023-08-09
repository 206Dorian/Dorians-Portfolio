const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

const startServer = () => {
  if (process.env.NODE_ENV === 'production') {
    // Serve static files from the React client
    app.use(express.static(path.join(__dirname, '../client/build')));

    // All other routes will be handled by the React client
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
};

startServer();