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

/***/ "./src/app/actions/user-api.ts":
/*!*************************************!*\
  !*** ./src/app/actions/user-api.ts ***!
  \*************************************/
/*! exports provided: REQUEST_USER, RECIEVE_USER, REQUEST_FAILED, RequestUser, RecieveUser, RequestFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_USER", function() { return REQUEST_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIEVE_USER", function() { return RECIEVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_FAILED", function() { return REQUEST_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestUser", function() { return RequestUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecieveUser", function() { return RecieveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFailed", function() { return RequestFailed; });
var REQUEST_USER = '[Db] Request user';
var RECIEVE_USER = '[Db] Recieve user';
var REQUEST_FAILED = '[Db] Request failed';
var RequestUser = /** @class */ (function () {
    function RequestUser() {
        this.type = REQUEST_USER;
    }
    return RequestUser;
}());

var RecieveUser = /** @class */ (function () {
    function RecieveUser(payload) {
        this.payload = payload;
        this.type = RECIEVE_USER;
    }
    return RecieveUser;
}());

var RequestFailed = /** @class */ (function () {
    function RequestFailed(error) {
        this.error = error;
        this.type = REQUEST_FAILED;
    }
    return RequestFailed;
}());



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
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");




var routes = [
    { path: '', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] }
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

module.exports = "\n  <h1>\n    {{ title | titlecase }}\n  </h1>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'user';
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

/***/ "./src/app/app.effects.ts":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");



var AppEffects = /** @class */ (function () {
    function AppEffects(actions$) {
        this.actions$ = actions$;
    }
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AppEffects);
    return AppEffects;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _effects_user_api_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effects/user-api-effects */ "./src/app/effects/user-api-effects.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.effects */ "./src/app/app.effects.ts");
/* harmony import */ var _shared_services_user_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/user-api.service */ "./src/app/shared/services/user-api.service.ts");
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/popup/popup.component */ "./src/app/components/popup/popup.component.ts");
/* harmony import */ var _shared_directives_outside_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/directives/outside.directive */ "./src/app/shared/directives/outside.directive.ts");
/* harmony import */ var _shared_directives_copy_clipboard_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/directives/copy-clipboard.directive */ "./src/app/shared/directives/copy-clipboard.directive.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_16__["PopupComponent"],
                _shared_directives_outside_directive__WEBPACK_IMPORTED_MODULE_17__["OutsideDirective"],
                _shared_directives_copy_clipboard_directive__WEBPACK_IMPORTED_MODULE_18__["CopyClipboardDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_11__["metaReducers"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_effects_user_api_effects__WEBPACK_IMPORTED_MODULE_12__["UserApiEffects"], _app_effects__WEBPACK_IMPORTED_MODULE_14__["AppEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
            ],
            providers: [_shared_services_user_api_service__WEBPACK_IMPORTED_MODULE_15__["UserApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/popup/popup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/popup/popup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-bg\">\n  <div class=\"popup\" appOutside (clickedOutside)=\"close()\">\n    <div class=\"popup-title\">{{user.name}}</div>\n    <div class=\"popup-btn-close\" (click)=\"close()\">X</div>\n    <div class=\"user-details\">\n      <div class=\"user-details-item\">\n        <div>id</div>\n        <div>{{user.id}}</div>\n      </div>\n      <div class=\"user-details-item\">\n        <div>username</div>\n        <div>{{user.username}}</div>\n      </div>\n      <div class=\"user-details-item\">\n        <div>email</div>\n        <div>{{user.email}}</div>\n      </div>\n      <div class=\"user-details-item\">\n        <div>address</div>\n        <div>\n          <div>{{user.address.street}}</div>\n          <div>{{user.address.suite}}</div>\n          <div>{{user.address.city}}</div>\n          <div>{{user.address.zipcode}}</div>\n          <div>{{user.address.geo.lat}}</div>\n          <div>{{user.address.geo.lng}}</div>\n        </div>\n      </div>\n      <div class=\"user-details-item\">\n        <div>phone</div>\n        <div>{{user.phone}}</div>\n      </div>\n      <div class=\"user-details-item\">\n        <div>website</div>\n        <div>{{user.website}}</div>\n      </div>\n      <div class=\"user-details-item\">\n        <div>company</div>\n        <div>\n          <div>{{user.company.name}}</div>\n          <div>{{user.company.catchPhrase}}</div>\n          <div>{{user.company.bs}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"btns\">\n       <input class=\"copy-btn button\" type=\"button\" role=\"button\" [value]=\"popup.copyState? 'Скопировано' : 'Скопировать id'\"\n       [appCopyClipboard]=\"user.id\"\n       (copied)=\"copy($event)\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/popup/popup.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/popup/popup.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-bg {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.popup {\n  background-color: #747474;\n  padding: 20px;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 18px;\n  position: relative;\n  max-width: 90%; }\n\n.popup .popup-btn-close {\n    width: 25px;\n    height: 25px;\n    position: absolute;\n    top: 20px;\n    font-family: Arial;\n    right: 20px;\n    background: #ddd;\n    border-radius: 50%;\n    cursor: pointer;\n    color: #000;\n    text-align: center;\n    line-height: 26px;\n    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0);\n    transition: all 0.5s ease; }\n\n.popup .popup-btn-close:hover {\n      box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5); }\n\n.popup .popup-title {\n    font-size: 22px;\n    text-align: center;\n    font-weight: bold; }\n\n.popup .user-details {\n    display: flex; }\n\n.popup .user-details-item {\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n    text-align: center;\n    font-size: 16px; }\n\n.popup .user-details-item > div:first-child {\n      font-weight: bold;\n      font-size: 18px; }\n\n@media screen and (max-width: 960px) {\n    .popup .user-details {\n      flex-direction: column; }\n      .popup .user-details .user-details-item {\n        padding-bottom: 0; } }\n\n.popup .btns {\n    display: flex;\n    justify-content: center;\n    padding-top: 25px; }\n\n.popup .btns button {\n      margin: 10px; }\n\n.popup .button {\n    font-size: 16px;\n    font-weight: bold;\n    letter-spacing: 0.05em;\n    text-transform: uppercase;\n    color: #59460c;\n    border-radius: 6px;\n    padding: 5px 15px;\n    border: none;\n    border-bottom: solid 1px #59460c;\n    transition: all 0.5s ease;\n    cursor: pointer;\n    background-color: #fbaf55;\n    box-shadow: 2px 2px 2px rgba(89, 70, 12, 0.9); }\n\n.popup .button:hover {\n      -webkit-transform: translateY(-1px);\n      transform: translateY(-1px);\n      box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC9DOlxcVXNlcnNcXGljaGVybmVua29cXEdvb2dsZSDQlNC40YHQulxcU2tpbGxVcFxcVXNlci9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9wdXBcXHBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUVuQjtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFQaEI7SUFVSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMseUJBQXlCLEVBQUE7O0FBdkI3QjtNQTBCTSwwQ0FBMEMsRUFBQTs7QUExQmhEO0lBK0JJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7O0FBakNyQjtJQW9DSSxhQUFhLEVBQUE7O0FBcENqQjtJQXdDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBOztBQTVDbkI7TUErQ00saUJBQWlCO01BQ2pCLGVBQWUsRUFBQTs7QUFHbkI7SUFuREY7TUFxRE0sc0JBQXNCLEVBQUE7TUFyRDVCO1FBdURRLGlCQUFpQixFQUFBLEVBQ2xCOztBQXhEUDtJQTRESSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQixFQUFBOztBQTlEckI7TUFnRU0sWUFBWSxFQUFBOztBQWhFbEI7SUFxRUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNkNBQTZDLEVBQUE7O0FBakZqRDtNQW9GTSxtQ0FBbUM7TUFDbkMsMkJBQTJCO01BQzNCLDBDQUEwQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVhay1zbWFsbDogOTYwcHg7XHJcblxyXG4ucG9wdXAtYmcge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuICAucG9wdXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzQ3NDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG5cclxuICAgIC5wb3B1cC1idG4tY2xvc2Uge1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICByaWdodDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBvcHVwLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLnVzZXItZGV0YWlscyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItZGV0YWlscy1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgICA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHtcclxuICAgICAgLnVzZXItZGV0YWlscyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAudXNlci1kZXRhaWxzLWl0ZW0ge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICM1OTQ2MGM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM1OTQ2MGM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYWY1NTtcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSg4OSwgNzAsIDEyLCAwLjkpO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/popup/popup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/popup/popup.component.ts ***!
  \*****************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ "./src/app/components/popup/popup.ts");




var PopupComponent = /** @class */ (function () {
    function PopupComponent(store) {
        this.store = store;
        this.copyState = false;
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent.prototype.close = function () {
        this.popup.open = false;
        this.popup.copyState = false;
    };
    PopupComponent.prototype.copy = function (event) {
        this.popup.copyState = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopupComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _popup__WEBPACK_IMPORTED_MODULE_3__["Popup"])
    ], PopupComponent.prototype, "popup", void 0);
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/components/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.scss */ "./src/app/components/popup/popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/components/popup/popup.ts":
/*!*******************************************!*\
  !*** ./src/app/components/popup/popup.ts ***!
  \*******************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
var Popup = /** @class */ (function () {
    function Popup() {
    }
    return Popup;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-container\">\n  <div class=\"user-field\">\n    <span class=\"user-field-value\">{{ user.name }}</span>\n  </div>\n  <div class=\"btns\">\n    <button (click)=\"openPopup(user, $event)\" class=\"button\">Показать Еще</button>\n  </div>\n</div>\n\n<app-popup *ngIf=\"popup && popup.open\" [popup]=\"popup\" [user]=\"user\">\n</app-popup>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-field {\n  font-size: 22px;\n  text-align: center;\n  padding-bottom: 30px; }\n\n.btns {\n  display: flex;\n  justify-content: center; }\n\n.btns button {\n    margin: 10px; }\n\n.button {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #59460c;\n  border-radius: 6px;\n  padding: 5px 15px;\n  border: none;\n  border-bottom: solid 1px #59460c;\n  transition: all 0.5s ease;\n  cursor: pointer;\n  background-color: #fbaf55;\n  box-shadow: 2px 2px 2px rgba(89, 70, 12, 0.9); }\n\n.button:hover {\n    -webkit-transform: translateY(-1px);\n    transform: translateY(-1px);\n    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL0M6XFxVc2Vyc1xcaWNoZXJuZW5rb1xcR29vZ2xlINCU0LjRgdC6XFxTa2lsbFVwXFxVc2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRnpCO0lBS0ksWUFBWSxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDZDQUE2QyxFQUFBOztBQWIvQztJQWdCSSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDBDQUEwQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4uYnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzU5NDYwYztcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNTk0NjBjO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmFmNTU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSg4OSwgNzAsIDEyLCAwLjkpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var _actions_user_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user-api */ "./src/app/actions/user-api.ts");





var TITLE_KEY = 'Title';
var UserComponent = /** @class */ (function () {
    function UserComponent(store) {
        this.store = store;
        this.user$ = this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["getUserState"]);
        this.user = {};
        this.popup = {
            open: false,
            copyState: false
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _actions_user_api__WEBPACK_IMPORTED_MODULE_4__["RequestUser"]());
        this.userSubscription = this.user$.subscribe(function (user) { return _this.user = user; });
    };
    UserComponent.prototype.openPopup = function (user, event) {
        this.popup.open = true;
        event.stopPropagation();
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/effects/user-api-effects.ts":
/*!*********************************************!*\
  !*** ./src/app/effects/user-api-effects.ts ***!
  \*********************************************/
/*! exports provided: UserApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiEffects", function() { return UserApiEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_user_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/user-api.service */ "./src/app/shared/services/user-api.service.ts");
/* harmony import */ var _actions_user_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/user-api */ "./src/app/actions/user-api.ts");







var UserApiEffects = /** @class */ (function () {
    function UserApiEffects(actions$, userApiServ) {
        var _this = this;
        this.actions$ = actions$;
        this.userApiServ = userApiServ;
        this.requestUser$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_api__WEBPACK_IMPORTED_MODULE_6__["REQUEST_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (actions) { return _this.userApiServ.getDefaultUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (user) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_api__WEBPACK_IMPORTED_MODULE_6__["RecieveUser"](user)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_api__WEBPACK_IMPORTED_MODULE_6__["RequestFailed"](err));
        })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], UserApiEffects.prototype, "requestUser$", void 0);
    UserApiEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _shared_services_user_api_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"]])
    ], UserApiEffects);
    return UserApiEffects;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, getUserState, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _user_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-api */ "./src/app/reducers/user-api.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");


var reducers = {
    user: _user_api__WEBPACK_IMPORTED_MODULE_0__["reducer"],
};
var getUserState = function (state) { return state.user; };
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/reducers/user-api.ts":
/*!**************************************!*\
  !*** ./src/app/reducers/user-api.ts ***!
  \**************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_user_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user-api */ "./src/app/actions/user-api.ts");

function reducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions_user_api__WEBPACK_IMPORTED_MODULE_0__["RECIEVE_USER"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/directives/copy-clipboard.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/copy-clipboard.directive.ts ***!
  \***************************************************************/
/*! exports provided: CopyClipboardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyClipboardDirective", function() { return CopyClipboardDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CopyClipboardDirective = /** @class */ (function () {
    function CopyClipboardDirective() {
        this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CopyClipboardDirective.prototype.onClick = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.payload) {
            return;
        }
        var listener = function (e) {
            var clipboard = e.clipboardData || window['clipboardData'];
            clipboard.setData('text', _this.payload.toString());
            e.preventDefault();
            _this.copied.emit(_this.payload);
        };
        document.addEventListener('copy', listener, false);
        document.execCommand('copy');
        document.removeEventListener('copy', listener, false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appCopyClipboard'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CopyClipboardDirective.prototype, "payload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('context'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CopyClipboardDirective.prototype, "context", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('copied'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CopyClipboardDirective.prototype, "copied", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CopyClipboardDirective.prototype, "onClick", null);
    CopyClipboardDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appCopyClipboard]' })
    ], CopyClipboardDirective);
    return CopyClipboardDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/outside.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/outside.directive.ts ***!
  \********************************************************/
/*! exports provided: OutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideDirective", function() { return OutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OutsideDirective = /** @class */ (function () {
    function OutsideDirective(elementRef) {
        this.elementRef = elementRef;
        this.clickedOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OutsideDirective.prototype.onClick = function ($event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.clickedOutside.emit();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OutsideDirective.prototype, "clickedOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], OutsideDirective.prototype, "onClick", null);
    OutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appOutside]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], OutsideDirective);
    return OutsideDirective;
}());



/***/ }),

/***/ "./src/app/shared/services/api-config.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/api-config.ts ***!
  \***********************************************/
/*! exports provided: API_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CONFIG", function() { return API_CONFIG; });
var API_CONFIG = {
    BASE_URL: 'https://jsonplaceholder.typicode.com/users'
};


/***/ }),

/***/ "./src/app/shared/services/default-user.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/default-user.ts ***!
  \*************************************************/
/*! exports provided: DEFAULT_USER_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_USER_ID", function() { return DEFAULT_USER_ID; });
var DEFAULT_USER_ID = '1';


/***/ }),

/***/ "./src/app/shared/services/user-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/user-api.service.ts ***!
  \*****************************************************/
/*! exports provided: UserApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _default_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-user */ "./src/app/shared/services/default-user.ts");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-config */ "./src/app/shared/services/api-config.ts");







var UserApiService = /** @class */ (function () {
    function UserApiService(http) {
        this.http = http;
    }
    UserApiService.prototype.getDefaultUser = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.getUserById(_default_user__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_USER_ID"]));
    };
    UserApiService.prototype.getUserById = function (userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(_api_config__WEBPACK_IMPORTED_MODULE_6__["API_CONFIG"].BASE_URL + "/" + userId)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    UserApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    UserApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserApiService);
    return UserApiService;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ichernenko\Google Диск\SkillUp\User\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map