System.register(['angular2/core', './tabs'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tabs_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.details = [];
                    this.id = 0;
                }
                AppComponent.prototype.addDetail = function () {
                    ++this.id;
                    this.details.push({
                        title: "Detail " + this.id,
                        text: "Some detail text for " + this.id + "..."
                    });
                };
                AppComponent.prototype.removeDetail = function (detail) {
                    this.details = this.details.filter(function (d) { return d !== detail; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n    <h2>Angular 2</h2>\n    <hr/>\n    <br/>\n    <ui-tabs>\n      <template ui-pane title='Overview' isActive=\"true\">\n        <br/>            \n        You have {{details.length}} details.\n      </template>\n      <template *ngFor=\"#detail of details\" ui-pane [title]=\"detail.title\">\n        <br/>\n        {{detail.text}} <br><br>\n        <button class=\"btn\" (click)=\"removeDetail(detail)\">Remove</button>\n      </template>\n      <template ui-pane title='Summary'>\n        <br/>\n        Next last ID is {{id}}.\n      </template>\n    </ui-tabs>\n    <hr/>\n    <button class=\"btn\" (click)=\"addDetail()\">Add Detail</button>\n    ",
                        directives: [tabs_1.UiTabs, tabs_1.UiPane]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map