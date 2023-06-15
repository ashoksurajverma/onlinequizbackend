exports.getAllQuestions = (req, res, next) => {
  res.status(200).json({
    questions: [],
    success: true,
  });
};

exports.getQuestionById = (req, res, next) => {
  res.status(200).json({
    question: {},
    success: true,
  });
};

exports.insertQuestion = (req, res, next) => {
  res.status(200).json({
    message: "Question inserted",
    success: true,
  });
};

exports.updateQuestion = (req, res, next) => {
  res.status(200).json({
    message: "Question updated",
    success: true,
  });
};

exports.deleteQuestion = (req, res, next) => {
  res.status(200).json({
    message: "Question deleted",
    success: true,
  });
};
