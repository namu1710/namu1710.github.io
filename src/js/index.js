$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
    })

    $('#item-1').click(function() {
        $(this)
            .children()
            .css('color', '#E0BE65')
        $('#item-2')
            .children()
            .css('color', '#FFFFFF')
        $('#item-3')
            .children()
            .css('color', '#FFFFFF')
        $('#img-item-3').css('display', 'none')
        $('#img-item-2').css('display', 'none')
        $('#img-item-1').slideToggle()
    })
    $('#item-2').click(function() {
        $(this)
            .children()
            .css('color', '#E0BE65')
        $('#item-1')
            .children()
            .css('color', '#FFFFFF')
        $('#item-3')
            .children()
            .css('color', '#FFFFFF')
        $('#img-item-1').css('display', 'none')
        $('#img-item-3').css('display', 'none')
        $('#img-item-2').slideToggle()
    })
    $('#item-3').click(function() {
        $(this)
            .children()
            .css('color', '#E0BE65')
        $('#item-1')
            .children()
            .css('color', '#FFFFFF')
        $('#item-2')
            .children()
            .css('color', '#FFFFFF')
        $('#img-item-1').css('display', 'none')
        $('#img-item-2').css('display', 'none')
        $('#img-item-3').slideToggle()
    })
    $('.burger-menu').click(function() {
        $(this).toggleClass('active-menu')
        $('.mobile-list').slideToggle()
    })
})
