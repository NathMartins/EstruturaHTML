const btn = document.getElementById('btn-darkmode');
const body = document.body;

btn.addEventListener('click', () => {
    body.classList.toggle('darkmode');
});
