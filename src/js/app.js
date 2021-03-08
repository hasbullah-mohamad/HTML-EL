import 'popper.js';
import 'bootstrap';
import '@fancyapps/fancybox';
import $ from 'jquery';
import 'slick-carousel';
import jQueryBridget from 'jquery-bridget';
import Masonry from 'masonry-layout';

jQueryBridget( 'masonry', Masonry, $ );

$('.oyster-carousel').slick({
  dots: true,
  arrows: true,
});
$('.article-carousel').slick({
  dots: true,
  arrows: true,
});

$('.cards-carousel').slick({
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.quality-carousel').slick({
  dots: false,
  arrows: true,
  centerPadding: true,
  centerPadding: 100
});

setTimeout(function() { 
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 330,
    gutter: 30
  });
}, 100);

$('.site-header .navbar-toggler').click(() => {
  document.body.classList.toggle('menu-open');
});

