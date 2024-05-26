document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.popup-image');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popupImage = document.createElement('img');
    popupImage.className = 'popup-img';
    overlay.appendChild(popupImage);

    const leftArrow = document.createElement('i');
    leftArrow.className = 'fa-solid fa-arrow-left arrow left';
    overlay.appendChild(leftArrow);

    const rightArrow = document.createElement('i');
    rightArrow.className = 'fa-solid fa-arrow-right arrow right';
    overlay.appendChild(rightArrow);

    document.body.appendChild(overlay);

    let currentIndex = 0;

    links.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index;
            const popupImageUrl = this.getAttribute('data-popup-image');
            popupImage.src = popupImageUrl;
            overlay.style.display = 'flex';
        });
    });

    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : links.length - 1;
        popupImage.src = links[currentIndex].getAttribute('data-popup-image');
    });

    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % links.length;
        popupImage.src = links[currentIndex].getAttribute('data-popup-image');
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            this.style.display = 'none';
        }
    });
});
