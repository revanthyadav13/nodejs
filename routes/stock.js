const path = require('path');

const express = require('express');

const stockController = require('../controllers/stock');

const router = express.Router();

router.post('/add-stock', stockController.postRequest);
router.get('/get-stocks', stockController.getRequest);
router.delete('/delete-stock/:id',stockController.deleteRequest);
router.post('/edit-stock/:id', stockController.postEditRequest);
router.put('/update-stock/:id',stockController.updateRequest);



module.exports = router;