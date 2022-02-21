const express = require('express');
const router = express.Router();
const groupeCtrl = require('../controllers/groupe');



router.get('/',  groupeCtrl.getAllGroupes);
router.post('/',  groupeCtrl.createGroupe);
router.get('/:id',  groupeCtrl.getOneGroupe);
router.put('/:id',  groupeCtrl.modifyGroupe);
router.delete('/:id',  groupeCtrl.deleteGroupe);
  

module.exports = router;