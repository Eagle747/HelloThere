/* ***************************  */
/*       Select Elements        */
/*       getElementById()       */
/* **************************** */

const paragraph1 = document.getElementById('para1');
const paragraph2 = document.getElementById('para2')

console.log(paragraph1)
console.log(paragraph2)

/* ***************************  */
/*       Select Elements        */
/* getElementById().textContent */
/* **************************** */
console.log('The content is accessed by: .textContent')
console.log(paragraph1.textContent)
console.log(paragraph2.innerText)
console.log()

/* ***************************  */
/*       Select Elements        */
/*       querySelector()        */
/* **************************** */

const h3Element = document.querySelector('h3')
const list = document.querySelector('.list')
console.log(h3Element)
console.log(list)


/* ***************************  */
/*       Select Elements        */
/*       querySelectorAll()        */
/* **************************** */

const listItems = document.querySelectorAll('ul>li')
console.log(listItems)
listItems.forEach(item => {
  console.log(item.innerText)
});