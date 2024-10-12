function showAlert(message) {window.onload = function () {alert(message);};}
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
// Função para abrir e fechar o menu lateral
function toggleMenu() {
    const sidebar = document.getElementById('back-ground');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0'; // Abre o menu
    } else {
        sidebar.style.left = '-250px'; // Fecha o menu
    }
}
function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    const horarioAtual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('relogio').innerText = horarioAtual;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();