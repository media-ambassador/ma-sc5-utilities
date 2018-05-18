"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaSc5MainFooterComponent = /** @class */ (function () {
    function MaSc5MainFooterComponent() {
    }
    MaSc5MainFooterComponent.prototype.ngOnInit = function () {
    };
    MaSc5MainFooterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-sc5-main-footer',
                    template: "\n    <div>\n      <mat-icon class=\"icon-logo\" svgIcon=\"sc5-logo-text\"></mat-icon>\n      <span class=\"mat-caption\" translate=\"ma.sc5.main.footer.copyright\"></span>\n      <a class=\"mat-caption\" target=\"_blank\" href=\"https://mediaambassador.com\" translate=\"ma.sc5.main.footer.mediaAmbassador\"></a>\n    </div>\n\n    <div>\n      <span class=\"mat-caption\" translate=\"ma.sc5.main.footer.technicalSupport\"></span>\n      <a class=\"mat-caption\" href=\"tel:{{ 'ma.sc5.main.footer.supportTel' | translate }}\" translate=\"ma.sc5.main.footer.supportTel\"></a>\n      <a class=\"mat-caption\" href=\"mailto:{{ 'ma.sc5.main.footer.supportEmail' | translate }}\" translate=\"ma.sc5.main.footer.supportEmail\"></a>\n    </div>\n  ",
                    styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host {\n      height: 100%;\n      display: flex;\n      align-items: center;\n      padding: 0 20px;\n      background: white; }\n      :host span {\n        color: #757575; }\n      :host a {\n        color: rgba(0, 0, 0, 0.87);\n        text-decoration: none; }\n      :host > div {\n        display: flex;\n        flex: 1; }\n        :host > div:nth-child(1) {\n          align-items: center; }\n          :host > div:nth-child(1) .icon-logo {\n            margin-right: 10px; }\n          :host > div:nth-child(1) a {\n            margin-left: 10px; }\n        :host > div:nth-child(2) {\n          justify-content: flex-end; }\n          :host > div:nth-child(2) a {\n            margin-left: 10px; }\n            :host > div:nth-child(2) a:nth-child(2)::after {\n              margin-left: 10px;\n              content: \"/\";\n              color: #757575; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaSc5MainFooterComponent.ctorParameters = function () { return []; };
    return MaSc5MainFooterComponent;
}());
exports.MaSc5MainFooterComponent = MaSc5MainFooterComponent;
//# sourceMappingURL=main-footer.component.js.map