// InsertAdjacentElement ex

// InsertAdjacentText ex

// InsertAdjacentHTML ex

// InsertBeforeHTML ex

//Replace Elements

const replaceFirstItem = (()=>{
    const firstItem = document.querySelector('li:first-child');
    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
})

const replaceSecondItem = (()=>{
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';
})

const replaceAllItems = (()=>{
    const lis = document.querySelectorAll('li');

    lis.forEach((li, i)=>{
        li.outerHTML = `<li> Replaced ${i}</li>`;
    })
})

// Remove Elements
