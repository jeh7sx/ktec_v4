// JavaScript para esconder e mostrar o navbar
let lastScrollTop = 0;
let scrollBehaviorActive = true; // Variável de controle para ativar/desativar o comportamento de rolagem
const nav = document.getElementById("top");
const navbarToggler = document.getElementById("navbar-toggler");
const navbarCollapse = document.getElementById("navbarNavDropdown");

window.addEventListener("scroll", function () {
    if (!scrollBehaviorActive) return; // Se o comportamento estiver desativado, não faz nada

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        nav.style.top = "-100%"; // Ajuste conforme a altura do seu navbar
    } else {
        // Rolando para cima
        nav.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// Adiciona evento para alternar o comportamento de rolagem ao clicar no menu
navbarToggler.addEventListener("click", function () {
    // Alterna o estado de scrollBehaviorActive a cada clique
    scrollBehaviorActive = !scrollBehaviorActive;

    if (scrollBehaviorActive) {
        // Quando o comportamento de rolagem é ativado, o navbar deve ser visível
        nav.style.top = "0";
    } else {
        // Quando o comportamento de rolagem é desativado, o navbar fica fixo
        nav.style.top = "0"; // Garante que o navbar não desapareça
    }
});
