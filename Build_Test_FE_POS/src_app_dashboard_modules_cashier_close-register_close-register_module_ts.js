"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_cashier_close-register_close-register_module_ts"],{

/***/ 84150:
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/close-register-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseRegisterRoutingModule": () => (/* binding */ CloseRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _close_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-register.component */ 9802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _close_register_component__WEBPACK_IMPORTED_MODULE_0__.CloseRegisterComponent
}];
class CloseRegisterRoutingModule {}
CloseRegisterRoutingModule.ɵfac = function CloseRegisterRoutingModule_Factory(t) {
  return new (t || CloseRegisterRoutingModule)();
};
CloseRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CloseRegisterRoutingModule
});
CloseRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CloseRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9802:
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/close-register.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseRegisterComponent": () => (/* binding */ CloseRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal-edit/modal-edit.component */ 44973);
/* harmony import */ var _components_modal_close_modal_close_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal-close/modal-close.component */ 88061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_close_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/close-register.service */ 15070);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared.service */ 69082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/header.service */ 36690);
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/httpservice.service */ 79345);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/common.service */ 5620);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/subject.service */ 29444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _components_collect_cheque_collect_cheque_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/collect-cheque/collect-cheque.component */ 74756);
/* harmony import */ var _components_collect_card_collect_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/collect-card/collect-card.component */ 77563);
/* harmony import */ var _components_collect_bank_transfers_collect_bank_transfers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/collect-bank-transfers/collect-bank-transfers.component */ 61482);
/* harmony import */ var _components_collect_bank_pledge_collect_bank_pledge_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/collect-bank-pledge/collect-bank-pledge.component */ 23973);




















const _c0 = ["errorModal"];
function CloseRegisterComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_ng_container_21_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "span", 49);
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_ng_container_21_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "span", 49);
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_ng_container_21_ng_container_1_span_1_Template, 1, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_ng_container_21_ng_container_1_span_2_Template, 1, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r19.registerSessionClosingAmounts.controls[i_r17].get("actualAmount")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r19.registerSessionClosingAmounts.controls[i_r17].get("actualAmount")) == null ? null : tmp_1_0.errors["min"]);
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_ng_container_21_ng_container_1_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r18.registerSessionClosingAmounts.controls[i_r17].get("actualAmount").invalid && ctx_r18.registerSessionClosingAmounts.controls[i_r17].get("actualAmount").touched || ctx_r18.registerSessionClosingAmounts.controls[i_r17].get("actualAmount").dirty);
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "div", 41)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 32)(7, "div", 33)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Registered Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 32)(16, "div", 43)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Actual Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 44)(20, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_Template_input_change_20_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const i_r17 = restoredCtx.index;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r24.calcDifference($event, i_r17));
    })("focusout", function CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_Template_input_focusout_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const i_r17 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r26.actualAmountFocusOut("actualAmount", i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_ng_container_21_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 32)(25, "div", 46)(26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "Differences");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroupName", i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", i_r17 + 1, " . ", item_r16.value.currencyName, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](12, 9, item_r16.value.registeredAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r16.value.currencyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r15.registerSessionClosingAmounts.controls[i_r17].get("actualAmount")) == null ? null : tmp_4_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r16.value.currencyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", item_r16.value.differenceAmount == 0 ? "" : +item_r16.value.differenceAmount > 0 ? "greenHighlight" : "redHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](30, 12, ctx_r15.removeMinusFromNegativeValue(item_r16.value.differenceAmount), "2.3-3"), " ");
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30)(1, "div", 1)(2, "div", 2)(3, "div", 31)(4, "div", 1)(5, "div", 32)(6, "div", 33)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, " Petty Cash Remaining ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 32)(13, "div", 33)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Initial Fund");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 2)(20, "form", 35)(21, "div", 24)(22, "div", 3)(23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "p")(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_div_29_Template, 31, 15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](11, 5, ctx_r10.registerData.prettyCashRemainging, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](18, 8, ctx_r10.registerData.initialFund, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r10.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" No. Of Currencies ", ctx_r10.registerData.noOfCurrencies, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r10.registerSessionClosingAmounts.controls);
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30)(1, "app-collect-cheque", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("loadMainData", function CloseRegisterComponent_div_14_ng_container_1_div_1_div_57_Template_app_collect_cheque_loadMainData_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r27.loadPageData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30)(1, "app-collect-card", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("loadMainData", function CloseRegisterComponent_div_14_ng_container_1_div_1_div_58_Template_app_collect_card_loadMainData_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r29.loadPageData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-collect-bank-transfers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-collect-bank-pledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function CloseRegisterComponent_div_14_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 11)(3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CloseRegisterComponent_div_14_ng_container_1_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r31.chooseTab("cash"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 13)(5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 16)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Total Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CloseRegisterComponent_div_14_ng_container_1_div_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r33.chooseTab("cheque"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 13)(15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 16)(18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, " Total Cheque ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CloseRegisterComponent_div_14_ng_container_1_div_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r34.chooseTab("cards"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 13)(25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 16)(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, " Total Card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CloseRegisterComponent_div_14_ng_container_1_div_1_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r35.chooseTab("bankTransfer"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 13)(35, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 16)(38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, " TTL.Bank Transfers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CloseRegisterComponent_div_14_ng_container_1_div_1_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r32);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r36.chooseTab("bankPledge"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 13)(45, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](46, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 16)(48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, " TTL.Bank Pledges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](52, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 1)(54, "div", 2)(55, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](56, CloseRegisterComponent_div_14_ng_container_1_div_1_div_56_Template, 32, 11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, CloseRegisterComponent_div_14_ng_container_1_div_1_div_57_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, CloseRegisterComponent_div_14_ng_container_1_div_1_div_58_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, CloseRegisterComponent_div_14_ng_container_1_div_1_div_59_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, CloseRegisterComponent_div_14_ng_container_1_div_1_div_60_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "div", 23)(62, "div", 24)(63, "div", 1)(64, "div", 25)(65, "div", 26)(66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, " Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function CloseRegisterComponent_div_14_ng_container_1_div_1_Template_textarea_ngModelChange_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r32);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r37.closingNotes = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 2)(70, "div", 28)(71, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CloseRegisterComponent_div_14_ng_container_1_div_1_Template_button_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r32);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r38.nextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, " Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r7.selectedTab == "cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](12, 21, ctx_r7.registerData.totalCollectedCashJod, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r7.selectedTab == "cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](22, 24, ctx_r7.registerData.totalCollectedCheques, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r7.selectedTab == "cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](32, 27, ctx_r7.registerData.totalCollectedCards, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r7.selectedTab == "bankTransfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](42, 30, ctx_r7.registerData.totalCollectedBankTransfere, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r7.selectedTab == "bankPledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](52, 33, ctx_r7.registerData.totalCollectedBankPledge, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.closeSessionTabs == null ? null : ctx_r7.closeSessionTabs.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.closeSessionTabs == null ? null : ctx_r7.closeSessionTabs.cheque);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.closeSessionTabs == null ? null : ctx_r7.closeSessionTabs.cards);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.closeSessionTabs == null ? null : ctx_r7.closeSessionTabs.bankTransfer);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.closeSessionTabs == null ? null : ctx_r7.closeSessionTabs.bankPledge);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r7.closingNotes);
  }
}
function CloseRegisterComponent_div_14_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function CloseRegisterComponent_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, CloseRegisterComponent_div_14_ng_container_1_div_1_Template, 73, 36, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, CloseRegisterComponent_div_14_ng_container_1_ng_template_4_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.registerData);
  }
}
function CloseRegisterComponent_div_14_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 56)(5, "h6", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](9, 2, item_r40 == null ? null : item_r40.value == null ? null : item_r40.value.actualAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r40 == null ? null : item_r40.value == null ? null : item_r40.value.currencyName, "");
  }
}
function CloseRegisterComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, CloseRegisterComponent_div_14_div_2_div_2_Template, 12, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 53)(4, "div", 54)(5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 56)(8, "h6", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Cheques");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 53)(16, "div", 54)(17, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 56)(20, "h6", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 53)(28, "div", 54)(29, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 56)(32, "h6", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "Bank Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 53)(40, "div", 54)(41, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 56)(44, "h6", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, "Bank Pledges");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](48, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 60)(52, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, "To close the register, please click on the button below");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div", 62)(55, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CloseRegisterComponent_div_14_div_2_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r41.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CloseRegisterComponent_div_14_div_2_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r43.CloseRegisterSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, " Close Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r6.registerSessionClosingAmounts.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](12, 5, ctx_r6.closingData == null ? null : ctx_r6.closingData.totalCollectedCheques, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](24, 8, ctx_r6.closingData == null ? null : ctx_r6.closingData.totalCollectedCards, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](36, 11, ctx_r6.closingData == null ? null : ctx_r6.closingData.totalCollectedBankTransfere, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](48, 14, ctx_r6.closingData == null ? null : ctx_r6.closingData.totalCollectedBankPledge, "2.3-3"), "");
  }
}
function CloseRegisterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, CloseRegisterComponent_div_14_ng_container_1_Template, 6, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, CloseRegisterComponent_div_14_div_2_Template, 59, 17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isClose);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isClose);
  }
}
function CloseRegisterComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 64)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.isNoOPenSessionMessage, "");
  }
}
function CloseRegisterComponent_ng_template_16_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "h5", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r44.errorMessage);
  }
}
function CloseRegisterComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, CloseRegisterComponent_ng_template_16_h5_1_Template, 3, 1, "h5", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.errorMessage);
  }
}
class CloseRegisterComponent {
  constructor(closeRegisterService, modalService, sharedService, route, fb, headerService, config, httpserviceService, _commonService, _subjectService) {
    this.closeRegisterService = closeRegisterService;
    this.modalService = modalService;
    this.sharedService = sharedService;
    this.route = route;
    this.fb = fb;
    this.headerService = headerService;
    this.httpserviceService = httpserviceService;
    this._commonService = _commonService;
    this._subjectService = _subjectService;
    this.isShow = true;
    this.items = [1, 2, 1, 2, 1, 2];
    this.submitted = false;
    this.currentDate = new Date();
    this.selected = 1;
    this.selectedTab = 'cash';
    this.pageNo = 0;
    this.errorMessage = '';
    this.closeSessionTabs = {
      cash: true,
      cheque: false,
      cards: false,
      bankTransfer: false,
      bankPledge: false
    };
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.headerService.setTitle('Close Register');
    this.registerName = this.sharedService.getRegister?.registerObj?.registersName;
    this.registerId = this.sharedService.getRegister?.registerObj?.id;
    this.branchName = this.sharedService?.getRegister?.registerObj.registeBranch.branchName;
    this.cityName = this.sharedService?.getRegister?.registerObj.registeBranch.city;
    this.getForm();
    this.GetRegisterClosingData();
    this.intervalId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
  getForm() {
    this.formGroup = this.fb.group({
      registerId: this.registerId,
      closingNotes: 0,
      registerSessionClosingAmounts: this.fb.array([])
    });
  }
  goBack() {
    this.isClose = false;
    const tabKeys = Object.keys(this.closeSessionTabs);
    tabKeys.forEach(v => this.closeSessionTabs[v] = false);
    this.closeSessionTabs.cash = true;
    this.selectedTab = tabKeys[0];
  }
  AddCurruncys() {
    return this.fb.group({
      currencyID: 0,
      registeredAmount: 0,
      actualAmount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1)],
      differenceAmount: 0,
      currencyName: ''
    });
  }
  get registerSessionClosingAmounts() {
    return this.formGroup.controls['registerSessionClosingAmounts'];
  }
  chooseTab(val) {
    if (val) {
      let keys = Object.keys(this.closeSessionTabs);
      //let lastItem = keys.pop();
      ////if (this.closeSessionTabs[lastItem]) {
      ////  this.GetRegisterClosingData();
      ////  this.isClose = true;
      ////}
      keys.forEach(v => this.closeSessionTabs[v] = false);
      this.closeSessionTabs[val] = true;
      this.selectedTab = val;
    } else {
      this.getRegisterClosingDataFinal();
      this.isClose = true;
    }
  }
  getRegisterClosingDataFinal() {
    this.closeRegisterService.getRegisterClosingDataFinal().subscribe(response => {
      console.log(response);
      if (response.isSuccess) {
        this.closingData = response.data;
      }
    });
  }
  GetRegisterClosingData() {
    return this.closeRegisterService.GetRegisterClosingData().subscribe(response => {
      if (response) {
        this.registerData = response.data;
        console.log(response);
        if (this.registerSessionClosingAmounts.length == 0) {
          for (let w = 0; w < this.registerData?.cashCollected.length; w++) {
            this.registerSessionClosingAmounts.push(this.fb.group({
              registeredAmount: this.registerData.cashCollected[w].collectedAmount,
              actualAmount: null,
              differenceAmount: 0,
              currencyID: this.registerData.cashCollected[w].currencyId,
              currencyName: this.registerData.cashCollected[w]?.currencyName[0].lookupName
            }));
          }
        }
        if (response?.Errors) {
          console.log(response.Errors);
          console.log(response.Errors[0].StatusCode);
          if (response.Errors[0].StatusCode == 82) {
            this.isNoOPenSession = true;
            this.isNoOPenSessionMessage = response?.Errors[0]?.ErrorMessageEn;
          }
        }
      }
    }, error => {
      this.errorMessage = error['error']?.Errors[0]?.ErrorMessageEn;
    });
  }
  loadPageData(event) {
    this.GetRegisterClosingData();
  }
  actualAmountFocusOut(control, index) {
    let formGroup = this.formGroup.get('registerSessionClosingAmounts').at(index);
    let value = +formGroup.controls[control].value;
    if (value > 0) {
      formGroup.controls[control].setValue(value.toFixed(3));
    }
  }
  calcDifference(event, i) {
    const mval = event.target.value;
    this.formGroup.get('registerSessionClosingAmounts')['at'](i).get('differenceAmount').patchValue(this.formGroup.get('registerSessionClosingAmounts')['at'](i).get('registeredAmount').value - mval);
  }
  removeMinusFromNegativeValue(value) {
    return Math.abs(value);
  }
  openModalEdit() {
    const modalRef = this.modalService.open(_components_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_0__.ModalEditComponent);
    modalRef.componentInstance.name = 'add';
  }
  nextStep() {
    //if (this.formGroup.invalid) {
    //  this.formGroup.markAllAsTouched();
    //  return window.scroll(0, 0);
    //}
    const tabKeys = Object.keys(this.closeSessionTabs);
    for (let i = 0; i < tabKeys.length; i++) {
      let key = tabKeys[i];
      if (this.closeSessionTabs[key]) {
        let nextKey = tabKeys[i + 1];
        this.chooseTab(nextKey);
        break;
      }
    }
    //if (this.selected == 1) {
    //  this.submitted = true;
    //  if (this.formGroup.invalid) {
    //    return window.scroll(0, 0);
    //  }
    //  if (this.formGroup.invalid) {
    //    return window.scroll(0, 0);
    //  }
    //  this.selected = 2;
    //} else if (this.selected == 2) {
    //  this.selected = 3;
    //} else if (this.selected == 3) {
    //  this.GetRegisterClosingData();
    //  this.isClose = true;
    //}
  }

  getUserMenu() {
    this.httpserviceService.GetUserMenuNew(17001).subscribe(response => {
      let userMenu = response?.data?.menu;
      for (let menu of userMenu) {
        let findItem = menu.items.find(x => x.canClick);
        if (findItem) {
          this._commonService.NavigateToRoute(findItem.url);
          console.log(findItem);
          break;
        }
      }
    });
  }
  CloseRegisterSession() {
    if (this.formGroup.invalid) {
      this.goBack();
      this.formGroup.markAllAsTouched();
      return false;
    }
    this.formGroup.get('closingNotes').patchValue(this.closingNotes);
    return this.closeRegisterService.CloseRegisterSession(this.formGroup.value).subscribe(response => {
      if (response.isSuccess) {
        this.remainedSessions = response.info.remainedSessions;
        console.log(response);
        const modalRef = this.modalService.open(_components_modal_close_modal_close_component__WEBPACK_IMPORTED_MODULE_1__.ModalCloseComponent);
        modalRef.componentInstance.type = 'success';
        modalRef.componentInstance.message = 'Close session done successfully';
        modalRef.componentInstance.remainedSessions = response.info.remainedSessions;
        modalRef.componentInstance.routeName = '/close-register';
        this._subjectService.isRegisterOpen.next(true);
        this._subjectService.sessionDetails.next({
          opened: false
        });
        //this.getUserMenu();
        modalRef.componentInstance?.loadPageData?.subscribe(result => {
          console.log('result', result);
          localStorage.removeItem('closeSession');
        });
      } else {
        console.log('error', response);
        const modalRef = this.modalService.open(_components_modal_close_modal_close_component__WEBPACK_IMPORTED_MODULE_1__.ModalCloseComponent);
        modalRef.componentInstance.type = 'error';
        modalRef.componentInstance.messageError = response.Errors;
        modalRef.componentInstance.routeName = '/close-register';
        modalRef.componentInstance.backToSecond.subscribe(result => {
          console.log('result', result);
          this.modalService.dismissAll();
          this.isClose = false;
          this.selected = 2;
        });
      }
    }, error => {
      this.errorMessage = error?.error?.errors[0]?.ErrorMessageEn;
      //this.modalService.open(this.errorModal);
      setTimeout(() => {
        //this.modalService.dismissAll();
        this.errorMessage = '';
      }, 4000);
    });
  }
}
CloseRegisterComponent.ɵfac = function CloseRegisterComponent_Factory(t) {
  return new (t || CloseRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_close_register_service__WEBPACK_IMPORTED_MODULE_2__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_4__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_5__.HttpserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_7__.SubjectService));
};
CloseRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: CloseRegisterComponent,
  selectors: [["app-close-register"]],
  viewQuery: function CloseRegisterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.errorModal = _t.first);
    }
  },
  decls: 18,
  vars: 11,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-12"], [1, "top-details"], ["class", "alert alert-danger", 4, "ngIf"], [4, "ngIf"], ["errorModal", ""], [1, "alert", "alert-danger"], ["class", "col-md-12", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["loading", ""], [1, "tab-nav"], [1, "btn", 3, "click"], [1, "d-flex", "gap-3", "align-items-center"], [1, "imag"], ["src", "assets/images/wallet.png", "alt", ""], [1, "info"], ["src", "assets/images/cheque.png", "alt", ""], ["src", "assets/images/card.png", "alt", ""], ["src", "assets/images/bt.svg", "alt", ""], ["src", "assets/images/bp.svg", "alt", ""], [1, "tab-content"], ["class", "tab-item", 4, "ngIf"], [1, "col-md-12", "mt-3"], [1, "card-collect"], [1, "col-md-8"], [1, "form-group", "mb-3"], ["rows", "4", "minlength", "200", "maxlength", "200", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btns-group", "my-1", "mx-1"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "tab-item"], [1, "card-collect", "py-2"], [1, "col-sm-4"], [1, "total-card"], [1, "total"], [3, "formGroup"], ["formArrayName", "registerSessionClosingAmounts", 4, "ngFor", "ngForOf"], [1, "pt-1", "pb-3"], ["formArrayName", "registerSessionClosingAmounts"], [1, "row", "mb-3", 3, "formGroupName"], [1, "col-sm-12"], [1, "curncy"], [1, "font-16", "fw-600", "m-0"], [1, "total-card", "justify-content-center"], [1, "actual-amount"], ["type", "text", "formControlName", "actualAmount", "appDecimalNumber", "", "required", "", 1, "form-control", 3, "change", "focusout"], [1, "total-card", "justify-content-end"], [1, "difference-amount", 3, "ngClass"], ["class", "error", 4, "ngIf"], [1, "error"], [3, "loadMainData"], [1, "main-fund-container", "d-flex", "gap-4", "mb-4", "flex-wrap"], ["class", "main-fund-wrapper", 4, "ngFor", "ngForOf"], [1, "main-fund-wrapper"], [1, "main-fund-div"], [1, "currency-symbol"], [1, "d-flex", "flex-column"], [1, "fw-700", "font-18"], [1, "fw-700", "font-18", "m-0"], [1, "primary-clr"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", 2, "height", "400px"], [1, "text-center", "m-0", "my-3"], [1, "btns-group", "justify-content-center", "m-0"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "nosession"], [1, "modal-body"], ["class", "m-0 py-3 text-center", 4, "ngIf"], [1, "m-0", "py-3", "text-center"], [1, "text-danger", "fa-regular", "fa-circle-xmark", "me-2"]],
  template: function CloseRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " \u00A0 Time ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, CloseRegisterComponent_p_13_Template, 2, 1, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, CloseRegisterComponent_div_14_Template, 3, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, CloseRegisterComponent_div_15_Template, 4, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, CloseRegisterComponent_ng_template_16_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](8, 5, ctx.currentDate, " d MMM y "), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](12, 8, ctx.currentDate, "hh:mm:ss a "), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isNoOPenSession);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isNoOPenSession);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__.LoadingComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_9__.DecimalNumberDirective, _components_collect_cheque_collect_cheque_component__WEBPACK_IMPORTED_MODULE_10__.CollectChequeComponent, _components_collect_card_collect_card_component__WEBPACK_IMPORTED_MODULE_11__.CollectCardComponent, _components_collect_bank_transfers_collect_bank_transfers_component__WEBPACK_IMPORTED_MODULE_12__.CollectBankTransfersComponent, _components_collect_bank_pledge_collect_bank_pledge_component__WEBPACK_IMPORTED_MODULE_13__.CollectBankPledgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe],
  styles: [".difference-amount[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  font-size: 14px;\n  font-weight: 600;\n  display: block;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  height: 38px;\n  min-width: 130px;\n  padding: 0px 10px;\n}\n\n.open-reg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n.open-reg[_ngcontent-%COMP%]   .bgimg[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  width: 225px;\n  height: 225px;\n  padding: 30px;\n  display: block;\n  margin: 10px auto;\n  border-radius: 50%;\n  margin-bottom: 30px;\n}\n.open-reg[_ngcontent-%COMP%]   .bgimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.open-reg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #202020;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n.open-reg[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #6d7985;\n  font-size: 18px;\n  padding: 5px;\n}\n.open-reg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6d7985;\n  font-size: 16px;\n  font-weight: 400;\n  margin: 5px;\n}\n.open-reg[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  font-size: 16px;\n  padding: 12px 50px;\n  margin: 25px 0 0;\n}\n\n.tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n  margin-bottom: 30px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ced5dd;\n  border-radius: 10px;\n  padding: 15px 20px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .imag[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background: #f8f8f8;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .imag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 3px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0px;\n  padding: 3px;\n}\n\n.actual-amount[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 130px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-size: 14px;\n  padding: 5px;\n  display: block;\n  font-weight: 500;\n}\n\n.nosession[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 30px;\n}\n\n.main-fund-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 1px solid #E9E9E9;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px 15px;\n  flex: 0 1 240px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n.main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 55px;\n  height: 55px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  padding: 8px;\n}\n.main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jbG9zZS1yZWdpc3Rlci9jbG9zZS1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUVGO0FBQUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFJO0VBQ0UsV0FBQTtBQUVOO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsNENBQUE7QUFDSjtBQUNFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUVOO0FBRE07RUFDRSxXQUFBO0FBR1I7QUFBSTtFQUNFLGlCQUFBO0FBRU47QUFETTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBR1I7QUFETTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR1I7O0FBSUU7RUFDRSxZQUFBO0FBREo7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ047QUFBTTtFQUNJLFdBQUE7QUFFViIsInNvdXJjZXNDb250ZW50IjpbIi5kaWZmZXJlbmNlLWFtb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzOHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5vcGVuLXJlZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcblxuICAuYmdpbWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgaDMge1xuICAgIGNvbG9yOiAjMjAyMDIwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgaDQge1xuICAgIGNvbG9yOiAjNmQ3OTg1O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgcCB7XG4gICAgY29sb3I6ICM2ZDc5ODU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMTJweCA1MHB4O1xuICAgIG1hcmdpbjogMjVweCAwIDA7XG4gIH1cbn1cblxuLnRhYi1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIC5idG4uYWN0aXZlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDI1cHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgfVxuICAuYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNWRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIC5pbWFnIHtcbiAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIC5pbmZvIHtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgIH1cbiAgICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYWN0dWFsLWFtb3VudCB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgfVxufVxuLmVycm9yIHtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ub3Nlc3Npb257XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAzMHB4O1xufVxuLm1haW4tZnVuZC13cmFwcGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U5RTlFOTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmbGV4OiAwIDEgMjQwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLm1haW4tZnVuZC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgLmN1cnJlbmN5LXN5bWJvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwYWRkaW5nOjhweDtcbiAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 55860:
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/close-register.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseRegisterModule": () => (/* binding */ CloseRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _close_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-register-routing.module */ 84150);
/* harmony import */ var _close_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-register.component */ 9802);
/* harmony import */ var _components_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal-edit/modal-edit.component */ 44973);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _components_collect_cheque_collect_cheque_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/collect-cheque/collect-cheque.component */ 74756);
/* harmony import */ var _components_collect_card_collect_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/collect-card/collect-card.component */ 77563);
/* harmony import */ var _components_modal_edit_card_modal_edit_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal-edit-card/modal-edit-card.component */ 79770);
/* harmony import */ var _components_modal_close_modal_close_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal-close/modal-close.component */ 88061);
/* harmony import */ var _components_collect_bank_transfers_collect_bank_transfers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/collect-bank-transfers/collect-bank-transfers.component */ 61482);
/* harmony import */ var _components_collect_bank_pledge_collect_bank_pledge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/collect-bank-pledge/collect-bank-pledge.component */ 23973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);












class CloseRegisterModule {}
CloseRegisterModule.ɵfac = function CloseRegisterModule_Factory(t) {
  return new (t || CloseRegisterModule)();
};
CloseRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: CloseRegisterModule
});
CloseRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _close_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.CloseRegisterRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CloseRegisterModule, {
    declarations: [_close_register_component__WEBPACK_IMPORTED_MODULE_1__.CloseRegisterComponent, _components_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_2__.ModalEditComponent, _components_collect_cheque_collect_cheque_component__WEBPACK_IMPORTED_MODULE_4__.CollectChequeComponent, _components_collect_card_collect_card_component__WEBPACK_IMPORTED_MODULE_5__.CollectCardComponent, _components_modal_edit_card_modal_edit_card_component__WEBPACK_IMPORTED_MODULE_6__.ModalEditCardComponent, _components_modal_close_modal_close_component__WEBPACK_IMPORTED_MODULE_7__.ModalCloseComponent, _components_collect_bank_transfers_collect_bank_transfers_component__WEBPACK_IMPORTED_MODULE_8__.CollectBankTransfersComponent, _components_collect_bank_pledge_collect_bank_pledge_component__WEBPACK_IMPORTED_MODULE_9__.CollectBankPledgeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _close_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.CloseRegisterRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 23973:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/components/collect-bank-pledge/collect-bank-pledge.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectBankPledgeComponent": () => (/* binding */ CollectBankPledgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../main-fund/bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../collect/payment-modal/view-file/view-file.component */ 32298);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _services_close_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/close-register.service */ 15070);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);

















function CollectBankPledgeComponent_div_16_tr_22_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.bank[0] == null ? null : item_r10.bank[0].lookupName, "");
  }
}
function CollectBankPledgeComponent_div_16_tr_22_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.lastBank[0] == null ? null : item_r10.lastBank[0].lookupName, "");
  }
}
function CollectBankPledgeComponent_div_16_tr_22_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_div_16_tr_22_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.reverseActionsOnBankPledge(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Undo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankPledgeComponent_div_16_tr_22_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_div_16_tr_22_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.actionsOnBankPledge(item_r10, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", item_r10.performedAction == "right" ? true :  false || item_r10.performedAction == "edit" ? true : false);
  }
}
function CollectBankPledgeComponent_div_16_tr_22_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_div_16_tr_22_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.actionsOnBankPledge(item_r10, "wrong"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", item_r10.performedAction == "wrong" ? true : false);
  }
}
function CollectBankPledgeComponent_div_16_tr_22_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_div_16_tr_22_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r30.openModalEdit(item_r10, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", item_r10.performedAction == "edit" ? true : false);
  }
}
function CollectBankPledgeComponent_div_16_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, CollectBankPledgeComponent_div_16_tr_22_td_17_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, CollectBankPledgeComponent_div_16_tr_22_td_18_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, CollectBankPledgeComponent_div_16_tr_22_button_20_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, CollectBankPledgeComponent_div_16_tr_22_button_21_Template, 2, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, CollectBankPledgeComponent_div_16_tr_22_button_22_Template, 2, 1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, CollectBankPledgeComponent_div_16_tr_22_button_23_Template, 2, 1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.custoemrName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (item_r10 == null ? null : item_r10.lastBankPledgeNumber) || (item_r10 == null ? null : item_r10.bankPledgeNumber), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](7, 12, item_r10 == null ? null : item_r10.pledgeAmountJod, "2.3-3") + " JOD", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.currency[0] == null ? null : item_r10.currency[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](12, 15, item_r10 == null ? null : item_r10.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](15, 18, item_r10 == null ? null : item_r10.lastBankPledgeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](16, 21, item_r10 == null ? null : item_r10.bankPledgeDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(item_r10 == null ? null : item_r10.lastBank == null ? null : item_r10.lastBank.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (item_r10 == null ? null : item_r10.lastBank.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r10.actionTaken == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r10.actionTaken == false || item_r10.performedAction == "right" || item_r10.performedAction == "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r10.actionTaken == false || item_r10.performedAction == "wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r10.actionTaken == false || item_r10.performedAction == "edit");
  }
}
function CollectBankPledgeComponent_div_16_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankPledgeComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9)(1, "div", 15)(2, "table", 16)(3, "thead")(4, "tr", 17)(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Bank Pledge Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Bank Pledge Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, CollectBankPledgeComponent_div_16_tr_22_Template, 24, 24, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, CollectBankPledgeComponent_div_16_div_23_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collectedData_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", collectedData_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (collectedData_r7 == null ? null : collectedData_r7.length) == 0);
  }
}
function CollectBankPledgeComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankPledgeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.collectedData == null ? null : ctx_r3.collectedData.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordsCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordsCount, " ");
  }
}
function CollectBankPledgeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "ngb-pagination", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function CollectBankPledgeComponent_div_21_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r34.pageNo = $event);
    })("pageChange", function CollectBankPledgeComponent_div_21_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", ctx_r4.totalRecordsCount)("page", ctx_r4.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function CollectBankPledgeComponent_ng_template_22_ng_container_25_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankPledgeComponent_ng_template_22_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankPledgeComponent_ng_template_22_ng_container_25_ng_container_1_span_1_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r42.formGroup == null ? null : (tmp_0_0 = ctx_r42.formGroup.get("bankPledgeNumber")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CollectBankPledgeComponent_ng_template_22_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankPledgeComponent_ng_template_22_ng_container_25_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r38.formGroup == null ? null : (tmp_0_0 = ctx_r38.formGroup.get("bankPledgeNumber")) == null ? null : tmp_0_0.invalid) && (ctx_r38.formGroup == null ? null : (tmp_0_0 = ctx_r38.formGroup.get("bankPledgeNumber")) == null ? null : tmp_0_0.touched) || (ctx_r38.formGroup == null ? null : (tmp_0_0 = ctx_r38.formGroup.get("bankPledgeNumber")) == null ? null : tmp_0_0.dirty));
  }
}
function CollectBankPledgeComponent_ng_template_22_ng_container_31_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankPledgeComponent_ng_template_22_ng_container_31_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankPledgeComponent_ng_template_22_ng_container_31_ng_container_1_span_1_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r44.formGroup == null ? null : (tmp_0_0 = ctx_r44.formGroup.get("bankId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CollectBankPledgeComponent_ng_template_22_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankPledgeComponent_ng_template_22_ng_container_31_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r39.formGroup == null ? null : (tmp_0_0 = ctx_r39.formGroup.get("bankId")) == null ? null : tmp_0_0.invalid) && (ctx_r39.formGroup == null ? null : (tmp_0_0 = ctx_r39.formGroup.get("bankId")) == null ? null : tmp_0_0.touched) || (ctx_r39.formGroup == null ? null : (tmp_0_0 = ctx_r39.formGroup.get("bankId")) == null ? null : tmp_0_0.dirty));
  }
}
function CollectBankPledgeComponent_ng_template_22_ng_container_37_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankPledgeComponent_ng_template_22_ng_container_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankPledgeComponent_ng_template_22_ng_container_37_ng_container_1_span_1_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r46.formGroup == null ? null : (tmp_0_0 = ctx_r46.formGroup.get("bankPledgeDate")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CollectBankPledgeComponent_ng_template_22_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankPledgeComponent_ng_template_22_ng_container_37_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r40.formGroup == null ? null : (tmp_0_0 = ctx_r40.formGroup.get("bankPledgeDate")) == null ? null : tmp_0_0.invalid) && (ctx_r40.formGroup == null ? null : (tmp_0_0 = ctx_r40.formGroup.get("bankPledgeDate")) == null ? null : tmp_0_0.touched) || (ctx_r40.formGroup == null ? null : (tmp_0_0 = ctx_r40.formGroup.get("bankPledgeDate")) == null ? null : tmp_0_0.dirty));
  }
}
function CollectBankPledgeComponent_ng_template_22_div_38_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_ng_template_22_div_38_div_4_div_5_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r52.fileAction("view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_ng_template_22_div_38_div_4_div_5_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r54.fileAction("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CollectBankPledgeComponent_ng_template_22_div_38_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 58)(1, "input", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CollectBankPledgeComponent_ng_template_22_div_38_div_4_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r55.onSelectFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CollectBankPledgeComponent_ng_template_22_div_38_div_4_div_5_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("text-success", ctx_r48.formGroup == null ? null : ctx_r48.formGroup.get("attachment").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r48.formGroup == null ? null : ctx_r48.formGroup.get("attachment").value) && (ctx_r48.formGroup == null ? null : ctx_r48.formGroup.get("attachment").value) || "Upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r48.formGroup == null ? null : ctx_r48.formGroup.get("attachment").value);
  }
}
function CollectBankPledgeComponent_ng_template_22_div_38_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r49.invalidFileType);
  }
}
function CollectBankPledgeComponent_ng_template_22_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "div", 40)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Pledge Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CollectBankPledgeComponent_ng_template_22_div_38_div_4_Template, 6, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CollectBankPledgeComponent_ng_template_22_div_38_span_5_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 52)(7, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 54)(10, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_ng_template_22_div_38_Template_img_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r57.viewFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r41.isNewFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r41.invalidFileType);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r41.fileDetails == null ? null : ctx_r41.fileDetails.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", ctx_r41.fileDetails == null ? null : ctx_r41.fileDetails.file, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function CollectBankPledgeComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Edit Bank Pledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submit", function CollectBankPledgeComponent_ng_template_22_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r59.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "div", 40)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Paid Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 1)(16, "div", 40)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 1)(21, "div", 40)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Bank Pledge Number*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, CollectBankPledgeComponent_ng_template_22_ng_container_25_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 1)(27, "div", 40)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "ng-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, CollectBankPledgeComponent_ng_template_22_ng_container_31_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 1)(33, "div", 40)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Bank Pledge Date*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, CollectBankPledgeComponent_ng_template_22_ng_container_37_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, CollectBankPledgeComponent_ng_template_22_div_38_Template, 13, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 9)(40, "div", 46)(41, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_ng_template_22_Template_button_click_41_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r60);
      const modal_r37 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r37.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.payerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r6.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", ctx_r6.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r6.formGroup.get("bankPledgeNumber")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r6.banks);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r6.formGroup.get("bankId")) == null ? null : tmp_5_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r6.formGroup.get("bankPledgeDate")) == null ? null : tmp_6_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.fileDetails == null ? null : ctx_r6.fileDetails.fileName);
  }
}
class CollectBankPledgeComponent {
  constructor(closeRegisterService, sharedService, _modalService, fb, _collectService, _commonService, _datePipe) {
    this.closeRegisterService = closeRegisterService;
    this.sharedService = sharedService;
    this._modalService = _modalService;
    this.fb = fb;
    this._collectService = _collectService;
    this._commonService = _commonService;
    this._datePipe = _datePipe;
    this.banks = [];
    this.payerName = '';
    this.currency = '';
    this.pageNo = 1;
    this.searchText = '';
    //FILE
    this.fileDetails = {
      fileName: '',
      file: ''
    };
    this.isNewFile = false;
    this.invalidFileType = "";
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
  }
  ngOnInit() {
    this.getCurrentSessionCollectedBankPledge();
    this.initForm();
    this.getBanks();
  }
  initForm() {
    this.formGroup = this.fb.group({
      collectionId: [''],
      paidAmountJod: [{
        value: '',
        disabled: true
      }],
      bankId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      bankPledgeDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      bankPledgeNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      pledgeAttachment: [null],
      attachment: [null]
    });
  }
  getCurrentSessionCollectedBankPledge() {
    return this.closeRegisterService.getCurrentSessionCollectedBankPledge(this.searchText, this.pageNo).subscribe(response => {
      if (response) {
        this.collectedData = response.data;
        console.log(this.collectedData);
        this.totalAllRecordsCount = response.info?.totalAllRecordsCount;
        this.totalRecordsCount = response.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecordsCount / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      }
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.getCurrentSessionCollectedBankPledge();
    window.scroll(0, 0);
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 1) {
      this.searchText = text;
      this.pageNo = 1;
      this.getCurrentSessionCollectedBankPledge();
    }
    if (text.length == 0) {
      this.pageNo = 1;
      this.getCurrentSessionCollectedBankPledge();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.getCurrentSessionCollectedBankPledge();
  }
  actionsOnBankPledge(item, type) {
    const formData = new FormData();
    formData.append('CollectionId', item.ordersBanksPledgeCollectionId);
    formData.append('Action', type);
    return this.closeRegisterService.actionsOnBankPledge(formData).subscribe(response => {
      if (response.isSuccess) {
        this.getCurrentSessionCollectedBankPledge();
      } else {
        console.log('error', response);
      }
    });
  }
  reverseActionsOnBankPledge(item) {
    const formData = new FormData();
    formData.append('ChequeCollectionId', item.ordersBanksPledgeCollectionId);
    return this.closeRegisterService.reverseActionsOnBankPledge(formData).subscribe(response => {
      if (response.isSuccess) {
        this.getCurrentSessionCollectedBankPledge();
      } else {
        console.log('error', response);
      }
    });
  }
  openModalEdit(item, content) {
    console.log(item);
    this.payerName = item?.custoemrName;
    this.currency = item?.currency[0]?.lookupName;
    let obj = {
      collectionId: item?.ordersBanksPledgeCollectionId,
      paidAmountJod: (item?.pledgeAmountJod).toFixed(3),
      bankId: item?.bankId,
      //bankPledgeDate: (new Date(item?.bankPledgeDate)).toISOString().substring(0, 10),
      bankPledgeDate: this._datePipe.transform(item?.bankPledgeDate, 'yyyy-MM-dd'),
      bankPledgeNumber: item?.bankPledgeNumber
    };
    let fileName = item?.pledgeAttachment.split('/').pop();
    this.fileDetails = {
      file: item?.pledgeAttachment,
      fileName
    };
    this.formGroup.patchValue(obj);
    this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  uploadNewFile() {
    this.isNewFile = !this.isNewFile;
  }
  viewFile() {
    const modalRef = this._modalService.open(_main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__.ViewUploadedFileComponent, {
      size: 'md'
    });
    modalRef.componentInstance.file = this.fileDetails?.file;
  }
  onSelectFile(event) {
    let files = [...event.target.files];
    let isInvalid = this._commonService.checkInvalidImageFormat(files);
    if (isInvalid) {
      document.getElementById('file-input').value = null;
      this.invalidFileType = "This file not support, supported formates: JPEG, JPG, PNG, PDF";
      setTimeout(() => {
        this.invalidFileType = '';
      }, 5000);
      return;
    }
    if (files.length > 0) {
      if (!isInvalid) {
        files.forEach(file => {
          this.uploadFile(file);
          this.formGroup.get('attachment')?.setValue(file.name);
          this._commonService.fileToBase64(file).then(response => {
            this.uploadedFile = response;
          });
        });
      }
    }
  }
  fileAction(action) {
    if (action == 'view') {
      const modelRef = this._modalService.open(_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_2__.ViewFileComponent, {
        size: 'md'
      });
      modelRef.componentInstance.imageUploadedView = this.uploadedFile;
    } else {
      //USING THIS BECAUSE WITH NG-TEMPLATE WE CAN'T GET REF OF ELEMENT AFTER COMPONETNT RENDERED IN DOM 
      document.getElementById('file-input').value = null;
      this.formGroup.get('attachment')?.setValue('');
      this.formGroup.get('pledgeAttachment')?.setValue('');
    }
  }
  uploadFile(file) {
    const formData = new FormData();
    formData.append('Folder', 'BankTransfer');
    formData.append('File', file);
    this._collectService.uploadFile(formData).subscribe(response => {
      if (response.isSuccess) {
        this.formGroup.get('pledgeAttachment')?.setValue(response['data']);
      }
    });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      let values = this.formGroup.value;
      const formData = new FormData();
      formData.append('CollectionId', values?.collectionId);
      formData.append('BankId', values?.bankId);
      formData.append('DrawerName', values?.drawerName);
      formData.append('BankPledgeDate', values?.bankPledgeDate);
      formData.append('BankPledgeNumber', values?.bankPledgeNumber);
      this.closeRegisterService.editCollectionBankPledge(formData).subscribe(response => {
        console.log(response);
        if (response.isSuccess) {
          this._modalService.dismissAll();
          this.successModal('success', 'Data saved successfully!');
          this.getCurrentSessionCollectedBankPledge();
        }
      }, error => {
        this.successModal('error', error.error['errors']);
      });
    }
  }
  successModal(type, message) {
    const modelRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_3__.ModalMessageComponent, {
      size: 'md'
    });
    modelRef.componentInstance.type = type;
    if (type == 'success') {
      modelRef.componentInstance.message = message;
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  getBanks() {
    this._collectService.getLookupsById(11).subscribe(response => {
      this.banks = response.data.map(x => {
        return {
          id: x.id,
          name: x.name[0].lookupName
        };
      });
    });
  }
}
CollectBankPledgeComponent.ɵfac = function CollectBankPledgeComponent_Factory(t) {
  return new (t || CollectBankPledgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_close_register_service__WEBPACK_IMPORTED_MODULE_4__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_6__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe));
};
CollectBankPledgeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: CollectBankPledgeComponent,
  selectors: [["app-collect-bank-pledge"]],
  outputs: {
    loadMainData: "loadMainData"
  },
  decls: 24,
  vars: 7,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "col-md-6", 4, "ngIf"], ["editModal", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "btn btn-undo", 3, "click", 4, "ngIf"], ["class", "btn btn-right", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-xmark", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-edit", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-undo", 3, "click"], ["src", "assets/images/undo.png", "alt", ""], [1, "btn", "btn-right", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-check"], [1, "btn", "btn-xmark", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-xmark"], [1, "btn", "btn-edit", 3, "disabled", "click"], [1, "fa-solid", "fa-pen"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], ["ngbAutoFocus", "", 1, "modal-body"], [1, "modal-head"], [1, "fw-700", "font-18"], [1, "fw-600", "font-16"], [1, "px-2", "gray-500", "text-capitalize"], [3, "formGroup", "submit"], [1, "form-group"], ["name", "name", "type", "text", "formControlName", "paidAmountJod", 1, "form-control"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["name", "name", "type", "text", "formControlName", "bankPledgeNumber", 1, "form-control"], ["placeholder", " Select bank ", "bindLabel", "name", "bindValue", "id", "formControlName", "bankId", 3, "items"], ["type", "date", "formControlName", "bankPledgeDate", 1, "form-control"], [1, "btns-group", "my-2"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["class", "error", 4, "ngIf"], [1, "error"], ["class", "custom-file px-2 align-items-center d-flex justify-content-between", 4, "ngIf"], [1, "file-item", "d-flex", "justify-content-between", "align-items-center", "py-2", "px-3"], [1, "fw-600", "green-clr", "mb-0"], [1, "d-flex", "gap-2", "align-items-center"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["target", "_blank", "download", "", 3, "href"], ["height", "20", "src", "assets/images/Download.png", 1, "cursor-pointer"], [1, "custom-file", "px-2", "align-items-center", "d-flex", "justify-content-between"], ["type", "file", "id", "file-input", 1, "file-input__input", 3, "change"], ["fileInput", ""], ["for", "file-input", 1, "file-input__label", "mb-0"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", "me-2", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"]],
  template: function CollectBankPledgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CollectBankPledgeComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function CollectBankPledgeComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankPledgeComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, CollectBankPledgeComponent_div_16_Template, 24, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, CollectBankPledgeComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, CollectBankPledgeComponent_div_20_Template, 9, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, CollectBankPledgeComponent_div_21_Template, 2, 6, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, CollectBankPledgeComponent_ng_template_22_Template, 45, 8, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("No. Of Pledges ", ctx.totalRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.collectedData)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n\n.custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  height: 46px;\n  border-radius: 0.375rem;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n\n.file-input__input[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.file-input__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-500);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jbG9zZS1yZWdpc3Rlci9jb21wb25lbnRzL2NvbGxlY3QtYmFuay1wbGVkZ2UvY29sbGVjdC1iYW5rLXBsZWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKOztBQUdBO0VBQ0Usc0NBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBTUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBSEo7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFITjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpOO0FBTU07RUFDRSxjQUFBO0FBSlI7QUFVSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSTtFQUNFLG1CQUFBO0FBVE47QUFXTTtFQUNFLFlBQUE7QUFUUjtBQVlNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFWUjtBQWFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQVhSO0FBZ0JFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWlCQSxTQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQWRGOztBQWlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQWRGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYnRuLXJpZ2h0IHtcbiAgY29sb3I6ICMyOWEwNzM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi14bWFyayB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5idG4tZWRpdCB7XG4gIGNvbG9yOiAjNGU5YWZmO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLXVuZG8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiAwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxufVxuXG4uY2FyZC10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAuYnRuIHtcbiAgY29sb3I6ICNhOWE5YTkgIWltcG9ydGFudDtcbn1cblxuXG5cbi5tb2RhbC1ib2R5IHtcbiAgLm1vZGFsLWhlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBsYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIH1cblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICB9XG5cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGFjY2VudC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpbGUtaXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlYjkzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cbi8qKipGSUxFKi9cbi5jdXN0b20tZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmZpbGUtaW5wdXRfX2lucHV0IHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZmlsZS1pbnB1dF9fbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWdyYXktNTAwKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61482:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/components/collect-bank-transfers/collect-bank-transfers.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectBankTransfersComponent": () => (/* binding */ CollectBankTransfersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../main-fund/bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../collect/payment-modal/view-file/view-file.component */ 32298);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _services_close_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/close-register.service */ 15070);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);

















function CollectBankTransfersComponent_div_16_tr_24_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (item_r10 == null ? null : item_r10.bankAccount == null ? null : item_r10.bankAccount.bankNameEnglish) + " - " + (item_r10 == null ? null : item_r10.bankAccount == null ? null : item_r10.bankAccount.accountName) + " - " + (item_r10 == null ? null : item_r10.bankAccount == null ? null : item_r10.bankAccount.accountNumber), "");
  }
}
function CollectBankTransfersComponent_div_16_tr_24_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (item_r10 == null ? null : item_r10.lastBankAccount == null ? null : item_r10.lastBankAccount.bankNameEnglish) + " - " + (item_r10 == null ? null : item_r10.lastBankAccount == null ? null : item_r10.lastBankAccount.accountName) + " - " + (item_r10 == null ? null : item_r10.lastBankAccount == null ? null : item_r10.lastBankAccount.accountNumber), "");
  }
}
function CollectBankTransfersComponent_div_16_tr_24_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_div_16_tr_24_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.reverseActionOnBankTransfer(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Undo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankTransfersComponent_div_16_tr_24_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_div_16_tr_24_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.actionsOnBankTransfer(item_r10, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", item_r10.performedAction == "right" ? true :  false || item_r10.performedAction == "edit" ? true : false);
  }
}
function CollectBankTransfersComponent_div_16_tr_24_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_div_16_tr_24_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.actionsOnBankTransfer(item_r10, "wrong"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", item_r10.performedAction == "wrong" ? true : false);
  }
}
function CollectBankTransfersComponent_div_16_tr_24_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_div_16_tr_24_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r30.openModalEdit(item_r10, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", item_r10.performedAction == "edit" ? true : false);
  }
}
function CollectBankTransfersComponent_div_16_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, CollectBankTransfersComponent_div_16_tr_24_td_17_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, CollectBankTransfersComponent_div_16_tr_24_td_18_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, CollectBankTransfersComponent_div_16_tr_24_button_20_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, CollectBankTransfersComponent_div_16_tr_24_button_21_Template, 2, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, CollectBankTransfersComponent_div_16_tr_24_button_22_Template, 2, 1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, CollectBankTransfersComponent_div_16_tr_24_button_23_Template, 2, 1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (item_r10 == null ? null : item_r10.lastDrawerName) || (item_r10 == null ? null : item_r10.custoemrName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (item_r10 == null ? null : item_r10.lastTransfereReference) || (item_r10 == null ? null : item_r10.transfereReference), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](7, 12, item_r10 == null ? null : item_r10.paidAmountJod, "2.3-3") + " JOD", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.currency[0] == null ? null : item_r10.currency[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](12, 15, item_r10 == null ? null : item_r10.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](15, 18, item_r10 == null ? null : item_r10.lastTransfereDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](16, 21, item_r10 == null ? null : item_r10.transfereDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(item_r10 == null ? null : item_r10.lastBankAccount == null ? null : item_r10.lastBankAccount.bankNameEnglish));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r10 == null ? null : item_r10.lastBankAccount == null ? null : item_r10.lastBankAccount.bankNameEnglish);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r10.actionTaken == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r10.actionTaken == false || item_r10.performedAction == "right" || item_r10.performedAction == "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r10.actionTaken == false || item_r10.performedAction == "wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r10.actionTaken == false || item_r10.performedAction == "edit");
  }
}
function CollectBankTransfersComponent_div_16_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankTransfersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9)(1, "div", 15)(2, "table", 16)(3, "thead")(4, "tr", 17)(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Transfer Reference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Transfer Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Markazia Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Account No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, CollectBankTransfersComponent_div_16_tr_24_Template, 24, 24, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, CollectBankTransfersComponent_div_16_div_25_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collectedData_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", collectedData_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (collectedData_r7 == null ? null : collectedData_r7.length) == 0);
  }
}
function CollectBankTransfersComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankTransfersComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.collectedData == null ? null : ctx_r3.collectedData.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordsCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordsCount, " ");
  }
}
function CollectBankTransfersComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "ngb-pagination", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function CollectBankTransfersComponent_div_21_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r34.pageNo = $event);
    })("pageChange", function CollectBankTransfersComponent_div_21_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", ctx_r4.totalRecordsCount)("page", ctx_r4.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_25_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankTransfersComponent_ng_template_22_ng_container_25_ng_container_1_span_1_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r44.formGroup == null ? null : (tmp_0_0 = ctx_r44.formGroup.get("transfereReference")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankTransfersComponent_ng_template_22_ng_container_25_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r38.formGroup == null ? null : (tmp_0_0 = ctx_r38.formGroup.get("transfereReference")) == null ? null : tmp_0_0.invalid) && (ctx_r38.formGroup == null ? null : (tmp_0_0 = ctx_r38.formGroup.get("transfereReference")) == null ? null : tmp_0_0.touched) || (ctx_r38.formGroup == null ? null : (tmp_0_0 = ctx_r38.formGroup.get("transfereReference")) == null ? null : tmp_0_0.dirty));
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r46 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((item_r46 == null ? null : item_r46.name) + " - " + (item_r46 == null ? null : item_r46.accountName) + " - " + (item_r46 == null ? null : item_r46.accountNumber));
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_32_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_32_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankTransfersComponent_ng_template_22_ng_container_32_ng_container_1_span_1_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r47.formGroup == null ? null : (tmp_0_0 = ctx_r47.formGroup.get("bankId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankTransfersComponent_ng_template_22_ng_container_32_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r40.formGroup == null ? null : (tmp_0_0 = ctx_r40.formGroup.get("bankId")) == null ? null : tmp_0_0.invalid) && (ctx_r40.formGroup == null ? null : (tmp_0_0 = ctx_r40.formGroup.get("bankId")) == null ? null : tmp_0_0.touched) || (ctx_r40.formGroup == null ? null : (tmp_0_0 = ctx_r40.formGroup.get("bankId")) == null ? null : tmp_0_0.dirty));
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_38_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_38_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankTransfersComponent_ng_template_22_ng_container_38_ng_container_1_span_1_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r49.formGroup == null ? null : (tmp_0_0 = ctx_r49.formGroup.get("drawerName")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankTransfersComponent_ng_template_22_ng_container_38_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r41.formGroup == null ? null : (tmp_0_0 = ctx_r41.formGroup.get("drawerName")) == null ? null : tmp_0_0.invalid) && (ctx_r41.formGroup == null ? null : (tmp_0_0 = ctx_r41.formGroup.get("drawerName")) == null ? null : tmp_0_0.touched) || (ctx_r41.formGroup == null ? null : (tmp_0_0 = ctx_r41.formGroup.get("drawerName")) == null ? null : tmp_0_0.dirty));
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_44_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankTransfersComponent_ng_template_22_ng_container_44_ng_container_1_span_1_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r51.formGroup == null ? null : (tmp_0_0 = ctx_r51.formGroup.get("transfereDate")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CollectBankTransfersComponent_ng_template_22_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectBankTransfersComponent_ng_template_22_ng_container_44_ng_container_1_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r42.formGroup == null ? null : (tmp_0_0 = ctx_r42.formGroup.get("transfereDate")) == null ? null : tmp_0_0.invalid) && (ctx_r42.formGroup == null ? null : (tmp_0_0 = ctx_r42.formGroup.get("transfereDate")) == null ? null : tmp_0_0.touched) || (ctx_r42.formGroup == null ? null : (tmp_0_0 = ctx_r42.formGroup.get("transfereDate")) == null ? null : tmp_0_0.dirty));
  }
}
function CollectBankTransfersComponent_ng_template_22_div_51_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_ng_template_22_div_51_div_4_div_5_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r57.fileAction("view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_ng_template_22_div_51_div_4_div_5_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r59.fileAction("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CollectBankTransfersComponent_ng_template_22_div_51_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 61)(1, "input", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CollectBankTransfersComponent_ng_template_22_div_51_div_4_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r60.onSelectFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CollectBankTransfersComponent_ng_template_22_div_51_div_4_div_5_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("text-success", ctx_r53.formGroup == null ? null : ctx_r53.formGroup.get("attachment").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r53.formGroup == null ? null : ctx_r53.formGroup.get("attachment").value) && (ctx_r53.formGroup == null ? null : ctx_r53.formGroup.get("attachment").value) || "Upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r53.formGroup == null ? null : ctx_r53.formGroup.get("attachment").value);
  }
}
function CollectBankTransfersComponent_ng_template_22_div_51_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r54.invalidFileType);
  }
}
function CollectBankTransfersComponent_ng_template_22_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "div", 40)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Transfer Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CollectBankTransfersComponent_ng_template_22_div_51_div_4_Template, 6, 4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CollectBankTransfersComponent_ng_template_22_div_51_span_5_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 55)(7, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 57)(10, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_ng_template_22_div_51_Template_img_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r62.viewFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r43.isNewFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r43.invalidFileType);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r43.fileDetails == null ? null : ctx_r43.fileDetails.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", ctx_r43.fileDetails == null ? null : ctx_r43.fileDetails.file, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function CollectBankTransfersComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Edit Bank Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submit", function CollectBankTransfersComponent_ng_template_22_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r64.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "div", 40)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Paid Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 1)(16, "div", 40)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 1)(21, "div", 40)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Transfer Reference* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, CollectBankTransfersComponent_ng_template_22_ng_container_25_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 1)(27, "div", 40)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Markazia Bank Account No.*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "ng-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, CollectBankTransfersComponent_ng_template_22_ng_template_31_Template, 2, 1, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, CollectBankTransfersComponent_ng_template_22_ng_container_32_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 1)(34, "div", 40)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Payer Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, CollectBankTransfersComponent_ng_template_22_ng_container_38_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 1)(40, "div", 40)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Transfer Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, CollectBankTransfersComponent_ng_template_22_ng_container_44_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 1)(46, "div", 40)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Same Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div")(50, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CollectBankTransfersComponent_ng_template_22_Template_input_change_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r66.sameCustomer($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, CollectBankTransfersComponent_ng_template_22_div_51_Template, 13, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 9)(53, "div", 49)(54, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_ng_template_22_Template_button_click_54_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65);
      const modal_r37 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r37.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.payerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r6.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", ctx_r6.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r6.formGroup.get("transfereReference")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r6.banks);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r6.formGroup.get("bankId")) == null ? null : tmp_5_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r6.formGroup.get("drawerName")) == null ? null : tmp_6_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r6.formGroup.get("transfereDate")) == null ? null : tmp_7_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.fileDetails == null ? null : ctx_r6.fileDetails.fileName);
  }
}
class CollectBankTransfersComponent {
  constructor(closeRegisterService, sharedService, _modalService, fb, _collectService, _commonService, _datePipe) {
    this.closeRegisterService = closeRegisterService;
    this.sharedService = sharedService;
    this._modalService = _modalService;
    this.fb = fb;
    this._collectService = _collectService;
    this._commonService = _commonService;
    this._datePipe = _datePipe;
    this.banks = [];
    this.payerName = '';
    this.currency = '';
    this.pageNo = 1;
    this.searchText = '';
    //FILE
    this.fileDetails = {
      fileName: '',
      file: ''
    };
    this.isNewFile = false;
    this.invalidFileType = "";
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
  }
  ngOnInit() {
    this.getCurrentSessionCollectedBankTransfere();
    this.initForm();
    this.getBankAccounts();
  }
  initForm() {
    this.formGroup = this.fb.group({
      collectionId: [''],
      paidAmountJod: [{
        value: '',
        disabled: true
      }],
      bankId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      drawerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      transfereDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      transfereReference: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      transfereAttachment: [null],
      attachment: [null]
    });
  }
  getCurrentSessionCollectedBankTransfere() {
    return this.closeRegisterService.getCurrentSessionCollectedBankTransfere(this.searchText, this.pageNo).subscribe(response => {
      if (response) {
        this.collectedData = response.data;
        console.log(this.collectedData);
        this.totalAllRecordsCount = response.info?.totalAllRecordsCount;
        this.totalRecordsCount = response.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecordsCount / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      }
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.getCurrentSessionCollectedBankTransfere();
    window.scroll(0, 0);
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 1) {
      this.searchText = text;
      this.pageNo = 1;
      this.getCurrentSessionCollectedBankTransfere();
    }
    if (text.length == 0) {
      this.pageNo = 1;
      this.getCurrentSessionCollectedBankTransfere();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.getCurrentSessionCollectedBankTransfere();
  }
  actionsOnBankTransfer(item, type) {
    const formData = new FormData();
    formData.append('CollectionId', item.orderBankTransfereCollectionId);
    formData.append('Action', type);
    return this.closeRegisterService.actionsOnBankTransfere(formData).subscribe(response => {
      if (response.isSuccess) {
        this.getCurrentSessionCollectedBankTransfere();
      } else {
        console.log('error', response);
      }
    });
  }
  reverseActionOnBankTransfer(item) {
    const formData = new FormData();
    formData.append('ChequeCollectionId', item.orderBankTransfereCollectionId);
    return this.closeRegisterService.reverseActionsOnBankTransfere(formData).subscribe(response => {
      if (response.isSuccess) {
        this.getCurrentSessionCollectedBankTransfere();
      } else {
        console.log('error', response);
      }
    });
  }
  openModalEdit(item, content) {
    console.log(item);
    this.payerName = item?.custoemrName;
    this.currency = item?.currency[0]?.lookupName;
    let obj = {
      collectionId: item?.orderBankTransfereCollectionId,
      paidAmountJod: (item?.paidAmountJod).toFixed(3),
      bankId: item?.bankAccount?.accountId,
      //transfereDate: (new Date(item?.transfereDate)).toISOString().substring(0, 10),
      transfereDate: this._datePipe.transform(item?.transfereDate, 'yyyy-MM-dd'),
      transfereReference: item?.transfereReference,
      drawerName: item?.cardPayerName
    };
    let fileName = item?.transfereAttachment.split('/').pop();
    this.fileDetails = {
      file: item?.transfereAttachment,
      fileName
    };
    this.formGroup.patchValue(obj);
    this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  uploadNewFile() {
    this.isNewFile = !this.isNewFile;
  }
  viewFile() {
    const modalRef = this._modalService.open(_main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__.ViewUploadedFileComponent, {
      size: 'md'
    });
    modalRef.componentInstance.file = this.fileDetails?.file;
  }
  onSelectFile(event) {
    let files = [...event.target.files];
    let isInvalid = this._commonService.checkInvalidImageFormat(files);
    if (isInvalid) {
      document.getElementById('file-input').value = null;
      this.invalidFileType = "This file not support, supported formates: JPEG, JPG, PNG, PDF";
      setTimeout(() => {
        this.invalidFileType = '';
      }, 5000);
      return;
    }
    if (files.length > 0) {
      if (!isInvalid) {
        files.forEach(file => {
          this.uploadFile(file);
          this.formGroup.get('attachment')?.setValue(file.name);
          this._commonService.fileToBase64(file).then(response => {
            this.uploadedFile = response;
          });
        });
      }
    }
  }
  fileAction(action) {
    if (action == 'view') {
      const modelRef = this._modalService.open(_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_2__.ViewFileComponent, {
        size: 'md'
      });
      modelRef.componentInstance.imageUploadedView = this.uploadedFile;
    } else {
      //USING THIS BECAUSE WITH NG-TEMPLATE WE CAN'T GET REF OF ELEMENT AFTER COMPONETNT RENDERED IN DOM 
      document.getElementById('file-input').value = null;
      this.formGroup.get('attachment')?.setValue('');
      this.formGroup.get('transfereAttachment')?.setValue('');
    }
  }
  uploadFile(file) {
    const formData = new FormData();
    formData.append('Folder', 'BankTransfer');
    formData.append('File', file);
    this._collectService.uploadFile(formData).subscribe(response => {
      if (response.isSuccess) {
        this.formGroup.get('transfereAttachment')?.setValue(response['data']);
      }
    });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      let values = this.formGroup.value;
      const formData = new FormData();
      formData.append('CollectionId', values?.collectionId);
      formData.append('BankId', values?.bankId);
      formData.append('DrawerName', values?.drawerName);
      formData.append('TransfereDate', values?.transfereDate);
      formData.append('TransfereReference', values?.transfereReference);
      this.closeRegisterService.editCollectionBankTransfere(formData).subscribe(response => {
        console.log(response);
        if (response.isSuccess) {
          this._modalService.dismissAll();
          this.successModal('success', 'Data saved successfully!');
          this.getCurrentSessionCollectedBankTransfere();
        }
      }, error => {
        this.successModal('error', error.error['errors']);
      });
    }
  }
  successModal(type, message) {
    const modelRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_3__.ModalMessageComponent, {
      size: 'md'
    });
    modelRef.componentInstance.type = type;
    if (type == 'success') {
      modelRef.componentInstance.message = message;
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  getBankAccounts() {
    let params = `?AccountType=15001&currencyId=9001&Status=2001&PageNo=0&PageSize=1000`;
    this._collectService.getBankAccounts(params).subscribe(response => {
      if (response.isSuccess) {
        this.banks = response['data'].map(x => {
          return {
            id: x.accountId,
            name: x.bankNameEnglish,
            accountName: x.accountName,
            accountNumber: x.accountNumber
          };
        });
      }
    });
  }
  sameCustomer(event) {
    let value = event?.target?.checked;
    if (value) this.formGroup.get('drawerName').setValue(this.payerName);else this.formGroup.get('drawerName').setValue('');
  }
}
CollectBankTransfersComponent.ɵfac = function CollectBankTransfersComponent_Factory(t) {
  return new (t || CollectBankTransfersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_close_register_service__WEBPACK_IMPORTED_MODULE_4__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_6__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe));
};
CollectBankTransfersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: CollectBankTransfersComponent,
  selectors: [["app-collect-bank-transfers"]],
  outputs: {
    loadMainData: "loadMainData"
  },
  decls: 24,
  vars: 7,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "col-md-6", 4, "ngIf"], ["editModal", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "btn btn-undo", 3, "click", 4, "ngIf"], ["class", "btn btn-right", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-xmark", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-edit", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-undo", 3, "click"], ["src", "assets/images/undo.png", "alt", ""], [1, "btn", "btn-right", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-check"], [1, "btn", "btn-xmark", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-xmark"], [1, "btn", "btn-edit", 3, "disabled", "click"], [1, "fa-solid", "fa-pen"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], ["ngbAutoFocus", "", 1, "modal-body"], [1, "modal-head"], [1, "fw-700", "font-18"], [1, "fw-600", "font-16"], [1, "px-2", "gray-500", "text-capitalize"], [3, "formGroup", "submit"], [1, "form-group"], ["name", "name", "type", "text", "formControlName", "paidAmountJod", 1, "form-control"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["name", "name", "type", "text", "formControlName", "transfereReference", 1, "form-control"], ["placeholder", " Select bank ", "bindLabel", "name", "bindValue", "id", "formControlName", "bankId", 3, "items"], ["ng-option-tmp", ""], ["type", "text", "formControlName", "drawerName", 1, "form-control"], ["type", "date", "formControlName", "transfereDate", 1, "form-control"], ["type", "checkbox", 1, "form-check-input", 3, "change"], [1, "btns-group", "my-2"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["class", "error", 4, "ngIf"], [1, "error"], ["class", "custom-file px-2 align-items-center d-flex justify-content-between", 4, "ngIf"], [1, "file-item", "d-flex", "justify-content-between", "align-items-center", "py-2", "px-3"], [1, "fw-600", "green-clr", "mb-0"], [1, "d-flex", "gap-2", "align-items-center"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["target", "_blank", "download", "", 3, "href"], ["height", "20", "src", "assets/images/Download.png", 1, "cursor-pointer"], [1, "custom-file", "px-2", "align-items-center", "d-flex", "justify-content-between"], ["type", "file", "id", "file-input", 1, "file-input__input", 3, "change"], ["fileInput", ""], ["for", "file-input", 1, "file-input__label", "mb-0"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", "me-2", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"]],
  template: function CollectBankTransfersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CollectBankTransfersComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function CollectBankTransfersComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectBankTransfersComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, CollectBankTransfersComponent_div_16_Template, 26, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, CollectBankTransfersComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, CollectBankTransfersComponent_div_20_Template, 9, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, CollectBankTransfersComponent_div_21_Template, 2, 6, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, CollectBankTransfersComponent_ng_template_22_Template, 58, 9, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("No. Of Transfers ", ctx.totalRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.collectedData)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptionTemplateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n\n.custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  height: 46px;\n  border-radius: 0.375rem;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n\n.file-input__input[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.file-input__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-500);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jbG9zZS1yZWdpc3Rlci9jb21wb25lbnRzL2NvbGxlY3QtYmFuay10cmFuc2ZlcnMvY29sbGVjdC1iYW5rLXRyYW5zZmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKOztBQUdBO0VBQ0Usc0NBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBTUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBSEo7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFITjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpOO0FBTU07RUFDRSxjQUFBO0FBSlI7QUFVSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSTtFQUNFLG1CQUFBO0FBVE47QUFXTTtFQUNFLFlBQUE7QUFUUjtBQVlNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFWUjtBQWFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQVhSO0FBZUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBYko7O0FBZ0JBLFNBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFiRjs7QUFnQkE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBYkYiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5idG4tcmlnaHQge1xuICBjb2xvcjogIzI5YTA3MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLXhtYXJrIHtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi1lZGl0IHtcbiAgY29sb3I6ICM0ZTlhZmY7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5idG4tdW5kbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDBweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG5cbi5jYXJkLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5idG4ge1xuICBjb2xvcjogI2E5YTlhOSAhaW1wb3J0YW50O1xufVxuXG5cblxuLm1vZGFsLWJvZHkge1xuICAubW9kYWwtaGVhZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvcm0ge1xuICAgIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZpbGUtaXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlYjkzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cbi8qKipGSUxFKi9cbi5jdXN0b20tZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmZpbGUtaW5wdXRfX2lucHV0IHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZmlsZS1pbnB1dF9fbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWdyYXktNTAwKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 77563:
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/components/collect-card/collect-card.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectCardComponent": () => (/* binding */ CollectCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _modal_edit_card_modal_edit_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-edit-card/modal-edit-card.component */ 79770);
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/confirm-modal/confirm-modal.component */ 87192);
/* harmony import */ var _services_close_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/close-register.service */ 15070);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);














function CollectCardComponent_div_19_tr_24_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CollectCardComponent_div_19_tr_24_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.ReverseActionsOnCard(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Undo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CollectCardComponent_div_19_tr_24_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CollectCardComponent_div_19_tr_24_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.ActionsOnCard(item_r8, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r8.performedAction == "right" ? true :  false || item_r8.performedAction == "edit" ? true : false);
  }
}
function CollectCardComponent_div_19_tr_24_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CollectCardComponent_div_19_tr_24_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.ActionsOnCard(item_r8, "wrong"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r8.performedAction == "wrong" ? true : false);
  }
}
function CollectCardComponent_div_19_tr_24_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CollectCardComponent_div_19_tr_24_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.openModalEdit(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r8.performedAction == "edit" ? true : false);
  }
}
function CollectCardComponent_div_19_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, CollectCardComponent_div_19_tr_24_button_20_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, CollectCardComponent_div_19_tr_24_button_21_Template, 2, 1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, CollectCardComponent_div_19_tr_24_button_22_Template, 2, 1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, CollectCardComponent_div_19_tr_24_button_23_Template, 2, 1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r8.customer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r8.paymentCardType[0] == null ? null : item_r8.paymentCardType[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r8.lastCardLast4Digits || (item_r8 == null ? null : item_r8.cardLast4Digits), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r8 == null ? null : item_r8.lastMachineReceiptNumber) || (item_r8 == null ? null : item_r8.machineReceiptNumber), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r8 == null ? null : item_r8.lastCardProvide == null ? null : item_r8.lastCardProvide.providerName) || (item_r8 == null ? null : item_r8.cardProvide == null ? null : item_r8.cardProvide.providerName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](13, 12, item_r8 == null ? null : item_r8.cardCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r8 == null ? null : item_r8.currency[0] == null ? null : item_r8.currency[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](18, 15, item_r8 == null ? null : item_r8.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r8.actionTaken == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r8.actionTaken == false || item_r8.performedAction == "right" || item_r8.performedAction == "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r8.actionTaken == false || item_r8.performedAction == "wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r8.actionTaken == false || item_r8.performedAction == "edit");
  }
}
function CollectCardComponent_div_19_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CollectCardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13)(1, "div", 18)(2, "table", 19)(3, "thead")(4, "tr", 20)(5, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Card type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Last 4 Digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Machine Receipt No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Terminal Provider ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, CollectCardComponent_div_19_tr_24_Template, 24, 18, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, CollectCardComponent_div_19_div_25_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collectedData_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", collectedData_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (collectedData_r5 == null ? null : collectedData_r5.length) == 0);
  }
}
function CollectCardComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CollectCardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.collectedData == null ? null : ctx_r3.collectedData.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordsCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordsCount, " ");
  }
}
function CollectCardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "ngb-pagination", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function CollectCardComponent_div_24_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.pageNo = $event);
    })("pageChange", function CollectCardComponent_div_24_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r4.totalRecordsCount)("page", ctx_r4.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
class CollectCardComponent {
  constructor(closeRegisterService, sharedService, modalService, _spinnerService) {
    this.closeRegisterService = closeRegisterService;
    this.sharedService = sharedService;
    this.modalService = modalService;
    this._spinnerService = _spinnerService;
    this.pageNo = 1;
    this.searchText = '';
    this.groupActionFlag = false;
    this.cardCollectionIds = '';
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
  }
  ngOnInit() {
    this.GetCurrentSessionCollectedCard();
    this.getCurrentSessionCollectedCardAll();
  }
  confirmGrouping() {
    if (!this.cardCollectionIds) return;
    const ref = this.modalService.open(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmModalComponent, {
      centered: true
    });
    ref.componentInstance.data = {
      body: 'Are you sure you want to accept all cards?'
    };
    ref.componentInstance.eventData.subscribe(x => {
      if (x) {
        this.groupActionsOnCard();
      }
    });
  }
  getCurrentSessionCollectedCardAll() {
    return this.closeRegisterService.GetCurrentSessionCollectedCard('', 1, 1000).subscribe(response => {
      if (response) {
        let data = response.data;
        this.groupActionFlag = data.every(x => x.actionTaken);
        this.cardCollectionIds = data.map(x => x.ordersCardsCollectionId).toString();
      }
    });
  }
  groupActionsOnCard() {
    this._spinnerService.show();
    const formData = new FormData();
    formData.append('OrdersCardsCollectionIds', this.cardCollectionIds);
    formData.append('Action', 'right');
    this.closeRegisterService.actionsOnCardGroup(formData).subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', 'The action done successfully');
          this.GetCurrentSessionCollectedCard();
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors);
      }
    }).add(() => this._spinnerService.hide());
  }
  responseModal(type, message) {
    const ref = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
    ref.componentInstance.type = type;
    if (type == 'success') ref.componentInstance.message = message;else ref.componentInstance.messageError = message;
  }
  GetCurrentSessionCollectedCard() {
    return this.closeRegisterService.GetCurrentSessionCollectedCard(this.searchText, this.pageNo).subscribe(response => {
      if (response) {
        console.log(response);
        this.collectedData = response.data;
        this.totalAllRecordsCount = response.info?.totalAllRecordsCount;
        this.totalRecordsCount = response.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecordsCount / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      }
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.GetCurrentSessionCollectedCard();
    window.scroll(0, 0);
  }
  searchData(event) {
    console.log(event?.target.value);
    const text = event.target.value;
    console.log(text.length);
    if (text.length >= 3) {
      this.searchText = text;
      this.pageNo = 1;
      this.GetCurrentSessionCollectedCard();
    }
    if (text.length == 0) {
      this.pageNo = 1;
      this.GetCurrentSessionCollectedCard();
    }
  }
  removeSearch() {
    this.searchText = '';
    // this.sort = 1;
    this.GetCurrentSessionCollectedCard();
  }
  ActionsOnCard(item, type) {
    const formData = new FormData();
    formData.append('OrdersCardsCollectionId', item.ordersCardsCollectionId);
    formData.append('Action', type);
    console.log(formData);
    return this.closeRegisterService.ActionsOnCard(formData).subscribe(response => {
      if (response) {
        this.GetCurrentSessionCollectedCard();
        this.getCurrentSessionCollectedCardAll();
      } else {
        console.log('error', response);
      }
    });
  }
  ReverseActionsOnCard(item) {
    const formData = new FormData();
    formData.append('OrdersCardsCollectionId', item.ordersCardsCollectionId);
    console.log(formData);
    return this.closeRegisterService.ReverseActionsOnCard(formData).subscribe(response => {
      if (response) {
        this.GetCurrentSessionCollectedCard();
        this.getCurrentSessionCollectedCardAll();
      } else {
        console.log('error', response);
      }
    });
  }
  openModalEdit(item) {
    const modalRef = this.modalService.open(_modal_edit_card_modal_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.ModalEditCardComponent);
    modalRef.componentInstance.details = item;
    modalRef.componentInstance.loadPageData.subscribe(result => {
      console.log('result', result);
      this.GetCurrentSessionCollectedCard();
      this.loadMainData.emit();
    });
  }
}
CollectCardComponent.ɵfac = function CollectCardComponent_Factory(t) {
  return new (t || CollectCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_close_register_service__WEBPACK_IMPORTED_MODULE_4__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService));
};
CollectCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CollectCardComponent,
  selectors: [["app-collect-card"]],
  outputs: {
    loadMainData: "loadMainData"
  },
  decls: 25,
  vars: 8,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "col-md-6", "d-flex", "justify-content-end", "align-items-center", "gap-2"], [1, "btns-group", "m-0"], ["type", "button", 1, "font-14", "btn", "btn-save", "py-2", "px-3", 3, "disabled", "click"], [1, "top-details", "justify-content-end"], [1, "m-0"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "col-md-6", 4, "ngIf"], [1, "table-responsive"], [1, "table"], [1, "py-2"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "btn btn-undo", 3, "click", 4, "ngIf"], ["class", "btn btn-right", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-xmark", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-edit", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-undo", 3, "click"], ["src", "assets/images/undo.png", "alt", ""], [1, "btn", "btn-right", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-check"], [1, "btn", "btn-xmark", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-xmark"], [1, "btn", "btn-edit", 3, "disabled", "click"], [1, "fa-solid", "fa-pen"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function CollectCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CollectCardComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CollectCardComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function CollectCardComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CollectCardComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CollectCardComponent_Template_button_click_10_listener() {
        return ctx.confirmGrouping();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Accept All");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 11)(13, "p", 12)(14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, CollectCardComponent_div_19_Template, 26, 2, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, CollectCardComponent_ng_template_21_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, CollectCardComponent_div_23_Template, 9, 3, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, CollectCardComponent_div_24_Template, 2, 6, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.groupActionFlag);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No. Of Transactions ", ctx.totalRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.collectedData)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  font-size: 18px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jbG9zZS1yZWdpc3Rlci9jb21wb25lbnRzL2NvbGxlY3QtY2FyZC9jb2xsZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUlGO0FBSEc7RUFDQyxXQUFBO0FBS0o7O0FBRkE7RUFDRSxzQ0FBQTtBQUtGOztBQUhBO0VBQ0UseUJBQUE7QUFNRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmJ0bi1yaWdodCB7XG4gIGNvbG9yOiAjMjlhMDczO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG4uYnRuLXhtYXJrIHtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cbi5idG4tZWRpdCB7XG4gIGNvbG9yOiAjNGU5YWZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG4uYnRuLXVuZG8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiAwcHg7XG4gICBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG4uY2FyZC10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweCAhaW1wb3J0YW50O1xufVxuLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLmJ0biB7XG4gIGNvbG9yOiAjYTlhOWE5ICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 74756:
/*!****************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/components/collect-cheque/collect-cheque.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectChequeComponent": () => (/* binding */ CollectChequeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-edit/modal-edit.component */ 44973);
/* harmony import */ var _services_close_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/close-register.service */ 15070);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);











function CollectChequeComponent_div_16_tr_22_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CollectChequeComponent_div_16_tr_22_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.ReverseActionsOnCheques(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Undo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CollectChequeComponent_div_16_tr_22_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CollectChequeComponent_div_16_tr_22_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.ActionsOnCheques(item_r8, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", item_r8.performedAction == "right" ? true :  false || item_r8.performedAction == "edit" ? true : false);
  }
}
function CollectChequeComponent_div_16_tr_22_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CollectChequeComponent_div_16_tr_22_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.ActionsOnCheques(item_r8, "wrong"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", item_r8.performedAction == "wrong" ? true : false);
  }
}
function CollectChequeComponent_div_16_tr_22_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CollectChequeComponent_div_16_tr_22_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.openModalEdit(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", item_r8.performedAction == "edit" ? true : false);
  }
}
function CollectChequeComponent_div_16_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CollectChequeComponent_div_16_tr_22_button_20_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CollectChequeComponent_div_16_tr_22_button_21_Template, 2, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CollectChequeComponent_div_16_tr_22_button_22_Template, 2, 1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CollectChequeComponent_div_16_tr_22_button_23_Template, 2, 1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r8.chequeCustomer ? item_r8.chequeCustomer : item_r8.chequeCustomer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r8.lastChequeNo ? item_r8.lastChequeNo : item_r8.chequeNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 11, (item_r8 == null ? null : item_r8.chequeCollectionJod) || (item_r8 == null ? null : item_r8.lastAmountToPay), "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r8 == null ? null : item_r8.currency[0] == null ? null : item_r8.currency[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 14, item_r8 == null ? null : item_r8.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r8.lastCheckDate ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](15, 17, item_r8.lastCheckDate, " d MMM y") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 20, item_r8.chequeDate, " d MMM y"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (item_r8.lastBank[0] == null ? null : item_r8.lastBank[0].lookupName) ? item_r8.lastBank[0] == null ? null : item_r8.lastBank[0].lookupName : item_r8.bank[0] == null ? null : item_r8.bank[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r8.actionTaken == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r8.actionTaken == false || item_r8.performedAction == "right" || item_r8.performedAction == "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r8.actionTaken == false || item_r8.performedAction == "wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r8.actionTaken == false || item_r8.performedAction == "edit");
  }
}
function CollectChequeComponent_div_16_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CollectChequeComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9)(1, "div", 14)(2, "table", 15)(3, "thead")(4, "tr", 16)(5, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Cheque No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CollectChequeComponent_div_16_tr_22_Template, 24, 23, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CollectChequeComponent_div_16_div_23_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collectedData_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", collectedData_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (collectedData_r5 == null ? null : collectedData_r5.length) == 0);
  }
}
function CollectChequeComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CollectChequeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.collectedData == null ? null : ctx_r3.collectedData.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordsCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordsCount, " ");
  }
}
function CollectChequeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "ngb-pagination", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function CollectChequeComponent_div_21_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.pageNo = $event);
    })("pageChange", function CollectChequeComponent_div_21_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collectionSize", ctx_r4.totalRecordsCount)("page", ctx_r4.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
class CollectChequeComponent {
  constructor(closeRegisterService, sharedService, modalService) {
    this.closeRegisterService = closeRegisterService;
    this.sharedService = sharedService;
    this.modalService = modalService;
    this.pageNo = 1;
    this.searchText = '';
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  ngOnInit() {
    this.GetCurrentSessionCollectedCheques();
  }
  GetCurrentSessionCollectedCheques() {
    return this.closeRegisterService.GetCurrentSessionCollectedCheques(this.searchText, this.pageNo).subscribe(response => {
      if (response) {
        this.collectedData = response.data;
        this.totalAllRecordsCount = response.info?.totalAllRecordsCount;
        this.totalRecordsCount = response.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecordsCount / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      }
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.GetCurrentSessionCollectedCheques();
    window.scroll(0, 0);
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 3) {
      this.searchText = text;
      this.pageNo = 1;
      this.GetCurrentSessionCollectedCheques();
    }
    if (text.length == 0) {
      this.pageNo = 1;
      this.GetCurrentSessionCollectedCheques();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.GetCurrentSessionCollectedCheques();
  }
  ActionsOnCheques(item, type) {
    const formData = new FormData();
    formData.append('ChequeCollectionId', item.chequeCollectionId);
    formData.append('Action', type);
    return this.closeRegisterService.ActionsOnCheques(formData).subscribe(response => {
      if (response.isSuccess == true) {
        this.GetCurrentSessionCollectedCheques();
      } else {
        console.log('error', response);
      }
    });
  }
  ReverseActionsOnCheques(item) {
    const formData = new FormData();
    formData.append('ChequeCollectionId', item.chequeCollectionId);
    return this.closeRegisterService.ReverseActionsOnCheques(formData).subscribe(response => {
      if (response.isSuccess == true) {
        this.GetCurrentSessionCollectedCheques();
      } else {
        console.log('error', response);
      }
    });
  }
  openModalEdit(item) {
    const modalRef = this.modalService.open(_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_1__.ModalEditComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.details = item;
    modalRef.componentInstance.loadPageData.subscribe(result => {
      this.GetCurrentSessionCollectedCheques();
      this.loadMainData.emit();
    });
  }
}
CollectChequeComponent.ɵfac = function CollectChequeComponent_Factory(t) {
  return new (t || CollectChequeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_close_register_service__WEBPACK_IMPORTED_MODULE_2__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal));
};
CollectChequeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CollectChequeComponent,
  selectors: [["app-collect-cheque"]],
  outputs: {
    loadMainData: "loadMainData"
  },
  decls: 22,
  vars: 7,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "col-md-6", 4, "ngIf"], [1, "table-responsive"], [1, "table"], [1, "py-2"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "btn btn-undo", 3, "click", 4, "ngIf"], ["class", "btn btn-right", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-xmark", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-edit", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-undo", 3, "click"], ["src", "assets/images/undo.png", "alt", ""], [1, "btn", "btn-right", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-check"], [1, "btn", "btn-xmark", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-xmark"], [1, "btn", "btn-edit", 3, "disabled", "click"], [1, "fa-solid", "fa-pen"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function CollectChequeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CollectChequeComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CollectChequeComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function CollectChequeComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CollectChequeComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, CollectChequeComponent_div_16_Template, 24, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CollectChequeComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CollectChequeComponent_div_20_Template, 9, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CollectChequeComponent_div_21_Template, 2, 6, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" No. Of Cheque ", ctx.totalRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.collectedData)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  \n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jbG9zZS1yZWdpc3Rlci9jb21wb25lbnRzL2NvbGxlY3QtY2hlcXVlL2NvbGxlY3QtY2hlcXVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDRjtHQUFBO0VBQ0ksZ0JBQUE7RUFDRixlQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFLRjtBQUpHO0VBQ0MsV0FBQTtBQU1KOztBQUhBO0VBQ0Usc0NBQUE7QUFNRjs7QUFKQTtFQUNFLHlCQUFBO0FBT0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5idG4tcmlnaHQge1xuICBjb2xvcjogIzI5YTA3MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuLmJ0bi14bWFyayB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG4uYnRuLWVkaXQge1xuICBjb2xvcjogIzRlOWFmZjtcbi8qICBmb250LXNpemU6IDIxOHg7XG4qLyAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cbi5idG4tdW5kbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDBweDtcbiAgIGltZyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbi5jYXJkLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG4uYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAuYnRuIHtcbiAgY29sb3I6ICNhOWE5YTkgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 88061:
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/components/modal-close/modal-close.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCloseComponent": () => (/* binding */ ModalCloseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





function ModalCloseComponent_div_0_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Register Closing is completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" successfully, you have ", ctx_r2.remainedSessions, " session");
  }
}
function ModalCloseComponent_div_0_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Closing is completed successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ModalCloseComponent_div_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCloseComponent_div_0_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.openNewSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open New Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ModalCloseComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Successfully Closed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalCloseComponent_div_0_p_5_Template, 4, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalCloseComponent_div_0_p_6_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModalCloseComponent_div_0_button_8_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCloseComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r7.logOut();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Back to portal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.remainedSessions != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.remainedSessions == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.remainedSessions != 0);
  }
}
function ModalCloseComponent_div_1_h5_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.ErrorMessageEn || item_r10.errorMessageEn, " ");
  }
}
function ModalCloseComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalCloseComponent_div_1_h5_4_Template, 2, 1, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10)(6, "div", 11)(7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCloseComponent_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.backToStepTwo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messageError);
  }
}
class ModalCloseComponent {
  constructor(router, modalService, activeModal) {
    this.router = router;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this.backToSecond = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    // setTimeout(() => {
    //   this.router.navigate(['/login']);
    // }, 3000);
  }
  openNewSession() {
    // this.router.navigate(['/opening-register']);
    // window.location.href = '/';
    //window.location.reload();
    this.router.navigate(['/opening-register']);
    this.modalService.dismissAll();
  }
  backToStepTwo() {
    this.backToSecond.emit();
  }
  logOut() {
    localStorage.removeItem('fullName');
    localStorage.removeItem('role');
    localStorage.removeItem('userid');
    localStorage.removeItem('branch');
    localStorage.removeItem('city');
    localStorage.removeItem('register');
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    // localStorage.removeItem('identity');
    // localStorage.removeItem('password');
    // localStorage.removeItem('rememberMe');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    //this.router.navigate(['https://dx-portalsstage.azurewebsites.net/login']);
    //window.location.href = 'https://dx-portalsstage.azurewebsites.net/login';
    this.redirectUser();
  }
  redirectUser() {
    let host = window.location.host;
    //STAGING
    if (host.indexOf('dxpos.markaziaapis.com') >= 0) {
      window.location.href = 'https://portal.markaziahub.com';
    }
    //TEST
    else if (host.indexOf('dxtestpos.markaziaapis.com') >= 0) {
      window.location.href = 'https://dxtestportal.markaziahub.com';
    }
    //LOCAL
    else if (host.indexOf('localhost:4200') >= 0) {
      // I AM USING PORTAL ON PORT 4201 SO THAT'S' WHY I REDIRECTED HERE
      window.location.href = 'https://dxdevportal.markaziahub.com';
    }
  }
}
ModalCloseComponent.ɵfac = function ModalCloseComponent_Factory(t) {
  return new (t || ModalCloseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal));
};
ModalCloseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModalCloseComponent,
  selectors: [["app-modal-close"]],
  inputs: {
    name: "name",
    type: "type",
    message: "message",
    messageError: "messageError",
    routeName: "routeName",
    remainedSessions: "remainedSessions"
  },
  outputs: {
    backToSecond: "backToSecond"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "message", 4, "ngIf"], [1, "message"], [1, "fa-regular", "fa-circle-check"], [4, "ngIf"], [1, "btns-group"], ["type", "button", "class", "btn btn-save mb-2", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", "mb-2", 3, "click"], [1, "fa-regular", "fa-circle-xmark"], [4, "ngFor", "ngForOf"], [1, ""], [1, "btns-group", "my-2"]],
  template: function ModalCloseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalCloseComponent_div_0_Template, 11, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalCloseComponent_div_1_Template, 9, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "success");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "error");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".message[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n}\n.message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  color: #54595e;\n  margin: 0px;\n  padding: 20px;\n}\n.message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #54595e;\n  margin: 0px;\n  padding: 0px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-check[_ngcontent-%COMP%] {\n  color: #25bb00;\n  font-size: 45px;\n  vertical-align: middle;\n  margin: 30px 10px 15px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n\n.btns-group[_ngcontent-%COMP%] {\n  display: initial;\n}\n.btns-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 300px;\n  display: block;\n  margin: 0px auto;\n}\n.btns-group[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #dc3545;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-weight: 600;\n  border: 1px solid #dc3545;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jbG9zZS1yZWdpc3Rlci9jb21wb25lbnRzL21vZGFsLWNsb3NlL21vZGFsLWNsb3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjtBQURFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdKO0FBREU7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzU0NTk1ZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAjNTQ1OTVlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuZmEtY2lyY2xlLWNoZWNrIHtcbiAgICBjb2xvcjogIzI1YmIwMDtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDMwcHggMTBweCAxNXB4O1xuICB9XG4gIC5mYS1jaXJjbGUteG1hcmsge1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMnB4IDEwcHggNXB4O1xuICB9XG59XG4uYnRucy1ncm91cCB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIC5idG4ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5idG4tY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNkYzM1NDU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 79770:
/*!******************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/components/modal-edit-card/modal-edit-card.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEditCardComponent": () => (/* binding */ ModalEditCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_close_register_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/close-register.service */ 15070);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/directive/numbers-only.directive */ 82757);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/directive/character.directive */ 80145);











function ModalEditCardComponent_div_8_div_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalEditCardComponent_div_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ModalEditCardComponent_div_8_div_29_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.formValid["LastTerminalId"].errors["required"]);
  }
}
function ModalEditCardComponent_div_8_div_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalEditCardComponent_div_8_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ModalEditCardComponent_div_8_div_35_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.formValid["CardDate"].errors["required"]);
  }
}
function ModalEditCardComponent_div_8_div_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalEditCardComponent_div_8_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ModalEditCardComponent_div_8_div_41_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.formValid["CardLast4Digits"].errors["required"] || ctx_r4.formValid["CardLast4Digits"].errors["minlength"]);
  }
}
function ModalEditCardComponent_div_8_div_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalEditCardComponent_div_8_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ModalEditCardComponent_div_8_div_47_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.formValid["CardDrawerName"].errors["required"]);
  }
}
function ModalEditCardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ModalEditCardComponent_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 11)(9, "div", 9)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11)(14, "div", 9)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 8)(20, "div", 9)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Machine Reciept No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 8)(25, "div", 9)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Terminal Provider*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "ng-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ModalEditCardComponent_div_8_div_29_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 8)(31, "div", 9)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ModalEditCardComponent_div_8_div_35_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 8)(37, "div", 9)(38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "The last 4 digits of the card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ModalEditCardComponent_div_8_div_41_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 8)(43, "div", 9)(44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Payer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, ModalEditCardComponent_div_8_div_47_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 19)(49, "div", 20)(50, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalEditCardComponent_div_8_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r0.details == null ? null : ctx_r0.details.currency[0] == null ? null : ctx_r0.details.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](18, 8, ctx_r0.details == null ? null : ctx_r0.details.collectedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r0.terminals);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.formValid["LastTerminalId"].invalid && (ctx_r0.formValid["LastTerminalId"].touched || ctx_r0.formValid["LastTerminalId"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.formValid["CardDate"].invalid && (ctx_r0.formValid["CardDate"].touched || ctx_r0.formValid["CardDate"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.formValid["CardLast4Digits"].invalid && (ctx_r0.formValid["CardLast4Digits"].touched || ctx_r0.formValid["CardLast4Digits"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.formValid["CardDrawerName"].invalid && (ctx_r0.formValid["CardDrawerName"].touched || ctx_r0.formValid["CardDrawerName"].dirty));
  }
}
function ModalEditCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.message, "");
  }
}
class ModalEditCardComponent {
  constructor(closeRegisterService, activeModal, modalService, fb, _collectService, datePipe) {
    this.closeRegisterService = closeRegisterService;
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.fb = fb;
    this._collectService = _collectService;
    this.datePipe = datePipe;
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.terminals = [];
    this.loadPageData = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    this.getForm();
    this.getTerminalProviders();
    if (this.details) {
      let obj = {
        OrdersCardsCollectionId: this.details.ordersCardsCollectionId,
        LastTerminalId: this.details?.cardProvide?.providerId,
        CardDrawerName: this.details?.cardPayerName,
        LastCollectedAmount: this.details.lastCollectedAmount,
        MachineReceiptNumber: this.details.machineReceiptNumber,
        CardDate: this.datePipe.transform(this.details.collectionAt, 'yyyy-MM-dd'),
        CardLast4Digits: this.details?.cardLast4Digits
      };
      this.formGroup.patchValue(obj);
    }
  }
  getTerminalProviders() {
    this._collectService.getTerminalProviders().subscribe(response => {
      this.terminals = response.data.map(x => {
        return {
          id: x.providerId,
          name: x.providerName
        };
      });
    });
  }
  getForm() {
    this.formGroup = this.fb.group({
      OrdersCardsCollectionId: 0,
      LastTerminalId: [''],
      LastCollectedAmount: [''],
      CardDrawerName: '',
      MachineReceiptNumber: [''],
      CardDate: [''],
      CardLast4Digits: ['']
    });
  }
  get formValid() {
    return this.formGroup.controls;
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return window.scroll(0, 0);
    }
    const values = this.formGroup.value;
    const formData = new FormData();
    formData.append('OrdersCardsCollectionId', values?.OrdersCardsCollectionId);
    formData.append('LastTerminalId', values?.LastTerminalId);
    formData.append('CardDrawerName', values?.CardDrawerName);
    formData.append('MachineReceiptNumber', values?.MachineReceiptNumber);
    formData.append('CardLast4Digits', values?.CardLast4Digits);
    return this.closeRegisterService.EditCollectionByCards(formData).subscribe(response => {
      console.log(response);
      if (response.isSuccess) {
        this.type = 'success';
        this.message = 'Edit done successfully';
        setTimeout(() => {
          this.modalService.dismissAll();
          this.toLoadData();
        }, 2000);
        console.log(response);
      } else {}
    }, error => {});
  }
  toLoadData() {
    this.loadPageData.emit();
  }
}
ModalEditCardComponent.ɵfac = function ModalEditCardComponent_Factory(t) {
  return new (t || ModalEditCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_close_register_service__WEBPACK_IMPORTED_MODULE_0__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe));
};
ModalEditCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ModalEditCardComponent,
  selectors: [["app-modal-edit-card"]],
  inputs: {
    details: "details"
  },
  outputs: {
    loadMainData: "loadMainData",
    loadPageData: "loadPageData"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe])],
  decls: 10,
  vars: 3,
  consts: [[1, "modal-body"], [1, "modal-head"], [1, "px-2"], ["class", "card-form", 4, "ngIf"], ["class", "message", 4, "ngIf"], [1, "card-form"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["name", "name", "type", "text", "formControlName", "LastCollectedAmount", "readonly", "", 1, "form-control"], [1, "col-md-3"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["name", "name", "type", "text", "formControlName", "MachineReceiptNumber", "numbersOnly", "", 1, "form-control"], ["placeholder", "--Terminal---", "bindLabel", "name", "bindValue", "id", "required", "", "formControlName", "LastTerminalId", 3, "items"], [4, "ngIf"], ["type", "date", "formControlName", "CardDate", "name", "CardDate", "required", "", "readonly", "", 1, "form-control"], ["name", "name", "type", "text", "formControlName", "CardLast4Digits", "minlength", "4", "maxlength", "4", "numbersOnly", "", "required", "", 1, "form-control"], ["name", "name", "type", "text", "formControlName", "CardDrawerName", "OnlyCharacter", "", "required", "", "readonly", "", 1, "form-control"], [1, "col-md-12"], [1, "btns-group", "my-2"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "message"], [1, "fa-regular", "fa-circle-check"]],
  template: function ModalEditCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Edit Card ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Customer name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ModalEditCardComponent_div_8_Template, 54, 11, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ModalEditCardComponent_div_9_Template, 4, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.details.customer, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.type && ctx.type == "success");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_2__.NumberDirective, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_3__.CharacterDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
  styles: [".card-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 50px 10px;\n  text-align: center;\n}\n.message[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  color: #1b212d;\n  margin: 0px;\n  padding: 20px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-check[_ngcontent-%COMP%] {\n  color: #25BB00;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-xmark[_ngcontent-%COMP%] {\n  color: #DC3545;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jbG9zZS1yZWdpc3Rlci9jb21wb25lbnRzL21vZGFsLWVkaXQtY2FyZC9tb2RhbC1lZGl0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFSjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFDRSxjQUFBO0FBR047O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRUY7QUFERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUdKO0FBREU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFHSjtBQURFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwcHggc29saWQgI2M0Y2RkNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubW9kYWwtaGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gIH1cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICB9XG4gIH1cbn1cbi5tZXNzYWdlIHtcbiAgcGFkZGluZzogNTBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGg1IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzFiMjEyZDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5mYS1jaXJjbGUtY2hlY2t7XG4gICAgY29sb3I6ICMyNUJCMDA7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAycHggMTBweCA1cHg7XG4gIH1cbiAgLmZhLWNpcmNsZS14bWFya3tcbiAgICBjb2xvcjogI0RDMzU0NTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDJweCAxMHB4IDVweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 44973:
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/components/modal-edit/modal-edit.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalEditComponent": () => (/* binding */ ModalEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../collect/payment-modal/view-file/view-file.component */ 32298);
/* harmony import */ var _services_close_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/close-register.service */ 15070);
/* harmony import */ var _main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../main-fund/register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/directive/drag-and-drop.directive */ 96603);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/directive/character.directive */ 80145);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/view-file/view-file.component */ 67761);
















const _c0 = ["fileInput"];
function ModalEditComponent_div_8_ng_container_24_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ModalEditComponent_div_8_ng_container_24_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input allows only digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ModalEditComponent_div_8_ng_container_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ModalEditComponent_div_8_ng_container_24_ng_container_1_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ModalEditComponent_div_8_ng_container_24_ng_container_1_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.formValid["ChequeNo"] == null ? null : ctx_r10.formValid["ChequeNo"].errors == null ? null : ctx_r10.formValid["ChequeNo"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.formValid["ChequeNo"] == null ? null : ctx_r10.formValid["ChequeNo"].errors == null ? null : ctx_r10.formValid["ChequeNo"].errors["pattern"]);
  }
}
function ModalEditComponent_div_8_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ModalEditComponent_div_8_ng_container_24_ng_container_1_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r2.formValid["ChequeNo"] == null ? null : ctx_r2.formValid["ChequeNo"].invalid) && (ctx_r2.formValid["ChequeNo"] == null ? null : ctx_r2.formValid["ChequeNo"].touched) || (ctx_r2.formValid["ChequeNo"] == null ? null : ctx_r2.formValid["ChequeNo"].dirty));
  }
}
function ModalEditComponent_div_8_div_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Bank is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ModalEditComponent_div_8_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ModalEditComponent_div_8_div_30_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.formValid["BankId"].errors["required"]);
  }
}
function ModalEditComponent_div_8_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ModalEditComponent_div_8_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ModalEditComponent_div_8_div_36_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.formValid["ChequeDrawerName"].errors["required"]);
  }
}
function ModalEditComponent_div_8_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ModalEditComponent_div_8_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ModalEditComponent_div_8_div_42_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.formValid["ChequeDate"].errors["required"]);
  }
}
function ModalEditComponent_div_8_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 33)(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 35)(5, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ModalEditComponent_div_8_ng_container_56_Template_img_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.fileAction("view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ModalEditComponent_div_8_ng_container_56_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.fileAction("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.fileName);
  }
}
function ModalEditComponent_div_8_small_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.invalidFileType);
  }
}
function ModalEditComponent_div_8_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 39)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Previous Cheque Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "view-file", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("file", ctx_r9.details == null ? null : ctx_r9.details.chequeImage);
  }
}
function ModalEditComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ModalEditComponent_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 12)(9, "div", 10)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 12)(14, "div", 10)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Cheque No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ModalEditComponent_div_8_ng_container_24_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 9)(26, "div", 10)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "ng-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ModalEditComponent_div_8_div_30_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 9)(32, "div", 10)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Cheque Drawer name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ModalEditComponent_div_8_div_36_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 9)(38, "div", 10)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Date * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ModalEditComponent_div_8_div_42_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 19)(44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Cheque Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 20)(47, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("files", function ModalEditComponent_div_8_Template_div_files_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.filesDropped($event));
    })("enter", function ModalEditComponent_div_8_Template_div_enter_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.enter = !ctx_r22.enter);
    })("leave", function ModalEditComponent_div_8_Template_div_leave_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.enter = !ctx_r23.enter);
    })("click", function ModalEditComponent_div_8_Template_div_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](55);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r6.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Select OR Drag & drop files");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Supported formates: JPEG, PNG, PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ModalEditComponent_div_8_Template_input_change_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.onSelectFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, ModalEditComponent_div_8_ng_container_56_Template, 7, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, ModalEditComponent_div_8_small_57_Template, 2, 1, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, ModalEditComponent_div_8_ng_container_58_Template, 5, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 27)(60, "div", 28)(61, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ModalEditComponent_div_8_Template_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx_r0.details == null ? null : ctx_r0.details.currency[0] == null ? null : ctx_r0.details.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](18, 11, ctx_r0.details == null ? null : ctx_r0.details.collectedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.formValid["ChequeNo"] == null ? null : ctx_r0.formValid["ChequeNo"]["errors"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx_r0.banks);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.formValid["BankId"].invalid || ctx_r0.formValid["BankId"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.formValid["ChequeDrawerName"].invalid || ctx_r0.formValid["ChequeDrawerName"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.formValid["ChequeDate"].invalid || ctx_r0.formValid["ChequeDate"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.invalidFileType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.details == null ? null : ctx_r0.details.chequeImage);
  }
}
function ModalEditComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 41)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.message, "");
  }
}
class ModalEditComponent {
  constructor(closeRegisterService, _registerSettlementService, activeModal, modalService, fb, datePipe, router, _commonService) {
    this.closeRegisterService = closeRegisterService;
    this._registerSettlementService = _registerSettlementService;
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.fb = fb;
    this.datePipe = datePipe;
    this.router = router;
    this._commonService = _commonService;
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.loadPageData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.fileName = '';
    this.invalidFileType = '';
  }
  ngOnInit() {
    this.getForm();
    this.getBanks();
    if (this.details) {
      console.log(this.details);
      this.formGroup.get('ChequeCollectionId').patchValue(this.details.chequeCollectionId);
      this.formGroup.get('ChequeCollectionJod').patchValue(this._commonService.transformDecimal(this.details.chequeCollectionJod));
      this.formGroup.get('BankId').patchValue(this.details.bankId);
      this.formGroup.get('ChequeDrawerName').patchValue(this.details.chequeDrawerName);
      this.formGroup.get('ChequeNo').patchValue(this.details.chequeNo);
      this.formGroup.get('ChequeDate').patchValue(this.datePipe.transform(this.details.chequeDate, 'yyyy-MM-dd'));
    }
  }
  getForm() {
    this.formGroup = this.fb.group({
      ChequeCollectionId: 0,
      ChequeCollectionJod: [''],
      ChequeDate: [''],
      BankId: '',
      ChequeDrawerName: [''],
      ChequeNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]*$')]]
    });
  }
  get formValid() {
    return this.formGroup.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return window.scroll(0, 0);
    }
    const formData = new FormData();
    formData.append('ChequeCollectionId', this.formGroup.get('ChequeCollectionId')?.value);
    formData.append('ChequeCollectionJod', this.formGroup.get('ChequeCollectionJod')?.value);
    formData.append('ChequeDate', this.formGroup.get('ChequeDate')?.value);
    formData.append('BankId', this.formGroup.get('BankId')?.value);
    formData.append('ChequeDrawerName', this.formGroup.get('ChequeDrawerName')?.value);
    formData.append('ChequeNo', this.formGroup.get('ChequeNo')?.value);
    console.log(this.formGroup.value);
    console.log(formData);
    return this.closeRegisterService.EditCollectionCheuqe(formData).subscribe(response => {
      console.log(response);
      if (response.isSuccess == true) {
        this.type = 'success';
        this.message = 'Edit done successfully';
        if (this.uploadedFile?.file) {
          this.addSettleCheckImage();
        }
        setTimeout(() => {
          this.modalService.dismissAll();
          this.toLoadData();
        }, 2000);
        console.log(response);
      } else {
        // console.log('error', response);
      }
    }, error => {
      // this.isLoading = false;
      // console.log('error', error);
    });
  }
  toLoadData() {
    this.loadPageData.emit();
  }
  getBanks() {
    this.closeRegisterService.getLookupsById(11).subscribe(response => {
      this.banks = response.data.map(x => ({
        id: x.id,
        name: x.name[0].lookupName
      }));
    }, error => {
      // this.errorMessage = error.message;
    });
  }
  addSettleCheckImage() {
    let formData = new FormData();
    formData.append('chequeCollectionId', this.formGroup.controls['ChequeCollectionId'].value);
    formData.append('Image', this.uploadedFile?.file);
    this._registerSettlementService.addSettledChequesImages(formData).subscribe(response => {
      console.log(response);
    });
  }
  //FILE 
  fileAction(action) {
    if (action == 'view') {
      const modelRef = this.modalService.open(_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewFileComponent, {
        size: 'md'
      });
      modelRef.componentInstance.imageUploadedView = this.uploadedFile;
    } else {
      this.inputFile.nativeElement.value = null;
      //(document.getElementById('chequeFile') as HTMLInputElement).value = null;
      this.fileName = '';
      this.uploadedFile = {};
    }
  }
  filesDropped(data) {
    this.enter = false;
    let isInvalid = this._commonService.checkInvalidImageFormat(data, true).invalidExtentions;
    this.invalidFileType = this._commonService.checkInvalidImageFormat(data, true).invalidError;
    if (isInvalid) {
      this.inputFile.nativeElement.value = null;
      return;
    }
    let files = data.map(x => {
      return x.file;
    });
    if (!isInvalid) {
      files.forEach(file => {
        this.fileName = file.name;
        this._commonService.fileToBase64(file).then(response => {
          this.uploadedFile = response;
        });
      });
    }
  }
  onSelectFile(event) {
    let files = [...event.target.files];
    let isInvalid = this._commonService.checkInvalidImageFormat(files, true).invalidExtentions;
    this.invalidFileType = this._commonService.checkInvalidImageFormat(files, true).invalidError;
    if (isInvalid) {
      this.inputFile.nativeElement.value = null;
      return;
    }
    if (files.length > 0) {
      if (!isInvalid) {
        files.forEach(file => {
          this.fileName = file.name;
          this._commonService.fileToBase64(file).then(response => {
            this.uploadedFile = response;
          });
        });
      }
    }
  }
  removeFile(item) {
    this.inputFile.nativeElement.value = null;
    this.fileName = '';
    this.uploadedFile = null;
  }
}
ModalEditComponent.ɵfac = function ModalEditComponent_Factory(t) {
  return new (t || ModalEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_close_register_service__WEBPACK_IMPORTED_MODULE_1__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_main_fund_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
};
ModalEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ModalEditComponent,
  selectors: [["app-modal-edit"]],
  viewQuery: function ModalEditComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
    }
  },
  inputs: {
    details: "details"
  },
  outputs: {
    loadMainData: "loadMainData",
    loadPageData: "loadPageData"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe])],
  decls: 10,
  vars: 3,
  consts: [[1, "modal-body"], [1, "modal-head"], [1, "fw-500"], [1, "px-2"], ["class", "card-form", 4, "ngIf"], ["class", "message", 4, "ngIf"], [1, "card-form"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "placeholder", "500 JD", "formControlName", "ChequeCollectionJod", "name", "ChequeCollectionJod", "readonly", "", 1, "form-control"], [1, "col-md-3"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["name", "name", "type", "text", "placeholder", "Cheque No.", "formControlName", "ChequeNo", "required", "", 1, "form-control"], [4, "ngIf"], ["id", "BankId", "placeholder", " Select bank ", "bindLabel", "name", "bindValue", "id", "formControlName", "BankId", "name", "BankId", "required", "", 3, "items"], ["name", "name", "type", "text", "placeholder", "Cheque Drawer name", "formControlName", "ChequeDrawerName", "name", "ChequeDrawerName", "OnlyCharacter", "", "readonly", "", "required", "", 1, "form-control"], ["type", "date", "placeholder", "", "formControlName", "ChequeDate", "name", "ChequeDate", "required", "", 1, "form-control"], [1, "col-sm-6"], [1, "form-group", "mb-3"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "id", "chequeFile", "accept", ".png,.jpg,.jpeg,.pdf", "hidden", "", 1, "form-control", 3, "change"], ["fileInput", ""], ["class", "text-danger", 4, "ngIf"], [1, "col-md-12"], [1, "btns-group", "my-2"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "d-flex", "gap-3", "file-item", "align-items-center", "justify-content-between", "mb-2"], [1, "p-0"], [1, "d-flex", "gap-2"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"], [1, "text-danger"], [1, "mt-2"], [3, "file"], [1, "message"], [1, "fa-regular", "fa-circle-check"]],
  template: function ModalEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Edit Cheque ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Customer name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "b", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ModalEditComponent_div_8_Template, 65, 14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ModalEditComponent_div_9_Template, 4, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.details.chequeCustomer, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type && ctx.type == "success");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_4__.DragAndDropDirective, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_5__.CharacterDirective, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_6__.ViewFileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe],
  styles: [".card-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n\n.message[_ngcontent-%COMP%] {\n  \n  text-align: center;\n}\n.message[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  color: #1b212d;\n  margin: 0px;\n  padding: 20px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-check[_ngcontent-%COMP%] {\n  color: #25BB00;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-xmark[_ngcontent-%COMP%] {\n  color: #DC3545;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #dadada;\n  background: white;\n}\n.file-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: green;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jbG9zZS1yZWdpc3Rlci9jb21wb25lbnRzL21vZGFsLWVkaXQvbW9kYWwtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUo7QUFESTtFQUNFLGNBQUE7QUFHTjs7QUFDQTtFQUNBO0dBQUE7RUFDSSxrQkFBQTtBQUdKO0FBRkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFJSjtBQUZFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBSUo7QUFGRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUlKOztBQURBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUY7QUFGRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUlKO0FBREU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBR0o7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwcHggc29saWQgI2M0Y2RkNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubW9kYWwtaGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gIH1cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICB9XG4gIH1cbn1cbi5tZXNzYWdlIHtcbi8qICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4qLyAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoNSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAuZmEtY2lyY2xlLWNoZWNre1xuICAgIGNvbG9yOiAjMjVCQjAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMnB4IDEwcHggNXB4O1xuICB9XG4gIC5mYS1jaXJjbGUteG1hcmt7XG4gICAgY29sb3I6ICNEQzM1NDU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAycHggMTBweCA1cHg7XG4gIH1cbn1cbi5jYXJkLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjOTM5YWE4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMGYwZjBmO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gIH1cbn1cblxuLmZpbGUtaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 32298:
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/view-file/view-file.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewFileComponent": () => (/* binding */ ViewFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function ViewFileComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.imageUploadedView == null ? null : ctx_r3.imageUploadedView.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewFileComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "click to open pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r5.viewPdf(ctx_r5.imageUploadedView == null ? null : ctx_r5.imageUploadedView.file), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewFileComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewFileComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewFileComponent_ng_container_0_ng_template_3_Template, 5, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFileComponent_ng_container_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.imageUploadedView == null ? null : ctx_r0.imageUploadedView.fileType) == "image/png" || (ctx_r0.imageUploadedView == null ? null : ctx_r0.imageUploadedView.fileType) == "image/jpeg" || (ctx_r0.imageUploadedView == null ? null : ctx_r0.imageUploadedView.fileType) == "image/jpg")("ngIfElse", _r4);
  }
}
function ViewFileComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.fileURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewFileComponent_ng_template_1_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8)(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "click to open PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r11.fileURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewFileComponent_ng_template_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewFileComponent_ng_template_1_ng_template_2_ng_container_1_Template, 6, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r10.fileType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pdf");
  }
}
function ViewFileComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewFileComponent_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewFileComponent_ng_template_1_ng_template_2_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFileComponent_ng_template_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileType == "png" || ctx_r2.fileType == "jpeg" || ctx_r2.fileType == "jpg" || ctx_r2.fileType == "svg")("ngIfElse", _r9);
  }
}
class ViewFileComponent {
  constructor(activeModal, sanitizer) {
    this.activeModal = activeModal;
    this.sanitizer = sanitizer;
    this.viewOnly = false;
    this.fileType = '';
    this.fileURL = '';
  }
  ngOnInit() {
    console.log(this.imageUploadedView);
    this.viewOnly = this.imageUploadedView?.viewOnly;
    if (this.viewOnly) {
      this.fileType = this.getFileType(this.imageUploadedView.url);
      this.fileURL = this.imageUploadedView.url;
    }
  }
  viewPdf(file) {
    let src = URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
  getFileType(fileName) {
    return fileName?.split('.').pop().trim().toLowerCase();
  }
}
ViewFileComponent.ɵfac = function ViewFileComponent_Factory(t) {
  return new (t || ViewFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};
ViewFileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewFileComponent,
  selectors: [["app-view-file"]],
  inputs: {
    imageUploadedView: "imageUploadedView"
  },
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["viewOnlyURL", ""], [1, "modal-body", "p-2"], ["pdf", ""], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "w-100", 3, "src"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center"], ["height", "80", "width", "80", "src", "assets/images/pdf.png", "alt", ""], ["target", "_blank", 1, "text-decoration-none", "text-capitalize", 3, "href"], ["elseExtViewBlock", ""], [1, "w-100", "mb-2", 3, "src"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
  template: function ViewFileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewFileComponent_ng_container_0_Template, 8, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewFileComponent_ng_template_1_Template, 7, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewOnly)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase],
  styles: [".imagepath[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.imagepath-no[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n\n.btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.btns-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  color: #dc3545;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-weight: 600;\n}\n\n.card-pdf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.card-pdf[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 600;\n  display: block;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvdmlldy1maWxlL3ZpZXctZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7QUFBSjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQU1FO0VBQ0UsWUFBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFKSiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXBhdGgge1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5pbWFnZXBhdGgtbm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5idG5zLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBjb2xvcjogI2RjMzU0NTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMzVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5jYXJkLXBkZiB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_cashier_close-register_close-register_module_ts.js.map