const onCheck = document.querySelector("#switch-input");
const cards = document.querySelectorAll(".card");
const monthlyPrices = document.querySelectorAll("div.monthly");
const annualPrices = document.querySelectorAll("div.annual");
const buttonsInCards = document.querySelectorAll("button");
const titlesInCards = document.querySelectorAll(".card .title");


// control toggle by using mouse in order to switch between annual price and monthly price
var isAnnualPrice = true; 
onCheck.addEventListener("click",function(){
    isAnnualPrice = !isAnnualPrice;
    changePrice(isAnnualPrice);
});

// control toggle by pressing a key "A || a" in Keyboard
document.addEventListener("keypress",function(event){
    let key = event.key;
    if (key === "a" || key ==="A"){
        isAnnualPrice = !isAnnualPrice;
        changePrice(isAnnualPrice);
        changeToggleState(isAnnualPrice);
    }
});


// when clicking a card, this card is changing format
// in a moment, just one card has name class"*change"

cards.forEach((card,index)=>card.addEventListener("click",function(){
    deleteFormat();
    addFormat(index);
}));


function changePrice(isAnnualPrice){
    if (isAnnualPrice){
        // app is showing yearly price => switch
        annualPrices.forEach(price=>price.style.display="none");
        monthlyPrices.forEach(price=>price.style.display="block");
    } else{
        // app is showing monthly price => switch
        annualPrices.forEach(price=>price.style.display="block");
        monthlyPrices.forEach(price=>price.style.display="none");
    }

}

function changeToggleState(isAnnualPrice){
    if(isAnnualPrice){
        onCheck.checked = true;
    } else {
        onCheck.checked = false;
    }
}

// delete special format of all cards
function deleteFormat(){
    cards.forEach(card => card.classList.remove("card-change"));
    titlesInCards.forEach(card => card.classList.remove("title-cart-change"));
    buttonsInCards.forEach(card => card.classList.remove("button-change"));
}
// add special format in chosen card
function addFormat(index){
    cards[index].classList.add("card-change");
    titlesInCards[index].classList.add("title-cart-change");
    buttonsInCards[index].classList.add("button-change");
    
}
