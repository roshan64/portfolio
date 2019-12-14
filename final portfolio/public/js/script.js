$(function() {
  AOS.init({
    duration: 1200
  });

  $('.js-load-more').on('click', function() {
    var $content = $(this).next('.js-more-content');
    
    $content.animate({
      height: 750,
    }, 500);
  });

  onElementHeightChange(document.body, function(){
    AOS.refresh();
  });
});

function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;
    
    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }
$(document).ready(function(){
    $(this).scrollTop(0);
    
});
$(window).on("load",function(){
    $(".loader .inner") .fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });
     $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});
$(document).ready(function()
{
	$('#slides').superslides({
		animation: 'fade',
		
	}); 

	 var typed= new Typed(".typed",{
	 	strings: ["Software Developer.","Web Developer.","Student."],
	 	typeSpeed: 70,
	 	loop: true,
	 	startDelay: 800	,
	 	showCursor:false
	 });



	jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });
    
    

});

   
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function() {

        
            

        

            if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) 
            {

                    $(".counter").each(function()
                    {
                        var element = $(this);
                        var endVal = parseInt(element.text());
                        element.countup(endVal);
                    })   
                    countUpFinished = true; 

                 
            }
    });
    
            $("[data-fancybox]").fancybox();


   

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });


   const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top",nav.outerHeight()+ "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top",0);
            body.removeClass("fixedNav");
        }




    }

	   
});