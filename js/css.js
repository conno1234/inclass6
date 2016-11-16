$(function() {

  var backgroundColor = $('li#one').css('background-color');

  $('ul').append("<p>" + backgroundColor + "</p>");

  $('li').css({
    'background-color' : '#c5a996',
    'font-family' : 'Georgia',
    'border' : '1px solid #FFFFFF',
    'color' : 'black',
    'text-shadow' : 'none'
  });

});
