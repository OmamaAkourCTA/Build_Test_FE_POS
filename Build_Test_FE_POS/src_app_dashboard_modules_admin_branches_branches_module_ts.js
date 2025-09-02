"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_admin_branches_branches_module_ts"],{

/***/ 61159:
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/branches/add-branch/add-branch.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBranchComponent": () => (/* binding */ AddBranchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _modal_done_modal_done_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-done/modal-done.component */ 82226);
/* harmony import */ var _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-confirm/modal-confirm.component */ 9687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/branch.service */ 90350);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/httpservice.service */ 79345);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-tel-input */ 79453);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/directive/character.directive */ 80145);
















const _c0 = ["search"];
function AddBranchComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 56);
  }
}
function AddBranchComponent_div_9_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 61);
  }
}
function AddBranchComponent_div_9_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 62);
  }
}
function AddBranchComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 57)(1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddBranchComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.editBranchInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddBranchComponent_div_9_img_2_Template, 1, 0, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddBranchComponent_div_9_img_3_Template, 1, 0, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.branchForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isShowBranchInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isShowBranchInfo);
  }
}
function AddBranchComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddBranchComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.removeBranchName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddBranchComponent_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span");
  }
}
function AddBranchComponent_div_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddBranchComponent_div_17_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Branch name length must be between 6 and 30 character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AddBranchComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddBranchComponent_div_17_span_1_Template, 1, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddBranchComponent_div_17_span_2_Template, 2, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddBranchComponent_div_17_span_3_Template, 3, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.formValid["branchName"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.formValid["branchName"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.formValid["branchName"].errors["minlength"]);
  }
}
function AddBranchComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68)(1, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AddBranchComponent_div_30_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const item_r33 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.selectBranchType(item_r33.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", item_r33.id)("checked", ctx_r4.branchTypesAry.includes(item_r33.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", item_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r33.name[0].lookupName);
  }
}
function AddBranchComponent_div_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 72)(1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", (ctx_r36.branchTypesAry == null ? null : ctx_r36.branchTypesAry.length) != 0);
  }
}
function AddBranchComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddBranchComponent_div_31_span_1_Template, 3, 1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.formValid["branchTypes"].errors);
  }
}
function AddBranchComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddBranchComponent_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.removeemail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddBranchComponent_div_38_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " the email you entered is incorrect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddBranchComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 64)(1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddBranchComponent_div_38_span_2_Template, 2, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r7.branchForm.get("email").value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formValid["email"].errors);
  }
}
function AddBranchComponent_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddBranchComponent_button_45_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r40.removephone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddBranchComponent_div_46_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddBranchComponent_div_46_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "The digits are less than 10 for (Mobile) and the digits are more than 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AddBranchComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddBranchComponent_div_46_span_1_Template, 2, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddBranchComponent_div_46_span_2_Template, 3, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r9.branchForm.get("phone").value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.formValid["phone"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.formValid["phone"].errors["minlength"]);
  }
}
function AddBranchComponent_div_62_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "This element is required, please");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AddBranchComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddBranchComponent_div_62_span_1_Template, 3, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.formValid["country"].errors);
  }
}
function AddBranchComponent_div_76_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " longitude is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AddBranchComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddBranchComponent_div_76_span_1_Template, 3, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.formValid["longitude"].errors);
  }
}
function AddBranchComponent_div_82_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " latitude is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AddBranchComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddBranchComponent_div_82_span_1_Template, 3, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r13.formValid["latitude"].errors);
  }
}
function AddBranchComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 74);
  }
}
function AddBranchComponent_div_103_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 61);
  }
}
function AddBranchComponent_div_103_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 62);
  }
}
function AddBranchComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 57)(1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddBranchComponent_div_103_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.editWorkingHours());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddBranchComponent_div_103_img_2_Template, 1, 0, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddBranchComponent_div_103_img_3_Template, 1, 0, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r15.branchForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.isShowWorkingHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r15.isShowWorkingHours);
  }
}
function AddBranchComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "div", 77)(3, "div", 78)(4, "div", 79)(5, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AddBranchComponent_div_115_Template_input_change_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
      const item_r51 = restoredCtx.$implicit;
      const i_r52 = restoredCtx.index;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r53.chooseTime(item_r51.value.isActive, i_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 77)(9, "div", 40)(10, "div", 82)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 77)(15, "div", 40)(16, "div", 82)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r51 = ctx.$implicit;
    const i_r52 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r16.isEdit == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r51.value.dayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", item_r51.value.isActive == false ? true : false);
  }
}
function AddBranchComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 85);
  }
}
function AddBranchComponent_div_121_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 61);
  }
}
function AddBranchComponent_div_121_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 62);
  }
}
function AddBranchComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 57)(1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddBranchComponent_div_121_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r57.editBranchAdmin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddBranchComponent_div_121_img_2_Template, 1, 0, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddBranchComponent_div_121_img_3_Template, 1, 0, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r18.branchForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r18.isShowBranchAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r18.isShowBranchAdmin);
  }
}
function AddBranchComponent_div_128_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "This element is required, please fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AddBranchComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddBranchComponent_div_128_span_1_Template, 3, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.formValid["adminUser"].errors);
  }
}
function AddBranchComponent_div_132_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r61.ErrorMessageEn, " ");
  }
}
function AddBranchComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddBranchComponent_div_132_li_2_Template, 2, 1, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r20.errorsList);
  }
}
function AddBranchComponent_button_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddBranchComponent_button_138_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r62.chickForEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddBranchComponent_button_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddBranchComponent_button_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
const _c2 = function () {
  return ["jo", "sa"];
};
const _c3 = function (a0) {
  return {
    "preferredCountries": a0
  };
};
class AddBranchComponent {
  // lat: number = 35.8645648;
  // lng: number = 31.97258070000001;
  markerDragEnd($event) {
    console.log('dragEnd', $event);
    console.log('dragEnd', $event.coords.lat, $event.coords.lng);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    console.log('mmmm');
    this.getAddressBylangLat(this.lat, this.lng);
    // this.getAddress(this.latitude, this.longitude);
    this.branchForm.get('latitude')?.setValue(this.lat.toString());
    this.branchForm.get('longitude')?.setValue(this.lng.toString());
  }
  // markers: marker[] = [
  //   {
  //     lat: 31.2798855,
  //     lng: 37.122627,
  //     draggable: true,
  //   },
  // ];
  constructor(branchService, toastr, fb, httpserviceService, mapsAPILoader, ngZone, router,
  // public searchElementRef: ElementRef,
  route, modalService, headerService, config) {
    this.branchService = branchService;
    this.toastr = toastr;
    this.fb = fb;
    this.httpserviceService = httpserviceService;
    this.mapsAPILoader = mapsAPILoader;
    this.ngZone = ngZone;
    this.router = router;
    this.route = route;
    this.modalService = modalService;
    this.headerService = headerService;
    this.formModel = {};
    this.branchWorkingHoursList = [];
    this.response = {};
    this.branchAdmin = [];
    this.branchTypes = [];
    this.branchTypesAry = [];
    this.pageType = 'Add';
    this.isEdit = false;
    this.isStatus = true;
    this.zoom = 15;
    this.submitted = false;
    this.searchText = '';
    this.isShowBranchInfo = false;
    this.isShowWorkingHours = false;
    this.isShowBranchAdmin = false;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    console.log(this.searchElementRef);
    this.branchId = this.route.snapshot.params['id'];
    if (this.branchId) {
      this.isEdit = true;
      if (this.isEdit = true) {
        this.headerService.setTitle('Branches > View branch');
      }
    } else {
      this.headerService.setTitle('Branches > Add branch');
    }
    if (!this.branchId) {
      navigator.geolocation.getCurrentPosition(pos => {
        console.log('pos', pos);
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.branchForm.get('latitude')?.setValue(this.lat.toString());
        this.branchForm.get('longitude')?.setValue(this.lng.toString());
      });
    }
    this.getFormData();
    // this.getAddressBylangLat();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        // types: ["address"]
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          //get the place result
          let place = autocomplete.getPlace();
          // console.log(place);
          // console.log(place.name);
          // console.log(place.formatted_address);
          // console.log(place.address_components.reverse());
          let locationData = place.address_components.reverse();
          console.log(locationData);
          this.branchForm.get('address')?.setValue(place.formatted_address);
          this.branchForm.get('country')?.setValue(locationData[0]?.long_name);
          this.branchForm.get('city')?.setValue(locationData[1]?.long_name || '');
          this.branchForm.get('branchArea')?.setValue(locationData[3]?.long_name || '');
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 15;
          console.log(this.lat);
          console.log(this.lng);
          this.branchForm.get('longitude')?.setValue(place.geometry.location.lng().toString());
          this.branchForm.get('latitude')?.setValue(place.geometry.location.lat().toString());
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
        });
      });
    });

    this.getBranchTypes();
    this.getBranchAdmin();
    if (!this.branchId) {
      this.getWorkingHours();
    }
    if (this.branchId) {
      this.getBranchDetails();
      this.isEdit = true;
      this.pageType = 'View';
    }
  }
  // zoom: number = 8;
  // // initial center position for the map
  // lat: number = 51.673858;
  // lng: number = 7.815982;
  // previous: any;
  getFormData() {
    this.branchForm = this.fb.group({
      branchId: 0,
      branchName: '',
      phone: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
      country: [''],
      city: [''],
      branchArea: [''],
      address: [''],
      longitude: [''],
      latitude: [''],
      status: 2001,
      adminUser: null,
      branchTypes: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      branchWorkingHours: this.fb.array([])
    });
  }
  addBranchWorkingHours() {
    return this.fb.group({
      dayId: '',
      dayName: '',
      fromTime: '',
      toTime: '',
      isActive: true,
      status: 2001
    });
  }
  chooseTime(value, i) {
    console.log(value);
    value == true;
    if (value == true) {
      this.branchForm.get('branchWorkingHours')['at'](i).get('fromTime').enable();
      this.branchForm.get('branchWorkingHours')['at'](i).get('toTime').enable();
      this.branchForm.get('branchWorkingHours')['at'](i).get('status').patchValue(2001);
    } else {
      this.branchForm.get('branchWorkingHours')['at'](i).get('status').patchValue(2002);
      this.branchForm.get('branchWorkingHours')['at'](i).get('fromTime').disable();
      this.branchForm.get('branchWorkingHours')['at'](i).get('toTime').disable();
    }
  }
  chooseStatus() {
    // this.isStatus = this.isStatus == false ? true : false;
    if (this.isStatus == true) {
      this.branchForm.get('status')?.patchValue(2001);
    } else {
      this.branchForm.get('status')?.patchValue(2002);
    }
  }
  get branchWorkingHours() {
    return this.branchForm.get('branchWorkingHours');
  }
  get formValid() {
    return this.branchForm.controls;
  }
  onSubmit() {
    this.branchForm.get('branchTypes')?.patchValue(this.branchTypesAry);
    console.log(this.branchForm.get('branchTypes').value);
    // const whours = this.branchForm.get('branchWorkingHours').value;
    this.submitted = true;
    this.branchForm.get('branchName')?.patchValue(this.branchForm.get('branchName')?.value.trim());
    if (this.branchForm.invalid) {
      return window.scroll(0, 0);
    }
    // console.log(this.formValid['branchName'].invalid);
    // console.log(this.formValid['branchTypes'].invalid);
    // if (this.formValid['branchName'].invalid) {
    //   this.msgBranchNAme = 'Please Enter Branch Name';
    //   setTimeout(() => {
    //     this.msgBranchNAme = '';
    //   }, 3000);
    //   return;
    // }
    // if (this.formValid['branchTypes'].invalid) {
    //   this.msgBranchNAme = 'Please Enter Branch Types';
    //   setTimeout(() => {
    //     this.msgBranchNAme = '';
    //   }, 3000);
    //   return;
    // }
    // if (this.formValid['adminUser'].invalid) {
    //   this.msgBranchNAme = 'Please Enter Branch Admin';
    //   setTimeout(() => {
    //     this.msgBranchNAme = '';
    //   }, 3000);
    //   return;
    // }
    // let whours = this.branchForm
    //   .get('branchWorkingHours')
    //   .value.filter((item) => {
    //     return item.isActive == true;
    //   });
    // console.log('whours', whours);
    // for (let r = this.branchWorkingHours.value.length - 1; r >= 0; r--) {
    //   this.branchWorkingHours.removeAt(r);
    // }
    // // this.branchForm.get('branchWorkingHours')?.patchValue();
    // for (let w = 0; w < whours.length; w++) {
    //   this.branchWorkingHours.push(
    //     this.fb.group({
    //       dayId: whours[w].dayId,
    //       dayName: whours[w].dayName,
    //       fromTime: whours[w].fromTime,
    //       toTime: whours[w].toTime,
    //       isActive: whours[w].isActive,
    //       "status": 2001
    //     })
    //   );
    // }
    // const newArr = this.branchForm.value.map((element) => ({
    //   ...element,
    //   fromTime: '00:00',
    //   toTime: '00:00',
    // }));
    console.log(this.branchForm.value);
    if (this.branchForm.get('branchId')?.value == 0) {
      this.addBranch();
    } else {
      this.updateBranch();
    }
  }
  addBranch() {
    this.isLoading = true;
    if (this.branchForm.get('branchName')?.value == '') {
      this.branchForm.get('branchName')?.patchValue('-');
    }
    if (!this.branchForm.get('email')?.value) {
      delete this.branchForm.value.email;
    }
    if (!this.branchForm.get('phone')?.value) {
      delete this.branchForm.value.phone;
    }
    if (!this.branchForm.get('adminUser')?.value) {
      delete this.branchForm.value.adminUser;
    }
    this.branchService.addBranch(this.branchForm.value).subscribe(response => {
      if (response.isSuccess == true) {
        // this.messageSuccess = 'your new branch is added successfully';
        this.isLoading = false;
        const modalRef = this.modalService.open(_modal_done_modal_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalDoneComponent);
        modalRef.componentInstance.name = '';
        // this.getFormData();
        // setTimeout(() => {
        //   this.router.navigateByUrl('/branches');
        // }, 2000);
      } else {
        if (this.branchForm.get('branchName')?.value == '-') {
          this.branchForm.get('branchName')?.patchValue('');
        }
        this.isLoading = false;
        this.errorsList = response.Errors || response.errors;
        setTimeout(() => {
          this.errorsList = '';
        }, 5000);
        // if (this.branchForm.invalid) {
        //   return;
        // }
      }
      // this.toastr.success('Added Successfully');
    }, error => {
      this.isLoading = false;
      console.log(error), this.errorMessage = error.statusText;
    });
  }
  updateBranch() {
    // let whours = this.branchForm
    //   .get('branchWorkingHours')
    //   .value.filter((item) => {
    //     return item.isActive == true;
    //   });
    // console.log('whours', whours);
    // for (let r = this.branchWorkingHours.value.length - 1; r >= 0; r--) {
    //   this.branchWorkingHours.removeAt(r);
    // }
    // // this.branchForm.get('branchWorkingHours')?.patchValue();
    // for (let w = 0; w < whours.length; w++) {
    //   this.branchWorkingHours.push(
    //     this.fb.group({
    //       dayId: whours[w].dayId,
    //       dayName: whours[w].dayName,
    //       fromTime: whours[w].fromTime,
    //       toTime: whours[w].toTime,
    //       isActive: whours[w].isActive,
    //     })
    //   );
    // }
    this.errorMessage = '';
    this.errorsList = '';
    // this.branchForm.get('branchTypes')?.patchValue('');
    this.branchForm.get('branchTypes')?.patchValue(this.branchTypesAry);
    console.log(this.branchForm.get('branchTypes').value);
    if (this.branchForm.get('adminUser')?.value == null) {
      this.branchForm.get('adminUser')?.patchValue(0);
    }
    this.isLoading = true;
    console.log(this.branchForm.value);
    this.branchForm.get('branchTypes')?.patchValue(this.branchTypesAry);
    console.log(this.branchForm.get('branchTypes').value);
    this.branchService.updateBranch(this.branchForm.value).subscribe(response => {
      if (response.isSuccess == true) {
        this.getBranchDetails();
        this.isLoading = false;
        this.isShowBranchAdmin = false;
        this.isShowBranchInfo == false;
        this.isShowWorkingHours == false;
        const modalRef = this.modalService.open(_modal_done_modal_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalDoneComponent);
        modalRef.componentInstance.name = 'edit';
      } else {
        this.isLoading = false;
        this.errorsList = response.Errors || response.errors;
      }
    }, error => {
      this.isLoading = false;
      console.log(error), this.errorMessage = error.statusText;
    });
  }
  toEdit() {
    if (this.isEdit == false) {
      this.isEdit = true;
      this.pageType = 'Edit';
    } else {
      this.isEdit = false;
      this.pageType = 'View';
    }
  }
  getBranchDetails() {
    this.branchTypesAry = [];
    this.branchService.getBranchDetails(this.branchId).subscribe(response => {
      if (response) {
        console.log(response);
        const branchDetails = response.data;
        // this.branchTypesAry= []
        this.branchForm.patchValue(branchDetails);
        this.branchForm.get('adminUser')?.patchValue(branchDetails.adminUser?.userId);
        this.searchElementRef.nativeElement.value = this.branchForm.get('address')?.value;
        this.lng = +this.branchForm.get('longitude')?.value;
        this.lat = +this.branchForm.get('latitude')?.value;
        console.log(typeof this.lng);
        setTimeout(() => {
          this.zoom = 16;
        }, 2000);
        // this.branchForm
        // .get('branchTypes')
        // ?.patchValue(branchDetails.);
        if (this.branchForm.value.status == 2001) {
          this.isStatus = true;
        } else {
          this.isStatus = false;
        }
        branchDetails.branchType.forEach(item => {
          this.branchTypesAry.push(item.branchTypeId);
        });
        console.log(this.branchTypesAry);
        for (let r = this.branchWorkingHours.value.length - 1; r >= 0; r--) {
          this.branchWorkingHours.removeAt(r);
        }
        for (let w = 0; w < branchDetails.branchWorkingHours.length; w++) {
          // this.branchWorkingHours
          //   .at(w)
          //   .get('fromTime')
          //   .patchValue('patchmail@gmail.com');
          this.branchWorkingHours.push(this.fb.group({
            dayId: branchDetails.branchWorkingHours[w].dayId,
            dayName: branchDetails.branchWorkingHours[w].day[0].lookupName,
            fromTime: branchDetails.branchWorkingHours[w]?.fromTime,
            toTime: branchDetails.branchWorkingHours[w]?.toTime,
            isActive: branchDetails.branchWorkingHours[w].status == 2001 ? true : false,
            status: branchDetails.branchWorkingHours[w].status
          }));
        }
      }
    });
  }
  selectBranchType(item) {
    console.log(item);
    if (this.branchTypesAry.includes(item)) {
      this.branchTypesAry.splice(this.branchTypesAry.indexOf(item), 1);
    } else {
      this.branchTypesAry.push(item);
    }
    console.log(this.branchTypesAry);
  }
  getBranchTypes() {
    this.branchService.getLookupsById(3).subscribe(response => {
      this.branchTypes = response.data;
    }, error => {
      this.errorMessage = error.message;
    });
  }
  getWorkingHours() {
    this.branchService.getLookupsById(6).subscribe(response => {
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        this.branchWorkingHours.push(this.fb.group({
          dayId: response.data[i]?.id,
          dayName: response.data[i]?.description,
          fromTime: '09:00',
          toTime: '17:00',
          isActive: true,
          status: 2001
        }));
      }
    }, error => {
      this.errorMessage = error.message;
    });
  }
  getBranchAdmin() {
    this.branchService.getUsers().subscribe(response => {
      this.branchAdmin = response.data;
    }, error => {
      this.errorMessage = error.message;
    });
  }
  getAddressBylangLat(lat, lang) {
    this.branchService.getAddressBylangLat(lat, lang).subscribe(response => {
      console.log(response);
      const locationDetails = response.results[0];
      const listData = locationDetails.address_components.reverse();
      this.branchForm.get('address')?.setValue(locationDetails.formatted_address);
      this.searchElementRef.nativeElement.value = this.branchForm.get('address')?.value;
      this.branchForm.get('country')?.setValue(listData[1].long_name);
      this.branchForm.get('city')?.setValue(listData[2].long_name);
      this.branchForm.get('branchArea')?.setValue(listData[3].long_name);
      // this.branchForm.get('city')?.setValue(locationDetails[1]?.long_name || '');
      // this.branchForm.get('branchArea')?.setValue(locationDetails[3]?.long_name || '');
    }, error => {
      this.errorMessage = error.message;
    });
  }
  editBranchInfo() {
    // this.isShowBranchInfo = this.isShowBranchInfo == false ? true : false;
    if (this.isShowBranchInfo == false) {
      this.isShowBranchInfo = true;
      this.isShowBranchAdmin = false;
      this.isShowWorkingHours = false;
    } else if (this.isShowBranchInfo == true) {
      const modalRef = this.modalService.open(_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ModalConfirmComponent);
      modalRef.componentInstance.name = 'World';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowBranchInfo = false;
        this.modalService.dismissAll();
        this.updateBranch();
        // this.onSubmit();
      });

      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowBranchInfo = false;
        this.modalService.dismissAll();
      });
    }
  }
  editWorkingHours() {
    // this.isShowWorkingHours = this.isShowWorkingHours == false ? true : false;
    if (this.isShowWorkingHours == false) {
      this.isShowWorkingHours = true;
      this.isShowBranchInfo = false;
      this.isShowBranchAdmin = false;
    } else if (this.isShowWorkingHours == true) {
      const modalRef = this.modalService.open(_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ModalConfirmComponent);
      modalRef.componentInstance.name = 'World';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowWorkingHours = false;
        this.modalService.dismissAll();
        this.updateBranch();
        setTimeout(() => {
          this.getBranchDetails();
        }, 2000);
        // this.onSubmit();
      });

      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowWorkingHours = false;
        this.modalService.dismissAll();
      });
    }
  }
  chickForEdit() {
    if (this.isShowBranchInfo == true || this.isShowWorkingHours == true || this.isShowBranchAdmin == true) {
      const modalRef = this.modalService.open(_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ModalConfirmComponent);
      modalRef.componentInstance.name = 'name';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowBranchAdmin = false;
        this.isShowBranchInfo == false;
        this.isShowWorkingHours == false;
        this.modalService.dismissAll();
        this.updateBranch();
        // this.onSubmit();
      });

      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowBranchAdmin = false;
        this.isShowBranchInfo == false;
        this.isShowWorkingHours == false;
        this.modalService.dismissAll();
      });
    } else {}
  }
  applyAllTime() {}
  editBranchAdmin() {
    // this.isShowBranchAdmin = this.isShowBranchAdmin == false ? true : false;
    if (this.isShowBranchAdmin == false) {
      this.isShowBranchAdmin = true;
      this.isShowWorkingHours = false;
      this.isShowBranchInfo = false;
    } else if (this.isShowBranchAdmin == true) {
      const modalRef = this.modalService.open(_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ModalConfirmComponent);
      modalRef.componentInstance.name = 'World';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowBranchAdmin = false;
        this.modalService.dismissAll();
        this.updateBranch();
        // this.onSubmit();
      });

      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowBranchAdmin = false;
        this.modalService.dismissAll();
      });
    }
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  removeBranchName() {
    this.branchForm.get('branchName')?.patchValue('');
  }
  removeemail() {
    this.branchForm.get('email')?.patchValue('');
  }
  removephone() {
    this.branchForm.get('phone')?.patchValue('');
  }
  removeseacrch() {
    this.searchElementRef.nativeElement.value = '';
    this.searchText = '';
    this.branchForm.get('longitude')?.setValue('');
    this.branchForm.get('latitude')?.setValue('');
    this.branchForm.get('address')?.setValue('');
    this.branchForm.get('country')?.setValue('');
    this.branchForm.get('city')?.setValue('');
    this.branchForm.get('branchArea')?.setValue('');
    // this.search = '';
  }

  checkSpecialChar(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return k > 64 && k < 91 || k > 96 && k < 123 || k == 8 || k == 32 || k >= 48 && k <= 57;
  }
}
AddBranchComponent.ɵfac = function AddBranchComponent_Factory(t) {
  return new (t || AddBranchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__.BranchService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_3__.HttpserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_10__.MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_4__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModalConfig));
};
AddBranchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AddBranchComponent,
  selectors: [["app-add-branch"]],
  viewQuery: function AddBranchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
    }
  },
  decls: 141,
  vars: 47,
  consts: [[1, "row"], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], [1, "page-title"], [1, "card-form", "overflow-hidden", "position-relative"], ["class", "overlay-bi", 4, "ngIf"], ["class", "edit-btn float-end", 4, "ngIf"], [1, "col-md-4"], [1, "form-group", "overflow-hidden", "position-relative"], ["formControlName", "branchName", "name", "branchName", "type", "text", "placeholder", "Type name", "required", "", "minlength", "6", "maxlength", "30", "OnlyCharacter", "", "autocomplete", "off", 1, "form-control"], ["class", "btn btn-remove", 3, "click", 4, "ngIf"], ["class", "ng-dirty", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "form-check", "form-switch"], [1, "labelactive"], ["name", "isStatus", "type", "checkbox", "role", "switch", 1, "form-check-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "form-group"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "email", "name", "email", "placeholder", "Email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,3}$", 1, "form-control"], [1, "form-group", "position-relative"], ["type", "text", "formControlName", "phone", "name", "phone", "placeholder", "", "ng2TelInput", "", "min", "8", "max", "10", "minlength", "8", "maxlength", "10", 1, "form-control", 3, "ng2TelInputOptions", "keypress"], ["class", "ng-dirty", 3, "hidden", 4, "ngIf"], [1, "col-md-12", "d-flex"], [1, "heading1"], [1, "smallTextMuted", "mx-3"], [1, "col-md-6"], ["type", "text", "placeholder", "Search Location", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "off", "type", "text", 1, "form-control", 3, "ngModel", "ngModelOptions", "keydown.enter", "ngModelChange"], ["search", ""], ["type", "button", 1, "btn", "btn-remove", 2, "top", "4px", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [3, "latitude", "longitude", "zoom", "disableDefaultUI", "zoomControl", "fullscreenControl"], [3, "latitude", "longitude", "markerDraggable", "dragEnd"], ["hidden", "", 1, "col-md-6"], ["formControlName", "longitude", "name", "longitude", "type", "text", "placeholder", "longitude", "required", "", 1, "form-control"], ["formControlName", "latitude", "name", "latitude", "type", "text", "placeholder", "latitude", "required", "", 1, "form-control"], ["formControlName", "country", "name", "country", "type", "text", "placeholder", "", "required", "", 1, "form-control"], ["formControlName", "city", "name", "city", "type", "text", "placeholder", "", 1, "form-control"], ["formControlName", "branchArea", "name", "branchArea", "type", "text", "placeholder", "", 1, "form-control"], [1, "card-form", "whour", "overflow-hidden", "position-relative"], ["class", "overlay-wh", 4, "ngIf"], [1, ""], [1, "form-check", "mb-2"], [1, "day-active", "mt-0", "mb-2"], [1, "px-2", "mb-2"], ["formArrayName", "branchWorkingHours", 4, "ngFor", "ngForOf"], [1, "card-form", "position-relative"], ["class", "overlay-ba", 4, "ngIf"], ["name", "adminUser", "id", "adminUser", "placeholder", "Type name", "bindLabel", "fullName", "bindValue", "userId", "formControlName", "adminUser", 3, "items"], [1, "col-md-2"], [1, "col-md-8"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel"], ["type", "button", "class", "btn btn-save", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-save", 4, "ngIf"], ["type", "button", "class", "btn btn-save btn-load", "disabled", "", 4, "ngIf"], [1, "overlay-bi"], [1, "edit-btn", "float-end"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["src", "assets/images/save.png", "class", "save-img", "alt", "", 4, "ngIf"], ["src", "assets/images/edit.png", "alt", "", 4, "ngIf"], ["src", "assets/images/save.png", "alt", "", 1, "save-img"], ["src", "assets/images/edit.png", "alt", ""], [1, "btn", "btn-remove", 3, "click"], [1, "ng-dirty"], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "id", "checked", "change"], [1, "form-check-label", 3, "for"], [3, "hidden", 4, "ngIf"], [3, "hidden"], [1, "ng-dirty", 3, "hidden"], [1, "overlay-wh"], ["formArrayName", "branchWorkingHours"], [1, "row", 3, "formGroupName"], [1, "col-sm-4"], [1, "form-group", "day-active"], [1, "form-check", "form-switch", "justify-content-between"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDefault", "formControlName", "isActive", 1, "form-check-input", 3, "disabled", "change"], ["for", ""], [1, "from-to-time"], ["type", "time", "formControlName", "fromTime", "name", "fromTime", "placeholder", "", 1, "form-control", 3, "disabled"], ["type", "time", "formControlName", "toTime", "name", "toTime", "placeholder", "", 1, "form-control"], [1, "overlay-ba"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-save", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["type", "button", "disabled", "", 1, "btn", "btn-save", "btn-load"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function AddBranchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AddBranchComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Branch Information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AddBranchComponent_div_8_Template, 1, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AddBranchComponent_div_9_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 0)(11, "div", 7)(12, "div", 8)(13, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Branch Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, AddBranchComponent_button_16_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, AddBranchComponent_div_17_Template, 4, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 7)(20, "div", 12)(21, "div", 13)(22, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Active ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddBranchComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.isStatus = $event;
      })("change", function AddBranchComponent_Template_input_change_24_listener() {
        return ctx.chooseStatus();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 1)(26, "div", 16)(27, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Branch Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AddBranchComponent_div_30_Template, 4, 4, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, AddBranchComponent_div_31_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 7)(33, "div", 8)(34, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, AddBranchComponent_button_37_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, AddBranchComponent_div_38_Template, 3, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 7)(40, "div", 19)(41, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div")(44, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function AddBranchComponent_Template_input_keypress_44_listener($event) {
        return ctx.numberOnly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, AddBranchComponent_button_45_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, AddBranchComponent_div_46_Template, 3, 3, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 0)(48, "div", 22)(49, "h3", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " Branch Location ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, " Define Location by Search and select or set location on map");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "div", 25)(54, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 25)(56, "div", 8)(57, "input", 26, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function AddBranchComponent_Template_input_keydown_enter_57_listener($event) {
        return $event.preventDefault();
      })("ngModelChange", function AddBranchComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddBranchComponent_Template_button_click_59_listener() {
        return ctx.removeseacrch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, AddBranchComponent_div_62_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 1)(64, "agm-map", 30)(65, "agm-marker", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dragEnd", function AddBranchComponent_Template_agm_marker_dragEnd_65_listener($event) {
        return ctx.markerDragEnd($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "agm-info-window")(67, "div")(68, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " My Current Location ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 32)(72, "div", 16)(73, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "longitude ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, AddBranchComponent_div_76_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 32)(78, "div", 16)(79, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "latitude ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, AddBranchComponent_div_82_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 7)(84, "div", 16)(85, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Country ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 7)(89, "div", 16)(90, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, " City ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](92, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 7)(94, "div", 16)(95, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Area ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](97, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 3)(99, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100, "Working Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](102, AddBranchComponent_div_102_Template, 1, 0, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](103, AddBranchComponent_div_103_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](105, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 0)(107, "div", 7)(108, "div", 42)(109, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, " Days ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "div", 7)(112, "h6", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, " Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](114, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](115, AddBranchComponent_div_115_Template, 20, 4, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 3)(117, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "Branch Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](120, AddBranchComponent_div_120_Template, 1, 0, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](121, AddBranchComponent_div_121_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "div", 0)(123, "div", 7)(124, "div", 16)(125, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "Branch Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](127, "ng-select", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](128, AddBranchComponent_div_128_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](130, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](132, AddBranchComponent_div_132_Template, 3, 1, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](134, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "div", 51)(136, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](138, AddBranchComponent_button_138_Template, 2, 0, "button", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](139, AddBranchComponent_button_139_Template, 2, 0, "button", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](140, AddBranchComponent_button_140_Template, 2, 0, "button", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.branchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowBranchInfo && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.branchForm.get("branchName").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["branchName"].invalid || ctx.formValid["branchName"].invalid && (ctx.formValid["branchName"].dirty || ctx.formValid["branchName"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.isStatus)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](42, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.branchTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["branchTypes"].invalid || ctx.formValid["branchTypes"].invalid && (ctx.formValid["branchTypes"].dirty || ctx.formValid["branchTypes"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.branchForm.get("email").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formValid["email"].dirty || ctx.formValid["email"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("overflow-hidden", !ctx.isShowBranchInfo && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ng2TelInputOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](44, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](43, _c2)));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.branchForm.get("phone").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formValid["phone"].invalid && (ctx.formValid["phone"].dirty || ctx.formValid["phone"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchText)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](46, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", (ctx.searchText == null ? null : ctx.searchText.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["country"].invalid || ctx.formValid["country"].invalid && (ctx.formValid["country"].dirty || ctx.formValid["country"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("disableDefaultUI", true)("zoomControl", true)("fullscreenControl", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("markerDraggable", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formValid["longitude"].invalid && (ctx.formValid["longitude"].dirty || ctx.formValid["longitude"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formValid["latitude"].invalid && (ctx.formValid["latitude"].dirty || ctx.formValid["latitude"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowWorkingHours && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.branchWorkingHours.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowBranchAdmin && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.branchAdmin);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formValid["adminUser"].invalid && (ctx.formValid["adminUser"].dirty || ctx.formValid["adminUser"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ng2_tel_input__WEBPACK_IMPORTED_MODULE_5__.Ng2TelInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _agm_core__WEBPACK_IMPORTED_MODULE_10__.AgmInfoWindow, _agm_core__WEBPACK_IMPORTED_MODULE_10__.AgmMap, _agm_core__WEBPACK_IMPORTED_MODULE_10__.AgmMarker, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_6__.CharacterDirective],
  styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.day-active[_ngcontent-%COMP%] {\n  max-width: 70%;\n  margin: 0px auto;\n  margin-top: 10px;\n}\n.day-active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #dfdfdf;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n[_ngcontent-%COMP%]::-moz-input-placeholder {\n  color: #dfdfdf;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n[_ngcontent-%COMP%]:-moz-input-placeholder {\n  color: #dfdfdf;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  padding: 10px;\n  color: #dfdfdf;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.overlay-bi[_ngcontent-%COMP%], .overlay-wh[_ngcontent-%COMP%], .overlay-ba[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n\n.ovral[_ngcontent-%COMP%] {\n  overflow: initial !important;\n}\n\n.whour[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  float: initial;\n  margin-left: 10px;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 37px;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vYnJhbmNoZXMvYWRkLWJyYW5jaC9hZGQtYnJhbmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQURFO0VBQ0UsZUFBQTtBQUdKOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTs7O0VBR0Usa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQTtFQUNFLDRCQUFBO0FBSUY7O0FBREU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSUYiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbi5kYXktYWN0aXZlIHtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNkZmRmZGY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuOjotbW96LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNkZmRmZGY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuOi1tb3otaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2RmZGZkZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNkZmRmZGY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5vdmVybGF5LWJpLFxuLm92ZXJsYXktd2gsXG4ub3ZlcmxheS1iYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSAxOTkgMTk5IC8gMjElKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTtcbn1cbi5vdnJhbCB7XG4gIG92ZXJmbG93OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG4ud2hvdXIge1xuICAuZm9ybS1jaGVjayAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgZmxvYXQ6IGluaXRpYWw7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbi5idG4tcmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDM3cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 28448:
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/branches/branches-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchesRoutingModule": () => (/* binding */ BranchesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_branch_add_branch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-branch/add-branch.component */ 61159);
/* harmony import */ var _branches_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branches.component */ 24877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _branches_component__WEBPACK_IMPORTED_MODULE_1__.BranchesComponent,
  children: []
}, {
  path: 'addbranch',
  component: _add_branch_add_branch_component__WEBPACK_IMPORTED_MODULE_0__.AddBranchComponent
}, {
  path: 'viewbranch/:id',
  component: _add_branch_add_branch_component__WEBPACK_IMPORTED_MODULE_0__.AddBranchComponent
}];
class BranchesRoutingModule {}
BranchesRoutingModule.ɵfac = function BranchesRoutingModule_Factory(t) {
  return new (t || BranchesRoutingModule)();
};
BranchesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: BranchesRoutingModule
});
BranchesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BranchesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 24877:
/*!************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/branches/branches.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchesComponent": () => (/* binding */ BranchesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/branch.service */ 90350);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/not-found/not-found.component */ 59442);










function BranchesComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchesComponent_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.chooseBranch(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", item_r5.id == ctx_r0.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r5.name[0].lookupName, "");
  }
}
function BranchesComponent_div_21_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 38)(12, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchesComponent_div_21_tr_30_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.Viewbranch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " View details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", item_r12.city, " , ", item_r12.branchArea, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r12.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r12.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r12.status == "2001");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/branches/viewbranch/", item_r12.branchId, "");
  }
}
function BranchesComponent_div_21_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BranchesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "div", 26)(2, "div", 27)(3, "table", 28)(4, "thead")(5, "tr")(6, "th", 29)(7, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchesComponent_div_21_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.sortByBranchName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 31)(10, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 29)(12, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchesComponent_div_21_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.sortByLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 31)(15, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 29)(17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 29)(20, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 29)(23, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Activation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 29)(26, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, BranchesComponent_div_21_tr_30_Template, 16, 7, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, BranchesComponent_div_21_div_31_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const branches_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (branches_r9 == null ? null : branches_r9.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.typeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (branches_r9 == null ? null : branches_r9.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", branches_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (branches_r9 == null ? null : branches_r9.length) == 0);
  }
}
function BranchesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
function BranchesComponent_li_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchesComponent_li_36_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const page_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.setPage(page_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r18 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r4.pageNo === page_r18))("disabled", ctx_r4.pageNo === page_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", page_r18 + 1, " ");
  }
}
class BranchesComponent {
  constructor(branchService, router, headerService) {
    this.branchService = branchService;
    this.router = router;
    this.headerService = headerService;
    this.searchText = '';
    this.sort = 1;
    this.branchTypes = [];
    this.branchId = 3001;
    this.typeName = 'Showroom Branches';
    this.pageNo = 0;
    this.titleOfPage = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    this.headerService.setTitle('Branches');
    this.getBranches();
    this.getBranchTypes();
  }
  addbranch() {
    this.router.navigateByUrl('/branches/addbranch');
    this.headerService.setTitle('Branches > Add branch');
    // this.titleOfPage.emit('Branches > Add branch');
  }

  Viewbranch() {
    // this.router.navigateByUrl('/addbranch');
    this.headerService.setTitle('Branches > View branch');
    // this.titleOfPage.emit('Branches > Add branch');
    // view-branch/{{item.branchId}}
  }

  chooseBranch(item) {
    this.branchId = item.id;
    this.typeName = item.name[0].lookupName;
    this.pageNo = 0;
    this.searchText = '';
    this.getBranches();
  }
  getBranches() {
    return this.branchService.getBranches(this.searchText, this.branchId, this.sort, this.pageNo).subscribe(response => {
      if (response) {
        this.branches = response.data;
        this.totalAllRecordsCount = response.info?.totalAllRecordsCount;
        this.totalRecordsCount = response.info?.totalRecordsCount;
        this.totalRecords = response.info?.totalRecordsCount;
        this.pagin = Math.ceil(this.totalRecords / 6);
        this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
        console.log(this.pagin);
        console.log(this.pages);
      }
    });
  }
  searchRoles(event) {
    console.log(event?.target.value);
    const text = event.target.value;
    console.log(text.length);
    if (text.length >= 3) {
      this.searchText = text;
      this.pageNo = 0;
      this.getBranches();
    }
    if (text.length == 0) {
      this.getBranches();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.sort = 1;
    this.getBranches();
  }
  sortByBranchName() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getBranches();
  }
  sortByLocation() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getBranches();
  }
  sortByActivation() {
    this.sort = this.sort == 6 ? 7 : 6;
    this.getBranches();
  }
  setPage(page) {
    this.pageNo = page;
    this.getBranches();
    window.scroll(0, 0);
  }
  getBranchTypes() {
    this.branchService.getLookupsById(3).subscribe(response => {
      this.branchTypes = response.data;
    }, error => {
      this.errorMessage = error.message;
    });
  }
}
BranchesComponent.ɵfac = function BranchesComponent_Factory(t) {
  return new (t || BranchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__.BranchService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService));
};
BranchesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: BranchesComponent,
  selectors: [["app-branches"]],
  outputs: {
    titleOfPage: "titleOfPage"
  },
  decls: 37,
  vars: 12,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-9"], [1, "branchesTypes"], ["class", "btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "branch-total"], [1, "col-md-5"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "col-md-2"], [1, "col-md-5", "d-flex", "justify-content-end", "btnadd"], [1, "btn", "btn-add", 3, "click"], ["src", "assets/images/plus.png", "alt", ""], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "btn", 3, "click"], [1, "card-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["scope", "row"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", "readonly", "", "disabled", "", 1, "form-check-input", 3, "checked"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], [1, "btn", "btn-view", 3, "routerLink", "click"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function BranchesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BranchesComponent_button_4_Template, 2, 3, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchesComponent_Template_button_click_10_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function BranchesComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function BranchesComponent_Template_input_keyup_12_listener($event) {
        return ctx.searchRoles($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchesComponent_Template_button_click_13_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 15)(17, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchesComponent_Template_button_click_17_listener() {
        return ctx.addbranch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Add Branch ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, BranchesComponent_div_21_Template, 32, 13, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, BranchesComponent_ng_template_23_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 21)(26, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 21)(35, "ul", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, BranchesComponent_li_36_Template, 3, 5, "li", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.branchTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Branches Total No. ", ctx.totalAllRecordsCount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.branches)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", (ctx.branches == null ? null : ctx.branches.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.branches == null ? null : ctx.branches.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.totalRecordsCount < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.pages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent],
  styles: [".branchesTypes[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.branchesTypes[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  border: 0px;\n  padding: 10px 15px;\n  color: #929eae;\n  border-radius: 0px;\n  margin: 0px;\n  border-bottom: 2px solid #f5f5f5;\n}\n.branchesTypes[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  color: #000;\n  border-bottom: 2px solid #dc3545;\n}\n\n.branch-total[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #78778b;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vYnJhbmNoZXMvYnJhbmNoZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJhbmNoZXNUeXBlcyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8vIG92ZXJmbG93OiBzY3JvbGw7XG4gIC5idG4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBjb2xvcjogIzkyOWVhZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNWY1ZjU7XG4gIH1cbiAgLmJ0bi5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGMzNTQ1O1xuICB9XG59XG4uYnJhbmNoLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzc4Nzc4YjtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 74256:
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/branches/branches.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchesModule": () => (/* binding */ BranchesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _branches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branches-routing.module */ 28448);
/* harmony import */ var _branches_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branches.component */ 24877);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _add_branch_add_branch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-branch/add-branch.component */ 61159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);






class BranchesModule {}
BranchesModule.ɵfac = function BranchesModule_Factory(t) {
  return new (t || BranchesModule)();
};
BranchesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: BranchesModule
});
BranchesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _branches_routing_module__WEBPACK_IMPORTED_MODULE_0__.BranchesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BranchesModule, {
    declarations: [_branches_component__WEBPACK_IMPORTED_MODULE_1__.BranchesComponent, _add_branch_add_branch_component__WEBPACK_IMPORTED_MODULE_3__.AddBranchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _branches_routing_module__WEBPACK_IMPORTED_MODULE_0__.BranchesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 90350:
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/branches/services/branch.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchService": () => (/* binding */ BranchService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class BranchService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    // apiUrl: string =
    //   'https://markazia-pos.azurewebsites.net/POSAPI/api/Branches/GetBranches';
    // url = 'https://markazia-pos.azurewebsites.net/POSAPI/api/Branches/AddBranch';
    this.apiUrl = this.sharedService.getUrl;
  }
  getBranches(searchText, branchId, sort, pageNo) {
    return this.http.get(this.apiUrl + `Branches/GetBranches?Search=${searchText}&BranchTypeId=${branchId}&Sort=${sort}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  addBranch(branch) {
    return this.http.post(this.apiUrl + 'Branches/AddBranch', branch, this.sharedService.getHeaders());
  }
  updateBranch(branch) {
    return this.http.post(this.apiUrl + 'Branches/UpdateBranch', branch, this.sharedService.getHeaders());
  }
  getBranchDetails(id) {
    return this.http.get(this.apiUrl + `Branches/GetBranchDetails?branchId=${id}`, this.sharedService.getHeaders());
  }
  getUsers() {
    return this.http.get(this.apiUrl + 'User/GetUsers?sort=2&Status=2001&&Invitation=2004PageSize=100', this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + 'Lookups/GetLookups?lookupTypeId=' + id, this.sharedService.getHeaders());
  }
  getAddressBylangLat(lat, lang) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lang}&key=AIzaSyAAQ7GPIxJs5PTBccmO9OZwBUy464p59bY`);
  }
}
BranchService.ɵfac = function BranchService_Factory(t) {
  return new (t || BranchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
BranchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BranchService,
  factory: BranchService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_admin_branches_branches_module_ts.js.map