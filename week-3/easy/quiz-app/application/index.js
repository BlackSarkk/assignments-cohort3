import { quizData } from "./data.js";

let currentIndex = 0;
let totalQuest = 0;
let Score = 0;
let currentVal = quizData[currentIndex];

const setPage = () => {
    if (currentIndex < quizData.length) {
        currentVal = quizData[currentIndex];
        document.getElementById('qn').innerHTML = currentVal.question;
        document.getElementById('op1').innerHTML = `<input type="radio" name="color" value="a"> ${currentVal.a}`;
        document.getElementById('op2').innerHTML = `<input type="radio" name="color" value="b"> ${currentVal.b}`;
        document.getElementById('op3').innerHTML = `<input type="radio" name="color" value="c"> ${currentVal.c}`;
        document.getElementById('op4').innerHTML = `<input type="radio" name="color" value="d"> ${currentVal.d}`;
    }
};

const next = () => {
    const selected = document.querySelector('input[name="color"]:checked');

    if (!selected) {
        alert("Please select an option before submitting!");
        return;
    }

    const answer = selected.value;

    if (answer === quizData[currentIndex].correct) {
        Score++;
    }

    totalQuest++;
    currentIndex++;

    if (currentIndex < quizData.length) {
        setPage();
    } else {
        document.getElementById('qn').innerHTML = `Quiz Finished. Your score is: ${Score}/${totalQuest}`;
        document.getElementById('op1').innerHTML = ``;
        document.getElementById('op2').innerHTML = ``;
        document.getElementById('op3').innerHTML = ``;
        document.getElementById('op4').innerHTML = ``;
    }
};

window.next = next;

window.onload = () => {
    setPage();
};
