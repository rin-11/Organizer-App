const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask(){
    if(inputBox.value === ''){ // does not allow empty entry
        alert("Cannot add an empty list item");
    }
    else{
        let li = document.createElement('li'); // create list item
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // add to list
        let span = document.createElement('span');
        span.innerHTML= '\u00d7'
        li.appendChild(span);
    }
    inputBox.value = ''; // clear after add
    saveData()// call saveData function anytime something added
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); // triggers checked styling
        saveData()// call saveData function anytime something checked
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // delete when span element clicked
    saveData()// call saveData function anytime something deleted
    }
}, false);

// store tasks in browser so they do not delete on refresh
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML = localStorage.getItem('data');
} // recalls data on refresh

showTasks()

// Function to change the list name
function renameTaskTitle() {
    const inputElement = document.getElementById('todo');
    const taskTitle = document.querySelector('.todo h2');

    // Get the value from the input element and set it as the text content
    taskTitle.textContent = inputElement.value;

    // Save the updated list name to local storage
    saveListName(inputElement.value);
}

// Function to save the list name to local storage
function saveListName(listName) {
    localStorage.setItem('listName', listName);
}

// Call the renameTaskTitle function to set the list name when the page loads
window.addEventListener('load', function () {
    const storedListName = localStorage.getItem('listName');
    if (storedListName) {
        const inputElement = document.getElementById('todo');
        inputElement.value = storedListName;
        renameTaskTitle();
    }
});

// Example usage to change the list name when a button is clicked
document.querySelector('button').addEventListener('click', function () {
    renameTaskTitle();
    saveListItems();
});



// function to add new list