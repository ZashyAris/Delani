$(document).ready(function(){
    $("#designImg").click(function(){
        $("#designImg").hide();
        $("#design").toggle();
        $("#design").show();
    });
    $("#design").click(function(){
        $("#design").hide();
        $("#designImg").toggle();
        $("#designImg").show();
    });
});
$(document).ready(function(){
    $("#devimg").click(function(){
        $("#devimg").hide();
        $("#development").toggle();
        $("#development").show();
    });
    $("#development").click(function(){
        $("#development").hide();
        $("#devimg").toggle();
        $("#devimg").show();
    });
});
$(document).ready(function(){
    $("#productimg").click(function(){
        $("#productimg").hide();
        $("#product").toggle();
        $("#product").show();
    });
    $("#product").click(function(){
        $("#product").hide();
        $("#productimg").toggle();
        $("#productimg").show();
    });
    $("#subscribe").click(function(){
        var user = document.getElementById("name").value;
       alert("Thank you "+user+" for subscribing to our channel");
    });
});


































