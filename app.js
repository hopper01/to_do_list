//Variables
const itemList = document.getElementById("item-list");



// Event Listeners
eventListeners();
function eventListeners(){
    //Form Submission
    document.querySelector("#form").addEventListener("submit", newItem);
    // Remove Item From the List
    itemList.addEventListener('click', removeItem);

    // Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad());

    document.getElementById("flip").addEventListener("click", change);

}

// Functions

function newItem(e){
    e.preventDefault();
    //Read the value
    const item = document.getElementById("text").value;

    // Create the Remove Button
    const removeBtn = document.createElement("a");
    removeBtn.classList = 'remove-list';
    removeBtn.textContent = 'X';

    // Add the Date and Time
    var dt = document.createElement('p');
    dt.classList = 'date';
    dt.textContent = new Date();
    
    // create an <li> element
    const li = document.createElement("li");
    li.textContent = item;

    //ADD the Remove BUtton In Each list
    li.appendChild(removeBtn);
    li.appendChild(dt);

    // Add to the Final List
    itemList.appendChild(li);
    // add to Local Storage
    addListLocalStorage(item);
    this.reset();
}
// remove The Items From The DOM
function removeItem(e){
    if(e.target.classList.contains('remove-list')){
        e.target.parentElement.remove();
    }
    // Remove From Storage
    removeFromLocalStorage(e.target.parentElement.textContent);
}
// Adds the Items into The Local Storage
function addListLocalStorage(item){
    let items = getItemsFromStorage();
    // add item to array
    items.push(item);

    // convert array into string
    localStorage.setItem('items', JSON.stringify(items));
}

function getItemsFromStorage(){
    let items;
    const itemsLS = localStorage.getItem('items');
    if(itemsLS === null){
        items = [];
    }
    else{
        items = JSON.parse(itemsLS);
    }
    return items;
}

// Prints Local Storage On Load
function localStorageOnLoad(){
    let items = getItemsFromStorage();

    // Loop Through Storage and print the value
   items.forEach(item => {
        // Create the Remove Button
    const removeBtn = document.createElement("a");
    removeBtn.classList = 'remove-list';
    removeBtn.textContent = 'X';

       // Add the Date and Time
       var dt = document.createElement('p');
       dt.classList = 'date';
       dt.textContent = new Date();
       
    
    // create an <li> element
    const li = document.createElement("li");
    li.textContent = item;

    //ADD the Remove BUtton In Each list
    li.appendChild(removeBtn);
    
 // Add date to li
    li.appendChild(dt);
   


    // Add to the Final List
    itemList.appendChild(li);
       
   });
}

// Removes The Items Form Local Storage
function removeFromLocalStorage(item){
    // get items from storage
    let items = getItemsFromStorage();
    console.log(item);
    // Remove the X form the item
    const itemDelete = item.substring(0,item.length-56);
    console.log(itemDelete);
    
    // Loop through The Items And remove the Items that's equal
    items.forEach(function(itemsLS, index){
        if (itemDelete === itemsLS){
            items.splice(index, 1)
        } });
    //Save The Data
    localStorage.setItem('items', JSON.stringify(items));

}
function change() 
{
    var elem = document.getElementById("flip");
    if (elem.innerHTML == "+"){
    elem.innerHTML = "x";
    }
    else{
        elem.innerHTML = "+";
    }
}
