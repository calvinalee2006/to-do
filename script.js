const form = document.getElementById('formSubmit');
const items = document.getElementById('listItems');
const input = document.getElementById('action');
const strike = document.getElementById('strikeItem');
const remove = document.getElementById('discardItem')

form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);
const li = document.createElement('li');

function addItem(e) {
    e.preventDefault();

    const todo = input.value;
    li.appendChild(document.createTextNode(todo));

    const removeBtn = document.createElement('button')
    removeBtn.className = 'btn-remove';
    removeBtn.appendChild(document.createTextNode('X'));
    li.appendChild(removeBtn)

    items.appendChild(li);
    document.getElementById('formSubmit').reset();
}

items.addEventListener("click", strikeItems);
function strikeItems(e) {
    e.target.classList.toggle('completed')
}

function removeItem(e) {
    if (e.target.classList.contains('btn-remove') && li.className === 'completed') {
        if (confirm('Are you sure?')) {
            items.removeChild(e.target.parentElement);
        }
    }
}




