$(document).ready(function () {
    // variables
    let windowWidth = $(window).width();
    let name = "";
    let phone = "";
    let type = "개인사업자";
    let location = "";

    $(".pc .section01-button_detail").click(function () {
        window.scrollTo(
            0,
            document.getElementsByClassName("section01")[0].offsetHeight
        );
    });

    $(".mo .section01-button_detail").click(function () {
        window.scrollTo(
            0,
            document.getElementsByClassName("section01")[1].offsetHeight
        );
    });

    $(".section01-button_shortcut").click(function () {
        window.scrollTo(0, document.body.scrollHeight);
    });

    $(".section06-form-item-input_name, .section06-form-item-input_phone").on(
        "change keyup paste",
        function () {
            name = $(".section06-form-item-input_name").val();
            phone = $(".section06-form-item-input_phone").val();
            $(".send-email > .email-template_name").val(
                $(".section06-form-item-input_name").val()
            );
            $(".send-email > .email-template_phone").val(
                $(".section06-form-item-input_phone").val()
            );

            if (name) {
                $(".section06-form-button_confirm").addClass("active_name");
            }
            if (phone) {
                $(".section06-form-button_confirm").addClass("active_phone");
            }
        }
    );

    $(
        ".mo .section06-form-item-input_name, .mo .section06-form-item-input_phone"
    ).on("change keyup paste", function () {
        name = $(".mo .section06-form-item-input_name").val();
        phone = $(".mo .section06-form-item-input_phone").val();
        $(".send-email > .email-template_name").val(
            $(".mo .section06-form-item-input_name").val()
        );
        $(".send-email > .email-template_phone").val(
            $(".mo .section06-form-item-input_phone").val()
        );
        if (name) {
            $(".section06-form-button_confirm").addClass("active_name");
        }
        if (phone) {
            $(".section06-form-button_confirm").addClass("active_phone");
        }
    });

    $(".section06-form-button_type").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        type = $(this).text();
        if (type) {
            $(".section06-form-button_confirm").addClass("active_type");
        }
        $(".send-email > .email-template_type").val(type);
    });

    $(".section06-form-select").click(function () {
        $(".section06-form-select-container_options").toggleClass("active");
    });

    $(".section06-form-select-option").click(function () {
        location = $(this).children("span").text();
        $(".section06-form-select-selected").text($(this).text());
        $(".section06-form-select-selected").css("color", "#222222");
        $(".section06-form-select-container_options").removeClass("active");
        $(".section06-form-button_confirm").addClass("active_location");
        $(".send-email > .email-template_location").val(location);
    });

    $(".section06-form-container_checkbox").click(function () {
        $(this).toggleClass("active");
        $(".section06-form-button_confirm").toggleClass("active_agreement");
    });

    $(".section06-form-button_confirm").click(function () {
        console.log("clicked...");
        if (
            $(this).hasClass("active_name") &&
            $(this).hasClass("active_phone") &&
            $(this).hasClass("active_type") &&
            $(this).hasClass("active_location") &&
            $(this).hasClass("active_agreement")
        ) {
            console.log("sending email...");
            emailjs
                .sendForm("prominentk01", "prominentk_template", $(".send-email")[0])
                .then(
                    (response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        alert('신청이 완료되었습니다!');
                        window.location.reload();
                    },
                    (error) => {
                        console.log("FAILED...", error);
                        alert('잠시 오류로 인해 신청이 실패하였습니다. 새로고침 후 다시 신청해주세요.');
                        window.location.reload();
                    }
                );
        } else {
            console.log("not enough...");
        }
    });

    $(window).resize(function () {
        const windowWidthNow = $(window).width();
        if (
            (windowWidth >= 720 && windowWidthNow < 720) ||
            (windowWidthNow >= 720 && windowWidth < 720)
        ) {
            window.location.reload();
        } else {
            windowWidth = windowWidthNow;
        }
    });
});
