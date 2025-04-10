$(document).ready(function(){
    $(".header-layer1").hover(
        function() {
            // Khi di chuột vào, chỉ hiển thị phần tử `.header-layer2` của chính nó
            $(this).find(".header-layer2").stop(true, true).slideDown(500);
        },
        function() {
            // Khi di chuột ra, chỉ ẩn phần tử `.header-layer2` của chính nó
            $(this).find(".header-layer2").stop(true, true).slideUp(500);
        }
    );
    $(".header__top-head--item").hover(
        function() {
            // Khi di chuột vào
            $(this).css({
                "background-color": "#fdb819",
                "color": "#fff"
            });
        }, 
        function() {
            // Khi di chuột ra
            $(this).css({
                "background-color": "",
                "color": "#001327"
            });
        }
    );
    $(".header__bottom-search-category").hover(
        function() {
            // Khi di chuột vào, chỉ hiển thị phần tử `.header-layer2` của chính nó
            $(this).find(".header__bottom-category-li").stop(true, true).slideDown(500);
        },
        function() {
            // Khi di chuột ra, chỉ ẩn phần tử `.header-layer2` của chính nó
            $(this).find(".header__bottom-category-li").stop(true, true).slideUp(500);
        }
    );
    $(".header__bottom-bars").hover(
        function() {
            // Khi di chuột vào, chỉ hiển thị phần tử `.header-layer2` của chính nó
            $(this).find(".header__bottom-bars-li").stop(true, true).slideDown(500);
        },
        function() {
            // Khi di chuột ra, chỉ ẩn phần tử `.header-layer2` của chính nó
            $(this).find(".header__bottom-bars-li").stop(true, true).slideUp(500);
        }
    );
    $(".header__account").hover(
        function() {
            // Khi di chuột vào, chỉ hiển thị phần tử `.header-layer2` của chính nó
            $(".header__account-btn").stop(true, true).slideDown(500);
        },
        function() {
            // Khi di chuột ra, chỉ ẩn phần tử `.header-layer2` của chính nó
            $(".header__account-btn").stop(true, true).slideUp(500);
        }
    );
    $(".header__mid .nav-item").hover(
        function() {
            $(this).find(".header__menu-li").stop(true, true).slideDown(500);
        },
        function() {
            $(this).find(".header__menu-li").stop(true, true).slideUp(500);
        }
    );
    let firstCaption = $(".carousel-item.active .carousel-caption");

    setTimeout(function () {
        firstCaption.find(".line1").css({ opacity: 1, transform: "translateY(0px)" });
    }, 600);

    setTimeout(function () {
        firstCaption.find(".line2").css({ opacity: 1, transform: "translateY(0px)" });
    }, 1000);

    setTimeout(function () {
        firstCaption.find(".line3").css({ opacity: 1, transform: "translate(0px, 0px)" });
    }, 1500);

    setTimeout(function () {
        firstCaption.find("button").css({ opacity: 1, transform: "translateY(0px)" });
    }, 2500);

    $(".carousel-control-prev").css({ opacity: 0, left: "0px"});
    $(".carousel-control-next").css({ opacity: 0, right: "0px"});
    // 2 btn trượt bên ngoài vào khi hover
    $(".carousel").hover(
        function () { 
            $(".carousel-control-prev").stop(true, true).animate({ left: "20px", opacity: 1 }, 400);
            $(".carousel-control-next").stop(true, true).animate({ right: "20px", opacity: 1 }, 400);
        },
        function () { 
            $(".carousel-control-prev").stop(true, true).animate({ left: "0px", opacity: 0 }, 400);
            $(".carousel-control-next").stop(true, true).animate({ right: "0px", opacity: 0 }, 400);
        }
    );

});
$('#carousel').on('slide.bs.carousel', function () {
    // Reset tất cả caption khi bắt đầu chuyển slide
    $(".carousel-caption .line, .carousel-caption button").css({ 
        opacity: 0, 
        transform: "translateY(50px)" 
    });

    $(".carousel-caption .line3").css({ 
        opacity: 0, 
        transform: "translate(-70px, 0px)" 
    });
});

$('#carousel').on('slid.bs.carousel', function () {
    let activeCaption = $(".carousel-item.active .carousel-caption");

    setTimeout(function () {
        activeCaption.find(".line1").css({ opacity: 1, transform: "translateY(0px)" });
    }, 500);

    setTimeout(function () {
        activeCaption.find(".line2").css({ opacity: 1, transform: "translateY(0px)" });
    }, 1000);

    setTimeout(function () {
        activeCaption.find(".line3").css({ opacity: 1, transform: "translate(0px, 0px)" });
    }, 1500);

    setTimeout(function () {
        activeCaption.find("button").css({ opacity: 1, transform: "translateY(0px)" });
    }, 2500);
});