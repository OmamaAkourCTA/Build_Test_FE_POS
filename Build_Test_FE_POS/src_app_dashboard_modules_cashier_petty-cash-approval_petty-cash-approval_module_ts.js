"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_cashier_petty-cash-approval_petty-cash-approval_module_ts"],{

/***/ 41539:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash-approval/components/expense-details/expense-details.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseDetailsComponent": () => (/* binding */ ExpenseDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _cashier_petty_cash_modal_image_modal_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../cashier/petty-cash/modal-image/modal-image.component */ 32216);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _treasury_petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../treasury/petty-cash-treasury/services/treasury.service */ 79541);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);









function ExpenseDetailsComponent_div_0_div_2_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 12)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 27)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.expenseDetails == null ? null : ctx_r3.expenseDetails.rejectionReason, " ");
  }
}
function ExpenseDetailsComponent_div_0_div_2_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 44)(2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Please fill the reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ExpenseDetailsComponent_div_0_div_2_div_103_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.RejectionReason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.RejectionReason);
  }
}
function ExpenseDetailsComponent_div_0_div_2_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.msgError, "");
  }
}
function ExpenseDetailsComponent_div_0_div_2_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.messageError, " ");
  }
}
function ExpenseDetailsComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Expense Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6)(6, "p", 7)(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Invoice No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 8)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Invoice Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 8)(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Expense Creation Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9)(21, "div", 10)(22, "div", 2)(23, "div", 11)(24, "div", 12)(25, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Employe Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 11)(30, "div", 12)(31, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 13)(36, "div", 2)(37, "div", 14)(38, "div", 12)(39, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 14)(45, "div", 12)(46, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Tax ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 14)(51, "div", 12)(52, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Total Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 14)(58, "div", 12)(59, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 17)(65, "div", 18)(66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 19)(70, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseDetailsComponent_div_0_div_2_Template_p_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.openMdalImageView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 21)(73, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseDetailsComponent_div_0_div_2_Template_button_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.openMdalImageView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 26)(78, "div", 12)(79, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 27)(82, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, ExpenseDetailsComponent_div_0_div_2_div_84_Template, 7, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 26)(86, "div", 29)(87, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " Please take an action for the expense ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div")(91, "div", 30)(92, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExpenseDetailsComponent_div_0_div_2_Template_input_change_92_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.chooseType($event));
    })("ngModelChange", function ExpenseDetailsComponent_div_0_div_2_Template_input_ngModelChange_92_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.type = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 30)(96, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExpenseDetailsComponent_div_0_div_2_Template_input_change_96_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.chooseType($event));
    })("ngModelChange", function ExpenseDetailsComponent_div_0_div_2_Template_input_ngModelChange_96_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.type = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Needs Revision");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 30)(100, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExpenseDetailsComponent_div_0_div_2_Template_input_change_100_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.chooseType($event));
    })("ngModelChange", function ExpenseDetailsComponent_div_0_div_2_Template_input_ngModelChange_100_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.type = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](103, ExpenseDetailsComponent_div_0_div_2_div_103_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, ExpenseDetailsComponent_div_0_div_2_div_104_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](105, ExpenseDetailsComponent_div_0_div_2_div_105_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 2)(107, "div", 40)(108, "div", 41)(109, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseDetailsComponent_div_0_div_2_Template_button_click_109_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpenseDetailsComponent_div_0_div_2_Template_button_click_111_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.submitExpenseAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.invoiceNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 23, ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.invoiceDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 26, ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.createdBy.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.category[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](43, 29, ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.expenseAmount, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.expenseTax, " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](56, 32, ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.expenseTotalAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.statusObj == null ? null : ctx_r2.expenseDetails.statusObj.lookupBGColor)("color", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.statusObj == null ? null : ctx_r2.expenseDetails.statusObj.lookupTextColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.statusObj == null ? null : ctx_r2.expenseDetails.statusObj.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Receipts - ", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.expenseRecordId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.files[0] == null ? null : ctx_r2.expenseDetails.files[0].attachmentPath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.expenseNotes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.statusObj.description) == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.type == "Reject" || ctx_r2.type == "revise");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.msgError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.messageError);
  }
}
function ExpenseDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExpenseDetailsComponent_div_0_div_2_Template, 113, 35, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.expenseDetails);
  }
}
function ExpenseDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 49)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.message, "");
  }
}
class ExpenseDetailsComponent {
  constructor(treasuryService, activeModal, modalService, router) {
    this.treasuryService = treasuryService;
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.router = router;
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.type = 'Approved';
  }
  ngOnInit() {}
  openMdalImageView() {
    const modalRef = this.modalService.open(_cashier_petty_cash_modal_image_modal_image_component__WEBPACK_IMPORTED_MODULE_0__.ModalImageComponent);
    modalRef.componentInstance.imageUploadedView = this.expenseDetails?.files[0]?.attachmentPath;
  }
  chooseType(e) {
    const type = e.target.value;
    this.type = type;
  }
  ApproveExpense() {
    const formData = new FormData();
    formData.append('ExpenseRecordId', this.expenseDetails.expenseRecordId);
    return this.treasuryService.approverApproveExpense(formData).subscribe(response => {
      if (response.isSuccess) {
        this.message = 'Approved successfully ';
        setTimeout(() => {
          this.modalService.dismissAll();
          this.sendtoLoadData.emit(true);
        }, 3000);
      } else {
        console.log('error', response);
        this.messageError = response.Errors[0]?.ErrorMessageEn;
        setTimeout(() => {
          this.messageError = '';
        }, 4000);
      }
    }, error => {
      const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
      modalRef.componentInstance.type = 'error';
      modalRef.componentInstance.messageError = error?.error?.errors;
    });
  }
  requestReviseExpense() {
    if (!this.RejectionReason) {
      this.msgError = ' Reason is required';
      setTimeout(() => {
        this.msgError = '';
      }, 2000);
      return window.scroll();
    }
    const formData = new FormData();
    formData.append('ExpenseRecordId', this.expenseDetails.expenseRecordId);
    formData.append('Notes', this.RejectionReason);
    return this.treasuryService.requestReviseExpense(formData).subscribe(response => {
      if (response.isSuccess) {
        this.message = 'Revised successfully ';
        this.RejectionReason = '';
        setTimeout(() => {
          this.modalService.dismissAll();
          this.sendtoLoadData.emit(true);
        }, 3000);
      } else {
        console.log('error', response);
        this.messageError = response.Errors[0]?.ErrorMessageEn;
        setTimeout(() => {
          this.messageError = '';
        }, 4000);
      }
    }, error => {
      const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
      modalRef.componentInstance.type = 'error';
      modalRef.componentInstance.messageError = error?.error?.errors;
    });
  }
  RejectExpense() {
    if (!this.RejectionReason) {
      this.msgError = ' Reason is required';
      setTimeout(() => {
        this.msgError = '';
      }, 2000);
      return window.scroll();
    }
    const formData = new FormData();
    formData.append('ExpenseRecordId', this.expenseDetails.expenseRecordId);
    formData.append('RejectionReason', this.RejectionReason);
    return this.treasuryService.RejectExpense(formData).subscribe(response => {
      if (response.isSuccess) {
        this.message = 'Rejected successfully ';
        this.RejectionReason = '';
        setTimeout(() => {
          this.modalService.dismissAll();
          this.sendtoLoadData.emit(true);
        }, 3000);
      } else {
        console.log('error', response);
        this.messageError = response.Errors[0]?.ErrorMessageEn;
        setTimeout(() => {
          this.messageError = '';
        }, 4000);
      }
    }, error => {
      const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
      modalRef.componentInstance.type = 'error';
      modalRef.componentInstance.messageError = error?.error?.errors;
    });
  }
  submitExpenseAction() {
    if (this.type == 'Approved') {
      this.ApproveExpense();
    } else if (this.type == 'revise') {
      this.requestReviseExpense();
    } else {
      this.RejectExpense();
    }
  }
}
ExpenseDetailsComponent.ɵfac = function ExpenseDetailsComponent_Factory(t) {
  return new (t || ExpenseDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_treasury_petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_2__.TreasuryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
ExpenseDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ExpenseDetailsComponent,
  selectors: [["app-expense-details"]],
  inputs: {
    expenseDetails: "expenseDetails"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "modal-body", 4, "ngIf"], [1, "modal-body"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], [1, "modal-head"], [1, "info", "d-flex", "flex-column"], [1, "invoic"], [1, "m-0"], [1, "card-form", "position-relative"], [1, "row", "mt-3"], [1, "col-md-3"], [1, "card-sm"], [1, "col-md-6"], [1, "col-md-4"], [1, "mb-3"], [1, "pending", "pending-approval", "mt-2"], [1, "col-md-8"], [1, "form-group", "mb-3"], [1, "uploadedfile"], [3, "click"], [1, "d-flex"], ["type", "button", 1, "btn", "fview", 3, "click"], ["src", "assets/images/eye.png", "alt", ""], ["type", "button", "download", "", 1, "btn", "fview", 3, "href"], ["src", "assets/images/Download.png", "alt", ""], [1, "col-md-12", "my-2"], [1, "note"], ["class", "col-md-6 my-2", 4, "ngIf"], [1, "tackaction"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "inlineRadioOptions", "id", "Approved", "value", "Approved", 1, "form-check-input", 3, "ngModel", "change", "ngModelChange"], ["for", "Approved", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "revise", "value", "revise", 1, "form-check-input", 3, "ngModel", "change", "ngModelChange"], ["for", "revise", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "Reject", "value", "Reject", 1, "form-check-input", 3, "ngModel", "change", "ngModelChange"], ["for", "Reject", 1, "form-check-label"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["class", "alert alert-danger text-center my-2", "role", "alert", 4, "ngIf"], [1, "col-md-12", "padding-right"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "col-md-6", "my-2"], ["for", ""], ["maxlength", "150", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "error", "py-2"], ["role", "alert", 1, "alert", "alert-danger", "text-center", "my-2"], [1, "message"], [1, "fa-regular", "fa-circle-check"]],
  template: function ExpenseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ExpenseDetailsComponent_div_0_Template, 3, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExpenseDetailsComponent_div_1_Template, 5, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [".modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.card-page[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #c4cdd5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 22px;\n  color: #1b212d;\n  padding: 5px 0 15px;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .invoic[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #929eae;\n  font-weight: 500;\n  padding: 1px;\n}\n.modal-head[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1b212d;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 80px !important;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.btn-upload[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  margin: 0px;\n}\n\n.overlay-bi[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  margin: -30px 0 0 0;\n  z-index: 5;\n  position: relative;\n}\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #fff3f3;\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.uplod[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #676767;\n}\n\n.save-img[_ngcontent-%COMP%] {\n  width: 22px !important;\n}\n\n.fileView[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.btn[_ngcontent-%COMP%]:disabled, .btn.disabled[_ngcontent-%COMP%] {\n  background: #f1f3f3 !important;\n  color: #9b9b9b !important;\n  border: 1px solid #f1f3f3;\n  cursor: initial;\n}\n\n.card-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n\n.card-sm[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1b212d;\n  margin-bottom: 5px;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #929eae;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  height: 120px;\n  border-radius: 6px;\n  margin: 5px 0px;\n  word-break: break-all;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  padding: 10px;\n}\n\n.fview[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 50%;\n  margin: 0px 5px;\n  width: 30px;\n  height: 30px;\n}\n.fview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.tackaction[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border-radius: 6px;\n  margin: 5px 0px;\n  padding: 20px;\n}\n.tackaction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  padding: 10px;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.message[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  color: #1b212d;\n  margin: 0px;\n  padding: 20px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-check[_ngcontent-%COMP%] {\n  color: #25BB00;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #f44336;\n  font-weight: 500;\n  padding: 7px;\n  display: block;\n}\n\n.padding-right[_ngcontent-%COMP%] {\n  padding-right: 36px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9wZXR0eS1jYXNoLWFwcHJvdmFsL2NvbXBvbmVudHMvZXhwZW5zZS1kZXRhaWxzL2V4cGVuc2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtBQUFOO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBSUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUZOO0FBS0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSE47QUFLTTtFQUNFLGNBQUE7QUFIUjs7QUFTQTtFQUNFLHVCQUFBO0FBTkY7O0FBU0E7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFORjtBQVFFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBTko7QUFTRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFQSjtBQVVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBUko7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQWFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVZKOztBQWNBO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFYRjs7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBWEY7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVhKOztBQWVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBWkY7QUFjRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVpKO0FBY0k7RUFDRSxXQUFBO0FBWk47QUFnQkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWRKOztBQWtCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFmRjs7QUFrQkE7RUFDRSxzQkFBQTtBQWZGOztBQW1CRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQWhCSjs7QUFvQkE7O0VBRUUsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQWpCRjs7QUFvQkE7RUFDRSxtQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSx5QkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxnQkFBQTtBQWpCRjtBQW1CRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFsQko7QUFxQkU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQW5CSjtBQXFCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBbkJOOztBQXdCQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFyQkY7QUF1QkU7RUFDRSxzQkFBQTtBQXJCSjs7QUF5QkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUF0QkY7QUF3QkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQXRCSjs7QUEwQkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUF2QkY7QUF5QkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUF2Qko7QUEwQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUF4Qko7O0FBNEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBekJGOztBQTRCQTtFQUNFLG1CQUFBO0FBekJGIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY2FyZC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwcHggc29saWQgI2M0Y2RkNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uY2FyZC1wYWdlIHtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLm1vZGFsLWhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0Y2RkNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogIzFiMjEyZDtcbiAgICBwYWRkaW5nOiA1cHggMCAxNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgIH1cbiAgfVxuXG4gIC5pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuXG4gICAgLmludm9pYyB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6ICM5MjllYWU7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogMXB4O1xuXG4gICAgICBiIHtcbiAgICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjOTM5YWE4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMGYwZjBmO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gIH1cbn1cblxuLmJ0bi11cGxvYWQge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTJweCAzNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uY2FyZC1pbWcge1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuXG4ub3ZlcmxheS1iaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSAxOTkgMTk5IC8gMjElKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNhcmQtZm9ybSAuZWRpdC1idG4ge1xuICBtYXJnaW46IC0zMHB4IDAgMCAwO1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG59XG5cbi51cGxvYWRlZGZpbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTFhZjIyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogIzY5Njk2OTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLnVwbG9kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzY3Njc2Nztcbn1cblxuLnNhdmUtaW1nIHtcbiAgd2lkdGg6IDIycHggIWltcG9ydGFudDtcbn1cblxuLmZpbGVWaWV3IHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbi5idG46ZGlzYWJsZWQsXG4uYnRuLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2YxZjNmMyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzliOWI5YiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2YzO1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbi5jYXJkLWZvcm0gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbn1cblxuLmNhcmQtc20ge1xuICBtYXJnaW46IDEwcHggMHB4O1xuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzFiMjEyZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzkyOWVhZTtcbiAgfVxuXG4gIC5ub3RlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi5mdmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi50YWNrYWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDVweCAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBoNSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5mYS1jaXJjbGUtY2hlY2sge1xuICAgIGNvbG9yOiAjMjVCQjAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMnB4IDEwcHggNXB4O1xuICB9XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDdweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYWRkaW5nLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 66283:
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash-approval/petty-cash-approval-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PettyCashApprovalRoutingModule": () => (/* binding */ PettyCashApprovalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _petty_cash_approval_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./petty-cash-approval.component */ 9700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _petty_cash_approval_component__WEBPACK_IMPORTED_MODULE_0__.PettyCashApprovalComponent
}];
class PettyCashApprovalRoutingModule {}
PettyCashApprovalRoutingModule.ɵfac = function PettyCashApprovalRoutingModule_Factory(t) {
  return new (t || PettyCashApprovalRoutingModule)();
};
PettyCashApprovalRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PettyCashApprovalRoutingModule
});
PettyCashApprovalRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PettyCashApprovalRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9700:
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash-approval/petty-cash-approval.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PettyCashApprovalComponent": () => (/* binding */ PettyCashApprovalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _components_expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/expense-details/expense-details.component */ 41539);
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/confirm-modal/confirm-modal.component */ 87192);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _admin_registers_register_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/registers/register-setup.service */ 30624);
/* harmony import */ var _treasury_petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../treasury/petty-cash-treasury/services/treasury.service */ 79541);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/general.service */ 21864);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/header.service */ 36690);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/shared.service */ 69082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/not-found/not-found.component */ 59442);



















function PettyCashApprovalComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PettyCashApprovalComponent_tr_65_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.handleCheckBoxChange());
    })("ngModelChange", function PettyCashApprovalComponent_tr_65_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](item_r6.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "td")(23, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "td")(26, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_tr_65_Template_button_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.openModalExpense(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "View details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (item_r6 == null ? null : item_r6.status) != 2011)("ngModel", item_r6.checked)("id", index_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r6 == null ? null : item_r6.invoiceNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](7, 16, item_r6 == null ? null : item_r6.invoiceDate, "mediumDate") || "---", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r6 == null ? null : item_r6.category[0] == null ? null : item_r6.category[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r6 == null ? null : item_r6.costCenter == null ? null : item_r6.costCenter.costCenterName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r6 == null ? null : item_r6.costCenter == null ? null : item_r6.costCenter.approverUser == null ? null : item_r6.costCenter.approverUser.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](16, 19, item_r6 == null ? null : item_r6.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r6 == null ? null : item_r6.createdBy == null ? null : item_r6.createdBy.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](21, 22, item_r6 == null ? null : item_r6.expenseTotalAmount, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", item_r6.statusObj.lookupBGColor)("color", item_r6.statusObj.lookupTextColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r6.statusObj.description, " ");
  }
}
function PettyCashApprovalComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function PettyCashApprovalComponent_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 29)(2, "div", 3)(3, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 3)(12, "ngb-pagination", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function PettyCashApprovalComponent_ng_container_67_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.pageNo = $event);
    })("pageChange", function PettyCashApprovalComponent_ng_container_67_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r2.pageNo * 6 - 5, " - ", (ctx_r2.expenses == null ? null : ctx_r2.expenses.length) == 6 ? ctx_r2.pageNo * 6 : ctx_r2.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx_r2.totalRecords)("page", ctx_r2.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function PettyCashApprovalComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_div_68_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](70);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.confirmModal("approve", _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_div_68_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](70);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.confirmModal("revise", _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Needs Revision");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_div_68_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](70);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.confirmModal("reject", _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function PettyCashApprovalComponent_ng_template_69_div_4_ng_container_4_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function PettyCashApprovalComponent_ng_template_69_div_4_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PettyCashApprovalComponent_ng_template_69_div_4_ng_container_4_ng_container_1_span_1_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r22.appForm.get("rejectReason")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function PettyCashApprovalComponent_ng_template_69_div_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PettyCashApprovalComponent_ng_template_69_div_4_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r21.appForm.get("rejectReason")) == null ? null : tmp_0_0.invalid) && ((tmp_0_0 = ctx_r21.appForm.get("rejectReason")) == null ? null : tmp_0_0.touched) || ((tmp_0_0 = ctx_r21.appForm.get("rejectReason")) == null ? null : tmp_0_0.dirty));
  }
}
function PettyCashApprovalComponent_ng_template_69_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, PettyCashApprovalComponent_ng_template_69_div_4_ng_container_4_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r20.appForm.get("rejectReason")) == null ? null : tmp_0_0["errors"]);
  }
}
function PettyCashApprovalComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36)(1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, PettyCashApprovalComponent_ng_template_69_div_4_Template, 5, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 33)(6, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_ng_template_69_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      const modal_r19 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r19.dismiss("close"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_ng_template_69_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r26.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Fill down the ", ctx_r5.action, " reason for expense?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r5.appForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.action == "reject" || ctx_r5.action == "revise");
  }
}
class PettyCashApprovalComponent {
  constructor(_registerService, treasuryService, generalService, headerService, modalService, _activeModal, _sharedService, router, config, fb, toastr, _spinnerService) {
    this._registerService = _registerService;
    this.treasuryService = treasuryService;
    this.generalService = generalService;
    this.headerService = headerService;
    this.modalService = modalService;
    this._activeModal = _activeModal;
    this._sharedService = _sharedService;
    this.router = router;
    this.fb = fb;
    this.toastr = toastr;
    this._spinnerService = _spinnerService;
    this.expenses = [];
    this.searchText = '';
    this.status = '';
    this.sort = 1;
    this.pageNo = 1;
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.appForm = this.fb.group({
      rejectReason: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
    });
    this.getRegisterDetailsV2();
  }
  getRegisterDetailsV2() {
    //&RegisterId=${ this._sharedService.getRegister.registerObj.id }
    this._spinnerService.show();
    let registerId = this._sharedService.getRegister?.registerObj?.id;
    this._registerService.getRegisterDetailsV2(registerId).subscribe(response => {
      this.registerDetails = response.data;
      this.GetMainData();
    });
  }
  GetMainData() {
    let type = this.registerDetails.pettyCashApprovalType;
    let registerId = this._sharedService.getRegister.registerObj.id;
    let userId = this._sharedService.getUserId;
    let params = `?Status=${2011}&Sort=${this.sort}&PageNo=${this.pageNo - 1}&PageSize=6`;
    if (type == 'Cost Center' || !type) params += `&approvalId=${userId}`;else if (type == 'Direct Manager') {
      if (this.registerDetails.pettyCashManagerID == userId) params += `&registerId=${registerId}`;else {
        this._spinnerService.hide();
        return;
      }
    }
    this.treasuryService.getPettyCashPendingManagerApprovalExpenses(params).subscribe(response => {
      if (response) {
        this.expenses = response.data.map(x => {
          return {
            ...x,
            checked: false
          };
        });
        this.totalRecords = response.info.totalRecordCount;
      }
    }).add(() => {
      this._spinnerService.hide();
    });
  }
  handleCheckBoxChange() {
    this.checkedItems = this.expenses.filter(x => x.checked);
  }
  handleCheckAll(event) {
    let changedArr = [];
    if (event.target.checked) {
      changedArr = this.expenses.map(x => {
        return {
          ...x,
          checked: true
        };
      });
      this.expenses = changedArr;
      this.checkedItems = changedArr;
    } else {
      changedArr = this.expenses.map(x => {
        return {
          ...x,
          checked: false
        };
      });
      this.expenses = changedArr;
      this.checkedItems = [];
    }
  }
  Viewdetails(item) {
    this.router.navigateByUrl('/petty-cash/request-details/1');
    this.headerService.setTitle('Petty Cash Monitoring > Petty Cash Replenishment Request > View Details');
  }
  viewExpense() {
    this.headerService.setTitle('petty-cash > View role');
  }
  confirmModal(action, content) {
    this.appForm.reset();
    this.action = action;
    const modelRef = this.modalService.open(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmModalComponent);
    modelRef.componentInstance.data = {
      body: `Are you sure you want to ${action} expense`
    };
    modelRef.componentInstance.eventData.subscribe(value => {
      if (value) {
        this.handleMultipleExpense(content);
      }
    });
  }
  handleMultipleExpense(content) {
    this.save();
    if (this.action !== 'approve') {
      this.reasonModelRef = this.modalService.open(content, {
        centered: true,
        size: 'md'
      });
    }
  }
  save() {
    let ids = this.checkedItems.map(x => x.expenseRecordId).toString();
    const formData = new FormData();
    formData.append('ExpenseRecordId', ids);
    if (this.action == 'approve') {
      this.treasuryService.approverApproveExpense(formData).subscribe(response => {
        console.log(response);
        if (response.data) {
          this.checkedItems = [];
          this.GetMainData();
          this.toastr.success('Expense approved successfully!', 'Success');
        }
      }, error => {
        const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_2__.ModalMessageComponent);
        modalRef.componentInstance.type = 'error';
        modalRef.componentInstance.messageError = error?.error?.errors;
      });
    } else if (this.action == 'revise') {
      if (!this.appForm.valid) return;
      formData.append('Notes', this.appForm.get('rejectReason').value);
      this.treasuryService.requestReviseExpense(formData).subscribe(response => {
        if (response.data) {
          this.checkedItems = [];
          this.GetMainData();
          this.toastr.success('Expense revised successfully!', 'Success');
          this.reasonModelRef.dismiss();
        }
      }, error => {
        const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_2__.ModalMessageComponent);
        modalRef.componentInstance.type = 'error';
        modalRef.componentInstance.messageError = error?.error?.errors;
      });
    } else {
      if (this.appForm.valid) {
        formData.append('RejectionReason', this.appForm.get('rejectReason').value);
        this.treasuryService.rejectMultipleExpense(formData).subscribe(response => {
          console.log(response);
          if (response.data) {
            this.checkedItems = [];
            this.GetMainData();
            this.toastr.success('Expense rejected successfully!', 'Success');
            this.reasonModelRef.dismiss();
          }
        }, error => {
          const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_2__.ModalMessageComponent);
          modalRef.componentInstance.type = 'error';
          modalRef.componentInstance.messageError = error?.error?.errors;
        });
      }
    }
  }
  removeSearch() {
    this.searchText = '';
    this.sort = 1;
    this.GetMainData();
  }
  sortByInvoice() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.GetMainData();
  }
  sortByCategory() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.GetMainData();
  }
  sortByIDate() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.GetMainData();
  }
  sortByEmployee() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.GetMainData();
  }
  sortByTotalAmount() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.GetMainData();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.GetMainData();
  }
  pageChange(page) {
    this.pageNo = page;
    this.checkedItems = [];
    this.GetMainData();
  }
  openModalExpense(item) {
    this.checkedItems = [];
    const modalRef = this.modalService.open(_components_expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_0__.ExpenseDetailsComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.expenseDetails = item;
    modalRef.componentInstance.sendtoLoadData.subscribe(result => {
      console.log('result', result);
      if (result) {
        this.GetMainData();
      }
    });
  }
}
PettyCashApprovalComponent.ɵfac = function PettyCashApprovalComponent_Factory(t) {
  return new (t || PettyCashApprovalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_admin_registers_register_setup_service__WEBPACK_IMPORTED_MODULE_3__.RegisterSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_treasury_petty_cash_treasury_services_treasury_service__WEBPACK_IMPORTED_MODULE_4__.TreasuryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_6__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService));
};
PettyCashApprovalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: PettyCashApprovalComponent,
  selectors: [["app-petty-cash-approval"]],
  inputs: {
    registerId: "registerId"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal])],
  decls: 71,
  vars: 39,
  consts: [[1, "card-page"], [1, "head-tit"], [1, "row"], [1, "col-md-6"], [1, "col-md-6", "text-end"], [1, "total"], [1, "pt-2"], [1, "col-md-12"], [1, "d-flex"], ["for", "selectAll", 1, "flex-grow-0", "mt-3", "d-flex", "align-items-center", "gap-1", "font-14"], ["id", "selectAll", "type", "checkbox", 1, "form-check-input", 3, "change"], [1, "card-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], [1, "btn", "btnin", 3, "disabled"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [4, "ngIf"], ["class", "col-md-12 my-3", 4, "ngIf"], ["modalPopup", ""], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "ngModel", "id", "change", "ngModelChange"], [1, "pending", "pending-approval"], [1, "btn", "btn-view", 3, "click"], [1, "not-found"], [1, "row", "justify-content-between", "align-items-center"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [1, "col-md-12", "my-3"], [1, "btns-group", "m-0"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "modal-body"], [1, "fw-600", "my-3"], [3, "formGroup"], ["class", "mb-3", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-cancel", 3, "click"], [1, "mb-3"], [1, "mb-1", "font-14", "fw-500"], ["placeholder", "Reason", "formControlName", "rejectReason", 1, "form-control"], ["class", "text-danger font-14", 4, "ngIf"], [1, "text-danger", "font-14"]],
  template: function PettyCashApprovalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Last Petty Cash Expenses List ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 2)(11, "div", 7)(12, "div", 8)(13, "label", 9)(14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PettyCashApprovalComponent_Template_input_change_14_listener($event) {
        return ctx.handleCheckAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, " Select All ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "table", 13)(19, "thead")(20, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "th", 14)(23, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_Template_button_click_23_listener() {
        return ctx.sortByInvoice();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " Invoice No ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "i", 16)(26, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "th", 14)(28, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Invoice Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "th", 14)(31, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_Template_button_click_31_listener() {
        return ctx.sortByCategory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " Category ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "i", 16)(34, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "th", 14)(36, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, " Cost Center ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "th", 14)(39, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, " Approver Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "th", 14)(42, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_Template_button_click_42_listener() {
        return ctx.sortByIDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, " Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "i", 16)(45, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "th", 14)(47, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_Template_button_click_47_listener() {
        return ctx.sortByEmployee();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, " Employee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "i", 16)(50, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "th", 14)(52, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_Template_button_click_52_listener() {
        return ctx.sortByTotalAmount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, " Total Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "i", 16)(55, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "th", 14)(57, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PettyCashApprovalComponent_Template_button_click_57_listener() {
        return ctx.sortByStatus();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, " Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](59, "i", 16)(60, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "th", 14)(62, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, " Action ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, PettyCashApprovalComponent_tr_65_Template, 28, 25, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, PettyCashApprovalComponent_div_66_Template, 2, 0, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, PettyCashApprovalComponent_ng_container_67_Template, 13, 9, "ng-container", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, PettyCashApprovalComponent_div_68_Template, 8, 0, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](69, PettyCashApprovalComponent_ng_template_69_Template, 10, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Expenses Total No. ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.sort == 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.expenses);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.expenses == null ? null : ctx.expenses.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.checkedItems == null ? null : ctx.checkedItems.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 1rem !important;\n  height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9wZXR0eS1jYXNoLWFwcHJvdmFsL3BldHR5LWNhc2gtYXBwcm92YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRhYmxlIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgd2lkdGg6IDFyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 95909:
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash-approval/petty-cash-approval.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PettyCashApprovalModule": () => (/* binding */ PettyCashApprovalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _petty_cash_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./petty-cash-approval-routing.module */ 66283);
/* harmony import */ var _petty_cash_approval_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./petty-cash-approval.component */ 9700);
/* harmony import */ var _components_expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/expense-details/expense-details.component */ 41539);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);






class PettyCashApprovalModule {}
PettyCashApprovalModule.ɵfac = function PettyCashApprovalModule_Factory(t) {
  return new (t || PettyCashApprovalModule)();
};
PettyCashApprovalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: PettyCashApprovalModule
});
PettyCashApprovalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _petty_cash_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__.PettyCashApprovalRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PettyCashApprovalModule, {
    declarations: [_petty_cash_approval_component__WEBPACK_IMPORTED_MODULE_1__.PettyCashApprovalComponent, _components_expense_details_expense_details_component__WEBPACK_IMPORTED_MODULE_2__.ExpenseDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _petty_cash_approval_routing_module__WEBPACK_IMPORTED_MODULE_0__.PettyCashApprovalRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 32216:
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/modal-image/modal-image.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalImageComponent": () => (/* binding */ ModalImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function ModalImageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ModalImageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ModalImageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9)(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "click to open pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class ModalImageComponent {
  constructor(activeModal, modalService, router) {
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.router = router;
  }
  ngOnInit() {
    if (this.expenseDetails) {
      // console.log(this.expenseDetails);
      if (this.expenseDetails?.files[0]?.attachmentPath.slice(-3) == 'pdf') {
        this.isPdf = true;
        this.imagePath = this.expenseDetails?.files[0]?.attachmentPath;
      } else {
        this.imagePath = this.expenseDetails?.files[0]?.attachmentPath;
        // console.log(this.imagePath);
      }
    }

    if (this.imageUploadedView) {
      // console.log(this.imageUploadedView);
      // console.log(this.imageUploadedView.slice(-3));
      if (this.imageUploadedView.slice(-3) == 'pdf') {
        this.isPdf = true;
        this.imagePath = this.imageUploadedView;
      } else {
        this.imagePath = this.imageUploadedView;
        // console.log(this.imagePath);
      }
    }
  }
}

ModalImageComponent.ɵfac = function ModalImageComponent_Factory(t) {
  return new (t || ModalImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ModalImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModalImageComponent,
  selectors: [["app-modal-image"]],
  inputs: {
    expenseDetails: "expenseDetails",
    imageUploadedView: "imageUploadedView"
  },
  decls: 7,
  vars: 3,
  consts: [[1, "modal-body"], ["class", "imagepath", 4, "ngIf"], ["class", "imagepath-no", 4, "ngIf"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "imagepath"], ["alt", "", 3, "src"], [1, "imagepath-no"], [1, "card-pdf"], ["src", "assets/images/pdf.png", "alt", ""], ["target", "_blank", 3, "href"]],
  template: function ModalImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalImageComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalImageComponent_div_2_Template, 3, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalImageComponent_div_3_Template, 6, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalImageComponent_Template_button_click_5_listener() {
        return ctx.activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagePath);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imagePath);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPdf == true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".imagepath[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.imagepath-no[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n\n.btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.btns-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  color: #dc3545;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-weight: 600;\n}\n\n.card-pdf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.card-pdf[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 600;\n  display: block;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9wZXR0eS1jYXNoL21vZGFsLWltYWdlL21vZGFsLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtBQUFKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBR0U7RUFDRSxZQUFBO0FBQUo7QUFFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlcGF0aCB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5pbWFnZXBhdGgtbm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG4uYnRucy1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTJweCAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLmNhcmQtcGRmIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_cashier_petty-cash-approval_petty-cash-approval_module_ts.js.map