// 1. Seleciona os elementos do HTML que vamos manipular
const menuHamburger = document.querySelector('.menu-hamburger');
const menuNav = document.querySelector('header nav');

// 2. Verifica se os elementos foram encontrados (boa prática)
if (menuHamburger && menuNav) {
    
    // 3. Adiciona um "ouvinte de evento" de clique ao ícone do menu
    menuHamburger.addEventListener('click', () => {
        
        // 4. A mágica acontece aqui: adiciona ou remove a classe 'ativo' do menu
        menuNav.classList.toggle('ativo');
    });
}

// --- EFEITO DE SOMBRA NO HEADER AO ROLAR A PÁGINA ---

// 1. Seleciona o header
const header = document.querySelector('header');

// 2. Verifica se o header existe
if (header) {
    // 3. Adiciona um "ouvinte de evento" de scroll à janela
    window.addEventListener('scroll', () => {
        // 4. Se o usuário rolou mais de 10 pixels para baixo...
        if (window.scrollY > 10) {
            // ...adiciona a classe 'header-scrolled'
            header.classList.add('header-scrolled');
        } else {
            // ...senão, remove a classe
            header.classList.remove('header-scrolled');
        }
    });
}