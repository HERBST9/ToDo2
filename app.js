const input = document.querySelector('.entered-list')
const addBtn = document.querySelector('.add-list')
const divTasks = document.querySelector('.tasks')




input.addEventListener('keyup', () => {
    if (input.value.trim() !== 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})


addBtn.addEventListener('click', (e) => {
    if (input.value.trim() !== 0 ) {
        const newItem = document.createElement('div')
        newItem.classList.add('item') 
        newItem.innerHTML = `
            <p> ${input.value}</p>
            <div class="item-btn">
               <i id="edit" class="fa-solid fa-pen-to-square"></i>
               <i id="delete" class="fa-solid fa-xmark"></i>
           </div>
           `
         divTasks.appendChild(newItem)
         input.value = '';

    } else {
        alert('Please enter a task.')
    }
    

})

divTasks.addEventListener('click', (e) => {
   if (e.target.classList.contains('fa-pen-to-square'))
   {
    e.target.parentElement.parentElement.classList.toggle('completed')
   }
})

divTasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark'))
   {
    e.target.parentElement.parentElement.remove()
   }
})