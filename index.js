let Counter = document.getElementById("counter");

let Count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
let Skolko = 1;
    
function Click() {
    Count++;
    counter.textContent = Count;
    localStorage.setItem('count', count);
}