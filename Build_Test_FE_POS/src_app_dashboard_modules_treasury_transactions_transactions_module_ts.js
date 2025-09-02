"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_treasury_transactions_transactions_module_ts"],{

/***/ 40627:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/transactions/transactions-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsRoutingModule": () => (/* binding */ TransactionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _transactions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions.component */ 25163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _transactions_component__WEBPACK_IMPORTED_MODULE_0__.TransactionsComponent
}];
class TransactionsRoutingModule {}
TransactionsRoutingModule.ɵfac = function TransactionsRoutingModule_Factory(t) {
  return new (t || TransactionsRoutingModule)();
};
TransactionsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: TransactionsRoutingModule
});
TransactionsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TransactionsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 25163:
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/transactions/transactions.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsComponent": () => (/* binding */ TransactionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TransactionsComponent {}
TransactionsComponent.ɵfac = function TransactionsComponent_Factory(t) {
  return new (t || TransactionsComponent)();
};
TransactionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TransactionsComponent,
  selectors: [["app-transactions"]],
  decls: 2,
  vars: 0,
  template: function TransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "transactions works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 88552:
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/transactions/transactions.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsModule": () => (/* binding */ TransactionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions-routing.module */ 40627);
/* harmony import */ var _transactions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.component */ 25163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class TransactionsModule {}
TransactionsModule.ɵfac = function TransactionsModule_Factory(t) {
  return new (t || TransactionsModule)();
};
TransactionsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: TransactionsModule
});
TransactionsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionsRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TransactionsModule, {
    declarations: [_transactions_component__WEBPACK_IMPORTED_MODULE_1__.TransactionsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_treasury_transactions_transactions_module_ts.js.map