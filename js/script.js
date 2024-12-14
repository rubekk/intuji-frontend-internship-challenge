const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    const question = faq.querySelector('.question');

    question.addEventListener('click', () => {
        const isActive = faq.querySelector('.answer').classList.contains('active-answer');

        faqs.forEach((otherFaq) => {
            otherFaq.querySelector('.answer').classList.remove('active-answer');
        });

        if (!isActive) faq.querySelector('.answer').classList.add('active-answer');
        else faq.querySelector('.answer').classList.add('active-answer');
    });
});
