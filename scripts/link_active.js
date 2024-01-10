document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.addEventListener('mousedown', function(event) {
      event.preventDefault();

      // Adicione a classe 'active' apenas ao link clicado
      link.classList.add('active');

      // Remova a classe 'active' de outros links
      links.forEach(l => {
        if (l !== link) {
          l.classList.remove('active');
        }
      });
    });
  });
});