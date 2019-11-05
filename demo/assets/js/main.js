(function ($) {
    "use strict";

    // dropdown menu scroll
    $(document).ready(function(){
        var x = $('.dropdown-item');
        var y = $('.dropdown-menu').find(x).length;
        // $('.sign-up').on('click', function(){
           
        // });
        // $('.dropdown-menu').css('height', '260px');
        $('.dropdown-menu').each(function(){
            var v = $(this).find(x).length;
            if(v <= 6) {
                $(this).css('height', 'auto');
            } else {
                $(this).css('height', '260px');
            }
        });
        
    });

    // anchor tag disabled
    $(document).ready(function(){
        $(".lottery-result .result-board .table tbody tr td ul li a").click(function(e) {
            e.preventDefault();
        });
        $(".sold").click(function(e) {
            e.preventDefault();
        });
    });

    // picking lottery number
    $(document).ready(function(){

        var getBtn = $(".seed-btn");
        var getSpan45 = document.getElementsByClassName("rdm-seed-45")[0];
        var getSpan20 = document.getElementsByClassName("rdm-seed-20")[0];
        var arr45 = [];
        var seed20;

            function seedArr(ArrLength) {
            for (var i = 0; i < ArrLength; i++) {
                arr45[i] = Math.ceil(Math.random() * 54);
            }
        }

        getBtn.on('click', function(){
            getSpan45.innerHTML = "";
            getSpan20.innerHTML = "";

            var marked = $(".pic-keys .marked");
            var markedUp = $(".pic-keys .main .marked");
            var markedDown = $(".pic-keys .bonus .marked");

            for (var i = 0; i < marked.length; i++) {
                marked[i].className = "marked";
            }

            var check = true;
            while (check) {
                seedArr(5);
                check = false;
                for (var i = 0; i < arr45.length; i++) {
                for (var j = i + 1; j < arr45.length; j++) {
                    if (arr45[i] == arr45[j]) {
                    check = true;
                    break;
                    }
                }
                }
            }

            for (var i = 0; i < arr45.length; i++) {
                getSpan45.innerHTML += "<span class='marked'>" + arr45[i] + "</span>";
            }

            seed20 = Math.ceil(Math.random() * 20);
            getSpan20.innerHTML += "<span class='marked'>" + seed20 + "</span>";

            for (var i = 0; i < markedUp.length; i++) {
                for (var j = 0; j < arr45.length; j++) {
                if (markedUp[i].innerHTML == arr45[j]) {
                    markedUp[i].className += " coloured";
                }
                }
            }
            for (var i = 0; i < markedDown.length; i++) {
                if (markedDown[i].innerHTML == seed20) {
                markedDown[i].className += " coloured";
                }
            }
        });
    })

    // cart order function
    $(function(){
        
        var item = $('.single-order'); 
        $('#cart-number').text(item.length);
        
        $('.tooltip-bottom').on('click', function(){
            $(this).closest(".single-order").remove();
            
            var item = $('.single-order'); 
            $('#cart-number').text(item.length);
            
        });
        
    });

    // megamenu fixing for lottery 
    $(document).ready(function(){
        // $('.all-lotteries').hide();
        $('.for-lottery-btn').hover(function(){
            $('.for-lottery').css("position", "initial");
            if ($(window).width() < 960) {
                $('.for-lottery').css("position", "relative");
            }
        });
    });

    // fixed menu
    $(window).on('scroll', function(){
        var fixed_top = $(".header");
        var topbar = $('.topbar');
        $(window).on("scroll", function(){
            if( $(window).scrollTop() > 100){  
                fixed_top.addClass("animated fadeInDown fixed-header");
                topbar.hide();
                if ($(window).width() < 960) {
                    $('.header').removeClass('fixed-header');
                }
            }
            else{
                fixed_top.removeClass("animated fadeInDown fixed-header");
                topbar.show();
                if ($(window).width() < 960) {
                    topbar.hide();
                }
            }
        });
    }); 

    // modal video
    $(document).ready(function(){
        $(".js-video-button").modalVideo({
			youtube:{
				controls:0,
				nocookie: true
			}
        });
    });  

    // count down
    $(document).ready(function(){
        var nodes = $('.timer');
        $.each(nodes, function (index, value) {
            var date = $(this).data('date');

            setInterval(() => {

                var endTime = new Date(date);
                endTime = (Date.parse(endTime) / 1000);

                var now = new Date();
                now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400);
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $(value).find('.day').html(days);
                $(value).find('.hour').html(hours);
                $(value).find('.minute').html(minutes);
                $(value).find('.second').html(seconds);

            }, 1000);


        })
    });

    // box slider
    $(document).ready(function(){
        var boxSlide = $('.box-slide');
        boxSlide.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            items: 1,
            smartSpeed: 1000,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            navText: ['<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-alt-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-alt-left fa-w-14 fa-fw fa-2x"><path fill="currentColor" d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z" class=""></path></svg>', '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-alt-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 fa-fw fa-2x"><path fill="currentColor" d="M340.485 366l99.03-99.029c4.686-4.686 4.686-12.284 0-16.971l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485v71.03H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h308v71.03c0 10.689 12.926 16.043 20.485 8.484z" class=""></path></svg>'],
            autoplay: true,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
    });

    // banner slider
    $(document).ready(function(){
        var bannerSlide = $('.banner-slide');
        bannerSlide.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            smartSpeed: 1000,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            navText: ['<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-alt-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-alt-left fa-w-14 fa-fw fa-2x"><path fill="currentColor" d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z" class=""></path></svg>', '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-alt-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 fa-fw fa-2x"><path fill="currentColor" d="M340.485 366l99.03-99.029c4.686-4.686 4.686-12.284 0-16.971l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485v71.03H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h308v71.03c0 10.689 12.926 16.043 20.485 8.484z" class=""></path></svg>'],
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
    });
    jQuery(".banner-slide").on("translate.owl.carousel", function () {
        jQuery(this).find(".owl-item .banner-content > *").removeClass("fadeInUp animated").css("opacity","0");
        jQuery(this).find(".owl-item .part-img").removeClass("fadeInRight animated").css("opacity","0");
    });          
    jQuery(".banner-slide").on("translated.owl.carousel", function () {
        jQuery(this).find(".owl-item.active .banner-content > *").addClass("fadeInUp animated").css("opacity","1");
        jQuery(this).find(".owl-item.active .part-img").addClass("fadeInRight animated").css("opacity","1");
    });

    // brand slider
    $(document).ready(function(){
        var barndSlider = $('.brand-list');
        barndSlider.owlCarousel({
            loop: true,
            margin: 60,
            nav: false,
            items: 2,
            smartSpeed: 1500,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 2,
                    margin: 15
                },
                576: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 3,
                    margin: 30
                },
                960: {
                    items: 5
                },
                1200: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });

        $('.brand-list .owl-item.active').eq(2).addClass("target");

        barndSlider.on('changed.owl.carousel', function(event) {
            setTimeout(function(){
                var activeEls = $('.brand-list .owl-item.active').eq(2); // .eq(1) to get the "middle image out of 3 actives"
                setCarouselCaption( activeEls ); 
            },1);
        });
    
        function setCarouselCaption(el){
            $(".brand-list .owl-item").removeClass("target");
            el.addClass("target");
        }
    });

    // jackpot slider
    $(document).ready(function(){
        var jackpotSlider = $('.jackpot-slider');
        jackpotSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 2,
            smartSpeed: 1500,
            autoplay: true,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });

        $('.jackpot-slider .owl-item.active').eq(1).addClass("target");

        jackpotSlider.on('changed.owl.carousel', function(event) {
            setTimeout(function(){
                var activeEls = $('.jackpot-slider .owl-item.active').eq(1); // .eq(1) to get the "middle image out of 3 actives"
                setCarouselCaption( activeEls ); 
            },1);
        });
    
        function setCarouselCaption(el){
            $(".jackpot-slider .owl-item").removeClass("target");
            el.addClass("target");
        }
    });
    
    // initilization preloader & setInterval
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

        setInterval(function(){ 
            $(".banner .part-img").addClass("active")
        }, 1000);
       
    });

    // language selection menu
    $('#demo').flagStrap({
        countries: {
            "AU": "Aus",
            "BD": "Ban",
            "US": "Eng"
        },
        buttonSize: "",
        buttonType: "",
        labelMargin: "10px",
        scrollable: false,
        scrollableHeight: "350px"
    });

    // testimonial slider
    $(document).ready(function(){
        var testimonialSlider = $('.testimonial-slider');
        testimonialSlider.owlCarousel({
            loop: true,
            margin: 60,
            nav: true,
            items: 2,
            smartSpeed: 1000,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            autoplay: true,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        });
    });

    // testimonial 2 slider
    $(document).ready(function(){
        var testimonialSlider2 = $('.testimonial-slider2');
        testimonialSlider2.owlCarousel({
            loop: true,
            margin: 60,
            nav: false,
            smartSpeed: 1000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            thumbs: true,
            thumbsPrerendered: true,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
        $('.owl-next').click(function() {
            testimonialSlider2.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.owl-prev').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            testimonialSlider2.trigger('prev.owl.carousel', [300]);
        })
    });

    // logo changed whent menu will be fixed
    $(window).on('scroll', function(){
        $(window).on("scroll", function(){
            if( $(window).scrollTop() > 100){  
                $("#logo-2").attr("src", "assets/img/logo.png");
                if ($(window).width() < 960) {
                    $("#logo-2").attr("src", "assets/img/logo-2.png");
                }
            }
            else{
                $("#logo-2").attr("src", "assets/img/logo-2.png");
                if ($(window).width() < 960) {
                    $("#logo-2").attr("src", "assets/img/logo-2.png");
                }
            }
        });
    });

}(jQuery));	







