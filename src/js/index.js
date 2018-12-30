
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
})

