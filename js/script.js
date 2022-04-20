
/* ----------------------------- S T A R T A C C O R D E O N ---------------------------- */
$("section div:nth(0)").css('display','block')
$("h3").click(function(){
    $(this).next().slideToggle(500)
    $("section div").not($(this).next()).slideUp(500)
});
/* ----------------------------- E N D A C C O R D E O N ---------------------------- */

/* ------------------------------ S T A R T N A V B A R ------------------------------ */

$("a[href^='#']").click(function (e) {
    let navTarget = $(e.target).attr('href')
    let sectionPosition = $(navTarget).offset().top
    $('html,body').animate({scrollTop : sectionPosition},500)
});

let innerWidth = $(".slidebar").outerWidth(true)
$(".slide").animate({left:`-${innerWidth}px`} , 0);    

$(".slide #open-btn").click(function(){

    let left = $(".slide").css("left")

    if ( left == "0px"){
        $(".slide").animate({left:`-${innerWidth}px`} , 1000);    
    }
    else
    {
        $(".slide").animate({left:"0px"} , 1000);    
    }
});

$(".slide #close-btn").click(function(){

    let left = $(".slide").css("left")

    if ( left == "0px"){

        let innerWidth = $(".slidebar").outerWidth(true)
        $(".slide").animate({left:`-${innerWidth}px`} , 1000);    
    }
});
/* ------------------------------ E N D N A V B A R ------------------------------ */

 /* ------------------------------- S T A R T C O U N T  D O W N ------------------------------- */

$('#getting-started').countdown('2022/02/26', function(event) {
    $(this).html(event.strftime(`<div class="row">
    <div class="col-md-3 text-center text-white mb-5"><h3>%d</h3><span class="days">Days</span></div>
    <div class="col-md-3 text-center text-white mb-5"><h3>%H</h3><span class="hours">Hours</span></div>
    <div class="col-md-3 text-center text-white mb-5"><h3>%M</h3><span class="minutes">Minutes</span></div>
    <div class="col-md-3 text-center text-white mb-5"><h3>%S</h3><span class="secound">Secound</span></div>
    </div>`));
  });

   /* ------------------------------- E N D  C O U N T  D O W N ------------------------------- */

   /* ------------------------------ S T A R T C O N T A C T ----------------------------- */

   $("textarea").keyup( function(){
     let max = 100;
     let length = $(this).val().length;
     let character = max - length;
     $(".contact .numberCharater").text(character)
   });

   /* ------------------------------- E N D C O N A C T ------------------------------- */