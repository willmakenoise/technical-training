odoo.define('awesome_tshirt.order_form', function (require) {

    var viewRegistry = require('web.view_registry');

    var OrderFormRenderer = web.FormRenderer.extend({

    });

    var OrderFormModel = web. FormModel.extend({

    });

    var OrderFormController = web.FormController.extend({

    });

    var OrderFormView = web.FormView.extend({
        config: _.extend({}, FormView.prototype.config, {
            Model: OrderFormModel,
            Renderer: OrderFormRenderer,
            Controller: OrderFormController,
        }),
    });

    viewRegistry.add('order_form', OrderFormView);

});
