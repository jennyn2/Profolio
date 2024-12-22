const galleryItems = document.querySelectorAll('.gallery-item');

function adjustGalleryOrder() {
    const isLowWidth = window.innerWidth <= 700;
    galleryItems.forEach(item => {
        const description = item.querySelector('.gallery-item-description');
        const image = item.querySelector('.gallery-item-image');
        if (isLowWidth) {
            item.innerHTML = ''; 
            item.appendChild(description); // Add description first
            item.appendChild(image);       // Add image second
        } else {
            item.innerHTML = ''; 
            item.appendChild(image);       // Add image first
            item.appendChild(description); // Add description second
        }
    });
}
window.addEventListener('resize', adjustGalleryOrder);
adjustGalleryOrder();