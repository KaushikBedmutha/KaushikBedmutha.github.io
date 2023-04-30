// // alert('Hello');

// number1 = document.getElementById('number1');
// number2 = document.getElementById('number2');
// ans = document.getElementById('ans');
// next = document.getElementById('next');
// correct_ans = document.getElementById('correct_ans');
// wrong_ans = document.getElementById('wrong_ans');
// disabled = document.getElementsByClassName('disabled');
// console.log(disabled);
// var resultArray = [];
// var count = 0;

// // console.log(number1);
// // console.log(number2);
// // console.log(ans);
// // console.log(next);

// $(window).on('load resize', generateRandom);

// // let x = Math.ceil(Math.random() * 10);
// // number1.value = x;

// // let y = Math.ceil(Math.random() * 10);
// // number2.value = y;

// // actualValue = x + y;

// function generateRandom() {
//   let x = Math.ceil(Math.random() * 10);
//   number1.value = x;

//   let y = Math.ceil(Math.random() * 10);
//   number2.value = y;

//   actualValue = x + y;
// }

// next.addEventListener('click', analyze);

// function analyze() {
//   if (count < 5) {
//     userValue = ans.value;
//     if (actualValue == userValue) {
//       // resultArray.push('True');
//       resultArray.push('true');
//     } else {
//       resultArray.push('false');
//     }
//     console.log(resultArray);
//     generateRandom();
//     ans.value = '';
//   } else {
//     number1.value = ' ';
//     number2.value = ' ';
//     next.innerHTML = 'Finish';
//     correct = 0;
//     correct_per = 0;
//     wrong = 0;
//     wrong_per = 0;
//     if (next.innerHTML == 'Finish') {
//       for (i = 0; i < resultArray.length; i++) {
//         if (resultArray[i] == 'true') {
//           correct++;
//           correct_per = (correct / 5) * 100;
//         } else {
//           wrong++;
//           wrong_per = (wrong / 5) * 100;
//         }
//       }
//       next.setAttribute('data-bs-toggle', 'modal');
//       next.setAttribute('data-bs-target', '#resultModal');
//       correct_ans.innerHTML = correct_per + ' %';
//       wrong_ans.innerHTML = wrong_per + ' %';

//       if (correct_ans > 80) {
//         disabled.className = "enabled";
//         console.log(disabled);
//       }
//     }
//   }
//   count++;
// }
