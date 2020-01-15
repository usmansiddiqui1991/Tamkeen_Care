(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sc-welcome-sc-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sc-welcome/sc-welcome.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sc-welcome/sc-welcome.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"bg-image\">\n<!--Start Main Content-->  \n  <section>\n    <div class=\"row\">\n      <div class=\"container\">\n        <div class=\"sc_wel\">\n          <h1>Tamkeen Inter.</h1>\n          <h3>Welcome to Tamkeen Care.</h3>\n          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>\n        </div>  \n      </div>\n    </div>\n  </section>\n<!--End Main Content-->\n<!--Start Button Content--> \n  <section>\n    <div class=\"row\">\n      <div class=\"container\">\n        <button ion-button class=\"btn_primary\">Let's Begin</button>\n        <button ion-button class=\"btn_secondary\">ھیانبد</button>\n      </div>\n    </div>\n  </section>\n<!--End Button Content-->  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/sc-welcome/sc-welcome-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sc-welcome/sc-welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ScWelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScWelcomePageRoutingModule", function() { return ScWelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sc_welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sc-welcome.page */ "./src/app/sc-welcome/sc-welcome.page.ts");




var routes = [
    {
        path: '',
        component: _sc_welcome_page__WEBPACK_IMPORTED_MODULE_3__["ScWelcomePage"]
    }
];
var ScWelcomePageRoutingModule = /** @class */ (function () {
    function ScWelcomePageRoutingModule() {
    }
    ScWelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ScWelcomePageRoutingModule);
    return ScWelcomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/sc-welcome/sc-welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sc-welcome/sc-welcome.module.ts ***!
  \*************************************************/
/*! exports provided: ScWelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScWelcomePageModule", function() { return ScWelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sc_welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sc-welcome-routing.module */ "./src/app/sc-welcome/sc-welcome-routing.module.ts");
/* harmony import */ var _sc_welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sc-welcome.page */ "./src/app/sc-welcome/sc-welcome.page.ts");







var ScWelcomePageModule = /** @class */ (function () {
    function ScWelcomePageModule() {
    }
    ScWelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _sc_welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScWelcomePageRoutingModule"]
            ],
            declarations: [_sc_welcome_page__WEBPACK_IMPORTED_MODULE_6__["ScWelcomePage"]]
        })
    ], ScWelcomePageModule);
    return ScWelcomePageModule;
}());



/***/ }),

/***/ "./src/app/sc-welcome/sc-welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/sc-welcome/sc-welcome.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #00243C;\n  background: url('sc_welcome.png');\n}\n\n.sc_wel {\n  color: #fff;\n  padding-top: 40%;\n  font-family: Avenir;\n}\n\n.sc_wel h1 {\n  font-size: 24px;\n  font-weight: 900;\n}\n\n.sc_wel h3 {\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 0px;\n}\n\n.sc_wel p {\n  font-size: 16px;\n  font-weight: 300;\n  margin-top: 9px;\n  text-align: justify;\n  color: #d9d9d9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdWhhbW1hZHVzbWFuc2lkZGlxdWkvdGFta2Vlbl9jYXJlL1RhbWtlZW5fQ2FyZS9zcmMvYXBwL3NjLXdlbGNvbWUvc2Mtd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NjLXdlbGNvbWUvc2Mtd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBWSwrQkFBQTtFQUFrQyxpQ0FBQTtBQ0U5Qzs7QURFQTtFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0g7O0FEQ0c7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0c7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zYy13ZWxjb21lL3NjLXdlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudHstLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAgIzAwMjQzQzsgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL3NjX3dlbGNvbWUucG5nJyk7fVxuXG5cblxuLnNjX3dlbCB7XG4gICBjb2xvcjogI2ZmZjsgXG4gICBwYWRkaW5nLXRvcDogNDAlO1xuICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcblxuICAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgfVxuXG4gICBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgfVxuXG4gICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBjb2xvcjogI2Q5ZDlkOTtcbiAgIH1cblxufVxuXG5cbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMjQzQztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9zY193ZWxjb21lLnBuZ1wiKTtcbn1cblxuLnNjX3dlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogNDAlO1xuICBmb250LWZhbWlseTogQXZlbmlyO1xufVxuLnNjX3dlbCBoMSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5zY193ZWwgaDMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zY193ZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogI2Q5ZDlkOTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sc-welcome/sc-welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/sc-welcome/sc-welcome.page.ts ***!
  \***********************************************/
/*! exports provided: ScWelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScWelcomePage", function() { return ScWelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScWelcomePage = /** @class */ (function () {
    function ScWelcomePage() {
    }
    ScWelcomePage.prototype.ngOnInit = function () {
    };
    ScWelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sc-welcome',
            template: __webpack_require__(/*! raw-loader!./sc-welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/sc-welcome/sc-welcome.page.html"),
            styles: [__webpack_require__(/*! ./sc-welcome.page.scss */ "./src/app/sc-welcome/sc-welcome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScWelcomePage);
    return ScWelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=sc-welcome-sc-welcome-module-es5.js.map