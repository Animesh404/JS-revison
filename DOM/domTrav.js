let op;

//Get Child Ele

const parent = document.querySelector('.parent');
op = parent.children;
op = parent.children[1].innerText;
op = parent.children[1].className;
op = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

//Get parent elements from a child
const child = document.querySelector('.child');

op = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling Ele
const secItem = document.querySelector('.child:nth-child(2)');

op = secItem;
op = secItem.nextElementSibling;
secItem.nextElementSibling.style.color = 'green';
secItem.previousElementSibling.style.color = 'orange';

console.log(op);