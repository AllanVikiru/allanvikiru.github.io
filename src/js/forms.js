(function ($) {
    "use strict";
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');
    var button = $(".contact-form-btn");
    var form = document.querySelector(".pageclip-form");

    //Focus Input Fields
    $(".input").each(function () {
        $(this).on("blur", function () {
            if ($(this).val().trim() != "") {
                $(this).addClass("has-val");
            } else {
                $(this).removeClass("has-val");
            }
        });
    });

    $(".validate-form .input").each(function () {
        $(this).focus(function () {
            hideValidate(this);
            button.removeClass("pageclip-form__submit--loading");
            button.removeAttr("disabled");
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass("alert-validate");
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass("alert-validate");
    }

    // Validate Form and Callback on Submit

    Pageclip.form(form, {
        onSubmit: function (event) {
            var check = true;

            if ($(name).val().trim() == "") {
                showValidate(name);
                check = false;
            }

            if (
                $(email)
                    .val()
                    .trim()
                    .match(
                        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
                    ) == null
            ) {
                showValidate(email);
                check = false;
            }

            if ($(message).val().trim() == "") {
                showValidate(message);
                check = false;
            }
            return check;
        },
        onResponse: function (error, response) {},
        successTemplate:
            "<span class='success'>Your message has been sent.<br/><br/>Thank you!</span>",
    });

    $(".validate-form").on("submit", function () {});
})(jQuery);
