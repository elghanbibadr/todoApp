const addTodo=document.querySelector('.hero__newTodo');
const todosList=document.querySelector('.todos');
const togglers=document.querySelectorAll('.nav__toggler');
const  numberOfItems=document.querySelector('.item-left-number');
// add new task when press the enter keyword
addTodo.addEventListener('keydown',(e)=>{
    if (e.key==='Enter' && addTodo.firstElementChild.value){
     let task=document.createElement('li');
     task.innerHTML= `<p>${addTodo.firstElementChild.value}</p>`;
      task.classList.add('col');
      task.classList.add('circleBefore');
      task.classList.add('col-added');
      todosList.append(task);
    //  increase number of item added
    numberOfItems.textContent++;
    }
});

// Hover effect on todos Container
 todosList.addEventListener('mouseover',(e)=>e.target.classList.add('showCheck'));
 todosList.addEventListener('mouseout',(e)=>e.target.classList.remove('showCheck'));

// Update the value of input to default when adding new task
addTodo.addEventListener('keyup',(e)=>{
    if (e.key==='Enter') addTodo.firstElementChild.value='';
})

// change the toggler
 togglers.forEach(toggler=>toggler.addEventListener('click',(e)=>{
     document.querySelector('header').classList.toggle('changeheaderBg')
     e.target.classList.toggle('hide');
     if (!e.target.classList.contains('moon')){
        e.target.nextElementSibling.classList.toggle('hide');
     }
     else{
         e.target.previousElementSibling.classList.toggle('hide') 
     }
 }))