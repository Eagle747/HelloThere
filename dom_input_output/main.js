document.querySelector('#yell').addEventListener('click',run);
// calls the function run after the click, on the "Yell" button

// function run initiated by click on "YELL"
function run(){
   // assign the First Name to fName
  const fName = document.querySelector('#firstName').value;
  
  // assign the First Middle Name to fMidName
  const fMidName = document.querySelector('#firstMiddle').value;
  
  // assign the Last Middle Name to lMidName
  const lMidName = document.querySelector('#lastMiddle').value;
  
  // assign the Last Name to lName
  const lName = document.querySelector('#lastName').value;
  
  // output the input (fName, fMidName, lMidName, lName) to the h3 ("#placeToYell")
  document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
}