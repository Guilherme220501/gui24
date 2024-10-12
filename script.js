function showAlert(message) {window.onload = function () {alert(message);};}

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

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('back-ground');
    const menuBtn = document.querySelector('.menu-btn');
    
    // Verifica se o clique foi fora do menu e do botão
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
      sidebar.style.left = '-250px'; // Fecha o menu
    }
  });
  
  function toggleMenu() {
    const sidebar = document.getElementById('back-ground');
    
    if (sidebar.style.left === '-250px' || sidebar.style.left === '') {
      sidebar.style.left = '0'; // Abre o menu
    } else {
      sidebar.style.left = '-250px'; // Fecha o menu
    }
  }