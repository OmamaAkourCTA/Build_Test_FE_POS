"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_main-fund_bank-deposits_bank-deposits_module_ts"],{

/***/ 26199:
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/bank-deposits/bank-deposits-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDepositsRoutingModule": () => (/* binding */ BankDepositsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bank_deposits_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-deposits.component */ 31401);
/* harmony import */ var _create_deposit_create_deposit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-deposit/create-deposit.component */ 91496);
/* harmony import */ var _view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-deposited-cheques/view-deposited-cheques.component */ 44293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: 'bank-deposits',
  component: _bank_deposits_component__WEBPACK_IMPORTED_MODULE_0__.BankDepositsComponent
}, {
  path: 'create-deposit',
  component: _create_deposit_create_deposit_component__WEBPACK_IMPORTED_MODULE_1__.CreateDepositComponent
}, {
  path: 'deposited-cheques/:depositId',
  component: _view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_2__.ViewDepositedChequesComponent
}];
class BankDepositsRoutingModule {}
BankDepositsRoutingModule.ɵfac = function BankDepositsRoutingModule_Factory(t) {
  return new (t || BankDepositsRoutingModule)();
};
BankDepositsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: BankDepositsRoutingModule
});
BankDepositsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BankDepositsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 31401:
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/bank-deposits/bank-deposits.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDepositsComponent": () => (/* binding */ BankDepositsComponent)
/* harmony export */ });
/* harmony import */ var _view_cash_deposits_modal_view_cash_deposits_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-cash-deposits-modal/view-cash-deposits-modal.component */ 53912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cashier_unsettled_session_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cashier/unsettled-session/services/unsettled-session.service */ 20320);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common.service */ 5620);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared.service */ 69082);
/* harmony import */ var _allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../allocation/allocation/allocation-services/allocation.service */ 51445);
/* harmony import */ var _cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/directive/decimal-number.directive */ 55134);















const _c0 = ["success"];
function BankDepositsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 37)(5, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", item_r9 == null ? null : item_r9.accountTypeImage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.accountType[0] == null ? null : item_r9.accountType[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](9, 3, item_r9 == null ? null : item_r9.remainingAmountTobeDistributed, "2.3-3"), " ");
  }
}
function BankDepositsComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BankDepositsComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.clearDepositInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BankDepositsComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BankDepositsComponent_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.clearAmountInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BankDepositsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((item_r14 == null ? null : item_r14.bankNameEnglish) + " - " + (item_r14 == null ? null : item_r14.accountName) + " - " + (item_r14 == null ? null : item_r14.accountNumber));
  }
}
function BankDepositsComponent_a_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Create Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BankDepositsComponent_div_44_tr_41_a_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "View Voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", item_r18 == null ? null : item_r18.depositVoucher, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function BankDepositsComponent_div_44_tr_41_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "---");
  }
}
function BankDepositsComponent_div_44_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td")(4, "div", 53)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, BankDepositsComponent_div_44_tr_41_a_18_Template, 2, 1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, BankDepositsComponent_div_44_tr_41_ng_template_19_Template, 1, 0, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "td")(22, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BankDepositsComponent_div_44_tr_41_Template_p_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const item_r18 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.getCashDepositDetails(item_r18 == null ? null : item_r18.depositeId, item_r18 == null ? null : item_r18.collectionType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.depositeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.bankNameEnglish);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", item_r18 == null ? null : item_r18.bankLogo, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r18 == null ? null : item_r18.accountName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 9, item_r18 == null ? null : item_r18.amount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.currency[0] == null ? null : item_r18.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r18 == null ? null : item_r18.depositVoucher)("ngIfElse", _r20);
  }
}
function BankDepositsComponent_div_44_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BankDepositsComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30)(1, "div", 43)(2, "div", 44)(3, "table", 45)(4, "thead")(5, "tr")(6, "th", 46)(7, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BankDepositsComponent_div_44_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.sortByDepositId());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Deposit ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 48)(10, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 46)(12, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BankDepositsComponent_div_44_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.sortByBankName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "i", 48)(15, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 46)(17, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BankDepositsComponent_div_44_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.sortByAccountName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " Account Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "i", 48)(20, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "th", 46)(22, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BankDepositsComponent_div_44_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r29.sortByAccountNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, " Account No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "i", 48)(25, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "th", 46)(27, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BankDepositsComponent_div_44_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r30.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 48)(30, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "th", 46)(32, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "th", 46)(35, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Deposit Voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "th", 46)(38, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, BankDepositsComponent_div_44_tr_41_Template, 24, 12, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, BankDepositsComponent_div_44_div_42_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const deposits_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r5.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", deposits_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (deposits_r15 == null ? null : deposits_r15.length) == 0);
  }
}
function BankDepositsComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BankDepositsComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 60)(2, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 60)(11, "ngb-pagination", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function BankDepositsComponent_ng_container_48_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.pageNo = $event);
    })("pageChange", function BankDepositsComponent_ng_container_48_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r8.pageNo * 6 - 5, " - ", (ctx_r8.deposits == null ? null : ctx_r8.deposits.length) == 6 ? ctx_r8.pageNo * 6 : ctx_r8.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r8.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx_r8.totalRecords)("page", ctx_r8.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
class BankDepositsComponent {
  constructor(_unsettleSession, _commonService, _sharedService, _allocationService, _collectService, _modalService) {
    this._unsettleSession = _unsettleSession;
    this._commonService = _commonService;
    this._sharedService = _sharedService;
    this._allocationService = _allocationService;
    this._collectService = _collectService;
    this._modalService = _modalService;
    this.deposits = [];
    this.banks = [];
    this.bankAccounts = [];
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 1;
    this.pageSize = 6;
    this.pages = [];
    this.depositId = '';
    this.amount = '';
    this.bankAccountId = null;
    this.bankId = null;
    this.mainFundAmounts = [];
    this.isCash = true;
    this.allowCreate = false;
    this.cashDepositTypeId = 0;
  }
  ngOnInit() {
    this.getMainFundCash();
    this.getRegisterDetails();
    this.getCashDeposits();
    this.getBanks();
    this.getUserPermission();
    this.getBankAccounts();
  }
  getUserPermission() {
    let permssions = JSON.parse(localStorage.getItem('permissions'));
    this.allowCreate = permssions.find(x => x.permissionCatId === 26).permissionSubCategories.find(y => y.permissionSubCatId === 66).permissionItems.find(z => z.permissionItemId === 147).selected;
  }
  getCashDeposits() {
    let filters = `?bankId=${this.bankId && this.bankId || ''}&AccountId=${this.bankAccountId && this.bankAccountId || ''}
    &DepositeId=${this.depositId}&DepositeType=${this.isCash && 'cash' || 'cheque'}&amount=${this.amount}&Sort=${this.sort}&PageNo=${this.pageNo - 1}&pageSize=${this.pageSize}`;
    this._unsettleSession.getCashDeposits(filters).subscribe(response => {
      this.deposits = response['data'];
      this.totalRecords = response?.totalRecordCount;
    });
  }
  getRegisterDetails() {
    return this._collectService.GetRegisterDetails(this._sharedService.getRegister.registerObj?.id).subscribe(response => {
      if (response) {
        this.cashDepositTypeId = response?.['data']['cashDepositTypeId'];
      }
    });
  }
  getCashDepositDetails(id, type) {
    if (type == 'cash') {
      this._allocationService.getCashDepositDetails(id).subscribe(response => {
        console.log(response);
        const modalRef = this._modalService.open(_view_cash_deposits_modal_view_cash_deposits_modal_component__WEBPACK_IMPORTED_MODULE_0__.ViewCashDepositsModalComponent, {
          size: 'lg'
        });
        modalRef.componentInstance.depositDetails = response['data'][0];
      });
    } else {
      this._commonService.NavigateToRoute('/main-fund/deposited-cheques/' + id);
    }
  }
  depositType(event) {
    this.isCash = event.target.value == 'cash' ? true : false;
    this.pageNo = 1;
    this.sort = 1;
    this.getCashDeposits();
  }
  clearAmountInput() {
    this.amount = '';
    this.getCashDeposits();
  }
  clearDepositInput() {
    this.depositId = '';
    this.getCashDeposits();
  }
  onDepositChange() {
    this.getCashDeposits();
  }
  onAmountChange() {
    this.getCashDeposits();
  }
  getBanks() {
    this._unsettleSession.getBanks().subscribe(response => {
      this.banks = response['data'];
    });
  }
  onBankChange(event) {
    this.bankAccounts = [];
    this.bankAccountId = null;
    this.getBankAccounts(event?.bankId);
    this.getCashDeposits();
  }
  getBankAccounts(bankId) {
    //let param = `?bankId=${id}&status=2001&pageNo=0&pageSize=6`
    let param = `?status=2001&pageNo=0&pageSize=1000`;
    if (bankId) {
      param += `&bankId=${bankId}`;
    }
    this._unsettleSession.getBankAccounts(param).subscribe(response => {
      this.bankAccounts = response['data'];
      console.log(this.bankAccounts);
    });
  }
  onBankAccountChange(event) {
    this.getCashDeposits();
  }
  getMainFundCash() {
    this._allocationService.getMainFundCash().subscribe(response => {
      console.log(response['data']);
      //this.mainFundAmounts = response?.data;
      let data = response?.data;
      data.forEach(item => {
        if (!this.mainFundAmounts.some(x => x.accountTypeID == item?.accountTypeID)) {
          this.mainFundAmounts.push(item);
        }
      });
    });
  }
  // Sorting Functions
  sortByDepositId() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getCashDeposits();
  }
  sortByBankName() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getCashDeposits();
  }
  sortByAccountName() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getCashDeposits();
  }
  sortByAccountNo() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getCashDeposits();
  }
  sortByAmount() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getCashDeposits();
  }
  /**
   * pagination
   * @param page page no
   */
  pageChange(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getCashDeposits();
  }
}
BankDepositsComponent.ɵfac = function BankDepositsComponent_Factory(t) {
  return new (t || BankDepositsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_cashier_unsettled_session_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_1__.UnsettledSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_4__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal));
};
BankDepositsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: BankDepositsComponent,
  selectors: [["app-bank-deposits"]],
  viewQuery: function BankDepositsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.success = _t.first);
    }
  },
  decls: 49,
  vars: 16,
  consts: [[1, "page-layout", "pt-2"], [1, "heading-text", "mb-3"], [1, "main-fund-container", "gap-4", "mb-4"], ["class", "main-fund-wrapper", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-12", "col-sm-6", "col-lg-3"], [1, "input-group", "search-box", "h-100"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Deposit Id", 1, "form-control", 3, "ngModel", "input", "ngModelChange"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], ["type", "text", "appDecimalNumber", "", "placeholder", "Amount", 1, "form-control", 3, "ngModel", "input", "ngModelChange"], ["placeholder", "Bank", "bindLabel", "bankNameEnglish", "bindValue", "bankId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "ngModel", "items", "ngModelChange", "change"], ["placeholder", "Account", "bindLabel", "accountName", "bindValue", "accountId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "ngModel", "items", "change", "ngModelChange"], ["ng-option-tmp", ""], [1, "col-12", "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "d-flex", "gap-4"], [1, "fw-500"], [1, "d-flex", "gap-3", "align-items-center"], [1, "form-check", "p-0", "d-flex", "align-items-center", "pe-2"], ["value", "cash", "id", "cash", "type", "radio", 1, "form-check-input", 3, "checked", "change"], ["for", "cash"], [1, "form-check", "p-0", "d-flex", "align-items-center", "ps-2"], ["value", "cheque", "id", "cheque", "type", "radio", 1, "form-check-input", 3, "checked", "change"], ["for", "cheque"], [1, "btns-group", "m-0", "d-block"], ["routerLink", "/main-fund/create-deposit", "class", "btn btn-save", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "total-records"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [4, "ngIf"], [1, "main-fund-wrapper"], [1, "main-fund-div"], [1, "currency-symbol"], ["alt", "", 3, "src"], [1, "d-flex", "flex-column"], [1, "fw-700", "font-18"], [1, "fw-700", "font-20", "gray-500", "m-0"], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], ["routerLink", "/main-fund/create-deposit", 1, "btn", "btn-save"], [1, "card-table", "mt-2", "register-sessions-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", "pe-none", 3, "disabled"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "d-flex", "flex-column", "gap-1"], ["width", "50", 3, "src"], ["class", "redBtn", "target", "_blank", 3, "href", 4, "ngIf", "ngIfElse"], ["noVoucher", ""], [1, "blue-clr", "font-16", "fw-600", "cursor-pointer", "text-decoration-none", 3, "click"], ["target", "_blank", 1, "redBtn", 3, "href"], [1, "not-found"], [1, "col-md-6"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function BankDepositsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Main Fund Current Amounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, BankDepositsComponent_div_4_Template, 10, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Deposits List");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function BankDepositsComponent_Template_input_input_12_listener() {
        return ctx.onDepositChange();
      })("ngModelChange", function BankDepositsComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.depositId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, BankDepositsComponent_button_13_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 5)(15, "div", 6)(16, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function BankDepositsComponent_Template_input_input_18_listener() {
        return ctx.onAmountChange();
      })("ngModelChange", function BankDepositsComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.amount = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, BankDepositsComponent_button_19_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 5)(21, "ng-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BankDepositsComponent_Template_ng_select_ngModelChange_21_listener($event) {
        return ctx.bankId = $event;
      })("change", function BankDepositsComponent_Template_ng_select_change_21_listener($event) {
        return ctx.onBankChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 5)(23, "ng-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BankDepositsComponent_Template_ng_select_change_23_listener($event) {
        return ctx.onBankAccountChange($event);
      })("ngModelChange", function BankDepositsComponent_Template_ng_select_ngModelChange_23_listener($event) {
        return ctx.bankAccountId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, BankDepositsComponent_ng_template_24_Template, 2, 1, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Deposit Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BankDepositsComponent_Template_input_change_31_listener($event) {
        return ctx.depositType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 22)(35, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BankDepositsComponent_Template_input_change_35_listener($event) {
        return ctx.depositType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, BankDepositsComponent_a_39_Template, 2, 0, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 27)(41, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, BankDepositsComponent_div_44_Template, 43, 30, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, BankDepositsComponent_ng_template_46_Template, 2, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, BankDepositsComponent_ng_container_48_Template, 12, 9, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.mainFundAmounts);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.depositId);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.depositId);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.bankId)("items", ctx.banks);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.bankAccountId)("items", ctx.bankAccounts);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", !ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.allowCreate && (ctx.cashDepositTypeId == 8001 || ctx.cashDepositTypeId == 8003));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.deposits)("ngIfElse", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptionTemplateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_8__.DecimalNumberDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe],
  styles: [".heading-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.depositBtn[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  width: 95px;\n  height: 34.2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #dc3545;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.main-fund-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 1px solid #E9E9E9;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px 15px;\n  flex: 0 1 240px;\n  \n  display: flex;\n  align-items: center;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  \n  color: #858585;\n}\n\n.d-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(173px, 1fr));\n  gap: 20px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.heading-main-fund[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n}\n.form-check-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2JhbmstZGVwb3NpdHMvYmFuay1kZXBvc2l0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0o7R0FBQTtFQUNNLGFBQUE7RUFDRixtQkFBQTtBQUVKO0FBQUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUVOO0FBQU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBRVI7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhGO0FBS0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSEo7QUFLSTtFQUNFLFdBQUE7QUFITjtBQU9FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFMSjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFORjtBQU9FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQU5GOztBQVFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFMRjtBQU9FO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRlcG9zaXRCdG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMzQuMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluLWZ1bmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC5tYWluLWZ1bmQtd3JhcHBlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOUU5RTk7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBmbGV4OiAwIDEgMjQwcHg7XG4vKiAgICBoZWlnaHQ6IDEwMHB4O1xuKi8gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLm1haW4tZnVuZC1kaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTVweDtcblxuICAgICAgLmN1cnJlbmN5LXN5bWJvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubWR0ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG5cbiAgY29sb3I6ICMxYjIxMmQ7XG59XG5cbi5zbVRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLyogVGV4dCBDb2xvci9UZXh0IDEgKi9cblxuICBjb2xvcjogIzg1ODU4NTtcbn1cblxuLmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTczcHgsMWZyKSk7XG4gIGdhcDogMjBweDtcbn1cblxuLnVwbG9hZGVkZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMWFmMjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogIzY5Njk2OTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLm1haW4tZnVuZC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5jdXJyZW5jeS1zeW1ib2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI0Y2RjZGNjtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn1cblxuLmhlYWRpbmctbWFpbi1mdW5kIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG59XG4uZm9ybS1jaGVjay1pbnB1dCB7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gICsgbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70798:
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/bank-deposits/bank-deposits.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDepositsModule": () => (/* binding */ BankDepositsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _bank_deposits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-deposits-routing.module */ 26199);
/* harmony import */ var _bank_deposits_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-deposits.component */ 31401);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _create_deposit_create_deposit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-deposit/create-deposit.component */ 91496);
/* harmony import */ var _view_cash_deposits_modal_view_cash_deposits_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-cash-deposits-modal/view-cash-deposits-modal.component */ 53912);
/* harmony import */ var _view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-deposited-cheques/view-deposited-cheques.component */ 44293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);









class BankDepositsModule {}
BankDepositsModule.ɵfac = function BankDepositsModule_Factory(t) {
  return new (t || BankDepositsModule)();
};
BankDepositsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: BankDepositsModule
});
BankDepositsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _bank_deposits_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankDepositsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](BankDepositsModule, {
    declarations: [_bank_deposits_component__WEBPACK_IMPORTED_MODULE_1__.BankDepositsComponent, _create_deposit_create_deposit_component__WEBPACK_IMPORTED_MODULE_3__.CreateDepositComponent, _view_cash_deposits_modal_view_cash_deposits_modal_component__WEBPACK_IMPORTED_MODULE_4__.ViewCashDepositsModalComponent, _view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_5__.ViewUploadedFileComponent, _view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_6__.ViewDepositedChequesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _bank_deposits_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankDepositsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 91496:
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/bank-deposits/create-deposit/create-deposit.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDepositComponent": () => (/* binding */ CreateDepositComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _cashier_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cashier/collect/payment-modal/view-file/view-file.component */ 32298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../allocation/allocation/allocation-services/allocation.service */ 51445);
/* harmony import */ var _cashier_unsettled_session_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cashier/unsettled-session/services/unsettled-session.service */ 20320);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/directive/drag-and-drop.directive */ 96603);
/* harmony import */ var _shared_components_saving_loader_saving_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/saving-loader/saving-loader.component */ 53823);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/view-file/view-file.component */ 67761);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/validation-error/validation-error.component */ 67711);




















const _c0 = ["inputFile"];
const _c1 = ["successModal"];
function CreateDepositComponent_ng_container_23_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_23_ng_container_1_span_1_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r16.f["currencyId"] == null ? null : ctx_r16.f["currencyId"].errors == null ? null : ctx_r16.f["currencyId"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_23_ng_container_1_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r0.f["currencyId"] == null ? null : ctx_r0.f["currencyId"].invalid) && (ctx_r0.f["currencyId"] == null ? null : ctx_r0.f["currencyId"].touched) || (ctx_r0.f["currencyId"] == null ? null : ctx_r0.f["currencyId"].dirty));
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
function CreateDepositComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Select Cheque Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 1)(4, "div", 46)(5, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function CreateDepositComponent_div_37_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r18.chequeType = $event);
    })("change", function CreateDepositComponent_div_37_Template_input_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r20.onChequeTypeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 49)(9, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function CreateDepositComponent_div_37_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.chequeType = $event);
    })("change", function CreateDepositComponent_div_37_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r22.onChequeTypeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "PDC");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r1.chequeType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r1.chequeType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](5, _c2));
  }
}
function CreateDepositComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r23 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((item_r23 == null ? null : item_r23.bankNameEnglish) + " - " + (item_r23 == null ? null : item_r23.accountName) + " - " + (item_r23 == null ? null : item_r23.accountNumber));
  }
}
function CreateDepositComponent_ng_container_47_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_47_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_47_ng_container_1_span_1_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r24.f["accountId"] == null ? null : ctx_r24.f["accountId"].errors == null ? null : ctx_r24.f["accountId"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_47_ng_container_1_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r3.f["accountId"] == null ? null : ctx_r3.f["accountId"].invalid) && (ctx_r3.f["accountId"] == null ? null : ctx_r3.f["accountId"].touched) || (ctx_r3.f["accountId"] == null ? null : ctx_r3.f["accountId"].dirty));
  }
}
function CreateDepositComponent_div_48_ng_container_4_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_div_48_ng_container_4_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Value must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_div_48_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_div_48_ng_container_4_ng_container_1_span_1_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, CreateDepositComponent_div_48_ng_container_4_ng_container_1_span_2_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r27.f["amount"] == null ? null : ctx_r27.f["amount"].errors == null ? null : ctx_r27.f["amount"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r27.f["amount"] == null ? null : ctx_r27.f["amount"].errors == null ? null : ctx_r27.f["amount"].errors["invalidAmount"]);
  }
}
function CreateDepositComponent_div_48_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_div_48_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r26.f["amount"] == null ? null : ctx_r26.f["amount"].invalid) && (ctx_r26.f["amount"] == null ? null : ctx_r26.f["amount"].touched) || (ctx_r26.f["amount"] == null ? null : ctx_r26.f["amount"].dirty));
  }
}
function CreateDepositComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 26)(1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Amount*");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, CreateDepositComponent_div_48_ng_container_4_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.f["amount"] == null ? null : ctx_r4.f["amount"]["errors"]);
  }
}
function CreateDepositComponent_ng_container_54_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_54_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_54_ng_container_1_span_1_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r30.f["depositDate"] == null ? null : ctx_r30.f["depositDate"].errors == null ? null : ctx_r30.f["depositDate"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_54_ng_container_1_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r5.f["depositDate"] == null ? null : ctx_r5.f["depositDate"].invalid) && (ctx_r5.f["depositDate"] == null ? null : ctx_r5.f["depositDate"].touched) || (ctx_r5.f["depositDate"] == null ? null : ctx_r5.f["depositDate"].dirty));
  }
}
function CreateDepositComponent_ng_container_59_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_59_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_59_ng_container_1_span_1_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r32.f["time"] == null ? null : ctx_r32.f["time"].errors == null ? null : ctx_r32.f["time"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_59_ng_container_1_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r6.f["time"] == null ? null : ctx_r6.f["time"].invalid) && (ctx_r6.f["time"] == null ? null : ctx_r6.f["time"].touched) || (ctx_r6.f["time"] == null ? null : ctx_r6.f["time"].dirty));
  }
}
function CreateDepositComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 53)(2, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 55)(5, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_73_Template_img_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r34.fileAction("view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_73_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r36.fileAction("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r8.f["attachment"] == null ? null : ctx_r8.f["attachment"].value);
  }
}
function CreateDepositComponent_ng_container_74_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Attachment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_74_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_74_ng_container_1_span_1_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r37.f["attachment"] == null ? null : ctx_r37.f["attachment"].errors == null ? null : ctx_r37.f["attachment"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_74_ng_container_1_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r9.f["attachment"] == null ? null : ctx_r9.f["attachment"].invalid) && (ctx_r9.f["attachment"] == null ? null : ctx_r9.f["attachment"].touched) || (ctx_r9.f["attachment"] == null ? null : ctx_r9.f["attachment"].dirty));
  }
}
function CreateDepositComponent_small_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r10.invalidFileType);
  }
}
function CreateDepositComponent_div_76_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_div_76_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r41.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_div_76_saving_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "saving-loader");
  }
}
function CreateDepositComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, CreateDepositComponent_div_76_button_4_Template, 2, 0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CreateDepositComponent_div_76_saving_loader_5_Template, 1, 0, "saving-loader", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r11.isPending);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r11.isPending);
  }
}
function CreateDepositComponent_ng_container_77_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_77_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r47.clearSearchChequeInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_77_div_21_tr_42_view_file_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "view-file", 92);
  }
  if (rf & 2) {
    const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("file", item_r51 == null ? null : item_r51.chequeImage);
  }
}
function CreateDepositComponent_ng_container_77_div_21_tr_42_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0, " --- ");
  }
}
function CreateDepositComponent_ng_container_77_div_21_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateDepositComponent_ng_container_77_div_21_tr_42_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r57.handleCheckBoxChange());
    })("ngModelChange", function CreateDepositComponent_ng_container_77_div_21_tr_42_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r58);
      const item_r51 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](item_r51.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, CreateDepositComponent_ng_container_77_div_21_tr_42_view_file_21_Template, 1, 1, "view-file", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, CreateDepositComponent_ng_container_77_div_21_tr_42_ng_template_22_Template, 1, 0, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r51 = ctx.$implicit;
    const index_r52 = ctx.index;
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", item_r51.checked)("id", index_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r51 == null ? null : item_r51.chequeCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((item_r51 == null ? null : item_r51.settleChequeNumber) || (item_r51 == null ? null : item_r51.lastChequeNo) || (item_r51 == null ? null : item_r51.chequeNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r51 == null ? null : item_r51.bank == null ? null : item_r51.bank.translation[0] == null ? null : item_r51.bank.translation[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 11, (item_r51 == null ? null : item_r51.settleChequeDate) || (item_r51 == null ? null : item_r51.lastCheckDate) || (item_r51 == null ? null : item_r51.chequeDate), "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](14, 14, (item_r51 == null ? null : item_r51.lastAmountToPay) || (item_r51 == null ? null : item_r51.chequeCollectionJod), "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r51 == null ? null : item_r51.currency[0] == null ? null : item_r51.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](19, 17, item_r51 == null ? null : item_r51.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r51 == null ? null : item_r51.chequeImage)("ngIfElse", _r54);
  }
}
function CreateDepositComponent_ng_container_77_div_21_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_77_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75)(1, "div", 79)(2, "div", 80)(3, "table", 81)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 82)(8, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_77_div_21_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r60.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 84)(11, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "th", 82)(13, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_77_div_21_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r61);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r62.sortByCheque());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "i", 84)(16, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "th", 82)(18, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_77_div_21_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r61);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r63.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "i", 84)(21, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "th", 82)(23, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_77_div_21_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r61);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r64.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "i", 84)(26, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "th", 82)(28, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_77_div_21_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r61);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r65.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, " Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "i", 84)(31, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "th", 82)(33, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "th", 82)(36, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "th", 82)(39, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, "Cheque Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, CreateDepositComponent_ng_container_77_div_21_tr_42_Template, 24, 20, "tr", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, CreateDepositComponent_ng_container_77_div_21_div_43_Template, 2, 0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r44.settledChequeList == null ? null : ctx_r44.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r44.settledChequeList == null ? null : ctx_r44.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r44.settledChequeList == null ? null : ctx_r44.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r44.settledChequeList == null ? null : ctx_r44.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r44.settledChequeList == null ? null : ctx_r44.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r44.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r44.settledChequeList == null ? null : ctx_r44.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r44.settledChequeList == null ? null : ctx_r44.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r44.settledChequeList == null ? null : ctx_r44.settledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r44.settledChequeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r44.settledChequeList == null ? null : ctx_r44.settledChequeList.length) == 0);
  }
}
function CreateDepositComponent_ng_container_77_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 24)(2, "div", 63)(3, "div", 24)(4, "div", 14)(5, "div", 64)(6, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function CreateDepositComponent_ng_container_77_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r66.onSearchChequeChange());
    })("ngModelChange", function CreateDepositComponent_ng_container_77_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r68.searchCheque = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, CreateDepositComponent_ng_container_77_button_9_Template, 2, 0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 14)(11, "ng-select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function CreateDepositComponent_ng_container_77_Template_ng_select_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r69.bankId = $event);
    })("change", function CreateDepositComponent_ng_container_77_Template_ng_select_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r70.onBankChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 70)(13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Selcted Cheques Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 72)(19, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, CreateDepositComponent_ng_container_77_div_21_Template, 44, 30, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, CreateDepositComponent_ng_container_77_ng_template_23_Template, 2, 0, "ng-template", null, 76, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](24);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r12.searchCheque);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r12.searchCheque);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r12.bankId)("items", ctx_r12.banks);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](17, 9, ctx_r12.selectedChequeAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("No of Selected ", ctx_r12.checkedItems == null ? null : ctx_r12.checkedItems.length, ". No of Cheques ", ctx_r12.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r12.settledChequeList)("ngIfElse", _r45);
  }
}
function CreateDepositComponent_div_78_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_div_78_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r73.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r71.checkedItems == null ? null : ctx_r71.checkedItems.length) <= 0);
  }
}
function CreateDepositComponent_div_78_saving_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "saving-loader");
  }
}
function CreateDepositComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, CreateDepositComponent_div_78_button_4_Template, 2, 1, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CreateDepositComponent_div_78_saving_loader_5_Template, 1, 0, "saving-loader", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r13.isPending);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.isPending);
  }
}
function CreateDepositComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 96)(1, "h5", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Your deposit has been created successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 99)(5, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_template_79_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r76._commonService.downloadInvoices({
        invoices: ctx_r76.reponseData.data
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "View Voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateDepositComponent_ng_template_79_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r77);
      const modal_r75 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](modal_r75.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
const _c3 = function () {
  return {
    required: "Input is required"
  };
};
class CreateDepositComponent {
  constructor(_commonService, fb, _modalService, _allocationService, _unsettleSession, _spinnerService) {
    this._commonService = _commonService;
    this.fb = fb;
    this._modalService = _modalService;
    this._allocationService = _allocationService;
    this._unsettleSession = _unsettleSession;
    this._spinnerService = _spinnerService;
    this.isCash = true;
    this.currencyList = [];
    this.bankAccounts = [];
    this.banks = [];
    this.settledChequeList = [];
    this.isCurrencySelected = true;
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 1;
    this.pages = [];
    this.checkedItems = [];
    this.searchCheque = '';
    this.chequeType = '';
    this.bankId = null;
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']; //'application/pdf'
  }

  ngOnInit() {
    this.initForm();
    this.getCurrencyList();
    this.getBanksFromLookUp();
    this.formGroup.get('amount').valueChanges.subscribe(value => {
      if (value && +value <= 0) {
        this.formGroup.get('amount').setErrors({
          'invalidAmount': true
        });
      }
    });
  }
  initForm() {
    this.formGroup = this.fb.group({
      attachment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      currencyId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      accountId: [{
        value: null,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      amount: [{
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      depositDate: [{
        value: this.getToday(),
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      time: [{
        value: this.setTimeNow(),
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      exchangeRate: [{
        value: '',
        disabled: true
      }],
      currencyToConvert: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
      amountToConvert: ['']
    });
  }
  onCurrencyChange(event) {
    this.formGroup.get('accountId').setValue(null);
    const value = event?.value;
    let currency = this.formGroup.get('currencyToConvert').value;
    if (value == currency) {
      this.formGroup.get('exchangeRate').setValue(1);
    } else {
      this.formGroup.get('exchangeRate').setValue(event?.rate);
    }
    this.toggleFormDisablity(value);
    if (value) {
      let param = `?currencyId=${value}&status=2001&pageNo=0&pageSize=1000`;
      if (value == 9001)
        //JOD
        param += `&accountType=` + (this.isCash && "15001" || this.chequeType == 'cheque' && '15004' || '15005');else if (value == 9002)
        //USD
        param += `&accountType=` + (this.isCash && "15002" || this.chequeType == 'cheque' && '15006' || '15008');else if (value == 9003)
        //EURO
        param += `&accountType=` + (this.isCash && "15003" || this.chequeType == 'cheque' && '15007' || '15009');
      this.getBankAccounts(param);
    }
    if (!this.isCash) {
      this.getMainFundSettledCheques();
    }
  }
  handleCurrencyToConvertChange(event) {
    let obj = {
      exchangeRate: event?.rate
    };
    let value = event.value;
    let currency = this.formGroup.get('currencyId').value;
    if (value == currency) {
      obj.exchangeRate = 1;
    }
    this.formGroup.patchValue(obj);
    this.convertAmount();
  }
  convertAmount() {
    let rate = +this.formGroup.get('exchangeRate').getRawValue();
    let value = +this.formGroup.get('amountToConvert').value;
    if (value > 0) {
      let convertedAmount = this.convertCurrency(value, rate);
      this.formGroup.get('amount').setValue(convertedAmount.toFixed(3));
      this.formGroup.get('amount').disable();
    }
  }
  convertCurrency(amount, rate) {
    return amount * rate;
  }
  setTimeNow() {
    let now = new Date();
    this.hours = ("0" + now.getHours()).slice(-2);
    this.minutes = ("0" + now.getMinutes()).slice(-2);
    let str = this.hours + ':' + this.minutes;
    return str;
  }
  getToday() {
    return new Date().toISOString().split('T')[0];
  }
  depositType(event) {
    this.chequeType = '';
    this.bankAccounts = [];
    this.currencyId = null;
    this.formGroup.get('accountId').setValue(null);
    this.isCash = event.target.value == 'cash' ? true : false;
    if (!this.isCash) {
      // THIS IS JUST TO SET VALUES BECASUE THESE ARE REQUIRED IN CASE OF CASH DEPOSIT SO I AM USING ONE FORM FOR BOTH CASH AND CHEQUE
      // REMOVE VALIDATION I HAVE SET VALUE IN THESE CONTROLS SO I CAN USE CONTROL VALIDATORS CONDITIONALLY BUT I AM GOING THIS WAY.
      this.formGroup.get('currencyId').setValue(null);
      this.formGroup.get('amount').setValue('noValue');
      this.toggleFormDisablity(false);
    } else {
      this.formGroup.get('currencyId').setValue(null);
      this.formGroup.get('amount').setValue('');
      this.toggleFormDisablity(false);
    }
    this.formGroup.markAsUntouched();
    this.formGroup.markAsPristine();
  }
  toggleFormDisablity(value) {
    if (value) {
      this.formGroup.get('accountId').enable();
      this.formGroup.get('amount').enable();
      this.formGroup.get('depositDate').enable();
      this.formGroup.get('time').enable();
    } else {
      this.formGroup.get('accountId').disable();
      this.formGroup.get('amount').disable();
      this.formGroup.get('depositDate').disable();
      this.formGroup.get('time').disable();
    }
  }
  handleSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    } else {
      let formValue = this.formGroup.getRawValue();
      let depositDate = `${formValue['depositDate']}T${formValue['time']}`;
      formValue = {
        ...formValue,
        depositDate
      };
      console.log(formValue);
      let formData = new FormData();
      formData.append('accountId', formValue['accountId']);
      formData.append('depositDate', formValue['depositDate']);
      if (this.uploadedFile?.['file']) {
        formData.append('Files', this.uploadedFile['file']);
      }
      let message = 'Your deposit has been created successfully';
      this.isPending = true;
      if (this.isCash) {
        formData.append('amount', formValue['amount']);
        formData.append('currencyId', formValue['currencyId']);
        formData.append('exchangeFromCurrencyID', formValue['currencyToConvert']);
        formData.append('amountBeforeExchange', formValue['amountToConvert']);
        this._allocationService.addCashDepositToMarkaziaAccount(formData).subscribe(response => {
          if (response?.isSuccess) {
            this.isPending = false;
            this.reponseData = response.data;
            const ref = this._modalService.open(this.successModalRef);
            this._commonService.NavigateToRoute('/main-fund/bank-deposits');
          }
        }, error => {
          this.isPending = false;
          this.successModal('error', error.error['errors']);
        });
      } else {
        formData.append('chequeCollectionIds', this.chequeIds.toString());
        this._allocationService.addChequesToMarkaziaAccount(formData).subscribe(response => {
          if (response?.isSuccess) {
            this.reponseData = response.data;
            const ref = this._modalService.open(this.successModalRef);
            //this.successModal('success', message);
            this._commonService.NavigateToRoute('/main-fund/bank-deposits');
            this.isPending = false;
          }
        }, error => {
          this.isPending = false;
          this.successModal('error', error.error['errors']);
        });
      }
    }
  }
  successModal(type, message) {
    const modelRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent, {
      size: 'md'
    });
    modelRef.componentInstance.type = type;
    if (type == 'success') {
      modelRef.componentInstance.message = message;
      modelRef.componentInstance.routeName = "/main-fund/bank-deposits";
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  get f() {
    return this.formGroup.controls;
  }
  handleCheckBoxChange() {
    this.checkedItems = this.settledChequeList.filter(x => x.checked);
    if (this.checkedItems.length > 0) {
      this.selectedChequeAmount = this.checkedItems.reduce((acc, current) => {
        return acc += current?.chequeCollectionJod;
      }, 0);
      this.chequeIds = this.checkedItems.map(x => x.chequeCollectionId);
    } else {
      this.selectedChequeAmount = 0;
    }
  }
  getBankAccounts(param) {
    this._unsettleSession.getBankAccounts(param).subscribe(response => {
      this.bankAccounts = response['data'];
    });
  }
  getMainFundSettledCheques() {
    this._spinnerService.show();
    let param = `?currencyId=${this.formGroup.get('currencyId').value || ''}&chequeType=${this.chequeType}&bankId=${this.bankId || ''}
    &search=${this.searchCheque}&sort=${this.sort}&pageNo=${this.pageNo - 1}&pageSize=1000`;
    this._allocationService.getMainFundSettledChequesNew(param).subscribe(response => {
      if (response?.data.length > 0) {
        this.settledChequeList = response?.data.map(x => {
          return {
            ...x,
            checked: false
          };
        });
        ;
        this.totalRecords = response?.totalRecordCount;
      } else {
        this.checkedItems = [];
        this.selectedChequeAmount = 0;
        this.settledChequeList = [];
      }
    }).add(() => this._spinnerService.hide());
  }
  onSearchChequeChange() {
    this.getMainFundSettledCheques();
  }
  clearSearchChequeInput() {
    this.searchCheque = '';
    this.getMainFundSettledCheques();
  }
  onChequeTypeChange() {
    this.formGroup.get('accountId').setValue(null);
    this.toggleFormDisablity(true);
    this.checkedItems = [];
    this.onCurrencyChange({
      value: +this.formGroup.get('currencyId').value
    });
    //this.getMainFundSettledCheques();
  }

  getCurrencyList() {
    this._allocationService.getCurrencyList().subscribe(response => {
      this.currencyList = response['data'].map(x => {
        return {
          value: x.id,
          text: x.name[0]?.lookupName,
          rate: x.name[0].rate
        };
      });
    });
  }
  getBanks() {
    this._unsettleSession.getBanks().subscribe(response => {
      this.banks = response['data'];
    });
  }
  getBanksFromLookUp() {
    let param = `?lookupTypeId=11&PageNo=0&PageSize=1000`;
    this._unsettleSession.getDataFromLookUp(param).subscribe(response => {
      this.banks = response['data'].map(x => {
        return {
          value: x.id,
          text: x['name'][0]?.lookupName
        };
      });
      console.log(this.banks);
    });
  }
  onBankChange(event) {
    this.getMainFundSettledCheques();
  }
  fileAction(action) {
    if (action == 'view') {
      const modelRef = this._modalService.open(_cashier_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_1__.ViewFileComponent, {
        size: 'md'
      });
      modelRef.componentInstance.imageUploadedView = this.uploadedFile;
    } else {
      this.inputFile.nativeElement.value = null;
      this.formGroup.get('attachment')?.setValue('');
      this.uploadedFile = {};
    }
  }
  filesDropped(data) {
    this.enter = false;
    let isInvalid = this.checkInvalidImageFormat(data);
    if (isInvalid) {
      this.inputFile.nativeElement.value = null;
      return;
    }
    let files = data.map(x => {
      return x.file;
    });
    if (!isInvalid) {
      files.forEach(file => {
        this.formGroup.get('attachment')?.setValue(file.name);
        this._commonService.fileToBase64(file).then(response => {
          this.uploadedFile = response;
        });
      });
    }
  }
  onSelectFile(event) {
    let files = [...event.target.files];
    let isInvalid = this.checkInvalidImageFormat(files);
    if (isInvalid) {
      this.inputFile.nativeElement.value = null;
      return;
    }
    if (files.length > 0) {
      if (!isInvalid) {
        files.forEach(file => {
          this.formGroup.get('attachment')?.setValue(file.name);
          this._commonService.fileToBase64(file).then(response => {
            this.uploadedFile = response;
          });
        });
      }
    }
  }
  removeFile(item) {
    this.inputFile.nativeElement.value = null;
    this.formGroup.get('attachment')?.setValue('');
    this.uploadedFile = null;
  }
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getMainFundSettledCheques();
  }
  sortByCheque() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getMainFundSettledCheques();
  }
  sortByBank() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getMainFundSettledCheques();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getMainFundSettledCheques();
  }
  sortByAmount() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getMainFundSettledCheques();
  }
  setPage(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getMainFundSettledCheques();
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
}
CreateDepositComponent.ɵfac = function CreateDepositComponent_Factory(t) {
  return new (t || CreateDepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_3__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_cashier_unsettled_session_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_4__.UnsettledSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService));
};
CreateDepositComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: CreateDepositComponent,
  selectors: [["app-create-deposit"]],
  viewQuery: function CreateDepositComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.successModalRef = _t.first);
    }
  },
  decls: 81,
  vars: 22,
  consts: [[1, "page-layout"], [1, "d-flex", "align-items-center", "gap-5"], [1, "headingText"], [1, "border-deposit-type"], [1, "form-check", "d-flex", "align-items-center", "pe-2"], ["value", "cash", "id", "cash", "type", "radio", 1, "form-check-input", 3, "checked", "change"], ["for", "cash"], [1, "form-check", "d-flex", "align-items-center", "ps-2"], ["value", "cheque", "id", "cheque", "type", "radio", 1, "form-check-input", 3, "checked", "change"], ["for", "cheque"], [1, "separator"], [3, "formGroup"], [1, "card-Box", "mt-4"], [1, "row", "align-items-center"], [1, "col-sm-3"], [1, "mdtext"], ["formControlName", "currencyId", "placeholder", "Currency", "bindLabel", "text", "bindValue", "value", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "change"], [4, "ngIf"], ["formControlName", "currencyToConvert", "placeholder", "Currency", "bindLabel", "text", "bindValue", "value", 1, "mt-3", "mt-md-0", 3, "items", "change"], [3, "control", "errorMessages"], ["type", "text", "formControlName", "amountToConvert", "appDecimalNumber", "", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "exchangeRate", 1, "form-control"], ["class", "mt-2", 4, "ngIf"], [1, "card-Box", "mt-5"], [1, "row"], [1, "col-sm-6"], [1, "col-6"], ["formControlName", "accountId", "placeholder", "Account", "bindLabel", "accountName", "bindValue", "accountId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], ["ng-option-tmp", ""], ["class", "col-6", 4, "ngIf"], [1, "row", "mt-3"], ["type", "date", "formControlName", "depositDate", 1, "form-control", 3, "max"], ["type", "time", "formControlName", "time", 1, "form-control"], [1, "offset-2", "col-sm-4"], [1, "form-group", "mb-3"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "multiple", "", "hidden", "", 1, "form-control", 3, "change"], ["inputFile", ""], ["class", "text-danger", 4, "ngIf"], ["class", "d-flex justify-content-end mt-5", 4, "ngIf"], ["successModal", ""], [1, "text-danger"], [1, "mt-2"], [1, "mdtext", "mb-2"], [1, "form-check", "d-flex", "align-items-center", "gap-2", "ps-0"], ["value", "cheque", "id", "cheque1", "type", "radio", 1, "form-check-input", "p-0", "m-0", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["for", "cheque1", 1, "p-0", "lh-1"], [1, "form-check", "d-flex", "align-items-center", "gap-2"], ["value", "pdc", "id", "pdc", "type", "radio", 1, "form-check-input", "p-0", "m-0", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["for", "pdc", 1, "p-0", "lh-1"], ["type", "text", "formControlName", "amount", "appDecimalNumber", "", 1, "form-control"], [1, "d-flex", "gap-3", "file-item", "align-items-center", "justify-content-between"], [1, "p-0"], [1, "d-flex", "gap-2"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"], [1, "d-flex", "justify-content-end", "mt-5"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", "routerLink", "/main-fund/bank-deposits", 1, "btn", "btn-cancel"], ["type", "button", "class", "btn btn-save", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "col-12", "my-5"], [1, "input-group", "search-box", "h-100"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search for a cheque", 1, "form-control", 3, "ngModel", "input", "ngModelChange"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], ["placeholder", "Bank", "bindLabel", "text", "bindValue", "value", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "ngModel", "items", "ngModelChange", "change"], [1, "col-sm-6", "d-flex", "align-items-center", "gap-4", "justify-content-end"], [1, "mdtext", "amountButton"], [1, "col-12", "my-3", "d-flex", "justify-content-end"], [1, "font-16", "fw-500", "gray-500"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], ["type", "checkbox", 1, "inputColor", 3, "ngModel", "id", "change", "ngModelChange"], [3, "file", 4, "ngIf", "ngIfElse"], ["noCheque", ""], [3, "file"], [1, "not-found"], ["type", "button", "class", "btn btn-save", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-save", 3, "disabled", "click"], [1, "p-3"], [1, "d-flex", "gap-2", "align-items-center", "justify-content-center", "mb-3"], [1, "fa-regular", "fa-circle-check", "green-clr"], [1, "btns-group", "gap-2", "mt-2", "mb-0", "text-center"], ["type", "button", 1, "redBtn", 3, "click"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"]],
  template: function CreateDepositComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Select Deposit Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateDepositComponent_Template_input_change_6_listener($event) {
        return ctx.depositType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 7)(10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateDepositComponent_Template_input_change_10_listener($event) {
        return ctx.depositType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Deposit Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "form", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Select Currency *");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "ng-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateDepositComponent_Template_ng_select_change_22_listener($event) {
        return ctx.onCurrencyChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, CreateDepositComponent_ng_container_23_Template, 2, 1, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 14)(25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "Deposit From Currency *");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "ng-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateDepositComponent_Template_ng_select_change_27_listener($event) {
        return ctx.handleCurrencyToConvertChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "validation-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 14)(30, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateDepositComponent_Template_input_change_32_listener() {
        return ctx.convertAmount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 14)(34, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Exchange Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](36, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, CreateDepositComponent_div_37_Template, 12, 6, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 23)(39, "div", 24)(40, "div", 25)(41, "div", 24)(42, "div", 26)(43, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "Select Bank Account*");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "ng-select", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, CreateDepositComponent_ng_template_46_Template, 2, 1, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](47, CreateDepositComponent_ng_container_47_Template, 2, 1, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](48, CreateDepositComponent_div_48_Template, 5, 1, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 30)(50, "div", 26)(51, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "Select Deposit Date*");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](53, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](54, CreateDepositComponent_ng_container_54_Template, 2, 1, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 26)(56, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, "Select Deposit Time*");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](58, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](59, CreateDepositComponent_ng_container_59_Template, 2, 1, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 33)(61, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "Upload Deposit Slip Attachment *");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 34)(64, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("files", function CreateDepositComponent_Template_div_files_64_listener($event) {
        return ctx.filesDropped($event);
      })("enter", function CreateDepositComponent_Template_div_enter_64_listener() {
        return ctx.enter = !ctx.enter;
      })("leave", function CreateDepositComponent_Template_div_leave_64_listener() {
        return ctx.enter = !ctx.enter;
      })("click", function CreateDepositComponent_Template_div_click_64_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](72);
        return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r7.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](66, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "Select OR Drag & drop files");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "Supported formates: JPEG, PNG, PDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "input", 38, 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateDepositComponent_Template_input_change_71_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](73, CreateDepositComponent_ng_container_73_Template, 7, 1, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, CreateDepositComponent_ng_container_74_Template, 2, 1, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](75, CreateDepositComponent_small_75_Template, 2, 1, "small", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](76, CreateDepositComponent_div_76_Template, 6, 2, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](77, CreateDepositComponent_ng_container_77_Template, 25, 12, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](78, CreateDepositComponent_div_78_Template, 6, 2, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](79, CreateDepositComponent_ng_template_79_Template, 9, 0, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", !ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.currencyList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.f["currencyId"] == null ? null : ctx.f["currencyId"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.currencyList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formGroup.get("currencyToConvert"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](21, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.bankAccounts);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.f["accountId"] == null ? null : ctx.f["accountId"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("max", ctx.getToday());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.f["depositDate"] == null ? null : ctx.f["depositDate"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.f["time"] == null ? null : ctx.f["time"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.f["attachment"] == null ? null : ctx.f["attachment"].value);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.f["attachment"] == null ? null : ctx.f["attachment"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invalidFileType);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isCash);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgOptionTemplateDirective, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_7__.DecimalNumberDirective, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_8__.DragAndDropDirective, _shared_components_saving_loader_saving_loader_component__WEBPACK_IMPORTED_MODULE_9__.SavingLoaderComponent, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_10__.ViewFileComponent, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_11__.ValidationErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
  styles: [".border-deposit-type[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: 5px;\n}\n.border-deposit-type[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.border-deposit-type[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #dadada;\n}\n.border-deposit-type[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n}\n.border-deposit-type[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  margin-left: 5px;\n}\n\n.inputColor[_ngcontent-%COMP%] {\n  accent-color: #dc3545;\n  height: 15px;\n  width: 15px;\n}\n\n.amountButton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 34px 14px 35px;\n  height: 48px;\n  background: #f8f8f8;\n  border: 0.5px solid #e9e9e9;\n  border-radius: 10px;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\nform[_ngcontent-%COMP%]   span.text-danger[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding-top: 7px;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #dadada;\n  background: white;\n}\n.file-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: green;\n  font-weight: 600;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.btn-upload[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.card-Box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 24px 34px;\n}\n\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  \n  color: #1b212d;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  \n  color: #858585;\n}\n\n.linkText[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #4e9aff;\n}\n\n.linkText2[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #4e9aff;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.headButtonText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9e9e9;\n  margin: 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2JhbmstZGVwb3NpdHMvY3JlYXRlLWRlcG9zaXQvY3JlYXRlLWRlcG9zaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVFO0VBQ0UsVUFBQTtBQUFKO0FBRUk7RUFDRSwrQkFBQTtBQUFOO0FBR0k7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUROO0FBR007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRFI7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSEY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0U7RUFDRSxvQkFBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0FBSEo7QUFNRTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKTjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQU9FO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0UsMkJBQUE7RUFDQSxnREFBQTtFQUNBLHdEQUFBO0VBQ0EscURBQUE7QUFMRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUpGO0FBTUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUxKO0FBUUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFVQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBVkY7O0FBYUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVkY7O0FBYUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFWRjs7QUFhQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVZGOztBQWFBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7QUFWRiIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5ib3JkZXItZGVwb3NpdC10eXBlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgLmZvcm0tY2hlY2sge1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgfVxuXG4gICAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICsgbGFiZWwge1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmlucHV0Q29sb3Ige1xuICBhY2NlbnQtY29sb3I6ICNkYzM1NDU7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG59XG4uYW1vdW50QnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMzRweCAxNHB4IDM1cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTllOWU5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuZm9ybSB7XG4gIGxhYmVsIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNDZweDtcbiAgfVxuXG4gIHNwYW4udGV4dC1kYW5nZXIge1xuICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgcGFkZGluZy10b3A6N3B4O1xuICB9XG59XG5cbi5maWxlLWl0ZW0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gIGxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuLmNhcmQtdGFibGUge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmNGY0ZjQ7XG4gIGJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5wbGF5LWxlZnQge1xuICBjb2xvcjogI2VjZWFlYTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wbGF5LXJpZ2h0IHtcbiAgY29sb3I6ICNlY2VhZWE7XG59XG5cbi5jYXJkLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjOTM5YWE4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMGYwZjBmO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gIH1cbn1cblxuLmJ0bi11cGxvYWQge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTJweCAzNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uY2FyZC1Cb3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDI0cHggMzRweDtcbn1cblxuLmZsZXgtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRpbmdUZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBUZXh0IENvbG9yL1RleHQgMSAqL1xuXG4gIGNvbG9yOiAjMWIyMTJkO1xufVxuXG4ubWR0ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG5cbiAgY29sb3I6ICMxYjIxMmQ7XG59XG5cbi5zbVRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogVGV4dCBDb2xvci9UZXh0IDEgKi9cblxuICBjb2xvcjogIzg1ODU4NTtcbn1cblxuLmxpbmtUZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNGU5YWZmO1xufVxuXG4ubGlua1RleHQyIHtcbiAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNGU5YWZmO1xufVxuXG4uaGVhZEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiAzNC4ycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmhlYWRCdXR0b25UZXh0IHtcbiAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 44293:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/bank-deposits/view-deposited-cheques/view-deposited-cheques.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDepositedChequesComponent": () => (/* binding */ ViewDepositedChequesComponent)
/* harmony export */ });
/* harmony import */ var _view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../allocation/allocation/allocation-services/allocation.service */ 51445);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/not-found/not-found.component */ 59442);










function ViewDepositedChequesComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 18)(4, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 20)(7, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewDepositedChequesComponent_div_42_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.viewFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx_r0.depositDetails == null ? null : ctx_r0.depositDetails.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function ViewDepositedChequesComponent_div_48_tr_32_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.chequeCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.chequeNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.bank == null ? null : item_r9.bank.translation[0] == null ? null : item_r9.bank.translation[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 5, item_r9 == null ? null : item_r9.chequeDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 8, item_r9 == null ? null : item_r9.chequeCollectionJod, "2.3-3"), " JD");
  }
}
function ViewDepositedChequesComponent_div_48_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ViewDepositedChequesComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div", 24)(2, "div", 25)(3, "table", 26)(4, "thead")(5, "tr")(6, "th", 27)(7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewDepositedChequesComponent_div_48_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 29)(10, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 27)(12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewDepositedChequesComponent_div_48_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.sortByCheque());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 29)(15, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 27)(17, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewDepositedChequesComponent_div_48_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 29)(20, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 27)(22, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewDepositedChequesComponent_div_48_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 29)(25, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 27)(27, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewDepositedChequesComponent_div_48_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 29)(30, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ViewDepositedChequesComponent_div_48_tr_32_Template, 13, 11, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ViewDepositedChequesComponent_div_48_div_33_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (ctx_r1.depositedChequeList == null ? null : ctx_r1.depositedChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (ctx_r1.depositedChequeList == null ? null : ctx_r1.depositedChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (ctx_r1.depositedChequeList == null ? null : ctx_r1.depositedChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (ctx_r1.depositedChequeList == null ? null : ctx_r1.depositedChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (ctx_r1.depositedChequeList == null ? null : ctx_r1.depositedChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.depositedChequeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.depositedChequeList == null ? null : ctx_r1.depositedChequeList.length) == 0);
  }
}
function ViewDepositedChequesComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
function ViewDepositedChequesComponent_li_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 34)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewDepositedChequesComponent_li_63_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const page_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.setPage(page_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r17 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r4.pageNo === page_r17))("disabled", ctx_r4.pageNo === page_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", page_r17 + 1, " ");
  }
}
class ViewDepositedChequesComponent {
  constructor(_activeRoute, _commonService, _headerService, _allocationService, _modalService) {
    this._activeRoute = _activeRoute;
    this._commonService = _commonService;
    this._headerService = _headerService;
    this._allocationService = _allocationService;
    this._modalService = _modalService;
    this.depositedChequeList = [];
    //SORTING & PAGINATION
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 0;
    this.pages = [];
  }
  ngOnInit() {
    this._headerService.setTitle('Main Fund Deposits > Deposited Cheque Details View');
    this._activeRoute.params.subscribe(params => {
      this.depositId = params['depositId'];
      this.getChequeDepositDetails();
    });
  }
  getChequeDepositDetails() {
    let params = `?DepositeId=${this.depositId}&Sort=${this.sort}&PageNo=${this.pageNo}&PageSize=6`;
    this._allocationService.getChequeDepositDetails(params).subscribe(response => {
      this.depositedChequeList = response['data'];
      console.log(response);
      this._allocationService.getDepositsById(this.depositId, 'cheque').subscribe(res => {
        console.log(res);
        this.depositDetails = res['data'][0];
        this.fileName = this.depositDetails.filePath.split('/').pop();
        this.totalRecords = res.totalRecordCount;
      });
    });
  }
  viewFile() {
    const modalRef = this._modalService.open(_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewUploadedFileComponent, {
      size: 'md'
    });
    modalRef.componentInstance.file = this.depositDetails?.filePath;
  }
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getChequeDepositDetails();
  }
  sortByCheque() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getChequeDepositDetails();
  }
  sortByBank() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getChequeDepositDetails();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getChequeDepositDetails();
  }
  sortByAmount() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getChequeDepositDetails();
  }
  setPage(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getChequeDepositDetails();
  }
}
ViewDepositedChequesComponent.ɵfac = function ViewDepositedChequesComponent_Factory(t) {
  return new (t || ViewDepositedChequesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_3__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal));
};
ViewDepositedChequesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ViewDepositedChequesComponent,
  selectors: [["app-view-deposited-cheques"]],
  decls: 64,
  vars: 23,
  consts: [[1, "d-flex", "flex-row", "my-3", "gap-4"], [1, "dark-gray", "fw-700"], [1, "light-gray"], [1, "card-Box"], [1, "separator", "my-4"], [1, "d-flex", "flex-wrap"], [1, "d-flex", "flex-column", "flex-basis"], [1, "dark-gray", "fw-600"], ["class", "d-flex flex-column flex-basis", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-between", "align-items-center", "my-5"], [1, "font-16", "fw-500", "gray-500"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "file-item", "d-flex", "justify-content-between", "align-items-center", "py-2", "px-3"], [1, "fw-600", "green-clr"], [1, "d-flex", "gap-2", "align-items-center"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["target", "_blank", "download", "", 3, "href"], ["height", "20", "src", "assets/images/Download.png", 1, "cursor-pointer"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function ViewDepositedChequesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cheque Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Deposit Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Deposit ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 6)(16, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Employee");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 6)(21, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Deposit Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 6)(27, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Deposit Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 6)(33, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Account Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 6)(38, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Account No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ViewDepositedChequesComponent_div_42_Template, 10, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 9)(44, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "All Cheques");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, ViewDepositedChequesComponent_div_48_Template, 34, 27, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, ViewDepositedChequesComponent_ng_template_50_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 14)(53, "h6", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, " Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, " data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 14)(62, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, ViewDepositedChequesComponent_li_63_Template, 3, 5, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.depositDetails == null ? null : ctx.depositDetails.chequeType);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.depositDetails == null ? null : ctx.depositDetails.depositeId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.depositDetails == null ? null : ctx.depositDetails.createdByObj);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](25, 17, ctx.depositDetails == null ? null : ctx.depositDetails.depositDate, "mediumDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](31, 20, ctx.depositDetails == null ? null : ctx.depositDetails.depositDate, "h:mm a"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.depositDetails == null ? null : ctx.depositDetails.accountName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.depositDetails == null ? null : ctx.depositDetails.accountNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.depositDetails == null ? null : ctx.depositDetails.filePath) && ctx.fileName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No of Cheques ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.depositedChequeList)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.totalRecords < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.depositedChequeList == null ? null : ctx.depositedChequeList.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.totalRecords < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.pages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".applyMargin[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.card-Box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 24px 34px;\n}\n\n.flex-basis[_ngcontent-%COMP%] {\n  flex: 0 0 20%;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9e9e9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2JhbmstZGVwb3NpdHMvdmlldy1kZXBvc2l0ZWQtY2hlcXVlcy92aWV3LWRlcG9zaXRlZC1jaGVxdWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3REFBQTtFQUNBLHFEQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQ0FBQTtBQUlGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGx5TWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuLmNhcmQtdGFibGUge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmNGY0ZjQ7XG4gIGJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5wbGF5LWxlZnQge1xuICBjb2xvcjogI2VjZWFlYTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wbGF5LXJpZ2h0IHtcbiAgY29sb3I6ICNlY2VhZWE7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmNhcmQtQm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwcHggMTVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyNHB4IDM0cHg7XG59XG4uZmxleC1iYXNpc3tcbiAgICBmbGV4OjAgMCAyMCU7XG59XG4uZmlsZS1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJlYjkzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNlcGFyYXRvciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_main-fund_bank-deposits_bank-deposits_module_ts.js.map