function notNumeric(startNum, endNum, stepNum){
  
  // check whether numeric,
  // if not numeric, display error to user
  
}

function notPos(stepNum){
  
  // check whether positive int,
  // if not positive int, display error to user
  
}

function lessThan(startNum, endNum){
  
  // check whether startNum < endNum
  // if not <, display error to user
  
}

function genInputArray(startNum, endNum){
  var inputArray = new Array();
  for (var i = startNum; i <= endNum; i++){
    inputArray.push(i);
  }
  return inputArray
}

function genEvenArray(inputArray){
  var evenArray = new Array();
  for (var i = 0; i <= inputArray.length; i++){
    if (inputArray[i] % 2 === 0) {
      evenArray.push(inputArray[i]);
    }
  }
  return evenArray
}

function genStepArray(inputArray, stepNum){
  var stepArray = new Array();
  for (var i = 0; i < inputArray.length; i++){
    if (i % stepNum === 0){
      console.log(inputArray[i]);
      stepArray.push(inputArray[i]);
    }
  }
  return stepArray;
}

function getEvens(){
    var inputArray = genInputArray(document.forms["evensAndStep"]["startNum"].value, document.forms["evensAndStep"]["endNum"].value);
    var evenArray = genEvenArray(inputArray);
    var stepArray = genStepArray(evenArray, document.forms["evensAndStep"]["stepNum"].value);
    return stepArray;
}