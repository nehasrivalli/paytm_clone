const left = document.getElementsByClassName('left')[0];
const right = document.getElementsByClassName('right')[0];
const toast = document.getElementsByClassName('toasts')[0];
console.log('connected')

var taskmove = null;

// create a card
function addTask(side,data) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.draggable=true;

    

    if(data.priority==="low"){
        card.classList.add('bg-primary')
    }else if(data.priority==="medium"){
        card.classList.add('bg-warning')
    }else{
        card.classList.add('bg-danger')
    }

    card.innerHTML = data.title
    if(side==='right'){
        right.appendChild(card)
    }else{
        left.appendChild(card)
    }
    
    // drag start
    card.addEventListener('dragstart',(e)=>{dragstart(e)})
    // on drag
    // card.addEventListener('drag',(e)=>{drag(e)})
    // drag stop
    card.addEventListener('dragend',(e)=>{dragend(e)})
}


// append
addTask('right',{
    title:"hello Developers 👋",
    description:"lorem ipsum kuch bhi",
    priority:'low'
})
addTask('left',{
    title:"Front End development",
    description:"lorem ipsum kuch bhi",
    priority:'high'
})
addTask('left',{
    title:"Back End development",
    description:"lorem ipsum kuch bhi",
    priority:'high'
})

// which card is dragged
function dragstart(e){
    taskmove = e.target;
}



//  card dragged end
function dragend(e){
    // e.target.classList.remove('fade')
}
// dragged to right hand side
right.addEventListener('dragover',(e)=>{
    console.log('drag end')
    e.preventDefault()
})
left.addEventListener('dragover',(e)=>{
    console.log('drag end')
    e.preventDefault()
})
// drop
right.addEventListener('drop',()=>{
    if(taskmove){
        right.append(taskmove) 
        toast.style.display='flex'
        toasthidder()
    } 
    
    console.log('dropped')
})
left.addEventListener('drop',()=>{
    if(taskmove) {
        left.append(taskmove) 
        toast.style.display="flex"
        toasthidder() 
    }  


    console.log('dropped')
})


function toasthidder(){
    setTimeout(()=>{
        toast.style.display='none'
    },2000)
}