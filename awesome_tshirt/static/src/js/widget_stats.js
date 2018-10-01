odoo.define('awesome_tshirt.Stats', function(require) {
    var Widget = require('web.Widget');

    var Stats = Widget.extend({
        template: 'WidgetStats',
        init: function (parent) {
            this._super(parent);
        },

        willStart: function () {
            data = this.fetchDashboardData();
            console.log(data);
            return data;
        },

        fetchDashboardData: function () {
            return $.when(this._rpc({
                route: '/awesome_tshirt/statistics',
                params: {},
            }));
        },

    });
    return Stats;
});
