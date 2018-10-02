odoo.define('awesome_tshirt.QuickOrderNavigation', function(require) {
    var SystrayMenu = require('web.SystrayMenu');
    var Widget = require('web.Widget');

    var QuickOrderNavigation = Widget.extend({
        name: 'quick_order_navigation',
        template: 'awesome_tshirt.systray.order',
        events: {
            'click .o_quick_order_action': '_onQuickOrderClick',
        },

        _onQuickOrderClick: function () {
            console.log('click');
        },
    });

    SystrayMenu.Items.push(QuickOrderNavigation);
});
