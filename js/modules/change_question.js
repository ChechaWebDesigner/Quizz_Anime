import UI from "./UI.js";
import Quizz from "./Quizz.js";
import answers from "./getAnswers.js";
import { questions } from "./../data/questions.js";
const d = document;

export default function changeQuestion(
  btnQuestion,
  containerQuestions,
  max = 10,
  name
) {
  const $btnChange = d.querySelector(btnQuestion),
    $containerQuestions = d.querySelector(containerQuestions);

  let noQuestion = 0,
    answer = null;

  const game = new Quizz(answers);

  const generate = () => {
    const question = new UI(questions[noQuestion]);
    const questionHTML = question.createQuestion();
    $containerQuestions.innerHTML = "";
    $containerQuestions.insertAdjacentElement("afterbegin", questionHTML);
    noQuestion++;
  };

  generate();

  d.addEventListener("click", (e) => {
    if (e.target === $btnChange) {
      if (noQuestion < max && answer !== null) {
        generate();
        game.check(answer);
        answer = null;
      }

      if ($btnChange.textContent === "Finalizar" && answer !== null) {
        game.check(answer);
        const createTotal = new UI();
        const containerTotal = createTotal.createTotal(
          game.total(),
          game.noAnswer,
          game.score,
          name
        );
        $containerQuestions.innerHTML = "";
        $containerQuestions.insertAdjacentElement("afterbegin", containerTotal);
        $btnChange.remove();
      }

      if (max === noQuestion) {
        $btnChange.textContent = "Finalizar";
      }
    }

    if (e.target.matches(".option-answer")) {
      d.querySelectorAll(".option-answer").forEach((e) => {
        e.classList.remove("btn-active-answer");
      });
      e.target.classList.add("btn-active-answer");
      answer = parseInt(e.target.value);
    }
  });
}
