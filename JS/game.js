const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);
let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// CONSTANTS    
  
  const CORRECT_BONUS = 10;
  const MAX_QUESTIONS = 10;

  startGame = () => {
    //console.log(question)
    questionCounter = 0;
    score =0;
    availableQuestions = [...questions]; 
   
    getNewQuestion();
  };
   getNewQuestion = () => { 
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
      //go to the end page
      return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random(questionCounter,availableQuestions.length));

    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question;

   choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number ];
   });

   availableQuestions.splice(questionIndex, 1);
   //console.log(availableQuestions);
   acceptingAnswer = true;

  };

  choices.forEach(choice => {
    choice.addEventListener('click', e =>{
      console.log(e.target);
      //if (acceptingAnswer) return;

      acceptingAnswer = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset['number'];

      // const classApply = e.target;
      //  if (selectedAnswer == currentQuestion.answer) {
        //  classToApply = 'correct';
      //  }

      const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      //selectedChoice.classlist.add(classToApply);
       console.log(classToApply);
       console.log(selectedAnswer ==  currentQuestion.answer);

      setTimeout(()=>{
        selectedChoice.parentElement.classList.remove(classToApply);
      
      getNewQuestion();
    }, 1000);
  });
});

  startGame();


    
 
  

            
        

    