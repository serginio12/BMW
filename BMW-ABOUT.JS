$(document).ready(function(){
    $(".style-list").mouseenter(function(){
        $(".span-car").show(2000);
    });
    
    $(".style-list").mouseleave(function(){
        $(".span-car").hide(1000);
    });

});