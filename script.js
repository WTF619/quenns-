// Rule (a) - Welcome message JS
document.getElementById("welcomeMessage").innerText =
  "👋 Welcome to the official Queen tribute site by Ahmed Istiyak!";

// Rule (c) - Custom JS Function: Quiz
function checkAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const result = document.getElementById("resultText");

  if (input === "freddie mercury") {
    result.innerText = "✅ Correct! Freddie Mercury is a legend! 🎤";
    result.style.color = "lime";
  } else {
    result.innerText = "❌ Nope! Try again. Hint: He had the voice of a god.";
    result.style.color = "red";
  }
}