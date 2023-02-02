const addBookBtn = document.getElementById('add-book');
const form = document.getElementById('form');
const overlay = document.getElementById('overlay');
const cancelBtn = document.getElementById('cnl-btn');

addBookBtn.addEventListener('click', e => {
    form.classList.add('active');
    overlay.classList.add('active');
})

cancelBtn.addEventListener('click', e => {
    form.classList.remove('active');
    overlay.classList.remove('active');
})

