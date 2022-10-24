let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

var d = document.querySelector('.first_step')
var e = document.querySelector('.gg')
var f = document.querySelector('#prompt')
var second = document.querySelector('.second')
var refresh = document.querySelector('.refresh')
var re = document.querySelector('.re')

re.addEventListener('click', refre);
function refre(event) {
    location.reload();
    return false;
}

e.addEventListener('click', diss);

function diss(event) {
    event.preventDefault();
    d.classList.toggle('close');
    f.classList.toggle('show');
    second.classList.toggle('show');
    input.focus();
}

prompt.addEventListener('submit', send);

function send(event) {
    event.preventDefault();
    processInput(input.value);
    input.value = '';
}

function printMessage(message) {
    let li = document.createElement('li');
    li.textContent = message;
    output.appendChild(li);
}

function clearOutput() {
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input) {
    if (!input) return;

    printMessage(input);
    let guess = Number.parseInt(input);
    if (Number.isNaN(guess)) return;
    guesses += 1;
    if (guess > number) {
        printMessage('Надо меньше');
    } else if (guess < number) {
        printMessage('Надо больше');
    } else {
        printMessage(`Вы угадали, это число ${guess} !`);
        printMessage(`Колличество попыток: ${guesses}.`);
        printMessage('Сыграем еще?');
        printMessage('Для начала игры нажмите кнопку');

        prompt.remove();
        refresh.classList.toggle('show');
    }
}