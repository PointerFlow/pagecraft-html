
// pf-slideshow
var pf_slideshow = new Swiper(".pf-slideshow", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
});

// pf-category-slider
var pf_category_slider = new Swiper(".pf-category-slider", {

    slidesPerView: 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

//pf-collection-slider
var pf_collection = new Swiper(".pf-collection", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

//testimonial
var swiper = new Swiper(".pf-testimonial-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//pf-icon-with-text-slider
var icon_with_text_slider = new Swiper(".icon_with_text_slider", {
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

//brand-slider
var swiper = new Swiper(".brand-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});


//pf-product-slider
var swiper = new Swiper(".product-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,
});


//client testimonial
var swiper = new Swiper(".pf-client-testimonial", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".client-swiper-button-next",
        prevEl: ".client-swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


//pf-brand-2-slider
var swiper = new Swiper(".pf-brand-2-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

//pf-icon-with-text-slider
var icon_with_text_slider = new Swiper(".icon_with_text_slider-2", {
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


//image-blog-slider
var swiper = new Swiper(".image-blog-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".client-swiper-button-next",
        prevEl: ".client-swiper-button-prev",
    },
    breakpoints: {

        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});

//image-blog-slider
var swiper = new Swiper(".category-shop-slider", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".category-shop-swiper-button-next",
        prevEl: ".category-shop-swiper-button-prev",
    },
    spaceBetween: 0,
    breakpoints: {

        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});