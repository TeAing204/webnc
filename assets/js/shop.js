$(document).ready(function(){
    // Phần sortby
    $(".content__title-sortby").click(function(){
        $(this).find(".content__layer2").slideToggle();
    })


    // Phần chọn số lượng sản phẩm để thêm vào giỏ hàng
    $('.minus').click(function () {
        let quantity = parseInt($('.quantity-input').val());
        if (quantity > 1) {
            $('.quantity-input').val(quantity - 1);
        }
    });

    $('.plus').click(function () {
        let quantity = parseInt($('.quantity-input').val());
        $('.quantity-input').val(quantity + 1);
    });
    // và Phần chọn số lượng sản phầm ở giỏ hàng cart.html
    $('.decrease').click(function () {
        let input = $(this).closest('tr').find('.quantity-prs');
        let quantity = parseInt(input.val());
        if (quantity > 1) {
            input.val(quantity - 1);
        }
    });
    
    $('.crease').click(function () {
        let input = $(this).closest('tr').find('.quantity-prs');
        let quantity = parseInt(input.val());
        input.val(quantity + 1);
    });



    // phần active mô tả phần chi tiết sản phẩm
    $('.products__desc-redirect a').click(function (e) {
        e.preventDefault(); // Ngăn chuyển trang khi click vào <a>

        // Xoá class active khỏi tất cả link, thêm vào link đang click
        $('.products__desc-redirect a').removeClass('active');
        $(this).addClass('active');

        // Ẩn tất cả phần nội dung
        $('#tab-desc, #tab-more, #tab-review').addClass('d-none');

        // Hiện phần tương ứng với link được click
        const target = $(this).data('target');
        $(target).removeClass('d-none');
    });

    //phần chọn ngôi sao đánh giá, phản hồi chi tiết sản phẩm
    const stars = $('.products__desc-rating i');
        stars.hover(
            function () {
                const index = $(this).index();
                stars.removeClass('hovered');
                stars.each(function (i) {
                    if (i < index) {
                        $(this).addClass('hovered');
                    }
                });
            },
            function () {
                stars.removeClass('hovered');
            }
    );



    // ẩn hiện grid và detail danh sách sản phẩm
    $(".show-prs-detail").click(function(){
        $(".products__show-grid").hide();
        $(".products__show-detail").show();
        $(".show-prs-grid").css({"color" : "#999999"})
        $(".show-prs-detail").css({"color" : "#fdb819"})
    })
    $(".show-prs-grid").click(function(){
        $(".products__show-detail").hide();
        $(".products__show-grid").show();
        $(".show-prs-detail").css({"color" : "#999999"})
        $(".show-prs-grid").css({"color" : "#fdb819"})
    })
})