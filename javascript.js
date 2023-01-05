let firstNum = 0;
let expression = "";
let result;


function addListeners()
{
    const btns = document.getElementsByClassName('button')
    
    for (i = 0; i < btns.length; i++)
    {
        let btn = btns[i];
        btn.addEventListener('click', function(){
            let btnId = btn.id;
            updateDisplay(btnId);
        });
    }
}

function updateDisplay(id)
{
    let display = document.getElementById('display');
    let placeHolder = document.getElementById('placeHolder');

    console.log(placeHolder);
    if ((Number(id) >= 0 && Number(id) <= 9) || id === '.') 
    {
        display.textContent += id;
        expression += id;
    } else if (id === 'ce') {
        display.textContent = "";
        expression = "";
    } else if (id === '+' || id === '-' || id === 'x' || id === '/') {
        display.textContent = "";
        expression += id;
    } else if (id === '=') {
        result = equals(expression);
        display.textContent = result;
    }

    console.log(expression);
}

function equals(e) 
{
    if (e.includes("+"))
    {
        const strings = e.split("+");
        return addition(strings[0], strings[1]);
    } else if (e.includes('-'))
    {
        const strings = e.split("-");
        return subtraction(strings[0], strings[1]);
    } else if (e.includes('x'))
    {
        const strings = e.split("x");
        return multiplication(strings[0], strings[1]);
    } else if (e.includes('/'))
    {
        const strings = e.split('/');
        return division(strings[0], strings[1]);
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

addListeners()