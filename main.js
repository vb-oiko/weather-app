(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_weather_forecast_components_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/weather-forecast/components/workplace/workplace.component */ "./src/app/modules/weather-forecast/components/workplace/workplace.component.ts");
/* harmony import */ var _modules_weather_forecast_components_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/weather-forecast/components/city-view/city-view.component */ "./src/app/modules/weather-forecast/components/city-view/city-view.component.ts");
/* harmony import */ var _modules_weather_forecast_components_starred_cities_starred_cities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/weather-forecast/components/starred-cities/starred-cities.component */ "./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.ts");
/* harmony import */ var _modules_weather_forecast_components_geo_locator_geo_locator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/weather-forecast/components/geo-locator/geo-locator.component */ "./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.ts");
/* harmony import */ var _modules_weather_forecast_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/weather-forecast/components/login/login.component */ "./src/app/modules/weather-forecast/components/login/login.component.ts");
/* harmony import */ var _modules_weather_forecast_guards_weather_guard_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/weather-forecast/guards/weather-guard.guard */ "./src/app/modules/weather-forecast/guards/weather-guard.guard.ts");









var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: _modules_weather_forecast_components_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_3__["WorkplaceComponent"],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: _modules_weather_forecast_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
            { path: 'city/:name', component: _modules_weather_forecast_components_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_4__["CityViewComponent"], canActivate: [_modules_weather_forecast_guards_weather_guard_guard__WEBPACK_IMPORTED_MODULE_8__["WeatherGuardGuard"]] },
            { path: 'city', component: _modules_weather_forecast_components_geo_locator_geo_locator_component__WEBPACK_IMPORTED_MODULE_6__["GeoLocatorComponent"], canActivate: [_modules_weather_forecast_guards_weather_guard_guard__WEBPACK_IMPORTED_MODULE_8__["WeatherGuardGuard"]] },
            { path: 'starred', component: _modules_weather_forecast_components_starred_cities_starred_cities_component__WEBPACK_IMPORTED_MODULE_5__["StarredCitiesComponent"], canActivate: [_modules_weather_forecast_guards_weather_guard_guard__WEBPACK_IMPORTED_MODULE_8__["WeatherGuardGuard"]] },
            { path: '*', redirectTo: 'city', pathMatch: 'full' },
        ],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-workplace></app-workplace> -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-workplace {\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHYuYm9pa29cXHByb2plY3RzXFx3aGVhdGhlci1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtd29ya3BsYWNlIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'weather-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_weather_forecast_weather_forecast_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/weather-forecast/weather-forecast.module */ "./src/app/modules/weather-forecast/weather-forecast.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_weather_forecast_services_module_state_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/weather-forecast/services/module-state.service */ "./src/app/modules/weather-forecast/services/module-state.service.ts");
/* harmony import */ var _modules_weather_forecast_services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/weather-forecast/services/weather-forecast.service */ "./src/app/modules/weather-forecast/services/weather-forecast.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _modules_weather_forecast_weather_forecast_module__WEBPACK_IMPORTED_MODULE_6__["WeatherForecastModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["NgxWebstorageModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            ],
            providers: [
                _modules_weather_forecast_services_module_state_service__WEBPACK_IMPORTED_MODULE_11__["ModuleStateService"],
                _modules_weather_forecast_services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_12__["WeatherForecastService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/components/city-view/city-view.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/city-view/city-view.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-city-weather \r\n  *ngIf=\"curWeather && _mss.starredCities\"\r\n  [curWeather]=\"curWeather\" \r\n  [display]=\"''\"\r\n  [starred]=\"starred\"\r\n  (starClicked)=\"cityClick()\">\r\n</app-city-weather>\r\n<div *ngIf=\"forecast\">\r\n  <app-city-forecast [forecast]=\"forecast\"></app-city-forecast>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/city-view/city-view.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/city-view/city-view.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2VhdGhlci1mb3JlY2FzdC9jb21wb25lbnRzL2NpdHktdmlldy9jaXR5LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/city-view/city-view.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/city-view/city-view.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CityViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityViewComponent", function() { return CityViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather-forecast.service */ "./src/app/modules/weather-forecast/services/weather-forecast.service.ts");
/* harmony import */ var _services_module_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/module-state.service */ "./src/app/modules/weather-forecast/services/module-state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CityViewComponent = /** @class */ (function () {
    function CityViewComponent(_wfs, _mss, route) {
        var _this = this;
        this._wfs = _wfs;
        this._mss = _mss;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.city = params.name;
            _this.getWeatherByCityName(params.name);
        });
        this.subscr = this._mss.starredCities.subscribe(function (cities) {
            _this.starred = cities.includes(_this.city).toString();
        });
    }
    CityViewComponent.prototype.ngOnInit = function () {
    };
    CityViewComponent.prototype.ngOnDestroy = function () {
        this.subscr.unsubscribe();
    };
    CityViewComponent.prototype.cityClick = function () {
        this._mss.toggleCity(this.curWeather.cityAndCountry);
    };
    CityViewComponent.prototype.getWeatherByCityName = function (cityName) {
        var _this = this;
        this._wfs.getCurrentWeather(cityName).subscribe(function (weather) {
            _this.curWeather = weather;
            _this.starred = _this._mss.isStarred(_this.curWeather.cityAndCountry);
        }, function (error) {
            console.log(error);
            _this.curWeather = undefined;
        });
        this._wfs.getWeatherForecast(cityName).subscribe(function (forecast) { return _this.forecast = forecast; }, function (error) {
            console.log(error);
            _this.forecast = undefined;
        });
    };
    ;
    CityViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-view',
            template: __webpack_require__(/*! ./city-view.component.html */ "./src/app/modules/weather-forecast/components/city-view/city-view.component.html"),
            styles: [__webpack_require__(/*! ./city-view.component.scss */ "./src/app/modules/weather-forecast/components/city-view/city-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_2__["WeatherForecastService"],
            _services_module_state_service__WEBPACK_IMPORTED_MODULE_3__["ModuleStateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CityViewComponent);
    return CityViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/city-forecast/city-forecast.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/city-forecast/city-forecast.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forecast-wrap\">\r\n  <ng-container *ngFor=\"let fore of forecast\">\r\n    <mat-card class=\"forecast-card\" *ngIf=\"!(fore.date % 86400000 - 43200000)\">\r\n      <div class=\"day\">{{fore.date | date :'EEE'}}</div>\r\n      <div class=\"icon\">\r\n        <app-weather-icon [descr]=\"fore.condDescr\"></app-weather-icon>\r\n      </div>\r\n      <div class=\"temperature\">{{fore.temp | number: '1.0-0'}}&deg;C</div>\r\n    </mat-card>\r\n  </ng-container>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/city-forecast/city-forecast.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/city-forecast/city-forecast.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forecast-wrap {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem; }\n  .forecast-wrap .forecast-card {\n    flex-basis: 14.5%;\n    text-align: center; }\n  .forecast-wrap .forecast-card .day {\n      font-size: 1.5rem;\n      margin-bottom: 1rem; }\n  .forecast-wrap .forecast-card .icon {\n      width: 80px;\n      height: 80px;\n      margin: 0 auto; }\n  .forecast-wrap .forecast-card .temperature {\n      font-size: 2.8rem;\n      margin-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWF0aGVyLWZvcmVjYXN0L2NvbXBvbmVudHMvY29tbW9uL2NpdHktZm9yZWNhc3QvRDpcXHYuYm9pa29cXHByb2plY3RzXFx3aGVhdGhlci1hcHAvc3JjXFxhcHBcXG1vZHVsZXNcXHdlYXRoZXItZm9yZWNhc3RcXGNvbXBvbmVudHNcXGNvbW1vblxcY2l0eS1mb3JlY2FzdFxcY2l0eS1mb3JlY2FzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYiwrQkFBOEI7RUFDOUIsaUJBQWdCLEVBdUJuQjtFQTFCRDtJQU1RLGtCQUFpQjtJQUNqQixtQkFBa0IsRUFrQnJCO0VBekJMO01BVVksa0JBQWlCO01BQ2pCLG9CQUFtQixFQUN0QjtFQVpUO01BZVksWUFBVztNQUNYLGFBQVk7TUFDWixlQUFjLEVBQ2pCO0VBbEJUO01BcUJZLGtCQUFpQjtNQUNqQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3dlYXRoZXItZm9yZWNhc3QvY29tcG9uZW50cy9jb21tb24vY2l0eS1mb3JlY2FzdC9jaXR5LWZvcmVjYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmVjYXN0LXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gICAgLmZvcmVjYXN0LWNhcmQge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDE0LjUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmRheSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZW1wZXJhdHVyZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/city-forecast/city-forecast.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/city-forecast/city-forecast.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CityForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityForecastComponent", function() { return CityForecastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CityForecastComponent = /** @class */ (function () {
    function CityForecastComponent() {
    }
    CityForecastComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CityForecastComponent.prototype, "forecast", void 0);
    CityForecastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-forecast',
            template: __webpack_require__(/*! ./city-forecast.component.html */ "./src/app/modules/weather-forecast/components/common/city-forecast/city-forecast.component.html"),
            styles: [__webpack_require__(/*! ./city-forecast.component.scss */ "./src/app/modules/weather-forecast/components/common/city-forecast/city-forecast.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CityForecastComponent);
    return CityForecastComponent;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/city-input/city-input.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/city-input/city-input.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"input-wrap\">\r\n  <mat-form-field>\r\n    <input \r\n      matInput \r\n      name=\"city\"\r\n      placeholder=\"Enter city name...\" \r\n      [(ngModel)]=\"cityInput\" \r\n      (keyup.enter)=\"selectCity()\"\r\n    >\r\n    <mat-error>City not found!</mat-error>\r\n  </mat-form-field>\r\n  <button mat-flat-button color=\"primary\" cityValidator (click)=\"selectCity()\">Search</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/city-input/city-input.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/city-input/city-input.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-wrap mat-form-field {\n  width: 70%;\n  padding-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWF0aGVyLWZvcmVjYXN0L2NvbXBvbmVudHMvY29tbW9uL2NpdHktaW5wdXQvRDpcXHYuYm9pa29cXHByb2plY3RzXFx3aGVhdGhlci1hcHAvc3JjXFxhcHBcXG1vZHVsZXNcXHdlYXRoZXItZm9yZWNhc3RcXGNvbXBvbmVudHNcXGNvbW1vblxcY2l0eS1pbnB1dFxcY2l0eS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLFdBQVU7RUFDVixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3dlYXRoZXItZm9yZWNhc3QvY29tcG9uZW50cy9jb21tb24vY2l0eS1pbnB1dC9jaXR5LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXdyYXAge1xyXG5cclxuICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/city-input/city-input.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/city-input/city-input.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CityInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityInputComponent", function() { return CityInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/weather-forecast.service */ "./src/app/modules/weather-forecast/services/weather-forecast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CityInputComponent = /** @class */ (function () {
    function CityInputComponent(_wfs, router) {
        this._wfs = _wfs;
        this.router = router;
        this.cityInput = '';
    }
    CityInputComponent.prototype.ngOnInit = function () {
    };
    CityInputComponent.prototype.selectCity = function () {
        var _this = this;
        this._wfs.getCurrentWeather(this.cityInput).subscribe(function (weather) {
            _this.cityInput = '';
            _this.router.navigate(['home/city', weather.cityAndCountry]);
        }, function (error) {
            // console.log('City: ', this.cityInput, ' not found!');
        });
    };
    ;
    CityInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-input',
            template: __webpack_require__(/*! ./city-input.component.html */ "./src/app/modules/weather-forecast/components/common/city-input/city-input.component.html"),
            styles: [__webpack_require__(/*! ./city-input.component.scss */ "./src/app/modules/weather-forecast/components/common/city-input/city-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_2__["WeatherForecastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CityInputComponent);
    return CityInputComponent;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/city-weather/city-weather.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/city-weather/city-weather.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"main-card\">\r\n  <div class=\"left-column\" [ngClass]=\"display\">\r\n    <div class=\"city-name\" [ngClass]=\"display\">{{curWeather.cityAndCountry}}</div>\r\n    <div class=\"starred-icon\" [ngClass]=\"[starred, display]\" (click)=\"starClick()\"></div>\r\n    <div class=\"conditions\" [ngClass]=\"display\">{{curWeather.condDescr}}</div>\r\n    <div class=\"humidity\" [ngClass]=\"display\">Humidity {{curWeather.humidity}} | Pressure {{curWeather.pressure}} hpa | Wind Speed {{curWeather.windSpeed}} m/s</div>\r\n  </div>\r\n  <div class=\"main-icon\">\r\n    <app-weather-icon [descr]=\"curWeather.condDescr\" [ngClass]=\"display\"></app-weather-icon>\r\n  </div>\r\n  <div class=\"right-column\" [ngClass]=\"display\">\r\n    <div class=\"date\" [ngClass]=\"display\">{{curWeather.date | date:'EEE, MMM d' }}</div>\r\n    <div class=\"temperature\" [ngClass]=\"display\">{{curWeather.temp | number:'1.0-0'}}&deg;C</div>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/city-weather/city-weather.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/city-weather/city-weather.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-card {\n  display: flex;\n  justify-content: space-between; }\n  .main-card .left-column {\n    flex-basis: 60%;\n    display: flex;\n    flex-wrap: wrap; }\n  .main-card .left-column .city-name {\n      font-size: 3rem;\n      align-self: center; }\n  .main-card .left-column .starred-icon {\n      width: 30px;\n      height: 30px;\n      margin-left: 10px;\n      align-self: center;\n      cursor: pointer; }\n  .main-card .left-column .true {\n      background-image: url(\"/assets/icons/starred.svg\"); }\n  .main-card .left-column .false {\n      background-image: url(\"/assets/icons/notstarred.svg\"); }\n  .main-card .left-column .conditions {\n      font-size: 1.5rem;\n      flex-basis: 100%;\n      align-self: center; }\n  .main-card .left-column .conditions.short {\n      flex-basis: initial;\n      margin-left: auto; }\n  .main-card .left-column .humidity {\n      font-size: 0.6rem;\n      flex-basis: 100%; }\n  .main-card .left-column .humidity.short {\n      display: none; }\n  .main-card .left-column.short {\n    flex-basis: 75%; }\n  .main-card .main-icon {\n    flex-basis: 16%; }\n  .main-card .main-icon.short {\n    flex-basis: 10%; }\n  .main-card .right-column {\n    flex-basis: 30%;\n    text-align: end;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  .main-card .right-column .date {\n      font-size: 2rem;\n      padding-bottom: .5rem; }\n  .main-card .right-column .date.short {\n      display: none; }\n  .main-card .right-column .temperature {\n      font-size: 4rem; }\n  .main-card .right-column .temperature.short {\n      font-size: 3rem; }\n  .main-card .right-column {\n    flex-basis: 24%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWF0aGVyLWZvcmVjYXN0L2NvbXBvbmVudHMvY29tbW9uL2NpdHktd2VhdGhlci9EOlxcdi5ib2lrb1xccHJvamVjdHNcXHdoZWF0aGVyLWFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcd2VhdGhlci1mb3JlY2FzdFxcY29tcG9uZW50c1xcY29tbW9uXFxjaXR5LXdlYXRoZXJcXGNpdHktd2VhdGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYiwrQkFBOEIsRUF5RmpDO0VBM0ZEO0lBS1EsZ0JBQWU7SUFDZixjQUFhO0lBQ2IsZ0JBQWUsRUEwQ2xCO0VBakRMO01BVVksZ0JBQWU7TUFDZixtQkFBa0IsRUFDckI7RUFaVDtNQWVZLFlBQVc7TUFDWCxhQUFZO01BQ1osa0JBQWlCO01BQ2pCLG1CQUFrQjtNQUNsQixnQkFBZSxFQUNsQjtFQXBCVDtNQXVCWSxtREFBa0QsRUFDckQ7RUF4QlQ7TUEyQlksc0RBQXFELEVBQ3hEO0VBNUJUO01BK0JZLGtCQUFpQjtNQUNqQixpQkFBZ0I7TUFDaEIsbUJBQWtCLEVBQ3JCO0VBbENUO01BcUNZLG9CQUFtQjtNQUNuQixrQkFBaUIsRUFDcEI7RUF2Q1Q7TUEwQ1ksa0JBQWlCO01BQ2pCLGlCQUFnQixFQUNuQjtFQTVDVDtNQStDWSxjQUFhLEVBQ2hCO0VBaERUO0lBb0RRLGdCQUNKLEVBQUM7RUFyREw7SUF3RFEsZ0JBQWUsRUFDbEI7RUF6REw7SUE0RFEsZ0JBQWUsRUFDbEI7RUE3REw7SUFnRVEsZ0JBQWU7SUFDZixnQkFBZTtJQUNmLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsd0JBQXVCLEVBa0IxQjtFQXRGTDtNQXVFWSxnQkFBZTtNQUNmLHNCQUFxQixFQUN4QjtFQXpFVDtNQTRFWSxjQUFhLEVBQ2hCO0VBN0VUO01BZ0ZZLGdCQUFlLEVBQ2xCO0VBakZUO01Bb0ZZLGdCQUFlLEVBQ2xCO0VBckZUO0lBeUZRLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy93ZWF0aGVyLWZvcmVjYXN0L2NvbXBvbmVudHMvY29tbW9uL2NpdHktd2VhdGhlci9jaXR5LXdlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLmxlZnQtY29sdW1uIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIC5jaXR5LW5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGFycmVkLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50cnVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zL3N0YXJyZWQuc3ZnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mYWxzZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29ucy9ub3RzdGFycmVkLnN2ZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY29uZGl0aW9ucyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jb25kaXRpb25zLnNob3J0IHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogaW5pdGlhbDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5odW1pZGl0eSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmh1bWlkaXR5LnNob3J0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQtY29sdW1uLnNob3J0IHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3NSVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1haW4taWNvbiB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTYlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFpbi1pY29uLnNob3J0IHtcclxuICAgICAgICBmbGV4LWJhc2lzOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LWNvbHVtbiB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMzAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0ZS5zaG9ydCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVtcGVyYXR1cmUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVtcGVyYXR1cmUuc2hvcnQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1jb2x1bW4ge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDI0JTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/city-weather/city-weather.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/city-weather/city-weather.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CityWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityWeatherComponent", function() { return CityWeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CityWeatherComponent = /** @class */ (function () {
    function CityWeatherComponent() {
        this.starClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CityWeatherComponent.prototype.ngOnInit = function () {
    };
    CityWeatherComponent.prototype.starClick = function () {
        this.starClicked.emit(this.curWeather.cityAndCountry);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CityWeatherComponent.prototype, "curWeather", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CityWeatherComponent.prototype, "starred", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CityWeatherComponent.prototype, "display", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CityWeatherComponent.prototype, "starClicked", void 0);
    CityWeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-weather',
            template: __webpack_require__(/*! ./city-weather.component.html */ "./src/app/modules/weather-forecast/components/common/city-weather/city-weather.component.html"),
            styles: [__webpack_require__(/*! ./city-weather.component.scss */ "./src/app/modules/weather-forecast/components/common/city-weather/city-weather.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CityWeatherComponent);
    return CityWeatherComponent;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/weather-icon/weather-icon.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/weather-icon/weather-icon.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"'weather-icon ' + descr\"></div>"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/weather-icon/weather-icon.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/weather-icon/weather-icon.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weather-icon {\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: 50%; }\n\n.rain {\n  background-image: url(\"/assets/icons/11.png\"); }\n\n.shower.rain, .drizzle {\n  background-image: url(\"/assets/icons/34.png\"); }\n\n.heavy.rain, .extreme.rain, .ragged.rain {\n  background-image: url(\"/assets/icons/39.png\"); }\n\n.thunderstorm {\n  background-image: url(\"/assets/icons/25.png\"); }\n\n.thunderstorm.rain, .thunderstorm.drizzle {\n  background-image: url(\"/assets/icons/16.png\"); }\n\n.snow, .freezing.rain, .sleet {\n  background-image: url(\"/assets/icons/36.png\"); }\n\n.mist, .smoke, .haze, .sand, .dust.whirls, .fog, .dust, .volcanic.ash, .haze {\n  background-image: url(\"/assets/icons/30.png\"); }\n\n.squall {\n  background-image: url(\"/assets/icons/31.png\"); }\n\n.tornado {\n  background-image: url(\"/assets/icons/21.png\"); }\n\n.clear.sky {\n  background-image: url(\"/assets/icons/33.png\"); }\n\n.clouds {\n  background-image: url(\"/assets/icons/32.png\"); }\n\n.clouds.overcast {\n  background-image: url(\"/assets/icons/37.png\"); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWF0aGVyLWZvcmVjYXN0L2NvbXBvbmVudHMvY29tbW9uL3dlYXRoZXItaWNvbi9EOlxcdi5ib2lrb1xccHJvamVjdHNcXHdoZWF0aGVyLWFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcd2VhdGhlci1mb3JlY2FzdFxcY29tcG9uZW50c1xcY29tbW9uXFx3ZWF0aGVyLWljb25cXHdlYXRoZXItaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1oseUJBQXdCO0VBQ3hCLDZCQUE0QjtFQUM1QiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQ7O0FBRUQ7RUFDSSw4Q0FBNkMsRUFDaEQiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3dlYXRoZXItZm9yZWNhc3QvY29tcG9uZW50cy9jb21tb24vd2VhdGhlci1pY29uL3dlYXRoZXItaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAud2VhdGhlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhaW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29ucy8xMS5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2hvd2VyLnJhaW4sIC5kcml6emxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbnMvMzQucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYXZ5LnJhaW4sIC5leHRyZW1lLnJhaW4sIC5yYWdnZWQucmFpbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zLzM5LnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC50aHVuZGVyc3Rvcm0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29ucy8yNS5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAudGh1bmRlcnN0b3JtLnJhaW4sIC50aHVuZGVyc3Rvcm0uZHJpenpsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zLzE2LnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbm93LCAuZnJlZXppbmcucmFpbiwgLnNsZWV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbnMvMzYucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1pc3QsIC5zbW9rZSwgLmhhemUsIC5zYW5kLCAuZHVzdC53aGlybHMsIC5mb2csIC5kdXN0LCAudm9sY2FuaWMuYXNoLCAuaGF6ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zLzMwLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcXVhbGwge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29ucy8zMS5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAudG9ybmFkbyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zLzIxLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbGVhci5za3kge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29ucy8zMy5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAuY2xvdWRzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbnMvMzIucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3Vkcy5vdmVyY2FzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zLzM3LnBuZycpO1xyXG4gICAgfVxyXG4vLyAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/common/weather-icon/weather-icon.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/common/weather-icon/weather-icon.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: WeatherIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherIconComponent", function() { return WeatherIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WeatherIconComponent = /** @class */ (function () {
    function WeatherIconComponent() {
    }
    WeatherIconComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeatherIconComponent.prototype, "descr", void 0);
    WeatherIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-icon',
            template: __webpack_require__(/*! ./weather-icon.component.html */ "./src/app/modules/weather-forecast/components/common/weather-icon/weather-icon.component.html"),
            styles: [__webpack_require__(/*! ./weather-icon.component.scss */ "./src/app/modules/weather-forecast/components/common/weather-icon/weather-icon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WeatherIconComponent);
    return WeatherIconComponent;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2VhdGhlci1mb3JlY2FzdC9jb21wb25lbnRzL2dlby1sb2NhdG9yL2dlby1sb2NhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GeoLocatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoLocatorComponent", function() { return GeoLocatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather-forecast.service */ "./src/app/modules/weather-forecast/services/weather-forecast.service.ts");




var GeoLocatorComponent = /** @class */ (function () {
    function GeoLocatorComponent(router, _ngzone, _wfs) {
        this.router = router;
        this._ngzone = _ngzone;
        this._wfs = _wfs;
    }
    GeoLocatorComponent.prototype.ngOnInit = function () {
        this.getCityByGeoPosition();
    };
    GeoLocatorComponent.prototype.getCityByGeoPosition = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var geocoder = new google.maps.Geocoder;
                var self = _this;
                geocoder.geocode({
                    'location': { lat: position.coords.latitude, lng: position.coords.longitude }
                }, function (results, status) {
                    var city;
                    var country;
                    if (status == google.maps.GeocoderStatus.OK) {
                        var components = results[0]['address_components'];
                        for (var i = 0; i < components.length; i++) {
                            if (components[i]['types'][1] == 'political') {
                                if (components[i]['types'][0] == 'locality') {
                                    city = components[i]['short_name'];
                                }
                                if (components[i]['types'][0] == 'country') {
                                    country = components[i]['short_name'];
                                }
                            }
                        }
                        self._ngzone.run(function () {
                            self.router.navigate(['home/city', city + ', ' + country]);
                        });
                    }
                    ;
                });
            });
        }
        else {
            this.router.navigate(['home/city', 'New York, US']);
        }
        ;
    };
    ;
    GeoLocatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-geo-locator',
            template: __webpack_require__(/*! ./geo-locator.component.html */ "./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.html"),
            styles: [__webpack_require__(/*! ./geo-locator.component.scss */ "./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_3__["WeatherForecastService"]])
    ], GeoLocatorComponent);
    return GeoLocatorComponent;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/components/login/login.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/login/login.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.user | async; then authenticated else guest\">\r\n  <!-- template will replace this div -->\r\n</div>\r\n\r\n\r\n<!-- User NOT logged in -->\r\n<ng-template #guest>\r\n<h3>Howdy,</h3>\r\n<p>Login to get started...</p>\r\n\r\n<button mat-flat-button color=\"primary\" (click)=\"auth.googleLogin()\">Sign in with Google</button>\r\n\r\n</ng-template>\r\n\r\n\r\n<!-- User logged in -->\r\n<ng-template #authenticated>\r\n<div *ngIf=\"auth.user | async as user\">\r\n  <p>UID: {{ user.uid }}</p>\r\n  <button (click)=\"auth.signOut()\">Logout</button>\r\n  <a [routerLink]=\"['/home/city']\">Weather</a>\r\n</div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/login/login.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/login/login.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2VhdGhlci1mb3JlY2FzdC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/login/login.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/login/login.component.ts ***!
  \******************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_module_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/module-state.service */ "./src/app/modules/weather-forecast/services/module-state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/home/city']);
            }
            ;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/weather-forecast/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/weather-forecast/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_module_state_service__WEBPACK_IMPORTED_MODULE_2__["ModuleStateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"weather\">\r\n  <div *ngFor=\"let wth of weather\" (click)=\"cityClicked(wth)\">\r\n      <app-city-weather \r\n        [curWeather]=\"wth\"\r\n        [starred] = \"'true'\"\r\n        [display]=\"'short'\"\r\n        (starClicked)=\"cityStarClick($event)\">\r\n    </app-city-weather>\r\n    <div class=\"spacer\"></div>\r\n  </div>\r\n\r\n  \r\n  <!-- (click)=\"cityClicked(wth.cityAndCountry)\" -->"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  padding-bottom: .5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWF0aGVyLWZvcmVjYXN0L2NvbXBvbmVudHMvc3RhcnJlZC1jaXRpZXMvRDpcXHYuYm9pa29cXHByb2plY3RzXFx3aGVhdGhlci1hcHAvc3JjXFxhcHBcXG1vZHVsZXNcXHdlYXRoZXItZm9yZWNhc3RcXGNvbXBvbmVudHNcXHN0YXJyZWQtY2l0aWVzXFxzdGFycmVkLWNpdGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2VhdGhlci1mb3JlY2FzdC9jb21wb25lbnRzL3N0YXJyZWQtY2l0aWVzL3N0YXJyZWQtY2l0aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.ts ***!
  \************************************************************************************************/
/*! exports provided: StarredCitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredCitiesComponent", function() { return StarredCitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather-forecast.service */ "./src/app/modules/weather-forecast/services/weather-forecast.service.ts");
/* harmony import */ var _services_module_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/module-state.service */ "./src/app/modules/weather-forecast/services/module-state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StarredCitiesComponent = /** @class */ (function () {
    function StarredCitiesComponent(_wfs, _mss, router) {
        var _this = this;
        this._wfs = _wfs;
        this._mss = _mss;
        this.router = router;
        this.weather = [];
        this.starClicked = false;
        this.subscr = this._mss.starredCities.subscribe(function (cities) {
            _this.getWeather(cities);
        });
    }
    StarredCitiesComponent.prototype.ngOnInit = function () {
    };
    StarredCitiesComponent.prototype.ngOnDestroy = function () {
        this.subscr.unsubscribe();
    };
    StarredCitiesComponent.prototype.cityStarClick = function (city) {
        this.starClicked = true;
        this._mss.toggleCity(city);
    };
    StarredCitiesComponent.prototype.cityClicked = function (weather) {
        if (this.starClicked) {
            this.starClicked = false;
        }
        else {
            this.router.navigate(["home/city", weather.cityAndCountry]);
        }
        ;
    };
    StarredCitiesComponent.prototype.getWeather = function (cities) {
        var _this = this;
        this.weather = [];
        var _loop_1 = function (i) {
            this_1._wfs.getCurrentWeather(cities[i]).subscribe(function (wth) { _this.weather.push(wth); }, function (error) {
                console.log('Fail to load the weather in ', cities[i], error);
            });
        };
        var this_1 = this;
        for (var i = 0; i < cities.length; i++) {
            _loop_1(i);
        }
    };
    StarredCitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-starred-cities',
            template: __webpack_require__(/*! ./starred-cities.component.html */ "./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.html"),
            styles: [__webpack_require__(/*! ./starred-cities.component.scss */ "./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_2__["WeatherForecastService"],
            _services_module_state_service__WEBPACK_IMPORTED_MODULE_3__["ModuleStateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StarredCitiesComponent);
    return StarredCitiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/components/workplace/workplace.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/workplace/workplace.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\r\n  <div class=\"header-wrap\">\r\n    <div class=\"menu\">\r\n      <h1><a [routerLink]=\"['']\">Another Weather App</a></h1>\r\n      <ul *ngIf=\"auth.user | async\">\r\n        <li><a [routerLink]=\"['./starred']\" >My Cities</a></li>\r\n        <li (click)=\"auth.signOut()\">SignOut ({{auth.curUser.email}})</li>\r\n      </ul> \r\n    </div>\r\n    <app-city-input  *ngIf=\"auth.user | async\"></app-city-input>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/workplace/workplace.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/workplace/workplace.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: black; }\n\n.main-wrap {\n  width: 800px;\n  margin: 0 auto; }\n\n.main-wrap .header-wrap {\n    display: flex;\n    justify-content: space-between;\n    margin: 1rem 0;\n    flex-wrap: wrap; }\n\n.main-wrap .header-wrap .menu {\n      flex-basis: 100%;\n      display: flex;\n      justify-content: space-between; }\n\n.main-wrap .header-wrap .menu h1 {\n        justify-self: flex-start;\n        -webkit-margin-after: 0;\n                margin-block-end: 0; }\n\n.main-wrap .header-wrap .menu ul {\n        list-style: none; }\n\n.main-wrap .header-wrap .menu ul li {\n          display: inline;\n          margin-left: 1rem; }\n\n.main-wrap .header-wrap .menu ul li:hover {\n            cursor: pointer; }\n\n.main-wrap .header-wrap .menu ul li a {\n            justify-self: flex-end; }\n\n.main-wrap .header-wrap app-city-input {\n      flex-basis: 40%;\n      align-self: flex-end;\n      margin-left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWF0aGVyLWZvcmVjYXN0L2NvbXBvbmVudHMvd29ya3BsYWNlL0Q6XFx2LmJvaWtvXFxwcm9qZWN0c1xcd2hlYXRoZXItYXBwL3NyY1xcYXBwXFxtb2R1bGVzXFx3ZWF0aGVyLWZvcmVjYXN0XFxjb21wb25lbnRzXFx3b3JrcGxhY2VcXHdvcmtwbGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFxQjtFQUNyQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osZUFBYyxFQTRDakI7O0FBOUNEO0lBTVEsY0FBYTtJQUNiLCtCQUE4QjtJQUM5QixlQUFjO0lBQ2QsZ0JBQWUsRUFvQ2xCOztBQTdDTDtNQVlZLGlCQUFnQjtNQUNoQixjQUFhO01BQ2IsK0JBQThCLEVBdUJqQzs7QUFyQ1Q7UUFpQmdCLHlCQUF3QjtRQUN4Qix3QkFBbUI7Z0JBQW5CLG9CQUFtQixFQUN0Qjs7QUFuQmI7UUFzQmdCLGlCQUFnQixFQWNuQjs7QUFwQ2I7VUF5Qm9CLGdCQUFlO1VBQ2Ysa0JBQWlCLEVBU3BCOztBQW5DakI7WUE2QndCLGdCQUFlLEVBQ2xCOztBQTlCckI7WUFpQ3dCLHVCQUFzQixFQUN6Qjs7QUFsQ3JCO01BeUNZLGdCQUFlO01BQ2YscUJBQW9CO01BQ3BCLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2VhdGhlci1mb3JlY2FzdC9jb21wb25lbnRzL3dvcmtwbGFjZS93b3JrcGxhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1haW4td3JhcCB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAuaGVhZGVyLXdyYXAge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgYXBwLWNpdHktaW5wdXQge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA0MCU7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/weather-forecast/components/workplace/workplace.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/components/workplace/workplace.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WorkplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceComponent", function() { return WorkplaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_module_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/module-state.service */ "./src/app/modules/weather-forecast/services/module-state.service.ts");



var WorkplaceComponent = /** @class */ (function () {
    function WorkplaceComponent(auth) {
        this.auth = auth;
    }
    WorkplaceComponent.prototype.ngOnInit = function () {
    };
    WorkplaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workplace',
            template: __webpack_require__(/*! ./workplace.component.html */ "./src/app/modules/weather-forecast/components/workplace/workplace.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./workplace.component.scss */ "./src/app/modules/weather-forecast/components/workplace/workplace.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_module_state_service__WEBPACK_IMPORTED_MODULE_2__["ModuleStateService"]])
    ], WorkplaceComponent);
    return WorkplaceComponent;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/guards/weather-guard.guard.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/guards/weather-guard.guard.ts ***!
  \************************************************************************/
/*! exports provided: WeatherGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherGuardGuard", function() { return WeatherGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/module-state.service */ "./src/app/modules/weather-forecast/services/module-state.service.ts");




var WeatherGuardGuard = /** @class */ (function () {
    function WeatherGuardGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    WeatherGuardGuard.prototype.canActivate = function (next, state) {
        if (this.auth.curUser) {
            return true;
        }
        else {
            this.router.navigate(['/home/login']);
        }
        ;
    };
    WeatherGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_module_state_service__WEBPACK_IMPORTED_MODULE_3__["ModuleStateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WeatherGuardGuard);
    return WeatherGuardGuard;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/services/module-state.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/services/module-state.service.ts ***!
  \***************************************************************************/
/*! exports provided: ModuleStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleStateService", function() { return ModuleStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ModuleStateService = /** @class */ (function () {
    function ModuleStateService(storage, afAuth, afs, router) {
        // if (this.storage.retrieve('storedCities')) {
        //   this.starredCities = this.storage.retrieve('storedCities');
        // };
        var _this = this;
        this.storage = storage;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user = this.afAuth.authState;
        this.starredCities = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.user.subscribe(function (user) {
            if (user) {
                _this.afs.doc("users/" + user.uid).valueChanges().subscribe(function (obj) {
                    if (obj) {
                        _this.starredCities.next(obj.cities);
                    }
                    else {
                        _this.starredCities.next([]);
                    }
                    ;
                });
                _this.curUser = user;
            }
            else {
                _this.curUser = undefined;
            }
            ;
        });
    }
    ModuleStateService.prototype.googleLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    ModuleStateService.prototype.oAuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    };
    ModuleStateService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    ModuleStateService.prototype.isStarred = function (city) {
        return this.starredCities.value.includes(city).toString();
    };
    ModuleStateService.prototype.toggleCity = function (city) {
        var cities = this.starredCities.value;
        var i = cities.indexOf(city);
        if (i !== -1) {
            cities.splice(i, 1);
        }
        else {
            cities.push(city);
        }
        ;
        this.saveToFirestore(cities);
        // this.storage.store('storedCities', this.starredCities)
    };
    ;
    ModuleStateService.prototype.saveToFirestore = function (cities) {
        if (this.curUser.uid) {
            this.afs.doc("users/" + this.curUser.uid).set({ cities: cities });
        }
    };
    ;
    ModuleStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ModuleStateService);
    return ModuleStateService;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/services/weather-forecast.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/weather-forecast/services/weather-forecast.service.ts ***!
  \*******************************************************************************/
/*! exports provided: WeatherForecastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastService", function() { return WeatherForecastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var WeatherForecastService = /** @class */ (function () {
    function WeatherForecastService(_http) {
        this._http = _http;
        this._WEATHER_APIURL = 'http://api.openweathermap.org/data/2.5/';
        this._WEATHER_APIKEY = '852632e4d0e2e9f87c1d590ec53e07bc';
        this._WEATHER_UNITS = 'metric';
    }
    WeatherForecastService.prototype.getCurrentWeather = function (city) {
        return this._http.get(this._WEATHER_APIURL + 'weather?q=' + city + '&APPID=' + this._WEATHER_APIKEY + '&units=' + this._WEATHER_UNITS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (o) {
            return {
                cityAndCountry: o['name'] + ', ' + o['sys']['country'],
                date: Date.now(),
                condDescr: o['weather'][0]['description'],
                temp: o['main']['temp'],
                pressure: o['main']['pressure'],
                humidity: o['main']['humidity'],
                windSpeed: o['wind']['speed'],
            };
        }));
    };
    WeatherForecastService.prototype.getWeatherForecast = function (city) {
        return this._http.get(this._WEATHER_APIURL + 'forecast?q=' + city + '&APPID=' + this._WEATHER_APIKEY + '&units=' + this._WEATHER_UNITS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (o) {
            var forecast = [];
            var city = o['city']['name'] + ', ' + o['city']['country'];
            for (var i = 0; i < o['list'].length; i++) {
                forecast.push({
                    cityAndCountry: city,
                    date: o['list'][i]['dt'] * 1000,
                    condDescr: o['list'][i]['weather'][0]['description'],
                    temp: o['list'][i]['main']['temp'],
                    pressure: o['list'][i]['main']['pressure'],
                    humidity: o['list'][i]['main']['humidity'],
                    windSpeed: o['list'][i]['wind']['speed'],
                });
            }
            return forecast;
        }));
    };
    WeatherForecastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherForecastService);
    return WeatherForecastService;
}());



/***/ }),

/***/ "./src/app/modules/weather-forecast/weather-forecast.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/weather-forecast/weather-forecast.module.ts ***!
  \*********************************************************************/
/*! exports provided: WeatherForecastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastModule", function() { return WeatherForecastModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/workplace/workplace.component */ "./src/app/modules/weather-forecast/components/workplace/workplace.component.ts");
/* harmony import */ var _components_common_city_input_city_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/common/city-input/city-input.component */ "./src/app/modules/weather-forecast/components/common/city-input/city-input.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _components_common_city_weather_city_weather_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/city-weather/city-weather.component */ "./src/app/modules/weather-forecast/components/common/city-weather/city-weather.component.ts");
/* harmony import */ var _components_common_city_forecast_city_forecast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/common/city-forecast/city-forecast.component */ "./src/app/modules/weather-forecast/components/common/city-forecast/city-forecast.component.ts");
/* harmony import */ var _components_common_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/common/weather-icon/weather-icon.component */ "./src/app/modules/weather-forecast/components/common/weather-icon/weather-icon.component.ts");
/* harmony import */ var _components_starred_cities_starred_cities_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/starred-cities/starred-cities.component */ "./src/app/modules/weather-forecast/components/starred-cities/starred-cities.component.ts");
/* harmony import */ var _components_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/city-view/city-view.component */ "./src/app/modules/weather-forecast/components/city-view/city-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_geo_locator_geo_locator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/geo-locator/geo-locator.component */ "./src/app/modules/weather-forecast/components/geo-locator/geo-locator.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/weather-forecast/components/login/login.component.ts");

















var WeatherForecastModule = /** @class */ (function () {
    function WeatherForecastModule() {
    }
    WeatherForecastModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_3__["WorkplaceComponent"],
                _components_common_city_input_city_input_component__WEBPACK_IMPORTED_MODULE_4__["CityInputComponent"],
                _components_common_city_weather_city_weather_component__WEBPACK_IMPORTED_MODULE_9__["CityWeatherComponent"],
                _components_common_city_forecast_city_forecast_component__WEBPACK_IMPORTED_MODULE_10__["CityForecastComponent"],
                _components_common_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_11__["WeatherIconComponent"],
                _components_starred_cities_starred_cities_component__WEBPACK_IMPORTED_MODULE_12__["StarredCitiesComponent"],
                _components_city_view_city_view_component__WEBPACK_IMPORTED_MODULE_13__["CityViewComponent"],
                _components_geo_locator_geo_locator_component__WEBPACK_IMPORTED_MODULE_15__["GeoLocatorComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            ],
            exports: [_components_workplace_workplace_component__WEBPACK_IMPORTED_MODULE_3__["WorkplaceComponent"]],
        })
    ], WeatherForecastModule);
    return WeatherForecastModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyArBoRxCxvBSWt8hpJBovleqPkKHHRuwuU",
        authDomain: "weather-app-firebase-9d49b.firebaseapp.com",
        databaseURL: "https://weather-app-firebase-9d49b.firebaseio.com",
        projectId: "weather-app-firebase-9d49b",
        storageBucket: "weather-app-firebase-9d49b.appspot.com",
        messagingSenderId: "549014134428"
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\v.boiko\projects\wheather-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map