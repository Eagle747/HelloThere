/* ***************************  */
/*      Add new Elements        */
/*       createElement()        */
/* **************************** */

let unorderedList = document.createElement('ul')
let itemH3 = document.querySelector('h3')

/* ***************************  */
/*      Add new Elements        */
/*   .insertAdjacentElement()   */
/* href:https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement */
/* **************************** */

itemH3.insertAdjacentElement('afterend',unorderedList) 

const listItem1 = document.createElement('li')
const listItem2 = document.createElement('li')

/* ***************************  */
/*      Add new Elements        */
/*        textContent()         */
/* **************************** */
 
listItem1.textContent = "It's free";
listItem2.textContent = "It's awesome";

/* ***************************  */
/*      Add new Elements        */
/*   appendChild() to 'ul'     */
/* **************************** */

unorderedList.appendChild(listItem1)
unorderedList.appendChild(listItem2)
