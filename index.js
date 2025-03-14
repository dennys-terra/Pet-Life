const faq = document.querySelectorAll('.question')

const openOrClose = () =>{
    faq.forEach((question) => {
        question.addEventListener('click', () => question.classList.toggle('faqIsActive'))
    });
} 
openOrClose();
