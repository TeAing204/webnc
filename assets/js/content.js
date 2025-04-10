$(document).ready(function(){
    $(".content__wrapper-item").hover(
        function() {
            $(this).find(".content__wrapper-number").stop(true, true).css("background-color", "#fdb819");
            $(this).find(".content__wrapper-item-name").stop(true, true).css("color", "#fdb819");
        },
        function() {
            $(this).find(".content__wrapper-number").stop(true, true).css("background-color", "#001327");
            $(this).find(".content__wrapper-item-name").stop(true, true).css("color", "#001327");
        }
    );
    $(".swiper-slide, .content-popular__item").hover(
        function(){
            $(this).find(".product-view").stop(true, true).animate({
                right: "14px",
                opacity: "1",
            }, 500)
        },
        function(){
            $(this).find(".product-view").stop(true, true).animate({
                right: "-20px",
                opacity: "0",
            }, 500)
        }
    )

// phần slide show trong chi tiết sản phẩm
    const $zoomContainer = $('.zoom-container');
    const $zoomImage = $zoomContainer.find('img');
    let currentZoom = 1;
    const maxZoom = 2;
    const minZoom = 1;

    $zoomContainer.on('wheel', function (e) {
      e.preventDefault();

      let delta = e.originalEvent.deltaY;

      if (delta < 0) {
        // Lăn lên -> zoom in
        currentZoom += 0.1;
      } else {
        // Lăn xuống -> zoom out
        currentZoom -= 0.1;
      }

      currentZoom = Math.min(Math.max(currentZoom, minZoom), maxZoom);

      $zoomImage.css('transform', `scale(${currentZoom})`);
    });
})
