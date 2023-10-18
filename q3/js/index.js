var mySwiper = new Swiper ('.swiper', {
	autoplay: {
		delay: 1500,
		stopOnLastSlide: false,
		disableOnInteraction: true,
		},
	loop: true, // 循环模式选项
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
	},
})
