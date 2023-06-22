const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const newPassword = document.querySelector('#new-password')
const password = document.querySelector('#password')
const dateOfBirth = document.querySelector('#dateOfBirth')
const emailAddress = document.querySelector('#email-address')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phoneNumber')
const passwordWarning = document.querySelector('.passwordWarning')
const passwordBtn = document.querySelector('.passwordBtn')
const creatAcctountBtn = document.querySelector('#creatAcctountBtn')
let gender;




passwordWarning.style.visibility = "hidden"
const users = JSON.parse(localStorage.getItem('usersQuiz')) || []
console.log(users)

function showHide(p) {
    if (p.type == "password") {
        p.setAttribute('type', 'text')
        passwordBtn.classList.add('active')
    } else {
        p.setAttribute('type', 'password')
        passwordBtn.classList.remove('active')
    }
}

function loginHandler() {
    if (email.value == "" || password.value == "") {
        return alert("bhai fill kar phly")
    }
    const isUserFound = users.filter((user) => {
        return user.emailAddress == email.value
    })

    if (!isUserFound.length) {
        return alert("User doesn't exisit")
    }

    // console.log(isUserFound)
    if (isUserFound[0].emailAddress == email.value && isUserFound[0].Password == password.value) {
        localStorage.setItem('activeUserQuiz', JSON.stringify(isUserFound[0]))
        window.location.href = "./QuizInterface/index.html"
        email.value = ""
        password.value = ""

    } else {
        alert("wrong email or password")
    }

}


function signupHandler() {

    const isEmailFound = users.filter((user) => {
        return user.emailAddress == emailAddress.value
    })

    if (isEmailFound.length) {
        return alert("This email is already in use")
    }

    const isPhoneNumFound = users.filter((user) => {
        return user.PhoneNumber == phoneNumber.value
    })

    if (isPhoneNumFound.length) {
        return alert("This phone number is already in use")
    }


    if (firstName.value == "" || lastName.value == "" || emailAddress.value == "" || newPassword.value == "" || dateOfBirth.value == "" || gender == undefined || phoneNumber.value == "") {
        alert("fill all the fields")
    } else {
        if (newPassword.value.length < 7) {
            passwordWarning.style.visibility = "visible"
            setTimeout(() => {
                passwordWarning.style.visibility = "hidden"
            }, 3000)
            return
        } else if (firstName.value.includes(" ") || lastName.value.includes(" ")) {
            alert("White space not all")
            return
        }
        const usersDetails = {
            firstName: firstName.value,
            lastName: lastName.value,
            PhoneNumber: phoneNumber.value,
            Password: newPassword.value,
            emailAddress: emailAddress.value,
            dateOfBirth: new Date(`${dateOfBirth.value}`),
            gender
        }
        // console.log(usersDetails)
        users.push(usersDetails)
        // console.log(users)
        localStorage.setItem('usersQuiz', JSON.stringify(users))
        alert("signup successfull")
        firstName.value = ""
        lastName.value = ""
        phoneNumber.value = ""
        emailAddress.value = ""
        newPassword.value = ""
        dateOfBirth.value = ""
        dateOfBirth.value = ""
        gender = ""

    }
}

function genderHandler(g) {
    gender = g
}

function emptyInput() {
    firstName.value = ""
    lastName.value = ""
    emailAddress.value = ""
    phoneNumber.value = ""
    newPassword.value = ""
    dateOfBirth.value = ""
    dateOfBirth.value = ""
    gender = ""

}