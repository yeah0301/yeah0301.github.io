$(function () {

    $( "#next" ).click(function() {


        $.ajax({
                url: 'next.html',
                //data: $('#sentToBack').serialize(),
                //type:"POST",
                dataType:'text',

                success: function(msg){
                   
                    //alert(msg);
                    $("div.starter-template").html(msg);
                },

                 error:function(xhr, ajaxOptions, thrownError){ 
                    alert(xhr.status); 
                    alert(thrownError); 
                 }
            });
    });


    $( "#pre" ).click(function() {

        
            $.ajax({
                url: 'pre.html',
                //data: $('#sentToBack').serialize(),
                //type:"POST",
                dataType:'text',

                success: function(msg){
                   
                    //alert(msg);
                    $("div.starter-template").html(msg);
                },

                 error:function(xhr, ajaxOptions, thrownError){ 
                    alert(xhr.status); 
                    alert(thrownError); 
                 }
            });

    });



    $('#gototop ,#foot_gototop').click(function() {

        $('body').animate({
            scrollTop: $('#pagetop').offset().top
        }, 750,'swing');

    });


    $(window).scroll(function() {
        var spNow = $(this).scrollTop();
        //alert(spNow);
            
        if (spNow > 300) {
            
            $("nav#bar").attr('class', 'navbar navbar-inverse navbar-fixed-top');
            $("a.gototop").css('display','inline');
            
        } else {
            $("nav#bar").attr('class', 'navbar navbar-inverse');
            $("a.gototop").css('display','none');
        }

    });


});




