let op;

const parent = document.querySelector('.parent');

op = parent.childNodes;//whitespace counts as text
op = parent.childNodes[0];
op = parent.childNodes[0].nodeName;
op = parent.childNodes[3].textContent;
op = parent.childNodes[3].outerHTML;

op = parent.childNodes[3].innerText = 'Child One';
op = parent.childNodes[5].style.color = 'red';

op = parent.firstChild;
op = parent.lastChild.textContent = 'Hello';

// parent Node

const child = document.querySelector('.child');

op = child.parentNode;
op = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

//Siblings
const secItem = document.querySelector('.child:nth-child(2)');

op = secItem;
op = secItem.nextSibling;
op = secItem.previousSibling;



console.log(op);
