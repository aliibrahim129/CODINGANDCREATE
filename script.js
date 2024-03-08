const questions = [
    {
        question: "What is the basic unit of data storage in a computer?",
        answers: {
            a: "Byte", 
            b: "Bit",
            c: "Nibble",
            d: "Megabyte",
        },
        correctAnswer: "a",
    },
    {
        question: "Which programming language is known for its use in web development and is often used for both client-side and server-side scripting?",
        answers: {
            a: "Java",
            b: "Python",
            c: "JavaScript", 
            d: "C++",
        },
        correctAnswer: "c",
    },
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hyper Text Markup Language",
            b: "Hyperlinks and Text Markup Language",
            c: "Home Tool Markup Language",
            d: "Hyper Transfer Markup Language",
        },
        correctAnswer: "a",
    },
    {
        question: "Which data structure operates on a last-in, first-out (LIFO) basis?",
        answers: {
            a: "Queue",
            b: "Array",
            c: "Stack", 
            d: "Linked List",
        },
        correctAnswer: "c",
    },
    {
        question: "What is the process of finding errors and fixing them within a computer program?",
        answers: {
            a: "Debugging", 
            b: "Compiling",
            c: "Interpreting",
            d: "Testing",
        },
        correctAnswer: "a",
    }
];

let currentQuestion = 0;
let score = 0;

const userName = new URLSearchParams(window.location.search).get("firstName") + " " + new URLSearchParams(window.location.search).get("lastName");
document.getElementById("userName").textContent = userName;

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestion];
    const questionElement = document.getElementById("question");
    questionElement.textContent = question.question;

    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";

    for (const answer in question.answers) {
        const answerElement = document.createElement("div");
        answerElement.classList.add("answer");

        const input = document.createElement("input");
        input.type = "radio";
        input.id = `q${currentQuestion + 1}-${answer}`;
        input.name = `q${currentQuestion + 1}`;
        input.value = answer;

        const label = document.createElement("label");
        label.for = `q${currentQuestion + 1}-${answer}`;
        label.textContent = question.answers[answer];

        answerElement.appendChild(input);
        answerElement.appendChild(label);

        answersElement.appendChild(answerElement);
    }

    document.getElementById("nextButton").disabled = false;
}

function checkAnswers() {
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestion + 1}"]:checked`).value;

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;
    showQuestion();
}

function showResults() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You answered ${score} out of ${questions.length} questions correctly.`;

    document.getElementById("nextButton").style.display = "none";
}

document.getElementById("nextButton").addEventListener("click", checkAnswers);

showQuestion();