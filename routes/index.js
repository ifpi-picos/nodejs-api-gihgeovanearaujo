const express = require('express');
const postagensRoutes = require('./postagensRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('App Online :)');
});

router.use('/postagens', postagensRoutes);

module.exports = router;

// Desenvolvimento de API com Node.js, Express e MongoDB.