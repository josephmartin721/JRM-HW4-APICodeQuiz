// need buttons that progress after answering
// need personal information submit box
// need event listeners and score counter

function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      question: "What is JavaScript?",
      answers: {
        a: "A caffinated beverage",
        b: "A scripting language used for coding",
        c: "A jittery reading of lines"
      },
      correctAnswer: "b"
    },
    {
      question: "What is an array in Javascript?",
      answers: {
        a: "A single variable that is used to store multiple elements",
        b: "A series of variables linked to a singular element",
        c: "A subspecies of underwater Mantas"
      },
      correctAnswer: "a"
    },
    {
      question: "",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

buildQuiz();

submitButton.addEventListener('click', showResults);