const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');
const auth = require('../middleware/authMiddleware');

router.use(auth);

router.post('/', contatoController.criar);
router.get('/', contatoController.listar);
router.get('/:id', contatoController.buscarPorId);
router.put('/:id', contatoController.atualizar);
router.delete('/:id', contatoController.deletar);

module.exports = router;