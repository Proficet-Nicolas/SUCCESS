const Response = require('../models/response');

exports.createResponse = (req, res, next) => {
    const response = new Response();
    response.response = req.body.response;
    
    response.save().then(
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

  exports.getOneResponse = (req, res, next) => {
    Response.findOne({
      _id: req.params.id
    }).then(
      (response) => {
        res.status(200).json(response);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
  exports.modifyResponse = (req, res, next) => {
    const response = new Response({
      _id: req.params.id,
      response: req.body.response,
    });
    Response.updateOne({_id: req.params.id}, thing).then(
      () => {
        res.status(201).json({
          message: 'Response updated successfully!'
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
  
  exports.deleteResponse = (req, res, next) => {
    Response.deleteOne({_id: req.params.id}).then(
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
  
  exports.getAllResponses = (req, res, next) => {
    Response.find().then(
      (responses) => {
        res.status(200).json(responses);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };