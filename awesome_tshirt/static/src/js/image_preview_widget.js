odoo.define('awesome_tshirt.ImagePreview', function (require) {
"use strict";

var FieldChar = require('web.basic_fields').FieldChar;
// var AbstractField = require('web.AbstractField');
var core = require('web.core');
var field_registry = require('web.field_registry');
var _t = core._t;

var ImagePreview = FieldChar.extend({
    _renderReadonly: function () {
        this._super.apply(this, arguments);

        if (this.isSet()) {
            this.$el.html($('<img>', {src: this.value}));
        }
        else {
            this.$('.o_value').html(_t('Missing T-Shirt Design')).toggleClass('text-danger');
        }

    },

    // isSet: function () {
    //
    // }

});

field_registry.add('image_preview', ImagePreview);

});
