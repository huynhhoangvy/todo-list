let masterTodoList = [];

masterTodoList = JSON.parse(localStorage.getItem("data"));

let addItem = () => {
    let itemInput = document.getElementById("itemInput");
    masterTodoList.push({text : `${itemInput.value}`, isDone: false});
    itemInput.value = "";
    console.log(masterTodoList)

    updateTodoList();
}

let updateTodoList = () => {
    let html = "";
    for (let i = 0; i < masterTodoList.length; i++) {
        let checkBox = document.getElementById("checkbox");
        if (masterTodoList[i].isDone && !checkBox.checked) {
            html += `<li><strike>${masterTodoList[i].text}</strike><a href='#' onclick='removeItem(${i})'> &#x1F5D1</a><a href="#" onclick="toggleDone(${i})"> &#10008</a></li>\n`;
        } else if (!masterTodoList[i].isDone) {
            html += `<li>${masterTodoList[i].text}<a href='#' onclick='removeItem(${i})'> &#x1F5D1</a><a href="#" onclick="toggleDone(${i})"> &#10004</a></li>\n`;
        }        
    }
    document.getElementById("todoList").innerHTML = html;

    storeData();
}

let removeItem = (i) => {
    masterTodoList.splice(i,1);
    
    updateTodoList();
}

let toggleDone = (i) => {
    masterTodoList[i].isDone = !masterTodoList[i].isDone;

    updateTodoList()
}

document.getElementById("itemInput").addEventListener("keyup", function(key) {
    if (key.keyCode === 13) {
        key.preventDefault();
        document.getElementById("addItem-btn").click();
      }
})

let storeData = () => localStorage.setItem("data", JSON.stringify(masterTodoList));

// let updateTitle = () => {
//     document.getElementById("titleContainer") = "";
//     document.getElementById("titleContainer") = `<input type="text" id="title">`;
//     document.getElementById("title").focus()
// }

updateTodoList();