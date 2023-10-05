let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const date = new Date();

let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();


let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(hours, minutes, seconds);

let initialdegforminutes = (minutes * 6) + (1 / 10) * seconds;
console.log(initialdegforminutes);
let initialdegforhours = ((hours % 12) * 30) + (1 / 2) * minutes + (1 / 12) * seconds;

let initialdegforseconds = seconds * 6;
// console.log(initialdegforhours);
const date1 = document.querySelector('.date');

date1.innerHTML = (`${day}-${months[month-1]}-${year}`);
// Get the element with the class "hourcontainer"
const hourContainer = document.querySelector('.hourcontainer');
hourContainer.style.transform = `rotate(${initialdegforhours}deg)`;

const minuteContainer = document.querySelector('.minutecontainer');
minuteContainer.style.transform = `rotate(${initialdegforminutes}deg)`;


const secondContainer = document.querySelector('.secondcontainer');
secondContainer.style.transform = `rotate(${initialdegforseconds}deg)`;


() => {
    initialdegforhours += 1 / 12;
    initialdegforminutes += 1 / 10;
    initialdegforseconds += 6;
    hourContainer.style.transform = `rotate(${initialdegforhours}deg)`;
    minuteContainer.style.transform = `rotate(${initialdegforminutes}deg)`;
}

setInterval(() => {
    initialdegforhours += 1 / 12;
    initialdegforminutes += 1 / 10;
    initialdegforseconds += 6;
    hourContainer.style.transform = `rotate(${initialdegforhours}deg)`;
    minuteContainer.style.transform = `rotate(${initialdegforminutes}deg)`;
    secondContainer.style.transform = `rotate(${initialdegforseconds}deg)`;
}, 1000);