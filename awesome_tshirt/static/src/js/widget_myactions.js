odoo.define('awesome_tshirt.MyActions', function(require) {
    var Widget = require('web.Widget');
    var ServicesMixin = require('web.ServicesMixin');

    var MyActions = Widget.extend({
        template: 'widget_MyActions',
        events: {
            'click .oe_customers': '_onCustomers',
        },
        init: function (parent) {
            this._super(parent);
        },
        _onCustomers: function () {
            var action_customers = ServicesMixin.do_action(
                'res_partner.action_partner_customer_form',
                {'domain': [
                    ('state', '=', 'new'),
                ]}
            );
        },
    });
    return MyActions;
});
