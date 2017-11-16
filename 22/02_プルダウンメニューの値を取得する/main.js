main = function(){
  $('#decide').on('click', changeMessage);
};

changeMessage = function(){
  var value = $('#fruits').val();

  var message = '選んだ果物は'+value+'です';
  $('#message').html(message);
};

$().ready(main);

