function createReviewsModal() {
    if (!document.querySelector('#reviews-modal')) {
        const modal = document.createElement('div');
        modal.id = 'reviews-modal';
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="review-modal-content">
                <div class="close-review-header">
                    <span class="close-reviews-modal" onclick="closeReviewsModal()">&times;</span>
                </div>
                <div id="reviews-container"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

// Open modal
function openReviewsModal(reviews) {
    createReviewsModal();
    const modal = document.querySelector('#reviews-modal');
    const reviewsContainer = modal.querySelector('#reviews-container');
    // Clear previous reviews
    reviewsContainer.innerHTML = '';

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review-item');

        const usernameSpan = document.createElement('span');
        usernameSpan.classList.add('review-username');
        usernameSpan.textContent = review.username;

        const reviewText = document.createElement('p');
        reviewText.classList.add('review-text');
        reviewText.textContent = review.reviewText;

        const starRating = document.createElement('span');
        starRating.classList.add('review-stars');
        starRating.textContent = `⭐ ${review.starRating}`;

        reviewDiv.appendChild(usernameSpan);
        reviewDiv.appendChild(reviewText);
        reviewDiv.appendChild(starRating);

        reviewsContainer.appendChild(reviewDiv);
    });

    modal.style.display = 'block';
}

// Close modal
function closeReviewsModal() {
    const modal = document.querySelector('#reviews-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}