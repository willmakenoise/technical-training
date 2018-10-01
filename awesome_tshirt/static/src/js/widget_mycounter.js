odoo.define('awesome_tshirt.MyCounter', function(require) {
    var Widget = require('web.Widget');

    var MyCounter = Widget.extend({
        template: 'widget_mycounter',
        events: {
            'click button.plus': '_onClick',
        },
        init: function (parent, value) {
            this._super(parent);
            this.count = value;
        },
        _onClick: function (e) {
            this.count++;
            this.$('.count').text(this.count);
        }
    });

    return MyCounter;


});
