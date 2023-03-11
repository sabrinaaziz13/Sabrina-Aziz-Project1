const playButton = document.getElementById('play-btn')
const continueButton = document.getElementById('continue-btn')
const questionContainerElement = document.getElementById('question-container')
const QuestionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
// const homeElement = document.getElementById('home') //in an effort to remove  the home page game name...wasnt working, maybe come back later to troubleshoot. see line 22.

let shuffledQuestions, currentQuestionIndex

playButton.addEventListener('click', playGame)
continueButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function playGame() {
  playButton.classList.add('hide')
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
  continueButton.classList.add('hide')
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
    continueButton.classList.remove('hide')
  } else {
    playButton.innerText = 'Restart'
    playButton.classList.remove('hide')
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
// *an array of 10 questions including some of my favorite fun facts*
const questions = [
  {
    question: 'Is Jon Snow a bastard?',
    answers: [
      { text: '• A: Yes, he is the bastard of Ned Stark', correct: false },
      {
        text: '• B: No, he is son of King Robert Baratheon and true heir to the Iron Throne',
        correct: false
      },
      { text: '• C: No, he is son of Rhaegar Targaryen', correct: true },
      {
        text: '• D: Yes, his mother was a Wildling and his father was an unhonest Man of the Nightswatch',
        correct: false
      }
    ]
  },
  {
    question:
      'Which of the following is not a value in the fibonacci sequence?',
    answers: [
      { text: '• A: 610', correct: false },
      { text: '• B: 145', correct: true },
      { text: '• C: 0', correct: false },
      { text: '• D: 13', correct: false }
    ]
  },
  {
    question:
      'Which of the following statements about the periodic table of elements is false?',
    answers: [
      {
        text: '• A: The sodium atom contains 16 electrons and 16 protons',
        correct: true
      },
      {
        text: '• B: Fl, Cl, Br, and I are classified as Halogens',
        correct: false
      },
      {
        text: '• C: Hydrogen is the first element in the periodic table',
        correct: false
      },
      { text: '• D: Na has a mass of 22.99', correct: false }
    ]
  },
  {
    question: 'What is the sq rt of 144?',
    answers: [
      { text: '• B: 14', correct: false },
      { text: '• C: 144', correct: false },
      { text: '• A: 12', correct: true },
      { text: '• D: 1', correct: false }
    ]
  },
  {
    question: 'How many bones are in the human body?',
    answers: [
      { text: '• A: 216', correct: false },
      { text: '• B: 192', correct: false },
      { text: '• C: 221', correct: false },
      { text: '• D: 206', correct: true }
    ]
  },
  {
    question:
      'What is the following line after this lyric: How can you see into my eyes like open doors?...',
    answers: [
      { text: '• A: call my name and save me from the dark', correct: false },
      {
        text: '• B: Now that I know what Im without, you cant just leave me',
        correct: false
      },
      {
        text: '• C: Leading you down into my core where Ive become so numb',
        correct: true
      },
      {
        text: '• D: wake me up inside',
        correct: false
      }
    ]
  },
  {
    question: 'What does the word ergo mean?',
    answers: [
      {
        text: '• A: therefore',
        correct: true
      },
      {
        text: '• B: escargot',
        correct: false
      },
      {
        text: '• C: a hearing aid',
        correct: false
      },
      { text: '• D: a salty fish', correct: false }
    ]
  },
  {
    question:
      'Which of the following shows did NOT air on Cartoon Network in the 90s?',
    answers: [
      { text: '• B: Powerpuff Girls', correct: false },
      { text: '• C: Johnny Bravo', correct: false },
      { text: '• A: Dragon Ball Z', correct: true },
      { text: '• D: Ed, Edd n Eddy', correct: false }
    ]
  },
  {
    question: 'Mauritius is...',
    answers: [
      { text: '• A: the name of a famous king in the 1400s', correct: false },
      { text: '• B: a tarty desert served in Arab countries', correct: false },
      { text: '• C: a country in Asia', correct: false },
      { text: '• D: an island off the coast of Madagascar', correct: true }
    ]
  },
  {
    question: 'By what age do babies generally start cooing?',
    answers: [
      { text: '• B: 7 weeks', correct: false },
      { text: '• A: 2 months', correct: true },
      { text: '• C: 3 months', correct: false },
      { text: '• D: 3 weeks', correct: false }
    ]
  }
]
