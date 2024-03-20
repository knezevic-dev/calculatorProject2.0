console.log('Welcome back!') // check if it's connected!

const inputField = document.getElementById('input'); 
//input variable!

const insertNumber = number => inputField.textContent += number;
//insert number on input field!

const insertOperator = operator => {
    const lastChar = inputField.textContent.slice(-1);
    if (isOperator(lastChar)) {
        //if last character is an operator, replace it
        inputField.textContent = inputField.textContent.slice(0, -1) + operator;
    } else {
        //append the operator
        inputField.textContent += operator;
    }
};

const equalTo = () => (inputField.textContent) 
? inputField.textContent = eval(inputField.textContent) : false;

const clearInput = () => inputField.textContent = '';

//function that check if a character is an operator
const isOperator = char => {
    return ['+', '-', '*', '/'].includes(char);
};