const images = document.querySelectorAll('.carousel-img');
let current = 1;

function updateCarousel() {
    images.forEach((img, i) => {
        img.classList.remove('center', 'left', 'right', 'hidden');
        img.onclick = null;
        if (i === current) {
            img.classList.add('center');
        } else if (i === (current - 1 + images.length) % images.length) {
            img.classList.add('left');
            img.onclick = () => {
                current = (current - 1 + images.length) % images.length;
                updateCarousel();
            };
        } else if (i === (current + 1) % images.length) {
            img.classList.add('right');
            img.onclick = () => {
                current = (current + 1) % images.length;
                updateCarousel();
            };
        } else {
            img.classList.add('hidden');
        }
    });
}

updateCarousel();
