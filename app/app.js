const addTodo=document.querySelector('.hero__newTodo');
const todosList=document.querySelector('.todos');
addTodo.addEventListener('keydown',(e)=>{
    if (e.key==='Enter' && addTodo.firstElementChild.value){
     let task=document.createElement('li');
     task.innerHTML= `<p>${addTodo.firstElementChild.value}</p>`;
      task.classList.add('col');
      task.classList.add('circleBefore');
      task.classList.add('col-added');
      todosList.append(task);


    }
});
 todosList.addEventListener('mouseover',(e)=>e.target.classList.add('showCheck'));
 todosList.addEventListener('mouseout',(e)=>e.target.classList.remove('showCheck'));



addTodo.addEventListener('keyup',(e)=>{
    if (e.key==='Enter') addTodo.firstElementChild.value='';
})
