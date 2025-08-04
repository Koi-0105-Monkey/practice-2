document.querySelectorAll('.footer__toggle').forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () => {
        const linksWrapper = toggleBtn.closest('.footer__links');
        const list = linksWrapper.querySelector('.footer__list');
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !expanded);
        list.classList.toggle('footer__list--expanded');
    });
});
