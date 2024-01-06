// Função para simular o carregamento de conteúdo da página
function loadPageContent(pageId) {
    
    // Carrega o conteúdo real, através de uma chamada AJAX
    const contentMap = {
        "start-link": "start.html",
        "desenhos-link": "desenhos.html",
        "artigos-link": "artigos.html",
        "palestras-link": "palestras.html",
        "diversidades-link": "diversidades.html"
    };

    const pageName = contentMap[pageId];

    // Cria uma nova requisição XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    // Configura a requisição
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Injeta o conteúdo correspondente no elemento principal
                document.getElementById('main-content').innerHTML = xhr.responseText;
            } else {
                console.error('Erro ao carregar a página:', xhr.statusText);
            }
        }
    };
    
    // Abre a requisição para o arquivo específico
    xhr.open('GET', `${pageName}`, true);
    
    // Envia a requisição
    xhr.send();
}

// Evento de clique para os links da sidebar
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove a classe 'active' de todos os links e adiciona ao clicado
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('active');
            });
            this.classList.add('active');

            // Carrega o conteúdo correspondente ao link clicado
            const pageId = this.id;
            loadPageContent(pageId);
        });
    });

    // Carrega o conteúdo na página inicial
    loadPageContent('start-link');
});