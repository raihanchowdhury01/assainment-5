//triangle calculate
document.getElementById('triangleBtn').addEventListener('click', function(){
  const triangleInput1 = calculateFunction('triangleInputField1');
  const triangleInput2 = calculateFunction('triangleInputField2');
  const triangle = 0.5 * triangleInput1 * triangleInput2;
  
  //const update =
  
  showSection('trianglecalculateBtn');
  
 setTexResult('trianglecalculateBtn', triangle);

});

//rectangle calculate
document.getElementById('rectangleBtn').addEventListener('click', function(){
  const inputField1of1 = calculateFunction('rectangleInputField1');
  const inputField2of2 = calculateFunction('rectangleInputField2');
  const update = inputField1of1 * inputField2of2;
  
  //const update = 
  
  showSection('ractangleCalculateBtn');
  
  setTexResult('ractangleCalculateBtn', update);
})

//parallelogram calculate
document.getElementById('parallelogramBtn').addEventListener('click', function(){
  const inputField1of1 = calculateFunction('parallelogramInputField1');
  const inputField2of2 = calculateFunction('parallelogramInputField2');
  const update = inputField1of1 * inputField2of2;
  
  //const update = 
  
  showSection('parallelogramCalculateBtn');
  
  setTexResult('parallelogramCalculateBtn', update);
});

//rhombus calculate
document.getElementById('rhombusBtn').addEventListener('click', function() {
  const inputField1of1 = calculateFunction('rhombusInputField1');
  const inputField2of2 = calculateFunction('rhombusInputField2');
  const update = 0.5 * inputField1of1 * inputField2of2;

//const last = 
  
  showSection('rhombusCulateBtn');

  setTexResult('rhombusCulateBtn', update);
});


//Pentagon calculate
document.getElementById('pentagonBtn').addEventListener('click', function() {
  const inputField1of1 = calculateFunction('pentagonInputField1');
  const inputField2of2 = calculateFunction('pentagonInputField2');
  const update =0.5 * inputField1of1 * inputField2of2;

  //const last =
  showSection('pentagonCalculateBtn');

  setTexResult('pentagonCalculateBtn', update);
});

//Ellipse calculate
document.getElementById('ellipseBtn').addEventListener('click', function() {
  const inputField1of1 = calculateFunction('ellipseInputField1');
  const inputField2of2 = calculateFunction('ellipseInputField2');
  const update = 3.14 * inputField1of1 * inputField2of2;

  //const last = 
  
  showSection('ellipaseCalculateBtn');

  setTexResult('ellipaseCalculateBtn', update);
});

document.getElementById('locationChangeBtn').addEventListener('click', function(){
  window.location.href = 'index1.html'
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
  const element = parseFloat(elementText).toFixed(2);
  return element;
}
function setTexResult(elementI , newV){
  const textElement = document.getElementById(elementI);
  textElement.innerText = newV;
}