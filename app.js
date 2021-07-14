const myButton = document.getElementById('button');
const pronounButton = document.getElementById('pronoun-button')
const myName = document.getElementById('cell');
const myInput = document.getElementById('my-input');
const blueButton = document.getElementById('makemeblue');
const greenButton = document.getElementById('makemegreen');
const pinkButton = document.getElementById('makemepink');

console.log(myButton);
console.log(myName);
console.log(myInput);
console.log(blueButton);

myButton.addEventListener('click', () => {

    myName.textContent = myInput.value;
  })


 blueButton.addEventListener('click', () => {
    myName.style.backgroundColor ='blue';

  })

 greenButton.addEventListener('click', () => {
    myName.style.backgroundColor ='green';

  })

  pinkButton.addEventListener('click', () => {
    myName.style.backgroundColor ='hotpink';

  })