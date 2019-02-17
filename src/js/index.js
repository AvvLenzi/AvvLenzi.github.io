require("jquery-form");
require('./jquery.ihavecookies');

$(function() {
    const options = {
        expires: 365,
        onAccept: function() {
            console.log("Accepted Cookies", $.fn.ihavecookies.cookie())
            console.log('Preferenze Sito', $.fn.ihavecookies.preference('preferences'));
            console.log('Analytics', $.fn.ihavecookies.preference('analytics'));
            console.log('Marketing', $.fn.ihavecookies.preference('marketing'));
        },
        title: 'Cookie e Privacy',
        message: 'Per una migliore esperienza di navigazione questo sito fa uso dei Cookie. Se vuoi approfondire consulta la nostra',
        link: '/privacy.html',
        moreInfoLabel: 'Privacy Policy',
        acceptBtnLabel: 'Accetta Cookies',
        advancedBtnLabel: 'Personalizza',
        cookieTypesTitle: 'Scegli i Cookie',
        fixedCookieTypeLabel: 'Necessari',
        fixedCookieTypeDesc: 'Questi cookie sono fondamentali per il corretto funzionamento del sito web',
        cookieTypes: [
            {
                type: 'Preferenze Sito',
                value: 'preferences',
                description: 'These are cookies that are related to your site preferences, e.g. remembering your username, site colours, etc.'
            },
            {
                type: 'Analytics',
                value: 'analytics',
                description: 'Cookies related to site visits, browser types, etc.'
            },
            {
                type: 'Marketing',
                value: 'marketing',
                description: 'Cookies related to marketing, e.g. newsletters, social media, etc'
            }
        ]
    };
    $('body').ihavecookies(options);

    $('#footer-cookie-link').click((event) => {
        event.stopPropagation();
        event.preventDefault();
        $('body').ihavecookies({...options, delay: 1}, 'reinit');
    })
})


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
                window.location = '/';
            }
        });
    });
})

$(function () {
    function hideAll () {
        $('.tutela-persona-content').hide();
    }
    $('a[data-show]').each((index, aEl) => {
        const $aEl = $(aEl);
        $aEl.click(event => {
            event.stopPropagation();
            event.preventDefault();

            hideAll();
            $('#' + $aEl.data('show')).show();
        });
    });
})

$(function () {
    // fix ie11 layout bug:
    const isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
    if (!isIE11) {
        return;
    }

    const $hero = $('.hero');
    $hero.css('align-items', 'flex-start');
    setTimeout(function () {
        $hero.css('align-items', 'center');
    }, 50);
});
