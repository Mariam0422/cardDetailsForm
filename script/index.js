import {
  button,
  cardHolder,
  cardNumber,
  mm,
  yy,
  cvv,
  card_int,
  cardHolderName,
  cardDate,
  blankOne,
  blankTwo,
  blankThree,
  blankFour,
  windowConfirm,
  section,
  continueButton
} from "./constant.js";

function formatCardNumber(number) {
  number = number.replace(/\s/g, "");
  let formattedNumber = "";
  for (let i = 0; i < number.length; i++) {
    formattedNumber += number[i];
    if ((i + 1) % 4 === 0 && i + 1 !== number.length) {
      formattedNumber += " ";
    }
  }

  return formattedNumber;
}

function isNumeric(value) {
  for (let i = 0; i < value.length; i++) {
    if (value[i] < "0" || value[i] > "9") {
      return false;
    }
  }
  return true;
}

function validateCardNumber() {
  const value = cardNumber.value;
  if (!isNumeric(value)) {
    blankTwo.innerText = "The card number must contain only numbers";
    blankTwo.style.display = "block";
    return false;
  } else if (value.length > 16) {
    blankTwo.innerText = "The card number must consist of 16 characters.";
    blankTwo.style.display = "block";
    return false;
  } else {
    blankTwo.innerText = "";
    return true;
  }
}

cardNumber.addEventListener("input", () => {
  validateCardNumber();
});

function validateFields() {
  let value = true;
  if (cardHolder.value.trim() === "") {
    blankOne.innerText = "Can’t be blank";
    blankOne.style.display = "block";
    value = false;
  }
  if (cardNumber.value.trim() === "") {
    blankTwo.innerText = "Can’t be blank";
    blankTwo.style.display = "block";
    value = false;
  }
  if (cardNumber.value.length < 16) {
    blankTwo.innerText = "The card number must consist of 16 characters.";
    blankTwo.style.display = "block";
    value = false;
  }
  if (mm.value.trim() === "" || yy.value.trim() === "") {
    blankThree.innerText = "Can’t be blank";
    blankThree.style.display = "block";
    value = false;
  }
  if (cvv.value.trim() === "") {
    blankFour.innerText = "Can’t be blank";
    blankFour.style.display = "block";
    value = false;
  }
  return value;
}
function removeText() {
  cardNumber.value = "";
  cardHolder.value = "";
  mm.value = "";
  yy.value = "";
  cvv.value = "";
}
cardHolder.addEventListener("input", () => {
 blankOne.style.display = "none";
});
mm.addEventListener("input", () => {
  blankThree.style.display = "none"
})
yy.addEventListener("input", () => {
  blankThree.style.display = "none"
})
cvv.addEventListener("input", () => {
  blankFour.style.display = "none"
})
function changeWindow(){
 section.style.display = "none";
 windowConfirm.style.display = "block"
}

function checkScreenWidth(){
  if(validateFields){
    if(window.matchMedia("(max-width: 800px)").matches){
      button.addEventListener("click", changeWindow)
    }  
  }
}
continueButton.addEventListener("click", (() => {
  section.style.display = "block";
  windowConfirm.style.display = "none";
}))
button.addEventListener("click", () => {
  const formNumber = formatCardNumber(cardNumber.value);
  card_int.innerHTML = formNumber;
  cardHolderName.innerHTML = cardHolder.value;
  cardDate.innerHTML = `${mm.value}/${yy.value}`;
 if(validateFields()){
   removeText();
 }
});
window.addEventListener('resize', checkScreenWidth)
