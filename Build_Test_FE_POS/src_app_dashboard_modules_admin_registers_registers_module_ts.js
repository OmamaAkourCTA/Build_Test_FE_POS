"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_admin_registers_registers_module_ts"],{

/***/ 45736:
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/registers/add-register-and-setup/add-register-and-setup.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRegisterAndSetupComponent": () => (/* binding */ AddRegisterAndSetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _reg_confirm_reg_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reg-confirm/reg-confirm.component */ 47758);
/* harmony import */ var _reg_done_reg_done_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reg-done/reg-done.component */ 43362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _register_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register-setup.service */ 30624);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/directive/character.directive */ 80145);













function AddRegisterAndSetupComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 73);
  }
}
function AddRegisterAndSetupComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.removeregistersName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRegisterAndSetupComponent_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span");
  }
}
function AddRegisterAndSetupComponent_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRegisterAndSetupComponent_div_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Register name length must be between 6 and 30 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRegisterAndSetupComponent_div_16_span_1_Template, 1, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRegisterAndSetupComponent_div_16_span_2_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRegisterAndSetupComponent_div_16_span_3_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.formValid["registersName"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.formValid["registersName"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.formValid["registersName"].errors["minlength"]);
  }
}
function AddRegisterAndSetupComponent_div_23_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 83);
  }
}
function AddRegisterAndSetupComponent_div_23_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 84);
  }
}
function AddRegisterAndSetupComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_div_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r44.editRegisterInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRegisterAndSetupComponent_div_23_img_2_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRegisterAndSetupComponent_div_23_img_3_Template, 1, 0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.registerForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isShowRegisterInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.isShowRegisterInfo);
  }
}
function AddRegisterAndSetupComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 73);
  }
}
function AddRegisterAndSetupComponent_div_29_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 83);
  }
}
function AddRegisterAndSetupComponent_div_29_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 84);
  }
}
function AddRegisterAndSetupComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_div_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r48.editBranchLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRegisterAndSetupComponent_div_29_img_2_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRegisterAndSetupComponent_div_29_img_3_Template, 1, 0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r5.registerForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.isBranchLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.isBranchLocation);
  }
}
function AddRegisterAndSetupComponent_div_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRegisterAndSetupComponent_div_36_span_1_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.formValid["city"].errors);
  }
}
function AddRegisterAndSetupComponent_div_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRegisterAndSetupComponent_div_42_span_1_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.formValid["branchId"].errors);
  }
}
function AddRegisterAndSetupComponent_div_49_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRegisterAndSetupComponent_div_49_span_1_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.formValid["ipAddresses"].errors);
  }
}
function AddRegisterAndSetupComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 73);
  }
}
function AddRegisterAndSetupComponent_div_55_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 83);
  }
}
function AddRegisterAndSetupComponent_div_55_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 84);
  }
}
function AddRegisterAndSetupComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_div_55_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r55.editCollectionOrders());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRegisterAndSetupComponent_div_55_img_2_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRegisterAndSetupComponent_div_55_img_3_Template, 1, 0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r10.registerForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.isCollectionOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r10.isCollectionOrders);
  }
}
function AddRegisterAndSetupComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRegisterAndSetupComponent_div_59_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59);
      const item_r57 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r58.selectOrderCollection(item_r57.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r57 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", item_r57.id)("checked", ctx_r11.collectionOrdersAry.includes(item_r57.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", item_r57.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r57.name[0].lookupName);
  }
}
function AddRegisterAndSetupComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span")(2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Please select at least one order.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function AddRegisterAndSetupComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please select one ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 73);
  }
}
function AddRegisterAndSetupComponent_div_81_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 83);
  }
}
function AddRegisterAndSetupComponent_div_81_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 84);
  }
}
function AddRegisterAndSetupComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_div_81_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r62.editEmployees());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRegisterAndSetupComponent_div_81_img_2_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRegisterAndSetupComponent_div_81_img_3_Template, 1, 0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r15.registerForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r15.isEmployees);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r15.isEmployees);
  }
}
function AddRegisterAndSetupComponent_div_91_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Register Cashier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_91_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please select this role. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_91_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ng-select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRegisterAndSetupComponent_div_91_div_4_Template_ng_select_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73);
      const employeeIndex_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r71.getUsersByRole($event, employeeIndex_r65));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRegisterAndSetupComponent_div_91_div_4_div_2_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r67.userRoles);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r67.submitted && (employee_r64 == null ? null : employee_r64.value == null ? null : employee_r64.value.roleId) == null);
  }
}
function AddRegisterAndSetupComponent_div_91_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please select this user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_91_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_div_91_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r77);
      const employeeIndex_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r75.deleteEmployee(employeeIndex_r65));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRegisterAndSetupComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 87)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRegisterAndSetupComponent_div_91_div_3_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddRegisterAndSetupComponent_div_91_div_4_Template, 3, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 6)(6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ng-select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddRegisterAndSetupComponent_div_91_div_8_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 89)(10, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddRegisterAndSetupComponent_div_91_button_11_Template, 2, 0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const employee_r64 = ctx.$implicit;
    const employeeIndex_r65 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", employeeIndex_r65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employeeIndex_r65 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employeeIndex_r65 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r16.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.submitted && (employee_r64 == null ? null : employee_r64.value == null ? null : employee_r64.value.userId) == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", employeeIndex_r65 != 0);
  }
}
function AddRegisterAndSetupComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 73);
  }
}
function AddRegisterAndSetupComponent_div_100_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 83);
  }
}
function AddRegisterAndSetupComponent_div_100_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 84);
  }
}
function AddRegisterAndSetupComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_div_100_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r80.editSetup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRegisterAndSetupComponent_div_100_img_2_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRegisterAndSetupComponent_div_100_img_3_Template, 1, 0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r18.registerForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.isSetup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r18.isSetup);
  }
}
function AddRegisterAndSetupComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_111_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRegisterAndSetupComponent_div_111_span_1_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.formValid["registerCurrencies"].errors);
  }
}
function AddRegisterAndSetupComponent_div_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please select at least one mathod from above");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " seesion/week must less than session/Day of complete week ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_158_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRegisterAndSetupComponent_div_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRegisterAndSetupComponent_div_158_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r23.formValid["numberOfSessionsPerDay"].errors["required"]);
  }
}
function AddRegisterAndSetupComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " seesion/week must less than session/Day of complete week ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_165_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This element is required, please fill. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRegisterAndSetupComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRegisterAndSetupComponent_div_165_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r25.formValid["numberOfSessionsPerWeek"].errors["required"]);
  }
}
function AddRegisterAndSetupComponent_div_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " From time shoud less than To time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " To time should greater than From time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_201_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " No of Opening/Day must less than No of Opening/week of complete week ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_202_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRegisterAndSetupComponent_div_202_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRegisterAndSetupComponent_div_202_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.formValid["numberOfOpeningWithoutSettlementPerDay"].errors["required"]);
  }
}
function AddRegisterAndSetupComponent_div_208_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " No of Opening/Day must less than No of Opening/week of complete week ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_209_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRegisterAndSetupComponent_div_209_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRegisterAndSetupComponent_div_209_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r31.formValid["numberOfOpeningWithoutSettlementPerWeek"].errors["required"]);
  }
}
function AddRegisterAndSetupComponent_div_216_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r87.id)("id", item_r87.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", item_r87.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r87.name);
  }
}
function AddRegisterAndSetupComponent_div_217_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " This feild is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRegisterAndSetupComponent_div_220_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r89.errorMessageEn || item_r89.ErrorMessageEn, " ");
  }
}
function AddRegisterAndSetupComponent_div_220_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 97)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRegisterAndSetupComponent_div_220_li_2_Template, 2, 1, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r34.errorsList);
  }
}
function AddRegisterAndSetupComponent_button_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", !ctx_r35.isEdit ? "Add" : "Save", " ");
  }
}
function AddRegisterAndSetupComponent_button_226_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class AddRegisterAndSetupComponent {
  constructor(registerSetupService, router, modalService, toster, route, headerService, fb) {
    this.registerSetupService = registerSetupService;
    this.router = router;
    this.modalService = modalService;
    this.toster = toster;
    this.route = route;
    this.headerService = headerService;
    this.fb = fb;
    this.isEdit = false;
    this.submitted = false;
    this.cities = [];
    this.branches = [];
    this.collectionOrders = [];
    this.collectionOrdersAry = [];
    this.currencies = [];
    this.deposites = [];
    this.users = [];
    this.userRoles = [];
    this.isStatus = true;
    this.userRoleId = 1;
    this.ipAdres = [];
    this.isShowRegisterInfo = false;
    this.isBranchLocation = false;
    this.isCollectionOrders = false;
    this.isEmployees = false;
    this.isSetup = false;
  }
  ngOnInit() {
    this.getDefaultPermissions();
    this.getForm();
    this.getCollectionOrders();
    this.getCities();
    this.getBranches();
    this.getCurrencies();
    this.getDeposites();
    this.getUsers();
    this.getRoles();
    this.registerId = this.route.snapshot.params['id'];
    if (this.registerId) {
      this.isEdit = true;
      if (this.isEdit = true) {
        this.headerService.setTitle('Registers > View register');
      }
      this.GetRegisterDetails();
      // this.getRoleDetails();
    } else {
      this.headerService.setTitle('Registers > Add register');
    }
  }
  cardChange(val) {
    if (val.target.checked) {
      this.registerForm.controls['visa'].enable();
      this.registerForm.controls['mastercard'].enable();
      this.registerForm.controls['americanExpress'].enable();
    } else {
      this.registerForm.controls['visa'].disable();
      this.registerForm.controls['mastercard'].disable();
      this.registerForm.controls['americanExpress'].disable();
      this.registerForm.controls['visa'].patchValue(false);
      this.registerForm.controls['mastercard'].patchValue(false);
      this.registerForm.controls['americanExpress'].patchValue(false);
    }
    this.changeSession();
  }
  changeSession() {
    if (this.registerForm.value.cash || this.registerForm.value.cards || this.registerForm.value.onAccount) {
      this.registerForm.controls['numberOfSessionsPerDay'].enable();
      this.registerForm.controls['numberOfSessionsPerWeek'].enable();
      this.registerForm.controls['allowOpenWithoutSettlement'].enable();
      // this.registerForm.controls['cashDepositTypeId'].enable();
      this.registerForm.controls['allowedSessionTimeFrom'].enable();
      this.registerForm.controls['allowedSessionTimeTo'].enable();
    } else {
      this.registerForm.controls['numberOfSessionsPerDay'].disable();
      this.registerForm.controls['numberOfSessionsPerWeek'].disable();
      this.registerForm.controls['allowOpenWithoutSettlement'].disable();
      // this.registerForm.controls['cashDepositTypeId'].disable();
      this.registerForm.controls['allowedSessionTimeFrom'].disable();
      this.registerForm.controls['allowedSessionTimeTo'].disable();
      this.registerForm.controls['numberOfSessionsPerDay'].patchValue(null);
      this.registerForm.controls['numberOfSessionsPerWeek'].patchValue(null);
      this.registerForm.controls['allowOpenWithoutSettlement'].patchValue(false);
      // this.registerForm.controls['cashDepositTypeId'].patchValue(null);
      this.registerForm.controls['allowedSessionTimeFrom'].patchValue(null);
      this.registerForm.controls['allowedSessionTimeTo'].patchValue(null);
    }
  }
  cashChange(val) {
    if (val.target.checked) {
      this.registerForm.controls['registerCurrencies'].enable();
    } else {
      this.registerForm.controls['registerCurrencies'].disable();
      this.registerForm.controls['registerCurrencies'].patchValue(null);
    }
    this.changeSession();
  }
  changeSettlement(val) {
    if (val.target.checked) {
      this.registerForm.controls['numberOfOpeningWithoutSettlementPerDay'].enable();
      this.registerForm.controls['numberOfOpeningWithoutSettlementPerWeek'].enable();
    } else {
      this.registerForm.controls['numberOfOpeningWithoutSettlementPerDay'].disable();
      this.registerForm.controls['numberOfOpeningWithoutSettlementPerWeek'].disable();
      this.registerForm.controls['numberOfOpeningWithoutSettlementPerDay'].patchValue(null);
      this.registerForm.controls['numberOfOpeningWithoutSettlementPerWeek'].patchValue(null);
    }
  }
  onAccChange(val) {
    if (val.target.checked) {
      this.registerForm.controls['cheque'].enable();
      this.registerForm.controls['onCustomerAccount'].enable();
      // this.registerForm.controls['otherRev'].enable();
    } else {
      this.registerForm.controls['cheque'].disable();
      this.registerForm.controls['onCustomerAccount'].disable();
      // this.registerForm.controls['otherRev'].disable();
      this.registerForm.controls['cheque'].patchValue(false);
      this.registerForm.controls['onCustomerAccount'].patchValue(false);
      // this.registerForm.controls['otherRev'].patchValue(false);
    }

    this.changeSession();
  }
  removeregistersName() {
    this.registerForm.get('registersName')?.patchValue('');
  }
  get f() {
    return this.registerForm.controls;
  }
  getForm() {
    this.registerForm = this.fb.group({
      id: [''],
      registersName: [''],
      cash: false,
      onAccount: false,
      cheque: [{
        value: false,
        disabled: true
      }],
      onCustomerAccount: [{
        value: false,
        disabled: true
      }],
      cards: [false],
      visa: [{
        value: false,
        disabled: true
      }],
      mastercard: [{
        value: false,
        disabled: true
      }],
      americanExpress: [{
        value: false,
        disabled: true
      }],
      // otherRev: [{ value: false, disabled: true }],
      collectForAllBranches: false,
      collectForOwnBranch: false,
      registerCurrencies: [{
        value: [],
        disabled: true
      }],
      city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      branchId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      allowedSessionTimeFrom: [{
        value: '',
        disabled: true
      }],
      allowedSessionTimeTo: [{
        value: '',
        disabled: true
      }],
      cashDepositTypeId: [null],
      registerEmployees: this.fb.array([]),
      allowOpenWithoutSettlement: [{
        value: false,
        disabled: true
      }],
      collectionOrders: [null],
      numberOfSessionsPerDay: [{
        value: 0,
        disabled: true
      }],
      numberOfSessionsPerWeek: [{
        value: 0,
        disabled: true
      }],
      numberOfOpeningWithoutSettlementPerDay: [{
        value: 0,
        disabled: true
      }],
      numberOfOpeningWithoutSettlementPerWeek: [{
        value: 0,
        disabled: true
      }],
      ipAddresses: '',
      status: 2001
    });
  }
  // , userList = ''
  newEmployee(roleId = null, userId = null) {
    return this.fb.group({
      roleId: [roleId, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      userId: [userId, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
      // userList: ['', [Validators.required]],
    });
  }
  // , userList = ''
  addNewEmployee(roleId = null, userId = null) {
    // userList
    this.employees().push(this.newEmployee(roleId, userId));
  }
  employees() {
    return this.registerForm.get('registerEmployees');
  }
  deleteEmployee(employeeIndex) {
    this.employees().removeAt(employeeIndex);
  }
  getBranches() {
    this.registerSetupService.getBranches({
      Status: 2001,
      sort: 2,
      PageSize: 1000
    }).subscribe(response => {
      this.branches = response.data;
    });
  }
  changeBranch(val) {
    //console.log(val);
    this.registerForm.get('city')?.patchValue(val.city);
    this.registerForm.get('branchId')?.patchValue(val.branchId);
    this.registerSetupService.getBranchDetails(val.branchId).subscribe(response => {
      this.branchInfo = response.data;
      this.registerForm.controls['allowedSessionTimeFrom'].patchValue(this.branchInfo.branchWorkingHours[0].fromTime);
      this.registerForm.controls['allowedSessionTimeTo'].patchValue(this.branchInfo.branchWorkingHours[0].toTime);
      //console.log('branch Info', this.branchInfo);
    });
    //console.log(val.branchId);
  }

  clearBranch() {}
  changeCity(val) {
    this.getBranchesByCity(val);
    this.registerForm.get('branchId')?.patchValue(null);
  }
  getBranchesByCity(city) {
    this.registerSetupService.getBranches({
      Status: 2001,
      sort: 2,
      Search: city || '',
      PageSize: 1000
    }).subscribe(response => {
      // this.registerForm.get('branchId')?.patchValue('');
      this.branches = response.data;
    });
  }
  branchSelect(item) {
    //console.log(item);
  }
  selectOrderCollection(item) {
    //console.log(item);
    if (this.collectionOrdersAry.includes(item)) {
      this.collectionOrdersAry.splice(this.collectionOrdersAry.indexOf(item), 1);
    } else {
      this.collectionOrdersAry.push(item);
    }
    console.log(this.collectionOrdersAry);
  }
  get rolePermissions() {
    return this.registerForm.controls['rolePermissions'];
  }
  get formValid() {
    return this.registerForm.controls;
  }
  getCurrencies() {
    this.registerSetupService.getLookupsById(9).subscribe(response => {
      this.currencies = response.data.map(x => ({
        currencyId: x.id,
        name: x.name[0].lookupName
      }));
    });
  }
  getDeposites() {
    this.registerSetupService.getLookupsById(8).subscribe(response => {
      this.deposites = response.data.map(x => ({
        id: x.id,
        name: x.name[0].lookupName
      }));
    });
  }
  getCollectionOrders() {
    this.registerSetupService.getLookupsById(7).subscribe(response => {
      this.collectionOrders = response.data;
    });
  }
  getCities() {
    this.registerSetupService.getLocations().subscribe(response => {
      this.cities = response.data;
      //console.log('cities', response.data);
    });
  }

  getUsers() {
    this.registerSetupService.getUsers(this.userRoleId).subscribe(response => {
      this.users = response.data;
      // this.employees().controls[0]?.get('userList').patchValue(this.users);
      // console.log(this.employees().controls);
      // console.log(this.registerForm.value);
      //console.log('users', response.data);
    });
  }

  getUsersall() {
    this.registerSetupService.getUsersall().subscribe(response => {
      this.usersall = response.data;
    });
  }
  getRoles() {
    this.registerSetupService.getRoles().subscribe(response => {
      this.userRoles = response.data;
      if (this.isEdit == false) {
        // console.log(this.isEdit);
        this.addNewEmployee(1, null);
      }
    });
  }
  getUsersByRole(event, employeeIndex) {
    this.registerSetupService.getUsers(event.roleId).subscribe(response => {
      this.users = response.data;
      // this.employees()
      //   .controls[employeeIndex].get('userList')
      //   .patchValue(this.users);
      //console.log('users', response.data);
    });
  }

  AddRolePermissions() {
    return this.fb.group({
      permissionItemId: 0,
      permissionItemDetailId: 0
    });
  }
  getDefaultPermissions() {
    return this.registerSetupService.getDefaultPermissions().subscribe(response => {
      if (response) {
        this.roles = response.data;
      }
    });
  }
  getRoleDetails() {
    return this.registerSetupService.GetRoleDetails(this.roleId).subscribe(response => {
      if (response) {
        this.roles = response.data;
      }
    });
  }
  onSubmit() {
    this.registerForm.controls['collectionOrders'].patchValue(this.collectionOrdersAry.map(x => ({
      orderId: x
    })));
    console.log(this.registerForm.value);
    // this.registerForm
    //   .get('ipAddresses')
    //   ?.patchValue([this.registerForm.get('ipAddresses')?.value]);
    // if (this.registerForm.get('ipAddresses')?.value) {
    //   this.registerForm
    //     .get('ipAddresses')
    //     ?.patchValue(this.registerForm.get('ipAddresses')?.value.split(' '));
    // }
    console.log(this.registerForm.value);
    // console.log(this.registerForm.getRawValue());
    if (this.registerForm.get('id')?.value == 0) {
      this.addRegister();
    } else {
      this.UpdateRegister();
    }
  }
  addRegister() {
    this.submitted = true;
    this.registerForm.get('registersName')?.patchValue(this.registerForm.get('registersName')?.value.trim());
    if (this.registerForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.registerForm.get('ipAddresses')?.patchValue(this.registerForm.get('ipAddresses')?.value.split(' '));
    this.registerForm.controls['registerCurrencies'].patchValue(this.registerForm.value?.registerCurrencies?.map(x => ({
      currencyId: x
    })));
    console.log(this.registerForm.value);
    console.log(this.registerForm.getRawValue());
    this.registerSetupService.addRegister(this.registerForm.getRawValue()).subscribe(response => {
      if (response.isSuccess == true) {
        console.log(response);
        const modalRef = this.modalService.open(_reg_done_reg_done_component__WEBPACK_IMPORTED_MODULE_1__.RegDoneComponent);
        modalRef.componentInstance.name = 'add';
        this.isLoading = false;
      } else {
        this.isLoading = false;
        console.log('response-error', response);
        this.registerForm.controls['registerCurrencies'].patchValue(this.registerForm.value?.registerCurrencies?.map(x => x.currencyId));
        this.registerForm.get('ipAddresses')?.patchValue(this.registerForm.get('ipAddresses')?.value[0]);
        this.errorsList = response.Errors || response.errors;
      }
    }, error => {
      this.isLoading = false;
      this.registerForm.controls['registerCurrencies'].setValue(this.registerForm.value?.registerCurrencies?.map(x => x.currencyId));
      this.registerForm.get('ipAddresses')?.patchValue(this.registerForm.get('ipAddresses')?.value[0]);
      console.log('error2', error);
      console.log('error', error.error.errors);
      this.errorsList = error.error.errors || error.error.Errors;
      console.log(error), this.errorMessage = error.statusText;
      // this.registerForm.controls['registerCurrencies'].patchValue(
      //   this.registerForm.value?.registerCurrencies?.map((x) => ({
      //     currencyId: x.id,
      //   }))
      // );
    });
  }

  UpdateRegister() {
    this.registerForm.controls['registerCurrencies'].patchValue(this.registerForm.value?.registerCurrencies?.map(x => ({
      currencyId: x
    })));
    this.registerForm.get('ipAddresses')?.patchValue(this.registerForm.get('ipAddresses')?.value.split(' '));
    console.log(this.registerForm.value);
    console.log(this.registerForm.getRawValue());
    this.isLoading = true;
    return this.registerSetupService.UpdateRegister(this.registerForm.getRawValue()).subscribe(response => {
      if (response.isSuccess == true) {
        console.log(response);
        const modalRef = this.modalService.open(_reg_done_reg_done_component__WEBPACK_IMPORTED_MODULE_1__.RegDoneComponent);
        modalRef.componentInstance.name = 'edit';
        this.collectionOrdersAry = [];
        this.GetRegisterDetails();
        this.isLoading = false;
        this.isShowRegisterInfo = false;
        this.isBranchLocation = false;
        this.isCollectionOrders = false;
        this.isEmployees = false;
        this.isSetup = false;
      } else {
        this.isLoading = false;
        this.registerForm.controls['registerCurrencies'].setValue(this.registerForm.value?.registerCurrencies?.map(x => x.currencyId));
        this.registerForm.get('ipAddresses')?.patchValue(this.registerForm.get('ipAddresses')?.value[0]);
        // this.errorsList = response.Errors || response.errors;
      }
    }, error => {
      this.isLoading = false;
      this.registerForm.controls['registerCurrencies'].setValue(this.registerForm.value?.registerCurrencies?.map(x => x.currencyId));
      this.registerForm.get('ipAddresses')?.patchValue(this.registerForm.get('ipAddresses')?.value[0]);
      console.log(error), this.errorMessage = error.statusText;
    });
  }
  removeBranchName() {
    this.registerForm.get('name')?.patchValue('');
  }
  chooseStatus(val) {
    //this.isStatus = this.isStatus == false ? true : false;
    //this.isStatus = ! this.isStatus
    if (val.target.checked) {
      this.registerForm.get('status')?.patchValue(2001);
    } else {
      this.registerForm.get('status')?.patchValue(2002);
    }
    //console.log(this.registerForm.value.status);
  }

  pushPermissionItemId(e, permissionSubCatId) {
    let isExist = this.registerForm.value.rolePermissions.findIndex(elem => elem.permissionItemId === e.target.value || elem.permissionItemId === Number(e.target.value));
    if (isExist !== -1) {
      //console.log('isExist', isExist);
      this.registerForm.get('rolePermissions').removeAt(isExist);
    } else {
      this.rolePermissions.push(this.fb.group({
        permissionItemId: Number(e.target.value),
        permissionItemDetailId: 0
      }));
    }
    //console.log(this.registerForm.value);
  }

  GetRegisterDetails() {
    return this.registerSetupService.GetRegisterDetails(this.registerId).subscribe(response => {
      if (response) {
        this.registers = response.data;
        this.registerForm.patchValue(response.data);
        if (this.registerForm.value.city) {
          this.getBranchesByCity(this.registerForm.value.city);
        }
        if (this.registerForm.get('status')?.value == 2001) {
          this.isStatus = true;
        } else {
          this.isStatus = false;
        }
        this.registers.collectionOrder.forEach(element => {
          this.collectionOrdersAry.push(element.order[0].lookupId);
        });
        // console.log(this.collectionOrdersAry);
        for (let r = this.employees().value.length - 1; r >= 0; r--) {
          this.employees().removeAt(r);
        }
        // this.userRoleId;
        this.getUsersall();
        this.registers.registerEmployees.forEach(element => {
          this.employees().push(this.fb.group({
            roleId: element.role.roleId,
            userId: element.user.userId
            // userList: this.usersall,
          }));
        });
        // this.employees().controls[0].get('userList').patchValue(this.users);
        // this.registers.registerCurrencies.forEach(element => {
        //   this.registerCurrencies.push(
        //     this.fb.group(element.lookupId)
        //   );
        // });
        if (this.registers.registerCurrencies.length != 0) {
          this.registerForm.controls['registerCurrencies'].enable();
          // this.registers.registerCurrencies
        }

        this.registerForm.controls['registerCurrencies'].patchValue(this.registers.registerCurrencies?.map(x => x.currency[0]?.lookupId));
        if (this.registerForm.get('onAccount')?.value == true) {
          this.registerForm.controls['cheque'].enable();
          this.registerForm.controls['onCustomerAccount'].enable();
          this.registerForm.controls['allowOpenWithoutSettlement'].enable();
          // this.registerForm.controls['otherRev'].enable();
        }

        if (this.registerForm.get('cards')?.value == true) {
          this.registerForm.controls['visa'].enable();
          this.registerForm.controls['mastercard'].enable();
          this.registerForm.controls['americanExpress'].enable();
          this.registerForm.controls['allowOpenWithoutSettlement'].enable();
        }
        if (this.registerForm.get('allowOpenWithoutSettlement')?.value == true) {
          this.registerForm.controls['allowOpenWithoutSettlement'].enable();
          this.registerForm.controls['numberOfOpeningWithoutSettlementPerDay'].enable();
          this.registerForm.controls['numberOfOpeningWithoutSettlementPerWeek'].enable();
        }
        // if (this.registerForm.get('cashDepositTypeId')?.value) {
        //   this.registerForm.controls['cashDepositTypeId'].enable();
        // }
        if (this.registerForm.get('cash')?.value == true || this.registerForm.get('onAccount')?.value == true || this.registerForm.get('cards')?.value == true) {
          this.registerForm.controls['numberOfSessionsPerDay'].enable();
          this.registerForm.controls['numberOfSessionsPerWeek'].enable();
          this.registerForm.controls['allowedSessionTimeFrom'].enable();
          this.registerForm.controls['allowedSessionTimeTo'].enable();
        }
        this.registerForm.get('ipAddresses')?.patchValue(this.registers?.registerIpAddresss[0]?.ipAddress);
        // this.registerForm.controls['registerCurrencies'].patchValue(
        //   this.registers.registerCurrencies?.map(
        //     (x) => "id":x.currency[0].lookupId
        //   )
        // );
        // console.log(this.registerForm.value);
      }
    });
  }

  editRegisterInfo() {
    // this.isShowBranchInfo = this.isShowBranchInfo == false ? true : false;
    if (this.isShowRegisterInfo == false) {
      this.isShowRegisterInfo = true;
      this.isBranchLocation = false;
      this.isCollectionOrders = false;
      this.isEmployees = false;
      this.isSetup = false;
    } else if (this.isShowRegisterInfo == true) {
      const modalRef = this.modalService.open(_reg_confirm_reg_confirm_component__WEBPACK_IMPORTED_MODULE_0__.RegConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowRegisterInfo = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowRegisterInfo = false;
        this.modalService.dismissAll();
      });
    }
  }
  editBranchLocation() {
    if (this.isBranchLocation == false) {
      this.isBranchLocation = true;
      this.isShowRegisterInfo = false;
      this.isCollectionOrders = false;
      this.isEmployees = false;
      this.isSetup = false;
    } else if (this.isBranchLocation == true) {
      const modalRef = this.modalService.open(_reg_confirm_reg_confirm_component__WEBPACK_IMPORTED_MODULE_0__.RegConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isBranchLocation = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isBranchLocation = false;
        this.modalService.dismissAll();
      });
    }
  }
  editCollectionOrders() {
    if (this.isCollectionOrders == false) {
      this.isCollectionOrders = true;
      this.isBranchLocation = false;
      this.isShowRegisterInfo = false;
      this.isEmployees = false;
      this.isSetup = false;
    } else if (this.isCollectionOrders == true) {
      const modalRef = this.modalService.open(_reg_confirm_reg_confirm_component__WEBPACK_IMPORTED_MODULE_0__.RegConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isCollectionOrders = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isCollectionOrders = false;
        this.modalService.dismissAll();
      });
    }
  }
  editEmployees() {
    if (this.isEmployees == false) {
      this.isEmployees = true;
      this.isCollectionOrders = false;
      this.isBranchLocation = false;
      this.isShowRegisterInfo = false;
      this.isSetup = false;
    } else if (this.isEmployees == true) {
      const modalRef = this.modalService.open(_reg_confirm_reg_confirm_component__WEBPACK_IMPORTED_MODULE_0__.RegConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isEmployees = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isEmployees = false;
        this.modalService.dismissAll();
      });
    }
  }
  editSetup() {
    if (this.isSetup == false) {
      this.isSetup = true;
      this.isEmployees = false;
      this.isCollectionOrders = false;
      this.isBranchLocation = false;
      this.isShowRegisterInfo = false;
    } else if (this.isSetup == true) {
      const modalRef = this.modalService.open(_reg_confirm_reg_confirm_component__WEBPACK_IMPORTED_MODULE_0__.RegConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isSetup = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isSetup = false;
        this.modalService.dismissAll();
      });
    }
  }
  chooseAllBranch() {
    this.registerForm.get('collectForAllBranches')?.patchValue(true);
    this.registerForm.get('collectForOwnBranch')?.patchValue(false);
  }
  chooseOwnBranch() {
    this.registerForm.get('collectForOwnBranch')?.patchValue(true);
    this.registerForm.get('collectForAllBranches')?.patchValue(false);
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
AddRegisterAndSetupComponent.ɵfac = function AddRegisterAndSetupComponent_Factory(t) {
  return new (t || AddRegisterAndSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_register_setup_service__WEBPACK_IMPORTED_MODULE_2__.RegisterSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
};
AddRegisterAndSetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddRegisterAndSetupComponent,
  selectors: [["app-add-register-and-setup"]],
  decls: 227,
  vars: 61,
  consts: [[1, "row"], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], [1, "page-title"], [1, "card-form", "position-relative"], ["class", "overlay-bi", 4, "ngIf"], [1, "col-md-4"], [1, "form-group", "overflow-hidden", "position-relative"], ["formControlName", "registersName", "name", "registersName", "type", "text", "placeholder", "Type name", "required", "", "minlength", "6", "maxlength", "30", "OnlyCharacter", "", "autocomplete", "off", 1, "form-control"], ["class", "btn btn-remove", 3, "click", 4, "ngIf"], ["class", "ng-dirty", 4, "ngIf"], [1, "col-md-8"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "form-check", "form-switch"], [1, "labelactive"], ["name", "isStatus", "type", "checkbox", "role", "switch", 1, "form-check-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["class", "edit-btn float-end", 4, "ngIf"], [1, "form-group"], ["name", "city", "id", "city", "placeholder", "Type City", "bindLabel", "city", "formControlName", "city", "required", "", 3, "searchable", "minTermLength", "items", "change"], ["name", "branch", "id", "branch", "placeholder", "Type Branch", "bindValue", "branchId", "bindLabel", "branchName", "required", "", "formControlName", "branchId", 3, "searchable", "minTermLength", "items", "change", "clear"], ["formControlName", "ipAddresses", "name", "ipAddresses", "type", "text", "required", "", "placeholder", "IP addresses", "required", "", 1, "form-control"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "form-check", "form-check-inline"], ["formControlName", "collectForAllBranches", "id", "collectForAllBranches", "type", "checkbox", 1, "form-check-input", 3, "click"], ["for", "collectForAllBranches", 1, "form-check-label"], ["formControlName", "collectForOwnBranch", "id", "collectForOwnBranch", "type", "checkbox", 1, "form-check-input", 3, "click"], ["for", "collectForOwnBranch", 1, "form-check-label"], [1, "col-md-2"], [1, "form-check-label", "fw-bold"], [1, "m-0", "mb-2"], ["formArrayName", "registerEmployees"], [4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-end"], [1, "btns-group"], ["type", "button", "value", "Add Employee", 1, "btn", "btn-add", 3, "click"], [1, "form-check"], ["formControlName", "cash", "id", "cash", "type", "checkbox", 1, "form-check-input", 3, "change"], ["for", "cash", 1, "form-check-label"], ["name", "Currency", "id", "Currency", "placeholder", "Select Currency", "bindLabel", "name", "bindValue", "currencyId", "formControlName", "registerCurrencies", 1, "multi", 3, "multiple", "searchable", "minTermLength", "items"], [4, "ngIf"], [1, "row", "mt-4"], ["formControlName", "onAccount", "id", "onA", "type", "checkbox", 1, "form-check-input", 3, "change"], ["for", "onA", 1, "form-check-label"], [1, "col-md-10"], ["formControlName", "cheque", "id", "cheque", "type", "checkbox", 1, "form-check-input"], ["for", "cheque", 1, "form-check-label"], ["formControlName", "onCustomerAccount", "id", "spare", "type", "checkbox", 1, "form-check-input"], ["for", "spare", 1, "form-check-label"], [1, "row", "my-2", "mb-4"], ["formControlName", "cards", "id", "cards", "type", "checkbox", 1, "form-check-input", 3, "change"], ["for", "cards", 1, "form-check-label"], ["formControlName", "visa", "id", "visa", "type", "checkbox", 1, "form-check-input"], ["for", "visa", 1, "form-check-label"], ["formControlName", "mastercard", "id", "masterC", "type", "checkbox", 1, "form-check-input"], ["for", "masterC", 1, "form-check-label"], ["formControlName", "americanExpress", "id", "American", "type", "checkbox", 1, "form-check-input"], ["for", "American", 1, "form-check-label"], ["for", "", 1, "fw-bold"], [1, "m-0", "mb-3"], [1, "col-md-3"], ["name", "branchName", "type", "number", "formControlName", "numberOfSessionsPerDay", "placeholder", "Number of Sessions", "minlength", "6", "maxlength", "30", "autocomplete", "off", 1, "form-control", 3, "keypress"], ["name", "branchName", "type", "number", "formControlName", "numberOfSessionsPerWeek", "placeholder", "Number of Sessions", "minlength", "6", "maxlength", "30", "autocomplete", "off", 1, "form-control", 3, "keypress"], ["name", "branchName", "formControlName", "allowedSessionTimeFrom", "type", "time", 1, "form-control"], ["name", "branchName", "formControlName", "allowedSessionTimeTo", "type", "time", 1, "form-control"], ["id", "settlement", "formControlName", "allowOpenWithoutSettlement", "type", "checkbox", 1, "form-check-input", 3, "change"], ["for", "settlement", 1, "form-check-label"], ["name", "branchName", "type", "text", "formControlName", "numberOfOpeningWithoutSettlementPerDay", "minlength", "6", "maxlength", "30", "autocomplete", "off", 1, "form-control", 3, "keypress"], ["name", "branchName", "type", "text", "formControlName", "numberOfOpeningWithoutSettlementPerWeek", "minlength", "6", "maxlength", "30", "autocomplete", "off", 1, "form-control", 3, "keypress"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["type", "button", 1, "btn", "btn-cancel"], ["type", "submit", "class", "btn btn-save", 4, "ngIf"], ["type", "button", "class", "btn btn-save btn-load", "disabled", "", 4, "ngIf"], [1, "overlay-bi"], [1, "btn", "btn-remove", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "ng-dirty"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "edit-btn", "float-end"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["src", "assets/images/save.png", "class", "save-img", "alt", "", 4, "ngIf"], ["src", "assets/images/edit.png", "alt", "", 4, "ngIf"], ["src", "assets/images/save.png", "alt", "", 1, "save-img"], ["src", "assets/images/edit.png", "alt", ""], ["type", "checkbox", 1, "form-check-input", 3, "id", "checked", "change"], [1, "form-check-label", 3, "for"], [1, "row", 3, "formGroupName"], ["name", "adminUser", "formControlName", "userId", "id", "userId", "placeholder", "Type name", "bindLabel", "fullName", "bindValue", "userId", "required", "", 3, "items"], [1, "col-md-1"], [1, "btns-group", "justify-content-start", "m-0", "mt-1"], ["class", "btn btn-add p-2", "style", "width: 40px;", 3, "click", 4, "ngIf"], [1, "form-check-label", "mt-2"], ["name", "role", "formControlName", "roleId", "placeholder", "Select Role", "bindLabel", "name", "bindValue", "roleId", "required", "", 3, "items", "change"], [1, "btn", "btn-add", "p-2", 2, "width", "40px", 3, "click"], [1, "fa", "fa-times"], ["formControlName", "cashDepositTypeId", "type", "radio", "required", "", 1, "form-check-input", 3, "value", "id"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-save"], ["type", "button", "disabled", "", 1, "btn", "btn-save", "btn-load"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function AddRegisterAndSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddRegisterAndSetupComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Register Information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddRegisterAndSetupComponent_div_8_Template, 1, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 0)(10, "div", 6)(11, "div", 7)(12, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Register Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AddRegisterAndSetupComponent_button_15_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddRegisterAndSetupComponent_div_16_Template, 4, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddRegisterAndSetupComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.isStatus = $event;
      })("change", function AddRegisterAndSetupComponent_Template_input_change_22_listener($event) {
        return ctx.chooseStatus($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AddRegisterAndSetupComponent_div_23_Template, 4, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 3)(25, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Branch & Location* ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddRegisterAndSetupComponent_div_28_Template, 1, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AddRegisterAndSetupComponent_div_29_Template, 4, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 0)(31, "div", 6)(32, "div", 17)(33, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Location \"City\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "ng-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRegisterAndSetupComponent_Template_ng_select_change_35_listener($event) {
        return ctx.changeCity($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, AddRegisterAndSetupComponent_div_36_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 6)(38, "div", 17)(39, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Branch ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ng-select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRegisterAndSetupComponent_Template_ng_select_change_41_listener($event) {
        return ctx.changeBranch($event);
      })("clear", function AddRegisterAndSetupComponent_Template_ng_select_clear_41_listener() {
        return ctx.clearBranch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, AddRegisterAndSetupComponent_div_42_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 6)(45, "div", 17)(46, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " IP addresses");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, AddRegisterAndSetupComponent_div_49_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 3)(51, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Collection Orders* ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, AddRegisterAndSetupComponent_div_54_Template, 1, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, AddRegisterAndSetupComponent_div_55_Template, 4, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 0)(57, "div", 1)(58, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, AddRegisterAndSetupComponent_div_59_Template, 4, 4, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, AddRegisterAndSetupComponent_div_60_Template, 4, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 22)(64, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Collect for * ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div")(67, "div", 23)(68, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_Template_input_click_68_listener() {
        return ctx.chooseAllBranch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " All Branches ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 23)(72, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_Template_input_click_72_listener() {
        return ctx.chooseOwnBranch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " Own Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, AddRegisterAndSetupComponent_div_75_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 3)(77, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " Employees *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, AddRegisterAndSetupComponent_div_80_Template, 1, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, AddRegisterAndSetupComponent_div_81_Template, 4, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 0)(83, "div", 28)(84, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Role Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 6)(87, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "hr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, AddRegisterAndSetupComponent_div_91_Template, 12, 6, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 33)(93, "div", 34)(94, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRegisterAndSetupComponent_Template_input_click_94_listener() {
        return ctx.addNewEmployee();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 3)(96, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, " Setup ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, AddRegisterAndSetupComponent_div_99_Template, 1, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, AddRegisterAndSetupComponent_div_100_Template, 4, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 0)(102, "div", 28)(103, "div", 36)(104, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRegisterAndSetupComponent_Template_input_change_104_listener($event) {
        return ctx.cashChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 6)(108, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "ng-select", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](110, AddRegisterAndSetupComponent_div_110_Template, 3, 0, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, AddRegisterAndSetupComponent_div_111_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 41)(113, "div", 28)(114, "div", 23)(115, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRegisterAndSetupComponent_Template_input_change_115_listener($event) {
        return ctx.onAccChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "On Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 44)(119, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](120, "input", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](124, "input", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "On Custumer Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "div", 49)(128, "div", 28)(129, "div", 23)(130, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRegisterAndSetupComponent_Template_input_change_130_listener($event) {
        return ctx.cardChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 44)(134, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](135, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Visa Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](139, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "label", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "Master Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](143, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "American Express");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](146, AddRegisterAndSetupComponent_div_146_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 0)(148, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "Register Session ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](150, "hr", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 0)(152, "div", 60)(153, "div", 7)(154, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "Number of Session Per Day");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AddRegisterAndSetupComponent_Template_input_keypress_156_listener($event) {
        return ctx.numberOnly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](157, AddRegisterAndSetupComponent_div_157_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](158, AddRegisterAndSetupComponent_div_158_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 60)(160, "div", 7)(161, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "Number of Session Per Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AddRegisterAndSetupComponent_Template_input_keypress_163_listener($event) {
        return ctx.numberOnly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](164, AddRegisterAndSetupComponent_div_164_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](165, AddRegisterAndSetupComponent_div_165_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "div", 0)(167, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, "Allowed Session Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "div", 0)(170, "div", 60)(171, "div", 7)(172, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](173, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](174, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](175, AddRegisterAndSetupComponent_div_175_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "div", 60)(177, "div", 7)(178, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](180, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](181, AddRegisterAndSetupComponent_div_181_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "div", 0)(183, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](184, "Opening without settlement");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](185, "hr", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "div", 0)(187, "div", 1)(188, "div", 23)(189, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRegisterAndSetupComponent_Template_input_change_189_listener($event) {
        return ctx.changeSettlement($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "label", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, "Allow open a new session without settlement.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "div", 41)(193, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](194, "No of Opening without settlement");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "div", 0)(196, "div", 60)(197, "div", 7)(198, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "Per Day");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "input", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AddRegisterAndSetupComponent_Template_input_keypress_200_listener($event) {
        return ctx.numberOnly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](201, AddRegisterAndSetupComponent_div_201_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](202, AddRegisterAndSetupComponent_div_202_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "div", 60)(204, "div", 7)(205, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](206, "Per Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AddRegisterAndSetupComponent_Template_input_keypress_207_listener($event) {
        return ctx.numberOnly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](208, AddRegisterAndSetupComponent_div_208_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](209, AddRegisterAndSetupComponent_div_209_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "div", 0)(211, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](212, "Cash Deposit*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](213, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "div", 0)(215, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](216, AddRegisterAndSetupComponent_div_216_Template, 4, 4, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](217, AddRegisterAndSetupComponent_div_217_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "div", 0)(219, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](220, AddRegisterAndSetupComponent_div_220_Template, 3, 1, "div", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](221, "div", 1)(222, "div", 34)(223, "button", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](224, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](225, AddRegisterAndSetupComponent_button_225_Template, 2, 1, "button", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](226, AddRegisterAndSetupComponent_button_226_Template, 2, 0, "button", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("overflow-hidden", !ctx.isShowRegisterInfo && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isShowRegisterInfo && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.registerForm.get("registersName").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["registersName"].invalid || ctx.formValid["registersName"].invalid && (ctx.formValid["registersName"].dirty || ctx.formValid["registersName"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.isStatus)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](60, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("overflow-hidden", !ctx.isBranchLocation && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isBranchLocation && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("searchable", true)("minTermLength", 3)("items", ctx.cities);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["city"].invalid || ctx.formValid["city"].invalid && (ctx.formValid["city"].dirty || ctx.formValid["city"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("searchable", true)("minTermLength", 3)("items", ctx.branches);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["branchId"].invalid || ctx.formValid["branchId"].invalid && (ctx.formValid["branchId"].dirty || ctx.formValid["branchId"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["ipAddresses"].invalid || ctx.formValid["ipAddresses"].invalid && (ctx.formValid["ipAddresses"].dirty || ctx.formValid["ipAddresses"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("overflow-hidden", !ctx.isCollectionOrders && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCollectionOrders && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.collectionOrders);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.collectionOrdersAry == null ? null : ctx.collectionOrdersAry.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["collectForAllBranches"].value == false && ctx.f["collectForOwnBranch"].value == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("overflow-hidden", !ctx.isEmployees && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isEmployees && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.employees().controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("overflow-hidden", !ctx.isSetup && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isSetup && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("multiple", true)("searchable", true)("minTermLength", 3)("items", ctx.currencies);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.registerForm.get("registerCurrencies").value == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["registerCurrencies"].invalid || ctx.formValid["registerCurrencies"].invalid && (ctx.formValid["registerCurrencies"].dirty || ctx.formValid["registerCurrencies"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["cash"].value == false && ctx.f["cards"].value == false && ctx.f["onAccount"].value == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["numberOfSessionsPerDay"].value * 7 + 1 <= ctx.f["numberOfSessionsPerWeek"].value && ctx.f["numberOfSessionsPerWeek"].value != 0 && ctx.f["numberOfSessionsPerWeek"].value != "" && ctx.f["numberOfSessionsPerDay"].value != 0 && ctx.f["numberOfSessionsPerDay"].value != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["numberOfSessionsPerDay"].invalid || ctx.formValid["numberOfSessionsPerDay"].invalid && (ctx.formValid["numberOfSessionsPerDay"].dirty || ctx.formValid["numberOfSessionsPerDay"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["numberOfSessionsPerDay"].value * 7 + 1 <= ctx.f["numberOfSessionsPerWeek"].value && ctx.f["numberOfSessionsPerWeek"].value != 0 && ctx.f["numberOfSessionsPerWeek"].value != "" && ctx.f["numberOfSessionsPerDay"].value != 0 && ctx.f["numberOfSessionsPerDay"].value != "" || ctx.f["numberOfSessionsPerDay"].value > ctx.f["numberOfSessionsPerWeek"].value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["numberOfSessionsPerWeek"].invalid || ctx.formValid["numberOfSessionsPerWeek"].invalid && (ctx.formValid["numberOfSessionsPerWeek"].dirty || ctx.formValid["numberOfSessionsPerWeek"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["allowedSessionTimeFrom"].value >= ctx.f["allowedSessionTimeTo"].value && ctx.f["allowedSessionTimeFrom"].value != "" && ctx.f["allowedSessionTimeTo"].value != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["allowedSessionTimeFrom"].value >= ctx.f["allowedSessionTimeTo"].value && ctx.f["allowedSessionTimeFrom"].value != "" && ctx.f["allowedSessionTimeTo"].value != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["numberOfOpeningWithoutSettlementPerDay"].value * 7 + 1 <= ctx.f["numberOfOpeningWithoutSettlementPerWeek"].value && ctx.f["numberOfOpeningWithoutSettlementPerWeek"].value != 0 && ctx.f["numberOfOpeningWithoutSettlementPerWeek"].value != "" && ctx.f["numberOfOpeningWithoutSettlementPerDay"].value != 0 && ctx.f["numberOfOpeningWithoutSettlementPerDay"].value != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["numberOfOpeningWithoutSettlementPerDay"].invalid || ctx.formValid["numberOfOpeningWithoutSettlementPerDay"].invalid && (ctx.formValid["numberOfOpeningWithoutSettlementPerDay"].dirty || ctx.formValid["numberOfOpeningWithoutSettlementPerDay"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["numberOfOpeningWithoutSettlementPerDay"].value * 7 + 1 <= ctx.f["numberOfOpeningWithoutSettlementPerWeek"].value && ctx.f["numberOfOpeningWithoutSettlementPerWeek"].value != 0 && ctx.f["numberOfOpeningWithoutSettlementPerWeek"].value != "" && ctx.f["numberOfOpeningWithoutSettlementPerDay"].value != 0 && ctx.f["numberOfOpeningWithoutSettlementPerDay"].value != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["numberOfOpeningWithoutSettlementPerWeek"].invalid || ctx.formValid["numberOfOpeningWithoutSettlementPerWeek"].invalid && (ctx.formValid["numberOfOpeningWithoutSettlementPerWeek"].dirty || ctx.formValid["numberOfOpeningWithoutSettlementPerWeek"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.deposites);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["cashDepositTypeId"].value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_4__.CharacterDirective],
  styles: [".form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #dc3545;\n  border-color: pink;\n  height: 12;\n}\n\n.main-category[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #c4cdd5;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n  padding: 30px;\n  margin: 30px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #e9e9e9;\n  padding: 0px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: #1b212d;\n}\n.main-category[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-category[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  color: #1b212d;\n  padding: 15px;\n  width: 170px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-sub[_ngcontent-%COMP%] {\n  width: 135px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-sub[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 1rem;\n  padding: 13px 20px;\n}\n.main-category[_ngcontent-%COMP%]   .sub-details[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 5px 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #666;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 37px;\n  color: #999;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  border-radius: 10px;\n  padding: 12px;\n}\n\n.overlay-bi[_ngcontent-%COMP%], .overlay-wh[_ngcontent-%COMP%], .overlay-ba[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vcmVnaXN0ZXJzL2FkZC1yZWdpc3Rlci1hbmQtc2V0dXAvYWRkLXJlZ2lzdGVyLWFuZC1zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQUVKO0FBREk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHTjtBQUFFO0VBQ0UsYUFBQTtBQUVKO0FBREk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUdOO0FBQUU7RUFDRSxZQUFBO0FBRUo7QUFESTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdOO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7OztFQUdFLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBSUYiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICNkYzM1NDU7XG4gIGJvcmRlci1jb2xvcjogcGluaztcbiAgaGVpZ2h0OiAxMjtcbn1cblxuLm1haW4tY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNjNGNkZDU7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbjogMzBweDtcbiAgLmNhdC1oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaDMge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgfVxuICB9XG4gIC5jYXQtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoNCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB3aWR0aDogMTcwcHg7XG4gICAgfVxuICB9XG4gIC5jYXQtc3ViIHtcbiAgICB3aWR0aDogMTM1cHg7XG4gICAgLmZvcm0tY2hlY2staW5saW5lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDEzcHggMjBweDtcbiAgICB9XG4gIH1cblxuICAuc3ViLWRldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDVweCAwO1xuICB9XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzY2Njtcbn1cbi5idG4tcmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDM3cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuLmJ0bi1hZGQge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTJweCA7XG59XG4ub3ZlcmxheS1iaSxcbi5vdmVybGF5LXdoLFxuLm92ZXJsYXktYmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTkgMTk5IDE5OSAvIDIxJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3246:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/registers/addregister/addregister.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddregisterComponent": () => (/* binding */ AddregisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register.service */ 81702);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);








function AddregisterComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddregisterComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.removeBranchName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddregisterComponent_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddregisterComponent_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Full name length must be between 3 and 30 character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AddregisterComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddregisterComponent_div_15_span_1_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddregisterComponent_div_15_span_2_Template, 3, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.formValid["registersName"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.formValid["registersName"].errors["minlength"]);
  }
}
function AddregisterComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r11 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r11, " ");
  }
}
function AddregisterComponent_div_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddregisterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddregisterComponent_div_34_span_1_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.formValid["city"].errors["required"]);
  }
}
function AddregisterComponent_div_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
  }
}
function AddregisterComponent_div_40_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddregisterComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddregisterComponent_div_40_span_1_Template, 1, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddregisterComponent_div_40_span_2_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formValid["branchId"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formValid["branchId"].errors["required"]);
  }
}
function AddregisterComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddregisterComponent_div_48_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.selectCollection(item_r15.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r15.id)("checked", ctx_r5.collectionAry.includes(item_r15.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", item_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r15.name[0].lookupName, " ");
  }
}
function AddregisterComponent_div_64_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Register Cashier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AddregisterComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddregisterComponent_div_64_div_3_Template, 3, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ng-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23)(7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ng-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 60)(10, "div", 61)(11, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddregisterComponent_div_64_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const i_r19 = restoredCtx.index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.Remove(i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r19 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r19 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", i_r19 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r6.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r6.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", i_r19 == 0);
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class AddregisterComponent {
  constructor(registerService, router, modalService, toster, route, fb) {
    this.registerService = registerService;
    this.router = router;
    this.modalService = modalService;
    this.toster = toster;
    this.route = route;
    this.fb = fb;
    this.submitted = false;
    this.isStatus = true;
    this.collectionAry = [];
    this.searchBranch = '';
  }
  ngOnInit() {
    this.getForm();
    this.GetLocations();
    this.GetBranches();
    this.CollectioOrders();
    this.GetRoles();
    this.GetUsers();
    this.getCuruncy();
    this.registerId = this.route.snapshot.params['id'];
    if (this.registerId) {
      // this.getRoleDetails();
      this.isEdit == true;
    } else {}
  }
  getForm() {
    this.formGroup = this.fb.group({
      registersName: '',
      city: '',
      branchId: 0,
      cash: false,
      onAccount: true,
      cheque: true,
      sparePartsSales: true,
      cards: true,
      visa: true,
      mastercard: true,
      americanExpress: true,
      numberOfSessionsPerDay: 0,
      numberOfSessionsPerWeek: 0,
      allowedSessionTimeFrom: '',
      allowedSessionTimeTo: '',
      allowOpenWithoutSettlement: true,
      numberOfOpeningWithoutSettlementPerDay: 0,
      numberOfOpeningWithoutSettlementPerWeek: 0,
      cashDepositTypeId: 0,
      status: 0,
      registerEmployees: this.fb.array([this.addRegisterEmployees()]),
      collectionOrders: this.fb.array([]),
      registerCurrencies: []
      // registerCurrencies: this.fb.array([]),
    });
  }
  // UserWorkingHours: this.fb.array([]),
  get registerEmployees() {
    return this.formGroup.controls['registerEmployees'];
  }
  get collectionOrders() {
    return this.formGroup.controls['collectionOrders'];
  }
  get registerCurrencies() {
    return this.formGroup.controls['registerCurrencies'];
  }
  get formValid() {
    return this.formGroup.controls;
  }
  addRegisterEmployees() {
    return this.fb.group({
      roleId: 0,
      userId: 0
    });
  }
  AddCollectionOrders() {
    return this.fb.group({
      orderId: 0
    });
  }
  AddregisterCurrencies() {
    return this.fb.group({
      currencyId: 0
    });
  }
  pushRegisterEmployees() {
    this.registerEmployees.push(this.fb.group({
      roleId: 0,
      userId: 0
    }));
    console.log(this.formGroup.value);
  }
  Remove(i) {
    this.formGroup.get('registerEmployees').removeAt(i);
    // const empAry = <FormArray>(this.formGroup.get('registerEmployees'));
    // empAry.controls[0].get('WalletDiscountValue').patchValue(0);
  }

  onSubmit() {
    // this.submitted = true;
    // if (this.formGroup.invalid) {
    //   return window.scroll(0, 0);
    // }
    for (let r = this.collectionOrders.value.length - 1; r >= 0; r--) {
      this.collectionOrders.removeAt(r);
    }
    for (let w = 0; w < this.collectionAry.length; w++) {
      this.collectionOrders.push(this.fb.group({
        orderId: this.collectionAry[w]
      }));
    }
    console.log(this.formGroup.value);
    // if (this.formGroup.get('roleId')?.value == 0) {
    //   this.AddRegister();
    // } else {
    //   this.EditRegister();
    // }
  }

  AddRegister() {
    console.log(this.formGroup.value);
    return this.registerService.AddRegister(this.formGroup.value).subscribe(response => {
      if (response.isSuccess == true) {
        console.log(response);
        const modalRef = this.modalService.open('');
        modalRef.componentInstance.name = 'add';
      } else {
        this.errorsList = response.Errors || response.errors;
      }
    });
  }
  EditRegister() {
    console.log(this.formGroup.value);
    return this.registerService.EditRegister(this.formGroup.value).subscribe(response => {
      if (response.isSuccess == true) {
        console.log(response);
        const modalRef = this.modalService.open('');
        modalRef.componentInstance.name = 'edit';
      } else {
        this.errorsList = response.Errors || response.errors;
      }
    });
  }
  removeBranchName() {
    this.formGroup.get('FullName')?.patchValue('');
  }
  removeemail() {
    this.formGroup.get('Email')?.patchValue('');
  }
  removephone() {
    this.formGroup.get('Mobile')?.patchValue('');
  }
  chooseStatus() {
    this.isStatus = this.isStatus == false ? true : false;
    if (this.isStatus == true) {
      this.formGroup.get('status')?.patchValue(2001);
    } else {
      this.formGroup.get('status')?.patchValue(2002);
    }
  }
  selectCollection(item) {
    console.log(item);
    if (this.collectionAry.includes(item)) {
      this.collectionAry.splice(this.collectionAry.indexOf(item), 1);
    } else {
      this.collectionAry.push(item);
    }
    console.log(this.collectionAry);
  }
  GetLocations() {
    return this.registerService.GetLocations().subscribe(response => {
      if (response) {
        this.locations = response.data;
      }
    });
  }
  GetBranches() {
    return this.registerService.GetBranches(this.searchBranch).subscribe(response => {
      if (response) {
        this.branches = response.data;
      }
    });
  }
  chooseCity(e) {
    console.log(e);
    this.searchBranch = e;
    this.GetBranches();
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  GetRoles() {
    this.registerService.GetRoles().subscribe(response => {
      this.roles = response.data;
    }, error => {
      // this.errorMessage = error.message;
    });
  }
  GetUsers() {
    this.registerService.GetUsers().subscribe(response => {
      this.users = response.data;
    }, error => {
      // this.errorMessage = error.message;
    });
  }
  CollectioOrders() {
    this.registerService.getLookupsById(7).subscribe(response => {
      this.collectioOrders = response.data;
    }, error => {
      // this.errorMessage = error.message;
    });
  }
  getCuruncy() {
    this.registerService.getLookupsById(9).subscribe(response => {
      // this.curruncys = response.data;
      this.curruncys = response.data.map(x => ({
        id: x.id,
        name: x.name[0].lookupName
      }));
    }, error => {
      // this.errorMessage = error.message;
    });
  }
}
AddregisterComponent.ɵfac = function AddregisterComponent_Factory(t) {
  return new (t || AddregisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_0__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
AddregisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddregisterComponent,
  selectors: [["app-addregister"]],
  decls: 187,
  vars: 15,
  consts: [[1, "card-page"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "page-title"], [1, "card-form", "overflow-hidden", "position-relative"], [1, "col-md-4"], [1, "form-group", "overflow-hidden", "position-relative"], ["formControlName", "registersName", "name", "registersName", "type", "text", "placeholder", "Type name ", "required", "", "minlength", "6", "maxlength", "30", 1, "form-control"], ["class", "btn btn-remove", 3, "click", 4, "ngIf"], ["class", "ng-dirty", 4, "ngIf"], [1, "col-md-8"], [1, "d-flex", "justify-content-end", "align-items-center", "pt30"], [1, "form-check", "form-switch"], [1, "labelactive"], ["name", "isStatus", "type", "checkbox", "role", "switch", 1, "form-check-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "card-form"], [1, "form-group"], ["name", "city", "id", "city", "placeholder", "Select", "formControlName", "city", "required", "", 3, "items", "change"], ["ng-label-tmp", ""], ["name", "branchId", "id", "branchId", "placeholder", "Select", "bindLabel", "branchName", "bindValue", "branchId", "formControlName", "branchId", "required", "", 3, "items"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], [1, "card-form", "overflow-hidden1", "position-relative"], [1, "col-md-3"], ["class", "col-md-12", "formArrayName", "registerEmployees", 4, "ngFor", "ngForOf"], [1, "text-end"], [1, "btn", "btn-addemp", 3, "click"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "cash", "formControlName", "cash", 1, "form-check-input"], ["for", "cash", 1, "form-check-label"], ["placeholder", "Select Currency", "bindLabel", "name", "bindValue", "id", "required", "", "formControlName", "registerCurrencies", 3, "multiple", "items"], ["type", "checkbox", "value", "", "id", "onAccount", "formControlName", "onAccount", 1, "form-check-input"], ["for", "onAccount", 1, "form-check-label"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "cheque", "value", "cheque", "formControlName", "cheque", 1, "form-check-input"], ["for", "cheque", 1, "form-check-label"], ["type", "checkbox", "id", "sparePartsSales", "value", "sparePartsSales", 1, "form-check-input"], ["for", "sparePartsSales", 1, "form-check-label"], ["formControlName", "numberOfSessionsPerDay", "name", "numberOfSessionsPerDay", "type", "text", "placeholder", "Number of sessions", "required", "", 1, "form-control"], ["formControlName", "numberOfSessionsPerWeek", "name", "numberOfSessionsPerWeek", "type", "text", "placeholder", "Number of sessions", "required", "", 1, "form-control"], ["formControlName", "numberOfSessionsPerDay", "name", "numberOfSessionsPerDay", "type", "time", "placeholder", "Number of sessions", "required", "", 1, "form-control"], ["formControlName", "numberOfSessionsPerWeek", "name", "numberOfSessionsPerWeek", "type", "time", "placeholder", "Number of sessions", "required", "", 1, "form-control"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel"], ["type", "submit", 1, "btn", "btn-save"], [1, "btn", "btn-remove", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "ng-dirty"], ["class", "error", 4, "ngIf"], [4, "ngIf"], [1, "error"], ["type", "checkbox", 1, "form-check-input", 3, "value", "id", "checked", "change"], [1, "form-check-label", 3, "for"], ["formArrayName", "registerEmployees", 1, "col-md-12"], [1, "row", 3, "formGroupName"], [1, "form-group", 3, "hidden"], ["placeholder", "Select", "required", "", "bindLabel", "name", "bindValue", "roleId", "formControlName", "roleId", 3, "items"], ["placeholder", "Select", "required", "", "bindLabel", "fullName", "bindValue", "userId", "formControlName", "userId", 3, "items"], [1, "col-md-2"], [3, "hidden"], [1, "btn", "btnremove-emp", 3, "click"], [1, "fa-solid", "fa-trash-can"]],
  template: function AddregisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddregisterComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Registers Information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 2)(9, "div", 6)(10, "div", 7)(11, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Registers Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddregisterComponent_button_14_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddregisterComponent_div_15_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddregisterComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.isStatus = $event;
      })("change", function AddregisterComponent_Template_input_change_21_listener() {
        return ctx.chooseStatus();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3)(23, "div", 4)(24, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Branch & Location * ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "div", 2)(28, "div", 6)(29, "div", 17)(30, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Location \" City \" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ng-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddregisterComponent_Template_ng_select_change_32_listener($event) {
        return ctx.chooseCity($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AddregisterComponent_ng_template_33_Template, 1, 1, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AddregisterComponent_div_34_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 6)(36, "div", 17)(37, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "ng-select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddregisterComponent_div_40_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3)(42, "div", 4)(43, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Collection Orders * ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5)(46, "div", 2)(47, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AddregisterComponent_div_48_Template, 4, 5, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 3)(50, "div", 4)(51, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Employees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 22)(54, "div", 2)(55, "div", 3)(56, "div", 2)(57, "div", 23)(58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Role Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 23)(61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, AddregisterComponent_div_64_Template, 13, 6, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 3)(66, "div", 25)(67, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddregisterComponent_Template_button_click_67_listener() {
        return ctx.pushRegisterEmployees();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Add Employee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 3)(70, "div", 4)(71, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Setup ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 22)(74, "div", 2)(75, "div", 6)(76, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Cash ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 6)(81, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "ng-select", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 2)(84, "div", 6)(85, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " On Account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 6)(90, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Spare Parts Sales Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 2)(99, "div", 6)(100, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " Cards ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 6)(105, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Visa Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Mastercard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "American Express");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 2)(118, "div", 3)(119, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " Register Session * ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 23)(123, "div", 17)(124, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Number of Sessions Per Day *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 23)(128, "div", 17)(129, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Number Of Sessions Per Week *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 2)(133, "div", 3)(134, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, " Allowed Sessions time ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 23)(138, "div", 17)(139, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 23)(143, "div", 17)(144, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 2)(148, "div", 3)(149, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " Opening without Settlement ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, " Allow Open a new session without Settlement. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 2)(157, "div", 3)(158, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, " Number of Opening Without settlement ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 23)(162, "div", 17)(163, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Per day");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 23)(167, "div", 17)(168, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Per week");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 2)(172, "div", 3)(173, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " Cash Deposit * ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 23)(177, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 3)(182, "div", 44)(183, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup.get("registersName").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["registersName"].invalid || ctx.formValid["registersName"].invalid && (ctx.formValid["registersName"].dirty || ctx.formValid["registersName"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isStatus)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.locations);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["city"].invalid && (ctx.formValid["city"].dirty || ctx.formValid["city"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.branches);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["branchId"].invalid && (ctx.formValid["branchId"].dirty || ctx.formValid["branchId"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.collectioOrders);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.registerEmployees.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", true)("items", ctx.curruncys);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isEdit ? "Add" : "Save", " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgLabelTemplateDirective],
  styles: [".card-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.card-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 24px;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 37px;\n  color: #999;\n}\n\n.btn-addemp[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  font-size: 14px;\n  color: #fff;\n  padding: 10px 30px;\n}\n\n.btnremove-emp[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: #dc3545;\n  padding: 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vcmVnaXN0ZXJzL2FkZHJlZ2lzdGVyL2FkZHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFERjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvcm0ge1xuICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICBociB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cbn1cblxuLmJ0bi1yZW1vdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMzdweDtcbiAgY29sb3I6ICM5OTk7XG59XG4uYnRuLWFkZGVtcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbn1cbi5idG5yZW1vdmUtZW1wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 47758:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/registers/reg-confirm/reg-confirm.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegConfirmComponent": () => (/* binding */ RegConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




class RegConfirmComponent {
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
RegConfirmComponent.ɵfac = function RegConfirmComponent_Factory(t) {
  return new (t || RegConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
RegConfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegConfirmComponent,
  selectors: [["app-reg-confirm"]],
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
  template: function RegConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Are you sure you want to save changes? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegConfirmComponent_Template_button_click_5_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegConfirmComponent_Template_button_click_7_listener() {
        ctx.close();
        return ctx.activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: #75b878;\n  margin-bottom: 30px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  width: 120px;\n  border-radius: 30px;\n  display: block;\n  color: #000;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vcmVnaXN0ZXJzL3JlZy1jb25maXJtL3JlZy1jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVGO0FBREU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbiAgaSB7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICAgIGNvbG9yOiAjNzViODc4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5tb2RhbC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLmJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 43362:
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/registers/reg-done/reg-done.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegDoneComponent": () => (/* binding */ RegDoneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function RegDoneComponent_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register added successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RegDoneComponent_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register updated successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class RegDoneComponent {
  constructor(activeModal, modalService, router) {
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.router = router;
  }
  ngOnInit() {
    console.log(this.name);
    if (this.name == 'add') {
      setTimeout(() => {
        this.modalService.dismissAll();
        this.router.navigateByUrl('/registers');
      }, 4000);
    } else {
      setTimeout(() => {
        this.modalService.dismissAll();
      }, 4000);
    }
  }
}
RegDoneComponent.ɵfac = function RegDoneComponent_Factory(t) {
  return new (t || RegDoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
RegDoneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegDoneComponent,
  selectors: [["app-reg-done"]],
  inputs: {
    name: "name"
  },
  decls: 5,
  vars: 2,
  consts: [[1, "modal-body"], [1, "message"], [1, "fa-regular", "fa-circle-check"], [4, "ngIf"]],
  template: function RegDoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegDoneComponent_h3_3_Template, 2, 0, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegDoneComponent_h3_4_Template, 2, 0, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name != "add");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 10px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: #75b878;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vcmVnaXN0ZXJzL3JlZy1kb25lL3JlZy1kb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG4gIGl7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICAgIGNvbG9yOiAjNzViODc4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 81702:
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/registers/register.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/shared.service */ 69082);



class RegisterService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  GetRegisters(searchText, sort, pageNo) {
    return this.http.get(this.apiUrl + `Register/GetRegisters?Search=${searchText}&Sort=${sort}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  AddRegister(role) {
    return this.http.post(this.apiUrl + 'Register/AddRegister', role, this.sharedService.getHeaders());
  }
  EditRegister(role) {
    return this.http.post(this.apiUrl + 'Register/UpdateRegister', role, this.sharedService.getHeaders());
  }
  GetRegisterDetails(id) {
    return this.http.get(this.apiUrl + `Register/GetRegisterDetails?Id=${id}`, this.sharedService.getHeaders());
  }
  GetLocations() {
    return this.http.get(this.apiUrl + `Lookups/GetLocations`, this.sharedService.getHeaders());
  }
  GetBranches(searchText) {
    return this.http.get(this.apiUrl + `Branches/GetBranches?Search=${searchText}&Status=2001&sort=2`, this.sharedService.getHeaders());
  }
  GetUsers() {
    return this.http.get(this.apiUrl + `User/GetUsers?sort=2&Status=2001&Invitation=2004`,
    //RoleId=1&
    this.sharedService.getHeaders());
  }
  GetRoles() {
    return this.http.get(this.apiUrl + `Roles/GetRoles?Status=2001&Sort=2`, this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + 'Lookups/GetLookups?lookupTypeId=' + id, this.sharedService.getHeaders());
  }
}
RegisterService.ɵfac = function RegisterService_Factory(t) {
  return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
RegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RegisterService,
  factory: RegisterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 84235:
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/registers/registers-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistersRoutingModule": () => (/* binding */ RegistersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_register_and_setup_add_register_and_setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-register-and-setup/add-register-and-setup.component */ 45736);
/* harmony import */ var _registers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registers.component */ 77429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _registers_component__WEBPACK_IMPORTED_MODULE_1__.RegistersComponent
}, {
  path: 'add-register',
  component: _add_register_and_setup_add_register_and_setup_component__WEBPACK_IMPORTED_MODULE_0__.AddRegisterAndSetupComponent
}, {
  path: 'view-register/:id',
  component: _add_register_and_setup_add_register_and_setup_component__WEBPACK_IMPORTED_MODULE_0__.AddRegisterAndSetupComponent
}];
class RegistersRoutingModule {}
RegistersRoutingModule.ɵfac = function RegistersRoutingModule_Factory(t) {
  return new (t || RegistersRoutingModule)();
};
RegistersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: RegistersRoutingModule
});
RegistersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegistersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 77429:
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/registers/registers.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistersComponent": () => (/* binding */ RegistersComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.service */ 81702);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/not-found/not-found.component */ 59442);









function RegistersComponent_div_15_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 30)(10, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistersComponent_div_15_tr_28_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.viewRegister());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "View details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7.registersName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r7.branch.branchName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r7.status == "2001");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/registers/view-register/", item_r7.id, "");
  }
}
function RegistersComponent_div_15_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RegistersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 19)(2, "div", 20)(3, "table", 21)(4, "thead")(5, "tr")(6, "th", 22)(7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistersComponent_div_15_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.sortByName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Registers Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 24)(10, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 22)(12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistersComponent_div_15_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.sortByNoUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 24)(15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 22)(17, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistersComponent_div_15_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.sortByIndoorOutdoor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Branch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 24)(20, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 22)(22, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Activation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 22)(25, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, RegistersComponent_div_15_tr_28_Template, 14, 5, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RegistersComponent_div_15_div_29_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const registers_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (registers_r4 == null ? null : registers_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (registers_r4 == null ? null : registers_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (registers_r4 == null ? null : registers_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", registers_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (registers_r4 == null ? null : registers_r4.length) == 0);
  }
}
function RegistersComponent_ng_template_17_Template(rf, ctx) {
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
function RegistersComponent_li_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistersComponent_li_30_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const page_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.setPage(page_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r3.pageNo === page_r14))("disabled", ctx_r3.pageNo === page_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", page_r14 + 1, " ");
  }
}
class RegistersComponent {
  constructor(registerService, router, headerService) {
    this.registerService = registerService;
    this.router = router;
    this.headerService = headerService;
    this.searchText = '';
    this.sort = 1;
    this.branchId = '';
    this.roleId = '';
    this.pageNo = 0;
  }
  ngOnInit() {
    this.headerService.setTitle('Registers');
    this.GetRegisters();
    // this.registers = [];
  }

  addUser() {
    this.router.navigateByUrl('/registers/add-register');
    this.headerService.setTitle('Registers > Add Register');
  }
  GetRegisters() {
    return this.registerService.GetRegisters(this.searchText, this.sort, this.pageNo).subscribe(response => {
      if (response) {
        this.registers = response.data;
        this.totalPages = response.totalPages;
        this.totalRecordsCount = response.totalRecordsCount;
        this.totalRecords = response.info.totalRecordsCount;
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
      this.GetRegisters();
    }
    if (text.length == 0) {
      this.GetRegisters();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.sort = 1;
    this.GetRegisters();
  }
  sortByName() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.GetRegisters();
  }
  sortByNoUser() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.GetRegisters();
  }
  sortByIndoorOutdoor() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.GetRegisters();
  }
  sortByActivation() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.GetRegisters();
  }
  viewRegister() {
    this.headerService.setTitle('Registers > View Register');
  }
  setPage(page) {
    this.pageNo = page;
    this.GetRegisters();
    window.scroll(0, 0);
  }
}
RegistersComponent.ɵfac = function RegistersComponent_Factory(t) {
  return new (t || RegistersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_1__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService));
};
RegistersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RegistersComponent,
  selectors: [["app-registers"]],
  decls: 31,
  vars: 10,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-5"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "col-md-2", "d-flex", "justify-content-end", "btnadd"], [1, "btn", "btn-add", 3, "click"], ["src", "assets/images/plus.png", "alt", ""], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "card-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", "readonly", "", "disabled", "", 1, "form-check-input", 3, "checked"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], [1, "btn", "btn-view", 3, "routerLink", "click"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function RegistersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistersComponent_Template_button_click_4_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RegistersComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function RegistersComponent_Template_input_keyup_6_listener($event) {
        return ctx.searchRoles($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistersComponent_Template_button_click_7_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistersComponent_Template_button_click_11_listener() {
        return ctx.addUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Add Register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RegistersComponent_div_15_Template, 30, 17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, RegistersComponent_ng_template_17_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15)(20, "h6", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 15)(29, "ul", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, RegistersComponent_li_30_Template, 3, 5, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.registers)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", (ctx.registers == null ? null : ctx.registers.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.registers == null ? null : ctx.registers.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.totalRecordsCount < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.pages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 76949:
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/registers/registers.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistersModule": () => (/* binding */ RegistersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _registers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registers-routing.module */ 84235);
/* harmony import */ var _registers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registers.component */ 77429);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _add_register_and_setup_add_register_and_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-register-and-setup/add-register-and-setup.component */ 45736);
/* harmony import */ var _addregister_addregister_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addregister/addregister.component */ 3246);
/* harmony import */ var _reg_done_reg_done_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reg-done/reg-done.component */ 43362);
/* harmony import */ var _reg_confirm_reg_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reg-confirm/reg-confirm.component */ 47758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);









class RegistersModule {}
RegistersModule.ɵfac = function RegistersModule_Factory(t) {
  return new (t || RegistersModule)();
};
RegistersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: RegistersModule
});
RegistersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _registers_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RegistersModule, {
    declarations: [_registers_component__WEBPACK_IMPORTED_MODULE_1__.RegistersComponent, _add_register_and_setup_add_register_and_setup_component__WEBPACK_IMPORTED_MODULE_3__.AddRegisterAndSetupComponent, _addregister_addregister_component__WEBPACK_IMPORTED_MODULE_4__.AddregisterComponent, _reg_done_reg_done_component__WEBPACK_IMPORTED_MODULE_5__.RegDoneComponent, _reg_confirm_reg_confirm_component__WEBPACK_IMPORTED_MODULE_6__.RegConfirmComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _registers_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_admin_registers_registers_module_ts.js.map