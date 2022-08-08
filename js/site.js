function getValues() {
  let fizzValue = parseInt(document.getElementById('fizzValue').value);
  let buzzValue = parseInt(document.getElementById('buzzValue').value);
  let gazzValue = fizzValue + buzzValue;

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    let fbArray = fizzBuzz(fizzValue, buzzValue, gazzValue);
    displayData(fbArray);
  } else {
    alert("You must enter an integer.");
  }
}

function fizzBuzz(fizzValue, buzzValue, gazzValue){
  let returnArray = [];

  for(let i = 1; i <= 100; i++) {
    let fbgDisplay = ''
    if(i % fizzValue == 0 && i % buzzValue == 0 && i && i % gazzValue == 0){      
      fbgDisplay += 'FIZZAM'
      returnArray.push(fbgDisplay)
      // style it somehow      
    } 
    else if(i % fizzValue != 0 && i % buzzValue != 0 && i % gazzValue != 0){
      returnArray.push(i)
    }
    else {
      if (i % fizzValue == 0) {
        fbgDisplay += 'Fizz'        
      }
      if (i % buzzValue == 0) {
        fbgDisplay += 'Buzz'        
      }
      if (i % gazzValue == 0) {
        fbgDisplay += 'Gazz'        
      }
      returnArray.push(fbgDisplay)
    } 
  }
  return returnArray;
}

function displayData(fbArray){
  // get the table body from the page
  let tableBody = document.getElementById('results');

  // get the template row from the template tag
  let templateRow = document.getElementById('fbTemplate');

  tableBody.innerHTML = '';

  for (let index = 0; index < fbArray.length; index += 5) {
    
    let tableRow = document.importNode(templateRow.content, true);

    // grab just the tds and put into array
    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[index]);
    rowCols[0].textContent = fbArray[index];

    rowCols[1].classList.add(fbArray[index+1]);
    rowCols[1].textContent = fbArray[index+1];

    rowCols[2].classList.add(fbArray[index+2]);
    rowCols[2].textContent = fbArray[index+2];

    rowCols[3].classList.add(fbArray[index+3]);
    rowCols[3].textContent = fbArray[index+3];

    rowCols[4].classList.add(fbArray[index+4]);
    rowCols[4].textContent = fbArray[index+4];


    tableBody.appendChild(tableRow);
  }


}