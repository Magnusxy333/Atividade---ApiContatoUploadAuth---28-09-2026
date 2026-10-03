const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

router.post('/enviar', auth, upload.single('imagem'), uploadController.enviar);
router.get('/baixar/:id', uploadController.baixar);

module.exports = router;