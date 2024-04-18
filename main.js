// $(function () {
//   var $rateYo = $('.rateYo').rateYo()

//   $('#getRating').click(function () {
//     /* get rating */
//     var rating = $rateYo.rateYo('rating')

//     window.alert('Its ' + rating + ' Yo!')
//     console.log(rating)
//   })

//   $('#setRating').click(function () {
//     /* set rating */
//     var rating = getRandomRating()
//     $rateYo.rateYo('rating', rating)
//   })
// })

// $(function () {
//   $('.rateYo').rateYo({
//     rating: 3.5,
//     ratedFill: '#ff3f3a',
//     halfStar: true,

//     onChange: function (rating, rateYoInstance) {
//       $(this).next().text(rating)
//     },
//   })
// })

// // Getter
// var onChange = $('#rateYo').rateYo('option', 'onChange') //returns the function

// // Setter
// $('#rateYo').rateYo('option', 'onChange', function () {
//   console.log('this is a new function')
// }) //returns a jQuery Element

$(function ratio() {
  $('.rateYo').rateYo({
    rating: 3.5,
    ratedFill: '#ff3f3a',
    halfStar: true,
  })
})
// плагин фильтрации
$(function () {
  var mixer = mixitup('.directions__list')
})

// код для удаления и добавления класса
// $('.directions__filter__item').on('click', function () {
//   $('.directions__filter__item').removeClass(
//     'directions__filter-btn--active'
//   ) /*удаляем класс*/
//   $(this).addClass('directions__filter-btn--active') /*добавляет класс*/
// })
// плагин слайдер
// $('slader__team').slick({
//   arrows: false /*наличие стрелок*/,
//   infinite: true /*прокрутка*/,
//   slidesToShow: 3 /*сколько слайдов показывается*/,
//   // slidesToScroll: 4,
//   draggable: false /*отмена прокрутки прзажатии мышки*/,
//   appendArrows: $(element) /*Измените место прикрепления стрелок навигации*/,
// })

$('.slader__team').slick({
  infinite: true,
  slidesToShow: 3,
  draggable: false,
  arrows: false,
  waitForAnimate: true,
})
$('.team__slick-next').on('click', function (e) {
  // e.preventDefault()
  $('.slader__team').slick('slickNext')
})
$('.team__slick-prev').on('click', function (e) {
  // e.preventDefault()
  $('.slader__team').slick('slickPrev')
})
$('.testimonials__slader').slick({
  dots: true,
  infinite: true,
  arrows: false,
  appendDots: $('.testimonials__dots'),
})
$('.testimonials__slick-next').on('click', function (e) {
  // e.preventDefault()
  $('.testimonials__slader').slick('slickNext')
})
$('.testimonials__slick-prev').on('click', function (e) {
  // e.preventDefault()
  $('.testimonials__slader').slick('slickPrev')
})
/* Accordeon/////////*/

/*постепенное открытие вкладок без закрытия предыдущих*/
// $('.accord__content-btn').on('click', function (e) {
//   e.preventDefault()
//   $(this).toggleClass('accord__content-btn--active')
//   $(this).children('.accord__content-text').slideToggle()
// })
/*
$(this).toggleClass('accord__content-btn--active') обращение к этому классу и ДОБАВЛЕНИЕ (toggle) класса
$(this).children('.accord__content-text').slideToggle() обращенеи с ребенка с классом и сворачивание
  */

/* открытие вкладок с закрытием  предыдущих вкладок*/
$('.accord__content-btn').on('click', function (e) {
  e.preventDefault()
  if ($(this).hasClass('accord__content-btn--active')) {
    $(this).removeClass('accord__content-btn--active')
    $(this).children('.accord__content-text').slideDown()
  } else {
    $(this).addClass('accord__content-btn--active')
    $(this).children('.accord__content-text').slideUp()
  }
})
/* реализация плавного перехода по якорю*/
$('#menu').on('click', 'a', function (event) {
  //отменяем стандартную обработку нажатия по ссылке

  event.preventDefault()

  //забираем идентификатор бока с атрибута href

  var id = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь

    top = $(id).offset().top - 100

  //анимируем переход на расстояние - top за 1500 мс

  $('body,html').animate({ scrollTop: top }, 1500)
})
