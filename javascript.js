let firstNum = undefined;
let secondNum = undefined;
let operator = "";
let input = false;
let result;
let defaultText = "0"
let lastNum;
let memoryNum;
let memorySet = false;

display = document.getElementById('display');

function updateDisplay(id)
{
    //check id and see if number or operator
    if (Number(id) >= 0 || Number(id) <= 9){
        //see if display is being updated or reset
        if (!input){
            display.textContent = id;
            input = true;
        } else {
            if (display.textContent.length < 12){
                display.textContent += id;
            }
        }
    } else if (id === '/' || id === 'x' || id === '-' || id === '+'){
        input = false;
        if (firstNum === undefined) {
            firstNum = display.textContent;
        } else {
            firstNum = equals(operator, firstNum, display.textContent);
            if (firstNum.toString().length < 12)
            {
                display.textContent = firstNum;
            } else {
                //console.log("error in operators", firstNum);
                display.textContent = 'ERROR';
            }
            
        }
        operator = id;
        
    } else if (id === '='){
        if (firstNum !== undefined){
            input = false;
            secondNum = display.textContent;
            if (secondNum !== "0"){
                result = equals(operator, firstNum, secondNum);
                if (result.toFixed(2).length < 12)
                    {
                        if (firstNum.toString().includes(".")){
                            display.textContent = result.toFixed(2);
                        } else {
                            display.textContent = result;
                        }
                        
                } else {
                    //console.log("error in equals", display.textContent);
                    display.textContent = 'ERROR';   
                        
                }
            } else {
                display.textContent = "Yeah, no.";
            }
        }
        
    } else if (id === 'c'){
        input = false;
        display.textContent = defaultText;
    } else if (id === 'ce'){
        input = false;
        display.textContent = defaultText;
        firstNum = undefined;
        operator = "";
        memorySet = false;
    } else if (id === 'm'){
        if (!memorySet){
            memoryNum = display.textContent;
            display.textContent = defaultText;
            memorySet = true;
            firstNum = undefined;
            operator = "";
        } else {
            display.textContent = memoryNum;

        }
    } else if (id === '.'){
        if (!display.textContent.includes(id))
        {
            display.textContent += id;
        }
    }
}           




function equals(e, num1, num2) 
{
    if (e === "+")
    {
        return addition(num1, num2);
    } else if (e === "-")
    {
        return subtraction(num1, num2);
    } else if (e === "x")
    {
        return multiplication(num1, num2);
    } else if (e === '/')
    {
        return division(num1, num2);
    }
}

function addition(num1, num2)
{
    return Number(num1) + Number(num2);
}

function subtraction(num1, num2)
{
    return Number(num1) - Number(num2);
}

function multiplication(num1, num2)
{
    return Number(num1) * Number(num2);
}

function division(num1, num2)
{
    return Number(num1) / Number(num2);
}

let onCount = 0;
function addListeners()
{
    if (onCount < 1)
    {
        display.textContent = "0";
        const btns = document.getElementsByClassName('button')
        
        for (i = 0; i < btns.length; i++)
        {
            let btn = btns[i];
            btn.addEventListener('click', function(){
                let btnId = btn.id;
                updateDisplay(btnId);
            });
        }
        onCount++;
    }
}

onBtn = document.getElementById('on');
onBtn.addEventListener('click', addListeners);