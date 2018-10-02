odoo.define('awesome_tshirt.home_menu_message', function(require) {
    var HomeMenu = require('web_enterprise.HomeMenu');

    HomeMenu.include({
        render: function () {
            this._super();
            var message = $(QWeb.render('awesome_tshirt.home_menu_message', {
            })).insertBefore(self.$menuSearch);
        },
    });
});
