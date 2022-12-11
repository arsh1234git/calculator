let displayValue = "";
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
for(t of buttons){
    t.addEventListener("click",calculate)
}
let backIcon = document.getElementById("backspace2");

backIcon.addEventListener("click",()=>{
    let backspacebtn = document.getElementById("backspace")
    let btnBackgroundColor = backspacebtn.style.backgroundColor;
    backspacebtn.style.backgroundColor = "blue";
    setTimeout(()=>{
        backspacebtn.style.backgroundColor = btnBackgroundColor;
    },100)
})
function calculate(event){
    let btnValue = event.target.innerText;
    let btnBackgroundColor = event.target.style.backgroundColor;
    event.target.style.backgroundColor = "blue";
    setTimeout(()=>{
        event.target.style.backgroundColor = btnBackgroundColor;
    },100)
    if(btnValue=="="){
        displayValue = eval(displayValue);
        input.value = displayValue;

        displayValue = input.value;//this line is very important after calculating value ,input value should be assighned to display value so that backspace can work properly
    }
    else if(btnValue=="x"){
        btnValue ="*";
        displayValue+=btnValue;
        input.value = displayValue;
    }
    else if(btnValue=="CLEAR"){
        displayValue="";
        input.value =displayValue;
    }
    else if(btnValue=="%"){
        displayValue+="/100*";
        input.value = displayValue;
    }
    else if(event.target.id =="backspace" || event.target.id=="backspace2"){
        displayValue = displayValue.slice(0,-1);
        input.value = displayValue;
        console.log(displayValue)
    }
    else{
        displayValue += btnValue;
        input.value = displayValue;
    }
}