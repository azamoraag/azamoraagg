/* .js files add interaction to your website */
var inputBox =
  document.getElementById("inputText");

var inputBtn =
  document.getElementById("inputBtn");

var message =
  document.getElementById("message");

inputBtn.addEventListener("click", updateMessage)

var motivate = [
  "and I am calling to say that I disapprove of the president’s decision to rescind DACA. I strongly urge [name of representative] to support legal action to defend immigrant rights and begin work on legislation to provide protections and a pathway to citizenship for Dreamers. Roughly 800,000 people are unfairly affected by this decision and the time for action is now. Thank you,"
];

var count = 1;

function updateMessage() {
  var input = inputBox.value;

  if (count >= motivate.length) {
    count = 1;
  } else {
    count++;
  }
  message.innerHTML = "Hello, My name is " + input + " ,"
    + motivate[count - 1];

}
