"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var angular2_onsenui_1 = require('angular2-onsenui');
require('rxjs/add/operator/map');
var MyApp = (function () {
    function MyApp(http) {
        var _this = this;
        this.http = http;
        this.http.get('https://api.github.com/users')
            .map(function (res) { return res.json(); })
            .subscribe(function (users) { return _this.users = users; }, function (err) { return console.error(err); }, function () { return console.log('Get Users Complete'); });
    }
    MyApp.prototype.alert = function () {
        angular2_onsenui_1.onsNotification.alert('This is an Onsen UI alert notification test.');
    };
    MyApp = __decorate([
        core_1.Component({
            selector: 'app',
            template: require('./app.html'),
            styles: [require('./app.css')]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=app.js.map