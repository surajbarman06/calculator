var screen = document.querySelector("#screen");
var buttons = document.querySelectorAll("button");
var screenvalue = "";

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    buttontext = e.target.id;
    if (buttontext == "clear") {
      screenvalue = "";
      screen.value = screenvalue;
    } else if (buttontext == "equal") {
      screenvalue = eval(percent(screenvalue));
      if (screenvalue == undefined) {
        screenvalue = "";
        screen.value = screenvalue;
      } else {
        screen.value = screenvalue;
        screenvalue = screen.value;
      }
    } else if (buttontext == "backspace") {
      if (screenvalue == "Infinity") {
        screenvalue = "";
        screen.value = screenvalue;
      } else {
        screenvalue = screenvalue.slice(0, -1);
        screen.value = screenvalue;
      }
    } else {
      if (validateInput(buttontext)) {
        screenvalue += buttontext;
        screen.value = screenvalue;
      }
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let x = e.clientX / e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;
    button.appendChild(ripples);
    setTimeout(function () {
      ripples.remove();
    }, 500);
  });
});

function percent(input) {
  var newInput = input.split("");
  for (let i = 0; i < newInput.length; i++) {
    if (newInput[i] == "%") {
      newInput[i] = "/100";
    }
  }

  return newInput.join("");
}

function validateInput(value) {
  let lastInput = screenvalue.slice(-1);
  let operators = ["+", "*", "/", "-", "%", "."];
  if (operators.includes(value)) {
    if (operators.includes(lastInput)) {
      return false;
    } else {
      return true;
    }
  }
  return true;
}

var darkMode = document.querySelector(".toggle");
var cal = document.querySelector(".calculator");
var display = document.querySelector("#screen");
var btn = document.querySelectorAll(".number");

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  cal.classList.toggle("active");
  display.classList.toggle("active");
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.toggle("active");
  }
});

var res = document.getElementById("equal");

res.addEventListener("mousedown", function () {
  res.style.transform = "scale(0.9)";
});

res.addEventListener("mouseup", function () {
  res.style.transform = "scale(1)";
});
