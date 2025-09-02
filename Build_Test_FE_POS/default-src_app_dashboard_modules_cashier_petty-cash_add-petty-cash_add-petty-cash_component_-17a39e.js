"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["default-src_app_dashboard_modules_cashier_petty-cash_add-petty-cash_add-petty-cash_component_-17a39e"],{

/***/ 71941:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/add-petty-cash/add-petty-cash.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPettyCashComponent": () => (/* binding */ AddPettyCashComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _modal_image_modal_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-image/modal-image.component */ 32216);
/* harmony import */ var _expense_confirm_expense_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expense-confirm/expense-confirm.component */ 31772);
/* harmony import */ var _services_petty_cash_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/petty-cash.service */ 72657);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/directive/numbers-only.directive */ 82757);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/directive/drag-and-drop.directive */ 96603);














const _c0 = ["fileUpload"];
function AddPettyCashComponent_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.expenseId ? " View Expense " : "Create Expense ", " ");
  }
}
function AddPettyCashComponent_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Edit Expense ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddPettyCashComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "p")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 1, ctx_r2.expenseDetails == null ? null : ctx_r2.expenseDetails.createdAt, " d MMM y h:mm a"), " ");
  }
}
function AddPettyCashComponent_div_10_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 27);
  }
}
function AddPettyCashComponent_div_10_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 28);
  }
}
function AddPettyCashComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddPettyCashComponent_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.editExpenseInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddPettyCashComponent_div_10_img_2_Template, 1, 0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddPettyCashComponent_div_10_img_3_Template, 1, 0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isShowExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isShowExpense);
  }
}
function AddPettyCashComponent_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddPettyCashComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddPettyCashComponent_div_18_span_1_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.formValid["ExpenseCategoryId"].errors["required"]);
  }
}
function AddPettyCashComponent_div_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddPettyCashComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddPettyCashComponent_div_25_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.formValid["ExpenseAmount"].errors["required"]);
  }
}
function AddPettyCashComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Amount must be greater than 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddPettyCashComponent_div_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddPettyCashComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddPettyCashComponent_div_32_span_1_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.formValid["InvoiceNo"].errors["required"]);
  }
}
function AddPettyCashComponent_div_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddPettyCashComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddPettyCashComponent_div_38_span_1_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.formValid["ExpenseTax"].errors["required"]);
  }
}
function AddPettyCashComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Tax must be greater than 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddPettyCashComponent_div_46_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r28.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AddPettyCashComponent_div_46_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddPettyCashComponent_div_46_div_15_div_2_Template, 3, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r26.isViewFile);
  }
}
function AddPettyCashComponent_div_46_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddPettyCashComponent_div_46_div_17_Template_p_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.openMdalImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddPettyCashComponent_div_46_div_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.removeImageName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r27.fileName);
  }
}
function AddPettyCashComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 11)(2, "div", 9)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Attachment * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("files", function AddPettyCashComponent_div_46_Template_div_files_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r32.filesDropped($event));
    })("enter", function AddPettyCashComponent_div_46_Template_div_enter_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.enter = !ctx_r34.enter);
    })("leave", function AddPettyCashComponent_div_46_Template_div_leave_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.enter = !ctx_r35.enter);
    })("click", function AddPettyCashComponent_div_46_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r25.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Drag & drop files");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Supported formates: JPEG, PNG, PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddPettyCashComponent_div_46_Template_input_change_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.onSelectFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AddPettyCashComponent_div_46_div_15_Template, 3, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AddPettyCashComponent_div_46_div_17_Template, 6, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.fileName);
  }
}
function AddPettyCashComponent_div_47_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r38.expenseDetails == null ? null : ctx_r38.expenseDetails.files[0] == null ? null : ctx_r38.expenseDetails.files[0].attachmentPath, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AddPettyCashComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 44)(2, "div", 9)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Attachment * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AddPettyCashComponent_div_47_div_6_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 45)(8, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddPettyCashComponent_div_47_Template_p_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.openMdalImageView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddPettyCashComponent_div_47_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r41.removeImg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.isViewFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Receipts - ", ctx_r11.formGroup.get("ExpenseRecordId").value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r11.isShowExpense && ctx_r11.expenseId);
  }
}
function AddPettyCashComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r12.errorMsgUplaod, " ");
  }
}
function AddPettyCashComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddPettyCashComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44)(1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r14.progress, " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r14.progress, "%");
  }
}
function AddPettyCashComponent_button_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r15.isShowExpense && ctx_r15.expenseId);
  }
}
function AddPettyCashComponent_button_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class AddPettyCashComponent {
  constructor(pettyCashService, route, fb, modalService, activeModal) {
    this.pettyCashService = pettyCashService;
    this.route = route;
    this.fb = fb;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this.submitted = false;
    this.isShowToUplaod = true;
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.myFiles = [];
    this.urls = [];
    this.progress = 0;
    this.isShowExpense = false;
  }
  ngOnInit() {
    this.getForm();
    this.getExpenseCategory();
    if (this.expenseId) {
      console.log(this.expenseId);
      this.isShowToUplaod = false;
      this.GetExpenseDetails();
    }
  }
  getForm() {
    this.formGroup = this.fb.group({
      ExpenseRecordId: 0,
      InvoiceNo: [''],
      ExpenseCategoryId: null,
      ExpenseAmount: '',
      ExpenseTax: [''],
      ExpenseNotes: [''],
      Status: 2001,
      Attachments: null
    });
  }
  get formValid() {
    return this.formGroup.controls;
  }
  onSubmit() {
    // console.log(this.formGroup.value);
    if (this.formGroup.get('ExpenseRecordId')?.value == 0) {
      this.AddExpense();
    } else {
      this.EditExpense();
    }
  }
  AddExpense() {
    this.isLoading = true;
    this.submitted = true;
    if (this.formGroup.invalid || this.formGroup.get('ExpenseAmount')?.value <= 0 || this.formGroup.get('ExpenseTax')?.value <= 0 || this.formGroup.get('Attachments').value == null) {
      console.log('invalid amount');
      this.isLoading = false;
      return window.scroll(0, 0);
    } else {
      const formData = new FormData();
      formData.append('InvoiceNo', this.formGroup.get('InvoiceNo')?.value);
      formData.append('ExpenseCategoryId', this.formGroup.get('ExpenseCategoryId')?.value);
      formData.append('ExpenseAmount', this.formGroup.get('ExpenseAmount')?.value);
      formData.append('ExpenseTax', this.formGroup.get('ExpenseTax')?.value);
      formData.append('ExpenseNotes', this.formGroup.get('ExpenseNotes')?.value);
      formData.append('Attachments', this.formGroup.get('Attachments')?.value);
      // console.log(this.formGroup.value);
      // console.log(formData);
      // return this.propertyService
      // .addProperty(formData)
      // .subscribe((event: any) => {
      return this.pettyCashService.AddExpense(formData).subscribe(event => {
        // console.log(event);
        // console.log(event.body);
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.UploadProgress) {
          this.progress = Math.round(event.loaded / event.total * 100);
        } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.Response) {
          setTimeout(() => {
            this.progress = 0;
          }, 1500);
          // console.log(event.body.isSuccess);
          // console.log(event.body['isSuccess']);
          if (event.body.isSuccess == true) {
            this.isLoading = false;
            const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
            modalRef.componentInstance.type = 'success';
            modalRef.componentInstance.message = 'Your expense is added successfully';
            modalRef.componentInstance.routeName = '/petty-cash';
            modalRef.componentInstance.name = 'add';
            setTimeout(() => {
              this.sendtoLoadData.emit();
            }, 2000);
            // console.log(response);
          } else {
            // console.log('error', response);
            // console.log('error', response.Errors);
            this.isLoading = false;
            const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
            modalRef.componentInstance.type = 'error';
            modalRef.componentInstance.messageError = event.body.errors || event.body.Errors;
            this.errorMessage = event.body.Errors || event.body.errors;
          }
        }
      }
      // (error: any) => {
      //   this.isLoading = false;
      //   console.log('error', error);
      //   const modalRef = this.modalService.open(ModalMessageComponent);
      //   modalRef.componentInstance.type = 'error';
      //   modalRef.componentInstance.messageError =
      //     error.error.errors || error.Errors;
      //   console.log(error), (this.errorMessage = error.statusText);
      // }
      );
    }
  }

  EditExpense() {
    this.isLoading = true;
    if (this.formGroup.invalid || this.formGroup.get('ExpenseAmount')?.value <= 0 || this.formGroup.get('ExpenseTax')?.value <= 0
    // this.formGroup.get('Attachments').value == null
    ) {
      console.log('invalid amount');
      this.isLoading = false;
      return window.scroll(0, 0);
    } else {
      const formData = new FormData();
      formData.append('ExpenseRecordId', this.formGroup.get('ExpenseRecordId')?.value);
      formData.append('InvoiceNo', this.formGroup.get('InvoiceNo')?.value);
      formData.append('ExpenseCategoryId', this.formGroup.get('ExpenseCategoryId')?.value);
      formData.append('ExpenseAmount', this.formGroup.get('ExpenseAmount')?.value);
      formData.append('ExpenseTax', this.formGroup.get('ExpenseTax')?.value);
      formData.append('ExpenseNotes', this.formGroup.get('ExpenseNotes')?.value);
      formData.append('Attachments', this.formGroup.get('Attachments')?.value);
      // console.log(this.formGroup.value);
      // console.log(formData);
      return this.pettyCashService.EditExpense(formData).subscribe(event => {
        // console.log(event);
        // console.log(event);
        // console.log(event.body);
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.UploadProgress) {
          this.progress = Math.round(event.loaded / event.total * 100);
        } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.Response) {
          setTimeout(() => {
            this.progress = 0;
          }, 1500);
          // console.log(event.body.isSuccess);
          if (event.body.isSuccess == true) {
            this.isLoading = false;
            const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
            modalRef.componentInstance.type = 'success';
            modalRef.componentInstance.message = 'Your expense is updated successfully';
            modalRef.componentInstance.routeName = '/petty-cash';
            modalRef.componentInstance.name = 'add';
            console.log('semdToConfirm');
            setTimeout(() => {
              this.sendtoLoadData.emit();
            }, 2000);
            // modalRef.componentInstance.semdToConfirm.subscribe((result: any) => {
            //   console.log('semdToConfirm', result);
            //   this.sendtoLoadData.emit();
            //   this.modalService.dismissAll();
            // });
            // console.log(response);
          } else {
            // console.log('error', event);
            this.isLoading = false;
            const modalRef = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
            modalRef.componentInstance.type = 'error';
            modalRef.componentInstance.messageError = event?.error?.errors;
            this.errorMessage = event.Errors || event.errors;
          }
        }
      }
      // (error: any) => {
      //   this.isLoading = false;
      //   // console.log('error', error);
      //   const modalRef = this.modalService.open(ModalMessageComponent);
      //   modalRef.componentInstance.type = 'error';
      //   modalRef.componentInstance.messageError = error.error.errors;
      //   console.log(error), (this.errorMessage = error.statusText);
      // }
      );
    }
  }

  GetExpenseDetails() {
    this.pettyCashService.GetExpenseDetails(this.expenseId).subscribe(response => {
      if (response) {
        this.expenseDetails = response.data;
        console.log(this.expenseDetails);
        // this.formGroup.patchValue(expenseDetails);
        this.formGroup.get('ExpenseRecordId').patchValue(this.expenseDetails.expenseRecordId);
        this.formGroup.get('ExpenseAmount').patchValue(this.expenseDetails.expenseAmount);
        this.formGroup.get('InvoiceNo').patchValue(this.expenseDetails.invoiceNo);
        this.formGroup.get('ExpenseCategoryId').patchValue(this.expenseDetails.expenseCategoryId);
        this.formGroup.get('ExpenseTax').patchValue(this.expenseDetails.expenseTax);
        this.formGroup.get('ExpenseNotes').patchValue(this.expenseDetails.expenseNotes);
        this.formGroup.get('Status').patchValue(this.expenseDetails.status);
        this.formGroup.get('Attachments').patchValue(this.expenseDetails.Attachments);
        // this.formGroup.get('Mobile').patchValue(expense.mobile);
        this.formGroup.controls['ExpenseCategoryId'].disable();
      }
    });
  }
  getExpenseCategory() {
    this.pettyCashService.getLookupsById(12).subscribe(response => {
      // this.expenseCategory = response.data;
      this.expenseCategory = response.data.map(x => ({
        id: x.id,
        name: x.name[0].lookupName
      }));
    }, error => {
      this.errorMessage = error.message;
    });
  }
  filesDropped(files) {
    this.enter = false;
    if (files[0].file.type == 'image/jpeg' || files[0].file.type == 'image/jpg' || files[0].file.type == 'image/png' || files[0].file.type == 'application/pdf') {
      // console.log(files);
      // console.log(files[0]);
      // console.log(files[0].file);
      // console.log(files[0].file.name);
      // console.log(files[0].file.type);
      // console.log(files[0].url);
      if (files && files[0]) {
        var reader = new FileReader();
        reader.onload = event => {
          this.filePath = event.target.result;
        };
        reader.readAsDataURL(files[0].file);
      }
      this.fileName = files[0].file.name;
      // console.log(this.filePath);
      // this.filePath = files[0].url;
      this.errorMsgUplaod = '';
      this.formGroup.get('Attachments')?.patchValue(files[0].file);
    } else {
      this.errorMsgUplaod = 'This file not support , Supported formates: JPEG, JPG, PNG, PDF';
    }
    // files.forEach((file) => {
    // console.log(file);
    // console.log(file.file);
    // console.log(file.file.name);
    // console.log(file.name);
    // console.log(file.url);
    // console.log(this.myFiles);
    // files.forEach((file) => {
    //   if (this.myFiles?.length >= 1) {
    //     this.myFiles = [...this.myFiles, file.file];
    //     this.urls = [...this.urls, file.url];
    //   } else {
    //     this.myFiles = [file.file];
    //     this.urls = [file.url];
    //   }
    // });
    // });
    // console.log(this.urls);
    // console.log(this.myFiles);
    // console.log(this.myFiles[0]);
  }

  removeImageName() {
    this.fileName = '';
    this.filePath = '';
    this.errorMsgUplaod = '';
    this.InputVar.nativeElement.value = "";
    this.formGroup.get('Attachments')?.patchValue(null);
  }
  onSelectFile(event) {
    console.log(event);
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = event => {
        this.filePath = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    this.fileName = event.target.files[0].name;
    this.errorMsgUplaod = '';
    console.log(event.target.files[0]);
    this.formGroup.get('Attachments')?.patchValue(event.target.files[0]);
  }
  removeImage(i) {
    this.urls.splice(i, 1);
    this.myFiles.splice(i, 1);
  }
  removeImg() {
    this.errorMsgUplaod = '';
    this.isShowToUplaod = !this.isShowToUplaod;
  }
  openMdalImage() {
    const modalRef = this.modalService.open(_modal_image_modal_image_component__WEBPACK_IMPORTED_MODULE_1__.ModalImageComponent);
    modalRef.componentInstance.imageUploadedView = this.filePath;
  }
  openMdalImageView() {
    const modalRef = this.modalService.open(_modal_image_modal_image_component__WEBPACK_IMPORTED_MODULE_1__.ModalImageComponent);
    modalRef.componentInstance.imageUploadedView = this.expenseDetails?.files[0]?.attachmentPath;
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  editExpenseInfo() {
    // this.isShowBranchInfo = this.isShowBranchInfo == false ? true : false;
    if (this.isShowExpense == false) {
      this.isShowExpense = true;
      this.formGroup.controls['ExpenseCategoryId'].enable();
    } else if (this.isShowExpense == true) {
      this.formGroup.controls['ExpenseCategoryId'].disable();
      const modalRef = this.modalService.open(_expense_confirm_expense_confirm_component__WEBPACK_IMPORTED_MODULE_2__.ExpenseConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowExpense = false;
        this.modalService.dismissAll();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowExpense = false;
        // this.modalService.dismissAll();
      });
    }
  }
}

AddPettyCashComponent.ɵfac = function AddPettyCashComponent_Factory(t) {
  return new (t || AddPettyCashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_petty_cash_service__WEBPACK_IMPORTED_MODULE_3__.PettyCashService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbActiveModal));
};
AddPettyCashComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddPettyCashComponent,
  selectors: [["app-add-petty-cash"]],
  viewQuery: function AddPettyCashComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.InputVar = _t.first);
    }
  },
  inputs: {
    expenseId: "expenseId"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  decls: 59,
  vars: 23,
  consts: [[1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "modal-head"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "card-form", "position-relative"], ["class", "edit-btn float-end", 4, "ngIf"], [1, "col-md-6", "col-sm-12"], [1, "form-group", "mb-3"], ["placeholder", "Select category", "bindLabel", "name", "bindValue", "id", "formControlName", "ExpenseCategoryId", "name", "ExpenseCategoryId", "required", "", 3, "items"], [1, "col-md-6"], [1, "form-group"], ["name", "ExpenseAmount", "type", "number", "placeholder", "", "formControlName", "ExpenseAmount", "name", "ExpenseAmount", "required", "", 1, "form-control", 3, "readOnly"], ["name", "name", "type", "text", "placeholder", "", "formControlName", "InvoiceNo", "name", "InvoiceNo", "required", "", "numbersOnly", "", 1, "form-control", 3, "readOnly"], ["name", "name", "type", "number", "placeholder", "", "formControlName", "ExpenseTax", "name", "ExpenseTax", "required", "", 1, "form-control", 3, "readOnly"], ["rows", "5", "formControlName", "ExpenseNotes", "name", "ExpenseNotes", "maxlength", "200", 1, "form-control", 3, "readOnly"], ["class", "row", 4, "ngIf"], ["class", "col-md-8", 4, "ngIf"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", "class", "btn btn-save", 3, "disabled", 4, "ngIf"], ["type", "button", "class", "btn btn-save btn-load", "disabled", "", 4, "ngIf"], [1, "edit-btn", "float-end"], ["type", "button", 1, "btn", 3, "click"], ["src", "assets/images/edit.png", "class", "save-img", "alt", "", 4, "ngIf"], ["src", "assets/images/edit5.png", "alt", "", 4, "ngIf"], ["src", "assets/images/edit.png", "alt", "", 1, "save-img"], ["src", "assets/images/edit5.png", "alt", ""], ["class", "error", 4, "ngIf"], [1, "error"], ["class", "error pb-0", 4, "ngIf"], [1, "error", "pb-0"], [1, "error", "pt-1"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", "my-3", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "id", "uploadFile", "hidden", "", 1, "form-control", 3, "change"], ["fileUpload", ""], ["class", "col-md-6", 4, "ngIf"], ["class", "card-upload", 4, "ngIf"], [1, "card-upload"], [1, "card-img"], [3, "src"], [1, "col-md-8"], [1, "uploadedfile"], [3, "click"], ["src", "assets/images/trash.png", "alt", ""], ["class", "fileView", 4, "ngIf"], ["type", "button", 1, "btn", 3, "disabled", "click"], [1, "fileView"], ["alt", "", 3, "src"], [1, "mb-1", "mt-3"], ["role", "progressbar", "aria-label", "Example 5px high", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", "5px"], [1, "progress-bar"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], ["type", "button", "disabled", "", 1, "btn", "btn-save", "btn-load"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function AddPettyCashComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AddPettyCashComponent_h3_5_Template, 2, 1, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AddPettyCashComponent_h3_6_Template, 2, 0, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AddPettyCashComponent_div_7_Template, 6, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AddPettyCashComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AddPettyCashComponent_div_10_Template, 4, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Category *");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AddPettyCashComponent_div_18_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 11)(21, "div", 12)(22, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Amount * ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AddPettyCashComponent_div_25_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AddPettyCashComponent_div_26_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 11)(28, "div", 12)(29, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Invoice Number *");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, AddPettyCashComponent_div_32_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 11)(34, "div", 12)(35, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Tax *");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, AddPettyCashComponent_div_38_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, AddPettyCashComponent_div_39_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 2)(42, "div", 9)(43, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " Notes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "textarea", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, AddPettyCashComponent_div_46_Template, 18, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, AddPettyCashComponent_div_47_Template, 12, 3, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, AddPettyCashComponent_div_48_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, AddPettyCashComponent_div_49_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, AddPettyCashComponent_div_51_Template, 5, 3, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 1)(53, "div", 2)(54, "div", 19)(55, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddPettyCashComponent_Template_button_click_55_listener() {
        return ctx.activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, AddPettyCashComponent_button_57_Template, 2, 1, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, AddPettyCashComponent_button_58_Template, 2, 0, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isShowExpense);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShowExpense);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.expenseDetails == null ? null : ctx.expenseDetails.createdAt);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.expenseId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.expenseCategory);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["ExpenseCategoryId"].invalid && (ctx.formValid["ExpenseCategoryId"].dirty || ctx.formValid["ExpenseCategoryId"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readOnly", !ctx.isShowExpense && ctx.expenseId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["ExpenseAmount"].invalid || ctx.formValid["ExpenseAmount"].invalid && (ctx.formValid["ExpenseAmount"].dirty || ctx.formValid["ExpenseAmount"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formGroup.get("ExpenseAmount").value <= 0 && ctx.formGroup.get("ExpenseAmount").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readOnly", !ctx.isShowExpense && ctx.expenseId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["InvoiceNo"].invalid || ctx.formValid["InvoiceNo"].invalid && (ctx.formValid["InvoiceNo"].dirty || ctx.formValid["InvoiceNo"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readOnly", !ctx.isShowExpense && ctx.expenseId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["ExpenseTax"].invalid || ctx.formValid["ExpenseTax"].invalid && (ctx.formValid["ExpenseTax"].dirty || ctx.formValid["ExpenseTax"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formGroup.get("ExpenseTax").value <= 0 && ctx.formGroup.get("ExpenseTax").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readOnly", !ctx.isShowExpense && ctx.expenseId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShowToUplaod);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isShowToUplaod);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMsgUplaod);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.formGroup.get("Attachments").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.progress > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__.NumberDirective, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_5__.DragAndDropDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.card-page[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #c4cdd5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #1b212d;\n  padding: 5px 0 15px;\n  margin: 0px;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 80px !important;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.btn-upload[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  margin: 0px;\n}\n\n.overlay-bi[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  margin: 0;\n  z-index: 5;\n  position: relative;\n}\n.card-form[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #fff3f3;\n  border-radius: 50%;\n  margin: 0px 10px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.uplod[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #676767;\n}\n\n.save-img[_ngcontent-%COMP%] {\n  width: 22px !important;\n}\n\n.fileView[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.btn[_ngcontent-%COMP%]:disabled, .btn.disabled[_ngcontent-%COMP%] {\n  background: #f1f3f3 !important;\n  color: #9b9b9b !important;\n  border: 1px solid #f1f3f3;\n  cursor: initial;\n}\n\n.card-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9wZXR0eS1jYXNoL2FkZC1wZXR0eS1jYXNoL2FkZC1wZXR0eS1jYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSUY7QUFIRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFLSjtBQUhFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtKO0FBSkk7RUFDRSxjQUFBO0FBTU47O0FBRkE7RUFDRSx1QkFBQTtBQUtGOztBQUZBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBS0Y7QUFKRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQU1KO0FBSkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTUo7QUFKRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFLSjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBTUY7QUFMRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUhBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTUY7QUFKRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFNSjtBQUxJO0VBQ0UsV0FBQTtBQU9OO0FBSkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUhBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0Usc0JBQUE7QUFPRjs7QUFKRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUhBOztFQUVFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNFLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSx5QkFBQTtBQU9GIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNhcmQtZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjNGNkZDU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jYXJkLXBhZ2Uge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLm1vZGFsLWhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0Y2RkNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgcGFkZGluZzogNXB4IDAgMTVweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzFiMjEyZDtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgIH1cbiAgfVxufVxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtdXBsb2FkIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM5MzlhYTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIGg1IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzBmMGYwZjtcbiAgfVxuICBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzY3Njc2NztcbiAgfVxufVxuLmJ0bi11cGxvYWQge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTJweCAzNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uY2FyZC1pbWcge1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuLm92ZXJsYXktYmkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTkgMTk5IDE5OSAvIDIxJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uY2FyZC1mb3JtIC5lZGl0LWJ0biB7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbn1cblxuLnVwbG9hZGVkZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMWFmMjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmZmYzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnVwbG9kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi5zYXZlLWltZyB7XG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG59XG4uZmlsZVZpZXcge1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbn1cblxuLmJ0bjpkaXNhYmxlZCxcbi5idG4uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjZjFmM2YzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOWI5YjliICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYzZjM7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLmNhcmQtZm9ybSAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 31772:
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/expense-confirm/expense-confirm.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseConfirmComponent": () => (/* binding */ ExpenseConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




class ExpenseConfirmComponent {
  constructor(activeModal, modalService, router) {
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.router = router;
    this.semdToConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.sendToClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  confirm() {
    this.semdToConfirm.emit();
  }
  close() {
    this.sendToClose.emit();
  }
}
ExpenseConfirmComponent.ɵfac = function ExpenseConfirmComponent_Factory(t) {
  return new (t || ExpenseConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ExpenseConfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ExpenseConfirmComponent,
  selectors: [["app-expense-confirm"]],
  inputs: {
    name: "name"
  },
  outputs: {
    semdToConfirm: "semdToConfirm",
    sendToClose: "sendToClose"
  },
  decls: 9,
  vars: 0,
  consts: [[1, "modal-body"], [1, "message"], [1, "modal-footer", "text-center"], ["type", "button", 1, "btn", 3, "click"]],
  template: function ExpenseConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Are you sure you want to save changes? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseConfirmComponent_Template_button_click_5_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseConfirmComponent_Template_button_click_7_listener() {
        ctx.close();
        return ctx.activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: #75b878;\n  margin-bottom: 30px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  width: 120px;\n  border-radius: 30px;\n  display: block;\n  color: #000;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9wZXR0eS1jYXNoL2V4cGVuc2UtY29uZmlybS9leHBlbnNlLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBRUY7QUFERTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4O1xuICBpIHtcbiAgICBmb250LXNpemU6IDkwcHg7XG4gICAgY29sb3I6ICM3NWI4Nzg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuLm1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAuYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

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

/***/ }),

/***/ 86010:
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/requests/add-request/add-request.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRequestComponent": () => (/* binding */ AddRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_petty_cash_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/petty-cash.service */ 72657);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/table-advanced/table-advanced.component */ 49973);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/table-advanced/table-advanced.directives */ 85746);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/validation-error/validation-error.component */ 67711);
/* harmony import */ var _pending_expenses_pending_expenses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending-expenses/pending-expenses.component */ 68512);














function AddRequestComponent_div_0_div_8_ng_container_35_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input does not allows greater than 150 charcters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddRequestComponent_div_0_div_8_ng_container_35_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddRequestComponent_div_0_div_8_ng_container_35_ng_container_1_span_1_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formGroup == null ? null : (tmp_0_0 = ctx_r7.formGroup.get("note")) == null ? null : tmp_0_0.errors["maxlength"]);
  }
}
function AddRequestComponent_div_0_div_8_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddRequestComponent_div_0_div_8_ng_container_35_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r3.formGroup == null ? null : (tmp_0_0 = ctx_r3.formGroup.get("note")) == null ? null : tmp_0_0.invalid) && (ctx_r3.formGroup == null ? null : (tmp_0_0 = ctx_r3.formGroup.get("note")) == null ? null : tmp_0_0.touched) || (ctx_r3.formGroup == null ? null : (tmp_0_0 = ctx_r3.formGroup.get("note")) == null ? null : tmp_0_0.dirty));
  }
}
function AddRequestComponent_div_0_div_8_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.errorMsg, " ");
  }
}
function AddRequestComponent_div_0_div_8_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddRequestComponent_div_0_div_8_button_49_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.AddPettyCashRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Submit Replenishment Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddRequestComponent_div_0_div_8_button_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    required: "Replinshment amount must be greater than zero"
  };
};
function AddRequestComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Branch Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Register No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 6)(14, "div", 7)(15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Register Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 6)(20, "div", 7)(21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Register Limit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 8)(27, "app-pending-expenses", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("eventData", function AddRequestComponent_div_0_div_8_Template_app_pending_expenses_eventData_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.getEventData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "form", 10)(29, "div", 11)(30, "div", 12)(31, "div", 7)(32, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, AddRequestComponent_div_0_div_8_ng_container_35_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 11)(37, "div", 12)(38, "div", 7)(39, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Replenishment Amount (JOD) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "input", 15)(42, "validation-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, AddRequestComponent_div_0_div_8_div_44_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 11)(46, "div", 18)(47, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddRequestComponent_div_0_div_8_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, AddRequestComponent_div_0_div_8_button_49_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, AddRequestComponent_div_0_div_8_button_50_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.Registersdetails.branch.branchName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.Registersdetails.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.Registersdetails.registersName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](25, 11, ctx_r2.Registersdetails.pettyCashLimit, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.formGroup == null ? null : (tmp_5_0 = ctx_r2.formGroup.get("note")) == null ? null : tmp_5_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx_r2.formGroup.get("requestedAmountTemp"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
  }
}
function AddRequestComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "New Replenishment Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "You are about to request a new petty cash replenishment for the following register");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AddRequestComponent_div_0_div_8_Template, 51, 15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.Registersdetails);
  }
}
function AddRequestComponent_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 1, ctx_r14.details.createdAt, " d/M/y "), "");
  }
}
function AddRequestComponent_div_1_div_6_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44)(1, "div", 7)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Rejected Reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 45)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r16.details.rejectionReason, " ");
  }
}
function AddRequestComponent_div_1_div_6_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r23 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r23 == null ? null : row_r23.expenseTotalAmount, "2.3-3"), " JOD ");
  }
}
function AddRequestComponent_div_1_div_6_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r24 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r24 == null ? null : row_r24.invoiceDate, "mediumDate"), " ");
  }
}
function AddRequestComponent_div_1_div_6_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r25 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r25 == null ? null : row_r25.createdAt, "mediumDate"), " ");
  }
}
function AddRequestComponent_div_1_div_6_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r26 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", row_r26.statusObj.lookupBGColor)("color", row_r26.statusObj.lookupTextColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r26.statusObj.description, " ");
  }
}
function AddRequestComponent_div_1_div_6_p_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r21.responseMessage);
  }
}
function AddRequestComponent_div_1_div_6_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddRequestComponent_div_1_div_6_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.handleRecevingRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Confirm Receiving Replenishment Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddRequestComponent_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Branch Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 29)(8, "div", 7)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Register No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 6)(14, "div", 7)(15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Register Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 29)(20, "div", 7)(21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Requested Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 29)(27, "div", 7)(28, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 32)(33, "div", 7)(34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 33)(37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, AddRequestComponent_div_1_div_6_div_39_Template, 7, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 35)(41, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " List of Expenses Submitted Within This Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "table-advanced", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scrollUpdate", function AddRequestComponent_div_1_div_6_Template_table_advanced_scrollUpdate_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.onsScrollUpdate($event));
    })("pageUpdated", function AddRequestComponent_div_1_div_6_Template_table_advanced_pageUpdated_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, AddRequestComponent_div_1_div_6_ng_template_44_Template, 2, 4, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, AddRequestComponent_div_1_div_6_ng_template_45_Template, 2, 4, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, AddRequestComponent_div_1_div_6_ng_template_46_Template, 2, 4, "ng-template", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, AddRequestComponent_div_1_div_6_ng_template_47_Template, 2, 5, "ng-template", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, AddRequestComponent_div_1_div_6_p_49_Template, 2, 1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, AddRequestComponent_div_1_div_6_button_51_Template, 2, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddRequestComponent_div_1_div_6_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r15.details == null ? null : ctx_r15.details.register == null ? null : ctx_r15.details.register.branch.branchName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r15.details == null ? null : ctx_r15.details.register == null ? null : ctx_r15.details.register.registerId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r15.details == null ? null : ctx_r15.details.register == null ? null : ctx_r15.details.register.registersName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](25, 20, ctx_r15.details == null ? null : ctx_r15.details.requestedAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx_r15.details.statusObj.lookupBGColor)("color", ctx_r15.details.statusObj.lookupTextColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r15.details.statusObj.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r15.details.requestNote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.details.statusObj.description == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx_r15.tableConfig)("columns", ctx_r15.tableColumns)("data", ctx_r15.approvedRequestList)("loading", ctx_r15.loading)("page", ctx_r15.pageNo)("total", ctx_r15.total)("limit", ctx_r15.limit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.responseMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r15.details == null ? null : ctx_r15.details.statusObj == null ? null : ctx_r15.details.statusObj.translations[0] == null ? null : ctx_r15.details.statusObj.translations[0].lookupName.toLowerCase()) == "approved" && !(ctx_r15.details == null ? null : ctx_r15.details.confirmed) && (ctx_r15.details == null ? null : ctx_r15.details.provided));
  }
}
function AddRequestComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 28)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Request Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AddRequestComponent_div_1_p_4_Template, 5, 4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AddRequestComponent_div_1_div_6_Template, 54, 23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.details);
  }
}
class AddRequestComponent {
  constructor(pettyCashService, sharedService, _subjectService, route, fb, modalService, activeModal) {
    this.pettyCashService = pettyCashService;
    this.sharedService = sharedService;
    this._subjectService = _subjectService;
    this.route = route;
    this.fb = fb;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this.responseMessage = '';
    this.approvedRequestList = [];
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    //Data Table
    this.tableColumns = [];
    this.loading = false;
    this.pageNo = 1;
    this.total = 0;
    this.limit = 6;
    this.tableConfig = {
      filter: {
        Sort: 1,
        PageSize: this.limit
      },
      infiniteScroll: {
        isScroll: true
      },
      style: {
        otherStyle: {
          height: '400px',
          overflow: 'auto'
        }
      }
    };
    this.selectedExpenses = '';
  }
  ngOnInit() {
    this.initTableColumns();
    if (this.pettyCashRequestId) {
      this.GetRegisterPettycashrequestDetails();
      this.getPettyCashRequestExpensesList();
    } else {
      this.GetRegistersPettyCashLimits();
    }
    this.formGroup = this.fb.group({
      note: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(150)]],
      requestedAmount: [{
        value: '',
        disabled: true
      }],
      requestedAmountTemp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }
  onsScrollUpdate(event) {
    if (event?.scrolled) {
      this.pageNo += 1;
      this.getPettyCashRequestExpensesList();
    }
  }
  getEventData(event) {
    console.log(event);
    if (event?.totalAmount > 0) {
      this.formGroup.get('requestedAmount').setValue(event?.totalAmount);
      this.formGroup.get('requestedAmountTemp').setValue(event?.totalAmount);
      this.selectedExpenses = event?.expenseIds.toString();
    } else {
      this.formGroup.get('requestedAmount').setValue(null);
      this.formGroup.get('requestedAmountTemp').setValue(null);
    }
  }
  GetRegistersPettyCashLimits() {
    return this.pettyCashService.GetRegistersPettyCashLimits(this.sharedService.getRegister?.registerObj?.id).subscribe(response => {
      if (response) {
        this.Registersdetails = response.data[0];
      }
    });
  }
  getPettyCashRequestExpensesList() {
    this.loading = true;
    let params = `?RegisterId=${this.sharedService.getRegister?.registerObj?.id}&ReplenishmentRequestID=${this.pettyCashRequestId}&pageNo=${this.pageNo - 1}&pageSize=${this.tableConfig.filter.PageSize}`;
    this.pettyCashService.getPettyCashRequestExpensesList(params).subscribe(response => {
      if (response?.isSuccess) {
        this.approvedRequestList = [...this.approvedRequestList, ...response.data.data];
        this.total = response.data?.totalRecordCount;
      }
    }).add(() => this.loading = false);
  }
  AddPettyCashRequest() {
    if (this.formGroup.valid) {
      this.isLoading = true;
      this.submitted = true;
      this.errorMsg = '';
      const formData = new FormData();
      formData.append('RequestNote', this.formGroup.value.note);
      formData.append('RequestedAmount', this.formGroup.getRawValue().requestedAmount);
      formData.append('RequestExpensesList', this.selectedExpenses);
      this.pettyCashService.AddPettyCashRequest(formData).subscribe(response => {
        if (response.isSuccess) {
          console.log(response);
          this.isLoading = false;
          this.sendtoLoadData.emit();
        } else {
          this.isLoading = false;
          console.log(response);
          this.errorMsg = response?.Errors[0]?.ErrorMessageEn;
          console.log(response.Errors[0].ErrorMessageEn);
        }
      }, error => {
        this.isLoading = false;
        this.errorMsg = error?.error?.errors[0]?.ErrorMessageEn;
        setTimeout(() => this.errorMsg = '', 5000);
      });
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
  GetRegisterPettycashrequestDetails() {
    return this.pettyCashService.GetRegisterPettycashrequestDetails(this.pettyCashRequestId).subscribe(response => {
      if (response) {
        this.details = response.data;
      }
    });
  }
  handleRecevingRequest() {
    let formData = new FormData();
    formData.append('PettyCashRequestId', this.pettyCashRequestId.toString());
    this.pettyCashService.confirmReceivePettyCashAmount(formData).subscribe(response => {
      console.log(response);
      if (response.data) {
        this.responseMessage = 'Successfully received!';
        this._subjectService.replenishmentRequestReceived.next(true);
        this.modalService.dismissAll();
        setTimeout(() => this.responseMessage = '', 5000);
      }
    }, error => {
      this.responseMessage = error?.error?.errors[0]?.ErrorMessageEn;
      setTimeout(() => this.responseMessage = '', 5000);
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
      label: 'Approver Name'
    }, {
      key: 'expenseTotalAmount',
      label: 'Amount'
    }, {
      key: 'createdAt',
      label: 'Date'
    }, {
      key: 'status',
      label: 'Status'
    }];
  }
}
AddRequestComponent.ɵfac = function AddRequestComponent_Factory(t) {
  return new (t || AddRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_petty_cash_service__WEBPACK_IMPORTED_MODULE_0__.PettyCashService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_2__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbActiveModal));
};
AddRequestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AddRequestComponent,
  selectors: [["app-add-request"]],
  inputs: {
    type: "type",
    pettyCashRequestId: "pettyCashRequestId",
    pettyCashRegisterId: "pettyCashRegisterId"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "modal-body", 4, "ngIf"], [1, "modal-body"], [1, "modal-head"], [1, "aboutreq"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-3"], [1, "card-sm"], [1, "col-12"], [3, "eventData"], [3, "formGroup"], [1, "col-md-12"], [1, "form-group", "my-3"], ["rows", "5", "formControlName", "note", "maxlength", "150", 1, "form-control"], [4, "ngIf"], ["type", "text", "formControlName", "requestedAmount", 1, "form-control"], [3, "control", "errorMessages"], ["class", "alert alert-danger text-center", "role", "alert", 4, "ngIf"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", "class", "btn btn-save", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-save btn-load", "disabled", "", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], ["type", "button", 1, "btn", "btn-save", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-save", "btn-load"], [1, "fa-solid", "fa-circle-notch", "fa-spin"], [1, "modal-head", "d-flex", "justify-content-between"], [1, "col-sm-2"], [1, "mb-3"], [1, "pending"], [1, "col-sm-12"], [1, "note", 2, "height", "60px"], ["class", "col-sm-6", 4, "ngIf"], [1, "col-12", "mt-3"], [1, "fw-500", "mb-0"], [3, "config", "columns", "data", "loading", "page", "total", "limit", "scrollUpdate", "pageUpdated"], ["libTableAdvancedColumn", "expenseTotalAmount"], ["libTableAdvancedColumn", "invoiceDate"], ["libTableAdvancedColumn", "createdAt"], ["libTableAdvancedColumn", "status"], ["class", "alert alert-info", 4, "ngIf"], ["class", "btn btn-save", "type", "button", 3, "click", 4, "ngIf"], [1, "col-sm-6"], [1, "note"], [1, "alert", "alert-info"]],
  template: function AddRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AddRequestComponent_div_0_Template, 9, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddRequestComponent_div_1_Template, 7, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type == "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type == "view");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_3__.TableAdvancedComponent, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_4__.TableAdvancedColumnDirective, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_5__.ValidationErrorComponent, _pending_expenses_pending_expenses_component__WEBPACK_IMPORTED_MODULE_6__.PendingExpensesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".modal-head[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 10px;\n}\n.modal-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 25px;\n  text-transform: capitalize;\n  color: #1b212d;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #929eae;\n}\n.modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1b212d;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.aboutreq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #54595e;\n  padding: 15px 0px;\n}\n\n.card-sm[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1b212d;\n  margin-bottom: 5px;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #929eae;\n}\n\n.note[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  height: 120px;\n  border-radius: 6px;\n  margin: 5px 0px;\n  overflow: hidden;\n}\n.note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9wZXR0eS1jYXNoL3JlcXVlc3RzL2FkZC1yZXF1ZXN0L2FkZC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUo7QUFESTtFQUNFLGNBQUE7QUFHTjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQURFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGg0IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjogIzFiMjEyZDtcbiAgfVxuICBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzkyOWVhZTtcbiAgICBiIHtcbiAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgIH1cbiAgfVxufVxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLmFib3V0cmVxIHtcbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6ICM1NDU5NWU7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gIH1cbn1cbi5jYXJkLXNtIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjOTI5ZWFlO1xuICB9XG59XG4ubm90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 27568:
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/requests/add-request/pending-expenses/expense-details-modal/expense-details-modal.component.ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseDetailsModalComponent": () => (/* binding */ ExpenseDetailsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _modal_image_modal_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../modal-image/modal-image.component */ 32216);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





class ExpenseDetailsModalComponent {
  constructor(modalService, activeModal) {
    this.modalService = modalService;
    this.activeModal = activeModal;
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {}
  openMdalImageView() {
    const modalRef = this.modalService.open(_modal_image_modal_image_component__WEBPACK_IMPORTED_MODULE_0__.ModalImageComponent);
    modalRef.componentInstance.imageUploadedView = this.expenseDetails?.files[0]?.attachmentPath;
  }
}
ExpenseDetailsModalComponent.ɵfac = function ExpenseDetailsModalComponent_Factory(t) {
  return new (t || ExpenseDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal));
};
ExpenseDetailsModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ExpenseDetailsModalComponent,
  selectors: [["app-expense-details-modal"]],
  inputs: {
    expenseDetails: "expenseDetails"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  decls: 87,
  vars: 32,
  consts: [[1, "modal-header", "justify-content-between"], [1, "mb-0", "fw-600"], [1, "d-flex", "flex-column"], [1, "m-0", "font-14", "fw-600"], [1, "primary-clr"], [1, "light-gray"], [1, "modal-body"], [1, "row"], [1, "col-md-3"], [1, "card-sm"], [1, "mb-3"], [1, "pending", "mt-2"], [1, "col-md-8"], [1, "form-group", "mb-2"], [1, "fw-600"], [1, "uploadedfile", "p-2"], [1, "m-0", 3, "click"], [1, "d-flex", "align-items-center", "gap-2"], ["height", "20", "src", "assets/images/eye.png", "alt", "", 1, "cursor-pointer", 3, "click"], ["download", "", 3, "href"], ["height", "20", "src", "assets/images/Download.png", "alt", ""], [1, "col-md-12", "my-2"], [1, "note"], [1, "modal-footer", "btns-group", "m-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"]],
  template: function ExpenseDetailsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Expense Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Invoice No: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Invoice Date: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Expense Creation Date: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "div", 7)(20, "div", 8)(21, "div", 9)(22, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Employe Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8)(27, "div", 9)(28, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8)(33, "div", 9)(34, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8)(40, "div", 9)(41, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Tax ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 8)(46, "div", 9)(47, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Total Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 8)(53, "div", 9)(54, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Invoice Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 8)(60, "div", 9)(61, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 12)(66, "div", 13)(67, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15)(70, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExpenseDetailsModalComponent_Template_p_click_70_listener() {
        return ctx.openMdalImageView();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 17)(73, "div")(74, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExpenseDetailsModalComponent_Template_img_click_74_listener() {
        return ctx.openMdalImageView();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 21)(78, "div", 9)(79, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Note ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 22)(82, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 23)(85, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExpenseDetailsModalComponent_Template_button_click_85_listener() {
        return ctx.activeModal.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.expenseDetails == null ? null : ctx.expenseDetails.invoiceNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 17, ctx.expenseDetails == null ? null : ctx.expenseDetails.invoiceDate, "mediumDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 20, ctx.expenseDetails == null ? null : ctx.expenseDetails.createdAt, "mediumDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.expenseDetails == null ? null : ctx.expenseDetails.createdBy.fullName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.expenseDetails == null ? null : ctx.expenseDetails.category[0].lookupName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](38, 23, ctx.expenseDetails == null ? null : ctx.expenseDetails.expenseAmount, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.expenseDetails == null ? null : ctx.expenseDetails.expenseTax, " %");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](51, 26, ctx.expenseDetails == null ? null : ctx.expenseDetails.expenseTotalAmount, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](58, 29, ctx.expenseDetails == null ? null : ctx.expenseDetails.invoiceDate, "mediumDate"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.expenseDetails == null ? null : ctx.expenseDetails.statusObj == null ? null : ctx.expenseDetails.statusObj.lookupBGColor)("color", ctx.expenseDetails == null ? null : ctx.expenseDetails.statusObj == null ? null : ctx.expenseDetails.statusObj.lookupTextColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.expenseDetails == null ? null : ctx.expenseDetails.statusObj == null ? null : ctx.expenseDetails.statusObj.description, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Receipts - ", ctx.expenseDetails == null ? null : ctx.expenseDetails.expenseRecordId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.expenseDetails == null ? null : ctx.expenseDetails.files[0] == null ? null : ctx.expenseDetails.files[0].attachmentPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.expenseDetails == null ? null : ctx.expenseDetails.expenseNotes, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: [".card-sm[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1b212d;\n  margin-bottom: 5px;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #929eae;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  height: 120px;\n  border-radius: 6px;\n  margin: 5px 0px;\n}\n.card-sm[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  padding: 10px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.uploadedfile[_ngcontent-%COMP%]   .fview[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 50%;\n  margin: 0px 5px;\n  width: 30px;\n  height: 30px;\n}\n.uploadedfile[_ngcontent-%COMP%]   .fview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9wZXR0eS1jYXNoL3JlcXVlc3RzL2FkZC1yZXF1ZXN0L3BlbmRpbmctZXhwZW5zZXMvZXhwZW5zZS1kZXRhaWxzLW1vZGFsL2V4cGVuc2UtZGV0YWlscy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUROOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGO0FBS0U7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7QUFLSTtFQUNFLHNCQUFBO0FBSE4iLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zbSB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjOTI5ZWFlO1xuICB9XG5cbiAgLm5vdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4udXBsb2FkZWRmaWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzExYWYyMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuZnZpZXcge1xuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 68512:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/requests/add-request/pending-expenses/pending-expenses.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingExpensesComponent": () => (/* binding */ PendingExpensesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _expense_details_modal_expense_details_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expense-details-modal/expense-details-modal.component */ 27568);
/* harmony import */ var _services_petty_cash_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/petty-cash.service */ 72657);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/shared.service */ 69082);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/table-advanced/table-advanced.component */ 49973);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/components/table-advanced/table-advanced.directives */ 85746);








function PendingExpensesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PendingExpensesComponent_ng_template_3_Template_p_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const row_r2 = restoredCtx.row;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.openModalExpenseView(row_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PendingExpensesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", row_r5 == null ? null : row_r5.statusObj == null ? null : row_r5.statusObj.lookupBGColor)("color", row_r5 == null ? null : row_r5.statusObj == null ? null : row_r5.statusObj.lookupTextColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r5 == null ? null : row_r5.statusObj == null ? null : row_r5.statusObj.description, " ");
  }
}
class PendingExpensesComponent {
  constructor(_pettyCashService, _modalService, sharedService) {
    this._pettyCashService = _pettyCashService;
    this._modalService = _modalService;
    this.sharedService = sharedService;
    this.expensesList = [];
    this.pageNo = 1;
    this.total = 0;
    this.limit = 6;
    this.tableConfig = {
      paging: false,
      multiSelect: true,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    this.tableColumns = [];
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    this.initTableColumns();
    this.getPendingExpense();
  }
  openModalExpenseView(item) {
    const modalRef = this._modalService.open(_expense_details_modal_expense_details_modal_component__WEBPACK_IMPORTED_MODULE_0__.ExpenseDetailsModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.expenseDetails = {
      ...item
    };
  }
  onMultiSelected(event) {
    //console.log(event);
    let selectedItems = event.selectedItems;
    if (selectedItems?.length > 0) {
      let expenseIds = selectedItems.map(x => x.expenseRecordId);
      let total = selectedItems.reduce((acc, cur) => {
        acc += cur?.expenseTotalAmount;
        return acc;
      }, 0);
      this.eventData.emit({
        totalAmount: total.toFixed(3),
        expenseIds
      });
    } else this.eventData.emit({
      totalAmount: 0
    });
  }
  getPendingExpense() {
    let params = `?status=2003&sort=${this.tableConfig.filter.Sort}&pageSize=10000&registerId=${this.sharedService.getRegister?.registerObj?.id}`;
    this._pettyCashService.getPettyCashExpensesNew(params).subscribe(response => {
      this.expensesList = response.data;
      this.total = response?.info?.totalRecordCount;
    });
  }
  onSortChange(sort) {
    if (sort?.direction && sort?.column) {
      switch (sort.column) {
        case 'invoiceNo':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
          break;
        case 'category[0].lookupName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 5 : 4;
          break;
        case 'createdAt':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 7 : 6;
          break;
        case 'createdBy.fullName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 9 : 8;
          break;
        case 'expenseTotalAmount':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 11 : 10;
          break;
        case 'status':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 13 : 12;
          break;
        default:
          break;
      }
    } else {
      this.tableConfig.filter.Sort = 1;
    }
    this.getPendingExpense();
  }
  initTableColumns() {
    this.tableColumns = [{
      key: 'invoiceNo',
      label: 'Invoice No',
      canSort: true
    }, {
      key: 'invoiceDate',
      label: 'Invoice Date',
      dateFormat: 'mediumDate'
    }, {
      key: 'category[0].lookupName',
      label: 'Category',
      canSort: true
    }, {
      key: 'createdAt',
      label: 'Date',
      canSort: true,
      dateFormat: 'mediumDate',
      placeholder: '---'
    }, {
      key: 'createdBy.fullName',
      label: 'Employee',
      canSort: true
    }, {
      key: 'expenseTotalAmount',
      label: 'Total Amount',
      canSort: true,
      currency: {
        decimalFormat: '2.3-3',
        appendText: ' JOD'
      }
    }, {
      key: 'status',
      label: 'Status',
      canSort: true
    }, {
      key: 'action',
      label: 'Action'
    }];
  }
}
PendingExpensesComponent.ɵfac = function PendingExpensesComponent_Factory(t) {
  return new (t || PendingExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_petty_cash_service__WEBPACK_IMPORTED_MODULE_1__.PettyCashService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService));
};
PendingExpensesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PendingExpensesComponent,
  selectors: [["app-pending-expenses"]],
  outputs: {
    eventData: "eventData"
  },
  decls: 5,
  vars: 6,
  consts: [[1, "fw-500", "mt-3"], [3, "config", "columns", "data", "page", "total", "limit", "multiSelected", "sortUpdated"], ["libTableAdvancedColumn", "action"], ["libTableAdvancedColumn", "status"], [1, "blue-clr", "cursor-pointer", "fw-600", "d-block", "text-nowrap", "mb-0", 3, "click"], [1, "pending"]],
  template: function PendingExpensesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "List of Pending Expenses");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table-advanced", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("multiSelected", function PendingExpensesComponent_Template_table_advanced_multiSelected_2_listener($event) {
        return ctx.onMultiSelected($event);
      })("sortUpdated", function PendingExpensesComponent_Template_table_advanced_sortUpdated_2_listener($event) {
        return ctx.onSortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PendingExpensesComponent_ng_template_3_Template, 2, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PendingExpensesComponent_ng_template_4_Template, 2, 5, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.tableConfig)("columns", ctx.tableColumns)("data", ctx.expensesList)("page", ctx.pageNo)("total", ctx.total)("limit", ctx.limit);
    }
  },
  dependencies: [_shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_3__.TableAdvancedComponent, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_4__.TableAdvancedColumnDirective],
  styles: [".pending[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 10px 30px;\n  font-weight: 600;\n  width: 125px !important;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9wZXR0eS1jYXNoL3JlcXVlc3RzL2FkZC1yZXF1ZXN0L3BlbmRpbmctZXhwZW5zZXMvcGVuZGluZy1leHBlbnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucGVuZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTI1cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 72657:
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/services/petty-cash.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PettyCashService": () => (/* binding */ PettyCashService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);




class PettyCashService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  GetExpenses(searchText, sort, pageNo) {
    return this.http.get(this.apiUrl + `Expense/GetExpenses?Search=${searchText}&Sort=${sort}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  getRegisterPettyCashSituation(registerId) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettyCashSituation?registerId=${registerId}`, this.sharedService.getHeaders());
  }
  getApprovedExpensesSinceReplinshment(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetApprovedExpensesSinceReplinshment${params}`, this.sharedService.getHeaders());
  }
  getPettyCashRequestExpensesList(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetPettyCashRequestExpensesList${params}`, this.sharedService.getHeaders());
  }
  getExpensesDashboard(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpensesDashboard${params}`, this.sharedService.getHeaders());
  }
  getPettyCashGraphDashboard(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetPettyCashGraphDashboard?${params}`, this.sharedService.getHeaders());
  }
  getExpensesDashboardCards(registerId) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpensesDashboardCards?RegisterId=${registerId}`, this.sharedService.getHeaders());
  }
  AddExpense(expense) {
    return this.http.post(this.apiUrl + 'Expense/AddExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  confirmReceivePettyCashAmount(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/ConfirmReceivePettyCashAmount', formData, this.sharedService.getHeaders());
  }
  uploadConfirmReceivePettyCashAmount(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/UploadConfirmReceivePettyCashAmount', formData, this.sharedService.getHeaders());
  }
  EditExpense(expense) {
    return this.http.post(this.apiUrl + 'Expense/EditExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  GetExpenseDetails(id) {
    return this.http.get(this.apiUrl + `Expense/GetExpenseDetails?expenseRecordId=${id}`, this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + `Lookups/GetLookups?lookupTypeId=${id}&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getExpenseCategories() {
    return this.http.get(this.apiUrl + `PettyCash/GetExpensesCategories?status=2001&Sort=0&PageNo=0&PageSize=1000`, this.sharedService.getHeaders());
  }
  getPettyCashStatus() {
    return this.http.get(this.apiUrl + `Lookups/GetLookups?lookupTypeId=2&parentId=1`, this.sharedService.getHeaders());
  }
  getCostCenters() {
    return this.http.get(this.apiUrl + `PettyCash/GetCostCenters?StatusId=2001&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getCostCentersByTypeId(typeId) {
    return this.http.get(this.apiUrl + `PettyCash/GetCostCenters?StatusId=2001&CostCenterType=${typeId}&PageSize=1000`, this.sharedService.getHeaders());
  }
  getRegistersList() {
    let url = `Register/GetRegisters?Status=2001&PageNo=0&PageSize=100`;
    return this.http.get(this.apiUrl + url, this.sharedService.getHeaders());
  }
  //==============================================
  getPettyCashExpensesNew(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpenses${params}`, this.sharedService.getHeaders());
  }
  GetPettyCashExpenses(searchText, expenseId, sort, status, pageNo) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpenses?Search=${searchText}&expenseId=${expenseId}&Status=${status}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&RegisterId=${this.sharedService.getRegister?.registerObj?.id}`, this.sharedService.getHeaders());
  }
  AddPettyCashExpense(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/AddExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  EditPettyCashExpense(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/EditExpense', expense, {
      //reportProgress: true,
      //observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  expenseRevised(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/ExpenseRevised', expense, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  GetPettyCashExpenseDetails(id) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpenseDetails?expenseRecordId=${id}`, this.sharedService.getHeaders());
  }
  //===============================
  GetRegisterPettyCashRequestLast() {
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettyCashRequestLast?RegisterId=${this.sharedService.getRegister?.registerObj?.id}`, this.sharedService.getHeaders());
  }
  GetRegisterPettycashrequest(searchText, sort, status, pageNo) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettycashrequest?Search=${searchText}&Status=${status}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&RegisterId=${this.sharedService.getRegister?.registerObj?.id}`, this.sharedService.getHeaders());
  }
  getRegisterPettycashrequestNew(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettycashrequest${params}`, this.sharedService.getHeaders());
  }
  GetRegisterPettycashrequestDetails(id) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettycashrequestDetails?pettyCashRequestId=${id}`, this.sharedService.getHeaders());
  }
  GetRegistersPettyCashLimits(id) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegistersPettyCashLimits?Search=${id}`, this.sharedService.getHeaders());
  }
  AddPettyCashRequest(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/AddPettyCashRequest', expense, this.sharedService.getHeaders());
  }
  givePettyCashPayment(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/GivePettyCashPayment', formData, this.sharedService.getHeaders());
  }
  addExpenseV2(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/AddExpenseV2', formData, this.sharedService.getHeaders());
  }
  cancelGivenPettyCashPayment(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/CancelGivenPettyCashPayment', formData, this.sharedService.getHeaders());
  }
  getEmployees() {
    return this.http.get(this.apiUrl + `User/GetUsers?status=2001&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getCashierEmployees() {
    return this.http.get(this.apiUrl + `User/GetUsers?roleId=1&status=2001&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getPettyCashPayments(parmas) {
    return this.http.get(this.apiUrl + `PettyCash/GetPettyCashPayments${parmas}`, this.sharedService.getHeaders());
  }
}
PettyCashService.ɵfac = function PettyCashService_Factory(t) {
  return new (t || PettyCashService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
PettyCashService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PettyCashService,
  factory: PettyCashService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_modules_cashier_petty-cash_add-petty-cash_add-petty-cash_component_-17a39e.js.map