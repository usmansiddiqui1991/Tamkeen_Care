(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sc-sliders-sc-sliders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sc-sliders/sc-sliders.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sc-sliders/sc-sliders.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-slides pager=\"true\">\n      <ion-slide>\n        <div class=\"row\">\n            <img src=\"../../assets/img/Slide01.png\" class=\"img_slider\"/>\n                \n            <div class=\"slider_cont\">\n                <h1>Real-Time Tracking</h1>\n                <p>Book experienced technician for you services in Home or Office, Instantly!</p>\n                <button ion-button class=\"button button-block button-energized\" expand=\"block\" routerLink=\"/sc-welcome\" routerDirection=\"backward\">Skip Tutorial</button>\n            </div>\n        </div> \n      </ion-slide>\n  \n      <ion-slide>\n        <div class=\"row\">\n            <img src=\"../../assets/img/Slide02.png\" class=\"img_slider\"/>\n                \n            <div class=\"slider_cont\">\n                <h1>Date & Time Mangement</h1>\n                <p>Book experienced technician for you services in Home or Office, Instantly!</p>\n                <button ion-button class=\"button button-block button-energized\" expand=\"block\" routerLink=\"/sc-welcome\" routerDirection=\"backward\">Book Your Technician Now</button>\n            </div>\n        </div> \n      </ion-slide>\n  \n      <ion-slide>\n        <div class=\"row\">\n            <img src=\"../../assets/img/Slide03.png\" class=\"img_slider\"/>\n                \n            <div class=\"slider_cont\">\n                <h1>Tamkeen Users</h1>\n                <p>Book experienced technician for you services in Home or Office, Instantly!</p>\n                <button ion-button class=\"button button-block button-energized\" expand=\"block\" routerLink=\"/sc-welcome\" routerDirection=\"backward\">Book Your Technician Now</button>\n            </div>\n        </div> \n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/sc-sliders/sc-sliders-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sc-sliders/sc-sliders-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ScSlidersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScSlidersPageRoutingModule", function() { return ScSlidersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sc_sliders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sc-sliders.page */ "./src/app/sc-sliders/sc-sliders.page.ts");




const routes = [
    {
        path: '',
        component: _sc_sliders_page__WEBPACK_IMPORTED_MODULE_3__["ScSlidersPage"]
    }
];
let ScSlidersPageRoutingModule = class ScSlidersPageRoutingModule {
};
ScSlidersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScSlidersPageRoutingModule);



/***/ }),

/***/ "./src/app/sc-sliders/sc-sliders.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sc-sliders/sc-sliders.module.ts ***!
  \*************************************************/
/*! exports provided: ScSlidersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScSlidersPageModule", function() { return ScSlidersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sc_sliders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sc-sliders-routing.module */ "./src/app/sc-sliders/sc-sliders-routing.module.ts");
/* harmony import */ var _sc_sliders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sc-sliders.page */ "./src/app/sc-sliders/sc-sliders.page.ts");







let ScSlidersPageModule = class ScSlidersPageModule {
};
ScSlidersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sc_sliders_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScSlidersPageRoutingModule"]
        ],
        declarations: [_sc_sliders_page__WEBPACK_IMPORTED_MODULE_6__["ScSlidersPage"]]
    })
], ScSlidersPageModule);



/***/ }),

/***/ "./src/app/sc-sliders/sc-sliders.page.scss":
/*!*************************************************!*\
  !*** ./src/app/sc-sliders/sc-sliders.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_slider {\n  margin-bottom: 80%;\n}\n\n.slider_cont {\n  bottom: 0;\n  box-shadow: 0 0 19px 6px rgba(0, 0, 0, 0.05);\n  position: absolute;\n  background: #fff;\n  padding: 0px 25px;\n  font-family: \"Avenir\";\n}\n\n.slider_cont h1 {\n  color: #00243c;\n  font-size: 22px;\n  font-weight: 800;\n  padding-top: 62px;\n}\n\n.slider_cont p {\n  color: #8d8d8d;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 300;\n  padding-bottom: 56px;\n}\n\n.slider_cont button {\n  color: #ef6419;\n  background: transparent;\n  font-size: 16px;\n  font-weight: 600;\n  padding-bottom: 70px;\n}\n\nion-slide {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdWhhbW1hZHVzbWFuc2lkZGlxdWkvdGFta2Vlbl9jYXJlL1RhbWtlZW5fQ2FyZS9zcmMvYXBwL3NjLXNsaWRlcnMvc2Mtc2xpZGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NjLXNsaWRlcnMvc2Mtc2xpZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxrQkFBQTtBQ0ViOztBREFBO0VBQ0ksU0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNHSjs7QURESTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dSOztBREFJO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNFUjs7QURDSTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQ1I7O0FES0E7RUFBVyxhQUFBO0FDRFgiLCJmaWxlIjoic3JjL2FwcC9zYy1zbGlkZXJzL3NjLXNsaWRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ19zbGlkZXIge21hcmdpbi1ib3R0b206IDgwJTt9XG5cbi5zbGlkZXJfY29udCB7XG4gICAgYm90dG9tOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxOXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJztcblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICMwMDI0M2M7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDYycHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjOGQ4ZDhkO1xuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTZweDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBjb2xvcjogI2VmNjQxOTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG4gICAgfVxuXG59XG5cblxuaW9uLXNsaWRlIHtoZWlnaHQ6IDEwMHZoO31cblxuIiwiLmltZ19zbGlkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4MCU7XG59XG5cbi5zbGlkZXJfY29udCB7XG4gIGJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDE5cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pclwiO1xufVxuLnNsaWRlcl9jb250IGgxIHtcbiAgY29sb3I6ICMwMDI0M2M7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZy10b3A6IDYycHg7XG59XG4uc2xpZGVyX2NvbnQgcCB7XG4gIGNvbG9yOiAjOGQ4ZDhkO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWJvdHRvbTogNTZweDtcbn1cbi5zbGlkZXJfY29udCBidXR0b24ge1xuICBjb2xvcjogI2VmNjQxOTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGhlaWdodDogMTAwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/sc-sliders/sc-sliders.page.ts":
/*!***********************************************!*\
  !*** ./src/app/sc-sliders/sc-sliders.page.ts ***!
  \***********************************************/
/*! exports provided: ScSlidersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScSlidersPage", function() { return ScSlidersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScSlidersPage = class ScSlidersPage {
    constructor() { }
    ngOnInit() {
    }
};
ScSlidersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sc-sliders',
        template: __webpack_require__(/*! raw-loader!./sc-sliders.page.html */ "./node_modules/raw-loader/index.js!./src/app/sc-sliders/sc-sliders.page.html"),
        styles: [__webpack_require__(/*! ./sc-sliders.page.scss */ "./src/app/sc-sliders/sc-sliders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ScSlidersPage);



/***/ })

}]);
//# sourceMappingURL=sc-sliders-sc-sliders-module-es2015.js.map