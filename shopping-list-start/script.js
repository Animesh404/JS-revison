const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button')
let isEditmode = false;


const displayItems = () =>{
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item));
    checkUI();
}

const onAddItemSubmit = e => {
    e.preventDefault();
    const newItem = itemInput.value;
    // Validate
    if(newItem === ''){
        alert('Please add an item');
        return;
    }

    // Check for edit mode
    if(isEditmode){
        const itemToEdit = itemList.querySelector('.edit-mode');

        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditmode = false;
    }else{
        if(checkIfItemExists(newItem)){
            alert('That Item already exists!!');
            return;
        }
    }

    // Create item DOM element 
    addItemToDOM(newItem);
    
    // Add item to local storage
    addItemToStorage(newItem);

    checkUI();

    itemInput.value  = '';
}

const addItemToDOM = item =>{
    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button);
    itemList.appendChild(li);

}

const createButton = classes =>{
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

const createIcon = classes =>{
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


const addItemToStorage = item =>{
    const itemsFromStorage = getItemsFromStorage();

    itemsFromStorage.push(item);

    // convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}


const getItemsFromStorage = ()=>{
    let itemsFromStorage;

    if(localStorage.getItem('items') === null)
        itemsFromStorage = [];
    else itemsFromStorage = JSON.parse(localStorage.getItem('items'));

    return itemsFromStorage;
}

const onClickItem = e => {
    if(e.target.parentElement.classList.contains('remove-item')){
        removeItem(e.target.parentElement.parentElement)
    }else{
        setItemToEdit(e.target);
    }
}

const checkIfItemExists = item => {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);
}

const setItemToEdit = item => {
    isEditmode = true;

    itemList
        .querySelectorAll('li')
        .forEach( i => i.classList.remove('edit-mode'));

    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formBtn.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;
}

const removeItem = item =>{
    if(confirm('Are you sure?')){
        item.remove();

        // Remove from storage
        removeItemFromStorage(item.textContent);

        checkUI();
    }  

}

const removeItemFromStorage = item => {
    let itemsFromStorage = getItemsFromStorage();

    // Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter(i => i !== item);

    // Re-set to localstorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

const clearItems = ()=>{
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    // CLear from localStorage
    localStorage.removeItem('items');

    checkUI();
}

const filterItems = e =>{
    const text = e.target.value.toLowerCase();
    const items = itemList.querySelectorAll('li');

    items.forEach(item=>{
        const itemName = item.firstChild.textContent.toLowerCase();
        

        if(itemName.indexOf(text) != -1)
            item.style.display = 'flex';
        else item.style.display = 'none';
    })
}

const checkUI = () =>{
    itemInput.value = '';

    const items = itemList.querySelectorAll('li');
    if(items.length === 0){
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }else{
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333'

    isEditmode = false;

}

// Initialize app
const init = () => {
    // Event Listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);

    checkUI();
}

init();
