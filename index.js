const faq = document.querySelectorAll('.duvida')

const openOrClose = faq.forEach((question) => {
    question.addEventListener('click', () => question.classList.toggle('faqIsActive'))
});

openOrClose();
