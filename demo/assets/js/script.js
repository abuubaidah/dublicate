(function ($) {
    "use strict";
    
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
            var markedUp = $(this).parent().parent().siblings(".pic-keys").find(".main").children(".marked");
            var markedDown = $(this).parent().parent().siblings(".pic-keys").find(".bonus").children(".marked");

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

    $(document).ready(function(){
        // $('.all-lotteries').hide();
        $('.for-lottery-btn').hover(function(){
            $('.for-lottery').css("position", "initial");
            if ($(window).width() < 960) {
                $('.for-lottery').css("position", "relative");
            }
        });
    });

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


    $(document).ready(function(){
        $(".js-video-button").modalVideo({
			youtube:{
				controls:0,
				nocookie: true
			}
        });
    });

    // $(document).ready(function(){
    //     var $section = $('#lottery-ticket');
    //     $(document).bind('scroll', function (ev) {
    //         var scrollOffset = $(document).scrollTop();
    //         var containerOffset = $section.offset().top - window.innerHeight;
    //         if (scrollOffset > containerOffset) {
    //             $('.lottery-ticket').addClass('active');
    //             // unbind event not to load scrolsl again
    //             $(document).unbind('scroll');
    //         }
    //     });    
    // });    

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
                    items: 2
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
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
    
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

        setInterval(function(){ 
            $(".banner .part-img").addClass("active")
        }, 1000);
       
    });

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

    $(document).ready(function(){
        $('#world-map-gdp').vectorMap({
            map: 'world_mill',
            series: {
            regions: [{
                values: gdpData,
                scale: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial'
            }]
            },
            onRegionTipShow: function(e, el, code){
            el.html(el.html()+' (GDP - '+gdpData[code]+')');
            }
        });
    });

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