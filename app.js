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

// function to change list name



// function to add new list