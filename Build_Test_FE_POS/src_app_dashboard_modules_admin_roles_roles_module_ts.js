"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_admin_roles_roles_module_ts"],{

/***/ 87339:
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/roles/add-roles/add-roles.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRolesComponent": () => (/* binding */ AddRolesComponent)
/* harmony export */ });
/* harmony import */ var _confirm_role_confirm_role_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../confirm-role/confirm-role.component */ 16479);
/* harmony import */ var _role_done_role_done_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../role-done/role-done.component */ 74095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/roles.service */ 59815);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/directive/character.directive */ 80145);











function AddRolesComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRolesComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.removeBranchName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRolesComponent_div_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span");
  }
}
function AddRolesComponent_div_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This element is required, please fill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRolesComponent_div_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Role name length must be between 6 and 30 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddRolesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddRolesComponent_div_12_span_1_Template, 1, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRolesComponent_div_12_span_2_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRolesComponent_div_12_span_3_Template, 3, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.formValid["name"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.formValid["name"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.formValid["name"].errors["minlength"]);
  }
}
function AddRolesComponent_div_32_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 37);
  }
}
function AddRolesComponent_div_32_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 38);
  }
}
function AddRolesComponent_div_32_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 43);
  }
}
function AddRolesComponent_div_32_div_7_div_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 48);
  }
}
function AddRolesComponent_div_32_div_7_div_3_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 49);
  }
}
function AddRolesComponent_div_32_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44)(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRolesComponent_div_32_div_7_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.editrolesList(i_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRolesComponent_div_32_div_7_div_3_img_2_Template, 1, 0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRolesComponent_div_32_div_7_div_3_img_3_Template, 1, 0, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.isShowpermisionsRoles && ctx_r16.catRow == i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r16.isShowpermisionsRoles || ctx_r16.catRow != i_r11);
  }
}
function AddRolesComponent_div_32_div_7_div_4_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRolesComponent_div_32_div_7_div_4_div_4_div_2_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const sub_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.pushPermissionItemId($event, item_r24, sub_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sub_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", sub_r26.permissionItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", sub_r26.permissionItemId)("checked", ctx_r27.isChecked(sub_r26.permissionItemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", sub_r26.permissionItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", sub_r26.perItemName, " ");
  }
}
function AddRolesComponent_div_32_div_7_div_4_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRolesComponent_div_32_div_7_div_4_div_4_div_3_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const sub_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r35.pushPermissionItemId($event, item_r24, sub_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sub_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("name", item_r24.permissionSubCatId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", sub_r26.permissionItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", sub_r26.permissionItemId)("checked", ctx_r28.isChecked(sub_r26.permissionItemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("for", sub_r26.permissionItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", sub_r26.perItemName, " ");
  }
}
function AddRolesComponent_div_32_div_7_div_4_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddRolesComponent_div_32_div_7_div_4_div_4_div_5_Template_input_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43);
      const details_r41 = restoredCtx.$implicit;
      const sub_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r42.pushPermissionItemDetailId($event, details_r41.permissionItemId, sub_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const details_r41 = ctx.$implicit;
    const sub_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "d-", details_r41.permissionItemDetailsId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", details_r41.permissionItemDetailsId)("checked", ctx_r29.isChecked(sub_r26.permissionItemId))("disabled", details_r41.permissionItemId == sub_r26.permissionItemId && !ctx_r29.isChecked(sub_r26.permissionItemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("for", "d-", details_r41.permissionItemDetailsId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", details_r41.perItemDetailsName, " ");
  }
}
function AddRolesComponent_div_32_div_7_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRolesComponent_div_32_div_7_div_4_div_4_div_2_Template, 4, 5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRolesComponent_div_32_div_7_div_4_div_4_div_3_Template, 4, 6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddRolesComponent_div_32_div_7_div_4_div_4_div_5_Template, 4, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sub_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", sub_r26.perItemName == "View Only" || sub_r26.perItemName == "View & Edit" || sub_r26.perItemName == "View & Manage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", sub_r26.perItemName == "Yes" || sub_r26.perItemName == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", sub_r26.permissionItemDetails);
  }
}
function AddRolesComponent_div_32_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "div")(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddRolesComponent_div_32_div_7_div_4_div_4_Template, 6, 3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r24.perSubCatName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r24.permissionItems);
  }
}
function AddRolesComponent_div_32_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRolesComponent_div_32_div_7_div_2_Template, 1, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddRolesComponent_div_32_div_7_div_3_Template, 4, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddRolesComponent_div_32_div_7_div_4_Template, 5, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r11 = ctx_r46.index;
    const category_r10 = ctx_r46.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r11 != ctx_r14.catRow && ctx_r14.isEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.isEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", category_r10.permissionSubCategories);
  }
}
function AddRolesComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRolesComponent_div_32_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      const category_r10 = restoredCtx.$implicit;
      const i_r11 = restoredCtx.index;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r47.collapseList(category_r10, i_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddRolesComponent_div_32_i_5_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddRolesComponent_div_32_i_6_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddRolesComponent_div_32_div_7_Template, 5, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", category_r10.perCatName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r11 != ctx_r2.ExpandRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r11 == ctx_r2.ExpandRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r11 == ctx_r2.ExpandRow);
  }
}
function AddRolesComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", !ctx_r3.isEdit ? "Add" : "Save", " ");
  }
}
function AddRolesComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class AddRolesComponent {
  constructor(rolesService, router, modalService, toster, route, headerService, fb, config) {
    this.rolesService = rolesService;
    this.router = router;
    this.modalService = modalService;
    this.toster = toster;
    this.route = route;
    this.headerService = headerService;
    this.fb = fb;
    this.submitted = false;
    this.isStatus = true;
    this.isShowpermisionsRoles = false;
    this.catNo = 9;
    this.editRow = true;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.getForm();
    this.roleId = this.route.snapshot.params['id'];
    if (this.roleId) {
      this.getRoleDetails();
      this.isEdit = true;
      if (this.isEdit = true) {
        this.headerService.setTitle('Roles > View role');
      }
    } else {
      this.headerService.setTitle('Roles > Add role');
      this.getDefaultPermissions();
    }
  }
  getForm() {
    this.formGroup = this.fb.group({
      roleId: 0,
      name: [''],
      indoor: false,
      outdoor: false,
      status: 2001,
      rolePermissions: this.fb.array([])
    });
  }
  get rolePermissions() {
    return this.formGroup.controls['rolePermissions'];
  }
  get formValid() {
    return this.formGroup.controls;
  }
  AddRolePermissions() {
    return this.fb.group({
      permissionSubCatId: [''],
      permissionItemId: 0,
      permissionItemDetailId: 0
    });
  }
  getDefaultPermissions() {
    return this.rolesService.getDefaultPermissions().subscribe(response => {
      if (response) {
        this.roles = response.data;
      }
    });
  }
  getRoleDetails() {
    return this.rolesService.GetRoleDetails(this.roleId).subscribe(response => {
      if (response) {
        this.roles = response.data.permissions;
        this.formGroup.patchValue(response.data);
        // this.formGroup.get('adminUser')?.patchValue();
        if (this.formGroup.get('status')?.value == 2001) {
          this.isStatus = true;
        } else {
          this.isStatus = false;
        }
        console.log('selected', this.roles?.permissionSubCategories);
        for (let x = 0; x < this.roles?.length; x++) {
          for (let c = 0; c < this.roles[x]?.permissionSubCategories?.length; c++) {
            for (let i = 0; i < this.roles[x].permissionSubCategories[c].permissionItems?.length; i++) {
              if (this.roles[x].permissionSubCategories[c].permissionItems[i].selected == true) {
                this.rolePermissions.push(this.fb.group({
                  permissionSubCatId: this.roles[x].permissionSubCategories[c].permissionSubCatId,
                  permissionItemId: this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemId
                }));
                for (let d = 0; d < this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemDetails?.length; d++) {
                  if (this.roles[x].permissionSubCategories[c].permissionItems[i].permissionItemDetails[d].selected == true) {
                    this.rolePermissions.push(this.fb.group({
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
  onSubmit() {
    this.submitted = true;
    this.formGroup.get('name')?.patchValue(this.formGroup.get('name')?.value.trim());
    if (this.formGroup.invalid) {
      return window.scroll(0, 0);
    }
    //   const myArray = this.formGroup.value.rolePermissions.filter((item:any ) => {
    //     console.log(item)
    //     return item.permissionItemDetailId !== 0;
    // });
    const myArray = this.formGroup.value.rolePermissions.forEach(object => {
      if (object.permissionItemDetailId == 0) {
        delete object['permissionItemDetailId'];
      }
    });
    // permissionSubCatId: [''],
    // permissionItemId: 0,
    // permissionItemDetailId: 0,
    console.log(myArray);
    console.log(this.formGroup.value);
    if (this.formGroup.get('roleId')?.value == 0) {
      this.AddRole();
    } else {
      this.UpdateRole();
    }
  }
  AddRole() {
    this.isLoading = true;
    console.log(this.formGroup.value);
    return this.rolesService.AddRole(this.formGroup.value).subscribe(response => {
      if (response.isSuccess == true) {
        this.isLoading = false;
        console.log(response);
        const modalRef = this.modalService.open(_role_done_role_done_component__WEBPACK_IMPORTED_MODULE_1__.RoleDoneComponent);
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
  UpdateRole() {
    this.isLoading = true;
    console.log(this.formGroup.value);
    return this.rolesService.UpdateRole(this.formGroup.value).subscribe(response => {
      if (response.isSuccess == true) {
        console.log(response);
        const modalRef = this.modalService.open(_role_done_role_done_component__WEBPACK_IMPORTED_MODULE_1__.RoleDoneComponent);
        modalRef.componentInstance.name = 'edit';
        this.isLoading = false;
        this.isShowpermisionsRoles = false;
      } else {
        this.isLoading = false;
        this.errorsList = response.Errors || response.errors;
      }
    }, error => {
      this.isLoading = false;
      console.log(error), this.errorMessage = error.statusText;
    });
  }
  removeBranchName() {
    this.formGroup.get('name')?.patchValue('');
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
  pushPermissionItemId(e, permissionItem, supItem) {
    console.log(permissionItem);
    console.log(supItem);
    let isExist = this.formGroup.value.rolePermissions.findIndex(elem => elem.permissionItemId === supItem.permissionItemId);
    this.formGroup.value.rolePermissions.forEach(element => {
      console.log(element.permissionSubCatId);
      let PSubCatId = this.formGroup.value.rolePermissions.findIndex(subCat => subCat.permissionSubCatId === permissionItem.permissionSubCatId);
      if (PSubCatId !== -1) {
        console.log('PSubCatId', PSubCatId);
        this.formGroup.get('rolePermissions').removeAt(PSubCatId);
      }
    });
    // hash
    // let PSubCatId = this.formGroup.value.rolePermissions.findIndex(
    //   (subCat: any) =>
    //     subCat.permissionSubCatId === permissionItem.permissionSubCatId
    // );
    // console.log(PSubCatId);
    if (isExist !== -1) {
      console.log('isExist', isExist);
      this.formGroup.get('rolePermissions').removeAt(isExist);
      // hash
      // if (PSubCatId !== -1) {
      //   console.log('PSubCatId', PSubCatId);
      //   (this.formGroup.get('rolePermissions') as FormArray).removeAt(
      //     PSubCatId
      //   );
      // }
    } else {
      // if (PSubCatId !== -1) {
      //   console.log('PSubCatId', PSubCatId);
      //   (this.formGroup.get('rolePermissions') as FormArray).removeAt(
      //     PSubCatId
      //   );
      // }
      this.rolePermissions.push(this.fb.group({
        permissionSubCatId: permissionItem.permissionSubCatId,
        permissionItemId: supItem.permissionItemId,
        permissionItemDetailId: 0
      }));
      supItem.permissionItemDetails.forEach(element => {
        this.rolePermissions.push(this.fb.group({
          permissionSubCatId: permissionItem.permissionSubCatId,
          permissionItemId: supItem.permissionItemId,
          permissionItemDetailId: element.permissionItemDetailsId
        }));
      });
    }
    // let PSubCatId = this.formGroup.value.rolePermissions.findIndex(
    //   (subCat: any) => subCat.permissionSubCatId === permissionSubCatId
    // );
    // if (PSubCatId !== -1) {
    // console.log('isExist', PSubCatId);
    // (this.formGroup.get('rolePermissions') as FormArray).removeAt(PSubCatId);
    // let isExist = this.formGroup.value.rolePermissions.findIndex(
    //   (elem: any) =>
    //     elem.permissionItemId === e.target.value ||
    //     elem.permissionItemId === Number(e.target.value)
    // );
    // if (isExist !== -1) {
    //   console.log('isExist', isExist);
    //   (this.formGroup.get('rolePermissions') as FormArray).removeAt(isExist);
    // } else {
    //   this.rolePermissions.push(
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
    return this.formGroup.value.rolePermissions.find(x => x.permissionItemId === sitemid);
  }
  pushPermissionItemDetailId(e, permissionItemId, sub) {
    let isExist = this.formGroup.value.rolePermissions.findIndex(elem => elem.permissionItemDetailId === e.target.value || elem.permissionItemDetailId === Number(e.target.value));
    if (isExist !== -1) {
      console.log('isExist', isExist);
      this.formGroup.get('rolePermissions').removeAt(isExist);
    } else {
      this.rolePermissions.push(this.fb.group({
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
      this.editRow = true;
      // this.GetEmployeeTimeSlots(item);
    } else {
      this.catRow = undefined;
    }
    if (this.isShowpermisionsRoles == false) {
      this.isShowpermisionsRoles = true;
    } else if (this.isShowpermisionsRoles == true) {
      const modalRef = this.modalService.open(_confirm_role_confirm_role_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmRoleComponent);
      modalRef.componentInstance.name = 'World';
      modalRef.componentInstance.semdToConfirm.subscribe(result => {
        console.log('result', result);
        this.isShowpermisionsRoles = false;
        this.modalService.dismissAll();
        // this.updateBranch();
        this.onSubmit();
      });
      modalRef.componentInstance.sendToClose.subscribe(result => {
        console.log('resulttoclose', result);
        this.isShowpermisionsRoles = false;
        this.modalService.dismissAll();
      });
    }
  }
  checkSpecialChar(e) {
    // var term = 'e';
    // var re = new RegExp(/^([a-zA-Z0-9_\u0600-\u06FF]).{0,30}$/);
    // if (re.test(term)) {
    //   console.log('Valid');
    // } else {
    //   console.log('Invalid');
    // }
    // '/^([a-zA-Z0-9_\u0600-\u06FF]).{0,30}$/'
    var term = e;
    var re = new RegExp('/^([a-zA-Z0-9_\u0600-\u06FF]).{0,30}$/');
    if (re.test(term)) {
      console.log('Valid');
    } else {
      console.log('Invalid');
    }
    // var regex = /^([a-zA-Z0-9_\u0600-\u06FF]).{0,30}$/;
    // var result = regex.test('happy- - - /*  */ % ! ~');
    // console.log(result);
    // /^[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]*$/i
    // var k;
    // document.all ? (k = e.keyCode) : (k = e.which);
    // return (
    //   (k > 64 && k < 91) ||
    //   (k > 96 && k < 123) ||
    //   (k >= 97 && k <= 123) ||
    //   k == 8 ||
    //   k == 32 ||
    //   (k >= 48 && k <= 57)
    // );
  }
}

AddRolesComponent.ɵfac = function AddRolesComponent_Factory(t) {
  return new (t || AddRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_2__.RolesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalConfig));
};
AddRolesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddRolesComponent,
  selectors: [["app-add-roles"]],
  decls: 39,
  vars: 9,
  consts: [[1, "card-page"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "card-form", "py-3", "overflow-hidden", "position-relative"], [1, "col-md-4"], [1, "form-group", "overflow-hidden", "position-relative", "mb-0"], ["formControlName", "name", "name", "name", "type", "text", "placeholder", "Type...", "required", "", "minlength", "6", "maxlength", "30", "OnlyCharacter", "", "autocomplete", "off", 1, "form-control", 3, "keypress"], ["class", "btn btn-remove", 3, "click", 4, "ngIf"], ["class", "ng-dirty", 4, "ngIf"], [1, "d-flex", "justify-content-end", "align-items-center", "pt30"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "indoor", "value", "option1", "formControlName", "indoor", 1, "form-check-input"], ["for", "indoor", 1, "form-check-label"], ["type", "checkbox", "id", "outdoor", "value", "option2", "formControlName", "outdoor", 1, "form-check-input"], ["for", "outdoor", 1, "form-check-label"], [1, "form-check", "form-switch", 2, "margin-top", "-16px"], [1, "labelactive"], ["name", "isStatus", "type", "checkbox", "role", "switch", 1, "form-check-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "page-title"], ["class", "main-category mt-0", 4, "ngFor", "ngForOf"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel"], ["type", "submit", "class", "btn btn-save", 4, "ngIf"], ["type", "button", "class", "btn btn-save btn-load", "disabled", "", 4, "ngIf"], [1, "btn", "btn-remove", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "ng-dirty"], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "main-category", "mt-0"], [1, "cat-head"], ["type", "button", 1, "btn", "btn-book", 3, "click"], ["class", "fa-solid fa-chevron-down", 4, "ngIf"], ["class", "fa-solid fa-chevron-up", 4, "ngIf"], ["class", "bodyroles", 4, "ngIf"], [1, "fa-solid", "fa-chevron-down"], [1, "fa-solid", "fa-chevron-up"], [1, "bodyroles"], ["class", "overlay-ba", 4, "ngIf"], ["class", "edit-btn float-end", 4, "ngIf"], ["class", "cat-list", 4, "ngFor", "ngForOf"], [1, "overlay-ba"], [1, "edit-btn", "float-end"], ["type", "button", 1, "btn", 3, "click"], ["src", "assets/images/save.png", "class", "save-img", "alt", "", 4, "ngIf"], ["src", "assets/images/edit.png", "alt", "", 4, "ngIf"], ["src", "assets/images/save.png", "alt", "", 1, "save-img"], ["src", "assets/images/edit.png", "alt", ""], [1, "cat-list"], [4, "ngFor", "ngForOf"], [1, "cat-sub"], ["class", "form-check form-check-inline", 4, "ngIf"], [1, "sub-details"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "form-check-input", 3, "id", "value", "checked", "change"], [1, "form-check-label", 3, "for"], ["type", "radio", 1, "form-check-input", 3, "name", "id", "value", "checked", "change"], ["type", "checkbox", 1, "form-check-input", 3, "value", "id", "checked", "disabled", "change"], ["type", "submit", 1, "btn", "btn-save"], ["type", "button", "disabled", "", 1, "btn", "btn-save", "btn-load"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function AddRolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddRolesComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 2)(6, "div", 5)(7, "div", 6)(8, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Role Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AddRolesComponent_Template_input_keypress_10_listener($event) {
        return ctx.checkSpecialChar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddRolesComponent_button_11_Template, 2, 0, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AddRolesComponent_div_12_Template, 4, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 5)(15, "div", 10)(16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Indoor ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Outdoor ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 16)(25, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Active ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddRolesComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.isStatus = $event;
      })("change", function AddRolesComponent_Template_input_change_27_listener() {
        return ctx.chooseStatus();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 3)(29, "div", 19)(30, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Default Permissions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, AddRolesComponent_div_32_Template, 8, 4, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 3)(34, "div", 21)(35, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AddRolesComponent_button_37_Template, 2, 1, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, AddRolesComponent_button_38_Template, 2, 0, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("name").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.formValid["name"].invalid || ctx.formValid["name"].invalid && (ctx.formValid["name"].dirty || ctx.formValid["name"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.isStatus)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.roles);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_4__.CharacterDirective],
  styles: [".main-category[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #c4cdd5;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n  padding: 0px;\n  margin: 30px;\n}\n.main-category[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0 5px 5px;\n  color: inherit;\n  border: 0;\n  border-top: 1px solid;\n  opacity: 0.25;\n  border-color: #939393;\n}\n.main-category[_ngcontent-%COMP%]   .cat-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  align-items: center;\n}\n.main-category[_ngcontent-%COMP%]   .cat-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: #1b212d;\n}\n.main-category[_ngcontent-%COMP%]   .cat-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #dc3545;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.main-category[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  color: #1b212d;\n  padding: 15px;\n  width: 170px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-sub[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.main-category[_ngcontent-%COMP%]   .cat-sub[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 1rem;\n  padding: 13px 20px;\n}\n.main-category[_ngcontent-%COMP%]   .sub-details[_ngcontent-%COMP%] {\n  margin: 5px -4px;\n}\n.main-category[_ngcontent-%COMP%]   .bodyroles[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1b212d;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 37px;\n  color: #999;\n}\n\n.card-form[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  margin: 0;\n}\n\n.pt30[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.overlay-bi[_ngcontent-%COMP%], .overlay-wh[_ngcontent-%COMP%], .overlay-ba[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(199, 199, 199, 0.21);\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n}\n\n.edit-btn[_ngcontent-%COMP%] {\n  margin: 0px 15px;\n  z-index: 5;\n  position: relative;\n}\n.edit-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 28px;\n  margin-top: -14px;\n}\n.edit-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.edit-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vcm9sZXMvYWRkLXJvbGVzL2FkZC1yb2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFTjtBQUFJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRU47QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFTjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBQUk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUVFO0VBRUUsZ0JBQUE7QUFESjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREE7OztFQUdFLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUtGO0FBSkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTUo7QUFKRTtFQUNFLGVBQUE7QUFNSjtBQUpFO0VBQ0UsV0FBQTtBQU1KIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNjNGNkZDU7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAzMHB4O1xuXG4gIGhyIHtcbiAgICBtYXJnaW46IDAgNXB4IDVweDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTM5MzkzO1xuICB9XG4gIC5jYXQtaGVhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbiAgLmNhdC1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoNCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB3aWR0aDogMTcwcHg7XG4gICAgfVxuICB9XG4gIC5jYXQtc3ViIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgLmZvcm0tY2hlY2staW5saW5lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDEzcHggMjBweDtcbiAgICB9XG4gIH1cblxuICAuc3ViLWRldGFpbHMge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiA1cHggLTRweDtcbiAgfVxuICAuYm9keXJvbGVze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzFiMjEyZDtcbn1cbi5idG4tcmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDM3cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uY2FyZC1mb3JtIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ucHQzMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnBhZ2UtdGl0bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG4ub3ZlcmxheS1iaSxcbi5vdmVybGF5LXdoLFxuLm92ZXJsYXktYmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTkgMTk5IDE5OSAvIDIxJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uZWRpdC1idG4ge1xuICBtYXJnaW46IDBweCAxNXB4O1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5idG4ge1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgfVxuICBpIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMjJweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 16479:
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/roles/confirm-role/confirm-role.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmRoleComponent": () => (/* binding */ ConfirmRoleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




class ConfirmRoleComponent {
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
ConfirmRoleComponent.ɵfac = function ConfirmRoleComponent_Factory(t) {
  return new (t || ConfirmRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ConfirmRoleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmRoleComponent,
  selectors: [["app-confirm-role"]],
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
  template: function ConfirmRoleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Are you sure you want to save changes? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmRoleComponent_Template_button_click_5_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmRoleComponent_Template_button_click_7_listener() {
        ctx.close();
        return ctx.activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: #75b878;\n  margin-bottom: 30px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  width: 120px;\n  border-radius: 30px;\n  display: block;\n  color: #000;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vcm9sZXMvY29uZmlybS1yb2xlL2NvbmZpcm0tcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFFRjtBQURFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGkge1xuICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICBjb2xvcjogIzc1Yjg3ODtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG4ubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5idG4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 74095:
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/roles/role-done/role-done.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleDoneComponent": () => (/* binding */ RoleDoneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function RoleDoneComponent_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role added successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RoleDoneComponent_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role updated successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class RoleDoneComponent {
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
        this.router.navigateByUrl('/roles');
      }, 4000);
    } else {
      setTimeout(() => {
        this.modalService.dismissAll();
      }, 4000);
    }
  }
}
RoleDoneComponent.ɵfac = function RoleDoneComponent_Factory(t) {
  return new (t || RoleDoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
RoleDoneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RoleDoneComponent,
  selectors: [["app-role-done"]],
  inputs: {
    name: "name"
  },
  decls: 5,
  vars: 2,
  consts: [[1, "modal-body"], [1, "message"], [1, "fa-regular", "fa-circle-check"], [4, "ngIf"]],
  template: function RoleDoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoleDoneComponent_h3_3_Template, 2, 0, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoleDoneComponent_h3_4_Template, 2, 0, "h3", 3);
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
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 10px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: #75b878;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vcm9sZXMvcm9sZS1kb25lL3JvbGUtZG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2V7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xuICBpe1xuICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICBjb2xvcjogIzc1Yjg3ODtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 89708:
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/roles/roles-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesRoutingModule": () => (/* binding */ RolesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_roles_add_roles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-roles/add-roles.component */ 87339);
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles.component */ 84636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _roles_component__WEBPACK_IMPORTED_MODULE_1__.RolesComponent
}, {
  path: 'add-role',
  component: _add_roles_add_roles_component__WEBPACK_IMPORTED_MODULE_0__.AddRolesComponent
}, {
  path: 'view-role/:id',
  component: _add_roles_add_roles_component__WEBPACK_IMPORTED_MODULE_0__.AddRolesComponent
}];
class RolesRoutingModule {}
RolesRoutingModule.ɵfac = function RolesRoutingModule_Factory(t) {
  return new (t || RolesRoutingModule)();
};
RolesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: RolesRoutingModule
});
RolesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RolesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 84636:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/roles/roles.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesComponent": () => (/* binding */ RolesComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/roles.service */ 59815);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/not-found/not-found.component */ 59442);









function RolesComponent_div_15_tr_31_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Indoor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RolesComponent_div_15_tr_31_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Outdoor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RolesComponent_div_15_tr_31_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Both ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RolesComponent_div_15_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, RolesComponent_div_15_tr_31_span_6_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RolesComponent_div_15_tr_31_span_7_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RolesComponent_div_15_tr_31_span_8_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 31)(12, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesComponent_div_15_tr_31_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.viewRoles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "View details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7.noofUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.indoor == true && item_r7.outdoor == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.outdoor == true && item_r7.indoor == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.indoor == true && item_r7.outdoor == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r7.status == "2001");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/roles/view-role/", item_r7.roleId, "");
  }
}
function RolesComponent_div_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RolesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 19)(2, "div", 20)(3, "table", 21)(4, "thead")(5, "tr")(6, "th", 22)(7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesComponent_div_15_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.sortByName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Role Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 24)(10, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 22)(12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesComponent_div_15_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.sortByNoUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " No. of Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 24)(15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 22)(17, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesComponent_div_15_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.sortByIndoorOutdoor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Indoor/Outdoor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 24)(20, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 22)(22, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesComponent_div_15_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.sortByActivation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Activation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 24)(25, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 22)(27, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, RolesComponent_div_15_tr_31_Template, 16, 7, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, RolesComponent_div_15_div_32_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const roles_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (roles_r4 == null ? null : roles_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (roles_r4 == null ? null : roles_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (roles_r4 == null ? null : roles_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (roles_r4 == null ? null : roles_r4.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", roles_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (roles_r4 == null ? null : roles_r4.length) == 0);
  }
}
function RolesComponent_ng_template_17_Template(rf, ctx) {
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
function RolesComponent_li_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 34)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesComponent_li_30_Template_button_click_1_listener() {
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
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r3.pageNo === page_r18))("disabled", ctx_r3.pageNo === page_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", page_r18 + 1, " ");
  }
}
class RolesComponent {
  constructor(rolesService, router, headerService) {
    this.rolesService = rolesService;
    this.router = router;
    this.headerService = headerService;
    this.searchText = '';
    this.sort = 1;
    this.pageNo = 0;
  }
  ngOnInit() {
    this.headerService.setTitle('Roles');
    this.getRoles();
  }
  addRole() {
    this.router.navigateByUrl('/roles/add-role');
    this.headerService.setTitle('Roles > Add role');
  }
  viewRoles() {
    // this.router.navigateByUrl('/addbranch');
    this.headerService.setTitle('Roles > View role');
    // this.titleOfPage.emit('Branches > Add branch');
    // view-branch/{{item.branchId}}
  }

  getRoles() {
    return this.rolesService.getRoles(this.searchText, this.sort, this.pageNo).subscribe(response => {
      if (response) {
        this.roles = response.data;
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
      this.getRoles();
    }
    if (text.length == 0) {
      this.getRoles();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.sort = 1;
    this.getRoles();
  }
  sortByName() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getRoles();
  }
  sortByNoUser() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getRoles();
  }
  sortByIndoorOutdoor() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getRoles();
  }
  sortByActivation() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getRoles();
  }
  setPage(page) {
    this.pageNo = page;
    this.getRoles();
    window.scroll(0, 0);
  }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) {
  return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_1__.RolesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService));
};
RolesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RolesComponent,
  selectors: [["app-roles"]],
  decls: 31,
  vars: 10,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-5"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "col-md-2", "d-flex", "justify-content-end", "btnadd"], [1, "btn", "btn-add", 3, "click"], ["src", "assets/images/plus.png", "alt", ""], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [1, "col-md-6", 3, "hidden"], [1, "showing"], [1, "pagination"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "card-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["scope", "row"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", "readonly", "", "disabled", "", 1, "form-check-input", 3, "checked"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], [1, "btn", "btn-view", 3, "routerLink", "click"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"]],
  template: function RolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesComponent_Template_button_click_4_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RolesComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function RolesComponent_Template_input_keyup_6_listener($event) {
        return ctx.searchRoles($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesComponent_Template_button_click_7_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesComponent_Template_button_click_11_listener() {
        return ctx.addRole();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Add Role ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RolesComponent_div_15_Template, 33, 22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, RolesComponent_ng_template_17_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, RolesComponent_li_30_Template, 3, 5, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.roles)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", (ctx.roles == null ? null : ctx.roles.length) > 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", (ctx.pageNo + 1) * 6 - 5, " - ", (ctx.roles == null ? null : ctx.roles.length) == 6 ? (ctx.pageNo + 1) * 6 : ctx.totalRecords, " ");
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

/***/ 12965:
/*!***************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/roles/roles.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModule": () => (/* binding */ RolesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles-routing.module */ 89708);
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles.component */ 84636);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _add_roles_add_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-roles/add-roles.component */ 87339);
/* harmony import */ var _confirm_role_confirm_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-role/confirm-role.component */ 16479);
/* harmony import */ var _role_done_role_done_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-done/role-done.component */ 74095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);








class RolesModule {}
RolesModule.ɵfac = function RolesModule_Factory(t) {
  return new (t || RolesModule)();
};
RolesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: RolesModule
});
RolesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RolesModule, {
    declarations: [_roles_component__WEBPACK_IMPORTED_MODULE_1__.RolesComponent, _add_roles_add_roles_component__WEBPACK_IMPORTED_MODULE_3__.AddRolesComponent, _confirm_role_confirm_role_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmRoleComponent, _role_done_role_done_component__WEBPACK_IMPORTED_MODULE_5__.RoleDoneComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 59815:
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/roles/services/roles.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesService": () => (/* binding */ RolesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class RolesService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  getRoles(searchText, sort, pageNo) {
    return this.http.get(this.apiUrl + `Roles/GetRoles?Name=${searchText}&Sort=${sort}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  getDefaultPermissions() {
    return this.http.get(this.apiUrl + `Permissions/GetDefaultPermissions?Status=2001`, this.sharedService.getHeaders());
  }
  AddRole(role) {
    return this.http.post(this.apiUrl + 'Roles/AddRole', role, this.sharedService.getHeaders());
  }
  UpdateRole(role) {
    return this.http.post(this.apiUrl + 'Roles/UpdateRole', role, this.sharedService.getHeaders());
  }
  GetRoleDetails(id) {
    return this.http.get(this.apiUrl + `Roles/GetRoleDetails?roleId=${id}`, this.sharedService.getHeaders());
  }
}
RolesService.ɵfac = function RolesService_Factory(t) {
  return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
RolesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RolesService,
  factory: RolesService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_admin_roles_roles_module_ts.js.map