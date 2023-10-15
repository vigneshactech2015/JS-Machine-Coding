
const containerElement = document.querySelector(".container");

const onload = () => {
    containerElement.innerHTML = `
    <input type="text" class="inputTxt" placeholder="Add Todo Items Here..."/>
    <button class="addtaskbtn">Add Task</button>
    `;

    const createDisplayContainer = document.createElement('div');
    createDisplayContainer.innerHTML = '';

    containerElement.append(createDisplayContainer);

    const addBtnElement = document.querySelector(".addtaskbtn");
    const inputText = document.querySelector(".inputTxt");
    const todos = [];

    let editIndex = -1; // Track the index of the item being edited

    const addBtnClickHandler = () => {
        if (editIndex === -1) {
            // Add a new todo
            const inputValue = inputText.value;
            todos.push(inputValue);
        } else {
            // Edit an existing todo
            todos[editIndex] = inputText.value;
            editIndex = -1; // Reset the editIndex
            addBtnElement.innerText = 'Add Task';
        }

        renderTodos();

        inputText.value = "";
    };

    const renderTodos = () => {
        const todoElements = todos.map((todo, index) => {
            return `
                <p data-index="${index}">${todo} 
                    <span class="delete-btn">Delete</span> 
                    <span class="edit-btn">Edit</span>
                </p>`;
        }).join('');
        createDisplayContainer.innerHTML = todoElements;

        // Add click event listeners for delete buttons
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todos.splice(index, 1); // Remove the todo from the array
                renderTodos(); // Update the display
            });
        });

        const editButtons = document.querySelectorAll('.edit-btn');
        editButtons.forEach((editButton, index) => {
            editButton.addEventListener('click', () => {
                editIndex = index; // Set the index of the item being edited
                inputText.value = todos[index];
                addBtnElement.innerText = 'Edit';
            });
        });
    };

    addBtnElement.addEventListener('click', addBtnClickHandler);
};

window.onload = onload();


//method 2
const textInput = document.querySelector("#textInput")
const addBtn = document.querySelector("#addBtn")
const items = []
let first;

function addBtnHandler () {
    items.push(textInput.value)
    loadItems(items)
    first = 'exists'
   
}

function loadItems(i){
    if(first){
        document.querySelector('.container').remove()
    }
    const ItemContainer = document.createElement('div');
    ItemContainer.className = "container";
    i.forEach((item,index)=>{
        const itemHTML = document.createElement('div')
        itemHTML.innerHTML = `<p>${item}</p> <button onclick="deleteHandler(${index})">Delete</button>`
        ItemContainer.append(itemHTML)
    })
    document.body.append(ItemContainer)
}

function deleteHandler(index){
    items.splice(index,1)
    loadItems(items)
}
