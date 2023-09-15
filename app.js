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
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); // triggers checked styling
    }
    else if(e.target.tagName === "SPAN")
    e.target.parentElement.remove(); // delete when span element clicked
}, false);