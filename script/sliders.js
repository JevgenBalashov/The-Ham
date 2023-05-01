let currentSlide = 0;
const navigation = document.querySelectorAll('.slider-user-foto-small');
const slides = document.querySelectorAll('.slider-user-review');
const next = document.getElementById('arrowRight');
const previous = document.getElementById('arrowLeft');

for(let i = 0; i<navigation.length; i++) {
  navigation[i].onclick = function () {
    currentSlide = i;
    document.querySelector('.slider-user-review.container.active').classList.remove('active');
    document.querySelector('.slider-user-foto-small.active').classList.remove('active');
    navigation[currentSlide].classList.add('active');
    slides[currentSlide].classList.add('active');
  }
}

next.onclick = function() {
  nextSlide(currentSlide);
};

previous.onclick = function() {
  previousSlide(currentSlide);
};

function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  hideSlides();
  currentSlide = (n+slides.length)%slides.length;
  showSlides();
}

function hideSlides(){
  slides[currentSlide].className = 'slider-user-review container';
  navigation[currentSlide].className = 'slider-user-foto-small';
}

function showSlides(){
  slides[currentSlide].className = 'slider-user-review container active';
  navigation[currentSlide].className = 'slider-user-foto-small active';
}