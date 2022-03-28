"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
// forked from https://github.com/andria-dev/mui-phone-input/blob/master/src/PhoneInput.js
function PhoneInput(_a) {
    var props = __rest(_a, []);
    var _b = (0, react_2.useState)({
        value: "",
    }), state = _b[0], setState = _b[1];
    return (react_1.default.createElement(material_1.TextField, __assign({ inputProps: { pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" }, type: "tel" }, props, { value: state.value, onChange: function (event) {
            var el = event.target;
            var selectionStart = el.selectionStart;
            var newInput = event.target.value.replace(/\D/g, "");
            var oldValueArr = state.value.split("-");
            var newValueArr = [
                newInput.slice(0, 3),
                newInput.slice(3, 6),
                newInput.slice(6, 10),
            ].filter(function (x) { return x; });
            var newValue = newValueArr.join("-");
            if (props.onChange) {
                props.onChange(newValue);
            }
            setState({ value: newValue });
            if (selectionStart === null) {
                selectionStart = 0;
            }
            selectionStart += Math.max(newValueArr.length - oldValueArr.length, 0);
            el.selectionStart = el.selectionEnd = selectionStart;
        } })));
}
exports.default = PhoneInput;
