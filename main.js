const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

function appendNumber(num) {
  const last = expressionDisplay.textContent.split(/[\+\-\*\/%]/).pop();
  if (num === "." && last.includes(".")) return;

  expressionDisplay.textContent += num;
}

function appendoperator(op) {
  const value = expressionDisplay.textContent;
  const last = value.slice(-1);

  if ("+-*/%".includes(last)) {
    expressionDisplay.textContent = value.slice(0, -1) + op;
  } else if (value === "" && op !== "-") {
    return;
  } else {
    expressionDisplay.textContent += op;
  }
}

function cleardisplay() {
  expressionDisplay.textContent = "";
  resultDisplay.textContent = "";
}

function deletelast() {
  expressionDisplay.textContent =
    expressionDisplay.textContent.slice(0, -1);
}

function calculate() {
  try {
    let raw = expressionDisplay.textContent;

    let expression = raw
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/%/g, "/100");

    let output = eval(expression);

    resultDisplay.textContent = output;
  } catch {
    resultDisplay.textContent = "Error";
  }
}