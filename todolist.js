// 初始變數
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#add-btn')
let input = document.querySelector('#new-todo')
let doneList = document.querySelector('#my-done')

// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
    addItem(todo)
}


// 函式
function addItem(text) {
    let newItem = document.createElement('li')
    newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
    list.appendChild(newItem)
}


// write your code here
// 1. add to-do
addBtn.addEventListener('click', function () {
    let inputValue = input.value;
    //防止新增空白＆空格的todo
    if (inputValue.length > 0 && strings.replace(/(^s*)|(s*$)/g, "").length > 0) {
        addItem(inputValue)
    }
}) 

// 2. 刪除 todo
list.addEventListener('click', function (event) {
    // console.log(event.target) 找到點擊的元素
    // console.log(list) addEventListner 所綁定的元素
    let target = event.target
    if (target.classList.contains('delete')) {
        let parentElement = target.parentElement
        parentElement.remove()

// 3. 增加刪除線
    } else if (target.tagName === 'LABEL') {
        target.classList.toggle('checked')
        console.log(target.innerText)
        addDoneItem(target.innerText)
    }
})


// 4. 按下 Enter 鍵時，可以新增 to-do
input.addEventListener('keypress', function (e) {
    let inputValue = input.value;
  // Enter 對應鍵盤代碼：13
    if (e.which === 13) {
    addItem(inputValue);
  }
});

// 5. 點擊完成的 todo 時，會被送進 Done 清單
function addDoneItem(value) {
    let newdoneItem = document.createElement('li')
    newdoneItem.innerHTML = `
    <label for="todo">${value}</label>
    <i class="delete fa fa-trash"></i>
  `
    doneList.appendChild(newdoneItem)
}
//6. 刪除 done
doneList.addEventListener('click', function (event) {
    let target = event.target
    if (target.classList.contains('delete')) {
        let parentElement = target.parentElement
        parentElement.remove()
    }
})