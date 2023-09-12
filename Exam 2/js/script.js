document.addEventListener('DOMContentLoaded', function () {
    const customerBtnL = document.querySelector('.customer-btn-l');
    const customerBtnR = document.querySelector('.customer-btn-r');
    const clientReviews = document.querySelectorAll('.client-review');

    let currentIndex = 0;

    function showReview(index) {
        clientReviews.forEach(review => review.classList.add('d-none'));
        clientReviews[index].classList.remove('d-none');
    }

    customerBtnL.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + clientReviews.length) % clientReviews.length;
        showReview(currentIndex);
    });

    customerBtnR.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % clientReviews.length;
        showReview(currentIndex);
    });
});