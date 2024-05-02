let inpElement = document.querySelector('#todoInput');
let addBtn = document.querySelector('#addBtn');
let containerElement = document.querySelector('#container');

let toDoArr = [];

addBtn.addEventListener('click',()=>{
    // toDoArr.push(inpElement.value);

    toDoArr.push({
        content : inpElement.value,
        time : new Date().toLocaleTimeString(),
    })

    inpElement.value = '';
    render();

})

function render(){

    containerElement.innerHTML = '';

    toDoArr.forEach((todo)=>{
        containerElement.innerHTML +=
        // `
        //     <div class="wrapper">
        //         <input type="checkbox" class="myCb">
        //         <p>${todo.content} - ${todo.time} </p>
        //         <button class="delete">Delete</button>
        //     </div>        
        // `
        `
        <div class="wrapper">
            <input type="checkbox" class="myCb">
            <p>${todo.content} - ${todo.time} </p>
            <button class="delete">Delete</button>
        </div>        
    `
    })
    
    let checkBoxes = document.querySelectorAll('.myCb');

    checkBoxes.forEach((checkbox)=>{
        checkbox.addEventListener('input', (e)=>{
            e.target.nextElementSibling.style.textDecoration = e.target.checked ? 'line-through' : 'none';

            if (e.target.checked) {
                e.target.nextSiblingElement.style.textDecoration = 'line-through'
            }else{
                e.target.nextSiblingElement.style.textDecoration = 'none'
            }

            // let index = [...checkBoxes].indexOf(e.target);
            // toDoArr[index].checked = e.target.checked ? 'true' : 'false';
            
            // render()
            
        })
    })

    let delBtns = document.querySelectorAll('.delete');


    delBtns.forEach((button)=>{
        button.addEventListener('click', (e)=>{
           let index = [...delBtns].indexOf(e.target);
           toDoArr.splice(index, 1);
           render();
        })
    })


}