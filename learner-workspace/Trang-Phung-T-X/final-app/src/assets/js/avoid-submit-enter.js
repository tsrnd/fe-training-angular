// $ ->
//   $('form#new_contact').on 'keypress', (e)->
//     return false if pressEnter(e) && e.target.id != 'description'
$(document).on("keypress", 'form', function (e) {
  var code = e.keyCode || e.which;
  if (code == 13) {
    e.preventDefault();
    return false;
  }
});
