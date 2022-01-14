const form = document.getElementById('formSubmit');
const items = document.getElementById('listItems');
const input = document.getElementById('action');
const strike = document.getElementById('strikeItem');

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    const todo = input.value
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todo));
    items.appendChild(li);
}
items.addEventListener("click", strikeItems);
function strikeItems(e) {
    e.target.classList.toggle('completed')

    // strikethrough functionality goes here
    // HW: work on getting the todo being clicked on to have a strikethrough on it
}


