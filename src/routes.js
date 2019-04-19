const express = require('express');

const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FilleController');

routes.get('/', (req, res) => res.send('basic server is running'));

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post('/boxes/:id/file', multer(multerConfig).single('file'), FileController.store);


module.exports = routes;
