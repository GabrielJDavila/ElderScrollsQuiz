// declaring all variables and arrays to be used in js logic
const startBtn = document.getElementById('start-btn');
const firstNxtBtn = document.getElementById('nxt-btn1');
const secondNxtBtn = document.getElementById('nxt-btn2');
const thirdNxtBtn = document.getElementById('nxt-btn3');
const fourthNxtBtn = document.getElementById('nxt-btn4');
const finishBtn = document.getElementById('finish-btn');
const restartQuiz = document.getElementById('start-over');
const questBox = document.getElementById('quest-box1')
const questNumber = document.getElementById('quest-number');
const questTitle = document.getElementById('question-title1');
const correct = document.getElementById('correct');
const incorrect = document.getElementById('incorrect');
const answerContainer = document.getElementById('answer-container1');
const answerContainerTwo = document.getElementById('answer-container2');
const answerContainerThree = document.getElementById('answer-container3');
const answerContainerFour = document.getElementById('answer-container4');
const answerContainerFive = document.getElementById('answer-container5');
const answerBtns = document.querySelectorAll('.answer-btn')
let correctScore = 0, incorrectScore = 0;

// array of question numbers
const question_numbers = ['question 1', 'question 2', 'question 3', 'question 4', 'question 5'];

// array of questions to be asked
const questions = [
  'Who is the god of Men?',
  'Name of secret Emperor guards?',
  'What is the name of the World?',
  'Who is the World Eater?',
  'How many Elder Scrolls Games are there?'
];

// array of answers to chose from
const answers = [
  ['Talos', 'Vushu', 'Matop', 'Monkey King'],
  ['Secret Service', 'The Daggers of Death', 'Shadow Creepers', 'The Blades'],
  ['Mundus', 'Arda', 'Erdu', 'Earth'],
  ['Mushu', 'Grigori', 'Alduin', 'Jerry'],
  ['3', '5', '6', '11']
];

// all buttons to start quiz, go to next question, finish quiz, restart quiz
startBtn.addEventListener('click', () => {
  startBtn.classList.add('hide')
  initializeFirstQuestion()
});

firstNxtBtn.addEventListener('click', () => {
  firstNxtBtn.classList.add('hide')
  answerContainer.remove()
  correct.textContent = ''
  incorrect.textContent = ''
  initializeSecondQuestion()
});

secondNxtBtn.addEventListener('click', () => {
  secondNxtBtn.classList.add('hide')
  answerContainerTwo.remove()
  correct.textContent = ''
  incorrect.textContent = ''
  initializeThirdQuestion()
});

thirdNxtBtn.addEventListener('click', () => {
  thirdNxtBtn.classList.add('hide')
  answerContainerThree.remove()
  correct.textContent = ''
  incorrect.textContent = ''
  initializeFourthQuestion()
});

fourthNxtBtn.addEventListener('click', () => {
  fourthNxtBtn.classList.add('hide')
  answerContainerFour.remove()
  correct.textContent = ''
  incorrect.textContent = ''
  initializeFifthQuestion()
});

finishBtn.addEventListener('click', () => {
  finishBtn.classList.add('hide')
  answerContainerFive.remove()
  questNumber.classList.add('hide')
  correct.textContent = `You got ${correctScore} correct`
  incorrect.textContent = `You got ${incorrectScore} incorrect`
  if (correctScore == 5 && incorrectScore == 0) {
    questTitle.textContent = 'You are true Dragonborn!'
  } else if (correctScore == 4 && incorrectScore == 1) {
    questTitle.textContent = 'You are a true warrior of Talos!'
  } else if (correctScore == 3 && incorrectScore == 2) {
    questTitle.textContent = 'Not bad for a milk drinker!'
  } else if (correctScore == 2 && incorrectScore == 3) {
    questTitle.textContent = 'A mudcrab could do better.'
  } else {
    questTitle.textContent = 'Do you even know what Elder Scrolls is?'
  }
  restartQuiz.classList.remove('hide')
})

restartQuiz.addEventListener('click', () => { window.location.reload() });
// end of button functions

// code to initialize questions on screen
const initializeFirstQuestion = () => {
  questBox.classList.remove('hide')
  questNumber.innerText = `${question_numbers[0]}`
  questTitle.innerText = `${questions[0]}`
  answerContainer.insertAdjacentHTML('afterbegin',
  `<button class="answer-btn" value="correct">${answers[0][0]}</button>
   <button class="answer-btn">${answers[0][1]}</button>
   <button class="answer-btn">${answers[0][2]}</button>
   <button class="answer-btn">${answers[0][3]}</button>`)

   const answerBtns = document.querySelectorAll('.answer-btn')
   answerBtnsArr = Array.from(answerBtns)
   answerBtns.forEach((answerbutton) => {
     answerbutton.addEventListener('click', () => {
       const answerValue = answerbutton.value;
       if(answerValue == "correct") {
         correctScore++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       } else {
         incorrectScore++
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       }
     });
   });
};

const initializeSecondQuestion = () => {
  questNumber.innerText = `${question_numbers[1]}`
  questTitle.innerText = `${questions[1]}`
  answerContainerTwo.insertAdjacentHTML('afterbegin',
  `<button class="answer-btn">${answers[1][0]}</button>
   <button class="answer-btn">${answers[1][1]}</button>
   <button class="answer-btn">${answers[1][2]}</button>
   <button class="answer-btn" value="correct">${answers[1][3]}</button>`)

   const answerBtns = document.querySelectorAll('.answer-btn')
   answerBtnsArr = Array.from(answerBtns)
   answerBtns.forEach((answerbutton) => {
     answerbutton.addEventListener('click', () => {
       const answerValue = answerbutton.value;
       if(answerValue == "correct") {
         correctScore++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         secondNxtBtn.classList.remove('hide')
       } else {
         incorrectScore++
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         secondNxtBtn.classList.remove('hide')
       }
     });
   });
};

const initializeThirdQuestion = () => {
  questNumber.innerText = `${question_numbers[2]}`
  questTitle.innerText = `${questions[2]}`
  answerContainerThree.insertAdjacentHTML('afterbegin',
  `<button class="answer-btn" value="correct">${answers[2][0]}</button>
   <button class="answer-btn">${answers[2][1]}</button>
   <button class="answer-btn">${answers[2][2]}</button>
   <button class="answer-btn">${answers[2][3]}</button>`)

   const answerBtns = document.querySelectorAll('.answer-btn')
   answerBtnsArr = Array.from(answerBtns)
   answerBtns.forEach((answerbutton) => {
     answerbutton.addEventListener('click', () => {
       const answerValue = answerbutton.value;
       if(answerValue == "correct") {
         correctScore++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         thirdNxtBtn.classList.remove('hide')
       } else {
         incorrectScore++
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         thirdNxtBtn.classList.remove('hide')
       }
     });
   });
};

const initializeFourthQuestion = () => {
  questBox.classList.remove('hide')
  questNumber.innerText = `${question_numbers[3]}`
  questTitle.innerText = `${questions[3]}`
  answerContainerFour.insertAdjacentHTML('afterbegin',
  `<button class="answer-btn">${answers[3][0]}</button>
   <button class="answer-btn">${answers[3][1]}</button>
   <button class="answer-btn" value="correct">${answers[3][2]}</button>
   <button class="answer-btn">${answers[3][3]}</button>`)

   const answerBtns = document.querySelectorAll('.answer-btn')
   answerBtnsArr = Array.from(answerBtns)
   answerBtns.forEach((answerbutton) => {
     answerbutton.addEventListener('click', () => {
       const answerValue = answerbutton.value;
       if(answerValue == "correct") {
         correctScore++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         fourthNxtBtn.classList.remove('hide')
       } else {
         incorrectScore++
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         fourthNxtBtn.classList.remove('hide')
       }
     });
   });
};

const initializeFifthQuestion = () => {
  questBox.classList.remove('hide')
  questNumber.innerText = `${question_numbers[4]}`
  questTitle.innerText = `${questions[4]}`
  answerContainerFive.insertAdjacentHTML('afterbegin',
  `<button class="answer-btn">${answers[4][0]}</button>
   <button class="answer-btn" value="correct">${answers[4][1]}</button>
   <button class="answer-btn">${answers[4][2]}</button>
   <button class="answer-btn">${answers[4][3]}</button>`)

   const answerBtns = document.querySelectorAll('.answer-btn')
   answerBtnsArr = Array.from(answerBtns)
   answerBtns.forEach((answerbutton) => {
     answerbutton.addEventListener('click', () => {
       const answerValue = answerbutton.value;
       if(answerValue == "correct") {
         correctScore++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         finishBtn.classList.remove('hide')
       } else {
         incorrectScore++
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         finishBtn.classList.remove('hide')
       }
     });
   });
};
