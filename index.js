function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function handleDie(number) {
  const numberStrings = ["one", "two", "three", "four", "five", "six"];
  const numberString = numberStrings[number - 1];
  const newClass = `.die-${numberString}`;
  return newClass;
}

function handleDot(number) {
  const numberStrings = ["one", "two", "three", "four", "five", "six"];
  const numberString = numberStrings[number - 1];
  let newHTML = "";
  for (let i = 0; i < number; i++) {
    newHTML += `<div class="dot-${numberString}"></div>`;
  }
  return newHTML;
}

function handleWinner(number1, number2) {
  let titleString = "";
  if (number1 > number2) {
    titleString = "🚩 Sam Wins!";
  } else if (number2 > number1) {
    titleString = "🚩 Nick Wins!";
  } else {
    titleString = "🚩 Draw 🐶";
  }
  return titleString;
}

const player1Number = randomNumber();
const player2Number = randomNumber();
document.querySelector(".player1-die").classList.add(handleDie(player1Number));
document.querySelector(".player1-die").innerHTML = handleDot(player1Number);
document.querySelector(".player2-die").classList.add(handleDie(player2Number));
document.querySelector(".player2-die").innerHTML = handleDot(player2Number);

const headerText = (document.querySelector(".header").textContent =
  handleWinner(player1Number, player2Number));
