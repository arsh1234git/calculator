let displayValue = "";
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
for(t of buttons){
    t.addEventListener("click",calculate)
}
function calculate(event){
    let btnValue = event.target.innerText;
    if(btnValue=="="){
        displayValue = eval(displayValue);
        input.value = displayValue;
    }
    else if(btnValue=="x"){
        btnValue ="*";
        displayValue+=btnValue;
        input.value = displayValue;
    }
    else if(btnValue=="C"){
        displayValue="";
        input.value =displayValue;
    }
    else{
        displayValue += btnValue;
        input.value = displayValue;
    }
}