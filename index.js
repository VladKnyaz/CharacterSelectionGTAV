$('.slider').slick({
  slidesToShow: 1,
  centerMode: true,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  variableWidth: true,
  arrows: true,
  prevArrow: '.prevArrow',
  nextArrow: '.nextArrow',
  infinite: false,
});

const slickTrack = document.querySelector('.slick-track');
slickTrack.style.padding = '50px';
