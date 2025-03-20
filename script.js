 const ul=document.querySelector('ul');
 const input=document.querySelector('input');
 const buttonAdd=document.querySelector('button');
 buttonAdd.addEventListener('click',addItem);


 function addItem(){
    const inputValue=input.value;
    input.value='';
    const li=document.createElement('li');
    const span=document.createElement('span');
    const buttonDel=document.createElement('button');
    li.appendChild(span);
    li.appendChild(buttonDel);
    span.textContent=inputValue;
    buttonDel.textContent='Delete';
    ul.appendChild(li);
    buttonDel.addEventListener('click',(e)=>
    {
        ul.removeChild(li);

    });
    input.focus();
}


 
