const galleryImages = document.querySelectorAll('.gallery-images img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        lightbox.style.display = 'flex';
        lightboxImage.src = img.getAttribute('data-large');
    });
});

function showImage(index) {
    lightboxImage.src = galleryImages[index].getAttribute('data-large');
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

function calculatePrice() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Пожалуйста, введите корректные размеры.';
        return;
    }
    const area = width * height;
    const pricePerSquareCm = 0.5;
    const totalPrice = area * pricePerSquareCm;
    document.getElementById('result').textContent = `Цена картины: ${totalPrice.toFixed(2)} руб.`;
}
