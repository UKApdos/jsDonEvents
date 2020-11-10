let firstbox = document.querySelector('.first');
let secondbox = document.querySelector('.second');
let thirdbox = document.querySelector('.third');

firstbox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
});

secondbox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'yellow';
});

thirdbox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'green';
});

firstbox.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'gray';
});

secondbox.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'gray';
});

thirdbox.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'gray';
});