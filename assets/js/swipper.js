var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 7000, // 3 giây mỗi lần trượt
      disableOnInteraction: false, // Vẫn tiếp tục tự động lướt sau khi người dùng tương tác
  },
  speed: 1000,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
});

// slide show phần chi tiết sản phẩm
const thumbSwiper = new Swiper('.swiper-thumb', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const mainSwiper = new Swiper('.main-swiper', {
  spaceBetween: 10,
  loop: true,
  navigation: true,
  thumbs: {
    swiper: thumbSwiper,
  },
});

$('.products-detail__prev').click(function () {
  mainSwiper.slidePrev();
});

$('.products-detail__next').click(function () {
  mainSwiper.slideNext();
});

// Phần chọn lọc sản phẩm theo giá min max 
const slider = document.getElementById('price-slider');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');

    noUiSlider.create(slider, {
      start: [25, 820],
      connect: true,
      range: {
        'min': 0,
        'max': 1000
      },
      tooltips: [true, true], // Optional: show tooltips while dragging
      format: {
        to: function (value) {
          return Math.round(value);
        },
        from: function (value) {
          return Number(value);
        }
      }
    });

    slider.noUiSlider.on('update', function (values, handle) {
      if (handle === 0) {
        minPrice.textContent = values[0];
      } else {
        maxPrice.textContent = values[1];
      }
    });