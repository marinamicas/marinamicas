const accordions = document.querySelectorAll('.singleSelection details');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', (e) => {
        accordions.forEach((otherAccordion) => {
            if (!otherAccordion.isEqualNode(accordion)) {
                otherAccordion.removeAttribute('open');
            }
        });
    });
});
