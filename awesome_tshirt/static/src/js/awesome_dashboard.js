odoo.define('awesome_tshirt.dashboard', function(require) {
    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');
    var MyCounter = require('awesome_tshirt.MyCounter');
    var MyActions = require('awesome_tshirt.MyActions');

    var Dashboard = AbstractAction.extend({
        start: function () {
            // Counter Widget
            // var myCounter = new MyCounter(this, 0);
            // var counterDef = myCounter.appendTo(this.$el);
            // var superDef = this._super.apply(this, arguments);
            // return $.when(counterDef, superDef);

            // Time JS library; moment

            // Actions Widget
            var myActions = new MyActions(this);
            var actionsDef = myActions.appendTo(this.$el);
            var superDef =this._super.apply(this, arguments);
            return $.when(actionsDef, superDef);
        },
    });

    core.action_registry.add('awesome_tshirt.dashboard', Dashboard);

    return Dashboard;
});
