let calculation = JSON.parse(localStorage.getItem("calculation")) || "";
function calculator(operator) {
  if (operator === "C") {
    calculation = "";
  } else if (operator === "(") {
    calculation += "(";
  } else if (operator === ")") {
    calculation += ")";
  } else if (operator === "%") {
    calculation += "/100";
  } else if (operator === "1") {
    calculation += "1";
  } else if (operator === "2") {
    calculation += "2";
  } else if (operator === "3") {
    calculation += "3";
  } else if (operator === "+") {
    calculation += " + ";
  } else if (operator === "4") {
    calculation += "4";
  } else if (operator === "5") {
    calculation += "5";
  } else if (operator === "6") {
    calculation += "6";
  } else if (operator === "-") {
    calculation += " - ";
  } else if (operator === "7") {
    calculation += "7";
  } else if (operator === "8") {
    calculation += "8";
  } else if (operator === "9") {
    calculation += "9";
  } else if (operator === "*") {
    calculation += " * ";
  } else if (operator === "=") {
    calculation = eval(calculation);
  } else if (operator === "0") {
    calculation += "0";
  } else if (operator === ".") {
    calculation += ".";
  } else if (operator === "÷") {
    calculation += " / ";
  }

  localStorage.setItem("calculation", JSON.stringify(calculation));

  showCalculation();
}

let calculationPlace = document.querySelector(".js-calculation") || 0;

function showCalculation() {
  calculationPlace.innerHTML = calculation;
}
showCalculation();
