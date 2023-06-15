const express = require("express");
const router = express.Router();
const {
  deleteQuestion,
  getAllQuestions,
  getQuestionById,
  insertQuestion,
  updateQuestion,
} = require("../controller/question.controller");

router.get("/", getAllQuestions);
router.get("/:id", getQuestionById);
router.post("/:id", insertQuestion);
router.patch("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

module.exports = router;
