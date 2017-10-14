$(document).ready(() => {
  $(".button-collapse").sideNav();
});

var options = [
  {
    selector: "#fade-in",
    offset: 200,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  }
];
Materialize.scrollFire(options);
