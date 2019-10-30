const mongoose = require('mongoose');

function conecta () {
  
  mongoose.connect(
    'mongodb://webuser:web12345@ds135128.mlab.com:35128/aula-web',
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const db = mongoose.connection;
  db.on('error', (error) => console.error('error: ', error));
  db.once('open', () => console.info('MongoDB conectado!'));
}

module.exports = conecta;
