//event listener click launches alert
let button1 = document.getElementById('btn1')
button1.addEventListener('click',()=>{
  alert('Thank you for clicking the button')
})

// onclick changes the background color
let button2 = document.getElementById('btn2')
button2.onclick = chgColor

function chgColor(){
  let back = document.querySelector('body').style.backgroundColor;
  console.log(back);
  switch (back) {
    case '': back = 'plum'
      break
    case 'white': back = 'plum'
      break
    case 'plum': back = 'pink'
      break
    case 'pink': back = 'silver'
      break
    case 'silver': back = 'gold'
      break
    default:
      back = 'white'
  }
  document.querySelector('body').style.background = back;
  console.log(back)
}

document.querySelector('#check').addEventListener('click', check)

function check (){
  let day = document.querySelector('#day').value
  day = day.toLowerCase()
  let showOutput = document.getElementById('placeToSee')

  switch (true){
    case (day=='saturday'||day=='sunday'):
      showOutput.innerText = "It's weekend"
      break
    case (day == 'tuesday'):
    case (day == 'thursday'):
      showOutput.innerText = "YOU Have CLASS"
      break
    case (day == 'monday'):
    case (day == 'wednesday'):
    case (day == 'friday'):
      showOutput.innerText = "It's another boring day"
      break
    default:
      showOutput.innerText = "Not a day of a week. Try again"
  }
}