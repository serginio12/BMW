
 $(window).scroll(function(){
        
        var scroll = $(this).scrollTop();
        
        
        if(scroll > $(".benefits").offset().top - ($(window).height()/1.2
            ))
        {
            $(".benefits").addClass("animated animated zoomIn");
        }
        
     
     if(scroll > $(".main-aford-left").offset().top - ($(window).height()/1.6
            ))
     {
           $(".main-aford-left").addClass("animated slideInLeft");
     }

       
     
     
     if(scroll > $(".tax-right").offset().top - ($(window).height()/1.9
            )){
           $(".tax-right").addClass("animated zoomIn");
        }
     
     
     
     
     
     
     if(scroll > $(".hybrid-left").offset().top - ($(window).height()/1.3
            )){
           $(".hybrid-left").addClass("animated slideInLeft");
        }
     
     
     
     
     
     
     
     
     
     
     if(scroll > $(".").offset().top - ($(window).height()/1.6
            )){
           $(".").addClass("animated bounceInRight");
        }
     
     
     
     
     
     
     
     
    });