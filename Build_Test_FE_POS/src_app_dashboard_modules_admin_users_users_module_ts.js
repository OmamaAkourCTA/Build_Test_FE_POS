"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_admin_users_users_module_ts"],{

/***/ 15256:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/users/adduser/adduser.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdduserComponent": () => (/* binding */ AdduserComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _modal_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal-confirm/modal-confirm.component */ 41845);
/* harmony import */ var _modal_modal_done_modal_done_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/modal-done/modal-done.component */ 70964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ 77341);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ 69082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-tel-input */ 79453);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/directive/character.directive */ 80145);















function AdduserComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 46);
  }
}
function AdduserComponent_div_16_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 51);
  }
}
function AdduserComponent_div_16_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 52);
  }
}
function AdduserComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47)(1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdduserComponent_div_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.editUserInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_16_img_2_Template, 1, 0, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AdduserComponent_div_16_img_3_Template, 1, 0, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isShowUserInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isShowUserInfo);
  }
}
function AdduserComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdduserComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.removeUserName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Full name length must be between 6 and 30 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AdduserComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdduserComponent_div_23_span_1_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_23_span_2_Template, 3, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.formValid["fullName"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.formValid["fullName"].errors["minlength"]);
  }
}
function AdduserComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdduserComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.removeemail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_30_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " the email you entered is incorrect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_30_span_2_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AdduserComponent_div_30_span_3_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.formValid["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.formValid["email"].dirty);
  }
}
function AdduserComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdduserComponent_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.removephone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_38_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "The digits are less than 10 for (mobile) and the digits are more than 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AdduserComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdduserComponent_div_38_span_1_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_38_span_2_Template, 3, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r7.formGroup.get("mobile").value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formValid["mobile"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.formValid["mobile"].errors["minlength"]);
  }
}
function AdduserComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 46);
  }
}
function AdduserComponent_div_45_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 51);
  }
}
function AdduserComponent_div_45_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 52);
  }
}
function AdduserComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47)(1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdduserComponent_div_45_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r43.editLocationInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_45_img_2_Template, 1, 0, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AdduserComponent_div_45_img_3_Template, 1, 0, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r9.formGroup.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.isShowLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r9.isShowLocation);
  }
}
function AdduserComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r45 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r45, " ");
  }
}
function AdduserComponent_div_53_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdduserComponent_div_53_span_1_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.formValid["city"].errors["required"]);
  }
}
function AdduserComponent_div_59_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span");
  }
}
function AdduserComponent_div_59_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdduserComponent_div_59_span_1_Template, 1, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_59_span_2_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.formValid["branchId"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.formValid["branchId"].errors["required"]);
  }
}
function AdduserComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 46);
  }
}
function AdduserComponent_div_66_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 51);
  }
}
function AdduserComponent_div_66_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 52);
  }
}
function AdduserComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47)(1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdduserComponent_div_66_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r51.editWorkingHoursInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_66_img_2_Template, 1, 0, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AdduserComponent_div_66_img_3_Template, 1, 0, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r14.formGroup.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r14.isShowWorkingHoursn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r14.isShowWorkingHoursn);
  }
}
function AdduserComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "div", 64)(3, "div", 65)(4, "div", 66)(5, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdduserComponent_div_79_Template_input_change_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r56);
      const item_r53 = restoredCtx.$implicit;
      const i_r54 = restoredCtx.index;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r55.chooseTime(item_r53.value.selected, i_r54));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 64)(9, "div", 25)(10, "div", 69)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 64)(15, "div", 25)(16, "div", 69)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r53 = ctx.$implicit;
    const i_r54 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r53.value.dayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", item_r53.value.selected);
  }
}
function AdduserComponent_div_89_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span");
  }
}
function AdduserComponent_div_89_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdduserComponent_div_89_span_1_Template, 1, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_89_span_2_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.formValid["contractStartDate"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.formValid["contractStartDate"].errors["required"]);
  }
}
function AdduserComponent_div_95_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span");
  }
}
function AdduserComponent_div_95_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdduserComponent_div_95_span_1_Template, 1, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_95_span_2_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.formValid["contractEndDate"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.formValid["contractEndDate"].errors["required"]);
  }
}
function AdduserComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 46);
  }
}
function AdduserComponent_div_102_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 51);
  }
}
function AdduserComponent_div_102_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 52);
  }
}
function AdduserComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47)(1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdduserComponent_div_102_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r63.editRolesPErmission());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_102_img_2_Template, 1, 0, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AdduserComponent_div_102_img_3_Template, 1, 0, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r19.formGroup.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.isShowRolesPErmission);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r19.isShowRolesPErmission);
  }
}
function AdduserComponent_div_109_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdduserComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdduserComponent_div_109_span_1_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r20.formValid["roleId"].errors["required"]);
  }
}
function AdduserComponent_div_123_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 78);
  }
}
function AdduserComponent_div_123_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 79);
  }
}
function AdduserComponent_div_123_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 83);
  }
}
function AdduserComponent_div_123_div_7_div_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 51);
  }
}
function AdduserComponent_div_123_div_7_div_3_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 52);
  }
}
function AdduserComponent_div_123_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47)(1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdduserComponent_div_123_div_7_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r78);
      const i_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r76.editrolesList(i_r67));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_123_div_7_div_3_img_2_Template, 1, 0, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AdduserComponent_div_123_div_7_div_3_img_3_Template, 1, 0, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r72.isShowpermisionsRoles && ctx_r72.catRow == i_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r72.isShowpermisionsRoles || ctx_r72.catRow != i_r67);
  }
}
function AdduserComponent_div_123_div_7_div_4_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdduserComponent_div_123_div_7_div_4_div_4_div_2_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r88);
      const sub_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const item_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r86.pushPermissionItemId($event, item_r80, sub_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sub_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", sub_r82.permissionItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", sub_r82.permissionItemId)("checked", ctx_r83.isChecked(sub_r82.permissionItemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", sub_r82.permissionItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", sub_r82.perItemName, " ");
  }
}
function AdduserComponent_div_123_div_7_div_4_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdduserComponent_div_123_div_7_div_4_div_4_div_3_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93);
      const sub_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const item_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r91.pushPermissionItemId($event, item_r80, sub_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sub_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const item_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", item_r80.permissionSubCatId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", sub_r82.permissionItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", sub_r82.permissionItemId)("checked", ctx_r84.isChecked(sub_r82.permissionItemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("for", sub_r82.permissionItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", sub_r82.perItemName, " ");
  }
}
function AdduserComponent_div_123_div_7_div_4_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdduserComponent_div_123_div_7_div_4_div_4_div_5_Template_input_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r99);
      const details_r97 = restoredCtx.$implicit;
      const sub_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r98.pushPermissionItemDetailId($event, details_r97.permissionItemId, sub_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const details_r97 = ctx.$implicit;
    const sub_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "d-", details_r97.permissionItemDetailsId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", details_r97.permissionItemDetailsId)("checked", ctx_r85.isChecked(sub_r82.permissionItemId))("disabled", details_r97.permissionItemId == sub_r82.permissionItemId && !ctx_r85.isChecked(sub_r82.permissionItemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "d-", details_r97.permissionItemDetailsId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", details_r97.perItemDetailsName, " ");
  }
}
function AdduserComponent_div_123_div_7_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_123_div_7_div_4_div_4_div_2_Template, 4, 5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AdduserComponent_div_123_div_7_div_4_div_4_div_3_Template, 4, 6, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AdduserComponent_div_123_div_7_div_4_div_4_div_5_Template, 4, 6, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sub_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sub_r82.perItemName == "View Only" || sub_r82.perItemName == "View & Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", sub_r82.perItemName == "Yes" || sub_r82.perItemName == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", sub_r82.permissionItemDetails);
  }
}
function AdduserComponent_div_123_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 84)(1, "div")(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AdduserComponent_div_123_div_7_div_4_div_4_Template, 6, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r80.perSubCatName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r80.permissionItems);
  }
}
function AdduserComponent_div_123_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_123_div_7_div_2_Template, 1, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AdduserComponent_div_123_div_7_div_3_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AdduserComponent_div_123_div_7_div_4_Template, 5, 2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const i_r67 = ctx_r102.index;
    const category_r66 = ctx_r102.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r67 != ctx_r70.catRow && ctx_r70.isEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r70.isEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", category_r66.permissionSubCategories);
  }
}
function AdduserComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdduserComponent_div_123_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r104);
      const category_r66 = restoredCtx.$implicit;
      const i_r67 = restoredCtx.index;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r103.collapseList(category_r66, i_r67));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AdduserComponent_div_123_i_5_Template, 1, 0, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AdduserComponent_div_123_i_6_Template, 1, 0, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AdduserComponent_div_123_div_7_Template, 5, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r66 = ctx.$implicit;
    const i_r67 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", category_r66.perCatName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r67 != ctx_r21.ExpandRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r67 == ctx_r21.ExpandRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r67 == ctx_r21.ExpandRow);
  }
}
function AdduserComponent_div_125_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r106.ErrorMessageEn, " ");
  }
}
function AdduserComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 94)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AdduserComponent_div_125_li_2_Template, 2, 1, "li", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r22.errorsList);
  }
}
function AdduserComponent_button_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", !ctx_r23.isEdit ? "Add" : "Save", " ");
  }
}
function AdduserComponent_button_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
const _c1 = function () {
  return ["jo", "sa"];
};
const _c2 = function (a0) {
  return {
    "preferredCountries": a0
  };
};
class AdduserComponent {
  constructor(userService, sharedService, router, modalService, toster, route, fb, headerService, datePipe, config) {
    this.userService = userService;
    this.sharedService = sharedService;
    this.router = router;
    this.modalService = modalService;
    this.toster = toster;
    this.route = route;
    this.fb = fb;
    this.headerService = headerService;
    this.datePipe = datePipe;
    this.submitted = false;
    this.isStatus = true;
    this.searchBranch = '';
    this.isShowpermisionsRoles = false;
    this.catNo = 9;
    this.isShowUserInfo = false;
    this.isShowLocation = false;
    this.isShowWorkingHoursn = false;
    this.isShowRolesPErmission = false;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.getForm();
    this.GetLocations();
    this.GetBranches();
    this.GetRoles();
    this.userId = this.route.snapshot.params['id'];
    if (this.userId) {
      console.log(typeof this.sharedService.getUserId);
      console.log(typeof this.userId);
      this.GetUserDetails();
      this.isEdit = true;
      if (this.isEdit = true) {
        this.headerService.setTitle('Users > View user');
      }
    } else {
      this.headerService.setTitle('Users > Add user');
      this.getWorkingHours();
      this.getDefaultPermissions();
    }
  }
  getForm() {
    this.formGroup = this.fb.group({
      userId: 0,
      fullName: '',
      mobile: '',
      email: '',
      branchId: null,
      city: null,
      contractStartDate: '',
      contractEndDate: '',
      roleId: '',
      indoor: false,
      outdoor: false,
      userPermissions: this.fb.array([]),
      userWorkingHours: this.fb.array([]),
      deviceToken: '',
      status: 2001
    });
  }
  // UserWorkingHours: this.fb.array([]),
  //     userPermissions: this.fb.array([]),
  get userWorkingHours() {
    return this.formGroup.controls['userWorkingHours'];
  }
  get userPermissions() {
    return this.formGroup.controls['userPermissions'];
  }
  get formValid() {
    return this.formGroup.controls;
  }
  addUserWorkingHours() {
    return this.fb.group({
      dayId: '',
      dayName: '',
      fromTime: '',
      toTime: '',
      selected: true,
      status: 2001
    });
  }
  AdduserPermissions() {
    return this.fb.group({
      permissionSubCatId: [''],
      permissionItemId: 0,
      permissionItemDetailId: 0
    });
  }
  onSubmit() {
    console.log(this.formGroup.value);
    this.submitted = true;
    this.formGroup.get('fullName')?.patchValue(this.formGroup.get('fullName')?.value.trim());
    // if (this.formGroup.invalid) {
    //   // return window.scroll(0, 0);
    //   return;
    // }
    const myArray = this.formGroup.value.userPermissions.forEach(object => {
      if (object.permissionItemDetailId == 0) {
        delete object['permissionItemDetailId'];
      }
    });
    console.log(myArray);
    console.log(this.formGroup.value);
    if (this.formGroup.get('userId')?.value == 0) {
      this.AddUser();
    } else {
      this.UpdateUser();
    }
  }
  AddUser() {
    this.isLoading = true;
    if (!this.formGroup.get('mobile')?.value) {
      delete this.formGroup.value.mobile;
    }
    if (!this.formGroup.get('contractStartDate')?.value) {
      delete this.formGroup.value.contractStartDate;
    }
    if (!this.formGroup.get('contractEndDate')?.value) {
      delete this.formGroup.value.contractEndDate;
    }
    console.log(this.formGroup.value);
    return this.userService.AddUser(this.formGroup.value).subscribe(response => {
      if (response.isSuccess == true) {
        console.log(response);
        this.isLoading = false;
        const modalRef = this.modalService.open(_modal_modal_done_modal_done_component__WEBPACK_IMPORTED_MODULE_1__.ModalDoneComponent);
        modalRef.componentInstance.name = 'add';
      } else {
        this.isLoading = false;
        this.errorsList = response.Errors || response.errors;
      }
    }, error => {
      this.isLoading = false;
      console.log(error), this.errorMessage = error.statusText;
    });
  }
  UpdateUser() {
    console.log(this.formGroup.value);
    this.isLoading = true;
    return this.userService.EditUser(this.formGroup.value).subscribe(response => {
      if (response.isSuccess == true) {
        console.log(response);
        this.isLoading = false;
        this.isShowUserInfo = false;
        this.isShowLocation = false;
        this.isShowWorkingHoursn = false;
        this.isShowRolesPErmission = false;
        this.isShowpermisionsRoles = false;
        const modalRef = this.modalService.open(_modal_modal_done_modal_done_component__WEBPACK_IMPORTED_MODULE_1__.ModalDoneComponent);
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
  // AddUser() {
  //   const formData = new FormData();
  //   formData.append('FullName', this.formGroup.get('FullName')?.value);
  //   formData.append('Email', this.formGroup.get('Email')?.value);
  //   formData.append('Mobile', this.formGroup.get('Mobile')?.value);
  //   formData.append('BranchId', this.formGroup.get('BranchId')?.value);
  //   formData.append('City', this.formGroup.get('City')?.value);
  //   formData.append(
  //     'ContractStartDate',
  //     this.formGroup.get('ContractStartDate')?.value
  //   );
  //   formData.append(
  //     'ContractEndDate',
  //     this.formGroup.get('ContractEndDate')?.value
  //   );
  //   formData.append('RoleId', this.formGroup.get('RoleId')?.value);
  //   formData.append('Indoor', this.formGroup.get('Indoor')?.value);
  //   formData.append('Outdoor', this.formGroup.get('Outdoor')?.value);
  //   formData.append('ProfileImage', this.formGroup.get('ProfileImage')?.value);
  //   formData.append('Password', this.formGroup.get('userPermissions')?.value);
  //   formData.append('PasswordConfirm', this.formGroup.get('Password')?.value);
  //   formData.append(
  //     'DeviceToken',
  //     this.formGroup.get('PasswordConfirm')?.value
  //   );
  //   formData.append('status', this.formGroup.get('status')?.value);
  //   formData.append(
  //     'UserWorkingHours',
  //     JSON.stringify(this.formGroup.get('UserWorkingHours')?.value)
  //   );
  //   formData.append(
  //     'userPermissions',
  //     JSON.stringify(this.formGroup.get('userPermissions')?.value)
  //   );
  //   formData.append("userId", this.sharedService.UserId);
  //   formData.append('userId', '5fef6b2c6821ff3678cbe280');
  //   formData.append("image", this.imageURL);
  //   console.log(formData);
  //   return this.userService.AddUser(formData).subscribe((response: any) => {
  //     if (response) {
  //       console.log(response);
  //       this.router.navigate(['/']);
  //     } else {
  //     }
  //   });
  // }
  removeUserName() {
    this.formGroup.get('fullName')?.patchValue('');
  }
  removeemail() {
    this.formGroup.get('email')?.patchValue('');
  }
  removephone() {
    this.formGroup.get('mobile')?.patchValue('');
  }
  chooseStatus() {
    this.isStatus = this.isStatus == false ? true : false;
    if (this.isStatus == true) {
      console.log(this.isStatus);
      this.formGroup.get('status')?.patchValue(2002);
    } else {
      this.formGroup.get('status')?.patchValue(2001);
    }
  }
  chooseTime(value, i) {
    console.log(value);
    value == true;
    if (value == true) {
      this.formGroup.get('userWorkingHours')['at'](i).get('fromTime').enable();
      this.formGroup.get('userWorkingHours')['at'](i).get('toTime').enable();
      this.formGroup.get('userWorkingHours')['at'](i).get('status').patchValue(2001);
    } else {
      this.formGroup.get('userWorkingHours')['at'](i).get('status').patchValue(2002);
      this.formGroup.get('userWorkingHours')['at'](i).get('fromTime').disable();
      this.formGroup.get('userWorkingHours')['at'](i).get('toTime').disable();
    }
  }
  GetUserDetails() {
    this.userService.GetUserDetails(this.userId).subscribe(response => {
      if (response) {
        // console.log(response);
        const userDetails = response.data;
        this.formGroup.patchValue(userDetails);
        this.formGroup.get('branchId')?.patchValue(userDetails.branch.branchId);
        this.formGroup.get('roleId')?.patchValue(userDetails.role.roleId);
        this.formGroup.get('contractStartDate')?.patchValue(this.datePipe.transform(userDetails.contractStartDate, 'yyyy-MM-dd'));
        this.formGroup.get('contractEndDate')?.patchValue(this.datePipe.transform(userDetails.contractEndDate, 'yyyy-MM-dd'));
        if (this.formGroup.value.status == 2001) {
          this.isStatus = true;
        } else {
          this.isStatus = false;
        }
        if (this.formGroup.value.city) {
          this.searchBranch = this.formGroup.value.city;
          this.GetBranches();
        }
        // for (let r = this.userWorkingHours.value.length - 1; r >= 0; r--) {
        //   this.userWorkingHours.removeAt(r);
        // }
        // console.log(
        //   'userDetails.userWorkingHours',
        //   userDetails.userWorkingHours
        // );
        for (let w = 0; w < userDetails.userWorkingHours.length; w++) {
          // console.log(
          //   'userDetails.userWorkingHours',
          //   userDetails.userWorkingHours
          // );
          this.userWorkingHours.push(this.fb.group({
            dayId: userDetails.userWorkingHours[w].dayId,
            dayName: userDetails.userWorkingHours[w].day[0].lookupName,
            fromTime: userDetails.userWorkingHours[w]?.fromTime,
            toTime: userDetails.userWorkingHours[w]?.toTime,
            selected: userDetails.userWorkingHours[w].selected,
            status: userDetails.userWorkingHours[w].status
          }));
        }
        this.roles = userDetails.permissions;
        for (let x = 0; x < this.roles?.length; x++) {
          for (let c = 0; c < this.roles[x]?.permissionSubCategories?.length; c++) {
            for (let i = 0; i < this.roles[x].permissionSubCategories[c].permissionItems?.length; i++) {
              if (this.roles[x].permissionSubCategories[c].permissionItems[i].selected == true) {
                this.userPermissions.push(this.fb.group({
                  permissionSubCatId: this.roles[x].permissionSubCategories[c].permissionSubCatId,
                  permissionItemId: this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemId
                }));
                for (let d = 0; d < this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemDetails?.length; d++) {
                  if (this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemDetails[d].selected == true) {
                    this.userPermissions.push(this.fb.group({
                      permissionSubCatId: this.roles[x].permissionSubCategories[c].permissionSubCatId,
                      permissionItemId: this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemId,
                      permissionItemDetailId: this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemDetails[d].permissionItemDetailsId
                    }));
                  }
                }
              }
            }
          }
        }
      }
    });
  }
  GetLocations() {
    return this.userService.GetLocations().subscribe(response => {
      if (response) {
        this.locations = response.data;
      }
    });
  }
  GetBranches() {
    return this.userService.GetBranches(this.searchBranch).subscribe(response => {
      if (response) {
        this.branches = response.data;
      }
    });
  }
  getBranchDetails(e) {
    console.log(e);
    this.formGroup.get('city').patchValue(e.city);
    this.userService.getBranchDetails(e.branchId).subscribe(response => {
      if (response) {
        console.log(response);
        const branchDetails = response.data;
        for (let r = this.userWorkingHours.value.length - 1; r >= 0; r--) {
          this.userWorkingHours.removeAt(r);
        }
        for (let w = 0; w < branchDetails.branchWorkingHours.length; w++) {
          this.userWorkingHours.push(this.fb.group({
            dayId: branchDetails.branchWorkingHours[w].dayId,
            dayName: branchDetails.branchWorkingHours[w].day[0].lookupName,
            fromTime: branchDetails.branchWorkingHours[w].fromTime,
            toTime: branchDetails.branchWorkingHours[w].toTime,
            selected: branchDetails.branchWorkingHours[w].selected,
            status: branchDetails.branchWorkingHours[w].status
          }));
        }
      }
    });
  }
  GetRoles() {
    return this.userService.GetRoles().subscribe(response => {
      if (response) {
        this.rolesList = response.data;
      }
    });
  }
  getRoleDetails(e) {
    return this.userService.GetRoleDetails(e.roleId).subscribe(response => {
      if (response) {
        this.roles = response.data.permissions;
        for (let r = this.userPermissions.value.length - 1; r >= 0; r--) {
          this.userPermissions.removeAt(r);
        }
        // this.formGroup.patchValue(response.data);
        this.formGroup.get('indoor')?.patchValue(response.data?.indoor);
        this.formGroup.get('outdoor')?.patchValue(response.data?.outdoor);
        console.log('selected', this.roles?.permissionSubCategories);
        for (let x = 0; x < this.roles?.length; x++) {
          for (let c = 0; c < this.roles[x]?.permissionSubCategories?.length; c++) {
            for (let i = 0; i < this.roles[x].permissionSubCategories[c].permissionItems?.length; i++) {
              if (this.roles[x].permissionSubCategories[c].permissionItems[i].selected == true) {
                this.userPermissions.push(this.fb.group({
                  permissionSubCatId: this.roles[x].permissionSubCategories[c].permissionSubCatId,
                  permissionItemId: this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemId
                }));
                for (let d = 0; d < this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemDetails?.length; d++) {
                  if (this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemDetails[d].selected == true) {
                    this.userPermissions.push(this.fb.group({
                      permissionSubCatId: this.roles[x].permissionSubCategories[c].permissionSubCatId,
                      permissionItemId: this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemId,
                      permissionItemDetailId: this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemDetails[d].permissionItemDetailsId
                    }));
                  }
                }
              }
            }
          }
        }
        setTimeout(() => {
          console.log(this.formGroup.value);
        }, 2000);
      }
    });
  }
  chooseCity(e) {
    console.log(e);
    this.searchBranch = e;
    this.formGroup.get('branchId')?.patchValue('');
    this.GetBranches();
  }
  getbranchList(e) {
    console.log('e', e);
    this.searchBranch = '';
    for (let r = this.userWorkingHours.value.length - 1; r >= 0; r--) {
      this.userWorkingHours.removeAt(r);
    }
    this.GetBranches();
  }
  clearBranchData(e) {
    console.log('clear branch', e);
    for (let r = this.userWorkingHours.value.length - 1; r >= 0; r--) {
      this.userWorkingHours.removeAt(r);
    }
    // this.searchBranch = '';
  }

  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  pushPermissionItemId(e, permissionItem, supItem) {
    console.log(permissionItem);
    console.log(supItem);
    let isExist = this.formGroup.value.userPermissions.findIndex(elem => elem.permissionItemId === supItem.permissionItemId);
    this.formGroup.value.userPermissions.forEach(element => {
      console.log(element.permissionSubCatId);
      let PSubCatId = this.formGroup.value.userPermissions.findIndex(subCat => subCat.permissionSubCatId === permissionItem.permissionSubCatId);
      if (PSubCatId !== -1) {
        console.log('PSubCatId', PSubCatId);
        this.formGroup.get('userPermissions').removeAt(PSubCatId);
      }
    });
    let PSubCatId = this.formGroup.value.userPermissions.findIndex(subCat => subCat.permissionSubCatId === permissionItem.permissionSubCatId);
    console.log(PSubCatId);
    if (isExist !== -1) {
      console.log('isExist', isExist);
      this.formGroup.get('userPermissions').removeAt(isExist);
      if (PSubCatId !== -1) {
        console.log('PSubCatId', PSubCatId);
        this.formGroup.get('userPermissions').removeAt(PSubCatId);
      }
    } else {
      // if (PSubCatId !== -1) {
      //   console.log('PSubCatId', PSubCatId);
      //   (this.formGroup.get('userPermissions') as FormArray).removeAt(
      //     PSubCatId
      //   );
      // }
      this.userPermissions.push(this.fb.group({
        permissionSubCatId: permissionItem.permissionSubCatId,
        permissionItemId: supItem.permissionItemId,
        permissionItemDetailId: 0
      }));
      supItem.permissionItemDetails.forEach(element => {
        this.userPermissions.push(this.fb.group({
          permissionSubCatId: permissionItem.permissionSubCatId,
          permissionItemId: supItem.permissionItemId,
          permissionItemDetailId: element.permissionItemDetailsId
        }));
      });
    }
    // let PSubCatId = this.formGroup.value.userPermissions.findIndex(
    //   (subCat: any) => subCat.permissionSubCatId === permissionSubCatId
    // );
    // if (PSubCatId !== -1) {
    // console.log('isExist', PSubCatId);
    // (this.formGroup.get('userPermissions') as FormArray).removeAt(PSubCatId);
    // let isExist = this.formGroup.value.userPermissions.findIndex(
    //   (elem: any) =>
    //     elem.permissionItemId === e.target.value ||
    //     elem.permissionItemId === Number(e.target.value)
    // );
    // if (isExist !== -1) {
    //   console.log('isExist', isExist);
    //   (this.formGroup.get('userPermissions') as FormArray).removeAt(isExist);
    // } else {
    //   this.userPermissions.push(
    //     this.fb.group({
    //       permissionSubCatId: permissionSubCatId,
    //       permissionItemId: e.target.value,
    //       permissionItemDetailId: 0,
    //     })
    //   );
    // }
    // } else {
    console.log(this.formGroup.value);
  }
  isChecked(sitemid) {
    // console.log('sitemid', sitemid);
    return this.formGroup.value.userPermissions.find(x => x.permissionItemId === sitemid);
  }
  pushPermissionItemDetailId(e, permissionItemId, sub) {
    let isExist = this.formGroup.value.userPermissions.findIndex(elem => elem.permissionItemDetailId === e.target.value || elem.permissionItemDetailId === Number(e.target.value));
    if (isExist !== -1) {
      console.log('isExist', isExist);
      this.formGroup.get('userPermissions').removeAt(isExist);
    } else {
      this.userPermissions.push(this.fb.group({
        permissionItemId: sub.permissionItemId,
        permissionItemDetailId: Number(e.target.value)
      }));
    }
    console.log(this.formGroup.value);
  }
  collapseList2(i, id) {
    console.log(i, id);
    this.isCollapse = true;
    this.isIndex = i;
  }
  collapseList(item, i) {
    this.isShowpermisionsRoles = false;
    this.catRow = 55;
    if (this.ExpandRow == undefined || this.ExpandRow != i) {
      this.ExpandRow = i;
      // this.GetEmployeeTimeSlots(item);
    } else {
      this.ExpandRow = undefined;
    }
  }
  editrolesList(i) {
    // this.isShowBranchAdmin = this.isShowBranchAdmin == false ? true : false;
    if (this.catRow == undefined || this.catRow != i) {
      this.catRow = i;
      // this.GetEmployeeTimeSlots(item);
    } else {
      this.catRow = undefined;
    }
    if (this.isShowpermisionsRoles == false) {
      this.isShowpermisionsRoles = true;
    } else if (this.isShowpermisionsRoles == true) {
      const modalRef = this.modalService.open(_modal_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ModalConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowpermisionsRoles = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
    }
  }
  editUserInfo() {
    // this.isShowBranchInfo = this.isShowBranchInfo == false ? true : false;
    if (this.isShowUserInfo == false) {
      this.isShowUserInfo = true;
      this.isShowRolesPErmission = false;
      this.isShowWorkingHoursn = false;
      this.isShowLocation = false;
      this.isShowpermisionsRoles = false;
    } else if (this.isShowUserInfo == true) {
      const modalRef = this.modalService.open(_modal_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ModalConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowUserInfo = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowUserInfo = false;
        this.modalService.dismissAll();
      });
    }
  }
  editLocationInfo() {
    // this.isShowBranchInfo = this.isShowBranchInfo == false ? true : false;
    if (this.isShowLocation == false) {
      this.isShowLocation = true;
      this.isShowUserInfo = false;
      this.isShowWorkingHoursn = false;
      this.isShowRolesPErmission = false;
      this.isShowpermisionsRoles = false;
    } else if (this.isShowLocation == true) {
      const modalRef = this.modalService.open(_modal_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ModalConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        // console.log('result', result);
        this.isShowLocation = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
        console.log('onSubmit');
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowLocation = false;
        this.modalService.dismissAll();
      });
    }
  }
  editWorkingHoursInfo() {
    // this.isShowBranchInfo = this.isShowBranchInfo == false ? true : false;
    if (this.isShowWorkingHoursn == false) {
      this.isShowWorkingHoursn = true;
      this.isShowLocation = false;
      this.isShowUserInfo = false;
      this.isShowRolesPErmission = false;
      this.isShowpermisionsRoles = false;
    } else if (this.isShowWorkingHoursn == true) {
      const modalRef = this.modalService.open(_modal_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ModalConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowWorkingHoursn = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowWorkingHoursn = false;
        this.modalService.dismissAll();
      });
    }
  }
  editRolesPErmission() {
    // this.isShowBranchInfo = this.isShowBranchInfo == false ? true : false;
    if (this.isShowRolesPErmission == false) {
      this.isShowRolesPErmission = true;
      this.isShowWorkingHoursn = false;
      this.isShowLocation = false;
      this.isShowUserInfo = false;
      this.isShowpermisionsRoles = false;
    } else if (this.isShowRolesPErmission == true) {
      const modalRef = this.modalService.open(_modal_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_0__.ModalConfirmComponent);
      modalRef.componentInstance.name = 'edit';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowRolesPErmission = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowRolesPErmission = false;
        this.modalService.dismissAll();
      });
    }
  }
  getWorkingHours() {
    this.userService.getLookupsById(6).subscribe(response => {
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        this.userWorkingHours.push(this.fb.group({
          dayId: response.data[i]?.id,
          dayName: response.data[i]?.description,
          fromTime: '09:00',
          toTime: '17:00',
          selected: true,
          isActive: true,
          status: 2001
        }));
      }
    }, error => {
      this.errorMessage = error.message;
    });
  }
  // roles: any;
  getDefaultPermissions() {
    return this.userService.getDefaultPermissions().subscribe(response => {
      if (response) {
        this.roles = response.data;
      }
    });
  }
  checkSpecialChar(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return k > 64 && k < 91 || k > 96 && k < 123 || k == 8 || k == 32 || k >= 48 && k <= 57;
    // var regex = new RegExp("^[a-zA-Zء-ي0-9.]+$");
  }
}

AdduserComponent.ɵfac = function AdduserComponent_Factory(t) {
  return new (t || AdduserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_4__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalConfig));
};
AdduserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AdduserComponent,
  selectors: [["app-adduser"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe])],
  decls: 132,
  vars: 45,
  consts: [[1, "card-page"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "page-title"], [1, "card-form", "position-relative"], ["class", "overlay-bi", 4, "ngIf"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "form-check", "form-switch", "mb-2", "mx-2"], [1, "labelactive"], ["name", "isStatus", "type", "checkbox", "role", "switch", 1, "form-check-input", 3, "ngModel", "ngModelOptions", "disabled", "ngModelChange", "change"], ["class", "edit-btn float-end", 4, "ngIf"], [1, "col-md-4"], [1, "form-group", "overflow-hidden", "position-relative"], ["formControlName", "fullName", "name", "fullName", "type", "text", "placeholder", "Type name ", "required", "", "minlength", "6", "maxlength", "30", "OnlyCharacter", "", "autocomplete", "off", 1, "form-control"], ["class", "btn btn-remove", 3, "click", 4, "ngIf"], ["class", "ng-dirty", 4, "ngIf"], ["type", "text", "formControlName", "email", "name", "email", "placeholder", "email", "pattern", "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{1,6}$", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "position-relative"], ["type", "text", "formControlName", "mobile", "name", "mobile", "placeholder", "", "ng2TelInput", "", "min", "8", "max", "10", "minlength", "8", "maxlength", "10", 1, "form-control", 3, "ng2TelInputOptions", "keypress"], ["class", "ng-dirty", 3, "hidden", 4, "ngIf"], [1, "form-group"], ["name", "city", "id", "city", "placeholder", "Select", "formControlName", "city", "required", "", 3, "items", "change", "clear"], ["ng-label-tmp", ""], ["name", "branchId", "id", "branchId", "placeholder", "Select", "bindLabel", "branchName", "bindValue", "branchId", "formControlName", "branchId", "required", "", 3, "items", "change", "clear"], [1, ""], [1, "form-check", "mb-2"], [1, "day-active", "mt-0", "mb-2"], [1, "px-2", "mb-2"], ["formArrayName", "userWorkingHours", 4, "ngFor", "ngForOf"], ["formControlName", "contractStartDate", "name", "contractStartDate", "type", "date", "placeholder", "Type name ", 1, "form-control"], ["formControlName", "contractEndDate", "name", "contractEndDate", "type", "date", "placeholder", "Type name ", 1, "form-control", 3, "min"], ["name", "roleId", "id", "roleId", "placeholder", "Type name", "formControlName", "roleId", "bindLabel", "name", "bindValue", "roleId", "required", "", 3, "items", "change"], [1, "col-md-4", 2, "padding-top", "45px"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "indoor", "value", "indoor", "formControlName", "indoor", 1, "form-check-input"], ["for", "indoor", 1, "form-check-label"], ["type", "checkbox", "id", "outdoor", "value", "outdoor", "formControlName", "outdoor", 1, "form-check-input"], ["for", "outdoor", 1, "form-check-label"], [1, "page-title", "mb-2"], ["class", "main-category mt-0", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel"], ["type", "submit", "class", "btn btn-save", 4, "ngIf"], ["type", "button", "class", "btn btn-save btn-load", "disabled", "", 4, "ngIf"], [1, "overlay-bi"], [1, "edit-btn", "float-end"], ["type", "button", 1, "btn", 3, "click"], ["src", "assets/images/save.png", "class", "save-img", "alt", "", 4, "ngIf"], ["src", "assets/images/edit.png", "alt", "", 4, "ngIf"], ["src", "assets/images/save.png", "alt", "", 1, "save-img"], ["src", "assets/images/edit.png", "alt", ""], [1, "btn", "btn-remove", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "ng-dirty"], ["class", "error", 4, "ngIf"], [4, "ngIf"], [1, "error"], [1, "ng-dirty", 3, "hidden"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["src", "assets/images/save.png", "alt", "", "class", "save-img", 4, "ngIf"], ["formArrayName", "userWorkingHours"], [1, "row", 3, "formGroupName"], [1, "col-sm-4"], [1, "form-group", "day-active"], [1, "form-check", "form-switch", "justify-content-between"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDefault", "formControlName", "selected", 1, "form-check-input", 3, "change"], ["for", ""], [1, "from-to-time"], ["type", "time", "formControlName", "fromTime", "name", "fromTime", "placeholder", "", 1, "form-control", 3, "disabled"], ["type", "time", "formControlName", "toTime", "name", "toTime", "placeholder", "", 1, "form-control"], [1, "main-category", "mt-0"], [1, "cat-head"], ["type", "button", 1, "btn", "btn-book", 3, "click"], ["class", "fa-solid fa-chevron-down", 4, "ngIf"], ["class", "fa-solid fa-chevron-up", 4, "ngIf"], ["class", "bodyroles", 4, "ngIf"], [1, "fa-solid", "fa-chevron-down"], [1, "fa-solid", "fa-chevron-up"], [1, "bodyroles"], ["class", "overlay-ba", 4, "ngIf"], ["class", "cat-list", 4, "ngFor", "ngForOf"], [1, "overlay-ba"], [1, "cat-list"], [4, "ngFor", "ngForOf"], [1, "cat-sub"], ["class", "form-check form-check-inline", 4, "ngIf"], [1, "sub-details"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "form-check-input", 3, "id", "value", "checked", "change"], [1, "form-check-label", 3, "for"], ["type", "radio", 1, "form-check-input", 3, "name", "id", "value", "checked", "change"], ["type", "checkbox", 1, "form-check-input", 3, "value", "id", "checked", "disabled", "change"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-save"], ["type", "button", "disabled", "", 1, "btn", "btn-save", "btn-load"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function AdduserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AdduserComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Account Information ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AdduserComponent_div_8_Template, 1, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "div", 7)(12, "div", 8)(13, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Active ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AdduserComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.isStatus = $event;
      })("change", function AdduserComponent_Template_input_change_15_listener() {
        return ctx.chooseStatus();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, AdduserComponent_div_16_Template, 4, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Full Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, AdduserComponent_button_22_Template, 2, 0, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, AdduserComponent_div_23_Template, 3, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 12)(25, "div", 13)(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Email*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, AdduserComponent_button_29_Template, 2, 0, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AdduserComponent_div_30_Template, 4, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 12)(32, "div", 18)(33, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div")(36, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function AdduserComponent_Template_input_keypress_36_listener($event) {
        return ctx.numberOnly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, AdduserComponent_button_37_Template, 2, 0, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, AdduserComponent_div_38_Template, 3, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 3)(40, "div", 4)(41, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " Branch & Location * ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, AdduserComponent_div_44_Template, 1, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, AdduserComponent_div_45_Template, 4, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 2)(47, "div", 12)(48, "div", 21)(49, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " Location \" City \" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "ng-select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdduserComponent_Template_ng_select_change_51_listener($event) {
        return ctx.chooseCity($event);
      })("clear", function AdduserComponent_Template_ng_select_clear_51_listener($event) {
        return ctx.getbranchList($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, AdduserComponent_ng_template_52_Template, 1, 1, "ng-template", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, AdduserComponent_div_53_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 12)(55, "div", 21)(56, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, " Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "ng-select", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdduserComponent_Template_ng_select_change_58_listener($event) {
        return ctx.getBranchDetails($event);
      })("clear", function AdduserComponent_Template_ng_select_clear_58_listener($event) {
        return ctx.clearBranchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, AdduserComponent_div_59_Template, 3, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 3)(61, "div", 4)(62, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Working Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, AdduserComponent_div_65_Template, 1, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, AdduserComponent_div_66_Template, 4, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 2)(70, "div", 12)(71, "div", 27)(72, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, " Days ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 12)(75, "h6", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, " Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, AdduserComponent_div_79_Template, 20, 3, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 2)(81, "div", 3)(82, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Contract ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 12)(85, "div", 13)(86, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "Start Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, AdduserComponent_div_89_Template, 3, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 12)(91, "div", 13)(92, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, " End Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, AdduserComponent_div_95_Template, 3, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 3)(97, "div", 4)(98, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " Role ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](101, AdduserComponent_div_101_Template, 1, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](102, AdduserComponent_div_102_Template, 4, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 2)(104, "div", 12)(105, "div", 21)(106, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, " Role * ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "ng-select", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdduserComponent_Template_ng_select_change_108_listener($event) {
        return ctx.getRoleDetails($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](109, AdduserComponent_div_109_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 33)(111, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](114, " indoor ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](116, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, " outdoor ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "div", 3)(120, "div", 39)(121, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, " User Permissions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](123, AdduserComponent_div_123_Template, 8, 4, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](125, AdduserComponent_div_125_Template, 3, 1, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 3)(127, "div", 42)(128, "button", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](129, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](130, AdduserComponent_button_130_Template, 2, 1, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](131, AdduserComponent_button_131_Template, 2, 0, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("overflow-hidden", !ctx.isShowUserInfo && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowUserInfo && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.isStatus)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](41, _c0))("disabled", ctx.isEdit && ctx.sharedService.getUserId == ctx.userId.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formGroup.get("fullName").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["fullName"].invalid || ctx.formValid["fullName"].invalid && (ctx.formValid["fullName"].dirty || ctx.formValid["fullName"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formGroup.get("email").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["email"].invalid || ctx.formValid["email"].invalid && (ctx.formValid["email"].dirty || ctx.formValid["email"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ng2TelInputOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](43, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](42, _c1)));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formGroup.get("mobile").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formValid["mobile"].invalid && (ctx.formValid["mobile"].dirty || ctx.formValid["mobile"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("overflow-hidden", !ctx.isShowLocation && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowLocation && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.locations);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["city"].invalid || ctx.formValid["city"].invalid && (ctx.formValid["city"].dirty || ctx.formValid["city"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.branches);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["branchId"].invalid || ctx.formValid["branchId"].invalid && (ctx.formValid["branchId"].dirty || ctx.formValid["branchId"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("overflow-hidden", !ctx.isShowWorkingHoursn && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowWorkingHoursn && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.userWorkingHours.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formValid["contractStartDate"].invalid || ctx.formValid["contractStartDate"].invalid && (ctx.formValid["contractStartDate"].dirty || ctx.formValid["contractStartDate"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.formGroup.get("contractStartDate").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formValid["contractEndDate"].invalid || ctx.formValid["contractEndDate"].invalid && (ctx.formValid["contractEndDate"].dirty || ctx.formValid["contractStartDate"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("overflow-hidden", !ctx.isShowRolesPErmission && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isShowRolesPErmission && ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.rolesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["roleId"].invalid || ctx.formValid["roleId"].invalid && (ctx.formValid["roleId"].dirty || ctx.formValid["roleId"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.roles);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng2_tel_input__WEBPACK_IMPORTED_MODULE_5__.Ng2TelInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgLabelTemplateDirective, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_6__.CharacterDirective],
  styles: [".btn-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 37px;\n  color: #999;\n}\n\n.main-category[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #c4cdd5;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n  padding: 0px;\n  margin: 20px;\n}\n.main-category[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0 5px 5px;\n  color: inherit;\n  border: 0;\n  border-top: 1px solid;\n  opacity: 0.25;\n  border-color: #939393;\n}\n.main-category[_ngcontent-%COMP%]   .cat-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  align-items: center;\n}\n.main-category[_ngcontent-%COMP%]   .cat-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: #1b212d;\n}\n.main-category[_ngcontent-%COMP%]   .cat-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #dc3545;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.main-category[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  color: #1b212d;\n  padding: 15px;\n  width: 170px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-sub[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-sub[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 1rem;\n  padding: 13px 20px;\n}\n.main-category[_ngcontent-%COMP%]   .sub-details[_ngcontent-%COMP%] {\n  margin: 5px -4px;\n}\n.main-category[_ngcontent-%COMP%]   .bodyroles[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.main-category[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  margin: 12px 15px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1b212d;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 37px;\n  color: #999;\n}\n\n.pt30[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.overlay-bi[_ngcontent-%COMP%], .overlay-wh[_ngcontent-%COMP%], .overlay-ba[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n\n.edit-btn[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n  z-index: 5;\n  position: relative;\n}\n.edit-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 28px;\n  margin-top: -14px;\n}\n.edit-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.edit-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vdXNlcnMvYWRkdXNlci9hZGR1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFTjtBQUFJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRU47QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFTjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBQUk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUVFO0VBRUUsZ0JBQUE7QUFESjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0U7RUFDRSxpQkFBQTtBQURKOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUFGOztBQVFBO0VBQ0UsaUJBQUE7QUFMRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBSEY7O0FBS0E7OztFQUdFLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRkY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBREY7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXJlbW92ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAzN3B4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLm1haW4tY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNjNGNkZDU7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAyMHB4O1xuXG4gIGhyIHtcbiAgICBtYXJnaW46IDAgNXB4IDVweDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTM5MzkzO1xuICB9XG4gIC5jYXQtaGVhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbiAgLmNhdC1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoNCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB3aWR0aDogMTcwcHg7XG4gICAgfVxuICB9XG4gIC5jYXQtc3ViIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgLmZvcm0tY2hlY2staW5saW5lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDEzcHggMjBweDtcbiAgICB9XG4gIH1cblxuICAuc3ViLWRldGFpbHMge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiA1cHggLTRweDtcbiAgfVxuICAuYm9keXJvbGVzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuZWRpdC1idG4ge1xuICAgIG1hcmdpbjogMTJweCAxNXB4O1xuICB9XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzFiMjEyZDtcbn1cbi5idG4tcmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDM3cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4vLyAuY2FyZC1mb3JtIHtcbi8vICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBtYXJnaW46IDA7XG4vLyB9XG4ucHQzMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnBhZ2UtdGl0bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG4ub3ZlcmxheS1iaSxcbi5vdmVybGF5LXdoLFxuLm92ZXJsYXktYmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTkgMTk5IDE5OSAvIDIxJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uZWRpdC1idG4ge1xuICBtYXJnaW46IDBweCAwcHg7XG4gIHotaW5kZXg6IDU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmJ0biB7XG4gICAgY29sb3I6ICNkYzM1NDU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xuICB9XG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAyMnB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 41845:
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/users/modal/modal-confirm/modal-confirm.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalConfirmComponent": () => (/* binding */ ModalConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




class ModalConfirmComponent {
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
ModalConfirmComponent.ɵfac = function ModalConfirmComponent_Factory(t) {
  return new (t || ModalConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ModalConfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModalConfirmComponent,
  selectors: [["app-modal-confirm"]],
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
  template: function ModalConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Are you sure you want to save changes? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmComponent_Template_button_click_5_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmComponent_Template_button_click_7_listener() {
        ctx.close();
        return ctx.activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: #75b878;\n  margin-bottom: 30px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  width: 120px;\n  border-radius: 30px;\n  display: block;\n  color: #000;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vdXNlcnMvbW9kYWwvbW9kYWwtY29uZmlybS9tb2RhbC1jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVGO0FBREU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbiAgaSB7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICAgIGNvbG9yOiAjNzViODc4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5tb2RhbC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLmJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70964:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/users/modal/modal-done/modal-done.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDoneComponent": () => (/* binding */ ModalDoneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class ModalDoneComponent {
  constructor(activeModal, modalService, router) {
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.router = router;
  }
  ngOnInit() {
    console.log(this.name);
    console.log(typeof this.name);
    if (this.name == 'add') {
      setTimeout(() => {
        this.modalService.dismissAll();
        this.router.navigateByUrl('/users');
      }, 4000);
    } else {
      setTimeout(() => {
        this.modalService.dismissAll();
      }, 4000);
    }
  }
}
ModalDoneComponent.ɵfac = function ModalDoneComponent_Factory(t) {
  return new (t || ModalDoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ModalDoneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModalDoneComponent,
  selectors: [["app-modal-done"]],
  inputs: {
    name: "name"
  },
  decls: 7,
  vars: 2,
  consts: [[1, "modal-body"], [1, "message"], [1, "fa-regular", "fa-circle-check"], [3, "hidden"]],
  template: function ModalDoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " User added successfully");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your user details is edited successfully");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.name != "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.name == "add");
    }
  },
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 10px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: #75b878;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vdXNlcnMvbW9kYWwvbW9kYWwtZG9uZS9tb2RhbC1kb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG4gIGl7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICAgIGNvbG9yOiAjNzViODc4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 77341:
/*!***************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/users/user.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/shared.service */ 69082);



class UserService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  GetUsers(searchText, sort, branchId, roleId, pageNo) {
    return this.http.get(this.apiUrl + `User/GetUsers?Search=${searchText}&Sort=${sort}&BranchId=${branchId}&RoleId=${roleId}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  AddUser(role) {
    return this.http.post(this.apiUrl + 'User/AddUser', role, this.sharedService.getHeaders());
  }
  EditUser(role) {
    return this.http.post(this.apiUrl + 'User/EditUser', role, this.sharedService.getHeaders());
  }
  GetUserDetails(id) {
    return this.http.get(this.apiUrl + `User/GetUSERDetails?userId=${id}`, this.sharedService.getHeaders());
  }
  GetLocations() {
    return this.http.get(this.apiUrl + `Lookups/GetLocations`, this.sharedService.getHeaders());
  }
  GetBranches(searchText) {
    return this.http.get(this.apiUrl + `Branches/GetBranches?Search=${searchText}&Status=2001&sort=2`, this.sharedService.getHeaders());
  }
  GetRoles() {
    return this.http.get(this.apiUrl + `Roles/GetRoles?Status=2001&Sort=2`, this.sharedService.getHeaders());
  }
  getBranchDetails(id) {
    return this.http.get(this.apiUrl + `Branches/GetBranchDetails?branchId=${id}`, this.sharedService.getHeaders());
  }
  GetRoleDetails(id) {
    return this.http.get(this.apiUrl + `Roles/GetRoleDetails?roleId=${id}`, this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + 'Lookups/GetLookups?lookupTypeId=' + id, this.sharedService.getHeaders());
  }
  getDefaultPermissions() {
    return this.http.get(this.apiUrl + `Permissions/GetDefaultPermissions?Status=2001`, this.sharedService.getHeaders());
  }
}
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 98436:
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/users/users-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adduser/adduser.component */ 15256);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component */ 81494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent
}, {
  path: 'adduser',
  component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_0__.AdduserComponent
}, {
  path: 'view-user/:id',
  component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_0__.AdduserComponent
}];
class UsersRoutingModule {}
UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) {
  return new (t || UsersRoutingModule)();
};
UsersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: UsersRoutingModule
});
UsersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UsersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 81494:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/users/users.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 77341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/not-found/not-found.component */ 59442);











function UsersComponent_div_19_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 33);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 35)(14, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td")(16, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_div_19_tr_34_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.viewUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "View details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7.role == null ? null : item_r7.role.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r7.branch == null ? null : item_r7.branch.branchName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r7.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r7.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r7.status == "2001");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("ngbTooltip", " Invitation: ", item_r7.invitation == 2004 ? "Completed" : "Pending", "")("routerLink", "/users/view-user/", item_r7.userId, "");
  }
}
function UsersComponent_div_19_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "div", 23)(2, "div", 24)(3, "table", 25)(4, "thead")(5, "tr")(6, "th", 26)(7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_div_19_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.sortByName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " User Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 28)(10, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 26)(12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_div_19_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.sortByNoUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 28)(15, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 26)(17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_div_19_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.sortByIndoorOutdoor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Branche ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 28)(20, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 26)(22, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 26)(25, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 26)(28, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Activation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 26)(31, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, UsersComponent_div_19_tr_34_Template, 18, 8, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, UsersComponent_div_19_div_35_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const users_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (users_r4 == null ? null : users_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (users_r4 == null ? null : users_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (users_r4 == null ? null : users_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", users_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (users_r4 == null ? null : users_r4.length) == 0);
  }
}
function UsersComponent_ng_template_21_Template(rf, ctx) {
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
function UsersComponent_li_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_li_34_Template_button_click_1_listener() {
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
class UsersComponent {
  constructor(userService, router, headerService) {
    this.userService = userService;
    this.router = router;
    this.headerService = headerService;
    this.searchText = '';
    this.sort = 1;
    this.branchId = '';
    this.roleId = '';
    this.pageNo = 0;
    this.searchBranch = '';
  }
  ngOnInit() {
    this.headerService.setTitle('Users');
    this.getUsers();
    this.GetBranches();
    this.GetRoles();
  }
  addUser() {
    this.router.navigateByUrl('/users/adduser');
    this.headerService.setTitle('Users > Add user');
  }
  viewUser() {
    // this.router.navigateByUrl('/addbranch');
    this.headerService.setTitle('Users > View user');
    // this.titleOfPage.emit('Branches > Add branch');
    // view-branch/{{item.branchId}}
  }

  getUsers() {
    return this.userService.GetUsers(this.searchText, this.sort, this.branchId, this.roleId, this.pageNo).subscribe(response => {
      if (response) {
        this.users = response.data;
        this.totalPages = response.totalPages;
        this.totalRecordsCount = response.info.totalRecordsCount;
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
      this.getUsers();
    }
    if (text.length == 0) {
      this.getUsers();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.sort = 1;
    this.getUsers();
  }
  sortByName() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getUsers();
  }
  sortByNoUser() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getUsers();
  }
  sortByIndoorOutdoor() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getUsers();
  }
  sortByActivation() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getUsers();
  }
  filterByBranchId(e) {
    console.log(e);
    this.branchId = e.branchId;
    this.pageNo = 0;
    this.getUsers();
  }
  clearBranch($event) {
    this.branchId = '';
    this.getUsers();
  }
  filterByRoleId(e) {
    console.log(e);
    this.roleId = e.roleId;
    this.pageNo = 0;
    this.getUsers();
  }
  clearRole($event) {
    this.roleId = '';
    this.getUsers();
  }
  setPage(page) {
    this.pageNo = page;
    this.getUsers();
    window.scroll(0, 0);
  }
  GetBranches() {
    return this.userService.GetBranches(this.searchBranch).subscribe(response => {
      if (response) {
        this.branches = response.data;
      }
    });
  }
  GetRoles() {
    return this.userService.GetRoles().subscribe(response => {
      if (response) {
        this.roles = response.data;
      }
    });
  }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) {
  return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService));
};
UsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UsersComponent,
  selectors: [["app-users"]],
  decls: 35,
  vars: 12,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-5"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "col-md-2"], [1, "col-md-5", "d-flex", "justify-content-end", "btnadd"], [1, "form-group"], ["name", "BranchId", "id", "BranchId", "placeholder", "Branch", "bindLabel", "branchName", "bindValue", "branchId", "required", "", 3, "items", "change", "clear"], ["name", "RoleId", "id", "RoleId", "placeholder", "Role", "bindLabel", "name", "bindValue", "roleId", "required", "", 3, "items", "change", "clear"], [1, "btn", "btn-add", 3, "click"], ["src", "assets/images/plus.png", "alt", ""], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "card-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["scope", "row"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", "readonly", "", "disabled", "", 1, "form-check-input", 3, "checked"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], ["placement", "top", 1, "btn", "btn-view", 3, "ngbTooltip", "routerLink", "click"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_4_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function UsersComponent_Template_input_keyup_6_listener($event) {
        return ctx.searchRoles($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_7_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "ng-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UsersComponent_Template_ng_select_change_12_listener($event) {
        return ctx.filterByBranchId($event);
      })("clear", function UsersComponent_Template_ng_select_clear_12_listener($event) {
        return ctx.clearBranch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11)(14, "ng-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UsersComponent_Template_ng_select_change_14_listener($event) {
        return ctx.filterByRoleId($event);
      })("clear", function UsersComponent_Template_ng_select_clear_14_listener($event) {
        return ctx.clearRole($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_15_listener() {
        return ctx.addUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Add User ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, UsersComponent_div_19_Template, 36, 17, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, UsersComponent_ng_template_21_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 19)(24, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 19)(33, "ul", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, UsersComponent_li_34_Template, 3, 5, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.branches);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.roles);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.users)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", (ctx.users == null ? null : ctx.users.length) > 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.users == null ? null : ctx.users.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.totalRecords, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.totalRecordsCount < 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.pages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent],
  styles: [".form-group[_ngcontent-%COMP%] {\n  width: 150px;\n  margin: 0px 5px;\n}\n\n.btnadd[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.btnadd[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  margin: 0px 0px 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQURFO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbn1cbi5idG5hZGQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuYnRuLWFkZCB7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 91421:
/*!***************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/users/users.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 98436);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component */ 81494);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adduser/adduser.component */ 15256);
/* harmony import */ var _branches_modal_done_modal_done_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../branches/modal-done/modal-done.component */ 82226);
/* harmony import */ var _branches_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../branches/modal-confirm/modal-confirm.component */ 9687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);








class UsersModule {}
UsersModule.ɵfac = function UsersModule_Factory(t) {
  return new (t || UsersModule)();
};
UsersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: UsersModule
});
UsersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UsersModule, {
    declarations: [_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent, _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_3__.AdduserComponent, _branches_modal_done_modal_done_component__WEBPACK_IMPORTED_MODULE_4__.ModalDoneComponent, _branches_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_5__.ModalConfirmComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_admin_users_users_module_ts.js.map