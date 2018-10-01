odoo.define('awesome_tshirt.dashboard', function(require) {
    // var Widget = require('web.Widget');

    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');

    var Dashboard = AbstractAction.extend({
        start: function () {
            this.$el.html('Hello world');
            return this._super.apply(this, arguments);
        },
    });

    core.action_registry.add('awesome_tshirt.dashboard', Dashboard);

    return Dashboard;
});
