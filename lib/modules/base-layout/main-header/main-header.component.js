"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sc5_utils_1 = require("../../../services/sc5-utils");
var MaSc5MainHeaderComponent = /** @class */ (function () {
    function MaSc5MainHeaderComponent(sc5UtilsService) {
        this.sc5UtilsService = sc5UtilsService;
    }
    MaSc5MainHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.forEach(function (service) {
            _this.sc5UtilsService.registerIcon("icon-" + service, "./assets/images/icon-" + service + ".svg");
        });
    };
    MaSc5MainHeaderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-sc5-main-header',
                    template: "\n    <div>\n      <div class=\"logo\">\n        <mat-icon class=\"icon-logo\" svgIcon=\"sc5-logo\"></mat-icon>\n      </div>\n\n      <div class=\"channels\">\n        <span class=\"mat-caption\" translate=\"ma.sc5.main.header.channels\"></span>\n\n        <span [matMenuTriggerFor]=\"channelsMenu\" class=\"dropdown-menu mat-subheading-2\">\n          {{ defaultChannel }}\n          <mat-icon>keyboard_arrow_down</mat-icon>\n        </span>\n\n        <mat-menu #channelsMenu=\"matMenu\">\n          <button mat-menu-item *ngFor=\"let channel of channels\">\n            {{ channel }}\n          </button>\n        </mat-menu>\n      </div>\n\n      <div class=\"app-title\">\n        <span class=\"mat-headline\">\n          {{ pageTitle | translate }}\n        </span>\n      </div>\n\n      <div class=\"helper\">\n        <ul>\n          <li>\n            <a md-raised-button color=\"accent\" [mdePopoverTriggerFor]=\"mainMenuPopover\" [mdePopoverEnterDelay]=\"300\" mdePopoverTriggerOn=\"click\">\n              <mat-icon>view_module</mat-icon>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n                <mat-icon>notifications_none</mat-icon>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n                <mat-icon>help_circle</mat-icon>\n            </a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"user\">\n        <span [matMenuTriggerFor]=\"userMenu\" class=\"dropdown-menu mat-body-1\">\n            {{ userId }}\n          <mat-icon>keyboard_arrow_down</mat-icon>\n        </span>\n\n        <mat-menu #userMenu=\"matMenu\">\n          <button mat-menu-item >\n            {{ 'ma.sc5.main.header.menu.edit' | translate}}\n          </button>\n          <button mat-menu-item (click)=\"sc5UtilsService.logoutUser()\">\n            {{ 'ma.sc5.main.header.menu.logout' | translate }}\n          </button>\n        </mat-menu>\n      </div>\n    </div>\n\n    <mde-popover #mainMenuPopover=\"mdePopover\" [mdePopoverOverlapTrigger]=\"false\">\n      <div class=\"popover-content services-popover-content\">\n        <ul>\n          <li *ngFor=\"let service of services\">\n            <a href=\"{{ sc5UtilsService.getModuleUrl(service) }}\">\n              <mat-icon class=\"icon-logo\" svgIcon=\"{{ 'icon-' + service }}\"></mat-icon>\n              <span>{{ 'ma.sc5.service.' + service | translate }}</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </mde-popover>\n  ",
                    styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host > div {\n      display: grid;\n      grid-gap: 0;\n      grid-template-columns: 65px auto 1fr auto auto;\n      grid-template-rows: 65px;\n      grid-template-areas: \"logo channels title helpers user\"; }\n      :host > div div {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding: 0 20px; }\n        :host > div div:last-child {\n          padding-left: 0; }\n        :host > div div .dropdown-menu {\n          display: flex;\n          align-items: center;\n          margin: 0;\n          cursor: pointer; }\n          :host > div div .dropdown-menu .mat-icon {\n            margin-left: 3px;\n            width: 15px;\n            height: 15px;\n            font-size: 15px;\n            line-height: 15px; }\n        :host > div div.logo {\n          grid-area: logo;\n          border-right: 1px solid #eeeeee; }\n        :host > div div.channels {\n          grid-area: channels;\n          border-right: 1px solid #eeeeee; }\n          :host > div div.channels button {\n            margin-bottom: 0; }\n        :host > div div.app-title {\n          grid-area: title; }\n          :host > div div.app-title span {\n            margin: 0; }\n        :host > div div.helper {\n          grid-area: helpers; }\n          :host > div div.helper ul {\n            display: flex;\n            align-items: center;\n            margin: 0;\n            padding: 0;\n            list-style: none; }\n            :host > div div.helper ul li {\n              margin-left: 10px; }\n              :host > div div.helper ul li a {\n                display: block;\n                padding: 5px;\n                cursor: pointer;\n                color: #757575; }\n                :host > div div.helper ul li a:hover {\n                  color: rgba(0, 0, 0, 0.87); }\n        :host > div div.user {\n          grid-area: user; }\n          :host > div div.user span {\n            color: #757575; }\n            :host > div div.user span:hover {\n              color: rgba(0, 0, 0, 0.87); }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaSc5MainHeaderComponent.ctorParameters = function () { return [
        { type: sc5_utils_1.MaSc5UtilsService, },
    ]; };
    MaSc5MainHeaderComponent.propDecorators = {
        "channels": [{ type: core_1.Input },],
        "defaultChannel": [{ type: core_1.Input },],
        "services": [{ type: core_1.Input },],
        "userId": [{ type: core_1.Input },],
        "pageTitle": [{ type: core_1.Input },],
    };
    return MaSc5MainHeaderComponent;
}());
exports.MaSc5MainHeaderComponent = MaSc5MainHeaderComponent;
//# sourceMappingURL=main-header.component.js.map