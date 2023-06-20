const overlay = document.querySelector('.overlay');
// console.log(overlay)
const question = document.querySelector('#question')
// console.log(question)
const nextBtn = document.querySelector('.nextBtn')
// console.log(nextBtn)
let timer = document.querySelector('#timer')
// console.log(timer)
const username = document.querySelector('.username')
// console.log(username)
const optionBox = document.querySelector('.optionBox')
// console.log(optionBox)
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const inputRadioBtn = document.querySelectorAll(".inputRadioBtn")
// console.log(inputRadioBtn[0].nextElementSibling)


const quizData = [
    {
        question: "What is javascript?",
        option1: "programing language",
        option2: "Scripting language",
        option3: "Style sheet",
        option4: "Markup Language",
        numOfOptions: 3,
        answer: "programing language",
    },
    {
        question: "Is javascript case-sensitive?",
        option1: "true",
        option2: "false",
        option3: "I dont know",
        option4: "none",
        numOfOptions: 2,
        answer: "true",
    },
    {
        question: "What year was JavaScript launched?",
        option1: "1996",
        option2: "1994",
        option3: "1995",
        option4: "none of the above",
        numOfOptions: 2,
        answer: "1995",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "<scripting>",
        option2: "<js>",
        option3: "<javascript>",
        option4: "<script>",
        numOfOptions: 4,
        answer: "<script>",
    },
]

var index = 0;
let quizDataLength = quizData.length;
let correctAns = 0;

function nextQuestion() {
    const myAns = getAnswer();
    // console.log(myAns);
    if(myAns == quizData[index].answer){
        correctAns++
        // console.log(correctAns)
    }
    index++
    if(index < quizDataLength){
        loadQuestion();
        resetInputBtn();
    }
}

function loadQuestion() {
    question.innerHTML = quizData[index].question;
    inputRadioBtn[0].nextElementSibling.innerText = quizData[index].option1;
    inputRadioBtn[1].nextElementSibling.innerText = quizData[index].option2;
    inputRadioBtn[2].nextElementSibling.innerText = quizData[index].option3;
    inputRadioBtn[3].nextElementSibling.innerText = quizData[index].option4;
}

function resetInputBtn() {
    inputRadioBtn.forEach((btn) => {
        btn.checked = false
    })
}


function getAnswer(){
    let answer;
    inputRadioBtn.forEach((btn)=>{
        if(btn.checked){
            answer = btn.nextElementSibling.innerText;
        }
    })
    
    return answer;
};

loadQuestion();

function overlayRemove() {
    overlay.style.top = '-100%'
}