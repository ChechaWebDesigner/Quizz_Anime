import changeQuestion from "./change_question.js";
import validateInput from "./validate_input.js";

const d = document;

export default function (
  btnStart,
  btnChange,
  containerBegining,
  form,
  containerQuestions,
  containerMiniQuestion
) {
  const $btnStart = d.querySelector(btnStart),
    $containerBegining = d.querySelector(containerBegining);

  d.addEventListener("click", (e) => {
    if (e.target === $btnStart) {
      e.preventDefault();

      const $form = d.querySelector(form);

      if (!validateInput($form.txtName.value)) {
        d.body.removeChild($containerBegining);
        d.querySelector(containerQuestions).classList.remove("hidden");
        d.querySelector(containerQuestions).classList.add("center-all");
        changeQuestion(
          btnChange,
          containerMiniQuestion,
          parseInt($form.noQuestions.value),
          $form.txtName.value
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Advertencia!",
          text: "Debes de colocar tu nombre",
          background: "#000",
          color: "#ffffff"
        });
      }
    }
  });
}
