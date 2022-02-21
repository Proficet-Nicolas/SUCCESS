const express = require('express');
const router = express.Router();
const responseCtrl = require('../controllers/response');



router.get('/',  responseCtrl.getAllResponses);
router.post('/',  responseCtrl.createResponse);
router.get('/:id',  responseCtrl.getOneResponse);
router.put('/:id',  responseCtrl.modifyResponse);
router.delete('/:id',  responseCtrl.deleteResponse);
  

module.exports = router;