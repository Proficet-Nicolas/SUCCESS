const Groupe = require('../models/groupe');

exports.createGroupe = (req, res, next) => {
    const groupe = new Groupe();
    groupe.groupname = req.body.groupname;
    groupe.speciality = req.body.speciality;
    
    groupe.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.getOneGroupe = (req, res, next) => {
    Groupe.findOne({
      _id: req.params.id
    }).then(
      (groupe) => {
        res.status(200).json(groupe);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
  exports.modifyGroupe = (req, res, next) => {
    const groupe = new Groupe({
      _id: req.params.id,
      groupname: req.body.groupname,
      speciality: req.body.speciality,
    });
    Groupe.updateOne({_id: req.params.id}, thing).then(
      () => {
        res.status(201).json({
          message: 'Groupe updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.deleteGroupe = (req, res, next) => {
    Groupe.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.getAllGroupes = (req, res, next) => {
    Groupe.find().then(
      (groupes) => {
        res.status(200).json(groupes);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };