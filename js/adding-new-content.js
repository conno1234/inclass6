$(function() {

  $('ul').before('<p>Just Updated</p>');

  $('li.hot').prepend("+ ");

  var myLI = '<li><em>gluten-free</em> soy sauce</li>';
  $('li:last').after(myLI);

});
