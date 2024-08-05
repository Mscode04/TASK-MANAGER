// Acces The Element
let todoInput=document.querySelector(".text");
console.log(todoInput)
let todoButton=document.querySelector(".btn");
console.log(todoButton)
let todoParent=document.querySelector(".list-parent");
// Events 
todoButton.addEventListener('click',addToDo);
todoParent.addEventListener('click',Del);
todoParent.addEventListener('click',Fine);
// Main Function 
function addToDo(e){
if(todoInput.value.trim() !== ""){
    // Child div  of Ul tag
    const toDiv=document.createElement("div")
    toDiv.classList.add("listchid")
    // No reload loading
    e.preventDefault()
    // create li element as input text
    const tolist=document.createElement("li")
    tolist.classList.add("lichid")
    tolist.innerHTML=todoInput.value;
    //delete button
    const trash=document.createElement("button")
    trash.classList.add("btn2")
    trash.innerHTML="Delete";
    // finsh button
    const Complete=document.createElement("button")
    Complete.classList.add("btn3")
    Complete.innerHTML="Finish";
    // appaned to all in parent ul
    toDiv.appendChild(tolist);
    toDiv.appendChild(trash);
    toDiv.appendChild(Complete);
    todoParent.appendChild(toDiv);
     // clear the input
    todoInput.value="" 
}}
// delete function
function Del(e){
    const item=e.target;
    console.log(item.classList)
    if (item.classList[0]==='btn2'){
        const data=item.parentElement;
        data.remove()
    }
}
// finish function
function Fine(e){
    const item = e.target;
    console.log(item.classList)
    if (item.classList[0] === 'btn3') {
        const data = item.parentElement;
        data.classList.toggle('finished');
    }
}
