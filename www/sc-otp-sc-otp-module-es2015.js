(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sc-otp-sc-otp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sc-otp/sc-otp.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sc-otp/sc-otp.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Header-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title><p align=\"center\">Step 1/2</p></ion-title>\n  </ion-toolbar>\n</ion-header>\n<!--End Header-->\n\n<!--OTP Page Content-->\n<ion-content>\n  <section>\n  <div class=\"row\">\n    <div class=\"img_main\"><img src=\"../../assets/img/step01.png\" /></div>\n    <div class=\"reg_cnt padding\">\n        <h1>Registration</h1>\n        <p>Enter your mobile number, we will send you OTP to create your account.</p>\n    </div>\n    <div class=\"padding\">\n      <div class=\"input_no\">\n          <img src=\"../../assets/img/Saudi_flag.png\" width=\"9%\"/><span>(+966)</span>\n          <span><ion-input type=\"number\" placeholder=\"50 xxx xxxx\" maxlength=\"9\"></ion-input></span>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Start Button Content-->\n  <section>\n      <div class=\"row\">\n        <div class=\"padding\">\n            <button ion-button class=\"btn_default btn_active\" expand=\"block\" routerLink=\"/sc-otp-code\" routerDirection=\"forward\">Continue</button>\n        </div>\n      </div>\n    </section>\n<!--End Button Content-->\n</ion-content>\n<!--End Page Content-->"

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

module.exports = ".reg_cnt {\n  font-family: \"Avenir\";\n  text-align: center;\n}\n.reg_cnt h1 {\n  color: #00243c;\n  font-size: 22px;\n  font-weight: 800;\n}\n.reg_cnt p {\n  color: #8d8d8d;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 300;\n  padding-bottom: 45px;\n}\n.input_no {\n  border: solid 1px #00243c;\n  display: -webkit-box;\n  display: flex;\n  vertical-align: middle;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 8px 10px;\n  border-radius: 4px;\n  font-family: \"Avenir-Roman\";\n  font-size: 14px;\n  font-weight: normal;\n}\n.input_no img {\n  margin-right: 6px;\n}\n.input_no span {\n  margin-right: 10px;\n}\n.img_main {\n  text-align: center;\n  margin-top: 33px;\n  margin-bottom: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdWhhbW1hZHVzbWFuc2lkZGlxdWkvdGFta2Vlbl9jYXJlL1RhbWtlZW5fQ2FyZS9zcmMvYXBwL3NjLW90cC9zYy1vdHAucGFnZS5zY3NzIiwic3JjL2FwcC9zYy1vdHAvc2Mtb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER0k7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0RSO0FES0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FESUk7RUFDSSxpQkFBQTtBQ0ZSO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FEUUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3NjLW90cC9zYy1vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ19jbnQge1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAjMDAyNDNjO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjOGQ4ZDhkO1xuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbiAgICB9XG59XG5cbi5pbnB1dF9ub3tcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDAyNDNjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pci1Sb21hbic7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbn1cblxuLmltZ19tYWluIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufSIsIi5yZWdfY250IHtcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdfY250IGgxIHtcbiAgY29sb3I6ICMwMDI0M2M7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5yZWdfY250IHAge1xuICBjb2xvcjogIzhkOGQ4ZDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG59XG5cbi5pbnB1dF9ubyB7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDI0M2M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1Sb21hblwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uaW5wdXRfbm8gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uaW5wdXRfbm8gc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmltZ19tYWluIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufSJdfQ== */"

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