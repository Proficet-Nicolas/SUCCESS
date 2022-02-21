const express = require('express');
const router = express.Router();
const categorieCtrl = require('../controllers/categorie');



router.get('/',  categorieCtrl.getAllCategories);
router.post('/',  categorieCtrl.createCategorie);
router.get('/:id',  categorieCtrl.getOneCategorie);
router.put('/:id',  categorieCtrl.modifyCategorie);
router.delete('/:id',  categorieCtrl.deleteCategorie);
  

module.exports = router;