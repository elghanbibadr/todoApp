const addTodo=document.querySelector('.hero__newTodo');
const todosList=document.querySelector('.todos');
const togglers=document.querySelectorAll('.nav__toggler');
const  numberOfItems=document.querySelector('.item-left-number');
const active=document.querySelector('.active');
const all=active.previousElementSibling;
const completed=active.nextElementSibling;
const clearCompleted=completed.nextElementSibling;

// add new task when press the enter keyword
addTodo.addEventListener('keydown',(e)=>{
    if (e.key==='Enter' && addTodo.firstElementChild.value){
        // add the circle
        let circle=document.createElement('span');
        circle.innerHTML='<span></span>';
        circle.classList.add('circle');
        // add the check
        let check=document.createElement('span');
        check.innerHTML='<span></span>';
        check.classList.add('check');
        // add the li 
     let task=document.createElement('li');
     task.innerHTML= `<p>${addTodo.firstElementChild.value}</p>`;
      task.classList.add('col');
      task.firstChild.classList.add('fixPosition');
      task.classList.add('col-added');
      todosList.append(task);
      task.append(circle);
      task.append(check)
    //  increase number of item added
    numberOfItems.textContent++;
    }
});



// Update the value of input to default when adding new task

addTodo.addEventListener('keyup',(e)=>(e.key==='Enter')?addTodo.firstElementChild.value='':'');



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


// click on circle and change bg
todosList.addEventListener('click',(e)=>{
    if (e.target.classList.contains('circle')){
        e.target.classList.toggle('bg');
        e.target.previousElementSibling.classList.toggle('taskRemove');
        // updateNumberOfItems();
        e.target.classList.contains('bg')?numberOfItems.textContent--:numberOfItems.textContent++;
    };
})

todosList.addEventListener('click',(e)=>{
   if (e.target.classList.contains('check')){
    e.target.parentElement.remove();
    (e.target.previousElementSibling.classList.contains('bg'))?'':numberOfItems.textContent--;
   }
})

// actions btn 

function removeHideFromElement(){
    todosList.querySelectorAll('li').forEach(element=>element.classList.remove('hide'));
}

// all
all.addEventListener('click',()=> removeHideFromElement());


// active
active.addEventListener('click',()=>{
 const circleChecked= todosList.querySelectorAll('.bg');
 removeHideFromElement();
 circleChecked.forEach(circle=>circle.parentElement.classList.add('hide'));
});


// completed
completed.addEventListener('click',()=>{
    todosList.querySelectorAll('li').forEach(element=>{
    if (element.querySelector('.circle').classList.contains('bg')){
        element.classList.remove('hide');
    }
    else{
        element.classList.add('hide');
    }
    });
      })

// clear completed
clearCompleted.addEventListener('click',()=>{
    todosList.querySelectorAll('li').forEach(element=>{
       if (element.querySelector('.circle').classList.contains('bg')){
           element.remove();
       }
    })
})