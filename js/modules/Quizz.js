export default class Quizz {
  constructor(answers) {
    this.answers = answers;
    this.score = 0;
    this.noAnswer = 0;
  }

  check(answer) {
    if (answer === this.answers[this.noAnswer]) this.score++;
    this.noAnswer++;
  }

  total() {
    return Math.round((this.score * 100) / this.noAnswer);
  }
}
