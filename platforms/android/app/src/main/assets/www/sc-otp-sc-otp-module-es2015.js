(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sc-otp-sc-otp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sc-otp/sc-otp.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sc-otp/sc-otp.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>sc-otp</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sc-otp/sc-otp-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sc-otp/sc-otp-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ScOtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScOtpPageRoutingModule", function() { return ScOtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sc_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sc-otp.page */ "./src/app/sc-otp/sc-otp.page.ts");




const routes = [
    {
        path: '',
        component: _sc_otp_page__WEBPACK_IMPORTED_MODULE_3__["ScOtpPage"]
    }
];
let ScOtpPageRoutingModule = class ScOtpPageRoutingModule {
};
ScOtpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScOtpPageRoutingModule);



/***/ }),

/***/ "./src/app/sc-otp/sc-otp.module.ts":
/*!*****************************************!*\
  !*** ./src/app/sc-otp/sc-otp.module.ts ***!
  \*****************************************/
/*! exports provided: ScOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScOtpPageModule", function() { return ScOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sc_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sc-otp-routing.module */ "./src/app/sc-otp/sc-otp-routing.module.ts");
/* harmony import */ var _sc_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sc-otp.page */ "./src/app/sc-otp/sc-otp.page.ts");







let ScOtpPageModule = class ScOtpPageModule {
};
ScOtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sc_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScOtpPageRoutingModule"]
        ],
        declarations: [_sc_otp_page__WEBPACK_IMPORTED_MODULE_6__["ScOtpPage"]]
    })
], ScOtpPageModule);



/***/ }),

/***/ "./src/app/sc-otp/sc-otp.page.scss":
/*!*****************************************!*\
  !*** ./src/app/sc-otp/sc-otp.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjLW90cC9zYy1vdHAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sc-otp/sc-otp.page.ts":
/*!***************************************!*\
  !*** ./src/app/sc-otp/sc-otp.page.ts ***!
  \***************************************/
/*! exports provided: ScOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScOtpPage", function() { return ScOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScOtpPage = class ScOtpPage {
    constructor() { }
    ngOnInit() {
    }
};
ScOtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sc-otp',
        template: __webpack_require__(/*! raw-loader!./sc-otp.page.html */ "./node_modules/raw-loader/index.js!./src/app/sc-otp/sc-otp.page.html"),
        styles: [__webpack_require__(/*! ./sc-otp.page.scss */ "./src/app/sc-otp/sc-otp.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ScOtpPage);



/***/ })

}]);
//# sourceMappingURL=sc-otp-sc-otp-module-es2015.js.map