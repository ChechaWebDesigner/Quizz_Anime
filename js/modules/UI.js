const d = document;

export default class UI {
  constructor(question) {
    this.question = question;
  }

  createQuestion() {
    const container = d.createElement("article");
    container.classList.add(
      "flex",
      "flex-wrap",
      "justify-around",
      "gap-3",
      "lg:max-w-[900px]"
    );

    const btnDesciption = d.createElement("button");
    btnDesciption.textContent = this.question.question;
    btnDesciption.classList.add(
      "btn-secondary",
      "w-full",
      "bg-purple-900",
      "text-lg",
      "sm:text-xl",
      "cursor-text"
    );

    const containerImg = d.createElement("figcaption");
    containerImg.classList.add(
      "w-full",
      "max-h-[280px]",
      "flex",
      "justify-center"
    );

    const img = d.createElement("img");
    img.src = this.question.img;
    img.classList.add("rounded-lg", "w-full", "h-full");

    container.appendChild(btnDesciption);
    containerImg.appendChild(img);
    container.appendChild(containerImg);

    for (let i = 0; i < this.question.options.length; i++) {
      const buttonQuestion = d.createElement("button");
      buttonQuestion.value = i;
      buttonQuestion.textContent = this.question.options[i].toLocaleUpperCase();
      buttonQuestion.classList.add(
        "btn-secondary",
        "btn-question",
        "option-answer"
      );
      container.appendChild(buttonQuestion);
    }

    return container;
  }

  createTotal(total, noQuestions, totalAnswers, name) {
    const container = d.createElement("div");

    const containerImg = d.createElement("figcaption");
    containerImg.classList.add(
      "w-full",
      "max-h-[280px]",
      "flex",
      "justify-center"
    );

    const img = d.createElement("img");
    img.src =
      "https://avvesione.files.wordpress.com/2014/08/zankyou_no_terror-04-computer_program_girl-congratulations-anime_mascot-chibi-purple_hair-twintails.jpg";
    img.classList.add("rounded-lg", "w-full", "h-full");

    const btnDesciption = d.createElement("button");
    btnDesciption.textContent = "Quizz Finalizado";
    btnDesciption.classList.add(
      "btn-secondary",
      "w-full",
      "bg-purple-900",
      "text-lg",
      "sm:text-xl",
      "cursor-text"
    );

    let msgSpecial;

    if (noQuestions === 10)
      msgSpecial = ". Te invitamos a tomar el test de 15 preguntas";
    else if (noQuestions === 15)
      msgSpecial = ". Te invitamos a tomar el test de 20 preguntas";
    else msgSpecial = "";

    const descriptionText = d.createElement("p");
    descriptionText.textContent = `Felicidades ${name} haz contestado ${totalAnswers} respuestas correctas de ${noQuestions}, por lo que tu porcentaje es ${total}%${msgSpecial}`;
    descriptionText.classList.add(
      "btn-secondary",
      "text-base",
      "sm:text-lg",
      "bg-pink-800",
      "my-5",
      "text-justify"
    );

    containerImg.appendChild(img);
    container.appendChild(btnDesciption);
    container.appendChild(descriptionText);
    container.appendChild(containerImg);

    return container;
  }
}
