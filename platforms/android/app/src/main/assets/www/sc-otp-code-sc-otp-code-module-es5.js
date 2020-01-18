(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sc-otp-code-sc-otp-code-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sc-otp-code/sc-otp-code.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sc-otp-code/sc-otp-code.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Header-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title><p align=\"center\">Step 2/2</p></ion-title>\n  </ion-toolbar>\n</ion-header>\n<!--End Header-->\n\n<!--OTP Page Content-->\n<ion-content>\n  <section>\n  <div class=\"row\">\n    <div class=\"img_main\"><img src=\"../../assets/img/step02.png\" /></div>\n    <div class=\"reg_cnt padding\">\n        <h1>Verification</h1>\n        <p>Enter 4 digit number that sent to <br>\n        <span>+966 50 806 1029</span></p>\n    </div>\n    <div class=\"padding_cus\">\n      <div class=\"input_no\">\n        <ion-input type=\"text\" class=\"otp_code\" placeholder=\"0\" maxlength=\"1\"></ion-input>\n        <ion-input type=\"text\" class=\"otp_code\" placeholder=\"0\" maxlength=\"1\"></ion-input>\n        <ion-input type=\"text\" class=\"otp_code\" placeholder=\"0\" maxlength=\"1\"></ion-input>\n        <ion-input type=\"text\" class=\"otp_code\" placeholder=\"0\" maxlength=\"1\"></ion-input>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <h4 class=\"resend\">Re-send code in 0:30</h4>\n  </div>\n</section>\n<!--Start Button Content-->\n  <section>\n      <div class=\"row\">\n        <div class=\"padding\">\n            <button ion-button class=\"btn_default btn_active\" expand=\"block\" routerLink=\"/sc-otp-code\" routerDirection=\"forward\">Continue</button>\n        </div>\n      </div>\n    </section>\n<!--End Button Content-->\n</ion-content>\n<!--End Page Content-->"

/***/ }),

/***/ "./src/app/sc-otp-code/sc-otp-code-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/sc-otp-code/sc-otp-code-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ScOtpCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScOtpCodePageRoutingModule", function() { return ScOtpCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sc_otp_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sc-otp-code.page */ "./src/app/sc-otp-code/sc-otp-code.page.ts");




var routes = [
    {
        path: '',
        component: _sc_otp_code_page__WEBPACK_IMPORTED_MODULE_3__["ScOtpCodePage"]
    }
];
var ScOtpCodePageRoutingModule = /** @class */ (function () {
    function ScOtpCodePageRoutingModule() {
    }
    ScOtpCodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ScOtpCodePageRoutingModule);
    return ScOtpCodePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/sc-otp-code/sc-otp-code.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sc-otp-code/sc-otp-code.module.ts ***!
  \***************************************************/
/*! exports provided: ScOtpCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScOtpCodePageModule", function() { return ScOtpCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sc_otp_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sc-otp-code-routing.module */ "./src/app/sc-otp-code/sc-otp-code-routing.module.ts");
/* harmony import */ var _sc_otp_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sc-otp-code.page */ "./src/app/sc-otp-code/sc-otp-code.page.ts");







var ScOtpCodePageModule = /** @class */ (function () {
    function ScOtpCodePageModule() {
    }
    ScOtpCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _sc_otp_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScOtpCodePageRoutingModule"]
            ],
            declarations: [_sc_otp_code_page__WEBPACK_IMPORTED_MODULE_6__["ScOtpCodePage"]]
        })
    ], ScOtpCodePageModule);
    return ScOtpCodePageModule;
}());



/***/ }),

/***/ "./src/app/sc-otp-code/sc-otp-code.page.scss":
/*!***************************************************!*\
  !*** ./src/app/sc-otp-code/sc-otp-code.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg_cnt {\n  font-family: \"Avenir\";\n  text-align: center;\n}\n.reg_cnt h1 {\n  color: #00243c;\n  font-size: 22px;\n  font-weight: 800;\n}\n.reg_cnt p {\n  color: #8d8d8d;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 300;\n  padding-bottom: 45px;\n}\n.reg_cnt p span {\n  color: #ee6623;\n  font-weight: 600;\n  line-height: 28px;\n}\n.input_no {\n  display: -webkit-box;\n  display: flex;\n  vertical-align: middle;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 8px 10px;\n  border-radius: 4px;\n  font-family: \"Avenir-Roman\";\n  font-size: 14px;\n  font-weight: 700;\n}\n.input_no ion-input {\n  border: solid 1px #00243c;\n  text-align: center;\n  margin-left: 8px;\n  border-radius: 4px;\n  font-family: \"Avenir-Roman\";\n  font-size: 14px;\n}\n.input_no img {\n  margin-right: 6px;\n}\n.input_no span {\n  margin-right: 10px;\n}\n.padding_cus {\n  padding: 0px 54px;\n}\n.img_main {\n  text-align: center;\n  margin-top: 33px;\n  margin-bottom: 18px;\n}\n.sc-ion-input-md-h {\n  --padding-top: 16px;\n  --padding-end: 0;\n  --padding-bottom: 16px;\n  --padding-start: 0px;\n}\n.resend {\n  font-family: Avenir-Roman;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  color: #ee6623;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdWhhbW1hZHVzbWFuc2lkZGlxdWkvdGFta2Vlbl9jYXJlL1RhbWtlZW5fQ2FyZS9zcmMvYXBwL3NjLW90cC1jb2RlL3NjLW90cC1jb2RlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2Mtb3RwLWNvZGUvc2Mtb3RwLWNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQVI7QURHSTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDRFI7QURHUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRFo7QURNQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FES0k7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0hSO0FET0k7RUFDSSxpQkFBQTtBQ0xSO0FEUUk7RUFDSSxrQkFBQTtBQ05SO0FEV0E7RUFBYSxpQkFBQTtBQ1BiO0FEU0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjtBRFNBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3NjLW90cC1jb2RlL3NjLW90cC1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdfY250IHtcbiAgICBcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pcic7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaDEge1xuICAgICAgICBjb2xvcjogIzAwMjQzYztcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBjb2xvcjogIzhkOGQ4ZDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogI2VlNjYyMztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmlucHV0X25vIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXItUm9tYW4nO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMjQzYztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyLVJvbWFuJztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgfVxuICAgIFxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG59XG5cbi5wYWRkaW5nX2N1c3twYWRkaW5nOiAwcHggNTRweDt9XG5cbi5pbWdfbWFpbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLnJlc2VuZCB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pci1Sb21hbjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNlZTY2MjM7XG59IiwiLnJlZ19jbnQge1xuICBmb250LWZhbWlseTogXCJBdmVuaXJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ19jbnQgaDEge1xuICBjb2xvcjogIzAwMjQzYztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLnJlZ19jbnQgcCB7XG4gIGNvbG9yOiAjOGQ4ZDhkO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbn1cbi5yZWdfY250IHAgc3BhbiB7XG4gIGNvbG9yOiAjZWU2NjIzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuLmlucHV0X25vIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLVJvbWFuXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5pbnB1dF9ubyBpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDAyNDNjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLVJvbWFuXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pbnB1dF9ubyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5pbnB1dF9ubyBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucGFkZGluZ19jdXMge1xuICBwYWRkaW5nOiAwcHggNTRweDtcbn1cblxuLmltZ19tYWluIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLnJlc2VuZCB7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXItUm9tYW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlNjYyMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sc-otp-code/sc-otp-code.page.ts":
/*!*************************************************!*\
  !*** ./src/app/sc-otp-code/sc-otp-code.page.ts ***!
  \*************************************************/
/*! exports provided: ScOtpCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScOtpCodePage", function() { return ScOtpCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScOtpCodePage = /** @class */ (function () {
    function ScOtpCodePage() {
    }
    ScOtpCodePage.prototype.ngOnInit = function () {
    };
    ScOtpCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sc-otp-code',
            template: __webpack_require__(/*! raw-loader!./sc-otp-code.page.html */ "./node_modules/raw-loader/index.js!./src/app/sc-otp-code/sc-otp-code.page.html"),
            styles: [__webpack_require__(/*! ./sc-otp-code.page.scss */ "./src/app/sc-otp-code/sc-otp-code.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScOtpCodePage);
    return ScOtpCodePage;
}());



/***/ })

}]);
//# sourceMappingURL=sc-otp-code-sc-otp-code-module-es5.js.map