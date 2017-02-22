import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs'); //set ejs = embedded js, cerca ejs dentro la cartella views

server.get('/', (req, res) => {
  //res.send('Hello Express');

  //per far caricar euna pagina ejs
  //res.render('index');  // non c'è bisogno dell'estensione perchè render sa gia cosa prendere

  //posso anche passare un altro argomento
  res.render('index', {
    content: "..." //NOTA!!!: il contenuto con questi 3 puntini non verrà stampato perchè in index.ejs il content è stato messo con un id che viene renderizzato da react!!!
  });

});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
