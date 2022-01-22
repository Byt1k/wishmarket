$(document).ready(function(){
    $('.go').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

$(function() {
    $(document).on("click", ".mobile_menu_container .parent", function(e) {
        e.preventDefault();
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).siblings("ul").addClass("loaded").addClass("activity");
    });
    $(document).on("click", ".mobile_menu_container .back", function(e) {
        e.preventDefault();
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).parent().parent().removeClass("loaded");
        $(this).parent().parent().parent().parent().addClass("activity");
    });
    $(document).on("click", ".mobile_menu", function(e) {
        e.preventDefault();
        $(".mobile_menu_container").addClass("loaded");
        $(".mobile_menu_overlay").fadeIn();
    });
    $(document).on("click", ".mobile_menu_overlay", function(e) {
        $(".mobile_menu_container").removeClass("loaded");
        $(this).fadeOut(function() {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        });
    });
    $(document).on("click", ".close", function(e) {
        $(".mobile_menu_container").removeClass("loaded");
        $(".mobile_menu_overlay").fadeOut(function() {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        });
    });




    $('.mobile-info__block_btn1').click(function(){
    	$('.mobile-info__block_text1').toggleClass('d-block');
    	$('.mobile-info__block_img1').toggleClass('rotate');
    });

    $('.mobile-info__block_btn2').click(function(){
    	$('.mobile-info__block_text2').toggleClass('d-block');
    	$('.mobile-info__block_img2').toggleClass('rotate');
    });


    $('.owl-site').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    navText:['<img src="img/owl-prev.svg">','<img src="img/owl-next.svg">'],
    responsive:{
        0:{
            items:1
        }
    }
	});

	$('.owl-team').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    navText:['<img src="img/owl-prev.svg">','<img src="img/owl-next.svg">'],
    responsive:{
        0:{
            items:1
        }
    }
	});

	$('.owl-menu').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots:false,responsive:{
        0:{
            items:2
        },
        576:{
        	items:3
        },
        768:{
        	items:4
        }
    }
	});


    $('.lock-btn').click(function(){
    	$('.presents-catalog__item_add').toggleClass('locked');
    });

    $('.check-btn').click(function(){
    	$('.presents-catalog__item_add').toggleClass('checked');
    	$('.presents-catalog__item_add').removeClass('locked');
    	$('.presents-catalog__item_add').toggleClass('checked-l-btn');
    	$('.lock-btn').toggleClass('d-none');

    });



    $('.modal-new-list__cover').click(function(){
    	$('.modal-new-list__cover').removeClass('checked');
    	$(this).addClass('checked');
    });

    $('.modal-edit__list').click(function(){
    	/*$('.modal-edit__list').removeClass('checked');
    	$(this).addClass('checked');*/
    	$(this).toggleClass('checked');
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#imgInp").change(function(){
        readURL(this);
    });

	document.getElementById('imgInp').addEventListener('change', function(){
	  if( this.value ){
	  	$('.modal-photo__overflow').addClass('d-block');
	  	$('.modal-photo__label').addClass('white');
	  	$('.modal-photo__label').html('Изменить фото');
	    /*alert( "Оппа, выбрали файл!" );
	    alert( this.value );*/
	  } else { // Если после выбранного тыкнули еще раз, но дальше cancel
	    /*alert( "Файл не выбран" );*/ 
	  }
	});

	$('.wishlist__bg').click(function(){
    	/*$('.modal-edit__list').removeClass('checked');
    	$(this).addClass('checked');*/
    	$(this).toggleClass('add-btns');
    });
    
    $('.wish__bg').click(function(){
    	/*$('.modal-edit__list').removeClass('checked');
    	$(this).addClass('checked');*/
    	$(this).toggleClass('add-btns');
    });


    

    $('#checkbox-cart').click(function(){
    	$('.cart__item').toggleClass('checked');
    });
})



