"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_cashier_markazia-vouchers_markazia-vouchers_module_ts"],{

/***/ 53582:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/markazia-vouchers/components/generate-voucher/generate-voucher.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateVoucherComponent": () => (/* binding */ GenerateVoucherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/confirm-modal/confirm-modal.component */ 87192);
/* harmony import */ var _services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/markazia-voucher.service */ 81181);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/excel.service */ 64249);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/table-advanced/table-advanced.component */ 49973);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/table-advanced/table-advanced.directives */ 85746);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/directive/numbers-only.directive */ 82757);


















function GenerateVoucherComponent_ng_container_10_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function GenerateVoucherComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_10_ng_container_1_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.f == null ? null : (tmp_0_0 = ctx_r8.f.get("brandId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function GenerateVoucherComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r0.f == null ? null : (tmp_0_0 = ctx_r0.f.get("brandId")) == null ? null : tmp_0_0.invalid) && (ctx_r0.f == null ? null : (tmp_0_0 = ctx_r0.f.get("brandId")) == null ? null : tmp_0_0.touched) || (ctx_r0.f == null ? null : (tmp_0_0 = ctx_r0.f.get("brandId")) == null ? null : tmp_0_0.dirty));
  }
}
function GenerateVoucherComponent_ng_container_15_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function GenerateVoucherComponent_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_15_ng_container_1_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.f == null ? null : (tmp_0_0 = ctx_r10.f.get("campaign")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function GenerateVoucherComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_15_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r1.f == null ? null : (tmp_0_0 = ctx_r1.f.get("campaign")) == null ? null : tmp_0_0.invalid) && (ctx_r1.f == null ? null : (tmp_0_0 = ctx_r1.f.get("campaign")) == null ? null : tmp_0_0.touched) || (ctx_r1.f == null ? null : (tmp_0_0 = ctx_r1.f.get("campaign")) == null ? null : tmp_0_0.dirty));
  }
}
function GenerateVoucherComponent_ng_container_20_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function GenerateVoucherComponent_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_20_ng_container_1_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.f == null ? null : (tmp_0_0 = ctx_r12.f.get("costCenterId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function GenerateVoucherComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_20_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r2.f == null ? null : (tmp_0_0 = ctx_r2.f.get("costCenterId")) == null ? null : tmp_0_0.invalid) && (ctx_r2.f == null ? null : (tmp_0_0 = ctx_r2.f.get("costCenterId")) == null ? null : tmp_0_0.touched) || (ctx_r2.f == null ? null : (tmp_0_0 = ctx_r2.f.get("costCenterId")) == null ? null : tmp_0_0.dirty));
  }
}
function GenerateVoucherComponent_ng_container_25_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function GenerateVoucherComponent_ng_container_25_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Value must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function GenerateVoucherComponent_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_25_ng_container_1_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, GenerateVoucherComponent_ng_container_25_ng_container_1_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.f == null ? null : (tmp_0_0 = ctx_r14.f.get("numberofVouchers")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.f == null ? null : (tmp_1_0 = ctx_r14.f.get("numberofVouchers")) == null ? null : tmp_1_0.errors["min"]);
  }
}
function GenerateVoucherComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_25_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r3.f == null ? null : (tmp_0_0 = ctx_r3.f.get("numberofVouchers")) == null ? null : tmp_0_0.invalid) && (ctx_r3.f == null ? null : (tmp_0_0 = ctx_r3.f.get("numberofVouchers")) == null ? null : tmp_0_0.touched) || (ctx_r3.f == null ? null : (tmp_0_0 = ctx_r3.f.get("numberofVouchers")) == null ? null : tmp_0_0.dirty));
  }
}
function GenerateVoucherComponent_ng_container_33_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function GenerateVoucherComponent_ng_container_33_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Value must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function GenerateVoucherComponent_ng_container_33_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_33_ng_container_1_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, GenerateVoucherComponent_ng_container_33_ng_container_1_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r17.f == null ? null : (tmp_0_0 = ctx_r17.f.get("amountperVoucher")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r17.f == null ? null : (tmp_1_0 = ctx_r17.f.get("amountperVoucher")) == null ? null : tmp_1_0.errors["min"]);
  }
}
function GenerateVoucherComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_33_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r4.f == null ? null : (tmp_0_0 = ctx_r4.f.get("amountperVoucher")) == null ? null : tmp_0_0.invalid) && (ctx_r4.f == null ? null : (tmp_0_0 = ctx_r4.f.get("amountperVoucher")) == null ? null : tmp_0_0.touched) || (ctx_r4.f == null ? null : (tmp_0_0 = ctx_r4.f.get("amountperVoucher")) == null ? null : tmp_0_0.dirty));
  }
}
function GenerateVoucherComponent_ng_container_42_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function GenerateVoucherComponent_ng_container_42_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_42_ng_container_1_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r20.f == null ? null : (tmp_0_0 = ctx_r20.f.get("date")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function GenerateVoucherComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GenerateVoucherComponent_ng_container_42_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r6.f == null ? null : (tmp_0_0 = ctx_r6.f.get("date")) == null ? null : tmp_0_0.invalid) && (ctx_r6.f == null ? null : (tmp_0_0 = ctx_r6.f.get("date")) == null ? null : tmp_0_0.touched) || (ctx_r6.f == null ? null : (tmp_0_0 = ctx_r6.f.get("date")) == null ? null : tmp_0_0.dirty));
  }
}
function GenerateVoucherComponent_div_46_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r23 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 2, row_r23 == null ? null : row_r23.markaziaVValidityFrom, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 5, row_r23 == null ? null : row_r23.markaziaVValidityTo, "mediumDate"));
  }
}
function GenerateVoucherComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Generated Vouchers");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GenerateVoucherComponent_div_46_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.exportToExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Export To Excel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "table-advanced", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sortUpdated", function GenerateVoucherComponent_div_46_Template_table_advanced_sortUpdated_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.onSortChange($event));
    })("pageUpdated", function GenerateVoucherComponent_div_46_Template_table_advanced_pageUpdated_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, GenerateVoucherComponent_div_46_ng_template_8_Template, 7, 8, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx_r7.tableConfig)("columns", ctx_r7.tableColumns)("data", ctx_r7.vouchersList)("page", ctx_r7.pageNo)("total", ctx_r7.total)("limit", ctx_r7.limit);
  }
}
const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true
  };
};
class GenerateVoucherComponent {
  constructor(_vocuherService, fb, _modalService, _datePipe, _activeModal, _excelService, _spinner) {
    this._vocuherService = _vocuherService;
    this.fb = fb;
    this._modalService = _modalService;
    this._datePipe = _datePipe;
    this._activeModal = _activeModal;
    this._excelService = _excelService;
    this._spinner = _spinner;
    this.brandsList = [];
    this.costCenterList = [];
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.pageNo = 1;
    this.total = 0;
    this.limit = 6;
    this.tableConfig = {
      paging: false,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    this.tableColumns = [];
    this.vouchersList = [];
  }
  ngOnInit() {
    this.initForm();
    this.getLookups();
    this.initTableColumns();
  }
  getLookups() {
    const brands = this._vocuherService.getBrands('').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(error)));
    const costCenter = this._vocuherService.getCostCenter(`?StatusId=2001&CostCenterType=38001&PageSize=1000`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(error)));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([brands, costCenter]).subscribe(data => {
      this.brandsList = data[0];
      this.costCenterList = data[1].data;
    });
  }
  initForm() {
    this.voucherForm = this.fb.group({
      brandId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      campaign: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      costCenterId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      numberofVouchers: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(1)]],
      amountperVoucher: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(1)]],
      validityFrom: [''],
      validityTo: [''],
      date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
    });
  }
  confirmModal() {
    const ref = this._modalService.open(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmModalComponent, {
      centered: true
    });
    ref.componentInstance.data = {
      body: 'Are you sure you want to generate vouchers?'
    };
    ref.componentInstance.eventData.subscribe(x => {
      if (x) this.generateVoucher();
    });
  }
  generateVoucher() {
    if (this.f.invalid) {
      this.f.markAllAsTouched();
      return;
    }
    this.vouchersList = [];
    this._spinner.show();
    let formData = new FormData();
    let formValue = {
      ...this.f.value
    };
    formData.append('BrandId', formValue?.brandId);
    formData.append('Campaign', formValue?.campaign);
    formData.append('CostCenterId', formValue?.costCenterId);
    formData.append('NumberofVouchers', formValue?.numberofVouchers);
    formData.append('AmountperVoucher', formValue?.amountperVoucher);
    formData.append('ValidityFrom', this._datePipe.transform(formValue.date[0], 'yyyy-MM-dd'));
    formData.append('ValidityTo', this._datePipe.transform(formValue.date[1], 'yyyy-MM-dd'));
    this._vocuherService.generateVoucher(formData).subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', 'The voucher has been generated successfully');
          this.eventData.emit(true);
          this.f.reset();
          this.vouchersList = response.data;
          this.total = this.vouchersList.length;
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors);
      }
    }).add(() => this._spinner.hide());
  }
  exportToExcel() {
    var headings = [['Vocuher ID', 'Voucher Sequence Number', 'Amount JOD', 'Brand', 'Campaign', 'Issuance Date', 'Validity From', 'Validity To']];
    let data = this.vouchersList.map(x => {
      return {
        markaziaVoucherID: x?.markaziaVoucherID,
        markaziaVSequence: x?.markaziaVSequence,
        markaziaVAmount: x?.markaziaVAmount,
        brand: x?.brand?.brand,
        markaziaVCampaign: x?.markaziaVCampaign,
        createdAt: this._datePipe.transform(x?.createdAt, 'mediumDate'),
        from: this._datePipe.transform(x?.markaziaVValidityFrom, 'mediumDate'),
        to: this._datePipe.transform(x?.markaziaVValidityTo, 'mediumDate')
      };
    });
    this._excelService.exportToExcel(data, headings, 'GeneratedVouchers');
  }
  onSortChange(sort) {
    if (sort?.direction && sort?.column) {
      switch (sort.column) {}
    } else {
      this.tableConfig.filter.Sort = 1;
    }
  }
  onPageChange(page) {
    this.pageNo = page;
  }
  initTableColumns() {
    this.tableColumns = [{
      key: 'markaziaVoucherID',
      label: 'Vocuher ID'
    }, {
      key: 'markaziaVSequence',
      label: 'Voucher Sequence Number'
    }, {
      key: 'markaziaVAmount',
      label: 'Amount JOD',
      currency: {
        decimalFormat: '2.3-3',
        appendText: ' JOD'
      }
    }, {
      key: 'brand.brand',
      label: 'Brand',
      placeholder: '---'
    }, {
      key: 'markaziaVCampaign',
      label: 'Campaign'
    }, {
      key: 'createdAt',
      label: 'Issuance Date',
      dateFormat: 'mediumDate'
    }, {
      key: 'validity',
      label: 'Validity From-To'
    }];
  }
  responseModal(type, message) {
    const ref = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.dismissOnlyActive = true;
    if (type == 'success') ref.componentInstance.message = message;else ref.componentInstance.messageError = message;
  }
  get f() {
    return this.voucherForm;
  }
}
GenerateVoucherComponent.ɵfac = function GenerateVoucherComponent_Factory(t) {
  return new (t || GenerateVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_2__.MarkaziaVoucherService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService));
};
GenerateVoucherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: GenerateVoucherComponent,
  selectors: [["app-generate-voucher"]],
  decls: 50,
  vars: 13,
  consts: [[1, "modal-header", "align-items-center", "justify-content-between"], ["ngbAutoFocus", "", 1, "modal-title", "font-20", "fw-700"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-1"], [1, "input-label"], ["placeholder", "Brand", "bindLabel", "brand", "bindValue", "brandID", "formControlName", "brandId", 3, "items"], [4, "ngIf"], [1, "col-2"], ["type", "text", "formControlName", "campaign", 1, "form-control", "height-47"], ["placeholder", "Cost Center", "bindLabel", "costCenterName", "bindValue", "costCenterId", "formControlName", "costCenterId", 3, "items"], ["type", "text", "numbersOnly", "", "formControlName", "numberofVouchers", 1, "form-control", "height-47"], [1, "input-group"], ["type", "text", "appDecimalNumber", "", "formControlName", "amountperVoucher", 1, "form-control", "height-47"], [1, "input-group-text"], [1, "col-3"], ["type", "text", "placeholder", "Date", "formControlName", "date", "bsDaterangepicker", "", 1, "form-control", "height-47", 3, "bsConfig"], ["drp", "bsDaterangepicker"], [1, "input-group-text", 3, "click"], [1, "fa-regular", "fa-calendar-days", "font-24", "primary-clr"], [1, "mt-3", "col-12", "d-flex", "justify-content-end"], ["type", "button", 1, "redBtn", "height-47", 3, "disabled", "click"], ["class", "mt-4", 4, "ngIf"], [1, "modal-footer", "mt-3"], ["type", "button", 1, "redBtn", 3, "click"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"], [1, "mt-4"], [1, "d-flex", "justify-content-between", "mb-4", "align-items-center"], [1, "font-20", "fw-600", "mb-0"], ["type", "button", 1, "green", "redBtn", "d-flex", "align-items-center", "height-47", 3, "click"], [1, "fa-solid", "fa-file-excel", "m-2", "fa-2x"], [3, "config", "columns", "data", "page", "total", "limit", "sortUpdated", "pageUpdated"], ["libTableAdvancedColumn", "validity"], [1, "d-flex", "flex-column"]],
  template: function GenerateVoucherComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Generate Vouchers");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "div", 4)(6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Brand");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ng-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, GenerateVoucherComponent_ng_container_10_Template, 2, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9)(12, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Campaign");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, GenerateVoucherComponent_ng_container_15_Template, 2, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 9)(17, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Cost Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "ng-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, GenerateVoucherComponent_ng_container_20_Template, 2, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 9)(22, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "No of Vouchers");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, GenerateVoucherComponent_ng_container_25_Template, 2, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 9)(27, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Amount per Voucher");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, GenerateVoucherComponent_ng_container_33_Template, 2, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 16)(35, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Voucher Validity");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GenerateVoucherComponent_Template_span_click_40_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](39);
        return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r5.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, GenerateVoucherComponent_ng_container_42_Template, 2, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 21)(44, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GenerateVoucherComponent_Template_button_click_44_listener() {
        return ctx.confirmModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Generate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, GenerateVoucherComponent_div_46_Template, 9, 6, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 24)(48, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GenerateVoucherComponent_Template_button_click_48_listener() {
        return ctx._activeModal.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_9_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.f);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.brandsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.f == null ? null : (tmp_2_0 = ctx.f.get("brandId")) == null ? null : tmp_2_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.f == null ? null : (tmp_3_0 = ctx.f.get("campaign")) == null ? null : tmp_3_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.costCenterList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.f == null ? null : (tmp_5_0 = ctx.f.get("costCenterId")) == null ? null : tmp_5_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.f == null ? null : (tmp_6_0 = ctx.f.get("numberofVouchers")) == null ? null : tmp_6_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.f == null ? null : (tmp_7_0 = ctx.f.get("amountperVoucher")) == null ? null : tmp_7_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.f == null ? null : (tmp_9_0 = ctx.f.get("date")) == null ? null : tmp_9_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.f.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.vouchersList == null ? null : ctx.vouchersList.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectComponent, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_4__.TableAdvancedComponent, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_5__.TableAdvancedColumnDirective, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_6__.DecimalNumberDirective, _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_7__.NumberDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: [".ng-dropdown-panel {\n  z-index: 9999999 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9tYXJrYXppYS12b3VjaGVycy9jb21wb25lbnRzL2dlbmVyYXRlLXZvdWNoZXIvZ2VuZXJhdGUtdm91Y2hlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgei1pbmRleDogOTk5OTk5OSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 67891:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/markazia-vouchers/markazia-vouchers-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkaziaVouchersRoutingModule": () => (/* binding */ MarkaziaVouchersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _markazia_vouchers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markazia-vouchers.component */ 8357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _markazia_vouchers_component__WEBPACK_IMPORTED_MODULE_0__.MarkaziaVouchersComponent
}];
class MarkaziaVouchersRoutingModule {}
MarkaziaVouchersRoutingModule.ɵfac = function MarkaziaVouchersRoutingModule_Factory(t) {
  return new (t || MarkaziaVouchersRoutingModule)();
};
MarkaziaVouchersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MarkaziaVouchersRoutingModule
});
MarkaziaVouchersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MarkaziaVouchersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8357:
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/markazia-vouchers/markazia-vouchers.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkaziaVouchersComponent": () => (/* binding */ MarkaziaVouchersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _components_generate_voucher_generate_voucher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/generate-voucher/generate-voucher.component */ 53582);
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/confirm-modal/confirm-modal.component */ 87192);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/markazia-voucher.service */ 81181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/excel.service */ 64249);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/table-advanced/table-advanced.component */ 49973);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/table-advanced/table-advanced.directives */ 85746);















function MarkaziaVouchersComponent_i_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MarkaziaVouchersComponent_i_14_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.filterForm.get("date").setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MarkaziaVouchersComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 2, row_r6 == null ? null : row_r6.markaziaVValidityFrom, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 5, row_r6 == null ? null : row_r6.markaziaVValidityTo, "mediumDate"));
  }
}
function MarkaziaVouchersComponent_ng_template_42_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MarkaziaVouchersComponent_ng_template_42_ng_container_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.confirmDeleteVoucher(row_r7 == null ? null : row_r7.markaziaVoucherID));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function MarkaziaVouchersComponent_ng_template_42_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function MarkaziaVouchersComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-conainter", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MarkaziaVouchersComponent_ng_template_42_ng_container_1_Template, 3, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MarkaziaVouchersComponent_ng_template_42_ng_container_2_Template, 2, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", row_r7.markaziaVStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 39001);
  }
}
const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true
  };
};
class MarkaziaVouchersComponent {
  constructor(_vocuherService, fb, _modalService, _datePipe, _spinner, _excelService) {
    this._vocuherService = _vocuherService;
    this.fb = fb;
    this._modalService = _modalService;
    this._datePipe = _datePipe;
    this._spinner = _spinner;
    this._excelService = _excelService;
    this.brandsList = [];
    this.vouchersList = [];
    this.statusList = [];
    this.pageNo = 1;
    this.total = 0;
    this.limit = 6;
    this.loading = false;
    this.tableConfig = {
      paging: true,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    this.tableColumns = [];
  }
  ngOnInit() {
    this.initTableColumns();
    this.initFilterParams();
    //this.getMarkaziaVouchers()
    this.getLookups();
    this.filterForm.get('date').setValue([this.getMonthStartDate(), this.getMonthEndDate()]);
  }
  getLookups() {
    const brands = this._vocuherService.getBrands('').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(error)));
    const status = this._vocuherService.getLookup(`?lookupTypeId=39`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(error)));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([brands, status]).subscribe(data => {
      this.brandsList = data[0];
      this.statusList = data[1].data.map(x => {
        return {
          ...x,
          text: x?.name[0]?.lookupName
        };
      });
    });
  }
  initFilterParams() {
    this.filterForm = this.fb.group({
      id: [''],
      sequence: [''],
      brandId: [null],
      campaign: [''],
      date: [''],
      status: [null]
    });
    this.filterForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)()).subscribe(value => {
      this.pageNo = 1;
      let dateObj = {
        fromDate: '',
        toDate: ''
      };
      let formValues;
      if (value['date']) {
        dateObj['fromDate'] = this._datePipe.transform(value['date'][0], 'yyyy-MM-dd');
        dateObj['toDate'] = this._datePipe.transform(value['date'][1], 'yyyy-MM-dd');
        ;
      }
      formValues = {
        ...value,
        ...dateObj
      };
      delete formValues['date'];
      if (formValues.brandId == null) {
        formValues = {
          ...formValues,
          brandId: ''
        };
      }
      if (formValues.status == null) {
        formValues = {
          ...formValues,
          status: ''
        };
      }
      this.filterParams = '?' + new URLSearchParams(formValues).toString();
      this.getMarkaziaVouchers();
    });
  }
  generateVoucher() {
    const modalRef = this._modalService.open(_components_generate_voucher_generate_voucher_component__WEBPACK_IMPORTED_MODULE_0__.GenerateVoucherComponent, {
      modalDialogClass: 'generate-vouchers-size'
    });
    modalRef.componentInstance.eventData.subscribe(x => {
      if (x) {
        this.getMarkaziaVouchers();
      }
    });
  }
  confirmDeleteVoucher(voucherId) {
    const modalRef = this._modalService.open(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmModalComponent, {
      size: 'md'
    });
    modalRef.componentInstance.data = {
      body: 'Are you sure want to delete this voucher?'
    };
    modalRef.componentInstance.eventData.subscribe(x => {
      if (x) {
        this.deleteVoucher(voucherId);
      }
    });
  }
  deleteVoucher(voucherId) {
    this._spinner.show();
    let formData = new FormData();
    formData.append('VoucherId', voucherId);
    this._vocuherService.deleteMarkaziaVouchers(formData).subscribe(response => {
      if (response.isSuccess) {
        this.responseModal('success', 'Voucher deleted successfully!');
        this.getMarkaziaVouchers();
      }
    }).add(() => this._spinner.hide());
  }
  responseModal(type, message) {
    const ref = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_2__.ModalMessageComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.dismissOnlyActive = true;
    if (type == 'success') ref.componentInstance.message = message;else ref.componentInstance.messageError = message;
  }
  getMarkaziaVouchers() {
    this.vouchersList = [];
    this.tableConfig = {
      ...this.tableConfig,
      isLoading: true
    };
    let defaultParams = `pageSize=${this.tableConfig.filter.PageSize}&pageNo=${this.pageNo - 1}&sort=${this.tableConfig.filter.Sort}`;
    let params;
    if (this.filterParams) params = `${this.filterParams}&${defaultParams}`;else params = `?${defaultParams}`;
    this._vocuherService.getMarkaziaVoucherList(params).subscribe(response => {
      this.vouchersList = response.data;
      this.total = response.totalRecordCount;
      this.vouchersInfo = response.info;
    }).add(() => this.tableConfig = {
      ...this.tableConfig,
      isLoading: false
    });
  }
  exportToExcel() {
    this._spinner.show();
    let params;
    let defaultParams = `pageSize=1000&pageNo=0`;
    if (this.filterParams) params = `${this.filterParams}&${defaultParams}`;else params = `?${defaultParams}`;
    this._vocuherService.getMarkaziaVoucherList(params).subscribe(response => {
      this.generateExcel(response.data);
    }).add(() => this._spinner.hide());
  }
  generateExcel(dataList) {
    let headings = [['Voucher ID', 'Voucher Sequence Number', 'Amount JOD', 'Brand', 'Campaign', 'Issuance Date', 'Validity From', 'Validity From', 'Status']];
    let data = dataList.map(x => {
      return {
        a: x?.markaziaVoucherID,
        b: x?.markaziaVSequence,
        bb: x?.markaziaVAmount,
        c: x?.brand.brand,
        d: x?.markaziaVCampaign,
        e: this._datePipe.transform(x?.createdAt, 'mediumDate'),
        f: this._datePipe.transform(x?.markaziaVValidityFrom, 'mediumDate'),
        ff: this._datePipe.transform(x?.markaziaVValidityTo, 'mediumDate'),
        g: x?.statusObj[0].lookupName
      };
    });
    this._excelService.exportToExcel(data, headings, 'Vouchers');
  }
  onSortChange(sort) {
    if (sort?.direction && sort?.column) {
      switch (sort.column) {
        case 'markaziaVoucherID':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
          break;
        case 'markaziaVSequence':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 5 : 4;
          break;
        case 'markaziaVAmount':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 7 : 6;
          break;
        case 'brand.brand':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 9 : 8;
          break;
        case 'markaziaVCampaign':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 11 : 10;
          break;
        case 'createdAt':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 13 : 12;
          break;
        case 'statusObj[0].lookupName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 15 : 14;
          break;
        default:
          break;
      }
    } else {
      this.tableConfig.filter.Sort = 1;
    }
    this.getMarkaziaVouchers();
  }
  onPageChange(page) {
    this.pageNo = page;
    this.getMarkaziaVouchers();
  }
  initTableColumns() {
    this.tableColumns = [{
      key: 'markaziaVoucherID',
      label: 'Vocuher ID',
      canSort: true
    }, {
      key: 'markaziaVSequence',
      label: 'Voucher Sequence Number',
      canSort: true
    }, {
      key: 'markaziaVAmount',
      label: 'Amount JOD',
      canSort: true,
      currency: {
        decimalFormat: '2.3-3',
        appendText: ' JOD'
      }
    }, {
      key: 'brand.brand',
      label: 'Brand',
      canSort: true,
      placeholder: '---'
    }, {
      key: 'markaziaVCampaign',
      label: 'Campaign',
      canSort: true
    }, {
      key: 'createdAt',
      label: 'Issuance Date',
      canSort: true,
      dateFormat: 'mediumDate'
    }, {
      key: 'validity',
      label: 'Validity From-To'
    }, {
      key: 'statusObj[0].lookupName',
      label: 'Status',
      canSort: true
    }, {
      key: 'action',
      label: 'Action'
    }];
  }
  getMonthEndDate() {
    var today = new Date();
    var endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return endOfMonth;
  }
  getMonthStartDate() {
    var today = new Date();
    var startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return startOfMonth;
  }
}
MarkaziaVouchersComponent.ɵfac = function MarkaziaVouchersComponent_Factory(t) {
  return new (t || MarkaziaVouchersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_3__.MarkaziaVoucherService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService));
};
MarkaziaVouchersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MarkaziaVouchersComponent,
  selectors: [["app-markazia-vouchers"]],
  decls: 43,
  vars: 16,
  consts: [[3, "formGroup"], [1, "row", "mb-3"], [1, "col-2"], ["type", "text", "formControlName", "id", "placeholder", "Seach by ID / Sequence", 1, "form-control", "height-47"], ["placeholder", "Brand", "bindLabel", "brand", "bindValue", "brandID", "formControlName", "brandId", 3, "items"], ["type", "text", "formControlName", "campaign", "placeholder", "Campaign", 1, "form-control", "height-47"], ["placeholder", "Status", "bindLabel", "text", "bindValue", "id", "formControlName", "status", 3, "items"], [1, "col-3"], [1, "input-group", "position-relative"], ["type", "text", "placeholder", "Issuance Date", "formControlName", "date", "bsDaterangepicker", "", 1, "form-control", "height-47", 3, "bsConfig"], ["drp", "bsDaterangepicker"], ["class", "fas fa-circle-xmark clearIcon", 3, "click", 4, "ngIf"], [1, "input-group-text", 3, "click"], [1, "fa-regular", "fa-calendar-days", "font-24", "primary-clr"], [1, "row"], [1, "d-flex", "voucher", "align-items-center", "gap-3", "p-2"], ["height", "40", "src", "/assets/images/voucher.svg", "alt", "voucher"], [1, "m-0", "fw-600"], ["type", "button", 1, "redBtn", "height-47", "w-100", 3, "click"], ["type", "button", 1, "green", "redBtn", "d-flex", "align-items-center", "height-47", 3, "click"], [1, "fa-solid", "fa-file-excel", "m-2", "fa-2x"], [3, "config", "columns", "data", "loading", "page", "total", "limit", "sortUpdated", "pageUpdated"], ["libTableAdvancedColumn", "validity"], ["libTableAdvancedColumn", "action"], [1, "fas", "fa-circle-xmark", "clearIcon", 3, "click"], [1, "d-flex", "flex-column"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "button", 1, "redBtn", 3, "click"]],
  template: function MarkaziaVouchersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ng-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ng-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, MarkaziaVouchersComponent_i_14_Template, 1, 0, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MarkaziaVouchersComponent_Template_span_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14)(18, "div", 2)(19, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 2)(24, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 2)(29, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 2)(34, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MarkaziaVouchersComponent_Template_button_click_34_listener() {
        return ctx.generateVoucher();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Generate New");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 2)(37, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MarkaziaVouchersComponent_Template_button_click_37_listener() {
        return ctx.exportToExcel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " Export To Excel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "table-advanced", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sortUpdated", function MarkaziaVouchersComponent_Template_table_advanced_sortUpdated_40_listener($event) {
        return ctx.onSortChange($event);
      })("pageUpdated", function MarkaziaVouchersComponent_Template_table_advanced_pageUpdated_40_listener($event) {
        return ctx.onPageChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, MarkaziaVouchersComponent_ng_template_41_Template, 7, 8, "ng-template", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, MarkaziaVouchersComponent_ng_template_42_Template, 3, 2, "ng-template", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.filterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.brandsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.statusList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.filterForm.get("date").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Valid Vouchers ", (ctx.vouchersInfo == null ? null : ctx.vouchersInfo.valid) || 0, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Used Vouchers ", (ctx.vouchersInfo == null ? null : ctx.vouchersInfo.used) || 0, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Expired Vouchers ", (ctx.vouchersInfo == null ? null : ctx.vouchersInfo.expired) || 0, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.tableConfig)("columns", ctx.tableColumns)("data", ctx.vouchersList)("loading", ctx.loading)("page", ctx.pageNo)("total", ctx.total)("limit", ctx.limit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchDefault, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectComponent, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_5__.TableAdvancedComponent, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_6__.TableAdvancedColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
  styles: [".voucher[_ngcontent-%COMP%] {\n  height: 47px;\n  border: 1px solid var(--primary);\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9tYXJrYXppYS12b3VjaGVycy9tYXJrYXppYS12b3VjaGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudm91Y2hlciB7XG4gIGhlaWdodDogNDdweDtcbiAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czo3cHg7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 47781:
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/markazia-vouchers/markazia-vouchers.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkaziaVouchersModule": () => (/* binding */ MarkaziaVouchersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _markazia_vouchers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markazia-vouchers-routing.module */ 67891);
/* harmony import */ var _markazia_vouchers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markazia-vouchers.component */ 8357);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _components_generate_voucher_generate_voucher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/generate-voucher/generate-voucher.component */ 53582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);






class MarkaziaVouchersModule {}
MarkaziaVouchersModule.ɵfac = function MarkaziaVouchersModule_Factory(t) {
  return new (t || MarkaziaVouchersModule)();
};
MarkaziaVouchersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: MarkaziaVouchersModule
});
MarkaziaVouchersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _markazia_vouchers_routing_module__WEBPACK_IMPORTED_MODULE_0__.MarkaziaVouchersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MarkaziaVouchersModule, {
    declarations: [_markazia_vouchers_component__WEBPACK_IMPORTED_MODULE_1__.MarkaziaVouchersComponent, _components_generate_voucher_generate_voucher_component__WEBPACK_IMPORTED_MODULE_3__.GenerateVoucherComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _markazia_vouchers_routing_module__WEBPACK_IMPORTED_MODULE_0__.MarkaziaVouchersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 81181:
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/markazia-vouchers/services/markazia-voucher.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkaziaVoucherService": () => (/* binding */ MarkaziaVoucherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class MarkaziaVoucherService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
    this.apiUrl2 = this.sharedService.getUrl2;
  }
  getBrands(params) {
    return this.http.get(`${this.apiUrl2}Customer/GetBrands${params}`, this.sharedService.getHeaders());
  }
  getLookup(params) {
    return this.http.get(`${this.apiUrl}Lookups/GetLookups${params}`, this.sharedService.getHeaders());
  }
  getCostCenter(params) {
    return this.http.get(`${this.apiUrl}PettyCash/GetCostCenters${params}`, this.sharedService.getHeaders());
  }
  getMarkaziaVoucherList(params) {
    return this.http.get(`${this.apiUrl}MarkaziaVouchers/GetMarkaziaVouchers${params}`, this.sharedService.getHeaders());
  }
  deleteMarkaziaVouchers(payload) {
    return this.http.post(`${this.apiUrl}MarkaziaVouchers/DeleteMarkaziaVouchers`, payload, this.sharedService.getHeaders());
  }
  generateVoucher(payload) {
    return this.http.post(`${this.apiUrl}MarkaziaVouchers/GenerateMarkaziaVouchers`, payload, this.sharedService.getHeaders());
  }
}
MarkaziaVoucherService.ɵfac = function MarkaziaVoucherService_Factory(t) {
  return new (t || MarkaziaVoucherService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
MarkaziaVoucherService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MarkaziaVoucherService,
  factory: MarkaziaVoucherService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_cashier_markazia-vouchers_markazia-vouchers_module_ts.js.map