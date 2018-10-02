odoo.define('awesome_tshirt.home_menu_message', function(require) {
    var HomeMenu = require('web_enterprise.HomeMenu');
    var qweb = require('core.qweb');

    HomeMenu.include({
        render: function () {
            this._super();
            var message = $(qweb.render('awesome_tshirt.home_menu_message', {
            })).insertBefore(self.$menuSearch);
        },
    });
});
