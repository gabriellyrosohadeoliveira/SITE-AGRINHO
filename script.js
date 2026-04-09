// Efeito de mudar o background do header ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#f4f7f2';
        header.style.padding = '10px 0';
    } else {
        header.style.backgroundColor = '#fff';
        header.style.padding = '20px 0';
    }
});

// Mensagem de boas-vindas no console (para testar o carregamento)
console.log("Agro Sustentável: Site carregado com sucesso!");
