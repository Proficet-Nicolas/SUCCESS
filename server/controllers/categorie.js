const Categorie = require('../models/categorie');

exports.createCategorie = (req, res, next) => {
    const categorie = new Categorie();
    categorie.name = req.body.name;
    categorie.topic = req.body.topic;
    
    categorie.save().then(
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

  exports.getOneCategorie = (req, res, next) => {
    Categorie.findOne({
      _id: req.params.id
    }).then(
      (categorie) => {
        res.status(200).json(categorie);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
  exports.modifyCategorie = (req, res, next) => {
    const categorie = new Categorie({
      _id: req.params.id,
      name: req.body.name,
      topic: req.body.topic,
    });
    Categorie.updateOne({_id: req.params.id}, thing).then(
      () => {
        res.status(201).json({
          message: 'Categorie updated successfully!'
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
  
  exports.deleteCategorie = (req, res, next) => {
    Categorie.deleteOne({_id: req.params.id}).then(
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
  
  exports.getAllCategories = (req, res, next) => {
    Categorie.find().then(
      (categories) => {
        res.status(200).json(categories);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };