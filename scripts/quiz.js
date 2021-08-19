const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

const correctAnswers = ['isosceles-triangle', 'obtuse-angled', 'acute-angled', 'acute-angled', 'right-angled'];

function calculateScore() {
  const formResults = new FormData(quizform);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // console.log("The score is "+score);
  outputEl.innerText = "The score is " + score+ " out of 5";
}

submitBtn.addEventListener("click", calculateScore);
