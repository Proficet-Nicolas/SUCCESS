const express = require('express');
const router = express.Router();
const quizzCtrl = require('../controllers/quizz');



router.get('/',  quizzCtrl.getAllQuizz);
router.post('/',  quizzCtrl.createQuestion);
router.get('/:id',  quizzCtrl.getOneQuestion);
router.put('/:id',  quizzCtrl.modifyQuestion);
router.delete('/:id',  quizzCtrl.deleteQuestion);
  

module.exports = router;