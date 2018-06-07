"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaSc5DetailsPanelComponent = /** @class */ (function () {
    function MaSc5DetailsPanelComponent() {
        this.panelDisplay = new core_1.EventEmitter();
        this.isOpen = false;
    }
    MaSc5DetailsPanelComponent.prototype.onClick = function (event) {
        if (event.target.classList.contains('open')) {
            this.close();
        }
    };
    MaSc5DetailsPanelComponent.prototype.ngOnInit = function () {
    };
    MaSc5DetailsPanelComponent.prototype.open = function () {
        this.isOpen = true;
        this.panelDisplay.emit(true);
    };
    MaSc5DetailsPanelComponent.prototype.close = function () {
        this.isOpen = false;
        this.panelDisplay.emit(false);
    };
    MaSc5DetailsPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ma-sc5-details-panel',
                    template: "\n    <section class=\"panel-wrap\" *ngIf=\"isOpen\">\n      <header>\n        <span class=\"mat-title header-title\">\n            {{ headerTitle | translate }}\n        </span>\n\n        <button mat-button class=\"close-button\" (click)=\"close()\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </header>\n\n      <section class=\"panel-content\">\n        <perfect-scrollbar>\n          <ng-content></ng-content>\n        </perfect-scrollbar>\n      </section>\n    </section>\n  ",
                    styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host {\n      display: none;\n      position: fixed;\n      justify-content: flex-end;\n      top: 115px;\n      left: 0;\n      width: 100%;\n      height: calc(calc( 100vh - ( 115px + 50px + 40px )) + 40px);\n      z-index: 5;\n      background: rgba(0, 0, 0, 0.5); }\n      :host.open {\n        display: flex; }\n      :host .panel-wrap {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        min-width: 40%;\n        max-width: 700px;\n        background: #fafafa;\n        box-shadow: inset 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n        :host .panel-wrap > header {\n          display: flex;\n          padding: 0 20px;\n          height: 65px;\n          min-height: 65px;\n          background: #fb8c00;\n          color: white;\n          align-items: center; }\n          :host .panel-wrap > header > .header-title {\n            flex: 1;\n            margin: 0; }\n          :host .panel-wrap > header > .close-button {\n            min-width: 30px;\n            max-width: 30px;\n            padding: 0;\n            margin: 0; }\n        :host .panel-wrap > .panel-content {\n          flex: 1;\n          width: 100%; }\n          :host .panel-wrap > .panel-content > perfect-scrollbar {\n            width: 100%;\n            max-height: calc(calc( 100vh - ( 115px + 50px + 40px )) - 7px - 20px); }\n            :host .panel-wrap > .panel-content > perfect-scrollbar::ng-deep .ps-content {\n              padding: 20px; }\n  "]
                },] },
    ];
    /** @nocollapse */
    MaSc5DetailsPanelComponent.ctorParameters = function () { return []; };
    MaSc5DetailsPanelComponent.propDecorators = {
        "headerTitle": [{ type: core_1.Input },],
        "panelDisplay": [{ type: core_1.Output },],
        "isOpen": [{ type: core_1.HostBinding, args: ['class.open',] },],
        "onClick": [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return MaSc5DetailsPanelComponent;
}());
exports.MaSc5DetailsPanelComponent = MaSc5DetailsPanelComponent;
//# sourceMappingURL=details-panel.component.js.map