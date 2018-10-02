odoo.define('awesome_tshirt.image_preview', function (require) {
"use strict";

var FieldChar = require('web.basic_fields').FieldChar;
// var AbstractField = require('web.AbstractField');
var core = require('web.core');
var field_registry = require('web.field_registry');
// var _t = core._t;

var FieldImagePreview = FieldChar.extend({
    // template: 'WidgetWebsiteButton',

    _renderReadonly: function () {
        this._super.apply(this, arguments);

        var value = this.$('.o_value');
        console.log(value);
    },
});

field_registry.add('image-preview', FieldImagePreview);

});
