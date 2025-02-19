const images1 = document.querySelectorAll('.album img');
const prevButton1 = document.querySelector('.album .prev');
const nextButton1 = document.querySelector('.album .next');
let currentIndex1 = 0;
let intervalId1;

function showImage1(index) {
    images1[currentIndex1].classList.remove('active');
    currentIndex1 = (index + images1.length) % images1.length;
    images1[currentIndex1].classList.add('active');
}

function showNextImage1() {
    showImage1(currentIndex1 + 1);
}

function showPrevImage1() {
    showImage1(currentIndex1 - 1);
}

function startSlideshow1() {
    intervalId1 = setInterval(showNextImage1, 3000);
}

function stopSlideshow1() {
    clearInterval(intervalId1);
}

nextButton1.addEventListener('click', () => {
    stopSlideshow1();
    showNextImage1();
    startSlideshow1();
});

prevButton1.addEventListener('click', () => {
    stopSlideshow1();
    showPrevImage1();
    startSlideshow1();
});

startSlideshow1();

const images2 = document.querySelectorAll('.album2 img');
const prevButton2 = document.querySelector('.album2 .prev');
const nextButton2 = document.querySelector('.album2 .next');
let currentIndex2 = 0;
let intervalId2;

function showImage2(index) {
    images2[currentIndex2].classList.remove('active');
    currentIndex2 = (index + images2.length) % images2.length;
    images2[currentIndex2].classList.add('active');
}

function showNextImage2() {
    showImage2(currentIndex2 + 1);
}

function showPrevImage2() {
    showImage2(currentIndex2 - 1);
}

function startSlideshow2() {
    intervalId2 = setInterval(showNextImage2, 4500);
}

function stopSlideshow2() {
    clearInterval(intervalId2);
}

nextButton2.addEventListener('click', () => {
    stopSlideshow2();
    showNextImage2();
    startSlideshow2();
});

prevButton2.addEventListener('click', () => {
    stopSlideshow2();
    showPrevImage2();
    startSlideshow2();
});

startSlideshow2();

const images3 = document.querySelectorAll('.album3 img');
const prevButton3 = document.querySelector('.album3 .prev');
const nextButton3 = document.querySelector('.album3 .next');
let currentIndex3 = 0;
let intervalId3;

function showImage3(index) {
    images3[currentIndex3].classList.remove('active');
    currentIndex3 = (index + images3.length) % images3.length;
    images3[currentIndex3].classList.add('active');
}

function showNextImage3() {
    showImage3(currentIndex3 + 1);
}

function showPrevImage3() {
    showImage3(currentIndex3 - 1);
}

function startSlideshow3() {
    intervalId3 = setInterval(showNextImage3, 5500);
}

function stopSlideshow3() {
    clearInterval(intervalId3);
}

nextButton3.addEventListener('click', () => {
    stopSlideshow3();
    showNextImage3();
    startSlideshow3();
});

prevButton3.addEventListener('click', () => {
    stopSlideshow3();
    showPrevImage3();
    startSlideshow3();
});

startSlideshow3();