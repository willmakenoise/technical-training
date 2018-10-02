odoo.define('awesome_tshirt.ImagePreview', function (require) {
"use strict";

var FieldChar = require('web.basic_fields').FieldChar;
// var AbstractField = require('web.AbstractField');
var core = require('web.core');
var field_registry = require('web.field_registry');
// var _t = core._t;

var ImagePreview = FieldChar.extend({
    // template: 'WidgetWebsiteButton',

    _renderReadonly: function () {
        this._super.apply(this, arguments);

        if (this.value) {
            this.$el.html($('<img>', {src: this.value}));
        }
    },
});

field_registry.add('image_preview', ImagePreview);

});
