//triangle calculate
document.getElementById('triangleBtn').addEventListener('click', function(){
  const problem1 = calculateFunction('triangleInputField1');
  const problem2 = calculateFunction('triangleInputField2');
  const problem = 0.5 * problem1 * problem2;
  
  const last = showSection('trianglecalculateBtn');
  
 setTexResult('trianglecalculateBtn', problem);
});

//rectangle calculate
document.getElementById('rectangleBtn').addEventListener('click', function(){
  const inputField1of1 = calculateFunction('rectangleInputField1');
  const inputField2of2 = calculateFunction('rectangleInputField2');
  const update = inputField1of1 * inputField2of2;
  
  const last = showSection('ractangleCalculateBtn');
  
  setTexResult('ractangleCalculateBtn', update);
})

//parallelogram calculate
document.getElementById('parallelogramBtn').addEventListener('click', function(){
  const inputField1of1 = calculateFunction('parallelogramInputField1');
  const inputField2of2 = calculateFunction('parallelogramInputField2');
  const update = inputField1of1 * inputField2of2;
  
  const last = showSection('parallelogramCalculateBtn');
  
  setTexResult('parallelogramCalculateBtn', update);
});

//rhombus calculate
document.getElementById('rhombusBtn').addEventListener('click', function() {
  const inputField1of1 = calculateFunction('rhombusInputField1');
  const inputField2of2 = calculateFunction('rhombusInputField2');
  const update = 0.5 * inputField1of1 * inputField2of2;

  const last = showSection('rhombusCulateBtn');

  setTexResult('rhombusCulateBtn', update);
});


//Pentagon calculate
document.getElementById('pentagonBtn').addEventListener('click', function() {
  const inputField1of1 = calculateFunction('pentagonInputField1');
  const inputField2of2 = calculateFunction('pentagonInputField2');
  const update =0.5 * inputField1of1 * inputField2of2;

  const last = showSection('pentagonCalculateBtn');

  setTexResult('pentagonCalculateBtn', update);
});

//Ellipse calculate
document.getElementById('ellipseBtn').addEventListener('click', function() {
  const inputField1of1 = calculateFunction('ellipseInputField');
  const inputField2of2 = calculateFunction('ellipaseInputField2');
  const update = 3.1416 * inputField1of1 * inputField2of2;

  const last = showSection('ellipaseCalculateBtn');

  setTexResult('ellipaseCalculateBtn', update);
});

document.getElementById('locationChange').addEventListener('click', function(){
  window.location.href = 'index1.html';
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