"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_cashier_unsettled-session_unsettled-session_module_ts"],{

/***/ 37457:
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/add-bank-deposits/add-bank-deposits.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBankDepositsComponent": () => (/* binding */ AddBankDepositsComponent)
/* harmony export */ });
/* harmony import */ var _main_fund_bank_deposits_view_cash_deposits_modal_view_cash_deposits_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main-fund/bank-deposits/view-cash-deposits-modal/view-cash-deposits-modal.component */ 53912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/unsettled-session.service */ 20320);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../main-fund/allocation/allocation/allocation-services/allocation.service */ 51445);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../collect/services/collect.service */ 43346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/directive/decimal-number.directive */ 55134);
















const _c0 = ["success"];
function AddBankDepositsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 37)(5, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", item_r9 == null ? null : item_r9.accountType == null ? null : item_r9.accountType.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.accountType == null ? null : item_r9.accountType.translation[0] == null ? null : item_r9.accountType.translation[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 3, item_r9 == null ? null : item_r9.remainingAmount, "2.3-3"), " ");
  }
}
function AddBankDepositsComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddBankDepositsComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.clearDepositInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddBankDepositsComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddBankDepositsComponent_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.clearAmountInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddBankDepositsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((item_r14 == null ? null : item_r14.bankNameEnglish) + " - " + (item_r14 == null ? null : item_r14.accountName) + " - " + (item_r14 == null ? null : item_r14.accountNumber));
  }
}
function AddBankDepositsComponent_a_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Create Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddBankDepositsComponent_div_44_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td")(4, "div", 53)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td")(18, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddBankDepositsComponent_div_44_tr_38_Template_p_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const item_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.getCashDepositDetails(item_r18 == null ? null : item_r18.depositeId, item_r18 == null ? null : item_r18.collectionType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.depositeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.bankNameEnglish);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", item_r18 == null ? null : item_r18.bankLogo, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r18 == null ? null : item_r18.accountName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](14, 7, item_r18 == null ? null : item_r18.amount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.currency[0] == null ? null : item_r18.currency[0].lookupName);
  }
}
function AddBankDepositsComponent_div_44_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddBankDepositsComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30)(1, "div", 43)(2, "div", 44)(3, "table", 45)(4, "thead")(5, "tr")(6, "th", 46)(7, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddBankDepositsComponent_div_44_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.sortByDepositId());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Deposit ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 48)(10, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 46)(12, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddBankDepositsComponent_div_44_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.sortByBankName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 48)(15, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 46)(17, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddBankDepositsComponent_div_44_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.sortByAccountName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Account Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 48)(20, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th", 46)(22, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddBankDepositsComponent_div_44_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.sortByAccountNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Account No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "i", 48)(25, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th", 46)(27, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddBankDepositsComponent_div_44_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "i", 48)(30, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "th", 46)(32, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "th", 46)(35, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, AddBankDepositsComponent_div_44_tr_38_Template, 20, 10, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, AddBankDepositsComponent_div_44_div_39_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const deposits_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r5.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (deposits_r15 == null ? null : deposits_r15.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", deposits_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (deposits_r15 == null ? null : deposits_r15.length) == 0);
  }
}
function AddBankDepositsComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AddBankDepositsComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 57)(2, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 57)(11, "ngb-pagination", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function AddBankDepositsComponent_ng_container_48_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r27.pageNo = $event);
    })("pageChange", function AddBankDepositsComponent_ng_container_48_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r29.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r8.pageNo * 6 - 5, " - ", (ctx_r8.deposits == null ? null : ctx_r8.deposits.length) == 6 ? ctx_r8.pageNo * 6 : ctx_r8.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r8.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", ctx_r8.totalRecords)("page", ctx_r8.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
class AddBankDepositsComponent {
  constructor(_unsettleSession, _commonService, _sharedService, _headerService, _allocationService, _collectService, _modalService) {
    this._unsettleSession = _unsettleSession;
    this._commonService = _commonService;
    this._sharedService = _sharedService;
    this._headerService = _headerService;
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
    this.unsettledSessionsAmount = [];
    this.depositId = '';
    this.amount = '';
    this.bankAccountId = null;
    this.bankId = null;
    this.isCash = true;
    this.allowCreate = false;
    this.cashDepositTypeId = 0;
  }
  ngOnInit() {
    this._headerService.setTitle('Unsettled Session > Add Bank Deposits');
    this.getMainFundCash();
    this.getRegisterUnsettledSessionsAmount();
    this.getRegisterDetails();
    this.getCashDeposits();
    this.getBanks();
    this.getUserPermission();
    this.getBankAccounts();
  }
  getRegisterUnsettledSessionsAmount() {
    this._unsettleSession.getRegisterUnsettledSessionsAmount(this._sharedService.getRegister?.registerObj?.id).subscribe(response => {
      this.unsettledSessionsAmount = response?.data;
    });
  }
  getUserPermission() {
    let permssions = JSON.parse(localStorage.getItem('permissions'));
    let permissionItems = permssions.find(x => x.perCatName == "Main Fund Banks Deposits Permissions")['permissionSubCategories'][0]['permissionItems'];
    this.allowCreate = permissionItems.find(x => x.permissionItemId == 147)['selected'];
  }
  getCashDeposits() {
    let filters = `?registerId=${this._sharedService.getRegister.registerObj?.id}&bankId=${this.bankId && this.bankId || ''}
    &AccountId=${this.bankAccountId && this.bankAccountId || ''}&DepositeId=${this.depositId}&DepositeType=${this.isCash && 'cash' || 'cheque'}
    &amount=${this.amount}&Sort=${this.sort}&PageNo=${this.pageNo - 1}&pageSize=${this.pageSize}`;
    this._allocationService.getRegisterDirectDeposits(filters).subscribe(response => {
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
      this._allocationService.getRegisterDirectCashDepositDetails(id).subscribe(response => {
        console.log(response);
        const modalRef = this._modalService.open(_main_fund_bank_deposits_view_cash_deposits_modal_view_cash_deposits_modal_component__WEBPACK_IMPORTED_MODULE_0__.ViewCashDepositsModalComponent, {
          size: 'lg'
        });
        modalRef.componentInstance.depositDetails = response['data'][0];
      });
    } else {
      this._commonService.NavigateToRoute('/unsettled-session/deposited-cheques/' + id);
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
    //this.getBankAccounts(event?.bankId);
    this.getCashDeposits();
  }
  getBankAccounts() {
    //let param = `?bankId=${id}&status=2001&pageNo=0&pageSize=1000`
    let param = `?status=2001&pageNo=0&pageSize=1000`;
    this._unsettleSession.getBankAccounts(param).subscribe(response => {
      this.bankAccounts = response['data'];
    });
  }
  onBankAccountChange(event) {
    this.getCashDeposits();
  }
  getMainFundCash() {
    this._allocationService.getMainFundCash().subscribe(response => {
      console.log(response['data']);
      this.mainFundAmounts = response?.data;
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
AddBankDepositsComponent.ɵfac = function AddBankDepositsComponent_Factory(t) {
  return new (t || AddBankDepositsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_1__.UnsettledSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_4__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_5__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_6__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal));
};
AddBankDepositsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: AddBankDepositsComponent,
  selectors: [["app-add-bank-deposits"]],
  viewQuery: function AddBankDepositsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.success = _t.first);
    }
  },
  decls: 49,
  vars: 16,
  consts: [[1, "page-layout"], [1, "heading-text", "mb-3"], [1, "main-fund-container", "gap-4", "mb-4"], ["class", "main-fund-wrapper", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-12", "col-sm-6", "col-lg-3"], [1, "input-group", "search-box", "h-100"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Deposit Id", 1, "form-control", 3, "ngModel", "input", "ngModelChange"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], ["type", "text", "appDecimalNumber", "", "placeholder", "Amount", 1, "form-control", 3, "ngModel", "input", "ngModelChange"], ["placeholder", "Bank", "bindLabel", "bankNameEnglish", "bindValue", "bankId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "ngModel", "items", "ngModelChange", "change"], ["placeholder", "Account", "bindLabel", "accountName", "bindValue", "accountId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "ngModel", "items", "change", "ngModelChange"], ["ng-option-tmp", ""], [1, "col-12", "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "d-flex", "gap-4"], [1, "fw-500"], [1, "d-flex", "gap-3", "align-items-center"], [1, "form-check", "p-0", "d-flex", "align-items-center", "pe-2"], ["value", "cash", "id", "cash", "type", "radio", 1, "form-check-input", "me-2", 3, "checked", "change"], ["for", "cash"], [1, "form-check", "p-0", "d-flex", "align-items-center", "ps-2"], ["value", "cheque", "id", "cheque", "type", "radio", 1, "form-check-input", "me-2", 3, "checked", "change"], ["for", "cheque"], [1, "btns-group", "m-0", "d-block"], ["routerLink", "/unsettled-session/create-deposit", "class", "btn btn-save", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "total-records"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [4, "ngIf"], [1, "main-fund-wrapper"], [1, "main-fund-div"], [1, "currency-symbol"], ["alt", "", 3, "src"], [1, "d-flex", "flex-column"], [1, "fw-700", "font-18"], [1, "fw-700", "font-20", "gray-500", "m-0"], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], ["routerLink", "/unsettled-session/create-deposit", 1, "btn", "btn-save"], [1, "card-table", "mt-2", "register-sessions-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", "pe-none", 3, "disabled"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "d-flex", "flex-column", "gap-1"], ["width", "50", 3, "src"], [1, "blue-clr", "font-16", "fw-600", "cursor-pointer", "text-decoration-none", 3, "click"], [1, "not-found"], [1, "col-md-6"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function AddBankDepositsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Remaining Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AddBankDepositsComponent_div_4_Template, 10, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Deposits List");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function AddBankDepositsComponent_Template_input_input_12_listener() {
        return ctx.onDepositChange();
      })("ngModelChange", function AddBankDepositsComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.depositId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, AddBankDepositsComponent_button_13_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 5)(15, "div", 6)(16, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function AddBankDepositsComponent_Template_input_input_18_listener() {
        return ctx.onAmountChange();
      })("ngModelChange", function AddBankDepositsComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.amount = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, AddBankDepositsComponent_button_19_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 5)(21, "ng-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AddBankDepositsComponent_Template_ng_select_ngModelChange_21_listener($event) {
        return ctx.bankId = $event;
      })("change", function AddBankDepositsComponent_Template_ng_select_change_21_listener($event) {
        return ctx.onBankChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 5)(23, "ng-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddBankDepositsComponent_Template_ng_select_change_23_listener($event) {
        return ctx.onBankAccountChange($event);
      })("ngModelChange", function AddBankDepositsComponent_Template_ng_select_ngModelChange_23_listener($event) {
        return ctx.bankAccountId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, AddBankDepositsComponent_ng_template_24_Template, 2, 1, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Deposit Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddBankDepositsComponent_Template_input_change_31_listener($event) {
        return ctx.depositType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 22)(35, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddBankDepositsComponent_Template_input_change_35_listener($event) {
        return ctx.depositType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, AddBankDepositsComponent_a_39_Template, 2, 0, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 27)(41, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, AddBankDepositsComponent_div_44_Template, 40, 29, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, AddBankDepositsComponent_ng_template_46_Template, 2, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, AddBankDepositsComponent_ng_container_48_Template, 12, 9, "ng-container", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.unsettledSessionsAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.depositId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.depositId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.bankId)("items", ctx.banks);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.bankAccountId)("items", ctx.bankAccounts);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", !ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.allowCreate && (ctx.cashDepositTypeId == 8001 || ctx.cashDepositTypeId == 8003));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.deposits)("ngIfElse", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgOptionTemplateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_9__.DecimalNumberDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe],
  styles: [".heading-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.depositBtn[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  width: 95px;\n  height: 34.2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #dc3545;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.main-fund-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 1px solid #E9E9E9;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px 15px;\n  flex: 0 1 240px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  \n  color: #858585;\n}\n\n.d-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(173px, 1fr));\n  gap: 20px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.heading-main-fund[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi9hZGQtYmFuay1kZXBvc2l0cy9hZGQtYmFuay1kZXBvc2l0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdGO0FBREU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUdKO0FBREk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUdOO0FBRE07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBR1I7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFOO0FBRU07RUFDRSxXQUFBO0FBQVI7QUFJSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRk47O0FBTUU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUhOOztBQU9FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUpKIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kZXBvc2l0QnRue1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMzQuMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6cG9pbnRlcjtcbn1cbi5tYWluLWZ1bmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC5tYWluLWZ1bmQtd3JhcHBlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOUU5RTk7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBmbGV4OiAwIDEgMjQwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubWFpbi1mdW5kLWRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNXB4O1xuXG4gICAgICAuY3VycmVuY3ktc3ltYm9sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uZm9ybS1jaGVjay1pbnB1dCB7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB9XG4gIC5tZHRleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvKiBUZXh0IENvbG9yL1RleHQgMSAqL1xuXG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gIH1cblxuICAuc21UZXh0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLyogVGV4dCBDb2xvci9UZXh0IDEgKi9cblxuICAgIGNvbG9yOiAjODU4NTg1O1xuICB9XG5cbiAgLmQtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDE3M3B4LDFmcikpO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC51cGxvYWRlZGZpbGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMWFmMjI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuYnRuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgY29sb3I6ICM2OTY5Njk7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAubWFpbi1mdW5kLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuXG4gICAgLmN1cnJlbmN5LXN5bWJvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRpbmctbWFpbi1mdW5kIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 32589:
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/bank-deposit-modal/bank-deposit-modal.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDepositModalComponent": () => (/* binding */ BankDepositModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _main_fund_allocation_allocation_view_image_view_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main-fund/allocation/allocation/view-image/view-image.component */ 72200);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/unsettled-session.service */ 20320);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/directive/drag-and-drop.directive */ 96603);










const _c0 = ["depositSucess"];
const _c1 = ["inputFile"];
function BankDepositModalComponent_ng_container_43_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BankDepositModalComponent_ng_container_43_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amount must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BankDepositModalComponent_ng_container_43_ng_container_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amount must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BankDepositModalComponent_ng_container_43_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amount must be less than or equal to remaining amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BankDepositModalComponent_ng_container_43_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BankDepositModalComponent_ng_container_43_ng_container_1_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BankDepositModalComponent_ng_container_43_ng_container_1_span_2_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BankDepositModalComponent_ng_container_43_ng_container_1_span_3_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BankDepositModalComponent_ng_container_43_ng_container_1_span_4_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.f["depositAmount"] == null ? null : ctx_r7.f["depositAmount"].errors == null ? null : ctx_r7.f["depositAmount"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.f["depositAmount"] == null ? null : ctx_r7.f["depositAmount"].errors == null ? null : ctx_r7.f["depositAmount"].errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.f["depositAmount"] == null ? null : ctx_r7.f["depositAmount"].errors == null ? null : ctx_r7.f["depositAmount"].errors["zeroAmount"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.f["depositAmount"] == null ? null : ctx_r7.f["depositAmount"].errors == null ? null : ctx_r7.f["depositAmount"].errors["unEqualAmount"]);
  }
}
function BankDepositModalComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BankDepositModalComponent_ng_container_43_ng_container_1_Template, 5, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.f["depositAmount"] == null ? null : ctx_r0.f["depositAmount"].invalid) && (ctx_r0.f["depositAmount"] == null ? null : ctx_r0.f["depositAmount"].touched) || (ctx_r0.f["depositAmount"] == null ? null : ctx_r0.f["depositAmount"].dirty));
  }
}
function BankDepositModalComponent_ng_container_61_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Uploading the attachment is required please upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BankDepositModalComponent_ng_container_61_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BankDepositModalComponent_ng_container_61_ng_container_1_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.f["attachment"] == null ? null : ctx_r12.f["attachment"].errors == null ? null : ctx_r12.f["attachment"].errors["required"]);
  }
}
function BankDepositModalComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BankDepositModalComponent_ng_container_61_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r2.f["attachment"] == null ? null : ctx_r2.f["attachment"].invalid) && (ctx_r2.f["attachment"] == null ? null : ctx_r2.f["attachment"].touched) || (ctx_r2.f["attachment"] == null ? null : ctx_r2.f["attachment"].dirty));
  }
}
function BankDepositModalComponent_small_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.invalidFileType);
  }
}
function BankDepositModalComponent_ng_container_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34)(1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BankDepositModalComponent_ng_container_64_div_1_Template_p_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.openMdalImage(item_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 36)(4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BankDepositModalComponent_ng_container_64_div_1_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.openMdalImage(item_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BankDepositModalComponent_ng_container_64_div_1_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.removeFile(item_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r15 == null ? null : item_r15.fileName);
  }
}
function BankDepositModalComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BankDepositModalComponent_ng_container_64_div_1_Template, 8, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.filesArray);
  }
}
function BankDepositModalComponent_ng_template_72_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r20.response == null ? null : ctx_r20.response.Errors[0] == null ? null : ctx_r20.response.Errors[0].ErrorMessageEn);
  }
}
function BankDepositModalComponent_ng_template_72_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r21.depositSuccessMessage);
  }
}
function BankDepositModalComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BankDepositModalComponent_ng_template_72_h5_1_Template, 3, 1, "h5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BankDepositModalComponent_ng_template_72_h5_2_Template, 3, 1, "h5", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.response == null ? null : ctx_r6.response.Errors == null ? null : ctx_r6.response.Errors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.response == null ? null : ctx_r6.response.data);
  }
}
class BankDepositModalComponent {
  constructor(fb, modalService, activeModal, _commonService, _unsettledSessionService) {
    this.fb = fb;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this._commonService = _commonService;
    this._unsettledSessionService = _unsettledSessionService;
    this.filesArray = [];
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']; //'application/pdf'
    this.depositSuccessMessage = '';
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    console.log(this.depositAmount);
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
      //if (this.formGroup.controls['depositAmount'].value <= 0) {
      //  return;
      //}
      let files = this.filesArray.map(x => {
        return x.file;
      });
      let formData = new FormData();
      formData.append('sageBankId', this.depositAmount.sageBankId);
      formData.append('currencyId', this.depositAmount.currencyID);
      formData.append('amount', this.formGroup.value['depositAmount']);
      for (let file of files) {
        formData.append('files', file);
      }
      this._unsettledSessionService.registerDirectCashDeposite(formData).subscribe(response => {
        console.log(response);
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
  handleFocusOut(amount) {
    let value = +this.formGroup.controls['depositAmount'].value;
    if (value <= amount) {
      this.formGroup.controls['depositAmount'].setValue(value.toFixed(3));
    } else {
      this.formGroup.controls['depositAmount'].setErrors({
        'unEqualAmount': true
      });
    }
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
    const modalRef = this.modalService.open(_main_fund_allocation_allocation_view_image_view_image_component__WEBPACK_IMPORTED_MODULE_0__.ViewImageComponent);
    modalRef.componentInstance.imageUploadedView = item;
  }
}
BankDepositModalComponent.ɵfac = function BankDepositModalComponent_Factory(t) {
  return new (t || BankDepositModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_2__.UnsettledSessionService));
};
BankDepositModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: BankDepositModalComponent,
  selectors: [["app-bank-deposit-modal"]],
  viewQuery: function BankDepositModalComponent_Query(rf, ctx) {
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
  decls: 74,
  vars: 10,
  consts: [[1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "modal-head"], [1, "row", "mt-3"], [1, "col-md-4"], [1, "flex-column"], [1, "mdtext"], [1, "smText"], [1, "col-md-5"], [3, "formGroup", "submit"], [1, "d-flex", "align-items-center", "gap-2", "mt-3"], ["ngbAutoFocus", "", 1, "font-18", "fw-600", "dark-gray"], ["type", "text", "formControlName", "depositAmount", 1, "form-control", 3, "focusout"], [4, "ngIf"], [1, "my-4"], [1, "largeText"], [1, "font-18", "fw-600", "dark-gray", "my-3"], [1, "col-md-8"], [1, "form-group", "mb-3"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "multiple", "", "hidden", "", 1, "form-control", 3, "change"], ["inputFile", ""], ["class", "text-danger", 4, "ngIf"], [1, "col-md-6"], [1, "flex-end", 2, "margin-top", "24px"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["depositSucess", ""], [1, "text-danger"], ["class", "uploadedfile mb-2", 4, "ngFor", "ngForOf"], [1, "uploadedfile", "mb-2"], [3, "click"], [1, "d-flex"], ["type", "button", 1, "btn", "fview", 3, "click"], ["src", "assets/images/eye.png", "alt", ""], ["type", "button", 1, "btn", 3, "click"], ["src", "assets/images/trash.png", "alt", ""], ["class", "m-0 text-center py-3 fw-600", 4, "ngIf"], ["class", "m-0 py-3 fw-600 text-center", 4, "ngIf"], [1, "m-0", "text-center", "py-3", "fw-600"], [1, "text-danger", "fa-regular", "fa-circle-xmark", "me-2"], [1, "m-0", "py-3", "fw-600", "text-center"], [1, "green-clr", "fa-regular", "fa-circle-check", "me-2"]],
  template: function BankDepositModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Remaining Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function BankDepositModalComponent_Template_form_submit_38_listener() {
        return ctx.handleDeposit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 11)(40, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Deposited Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focusout", function BankDepositModalComponent_Template_input_focusout_42_listener() {
        return ctx.handleFocusOut(ctx.depositAmount == null ? null : ctx.depositAmount.remainingAmount);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, BankDepositModalComponent_ng_container_43_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 15)(45, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " To Complete the process Please upload the bank deposit voucher ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " Attachment (Upload Bank Voucher) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 1)(50, "div", 18)(51, "div", 19)(52, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("files", function BankDepositModalComponent_Template_div_files_52_listener($event) {
        return ctx.filesDropped($event);
      })("enter", function BankDepositModalComponent_Template_div_enter_52_listener() {
        return ctx.enter = !ctx.enter;
      })("leave", function BankDepositModalComponent_Template_div_leave_52_listener() {
        return ctx.enter = !ctx.enter;
      })("click", function BankDepositModalComponent_Template_div_click_52_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](60);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Drag & drop files");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Supported formates: JPEG, PNG, PDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "input", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function BankDepositModalComponent_Template_input_change_59_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, BankDepositModalComponent_ng_container_61_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, BankDepositModalComponent_small_62_Template, 2, 1, "small", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, BankDepositModalComponent_ng_container_64_Template, 2, 1, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 27)(66, "div", 28)(67, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BankDepositModalComponent_Template_button_click_67_listener() {
        return ctx.activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 28)(70, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, BankDepositModalComponent_ng_template_72_Template, 3, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.depositAmount == null ? null : ctx.depositAmount.bankName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.depositAmount == null ? null : ctx.depositAmount.accountName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.depositAmount == null ? null : ctx.depositAmount.accountNo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.depositAmount == null ? null : ctx.depositAmount.currency[0] == null ? null : ctx.depositAmount.currency[0].lookupName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.depositAmount == null ? null : ctx.depositAmount.remainingAmount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["depositAmount"] == null ? null : ctx.f["depositAmount"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f["attachment"] == null ? null : ctx.f["attachment"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.invalidFileType);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filesArray.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__.DragAndDropDirective],
  styles: [".modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.card-page[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #c4cdd5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  color: #1b212d;\n  padding: 5px 0 15px;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .invoic[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #929eae;\n  font-weight: 500;\n  padding: 1px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1b212d;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 80px !important;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.btn-upload[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  margin: 0px;\n}\n\n.overlay-bi[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  margin: -30px 0 0 0;\n  z-index: 5;\n  position: relative;\n}\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #fff3f3;\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.uplod[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #676767;\n}\n\n.save-img[_ngcontent-%COMP%] {\n  width: 22px !important;\n}\n\n.fileView[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.btn[_ngcontent-%COMP%]:disabled, .btn.disabled[_ngcontent-%COMP%] {\n  background: #f1f3f3 !important;\n  color: #9b9b9b !important;\n  border: 1px solid #f1f3f3;\n  cursor: initial;\n}\n\n.card-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n\n.card-sm[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1b212d;\n  margin-bottom: 5px;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #929eae;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  height: 120px;\n  border-radius: 6px;\n  margin: 5px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  padding: 10px;\n}\n\n.fview[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 50%;\n  margin: 0px 5px;\n  width: 30px;\n  height: 30px;\n}\n.fview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.depositeText[_ngcontent-%COMP%], .headButtonText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 17px;\n  text-align: left;\n  font-family: Kumbh Sans;\n  font-weight: 600;\n  letter-spacing: 0;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  margin-top: 22px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  align-items: center;\n}\n\n.amountButton[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 34px 14px 35px;\n  gap: 10px;\n  width: 140px;\n  height: 48px;\n  background: #f8f8f8;\n  border: 0.5px solid #e9e9e9;\n  border-radius: 10px;\n}\n\n.depositeButton[_ngcontent-%COMP%], .statusButton[_ngcontent-%COMP%] {\n  width: 95px;\n  height: 34.2px;\n  display: flex;\n}\n\n.depositeButton[_ngcontent-%COMP%], .statusButton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n\n.statusButton[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  background: #fff3db;\n}\n\n.depositeButton[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  background: #dc3545;\n}\n\n.depositeText[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.flex-start[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 31px;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 110px;\n}\n\n.largeText[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1b212d;\n}\n\n.uploadButton[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 110px;\n  background: #f8f8f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.uploadText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0;\n  text-align: center;\n  color: #676767;\n}\n\n.flex-end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 16px;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  color: #929EAE;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi9iYW5rLWRlcG9zaXQtbW9kYWwvYmFuay1kZXBvc2l0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUk7RUFDRSxjQUFBO0FBQU47QUFJRTtFQUNFLGdCQUFBO0FBRko7QUFJSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBRk47QUFLSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFITjtBQUtNO0VBQ0UsY0FBQTtBQUhSOztBQVNBO0VBQ0UsdUJBQUE7QUFORjs7QUFTQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU5GO0FBUUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVBKO0FBVUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFZQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVEY7O0FBYUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBVko7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQVhGOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFYRjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWEo7O0FBZUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFaRjtBQWNFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWko7QUFjSTtFQUNFLFdBQUE7QUFaTjtBQWdCRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBZEo7O0FBa0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWZGOztBQWtCQTtFQUNFLHNCQUFBO0FBZkY7O0FBbUJFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBaEJKOztBQW9CQTs7RUFFRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBakJGOztBQW9CQTtFQUNFLG1CQUFBO0FBakJGOztBQW9CQTtFQUNFLHlCQUFBO0FBakJGOztBQW9CQTtFQUNFLGdCQUFBO0FBakJGO0FBbUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBakJKO0FBb0JFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWxCSjtBQXFCRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQW5CSjtBQXFCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBbkJOOztBQXdCQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFyQkY7QUF1QkU7RUFDRSxzQkFBQTtBQXJCSjs7QUF5QkE7O0VBRUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBdEJGOztBQXlCQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUF0QkY7O0FBeUJBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF5QkE7OztFQUdFLGtCQUFBO0FBdEJGOztBQXlCQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsV0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBdEJGOztBQXlCQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXRCRiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQtZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjNGNkZDU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmNhcmQtcGFnZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5tb2RhbC1oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGNkZDU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgcGFkZGluZzogNXB4IDAgMTVweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMWIyMTJkO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICB9XG4gIH1cblxuICAuaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcblxuICAgIC5pbnZvaWMge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHBhZGRpbmc6IDFweDtcblxuICAgICAgYiB7XG4gICAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC11cGxvYWQge1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzkzOWFhODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIGg1IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzBmMGYwZjtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjNjc2NzY3O1xuICB9XG59XG5cbi5idG4tdXBsb2FkIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMzVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmNhcmQtaW1nIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuLm92ZXJsYXktYmkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTkgMTk5IDE5OSAvIDIxJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jYXJkLWZvcm0gLmVkaXQtYnRuIHtcbiAgbWFyZ2luOiAtMzBweCAwIDAgMDtcbiAgei1pbmRleDogNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuXG4udXBsb2FkZWRmaWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzExYWYyMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICM2OTY5Njk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi51cGxvZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM2NzY3Njc7XG59XG5cbi5zYXZlLWltZyB7XG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlVmlldyB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuXG4uYnRuOmRpc2FibGVkLFxuLmJ0bi5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmMWYzZjMgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5YjliOWIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmMztcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4uY2FyZC1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG59XG5cbi5jYXJkLXNtIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM5MjllYWU7XG4gIH1cblxuICAubm90ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi5mdmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5kZXBvc2l0ZVRleHQsXG4uaGVhZEJ1dHRvblRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogS3VtYmggU2FucztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5oZWFkQnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDM0LjJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc2VwYXJhdG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuLmZsZXgtY29sdW1uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW1vdW50QnV0dG9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMzRweCAxNHB4IDM1cHg7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2U5ZTllOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRlcG9zaXRlQnV0dG9uLFxuLnN0YXR1c0J1dHRvbiB7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDM0LjJweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRlcG9zaXRlQnV0dG9uLFxuLnN0YXR1c0J1dHRvbixcbmlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc3RhdHVzQnV0dG9uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmYzZGI7XG59XG5cbi5kZXBvc2l0ZUJ1dHRvbiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xufVxuXG4uZGVwb3NpdGVUZXh0IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDMxcHg7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5sYXJnZVRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMWIyMTJkO1xufVxuXG4udXBsb2FkQnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTEwcHg7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udXBsb2FkVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxuXG4uZmxleC1lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ubWR0ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvKiBUZXh0IENvbG9yL1RleHQgMSAqL1xuICBjb2xvcjogIzFiMjEyZDtcbn1cblxuLnNtVGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5MjlFQUU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 41913:
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/cheque-deposit/cheque-deposit.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequeDepositComponent": () => (/* binding */ ChequeDepositComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _main_fund_allocation_allocation_view_image_view_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../main-fund/allocation/allocation/view-image/view-image.component */ 72200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../main-fund/allocation/allocation/allocation-services/allocation.service */ 51445);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/unsettled-session.service */ 20320);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/directive/drag-and-drop.directive */ 96603);
















const _c0 = ["inputFile"];
const _c1 = ["depositSucess"];
function ChequeDepositComponent_ng_container_45_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Selected cheques amount must be less than or equal to Cheque amount.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ChequeDepositComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChequeDepositComponent_ng_container_45_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.f["selectedAmount"] == null ? null : ctx_r0.f["selectedAmount"].errors == null ? null : ctx_r0.f["selectedAmount"].errors["unEqualAmounts"]);
  }
}
function ChequeDepositComponent_div_64_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ChequeDepositComponent_div_64_tr_33_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.handleCheckBoxChange());
    })("ngModelChange", function ChequeDepositComponent_div_64_tr_33_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const item_r15 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](item_r15.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", item_r15.checked)("id", index_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r15 == null ? null : item_r15.chequeCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r15 == null ? null : item_r15.chequeNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r15 == null ? null : item_r15.bank[0] == null ? null : item_r15.bank[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 7, item_r15 == null ? null : item_r15.chequeDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](14, 10, item_r15 == null ? null : item_r15.chequeCollectionJod, "2.3-3"), " JD");
  }
}
function ChequeDepositComponent_div_64_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ChequeDepositComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26)(1, "div", 54)(2, "div", 55)(3, "table", 56)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th", 57)(8, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_div_64_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "i", 59)(11, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 57)(13, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_div_64_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.sortByCheque());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i", 59)(16, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th", 57)(18, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_div_64_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 59)(21, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 57)(23, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_div_64_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "i", 59)(26, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "th", 57)(28, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_div_64_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "i", 59)(31, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, ChequeDepositComponent_div_64_tr_33_Template, 15, 13, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, ChequeDepositComponent_div_64_div_34_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r1.unSettledChequeList == null ? null : ctx_r1.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r1.unSettledChequeList == null ? null : ctx_r1.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r1.unSettledChequeList == null ? null : ctx_r1.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r1.unSettledChequeList == null ? null : ctx_r1.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r1.unSettledChequeList == null ? null : ctx_r1.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r1.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.unSettledChequeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r1.unSettledChequeList == null ? null : ctx_r1.unSettledChequeList.length) == 0);
  }
}
function ChequeDepositComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    active: a0
  };
};
function ChequeDepositComponent_li_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 65)(1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_li_79_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const page_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r27.setPage(page_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r26 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](3, _c2, ctx_r4.pageNo === page_r26))("disabled", ctx_r4.pageNo === page_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", page_r26 + 1, " ");
  }
}
function ChequeDepositComponent_ng_container_101_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Uploading the attachment is required please upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ChequeDepositComponent_ng_container_101_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChequeDepositComponent_ng_container_101_ng_container_1_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r29.f["attachment"] == null ? null : ctx_r29.f["attachment"].errors == null ? null : ctx_r29.f["attachment"].errors["required"]);
  }
}
function ChequeDepositComponent_ng_container_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChequeDepositComponent_ng_container_101_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r6.f["attachment"] == null ? null : ctx_r6.f["attachment"].invalid) && (ctx_r6.f["attachment"] == null ? null : ctx_r6.f["attachment"].touched) || (ctx_r6.f["attachment"] == null ? null : ctx_r6.f["attachment"].dirty));
  }
}
function ChequeDepositComponent_small_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.invalidFileType);
  }
}
function ChequeDepositComponent_ng_container_105_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 68)(1, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_ng_container_105_div_1_Template_p_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      const item_r32 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r33.openMdalImage(item_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 70)(4, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_ng_container_105_div_1_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      const item_r32 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r35.openMdalImage(item_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_ng_container_105_div_1_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      const item_r32 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.removeFile(item_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r32 == null ? null : item_r32.fileName);
  }
}
function ChequeDepositComponent_ng_container_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChequeDepositComponent_ng_container_105_div_1_Template, 8, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.filesArray);
  }
}
function ChequeDepositComponent_i_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 75);
  }
}
function ChequeDepositComponent_ng_template_114_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r37.response == null ? null : ctx_r37.response.Errors[0] == null ? null : ctx_r37.response.Errors[0].ErrorMessageEn);
  }
}
function ChequeDepositComponent_ng_template_114_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r38.depositSuccessMessage);
  }
}
function ChequeDepositComponent_ng_template_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ChequeDepositComponent_ng_template_114_h5_1_Template, 3, 1, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ChequeDepositComponent_ng_template_114_h5_2_Template, 3, 1, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.response == null ? null : ctx_r11.response.Errors == null ? null : ctx_r11.response.Errors.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.response == null ? null : ctx_r11.response.data);
  }
}
class ChequeDepositComponent {
  constructor(fb, modalService, _allocationService, _commonService, _unsettledSessionService, _headerService, _sharedService) {
    this.fb = fb;
    this.modalService = modalService;
    this._allocationService = _allocationService;
    this._commonService = _commonService;
    this._unsettledSessionService = _unsettledSessionService;
    this._headerService = _headerService;
    this._sharedService = _sharedService;
    this.searchText = '';
    this.orderId = 0;
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 0;
    this.pages = [];
    this.unSettledChequeList = [];
    this.filesArray = [];
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    this.checkedItems = [];
    this.selectedChequeAmount = 0;
    this.depositSuccessMessage = '';
  }
  ngOnInit() {
    this._headerService.setTitle('Unsettled session > Add Bank Deposit > Cheque Deposit');
    this.getChequeDetails();
    this.initForm();
  }
  getChequeDetails() {
    this.chequeDetails = JSON.parse(localStorage.getItem('_unsettledDepositChequeData'));
    console.log(this.chequeDetails);
    this.getRegisterUnsettledCheques();
  }
  getRegisterUnsettledCheques() {
    let params = `?rgisterId=${this._sharedService.getRegister?.registerObj?.id}&search=${this.searchText}&sort=${this.sort}&pageNo=${this.pageNo}&pageSize=6`;
    this._unsettledSessionService.getRegisterUnsettledCheques(params).subscribe(res => {
      if (res?.data.length > 0) {
        this.unSettledChequeList = res?.data.map(x => {
          return {
            ...x,
            checked: false
          };
        });
        ;
        this.totalRecords = res?.totalRecordCount;
        this.pagin = Math.ceil(this.totalRecords / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
        console.log(this.unSettledChequeList);
      }
    });
  }
  initForm() {
    this.formGroup = this.fb.group({
      notes: [''],
      attachment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      selectedAmount: ['']
    });
  }
  get f() {
    return this.formGroup.controls;
  }
  despositCheque() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      this.isPending = true;
      let files = this.filesArray.map(x => {
        return x.file;
      });
      let formData = new FormData();
      formData.append('sageAccountId', this.chequeDetails?.sageBankId);
      formData.append('chequeCollectionIds', this.chequeIds.toString());
      formData.append('notes', this.formGroup.value['notes']);
      for (let file of files) {
        formData.append('files', file);
      }
      this._unsettledSessionService.registerDirectDepositCheques(formData).subscribe(response => {
        this.response = response;
        this.isPending = false;
        if (this.response.isSuccess) {
          this.depositSuccessMessage = 'Deposit process successfully completed';
          this.checkedItems = [];
          this.filesArray = [];
          this.formGroup.reset();
          this._commonService.NavigateToRoute('/unsettled-session/add-bank-deposit');
        }
      }, error => {
        this.isPending = false;
      });
    }
  }
  removeSearch() {
    this.searchText = '';
    this.getRegisterUnsettledCheques();
  }
  handleCheckBoxChange() {
    this.checkedItems = this.unSettledChequeList.filter(x => x.checked);
    if (this.checkedItems.length > 0) {
      this.selectedChequeAmount = this.checkedItems.reduce((acc, current) => {
        return acc += current?.chequeCollectionJod;
      }, 0);
      if (this.selectedChequeAmount > this.chequeDetails?.remainingAmount) {
        this.formGroup.controls['selectedAmount'].setErrors({
          'unEqualAmounts': true
        });
      } else {
        this.formGroup.controls['selectedAmount'].setErrors(null);
      }
      this.chequeIds = this.checkedItems.map(x => x.chequeCollectionId);
    } else {
      this.formGroup.controls['selectedAmount'].setErrors(null);
      this.selectedChequeAmount = 0;
    }
  }
  handleSearchInput(event) {
    const value = event.target.value;
    this.searchText = value;
    if (value.length >= 2) this.getRegisterUnsettledCheques();
    if (!value) this.getRegisterUnsettledCheques();
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
    const modalRef = this.modalService.open(_main_fund_allocation_allocation_view_image_view_image_component__WEBPACK_IMPORTED_MODULE_1__.ViewImageComponent);
    modalRef.componentInstance.imageUploadedView = item;
  }
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getRegisterUnsettledCheques();
  }
  sortByCheque() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getRegisterUnsettledCheques();
  }
  sortByBank() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getRegisterUnsettledCheques();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getRegisterUnsettledCheques();
  }
  sortByAmount() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getRegisterUnsettledCheques();
  }
  setPage(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getRegisterUnsettledCheques();
  }
  ngOnDestroy() {
    this._allocationService.despositeAmount.next('');
    this._allocationService._viewDepositAmount.next('');
  }
}
ChequeDepositComponent.ɵfac = function ChequeDepositComponent_Factory(t) {
  return new (t || ChequeDepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_2__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_4__.UnsettledSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_5__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService));
};
ChequeDepositComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ChequeDepositComponent,
  selectors: [["app-cheque-deposit"]],
  viewQuery: function ChequeDepositComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.depositSucessModal = _t.first);
    }
  },
  decls: 116,
  vars: 36,
  consts: [[1, "card-Box"], [1, "headingText"], [1, "separator"], [1, "d-flex", "mt-3", 2, "gap", "120px"], [1, "flex-column"], [1, "mdtext"], [1, "smText"], [1, "flex-between", "mt-3", "flex-wrap"], [1, "flex-between", "gap-2"], [1, "font-18", "fw-600"], [1, "amountButton", "mdtext"], [4, "ngIf"], [1, "headingText", "my-4"], [1, "row"], [1, "col-md-5"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "col-md-2", "d-flex", "justify-content-end", "btnadd"], [1, "col-md-6"], [1, "col-md-6", "text-end"], [1, "total"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [3, "formGroup", "submit"], [1, "card-Box", "mt-3"], [1, "font-18", "fw-600", "dark-gray", "mb-3"], [1, "col-sm-7"], ["formControlName", "notes", "maxlength", "150", "rows", "5", 1, "form-control"], [1, "row", "mt-3"], [1, "col-sm-6"], [1, "form-group", "mb-3"], [1, "font-18", "fw-600", "dark-gray"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", "my-3", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "multiple", "", "hidden", "", 1, "form-control", 3, "change"], ["inputFile", ""], ["class", "text-danger", 4, "ngIf"], [1, "flex-end", 2, "margin-top", "24px"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], ["class", "fa-solid fa-circle-notch fa-spin", 4, "ngIf"], ["depositSucess", ""], [1, "text-danger"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], ["type", "checkbox", 1, "inputColor", 3, "ngModel", "id", "change", "ngModelChange"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"], ["class", "uploadedfile mb-2", 4, "ngFor", "ngForOf"], [1, "uploadedfile", "mb-2"], [3, "click"], [1, "d-flex"], ["type", "button", 1, "btn", "fview", 3, "click"], ["src", "assets/images/eye.png", "alt", ""], ["type", "button", 1, "btn", 3, "click"], ["src", "assets/images/trash.png", "alt", ""], [1, "fa-solid", "fa-circle-notch", "fa-spin"], [1, "modal-body"], ["class", "m-0 py-3 text-center fw-600", 4, "ngIf"], [1, "m-0", "py-3", "text-center", "fw-600"], [1, "text-danger", "fa-regular", "fa-circle-xmark", "me-2"], [1, "green-clr", "fa-regular", "fa-circle-check", "me-2"]],
  template: function ChequeDepositComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Cheque Deposits");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Bank Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 4)(11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Account Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 4)(16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Account No");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 4)(21, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 7)(27, "div", 8)(28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Cheque Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](32, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 8)(34, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Selected Cheques Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](38, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 8)(40, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Difference");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](44, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, ChequeDepositComponent_ng_container_45_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Unsettled Cheques");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 13)(49, "div", 14)(50, "div", 15)(51, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_Template_button_click_51_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ChequeDepositComponent_Template_input_ngModelChange_53_listener($event) {
        return ctx.searchText = $event;
      })("input", function ChequeDepositComponent_Template_input_input_53_listener($event) {
        return ctx.handleSearchInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChequeDepositComponent_Template_button_click_54_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "div", 14)(57, "div", 21)(58, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 23)(60, "div", 24)(61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, ChequeDepositComponent_div_64_Template, 35, 27, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, ChequeDepositComponent_ng_template_66_Template, 2, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 28)(69, "h6", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, " Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, " data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 28)(78, "ul", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](79, ChequeDepositComponent_li_79_Template, 3, 5, "li", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "form", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submit", function ChequeDepositComponent_Template_form_submit_80_listener() {
        return ctx.despositCheque();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 33)(82, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 13)(85, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](86, "textarea", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 37)(88, "div", 38)(89, "div", 39)(90, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, " Attachment (Upload Bank Voucher) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("files", function ChequeDepositComponent_Template_div_files_92_listener($event) {
        return ctx.filesDropped($event);
      })("enter", function ChequeDepositComponent_Template_div_enter_92_listener() {
        return ctx.enter = !ctx.enter;
      })("leave", function ChequeDepositComponent_Template_div_leave_92_listener() {
        return ctx.enter = !ctx.enter;
      })("click", function ChequeDepositComponent_Template_div_click_92_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](100);
        return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r5.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](94, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "Drag & drop files");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "Supported formates: JPEG, PNG, PDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "input", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ChequeDepositComponent_Template_input_change_99_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](101, ChequeDepositComponent_ng_container_101_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](102, ChequeDepositComponent_small_102_Template, 2, 1, "small", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "div", 13)(104, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](105, ChequeDepositComponent_ng_container_105_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "div", 47)(107, "div", 48)(108, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "div", 48)(111, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](113, ChequeDepositComponent_i_113_Template, 1, 0, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](114, ChequeDepositComponent_ng_template_114_Template, 3, 2, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.chequeDetails == null ? null : ctx.chequeDetails.accountName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.chequeDetails == null ? null : ctx.chequeDetails.bankName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.chequeDetails == null ? null : ctx.chequeDetails.accountNo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.chequeDetails == null ? null : ctx.chequeDetails.currency[0] == null ? null : ctx.chequeDetails.currency[0].lookupName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](32, 27, ctx.chequeDetails == null ? null : ctx.chequeDetails.remainingAmount, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](38, 30, ctx.selectedChequeAmount, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](44, 33, ctx.selectedChequeAmount && (ctx.chequeDetails == null ? null : ctx.chequeDetails.remainingAmount) - ctx.selectedChequeAmount, "2.3-3"), " JD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.f["selectedAmount"] == null ? null : ctx.f["selectedAmount"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.unSettledChequeList)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", (ctx.unSettledChequeList == null ? null : ctx.unSettledChequeList.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.unSettledChequeList == null ? null : ctx.unSettledChequeList.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.totalRecords < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.f["attachment"] == null ? null : ctx.f["attachment"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.invalidFileType);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filesArray.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", "/unsettled-session/add-bank-deposit");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.isPending);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.isPending && "Saving" || "Save", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isPending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponent, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_9__.DragAndDropDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [".applyMargin[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.total[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 15px 0 0px;\n  padding: 10px 0px;\n}\n.total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #929eae;\n  margin: 0px;\n  padding: 10px 0px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.btn-provide[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: #c5c6c7;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.card-Box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 24px 34px;\n}\n\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  \n  color: #1b212d;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  \n  color: #858585;\n}\n\n.linkText[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #4e9aff;\n}\n\n.linkText2[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #4e9aff;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.headButtonText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  margin-top: 22px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  align-items: center;\n}\n\n.amountButton[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  \n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 34px 14px 35px;\n  gap: 10px;\n  height: 48px;\n  \n  background: #f8f8f8;\n  border: 0.5px solid #e9e9e9;\n  border-radius: 10px;\n}\n\n.statusButton[_ngcontent-%COMP%] {\n  width: 95px;\n  height: 34.2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff3db;\n  border-radius: 8px;\n}\n\n.flex-start[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 148px;\n}\n\n.inputColor[_ngcontent-%COMP%] {\n  accent-color: #dc3545;\n  height: 15px;\n  width: 15px;\n}\n\n.textArea[_ngcontent-%COMP%] {\n  height: 89.5px;\n  width: 675px;\n  border-radius: 8px;\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  border-radius: 8px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.card-page[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #c4cdd5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 22px;\n  color: #1b212d;\n  padding: 5px 0 15px;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .invoic[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #929eae;\n  font-weight: 500;\n  padding: 1px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1b212d;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 80px !important;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.btn-upload[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  margin: 0px;\n}\n\n.overlay-bi[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  margin: -30px 0 0 0;\n  z-index: 5;\n  position: relative;\n}\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #fff3f3;\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.uplod[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #676767;\n}\n\n.save-img[_ngcontent-%COMP%] {\n  width: 22px !important;\n}\n\n.fileView[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.btn[_ngcontent-%COMP%]:disabled, .btn.disabled[_ngcontent-%COMP%] {\n  background: #f1f3f3 !important;\n  color: #9b9b9b !important;\n  border: 1px solid #f1f3f3;\n  cursor: initial;\n}\n\n.card-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n\n.card-sm[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1b212d;\n  margin-bottom: 5px;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #929eae;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  height: 120px;\n  border-radius: 6px;\n  margin: 5px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  padding: 10px;\n}\n\n.fview[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 50%;\n  margin: 0px 5px;\n  width: 30px;\n  height: 30px;\n}\n.fview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.flex-end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi9jaGVxdWUtZGVwb3NpdC9jaGVxdWUtZGVwb3NpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURKOztBQUtBO0VBQ0UsMkJBQUE7RUFDQSxnREFBQTtFQUNBLHdEQUFBO0VBQ0EscURBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFQRjs7QUFVQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7RUFFQSxzQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFWRjs7QUFhQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQVZGOztBQWFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQWNBO0VBQ0UsYUFBQTtBQVhGOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtBQVhGOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFYSjtBQWNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVpKO0FBY0k7RUFDRSxjQUFBO0FBWk47QUFnQkU7RUFDRSxnQkFBQTtBQWRKO0FBZ0JJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFkTjtBQWlCSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFmTjtBQWlCTTtFQUNFLGNBQUE7QUFmUjs7QUFxQkE7RUFDRSx1QkFBQTtBQWxCRjs7QUFxQkE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFsQkY7QUFvQkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFsQko7QUFxQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBbkJKO0FBc0JFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBcEJKOztBQXdCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBckJGOztBQXlCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUF0Qko7O0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUF2QkY7QUF5QkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF2Qko7O0FBMkJBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBeEJGO0FBMEJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBeEJKO0FBMEJJO0VBQ0UsV0FBQTtBQXhCTjtBQTRCRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBMUJKOztBQThCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUEzQkY7O0FBOEJBO0VBQ0Usc0JBQUE7QUEzQkY7O0FBK0JFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBNUJKOztBQWdDQTs7RUFFRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBN0JGOztBQWdDQTtFQUNFLG1CQUFBO0FBN0JGOztBQWdDQTtFQUNFLHlCQUFBO0FBN0JGOztBQWdDQTtFQUNFLGdCQUFBO0FBN0JGO0FBK0JFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBN0JKO0FBZ0NFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTlCSjtBQWlDRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9CSjtBQWlDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBL0JOOztBQW9DQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFqQ0Y7QUFtQ0U7RUFDRSxzQkFBQTtBQWpDSjs7QUFxQ0E7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFsQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbHlNYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG5cbi50b3RhbCB7XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDE1cHggMCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogIzkyOWVhZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgfVxufVxuXG4uY2FyZC10YWJsZSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2Y0ZjRmNDtcbiAgYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5idG4tcHJvdmlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTRweCA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5idG4tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNmM3O1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogOHB4IDE0cHggOHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnBsYXktbGVmdCB7XG4gIGNvbG9yOiAjZWNlYWVhO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnBsYXktcmlnaHQge1xuICBjb2xvcjogI2VjZWFlYTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4uY2FyZC1Cb3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDI0cHggMzRweDtcbn1cblxuLmZsZXgtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRpbmdUZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBUZXh0IENvbG9yL1RleHQgMSAqL1xuXG4gIGNvbG9yOiAjMWIyMTJkO1xufVxuXG4ubWR0ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG5cbiAgY29sb3I6ICMxYjIxMmQ7XG59XG5cbi5zbVRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogVGV4dCBDb2xvci9UZXh0IDEgKi9cblxuICBjb2xvcjogIzg1ODU4NTtcbn1cblxuLmxpbmtUZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNGU5YWZmO1xufVxuXG4ubGlua1RleHQyIHtcbiAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNGU5YWZmO1xufVxuXG4uaGVhZEJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiAzNC4ycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmhlYWRCdXR0b25UZXh0IHtcbiAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4uZmxleC1jb2x1bW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbW91bnRCdXR0b24ge1xuICAvKiBQcmV2aWV3ICovXG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogQXV0byBsYXlvdXQgKi9cblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAzNHB4IDE0cHggMzVweDtcbiAgZ2FwOiAxMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIC8qIEdyYXkvR3JheSAyICovXG5cbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTllOWU5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc3RhdHVzQnV0dG9uIHtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMzQuMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjNkYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uZmxleC1zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNDhweDtcbn1cblxuLmlucHV0Q29sb3Ige1xuICBhY2NlbnQtY29sb3I6ICNkYzM1NDU7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG59XG5cbi50ZXh0QXJlYSB7XG4gIGhlaWdodDogODkuNXB4O1xuICB3aWR0aDogNjc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi8vLy8vLy8vLy8vLy9cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQtZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjNGNkZDU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmNhcmQtcGFnZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5tb2RhbC1oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGNkZDU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgcGFkZGluZzogNXB4IDAgMTVweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMWIyMTJkO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICB9XG4gIH1cblxuICAuaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcblxuICAgIC5pbnZvaWMge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHBhZGRpbmc6IDFweDtcblxuICAgICAgYiB7XG4gICAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC11cGxvYWQge1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzkzOWFhODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIGg1IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzBmMGYwZjtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjNjc2NzY3O1xuICB9XG59XG5cbi5idG4tdXBsb2FkIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMzVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmNhcmQtaW1nIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuLm92ZXJsYXktYmkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTkgMTk5IDE5OSAvIDIxJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jYXJkLWZvcm0gLmVkaXQtYnRuIHtcbiAgbWFyZ2luOiAtMzBweCAwIDAgMDtcbiAgei1pbmRleDogNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuXG4udXBsb2FkZWRmaWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzExYWYyMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICM2OTY5Njk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi51cGxvZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM2NzY3Njc7XG59XG5cbi5zYXZlLWltZyB7XG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlVmlldyB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuXG4uYnRuOmRpc2FibGVkLFxuLmJ0bi5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmMWYzZjMgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5YjliOWIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjNmMztcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4uY2FyZC1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG59XG5cbi5jYXJkLXNtIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM5MjllYWU7XG4gIH1cblxuICAubm90ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi5mdmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5mbGV4LWVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 51460:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/components/register-currencies/register-currencies.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterCurrenciesComponent": () => (/* binding */ RegisterCurrenciesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function RegisterCurrenciesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Currency Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Actual Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11)(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Deposited Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11)(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Refunded Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Remaining Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r1 == null ? null : item_r1.amount == null ? null : item_r1.amount.actualAmount) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r1 == null ? null : item_r1.amount == null ? null : item_r1.amount.depositedAmount) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r1 == null ? null : item_r1.amount == null ? null : item_r1.amount.refundedAmount) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r1 == null ? null : item_r1.amount == null ? null : item_r1.amount.remaining) || 0);
  }
}
class RegisterCurrenciesComponent {
  constructor(_activeModal) {
    this._activeModal = _activeModal;
  }
  ngOnInit() {}
}
RegisterCurrenciesComponent.ɵfac = function RegisterCurrenciesComponent_Factory(t) {
  return new (t || RegisterCurrenciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
};
RegisterCurrenciesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterCurrenciesComponent,
  selectors: [["app-register-currencies"]],
  inputs: {
    data: "data"
  },
  decls: 10,
  vars: 1,
  consts: [[1, "modal-header"], [1, "modal-title", "fw-600"], [1, "modal-body"], [1, "row"], ["class", "col-6 mb-3", 4, "ngFor", "ngForOf"], [1, "modal-footer", "border-0", "mt-3"], [1, "btns-group", "px-0", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "col-6", "mb-3"], [1, "mb-3", "fw-600"], [1, "primary-clr"], [1, "font-14"]],
  template: function RegisterCurrenciesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register Currencies");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegisterCurrenciesComponent_div_5_Template, 21, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterCurrenciesComponent_Template_button_click_8_listener() {
        return ctx._activeModal.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.registerCurrencies);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1054:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/components/settled-session-list/settled-session-list.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettledSessionListComponent": () => (/* binding */ SettledSessionListComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../main-fund/register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/header.service */ 36690);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);














const _c0 = ["success"];
function SettledSessionListComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettledSessionListComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.resetRegisterNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SettledSessionListComponent_i_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettledSessionListComponent_i_15_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.resetDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SettledSessionListComponent_div_21_tr_40_ul_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 39)(1, "li", 40)(2, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettledSessionListComponent_div_21_tr_40_ul_19_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.navigateTo(item_r13 == null ? null : item_r13.registerSessionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "View Session Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
const _c1 = function (a0, a1) {
  return {
    "background-color": a0,
    color: a1
  };
};
function SettledSessionListComponent_div_21_tr_40_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td")(13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td")(16, "div", 35)(17, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SettledSessionListComponent_div_21_tr_40_ul_19_Template, 4, 0, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r13 == null ? null : item_r13.branch == null ? null : item_r13.branch.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r13 == null ? null : item_r13.register.registerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r13 == null ? null : item_r13.register.registersName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 7, item_r13 == null ? null : item_r13.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r13 == null ? null : item_r13.createdBy == null ? null : item_r13.createdBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](10, _c1, item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.lookupBGColor, item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.translations[0] == null ? null : item_r13.statusObj.translations[0].lookupName, " ");
  }
}
function SettledSessionListComponent_div_21_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SettledSessionListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "div", 24)(2, "div", 25)(3, "table", 26)(4, "thead")(5, "tr")(6, "th", 27)(7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettledSessionListComponent_div_21_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.sortByBranch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Branch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 29)(10, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 27)(12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettledSessionListComponent_div_21_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.sortByRegisterNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Register No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 29)(15, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 27)(17, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettledSessionListComponent_div_21_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.sortByRegisterName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Register Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 29)(20, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 27)(22, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettledSessionListComponent_div_21_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Request Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 29)(25, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 27)(27, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettledSessionListComponent_div_21_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.sortByRequested());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Requested By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 29)(30, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "th", 27)(32, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettledSessionListComponent_div_21_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "i", 29)(35, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "th", 27)(37, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, SettledSessionListComponent_div_21_tr_40_Template, 20, 13, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, SettledSessionListComponent_div_21_div_41_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionList_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (sessionList_r10 == null ? null : sessionList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (sessionList_r10 == null ? null : sessionList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (sessionList_r10 == null ? null : sessionList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (sessionList_r10 == null ? null : sessionList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (sessionList_r10 == null ? null : sessionList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (sessionList_r10 == null ? null : sessionList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.sort == 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", (sessionList_r10 == null ? null : sessionList_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", sessionList_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (sessionList_r10 == null ? null : sessionList_r10.length) == 0);
  }
}
function SettledSessionListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SettledSessionListComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 43)(2, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 43)(11, "ngb-pagination", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function SettledSessionListComponent_ng_container_25_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.pageNo = $event);
    })("pageChange", function SettledSessionListComponent_ng_container_25_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r5.pageNo * 6 - 5, " - ", (ctx_r5.sessionList == null ? null : ctx_r5.sessionList.length) == 6 ? ctx_r5.pageNo * 6 : ctx_r5.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r5.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collectionSize", ctx_r5.totalRecords)("page", ctx_r5.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
const _c2 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
class SettledSessionListComponent {
  constructor(_registerSettlementService, _activeRoute, _commonService, _headerService, fb, datepipe, modalService) {
    this._registerSettlementService = _registerSettlementService;
    this._activeRoute = _activeRoute;
    this._commonService = _commonService;
    this._headerService = _headerService;
    this.fb = fb;
    this.datepipe = datepipe;
    this.modalService = modalService;
    this.searchText = '';
    this.filterParams = undefined;
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 1;
    this.pageSize = 6;
    this.pages = [];
    this.sessionList = [];
    this.branchesList = [];
    this.employeesList = [];
  }
  initFilterForm() {
    this.sessionFilterForm = this.fb.group({
      register: [''],
      branch: [null],
      createdBy: [null],
      date: ['']
    });
  }
  ngOnInit() {
    this.getAllSessions(this.filterParams);
    this.getBaranches();
    this.getEmployees();
    this.initFilterForm();
    this.sessionFilterForm.valueChanges.subscribe(value => {
      this.pageNo = 0;
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
      if (formValues.branch == null) {
        formValues = {
          ...formValues,
          branch: ''
        };
      }
      if (formValues.createdBy == null) {
        formValues = {
          ...formValues,
          createdBy: ''
        };
      }
      this.filterParams = '?' + new URLSearchParams(formValues).toString();
      this.getAllSessions(this.filterParams);
    });
  }
  resetDate() {
    this.sessionFilterForm.controls['date'].setValue('');
  }
  resetRegisterNo() {
    this.sessionFilterForm.controls['register'].setValue('');
  }
  navigateTo(id) {
    this._commonService.NavigateToRoute(`/unsettled-session/session/${id}`);
  }
  getAllSessions(filterParams = this.filterParams) {
    let defaultParams = `status=16006&pageNo=${this.pageNo - 1}&sort=${this.sort}&pageSize=${this.pageSize}`;
    this._registerSettlementService.getAllSessions(filterParams && filterParams + `&${defaultParams}` || `?${defaultParams}`).subscribe(response => {
      this.sessionList = response?.data;
      console.log(this.sessionList);
      this.totalRecords = response?.totalRecordCount;
      this.pagin = Math.ceil(this.totalRecords / 6);
      this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
    });
  }
  getBaranches() {
    this._registerSettlementService.getBranches().subscribe(response => {
      this.branchesList = response.data;
    });
  }
  getEmployees() {
    this._registerSettlementService.getEmployees().subscribe(response => {
      this.employeesList = response.data;
    });
  }
  // Sorting Functions
  sortByBranch() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getAllSessions();
  }
  sortByRegisterNo() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getAllSessions();
  }
  sortByRegisterName() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getAllSessions();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getAllSessions();
  }
  sortByRequested() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getAllSessions();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.getAllSessions();
  }
  /**
   * pagination
   * @param page page no
   */
  pageChange(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getAllSessions();
  }
}
SettledSessionListComponent.ɵfac = function SettledSessionListComponent_Factory(t) {
  return new (t || SettledSessionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal));
};
SettledSessionListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: SettledSessionListComponent,
  selectors: [["settled-session-list"]],
  viewQuery: function SettledSessionListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.success = _t.first);
    }
  },
  decls: 26,
  vars: 11,
  consts: [[1, "heading-text", "mb-3", "font-18", "fw-600"], [3, "formGroup"], [1, "row", "align-items-stretch"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "input-group", "search-box", "h-100"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "formControlName", "register", "placeholder", "Register Name or No.", 1, "form-control"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], ["formControlName", "branch", "placeholder", "Branch Name", "bindLabel", "branchName", "bindValue", "branchId", 1, "flex-grow-1", "mt-3", "mt-sm-0", 3, "items"], ["formControlName", "createdBy", "placeholder", "Employee", "bindLabel", "fullName", "bindValue", "userId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "position-relative"], ["class", "fa-solid fa-times", "style", "position:absolute;top:15px;right:30px;cursor:pointer", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "date", "placeholder", "Select Date", "bsDaterangepicker", "", "placement", "left", 1, "form-control", "mt-3", "mt-lg-0", 2, "height", "46px", 3, "bsConfig"], [1, "d-flex", "justify-content-end"], [1, "total-records"], [1, "row"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [4, "ngIf"], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-times", 2, "position", "absolute", "top", "15px", "right", "30px", "cursor", "pointer", 3, "click"], [1, "card-table", "mt-2", "register-sessions-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "status-tag", 3, "ngStyle"], ["dropdown", "", "container", "body", 1, "btn-group", "remove-caret-dropdown"], ["dropdownToggle", "", "aria-controls", "dropdown-basic", 1, "dot-details", "cursor-pointer", "dropdown-toggle"], [1, "fas", "fa-ellipsis-h"], ["id", "dropdown-basic", "class", "dropdown-menu dropdown-menu-right custom-session-dd", "role", "menu", "aria-labelledby", "button-alignment", 4, "dropdownMenu"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-alignment", 1, "dropdown-menu", "dropdown-menu-right", "custom-session-dd"], ["role", "menuitem"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "not-found"], [1, "col-md-6"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function SettledSessionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Settled Sessions List");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SettledSessionListComponent_button_9_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ng-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SettledSessionListComponent_i_15_Template, 1, 0, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14)(18, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SettledSessionListComponent_div_21_Template, 42, 33, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, SettledSessionListComponent_ng_template_23_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SettledSessionListComponent_ng_container_25_Template, 12, 9, "ng-container", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.sessionFilterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sessionFilterForm.controls["register"].value !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.branchesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.employeesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sessionFilterForm.controls["date"].value.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sessionList)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 81404:
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/create-deposit/create-deposit.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDepositComponent": () => (/* binding */ CreateDepositComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _cashier_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cashier/collect/payment-modal/view-file/view-file.component */ 32298);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../main-fund/allocation/allocation/allocation-services/allocation.service */ 51445);
/* harmony import */ var _cashier_unsettled_session_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../cashier/unsettled-session/services/unsettled-session.service */ 20320);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/directive/drag-and-drop.directive */ 96603);
/* harmony import */ var _shared_components_saving_loader_saving_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/saving-loader/saving-loader.component */ 53823);




















const _c0 = ["inputFile"];
function CreateDepositComponent_ng_container_23_ng_container_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_23_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_23_ng_container_2_ng_container_1_span_1_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r16.f["currencyId"] == null ? null : ctx_r16.f["currencyId"].errors == null ? null : ctx_r16.f["currencyId"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_23_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_23_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r15.f["currencyId"] == null ? null : ctx_r15.f["currencyId"].invalid) && (ctx_r15.f["currencyId"] == null ? null : ctx_r15.f["currencyId"].touched) || (ctx_r15.f["currencyId"] == null ? null : ctx_r15.f["currencyId"].dirty));
  }
}
function CreateDepositComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ng-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CreateDepositComponent_ng_container_23_Template_ng_select_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r18.onCurrencyChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, CreateDepositComponent_ng_container_23_ng_container_2_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("items", ctx_r0.currencyList);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.f["currencyId"] == null ? null : ctx_r0.f["currencyId"]["errors"]);
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
function CreateDepositComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 1)(1, "div", 41)(2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function CreateDepositComponent_ng_template_24_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.chequeType = $event);
    })("change", function CreateDepositComponent_ng_template_24_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r22.onChequeTypeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 41)(6, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function CreateDepositComponent_ng_template_24_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r23.chequeType = $event);
    })("change", function CreateDepositComponent_ng_template_24_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r24.onChequeTypeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "PDC");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.chequeType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.chequeType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](5, _c1));
  }
}
function CreateDepositComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((item_r25 == null ? null : item_r25.bankNameEnglish) + " - " + (item_r25 == null ? null : item_r25.accountName) + " - " + (item_r25 == null ? null : item_r25.accountNumber));
  }
}
function CreateDepositComponent_ng_container_35_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_35_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_35_ng_container_1_span_1_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r26.f["accountId"] == null ? null : ctx_r26.f["accountId"].errors == null ? null : ctx_r26.f["accountId"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_35_ng_container_1_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r4.f["accountId"] == null ? null : ctx_r4.f["accountId"].invalid) && (ctx_r4.f["accountId"] == null ? null : ctx_r4.f["accountId"].touched) || (ctx_r4.f["accountId"] == null ? null : ctx_r4.f["accountId"].dirty));
  }
}
function CreateDepositComponent_div_36_ng_container_4_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_div_36_ng_container_4_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Value must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_div_36_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_div_36_ng_container_4_ng_container_1_span_1_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, CreateDepositComponent_div_36_ng_container_4_ng_container_1_span_2_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r29.f["amount"] == null ? null : ctx_r29.f["amount"].errors == null ? null : ctx_r29.f["amount"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r29.f["amount"] == null ? null : ctx_r29.f["amount"].errors == null ? null : ctx_r29.f["amount"].errors["invalidAmount"]);
  }
}
function CreateDepositComponent_div_36_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_div_36_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r28.f["amount"] == null ? null : ctx_r28.f["amount"].invalid) && (ctx_r28.f["amount"] == null ? null : ctx_r28.f["amount"].touched) || (ctx_r28.f["amount"] == null ? null : ctx_r28.f["amount"].dirty));
  }
}
function CreateDepositComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 22)(1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Amount*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, CreateDepositComponent_div_36_ng_container_4_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r5.f["amount"] == null ? null : ctx_r5.f["amount"]["errors"]);
  }
}
function CreateDepositComponent_ng_container_42_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_42_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_42_ng_container_1_span_1_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r32.f["depositDate"] == null ? null : ctx_r32.f["depositDate"].errors == null ? null : ctx_r32.f["depositDate"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_42_ng_container_1_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r6.f["depositDate"] == null ? null : ctx_r6.f["depositDate"].invalid) && (ctx_r6.f["depositDate"] == null ? null : ctx_r6.f["depositDate"].touched) || (ctx_r6.f["depositDate"] == null ? null : ctx_r6.f["depositDate"].dirty));
  }
}
function CreateDepositComponent_ng_container_47_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_47_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_47_ng_container_1_span_1_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r34.f["time"] == null ? null : ctx_r34.f["time"].errors == null ? null : ctx_r34.f["time"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_47_ng_container_1_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r7.f["time"] == null ? null : ctx_r7.f["time"].invalid) && (ctx_r7.f["time"] == null ? null : ctx_r7.f["time"].touched) || (ctx_r7.f["time"] == null ? null : ctx_r7.f["time"].dirty));
  }
}
function CreateDepositComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 49)(5, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_61_Template_img_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r36.fileAction("view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_61_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r38.fileAction("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r9.f["attachment"] == null ? null : ctx_r9.f["attachment"].value);
  }
}
function CreateDepositComponent_ng_container_62_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Uploading the attachment is required please upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_62_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_62_ng_container_1_span_1_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r39.f["attachment"] == null ? null : ctx_r39.f["attachment"].errors == null ? null : ctx_r39.f["attachment"].errors["required"]);
  }
}
function CreateDepositComponent_ng_container_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CreateDepositComponent_ng_container_62_ng_container_1_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r10.f["attachment"] == null ? null : ctx_r10.f["attachment"].invalid) && (ctx_r10.f["attachment"] == null ? null : ctx_r10.f["attachment"].touched) || (ctx_r10.f["attachment"] == null ? null : ctx_r10.f["attachment"].dirty));
  }
}
function CreateDepositComponent_small_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r11.invalidFileType);
  }
}
function CreateDepositComponent_div_64_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_div_64_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r43.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_div_64_saving_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "saving-loader");
  }
}
function CreateDepositComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, CreateDepositComponent_div_64_button_4_Template, 2, 0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, CreateDepositComponent_div_64_saving_loader_5_Template, 1, 0, "saving-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r12.isSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r12.isSuccess);
  }
}
function CreateDepositComponent_ng_container_65_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_65_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r51.clearSearchChequeInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_65_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_65_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r53.clearSearchSessionInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_65_div_25_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CreateDepositComponent_ng_container_65_div_25_tr_33_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r59.handleCheckBoxChange());
    })("ngModelChange", function CreateDepositComponent_ng_container_65_div_25_tr_33_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r60);
      const item_r57 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](item_r57.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r57 = ctx.$implicit;
    const index_r58 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", item_r57.checked)("id", index_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r57 == null ? null : item_r57.chequeCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r57 == null ? null : item_r57.chequeNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r57 == null ? null : item_r57.bank[0] == null ? null : item_r57.bank[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](11, 7, item_r57 == null ? null : item_r57.chequeDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](14, 10, item_r57 == null ? null : item_r57.chequeCollectionJod, "2.3-3"), " JOD");
  }
}
function CreateDepositComponent_ng_container_65_div_25_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function CreateDepositComponent_ng_container_65_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 69)(1, "div", 73)(2, "div", 74)(3, "table", 75)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "th", 76)(8, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_65_div_25_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r62.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "i", 78)(11, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "th", 76)(13, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_65_div_25_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r64.sortByCheque());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "i", 78)(16, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "th", 76)(18, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_65_div_25_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r63);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r65.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "i", 78)(21, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "th", 76)(23, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_65_div_25_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r63);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r66.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "i", 78)(26, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "th", 76)(28, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_65_div_25_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r63);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r67.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "i", 78)(31, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, CreateDepositComponent_ng_container_65_div_25_tr_33_Template, 15, 13, "tr", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, CreateDepositComponent_ng_container_65_div_25_div_34_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r47.unSettledChequeList == null ? null : ctx_r47.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r47.unSettledChequeList == null ? null : ctx_r47.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r47.unSettledChequeList == null ? null : ctx_r47.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r47.unSettledChequeList == null ? null : ctx_r47.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r47.unSettledChequeList == null ? null : ctx_r47.unSettledChequeList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r47.unSettledChequeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r47.unSettledChequeList == null ? null : ctx_r47.unSettledChequeList.length) == 0);
  }
}
function CreateDepositComponent_ng_container_65_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    active: a0
  };
};
function CreateDepositComponent_ng_container_65_ng_container_29_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li", 88)(1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_ng_container_65_ng_container_29_li_12_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r71);
      const page_r69 = restoredCtx.$implicit;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r70.setPage(page_r69));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r69 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](3, _c2, ctx_r68.pageNo === page_r69))("disabled", ctx_r68.pageNo === page_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", page_r69 + 1, " ");
  }
}
function CreateDepositComponent_ng_container_65_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 84)(2, "h6", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 84)(11, "ul", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, CreateDepositComponent_ng_container_65_ng_container_29_li_12_Template, 3, 5, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", (ctx_r50.pageNo + 1) * 6 - 5, " - ", (ctx_r50.unSettledChequeList == null ? null : ctx_r50.unSettledChequeList.length) == 6 ? (ctx_r50.pageNo + 1) * 6 : ctx_r50.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r50.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r50.pages);
  }
}
function CreateDepositComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 20)(2, "div", 57)(3, "div", 20)(4, "div", 16)(5, "div", 58)(6, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("input", function CreateDepositComponent_ng_container_65_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r72.onSearchChequeChange());
    })("ngModelChange", function CreateDepositComponent_ng_container_65_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r73);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r74.searchCheque = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, CreateDepositComponent_ng_container_65_button_9_Template, 2, 0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 16)(11, "div", 58)(12, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("input", function CreateDepositComponent_ng_container_65_Template_input_input_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r73);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r75.onSearchSessionChange());
    })("ngModelChange", function CreateDepositComponent_ng_container_65_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r73);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r76.searchSession = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, CreateDepositComponent_ng_container_65_button_15_Template, 2, 0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 64)(17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Selcted Cheques Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 66)(23, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, CreateDepositComponent_ng_container_65_div_25_Template, 35, 27, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, CreateDepositComponent_ng_container_65_ng_template_27_Template, 2, 0, "ng-template", null, 70, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, CreateDepositComponent_ng_container_65_ng_container_29_Template, 13, 4, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](28);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r13.searchCheque);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r13.searchCheque);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r13.searchSession);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r13.searchSession);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](21, 10, ctx_r13.selectedChequeAmount || 0, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("No of seleced ", ctx_r13.checkedItems == null ? null : ctx_r13.checkedItems.length, ". No of Cheques ", ctx_r13.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r13.unSettledChequeList)("ngIfElse", _r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r13.totalRecords > 1000);
  }
}
function CreateDepositComponent_div_66_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CreateDepositComponent_div_66_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r79.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r77.checkedItems == null ? null : ctx_r77.checkedItems.length) <= 0);
  }
}
function CreateDepositComponent_div_66_saving_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "saving-loader");
  }
}
function CreateDepositComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, CreateDepositComponent_div_66_button_4_Template, 2, 1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, CreateDepositComponent_div_66_saving_loader_5_Template, 1, 0, "saving-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r14.isSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r14.isSuccess);
  }
}
class CreateDepositComponent {
  constructor(_commonService, fb, _activatedRoute, _modalService, _headerService, _allocationService, _unsettleSession, _sharedService) {
    this._commonService = _commonService;
    this.fb = fb;
    this._activatedRoute = _activatedRoute;
    this._modalService = _modalService;
    this._headerService = _headerService;
    this._allocationService = _allocationService;
    this._unsettleSession = _unsettleSession;
    this._sharedService = _sharedService;
    this.isCash = true;
    this.isSuccess = true;
    this.currencyList = [];
    this.bankAccounts = [];
    this.banks = [];
    this.unSettledChequeList = [];
    this.isCurrencySelected = true;
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 0;
    this.pages = [];
    this.checkedItems = [];
    this.searchCheque = '';
    this.searchSession = '';
    this.chequeType = '';
    this.bankId = null;
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']; //'application/pdf'
    this.sessionId = 0;
  }
  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      this.sessionId = params['sessionId'];
    });
    this._headerService.setTitle('Unsettled Session > Create Deposit');
    this.initForm();
    this.getCurrencyList();
    //this.getBanks();
    this.getBanksFromLookUp();
    //this.getRegisterUnsettledCheques();
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
      attachment: [''],
      currencyId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
      accountId: [{
        value: null,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
      amount: [{
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
      depositDate: [{
        value: this.getToday(),
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
      time: [{
        value: this.setTimeNow(),
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]]
    });
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
    this.unSettledChequeList = [];
    this.chequeType = '';
    this.bankAccounts = [];
    this.currencyId = null;
    this.formGroup.get('accountId').setValue(null);
    this.isCash = event.target.value == 'cash' ? true : false;
    if (!this.isCash) {
      // THIS IS JUST TO SET VALUES BECASUE THESE ARE REQUIRED IN CASE OF CASH DEPOSIT SO I AM USING ONE FORM FOR BOTH CASH AND CHEQUE
      // REMOVE VALIDATION I HAVE SET VALUE IN THESE CONTROLS SO I CAN USE CONTROL VALIDATORS CONDITIONALLY BUT I AM GOING THIS WAY.
      this.formGroup.get('currencyId').setValue('noValue');
      this.formGroup.get('amount').setValue('noValue');
      this.getBankAccounts('?currencyId=9001&status=2001&pageNo=0&pageSize=1000&accountType=15004');
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
      let formValue = this.formGroup.value;
      let depositDate = `${formValue['depositDate']}T${formValue['time']}`;
      formValue = {
        ...formValue,
        depositDate
      };
      console.log(formValue);
      let formData = new FormData();
      formData.append('accountId', formValue['accountId']);
      formData.append('depositDate', formValue['depositDate']);
      formData.append('registerSessionId', this.sessionId.toString());
      if (this.uploadedFile?.['file']) {
        formData.append('Files', this.uploadedFile['file']);
      }
      let message = 'Your deposit has been created successfully';
      this.isSuccess = false;
      if (this.isCash) {
        formData.append('amount', formValue['amount']);
        formData.append('currencyId', formValue['currencyId']);
        this._allocationService.addRegisterDirectCashDepositToMarkaziaAccount(formData).subscribe(response => {
          if (response?.isSuccess) {
            this.isSuccess = true;
            this.successModal('success', message);
          }
        }, error => {
          this.isSuccess = true;
          this.successModal('error', error.error['errors']);
        });
      } else {
        formData.append('chequeCollectionIds', this.chequeIds.toString());
        this._allocationService.addRegisterDirectChequesToMarkaziaAccount(formData).subscribe(response => {
          if (response?.isSuccess) {
            this.isSuccess = true;
            this.successModal('success', message);
          }
        }, error => {
          this.isSuccess = true;
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
      modelRef.componentInstance.routeName = "/unsettled-session";
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  get f() {
    return this.formGroup.controls;
  }
  onCurrencyChange(event) {
    this.formGroup.get('accountId').setValue(null);
    const value = event?.value;
    this.toggleFormDisablity(value);
    if (value) {
      let param = `?currencyId=${value}&status=2001&pageNo=0&pageSize=1000`;
      if (value == 9001) param += "&accountType=15001";else if (value == 9002) param += "&accountType=15002";else if (value == 9003) param += "&accountType=15003";
      this.getBankAccounts(param);
    }
  }
  handleCheckBoxChange() {
    this.checkedItems = this.unSettledChequeList.filter(x => x.checked);
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
  getRegisterUnsettledCheques() {
    let param = `?rgisterId=${this._sharedService.getRegister.registerObj?.id}&search=${this.searchCheque}
    &sort=${this.sort}&pageNo=${this.pageNo}&pageSize=1000`;
    if (this.searchSession) {
      param += `&sessionId=${this.searchSession}`;
    }
    if (this.chequeType) {
      param += `&type=${this.chequeType}`;
    }
    this._allocationService.getRegisterUnsettledCheques(param).subscribe(response => {
      if (response?.data.length > 0) {
        this.unSettledChequeList = response?.data.map(x => {
          return {
            ...x,
            checked: false
          };
        });
        ;
        this.totalRecords = response?.totalRecordCount;
        this.pagin = Math.ceil(this.totalRecords / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_2__.range(this.pagin);
        console.log(this.totalRecords);
      } else {
        this.checkedItems = [];
        this.selectedChequeAmount = 0;
        this.unSettledChequeList = [];
      }
    });
  }
  onSearchChequeChange() {
    this.getRegisterUnsettledCheques();
  }
  clearSearchChequeInput() {
    this.searchCheque = '';
    this.getRegisterUnsettledCheques();
  }
  onSearchSessionChange() {
    this.getRegisterUnsettledCheques();
  }
  clearSearchSessionInput() {
    this.searchSession = '';
    this.getRegisterUnsettledCheques();
  }
  onChequeTypeChange() {
    this.formGroup.get('accountId').setValue(null);
    this.toggleFormDisablity(true);
    if (this.chequeType == 'cheque') this.getBankAccounts('?currencyId=9001&status=2001&pageNo=0&pageSize=1000&accountType=15004');else this.getBankAccounts('?currencyId=9001&status=2001&pageNo=0&pageSize=1000&accountType=15005');
    this.getRegisterUnsettledCheques();
  }
  getCurrencyList() {
    this._allocationService.getCurrencyList().subscribe(response => {
      this.currencyList = response['data'].map(x => {
        return {
          value: x.id,
          text: x.name[0]?.lookupName
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
    });
  }
  onBankChange(event) {
    this.getRegisterUnsettledCheques();
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
    this.getRegisterUnsettledCheques();
  }
  sortByCheque() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getRegisterUnsettledCheques();
  }
  sortByBank() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getRegisterUnsettledCheques();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getRegisterUnsettledCheques();
  }
  sortByAmount() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getRegisterUnsettledCheques();
  }
  setPage(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getRegisterUnsettledCheques();
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
  return new (t || CreateDepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_4__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_5__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_cashier_unsettled_session_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_6__.UnsettledSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService));
};
CreateDepositComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: CreateDepositComponent,
  selectors: [["app-create-deposit"]],
  viewQuery: function CreateDepositComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
    }
  },
  decls: 67,
  vars: 18,
  consts: [[1, "page-layout"], [1, "d-flex", "align-items-center", "gap-5"], [1, "headingText"], [1, "border-deposit-type"], [1, "form-check", "d-flex", "align-items-center", "pe-2"], ["value", "cash", "id", "cash", "type", "radio", 1, "form-check-input", 3, "checked", "change"], ["for", "cash"], [1, "form-check", "d-flex", "align-items-center", "ps-2"], ["value", "cheque", "id", "cheque", "type", "radio", 1, "form-check-input", 3, "checked", "change"], ["for", "cheque"], [1, "separator"], [3, "formGroup"], [1, "card-Box", "mt-4"], [1, "row", "align-items-center"], [1, "col-sm-2"], [1, "mdtext"], [1, "col-sm-3"], [4, "ngIf", "ngIfElse"], ["elseChequeType", ""], [1, "card-Box", "mt-5"], [1, "row"], [1, "col-sm-6"], [1, "col-6"], ["formControlName", "accountId", "placeholder", "Account", "bindLabel", "accountName", "bindValue", "accountId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], ["ng-option-tmp", ""], [4, "ngIf"], ["class", "col-6", 4, "ngIf"], [1, "row", "mt-3"], ["type", "date", "formControlName", "depositDate", 1, "form-control", 3, "max"], ["type", "time", "formControlName", "time", 1, "form-control"], [1, "offset-2", "col-sm-4"], [1, "form-group", "mb-3"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "multiple", "", "hidden", "", 1, "form-control", 3, "change"], ["inputFile", ""], ["class", "text-danger", 4, "ngIf"], ["class", "d-flex justify-content-end mt-5", 4, "ngIf"], ["formControlName", "currencyId", "placeholder", "Currency", "bindLabel", "text", "bindValue", "value", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "change"], [1, "text-danger"], [1, "form-check", "d-flex", "align-items-center", "gap-2"], ["value", "cheque", "id", "cheque1", "type", "radio", 1, "form-check-input", "p-0", "m-0", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["for", "cheque1", 1, "p-0", "lh-1"], ["value", "pdc", "id", "pdc", "type", "radio", 1, "form-check-input", "p-0", "m-0", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["for", "pdc", 1, "p-0", "lh-1"], ["type", "text", "formControlName", "amount", "appDecimalNumber", "", 1, "form-control"], [1, "d-flex", "gap-3", "file-item", "align-items-center", "justify-content-between"], [1, "p-0"], [1, "d-flex", "gap-2"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"], [1, "d-flex", "justify-content-end", "mt-5"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", "routerLink", "/unsettled-session", 1, "btn", "btn-cancel"], ["type", "button", "class", "btn btn-save", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "col-12", "my-5"], [1, "input-group", "search-box", "h-100"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search for a cheque", 1, "form-control", 3, "ngModel", "input", "ngModelChange"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], ["type", "number", "placeholder", "Session ID", 1, "form-control", 3, "ngModel", "input", "ngModelChange"], [1, "col-sm-6", "d-flex", "align-items-center", "gap-4", "justify-content-end"], [1, "mdtext", "amountButton"], [1, "col-12", "my-3", "d-flex", "justify-content-end"], [1, "font-16", "fw-500", "gray-500"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], ["type", "checkbox", 1, "inputColor", 3, "ngModel", "id", "change", "ngModelChange"], [1, "not-found"], [1, "col-md-6"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"], ["type", "button", "class", "btn btn-save", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-save", 3, "disabled", "click"]],
  template: function CreateDepositComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Select Deposit Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CreateDepositComponent_Template_input_change_6_listener($event) {
        return ctx.depositType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 7)(10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CreateDepositComponent_Template_input_change_10_listener($event) {
        return ctx.depositType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Deposit Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "form", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, CreateDepositComponent_ng_container_23_Template, 3, 2, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, CreateDepositComponent_ng_template_24_Template, 9, 6, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "div", 20)(30, "div", 22)(31, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Select Bank Account*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "ng-select", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, CreateDepositComponent_ng_template_34_Template, 2, 1, "ng-template", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, CreateDepositComponent_ng_container_35_Template, 2, 1, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](36, CreateDepositComponent_div_36_Template, 5, 1, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "div", 27)(38, "div", 22)(39, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Select Deposit Date*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](41, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](42, CreateDepositComponent_ng_container_42_Template, 2, 1, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 22)(44, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "Select Deposit Time*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](46, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, CreateDepositComponent_ng_container_47_Template, 2, 1, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 30)(49, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50, "Upload Deposit Slip Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "div", 31)(52, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("files", function CreateDepositComponent_Template_div_files_52_listener($event) {
        return ctx.filesDropped($event);
      })("enter", function CreateDepositComponent_Template_div_enter_52_listener() {
        return ctx.enter = !ctx.enter;
      })("leave", function CreateDepositComponent_Template_div_leave_52_listener() {
        return ctx.enter = !ctx.enter;
      })("click", function CreateDepositComponent_Template_div_click_52_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r81);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](60);
        return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](_r8.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](54, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "Select OR Drag & drop files");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, "Supported formates: JPEG, PNG, PDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "input", 35, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function CreateDepositComponent_Template_input_change_59_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](61, CreateDepositComponent_ng_container_61_Template, 7, 1, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, CreateDepositComponent_ng_container_62_Template, 2, 1, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](63, CreateDepositComponent_small_63_Template, 2, 1, "small", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](64, CreateDepositComponent_div_64_Template, 6, 2, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, CreateDepositComponent_ng_container_65_Template, 30, 13, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](66, CreateDepositComponent_div_66_Template, 6, 2, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("checked", !ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.isCash && "Select Currency*" || "Select Cheque Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isCash)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("items", ctx.bankAccounts);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.f["accountId"] == null ? null : ctx.f["accountId"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("max", ctx.getToday());
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.f["depositDate"] == null ? null : ctx.f["depositDate"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.f["time"] == null ? null : ctx.f["time"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.f["attachment"] == null ? null : ctx.f["attachment"].value);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.f["attachment"] == null ? null : ctx.f["attachment"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.invalidFileType);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isCash);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isCash);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgOptionTemplateDirective, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_10__.DecimalNumberDirective, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_11__.DragAndDropDirective, _shared_components_saving_loader_saving_loader_component__WEBPACK_IMPORTED_MODULE_12__.SavingLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: [".border-deposit-type[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: 5px;\n}\n.border-deposit-type[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.border-deposit-type[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #dadada;\n}\n.border-deposit-type[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n}\n.border-deposit-type[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  margin-left: 5px;\n}\n\n.inputColor[_ngcontent-%COMP%] {\n  accent-color: #dc3545;\n  height: 15px;\n  width: 15px;\n}\n\n.amountButton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 34px 14px 35px;\n  height: 48px;\n  background: #f8f8f8;\n  border: 0.5px solid #e9e9e9;\n  border-radius: 10px;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\nform[_ngcontent-%COMP%]   span.text-danger[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding-top: 7px;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #dadada;\n  background: white;\n}\n.file-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: green;\n  font-weight: 600;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.btn-upload[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.card-Box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 24px 34px;\n}\n\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headingText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  \n  color: #1b212d;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  \n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  \n  color: #858585;\n}\n\n.linkText[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #4e9aff;\n}\n\n.linkText2[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #4e9aff;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.headButtonText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9e9e9;\n  margin: 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi9jcmVhdGUtZGVwb3NpdC9jcmVhdGUtZGVwb3NpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFGO0FBRUU7RUFDRSxVQUFBO0FBQUo7QUFFSTtFQUNFLCtCQUFBO0FBQU47QUFHSTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRE47QUFHTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLRTtFQUNFLG9CQUFBO0FBRko7QUFLRTtFQUNFLFlBQUE7QUFISjtBQU1FO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUpOOztBQVFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUxGO0FBT0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFDRSwyQkFBQTtFQUNBLGdEQUFBO0VBQ0Esd0RBQUE7RUFDQSxxREFBQTtBQUxGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtBQUpGOztBQU9BO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSkY7QUFNRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUpKO0FBT0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFQRjs7QUFVQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFWRjs7QUFhQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFWRjs7QUFhQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBVkY7O0FBYUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVZGOztBQWFBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtBQVZGIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLmJvcmRlci1kZXBvc2l0LXR5cGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAuZm9ybS1jaGVjayB7XG4gICAgcGFkZGluZzogMDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RhZGFkYTtcbiAgICB9XG5cbiAgICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgKyBsYWJlbCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uaW5wdXRDb2xvciB7XG4gIGFjY2VudC1jb2xvcjogI2RjMzU0NTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbn1cbi5hbW91bnRCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAzNHB4IDE0cHggMzVweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5mb3JtIHtcbiAgbGFiZWwge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICB9XG5cbiAgc3Bhbi50ZXh0LWRhbmdlciB7XG4gICAgICBmb250LXdlaWdodDo1MDA7XG4gICAgICBwYWRkaW5nLXRvcDo3cHg7XG4gIH1cbn1cblxuLmZpbGUtaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG4uY2FyZC10YWJsZSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2Y0ZjRmNDtcbiAgYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnBsYXktbGVmdCB7XG4gIGNvbG9yOiAjZWNlYWVhO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnBsYXktcmlnaHQge1xuICBjb2xvcjogI2VjZWFlYTtcbn1cblxuLmNhcmQtdXBsb2FkIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM5MzlhYTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMwZjBmMGY7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzY3Njc2NztcbiAgfVxufVxuXG4uYnRuLXVwbG9hZCB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDM1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5jYXJkLUJveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjRweCAzNHB4O1xufVxuXG4uZmxleC1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGluZ1RleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIC8qIFRleHQgQ29sb3IvVGV4dCAxICovXG5cbiAgY29sb3I6ICMxYjIxMmQ7XG59XG5cbi5tZHRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogVGV4dCBDb2xvci9UZXh0IDEgKi9cblxuICBjb2xvcjogIzFiMjEyZDtcbn1cblxuLnNtVGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvKiBUZXh0IENvbG9yL1RleHQgMSAqL1xuXG4gIGNvbG9yOiAjODU4NTg1O1xufVxuXG4ubGlua1RleHQge1xuICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM0ZTlhZmY7XG59XG5cbi5saW5rVGV4dDIge1xuICBmb250LWZhbWlseTogS3VtYmggU2FucztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM0ZTlhZmY7XG59XG5cbi5oZWFkQnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDM0LjJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uaGVhZEJ1dHRvblRleHQge1xuICBmb250LWZhbWlseTogS3VtYmggU2FucztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNlcGFyYXRvciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4649:
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/sessions/sessions.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionsComponent": () => (/* binding */ SessionsComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/enum */ 75706);
/* harmony import */ var _components_register_currencies_register_currencies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/register-currencies/register-currencies.component */ 51460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/unsettled-session.service */ 20320);
/* harmony import */ var _main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../main-fund/register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../collect/services/collect.service */ 43346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 10082);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _components_settled_session_list_settled_session_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/settled-session-list/settled-session-list.component */ 1054);



















const _c0 = ["success"];
function SessionsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 8)(5, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", item_r9 == null ? null : item_r9.accountType == null ? null : item_r9.accountType.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.accountType == null ? null : item_r9.accountType.translation[0] == null ? null : item_r9.accountType.translation[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](9, 3, item_r9 == null ? null : item_r9.remainingAmount, "2.3-3"), " ");
  }
}
function SessionsComponent_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SessionsComponent_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r10.resetRegisterNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    sessionId: a0
  };
};
function SessionsComponent_div_51_tr_33_a_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Add Bank Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](1, _c1, item_r15 == null ? null : item_r15.registerSessionId));
  }
}
const _c2 = function (a0, a1) {
  return {
    "background-color": a0,
    color: a1
  };
};
function SessionsComponent_div_51_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td")(4, "div", 8)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td")(15, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SessionsComponent_div_51_tr_33_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r18.viewRegisterCurrencies(item_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "View Currencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "td")(18, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "td")(21, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, SessionsComponent_div_51_tr_33_a_22_Template, 2, 3, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r15 == null ? null : item_r15.registerSessionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 10, item_r15 == null ? null : item_r15.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](10, 12, item_r15 == null ? null : item_r15.createdAt, "shortTime"), "", (item_r15 == null ? null : item_r15.closedAt) && " - ", "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 15, item_r15 == null ? null : item_r15.closedAt, "shortTime"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r15 == null ? null : item_r15.createdBy == null ? null : item_r15.createdBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](18, _c2, item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.lookupBGColor, item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.translations[0] == null ? null : item_r15.statusObj.translations[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.cashDepositTypeId !== 8001);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("routerLink", "/unsettled-session/session/", item_r15 == null ? null : item_r15.registerSessionId, "");
  }
}
function SessionsComponent_div_51_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SessionsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 2)(1, "div", 42)(2, "div", 43)(3, "table", 44)(4, "thead")(5, "tr")(6, "th", 45)(7, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SessionsComponent_div_51_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r20.sortBySession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Session No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 47)(10, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th", 45)(12, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SessionsComponent_div_51_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r22.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Session Date Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 47)(15, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "th", 45)(17, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SessionsComponent_div_51_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r23.sortByEmployee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, " Employee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "i", 47)(20, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "th", 45)(22, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Register Currencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "th", 45)(25, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SessionsComponent_div_51_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r24.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "i", 47)(28, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "th", 45)(30, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, SessionsComponent_div_51_tr_33_Template, 24, 21, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, SessionsComponent_div_51_div_34_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionList_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (sessionList_r12 == null ? null : sessionList_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r3.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r3.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (sessionList_r12 == null ? null : sessionList_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r3.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r3.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (sessionList_r12 == null ? null : sessionList_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r3.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r3.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (sessionList_r12 == null ? null : sessionList_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (sessionList_r12 == null ? null : sessionList_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r3.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r3.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (sessionList_r12 == null ? null : sessionList_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", sessionList_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (sessionList_r12 == null ? null : sessionList_r12.length) == 0);
  }
}
function SessionsComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SessionsComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 59)(2, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 59)(11, "ngb-pagination", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function SessionsComponent_ng_container_55_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r25.pageNo = $event);
    })("pageChange", function SessionsComponent_ng_container_55_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r27.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r6.pageNo * 6 - 5, " - ", (ctx_r6.sessionList == null ? null : ctx_r6.sessionList.length) == 6 ? ctx_r6.pageNo * 6 : ctx_r6.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r6.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionSize", ctx_r6.totalRecords)("page", ctx_r6.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionsComponent_settled_session_list_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "settled-session-list");
  }
}
class SessionsComponent {
  constructor(_unsettleSession, _registerSettlementService, _commonService, _sharedService, _headerService, _collectService, _modalService, fb, datepipe) {
    this._unsettleSession = _unsettleSession;
    this._registerSettlementService = _registerSettlementService;
    this._commonService = _commonService;
    this._sharedService = _sharedService;
    this._headerService = _headerService;
    this._collectService = _collectService;
    this._modalService = _modalService;
    this.fb = fb;
    this.datepipe = datepipe;
    this.searchText = '';
    this.filterParams = undefined;
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 1;
    this.pageSize = 6;
    this.pages = [];
    this.sessionList = [];
    this.branchesList = [];
    this.employeesList = [];
    this.statusList = [];
    this.status = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.Status;
    this.message = '';
    this.cashDepositTypeId = 0;
  }
  initFilterForm() {
    this.sessionFilterForm = this.fb.group({
      sessionId: [''],
      createdBy: [null],
      status: [null]
    });
  }
  ngOnInit() {
    this._headerService.setTitle('Sessions Summary');
    this.getAllSessions(this.filterParams);
    this.getEmployees();
    this.getStatusList(16);
    this.initFilterForm();
    this.getRegisterUnsettledSessionsAmount();
    this.getRegisterDetails();
    this.sessionFilterForm.valueChanges.subscribe(value => {
      let formValues;
      formValues = {
        ...value
      };
      let isEmpty = true;
      for (let obj in value) {
        if (value[obj]) {
          this.pageNo = 1;
          isEmpty = false;
        }
        if (formValues[obj] == null) {
          formValues[obj] = '';
        }
      }
      this.filterParams = '?' + new URLSearchParams(formValues).toString();
      if (isEmpty) {
        this.filterParams = undefined;
        this.pageNo = 1;
      }
      this.getAllSessions(this.filterParams);
    });
  }
  handleTabSelection(session) {
    //if (session == 'settled')
    //  this._headerService.setTitle('Settled Session')
    //else
    //  this._headerService.setTitle('Unsettled Session')
  }
  getRegisterDetails() {
    return this._collectService.GetRegisterDetails(this._sharedService.getRegister.registerObj?.id).subscribe(response => {
      if (response) {
        this.cashDepositTypeId = response?.['data']['cashDepositTypeId'];
      }
    });
  }
  resetRegisterNo() {
    this.sessionFilterForm.controls['sessionId'].setValue('');
  }
  viewRegisterCurrencies(item) {
    const ref = this._modalService.open(_components_register_currencies_register_currencies_component__WEBPACK_IMPORTED_MODULE_2__.RegisterCurrenciesComponent, {
      size: 'md'
    });
    ref.componentInstance.data = {
      registerCurrencies: item?.registerCurrencies
    };
  }
  getAllSessions(filterParams = this.filterParams) {
    //show only sessions with statusId = 16002,16004,16005 OnInit;
    let defaultParams = `status=16002,16004,16005&register=${this._sharedService.getRegister?.registerObj?.id}&pageNo=${this.pageNo - 1}&sort=${this.sort}&pageSize=${this.pageSize}`;
    this._unsettleSession.getRegisterUnsettledSessions(filterParams && filterParams + `&${defaultParams}` || `?${defaultParams}`).subscribe(response => {
      this.sessionList = response?.data;
      this.totalRecords = response?.totalRecordCount;
      this.pagin = Math.ceil(this.totalRecords / 6);
      this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
    });
  }
  getRegisterUnsettledSessionsAmount() {
    this._unsettleSession.getRegisterUnsettledSessionsAmount(this._sharedService.getRegister?.registerObj?.id).subscribe(response => {
      this.unsettledSessionsAmount = response?.data;
    });
  }
  getEmployees() {
    this._unsettleSession.getUserCashier().subscribe(response => {
      this.employeesList = response.data;
    });
  }
  getStatusList(id) {
    this._registerSettlementService.getStatusList(id).subscribe(response => {
      this.statusList = response.data.filter(x => x.id == 16002 || x.id == 16004 || x.id == 16005).map(x => {
        return {
          id: x.id,
          description: x.description
        };
      });
      console.log(this.statusList);
    });
  }
  // Sorting Functions
  sortBySession() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getAllSessions();
  }
  sortByDate() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getAllSessions();
  }
  sortBySessionTime() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getAllSessions();
  }
  sortByEmployee() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getAllSessions();
  }
  sortByStatus() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getAllSessions();
  }
  /**
   * pagination
   * @param page page no
   */
  pageChange(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getAllSessions();
  }
}
SessionsComponent.ɵfac = function SessionsComponent_Factory(t) {
  return new (t || SessionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_3__.UnsettledSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_4__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_7__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_8__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe));
};
SessionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: SessionsComponent,
  selectors: [["app-sessions"]],
  viewQuery: function SessionsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.success = _t.first);
    }
  },
  decls: 59,
  vars: 13,
  consts: [[1, "page-layout"], [1, "row"], [1, "col-md-12"], [1, "card-collect", "card-with-details"], [1, "d-flex"], [1, "card-inner-heading"], [1, "col-12", "col-sm-10", "col-lg-7", "col-xxl-5"], [1, "d-flex", "mt-4", "flex-wrap", "gap-5", "justify-content-between"], [1, "d-flex", "flex-column"], [1, "dark-gray"], [1, "light-gray"], ["type", "pills"], ["heading", "Unsettled Session", 3, "selectTab"], ["tabA", "tab"], [1, "heading-text", "mb-3"], [1, "main-fund-container", "gap-4", "mb-4"], ["class", "main-fund-wrapper", 4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "col-12", "col-sm-6", "col-lg-4"], [1, "input-group", "search-box", "h-100"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "formControlName", "sessionId", "placeholder", "Session Id", 1, "form-control", 3, "keypress"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], [1, "col-12", "col-sm-6", "col-lg-3"], ["formControlName", "createdBy", "placeholder", "Employee", "bindLabel", "fullName", "bindValue", "userId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], ["formControlName", "status", "placeholder", "Status", "bindLabel", "description", "bindValue", "id", 1, "flex-grow-1", 3, "items"], [1, "d-flex", "justify-content-end"], [1, "total-records"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], ["heading", "Settled Sessions", 3, "selectTab"], ["tabB", "tab"], [1, "main-fund-wrapper"], [1, "main-fund-div"], [1, "currency-symbol"], ["alt", "", 3, "src"], [1, "fw-700", "font-18"], [1, "fw-700", "font-20", "gray-500", "m-0"], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "card-table", "mt-2", "register-sessions-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], ["type", "button", 1, "redBtn", 3, "click"], [1, "status-tag", "w-auto", "text-center", 3, "ngStyle"], [1, "d-flex", "align-items-center", "gap-2"], ["routerLink", "/unsettled-session/create-deposit", "class", "d-inline-block redBtn me-2", 3, "queryParams", 4, "ngIf"], [1, "fas", "fa-eye", "font-20", "light-gray", "cursor-pointer", 3, "routerLink"], ["routerLink", "/unsettled-session/create-deposit", 1, "d-inline-block", "redBtn", "me-2", 3, "queryParams"], [1, "not-found"], [1, "col-md-6"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function SessionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Register Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 1)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 8)(17, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Register Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 8)(22, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Register No");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "tabset", 11)(27, "tab", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectTab", function SessionsComponent_Template_tab_selectTab_27_listener() {
        return ctx.handleTabSelection("unsettled");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "Unsettled Sessions Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, SessionsComponent_div_32_Template, 10, 6, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "Unsettled Sessions List");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "form", 17)(36, "div", 1)(37, "div", 18)(38, "div", 19)(39, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keypress", function SessionsComponent_Template_input_keypress_41_listener($event) {
        return ctx._commonService.numberOnly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, SessionsComponent_button_42_Template, 2, 0, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](44, "ng-select", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](46, "ng-select", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "div", 27)(48, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](51, SessionsComponent_div_51_Template, 35, 24, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, SessionsComponent_ng_template_53_Template, 2, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, SessionsComponent_ng_container_55_Template, 12, 9, "ng-container", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "tab", 32, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectTab", function SessionsComponent_Template_tab_selectTab_56_listener() {
        return ctx.handleTabSelection("settled");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](58, SessionsComponent_settled_session_list_58_Template, 1, 0, "settled-session-list", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](54);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx._sharedService.getRegister == null ? null : ctx._sharedService.getRegister.registerObj == null ? null : ctx._sharedService.getRegister.registerObj.registeBranch == null ? null : ctx._sharedService.getRegister.registerObj.registeBranch.branchName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx._sharedService.getRegister == null ? null : ctx._sharedService.getRegister.registerObj == null ? null : ctx._sharedService.getRegister.registerObj.registersName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx._sharedService.getRegister == null ? null : ctx._sharedService.getRegister.registerObj == null ? null : ctx._sharedService.getRegister.registerObj.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.unsettledSessionsAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.sessionFilterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.sessionFilterForm.controls["sessionId"].value !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.employeesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.statusList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.sessionList)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r7.active);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_17__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_17__.TabsetComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__.NotFoundComponent, _components_settled_session_list_settled_session_list_component__WEBPACK_IMPORTED_MODULE_11__.SettledSessionListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
  styles: [".heading-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.main-fund-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 1px solid #E9E9E9;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px 15px;\n  flex: 0 1 240px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n[_nghost-%COMP%]     .nav-pills {\n  margin-bottom: 30px;\n}\n[_nghost-%COMP%]     .nav-pills .nav-link {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1B212D;\n  border-radius: 0;\n}\n[_nghost-%COMP%]     .nav-pills .nav-link.active {\n  background: none;\n  color: #1B212D;\n  border-bottom: 2px solid var(--primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi9zZXNzaW9ucy9zZXNzaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNOO0FBQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBTUk7RUFDRSxtQkFBQTtBQUhOO0FBS007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQUtRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7QUFIViIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluLWZ1bmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC5tYWluLWZ1bmQtd3JhcHBlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOUU5RTk7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBmbGV4OiAwIDEgMjQwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubWFpbi1mdW5kLWRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNXB4O1xuXG4gICAgICAuY3VycmVuY3ktc3ltYm9sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG46aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLm5hdi1waWxscyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICAubmF2LWxpbmsge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjMUIyMTJEO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjMUIyMTJEO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 35933:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/unsettled-session-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsettledSessionRoutingModule": () => (/* binding */ UnsettledSessionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_bank_deposits_add_bank_deposits_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-bank-deposits/add-bank-deposits.component */ 37457);
/* harmony import */ var _cheque_deposit_cheque_deposit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cheque-deposit/cheque-deposit.component */ 41913);
/* harmony import */ var _create_deposit_create_deposit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-deposit/create-deposit.component */ 81404);
/* harmony import */ var _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessions/sessions.component */ 4649);
/* harmony import */ var _view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-deposited-cheques/view-deposited-cheques.component */ 35344);
/* harmony import */ var _view_session_details_view_session_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-session-details/view-session-details.component */ 29638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [{
  path: '',
  component: _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_3__.SessionsComponent
}, {
  path: 'add-bank-deposit',
  component: _add_bank_deposits_add_bank_deposits_component__WEBPACK_IMPORTED_MODULE_0__.AddBankDepositsComponent
}, {
  path: 'create-deposit',
  component: _create_deposit_create_deposit_component__WEBPACK_IMPORTED_MODULE_2__.CreateDepositComponent
}, {
  path: 'cheque-deposit',
  component: _cheque_deposit_cheque_deposit_component__WEBPACK_IMPORTED_MODULE_1__.ChequeDepositComponent
}, {
  path: 'deposited-cheques/:depositId',
  component: _view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_4__.ViewDepositedChequesComponent
}, {
  path: 'session/:sessionId',
  component: _view_session_details_view_session_details_component__WEBPACK_IMPORTED_MODULE_5__.ViewSessionDetailsComponent
}];
class UnsettledSessionRoutingModule {}
UnsettledSessionRoutingModule.ɵfac = function UnsettledSessionRoutingModule_Factory(t) {
  return new (t || UnsettledSessionRoutingModule)();
};
UnsettledSessionRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: UnsettledSessionRoutingModule
});
UnsettledSessionRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UnsettledSessionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 90808:
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/unsettled-session.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsettledSessionModule": () => (/* binding */ UnsettledSessionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _unsettled_session_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsettled-session-routing.module */ 35933);
/* harmony import */ var _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessions/sessions.component */ 4649);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _add_bank_deposits_add_bank_deposits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-bank-deposits/add-bank-deposits.component */ 37457);
/* harmony import */ var _bank_deposit_modal_bank_deposit_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bank-deposit-modal/bank-deposit-modal.component */ 32589);
/* harmony import */ var _cheque_deposit_cheque_deposit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cheque-deposit/cheque-deposit.component */ 41913);
/* harmony import */ var _view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-deposited-cheques/view-deposited-cheques.component */ 35344);
/* harmony import */ var _view_session_details_view_session_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-session-details/view-session-details.component */ 29638);
/* harmony import */ var _view_session_details_components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-session-details/components/session-card-payments/session-card-payments.component */ 63186);
/* harmony import */ var _view_session_details_components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-session-details/components/session-cheques/session-cheques.component */ 1806);
/* harmony import */ var _view_session_details_components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-session-details/components/session-bank-pledges/session-bank-pledges.component */ 70028);
/* harmony import */ var _view_session_details_components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-session-details/components/session-bank-transfer/session-bank-transfer.component */ 47171);
/* harmony import */ var _create_deposit_create_deposit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-deposit/create-deposit.component */ 81404);
/* harmony import */ var _components_settled_session_list_settled_session_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/settled-session-list/settled-session-list.component */ 1054);
/* harmony import */ var _components_register_currencies_register_currencies_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register-currencies/register-currencies.component */ 51460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);

















class UnsettledSessionModule {}
UnsettledSessionModule.ɵfac = function UnsettledSessionModule_Factory(t) {
  return new (t || UnsettledSessionModule)();
};
UnsettledSessionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: UnsettledSessionModule
});
UnsettledSessionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _unsettled_session_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnsettledSessionRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](UnsettledSessionModule, {
    declarations: [_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_1__.SessionsComponent, _add_bank_deposits_add_bank_deposits_component__WEBPACK_IMPORTED_MODULE_3__.AddBankDepositsComponent, _bank_deposit_modal_bank_deposit_modal_component__WEBPACK_IMPORTED_MODULE_4__.BankDepositModalComponent, _cheque_deposit_cheque_deposit_component__WEBPACK_IMPORTED_MODULE_5__.ChequeDepositComponent, _view_deposited_cheques_view_deposited_cheques_component__WEBPACK_IMPORTED_MODULE_6__.ViewDepositedChequesComponent, _view_session_details_view_session_details_component__WEBPACK_IMPORTED_MODULE_7__.ViewSessionDetailsComponent, _view_session_details_components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_8__.SessionCardPaymentsComponent, _view_session_details_components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_9__.SessionChequesComponent, _view_session_details_components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_10__.SessionBankPledgesComponent, _view_session_details_components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_11__.SessionBankTransferComponent, _create_deposit_create_deposit_component__WEBPACK_IMPORTED_MODULE_12__.CreateDepositComponent, _components_settled_session_list_settled_session_list_component__WEBPACK_IMPORTED_MODULE_13__.SettledSessionListComponent, _components_register_currencies_register_currencies_component__WEBPACK_IMPORTED_MODULE_14__.RegisterCurrenciesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _unsettled_session_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnsettledSessionRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 35344:
/*!************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/view-deposited-cheques/view-deposited-cheques.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDepositedChequesComponent": () => (/* binding */ ViewDepositedChequesComponent)
/* harmony export */ });
/* harmony import */ var _main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main-fund/bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../main-fund/allocation/allocation/allocation-services/allocation.service */ 51445);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.cheques[0] == null ? null : item_r9.cheques[0].chequeCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.cheques[0] == null ? null : item_r9.cheques[0].chequeNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.cheques[0] == null ? null : item_r9.cheques[0].bank == null ? null : item_r9.cheques[0].bank.translation[0] == null ? null : item_r9.cheques[0].bank.translation[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 5, item_r9 == null ? null : item_r9.cheques[0] == null ? null : item_r9.cheques[0].chequeDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 8, item_r9 == null ? null : item_r9.cheques[0] == null ? null : item_r9.cheques[0].chequeCollectionJod, "2.3-3"), " JD");
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
    this._headerService.setTitle('Unsettled Sessions > Deposited Cheque Details View');
    this._activeRoute.params.subscribe(params => {
      this.depositId = params['depositId'];
      this.getChequeDepositDetails();
    });
  }
  getChequeDepositDetails() {
    let params = `?DepositeId=${this.depositId}&Sort=${this.sort}&PageNo=${this.pageNo}&PageSize=6`;
    this._allocationService.getRegisterDirectChequeDepositDetails(params).subscribe(response => {
      this.depositedChequeList = response['data'];
      this.totalRecords = response?.info?.totalRecordsCount;
      console.log(response);
      this._allocationService.getRegisterDirectDepositsNew(this.depositId, 'cheque').subscribe(res => {
        console.log(res);
        this.depositDetails = res['data'][0];
        if (this.depositDetails?.filePath) {
          this.fileName = this.depositDetails.filePath.split('/').pop();
        }
      });
    });
  }
  viewFile() {
    const modalRef = this._modalService.open(_main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewUploadedFileComponent, {
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
  return new (t || ViewDepositedChequesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_main_fund_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_3__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal));
};
ViewDepositedChequesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ViewDepositedChequesComponent,
  selectors: [["app-view-deposited-cheques"]],
  decls: 64,
  vars: 23,
  consts: [[1, "d-flex", "flex-row", "my-3", "gap-4"], [1, "dark-gray", "fw-700"], [1, "light-gray"], [1, "card-Box"], [1, "separator", "my-4"], [1, "d-flex", "flex-wrap"], [1, "d-flex", "flex-column", "flex-basis"], [1, "dark-gray", "fw-600"], ["class", "d-flex flex-column flex-basis", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-between", "align-items-center", "mb-3", "mt-4"], [1, "font-16", "fw-500", "gray-500"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "file-item", "d-flex", "justify-content-between", "align-items-center", "py-2", "px-3"], [1, "fw-600", "green-clr"], [1, "d-flex", "gap-2", "align-items-center"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["target", "_blank", "download", "", 3, "href"], ["height", "20", "src", "assets/images/Download.png", 1, "cursor-pointer"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "not-found"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No of Cheques ", ctx.totalRecords || (ctx.depositedChequeList == null ? null : ctx.depositedChequeList.length), "");
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
  styles: [".applyMargin[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.card-Box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 24px 34px;\n}\n\n.flex-basis[_ngcontent-%COMP%] {\n  flex: 0 0 20%;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9e9e9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi92aWV3LWRlcG9zaXRlZC1jaGVxdWVzL3ZpZXctZGVwb3NpdGVkLWNoZXF1ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxnREFBQTtFQUNBLHdEQUFBO0VBQ0EscURBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGdDQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbHlNYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG5cbi5jYXJkLXRhYmxlIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZjRmNGY0O1xuICBib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5wbGF5LWxlZnQge1xuICBjb2xvcjogI2VjZWFlYTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wbGF5LXJpZ2h0IHtcbiAgY29sb3I6ICNlY2VhZWE7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmNhcmQtQm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwcHggMTVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyNHB4IDM0cHg7XG59XG5cbi5mbGV4LWJhc2lzIHtcbiAgZmxleDogMCAwIDIwJTtcbn1cblxuLmZpbGUtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZWI5M2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNlcGFyYXRvciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70028:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/view-session-details/components/session-bank-pledges/session-bank-pledges.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionBankPledgesComponent": () => (/* binding */ SessionBankPledgesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../main-fund/bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../main-fund/register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../close-register/services/close-register.service */ 15070);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../collect/services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/not-found/not-found.component */ 59442);













const _c0 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1
  };
};
function SessionBankPledgesComponent_div_16_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td")(17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td")(20, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_tr_41_Template_i_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.handleBankTransferDetails(item_r9, _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9 == null ? null : item_r9.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.translations[0] == null ? null : item_r9.statusObj.translations[0].lookupName) == "Settled" && (item_r9 == null ? null : item_r9.settleActionType) == "edit" && (item_r9 == null ? null : item_r9.settleBankPledgeNumber) || (item_r9 == null ? null : item_r9.bankPledgeNumber), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 8, item_r9 == null ? null : item_r9.pledgeAmountJod, "2.3-3") + " JOD", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.currency) && (item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.translations[0] == null ? null : item_r9.statusObj.translations[0].lookupName) == "Settled" && (item_r9 == null ? null : item_r9.settleActionType) == "edit" && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 11, item_r9 == null ? null : item_r9.settleBankPledgeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 14, item_r9 == null ? null : item_r9.bankPledgeDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.translations[0] == null ? null : item_r9.statusObj.translations[0].lookupName) == "Unsettled" && (item_r9 == null ? null : item_r9.performedAction) == "edit" && (item_r9 == null ? null : item_r9.settleBank[0] == null ? null : item_r9.settleBank[0].lookupName) || (item_r9 == null ? null : item_r9.bank[0] == null ? null : item_r9.bank[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](17, _c0, item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.lookupBGColor, item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.translations[0] == null ? null : item_r9.statusObj.translations[0].lookupName, " ");
  }
}
function SessionBankPledgesComponent_div_16_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SessionBankPledgesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 15)(2, "table", 16)(3, "thead")(4, "tr", 17)(5, "th")(6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 19)(9, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th")(11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.sortByPledgeNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Bank Pledge Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 19)(14, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th")(16, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Pledge Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 19)(19, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th", 21)(21, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "th")(24, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Bank Pledge Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 19)(27, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th")(29, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "i", 19)(32, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "th")(34, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "i", 19)(37, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, SessionBankPledgesComponent_div_16_tr_41_Template, 21, 20, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, SessionBankPledgesComponent_div_16_div_42_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sessionData_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", sessionData_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
  }
}
function SessionBankPledgesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SessionBankPledgesComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function SessionBankPledgesComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.pageNo = $event);
    })("pageChange", function SessionBankPledgesComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.sessionData == null ? null : ctx_r3.sessionData.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordsCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordsCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", ctx_r3.totalRecordsCount)("page", ctx_r3.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionBankPledgesComponent_ng_template_21_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 41)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 42)(4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 44)(7, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_ng_template_21_div_39_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.viewFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r23.fileDetails == null ? null : ctx_r23.fileDetails.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx_r23.fileDetails == null ? null : ctx_r23.fileDetails.file, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function SessionBankPledgesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Bank Pledge Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Customer Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 33)(9, "div", 34)(10, "div", 35)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Paid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 35)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 35)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Bank Pledge Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 34)(27, "div", 35)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Bank Pledge Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 35)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, SessionBankPledgesComponent_ng_template_21_div_39_Template, 10, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 38)(41, "div", 39)(42, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_ng_template_21_Template_button_click_42_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const modal_r22 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r22.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.details == null ? null : ctx_r5.details.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 7, ctx_r5.details == null ? null : ctx_r5.details.pledgeAmountJod, "2.3-3") + " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.currency) && (ctx_r5.details == null ? null : ctx_r5.details.currency[0] == null ? null : ctx_r5.details.currency[0].lookupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.settleBankPledgeNumber) || (ctx_r5.details == null ? null : ctx_r5.details.bankPledgeNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](32, 10, ctx_r5.details == null ? null : ctx_r5.details.settleBankPledgeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](33, 13, ctx_r5.details == null ? null : ctx_r5.details.bankPledgeDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.settleBank[0] == null ? null : ctx_r5.details.settleBank[0].lookupName) || (ctx_r5.details == null ? null : ctx_r5.details.bank[0] == null ? null : ctx_r5.details.bank[0].lookupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.fileDetails == null ? null : ctx_r5.fileDetails.fileName);
  }
}
class SessionBankPledgesComponent {
  constructor(_registerSettlementService, activeRoute, closeRegisterService, sharedService, _modalService, fb, _collectService) {
    this._registerSettlementService = _registerSettlementService;
    this.activeRoute = activeRoute;
    this.closeRegisterService = closeRegisterService;
    this.sharedService = sharedService;
    this._modalService = _modalService;
    this.fb = fb;
    this._collectService = _collectService;
    this.banks = [];
    this.payerName = '';
    this.sort = 1;
    this.pageNo = 1;
    this.searchText = '';
    this.fileDetails = {
      fileName: '',
      file: ''
    };
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.sessionId = params['sessionId'];
      this.getSessionBankPledge();
    });
  }
  handleBankTransferDetails(item, content) {
    this.details = item;
    this.fileDetails.file = item?.pledgeAttachment;
    this.fileDetails.fileName = this.getFilName(item?.pledgeAttachment);
    this._modalService.open(content, {
      size: 'lg',
      centered: true
    });
  }
  getFilName(name) {
    if (name) return name?.split('/').pop();
  }
  viewFile() {
    const modalRef = this._modalService.open(_main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewUploadedFileComponent, {
      size: 'md'
    });
    modalRef.componentInstance.file = this.fileDetails?.file;
  }
  getSessionBankPledge() {
    let obj = `?sessionId=${this.sessionId}&search=${this.searchText}&pageNo=${this.pageNo - 1}&pageSize=6&sort=${this.sort || 1}`;
    return this._registerSettlementService.getSessionBankPledge(obj).subscribe(response => {
      if (response) {
        this.sessionData = response.data;
        console.log(this.sessionData);
        this.totalAllRecordsCount = response?.totalAllRecordsCount;
        this.totalRecordsCount = response?.totalRecordCount;
      }
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.getSessionBankPledge();
    window.scroll(0, 0);
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 1) {
      this.searchText = text;
      this.pageNo = 1;
      this.getSessionBankPledge();
    }
    if (text.length == 0) {
      this.pageNo = 1;
      this.getSessionBankPledge();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.getSessionBankPledge();
  }
  //SORTING
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getSessionBankPledge();
  }
  sortByPledgeNumber() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getSessionBankPledge();
  }
  sortByAmount() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getSessionBankPledge();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getSessionBankPledge();
  }
  sortByBank() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getSessionBankPledge();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.getSessionBankPledge();
  }
}
SessionBankPledgesComponent.ɵfac = function SessionBankPledgesComponent_Factory(t) {
  return new (t || SessionBankPledgesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_2__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_4__.CollectService));
};
SessionBankPledgesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SessionBankPledgesComponent,
  selectors: [["app-session-bank-pledges"]],
  inputs: {
    isSettle: "isSettle"
  },
  outputs: {
    loadMainData: "loadMainData"
  },
  decls: 23,
  vars: 6,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], ["sessionBankPledgeDetails", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], ["scope", "col"], [1, "btn", 3, "disabled"], [4, "ngFor", "ngForOf"], [1, "status-tag", 3, "ngStyle"], [1, "fa-regular", "fa-eye", "cursor-pointer", 3, "click"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "pb-2", "fw-600"], [1, "light-gray"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-4"], [1, "pb-2", "fw-600", "light-gray"], ["class", "col-6", 4, "ngIf"], [1, "modal-footer", "p-4"], [1, "btns-group"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "col-6"], [1, "file-item", "d-flex", "justify-content-between", "align-items-center", "py-2", "px-3"], [1, "fw-600", "green-clr", "mb-0"], [1, "d-flex", "gap-2", "align-items-center"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["target", "_blank", "download", "", 3, "href"], ["height", "20", "src", "assets/images/Download.png", 1, "cursor-pointer"]],
  template: function SessionBankPledgesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SessionBankPledgesComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function SessionBankPledgesComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankPledgesComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SessionBankPledgesComponent_div_16_Template, 43, 33, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SessionBankPledgesComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, SessionBankPledgesComponent_ng_container_20_Template, 12, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, SessionBankPledgesComponent_ng_template_21_Template, 44, 16, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No. Of Pledges ", ctx.totalRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sessionData)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n\n.custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  height: 46px;\n  border-radius: 0.375rem;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n\n.file-input__input[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.file-input__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-500);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi92aWV3LXNlc3Npb24tZGV0YWlscy9jb21wb25lbnRzL3Nlc3Npb24tYmFuay1wbGVkZ2VzL3Nlc3Npb24tYmFuay1wbGVkZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0FBRUo7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7QUFDSjs7QUFHQTtFQUNFLHNDQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQU1FO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQUhKO0FBS0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSE47QUFNSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFKTjtBQU1NO0VBQ0UsY0FBQTtBQUpSO0FBVUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVJOO0FBV0k7RUFDRSxtQkFBQTtBQVROO0FBV007RUFDRSxZQUFBO0FBVFI7QUFZTTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBVlI7QUFhTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFYUjtBQWdCRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFpQkEsU0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWRGOztBQWlCQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFkRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTVweDtcbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4uYnRuLXJpZ2h0IHtcbiAgY29sb3I6ICMyOWEwNzM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi14bWFyayB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5idG4tZWRpdCB7XG4gIGNvbG9yOiAjNGU5YWZmO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLXVuZG8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiAwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxufVxuXG4uY2FyZC10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAuYnRuIHtcbiAgY29sb3I6ICNhOWE5YTkgIWltcG9ydGFudDtcbn1cblxuXG5cbi5tb2RhbC1ib2R5IHtcbiAgLm1vZGFsLWhlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBsYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIH1cblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICB9XG5cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGFjY2VudC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpbGUtaXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlYjkzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cbi8qKipGSUxFKi9cbi5jdXN0b20tZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmZpbGUtaW5wdXRfX2lucHV0IHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZmlsZS1pbnB1dF9fbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWdyYXktNTAwKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 47171:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/view-session-details/components/session-bank-transfer/session-bank-transfer.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionBankTransferComponent": () => (/* binding */ SessionBankTransferComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../main-fund/bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../main-fund/register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../close-register/services/close-register.service */ 15070);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../collect/services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/not-found/not-found.component */ 59442);













const _c0 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1
  };
};
function SessionBankTransferComponent_div_16_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td")(17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td")(20, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_tr_43_Template_i_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.handleBankTransferDetails(item_r9, _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9 == null ? null : item_r9.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.translations[0] == null ? null : item_r9.statusObj.translations[0].lookupName) == "Settled" && (item_r9 == null ? null : item_r9.settleActionType) == "edit" && (item_r9 == null ? null : item_r9.settleTransfereReference) || (item_r9 == null ? null : item_r9.transfereReference), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 8, item_r9 == null ? null : item_r9.paidAmountJod, "2.3-3") + " JOD", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.currency) && (item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.translations[0] == null ? null : item_r9.statusObj.translations[0].lookupName) == "Settled" && (item_r9 == null ? null : item_r9.settleActionType) == "edit" && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 11, item_r9 == null ? null : item_r9.settleTransfereDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 14, item_r9 == null ? null : item_r9.transfereDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.translations[0] == null ? null : item_r9.statusObj.translations[0].lookupName) == "Unsettled" && (item_r9 == null ? null : item_r9.settleActionType) == "edit" && (item_r9 == null ? null : item_r9.settleBankAccount == null ? null : item_r9.settleBankAccount.bankNameEnglish) + " - " + (item_r9 == null ? null : item_r9.settleBankAccount == null ? null : item_r9.settleBankAccount.accountName) + " - " + (item_r9 == null ? null : item_r9.settleBankAccount == null ? null : item_r9.settleBankAccount.accountNumber) || (item_r9 == null ? null : item_r9.bankAccount == null ? null : item_r9.bankAccount.bankNameEnglish) + " - " + (item_r9 == null ? null : item_r9.bankAccount == null ? null : item_r9.bankAccount.accountName) + " - " + (item_r9 == null ? null : item_r9.bankAccount == null ? null : item_r9.bankAccount.accountNumber), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](17, _c0, item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.lookupBGColor, item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.translations[0] == null ? null : item_r9.statusObj.translations[0].lookupName, " ");
  }
}
function SessionBankTransferComponent_div_16_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SessionBankTransferComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 15)(2, "table", 16)(3, "thead")(4, "tr", 17)(5, "th")(6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 19)(9, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th")(11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.sortByReference());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Transfer Reference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 19)(14, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th")(16, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Paid Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 19)(19, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th", 21)(21, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "th")(24, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Transfer Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 19)(27, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th")(29, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " Markazia Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Account No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "i", 19)(34, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "th")(36, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "i", 19)(39, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, SessionBankTransferComponent_div_16_tr_43_Template, 21, 20, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, SessionBankTransferComponent_div_16_div_44_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sessionData_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", sessionData_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (sessionData_r6 == null ? null : sessionData_r6.length) == 0);
  }
}
function SessionBankTransferComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SessionBankTransferComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function SessionBankTransferComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.pageNo = $event);
    })("pageChange", function SessionBankTransferComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.sessionData == null ? null : ctx_r3.sessionData.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordsCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordsCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", ctx_r3.totalRecordsCount)("page", ctx_r3.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionBankTransferComponent_ng_template_21_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 41)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 42)(4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 44)(7, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_ng_template_21_div_46_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.viewFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r23.fileDetails == null ? null : ctx_r23.fileDetails.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx_r23.fileDetails == null ? null : ctx_r23.fileDetails.file, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function SessionBankTransferComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Bank Transfer Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Customer Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 33)(9, "div", 34)(10, "div", 35)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Paid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 35)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 35)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Transfer Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 34)(27, "div", 35)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Transfer Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 35)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Markazia Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Account No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 35)(42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Payer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, SessionBankTransferComponent_ng_template_21_div_46_Template, 10, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 38)(48, "div", 39)(49, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_ng_template_21_Template_button_click_49_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const modal_r22 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r22.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.details == null ? null : ctx_r5.details.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 8, ctx_r5.details == null ? null : ctx_r5.details.paidAmountJod, "2.3-3") + " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.currency) && (ctx_r5.details == null ? null : ctx_r5.details.currency[0] == null ? null : ctx_r5.details.currency[0].lookupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.settleTransfereReference) || (ctx_r5.details == null ? null : ctx_r5.details.transfereReference));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](32, 11, ctx_r5.details == null ? null : ctx_r5.details.settleTransfereDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](33, 14, ctx_r5.details == null ? null : ctx_r5.details.transfereDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.settleBankAccount) && (ctx_r5.details == null ? null : ctx_r5.details.settleBankAccount == null ? null : ctx_r5.details.settleBankAccount.bankNameEnglish) + " - " + (ctx_r5.details == null ? null : ctx_r5.details.settleBankAccount == null ? null : ctx_r5.details.settleBankAccount.accountName) + " - " + (ctx_r5.details == null ? null : ctx_r5.details.settleBankAccount == null ? null : ctx_r5.details.settleBankAccount.accountNumber) || (ctx_r5.details == null ? null : ctx_r5.details.bankAccount == null ? null : ctx_r5.details.bankAccount.bankNameEnglish) + " - " + (ctx_r5.details == null ? null : ctx_r5.details.bankAccount == null ? null : ctx_r5.details.bankAccount.accountName) + " - " + (ctx_r5.details == null ? null : ctx_r5.details.bankAccount == null ? null : ctx_r5.details.bankAccount.accountNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.details == null ? null : ctx_r5.details.cardPayerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.fileDetails == null ? null : ctx_r5.fileDetails.fileName);
  }
}
class SessionBankTransferComponent {
  constructor(_registerSettlementService, activeRoute, closeRegisterService, sharedService, _modalService, fb, _collectService) {
    this._registerSettlementService = _registerSettlementService;
    this.activeRoute = activeRoute;
    this.closeRegisterService = closeRegisterService;
    this.sharedService = sharedService;
    this._modalService = _modalService;
    this.fb = fb;
    this._collectService = _collectService;
    this.banks = [];
    this.payerName = '';
    this.pageNo = 1;
    this.sort = 1;
    this.searchText = '';
    this.fileDetails = {
      fileName: '',
      file: ''
    };
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.sessionId = params['sessionId'];
      this.getSessionBankTransfere();
    });
    console.log(this.isSettle, 'Is setle');
  }
  handleBankTransferDetails(item, content) {
    this.details = item;
    this.fileDetails.file = item?.transfereAttachment;
    this.fileDetails.fileName = this.getFilName(item?.transfereAttachment);
    this._modalService.open(content, {
      size: 'lg',
      centered: true
    });
  }
  getFilName(name) {
    if (name) return name?.split('/').pop();
  }
  viewFile() {
    const modalRef = this._modalService.open(_main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewUploadedFileComponent, {
      size: 'md'
    });
    modalRef.componentInstance.file = this.fileDetails?.file;
  }
  getSessionBankTransfere() {
    let obj = `?sessionId=${this.sessionId}&search=${this.searchText}&pageNo=${this.pageNo - 1}&pageSize=6&sort=${this.sort || 1}`;
    this._registerSettlementService.getSessionBankTransfer(obj).subscribe(response => {
      if (response) {
        this.sessionData = response.data;
        this.totalAllRecordsCount = response?.totalAllRecordsCount;
        this.totalRecordsCount = response?.totalRecordCount;
      }
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.getSessionBankTransfere();
    window.scroll(0, 0);
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 1) {
      this.searchText = text;
      this.pageNo = 1;
      this.getSessionBankTransfere();
    }
    if (text.length == 0) {
      this.pageNo = 1;
      this.getSessionBankTransfere();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.pageNo = 1;
    this.getSessionBankTransfere();
  }
  //SORTING
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getSessionBankTransfere();
  }
  sortByReference() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getSessionBankTransfere();
  }
  sortByAmount() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getSessionBankTransfere();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getSessionBankTransfere();
  }
  sortByBank() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getSessionBankTransfere();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.getSessionBankTransfere();
  }
}
SessionBankTransferComponent.ɵfac = function SessionBankTransferComponent_Factory(t) {
  return new (t || SessionBankTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_2__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_4__.CollectService));
};
SessionBankTransferComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SessionBankTransferComponent,
  selectors: [["app-session-bank-transfer"]],
  inputs: {
    isSettle: "isSettle"
  },
  outputs: {
    loadMainData: "loadMainData"
  },
  decls: 23,
  vars: 6,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], ["sessionBankTransferDetails", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], ["scope", "col"], [1, "btn", 3, "disabled"], [4, "ngFor", "ngForOf"], [1, "status-tag", 3, "ngStyle"], [1, "fa-regular", "fa-eye", "cursor-pointer", 3, "click"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "pb-2", "fw-600"], [1, "light-gray"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-4"], [1, "pb-2", "fw-600", "light-gray"], ["class", "col-6 mt-3", 4, "ngIf"], [1, "modal-footer", "p-4"], [1, "btns-group"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "col-6", "mt-3"], [1, "file-item", "d-flex", "justify-content-between", "align-items-center", "py-2", "px-3"], [1, "fw-600", "green-clr", "mb-0"], [1, "d-flex", "gap-2", "align-items-center"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["target", "_blank", "download", "", 3, "href"], ["height", "20", "src", "assets/images/Download.png", 1, "cursor-pointer"]],
  template: function SessionBankTransferComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SessionBankTransferComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function SessionBankTransferComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionBankTransferComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SessionBankTransferComponent_div_16_Template, 45, 33, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SessionBankTransferComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, SessionBankTransferComponent_ng_container_20_Template, 12, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, SessionBankTransferComponent_ng_template_21_Template, 51, 17, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No. Of Transfers ", ctx.totalRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sessionData)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n\n.custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  height: 46px;\n  border-radius: 0.375rem;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n\n.file-input__input[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.file-input__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-500);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi92aWV3LXNlc3Npb24tZGV0YWlscy9jb21wb25lbnRzL3Nlc3Npb24tYmFuay10cmFuc2Zlci9zZXNzaW9uLWJhbmstdHJhbnNmZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7QUFBRTtFQUNJLFVBQUE7QUFFTjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKOztBQUdBO0VBQ0Usc0NBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBTUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBSEo7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFITjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpOO0FBTU07RUFDRSxjQUFBO0FBSlI7QUFVSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSTtFQUNFLG1CQUFBO0FBVE47QUFXTTtFQUNFLFlBQUE7QUFUUjtBQVlNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFWUjtBQWFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQVhSO0FBZ0JFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWlCQSxTQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQWRGOztBQWlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQWRGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxNXB4O1xuICAuYnRue1xuICAgICAgcGFkZGluZzowO1xuICB9XG59XG5cbi5idG4tcmlnaHQge1xuICBjb2xvcjogIzI5YTA3MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLXhtYXJrIHtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi1lZGl0IHtcbiAgY29sb3I6ICM0ZTlhZmY7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5idG4tdW5kbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDBweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG5cbi5jYXJkLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5idG4ge1xuICBjb2xvcjogI2E5YTlhOSAhaW1wb3J0YW50O1xufVxuXG5cblxuLm1vZGFsLWJvZHkge1xuICAubW9kYWwtaGVhZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvcm0ge1xuICAgIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsZS1pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmViOTNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuLyoqKkZJTEUqL1xuLmN1c3RvbS1maWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZmlsZS1pbnB1dF9faW5wdXQge1xuICB3aWR0aDogMC4xcHg7XG4gIGhlaWdodDogMC4xcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5maWxlLWlucHV0X19sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 63186:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/view-session-details/components/session-card-payments/session-card-payments.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionCardPaymentsComponent": () => (/* binding */ SessionCardPaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../main-fund/register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../collect/services/collect.service */ 43346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../close-register/services/close-register.service */ 15070);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/common.service */ 5620);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/not-found/not-found.component */ 59442);












function SessionCardPaymentsComponent_div_16_th_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_16_th_41_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 20)(4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionCards_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r7.sort == 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r7.sort == 15);
  }
}
const _c0 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1
  };
};
function SessionCardPaymentsComponent_div_16_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td")(20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "td")(23, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_16_tr_46_Template_i_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.handleCardDetails(item_r13, _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("highlight-tr", item_r13 == null ? null : item_r13.wrongActionInClosing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r13 == null ? null : item_r13.customer == null ? null : item_r13.customer.customerName) || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r13.paymentCardType[0] == null ? null : item_r13.paymentCardType[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.translations[0] == null ? null : item_r13.statusObj.translations[0].lookupName) == "Settled" && (item_r13 == null ? null : item_r13.settleActionType) == "edit" && (item_r13 == null ? null : item_r13.settled4Digits) || (item_r13 == null ? null : item_r13.cardLast4Digits), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.translations[0] == null ? null : item_r13.statusObj.translations[0].lookupName) == "Settled" && (item_r13 == null ? null : item_r13.settleActionType) == "edit" && (item_r13 == null ? null : item_r13.settleMachineReceiptNumber) || (item_r13 == null ? null : item_r13.machineReceiptNumber), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.translations[0] == null ? null : item_r13.statusObj.translations[0].lookupName) == "Settled" && (item_r13 == null ? null : item_r13.settleActionType) == "edit" && (item_r13 == null ? null : item_r13.settledCardProvide == null ? null : item_r13.settledCardProvide.providerName) || (item_r13 == null ? null : item_r13.cardProvide == null ? null : item_r13.cardProvide.providerName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 12, item_r13 == null ? null : item_r13.cardCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r13 == null ? null : item_r13.currency) && (item_r13 == null ? null : item_r13.currency[0] == null ? null : item_r13.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](18, 15, item_r13 == null ? null : item_r13.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](18, _c0, item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.lookupBGColor, item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r13 == null ? null : item_r13.statusObj == null ? null : item_r13.statusObj.translations[0] == null ? null : item_r13.statusObj.translations[0].lookupName, " ");
  }
}
function SessionCardPaymentsComponent_div_16_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SessionCardPaymentsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 15)(2, "table", 16)(3, "thead")(4, "tr", 17)(5, "th", 18)(6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 20)(9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 18)(11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_16_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.sortByCardType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Card Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 20)(14, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 18)(16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_16_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.sortByLastFour());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Last 4 Digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 20)(19, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th", 18)(21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_16_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.sortByInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Machine Receipt No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 20)(24, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "th", 18)(26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_16_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.sortByTerminal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Terminal Provider ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "i", 20)(29, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th", 18)(31, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_16_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "i", 20)(34, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "th", 18)(36, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th", 18)(39, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, SessionCardPaymentsComponent_div_16_th_41_Template, 5, 5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "th", 18)(43, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, SessionCardPaymentsComponent_div_16_tr_46_Template, 24, 21, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, SessionCardPaymentsComponent_div_16_div_47_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sessionCards_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.sort == 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isSettle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", sessionCards_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (sessionCards_r6 == null ? null : sessionCards_r6.length) == 0);
  }
}
function SessionCardPaymentsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SessionCardPaymentsComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function SessionCardPaymentsComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.pageNo = $event);
    })("pageChange", function SessionCardPaymentsComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.sessionCards == null ? null : ctx_r3.sessionCards.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", ctx_r3.totalRecordCount)("page", ctx_r3.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionCardPaymentsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Customer Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 34)(9, "div", 35)(10, "div", 36)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 38)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 39)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 39)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Last 4 Digits of the Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 35)(33, "div", 36)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Machine Receipt No");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 36)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Provider Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 36)(44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Payer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 40)(49, "div", 41)(50, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_ng_template_21_Template_button_click_50_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const modal_r26 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r26.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.customer == null ? null : ctx_r5.cardDetails.customer.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 8, ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.cardCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.currency) && (ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.currency[0] == null ? null : ctx_r5.cardDetails.currency[0].lookupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 11, ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.collectedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.settled4Digits) || (ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.cardLast4Digits));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.settleMachineReceiptNumber) || (ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.machineReceiptNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.settledCardProvide == null ? null : ctx_r5.cardDetails.settledCardProvide.providerName) || (ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.cardProvide == null ? null : ctx_r5.cardDetails.cardProvide.providerName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.cardPayerName);
  }
}
class SessionCardPaymentsComponent {
  constructor(fb, _registerSettlementService, datePipe, _collectService, _modalService, _closeRegisterService, _commonService) {
    this.fb = fb;
    this._registerSettlementService = _registerSettlementService;
    this.datePipe = datePipe;
    this._collectService = _collectService;
    this._modalService = _modalService;
    this._closeRegisterService = _closeRegisterService;
    this._commonService = _commonService;
    this.pageNo = 1;
    this.sort = 1;
    this.searchText = '';
    this.loadCardData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.isSettle = true;
    this.terminals = [];
  }
  ngOnChanges(changes) {
    this.response = changes['response'].currentValue;
    this.sessionCards = this.response?.cards;
    this.totalRecordCount = this.response?.totalRecordCount;
    this.pagin = Math.ceil(this.totalRecordCount / 6);
    this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
  }
  ngOnInit() {}
  get formValid() {
    return this.cardForm.controls;
  }
  handleCardDetails(item, content) {
    this.cardDetails = {};
    this.cardDetails = item;
    this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByCardType() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByLastFour() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByInvoice() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByTerminal() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByAmount() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByStatus() {
    if (this.sort == 15) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 14 ? 15 : 14;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.loadCardData.emit({
      page,
      customer: '',
      sort: 1
    });
    window.scroll(0, 0);
  }
  removeSearch() {
    this.searchText = '';
    this.loadCardData.emit({
      page: 1,
      customer: '',
      sort: 1
    });
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 3) {
      this.searchText = text;
      this.loadCardData.emit({
        page: 1,
        customer: text
      });
    } else if (text.length == 0) {
      this.searchText = '';
      this.loadCardData.emit({
        page: 1,
        customer: ''
      });
    }
  }
}
SessionCardPaymentsComponent.ɵfac = function SessionCardPaymentsComponent_Factory(t) {
  return new (t || SessionCardPaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_2__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_3__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService));
};
SessionCardPaymentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SessionCardPaymentsComponent,
  selectors: [["app-session-card-payments"]],
  inputs: {
    response: "response",
    isSettle: "isSettle"
  },
  outputs: {
    loadCardData: "loadCardData"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 23,
  vars: 6,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], ["sessionCardDetails", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], ["scope", "col", 4, "ngIf"], [3, "highlight-tr", 4, "ngFor", "ngForOf"], [1, "status-tag", 3, "ngStyle"], [1, "fa-regular", "fa-eye", "cursor-pointer", 3, "click"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "pb-2", "fw-600"], [1, "light-gray"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-4"], [1, "pb-2", "fw-600", "light-gray"], [1, "col-sm-2"], [1, "col-sm-3"], [1, "modal-footer", "p-4"], [1, "btns-group"], ["type", "submit", 1, "btn", "btn-save", 3, "click"]],
  template: function SessionCardPaymentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SessionCardPaymentsComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function SessionCardPaymentsComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SessionCardPaymentsComponent_div_16_Template, 48, 36, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SessionCardPaymentsComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, SessionCardPaymentsComponent_ng_container_20_Template, 12, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, SessionCardPaymentsComponent_ng_template_21_Template, 52, 14, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No. Of Transactions ", ctx.totalRecordCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sessionCards)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.totalRecordCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  font-size: 18px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.highlight-tr[_ngcontent-%COMP%] {\n  background-color: #ffd2d2;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi92aWV3LXNlc3Npb24tZGV0YWlscy9jb21wb25lbnRzL3Nlc3Npb24tY2FyZC1wYXltZW50cy9zZXNzaW9uLWNhcmQtcGF5bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdGO0FBREU7RUFDRSxXQUFBO0FBR0o7O0FBQ0E7RUFDRSxzQ0FBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0Y7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBR0o7QUFESTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFHTjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQU07RUFDRSxjQUFBO0FBRVI7QUFJSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRk47QUFLSTtFQUNFLG1CQUFBO0FBSE47QUFLTTtFQUNFLFlBQUE7QUFIUjtBQU1NO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFKUjtBQU9NO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQUxSO0FBVUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBUkoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uY2FyZC10YWJsZSB0aGVhZCB0aCAuYnRue1xuICAgIHBhZGRpbmc6MDtcbn1cbi5idG4tcmlnaHQge1xuICBjb2xvcjogIzI5YTA3MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLXhtYXJrIHtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi1lZGl0IHtcbiAgY29sb3I6ICM0ZTlhZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi11bmRvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cblxuLmNhcmQtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLmJ0biB7XG4gIGNvbG9yOiAjYTlhOWE5ICFpbXBvcnRhbnQ7XG59XG4uaGlnaGxpZ2h0LXRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDJkMjtcbn1cbi5tb2RhbC1ib2R5IHtcbiAgLm1vZGFsLWhlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBsYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIH1cblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICB9XG5cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGFjY2VudC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpbGUtaXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlYjkzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1806:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/view-session-details/components/session-cheques/session-cheques.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionChequesComponent": () => (/* binding */ SessionChequesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../main-fund/bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../main-fund/register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../close-register/services/close-register.service */ 15070);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/view-file/view-file.component */ 67761);














function SessionChequesComponent_div_16_th_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_th_36_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 24)(4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionCheques_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r11.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r11.sort == 13);
  }
}
const _c0 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1
  };
};
function SessionChequesComponent_div_16_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td")(20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "td")(23, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_tr_41_Template_i_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const item_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](32);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.handleChequeDetails(item_r17, _r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("highlight-tr", item_r17 == null ? null : item_r17.wrongActionInClosing);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r17 == null ? null : item_r17.chequeCustomer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.translations[0] == null ? null : item_r17.statusObj.translations[0].lookupName) == "Settled" && (item_r17 == null ? null : item_r17.settleActionType) == "edit" && (item_r17 == null ? null : item_r17.settleChequeNumber) || (item_r17 == null ? null : item_r17.chequeNo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 11, item_r17 == null ? null : item_r17.chequeCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r17 == null ? null : item_r17.currency[0] == null ? null : item_r17.currency[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 14, item_r17 == null ? null : item_r17.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.translations[0] == null ? null : item_r17.statusObj.translations[0].lookupName) == "Settled" && (item_r17 == null ? null : item_r17.settleActionType) == "edit" && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 17, item_r17 == null ? null : item_r17.settleChequeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](16, 20, item_r17.chequeDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.translations[0] == null ? null : item_r17.statusObj.translations[0].lookupName) == "Settled" && (item_r17 == null ? null : item_r17.settleActionType) == "edit" && (item_r17 == null ? null : item_r17.settleBank[0] == null ? null : item_r17.settleBank[0].lookupName) || (item_r17.bank[0] == null ? null : item_r17.bank[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](23, _c0, item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.lookupBGColor, item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.translations[0] == null ? null : item_r17.statusObj.translations[0].lookupName, " ");
  }
}
function SessionChequesComponent_div_16_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "div", 19)(2, "table", 20)(3, "thead")(4, "tr", 21)(5, "th", 22)(6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 24)(9, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 22)(11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.sortByChequeNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 24)(14, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th", 22)(16, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 24)(19, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 22)(21, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "th", 22)(24, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "th", 22)(27, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "i", 24)(30, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "th", 22)(32, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "i", 24)(35, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, SessionChequesComponent_div_16_th_36_Template, 5, 5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "th", 22)(38, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, SessionChequesComponent_div_16_tr_41_Template, 24, 26, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, SessionChequesComponent_div_16_div_42_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sessionCheques_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isSettle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", sessionCheques_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (sessionCheques_r10 == null ? null : sessionCheques_r10.length) == 0);
  }
}
function SessionChequesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function SessionChequesComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.pageNo = $event);
    })("pageChange", function SessionChequesComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.sessionCheques == null ? null : ctx_r3.sessionCheques.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r3.totalRecordCount)("page", ctx_r3.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionChequesComponent_div_26_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "td")(22, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_div_26_tr_22_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.viewDepositedAttachment(item_r31 == null ? null : item_r31.depositeFile));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "View Deposit Attachement");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r31 == null ? null : item_r31.chequeCustomer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r31 == null ? null : item_r31.chequeNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 8, item_r31 == null ? null : item_r31.chequeCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r31 == null ? null : item_r31.currency[0] == null ? null : item_r31.currency[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 11, item_r31 == null ? null : item_r31.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 14, item_r31 == null ? null : item_r31.collectionAt, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r31 == null ? null : item_r31.bank[0] == null ? null : item_r31.bank[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](20, 17, item_r31 == null ? null : item_r31.collectedAmount, "2.3-3"), "");
  }
}
function SessionChequesComponent_div_26_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "div", 19)(2, "table", 20)(3, "thead")(4, "tr", 21)(5, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, SessionChequesComponent_div_26_tr_22_Template, 24, 20, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, SessionChequesComponent_div_26_div_23_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.depositedCheques);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r4.depositedCheques == null ? null : ctx_r4.depositedCheques.length) == 0);
  }
}
function SessionChequesComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function SessionChequesComponent_ng_container_30_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r34.dcPageNo = $event);
    })("pageChange", function SessionChequesComponent_ng_container_30_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.dcPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r7.dcPageNo * 6 - 5, " - ", (ctx_r7.depositedCheques == null ? null : ctx_r7.depositedCheques.length) == 6 ? ctx_r7.dcPageNo * 6 : ctx_r7.dcTotalRecordCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r7.dcTotalRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r7.dcTotalRecordCount)("page", ctx_r7.dcPageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionChequesComponent_ng_template_31_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Cheque Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "view-file", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("file", ctx_r38.chequeDetails == null ? null : ctx_r38.chequeDetails.chequeImage);
  }
}
function SessionChequesComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Cheque Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Customer Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 40)(9, "div", 41)(10, "div", 42)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 44)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 45)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 45)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Cheque No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 41)(33, "div", 42)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 42)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](43, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 42)(46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Drawer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, SessionChequesComponent_ng_template_31_div_50_Template, 4, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 47)(52, "div", 48)(53, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_ng_template_31_Template_button_click_53_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40);
      const modal_r37 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r37.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.chequeCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 9, ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.chequeCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.currency[0] == null ? null : ctx_r9.chequeDetails.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](26, 12, ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.collectedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.settleChequeNumber) || (ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.chequeNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.settleBank[0] == null ? null : ctx_r9.chequeDetails.settleBank[0].lookupName) || (ctx_r9.chequeDetails.bank[0] == null ? null : ctx_r9.chequeDetails.bank[0].lookupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](43, 15, ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.settleChequeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](44, 18, ctx_r9.chequeDetails.chequeDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.settleDrawerName) || (ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.chequeDrawerName));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.chequeImage);
  }
}
class SessionChequesComponent {
  //@ViewChild('successModal') successModal: ElementRef;
  constructor(fb, _registerSettlementService, _activeRoute, _modalService, _closeRegisterService, _commonService) {
    this.fb = fb;
    this._registerSettlementService = _registerSettlementService;
    this._activeRoute = _activeRoute;
    this._modalService = _modalService;
    this._closeRegisterService = _closeRegisterService;
    this._commonService = _commonService;
    this.pageNo = 1;
    this.dcPageNo = 1;
    this.sort = 1;
    this.searchText = '';
    this.depositedCheques = [];
    this.dcTotalRecordCount = 0;
    this.loadData = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.isSettle = true;
  }
  ngOnChanges(changes) {
    this.response = changes['response'].currentValue;
    this.sessionCheques = this.response?.data;
    this.totalRecordCount = this.response?.totalRecordCount;
    this.pagin = Math.ceil(this.totalRecordCount / 6);
    this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
  }
  ngOnInit() {
    this._activeRoute.params.subscribe(param => {
      this.sessionId = param['sessionId'];
      this.getDepositedCheques();
    });
  }
  getDepositedCheques() {
    let params = `?sessionId=${this.sessionId}&pageNo=${this.dcPageNo - 1}&pageSize=6`;
    this._registerSettlementService.getSessionDepositedCheques(params).subscribe(response => {
      console.log(response);
      if (response?.data?.length) {
        this.depositedCheques = response?.data;
        this.dcTotalRecordCount = response?.totalRecordCount;
      }
    });
  }
  dcPageChange(page) {
    this.dcPageNo = page;
    this.getDepositedCheques();
  }
  viewDepositedAttachment(file) {
    const modalRef = this._modalService.open(_main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__.ViewUploadedFileComponent);
    modalRef.componentInstance.file = file;
  }
  handleChequeDetails(item, content) {
    this.chequeDetails = {};
    this.chequeDetails = item;
    console.log(this.chequeDetails);
    this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByChequeNo() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByAmount() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByBank() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.loadData.emit({
      page,
      chequeNumber: '',
      sort: 1
    });
    window.scroll(0, 0);
  }
  removeSearch() {
    this.searchText = '';
    this.loadData.emit({
      page: 1,
      chequeNumber: '',
      sort: 1
    });
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 3) {
      this.searchText = text;
      this.loadData.emit({
        page: 1,
        chequeNumber: text,
        sort: 1
      });
    } else if (text.length == 0) {
      this.searchText = '';
      this.loadData.emit({
        page: 1,
        chequeNumber: '',
        sort: 1
      });
    }
  }
}
SessionChequesComponent.ɵfac = function SessionChequesComponent_Factory(t) {
  return new (t || SessionChequesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_3__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService));
};
SessionChequesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SessionChequesComponent,
  selectors: [["app-session-cheques"]],
  inputs: {
    response: "response",
    isSettle: "isSettle"
  },
  outputs: {
    loadData: "loadData"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 33,
  vars: 9,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], [1, "col-md-12", "mt-4"], [1, "fw-600", "mb-3"], [1, "card-table", "mt-0"], ["loading1", ""], ["sessionChequedetails", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], ["scope", "col", 4, "ngIf"], [3, "highlight-tr", 4, "ngFor", "ngForOf"], [1, "status-tag", 3, "ngStyle"], [1, "fa-regular", "fa-eye", "cursor-pointer", 3, "click"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [4, "ngFor", "ngForOf"], [1, "redBtn", 3, "click"], [1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "pb-2", "fw-600"], [1, "light-gray"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-4"], [1, "pb-2", "fw-600", "light-gray"], [1, "col-sm-2"], [1, "col-sm-3"], ["class", "col-sm-4", 4, "ngIf"], [1, "modal-footer", "p-4"], [1, "btns-group"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [3, "file"]],
  template: function SessionChequesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SessionChequesComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function SessionChequesComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionChequesComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SessionChequesComponent_div_16_Template, 43, 31, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, SessionChequesComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SessionChequesComponent_ng_container_20_Template, 12, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 14)(22, "h6", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Deposited Cheques");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 16)(25, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, SessionChequesComponent_div_26_Template, 24, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, SessionChequesComponent_ng_template_28_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, SessionChequesComponent_ng_container_30_Template, 12, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, SessionChequesComponent_ng_template_31_Template, 55, 21, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](19);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No. Of Transactions ", ctx.totalRecordCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sessionCheques)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.totalRecordCount > 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.depositedCheques)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dcTotalRecordCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_7__.ViewFileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  font-size: 18px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.highlight-tr[_ngcontent-%COMP%] {\n  background-color: #ffd2d2;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi92aWV3LXNlc3Npb24tZGV0YWlscy9jb21wb25lbnRzL3Nlc3Npb24tY2hlcXVlcy9zZXNzaW9uLWNoZXF1ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdGO0FBREU7RUFDRSxXQUFBO0FBR0o7O0FBQ0E7RUFDRSxzQ0FBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0Y7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBR0o7QUFESTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFHTjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQU07RUFDRSxjQUFBO0FBRVI7QUFJSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRk47QUFJTTtFQUNFLFlBQUE7QUFGUjtBQUtNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFIUjtBQU1NO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQUpSO0FBUUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBTkoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uY2FyZC10YWJsZSB0aGVhZCB0aCAuYnRuIHtcbiAgcGFkZGluZzogMDtcbn1cbi5idG4tcmlnaHQge1xuICBjb2xvcjogIzI5YTA3MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLXhtYXJrIHtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi1lZGl0IHtcbiAgY29sb3I6ICM0ZTlhZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi11bmRvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cblxuLmNhcmQtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLmJ0biB7XG4gIGNvbG9yOiAjYTlhOWE5ICFpbXBvcnRhbnQ7XG59XG4uaGlnaGxpZ2h0LXRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDJkMjtcbn1cbi5tb2RhbC1ib2R5IHtcbiAgLm1vZGFsLWhlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBsYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIH1cbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICB9XG5cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGFjY2VudC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gIH1cblxuICAuZmlsZS1pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmViOTNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 29638:
/*!********************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/view-session-details/view-session-details.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSessionDetailsComponent": () => (/* binding */ ViewSessionDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main-fund/register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/session-card-payments/session-card-payments.component */ 63186);
/* harmony import */ var _components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/session-cheques/session-cheques.component */ 1806);
/* harmony import */ var _components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/session-bank-pledges/session-bank-pledges.component */ 70028);
/* harmony import */ var _components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/session-bank-transfer/session-bank-transfer.component */ 47171);









function ViewSessionDetailsComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 31)(6, "div", 26)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Registered Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 31)(13, "div", 26)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Refunded Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 31)(20, "div", 26)(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Actual Cashier Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 26)(27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Actual Main Fund Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 31)(33, "div", 26)(34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Differences");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", i_r6 + 1, ". ", (item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].lookupName) || "0", " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 13, item_r5 == null ? null : item_r5.registerdAmount, "2.3-3") || "0", " ", " " + (item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].lookupName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](18, 16, (item_r5 == null ? null : item_r5.refundedAmount) || 0, "2.3-3"), " ", " " + (item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].lookupName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](25, 19, item_r5 == null ? null : item_r5.actualAmount, "2.3-3") || "0", " ", " " + (item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].lookupName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](31, 22, item_r5 == null ? null : item_r5.mainFundActualAmount, "2.3-3") || "0", " ", " " + (item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].lookupName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (item_r5 == null ? null : item_r5.isDifferencePositive) && "greenHighlight" || "redHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](38, 25, item_r5 == null ? null : item_r5.differenceAmount, "2.3-3") || "0", " ", " " + (item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].lookupName), " ");
  }
}
function ViewSessionDetailsComponent_div_153_app_session_cheques_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-session-cheques", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("loadData", function ViewSessionDetailsComponent_div_153_app_session_cheques_1_Template_app_session_cheques_loadData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.handleLoadData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("response", ctx_r7.sessionCheques)("isSettle", false);
  }
}
function ViewSessionDetailsComponent_div_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewSessionDetailsComponent_div_153_app_session_cheques_1_Template, 1, 2, "app-session-cheques", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sessionCheques == null ? null : ctx_r1.sessionCheques.data);
  }
}
function ViewSessionDetailsComponent_div_154_app_session_card_payments_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-session-card-payments", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("loadCardData", function ViewSessionDetailsComponent_div_154_app_session_card_payments_1_Template_app_session_card_payments_loadCardData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.handleCardsLoad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("response", ctx_r10.sessionCardsPayments)("isSettle", false);
  }
}
function ViewSessionDetailsComponent_div_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewSessionDetailsComponent_div_154_app_session_card_payments_1_Template, 1, 2, "app-session-card-payments", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.sessionCardsPayments == null ? null : ctx_r2.sessionCardsPayments.cards);
  }
}
function ViewSessionDetailsComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-session-bank-transfer", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isSettle", false);
  }
}
function ViewSessionDetailsComponent_div_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-session-bank-pledges", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isSettle", false);
  }
}
const _c0 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1,
    "borderRadius": "5px",
    "padding": "8px 20px",
    "fontWeight": "600"
  };
};
class ViewSessionDetailsComponent {
  constructor(activeRoute, _registerSettlementService, _headerService, _location) {
    this.activeRoute = activeRoute;
    this._registerSettlementService = _registerSettlementService;
    this._headerService = _headerService;
    this._location = _location;
    this.selected = 1;
    this.pageNo = 0;
    this.sort = 1;
    this.searchText = '';
    console.log(this._location.go);
  }
  ngOnInit() {
    this._headerService.setTitle('Unsettled Sessions');
    this.activeRoute.params.subscribe(params => {
      this.sessionId = params['sessionId'];
      this.getSessionDetailsSettlements();
    });
  }
  goBack() {
    this._location.back();
  }
  getSessionDetailsSettlements() {
    this._registerSettlementService.getSessionDetailSettlement(this.sessionId).subscribe(response => {
      let cashAtClosing = response.data.cashAtClosing.map(item => {
        return {
          ...item,
          differenceAmount: Math.abs(item.differenceAmount),
          isDifferencePositive: item?.actualAmount >= item?.registerdAmount
        };
      });
      this.sessionDetails = {
        ...response.data,
        cashAtClosing
      };
    });
  }
  getSessionCheques() {
    this._registerSettlementService.getSessionCheques(this.sessionId, this.pageNo, this.searchText, this.sort).subscribe(response => {
      this.sessionCheques = {
        ...response
      };
    });
  }
  getSessionCardsPayments() {
    this._registerSettlementService.getSessionCardsPayments(this.sessionId, this.pageNo, this.searchText, this.sort).subscribe(response => {
      this.sessionCardsPayments = {
        ...response
      };
    });
  }
  chooseTab(val) {
    this.searchText = '';
    this.pageNo = 1;
    this.selected = val;
    if (val == 2) {
      this.getSessionCheques();
    } else if (val == 3) {
      this.getSessionCardsPayments();
    }
  }
  handleLoadData(event) {
    this.pageNo = event.page;
    this.searchText = event.chequeNumber;
    this.sort = event.sort;
    this.getSessionCheques();
  }
  handleCardsLoad(event) {
    this.pageNo = event.page;
    this.searchText = event.customer;
    this.sort = event.sort;
    this.getSessionCardsPayments();
  }
}
ViewSessionDetailsComponent.ɵfac = function ViewSessionDetailsComponent_Factory(t) {
  return new (t || ViewSessionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_0__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location));
};
ViewSessionDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ViewSessionDetailsComponent,
  selectors: [["app-view-session-details"]],
  decls: 174,
  vars: 70,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-12"], [1, "card-collect", "card-with-details"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "card-inner-heading"], [1, "d-flex", "flex-column"], [3, "ngStyle"], [1, "gap-3", "sd-item"], [1, "dark-gray"], [1, "light-gray"], [1, "heading-text", "mb-3"], [1, "tab-nav", "d-flex", "flex-wrap"], [1, "btn", 3, "click"], [1, "d-flex", "gap-3", "align-items-center"], [1, "imag"], ["src", "assets/images/wallet.png", "alt", ""], [1, "info"], ["src", "assets/images/cheque.png", "alt", ""], ["src", "assets/images/card.png", "alt", ""], ["src", "assets/images/bt.svg", "alt", ""], ["src", "assets/images/bp.svg", "alt", ""], [1, "tab-content"], [1, "tab-item", 3, "hidden"], [1, "card-collect", "py-2"], [1, "col-sm-4"], [1, "total-card"], [1, "total"], [1, "card-collect"], [1, "top-details"], ["class", "row mb-4", 4, "ngFor", "ngForOf"], [1, "col-sm-3"], ["class", "tab-item", 4, "ngIf"], [1, "col-md-12", "mt-3"], [1, "col-md-8"], [1, "form-group", "mb-3"], ["disabled", "", "rows", "4", "minlength", "200", "maxlength", "200", 1, "form-control", 3, "value"], [1, "btns-group", "m-0", "my-1"], [1, "btn", "btn-save", 3, "click"], [1, "row", "mb-4"], [1, "col-sm-12"], [1, "curncy"], [1, "total", 3, "ngClass"], [1, "tab-item"], [3, "response", "isSettle", "loadData", 4, "ngIf"], [3, "response", "isSettle", "loadData"], [3, "response", "isSettle", "loadCardData", 4, "ngIf"], [3, "response", "isSettle", "loadCardData"], [3, "isSettle"]],
  template: function ViewSessionDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Session Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8)(12, "div", 6)(13, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Session No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 6)(18, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Session Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 6)(24, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Session Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 6)(30, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Session Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 6)(35, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Register Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 6)(40, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Employee");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 6)(45, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Register No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 6)(50, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Branch Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Register Amounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 1)(57, "div", 2)(58, "div", 12)(59, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewSessionDetailsComponent_Template_button_click_59_listener() {
        return ctx.chooseTab(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 14)(61, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 17)(64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " Total Cash ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](68, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewSessionDetailsComponent_Template_button_click_69_listener() {
        return ctx.chooseTab(2);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 14)(71, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 17)(74, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " Total Cheque ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](78, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewSessionDetailsComponent_Template_button_click_79_listener() {
        return ctx.chooseTab(3);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 14)(81, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 17)(84, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, " Total Card ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](88, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewSessionDetailsComponent_Template_button_click_89_listener() {
        return ctx.chooseTab(4);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 14)(91, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 17)(94, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, " TTL Bank Transfers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](98, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewSessionDetailsComponent_Template_button_click_99_listener() {
        return ctx.chooseTab(5);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 14)(101, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 17)(104, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, " TTL Bank Pledges ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](108, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 1)(110, "div", 2)(111, "div", 22)(112, "div", 23)(113, "div", 1)(114, "div", 2)(115, "div", 24)(116, "div", 1)(117, "div", 25)(118, "div", 26)(119, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Initial Fund");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](123, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 2)(125, "div", 28)(126, "div", 29)(127, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, " Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "p")(130, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](132, ViewSessionDetailsComponent_div_132_Template, 39, 28, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 2)(134, "div", 28)(135, "div", 29)(136, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, " Cash Deposited");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 1)(139, "div", 31)(140, "div", 26)(141, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "Deposited Cash ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](145, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "div", 31)(147, "div", 26)(148, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "Remaining Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](152, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](153, ViewSessionDetailsComponent_div_153_Template, 2, 1, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, ViewSessionDetailsComponent_div_154_Template, 2, 1, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](155, ViewSessionDetailsComponent_div_155_Template, 2, 1, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](156, ViewSessionDetailsComponent_div_156_Template, 2, 1, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 33)(158, "div", 28)(159, "div", 1)(160, "div", 34)(161, "div", 35)(162, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](163, "Closing Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](164, "textarea", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "div", 34)(166, "div", 35)(167, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168, "Settlement Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](169, "textarea", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "div", 2)(171, "div", 37)(172, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewSessionDetailsComponent_Template_button_click_172_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](67, _c0, ctx.sessionDetails == null ? null : ctx.sessionDetails.statusObj == null ? null : ctx.sessionDetails.statusObj.lookupBGColor, ctx.sessionDetails == null ? null : ctx.sessionDetails.statusObj == null ? null : ctx.sessionDetails.statusObj.lookupTextColor));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.sessionDetails == null ? null : ctx.sessionDetails.statusObj == null ? null : ctx.sessionDetails.statusObj.translations[0] == null ? null : ctx.sessionDetails.statusObj.translations[0].lookupName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx.sessionDetails == null ? null : ctx.sessionDetails.registerSessionId) || "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](22, 37, ctx.sessionDetails == null ? null : ctx.sessionDetails.createdAt, "mediumDate") || "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](28, 40, ctx.sessionDetails == null ? null : ctx.sessionDetails.createdAt, "mediumTime") || "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx.sessionDetails == null ? null : ctx.sessionDetails.statusObj == null ? null : ctx.sessionDetails.statusObj.translations[0] == null ? null : ctx.sessionDetails.statusObj.translations[0].lookupName) || "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx.sessionDetails == null ? null : ctx.sessionDetails.register == null ? null : ctx.sessionDetails.register.registersName) || "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx.sessionDetails == null ? null : ctx.sessionDetails.createdBy == null ? null : ctx.sessionDetails.createdBy.fullName) || "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx.sessionDetails == null ? null : ctx.sessionDetails.register == null ? null : ctx.sessionDetails.register.registerId) || "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx.sessionDetails == null ? null : ctx.sessionDetails.branch == null ? null : ctx.sessionDetails.branch.branchName) || "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.selected == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](68, 43, (ctx.sessionDetails == null ? null : ctx.sessionDetails.registerAmounts == null ? null : ctx.sessionDetails.registerAmounts.totalCash) || 0, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.selected == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](78, 46, (ctx.sessionDetails == null ? null : ctx.sessionDetails.registerAmounts == null ? null : ctx.sessionDetails.registerAmounts.totalCheques) || 0, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.selected == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](88, 49, (ctx.sessionDetails == null ? null : ctx.sessionDetails.registerAmounts == null ? null : ctx.sessionDetails.registerAmounts.totalCards) || 0, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.selected == 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](98, 52, (ctx.sessionDetails == null ? null : ctx.sessionDetails.registerAmounts == null ? null : ctx.sessionDetails.registerAmounts.totalBankTransfere) || 0, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.selected == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](108, 55, (ctx.sessionDetails == null ? null : ctx.sessionDetails.registerAmounts == null ? null : ctx.sessionDetails.registerAmounts.totalBanksPledge) || 0, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.selected != 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](123, 58, (ctx.sessionDetails == null ? null : ctx.sessionDetails.initialFund) || 0, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No. Of Currencies ", ctx.sessionDetails == null ? null : ctx.sessionDetails.cashAtClosing.length, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.sessionDetails == null ? null : ctx.sessionDetails.cashAtClosing);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](145, 61, ctx.sessionDetails == null ? null : ctx.sessionDetails.debositedCash, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](152, 64, ctx.sessionDetails == null ? null : ctx.sessionDetails.remainingCash, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selected == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selected == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selected == 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selected == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.sessionDetails == null ? null : ctx.sessionDetails.closingNotes);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.sessionDetails == null ? null : ctx.sessionDetails.settlementNotes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_2__.SessionCardPaymentsComponent, _components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_3__.SessionChequesComponent, _components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_4__.SessionBankPledgesComponent, _components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_5__.SessionBankTransferComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [".tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n  margin-bottom: 30px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ced5dd;\n  border-radius: 10px;\n  padding: 15px 20px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .imag[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background: #f8f8f8;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .imag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 3px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0px;\n  padding: 3px;\n}\n\n.actual-amount[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 130px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-size: 14px;\n  padding: 5px;\n  display: block;\n  font-weight: 500;\n}\n\n.nosession[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci91bnNldHRsZWQtc2Vzc2lvbi92aWV3LXNlc3Npb24tZGV0YWlscy92aWV3LXNlc3Npb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UseUJBQUE7RUFDQSw0Q0FBQTtBQUFKO0FBR0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRE47QUFHTTtFQUNFLFdBQUE7QUFEUjtBQUtJO0VBQ0UsaUJBQUE7QUFITjtBQUtNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFIUjtBQU1NO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKUjs7QUFXRTtFQUNFLFlBQUE7QUFSSjs7QUFZQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQVRGIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFiLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAuYnRuLmFjdGl2ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyNXB4IHJnYigwIDAgMCAvIDEwJSk7XG4gIH1cblxuICAuYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNWRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuXG4gICAgLmltYWcge1xuICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgfVxuXG4gICAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmFjdHVhbC1hbW91bnQge1xuICAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm5vc2Vzc2lvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAzMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 75706:
/*!**************************************!*\
  !*** ./src/app/shared/enums/enum.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderCollectionType": () => (/* binding */ OrderCollectionType),
/* harmony export */   "RefundActionStatus": () => (/* binding */ RefundActionStatus),
/* harmony export */   "ReturnStatus": () => (/* binding */ ReturnStatus),
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
var Status;
(function (Status) {
  Status[Status["Opened"] = 16001] = "Opened";
  Status[Status["Unclosed"] = 16002] = "Unclosed";
  Status[Status["Waiting"] = 16003] = "Waiting";
  Status[Status["Closed"] = 16004] = "Closed";
  Status[Status["Partial"] = 16005] = "Partial";
  Status[Status["Settled"] = 16006] = "Settled";
  Status[Status["OnHold"] = 16007] = "OnHold";
  Status[Status["RegisterFullDeposit"] = 16008] = "RegisterFullDeposit";
  Status[Status["PartiallySettled"] = 16009] = "PartiallySettled";
  Status[Status["Active"] = 2001] = "Active";
})(Status || (Status = {}));
var OrderCollectionType;
(function (OrderCollectionType) {
  OrderCollectionType[OrderCollectionType["ServicesSalesOrders"] = 7001] = "ServicesSalesOrders";
  OrderCollectionType[OrderCollectionType["DirectPaymentSalesOrders"] = 7002] = "DirectPaymentSalesOrders";
  OrderCollectionType[OrderCollectionType["SparePartsSalesOrders"] = 7003] = "SparePartsSalesOrders";
  OrderCollectionType[OrderCollectionType["OtherRevenues"] = 7004] = "OtherRevenues";
  OrderCollectionType[OrderCollectionType["CustomerPayments"] = 7005] = "CustomerPayments";
  OrderCollectionType[OrderCollectionType["BankUndertakingSalesOrders"] = 7006] = "BankUndertakingSalesOrders";
  OrderCollectionType[OrderCollectionType["InHouseFinancingSalesOrders"] = 7007] = "InHouseFinancingSalesOrders";
  OrderCollectionType[OrderCollectionType["PromissoryNotes"] = 7008] = "PromissoryNotes";
})(OrderCollectionType || (OrderCollectionType = {}));
var ReturnStatus;
(function (ReturnStatus) {
  ReturnStatus[ReturnStatus["Refunded"] = 33004] = "Refunded";
})(ReturnStatus || (ReturnStatus = {}));
var RefundActionStatus;
(function (RefundActionStatus) {
  RefundActionStatus[RefundActionStatus["Refund"] = 34002] = "Refund";
  RefundActionStatus[RefundActionStatus["Sign"] = 34003] = "Sign";
  RefundActionStatus[RefundActionStatus["View"] = 34004] = "View";
})(RefundActionStatus || (RefundActionStatus = {}));

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_cashier_unsettled-session_unsettled-session_module_ts.js.map