jQuery('document').ready(function($){
    var menuBTN = $('.header__span');
    var menu = $('.header__ul');

    menuBTN.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }
        else{
            menu.addClass('show');  
        }
    });
});
