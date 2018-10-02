odoo.define('awesome_tshirt.HomeMenu', function(require) {
    "use strict";
    var HomeMenu = require('web_enterprise.HomeMenu');
    var session = require('web.session');
    HomeMenu.include({
        /**
         * Overrides to load the custom message to display.
         *
         * @override
         */
        willStart: function() {
            var self = this;
            var superDef = this._super.apply(this, arguments);
            self.message = session.message;
            return $.when(superDef);
        },
        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------
        /**
         * @override
         * @private
         */
        _render: function() {
            this._super.apply(this, arguments);
            var $message = $('<div>', {
                class: 'p-2 alert-warning o_custom_message',
            }).text(this.message);
            $('<i class="fa fa-eye"></i><i class="fa fa-eye"></i>').appendTo($message);
            this.$('.o_custom_message').remove();
            this.$el.prepend($message);
        },
    });
});
