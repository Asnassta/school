$(document).ready(function() {

/*======Menu-toggle=============*/
 $(".burger").on("click", function() {
	$(this).toggleClass("active");
	$(".header__menu").toggleClass('active');
	$('body').toggleClass('hidden');
});
/*==========/menu-toggle=========*/

/*========Studios=========*/
$(".studios__box").hover(function() {
    if ($(window).width() >= 992){
        $(this).find(".studios__box-info").slideToggle();
    $(this).toggleClass('hover');  
    };
});
/*========/studios=========*/

/*========Vacancy=========*/
$(".vacancy__item .link").on("click", function(event) {
	event.preventDefault();
    $(this).parents(".vacancy__item").find(".vacancy__description").slideToggle();
    $(this).toggleClass('active');
});
/*========/vacancy=========*/

/*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");
    });
    $(".closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

});