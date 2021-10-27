    $('.count').counterUp({
        'time': 2000,
        'delay': 10
    });

    let lang = document.getElementById("lang")
    let arabic = document.getElementById("arabic")
    const changeLang = () => {
        if (arabic.innerHTML == "AR") {
            lang.setAttribute("dir", "rtl")
            arabic.innerHTML = "EN"
            $('link[href="./css/bootstrap.min.css"]').attr("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css")
        } else
        if (arabic.innerHTML == "EN") {
            lang.setAttribute("dir", "ltr")
            arabic.innerHTML = "AR"
            $("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css").attr('link[href="./css/bootstrap.min.css"]')
        }

    }
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()) {
            $(".navbar").css({ "background-color": "#a3988f" });
        } else {
            $(".navbar").css({ "background-color": "transparent" });
        }

    });
    // $('a').click(function(e) {
    //     $('html, body').animate({
    //         scrollTop: $('#theBird').offset().top // Use element id to get element's location.
    //     }, 4000);
    // });