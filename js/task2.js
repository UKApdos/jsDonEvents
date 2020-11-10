let firstbox = document.querySelector('.first');
let secondbox = document.querySelector('.second');

firstbox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
});

secondbox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
});

firstbox.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'gray';
});

secondbox.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'gray';
});