"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["default-src_app_dashboard_modules_main-fund_provide-expenses_expense-request-details_expense--cd6a74"],{

/***/ 99132:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/provide-expenses/expense-request-details/expense-request-details.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseRequestDetailsComponent": () => (/* binding */ ExpenseRequestDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cashier_petty_cash_services_petty_cash_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../cashier/petty-cash/services/petty-cash.service */ 72657);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/excel.service */ 64249);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/table-advanced/table-advanced.component */ 49973);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/table-advanced/table-advanced.directives */ 85746);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/view-file/view-file.component */ 67761);










function ExpenseRequestDetailsComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 1, ctx_r0.details.createdAt, "mediumDate"), "");
  }
}
function ExpenseRequestDetailsComponent_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 25)(2, "div", 9)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Branch Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 26)(8, "div", 9)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Register No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 25)(14, "div", 9)(15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Register Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 26)(20, "div", 9)(21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Requested Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 26)(27, "div", 9)(28, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.details == null ? null : ctx_r2.details.register == null ? null : ctx_r2.details.register.branch.branchName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.details == null ? null : ctx_r2.details.register == null ? null : ctx_r2.details.register.registerId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.details == null ? null : ctx_r2.details.register == null ? null : ctx_r2.details.register.registersName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](25, 9, ctx_r2.details == null ? null : ctx_r2.details.requestedAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx_r2.details.statusObj.lookupBGColor)("color", ctx_r2.details.statusObj.lookupTextColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.details.statusObj.description, " ");
  }
}
function ExpenseRequestDetailsComponent_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29)(1, "div", 5)(2, "div", 30)(3, "div", 9)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Branch Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 30)(9, "div", 9)(10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Register No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 30)(15, "div", 9)(16, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Register Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 31)(21, "div", 5)(22, "div", 25)(23, "div", 9)(24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Request No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 25)(29, "div", 9)(30, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " Requested Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 25)(36, "div", 9)(37, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, " Provided Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 25)(43, "div", 9)(44, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.details == null ? null : ctx_r4.details.register == null ? null : ctx_r4.details.register.branch.branchName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.details == null ? null : ctx_r4.details.register == null ? null : ctx_r4.details.register.registerId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.details == null ? null : ctx_r4.details.register == null ? null : ctx_r4.details.register.registersName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.details == null ? null : ctx_r4.details.pettyCashRequestId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](34, 11, ctx_r4.details == null ? null : ctx_r4.details.requestedAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](41, 14, ctx_r4.details == null ? null : ctx_r4.details.approvedAmount, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx_r4.details.statusObj.lookupBGColor)("color", ctx_r4.details.statusObj.lookupTextColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.details.statusObj.description, " ");
  }
}
function ExpenseRequestDetailsComponent_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 9)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Rejected Reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 33)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.details.rejectionReason, " ");
  }
}
function ExpenseRequestDetailsComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Receiving Confirmation Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "view-file", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("file", ctx_r6.confirmReceivingVoucherAttachment);
  }
}
function ExpenseRequestDetailsComponent_div_6_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r10 == null ? null : row_r10.expenseTotalAmount, "2.3-3"), " JOD ");
  }
}
function ExpenseRequestDetailsComponent_div_6_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r11 == null ? null : row_r11.invoiceDate, "mediumDate"), " ");
  }
}
function ExpenseRequestDetailsComponent_div_6_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r12 == null ? null : row_r12.createdAt, "mediumDate"), " ");
  }
}
function ExpenseRequestDetailsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExpenseRequestDetailsComponent_div_6_ng_container_1_Template, 32, 12, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExpenseRequestDetailsComponent_div_6_ng_template_2_Template, 48, 17, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 8)(5, "div", 9)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 10)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ExpenseRequestDetailsComponent_div_6_div_11_Template, 7, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ExpenseRequestDetailsComponent_div_6_div_12_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 13)(14, "div", 14)(15, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Approved Expenses During Provided Replenishment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExpenseRequestDetailsComponent_div_6_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.exportApprovedPettyCashRequestExpensesList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Export Expenses List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "table-advanced", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scrollUpdate", function ExpenseRequestDetailsComponent_div_6_Template_table_advanced_scrollUpdate_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.onsScrollUpdate($event));
    })("pageUpdated", function ExpenseRequestDetailsComponent_div_6_Template_table_advanced_pageUpdated_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ExpenseRequestDetailsComponent_div_6_ng_template_21_Template, 2, 4, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ExpenseRequestDetailsComponent_div_6_ng_template_22_Template, 2, 4, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ExpenseRequestDetailsComponent_div_6_ng_template_23_Template, 2, 4, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 22)(25, "div", 23)(26, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExpenseRequestDetailsComponent_div_6_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.data == null ? null : ctx_r1.data.from) !== "providePettyCash")("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.details.requestNote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.details.statusObj.description == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.confirmReceivingVoucherAttachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx_r1.tableConfig)("columns", ctx_r1.tableColumns)("data", ctx_r1.approvedRequestList)("loading", ctx_r1.loading)("page", ctx_r1.pageNo)("total", ctx_r1.total)("limit", ctx_r1.limit);
  }
}
class ExpenseRequestDetailsComponent {
  constructor(pettyCashService, sharedService, activeModal, _excelService, _commonService) {
    this.pettyCashService = pettyCashService;
    this.sharedService = sharedService;
    this.activeModal = activeModal;
    this._excelService = _excelService;
    this._commonService = _commonService;
    this.approvedRequestList = [];
    //Data Table
    this.tableColumns = [];
    this.loading = false;
    this.pageNo = 1;
    this.total = 0;
    this.limit = 4;
    this.tableConfig = {
      filter: {
        Sort: 1,
        PageSize: this.limit
      },
      hideTotalRecord: true,
      infiniteScroll: {
        isScroll: true
      },
      style: {
        otherStyle: {
          height: '170px',
          overflow: 'auto'
        }
      }
    };
  }
  ngOnInit() {
    this.initTableColumns();
    this.getPettyCashRequestExpensesList();
    this.getRegisterPettycashrequestDetails();
  }
  exportToExcel(expenseList) {
    let requestDetails = [this.details?.register?.branch?.branchName, this.details?.register?.registerId, this.details?.register?.registersName, this.details?.pettyCashRequestId, this._commonService.transformDecimal(this.details?.requestedAmount), this._commonService.transformDecimal(this.details?.approvedAmount), this.details?.requestNote];
    let expenseDetails = expenseList.map((item, index) => {
      return [index + 1, item?.invoiceNo, this._commonService.transformDate(item?.invoiceDate), item?.category[0]?.lookupName, item?.costCenter?.costCenterName, item?.costCenter?.approverUser?.fullName, item?.managerApproval?.approvername, this._commonService.transformDecimal(item?.expenseTotalAmount), this._commonService.transformDate(this.data?.providedAt)];
    });
    const sections = [{
      headers: ['Branch Name', 'Register No.', 'Regsiter Name', 'Request No.', 'Requested Amount', 'Provided Amount', 'Notes'],
      data: requestDetails,
      heading: ['Request Details'],
      showAsKeyValue: true
    }, {
      headers: ['Seq', 'Invoice No.', 'Invoice Date', 'Category', 'Cost Center Name', 'Cost Center Approver', 'Approved By', 'Amount', 'Providing Date'],
      data: expenseDetails,
      heading: ['Expense Details']
    }];
    this._excelService.exportToExcelJs({
      sections,
      fileName: 'Petty_Cash_Replenishment_Report',
      mainHeading: 'Petty Cash Replenishment Report'
    });
  }
  exportApprovedPettyCashRequestExpensesList() {
    let params = `?RegisterId=${this.data.registerId}&ReplenishmentRequestID=${this.data.pettyCashRequestId}&pageNo=0&pageSize=10000`;
    this.pettyCashService.getPettyCashRequestExpensesList(params).subscribe({
      next: response => {
        let approvedExp = response?.data?.data.filter(x => x.status == 2004);
        this.exportToExcel(approvedExp);
      }
    });
  }
  getRegisterPettycashrequestDetails() {
    this.pettyCashService.GetRegisterPettycashrequestDetails(this.data.pettyCashRequestId).subscribe(response => {
      this.details = response.data;
    });
  }
  onsScrollUpdate(event) {
    if (event?.scrolled) {
      this.pageNo += 1;
      this.getPettyCashRequestExpensesList();
    }
  }
  getPettyCashRequestExpensesList() {
    let params = `?RegisterId=${this.data.registerId}&ReplenishmentRequestID=${this.data.pettyCashRequestId}&pageNo=${this.pageNo - 1}&pageSize=${this.tableConfig.filter.PageSize}`;
    this.pettyCashService.getPettyCashRequestExpensesList(params).subscribe(response => {
      if (response?.isSuccess) {
        let data = response.data.data;
        if (!data?.length) {
          return;
        }
        let approvedExp = data.filter(x => x.status == 2004);
        this.approvedRequestList = [...this.approvedRequestList, ...approvedExp];
        this.total = response.data?.totalRecordCount;
        this.confirmReceivingVoucherAttachment = response?.data?.info?.confirnReceivingVoucher;
      }
    });
  }
  onPageChange(page) {
    this.pageNo = page;
    this.getPettyCashRequestExpensesList();
  }
  initTableColumns() {
    this.tableColumns = [{
      key: 'invoiceNo',
      label: 'Invoice No'
    }, {
      key: 'invoiceDate',
      label: 'Invoice Date'
    }, {
      key: 'category[0].lookupName',
      label: 'Category'
    }, {
      key: 'costCenter.costCenterName',
      label: 'Cost Center Name'
    }, {
      key: 'costCenter.approverUser.fullName',
      label: 'Cost Center Approver'
    }, {
      key: 'managerApproval.approvername',
      label: 'Approved By',
      placeholder: '---'
    }, {
      key: 'expenseTotalAmount',
      label: 'Amount'
    }, {
      key: 'createdAt',
      label: 'Date'
    }];
  }
}
ExpenseRequestDetailsComponent.ɵfac = function ExpenseRequestDetailsComponent_Factory(t) {
  return new (t || ExpenseRequestDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_cashier_petty_cash_services_petty_cash_service__WEBPACK_IMPORTED_MODULE_0__.PettyCashService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
};
ExpenseRequestDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ExpenseRequestDetailsComponent,
  selectors: [["app-expense-request-details"]],
  inputs: {
    data: "data"
  },
  decls: 7,
  vars: 2,
  consts: [[1, "modal-body"], [1, "modal-head", "d-flex", "justify-content-between"], [4, "ngIf"], [1, "aboutreq"], ["class", "row", 4, "ngIf"], [1, "row"], [4, "ngIf", "ngIfElse"], ["fromProvidedPettyCash", ""], [1, "col-sm-12"], [1, "card-sm"], [1, "note", 2, "height", "60px"], ["class", "col-sm-6", 4, "ngIf"], ["class", "col-md-4 mt-3", 4, "ngIf"], [1, "col-12", "mt-3"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-500", "mb-0"], ["type", "button", 1, "btnSm", "green", "redBtn", "d-flex", "align-items-center", "p-2", "gap-2", 3, "click"], [1, "fa-solid", "fa-file-excel", "fa-2x"], [3, "config", "columns", "data", "loading", "page", "total", "limit", "scrollUpdate", "pageUpdated"], ["libTableAdvancedColumn", "expenseTotalAmount"], ["libTableAdvancedColumn", "invoiceDate"], ["libTableAdvancedColumn", "createdAt"], [1, "col-md-12"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "col-sm-3"], [1, "col-sm-2"], [1, "mb-3"], [1, "pending"], [1, "col-5"], [1, "col-sm-4"], [1, "col-7"], [1, "col-sm-6"], [1, "note"], [1, "col-md-4", "mt-3"], [1, "fw-500", "mb-2"], [3, "file"]],
  template: function ExpenseRequestDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Request Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExpenseRequestDetailsComponent_p_4_Template, 5, 4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ExpenseRequestDetailsComponent_div_6_Template, 28, 12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_4__.TableAdvancedComponent, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_5__.TableAdvancedColumnDirective, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_6__.ViewFileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".modal-head[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 10px;\n}\n.modal-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n  text-transform: capitalize;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #929eae;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1b212d;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.aboutreq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #54595e;\n  padding: 5px 0px;\n  margin: 0;\n}\n\n.card-sm[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1b212d;\n  margin-bottom: 5px;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #929eae;\n}\n\n.note[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  height: 120px;\n  border-radius: 6px;\n  margin: 5px 0px;\n  overflow: hidden;\n}\n.note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL3Byb3ZpZGUtZXhwZW5zZXMvZXhwZW5zZS1yZXF1ZXN0LWRldGFpbHMvZXhwZW5zZS1yZXF1ZXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtBQUFOOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSEo7O0FBT0E7RUFDRSxlQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUpKO0FBT0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTEo7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5GO0FBUUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQU5KIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWhlYWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzkyOWVhZTtcblxuICAgIGIge1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgfVxuICB9XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmFib3V0cmVxIHtcbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6ICM1NDU5NWU7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICBtYXJnaW46MDtcbiAgfVxufVxuXG4uY2FyZC1zbSB7XG4gIG1hcmdpbjogMHB4IDBweDtcblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM5MjllYWU7XG4gIH1cbn1cblxuLm5vdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_modules_main-fund_provide-expenses_expense-request-details_expense--cd6a74.js.map