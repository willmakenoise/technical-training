odoo.define('awesome_tshirt.ImagePreview', function (require) {
"use strict";

var FieldChar = require('web.basic_fields').FieldChar;
var core = require('web.core');
var field_registry = require('web.field_registry');
var _t = core._t;

var ImagePreview = FieldChar.extend({
    _renderReadonly: function () {
        this._super.apply(this, arguments);

        console.log('isSet: ' + this.isSet());

        if (this.value) {
            this.$el.html($('<img>', {src: this.value}));
        }
        else {
            this.$el.text(_("MISSING TSHIRT DESIGN"));
            this.$el.addClass('alert-danger');
        }
    },
    isSet: function () {
        return true;
    }
});

field_registry.add('image_preview', ImagePreview);

});
