console.log("works");
const questBoxOne = document.getElementById('quest-box1');
const questBoxTwo = document.getElementById('quest-box2');
const firstAnswerBtns = document.querySelectorAll('.answer-btn1');
const nxtBtn = document.querySelector('.nxt-btn');

function questionCorrect() {
  const questTitleOne = document.getElementById('question-title1');
  questTitleOne.insertAdjacentHTML('afterend', '<p>That is Correct!</p>');
};

firstAnswerBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const btnValue = btn.value;
    console.log(btnValue);
    if(btnValue == 'correct') {
      alert("correct")
      firstAnswerBtns[0].style.backgroundColor = 'green';
      questionCorrect();
      nxtBtn.style.display = 'block';
    };
  });
});
