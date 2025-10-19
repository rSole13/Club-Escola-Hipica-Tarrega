const btn = document.getElementById('menu-btn');
const panel = document.getElementById('mobile-panel');

btn.addEventListener('click', () => {
    if (panel.style.display ==='flex'){
        panel.style.display = 'none';
    } else {
        panel.style.display = 'flex';
    }
});