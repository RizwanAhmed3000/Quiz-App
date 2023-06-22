const activeUser = JSON.parse(localStorage.getItem('activeUserQuiz'))
const activeUserData = JSON.parse(localStorage.getItem('activeUserData')) || []

//--------Geting all elements-----------//

const overlay = document.querySelector('.overlay');
const question = document.querySelector('#question')
const nextBtn = document.querySelector('.nextBtn')
let timer = document.querySelector('#timer')
const username = document.querySelector('.username')
const optionBox = document.querySelector('.optionBox')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const inputRadioBtn = document.querySelectorAll(".inputRadioBtn")
const fadeBox = document.querySelector('.fadeBox');
const resultBox = document.querySelector('.resultBox');
const totalNumbers = document.querySelector('.totalNumbers');
const obtMarks = document.querySelector('.obtMarks');
const percentageText = document.querySelector('.percentage');
const tryAgainBtn = document.querySelector('.tryAgainBtn');
const closeBtn = document.querySelector('.closeBtn');

if (!activeUser) {
    window.location.href = "../index.html"
}

username.innerText = activeUser.firstName;

//-------------Quiz data here!--------------------//

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
    if (myAns == quizData[index].answer) {
        correctAns++
    }
    index++
    if (index < quizDataLength) {
        loadQuestion();
        enableBtn();
        resetInputBtn();
        console.log(correctAns)
    } else {
        showResult()
        fadeBox.classList.remove('hide');
        resultBox.classList.remove('notVisible')
        saveUserResult();
    }
}

function saveUserResult() {
    const resultData = {
        userEmail: activeUser.emailAddress,
        result: percentageText.innerText,
    }

    activeUserData.push(resultData);
    localStorage.setItem('activeUserData', JSON.stringify(activeUserData));
}

function showResult() {
    totalNumbers.innerHTML = quizDataLength;
    obtMarks.innerText = correctAns;
    percentageText.innerText = `${calPercentage(quizDataLength, correctAns)}%`;
}

function calPercentage(total, obt) {
    let percentage = (obt / total) * 100;
    return percentage
}

function loadQuestion() {
    question.innerHTML = `Q: ${quizData[index].question}`;
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

function getAnswer() {
    let answer;
    inputRadioBtn.forEach((btn) => {
        if (btn.checked) {
            answer = btn.nextElementSibling.innerText;
        }
    })

    return answer;
};

function enableBtn() {
    if (nextBtn.disabled == false) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

closeBtn.addEventListener('click', () => {
    fadeBox.classList.add('hide');
    resultBox.classList.add('notVisible')
    window.location.reload();
})

function overlayRemove() {
    overlay.style.top = '-100%'
}

function logoutHandler() {
    localStorage.removeItem('activeUserQuiz')
    window.location.href = "../index.html"
}

loadQuestion();