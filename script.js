const form = document.getElementById('formSubmit');
const items = document.getElementById('listItems');
const input = document.getElementById('action');
const strike = document.getElementById('strikeItem');
const remove = document.getElementById('discardItem')

form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();

    const todo = input.value;
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todo));

    //li.style.color = 'red';
    var removeBtn = document.createElement('button')
    removeBtn.className = 'btn-remove';
    removeBtn.appendChild(document.createTextNode('X'));
    li.appendChild(removeBtn)

    items.appendChild(li);
}

items.addEventListener("click", strikeItems);
function strikeItems(e) {
    e.target.classList.toggle('completed')
}

function removeItem(e) {
    if (e.target.classList.contains('btn-remove')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}




