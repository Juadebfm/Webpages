let navbar = $(".navbar");

$(window).scroll(function(){
    let oTop = $(".section-2").offset().top-window.innerHeight;
    if($(window).scrollTop()>oTop){
        navbar.addclass("sticky");
    }else{
        navbar.removeClass("sticky")
    }
});