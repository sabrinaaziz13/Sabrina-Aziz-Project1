const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const QuestionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
// const homeElement = document.getElementById('home') //in an effort to remove  the home page game name...wasnt working, maybe come back later to troubleshoot. see line 22.

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  // homeElement.classList.remove('home') //in an effort to remove  the home page game name...wasnt working, maybe come back later to troubleshoot.
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  QuestionElement.innerText = question.question
  question.answers.forEach((answer) => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    } //is there another way?
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}
//might want to adjust this for me. make it simple.

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Is Jon Snow a bastard?',
    answers: [
      { text: 'Yes, he is the bastard of Ned Stark', correct: false },
      {
        text: 'No, he is son of King Robert Baratheon and true heir to the Iron Throne',
        correct: false
      },
      { text: 'No, he is son of Rhaegar Targaryen', correct: true },
      {
        text: 'Yes, his mother was a Wildling and his father was an unhonest Man of the Nightswatch',
        correct: false
      }
    ]
  },
  {
    question:
      'Which of the following is not a value in the fibonacci sequence?',
    answers: [
      { text: '610', correct: false },
      { text: '145', correct: true },
      { text: '0', correct: false },
      { text: '13', correct: false }
    ]
  },
  {
    question:
      'Which of the following statements about the periodic table of elements is false?',
    answers: [
      {
        text: 'The sodium atom contains 16 electrons and 16 protons',
        correct: true
      },
      { text: 'Fl, Cl, Br, and I are classified as Halogens', correct: false },
      {
        text: 'Hydrogen is the first element in the periodic table',
        correct: false
      },
      { text: 'Na has a mass of 22.99', correct: false }
    ]
  },
  {
    question: 'What is the sq rt of 144?',
    answers: [
      { text: '12', correct: true },
      { text: '14', correct: false },
      { text: '144', correct: false },
      { text: '1', correct: false }
    ]
  },
  {
    question: 'How many bones are in the human body?',
    answers: [
      { text: '216', correct: false },
      { text: '192', correct: false },
      { text: '221', correct: false },
      { text: '206', correct: true }
    ]
  },
  {
    question:
      'What is the following line after this lyric: How can you see into my eyes like open doors?...',
    answers: [
      { text: 'call my name and save me from the dark', correct: false },
      {
        text: 'Now that I know what Im without, you cant just leave me',
        correct: false
      },
      {
        text: 'Leading you down into my core where Ive become so numb',
        correct: true
      },
      {
        text: 'wake me up inside',
        correct: false
      }
    ]
  },
  {
    question: 'What does the word ergo mean?',
    answers: [
      {
        text: 'therefore',
        correct: true
      },
      {
        text: 'escargo',
        correct: false
      },
      {
        text: 'hearing aid',
        correct: false
      },
      { text: 'to move forward', correct: false }
    ]
  },
  {
    question:
      'Which of the following shows did NOT air on Cartoon Network in the 90s?',
    answers: [
      { text: 'Dragon Ball Z', correct: true },
      { text: 'Powerpuff Girls', correct: false },
      { text: 'Johnny Bravo', correct: false },
      { text: 'Ed, Edd n Eddy', correct: false }
    ]
  },
  {
    question: 'Mauritius is...',
    answers: [
      { text: 'the name of a famous king in the 1400s', correct: false },
      { text: 'a tarty desert served in Arab countries', correct: false },
      { text: 'a country in Asia', correct: false },
      { text: 'an island off the coast of Madagascar', correct: true }
    ]
  },
  {
    question: 'By what age do babies generally start cooing?',
    answers: [
      { text: '2 months', correct: true },
      { text: '7 weeks', correct: false },
      { text: '3 months', correct: false },
      { text: '3 weeks', correct: false }
    ]
  }
]
