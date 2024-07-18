$(document).ready(function () {
    // variables
    let windowWidth = $(window).width();
    let name = '';
    let phone = '';
    let type = '개인사업자';
    let location = '';


    $(".pc .section01-button_detail").click(function () {
        window.scrollTo(0, document.getElementsByClassName('section01')[0].offsetHeight)
    });

    $(".mo .section01-button_detail").click(function () {
        window.scrollTo(0, document.getElementsByClassName('section01')[1].offsetHeight)
    });

    $(".section01-button_shortcut").click(function () {
        window.scrollTo(0, document.body.scrollHeight);
    });

    $('.section06-form-item-input_name, .section06-form-item-input_phone').on('change keyup paste', function () {
        name = $('.section06-form-item-input_name').val();
        phone = $('.section06-form-item-input_phone').val();
        if (name) {
            $(".section06-form-button_confirm").addClass('active_name');
        }
        if (phone) {
            $(".section06-form-button_confirm").addClass('active_phone');
        }
    });

    $('.section06-form-button_type').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        type = $(this).text();
        if (type) {
            $(".section06-form-button_confirm").addClass('active_type');
        }
    });

    $('.section06-form-select').click(function () {
        $(".section06-form-select-container_options").toggleClass('active');
    });

    $('.section06-form-select-option').click(function () {
        location = $(this).children('span').text();
        $(".section06-form-select-selected").text($(this).text());
        $(".section06-form-select-selected").css("color", "#222222");
        $(".section06-form-select-container_options").removeClass('active');
        $(".section06-form-button_confirm").addClass('active_location');
    });

    $(".section06-form-container_checkbox").click(function () {
        $(this).toggleClass('active');
        $(".section06-form-button_confirm").toggleClass('active_agreement');
    });


    $(window).resize(function () {
        const windowWidthNow = $(window).width();
        if ((windowWidth >= 720 && windowWidthNow < 720) || (windowWidthNow >= 720 && windowWidth < 720)) {
            window.location.href = window.location.href
        } else {
            windowWidth = windowWidthNow;
        }
    });








});