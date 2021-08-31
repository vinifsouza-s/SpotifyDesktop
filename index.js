const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);



const btnCards = document.getElementById('morecards');

function toggleCards(){
    const card = document.getElementById('cardtest');
    card.classList.toggle('active');
}

btnCards.addEventListener('click', toggleCards);