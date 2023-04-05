let p = document.querySelector('.screen2 p');
let img = document.querySelector('#closed-cookie');
let btn = document.querySelector('button');
let screen1 = document.querySelector('.screen1');
let screen2 = document.querySelector('.screen2');
let msgs = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."
];

const openCookie = () => {
    let msg = selectMsg();
    p.innerHTML = msg;
    toggleScreen();
}

const selectMsg = () => {
    let index = Math.floor(Math.random()*msgs.length);
    return msgs[index];
}

const toggleScreen = () => {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

img.addEventListener('click', openCookie);
btn.onclick = toggleScreen;