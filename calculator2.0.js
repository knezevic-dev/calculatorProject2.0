console.log('Welcome back!') // check if it's connected!

const inputField = document.getElementById('input'); 
//input variable!

const insertNumber = number => inputField.textContent += number;
//insert number on input field!

const insertOperator = operator => inputField.textContent += operator;
//insert operator on input field!

const equalTo = () => (inputField.textContent) 
? inputField.textContent = eval(inputField.textContent) : false;

const clearInput = () => inputField.textContent = '';