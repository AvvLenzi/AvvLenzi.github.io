window.$ = window.jQuery = require('jquery');
require("jquery-form");

$(function () {
    const $headerBtn = $('#header-btn');

    const $headerMenu = $('#header-menu');
    $headerMenu.css('display', '');

    $headerBtn.click(() => {
        $headerMenu.toggleClass('header-menu--open');
    });
});

$(function () {
    const $headerAreaBtn = $('#header-area-btn');
    const $headerFields = $('#header-fields');
    $headerFields.css('display', '');

    $headerAreaBtn.click((event) => {
        event.stopPropagation();
        event.preventDefault();

        $headerFields.toggleClass('header-fields--open');

        $(window).one('click', function () {
            $headerFields.removeClass('header-fields--open');
        })
    });
});

$(function () {
    var $form = $('#bootstrapForm');

    if ($form.length === 0) {
        return;
    }

    $form.submit(function (event) {
        event.preventDefault()
        var extraData = {}
        $form.ajaxSubmit({
            data: extraData,
            dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
            error: function () {
                alert('Messaggio Inviato. Grazie.')
            }
        });
    });
})
