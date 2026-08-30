$(document).ready(function() {
  // Init Masonry
  var $grid = $('.grid').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
  });
  // Relayout once, after all images have settled.
  // .progress() fired this on *every* image load, and each pass reads element
  // geometry right after a DOM mutation -- the forced reflow PageSpeed flags.
  // .always() rather than .done() so a single broken image can't strand the grid.
  $grid.imagesLoaded().always( function() {
    $grid.masonry('layout');
  });
});
