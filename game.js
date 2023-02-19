
document.getElementById('calculateBtn').addEventListener('click', function(){
  const problem1 = calculateFunction('inputField1');
  const problem2 = calculateFunction('inputField2');
  const problem = 0.5 * problem1 * problem2;
  
  const last = showSection('calculateAmount');
  
  setTexResult('calculateAmount', problem);

  
})
function calculateFunction(inputId){
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  inputField.value = '';
  return inputValue;
}

function showSection(elementId){
  const elementField = document.getElementById(elementId);
  const elementText = elementField.innerText;
  const element = parseFloat(elementText);
  return element;
}
function setTexResult(elementI , newV){
  const textElement = document.getElementById(elementI);
  textElement.innerText = newV;
}

