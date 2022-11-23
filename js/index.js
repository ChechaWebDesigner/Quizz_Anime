import start_quizz from "./modules/start_quizz.js";

document.addEventListener("DOMContentLoaded", (e) => {
  start_quizz(
    "#btn-start",
    "#btn-change-question",
    "#container-begining",
    "#frm-info",
    "#container-questions",
    "#questions"
  );
});
