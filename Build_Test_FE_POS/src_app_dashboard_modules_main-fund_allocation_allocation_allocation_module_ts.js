"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_main-fund_allocation_allocation_allocation_module_ts"],{

/***/ 74568:
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/allocation-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allocationRoutingModule": () => (/* binding */ allocationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _allocation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allocation.component */ 775);
/* harmony import */ var _desposit_cheque_desposit_cheque_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desposit-cheque/desposit-cheque.component */ 89041);
/* harmony import */ var _view_allocation_view_allocation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-allocation/view-allocation.component */ 12835);
/* harmony import */ var _view_deposited_cheque_details_view_deposited_cheque_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-deposited-cheque-details/view-deposited-cheque-details.component */ 78225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [{
  path: '',
  component: _allocation_component__WEBPACK_IMPORTED_MODULE_0__.mainfundAllocationComponent
}, {
  path: 'view-allocation/:id',
  component: _view_allocation_view_allocation_component__WEBPACK_IMPORTED_MODULE_2__.ViewAllocationComponent
}, {
  path: 'desposit-cheque',
  component: _desposit_cheque_desposit_cheque_component__WEBPACK_IMPORTED_MODULE_1__.DespositChequeComponent
}, {
  path: 'view-desposited-cheques/:orderId',
  component: _view_deposited_cheque_details_view_deposited_cheque_details_component__WEBPACK_IMPORTED_MODULE_3__.ViewDepositedChequeDetailsComponent
}];
class allocationRoutingModule {}
allocationRoutingModule.ɵfac = function allocationRoutingModule_Factory(t) {
  return new (t || allocationRoutingModule)();
};
allocationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: allocationRoutingModule
});
allocationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](allocationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

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

/***/ 775:
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/allocation.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainfundAllocationComponent": () => (/* binding */ mainfundAllocationComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allocation-services/allocation.service */ 51445);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/not-found/not-found.component */ 59442);









const _c0 = function (a0, a1) {
  return {
    "background-color": a0,
    color: a1
  };
};
const _c1 = function (a1) {
  return ["/mainFund-allocation/view-allocation", a1];
};
function mainfundAllocationComponent_div_63_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td")(15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 43)(18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.mainFundAllocationOrderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 8, item_r7 == null ? null : item_r7.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 10, item_r7 == null ? null : item_r7.depositAmount, "2.3-3"), " JD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 13, item_r7 == null ? null : item_r7.totalAmountDistibuted, "2.3-3"), " JD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.createdBy == null ? null : item_r7.createdBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](16, _c0, item_r7 == null ? null : item_r7.statusObj == null ? null : item_r7.statusObj.lookupBGColor, item_r7 == null ? null : item_r7.statusObj == null ? null : item_r7.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r7 == null ? null : item_r7.statusObj == null ? null : item_r7.statusObj.translations[0] == null ? null : item_r7.statusObj.translations[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c1, item_r7 == null ? null : item_r7.mainFundAllocationOrderId));
  }
}
function mainfundAllocationComponent_div_63_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function mainfundAllocationComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "div", 33)(2, "div", 34)(3, "table", 35)(4, "thead")(5, "tr")(6, "th", 36)(7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function mainfundAllocationComponent_div_63_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.sortByOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Order No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 38)(10, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 36)(12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function mainfundAllocationComponent_div_63_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 38)(15, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 36)(17, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function mainfundAllocationComponent_div_63_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.sortByDeposit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Total Deposited ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 38)(20, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 36)(22, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function mainfundAllocationComponent_div_63_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.sortByGrandAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Grand Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 38)(25, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 36)(27, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function mainfundAllocationComponent_div_63_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.sortByCreated());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Created By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 38)(30, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th", 36)(32, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function mainfundAllocationComponent_div_63_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "i", 38)(35, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, mainfundAllocationComponent_div_63_tr_39_Template, 20, 21, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, mainfundAllocationComponent_div_63_div_40_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const AllocationOrder_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (AllocationOrder_r4 == null ? null : AllocationOrder_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (AllocationOrder_r4 == null ? null : AllocationOrder_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (AllocationOrder_r4 == null ? null : AllocationOrder_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (AllocationOrder_r4 == null ? null : AllocationOrder_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (AllocationOrder_r4 == null ? null : AllocationOrder_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (AllocationOrder_r4 == null ? null : AllocationOrder_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", AllocationOrder_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (AllocationOrder_r4 == null ? null : AllocationOrder_r4.length) == 0);
  }
}
function mainfundAllocationComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    active: a0
  };
};
function mainfundAllocationComponent_li_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 46)(1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function mainfundAllocationComponent_li_78_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const page_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.setPage(page_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c2, ctx_r3.pageNo === page_r15))("disabled", ctx_r3.pageNo === page_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", page_r15 + 1, " ");
  }
}
class mainfundAllocationComponent {
  constructor(_allocationService, _headerService) {
    this._allocationService = _allocationService;
    this._headerService = _headerService;
    this.searchText = '';
    this.sort = 1;
    this.totalRecords = 18;
    this.pageNo = 0;
    this.pages = [];
    this.AllocationOrder = [];
  }
  ngOnInit() {
    this._headerService.setTitle('Allocation');
    this.getLastAllocation();
  }
  handleSearchInput(event) {
    console.log(event.target.value);
    const value = event.target.value;
    this.searchText = value;
    if (value.length >= 2) this.getAllocationList();
    if (!value) this.getAllocationList();
  }
  /**
   * get last allocation service
   */
  getLastAllocation() {
    this._allocationService.getLastAllocation().subscribe(response => {
      console.log(response, 'last allocation response');
      if (response?.isSuccess) {
        this.lastAllocationOrder = response?.data;
        this.getAllocationList();
      }
    });
  }
  /**
   * get list of allocation orders
   */
  getAllocationList() {
    this._allocationService.getAllocation(this.pageNo, this.searchText, this.sort).subscribe(response => {
      console.log(response, 'list of  allocation response');
      if (response) {
        this.AllocationOrder = response?.data.filter(x => x.mainFundAllocationOrderId !== this.lastAllocationOrder.mainFundAllocationOrderId);
        this.totalRecords = response?.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecords / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      }
    });
  }
  /**
   * resetting search input field
   */
  removeSearch() {
    this.searchText = '';
    this.sort = 1;
    this.getAllocationList();
  }
  // Sorting Functions
  sortByOrder() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getAllocationList();
  }
  sortByDate() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getAllocationList();
  }
  sortByDeposit() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getAllocationList();
  }
  sortByGrandAmount() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getAllocationList();
  }
  sortByCreated() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getAllocationList();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.getAllocationList();
  }
  /**
   * pagination
   * @param page page no
   */
  setPage(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getAllocationList();
  }
}
mainfundAllocationComponent.ɵfac = function mainfundAllocationComponent_Factory(t) {
  return new (t || mainfundAllocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_1__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService));
};
mainfundAllocationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: mainfundAllocationComponent,
  selectors: [["app-allocation"]],
  decls: 79,
  vars: 36,
  consts: [[1, "card-Box"], [1, "flex-between"], [1, "headingText"], [1, "headButton", 3, "ngStyle"], [1, "headButtonText"], [1, "separator"], [1, "flex-between", 2, "margin-top", "25px"], [1, "flex-column"], [1, "mdtext"], [1, "smText"], [1, "linkText", "fw-600", 2, "cursor", "pointer", 3, "routerLink"], [1, "flex-between", 2, "gap", "15px"], [1, "amountButton", "mdtext"], [1, "row", "applyMargin"], [1, "col-md-5"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Bank or order no. grand amount", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "col-md-2", "d-flex", "justify-content-end", "btnadd"], [1, "col-md-6"], [1, "col-md-6", "text-end"], [1, "total"], [1, "row"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "headButton", "headButtonText", 3, "ngStyle"], [2, "cursor", "pointer"], [1, "linkText2", 3, "routerLink"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function mainfundAllocationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Last Allocation Order Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Creating Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 7)(16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Created By");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 7)(21, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Order No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " View details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 6)(29, "div", 11)(30, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Grand Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 11)(36, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Deposit Amounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 11)(42, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](46, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 13)(48, "div", 14)(49, "div", 15)(50, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function mainfundAllocationComponent_Template_button_click_50_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function mainfundAllocationComponent_Template_input_ngModelChange_52_listener($event) {
        return ctx.searchText = $event;
      })("input", function mainfundAllocationComponent_Template_input_input_52_listener($event) {
        return ctx.handleSearchInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function mainfundAllocationComponent_Template_button_click_53_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "div", 14)(56, "div", 21)(57, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 23)(59, "div", 24)(60, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, mainfundAllocationComponent_div_63_Template, 41, 32, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, mainfundAllocationComponent_ng_template_65_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 29)(68, "h6", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, " Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 29)(77, "ul", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, mainfundAllocationComponent_li_78_Template, 3, 5, "li", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](31, _c0, ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.statusObj == null ? null : ctx.lastAllocationOrder.statusObj.lookupBGColor, ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.statusObj == null ? null : ctx.lastAllocationOrder.statusObj.lookupTextColor));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.statusObj == null ? null : ctx.lastAllocationOrder.statusObj.translations[0] == null ? null : ctx.lastAllocationOrder.statusObj.translations[0].lookupName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 20, ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.createdAt));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.createdBy == null ? null : ctx.lastAllocationOrder.createdBy.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.mainFundAllocationOrderId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c1, ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.mainFundAllocationOrderId));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](34, 22, ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.totalAmountDistibuted, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](40, 25, ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.depositAmount, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](46, 28, ctx.lastAllocationOrder == null ? null : ctx.lastAllocationOrder.difference, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.AllocationOrder)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", (ctx.AllocationOrder == null ? null : ctx.AllocationOrder.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.AllocationOrder == null ? null : ctx.AllocationOrder.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.totalRecords < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.pages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [".applyMargin[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.total[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 15px 0 0px;\n  padding: 10px 0px;\n}\n.total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #929eae;\n  margin: 0px;\n  padding: 10px 0px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.btn-provide[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: #c5c6c7;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.card-Box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 24px 34px;\n}\n\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  \n  color: #1b212d;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 22px;\n  \n  color: #858585;\n}\n\n.linkText[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #4e9aff;\n}\n\n.linkText2[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #4e9aff;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.headButtonText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  margin-top: 22px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  align-items: center;\n}\n\n.amountButton[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  \n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 34px 14px 35px;\n  gap: 10px;\n  \n  height: 48px;\n  \n  background: #f8f8f8;\n  border: 0.5px solid #e9e9e9;\n  border-radius: 10px;\n}\n\n.statusButton[_ngcontent-%COMP%] {\n  width: 95px;\n  height: 34.2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff3db;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2FsbG9jYXRpb24vYWxsb2NhdGlvbi9hbGxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGdEQUFBO0VBQ0Esd0RBQUE7RUFDQSxxREFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQURBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUVBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUVBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0VBRUEsY0FBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUhBO0VBQ0UsWUFBQTtFQUVBLHNCQUFBO0VBRUEsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbHlNYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG4udG90YWwge1xuICBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAxNXB4IDAgMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICB9XG59XG4uY2FyZC10YWJsZSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2Y0ZjRmNDtcbiAgYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG4uYnRuLXByb3ZpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogOHB4IDE0cHggOHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJ0bi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM2Yzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTRweCA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5wbGF5LWxlZnQge1xuICBjb2xvcjogI2VjZWFlYTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucGxheS1yaWdodCB7XG4gIGNvbG9yOiAjZWNlYWVhO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5jYXJkLUJveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjRweCAzNHB4O1xufVxuLmZsZXgtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkaW5nVGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICAvKiBUZXh0IENvbG9yL1RleHQgMSAqL1xuXG4gIGNvbG9yOiAjMWIyMTJkO1xufVxuLm1kdGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICAvKiBUZXh0IENvbG9yL1RleHQgMSAqL1xuXG4gIGNvbG9yOiAjMWIyMTJkO1xufVxuLnNtVGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG5cbiAgY29sb3I6ICM4NTg1ODU7XG59XG4ubGlua1RleHQge1xuICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM0ZTlhZmY7XG59XG4ubGlua1RleHQyIHtcbiAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNGU5YWZmO1xufVxuXG4uaGVhZEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiAzNC4ycHg7XG5cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmhlYWRCdXR0b25UZXh0IHtcbiAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2VwYXJhdG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cbi5mbGV4LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFtb3VudEJ1dHRvbiB7XG4gIC8qIFByZXZpZXcgKi9cblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC8qIEF1dG8gbGF5b3V0ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMzRweCAxNHB4IDM1cHg7XG4gIGdhcDogMTBweDtcblxuICAvKndpZHRoOiAxNDBweDsqL1xuICBoZWlnaHQ6IDQ4cHg7XG5cbiAgLyogR3JheS9HcmF5IDIgKi9cblxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3RhdHVzQnV0dG9uIHtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMzQuMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kOiAjZmZmM2RiO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 92391:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/allocation.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allocationModule": () => (/* binding */ allocationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _allocation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allocation-routing.module */ 74568);
/* harmony import */ var _view_allocation_view_allocation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-allocation/view-allocation.component */ 12835);
/* harmony import */ var _cash_deposit_modal_cash_deposit_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cash-deposit-modal/cash-deposit-modal.component */ 32502);
/* harmony import */ var _view_image_view_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-image/view-image.component */ 72200);
/* harmony import */ var _desposit_cheque_desposit_cheque_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desposit-cheque/desposit-cheque.component */ 89041);
/* harmony import */ var _allocation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allocation.component */ 775);
/* harmony import */ var _view_deposited_cheque_details_view_deposited_cheque_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-deposited-cheque-details/view-deposited-cheque-details.component */ 78225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);










class allocationModule {}
allocationModule.ɵfac = function allocationModule_Factory(t) {
  return new (t || allocationModule)();
};
allocationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: allocationModule
});
allocationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _allocation_routing_module__WEBPACK_IMPORTED_MODULE_1__.allocationRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](allocationModule, {
    declarations: [_allocation_component__WEBPACK_IMPORTED_MODULE_6__.mainfundAllocationComponent, _view_allocation_view_allocation_component__WEBPACK_IMPORTED_MODULE_2__.ViewAllocationComponent, _cash_deposit_modal_cash_deposit_modal_component__WEBPACK_IMPORTED_MODULE_3__.CashDepositModalComponent, _view_image_view_image_component__WEBPACK_IMPORTED_MODULE_4__.ViewImageComponent, _desposit_cheque_desposit_cheque_component__WEBPACK_IMPORTED_MODULE_5__.DespositChequeComponent, _view_deposited_cheque_details_view_deposited_cheque_details_component__WEBPACK_IMPORTED_MODULE_7__.ViewDepositedChequeDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _allocation_routing_module__WEBPACK_IMPORTED_MODULE_1__.allocationRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 32502:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/cash-deposit-modal/cash-deposit-modal.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashDepositModalComponent": () => (/* binding */ CashDepositModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _view_image_view_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view-image/view-image.component */ 72200);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../allocation-services/allocation.service */ 51445);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/directive/drag-and-drop.directive */ 96603);










const _c0 = ["depositSucess"];
const _c1 = ["inputFile"];
function CashDepositModalComponent_ng_container_44_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CashDepositModalComponent_ng_container_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_44_ng_container_1_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.f["depositAmount"] == null ? null : ctx_r10.f["depositAmount"].errors == null ? null : ctx_r10.f["depositAmount"].errors["required"]);
  }
}
function CashDepositModalComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_44_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.f["depositAmount"] == null ? null : ctx_r0.f["depositAmount"].invalid) && (ctx_r0.f["depositAmount"] == null ? null : ctx_r0.f["depositAmount"].touched) || (ctx_r0.f["depositAmount"] == null ? null : ctx_r0.f["depositAmount"].dirty));
  }
}
function CashDepositModalComponent_ng_container_45_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amount must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CashDepositModalComponent_ng_container_45_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_45_ng_container_1_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.f["depositAmount"] == null ? null : ctx_r12.f["depositAmount"].errors == null ? null : ctx_r12.f["depositAmount"].errors["pattern"]);
  }
}
function CashDepositModalComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_45_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r1.f["depositAmount"] == null ? null : ctx_r1.f["depositAmount"].invalid) && (ctx_r1.f["depositAmount"] == null ? null : ctx_r1.f["depositAmount"].touched) || (ctx_r1.f["depositAmount"] == null ? null : ctx_r1.f["depositAmount"].dirty));
  }
}
function CashDepositModalComponent_ng_container_46_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amount must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CashDepositModalComponent_ng_container_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_46_ng_container_1_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.f["depositAmount"] == null ? null : ctx_r14.f["depositAmount"].errors == null ? null : ctx_r14.f["depositAmount"].errors["zeroAmount"]);
  }
}
function CashDepositModalComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_46_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r2.f["depositAmount"] == null ? null : ctx_r2.f["depositAmount"].invalid) && (ctx_r2.f["depositAmount"] == null ? null : ctx_r2.f["depositAmount"].touched) || (ctx_r2.f["depositAmount"] == null ? null : ctx_r2.f["depositAmount"].dirty));
  }
}
function CashDepositModalComponent_ng_container_47_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Deposited amount must be equal to distributed amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CashDepositModalComponent_ng_container_47_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_47_ng_container_1_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.f["depositAmount"] == null ? null : ctx_r16.f["depositAmount"].errors == null ? null : ctx_r16.f["depositAmount"].errors["unEqualAmount"]);
  }
}
function CashDepositModalComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_47_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r3.f["depositAmount"] == null ? null : ctx_r3.f["depositAmount"].invalid) && (ctx_r3.f["depositAmount"] == null ? null : ctx_r3.f["depositAmount"].touched) || (ctx_r3.f["depositAmount"] == null ? null : ctx_r3.f["depositAmount"].dirty));
  }
}
function CashDepositModalComponent_ng_container_65_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Uploading the attachment is required please upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CashDepositModalComponent_ng_container_65_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_65_ng_container_1_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.f["attachment"] == null ? null : ctx_r18.f["attachment"].errors == null ? null : ctx_r18.f["attachment"].errors["required"]);
  }
}
function CashDepositModalComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_65_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r5.f["attachment"] == null ? null : ctx_r5.f["attachment"].invalid) && (ctx_r5.f["attachment"] == null ? null : ctx_r5.f["attachment"].touched) || (ctx_r5.f["attachment"] == null ? null : ctx_r5.f["attachment"].dirty));
  }
}
function CashDepositModalComponent_small_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.invalidFileType);
  }
}
function CashDepositModalComponent_ng_container_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34)(1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CashDepositModalComponent_ng_container_68_div_1_Template_p_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.openMdalImage(item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 36)(4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CashDepositModalComponent_ng_container_68_div_1_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.openMdalImage(item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CashDepositModalComponent_ng_container_68_div_1_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.removeFile(item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r21 == null ? null : item_r21.fileName);
  }
}
function CashDepositModalComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_container_68_div_1_Template, 8, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.filesArray);
  }
}
function CashDepositModalComponent_ng_template_76_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r26.response == null ? null : ctx_r26.response.Errors[0] == null ? null : ctx_r26.response.Errors[0].ErrorMessageEn);
  }
}
function CashDepositModalComponent_ng_template_76_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.depositSuccessMessage);
  }
}
function CashDepositModalComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CashDepositModalComponent_ng_template_76_h5_1_Template, 3, 1, "h5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CashDepositModalComponent_ng_template_76_h5_2_Template, 3, 1, "h5", 42);
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
class CashDepositModalComponent {
  constructor(fb, modalService, activeModal, _commonService, _allocationService) {
    this.fb = fb;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this._commonService = _commonService;
    this._allocationService = _allocationService;
    this.filesArray = [];
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']; //'application/pdf'
    this.depositSuccessMessage = '';
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    this.initForm();
    this.formGroup.valueChanges.subscribe(value => {
      if (+value['depositAmount'] == 0) {
        this.formGroup.controls['depositAmount'].setErrors({
          'zeroAmount': true
        });
      }
    });
  }
  initForm() {
    this.formGroup = this.fb.group({
      orderDetailId: [''],
      depositAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+(\.[0-9]{1,10})?$')]],
      attachment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
  }
  get f() {
    return this.formGroup.controls;
  }
  handleDeposit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      if (this.formGroup.controls['depositAmount'].value <= 0) {
        this.formGroup.controls['depositAmount'].setErrors({
          'zeroAmount': true
        });
        return;
      }
      let files = this.filesArray.map(x => {
        return x.file;
      });
      let formData = new FormData();
      formData.append('orderDetailId', this.depositAmount['allocationOrderDetailsId']);
      formData.append('depositAmount', this.formGroup.value['depositAmount']);
      for (let file of files) {
        formData.append('files', file);
      }
      this._allocationService.allocationOrdersService(formData).subscribe(response => {
        this.response = response;
        if (this.response.isSuccess) {
          this.depositSuccessMessage = 'Deposit process successfully completed';
          this.sendtoLoadData.emit(true);
        }
        this.modalService.open(this.depositSucessModal);
        setTimeout(() => {
          this.modalService.dismissAll();
        }, 3000);
      });
    }
  }
  handleFocusOut(amount) {
    let value = +this.formGroup.controls['depositAmount'].value;
    if (amount == value) {
      this.formGroup.controls['depositAmount'].setValue(value.toFixed(3));
    } else {
      this.formGroup.controls['depositAmount'].setErrors({
        'unEqualAmount': true
      });
    }
  }
  filesDropped(data) {
    this.enter = false;
    let isInvalid = this.checkInvalidImageFormat(data);
    let files = data.map(x => {
      return x.file;
    });
    this.formGroup.get('attachment')?.setValue('attached');
    if (!isInvalid) {
      files.forEach(file => {
        this._commonService.fileToBase64(file).then(response => {
          this.filesArray = [...this.filesArray, response];
        });
      });
    }
  }
  onSelectFile(event) {
    let files = [...event.target.files];
    this.formGroup.get('attachment')?.setValue('attached');
    if (files.length > 0) {
      let isInvalid = this.checkInvalidImageFormat(files);
      if (!isInvalid) {
        files.forEach(file => {
          this._commonService.fileToBase64(file).then(response => {
            this.filesArray = [...this.filesArray, response];
          });
        });
      }
    }
  }
  checkInvalidImageFormat(data) {
    let files;
    let getFiles = data.map(x => {
      return x.file;
    });
    if (getFiles[0] !== undefined) {
      files = getFiles;
    } else {
      files = data;
    }
    let invalidExtentions = false;
    for (let file of files) {
      if (!this.fileTypes.includes(file.type)) {
        invalidExtentions = true;
        this.invalidFileType = 'This file not support, supported formates: JPEG, JPG, PNG, PDF';
        this.formGroup.get('attachments')?.patchValue('');
        setTimeout(() => {
          this.invalidFileType = '';
        }, 3000);
        break;
      }
    }
    return invalidExtentions;
  }
  removeFile(item) {
    this.inputFile.nativeElement.value = null;
    let index = this.filesArray.findIndex(file => file.fileName == item.fileName);
    this.filesArray.splice(index, 1);
    if (this.filesArray.length == 0) {
      this.formGroup.get('attachment')?.setValue('');
    }
  }
  openMdalImage(item) {
    const modalRef = this.modalService.open(_view_image_view_image_component__WEBPACK_IMPORTED_MODULE_0__.ViewImageComponent);
    modalRef.componentInstance.imageUploadedView = item;
  }
}
CashDepositModalComponent.ɵfac = function CashDepositModalComponent_Factory(t) {
  return new (t || CashDepositModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_2__.AllocationService));
};
CashDepositModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CashDepositModalComponent,
  selectors: [["app-cash-deposit-modal"]],
  viewQuery: function CashDepositModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.depositSucessModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
    }
  },
  inputs: {
    depositAmount: "depositAmount"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  decls: 78,
  vars: 16,
  consts: [[1, "modal-body"], [1, "row"], [1, "col-md-12"], ["ngbAutofocus", "", 1, "modal-head"], [1, "row", "mt-3"], [1, "col-md-4"], [1, "flex-column"], [1, "mdtext"], [1, "smText"], [1, "col-md-5"], [3, "formGroup", "submit"], [1, "d-flex", "align-items-center", "gap-2", "mt-3"], [1, "font-18", "fw-600", "dark-gray"], ["type", "text", "formControlName", "depositAmount", 1, "form-control", 3, "focusout"], [4, "ngIf"], [1, "my-4"], [1, "largeText"], [1, "font-18", "fw-600", "dark-gray", "my-3"], [1, "col-md-8"], [1, "form-group", "mb-3"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "multiple", "", "hidden", "", 1, "form-control", 3, "change"], ["inputFile", ""], ["class", "text-danger", 4, "ngIf"], [1, "col-md-6"], [1, "flex-end", 2, "margin-top", "24px"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["depositSucess", ""], [1, "text-danger"], ["class", "uploadedfile mb-2", 4, "ngFor", "ngForOf"], [1, "uploadedfile", "mb-2"], [3, "click"], [1, "d-flex"], ["type", "button", 1, "btn", "fview", 3, "click"], ["src", "assets/images/eye.png", "alt", ""], ["type", "button", 1, "btn", 3, "click"], ["src", "assets/images/trash.png", "alt", ""], ["class", "m-0 py-5 text-center py-2 fw-600", 4, "ngIf"], ["class", "m-0 py-2 text-center fw-600", 4, "ngIf"], [1, "m-0", "py-5", "text-center", "py-2", "fw-600"], [1, "text-danger", "fa-regular", "fa-circle-xmark", "me-2"], [1, "m-0", "py-2", "text-center", "fw-600"], [1, "green-clr", "fa-regular", "fa-circle-check", "me-2"]],
  template: function CashDepositModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cash Deposit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Bank Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5)(14, "div", 6)(15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Account Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5)(20, "div", 6)(21, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Account No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 4)(26, "div", 5)(27, "div", 6)(28, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 9)(33, "div", 6)(34, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Distribute Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function CashDepositModalComponent_Template_form_submit_39_listener() {
        return ctx.handleDeposit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 11)(41, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Deposited Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focusout", function CashDepositModalComponent_Template_input_focusout_43_listener() {
        return ctx.handleFocusOut(ctx.depositAmount == null ? null : ctx.depositAmount.distributedAmount);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, CashDepositModalComponent_ng_container_44_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, CashDepositModalComponent_ng_container_45_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, CashDepositModalComponent_ng_container_46_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, CashDepositModalComponent_ng_container_47_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 15)(49, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " To Complete the process Please upload the bank deposit voucher ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " Attachment (Upload Bank Voucher) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 1)(54, "div", 18)(55, "div", 19)(56, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("files", function CashDepositModalComponent_Template_div_files_56_listener($event) {
        return ctx.filesDropped($event);
      })("enter", function CashDepositModalComponent_Template_div_enter_56_listener() {
        return ctx.enter = !ctx.enter;
      })("leave", function CashDepositModalComponent_Template_div_leave_56_listener() {
        return ctx.enter = !ctx.enter;
      })("click", function CashDepositModalComponent_Template_div_click_56_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](64);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r4.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Drag & drop files");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Supported formates: JPEG, PNG, PDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "input", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CashDepositModalComponent_Template_input_change_63_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, CashDepositModalComponent_ng_container_65_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, CashDepositModalComponent_small_66_Template, 2, 1, "small", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, CashDepositModalComponent_ng_container_68_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 27)(70, "div", 28)(71, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CashDepositModalComponent_Template_button_click_71_listener() {
        return ctx.activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 28)(74, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, CashDepositModalComponent_ng_template_76_Template, 3, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.depositAmount == null ? null : ctx.depositAmount.sageBank == null ? null : ctx.depositAmount.sageBank.bankName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.depositAmount == null ? null : ctx.depositAmount.sageBank == null ? null : ctx.depositAmount.sageBank.accountName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.depositAmount == null ? null : ctx.depositAmount.sageBank == null ? null : ctx.depositAmount.sageBank.accountNo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.depositAmount == null ? null : ctx.depositAmount.currency[0] == null ? null : ctx.depositAmount.currency[0].lookupName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](38, 13, ctx.depositAmount == null ? null : ctx.depositAmount.distributedAmount, "2.3-3"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["depositAmount"] == null ? null : ctx.f["depositAmount"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["depositAmount"] == null ? null : ctx.f["depositAmount"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["depositAmount"] == null ? null : ctx.f["depositAmount"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["depositAmount"] == null ? null : ctx.f["depositAmount"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["attachment"] == null ? null : ctx.f["attachment"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.invalidFileType);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filesArray.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__.DragAndDropDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
  styles: [".modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.card-page[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #c4cdd5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  color: #1b212d;\n  padding: 5px 0 15px;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .invoic[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #929eae;\n  font-weight: 500;\n  padding: 1px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1b212d;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 80px !important;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.btn-upload[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  margin: 0px;\n}\n\n.overlay-bi[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  margin: -30px 0 0 0;\n  z-index: 5;\n  position: relative;\n}\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #fff3f3;\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.uplod[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #676767;\n}\n\n.save-img[_ngcontent-%COMP%] {\n  width: 22px !important;\n}\n\n.fileView[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.btn[_ngcontent-%COMP%]:disabled, .btn.disabled[_ngcontent-%COMP%] {\n  background: #f1f3f3 !important;\n  color: #9b9b9b !important;\n  border: 1px solid #f1f3f3;\n  cursor: initial;\n}\n\n.card-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n\n.card-sm[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1b212d;\n  margin-bottom: 5px;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #929eae;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  height: 120px;\n  border-radius: 6px;\n  margin: 5px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  padding: 10px;\n}\n\n.fview[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 50%;\n  margin: 0px 5px;\n  width: 30px;\n  height: 30px;\n}\n.fview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.depositeText[_ngcontent-%COMP%], .headButtonText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 17px;\n  text-align: left;\n  font-family: Kumbh Sans;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  margin-top: 22px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  align-items: center;\n}\n\n.amountButton[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 34px 14px 35px;\n  gap: 10px;\n  width: 140px;\n  height: 48px;\n  background: #f8f8f8;\n  border: 0.5px solid #e9e9e9;\n  border-radius: 10px;\n}\n\n.depositeButton[_ngcontent-%COMP%], .statusButton[_ngcontent-%COMP%] {\n  width: 95px;\n  height: 34.2px;\n  display: flex;\n}\n\n.depositeButton[_ngcontent-%COMP%], .statusButton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n\n.statusButton[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  background: #fff3db;\n}\n\n.depositeButton[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  background: #dc3545;\n}\n\n.depositeText[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.flex-start[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 31px;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 110px;\n}\n\n.largeText[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1b212d;\n}\n\n.uploadButton[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 110px;\n  background: #f8f8f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.uploadText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0;\n  text-align: center;\n  color: #676767;\n}\n\n.flex-end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 16px;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  color: #929EAE;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2FsbG9jYXRpb24vYWxsb2NhdGlvbi9jYXNoLWRlcG9zaXQtbW9kYWwvY2FzaC1kZXBvc2l0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSUY7QUFIRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFLSjtBQUhFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtKO0FBSkk7RUFDRSxjQUFBO0FBTU47QUFIRTtFQUNFLGdCQUFBO0FBS0o7QUFKSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBTU47QUFKSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFNTjtBQUxNO0VBQ0UsY0FBQTtBQU9SOztBQUZBO0VBQ0UsdUJBQUE7QUFLRjs7QUFGQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUtGO0FBSkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFNSjtBQUpFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU1KO0FBSkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTUY7O0FBRkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBS0o7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUtGOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFNRjtBQUxFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT0o7O0FBSEE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFNRjtBQUpFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTUo7QUFMSTtFQUNFLFdBQUE7QUFPTjtBQUpFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFKQTtFQUNFLHNCQUFBO0FBT0Y7O0FBSkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFIQTs7RUFFRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSEE7RUFDRSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UseUJBQUE7QUFPRjs7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7QUFMRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU9KO0FBTEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBT0o7QUFMRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU9KO0FBTkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVFOOztBQUpBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU9GO0FBTkU7RUFDRSxzQkFBQTtBQVFKOztBQUxBOztFQUVFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFQQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBV0Y7O0FBVEE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQVlGOztBQVZBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWFGOztBQVhBOzs7RUFHRSxrQkFBQTtBQWNGOztBQVpBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZUY7O0FBYkE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0FBaUJGOztBQWZBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBa0JGOztBQWhCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBbUJGOztBQWpCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXNCRjs7QUFwQkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF1QkY7O0FBckJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBd0JGOztBQXRCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF5QkYiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY2FyZC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwcHggc29saWQgI2M0Y2RkNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuLmNhcmQtcGFnZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4ubW9kYWwtaGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjZGQ1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzFiMjEyZDtcbiAgICBwYWRkaW5nOiA1cHggMCAxNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICM5MjllYWU7XG4gICAgfVxuICB9XG4gIC5pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIC5pbnZvaWMge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICBiIHtcbiAgICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG50ZXh0YXJlYSB7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC11cGxvYWQge1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzkzOWFhODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMGYwZjBmO1xuICB9XG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjNjc2NzY3O1xuICB9XG59XG4uYnRuLXVwbG9hZCB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDM1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5jYXJkLWltZyB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG4ub3ZlcmxheS1iaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSAxOTkgMTk5IC8gMjElKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTtcbn1cbi5jYXJkLWZvcm0gLmVkaXQtYnRuIHtcbiAgbWFyZ2luOiAtMzBweCAwIDAgMDtcbiAgei1pbmRleDogNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbn1cblxuLnVwbG9hZGVkZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMWFmMjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmZmYzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICM2OTY5Njk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4udXBsb2Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxuLnNhdmUtaW1nIHtcbiAgd2lkdGg6IDIycHggIWltcG9ydGFudDtcbn1cbi5maWxlVmlldyB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuXG4uYnRuOmRpc2FibGVkLFxuLmJ0bi5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmMWYzZjMgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5YjliOWIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmMztcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4uY2FyZC1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uY2FyZC1zbSB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzkyOWVhZTtcbiAgfVxuICAubm90ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuLmZ2aWV3IHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG4uZGVwb3NpdGVUZXh0LFxuLmhlYWRCdXR0b25UZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLmhlYWRCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMzQuMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uc2VwYXJhdG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cbi5mbGV4LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hbW91bnRCdXR0b24ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAzNHB4IDE0cHggMzVweDtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTllOWU5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmRlcG9zaXRlQnV0dG9uLFxuLnN0YXR1c0J1dHRvbiB7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDM0LjJweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kZXBvc2l0ZUJ1dHRvbixcbi5zdGF0dXNCdXR0b24sXG5pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5zdGF0dXNCdXR0b24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjNkYjtcbn1cbi5kZXBvc2l0ZUJ1dHRvbiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xufVxuLmRlcG9zaXRlVGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZsZXgtc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzFweDtcbn1cbmlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTEwcHg7XG59XG4ubGFyZ2VUZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFiMjEyZDtcbn1cbi51cGxvYWRCdXR0b24ge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4udXBsb2FkVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxuLmZsZXgtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cbi5tZHRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG4gIGNvbG9yOiAjMWIyMTJkO1xufVxuLnNtVGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5MjlFQUU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 89041:
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/desposit-cheque/desposit-cheque.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DespositChequeComponent": () => (/* binding */ DespositChequeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _view_image_view_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view-image/view-image.component */ 72200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../allocation-services/allocation.service */ 51445);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/directive/drag-and-drop.directive */ 96603);












const _c0 = ["inputFile"];
const _c1 = ["depositSucess"];
function DespositChequeComponent_ng_container_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Selected cheques amount must be equal to allocation amount.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DespositChequeComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DespositChequeComponent_ng_container_40_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.f["selectedAmount"] == null ? null : ctx_r0.f["selectedAmount"].errors == null ? null : ctx_r0.f["selectedAmount"].errors["unEqualAmounts"]);
  }
}
function DespositChequeComponent_div_57_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DespositChequeComponent_div_57_tr_33_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.handleCheckBoxChange());
    })("ngModelChange", function DespositChequeComponent_div_57_tr_33_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const item_r14 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](item_r14.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const index_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", item_r14.checked)("id", index_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r14 == null ? null : item_r14.chequeCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r14 == null ? null : item_r14.chequeNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r14 == null ? null : item_r14.bank[0] == null ? null : item_r14.bank[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 7, item_r14 == null ? null : item_r14.chequeDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 10, item_r14 == null ? null : item_r14.chequeCollectionJod, "2.3-3"), " JD");
  }
}
function DespositChequeComponent_div_57_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DespositChequeComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26)(1, "div", 53)(2, "div", 54)(3, "table", 55)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 56)(8, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_div_57_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 58)(11, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 56)(13, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_div_57_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.sortByCheque());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 58)(16, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 56)(18, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_div_57_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "i", 58)(21, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "th", 56)(23, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_div_57_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 58)(26, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "th", 56)(28, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_div_57_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "i", 58)(31, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, DespositChequeComponent_div_57_tr_33_Template, 15, 13, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, DespositChequeComponent_div_57_div_34_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (ctx_r1.settledChequeList == null ? null : ctx_r1.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (ctx_r1.settledChequeList == null ? null : ctx_r1.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (ctx_r1.settledChequeList == null ? null : ctx_r1.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (ctx_r1.settledChequeList == null ? null : ctx_r1.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (ctx_r1.settledChequeList == null ? null : ctx_r1.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.settledChequeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.settledChequeList == null ? null : ctx_r1.settledChequeList.length) == 0);
  }
}
function DespositChequeComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    active: a0
  };
};
function DespositChequeComponent_li_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 64)(1, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_li_72_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const page_r25 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.setPage(page_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r25 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c2, ctx_r4.pageNo === page_r25))("disabled", ctx_r4.pageNo === page_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", page_r25 + 1, " ");
  }
}
function DespositChequeComponent_ng_container_94_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Uploading the attachment is required please upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DespositChequeComponent_ng_container_94_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DespositChequeComponent_ng_container_94_ng_container_1_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r28.f["attachment"] == null ? null : ctx_r28.f["attachment"].errors == null ? null : ctx_r28.f["attachment"].errors["required"]);
  }
}
function DespositChequeComponent_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DespositChequeComponent_ng_container_94_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r6.f["attachment"] == null ? null : ctx_r6.f["attachment"].invalid) && (ctx_r6.f["attachment"] == null ? null : ctx_r6.f["attachment"].touched) || (ctx_r6.f["attachment"] == null ? null : ctx_r6.f["attachment"].dirty));
  }
}
function DespositChequeComponent_small_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.invalidFileType);
  }
}
function DespositChequeComponent_ng_container_98_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 67)(1, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_ng_container_98_div_1_Template_p_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.openMdalImage(item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 69)(4, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_ng_container_98_div_1_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.openMdalImage(item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_ng_container_98_div_1_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.removeFile(item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r31 == null ? null : item_r31.fileName);
  }
}
function DespositChequeComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DespositChequeComponent_ng_container_98_div_1_Template, 8, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r8.filesArray);
  }
}
function DespositChequeComponent_ng_template_106_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r36.response == null ? null : ctx_r36.response.Errors[0] == null ? null : ctx_r36.response.Errors[0].ErrorMessageEn);
  }
}
function DespositChequeComponent_ng_template_106_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r37.depositSuccessMessage);
  }
}
function DespositChequeComponent_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DespositChequeComponent_ng_template_106_h5_1_Template, 3, 1, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DespositChequeComponent_ng_template_106_h5_2_Template, 3, 1, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.response == null ? null : ctx_r10.response.Errors == null ? null : ctx_r10.response.Errors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.response == null ? null : ctx_r10.response.data);
  }
}
class DespositChequeComponent {
  constructor(fb, modalService, _allocationService, _commonService, _headeService, _location) {
    this.fb = fb;
    this.modalService = modalService;
    this._allocationService = _allocationService;
    this._commonService = _commonService;
    this._headeService = _headeService;
    this._location = _location;
    this.searchText = '';
    this.orderId = 0;
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 0;
    this.pages = [];
    this.settledChequeList = [];
    this.filesArray = [];
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    this.checkedItems = [];
    this.selectedChequeAmount = 0;
    this.depositSuccessMessage = '';
  }
  ngOnInit() {
    this._headeService.setTitle('Allocation > View Details > Deposit Cheque');
    this.getAllocationDetails();
    this.initForm();
    //console.log(this.location.back());
    //this.location.back();
  }

  goBack() {
    this._location.back();
  }
  getAllocationDetails() {
    this.allocationOrderItemDetails = JSON.parse(localStorage.getItem('_mainFundAlocationOrderItemDetails'));
    this.orderId = this.allocationOrderItemDetails?.allocationOrderDetailsId;
    this.getListOfSettledChequesForAllocationOrderDetails();
    console.log(this.allocationOrderItemDetails);
  }
  getListOfSettledChequesForAllocationOrderDetails() {
    let params = `?allocationOrderDetailsId=${this.orderId}&search=${this.searchText}&sort=${this.sort}&pageNo=${this.pageNo}&pageSize=6`;
    this._allocationService.getListOfSettledChequesForAllocationOrderDetails(params).subscribe(res => {
      if (res?.data.length > 0) {
        this.settledChequeList = res?.data.map(x => {
          return {
            ...x,
            checked: false
          };
        });
        ;
        this.totalRecords = res?.totalRecordCount;
        console.log(this.settledChequeList);
      }
    });
  }
  initForm() {
    this.formGroup = this.fb.group({
      notes: [''],
      attachment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      selectedAmount: ['']
    });
  }
  get f() {
    return this.formGroup.controls;
  }
  despositCheque() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    } else {
      let files = this.filesArray.map(x => {
        return x.file;
      });
      let formData = new FormData();
      formData.append('orderDetailId', this.orderId.toString());
      formData.append('chequeCollectionIds', this.chequeIds.toString());
      formData.append('notes', this.formGroup.value['notes']);
      for (let file of files) {
        formData.append('files', file);
      }
      this._allocationService.allocationOrderDepositCheque(formData).subscribe(response => {
        console.log(response);
        this.response = response;
        if (this.response.isSuccess) {
          this.depositSuccessMessage = 'Deposit process successfully completed';
          this.checkedItems = [];
          this.filesArray = [];
          this.formGroup.reset();
          this.getListOfSettledChequesForAllocationOrderDetails();
          this.goBack();
        }
        this.modalService.open(this.depositSucessModal);
        setTimeout(() => {
          this.modalService.dismissAll();
        }, 3000);
      });
    }
  }
  removeSearch() {
    this.searchText = '';
    this.getListOfSettledChequesForAllocationOrderDetails();
  }
  handleCheckBoxChange() {
    this.checkedItems = this.settledChequeList.filter(x => x.checked);
    if (this.checkedItems.length > 0) {
      this.selectedChequeAmount = this.checkedItems.reduce((acc, current) => {
        return acc += current?.chequeCollectionJod;
      }, 0);
      if (this.selectedChequeAmount !== this.allocationOrderItemDetails?.distributedAmount) {
        this.formGroup.controls['selectedAmount'].setErrors({
          'unEqualAmounts': true
        });
      }
      this.chequeIds = this.checkedItems.map(x => x.chequeCollectionId);
    } else {
      this.formGroup.controls['selectedAmount'].setErrors(null);
    }
  }
  handleSearchInput(event) {
    const value = event.target.value;
    this.searchText = value;
    if (value.length >= 2) this.getListOfSettledChequesForAllocationOrderDetails();
    if (!value) this.getListOfSettledChequesForAllocationOrderDetails();
  }
  filesDropped(data) {
    this.enter = false;
    let isInvalid = this.checkInvalidImageFormat(data);
    let files = data.map(x => {
      return x.file;
    });
    this.formGroup.get('attachment')?.setValue('attached');
    if (!isInvalid) {
      files.forEach(file => {
        this._commonService.fileToBase64(file).then(response => {
          this.filesArray = [...this.filesArray, response];
        });
      });
    }
  }
  onSelectFile(event) {
    let files = [...event.target.files];
    this.formGroup.get('attachment')?.setValue('attached');
    if (files.length > 0) {
      let isInvalid = this.checkInvalidImageFormat(files);
      if (!isInvalid) {
        files.forEach(file => {
          this._commonService.fileToBase64(file).then(response => {
            this.filesArray = [...this.filesArray, response];
          });
        });
      }
    }
  }
  checkInvalidImageFormat(data) {
    let files;
    let getFiles = data.map(x => {
      return x.file;
    });
    if (getFiles[0] !== undefined) {
      files = getFiles;
    } else {
      files = data;
    }
    let invalidExtentions = false;
    for (let file of files) {
      if (!this.fileTypes.includes(file.type)) {
        invalidExtentions = true;
        this.invalidFileType = 'This file not support, supported formates: JPEG, JPG, PNG, PDF';
        this.formGroup.get('attachments')?.patchValue('');
        setTimeout(() => {
          this.invalidFileType = '';
        }, 3000);
        break;
      }
    }
    return invalidExtentions;
  }
  removeFile(item) {
    this.inputFile.nativeElement.value = null;
    let index = this.filesArray.findIndex(file => file.fileName == item.fileName);
    this.filesArray.splice(index, 1);
    if (this.filesArray.length == 0) {
      this.formGroup.get('attachment')?.setValue('');
    }
  }
  openMdalImage(item) {
    const modalRef = this.modalService.open(_view_image_view_image_component__WEBPACK_IMPORTED_MODULE_0__.ViewImageComponent);
    modalRef.componentInstance.imageUploadedView = item;
  }
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getListOfSettledChequesForAllocationOrderDetails();
  }
  sortByCheque() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getListOfSettledChequesForAllocationOrderDetails();
  }
  sortByBank() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getListOfSettledChequesForAllocationOrderDetails();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getListOfSettledChequesForAllocationOrderDetails();
  }
  sortByAmount() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getListOfSettledChequesForAllocationOrderDetails();
  }
  setPage(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getListOfSettledChequesForAllocationOrderDetails();
  }
  ngOnDestroy() {
    this._allocationService.despositeAmount.next('');
    this._allocationService._viewDepositAmount.next('');
  }
}
DespositChequeComponent.ɵfac = function DespositChequeComponent_Factory(t) {
  return new (t || DespositChequeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_1__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location));
};
DespositChequeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: DespositChequeComponent,
  selectors: [["app-desposit-cheque"]],
  viewQuery: function DespositChequeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.depositSucessModal = _t.first);
    }
  },
  decls: 108,
  vars: 32,
  consts: [[1, "card-Box"], [1, "headingText"], [1, "separator"], [1, "d-flex", "mt-3", 2, "gap", "120px"], [1, "flex-column"], [1, "mdtext"], [1, "smText"], [1, "flex-between", "mt-3", "flex-wrap"], [1, "flex-between", "gap-2"], [1, "font-18", "fw-600"], [1, "amountButton", "mdtext"], [4, "ngIf"], [1, "row", "applyMargin"], [1, "col-md-5"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search ", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "col-md-2", "d-flex", "justify-content-end", "btnadd"], [1, "col-md-6"], [1, "col-md-6", "text-end"], [1, "total"], [1, "row"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [3, "formGroup", "submit"], [1, "card-Box", "mt-3"], [1, "font-18", "fw-600", "dark-gray", "mb-3"], [1, "col-sm-7"], ["formControlName", "notes", "maxlength", "150", "rows", "5", 1, "form-control"], [1, "row", "mt-3"], [1, "col-sm-6"], [1, "form-group", "mb-3"], [1, "font-18", "fw-600", "dark-gray"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", "my-3", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "multiple", "", "hidden", "", 1, "form-control", 3, "change"], ["inputFile", ""], ["class", "text-danger", 4, "ngIf"], [1, "flex-end", 2, "margin-top", "24px"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], ["depositSucess", ""], [1, "text-danger"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], ["type", "checkbox", 1, "inputColor", 3, "ngModel", "id", "change", "ngModelChange"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"], ["class", "uploadedfile mb-2", 4, "ngFor", "ngForOf"], [1, "uploadedfile", "mb-2"], [3, "click"], [1, "d-flex"], ["type", "button", 1, "btn", "fview", 3, "click"], ["src", "assets/images/eye.png", "alt", ""], ["type", "button", 1, "btn", 3, "click"], ["src", "assets/images/trash.png", "alt", ""], [1, "modal-body"], ["class", "m-0 py-3 fw-600 text-center", 4, "ngIf"], [1, "m-0", "py-3", "fw-600", "text-center"], [1, "text-danger", "fa-regular", "fa-circle-xmark", "me-2"], [1, "green-clr", "fa-regular", "fa-circle-check", "me-2"]],
  template: function DespositChequeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Deposit Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Bank Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 4)(11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Account Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 4)(16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Account No");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 7)(22, "div", 8)(23, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Allocation Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 8)(29, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Selected Cheques Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 8)(35, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, DespositChequeComponent_ng_container_40_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 12)(42, "div", 13)(43, "div", 14)(44, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_Template_button_click_44_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DespositChequeComponent_Template_input_ngModelChange_46_listener($event) {
        return ctx.searchText = $event;
      })("input", function DespositChequeComponent_Template_input_input_46_listener($event) {
        return ctx.handleSearchInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_Template_button_click_47_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "div", 13)(50, "div", 20)(51, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 22)(53, "div", 23)(54, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, DespositChequeComponent_div_57_Template, 35, 27, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, DespositChequeComponent_ng_template_59_Template, 2, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 28)(62, "h6", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, " Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 28)(71, "ul", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, DespositChequeComponent_li_72_Template, 3, 5, "li", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "form", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function DespositChequeComponent_Template_form_submit_73_listener() {
        return ctx.despositCheque();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 33)(75, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 24)(78, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "textarea", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 37)(81, "div", 38)(82, "div", 39)(83, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, " Attachment (Upload Bank Voucher) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("files", function DespositChequeComponent_Template_div_files_85_listener($event) {
        return ctx.filesDropped($event);
      })("enter", function DespositChequeComponent_Template_div_enter_85_listener() {
        return ctx.enter = !ctx.enter;
      })("leave", function DespositChequeComponent_Template_div_leave_85_listener() {
        return ctx.enter = !ctx.enter;
      })("click", function DespositChequeComponent_Template_div_click_85_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](93);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r5.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "Drag & drop files");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "Supported formates: JPEG, PNG, PDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "input", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DespositChequeComponent_Template_input_change_92_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, DespositChequeComponent_ng_container_94_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, DespositChequeComponent_small_95_Template, 2, 1, "small", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 24)(97, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](98, DespositChequeComponent_ng_container_98_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div", 47)(100, "div", 48)(101, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DespositChequeComponent_Template_button_click_101_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 48)(104, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](106, DespositChequeComponent_ng_template_106_Template, 3, 2, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.allocationOrderItemDetails == null ? null : ctx.allocationOrderItemDetails.sageBank == null ? null : ctx.allocationOrderItemDetails.sageBank.accountName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.allocationOrderItemDetails == null ? null : ctx.allocationOrderItemDetails.sageBank == null ? null : ctx.allocationOrderItemDetails.sageBank.bankName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.allocationOrderItemDetails == null ? null : ctx.allocationOrderItemDetails.sageBank == null ? null : ctx.allocationOrderItemDetails.sageBank.accountNo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](27, 23, ctx.allocationOrderItemDetails == null ? null : ctx.allocationOrderItemDetails.distributedAmount, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](33, 26, ctx.selectedChequeAmount, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](39, 29, ctx.selectedChequeAmount && (ctx.allocationOrderItemDetails == null ? null : ctx.allocationOrderItemDetails.distributedAmount) - ctx.selectedChequeAmount, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.f["selectedAmount"] == null ? null : ctx.f["selectedAmount"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.settledChequeList)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", (ctx.settledChequeList == null ? null : ctx.settledChequeList.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.settledChequeList == null ? null : ctx.settledChequeList.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.totalRecords < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.f["attachment"] == null ? null : ctx.f["attachment"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.invalidFileType);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.filesArray.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (ctx.checkedItems == null ? null : ctx.checkedItems.length) <= 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_6__.DragAndDropDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".applyMargin[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.total[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 15px 0 0px;\n  padding: 10px 0px;\n}\n.total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #929eae;\n  margin: 0px;\n  padding: 10px 0px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.btn-provide[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: #c5c6c7;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.card-Box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 24px 34px;\n}\n\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  \n  color: #1b212d;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  \n  color: #858585;\n}\n\n.linkText[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #4e9aff;\n}\n\n.linkText2[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #4e9aff;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.headButtonText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  margin-top: 22px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  align-items: center;\n}\n\n.amountButton[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  \n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 34px 14px 35px;\n  gap: 10px;\n  height: 48px;\n  \n  background: #f8f8f8;\n  border: 0.5px solid #e9e9e9;\n  border-radius: 10px;\n}\n\n.statusButton[_ngcontent-%COMP%] {\n  width: 95px;\n  height: 34.2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff3db;\n  border-radius: 8px;\n}\n\n.flex-start[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 148px;\n}\n\n.inputColor[_ngcontent-%COMP%] {\n  accent-color: #dc3545;\n  height: 15px;\n  width: 15px;\n}\n\n.textArea[_ngcontent-%COMP%] {\n  height: 89.5px;\n  width: 675px;\n  border-radius: 8px;\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  border-radius: 8px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.card-page[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #c4cdd5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 22px;\n  color: #1b212d;\n  padding: 5px 0 15px;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .invoic[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #929eae;\n  font-weight: 500;\n  padding: 1px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1b212d;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 80px !important;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.btn-upload[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  margin: 0px;\n}\n\n.overlay-bi[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  margin: -30px 0 0 0;\n  z-index: 5;\n  position: relative;\n}\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #fff3f3;\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.uplod[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #676767;\n}\n\n.save-img[_ngcontent-%COMP%] {\n  width: 22px !important;\n}\n\n.fileView[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.btn[_ngcontent-%COMP%]:disabled, .btn.disabled[_ngcontent-%COMP%] {\n  background: #f1f3f3 !important;\n  color: #9b9b9b !important;\n  border: 1px solid #f1f3f3;\n  cursor: initial;\n}\n\n.card-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n\n.card-sm[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1b212d;\n  margin-bottom: 5px;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #929eae;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  height: 120px;\n  border-radius: 6px;\n  margin: 5px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  padding: 10px;\n}\n\n.fview[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 50%;\n  margin: 0px 5px;\n  width: 30px;\n  height: 30px;\n}\n.fview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.flex-end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2FsbG9jYXRpb24vYWxsb2NhdGlvbi9kZXNwb3NpdC1jaGVxdWUvZGVzcG9zaXQtY2hlcXVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGdEQUFBO0VBQ0Esd0RBQUE7RUFDQSxxREFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQURBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7QUFLRjs7QUFIQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVFGOztBQUxBO0VBQ0UsWUFBQTtFQUVBLHNCQUFBO0VBRUEsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFNRjtBQUxFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU9KO0FBTEU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBT0o7QUFOSTtFQUNFLGNBQUE7QUFRTjtBQUxFO0VBQ0UsZ0JBQUE7QUFPSjtBQU5JO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFRTjtBQU5JO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVFOO0FBUE07RUFDRSxjQUFBO0FBU1I7O0FBSkE7RUFDRSx1QkFBQTtBQU9GOztBQUpBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBT0Y7QUFORTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQVFKO0FBTkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUUo7QUFORTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVFKOztBQUxBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFRRjs7QUFKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFPSjs7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVFGO0FBUEU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFTSjs7QUFMQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVFGO0FBTkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFRSjtBQVBJO0VBQ0UsV0FBQTtBQVNOO0FBTkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVFKOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVFGOztBQU5BO0VBQ0Usc0JBQUE7QUFTRjs7QUFORTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQVNKOztBQUxBOztFQUVFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFMQTtFQUNFLG1CQUFBO0FBUUY7O0FBTkE7RUFDRSx5QkFBQTtBQVNGOztBQU5BO0VBQ0UsZ0JBQUE7QUFTRjtBQVBFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBU0o7QUFQRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFTSjtBQVBFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBU0o7QUFSSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBVU47O0FBTkE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBU0Y7QUFSRTtFQUNFLHNCQUFBO0FBVUo7O0FBTkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFTRiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBseU1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cbi50b3RhbCB7XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDE1cHggMCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgY29sb3I6ICM5MjllYWU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gIH1cbn1cbi5jYXJkLXRhYmxlIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZjRmNGY0O1xuICBib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cbi5idG4tcHJvdmlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTRweCA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uYnRuLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzZjNztcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAxNHB4IDhweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLnBsYXktbGVmdCB7XG4gIGNvbG9yOiAjZWNlYWVhO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5wbGF5LXJpZ2h0IHtcbiAgY29sb3I6ICNlY2VhZWE7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmNhcmQtQm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwcHggMTVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyNHB4IDM0cHg7XG59XG4uZmxleC1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRpbmdUZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBUZXh0IENvbG9yL1RleHQgMSAqL1xuXG4gIGNvbG9yOiAjMWIyMTJkO1xufVxuXG4ubWR0ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG5cbiAgY29sb3I6ICMxYjIxMmQ7XG59XG5cbi5zbVRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogVGV4dCBDb2xvci9UZXh0IDEgKi9cblxuICBjb2xvcjogIzg1ODU4NTtcbn1cbi5saW5rVGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzRlOWFmZjtcbn1cbi5saW5rVGV4dDIge1xuICBmb250LWZhbWlseTogS3VtYmggU2FucztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM0ZTlhZmY7XG59XG4uaGVhZEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiAzNC4ycHg7XG5cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmhlYWRCdXR0b25UZXh0IHtcbiAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2VwYXJhdG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cbi5mbGV4LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFtb3VudEJ1dHRvbiB7XG4gIC8qIFByZXZpZXcgKi9cblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC8qIEF1dG8gbGF5b3V0ICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMzRweCAxNHB4IDM1cHg7XG4gIGdhcDogMTBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICAvKiBHcmF5L0dyYXkgMiAqL1xuXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2U5ZTllOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zdGF0dXNCdXR0b24ge1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiAzNC4ycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGJhY2tncm91bmQ6ICNmZmYzZGI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmZsZXgtc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTQ4cHg7XG59XG5cbi5pbnB1dENvbG9yIHtcbiAgYWNjZW50LWNvbG9yOiAjZGMzNTQ1O1xuICBoZWlnaHQ6MTVweDtcbiAgd2lkdGg6MTVweDtcbn1cblxuLnRleHRBcmVhIHtcbiAgaGVpZ2h0OiA4OS41cHg7XG4gIHdpZHRoOiA2NzVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLy8vLy8vLy8vLy8vL1xuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNhcmQtZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjNGNkZDU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLXBhZ2Uge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLm1vZGFsLWhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0Y2RkNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgcGFkZGluZzogNXB4IDAgMTVweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzFiMjEyZDtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgIH1cbiAgfVxuICAuaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAuaW52b2ljIHtcbiAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgY29sb3I6ICM5MjllYWU7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgYiB7XG4gICAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtdXBsb2FkIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM5MzlhYTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIGg1IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzBmMGYwZjtcbiAgfVxuICBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzY3Njc2NztcbiAgfVxufVxuLmJ0bi11cGxvYWQge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTJweCAzNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uY2FyZC1pbWcge1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuLm92ZXJsYXktYmkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTkgMTk5IDE5OSAvIDIxJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uY2FyZC1mb3JtIC5lZGl0LWJ0biB7XG4gIG1hcmdpbjogLTMwcHggMCAwIDA7XG4gIHotaW5kZXg6IDU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG59XG5cbi51cGxvYWRlZGZpbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTFhZjIyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnVwbG9kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi5zYXZlLWltZyB7XG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG59XG4uZmlsZVZpZXcge1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbn1cblxuLmJ0bjpkaXNhYmxlZCxcbi5idG4uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjZjFmM2YzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOWI5YjliICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjM7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLmNhcmQtZm9ybSAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbn1cblxuLmNhcmQtc20ge1xuICBtYXJnaW46IDEwcHggMHB4O1xuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzFiMjEyZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM5MjllYWU7XG4gIH1cbiAgLm5vdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cbn1cbi5mdmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGltZyB7XG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZmxleC1lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 12835:
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/view-allocation/view-allocation.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAllocationComponent": () => (/* binding */ ViewAllocationComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _cash_deposit_modal_cash_deposit_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cash-deposit-modal/cash-deposit-modal.component */ 32502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/header.service */ 36690);
/* harmony import */ var _allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allocation-services/allocation.service */ 51445);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);










const _c0 = ["viewDepositCashModal"];
function ViewAllocationComponent_div_56_tr_19_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAllocationComponent_div_56_tr_19_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.depositAmount(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Deposit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ViewAllocationComponent_div_56_tr_19_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAllocationComponent_div_56_tr_19_div_14_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](61);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.viewCashDepositCashAllocation(item_r10, _r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ViewAllocationComponent_div_56_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ViewAllocationComponent_div_56_tr_19_div_13_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ViewAllocationComponent_div_56_tr_19_div_14_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.sageBank == null ? null : item_r10.sageBank.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.sageBank == null ? null : item_r10.sageBank.accountName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.sageBank == null ? null : item_r10.sageBank.accountNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.currency[0] == null ? null : item_r10.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 7, item_r10 == null ? null : item_r10.distributedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r10 == null ? null : item_r10.status) === 14001 || (item_r10 == null ? null : item_r10.status) === 14002);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r10 == null ? null : item_r10.status) === 14003);
  }
}
function ViewAllocationComponent_div_56_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ViewAllocationComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div", 25)(2, "div", 26)(3, "table", 27)(4, "thead")(5, "tr")(6, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Account Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Account No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Distributed Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ViewAllocationComponent_div_56_tr_19_Template, 15, 10, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ViewAllocationComponent_div_56_div_20_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const viewDetailsAllocationOrderList_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", viewDetailsAllocationOrderList_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (viewDetailsAllocationOrderList_r7 == null ? null : viewDetailsAllocationOrderList_r7.length) == 0);
  }
}
function ViewAllocationComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ViewAllocationComponent_ng_template_60_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 49)(4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAllocationComponent_ng_template_60_div_36_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](63);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.openFileModal(item_r21, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 52)(7, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const index_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", index_r22 + 1, ".", ctx_r20.getFileType(item_r21 == null ? null : item_r21.file), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", item_r21 == null ? null : item_r21.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("download", item_r21 == null ? null : item_r21.file);
  }
}
function ViewAllocationComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "div", 39)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 39)(8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 39)(13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Account No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 39)(18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 39)(23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Deposited Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "To Complete the process Please upload the bank deposit voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Uploaded files");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 19)(35, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ViewAllocationComponent_ng_template_60_div_36_Template, 9, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 45)(38, "div", 46)(39, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAllocationComponent_ng_template_60_Template_button_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const modal_r19 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r19.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.viewCashDeposit == null ? null : ctx_r4.viewCashDeposit.sageBank == null ? null : ctx_r4.viewCashDeposit.sageBank.bankName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.viewCashDeposit == null ? null : ctx_r4.viewCashDeposit.sageBank == null ? null : ctx_r4.viewCashDeposit.sageBank.accountName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.viewCashDeposit == null ? null : ctx_r4.viewCashDeposit.sageBank == null ? null : ctx_r4.viewCashDeposit.sageBank.accountNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.viewCashDeposit == null ? null : ctx_r4.viewCashDeposit.currency[0] == null ? null : ctx_r4.viewCashDeposit.currency[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](27, 6, ctx_r4.viewCashDeposit == null ? null : ctx_r4.viewCashDeposit.depositedAmount, "2.3-3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.viewCashDeposit == null ? null : ctx_r4.viewCashDeposit.files);
  }
}
function ViewAllocationComponent_ng_template_62_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r28.fileItem == null ? null : ctx_r28.fileItem.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function ViewAllocationComponent_ng_template_62_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 60)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "click to open pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx_r30.fileItem == null ? null : ctx_r30.fileItem.file, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function ViewAllocationComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewAllocationComponent_ng_template_62_ng_container_1_Template, 2, 1, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewAllocationComponent_ng_template_62_ng_template_2_Template, 5, 1, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 45)(5, "div", 46)(6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewAllocationComponent_ng_template_62_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const modal_r27 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r27.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r6.fileItem == null ? null : ctx_r6.fileItem.fileType) == "png" || (ctx_r6.fileItem == null ? null : ctx_r6.fileItem.fileType) == "jpeg" || (ctx_r6.fileItem == null ? null : ctx_r6.fileItem.fileType) == "jpg")("ngIfElse", _r29);
  }
}
const _c1 = function (a0, a1) {
  return {
    "background-color": a0,
    color: a1
  };
};
class ViewAllocationComponent {
  constructor(route, router, _headerService, _allocationService, modalService) {
    this.route = route;
    this.router = router;
    this._headerService = _headerService;
    this._allocationService = _allocationService;
    this.modalService = modalService;
    this.searchText = '';
    this.sort = 1;
    this.pageNo = 0;
    this.pages = [];
    this.viewDetailsAllocationOrderList = [];
    this._headerService.setTitle('Allocation > View Details');
  }
  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    if (this.orderId) {
      this.getViewDetailsOrderAllocation(this.orderId);
    }
  }
  /**
   * get view details allocation
   */
  getViewDetailsOrderAllocation(orderId) {
    this._allocationService.getViewDetailAllocation(orderId).subscribe(response => {
      if (response.isSuccess) {
        this.viewDetailsAllocationOrder = response.data;
        console.log(response);
        this.viewDetailsAllocationOrderList = response.data.mainFundAlocationOrderDetails;
        console.log(this.viewDetailsAllocationOrder);
        this.totalRecords = response?.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecords / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      }
    });
  }
  /**
   * resetting search input field
   */
  removeSearch() {
    this.searchText = '';
  }
  /**
   * pagination
   * @param page page no
   */
  setPage(page) {
    this.pageNo = page;
    window.scroll(0, 0);
  }
  /**
   * on click deposite button
   */
  depositAmount(item) {
    console.log(item);
    if (item?.sageBank.isCash) {
      //open modal
      const modalRef = this.modalService.open(_cash_deposit_modal_cash_deposit_modal_component__WEBPACK_IMPORTED_MODULE_1__.CashDepositModalComponent, {
        backdrop: 'static',
        keyboard: false,
        size: 'lg',
        centered: true
      });
      modalRef.componentInstance.depositAmount = item;
      modalRef.componentInstance.sendtoLoadData.subscribe(result => {
        this.modalService.dismissAll();
        this.getViewDetailsOrderAllocation(this.orderId);
      });
    } else {
      //this.modalService.open(this.viewDepositCashModal, {
      //  centered: true,
      //  size:'lg'
      //})
      this.router.navigateByUrl(`/mainFund-allocation/desposit-cheque`);
      localStorage.setItem('_mainFundAlocationOrderItemDetails', JSON.stringify(item));
      this._allocationService._mainFundAlocationOrderItemDetails.next(item);
    }
  }
  viewCashDepositCashAllocation(item, content) {
    console.log(item);
    if (item?.sageBank?.isCash) {
      this._allocationService.viewCashAllocationOrderDetailsDeposits(item?.allocationOrderDetailsId).subscribe(response => {
        this.modalService.open(content, {
          centered: true,
          size: 'md'
        });
        this.viewCashDeposit = response?.data[0];
      });
    } else {
      this.router.navigateByUrl(`/mainFund-allocation/view-desposited-cheques/${item?.allocationOrderDetailsId}`);
    }
  }
  openFileModal(item, content) {
    let fileType = this.getFileType(item?.file);
    this.fileItem = item;
    this.fileItem['fileType'] = fileType;
    this.modalService.open(content);
  }
  getFileType(fileName) {
    return fileName?.split('.').pop();
  }
}
ViewAllocationComponent.ɵfac = function ViewAllocationComponent_Factory(t) {
  return new (t || ViewAllocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_3__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal));
};
ViewAllocationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ViewAllocationComponent,
  selectors: [["app-view-allocation"]],
  viewQuery: function ViewAllocationComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.viewDepositCashModal = _t.first);
    }
  },
  decls: 64,
  vars: 25,
  consts: [[1, "card-Box"], [1, "flex-between"], [1, "headingText"], [1, "headButton", 3, "ngStyle"], [1, "headButtonText"], [1, "separator"], [1, "flex-between", 2, "margin-top", "25px"], [1, "flex-column"], [1, "mdtext"], [1, "smText"], [1, "linkText"], [1, "flex-between", 2, "gap", "15px"], [1, "amountButton", "mdtext"], [1, "row", "applyMargin"], [1, "col-md-5"], [1, "col-md-2", "d-flex", "justify-content-end", "btnadd"], [1, "col-md-6"], [1, "col-md-6", "text-end"], [1, "total"], [1, "row"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], ["viewDepositCashModal", ""], ["fileModal", ""], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [2, "cursor", "pointer"], ["class", "depositeButton depositeText", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "depositeButton", "depositeText", 3, "click"], [1, "fa", "fa-eye", "font-16", "gray-500", 3, "click"], [1, "not-found"], [1, "modal-body", "p-4"], [1, "d-grid"], [1, "d-flex", "flex-column"], [1, "font-20", "fw-600", "my-5"], [1, "font-18", "fw-600", "my-3"], [1, "fw-700", "font-14", "gray-500", "mb-3"], [1, "col-sm-6"], ["class", "uploadedfile mb-2", 4, "ngFor", "ngForOf"], [1, "flex-end"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "uploadedfile", "mb-2"], [1, "d-flex"], ["type", "button", 1, "btn", "fview", 3, "click"], ["src", "assets/images/eye.png", "alt", ""], ["type", "button", 1, "btn"], ["target", "_blank", 1, "btn", "fview", 3, "href", "download"], ["src", "assets/images/Download.png", "alt", ""], [1, "modal-body", "p-2"], [4, "ngIf", "ngIfElse"], ["pdf", ""], [1, "w-100", 3, "src"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center"], ["height", "80", "width", "80", "src", "assets/images/pdf.png", "alt", ""], ["target", "_blank", 1, "text-decoration-none", "text-capitalize", 3, "href"]],
  template: function ViewAllocationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Allocation Order Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Creating Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7)(16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Created By");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 7)(21, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Order No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 6)(28, "div", 11)(29, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Grand Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 11)(35, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Deposit Amounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 11)(41, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "div", 14)(48, "div", 14)(49, "div", 15)(50, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 17)(52, "div", 18)(53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, ViewAllocationComponent_div_56_Template, 21, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, ViewAllocationComponent_ng_template_58_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, ViewAllocationComponent_ng_template_60_Template, 41, 9, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, ViewAllocationComponent_ng_template_62_Template, 8, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](22, _c1, ctx.viewDetailsAllocationOrder == null ? null : ctx.viewDetailsAllocationOrder.status == null ? null : ctx.viewDetailsAllocationOrder.status.lookupBGColor, ctx.viewDetailsAllocationOrder == null ? null : ctx.viewDetailsAllocationOrder.status == null ? null : ctx.viewDetailsAllocationOrder.status.lookupTextColor));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.viewDetailsAllocationOrder == null ? null : ctx.viewDetailsAllocationOrder.status == null ? null : ctx.viewDetailsAllocationOrder.status.translations[0] == null ? null : ctx.viewDetailsAllocationOrder.status.translations[0].lookupName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 11, ctx.viewDetailsAllocationOrder == null ? null : ctx.viewDetailsAllocationOrder.createdAt), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.viewDetailsAllocationOrder == null ? null : ctx.viewDetailsAllocationOrder.createdBy == null ? null : ctx.viewDetailsAllocationOrder.createdBy.fullName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.viewDetailsAllocationOrder == null ? null : ctx.viewDetailsAllocationOrder.mainFundAllocationOrderId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](33, 13, ctx.viewDetailsAllocationOrder == null ? null : ctx.viewDetailsAllocationOrder.totalAmountDistibuted, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](39, 16, ctx.viewDetailsAllocationOrder == null ? null : ctx.viewDetailsAllocationOrder.depositAmount, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](45, 19, ctx.viewDetailsAllocationOrder == null ? null : ctx.viewDetailsAllocationOrder.difference, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total No. ", ctx.viewDetailsAllocationOrderList == null ? null : ctx.viewDetailsAllocationOrderList.length, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.viewDetailsAllocationOrderList)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".applyMargin[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.total[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 15px 0 0px;\n  padding: 10px 0px;\n}\n.total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #929eae;\n  margin: 0px;\n  padding: 10px 0px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.btn-provide[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: #c5c6c7;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.card-Box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 24px 34px;\n}\n\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  \n  color: #1b212d;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  \n  color: #858585;\n}\n\n.linkText[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #4e9aff;\n}\n\n.linkText2[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #4e9aff;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.headButtonText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  margin-top: 22px;\n}\n\n.amountButton[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  \n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 34px 14px 35px;\n  gap: 10px;\n  height: 48px;\n  \n  background: #f8f8f8;\n  border: 0.5px solid #e9e9e9;\n  border-radius: 10px;\n}\n\n.statusButton[_ngcontent-%COMP%] {\n  width: 95px;\n  height: 34.2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff3db;\n  border-radius: 8px;\n}\n\n.depositeButton[_ngcontent-%COMP%] {\n  width: 95px;\n  height: 34.2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #dc3545;\n  border-radius: 8px;\n}\n\n.depositeText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: white;\n}\n\n.d-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(173px, 1fr));\n  gap: 20px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2FsbG9jYXRpb24vYWxsb2NhdGlvbi92aWV3LWFsbG9jYXRpb24vdmlldy1hbGxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGdEQUFBO0VBQ0Esd0RBQUE7RUFDQSxxREFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQURBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUVBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7QUFLRjs7QUFIQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxZQUFBO0VBRUEsc0JBQUE7RUFFQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0FBS0Y7O0FBSEE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFNRjtBQUpFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU1KO0FBSkk7RUFDRSxXQUFBO0FBTU47QUFIRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBS0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbHlNYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG4udG90YWwge1xuICBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAxNXB4IDAgMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICB9XG59XG4uY2FyZC10YWJsZSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2Y0ZjRmNDtcbiAgYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG4uYnRuLXByb3ZpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogOHB4IDE0cHggOHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJ0bi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM2Yzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTRweCA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5wbGF5LWxlZnQge1xuICBjb2xvcjogI2VjZWFlYTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucGxheS1yaWdodCB7XG4gIGNvbG9yOiAjZWNlYWVhO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5jYXJkLUJveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjRweCAzNHB4O1xufVxuXG4uZmxleC1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRpbmdUZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG5cbiAgY29sb3I6ICMxYjIxMmQ7XG59XG4ubWR0ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG5cbiAgY29sb3I6ICMxYjIxMmQ7XG59XG4uc21UZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG5cbiAgY29sb3I6ICM4NTg1ODU7XG59XG4ubGlua1RleHQge1xuICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM0ZTlhZmY7XG59XG4ubGlua1RleHQyIHtcbiAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNGU5YWZmO1xufVxuLmhlYWRCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMzQuMnB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5oZWFkQnV0dG9uVGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBLdW1iaCBTYW5zO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNlcGFyYXRvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG4uYW1vdW50QnV0dG9uIHtcbiAgLyogUHJldmlldyAqL1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLyogQXV0byBsYXlvdXQgKi9cblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAzNHB4IDE0cHggMzVweDtcbiAgZ2FwOiAxMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG5cbiAgLyogR3JheS9HcmF5IDIgKi9cblxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3RhdHVzQnV0dG9uIHtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMzQuMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kOiAjZmZmM2RiO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uZGVwb3NpdGVCdXR0b24ge1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiAzNC4ycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5kZXBvc2l0ZVRleHQge1xuICBmb250LWZhbWlseTogS3VtYmggU2FucztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTczcHgsMWZyKSk7XG4gIGdhcDoyMHB4O1xufVxuLnVwbG9hZGVkZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMWFmMjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICM2OTY5Njk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 78225:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/view-deposited-cheque-details/view-deposited-cheque-details.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDepositedChequeDetailsComponent": () => (/* binding */ ViewDepositedChequeDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/header.service */ 36690);
/* harmony import */ var _allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../allocation-services/allocation.service */ 51445);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);








function ViewDepositedChequeDetailsComponent_div_55_tr_22_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 5, item_r8 == null ? null : item_r8.chequeDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 8, item_r8 == null ? null : item_r8.chequeCollectionJod, "2.3-3"), " JD");
  }
}
function ViewDepositedChequeDetailsComponent_div_55_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ViewDepositedChequeDetailsComponent_div_55_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ViewDepositedChequeDetailsComponent_div_55_tr_22_Template, 13, 11, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ViewDepositedChequeDetailsComponent_div_55_div_23_Template, 2, 0, "div", 31);
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
function ViewDepositedChequeDetailsComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ViewDepositedChequeDetailsComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 34)(4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewDepositedChequeDetailsComponent_div_68_Template_button_click_4_listener() {
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
function ViewDepositedChequeDetailsComponent_ng_template_69_ng_container_1_Template(rf, ctx) {
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
function ViewDepositedChequeDetailsComponent_ng_template_69_ng_template_2_Template(rf, ctx) {
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
function ViewDepositedChequeDetailsComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ViewDepositedChequeDetailsComponent_ng_template_69_ng_container_1_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ViewDepositedChequeDetailsComponent_ng_template_69_ng_template_2_Template, 5, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 43)(5, "div", 44)(6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewDepositedChequeDetailsComponent_ng_template_69_Template_button_click_6_listener() {
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
class ViewDepositedChequeDetailsComponent {
  constructor(_modalService, _headerService, _allocationService, _activeRoute) {
    this._modalService = _modalService;
    this._headerService = _headerService;
    this._allocationService = _allocationService;
    this._activeRoute = _activeRoute;
    this.viewDetailsAllocationOrderList = [];
  }
  ngOnInit() {
    this._headerService.setTitle('Allocation > View Details > Deposit Cheque');
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
    this._modalService.open(content);
  }
  getFileType(fileName) {
    return fileName?.split('.').pop();
  }
}
ViewDepositedChequeDetailsComponent.ɵfac = function ViewDepositedChequeDetailsComponent_Factory(t) {
  return new (t || ViewDepositedChequeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_0__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_1__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
};
ViewDepositedChequeDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ViewDepositedChequeDetailsComponent,
  selectors: [["app-view-deposited-cheque-details"]],
  decls: 71,
  vars: 17,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-12"], [1, "card-collect", "card-with-details"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-700", "font-18"], [1, "d-flex", "flex-column"], [1, "m-0", "fw-700", "font-14"], [1, "d-grid", "gap-4"], [1, "dark-gray"], [1, "light-gray", "fw-500"], [1, "d-flex", "justify-content-end", "fw-600", "font-18", "align-items-center", "gap-2"], [1, "bg-gray-400", "py-3", "px-5", "rounded", "d-flex", "align-items-center"], [1, "m-0"], [1, "row", "my-3"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-600", "font-16", "gray-500"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "col-12"], [1, "fw-600", "font-18"], [1, "fw-700", "font-14", "gray-500"], [1, "col-sm-6", "col-md-4"], ["class", "uploadedfile mb-2", 4, "ngFor", "ngForOf"], ["fileModal", ""], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "not-found"], [1, "uploadedfile", "mb-2"], [1, "d-flex"], ["type", "button", 1, "btn", "fview", 3, "click"], ["src", "assets/images/eye.png", "alt", ""], ["type", "button", 1, "btn"], ["download", "", 1, "btn", "fview", 3, "href"], ["src", "assets/images/Download.png", "alt", ""], [1, "modal-body", "p-2"], [4, "ngIf", "ngIfElse"], ["pdf", ""], [1, "flex-end"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "w-100", 3, "src"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center"], ["height", "80", "width", "80", "src", "assets/images/pdf.png", "alt", ""], ["target", "_blank", 1, "text-decoration-none", "text-capitalize", 3, "href"]],
  template: function ViewDepositedChequeDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Deposit Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Date & Time");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ViewDepositedChequeDetailsComponent_div_55_Template, 24, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, ViewDepositedChequeDetailsComponent_ng_template_57_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 1)(60, "div", 19)(61, "div", 3)(62, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Uploaded files");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 1)(67, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, ViewDepositedChequeDetailsComponent_div_68_Template, 9, 3, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, ViewDepositedChequeDetailsComponent_ng_template_69_Template, 8, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
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
  styles: [".d-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2FsbG9jYXRpb24vYWxsb2NhdGlvbi92aWV3LWRlcG9zaXRlZC1jaGVxdWUtZGV0YWlscy92aWV3LWRlcG9zaXRlZC1jaGVxdWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUFJO0VBQ0UsV0FBQTtBQUVOO0FBRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpICk7XG59XG4udXBsb2FkZWRmaWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzExYWYyMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_main-fund_allocation_allocation_allocation_module_ts.js.map