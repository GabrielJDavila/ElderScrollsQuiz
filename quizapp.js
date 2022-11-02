const startBtn = document.getElementById('start-btn');
const firstNxtBtn = document.getElementById('nxt-btn1');
const secondNxtBtn = document.getElementById('nxt-btn2');
const thirdNxtBtn = document.getElementById('nxt-btn3');
const fourthNxtBtn = document.getElementById('nxt-btn4');
const questBox = document.getElementById('quest-box1')
const questNumber = document.getElementById('quest-number');
const questTitle = document.getElementById('question-title1');
const correct = document.getElementById('correct');
const incorrect = document.getElementById('incorrect');
const answerContainer = document.getElementById('answer-container1');
let score = 0;

const question_numbers = ['question 1', 'question 2', 'question 3', 'question 4', 'question 5'];

const questions = [
  'Who is the god of Men?',
  'Name of secret Emperor guards?',
  'What is the name of the World?',
  'Who is the World Eater?',
  'How many Elder Scrolls Games are there?'
];

const answers = [
  ['Talos', 'Vushu', 'Matop', 'Monkey King'],
  ['Secret Service', 'The Daggers of Death', 'Shadow Creepers', 'The Blades'],
  ['Mundus', 'Arda', 'Erdu', 'Earth'],
  ['Mushu', 'Grigori', 'Alduin', 'Jerry']
];

const answerBtns = document.querySelectorAll('.answer-btn')

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hide')
  initializeFirstQuestion()
});

firstNxtBtn.addEventListener('click', () => {
  console.log("cherrios")
  firstNxtBtn.classList.add('hide')
  answerContainer.remove()
  correct.textContent = ''
  incorrect.textContent = ''
  initializeSecondQuestion()
});

secondNxtBtn.addEventListener('click', () => {
  console.log("cherrios")
  secondNxtBtn.classList.add('hide')
  initializeThirdQuestion()
});

thirdNxtBtn.addEventListener('click', () => {
  console.log("cherrios")
  thirdNxtBtn.classList.add('hide')
  initializeFourthQuestion()
});

fourthNxtBtn.addEventListener('click', () => {
  console.log("cherrios")
  fourthNxtBtn.classList.add('hide')
  initializeFifthQuestion()
});

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
         console.log('correct')
         score++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       } else {
         console.log('wrong')
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       }
     });
   });
};

const initializeSecondQuestion = () => {
  questBox.classList.remove('hide')
  questNumber.innerText = `${question_numbers[1]}`
  questTitle.innerText = `${questions[1]}`
  const answerContainerTwo = document.getElementById('answer-container2')
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
         console.log('correct')
         score++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       } else {
         console.log('wrong')
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       }
     });
   });
};

const initializeThirdQuestion = () => {
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
         console.log('correct')
         score++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       } else {
         console.log('wrong')
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       }
     });
   });
};

const initializeFourthQuestion = () => {
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
         console.log('correct')
         score++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       } else {
         console.log('wrong')
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       }
     });
   });
};

const initializeFifthQuestion = () => {
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
         console.log('correct')
         score++
         correct.textContent = 'Correct!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       } else {
         console.log('wrong')
         incorrect.textContent = 'Incorrect!'
         answerBtns.forEach((answ_btn) => {answ_btn.disabled = true});
         firstNxtBtn.classList.remove('hide')
       }
     });
   });
};
