const button = document.getElementById("confirm");
const cardHolder = document.getElementById("cardHolder");
const cardNumber = document.getElementById("cardNumber");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");
const cv = document.getElementById("cv");
const card_int = document.getElementById("card_int");
const cardHolderName = document.getElementById("cardHolderName");
const cardDate = document.getElementById("cardDate");

function formatCardNumber(number) {  
    number = number.replace(/\s/g, '');    
    let formattedNumber = '';    
    for (let i = 0; i < number.length; i++) {   
        formattedNumber += number[i];
                if ((i + 1) % 4 === 0 && (i + 1) !== number.length) {
            formattedNumber += ' ';
        }
    }

    return formattedNumber;
}

button.addEventListener("click", () => {
const formNumber = formatCardNumber(cardNumber.value)
 card_int.innerHTML = formNumber;
 cardHolderName.innerHTML = cardHolder.value;
 cardDate.innerHTML = `${mm.value}/${yy.value}`
})