const scoreDisplay = document.getElementById("scoreDisplay")
const questionDisplay = document.getElementById("questionsDisplay")

const questions = [
    {
        quiz: ["value", "estimate", "evaluate"],
        options: ["assess", "jury"],
        correct: 1
    },
    {
        quiz: ["close", "near", "next"],
        options: ["trace", "adjacent"],
        correct: 1
    },
    {
        quiz: ["fast", "quick", "prompt"],
        options: ["charity", "rapid"],
        correct: 2
    }
]

let score = 0
let clicked = []
scoreDisplay.textContent = score

function populateQuestions(){
    questions.forEach(question => {
        const questionBox = document.createElement("div")
        questionBox.classList.add("questionBox")

        const logoDisplay = document.createElement("h1")
        logoDisplay.textContent = "►"
        questionBox.appendChild(logoDisplay)

       question.quiz.forEach(tip => {
        const tiptext = document.createElement("p")
        tiptext.textContent = tip
        questionBox.appendChild(tiptext)
       })

       const questionButtons = document.createElement("div")
       questionButtons.classList.add("questionButtons")
       questionBox.appendChild(questionButtons)

       question.options.forEach((option, optionIndex) =>{
        const questionButton = document.createElement("button")
        questionButton.classList.add("questionButton")
        questionButton.textContent = option

        questionButton.addEventListener("click", () => checkAnswer(questionBox, questionButton, option, optionIndex +1, question.correct)) //function Function() in addEventListener will be execute everytime, without brackets not and with arrow it's callback function

        questionButtons.appendChild(questionButton)
       })

       const answerDisplay = document.createElement("div")
       answerDisplay.classList.add("answerDisplay")
        
       questionBox.appendChild(answerDisplay)
       questionDisplay.appendChild(questionBox)
    })
}

populateQuestions()

function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer){
    console.log("option", option)
    console.log("optionIndex", optionIndex)

    if(optionIndex === correctAnswer){
        score++
        scoreDisplay.textContent = score;
        addResult(questionBox, "Correct!", "correct")
    } else{
        score--
        scoreDisplay.textContent = score;
        addResult(questionBox, "Wrong!", "wrong")
    }
    
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
    

}

function addResult(questionBox, answer, className){
    const answerDisplay = questionBox.querySelector(".answerDisplay")
    answerDisplay.classList.remove("wrong")
    answerDisplay.classList.remove("correct")
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
}
