let todo_List = [
    {
        todo_item: 'By Milk',
        due_date: '2024/10/24',
    },
    {
        todo_item: 'By Milk',
        due_date: '2024/10/24',
    }
];
display_item();
function addTodo() {
    let input_Element = document.querySelector("#Todo_input");
    let date_Element = document.querySelector("#Todo_date");
    let todo_item = input_Element.value;
    let todo_date = date_Element.value;
    todo_List.push({ todo_item: todo_item, due_date: todo_date });
    input_Element.value = '';
    date_Element.value = '';
    display_item();
}

function display_item() {
    let display_element = document.querySelector(".todo_items");
    let newHtml = '';

    for (let i = 0; i < todo_List.length; i++) {
        let { todo_item, due_date } = todo_List[i];
        newHtml += `
        <span>${todo_item}</span>
        <span>${due_date}</span>
        <button class='btn_delete' onclick="todo_List.splice(${i},1); display_item();">Delete</button>
        `;
    }
    display_element.innerHTML = newHtml;
}
