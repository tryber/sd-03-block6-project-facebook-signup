$(document).ready(function(){
  $("#registration-form").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true,
        email: {matches:"[0-9]+",minlength:9, maxlength:9},
      },
      password: {
        required: true,
        minlength: 6,
      },
      bithdate: {
        required: true,
        date: true,
      }
    },

  })

  $("#facebook-register").click({

  })
})
