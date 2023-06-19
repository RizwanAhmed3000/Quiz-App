const overlay = document.querySelector('.overlay');
console.log(overlay)
const question = document.querySelector('#question')
console.log(question)
const radioBtns = document.querySelectorAll('.radioBtns')
console.log(radioBtns)
const nextBtn = document.querySelector('.nextBtn')
console.log(nextBtn)
let timer = document.querySelector('#timer')
console.log(timer)
const username = document.querySelector('.username')
console.log(username)


const quizData = [
    {
        question: "What is javascript?",
        option1: "programing language",
        option2: "Scripting language",
        option3: "Style sheet",
        answer: this.option1
    },
    {
        question: "Is javascript case-sensitive?",
        option1: "true",
        option2: "false",
        answer: this.option1
    }
]

function overlayRemove(){
    overlay.style.top = '-100%'
}