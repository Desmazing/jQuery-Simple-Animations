$(document).ready(function(){
    $("#circle").click(function(){
        $(this).animate({top: "100px"})
        .animate({height: "-=150px", top: "+=30px"}, "slow")
        .animate({height: "+=100px", bottom: "-=50px"}, "fast")
        .animate({top: "-100px", height: "+=50px"})
        .animate({height: "toggle"})
        .animate({height: "toggle"});
        }
    )
})