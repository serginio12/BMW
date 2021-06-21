  
    $(document).ready(function(){
    $(window).scroll(function(){
        var positionTop = $(document).scrollTop();
        console.log(positionTop);
        if((positionTop > 234) && (positionTop < 247)){
            $("#vert-line").delay(3000).addClass("animated slideInDown");
        }
        
        if((positionTop > 282) && (positionTop < 292)){
            $("#benef-choosing").addClass("animated bounceInRight");
        }
    });
});