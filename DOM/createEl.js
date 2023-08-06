// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');

// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// document.body.appendChild(div);//puts text node after everything inside body

// document.querySelector('ul').appendChild(div);//adds div as list item

// InnerHTML vs createElements()

//Quick and dirty
const createListItem = (item=>{
    const li = document.createElement('li');
    li.innerHTML = `${item}`

    document.querySelector('.items').appendChild(li);
})

createListItem('Eggs');c