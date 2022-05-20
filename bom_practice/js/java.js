/*--script for book&chapter list-- */

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = ('Delete',"❌"); /*--remember that I can add icons here for future reference--*/
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});
















