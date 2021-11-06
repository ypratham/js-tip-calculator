const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("customTip");
const peopleCountInput = document.getElementById("peopleCount");

const tipButtons = document.getElementsByClassName("tipButton");

const resetBtn = document.getElementById("resetButton");

var billAmountEntered = false;
var tipPercentageEntered = false;
var isPeopleCountEntered = false;

var tip;

var personCount;

function preventSubmit(e) {
    event.preventDefault()
}


billInput.onchange = (e) => {
    console.log(e.target.value);

    if (e.target.value !== "" || tipPercentageEntered || isPeopleCountEntered) {
        resetBtn.style.background = "hsl(172, 67%, 45%)";
        resetBtn.style.color = "hsl(183, 100%, 15%)";
        resetBtn.style.cursor = "pointer";
        billAmountEntered = false
    } else {
        resetBtn.style.background = "hsl(183, 79%, 24%)";
        resetBtn.style.color = "#055D61";
        billAmountEntered = true
    }
}

tipInput.onchange = (e) => {
    if (e.target.value !== "" || billAmountEntered || isPeopleCountEntered) {
        resetBtn.style.background = "hsl(172, 67%, 45%)";
        resetBtn.style.color = "hsl(183, 100%, 15%)";
        resetBtn.style.cursor = "pointer";
    } else {
        resetBtn.style.background = "hsl(183, 79%, 24%)";
        resetBtn.style.color = "#055D61";
    }
}

for (let index = 0; index < tipButtons.length; index++) {
    tipButtons[index].addEventListener("click", (e) => {
        let buttonInnerText = e.target.innerText;
        let buttonNumber = buttonInnerText.replace("%", " ");

        tip = Number(buttonNumber)
    });
}


