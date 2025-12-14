// console.log('connected');

// discover-btn
document.getElementById('discover-btn').addEventListener('click',function(){
window.location.href="../blog.html"
});

// date 
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const time = new Date().toLocaleTimeString('en-us');
// console.log(time); //3:46:31 pm
const date = new Date().getDate();
// console.log(date);
const day = new Date().getDay();
const dayName = days[day];
// console.log(dayName);
const month = new Date().getMonth();
// console.log(month);
const monthName = months[month];
// console.log(monthName);
// year
const year = new Date().getFullYear();
// console.log(year);

// date card
// day 
document.getElementById('day').innerText = dayName;
// date
document.getElementById('month').innerText = monthName ;
document.getElementById('date').innerText = date ;
document.getElementById('year').innerText = year;
// time
document.getElementById('time').innerText = time;

// changing color btn 

const colorBtn = document.getElementById('theme-btn');
// console.log(colorBtn);
colorBtn.addEventListener('click',function(){
    const randomColor = Math.random().toString(16).slice(3,9);
    document.body.style.backgroundColor = '#'+randomColor
});

// completed btn 
const buttons = document.querySelectorAll('.btn-completed');
for (const btn of buttons) {
    btn.addEventListener('click',function(event){
        alert('Board Update Successfully');
        //clicking btn is disable
        event.target.disabled = true;

        // change button background
        event.target.classList.remove('bg-blue-600');
        event.target.classList.add('bg-blue-300');
        // event.target.classList.remove('text-white');
        // event.target.classList.add('text-blue-500');

        
        const task = document.getElementById('task-number').innerText;
        const taskMinus = parseInt(task) - 1;
        const taskUpdate = document.getElementById('task-number').innerText = taskMinus ;

        const dashBoard = document.getElementById('compeleted-amount').innerText;
        const dashBoardPlus = parseInt(dashBoard) + 1 ;
        document.getElementById('compeleted-amount').innerText = dashBoardPlus ;


        const id = event.target.id.split('-')[1];
        console.log(id);
        // console.log(document.getElementById('title-'+id));
        const text = document.getElementById('title-'+id) .innerText
        console.log(text);
        console.log(time);
        // notifi 
        const container = document.getElementById('notifi');
        // console.log(container);
        const p =document.createElement('p');
        p.classList.add('px-2','py-2','bg-gray-100','m-4','rounded-xl');
        p.innerText =`You have completed the task ${text} at ${time}`;
        container.appendChild(p);
        
        if(taskUpdate === 0 ){
            alert(`comopleted all task at ${time}`)
        }
        
    })
}
// clear-history
const clearBtn = document.getElementById('clear-history');
clearBtn.addEventListener('click',function(){
    const notifi = document.getElementById('notifi');
    const p = document.querySelectorAll('.px-2');
    for(let i=0; i<p.length; i++){
        // console.log(p[i]);
        notifi.remove(p[i])
    }
})
