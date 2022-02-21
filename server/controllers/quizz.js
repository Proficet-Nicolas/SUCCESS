const Question = require('../models/question');

exports.createQuestion = (req, res, next) => {
    const question = new Question();
    question.question = req.body.question;
    question.reponse = req.body.reponse;
    question.questionId = req.body.questionId;
    
    question.save().then(
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

  exports.getOneQuestion = (req, res, next) => {
    Question.findOne({
      _id: req.params.id
    }).then(
      (question) => {
        res.status(200).json(question);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
  exports.modifyQuestion = (req, res, next) => {
    const question = new Question({
      _id: req.params.id,
      question: req.body.question,
      reponse: req.body.reponse,
      questionId: req.body.questionId,
    });
    Question.updateOne({_id: req.params.id}, thing).then(
      () => {
        res.status(201).json({
          message: 'Question updated successfully!'
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
  
  exports.deleteQuestion = (req, res, next) => {
    Question.deleteOne({_id: req.params.id}).then(
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
  
  exports.getAllQuizz = (req, res, next) => {
    Question.find().then(
      (questions) => {
        res.status(200).json(questions);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };