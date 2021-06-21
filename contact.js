 
   
    $(window).scroll(function(){
        
        var scroll = $(this).scrollTop();
        
        
        $(".cont-h1").css({
            "transform" : "translate(290px, "+ scroll /0.47 +"%)"
        });
        
        $("ww").css({
            "transform" : "translate(0px, -"+ scroll /6 +"%)"
        });
        
        
        $("contact-bmw").css({
            "background-size" : 90 + scroll + "%"
        });
        
        
        if(scroll > $(".emergency").offset().top - ($(window).height()/1.2
            )){
          
            $(".emergency").addClass("animated bounceInRight");
    
        }
        

        
    });
    
  
    