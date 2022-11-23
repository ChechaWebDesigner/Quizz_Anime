import { questions } from "../data/questions.js";

const answers = [];

questions.forEach((question, i) => {
  answers[i] = question.answer;
});

export default answers;