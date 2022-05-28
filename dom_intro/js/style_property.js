const h1 = document.querySelector('h1')
const pItalic = document.querySelector('.italic')
const pBack = document.querySelector('.back')
const pFont = document.querySelector('.fontS')
const sectionBorder = document.querySelector('section')
const paragraph = document.querySelectorAll('p')

// Change the color of h1 to blue.
h1.style.color = "blue";

// Change the fontStyle to italics.
pItalic.style.fontStyle = "italic";

// Change the background-color to light grey
pBack.style.backgroundColor = 'lightgrey';

// Change the font size of the last paragraph to 20px
pFont.style.fontSize = '20px'


// apply a border and 5px padding too each paragraph
paragraph.forEach(el => {
  el.style.border = '2px double lightGreen'
  el.style.padding = '5px'
})

//paragraph.style.borderColor = 'yellow'
// The above does not work as the paragraph is an array.

// Give the section a border of 2px red and a padding of 5px.
sectionBorder.style.border = '2px solid red'
sectionBorder.style.padding = '5px'

