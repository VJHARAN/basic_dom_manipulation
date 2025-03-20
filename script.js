 const ul=document.querySelector('ul');
 const input=document.querySelector('input');
 const buttonAdd=document.querySelector('button');
 const label=document.querySelector('label');
 input.style.cssText="widht:150px; height:30px;border-radius:10px;font-size:20px;"
 label.style.cssText="font-size:30px; font-weight:600;"
 buttonAdd.style.cssText="width:100px;height:40px; font-size:20px; border-radius:10px;background:black; color:red; padding:5px; margin:10px;"
 buttonAdd.addEventListener('click',addItem);


 function addItem(){
    const inputValue=input.value;
    input.value='';
    const li=document.createElement('li');
    const span=document.createElement('span');
    const buttonDel=document.createElement('button');
    li.style.cssText="widht:150px; height:30px;border-radius:10px;font-size:30px; margin:15px;"
    buttonDel.style.cssText="width:100px;height:40px; font-size:20px; border-radius:10px;background:red; color:black; padding:5px; margin:10px;"
    
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


 
