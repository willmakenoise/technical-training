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
            self.do_action({
                res_model: 'res.partner',
                name: _t('Show Partners'),
                views: [[false, 'list'], [false, 'form']],
                domain: [['state', '=', 'new']],
                type: 'ir.actions.act_window',
                context: {
                    
                }
            });
        },
        do_action: function (action, options) {
        var def = $.Deferred();

        this.trigger_up('do_action', {
            action: action,
            options: options,
            on_success: function (result) { def.resolve(result); },
            on_fail: function (result) { def.reject(result); },
        });
        return def;
    },
    });
    return MyActions;
});
