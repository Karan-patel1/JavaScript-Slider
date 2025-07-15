let arr = [
  "img/photo-1.jpg",
  "img/photo-2.jpg",
  "img/photo-3.jpg",
  "img/photo-4.jpg",
  "img/photo-5.jpg"
];

let tr = '';
arr.map((i, index) => {
  tr += `<div class="slider${index === 0 ? ' active' : ''}">
    <img src="${i}" alt="Photo${index + 1}" class="img-fluid" />
  </div>`;
});

tr += `<button class="btn-slide prev position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent">
          <i class="fas fa-3x fa-chevron-circle-left text-dark"></i>
       </button>
       <button class="btn-slide next position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent">
          <i class="fas fa-3x fa-chevron-circle-right text-dark"></i>
       </button>`;

document.getElementById('slideData').innerHTML = tr;

function Slider() {
  const carouselSlides = document.querySelectorAll('.slider');
  const btnPrev = document.querySelector('.prev');
  const btnNext = document.querySelector('.next');
  const dotsSlide = document.querySelector('.dots-container');
  let currentSlide = 0;

  const activeDot = function (slider) {
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    const active = document.querySelector(`.dot[data-slide="${slider}"]`);
    if (active) active.classList.add('active');
  };

  const changeSlide = function (slideIndex) {
    carouselSlides.forEach((slide, index) => {
      slide.classList.toggle('active', index === Number(slideIndex));
    });
  };
  

  btnNext.addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });
  

  btnPrev.addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsSlide.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot')) {
      currentSlide = Number(e.target.dataset.slide);
      changeSlide(currentSlide);
      activeDot(currentSlide);
    }
  });
}
Slider();
