const form = document.getElementById('formSubmit');
const items = document.getElementById('listItems');
const input = document.getElementById('action');
const strike = document.getElementById('strike');

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    const todo = input.value
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todo));
    items.appendChild(li);
}

items.addEventListener('submit', removeItems);

function removeItems() {
    const items = input.value
    items.removeChild(items.childNodes[1]);
}



//create a list item
//create a textnode
//append the textnode to the list item
//append the list item to ul. 
