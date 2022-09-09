var wordArray = [
  "javascript",
  "function",
  "variable",
  "loop",
  "object",
  "boolean",
];

var wordInput = document.querySelector("#word");
var startButton = document.querySelector("#start_button");
var timerEl = document.querySelector("#timerCount");
var win = document.querySelector("#wins");
var lose = document.querySelector("#loses");
var wordBlank = document.querySelector("#result_msg");
var resetButton = document.querySelector("#reset_button");

var winCounter = 0;
var loseCounter = 0;
var timerCount = 10;
