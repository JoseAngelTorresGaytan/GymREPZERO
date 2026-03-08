$ (document).ready(function(){
    /*CABECERA*/
    $(window).on("scroll", function(){
        let position = $("#up").offset();
        if ($(window).scrollTop() >= position.top) {
            $("header").removeClass("none-navigation");
        } else {
            $("header").addClass("none-navigation");
        }
    })
    /*MENÚ LATERAL*/
    $("#burguer").click(function() {
        $("#burguer").toggleClass("abierto");
          $(".menu").toggleClass("abierto");
      })
    /*SMOOTH SCROLL*/
    $("a").on("click",function() {
        if (this.hash !== "") {
            let hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 900)
        }
    })

});
