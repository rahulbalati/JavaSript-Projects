const questions=[
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}
        ]
    },{
        question:"Which is smallest country in the world?",
        answers:[
            {text:"vatican City",correct:true},
            {text:"bhutan",correct:false},
            {text:"nepal",correct:false},
            {text:"India",correct:false}
        ]
    },{
        question:"Which is OOP language?",
        answers:[
            {text:"java",correct:true},
            {text:"html",correct:false},
            {text:"css",correct:false},
            {text:"json",correct:false}
        ]
    }
];
const questionElement=document.getElementById('question');
const answerElement=document.getElementById('answer-buttons');
const SubmitElement=document.getElementById('next-btn');

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    SubmitElement.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })

}
function resetState(){
    SubmitElement.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}
function selectAnswer(e){
    const selectedButton=e.target;
    const isCorrect=selectedButton.dataset.correct==="true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    SubmitElement.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    SubmitElement.innerHTML="Play Again!";
    SubmitElement.style.display="block";
}
SubmitElement.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();