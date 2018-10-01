odoo.define('awesome_tshirt.MyCounter', function(require) {
    var Widget = require('web.Widget');

    var MyCounter = Widget.extend({
        template: 'widget_mycounter',
        events: {
            'click .oe_decrement': '_onDecrement',
            'click .oe_increment': '_onIncrement',
        },
        init: function (parent, value) {
            this._super(parent);
            this.count = value;
        },
        _onDecrement: function () {
            this.count--;
            this.renderElement();
        },
        _onIncrement: function () {
            this.count++;
            this.renderElement();
        },
    });
    return MyCounter;
});
