let computerNumber = 0;
let playButton = document.getElementById("play-button");

let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let chanceArea = document.getElementById("chance-area");

let resultText = document.querySelector(".result-text");

//let userInput = document.getElementById("user-input");
//let resultArea = document.getElementById("result-area");
//let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
//let chanceArea = document.getElementById("chance-area");
//let history = [];
let userValueList = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNumber);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "1과 100 사이의 숫자를 입력해주세요";
    return;
  }

  //   if (history.includes(userValue)) {
  //     resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
  //     return;
  //   }
  if (userValueList.includes(userValue)) {
    resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";

    return;
  }

  chances--;
  chanceArea.innerHTML = `남은 기회:${chances}번`;
  console.log("chances", chances);

  if (userValue < computerNumber) {
    resultAreaImg.src =
      "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
    resultText.textContent = "UP!!!";
    console.log("Up");
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    resultText.textContent = "DOWN!!!";
    console.log("DOWN");
  } else {
    resultAreaImg.src =
      "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    resultText.textContent = "맞췄습니다";
    console.log("맞췄습니다");
    gameOver = true;
  }

  //history.push(userValue);
  userValueList.push(userValue);
  console.log(history);
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}
function reset() {
  // user input 창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();
  resultArea.textContent = "결과값이 여기 나옵니다";
}

function focusInput() {
  userInput.value = "";
}

pickRandomNum();
