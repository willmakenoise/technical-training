odoo.define('awesome_tshirt.customer_form', function (require) {

    var viewRegistry = require('web.view_registry');

    var CustomerFormRenderer = web.FormRenderer.extend({

    });

    var CustomerFormModel = web. FormModel.extend({

    });

    var CustomerFormController = web.FormController.extend({

    });

    var CustomerFormView = web.FormView.extend({
        config: _.extend({}, FormView.prototype.config, {
            Model: CustomerFormModel,
            Renderer: CustomerFormRenderer,
            Controller: CustomerFormController,
        }),
    });

    viewRegistry.add('customer_form', CustomerFormView);

});
