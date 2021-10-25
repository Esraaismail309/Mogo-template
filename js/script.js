    $('.count').counterUp({
        'time': 2000,
        'delay': 10
    });

    let lang = document.getElementById("lang")
    let arabic = document.getElementById("arabic")

    function changeLang() {
        lang.setAttribute("dir", "rtl")
        arabic.innerHTML("Eng")
    }
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > $(window).height()) {
                $(".navbar").css({ "background-color": "#a3988f" });
            } else {
                $(".navbar").css({ "background-color": "transparent" });
            }

        })
    })