"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_auth_create-password_create-password_module_ts"],{

/***/ 3327:
/*!************************************************************************!*\
  !*** ./src/app/auth/create-password/create-password-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePasswordRoutingModule": () => (/* binding */ CreatePasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _create_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-password.component */ 36424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _create_password_component__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordComponent
}];
class CreatePasswordRoutingModule {}
CreatePasswordRoutingModule.ɵfac = function CreatePasswordRoutingModule_Factory(t) {
  return new (t || CreatePasswordRoutingModule)();
};
CreatePasswordRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CreatePasswordRoutingModule
});
CreatePasswordRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CreatePasswordRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 36424:
/*!*******************************************************************!*\
  !*** ./src/app/auth/create-password/create-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePasswordComponent": () => (/* binding */ CreatePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CreatePasswordComponent {}
CreatePasswordComponent.ɵfac = function CreatePasswordComponent_Factory(t) {
  return new (t || CreatePasswordComponent)();
};
CreatePasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CreatePasswordComponent,
  selectors: [["app-create-password"]],
  decls: 2,
  vars: 0,
  template: function CreatePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create-password works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 60511:
/*!****************************************************************!*\
  !*** ./src/app/auth/create-password/create-password.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePasswordModule": () => (/* binding */ CreatePasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _create_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-password-routing.module */ 3327);
/* harmony import */ var _create_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-password.component */ 36424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class CreatePasswordModule {}
CreatePasswordModule.ɵfac = function CreatePasswordModule_Factory(t) {
  return new (t || CreatePasswordModule)();
};
CreatePasswordModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CreatePasswordModule
});
CreatePasswordModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _create_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CreatePasswordModule, {
    declarations: [_create_password_component__WEBPACK_IMPORTED_MODULE_1__.CreatePasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _create_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_auth_create-password_create-password_module_ts.js.map