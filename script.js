const shopping = document.getElementsByClassName("shopping")[0]
// we want the first (and only) item of the collection

const pencil = document.getElementById('pencil')
const allItems = document.getElementById('allItems');

const userInput = document.getElementById('userInput')

pencil.addEventListener('click', () => {
    allItems.innerHTML = "";
})

userInput.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
        addItem();
    }
})

function addItem(){
    let h2 = document.createElement('h2');
    h2.innerHTML = "- " + userInput.value + " <i class='fa-solid fa-square-xmark'></i>";
    
    const xMarkIcon = h2.querySelector('.fa-square-xmark');
    
    xMarkIcon.addEventListener('click', () => {
        h2.remove();
    });

    h2.addEventListener('click', () => {
        if (h2.style.textDecoration != 'line-through') {
            h2.style.textDecoration = 'line-through';
        } else {
            h2.style.textDecoration = ''
        }
    })

    allItems.insertAdjacentElement('beforeend', h2);

    userInput.value = "";
}