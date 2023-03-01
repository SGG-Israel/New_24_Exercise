//=========== Ex 1 ================
function ex1() {
  let a = +prompt("Enter number");
  //   function oddEven(num){
  //     if (num % 2 === 0){
  //         alert(`${num}  "is Even"`);
  //     } else {alert(`${num}  "is Odd"`);
  // }
  //   }
  //   oddEven(a);
  //  let oddEven = (num) => {
  //     if (num % 2 === 0){
  //         alert(`${num}  "is Even"`);
  //     } else {alert(`${num}  "is Odd"`);
  // }
  //   }
  let oddEven = (num) => {
    return num % 2 === 0
      ? alert(`${num}  "is Even"`)
      : alert(`${num}  "is Odd"`);
  };

  oddEven(a);
}

//================= Ex 2 =============
function ex2() {
  let numbers = prompt("Enter number of numbers");
  let sum = 0;
  for (i = 0; i < numbers; i++) {
    let number = +prompt("Enter you number");
    sum += number;
  }
  alert(`average of ${numbers} numbers is ${sum / numbers}`);
}

// ================ Ex 3 ==================
function ex3() {
  let player1 = prompt("Enter player1 name");
  let player1Score = +prompt("Please enter score of player one");
  let player2 = prompt("Enter player2 name");
  let player2Score = +prompt("Please enter score of player two");
  if (player1Score > player2Score) {
    console.log("Playes 1 - winner");
  } else if (player2Score > player1Score) {
    console.log("Playes 2 - winner");
  } else {
    console.log(Teko);
  }
}

// ============== Ex 4 =======================
function ex4() {
  let hourOfDay = +prompt("Enter hour");
  if (hourOfDay >= 5 && hourOfDay <= 11) {
    alert("Good morning");
  } else if (hourOfDay >= 12 && hourOfDay <= 17) {
    alert("Good afternoon");
  } else if (hourOfDay >= 18 && hourOfDay <= 23) {
    alert("Good evening");
  } else {
    alert("Good Night");
  }
}

// ================ Ex 5 ==================
function ex5() {
  let numberOfWagons = +prompt(
    "Please enter number of wagons in the Jerusalem train"
  );
  let timeOfDay = +prompt(
    "Please enter time of day (number): 1 - morning, 2 - day, 3 - evening"
  );
  let trainDriverSalary = 6.6;
  let maxNumberOfPassengersInOneWagon = 120;
  let vat = 0.83; // 17%
  if (timeOfDay == 1) {
    alert(
      "The morning profit = " +
        Math.ceil(
          trainDriverSalary *
            maxNumberOfPassengersInOneWagon *
            numberOfWagons *
            vat
        ) +
        " $ after payment of VAT =  17%"
    );
  } else if (timeOfDay == 2) {
    alert(
      "The day profit = " +
        Math.ceil(
          trainDriverSalary *
            maxNumberOfPassengersInOneWagon *
            0.9 *
            numberOfWagons *
            vat
        ) +
        " $ after payment of VAT =  17%"
    );
  } else if (timeOfDay == 3) {
    alert(
      "The evening profit = " +
        Math.ceil(
          trainDriverSalary *
            maxNumberOfPassengersInOneWagon *
            0.7 *
            numberOfWagons *
            vat
        ) +
        " $ after payment of VAT =  17%"
    );
  } else {
    alert("Please select time of day");
  }
}

// ================ Ex 6 ==================
function ex6() {
  let carPrice = +prompt("Please enter car price");
  let amountOfPayments = +prompt("Please enter amount of payments");
  if (amountOfPayments > 24) {
    alert("You can take 24 payments only");
  } else {
    let discountCarPrice = carPrice * 0.95;
    let onePaymentValue = discountCarPrice / amountOfPayments;
    alert(
      `Car price after discount is ${discountCarPrice} $ \n The monthly payment will be ${onePaymentValue} $`
    );
  }
}
// ================ Ex 7 ==================

function ex7() {
  let peoples = +prompt("Amount passengers of bus stop");
  if (peoples === 12) {
    alert("A bus is full and leave the station");
  } else if (peoples < 12) {
    alert("A bus is do not leave");
  } else if (peoples > 12) {
    alert(peoples - 12);
  }
}

// ================== Ex 8 ====================
function ex8() {
  let students = +prompt("Enter the number of students on the excursion");
  let security = Math.ceil(students / 30);
  let firstAidKit = Math.ceil(students / 50);
  let medic = Math.ceil(students / 100);
  alert(
    `For the tour you need: \n ${security} - Security; \n ${firstAidKit} - First Aid Kit; \n ${medic} - Medic.`
  );
}

// ================== Ex 9 ====================
function ex9() {
  let foo = "Thursday";
  if (foo === "thursday" || foo === "Thursday" || foo === 5) {
    alert("Thursday! Day!");
  } else {
    alert(`Today is not ${foo}`);
  }
}

// ================== Ex 10 ===================
function ex10() {
  let weight = +prompt("Enter you weight");
  let height = +prompt("Enter you height in metrs");
  const bmi = Math.floor(weight / height ** 2);
  if (bmi <= 18) {
    alert(`You bmi is ${bmi} and is very low`);
  } else if (bmi >= 25) {
    alert(`You bmi is ${bmi} and is very much`);
  } else {
    alert(`You bmi is ${bmi} and  this good result`);
  }
}
// ================== Ex 11 ===================
function ex11() {
  let foo = "He is NOT";
  if (foo === "He is NOT") {
    alert("I am correct");
  } else {
    alert("He is correct");
  }
}
// ================== Ex 12 ===================
function ex12() {
  let num = +prompt("Enter you number");
  alert(`Sqrt from ${num} = ${num ** 0.5}`);
}

// ================== Ex 13 ===================
function ex13() {
  let butt = document.querySelector(".btn2");
  butt.classList.toggle("show");
}

// ================== Ex 14 ===================
function ex14() {
  window.open();
}
// ================== Ex 15 ===================
function ex15() {
  let text = document.querySelector(".date");
  let date = new Date();
  console.log(
    `${date.getDate()} / ${
      date.getMonth() + 1
    } / ${date.getFullYear()}     ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
}
// ================== Ex 16-1 ===================
function ex16_1() {
  let x = +prompt("Enter x number");
  for (let i = 0; i < x; i++) {
    console.log("Hello");
  }
}
// ================== Ex 16-2 ===================
function ex16_2() {
  let x = +prompt("Enter x number");
  console.log("Hello ".repeat(x)); //Hello Hello Hello (x) раз
}

// ================== Ex 17 ===================
function ex17() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// ================== Ex 18 ===================
function ex18() {
  function num(a, b) {
    if (a > b) {
      alert(`a > b, a = ${a}`);
    } else if (a < b) {
      alert(`a < b, b = ${b}`);
    } else {
      alert(`a = b`);
    }
  }
  num(10, 5);
  num(4, 5);
}
// ================== Ex 19 ===================
function ex19() {
  const tipP = document.querySelector(".tip");
  let totalBill = +prompt("Please enter total amount");
  let tip = +prompt("Enter % tip");
  tipP.innerHTML = "You tip is " + (totalBill * tip) / 100 + " $";
}
// ================== Ex 20 ===================
function ex20() {
  const buttStart = document.querySelector(".boxCounter");
  buttStart.classList.toggle("boxCounterShow");
  let count = 0;
  document.querySelector(".up").onclick = function () {
    count++;
    document.querySelector(".display").innerText = count;
  };
  document.querySelector(".down").onclick = function () {
    count--;
    document.querySelector(".display").innerText = count;
  };
  document.querySelector(".reset").onclick = function () {
    count = 0;
    document.querySelector(".display").innerText = count;
  };

  const down = document.querySelector(".down");
  const reset = document.querySelector(".reset");
  let display = document.querySelector(".display");
}

// ================== Ex 21 ===================
function ex21() {
  let quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "The true sign of intelligence is not knowledge but imagination.",
      author: "Albert Einstein",
    },
    {
      text: "We cannot solve our problems with the same thinking we used when we created them.",
      author: "Albert Einstein",
    },
  ];

  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector(".quote").textContent = quote.text;
  document.querySelector(".author").textContent = quote.author;
}
// ================== Ex 22 ===================
function ex22() {
  const students = ["Djon", "Igor", "Haim", "Moshe", "David"];
  for (let i in students) {
    alert(students[i]);
  }
}
// ================== Ex 23 ===================
function ex23() {}
// ================== Ex 24 ===================
function ex24() {
  let foo = "Thursday";
  if (foo === "thursday" || foo === "Thursday" || foo === 5) {
    alert("Thursday! Day!");
  } else {
    alert(`Today is not ${foo}`);
  }
}
