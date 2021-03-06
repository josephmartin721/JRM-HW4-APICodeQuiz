// need buttons that progress after answering
// need personal information submit box
// need event listeners and score counter
// how to store score records..
// make timer do more than just count down

function buildQuiz(){

    const output = [];
  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
  
        for(letter in currentQuestion.answers){
  
          answers.push(
            `<label>
              <input type='radio' name='question${questionNumber}' value='${letter}'>
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class='question'> ${currentQuestion.question} </div>
          <div class='answers'> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let numCorrect = 0;
  
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
  
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

window.setInterval('refresh()', 62000); 	
    
        function refresh() {
            window .location.reload();
        };

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      question: 'What is JavaScript?',
      answers: {
        a: 'A caffinated beverage',
        b: 'A scripting language used for coding',
        c: 'A jittery reading of lines'
      },
      correctAnswer: 'b'
    },
    {
      question: 'What is an array in Javascript?',
      answers: {
        a: 'A single variable that is used to store multiple elements',
        b: 'A preassembled pile of script',
        c: 'A type of fish'
      },
      correctAnswer: 'a'
    },
    {
      question: 'Where is it appropriate to insert a JavaScript?',
      answers: {
        a: 'The head section',
        b: 'The body section',
        c: 'At the very bottom of the code',
      },
      correctAnswer: 'a'
    },
    {
      question: 'Are you enjoying the quiz?',
      answers: {
          a: 'Yes',
          b: 'A little bit',
          c: 'No',
      },
      correctAnswer: 'a'
    },
    {
        question: 'What is a boolean?',
        answers: {
            a: 'An angry person on one leg',
            b: 'A theoretical function of aerodynamics',
            c: 'An algebraic binary system used in computing',
        },
        correctAnswer: 'c'
      },
  ];

buildQuiz();

submitButton.addEventListener('click', showResults);