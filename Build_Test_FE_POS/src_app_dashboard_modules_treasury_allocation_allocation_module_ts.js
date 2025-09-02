"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_treasury_allocation_allocation_module_ts"],{

/***/ 51445:
/*!*************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/allocation-services/allocation.service.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllocationService": () => (/* binding */ AllocationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared.service */ 69082);




class AllocationService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
    this.despositeAmount = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._viewDepositAmount = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._mainFundAlocationOrderItemDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  }
  /**
   * get last allocation orders
   */
  allocationOrdersService(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AllocationOrderDepositCash`, params, this.sharedService.getHeaders());
  }
  getRegisterDirectDeposits(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterDirectDeposits${params}`, this.sharedService.getHeaders());
  }
  getRegisterUnsettledCheques(param) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterUnsettledCheques${param}`, this.sharedService.getHeaders());
  }
  addRegisterDirectCashDepositToMarkaziaAccount(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AddRegisterDirectCashDepositToMarkaziaAccount`, params, this.sharedService.getHeaders());
  }
  addRegisterDirectChequesToMarkaziaAccount(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AddRegisterDirectChequesToMarkaziaAccount`, params, this.sharedService.getHeaders());
  }
  addCashDepositToMarkaziaAccount(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AddCashDepositToMarkaziaAccount`, params, this.sharedService.getHeaders());
  }
  addChequesToMarkaziaAccount(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AddChequesToMarkaziaAccount`, params, this.sharedService.getHeaders());
  }
  allocationOrderDepositCheque(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AllocationOrderDepositCheque`, params, this.sharedService.getHeaders());
  }
  getCashDepositDetails(depositId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetCashDepositDetails?depositeId=${depositId}`, this.sharedService.getHeaders());
  }
  getRegisterDirectCashDepositDetails(depositId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterDirectCashDepositDetails?depositeId=${depositId}`, this.sharedService.getHeaders());
  }
  getMainFundCash() {
    return this.http.get(this.apiUrl + `Mainfund/GetMainFundCash`, this.sharedService.getHeaders());
  }
  getRegisterDirectChequeDepositDetails(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterDirectChequeDepositDetails${params}`, this.sharedService.getHeaders());
  }
  getChequeDepositDetails(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetChequeDepositDetails${params}`, this.sharedService.getHeaders());
  }
  getDepositsById(id, type) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetDeposits?DepositeId=${id}&DepositeType=${type}`, this.sharedService.getHeaders());
  }
  getRegisterDirectDepositsNew(id, type) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterDirectDeposits?DepositeId=${id}&DepositeType=${type}`, this.sharedService.getHeaders());
  }
  getCurrencyList() {
    return this.http.get(this.apiUrl + `Lookups/GetLookups?lookupTypeId=9`, this.sharedService.getHeaders());
  }
  getMainFundSettledCheques(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetMainFundSettledCheques${params}`, this.sharedService.getHeaders());
  }
  getMainFundSettledChequesNew(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetMainFundSettledChequesNew${params}`, this.sharedService.getHeaders());
  }
  getLastAllocation() {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetLastAllocationOrder`, this.sharedService.getHeaders());
  }
  /**
   * get list of allocation order
   */
  getAllocation(pageNo, search, sort) {
    let queryString = `AllocationOrdersService/GetAllocationOrders?PageNo=${pageNo}&PageSize=6&sort=${sort}`;
    if (search) {
      queryString = queryString + `&search=${search}`;
    }
    return this.http.get(this.apiUrl + queryString, this.sharedService.getHeaders());
  }
  //veiw detail get allocation
  getViewDetailAllocation(orderId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetAllocationOrderDetails?OrderId=${orderId}`, this.sharedService.getHeaders());
  }
  getListOfSettledChequesForAllocationOrderDetails(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/ListOfSettledChequesForAllocationOrderDetails${params}`, this.sharedService.getHeaders());
  }
  viewCashAllocationOrderDetailsDeposits(orderId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/ViewCashAllocationOrderDetailsDeposits?allocationOrderDetailsId=${orderId}`, this.sharedService.getHeaders());
  }
  viewChequeAllocationOrderDetailsDeposits(orderId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/ViewChequeAllocationOrderDetailsDeposits?allocationOrderDetailsId=${orderId}`, this.sharedService.getHeaders());
  }
}
AllocationService.ɵfac = function AllocationService_Factory(t) {
  return new (t || AllocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
AllocationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AllocationService,
  factory: AllocationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 38416:
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/allocation/allocation-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllocationRoutingModule": () => (/* binding */ AllocationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _allocation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allocation.component */ 14069);
/* harmony import */ var _components_order_log_details_order_log_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/order-log-details/order-log-details.component */ 78571);
/* harmony import */ var _components_view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view-deposited-cheques/view-deposited-cheques.component */ 33017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: '',
  component: _allocation_component__WEBPACK_IMPORTED_MODULE_0__.AllocationComponent
}, {
  path: 'order-log-detail/:orderId',
  component: _components_order_log_details_order_log_details_component__WEBPACK_IMPORTED_MODULE_1__.OrderLogDetailsComponent
}, {
  path: 'view-deposited-cheques/:orderId',
  component: _components_view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_2__.ViewDepositedChequesComponent
}];
class AllocationRoutingModule {}
AllocationRoutingModule.ɵfac = function AllocationRoutingModule_Factory(t) {
  return new (t || AllocationRoutingModule)();
};
AllocationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AllocationRoutingModule
});
AllocationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AllocationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 14069:
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/allocation/allocation.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllocationComponent": () => (/* binding */ AllocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/header.service */ 36690);
/* harmony import */ var _petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../petty-cash-treasury/services/treasury.service */ 79541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_main_fund_main_fund_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-fund/main-fund.component */ 60639);
/* harmony import */ var _components_create_allocation_create_allocation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-allocation/create-allocation.component */ 85763);
/* harmony import */ var _components_orders_log_orders_log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/orders-log/orders-log.component */ 21334);







function AllocationComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllocationComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.createAlocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Create Allocation Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AllocationComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "main-fund");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function AllocationComponent_ng_container_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "orders-log");
  }
}
function AllocationComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AllocationComponent_ng_container_12_ng_container_1_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AllocationComponent_ng_container_12_ng_template_2_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selected == 1)("ngIfElse", _r7);
  }
}
function AllocationComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "create-allocation");
  }
}
class AllocationComponent {
  constructor(headerService, treasuryService) {
    this.headerService = headerService;
    this.treasuryService = treasuryService;
    this.selected = 1;
    this.headerService.setTitle('Allocation');
  }
  goToPage(value) {
    this.selected = value;
    this.iscreateAllocation = false;
    if (value == 1) this.headerService.setTitle('Allocation');else this.headerService.setTitle('Allocation > Allocation Orders Log');
  }
  createAlocation() {
    this.iscreateAllocation = true;
    this.headerService.setTitle('Allocation > Create Allocation Order');
    this.selected = 0;
  }
}
AllocationComponent.ɵfac = function AllocationComponent_Factory(t) {
  return new (t || AllocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_header_service__WEBPACK_IMPORTED_MODULE_0__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_1__.TreasuryService));
};
AllocationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AllocationComponent,
  selectors: [["app-allocation"]],
  decls: 15,
  vars: 7,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-12", "display-flex"], [1, "branchesTypes"], [1, "btn", "active", 3, "click"], [1, "btn", 3, "click"], [1, "btnadd"], ["class", "btn btn-add", 3, "click", 4, "ngIf"], [1, "col-md-12"], [1, "tab-content"], [4, "ngIf", "ngIfElse"], ["createAllocation", ""], [1, "btn", "btn-add", 3, "click"], ["src", "assets/images/plus.png", "alt", ""], ["ordersLog", ""]],
  template: function AllocationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllocationComponent_Template_button_click_4_listener() {
        return ctx.goToPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Accounts and Main Fund Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllocationComponent_Template_button_click_6_listener() {
        return ctx.goToPage(2);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Allocation Orders Log ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AllocationComponent_button_9_Template, 3, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AllocationComponent_ng_container_12_Template, 4, 2, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AllocationComponent_ng_template_13_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.selected == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.selected == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.iscreateAllocation);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.iscreateAllocation)("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_main_fund_main_fund_component__WEBPACK_IMPORTED_MODULE_2__.MainFundComponent, _components_create_allocation_create_allocation_component__WEBPACK_IMPORTED_MODULE_3__.CreateAllocationComponent, _components_orders_log_orders_log_component__WEBPACK_IMPORTED_MODULE_4__.OrdersLogComponent],
  styles: [".display-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.display-flex[_ngcontent-%COMP%]   .branchesTypes[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.display-flex[_ngcontent-%COMP%]   .branchesTypes[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  border: 0px;\n  padding: 10px 15px;\n  color: #929eae;\n  border-radius: 0px;\n  margin: 0px;\n  border-bottom: 2px solid #f5f5f5;\n}\n.display-flex[_ngcontent-%COMP%]   .branchesTypes[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  color: #000;\n  border-bottom: 2px solid #dc3545;\n}\n\n.sage-bank-account[_ngcontent-%COMP%]   .heading-sage-bank-account[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvdHJlYXN1cnkvYWxsb2NhdGlvbi9hbGxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksYUFBQTtFQUNBLDhCQUFBO0FBREo7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFDUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQ1Y7QUFDUTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtBQUNWOztBQVNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTlIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kaXNwbGF5LWZsZXh7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmJyYW5jaGVzVHlwZXMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgY29sb3I6ICM5MjllYWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjVmNWY1O1xuICAgICAgICB9XG4gICAgICAgIC5idG4uYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RjMzU0NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbn1cblxuXG5cbi5zYWdlLWJhbmstYWNjb3VudHtcbiAgICAuaGVhZGluZy1zYWdlLWJhbmstYWNjb3VudHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 60217:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/allocation/allocation.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllocationModule": () => (/* binding */ AllocationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _allocation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allocation-routing.module */ 38416);
/* harmony import */ var _allocation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allocation.component */ 14069);
/* harmony import */ var _components_main_fund_main_fund_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-fund/main-fund.component */ 60639);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _components_create_allocation_create_allocation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-allocation/create-allocation.component */ 85763);
/* harmony import */ var _components_orders_log_orders_log_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/orders-log/orders-log.component */ 21334);
/* harmony import */ var _components_order_log_details_order_log_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order-log-details/order-log-details.component */ 78571);
/* harmony import */ var _components_view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/view-deposited-cheques/view-deposited-cheques.component */ 33017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);










class AllocationModule {}
AllocationModule.ɵfac = function AllocationModule_Factory(t) {
  return new (t || AllocationModule)();
};
AllocationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AllocationModule
});
AllocationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _allocation_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllocationRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AllocationModule, {
    declarations: [_allocation_component__WEBPACK_IMPORTED_MODULE_1__.AllocationComponent, _components_main_fund_main_fund_component__WEBPACK_IMPORTED_MODULE_2__.MainFundComponent, _components_create_allocation_create_allocation_component__WEBPACK_IMPORTED_MODULE_4__.CreateAllocationComponent, _components_orders_log_orders_log_component__WEBPACK_IMPORTED_MODULE_5__.OrdersLogComponent, _components_order_log_details_order_log_details_component__WEBPACK_IMPORTED_MODULE_6__.OrderLogDetailsComponent, _components_view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_7__.ViewDepositedChequesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _allocation_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllocationRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 85763:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/allocation/components/create-allocation/create-allocation.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAllocationComponent": () => (/* binding */ CreateAllocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../petty-cash-treasury/services/treasury.service */ 79541);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);







const _c0 = ["allocationSucess"];
const _c1 = ["daRef"];
function CreateAllocationComponent_div_9_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 32)(3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r11 == null ? null : item_r11.accountTypeImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r11 == null ? null : item_r11.accountType[0] == null ? null : item_r11.accountType[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 5, item_r11.remainingAmountTobeDistributed, "2.3-3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 8, item_r11 == null ? null : item_r11.distributedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 11, item_r11 == null ? null : item_r11.difference, "2.3-3"));
  }
}
function CreateAllocationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "div", 18)(2, "table", 19)(3, "thead")(4, "tr")(5, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 20)(8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Main Fund Current Amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 20)(11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Distributed Amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 20)(14, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Difference");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CreateAllocationComponent_div_9_tr_17_Template, 16, 14, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.mainFundCashData);
  }
}
function CreateAllocationComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreateAllocationComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreateAllocationComponent_div_23_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r17.bankName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r17.accountName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r17.accountNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 6, item_r17.amount, "2.3-3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r17.currency[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r17.accountPercentage, " % ");
  }
}
function CreateAllocationComponent_div_23_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreateAllocationComponent_div_23_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreateAllocationComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 17)(2, "div", 18)(3, "table", 36)(4, "thead")(5, "tr")(6, "th", 20)(7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 20)(10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Account Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 20)(13, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Account No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 20)(16, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 20)(19, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 20)(22, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Percentage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, CreateAllocationComponent_div_23_tr_25_Template, 14, 9, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CreateAllocationComponent_div_23_div_26_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CreateAllocationComponent_div_23_ng_template_27_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.sageBankAccountData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r5.sageBankAccountData == null ? null : ctx_r5.sageBankAccountData.length) == 0);
  }
}
function CreateAllocationComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r6.isAmountDistributed, "2.3-3"));
  }
}
function CreateAllocationComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 40, 41)(4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CreateAllocationComponent_tr_41_Template_input_input_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const item_r18 = restoredCtx.$implicit;
      const i_r19 = restoredCtx.index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.onInputChage($event, item_r18, i_r19));
    })("focusout", function CreateAllocationComponent_tr_41_Template_input_focusout_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const item_r18 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.handleFoucusOut($event, item_r18));
    })("keypress", function CreateAllocationComponent_tr_41_Template_input_keypress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24._commonService.numberOnly($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "distributedAmount" + i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 2, item_r18 == null ? null : item_r18.distributedPercentage, "1.0-2"), " % ");
  }
}
function CreateAllocationComponent_ng_template_59_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Something wen wrong!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreateAllocationComponent_ng_template_59_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r26.allocationSuccessMessage);
  }
}
function CreateAllocationComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateAllocationComponent_ng_template_59_h5_1_Template, 3, 0, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CreateAllocationComponent_ng_template_59_h5_2_Template, 3, 1, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.response == null ? null : ctx_r9.response.Errors == null ? null : ctx_r9.response.Errors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.response == null ? null : ctx_r9.response.data);
  }
}
class CreateAllocationComponent {
  constructor(treasuryService, _commonService, _modalSerivce) {
    this.treasuryService = treasuryService;
    this._commonService = _commonService;
    this._modalSerivce = _modalSerivce;
    this.accumlatedArray = [];
    this.percentage = [];
    this.totalDistributedAmount = 0;
    // sorting and pagination variables
    this.sort = 0;
    this.pageNo = 0;
    this.searchText = '';
    this.isAmountDistributed = '';
    this.allocationSuccessMessage = '';
    this.isExceeded = false;
    this.payload = {
      totalAmountDistibuted: 0,
      mainFundAlocationOrderDetails: []
    };
    this.allocationOrderDetails = {
      sageBankID: 0,
      distributedAmount: 0,
      distributedPercentage: 0,
      currencyId: 0,
      accountTypeId: 0
    };
  }
  ngOnInit() {
    this.getMainFundData();
    this.getSageBanksAccountsData();
  }
  getMainFundData() {
    this.treasuryService.getMainFundCash().subscribe(response => {
      if (response) {
        this.mainFundCashData = response.data;
        this.mainFundCashData = this.mainFundCashData.map(x => {
          return {
            ...x,
            difference: '0',
            distributedAmount: '0'
          };
        });
        //  this.distributedAmount = new Array(this.mainFundCashData.length).fill('0000');
        //  this.difference = new Array(this.mainFundCashData.length).fill('0000');
      }
    });
  }

  onInputChage(event, item, i) {
    let enteredAmount = +event.target.value;
    let index = this.mainFundCashData.findIndex(x => x.currencyID == item.currencyID && x.accountTypeID == item.accountTypeID);
    let updateObj = this.mainFundCashData[index];
    let sageBankItem = this.sageBankAccountDistributedAmount[i];
    let divEl = this.daRef.get(i).nativeElement;
    const span = document.createElement('span');
    span.classList.add(...['validation-text-danger', 'test']);
    const isExist = divEl.getElementsByTagName('span');
    //check if enteredamount is greater than amont to distribute if yes than reset all value to zero again
    if (enteredAmount > updateObj.remainingAmountTobeDistributed) {
      span.textContent = `Exceed existing ${updateObj.accountType[0]?.lookupName} amount limit`;
      if (isExist.length <= 0) {
        divEl.appendChild(span);
      }
      updateObj['distributedAmount'] = 0;
      updateObj['difference'] = 0;
      sageBankItem['distributedPercentage'] = '';
      this.mainFundCashData.splice(index, updateObj);
      this.sageBankAccountDistributedAmount.splice(i, sageBankItem);
      this.isExceeded = true;
      return;
    } else {
      let span = divEl.getElementsByTagName('span')[0];
      this.isExceeded = false;
      if (span) span.remove();
    }
    updateObj['distributedAmount'] = enteredAmount;
    updateObj['difference'] = updateObj.remainingAmountTobeDistributed - enteredAmount;
    sageBankItem['distributedPercentage'] = (enteredAmount / updateObj.remainingAmountTobeDistributed * 100).toFixed(3);
    if (enteredAmount <= 0) {
      updateObj['distributedAmount'] = 0;
      updateObj['difference'] = 0;
      sageBankItem['distributedPercentage'] = '';
    }
    this.mainFundCashData.splice(index, updateObj);
    this.sageBankAccountDistributedAmount.splice(i, sageBankItem);
  }
  handleFoucusOut(event, item) {
    if (!this.isExceeded) {
      let value = +event.target.value;
      let obj = {
        sageBankID: item?.sageBankId,
        currencyId: item?.currencyID,
        accountTypeId: item?.accountTypeID,
        convertedAmount: this.exchangeCurrency(value, item.currencyID),
        distributedAmount: value,
        distributedPercentage: item?.distributedPercentage
      };
      if (value >= 0) {
        if (this.accumlatedArray.length) {
          let index = this.accumlatedArray.findIndex(x => x.accountTypeId == item?.accountTypeID);
          if (index >= 0) {
            let obj2 = this.accumlatedArray[index];
            obj2.convertedAmount = this.exchangeCurrency(value, item.currencyID);
            obj2.distributedAmount = value;
            obj2.distributedPercentage = item?.distributedPercentage;
            this.accumlatedArray.splice(index, obj2);
          } else {
            this.accumlatedArray = [...this.accumlatedArray, obj];
          }
        } else {
          this.accumlatedArray = [...this.accumlatedArray, obj];
        }
        console.log(this.accumlatedArray);
      }
      this.totalDistributedAmount = this.accumlatedArray.reduce((acc, current) => {
        return acc += current.convertedAmount;
      }, 0);
    }
  }
  getSageBanksAccountsData() {
    this.treasuryService.getSageBanksAccounts().subscribe(response => {
      if (response) {
        console.log(response);
        this.sageBankAccountData = response.data;
        this.sageBankAccountDistributedAmount = response.data;
      }
    });
  }
  exchangeCurrency(currencyValue, currencyId) {
    let convertedAmount = 0;
    if (currencyValue > 0) {
      if (currencyId == 9003) {
        //EURO
        convertedAmount = +(currencyValue / 1.33).toFixed(3);
      } else if (currencyId == 9002) {
        //USD
        convertedAmount = +(currencyValue / 1.41).toFixed(3);
      } else if (currencyId == 9001) {
        //JOD
        convertedAmount = currencyValue;
      }
    }
    return convertedAmount;
  }
  createAllocationOrder() {
    if (this.totalDistributedAmount <= 0) {
      this.isAmountDistributed = 'At least one distribute amount input is required';
      setTimeout(() => {
        this.isAmountDistributed = '';
      }, 5000);
      return;
    }
    let obj = {
      totalAmountDistibuted: this.totalDistributedAmount,
      mainFundAlocationOrderDetails: this.accumlatedArray.filter(x => x.distributedAmount > 0)
    };
    this.treasuryService.createAllocationOrders(obj).subscribe(res => {
      console.log(res);
      this.response = res;
      if (res.data) {
        this.allocationSuccessMessage = 'Allocation order successfully created!';
        this._modalSerivce.open(this.allocationSucess);
        setTimeout(() => {
          this._modalSerivce.dismissAll();
          this.getMainFundData();
        }, 3000);
      }
    });
  }
}
CreateAllocationComponent.ɵfac = function CreateAllocationComponent_Factory(t) {
  return new (t || CreateAllocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_0__.TreasuryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal));
};
CreateAllocationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CreateAllocationComponent,
  selectors: [["create-allocation"]],
  viewQuery: function CreateAllocationComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.allocationSucess = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.daRef = _t);
    }
  },
  decls: 61,
  vars: 10,
  consts: [["id", "create-allocation"], [1, "create-allocation-container"], [1, "row"], [1, "col-md-12"], [1, "create-allocation-order-container", "container-padding"], [1, "title"], [1, "hr"], [1, "data-table"], ["class", "card-table", 4, "ngIf", "ngIfElse"], ["mainfundloading", ""], ["loading", ""], [1, "col-md-12", "sage-distributed-table"], [1, "create-allocation-order-container", "sage-accounts-table"], [1, "sage-bank-account-container"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "create-allocation-order-container", "distributed-amount-table"], ["class", "text-danger", 4, "ngIf"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn"], [4, "ngFor", "ngForOf"], [1, "total-distributed-amount-container"], [1, "distributed-total-amount"], [1, "amount"], [1, "currency-format"], [1, "btns-group", "mb-0", "mx-0", "mt-3"], ["type", "button", 1, "btn", "btn-cancel"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], ["allocationSucess", ""], [1, "card-table"], [1, "main-fund-div"], [1, "currency-symbol"], ["alt", "", 3, "src"], [1, "heading-main-fund"], [1, "table", "sage-bank-account-table"], ["class", "not-found", 4, "ngIf"], [1, "not-found"], [1, "text-danger"], [3, "id"], ["daRef", ""], ["name", "categoryName", "type", "text", "placeholder", "Enter Amount", 1, "form-control", 3, "input", "focusout", "keypress"], [1, "modal-body"], ["class", "text-danger m-0 py-5 text-center", 4, "ngIf"], ["class", "m-0 py-5 text-center", 4, "ngIf"], [1, "text-danger", "m-0", "py-5", "text-center"], [1, "fa-regular", "fa-circle-xmark", "me-2"], [1, "m-0", "py-5", "text-center"], [1, "green-clr", "fa-regular", "fa-circle-check", "me-2"]],
  template: function CreateAllocationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Create Allocation Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreateAllocationComponent_div_9_Template, 18, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CreateAllocationComponent_ng_template_11_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CreateAllocationComponent_ng_template_14_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 2)(17, "div", 11)(18, "div", 12)(19, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Sage Bank Accounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, CreateAllocationComponent_div_23_Template, 29, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15)(25, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Distribute Amounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CreateAllocationComponent_p_27_Template, 3, 4, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 17)(30, "div", 18)(31, "table", 19)(32, "thead")(33, "tr")(34, "th", 20)(35, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Distributed Amounts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th", 20)(38, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Percentage ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, CreateAllocationComponent_tr_41_Template, 8, 5, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 2)(43, "div", 3)(44, "div", 23)(45, "div", 24)(46, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " Total Distributed Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 25)(49, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 2)(53, "div", 3)(54, "div", 27)(55, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateAllocationComponent_Template_button_click_57_listener() {
        return ctx.createAllocationOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " Create ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, CreateAllocationComponent_ng_template_59_Template, 3, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mainFundCashData)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sageBankAccountData)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isAmountDistributed);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sageBankAccountDistributedAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](51, 7, ctx.totalDistributedAmount, "2.3-3"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
  styles: ["#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.883rem;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .card-table[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 0;\n  border: none;\n  box-shadow: none;\n  width: 100%;\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border-radius: 8px;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .sage-distributed-table[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .sage-distributed-table[_ngcontent-%COMP%]   .sage-accounts-table[_ngcontent-%COMP%] {\n  \n  width: 80%;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .sage-distributed-table[_ngcontent-%COMP%]   .distributed-amount-table[_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 22.5px 10.88px;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .create-allocation-order-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 0.5px solid #F5F5F5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 30px 30px 0px 30px;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .create-allocation-order-container[_ngcontent-%COMP%]   .sage-bank-account-container[_ngcontent-%COMP%]   .sage-bank-account-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 18.5px 17px 18.5px 30px !important;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .create-allocation-order-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 22px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 10.42px;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .create-allocation-order-container[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #E9E9E9;\n  margin-bottom: 10.61px;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .create-allocation-order-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2.131rem;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .create-allocation-order-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 18.5px 17px 18.5px 30px !important;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .create-allocation-order-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   .cash-cheques-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .create-allocation-order-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   .cash-cheques-container[_ngcontent-%COMP%]   .cheque-amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 220px;\n  height: 272px;\n  background: #F8F8F8;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .create-allocation-order-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   .cash-cheques-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .total-distributed-amount-container[_ngcontent-%COMP%]   .distributed-total-amount[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: end;\n  gap: 1.509rem;\n  width: 100%;\n  height: 98.77px;\n  padding: 25.39px 32.99px;\n  background: #FFFFFF;\n  border: 0.5px solid #F5F5F5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .total-distributed-amount-container[_ngcontent-%COMP%]   .distributed-total-amount[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 139px;\n  height: 48px;\n  background: #F8F8F8;\n  border: 0.5px solid #E9E9E9;\n  border-radius: 10px;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .total-distributed-amount-container[_ngcontent-%COMP%]   .distributed-total-amount[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  margin-bottom: 14px;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n#create-allocation[_ngcontent-%COMP%]   .create-allocation-container[_ngcontent-%COMP%]   .heading-main-fund[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvdHJlYXN1cnkvYWxsb2NhdGlvbi9jb21wb25lbnRzL2NyZWF0ZS1hbGxvY2F0aW9uL2NyZWF0ZS1hbGxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBR0k7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUZOO0FBSU07RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUFGUjtBQUtNO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBSFI7QUFPSTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUxOO0FBVWM7RUFDRSwyQ0FBQTtBQVJoQjtBQWVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFiUjtBQWdCTTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7QUFkUjtBQWlCTTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBZlI7QUFtQlk7RUFDRSwyQ0FBQTtBQWpCZDtBQXNCUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFwQlY7QUFzQlU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQXBCWjtBQXVCVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXJCWjtBQTRCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBMUJSO0FBNEJRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQTFCVjtBQTRCVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTFCWjtBQWdDSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTlCTjtBQWdDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUE5QlI7QUFrQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBaENOIiwic291cmNlc0NvbnRlbnQiOlsiI2NyZWF0ZS1hbGxvY2F0aW9uIHtcbiAgLmNyZWF0ZS1hbGxvY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS44ODNyZW07XG5cblxuICAgIC5jYXJkLXRhYmxlIHtcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbiAgICAvLyA8IS0tIGNyZWF0ZSBhbGxvY2F0aW9uIG9yZGVyIHRhYmxlIHN0eWluZyBoZXJlIC0tPlxuICAgIC5zYWdlLWRpc3RyaWJ1dGVkLXRhYmxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDFyZW07XG4gICAgICAvLyA8IS0tIHNhZ2UgYmFuayBhY2NvdW50IHRhYmxlIHN0eWluZyBoZXJlIC0tPlxuICAgICAgLnNhZ2UtYWNjb3VudHMtdGFibGUge1xuICAgICAgICAvKnBhZGRpbmc6IDIyLjVweCAxMC44OHB4OyovXG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICB9XG5cbiAgICAgIC5kaXN0cmlidXRlZC1hbW91bnQtdGFibGUge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBwYWRkaW5nOiAyMi41cHggMTAuODhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY3JlYXRlLWFsbG9jYXRpb24tb3JkZXItY29udGFpbmVyIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRjVGNUY1O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMHB4IDMwcHg7XG4gICAgICAuc2FnZS1iYW5rLWFjY291bnQtY29udGFpbmVyIHtcbiAgICAgICAgLnNhZ2UtYmFuay1hY2NvdW50LXRhYmxlIHtcbiAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOC41cHggMTdweCAxOC41cHggMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwLjQycHg7XG4gICAgICB9XG5cbiAgICAgIC5ociB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTlFOUU5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMC42MXB4O1xuICAgICAgfVxuXG4gICAgICAuZGF0YS10YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMi4xMzFyZW07XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTguNXB4IDE3cHggMTguNXB4IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2FzaC1jaGVxdWVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGdhcDogMXJlbTtcblxuICAgICAgICAgIC5jaGVxdWUtYW1vdW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI3MnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGODtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC50b3RhbC1kaXN0cmlidXRlZC1hbW91bnQtY29udGFpbmVyIHtcblxuICAgICAgLmRpc3RyaWJ1dGVkLXRvdGFsLWFtb3VudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgICAgICBnYXA6IDEuNTA5cmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA5OC43N3B4O1xuICAgICAgICBwYWRkaW5nOiAyNS4zOXB4IDMyLjk5cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI0Y1RjVGNTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEzOXB4O1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI0U5RTlFOTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1mdW5kLWRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNXB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG5cbiAgICAgIC5jdXJyZW5jeS1zeW1ib2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y2RjZGNjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGluZy1tYWluLWZ1bmQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 60639:
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/allocation/components/main-fund/main-fund.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainFundComponent": () => (/* binding */ MainFundComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../petty-cash-treasury/services/treasury.service */ 79541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);






function MainFundComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Not Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 24)(12, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Allocation In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r5 == null ? null : item_r5.accountTypeImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.accountType[0] == null ? null : item_r5.accountType[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 6, item_r5 == null ? null : item_r5.remainingAmountTobeDistributed, "2.3-3"), " ", item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 9, item_r5 == null ? null : item_r5.pendingDistributedAmount, "2.3-3"), " ", item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].lookupName, "");
  }
}
function MainFundComponent_div_7_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.accountName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.accountNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 5, item_r8.amount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.currency[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.accountPercentage, " % ");
  }
}
function MainFundComponent_div_7_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MainFundComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 27)(2, "div", 28)(3, "table", 29)(4, "thead")(5, "tr")(6, "th", 30)(7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainFundComponent_div_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.sortByAccountName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Account Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 32)(10, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 30)(12, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainFundComponent_div_7_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.sortByAccountNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Account No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 32)(15, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 30)(17, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainFundComponent_div_7_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 32)(20, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 30)(22, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainFundComponent_div_7_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.sortByCurrency());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 32)(25, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 30)(27, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Percentage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, MainFundComponent_div_7_tr_30_Template, 12, 8, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, MainFundComponent_div_7_div_31_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r1.mainFundCashData == null ? null : ctx_r1.mainFundCashData.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sort == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r1.mainFundCashData == null ? null : ctx_r1.mainFundCashData.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r1.mainFundCashData == null ? null : ctx_r1.mainFundCashData.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r1.mainFundCashData == null ? null : ctx_r1.mainFundCashData.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r1.mainFundCashData == null ? null : ctx_r1.mainFundCashData.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.sageBankAccountData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r1.sageBankAccountData == null ? null : ctx_r1.sageBankAccountData.length) == 0);
  }
}
function MainFundComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
function MainFundComponent_li_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainFundComponent_li_22_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const page_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.setPage(page_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r4.pageNo === page_r14))("disabled", ctx_r4.pageNo === page_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r14 + 1, " ");
  }
}
class MainFundComponent {
  constructor(treasuryService) {
    this.treasuryService = treasuryService;
    this.sort = 0;
    this.pageNo = 0;
    this.searchText = '';
    this.pageSize = 0;
    this.totalMainFund = 0;
  }
  ngOnInit() {
    this.getMainFundData();
    this.getSageBanksAccountsData();
  }
  allocationSearchedData(sort, pageNo, pageSize) {
    this.treasuryService.sortSageBanksAccounts(sort, pageNo, pageSize).subscribe(response => {
      if (response) {
        this.sageBankAccountData = response.data;
      }
    });
  }
  getMainFundData() {
    this.treasuryService.getMainFundCash().subscribe(response => {
      if (response) {
        this.mainFundCashData = response.data;
        this.totalMainFund = response.info?.totalMainFundCash;
      }
    });
  }
  getSageBanksAccountsData() {
    this.treasuryService.getSageBanksAccounts().subscribe(response => {
      if (response) {
        this.sageBankAccountData = response.data;
        this.totalSageAmount = response.info.sageTotalAmouunt;
        this.totalRecords = response.totalRecordCount;
        this.pagins = Math.ceil(this.totalRecords / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagins);
      }
    });
  }
  getColor(symbol) {
    switch (symbol) {
      case 'JOD':
        return '#B9E0CA';
        break;
      case "USD":
        return '#F4CEFA';
        break;
      case "EURO":
        return '#F8E2BE';
        break;
      case "abc":
        return '#FFD7E7';
        break;
      default:
        return '#FFD7E7';
    }
  }
  getCurrencyFormatColor(symbol) {
    switch (symbol) {
      case 'JOD':
        return '#38B36D';
        break;
      case "USD":
        return '#DB5AEE';
        break;
      case "EURO":
        return '#FFB536';
        break;
      case "abc":
        return '#FFD7E7';
        break;
      default:
        return '#FFD7E7';
    }
  }
  sortByAccountName() {
    if (this.sort == 2) {
      this.sort = 0;
    } else {
      this.sort = this.sort == 1 ? 2 : 1;
    }
    this.allocationSearchedData(this.sort, this.pageNo, this.pageSize);
  }
  sortByAccountNo() {
    if (this.sort == 4) {
      this.sort = 0;
    } else {
      this.sort = this.sort == 3 ? 4 : 3;
      this.allocationSearchedData(this.sort, this.pageNo, this.pageSize);
    }
  }
  sortByAmount() {
    if (this.sort == 6) {
      this.sort = 0;
    } else {
      this.sort = this.sort == 5 ? 6 : 5;
      this.allocationSearchedData(this.sort, this.pageNo, this.pageSize);
    }
  }
  sortByCurrency() {
    if (this.sort == 8) {
      this.sort = 0;
    } else {
      this.sort = this.sort == 7 ? 8 : 7;
      this.allocationSearchedData(this.sort, this.pageNo, this.pageSize);
    }
  }
  setPage(page) {
    this.pageNo = page;
    this.allocationSearchedData(this.sort, this.pageNo, this.pageSize);
    window.scroll(0, 0);
  }
}
MainFundComponent.ɵfac = function MainFundComponent_Factory(t) {
  return new (t || MainFundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_1__.TreasuryService));
};
MainFundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MainFundComponent,
  selectors: [["main-fund"]],
  decls: 40,
  vars: 17,
  consts: [[1, "main-fund"], [1, "heading-main-fund", "mb-3"], [1, "main-fund-controls"], [1, "main-fund-container", "gap-4"], ["class", "main-fund-wrapper", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "total-amount-container"], [1, "sage-total-amount"], [1, "amount"], [1, "currency-format"], [1, "main-fund-wrapper"], [1, "main-fund-div"], [1, "currency-symbol"], ["alt", "", 3, "src"], [1, "heading-main-fund"], [1, "heading-main-fund", "font-13"], [1, "heading-main-fund", "font-15", "primary-clr", "fw-600", "my-1"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "gray-500", "font-11", "fw-500"], [1, "font-10", "fw-600", "primary-clr"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function MainFundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Main Fund");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MainFundComponent_div_5_Template, 17, 12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MainFundComponent_div_7_Template, 32, 23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MainFundComponent_ng_template_9_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9)(12, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9)(21, "ul", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, MainFundComponent_li_22_Template, 3, 5, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 5)(24, "div", 7)(25, "div", 13)(26, "div", 14)(27, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Sage Total Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15)(30, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 14)(34, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Main Fund Total Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 15)(37, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.mainFundCashData);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sageBankAccountData)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", (ctx.sageBankAccountData == null ? null : ctx.sageBankAccountData.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.sageBankAccountData == null ? null : ctx.sageBankAccountData.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.totalRecords < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](32, 11, ctx.totalSageAmount, "2.3-3"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](39, 14, ctx.totalMainFund, "2.3-3"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: [".main-fund[_ngcontent-%COMP%] {\n  margin-bottom: 30.09px;\n}\n.main-fund[_ngcontent-%COMP%]   .heading-main-fund[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  margin: 0;\n}\n.main-fund[_ngcontent-%COMP%]   .main-fund-controls[_ngcontent-%COMP%] {\n  margin-bottom: 30.09px;\n}\n.main-fund[_ngcontent-%COMP%]   .main-fund-controls[_ngcontent-%COMP%]   .main-fund-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.main-fund[_ngcontent-%COMP%]   .main-fund-controls[_ngcontent-%COMP%]   .main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 1px solid #E9E9E9;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px 15px;\n  flex: 0 1 240px;\n}\n.main-fund[_ngcontent-%COMP%]   .main-fund-controls[_ngcontent-%COMP%]   .main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.main-fund[_ngcontent-%COMP%]   .main-fund-controls[_ngcontent-%COMP%]   .main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n.main-fund[_ngcontent-%COMP%]   .main-fund-controls[_ngcontent-%COMP%]   .control-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.main-fund[_ngcontent-%COMP%]   .total-amount-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  width: 100%;\n  height: 98.77px;\n  left: 290.32px;\n  top: 956.46px;\n  background: #FFFFFF;\n  border: 0.5px solid #F5F5F5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n.main-fund[_ngcontent-%COMP%]   .total-amount-container[_ngcontent-%COMP%]   .sage-total-amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 25px 21px;\n}\n.main-fund[_ngcontent-%COMP%]   .total-amount-container[_ngcontent-%COMP%]   .sage-total-amount[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0px;\n  text-align: left;\n}\n.main-fund[_ngcontent-%COMP%]   .total-amount-container[_ngcontent-%COMP%]   .sage-total-amount[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  margin-right: 30px;\n}\n.main-fund[_ngcontent-%COMP%]   .total-amount-container[_ngcontent-%COMP%]   .sage-total-amount[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 14px 34px 14px 35px;\n  gap: 10px;\n  height: 48px;\n  left: 1255.16px;\n  top: 981.85px;\n  background: #F8F8F8;\n  border: 0.5px solid #E9E9E9;\n  border-radius: 10px;\n}\n.main-fund[_ngcontent-%COMP%]   .total-amount-container[_ngcontent-%COMP%]   .sage-total-amount[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvdHJlYXN1cnkvYWxsb2NhdGlvbi9jb21wb25lbnRzL21haW4tZnVuZC9tYWluLWZ1bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBQ0o7QUFFRTtFQUNFLHNCQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUVNO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRVE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBVjtBQUVVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUFaO0FBTUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFKTjtBQVFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQU5KO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU5OO0FBUU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFOUjtBQVNNO0VBQ0Usa0JBQUE7QUFQUjtBQVVNO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVVRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUlYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1mdW5kIHtcbiAgbWFyZ2luLWJvdHRvbTogMzAuMDlweDtcblxuICAuaGVhZGluZy1tYWluLWZ1bmQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5tYWluLWZ1bmQtY29udHJvbHMge1xuICAgIG1hcmdpbi1ib3R0b206IDMwLjA5cHg7XG4gICAgLy8gbWFpbiBmdW5kIGRpdlxuICAgIC5tYWluLWZ1bmQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAubWFpbi1mdW5kLXdyYXBwZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTlFOUU5O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGZsZXg6IDAgMSAyNDBweDtcblxuICAgICAgICAubWFpbi1mdW5kLWRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBnYXA6IDE1cHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuXG4gICAgICAgICAgLmN1cnJlbmN5LXN5bWJvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtcmlnaHQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLnRvdGFsLWFtb3VudC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDk4Ljc3cHg7XG4gICAgbGVmdDogMjkwLjMycHg7XG4gICAgdG9wOiA5NTYuNDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0Y1RjVGNTtcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAuc2FnZS10b3RhbC1hbW91bnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyNXB4IDIxcHg7XG5cbiAgICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgPiA6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIC5hbW91bnQge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDM0cHggMTRweCAzNXB4O1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgbGVmdDogMTI1NS4xNnB4O1xuICAgICAgICB0b3A6IDk4MS44NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFOUU5RTk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 78571:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/allocation/components/order-log-details/order-log-details.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderLogDetailsComponent": () => (/* binding */ OrderLogDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../main-fund/allocation/allocation/allocation-services/allocation.service */ 51445);
/* harmony import */ var _petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../petty-cash-treasury/services/treasury.service */ 79541);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/header.service */ 36690);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);










function OrderLogDetailsComponent_div_32_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 27)(3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r11 == null ? null : item_r11.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r11 == null ? null : item_r11.accountTypeName[0] == null ? null : item_r11.accountTypeName[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 5, (item_r11 == null ? null : item_r11.mainFundAlocationOrderDetails[0] == null ? null : item_r11.mainFundAlocationOrderDetails[0].remainingToBedistriputed) || 0, "2.3-3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 8, (item_r11 == null ? null : item_r11.mainFundAlocationOrderDetails[0] == null ? null : item_r11.mainFundAlocationOrderDetails[0].distributedAmount) || 0, "2.3-3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](15, 11, (item_r11 == null ? null : item_r11.mainFundAlocationOrderDetails[0] == null ? null : item_r11.mainFundAlocationOrderDetails[0].difference) || 0, "2.3-3"), " ");
  }
}
function OrderLogDetailsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "table", 24)(3, "thead")(4, "tr")(5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Main Fund Current Amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Distributed Amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Difference");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, OrderLogDetailsComponent_div_32_tr_14_Template, 16, 14, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.orderLogDetails == null ? null : ctx_r0.orderLogDetails.mainFundAlocationOrderDetails);
  }
}
const _c0 = function (a0, a1) {
  return {
    "background-color": a0,
    color: a1
  };
};
const _c1 = function () {
  return {
    "cursor": "pointer"
  };
};
const _c2 = function () {
  return {
    "cursor": "default"
  };
};
function OrderLogDetailsComponent_div_37_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 27)(3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td")(19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td")(22, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderLogDetailsComponent_div_37_tr_26_Template_i_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](43);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.viewAction(item_r15, _r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r15 == null ? null : item_r15.sageBank == null ? null : item_r15.sageBank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r15 == null ? null : item_r15.sageBank == null ? null : item_r15.sageBank.accountTypeName[0] == null ? null : item_r15.sageBank.accountTypeName[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r15.bankName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r15.accountName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r15.accountNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](15, 11, (item_r15 == null ? null : item_r15.distributedAmounts == null ? null : item_r15.distributedAmounts.distributedAmount) || 0, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.distributedAmounts == null ? null : item_r15.distributedAmounts.distributedPercentage) || 0, " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c0, item_r15 == null ? null : item_r15.distributedAmounts == null ? null : item_r15.distributedAmounts.statusObj == null ? null : item_r15.distributedAmounts.statusObj.lookupBGColor, item_r15 == null ? null : item_r15.distributedAmounts == null ? null : item_r15.distributedAmounts.statusObj == null ? null : item_r15.distributedAmounts.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.distributedAmounts == null ? null : item_r15.distributedAmounts.statusObj == null ? null : item_r15.distributedAmounts.statusObj.translations[0] == null ? null : item_r15.distributedAmounts.statusObj.translations[0].lookupName) || "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ((item_r15 == null ? null : item_r15.distributedAmounts == null ? null : item_r15.distributedAmounts.statusObj == null ? null : item_r15.distributedAmounts.statusObj.lookupId) == 14002 || (item_r15 == null ? null : item_r15.distributedAmounts == null ? null : item_r15.distributedAmounts.statusObj == null ? null : item_r15.distributedAmounts.statusObj.lookupId) == 14003) && "gray-600" || "gray-500")("ngStyle", (item_r15 == null ? null : item_r15.distributedAmounts == null ? null : item_r15.distributedAmounts.statusObj == null ? null : item_r15.distributedAmounts.statusObj.lookupId) == 14002 || (item_r15 == null ? null : item_r15.distributedAmounts == null ? null : item_r15.distributedAmounts.statusObj == null ? null : item_r15.distributedAmounts.statusObj.lookupId) == 14003 ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](18, _c2));
  }
}
function OrderLogDetailsComponent_div_37_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderLogDetailsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Distributed Amounts in Sage Bank Accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 32)(5, "div", 23)(6, "table", 33)(7, "thead")(8, "tr")(9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Account No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Distribute Amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, OrderLogDetailsComponent_div_37_tr_26_Template, 23, 19, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, OrderLogDetailsComponent_div_37_div_27_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.orderLogDetails == null ? null : ctx_r1.orderLogDetails.sageBankAccounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.orderLogDetails == null ? null : ctx_r1.orderLogDetails.sageBankAccounts == null ? null : ctx_r1.orderLogDetails.sageBankAccounts.length) == 0);
  }
}
function OrderLogDetailsComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderLogDetailsComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderLogDetailsComponent_ng_template_42_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 51)(4, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderLogDetailsComponent_ng_template_42_div_36_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](45);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.openFileModal(item_r20, _r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 54)(7, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const index_r21 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", index_r21 + 1, ".", ctx_r19.getFileType(item_r20 == null ? null : item_r20.file), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", item_r20 == null ? null : item_r20.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("download", item_r20 == null ? null : item_r20.file);
  }
}
function OrderLogDetailsComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "div", 8)(3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 8)(8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8)(13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Account No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 8)(18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 8)(23, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Deposited Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "To Complete the process Please upload the bank deposit voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Uploaded files");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 2)(35, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, OrderLogDetailsComponent_ng_template_42_div_36_Template, 9, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 47)(38, "div", 48)(39, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderLogDetailsComponent_ng_template_42_Template_button_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const modal_r18 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r18.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.viewCashDeposit == null ? null : ctx_r7.viewCashDeposit.sageBank == null ? null : ctx_r7.viewCashDeposit.sageBank.bankName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.viewCashDeposit == null ? null : ctx_r7.viewCashDeposit.sageBank == null ? null : ctx_r7.viewCashDeposit.sageBank.accountName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.viewCashDeposit == null ? null : ctx_r7.viewCashDeposit.sageBank == null ? null : ctx_r7.viewCashDeposit.sageBank.accountNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.viewCashDeposit == null ? null : ctx_r7.viewCashDeposit.currency[0] == null ? null : ctx_r7.viewCashDeposit.currency[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](27, 6, ctx_r7.viewCashDeposit == null ? null : ctx_r7.viewCashDeposit.depositedAmount, "2.3-3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.viewCashDeposit == null ? null : ctx_r7.viewCashDeposit.files);
  }
}
function OrderLogDetailsComponent_ng_template_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r27.fileItem == null ? null : ctx_r27.fileItem.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function OrderLogDetailsComponent_ng_template_44_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 62)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "click to open pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx_r29.fileItem == null ? null : ctx_r29.fileItem.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function OrderLogDetailsComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderLogDetailsComponent_ng_template_44_ng_container_1_Template, 2, 1, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrderLogDetailsComponent_ng_template_44_ng_template_2_Template, 5, 1, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 47)(5, "div", 48)(6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderLogDetailsComponent_ng_template_44_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const modal_r26 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r26.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r9.fileItem == null ? null : ctx_r9.fileItem.fileType) == "png" || (ctx_r9.fileItem == null ? null : ctx_r9.fileItem.fileType) == "jpeg" || (ctx_r9.fileItem == null ? null : ctx_r9.fileItem.fileType) == "jpg")("ngIfElse", _r28);
  }
}
class OrderLogDetailsComponent {
  constructor(_allocationService, treasuryService, headerService, _commonService, _activeRoute, _modalService) {
    this._allocationService = _allocationService;
    this.treasuryService = treasuryService;
    this.headerService = headerService;
    this._commonService = _commonService;
    this._activeRoute = _activeRoute;
    this._modalService = _modalService;
  }
  ngOnInit() {
    this.headerService.setTitle('Allocation > Allocation Orders Log > Details');
    this.getMainFundData();
    this.getSageBanksAccountsData();
    this._activeRoute.params.subscribe(params => {
      this.getAllocationOrderDetails(+params['orderId']);
    });
  }
  getAllocationOrderDetails(orderId) {
    this.treasuryService.getAllocationOrderDetails(orderId).subscribe(response => {
      console.log(response);
      this.orderLogDetails = response.data;
    });
  }
  getMainFundData() {
    this.treasuryService.getMainFundCash().subscribe(response => {
      if (response) {
        this.mainFundCashData = response.data;
        this.mainFundCashData = this.mainFundCashData.map(x => {
          return {
            ...x,
            difference: '0',
            distributedAmount: '0'
          };
        });
      }
    });
  }
  getSageBanksAccountsData() {
    this.treasuryService.getSageBanksAccounts().subscribe(response => {
      if (response) {
        this.sageBankAccountData = response.data;
      }
    });
  }
  viewAction(item, content) {
    if (item.isCash) {
      this._allocationService.viewCashAllocationOrderDetailsDeposits(item?.distributedAmounts?.allocationOrderDetailsId).subscribe(response => {
        this.viewCashDeposit = response.data[0];
        this._modalService.open(content);
      });
    } else {
      this._commonService.NavigateToRoute('/allocation/view-deposited-cheques/' + item?.distributedAmounts?.allocationOrderDetailsId);
    }
  }
  openFileModal(item, content) {
    let fileType = this.getFileType(item?.file);
    this.fileItem = item;
    this.fileItem['fileType'] = fileType;
    this._modalService.open(content);
  }
  getFileType(fileName) {
    return fileName?.split('.').pop();
  }
}
OrderLogDetailsComponent.ɵfac = function OrderLogDetailsComponent_Factory(t) {
  return new (t || OrderLogDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_0__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_1__.TreasuryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal));
};
OrderLogDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: OrderLogDetailsComponent,
  selectors: [["app-order-log-details"]],
  decls: 46,
  vars: 10,
  consts: [["id", "create-allocation"], [1, "create-allocation-container"], [1, "row"], [1, "col-md-12"], [1, "card-collect", "card-with-details"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "card-inner-heading"], [1, "d-flex", "mt-4", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "flex-column"], [1, "dark-gray"], [1, "light-gray", "fw-400"], [1, "create-allocation-order-container", "container-padding"], [1, "title"], [1, "hr"], [1, "data-table"], ["class", "card-table", 4, "ngIf", "ngIfElse"], [1, "create-allocation-order-container"], ["class", "col-12", 4, "ngIf", "ngIfElse"], ["mainfundloading", ""], ["loadingBankAccounts", ""], ["viewDepositCashModal", ""], ["fileModal", ""], [1, "card-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "main-fund-div"], [1, "currency-symbol"], ["alt", "", 3, "src"], [1, "heading-main-fund"], [1, "col-12"], [1, "card-table", "mt-2"], [1, "table", "sage-bank-account-table"], ["class", "not-found", 4, "ngIf"], [1, "status-tag", 3, "ngStyle"], [1, "fa", "fa-eye", "font-16", 3, "ngClass", "ngStyle", "click"], [1, "not-found"], [1, "modal-body", "p-4"], [1, "d-grid"], [1, "mdtext"], [1, "smText"], [1, "font-20", "fw-600", "my-5"], [1, "font-18", "fw-600", "my-3"], [1, "fw-700", "font-14", "gray-500", "mb-3"], [1, "col-sm-6"], ["class", "uploadedfile mb-2", 4, "ngFor", "ngForOf"], [1, "flex-end"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "uploadedfile", "mb-2"], [1, "d-flex"], ["type", "button", 1, "btn", "fview", 3, "click"], ["src", "assets/images/eye.png", "alt", ""], ["type", "button", 1, "btn"], ["target", "_blank", 1, "btn", "fview", 3, "href", "download"], ["src", "assets/images/Download.png", "alt", ""], [1, "modal-body", "p-2"], [4, "ngIf", "ngIfElse"], ["pdf", ""], [1, "w-100", 3, "src"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center"], ["height", "80", "width", "80", "src", "assets/images/pdf.png", "alt", ""], ["target", "_blank", 1, "text-decoration-none", "text-capitalize", 3, "href"]],
  template: function OrderLogDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Allocation Order Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Adding Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 8)(17, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Add By");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 8)(22, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Order No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 3)(27, "div", 11)(28, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Create Allocation Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, OrderLogDetailsComponent_div_32_Template, 15, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 2)(34, "div", 3)(35, "div", 16)(36, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, OrderLogDetailsComponent_div_37_Template, 28, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, OrderLogDetailsComponent_ng_template_38_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, OrderLogDetailsComponent_ng_template_40_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, OrderLogDetailsComponent_ng_template_42_Template, 41, 9, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, OrderLogDetailsComponent_ng_template_44_Template, 8, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](39);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](15, 7, ctx.orderLogDetails == null ? null : ctx.orderLogDetails.createdAt, "mediumDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.orderLogDetails == null ? null : ctx.orderLogDetails.createdBy == null ? null : ctx.orderLogDetails.createdBy.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.orderLogDetails == null ? null : ctx.orderLogDetails.mainFundAllocationOrderId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.orderLogDetails == null ? null : ctx.orderLogDetails.mainFundAlocationOrderDetails == null ? null : ctx.orderLogDetails.mainFundAlocationOrderDetails.length)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.orderLogDetails == null ? null : ctx.orderLogDetails.sageBankAccounts == null ? null : ctx.orderLogDetails.sageBankAccounts.length)("ngIfElse", _r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".create-allocation-order-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 0.5px solid #F5F5F5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 30px 30px 0px 30px;\n  margin-bottom: 30px;\n}\n\n.main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.heading-main-fund[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  \n  color: #858585;\n}\n\n.d-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(173px, 1fr));\n  gap: 20px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvdHJlYXN1cnkvYWxsb2NhdGlvbi9jb21wb25lbnRzL29yZGVyLWxvZy1kZXRhaWxzL29yZGVyLWxvZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7QUFBTjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFGSiIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtYWxsb2NhdGlvbi1vcmRlci1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNGNUY1RjU7XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm1haW4tZnVuZC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG5cbiAgLmN1cnJlbmN5LXN5bWJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxufVxuXG4uaGVhZGluZy1tYWluLWZ1bmQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cbi5tZHRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogVGV4dCBDb2xvci9UZXh0IDEgKi9cblxuICBjb2xvcjogIzFiMjEyZDtcbn1cblxuLnNtVGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAvKiBUZXh0IENvbG9yL1RleHQgMSAqL1xuXG4gIGNvbG9yOiAjODU4NTg1O1xufVxuLmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTczcHgsMWZyKSk7XG4gIGdhcDogMjBweDtcbn1cblxuLnVwbG9hZGVkZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMWFmMjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogIzY5Njk2OTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 21334:
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/allocation/components/orders-log/orders-log.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersLogComponent": () => (/* binding */ OrdersLogComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../main-fund/register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/header.service */ 36690);
/* harmony import */ var _petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../petty-cash-treasury/services/treasury.service */ 79541);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);












const _c0 = ["success"];
function OrdersLogComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersLogComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.resetOrderNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrdersLogComponent_i_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersLogComponent_i_14_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.resetDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0, a1) {
  return {
    "background-color": a0,
    color: a1
  };
};
function OrdersLogComponent_div_20_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td")(12, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r13 == null ? null : item_r13.mainFundAllocationOrderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 7, item_r13 == null ? null : item_r13.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 10, item_r13 == null ? null : item_r13.totalAmountDistibuted, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r13 == null ? null : item_r13.createdBy == null ? null : item_r13.createdBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](13, _c1, item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.lookupBGColor, item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.translations[0] == null ? null : item_r13.statusObj.translations[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "/allocation/order-log-detail/", item_r13 == null ? null : item_r13.mainFundAllocationOrderId, "");
  }
}
function OrdersLogComponent_div_20_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrdersLogComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "div", 28)(2, "div", 29)(3, "table", 30)(4, "thead")(5, "tr")(6, "th", 31)(7, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersLogComponent_div_20_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.sortByOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Order No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 33)(10, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 31)(12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersLogComponent_div_20_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 33)(15, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 31)(17, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersLogComponent_div_20_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.sortByDistributed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Total Distributed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 33)(20, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 31)(22, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersLogComponent_div_20_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.sortByCreated());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Created By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 33)(25, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 31)(27, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersLogComponent_div_20_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 33)(30, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "th", 31)(32, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, OrdersLogComponent_div_20_tr_35_Template, 16, 16, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, OrdersLogComponent_div_20_div_36_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const allocationOrderList_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (allocationOrderList_r10 == null ? null : allocationOrderList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (allocationOrderList_r10 == null ? null : allocationOrderList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (allocationOrderList_r10 == null ? null : allocationOrderList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (allocationOrderList_r10 == null ? null : allocationOrderList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (allocationOrderList_r10 == null ? null : allocationOrderList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", allocationOrderList_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (allocationOrderList_r10 == null ? null : allocationOrderList_r10.length) == 0);
  }
}
function OrdersLogComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    active: a0
  };
};
function OrdersLogComponent_li_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersLogComponent_li_35_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const page_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.setPage(page_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r20 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c2, ctx_r5.pageNo === page_r20))("disabled", ctx_r5.pageNo === page_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", page_r20 + 1, " ");
  }
}
const _c3 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
class OrdersLogComponent {
  constructor(_registerSettlementService, _headerService, treasuryService, fb, datepipe) {
    this._registerSettlementService = _registerSettlementService;
    this._headerService = _headerService;
    this.treasuryService = treasuryService;
    this.fb = fb;
    this.datepipe = datepipe;
    this.searchText = '';
    this.filterParams = undefined;
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 0;
    this.pageSize = 6;
    this.pages = [];
    this.allocationOrderList = [];
    this.statusList = [];
    this.usersList = [];
  }
  initFilterForm() {
    this.orderLogFilterForm = this.fb.group({
      search: [''],
      createdBy: [null],
      date: [''],
      status: [null]
    });
  }
  ngOnInit() {
    //this._headerService.setTitle('Allocation Orderes Log');
    this.getAllocationOrders(this.filterParams);
    this.getStatusList(14);
    this.getUsersList();
    this.initFilterForm();
    this.orderLogFilterForm.valueChanges.subscribe(value => {
      let dateObj = {
        fromDate: '',
        toDate: ''
      };
      let formValues;
      if (value['date']) {
        dateObj['fromDate'] = this.datepipe.transform(value['date'][0], 'yyyy-MM-dd');
        dateObj['toDate'] = this.datepipe.transform(value['date'][1], 'yyyy-MM-dd');
        ;
      }
      formValues = {
        ...value,
        ...dateObj
      };
      delete formValues['date'];
      let isEmpty = true;
      for (let obj in value) {
        if (value[obj]) {
          this.pageNo = 0;
          isEmpty = false;
        }
        if (formValues[obj] == null) {
          formValues[obj] = '';
        }
      }
      this.filterParams = '?' + new URLSearchParams(formValues).toString();
      if (isEmpty) {
        this.filterParams = undefined;
        this.pageNo = 0;
      }
      console.log(this.filterParams);
      this.getAllocationOrders(this.filterParams);
    });
  }
  navigateTo(value, sessionId) {}
  resetDate() {
    this.orderLogFilterForm.controls['date'].setValue('');
  }
  resetOrderNo() {
    this.orderLogFilterForm.controls['search'].setValue('');
  }
  getAllocationOrders(filterParams = this.filterParams) {
    let defaultParams = `pageNo=${this.pageNo}&sort=${this.sort}&pageSize=${this.pageSize}`;
    this.treasuryService.getAllocationOrders(filterParams && filterParams + `&${defaultParams}` || `?${defaultParams}`).subscribe(response => {
      this.allocationOrderList = response?.data;
      this.totalRecords = response?.totalRecordCount;
      this.pagin = Math.ceil(this.totalRecords / 6);
      this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
    });
  }
  getStatusList(id) {
    this._registerSettlementService.getStatusList(id).subscribe(response => {
      this.statusList = response.data;
    });
  }
  getUsersList() {
    let params = `?Status=2001&Invitation=2004&PageNo=0&PageSize=1000`;
    this.treasuryService.getUsers(params).subscribe(response => {
      this.usersList = response.data;
    });
  }
  // Sorting Functions
  sortByOrder() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getAllocationOrders();
  }
  sortByDate() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getAllocationOrders();
  }
  sortByDistributed() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getAllocationOrders();
  }
  sortByCreated() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getAllocationOrders();
  }
  sortByStatus() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getAllocationOrders();
  }
  /**
   * pagination
   * @param page page no
   */
  setPage(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getAllocationOrders();
  }
}
OrdersLogComponent.ɵfac = function OrdersLogComponent_Factory(t) {
  return new (t || OrdersLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_3__.TreasuryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
};
OrdersLogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: OrdersLogComponent,
  selectors: [["orders-log"]],
  viewQuery: function OrdersLogComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.success = _t.first);
    }
  },
  decls: 36,
  vars: 16,
  consts: [[1, "page-layout"], [3, "formGroup"], [1, "row", "align-items-stretch"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-5"], [1, "input-group", "search-box", "h-100"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "formControlName", "search", "placeholder", "Order No", 1, "form-control"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-2"], ["formControlName", "createdBy", "placeholder", "Created By", "bindLabel", "fullName", "bindValue", "userId", 1, "flex-grow-1", 3, "items"], ["formControlName", "status", "placeholder", "Status", "bindLabel", "description", "bindValue", "id", 1, "flex-grow-1", 3, "items"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "position-relative"], ["class", "fa-solid fa-times", "style", "position:absolute;top:15px;right:30px;cursor:pointer", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "date", "placeholder", "Select Date", "bsDaterangepicker", "", "placement", "left", 1, "form-control", "mt-3", "mt-lg-0", 2, "height", "46px", 3, "bsConfig"], [1, "d-flex", "justify-content-end"], [1, "total-records"], [1, "row"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-times", 2, "position", "absolute", "top", "15px", "right", "30px", "cursor", "pointer", 3, "click"], [1, "card-table", "mt-2", "register-sessions-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "status-tag", 3, "ngStyle"], [1, "cursor-pointer", "fa", "fa-eye", "font-16", "gray-500", 3, "routerLink"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function OrdersLogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, OrdersLogComponent_button_8_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ng-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, OrdersLogComponent_i_14_Template, 1, 0, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 15)(17, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, OrdersLogComponent_div_20_Template, 37, 27, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, OrdersLogComponent_ng_template_22_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 21)(25, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 21)(34, "ul", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, OrdersLogComponent_li_35_Template, 3, 5, "li", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.orderLogFilterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.orderLogFilterForm.controls["search"].value !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.usersList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.statusList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.orderLogFilterForm.controls["date"].value.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.allocationOrderList)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", (ctx.allocationOrderList == null ? null : ctx.allocationOrderList.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.allocationOrderList == null ? null : ctx.allocationOrderList.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.totalRecords < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.pages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 33017:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/allocation/components/view-deposited-cheques/view-deposited-cheques.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDepositedChequesComponent": () => (/* binding */ ViewDepositedChequesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/header.service */ 36690);
/* harmony import */ var _main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../main-fund/allocation/allocation/allocation-services/allocation.service */ 51445);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);








function ViewDepositedChequesComponent_div_55_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.chequeCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.chequeNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.bank[0] == null ? null : item_r8.bank[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 5, item_r8 == null ? null : item_r8.chequeDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 8, item_r8 == null ? null : item_r8.chequeCollectionJod, "2.3-3"), " JD");
  }
}
function ViewDepositedChequesComponent_div_55_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ViewDepositedChequesComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 25)(2, "div", 26)(3, "table", 27)(4, "thead")(5, "tr")(6, "th", 28)(7, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 28)(10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Cheque No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 28)(13, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 28)(16, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 28)(19, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ViewDepositedChequesComponent_div_55_tr_22_Template, 13, 11, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ViewDepositedChequesComponent_div_55_div_23_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.depositedChequesDetails == null ? null : ctx_r0.depositedChequesDetails.cheques);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.depositedChequesDetails == null ? null : ctx_r0.depositedChequesDetails.cheques == null ? null : ctx_r0.depositedChequesDetails.cheques.length) == 0);
  }
}
function ViewDepositedChequesComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ViewDepositedChequesComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 34)(4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewDepositedChequesComponent_div_68_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](70);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.openFileModal(item_r9, _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 37)(7, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const index_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", index_r10 + 1, ".", ctx_r3.getFileType(item_r9 == null ? null : item_r9.file), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", item_r9 == null ? null : item_r9.file, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ViewDepositedChequesComponent_ng_template_69_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r14.fileItem == null ? null : ctx_r14.fileItem.file, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ViewDepositedChequesComponent_ng_template_69_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 48)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "click to open pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx_r16.fileItem == null ? null : ctx_r16.fileItem.file, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ViewDepositedChequesComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ViewDepositedChequesComponent_ng_template_69_ng_container_1_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ViewDepositedChequesComponent_ng_template_69_ng_template_2_Template, 5, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 43)(5, "div", 44)(6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewDepositedChequesComponent_ng_template_69_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r13.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r5.fileItem == null ? null : ctx_r5.fileItem.fileType) == "png" || (ctx_r5.fileItem == null ? null : ctx_r5.fileItem.fileType) == "jpeg" || (ctx_r5.fileItem == null ? null : ctx_r5.fileItem.fileType) == "jpg")("ngIfElse", _r15);
  }
}
class ViewDepositedChequesComponent {
  constructor(_modalService, _headerService, _allocationService, _activeRoute) {
    this._modalService = _modalService;
    this._headerService = _headerService;
    this._allocationService = _allocationService;
    this._activeRoute = _activeRoute;
    this.viewDetailsAllocationOrderList = [];
  }
  ngOnInit() {
    this._headerService.setTitle('Allocation > View Details > Deposit Cheque ');
    this._activeRoute.params.subscribe(x => {
      this.viewChequeAllocationOrderDetailsDeposits(+x['orderId']);
    });
  }
  viewChequeAllocationOrderDetailsDeposits(orderId) {
    this._allocationService.viewChequeAllocationOrderDetailsDeposits(orderId).subscribe(response => {
      this.depositedChequesDetails = response.data.pop();
      console.log(this.depositedChequesDetails);
    });
  }
  openFileModal(item, content) {
    this.fileItem = item;
    this.fileItem['fileType'] = this.getFileType(item?.file);
    this._modalService.open(content, {
      centered: true,
      size: 'md'
    });
  }
  getFileType(fileName) {
    return fileName?.split('.').pop();
  }
}
ViewDepositedChequesComponent.ɵfac = function ViewDepositedChequesComponent_Factory(t) {
  return new (t || ViewDepositedChequesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_0__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_1__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
};
ViewDepositedChequesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ViewDepositedChequesComponent,
  selectors: [["app-view-deposited-cheques"]],
  decls: 71,
  vars: 17,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-12"], [1, "card-collect", "card-with-details"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-700", "font-18"], [1, "d-flex", "flex-column"], [1, "m-0", "fw-700", "font-14"], [1, "d-grid", "gap-4"], [1, "dark-gray"], [1, "light-gray", "fw-500"], [1, "d-flex", "justify-content-end", "fw-600", "font-18", "align-items-center", "gap-2"], [1, "bg-gray-400", "py-3", "px-5", "rounded", "d-flex", "align-items-center"], [1, "m-0"], [1, "row", "my-3"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-600", "font-16", "gray-500"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "col-12"], [1, "fw-600", "font-18"], [1, "fw-700", "font-14", "gray-500"], [1, "col-sm-6", "col-md-4"], ["class", "uploadedfile mb-2", 4, "ngFor", "ngForOf"], ["fileModal", ""], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "not-found"], [1, "uploadedfile", "mb-2"], [1, "d-flex"], ["type", "button", 1, "btn", "fview", 3, "click"], ["src", "assets/images/eye.png", "alt", ""], ["type", "button", 1, "btn"], ["download", "", 1, "btn", "fview", 3, "href"], ["src", "assets/images/Download.png", "alt", ""], [1, "modal-body", "p-2"], [4, "ngIf", "ngIfElse"], ["pdf", ""], [1, "flex-end"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "w-100", 3, "src"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center"], ["height", "80", "width", "80", "src", "assets/images/pdf.png", "alt", ""], ["target", "_blank", 1, "text-decoration-none", "text-capitalize", 3, "href"]],
  template: function ViewDepositedChequesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Deposit Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Closing Date & Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "div", 6)(16, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Deposit ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Employee");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 6)(26, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Account Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 6)(31, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Account No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 6)(36, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Currency ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 11)(42, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Deposited Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 12)(45, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 14)(49, "div", 15)(50, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Deposit Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ViewDepositedChequesComponent_div_55_Template, 24, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, ViewDepositedChequesComponent_ng_template_57_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 1)(60, "div", 19)(61, "div", 3)(62, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Uploaded files");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 1)(67, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, ViewDepositedChequesComponent_div_68_Template, 9, 3, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, ViewDepositedChequesComponent_ng_template_69_Template, 8, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 11, ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.createdAt, "medium"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.depositAllocationRecordId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.createdBy == null ? null : ctx.depositedChequesDetails.createdBy.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.sageBank == null ? null : ctx.depositedChequesDetails.sageBank.accountName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.sageBank == null ? null : ctx.depositedChequesDetails.sageBank.accountNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.currency[0] == null ? null : ctx.depositedChequesDetails.currency[0].lookupName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](47, 14, ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.depositedAmount, "2.3-3"), " JD");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Total No ", ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.cheques == null ? null : ctx.depositedChequesDetails.cheques.length, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.cheques)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.depositedChequesDetails == null ? null : ctx.depositedChequesDetails.files);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: [".d-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvdHJlYXN1cnkvYWxsb2NhdGlvbi9jb21wb25lbnRzL3ZpZXctZGVwb3NpdGVkLWNoZXF1ZXMvdmlldy1kZXBvc2l0ZWQtY2hlcXVlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtBQUNOO0FBR0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpICk7XG59XG5cbi51cGxvYWRlZGZpbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTFhZjIyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICM2OTY5Njk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_treasury_allocation_allocation_module_ts.js.map