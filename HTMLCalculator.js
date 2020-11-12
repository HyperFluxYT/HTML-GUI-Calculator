var isAnswer = false;
function num1click() {
  if (
    document.getElementById("displayfield").value == "0" ||
    document.getElementById("displayfield").value == "NaN" ||
    isAnswer
  ) {
    document.getElementById("displayfield").value = null;
  }
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + "1";
  isAnswer = false;
}
function num2click() {
  if (
    document.getElementById("displayfield").value == "0" ||
    document.getElementById("displayfield").value == "NaN" ||
    isAnswer
  ) {
    document.getElementById("displayfield").value = null;
  }
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + "2";
  isAnswer = false;
}
function num3click() {
  if (
    document.getElementById("displayfield").value == "0" ||
    document.getElementById("displayfield").value == "NaN" ||
    isAnswer
  ) {
    document.getElementById("displayfield").value = null;
  }
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + "3";
  isAnswer = false;
}
function num4click() {
  if (
    document.getElementById("displayfield").value == "0" ||
    document.getElementById("displayfield").value == "NaN" ||
    isAnswer
  ) {
    document.getElementById("displayfield").value = null;
  }
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + "4";
  isAnswer = false;
}
function num5click() {
  if (
    document.getElementById("displayfield").value == "0" ||
    document.getElementById("displayfield").value == "NaN" ||
    isAnswer
  ) {
    document.getElementById("displayfield").value = null;
  }
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + "5";
  isAnswer = false;
}
function num6click() {
  if (
    document.getElementById("displayfield").value == "0" ||
    document.getElementById("displayfield").value == "NaN" ||
    isAnswer
  ) {
    document.getElementById("displayfield").value = null;
  }
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + "6";
  isAnswer = false;
}
function num7click() {
  if (
    document.getElementById("displayfield").value == "0" ||
    document.getElementById("displayfield").value == "NaN" ||
    isAnswer
  ) {
    document.getElementById("displayfield").value = null;
  }
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + "7";
  isAnswer = false;
}
function num8click() {
  if (
    document.getElementById("displayfield").value == "0" ||
    document.getElementById("displayfield").value == "NaN" ||
    isAnswer
  ) {
    document.getElementById("displayfield").value = null;
  }
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + "8";
  isAnswer = false;
}
function num9click() {
  if (
    document.getElementById("displayfield").value == "0" ||
    document.getElementById("displayfield").value == "NaN" ||
    isAnswer
  ) {
    document.getElementById("displayfield").value = null;
  }
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + "9";
  isAnswer = false;
}
function num0click() {
  if (document.getElementById("displayfield").value == "NaN" || isAnswer) {
    document.getElementById("displayfield").value = null;
  }
  if (document.getElementById("displayfield").value != "0") {
    document.getElementById("displayfield").value =
      document.getElementById("displayfield").value + "0";
  }
  isAnswer = false;
}
function negate() {
  if (document.getElementById("displayfield").value != "0") {
    if (document.getElementById("displayfield").value.includes("-", 0)) {
      document.getElementById("displayfield").value = Math.abs(
        parseFloat(document.getElementById("displayfield").value)
      );
    } else {
      document.getElementById("displayfield").value =
        "-" + document.getElementById("displayfield").value;
    }
  }
}
function cleardisplayfield() {
  document.getElementById("displayfield").value = "0";
}
function decimalpoint() {
  equals();
  document.getElementById("displayfield").value =
    document.getElementById("displayfield").value + ".";
}
function bckspace() {
  document.getElementById("displayfield").value = document
    .getElementById("displayfield")
    .value.slice(0, document.getElementById("displayfield").value.length - 1);
  if (document.getElementById("displayfield").value == "") {
    document.getElementById("displayfield").value = "0";
  }
}
function reciprocal() {
  equals();
  let val1 = parseFloat(document.getElementById("displayfield").value);
  let val2 = 1 / val1;
  document.getElementById("displayfield").value = val2;
  isAnswer = true;
}
function divisionf() {
  equals();
  isAnswer = false;
  if (
    document.getElementById("displayfield").value != "0" &&
    !document.getElementById("displayfield").value.includes("÷", 0)
  ) {
    document.getElementById("displayfield").value =
      document.getElementById("displayfield").value + "÷";
  }
}
function multiplicationf() {
  equals();
  isAnswer = false;
  if (
    document.getElementById("displayfield").value != "0" &&
    !document.getElementById("displayfield").value.includes("×", 0)
  ) {
    document.getElementById("displayfield").value =
      document.getElementById("displayfield").value + "×";
  }
}
function subtract() {
  equals();
  isAnswer = false;
  if (
    document.getElementById("displayfield").value != "0" &&
    !document.getElementById("displayfield").value.includes("-", 0)
  ) {
    document.getElementById("displayfield").value =
      document.getElementById("displayfield").value + "-";
  }
}
function add() {
  equals();
  isAnswer = false;
  if (
    document.getElementById("displayfield").value != "0" &&
    !document.getElementById("displayfield").value.includes("+", 0)
  ) {
    document.getElementById("displayfield").value =
      document.getElementById("displayfield").value + "+";
  }
}
function equals() {
  if (
    document.getElementById("displayfield").value.includes("+", 0) &&
    document
      .getElementById("displayfield")
      .value.charAt(document.getElementById("displayfield").value.length - 1) !=
      "+"
  ) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          0,
          document.getElementById("displayfield").value.indexOf("+", 0)
        )
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          document.getElementById("displayfield").value.indexOf("+", 0),
          document.getElementById("displayfield").value.length
        )
    );
    let val3 = val1 + val2;
    document.getElementById("displayfield").value = val3;
  }
  if (document.getElementById("displayfield").value.includes("-", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          0,
          document.getElementById("displayfield").value.indexOf("-", 0)
        )
    );
    let val2 = Math.abs(
      parseFloat(
        document
          .getElementById("displayfield")
          .value.slice(
            document.getElementById("displayfield").value.indexOf("-", 0),
            document.getElementById("displayfield").value.length
          )
      )
    );
    let val3 = val1 - val2;
    document.getElementById("displayfield").value = val3;
  }
  if (document.getElementById("displayfield").value.includes("÷", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          0,
          document.getElementById("displayfield").value.indexOf("÷", 0)
        )
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          document.getElementById("displayfield").value.indexOf("÷", 0) + 1,
          document.getElementById("displayfield").value.length
        )
    );
    let val3 = val1 / val2;
    document.getElementById("displayfield").value = val3;
  }
  if (document.getElementById("displayfield").value.includes("×", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          0,
          document.getElementById("displayfield").value.indexOf("×", 0)
        )
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          document.getElementById("displayfield").value.indexOf("×", 0) + 1,
          document.getElementById("displayfield").value.length
        )
    );
    let val3 = val1 * val2;
    document.getElementById("displayfield").value = val3;
  }
}
function equalsbutton() {
  if (
    document.getElementById("displayfield").value.includes("+", 0) &&
    document
      .getElementById("displayfield")
      .value.charAt(document.getElementById("displayfield").value.length - 1) !=
      "+"
  ) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          0,
          document.getElementById("displayfield").value.indexOf("+", 0)
        )
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          document.getElementById("displayfield").value.indexOf("+", 0),
          document.getElementById("displayfield").value.length
        )
    );
    let val3 = val1 + val2;
    document.getElementById("displayfield").value = val3;
  }
  if (document.getElementById("displayfield").value.includes("-", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          0,
          document.getElementById("displayfield").value.indexOf("-", 0)
        )
    );
    let val2 = Math.abs(
      parseFloat(
        document
          .getElementById("displayfield")
          .value.slice(
            document.getElementById("displayfield").value.indexOf("-", 0),
            document.getElementById("displayfield").value.length
          )
      )
    );
    let val3 = val1 - val2;
    document.getElementById("displayfield").value = val3;
  }
  if (document.getElementById("displayfield").value.includes("÷", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          0,
          document.getElementById("displayfield").value.indexOf("÷", 0)
        )
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          document.getElementById("displayfield").value.indexOf("÷", 0) + 1,
          document.getElementById("displayfield").value.length
        )
    );
    let val3 = val1 / val2;
    document.getElementById("displayfield").value = val3;
  }
  if (document.getElementById("displayfield").value.includes("×", 0)) {
    let val1 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          0,
          document.getElementById("displayfield").value.indexOf("×", 0)
        )
    );
    let val2 = parseFloat(
      document
        .getElementById("displayfield")
        .value.slice(
          document.getElementById("displayfield").value.indexOf("×", 0) + 1,
          document.getElementById("displayfield").value.length
        )
    );
    let val3 = val1 * val2;
    document.getElementById("displayfield").value = val3;
  }
  isAnswer = false;
}
function square() {
  equals();
  let val1 = parseFloat(document.getElementById("displayfield").value);
  let val2 = Math.pow(val1, 2);
  document.getElementById("displayfield").value = val2;
  isAnswer = false;
}
function sqrtt() {
  equals();
  let val1 = parseFloat(document.getElementById("displayfield").value);
  let val2 = Math.pow(val1, 1 / 2);
  document.getElementById("displayfield").value = val2;
  isAnswer = false;
}
function percentage() {
  divisionf();
  document.getElementById("displayfield").value =
    parseFloat(document.getElementById("displayfield").value) * 100;
}
function NaNcheck() {
  if ((document.getElementById("displayfield").value = "NaN")) {
    document.getElementById("displayfield").value = null;
  }
}
function cefunc() {
  if (document.getElementById("displayfield").value.includes("+", 0)) {
    document.getElementById("displayfield").value = document
      .getElementById("displayfield")
      .value.slice(
        0,
        document.getElementById("displayfield").value.indexOf("+", 0) + 1
      );
  } else if (document.getElementById("displayfield").value.includes("-", 0)) {
    document.getElementById("displayfield").value = document
      .getElementById("displayfield")
      .value.slice(
        0,
        document.getElementById("displayfield").value.indexOf("-", 0) + 1
      );
  } else if (document.getElementById("displayfield").value.includes("×", 0)) {
    document.getElementById("displayfield").value = document
      .getElementById("displayfield")
      .value.slice(
        0,
        document.getElementById("displayfield").value.indexOf("×", 0) + 1
      );
  } else if (document.getElementById("displayfield").value.includes("÷", 0)) {
    document.getElementById("displayfield").value = document
      .getElementById("displayfield")
      .value.slice(
        0,
        document.getElementById("displayfield").value.indexOf("÷", 0) + 1
      );
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
