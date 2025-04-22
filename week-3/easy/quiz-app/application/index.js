// // const fs = require('fs').promises
// import { quizData } from "./data.js"


// let currentIndex = 0
// let currentVal = quizData[currentIndex]
// const next = () => {
//     const selected = document.querySelector('input[name="answer"]:checked');
  
//     // if (!selected) {
//     //   alert("Please select an option before submitting!");
//     //   return;
//     // }
  
//     const answer = selected.value;
//     if (answer == quizData[currentIndex].correct) {
//       score++;
//     }
  
//     currentIndex++;
//     if (currentIndex < quizData.length) {
//       setPage();
//     } else {
//       showResult();
//     }
  
//   };

// const setPage = () => {
//     if (currentIndex < quizData.length) {
//         currentVal = quizData[currentIndex];

//         // Update question
//         document.getElementById("qn").innerHTML = currentVal.question;

//         // Update options
//         document.getElementById("op1").innerHTML = `<input type="radio" name="color" /> ${currentVal.a}`;
//         document.getElementById("op2").innerHTML = `<input type="radio" name="color" /> ${currentVal.b}`;
//         document.getElementById("op3").innerHTML = `<input type="radio" name="color" /> ${currentVal.c}`;
//         document.getElementById("op4").innerHTML = `<input type="radio" name="color" /> ${currentVal.d}`;
//     } else {
//         document.getElementById("qn").innerHTML = "Quiz Completed!";
//         document.querySelector("form").style.display = "none";
//     }
// }


// window.next = next;

// window.onload = () => {
//     setPage();
// };
