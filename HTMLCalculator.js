var isAnswer = false;
var displayField = document.getElementById("displayfield");
function checkRefresh() {
  return displayField.value == "0" || displayField.value == "NaN" || isAnswer;
}
function num1click() {
  if (checkRefresh()) {
    displayField.value = null;
  }
  displayField.value = displayField.value + "1";
  isAnswer = false;
}
function num2click() {
  if (checkRefresh()) {
    displayField.value = null;
  }
  displayField.value = displayField.value + "2";
  isAnswer = false;
}
function num3click() {
  if (checkRefresh()) {
    displayField.value = null;
  }
  displayField.value = displayField.value + "3";
  isAnswer = false;
}
function num4click() {
  if (checkRefresh()) {
    displayField.value = null;
  }
  displayField.value = displayField.value + "4";
  isAnswer = false;
}
function num5click() {
  if (checkRefresh()) {
    displayField.value = null;
  }
  displayField.value = displayField.value + "5";
  isAnswer = false;
}
function num6click() {
  if (checkRefresh()) {
    displayField.value = null;
  }
  displayField.value = displayField.value + "6";
  isAnswer = false;
}
function num7click() {
  if (checkRefresh()) {
    displayField.value = null;
  }
  displayField.value = displayField.value + "7";
  isAnswer = false;
}
function num8click() {
  if (checkRefresh()) {
    displayField.value = null;
  }
  displayField.value = displayField.value + "8";
  isAnswer = false;
}
function num9click() {
  if (checkRefresh()) {
    displayField.value = null;
  }
  displayField.value = displayField.value + "9";
  isAnswer = false;
}
function num0click() {
  if (displayField.value == "NaN" || isAnswer) {
    displayField.value = null;
  }
  if (displayField.value != "0") {
    displayField.value = displayField.value + "0";
  }
  isAnswer = false;
}
function negate() {
  if (displayField.value != "0") {
    if (displayField.value.includes("-", 0)) {
      displayField.value = Math.abs(parseFloat(displayField.value));
    } else {
      displayField.value = "-" + displayField.value;
    }
  }
}
function cleardisplayfield() {
  displayField.value = "0";
}
function decimalpoint() {
  equals();
  displayField.value = displayField.value + ".";
}
function bckspace() {
  displayField.value = document
    .getElementById("displayfield")
    .value.slice(0, displayField.value.length - 1);
  if (displayField.value == "") {
    displayField.value = "0";
  }
}
function reciprocal() {
  equals();
  let val1 = parseFloat(displayField.value);
  let val2 = 1 / val1;
  displayField.value = val2;
  isAnswer = true;
}
function divisionf() {
  equals();
  isAnswer = false;
  if (displayField.value != "0" && !displayField.value.includes("÷", 0)) {
    displayField.value = displayField.value + "÷";
  }
}
function multiplicationf() {
  equals();
  isAnswer = false;
  if (displayField.value != "0" && !displayField.value.includes("×", 0)) {
    displayField.value = displayField.value + "×";
  }
}
function subtract() {
  equals();
  isAnswer = false;
  if (displayField.value != "0" && !displayField.value.includes("-", 0)) {
    displayField.value = displayField.value + "-";
  }
}
function add() {
  equals();
  isAnswer = false;
  if (displayField.value != "0" && !displayField.value.includes("+", 0)) {
    displayField.value = displayField.value + "+";
  }
}
function equals() {
  if (
    displayField.value.includes("+", 0) &&
    displayField
      .value.charAt(displayField.value.length - 1) != "+"
  ) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(0, displayField.value.indexOf("+", 0))
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          displayField.value.indexOf("+", 0),
          displayField.value.length
        )
    );
    let val3 = val1 + val2;
    displayField.value = val3;
  }
  if (displayField.value.includes("-", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(0, displayField.value.indexOf("-", 0))
    );
    let val2 = Math.abs(
      parseFloat(
        document
          .getElementById("displayfield")
          .value.slice(
            displayField.value.indexOf("-", 0),
            displayField.value.length
          )
      )
    );
    let val3 = val1 - val2;
    displayField.value = val3;
  }
  if (displayField.value.includes("÷", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(0, displayField.value.indexOf("÷", 0))
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          displayField.value.indexOf("÷", 0) + 1,
          displayField.value.length
        )
    );
    let val3 = val1 / val2;
    displayField.value = val3;
  }
  if (displayField.value.includes("×", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(0, displayField.value.indexOf("×", 0))
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          displayField.value.indexOf("×", 0) + 1,
          displayField.value.length
        )
    );
    let val3 = val1 * val2;
    displayField.value = val3;
  }
}
function equalsbutton() {
  if (
    displayField.value.includes("+", 0) &&
    displayField
      .value.charAt(displayField.value.length - 1) != "+"
  ) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(0, displayField.value.indexOf("+", 0))
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          displayField.value.indexOf("+", 0),
          displayField.value.length
        )
    );
    let val3 = val1 + val2;
    displayField.value = val3;
  }
  if (displayField.value.includes("-", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(0, displayField.value.indexOf("-", 0))
    );
    let val2 = Math.abs(
      parseFloat(
        document
          .getElementById("displayfield")
          .value.slice(
            displayField.value.indexOf("-", 0),
            displayField.value.length
          )
      )
    );
    let val3 = val1 - val2;
    displayField.value = val3;
  }
  if (displayField.value.includes("÷", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(0, displayField.value.indexOf("÷", 0))
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          displayField.value.indexOf("÷", 0) + 1,
          displayField.value.length
        )
    );
    let val3 = val1 / val2;
    displayField.value = val3;
  }
  if (displayField.value.includes("×", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(0, displayField.value.indexOf("×", 0))
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          displayField.value.indexOf("×", 0) + 1,
          displayField.value.length
        )
    );
    let val3 = val1 * val2;
    displayField.value = val3;
  }
  isAnswer = false;
}
function square() {
  equals();
  let val1 = parseFloat(displayField.value);
  let val2 = Math.pow(val1, 2);
  displayField.value = val2;
  isAnswer = false;
}
function sqrtt() {
  equals();
  let val1 = parseFloat(displayField.value);
  let val2 = Math.pow(val1, 1 / 2);
  displayField.value = val2;
  isAnswer = false;
}
function percentage() {
  divisionf();
  displayField.value = parseFloat(displayField.value) * 100;
}
function NaNcheck() {
  if ((displayField.value = "NaN")) {
    displayField.value = null;
  }
}
function cefunc() {
  if (displayField.value.includes("+", 0)) {
    displayField.value = displayField
      .value.slice(0, displayField.value.indexOf("+", 0) + 1);
  } else if (displayField.value.includes("-", 0)) {
    displayField.value = displayField
      .value.slice(0, displayField.value.indexOf("-", 0) + 1);
  } else if (displayField.value.includes("×", 0)) {
    displayField.value = displayField
      .value.slice(0, displayField.value.indexOf("×", 0) + 1);
  } else if (displayField.value.includes("÷", 0)) {
    displayField.value = displayField
      .value.slice(0, displayField.value.indexOf("÷", 0) + 1);
  } else {
    cleardisplayfield();
  }
}
window.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    num1click();
  }
  if (event.key === "0") {
    num0click();
  }
  if (event.key === "2") {
    num2click();
  }
  if (event.key === "3") {
    num3click();
  }
  if (event.key === "4") {
    num4click();
  }
  if (event.key === "5") {
    num5click();
  }
  if (event.key === "6") {
    num6click();
  }
  if (event.key === "7") {
    num7click();
  }
  if (event.key === "8") {
    num8click();
  }
  if (event.key === "9") {
    num9click();
  }
  if (event.key === "c") {
    cleardisplayfield();
  }
  if (event.key === "/") {
    divisionf();
  }
  if (event.key === "Enter") {
    equalsbutton();
  }
  if (event.key === "=") {
    add();
  }
  if (event.key === "x") {
    multiplicationf();
  }
  if (event.key === "-") {
    subtract();
  }
  if (event.key === ".") {
    decimalpoint();
  }
});
