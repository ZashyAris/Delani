$(document).ready(function(){
    $('#design p').hide();
    $('#design').click(function(){
        $('#design p').toggle();
        $('#design img').toggle();
    });
});
$(document).ready(function(){
    $('.card-dev p').hide();
    $('.card-dev').click(function(){
        $('.card-dev p').toggle();
        $('.card-dev img').toggle();
    });
});
$(document).ready(function(){
    $('.bottom p').hide();
    $('.bottom').click(function(){
        $('.bottom p').toggle();
        $('.bottom img').toggle();
    });
    $('.col').hover(function(){
      $('.text',this).toggle('slow');
    });
    $('.submit').click(function(){
       var name= $('#name').val();
       var email=$('#email').val();
       var message=$('#message').val();
       if ((name!=="") &&(email!=="") &&(message!==""));
       alert(name  +"," +" Thank you.Your  form has been submitted successfully");
    });
});