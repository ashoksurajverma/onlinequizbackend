const Question = require("../model/questions.model");

exports.getAllQuestions = (req, res, next) => {
  Question.find()
    .then((questions) => {
      res.status(200).json({
        questions: questions,
        success: true,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.getQuestionById = (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  Question.findById(id)
    .then((question) => {
      res.status(200).json({
        question: question,
        success: true,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.insertQuestion = (req, res, next) => {
  const { question, subject, answer, options } = req.body;
  const newQuestion = new Question({
    question: question,
    subject: subject,
    answer: answer,
    options: options,
  });
  newQuestion
    .save()
    .then((u) => {
      console.log(u);
      res.status(200).json({
        success: true,
        question: u,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.updateQuestion = (req, res, next) => {
  const { question, subject, answer, options } = req.body;
  const { id } = req.params;
  Question.findByIdAndUpdate(id, { question, subject, answer, options })
    .then((result) => {
      res.status(201).json({
        success: true,
        result: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.deleteQuestion = (req, res, next) => {
  const { id } = req.params;
  Question.findByIdAndDelete(id)
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
