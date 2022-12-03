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
    else if(btnValue=="%"){
        displayValue+="/100*";
        input.value = displayValue;
    }
    else if(event.target.id =="backspace" || event.target.id=="backspace2"){
        console.log(event)
        displayValue = displayValue.slice(0,-1);
        input.value = displayValue;
    }
    else{
        displayValue += btnValue;
        input.value = displayValue;
    }
}