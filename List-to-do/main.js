var input=document.getElementById('text-input');
var enter_button=document.getElementById('press-btn');
var ul=document.querySelector('ul');
var item=document.getElementsByTagName('li');

function createListElement()
{
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

    // Chen css khi click vao li
    function Click_item(){
        li.classList.toggle("done");
    }
    li.addEventListener("click",Click_item);

    // Delete Button

    var Btn=document.createElement("button");
    Btn.appendChild(document.createTextNode("X"));
    li.appendChild(Btn);
    Btn.addEventListener("click", deleteItem);

    function deleteItem()
    {
        li.classList.add("delete");
    }
}

function AddList() {
    if(input.value.length > 0)
    createListElement();
}

input.addEventListener("keypress",AddList2);

function AddList2(event)
{
    if(input.value.length >0 && event.which===13)
    {
        createListElement();
    }
}