"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_main-fund_dashboard_dashboard_module_ts"],{

/***/ 99294:
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/dashboard/action-menu/action-menu.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextMenuComponent": () => (/* binding */ ContextMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);



const _c0 = function (a0, a1, a2) {
  return {
    "visibility": a0,
    "left": a1,
    "top": a2
  };
};
class ContextMenuComponent {
  constructor() {
    this.hideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.actionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onSelect(action) {
    this.hideMenu.emit(true);
    this.actionSelected.emit(action);
  }
}
ContextMenuComponent.ɵfac = function ContextMenuComponent_Factory(t) {
  return new (t || ContextMenuComponent)();
};
ContextMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContextMenuComponent,
  selectors: [["app-action-menu"]],
  inputs: {
    menuVisible: "menuVisible",
    menuPosition: "menuPosition",
    selectedItem: "selectedItem",
    itemId: "itemId"
  },
  outputs: {
    hideMenu: "hideMenu",
    actionSelected: "actionSelected"
  },
  decls: 8,
  vars: 5,
  consts: [[1, "action-menu", 3, "ngStyle"], [3, "click"]],
  template: function ContextMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuComponent_Template_li_click_2_listener() {
        return ctx.onSelect("Action 1");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuComponent_Template_li_click_4_listener() {
        return ctx.onSelect("Action 2");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Action 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuComponent_Template_li_click_6_listener() {
        return ctx.onSelect("Action 3");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Action 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx.menuVisible && ctx.selectedItem.id === ctx.itemId ? "visible" : "hidden", ctx.menuPosition.left + "px", ctx.menuPosition.top + "px"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  styles: [".action-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  top: 80%;\n  right: 10px;\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  border-radius: 10px;\n}\n.action-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.action-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 10px;\n  margin: 5px 0;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n  text-align: center;\n  color: #333333;\n  font-weight: bold;\n}\n.action-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f3f3f3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2Rhc2hib2FyZC9hY3Rpb24tbWVudS9hY3Rpb24tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UseUJBQUE7QUFHTiIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiA4MCU7XG4gIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGxpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 67380:
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/dashboard/dashboard-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 58361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class DashboardRoutingModule {}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
  return new (t || DashboardRoutingModule)();
};
DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DashboardRoutingModule
});
DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 58361:
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/dashboard/dashboard.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 59007);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enums/enum */ 75706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared.service */ 69082);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/header.service */ 36690);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.service */ 32618);
/* harmony import */ var _register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../register-settlements/register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/common.service */ 5620);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _registers_list_registers_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registers-list/registers-list.component */ 95734);


















const _c0 = ["success"];
function DashboardComponent_button_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_button_95_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_li_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_li_107_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const register_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.onDropdownItemClick(register_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const register_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", register_r20.id, "- ", register_r20.registersName, " ");
  }
}
function DashboardComponent_tbody_126_tr_1_ul_19_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 110)(1, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_tbody_126_tr_1_ul_19_li_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.navigateTo("settle", item_r24 == null ? null : item_r24.registerSessionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Settle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_tbody_126_tr_1_ul_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DashboardComponent_tbody_126_tr_1_ul_19_li_1_Template, 3, 0, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "li", 110)(3, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_tbody_126_tr_1_ul_19_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](320);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r31.openModal(_r14, item_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Force Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "li", 110)(6, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_tbody_126_tr_1_ul_19_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r34.navigateTo("register", item_r24 == null ? null : item_r24.registerId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " View Register Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "li", 110)(9, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_tbody_126_tr_1_ul_19_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.navigateTo("session", item_r24 == null ? null : item_r24.registerSessionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " View Session Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const index_r25 = ctx_r38.index;
    const item_r24 = ctx_r38.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", index_r25 + "dropdown-basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-labelledby", index_r25 + "button-alignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (item_r24 == null ? null : item_r24.statusObj == null ? null : item_r24.statusObj.lookupId) == ctx_r26.status.Closed || (item_r24 == null ? null : item_r24.statusObj == null ? null : item_r24.statusObj.lookupId) == ctx_r26.status.Unclosed);
  }
}
function DashboardComponent_tbody_126_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td")(16, "div", 104)(17, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, DashboardComponent_tbody_126_tr_1_ul_19_Template, 11, 3, "ul", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const index_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r24.registerSessionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", item_r24.registersName, " ", item_r24.registerId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r24.createdBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r24 == null ? null : item_r24.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r24.remainingTime.split(":").slice(0, 1) + ":" + item_r24.remainingTime.split(":").slice(1, 2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](13, 8, item_r24.collectedAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-controls", index_r25 + "dropdown-basic");
  }
}
function DashboardComponent_tbody_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DashboardComponent_tbody_126_tr_1_Template, 20, 11, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.tableListDataCards);
  }
}
const _c1 = function (a0) {
  return {
    active: a0
  };
};
function DashboardComponent_div_127_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 116)(1, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_div_127_li_12_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42);
      const page_r40 = restoredCtx.$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r41.setPage(page_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r40 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](3, _c1, ctx_r39.pageNo === page_r40))("disabled", ctx_r39.pageNo === page_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", page_r40 + 1, " ");
  }
}
function DashboardComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "div", 112)(2, "h6", 113);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 112)(11, "ul", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, DashboardComponent_div_127_li_12_Template, 3, 5, "li", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", (ctx_r3.tableListDataCards == null ? null : ctx_r3.tableListDataCards.length) == 0 || ctx_r3.totalRecords < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", (ctx_r3.pageNo + 1) * 6 - 5, " - ", (ctx_r3.tableListDataCards == null ? null : ctx_r3.tableListDataCards.length) == 6 ? (ctx_r3.pageNo + 1) * 6 : ctx_r3.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r3.totalRecords < 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.pages);
  }
}
function DashboardComponent_button_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_button_142_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r43.clearUnsettledSearchQuery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_container_143_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 137);
  }
}
function DashboardComponent_ng_container_143_div_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const translate_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r51.lookupName, " ");
  }
}
function DashboardComponent_ng_container_143_div_10_ul_21_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 110)(1, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_ng_container_143_div_10_ul_21_li_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r55);
      const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r53.navigateTo("settle", item_r46 == null ? null : item_r46.registerSessionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Settle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_ng_container_143_div_10_ul_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DashboardComponent_ng_container_143_div_10_ul_21_li_1_Template, 3, 0, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "li", 110)(3, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_ng_container_143_div_10_ul_21_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r58);
      const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r56.navigateTo("register", item_r46 == null ? null : item_r46.register == null ? null : item_r46.register.registerId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " View Register Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "li", 110)(6, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_ng_container_143_div_10_ul_21_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r58);
      const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r59.navigateTo("session", item_r46 == null ? null : item_r46.registerSessionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " View Session Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const i_r47 = ctx_r61.index;
    const item_r46 = ctx_r61.$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", i_r47 + "dropdown-basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-labelledby", i_r47 + "button-alignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (item_r46 == null ? null : item_r46.status) == ctx_r50.status.Closed || (item_r46 == null ? null : item_r46.status) == ctx_r50.status.Unclosed || (item_r46 == null ? null : item_r46.status) == ctx_r50.status.Partial);
  }
}
function DashboardComponent_ng_container_143_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 123)(1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 125)(3, "g", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "circle", 127)(5, "circle", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "defs")(7, "clipPath", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "rect", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, DashboardComponent_ng_container_143_div_10_div_9_Template, 1, 0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 132)(11, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, DashboardComponent_ng_container_143_div_10_div_13_Template, 3, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 135)(17, "div", 136)(18, "div", 104)(19, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, DashboardComponent_ng_container_143_div_10_ul_21_Template, 8, 3, "ul", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("fill", ctx_r45.innerCicle[i_r47]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("fill", ctx_r45.outterCicle[i_r47]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r47 !== ctx_r45.allSessionsDataCards.slice(0, 3).length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Session No.", item_r46.registerSessionId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", item_r46.statusObj.translations);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Cashier : ", item_r46.createdBy.fullName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-controls", i_r47 + "dropdown-basic");
  }
}
const _c2 = function () {
  return {
    status: "16002,16004,16005"
  };
};
function DashboardComponent_ng_container_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 118)(2, "div", 26)(3, "div", 119)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 28)(7, "div", 120)(8, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, DashboardComponent_ng_container_143_div_10_Template, 22, 7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Total No : ", (ctx_r5.allSessionsData == null ? null : ctx_r5.allSessionsData.totalRecordCount) || "0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r5.allSessionsDataCards.slice(0, 3));
  }
}
function DashboardComponent_registers_list_146_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "registers-list", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("registerEvent", function DashboardComponent_registers_list_146_Template_registers_list_registerEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r62.handleOfflineRegisterEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("regsiterList", ctx_r6.offlineRegisters);
  }
}
function DashboardComponent_li_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 140)(1, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DashboardComponent_li_164_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67);
      const register_r64 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](register_r64.selected = $event);
    })("change", function DashboardComponent_li_164_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r68.handleCheckBoxChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const register_r64 = ctx.$implicit;
    const index_r65 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", "reg" + index_r65)("ngModel", register_r64.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("for", "reg" + index_r65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", register_r64.id, "- ", register_r64.registersName, " ");
  }
}
function DashboardComponent_div_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_canvas_191_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "canvas", 143);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r9.barChartDataRegisters)("options", ctx_r9.barChartOptionsRegisters)("plugins", ctx_r9.barChartPluginsRegisters)("legend", ctx_r9.barChartLegendRegisters)("type", "bar");
  }
}
function DashboardComponent_li_211_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_li_211_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71);
      const tab_r69 = restoredCtx.$implicit;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r70.selectTab(tab_r69.description, tab_r69.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", tab_r69.description, " ");
  }
}
function DashboardComponent_ng_container_239_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "canvas", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("datasets", ctx_r73.barChartData)("labels", ctx_r73.barChartLabels)("options", ctx_r73.barChartOptions)("legend", ctx_r73.barChartLegend)("plugins", ctx_r73.barChartPlugins);
  }
}
function DashboardComponent_ng_container_239_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DashboardComponent_ng_container_239_div_1_Template, 2, 5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tab_r72 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", tab_r72.description === ctx_r11.selectedTab);
  }
}
function DashboardComponent_ng_template_317_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_template_319_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_319_ng_container_41_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r79.radioValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", "cs_" + (ctx_r75.sessionDetails == null ? null : ctx_r75.sessionDetails.registerSessionId))("ngModel", ctx_r75.radioValue)("disabled", ctx_r75.sessionDetails.status != ctx_r75.status.Opened && ctx_r75.sessionDetails.status != ctx_r75.status.Partial);
  }
}
function DashboardComponent_ng_template_319_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_319_ng_template_42_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r81.radioValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", "cs_" + (ctx_r77.sessionDetails == null ? null : ctx_r77.sessionDetails.registerSessionId))("ngModel", ctx_r77.radioValue)("disabled", (ctx_r77.sessionDetails.statusObj == null ? null : ctx_r77.sessionDetails.statusObj.lookupId) != ctx_r77.status.Opened && (ctx_r77.sessionDetails.statusObj == null ? null : ctx_r77.sessionDetails.statusObj.lookupId) != ctx_r77.status.Partial);
  }
}
function DashboardComponent_ng_template_319_p_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r78.errorMessage);
  }
}
function DashboardComponent_ng_template_319_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 145)(1, "div", 146)(2, "h4", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Force Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 148)(5, "div", 149)(6, "div", 150)(7, "h6", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Branch Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 150)(12, "h6", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Register Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 150)(17, "h6", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Register No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 150)(22, "h6", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Session No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 150)(27, "h6", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "h5", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "You are about to force close the following register");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 154)(34, "div", 155)(35, "div", 156)(36, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_319_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r83.radioValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Close Register for all day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 155)(40, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, DashboardComponent_ng_template_319_ng_container_41_Template, 2, 3, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, DashboardComponent_ng_template_319_ng_template_42_Template, 1, 3, "ng-template", null, 160, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Close Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 155)(47, "div", 156)(48, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_319_Template_input_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r85.radioValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Deactivate Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, DashboardComponent_ng_template_319_p_51_Template, 2, 1, "p", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 165)(53, "div", 166)(54, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_ng_template_319_Template_button_click_54_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84);
      const modal_r74 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](modal_r74.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_ng_template_319_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r87.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](43);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.branch == null ? null : ctx_r15.sessionDetails.branch.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.registersName) || (ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.register == null ? null : ctx_r15.sessionDetails.register.registersName));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.registerId) || (ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.register == null ? null : ctx_r15.sessionDetails.register.registerId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.registerSessionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.createdBy == null ? null : ctx_r15.sessionDetails.createdBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", "cr_" + ((ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.registerId) || (ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.register == null ? null : ctx_r15.sessionDetails.register.registerId)))("ngModel", ctx_r15.radioValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.status)("ngIfElse", _r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r15.registerDetails.status == 2002)("value", "dr_" + ((ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.registerId) || (ctx_r15.sessionDetails == null ? null : ctx_r15.sessionDetails.register == null ? null : ctx_r15.sessionDetails.register.registerId)))("ngModel", ctx_r15.radioValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.errorMessage);
  }
}
function DashboardComponent_ng_template_321_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r88.response == null ? null : ctx_r88.response.errors[0].errorMessageEn, " ");
  }
}
function DashboardComponent_ng_template_321_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r89.message, " ");
  }
}
function DashboardComponent_ng_template_321_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DashboardComponent_ng_template_321_h5_1_Template, 3, 1, "h5", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DashboardComponent_ng_template_321_h5_2_Template, 3, 1, "h5", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r17.response == null ? null : ctx_r17.response.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r17.response == null ? null : ctx_r17.response.isSuccess);
  }
}
const _c3 = function (a0, a1) {
  return {
    "background-color": a0,
    "color": a1
  };
};
const _c4 = function (a0) {
  return {
    show: a0
  };
};
chart_js__WEBPACK_IMPORTED_MODULE_11__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_11__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_11__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_11__.Legend, chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__["default"]);
const getDateRange = (date, range) => {
  let startDate, endDate;
  switch (range) {
    case 'This Week':
      {
        const dayOfWeek = date.getDay();
        startDate = new Date(date.getTime() - dayOfWeek * 24 * 60 * 60 * 1000);
        endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);
        break;
      }
    case 'Last Week':
      {
        const dayOfWeek = date.getDay();
        startDate = new Date(date.getTime() - (dayOfWeek + 7) * 24 * 60 * 60 * 1000);
        endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);
        break;
      }
    case 'This Month':
      {
        startDate = new Date(date.getFullYear(), date.getMonth(), 1);
        endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        break;
      }
    case 'Last Month':
      {
        startDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        endDate = new Date(date.getFullYear(), date.getMonth(), 0);
        break;
      }
    case 'This Year':
      {
        startDate = new Date(date.getFullYear(), 0, 1);
        endDate = new Date(date.getFullYear(), 11, 31);
        break;
      }
    case 'Last Year':
      {
        startDate = new Date(date.getFullYear() - 1, 0, 1);
        endDate = new Date(date.getFullYear() - 1, 11, 31);
        break;
      }
  }
  return [startDate, endDate];
};
const today = new Date();
const [startDate, endDate] = getDateRange(today, 'This Week');
const getValuesForProperty = (arr, propName) => {
  return arr.map(item => item[propName] ?? 0);
};
const move7002ToFirst = array => {
  array.sort((a, b) => {
    if (a.id === 7002) {
      return -1; // move a to the beginning of the array
    }

    if (b.id === 7002) {
      return 1; // move b to the beginning of the array
    }

    return a.id - b.id; // sort by id if neither a nor b has id of 7002
  });

  return array; // return the sorted array
};

const addPropertyToObjects = (arr, propName, propValue) => {
  return arr.map(item => {
    return {
      ...item,
      [propName]: propValue
    };
  });
};
class DashboardComponent {
  constructor(sharedService, headerService, dashboardService, elementRef, _registerSettlementService, _commonService, _modalService) {
    this.sharedService = sharedService;
    this.headerService = headerService;
    this.dashboardService = dashboardService;
    this.elementRef = elementRef;
    this._registerSettlementService = _registerSettlementService;
    this._commonService = _commonService;
    this._modalService = _modalService;
    this.submitted = false;
    this.pageNo = 0;
    this.pagin = 0;
    this.pageSize = 6;
    this.pages = [];
    this.innerCicle = ['#FFD9DD', '#E0F7FF', '#E2F4EE'];
    this.outterCicle = ['#DC3545', '#00C2FF', '#12A474'];
    this.registerWeekValue = 'This Week';
    this.collectionSettlementWeekValue = 'This Week';
    this.allocationsWeekValue = 'This Week';
    this.MainFundWeekValue = 'This Week';
    this.registerWeekCollectionValue = 'This Week';
    this.orderWeekCollectionValue = 'Direct Payment Sales Orders';
    this.registerDropDownValue = 'All Register';
    this.selectedTab = 'Direct Payment Sales Orders';
    this.selectedTabId = 7002;
    this.status = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_2__.Status;
    this.unsettledSearchQuery = '';
    this.selectedRegisters = null;
    this.barChartLegendAllocations = false;
    this.barChartPluginsAllocations = [];
    this.pieChartLabelsFunds = ['Visa', 'Cash', 'Cheques'];
    this.pieChartLegendFunds = true;
    this.pieChartPluginsFunds = [];
    this.pieChartPluginsMainFunds = [];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartPlugins = [];
    this.lineFirstChartLegendFunds = true;
    this.lineFirstChartPluginsFunds = [];
    this.lineSecondChartLegendFunds = true;
    this.lineSecondChartPluginsFunds = [];
    this.barChartLegendRegisters = true;
    this.barChartPluginsRegisters = [];
    this.lineFirstChartLabelsFunds = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.lineSecondChartLabelsFunds = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.barChartOptionsAllocations = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          grid: {
            display: false
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true
          }
        },
        datalabels: {
          formatter: () => {
            return '';
          }
        }
      },
      elements: {
        bar: {
          borderRadius: 10
        }
      }
    };
    this.pieChartOptionsFunds = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true,
            color: '#2D3047'
          }
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map(data => {
              if (typeof data === 'number') {
                sum += data;
              }
            });
            let percentage = (value * 100 / sum).toFixed(2) + '%';
            return percentage;
          },
          color: '#fff'
        }
      },
      elements: {
        bar: {
          borderRadius: 10
        },
        arc: {
          borderRadius: 0
        }
      }
    };
    this.pieChartOptionsMainFunds = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true,
            color: '#2D3047'
          }
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map(data => {
              if (typeof data === 'number') {
                sum += data;
              }
            });
            let percentage = (value * 100 / sum).toFixed(2) + '%';
            return percentage;
          },
          color: '#fff'
        }
      },
      elements: {
        bar: {
          borderRadius: 10
        },
        arc: {
          borderRadius: 0
        }
      }
    };
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          }
        },
        y: {
          stacked: true,
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true
          }
        },
        datalabels: {}
      },
      elements: {
        bar: {
          borderRadius: 10
        }
      }
    };
    // Line first chart
    this.lineFirstChartOptionsFunds = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true
          }
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          formatter: () => {
            return '';
          }
        }
      },
      animation: {
        duration: 2000
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      }
    };
    this.lineFirstChartDataFunds = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        data: [61, 65, 85, 81, 56, 55, 70],
        fill: false,
        borderColor: '#00DEA3',
        pointRadius: 0,
        borderWidth: 1,
        tension: 0.4
      }]
    };
    // Line second chart
    this.lineSecondChartOptionsFunds = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true
          }
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          formatter: () => {
            return '';
          }
        }
      },
      animation: {
        duration: 2000
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      }
    };
    this.lineSecondChartDataFunds = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My dataset',
        // data: [10, 63, 100, 110, 56, 60, 30],
        data: [61, 65, 85, 81, 56, 55, 70],
        fill: false,
        borderColor: '#00DEA3',
        pointRadius: 0,
        borderWidth: 1,
        tension: 0.4
      }]
    };
    this.barChartOptionsRegisters = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000
      },
      scales: {
        y: {
          grid: {
            display: false
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true
          }
        },
        datalabels: {
          formatter: () => {
            return '';
          }
        }
      },
      elements: {
        bar: {
          borderRadius: 10,
          borderWidth: 0
        }
      }
    };
    this.onLineRegisterPageNo = 1;
    this.onLineRegisterSearch = '';
    this.offlineRegisterPageNo = 1;
    this.offlineRegisterSearch = '';
  }
  getOnlineRegistersList() {
    let url = `Register/GetRegisters?Status=2098&search=${this.onLineRegisterSearch}&PageNo=${this.onLineRegisterPageNo - 1}&PageSize=6`;
    this.dashboardService.getRequest(url).subscribe(response => {
      this.onlineRegisters = response;
    });
  }
  handleOnlineRegisterEvent(event) {
    if (event?.pageNo) {
      this.onLineRegisterPageNo = event?.pageNo;
    }
    this.onLineRegisterSearch = event?.search || '';
    this.getOnlineRegistersList();
  }
  getOfflineRegistersList() {
    let url = `Register/GetRegisters?Status=2099&search=${this.offlineRegisterSearch}&PageNo=${this.offlineRegisterPageNo - 1}&PageSize=6`;
    this.dashboardService.getRequest(url).subscribe(response => {
      this.offlineRegisters = {
        ...response
      };
    });
  }
  handleOfflineRegisterEvent(event) {
    if (event?.pageNo) {
      this.offlineRegisterPageNo = event?.pageNo;
    }
    this.offlineRegisterSearch = event?.search || '';
    this.getOfflineRegistersList();
  }
  toggleRegisterFilterDropdown() {
    this.isRegisterFilterDropdownOpen = !this.isRegisterFilterDropdownOpen;
    if (this.isRegisterFilterDropdownOpen) {
      document.addEventListener('click', this.clickListenerRegisterFilter);
    } else {
      document.removeEventListener('click', this.clickListenerRegisterFilter);
    }
  }
  toggleAllRegisterDropdown() {
    this.isAllRegisterDropdownOpen = !this.isAllRegisterDropdownOpen;
    if (this.isAllRegisterDropdownOpen) {
      document.addEventListener('click', this.clickListenerRegisterDropDownValue);
    } else {
      document.removeEventListener('click', this.clickListenerRegisterDropDownValue);
    }
  }
  toggleCollectionSettlementDropdown() {
    this.isCollectionSettlementDropdownOpen = !this.isCollectionSettlementDropdownOpen;
    if (this.isCollectionSettlementDropdownOpen) {
      document.addEventListener('click', this.clickListenerCollectionSettlementWeekValue);
    } else {
      document.removeEventListener('click', this.clickListenerCollectionSettlementWeekValue);
    }
  }
  toggleMainFundDropdown() {
    this.isMainFundDropdownOpen = !this.isMainFundDropdownOpen;
    if (this.isMainFundDropdownOpen) {
      document.addEventListener('click', this.clickListenerMainFundWeekValue);
    } else {
      document.removeEventListener('click', this.clickListenerMainFundWeekValue);
    }
  }
  toggleThisWeekCollectionDropdown() {
    this.isThisWeekCollectionDropdownOpen = !this.isThisWeekCollectionDropdownOpen;
    if (this.isThisWeekCollectionDropdownOpen) {
      document.addEventListener('click', this.clickListenerRegisterWeekCollectionValue);
    } else {
      document.removeEventListener('click', this.clickListenerRegisterWeekCollectionValue);
    }
  }
  toggleThisOrderCollectionDropdown() {
    this.isThisOrderCollectionDropdownOpen = !this.isThisOrderCollectionDropdownOpen;
    if (this.isThisOrderCollectionDropdownOpen) {
      document.addEventListener('click', this.clickListenerOrderCollectionValue);
    } else {
      document.removeEventListener('click', this.clickListenerOrderCollectionValue);
    }
  }
  toggleAllocationsDropdown() {
    this.isAllocationsDropdownOpen = !this.isAllocationsDropdownOpen;
    if (this.isAllocationsDropdownOpen) {
      document.addEventListener('click', this.clickListenerAllocationsWeekValue);
    } else {
      document.removeEventListener('click', this.clickListenerAllocationsWeekValue);
    }
  }
  toggleThisWeekDropdown() {
    this.isThisWeekDropdownOpen = !this.isThisWeekDropdownOpen;
    if (this.isThisWeekDropdownOpen) {
      document.addEventListener('click', this.clickListenerRegisterWeekValue);
    } else {
      document.removeEventListener('click', this.clickListenerRegisterWeekValue);
    }
  }
  showMenu(item, value) {
    item.showMenu = value;
    this.tableListDataCards.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.showMenu = false;
      }
    });
  }
  showMenuUnsettled(item, value) {
    item.showMenu = value;
    this.allSessionsDataCards.cards.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.showMenu = false;
      }
    });
  }
  onDropdownItemClick(register) {
    this.registerFilter = register.registersName;
    this.registerId = register.id;
    if (register === 'Register Search') {
      this.GetDashboardSessionsBlock(null, this.searchQuery);
    } else {
      this.GetDashboardSessionsBlock(register.id, this.searchQuery);
    }
    this.toggleRegisterFilterDropdown();
  }
  selectTab(tab, id) {
    this.isThisOrderCollectionDropdownOpen = !this.isThisOrderCollectionDropdownOpen;
    this.orderWeekCollectionValue = tab;
    this.selectedTab = tab;
    this.selectedTabId = id;
    const today = new Date();
    const [startDate, endDate] = getDateRange(today, this.registerWeekCollectionValue);
    this.GetCollectionsByOrderType(id, startDate.toLocaleDateString(), endDate.toLocaleDateString());
  }
  onDropdownItemClickRegister(register, registerObject) {
    if (register == 'All Register') {
      this.selectedRegisterIds = null;
    }
    this.registerDropDownValue = register;
    this.registerObjValue = registerObject;
    const today = new Date();
    const [startDate, endDate] = getDateRange(today, this.registerWeekValue);
    if (register === 'All Register') {
      this.registersDropdownData.data = this.registersDropdownData.data.map(x => ({
        ...x,
        selected: false
      }));
      this.GetRegistersStatistics(startDate.toLocaleDateString(), endDate.toLocaleDateString());
    } else {
      this.GetRegistersStatistics(startDate.toLocaleDateString(), endDate.toLocaleDateString(), this.registerObjValue.id);
    }
    //this.isAllRegisterDropdownOpen = !this.isAllRegisterDropdownOpen;
  }

  onDropdownItemClickWeek(value) {
    this.registerWeekValue = value;
    const today = new Date();
    const [startDate, endDate] = getDateRange(today, value);
    if (this.registerObjValue) {
      this.GetRegistersStatistics(startDate.toLocaleDateString(), endDate.toLocaleDateString(), this.registerObjValue.id);
    } else {
      this.GetRegistersStatistics(startDate.toLocaleDateString(), endDate.toLocaleDateString());
    }
    this.toggleThisWeekDropdown();
  }
  collectionSettlementItemClickWeek(value) {
    this.collectionSettlementWeekValue = value;
    const today = new Date();
    const [startDate, endDate] = getDateRange(today, value);
    this.GetSettledSessionsCollections(startDate.toLocaleDateString(), endDate.toLocaleDateString());
    this.toggleCollectionSettlementDropdown();
  }
  mainFundItemClickWeek(value) {
    this.MainFundWeekValue = value;
    const today = new Date();
    const [startDate, endDate] = getDateRange(today, value);
    this.GetDashboardSettledAmounts(startDate.toLocaleDateString(), endDate.toLocaleDateString());
    this.toggleMainFundDropdown();
  }
  allocationsItemClickWeek(value) {
    this.allocationsWeekValue = value;
    const today = new Date();
    const [startDate, endDate] = getDateRange(today, value);
    this.GetDashboardAllocationsAmount(startDate.toLocaleDateString(), endDate.toLocaleDateString());
    this.toggleAllocationsDropdown();
  }
  onDropdownItemClickWeekCollection(value) {
    this.registerWeekCollectionValue = value;
    const today = new Date();
    const [startDate, endDate] = getDateRange(today, value);
    if (this.selectedTabId) {
      this.GetCollectionsByOrderType(this.selectedTabId, startDate.toLocaleDateString(), endDate.toLocaleDateString());
    } else {
      this.GetCollectionsByOrderType(this.selectedTabId, startDate.toLocaleDateString(), endDate.toLocaleDateString());
    }
    this.toggleThisWeekCollectionDropdown();
  }
  setPage(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.GetDashboardSessionsBlock(this.registerId, this.searchQuery);
  }
  searchExpenses(event) {
    const text = event.target.value;
    if (text.length >= 1) {
      this.searchQuery = text;
      this.pageNo = 0;
      this.GetDashboardSessionsBlock(this.registerId, this.searchQuery);
    }
    if (text.length == 0) {
      this.GetDashboardSessionsBlock(this.registerId, this.searchQuery);
    }
  }
  clearSearch() {
    this.searchQuery = '';
    this.GetDashboardSessionsBlock(this.registerId, this.searchQuery);
  }
  GetDashboardSessionsBlock(registerId, searchQuery) {
    this.isLoading = true;
    let url = `MainFundDashboard/GetDashboardSessionsBlock?PageNo=${this.pageNo}&PageSize=${this.pageSize}`;
    if (registerId) {
      url += `&RegisterId=${registerId}`;
    }
    if (searchQuery) {
      url += `&Search=${searchQuery}`;
    }
    this.dashboardService.getRequest(url).subscribe(data => {
      this.tableListData = data;
      this.tableListDataCards = addPropertyToObjects(this.tableListData.cards, 'showMenu', false);
      this.totalRecords = data.totalRecordCount;
      this.pagin = Math.ceil(this.totalRecords / 6);
      this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
      this.isLoading = false;
    });
  }
  navigateTo(value, sessionId) {
    if (value == 'settle') {
      this._commonService.NavigateToRoute("register-settlements/settle/", sessionId);
    } else if (value == 'session') {
      this._commonService.NavigateToRoute("register-settlements/session/", sessionId);
    } else if (value == 'register') {
      this._commonService.NavigateToRoute("register-settlements/register", sessionId);
    }
  }
  openModal(content, item) {
    this.radioValue = '';
    this.sessionDetails = {};
    this.sessionDetails = item;
    console.log(this.sessionDetails);
    this._registerSettlementService.getRegisterDetails(item?.registerId || item?.register.registerId).subscribe(response => {
      this.registerDetails = {};
      this.registerDetails = response.data;
      this._modalService.open(content, {
        centered: true,
        size: 'lg'
      });
    });
  }
  handleSubmit() {
    let split = this.radioValue.split('_');
    let action = split[0];
    let value = split[1];
    if (action == 'cr') {
      const payload = new FormData();
      payload.append('registerId', value);
      this._registerSettlementService.forceCloseRegiter(payload).subscribe(response => {
        this.response = response;
        this.message = 'Register successfully closed for all day.';
        this._modalService.dismissAll();
        this.GetDashboardSessionsBlock();
        const successRef = this._modalService.open(this.success);
        setTimeout(() => {
          successRef.close();
        }, 3000);
      }, error => {
        this.errorMessage = error['error']?.errors[0]?.ErrorMessageEn;
        setTimeout(() => {
          this.errorMessage = '';
        }, 4000);
      });
    } else if (action == 'cs') {
      const payload = new FormData();
      payload.append('sessionId', value);
      this._registerSettlementService.forceCloseSession(payload).subscribe(response => {
        this.response = response;
        this.message = 'Session successfully forced to close, it’s in waiting status now.';
        this._modalService.dismissAll();
        this.GetDashboardSessionsBlock();
        const successRef = this._modalService.open(this.success);
        setTimeout(() => {
          successRef.close();
        }, 3000);
      }, error => {
        this.errorMessage = error['error']?.errors[0]?.ErrorMessageEn;
        setTimeout(() => {
          this.errorMessage = '';
        }, 4000);
      });
    } else if (action == 'dr') {
      //let payload = { id: value, status: 2002 }
      this._registerSettlementService.updateRegister(value).subscribe(response => {
        this.response = response;
        console.log(this.response);
        this.message = 'Register successfully deactivated.';
        this._modalService.dismissAll();
        const successRef = this._modalService.open(this.success);
        this.GetDashboardSessionsBlock();
        setTimeout(() => {
          successRef.close();
        }, 3000);
      }, error => {
        this.errorMessage = error['error']?.errors[0]?.ErrorMessageEn;
        setTimeout(() => {
          this.errorMessage = '';
        }, 4000);
      });
    }
  }
  GetAllSessions(search) {
    let url = `Sessions/GetRegisterUnsettledSessions?registerId=${this.sharedService.getRegister?.registerObj?.id}`;
    url = search && url + `&search=${search}` || url;
    this.dashboardService.getRequest(url).subscribe(data => {
      this.allSessionsData = data;
      this.allSessionsDataCards = addPropertyToObjects(this.allSessionsData.data, 'showMenu', false);
    });
  }
  handleUnsettledSearch() {
    this.GetAllSessions(this.unsettledSearchQuery);
  }
  clearUnsettledSearchQuery() {
    this.unsettledSearchQuery = '';
    this.GetAllSessions(this.unsettledSearchQuery);
  }
  GetRegistersStatistics(FromDate, ToDate, RegisterId) {
    let url = `MainFundDashboard/GetRegistersStatistics?FromDate=${FromDate}&ToDate=${ToDate}`;
    if (RegisterId) {
      url += `&RegisterId=${RegisterId}`;
    }
    this.dashboardService.getRequest(url).subscribe(data => {
      this.registersStatisticsData = data;
      const collectedAmountJODArray = getValuesForProperty(this.registersStatisticsData.collectionAmount, 'collectedAmountJOD');
      console.log(collectedAmountJODArray);
      const expensesArray = getValuesForProperty(this.registersStatisticsData.collectionAmount, 'expenses');
      const dateArray = getValuesForProperty(this.registersStatisticsData.collectionAmount, 'date');
      this.barChartDataRegisters = {
        labels: dateArray,
        datasets: [{
          data: collectedAmountJODArray,
          label: 'Collection',
          backgroundColor: '#DC3545',
          hoverBorderColor: 'green',
          borderColor: '#000',
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          borderSkipped: false,
          borderRadius: Number.MAX_VALUE
        }, {
          data: expensesArray,
          label: 'Expenses',
          backgroundColor: '#C4CDD5',
          hoverBorderColor: 'green',
          borderColor: '#000',
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          borderSkipped: false,
          borderRadius: Number.MAX_VALUE
        }]
      };
    });
  }
  GetLookups(lookupTypeId) {
    let url = `Lookups/GetLookups?lookupTypeId=${lookupTypeId}`;
    this.dashboardService.getRequest(url).subscribe(data => {
      this.lookUpsData = data;
      if (this.lookUpsData.data) {
        this.lookUpsTabsData = move7002ToFirst(this.lookUpsData.data);
      }
    });
  }
  GetCollectionsByOrderType(OrderType, FromDate, ToDate) {
    let url = `MainFundDashboard/GetCollectionsByOrderType?OrderType=${OrderType}&FromDate=${FromDate}&ToDate=${ToDate}`;
    this.dashboardService.getRequest(url).subscribe(data => {
      this.collectionsByOrderTypeData = data;
      const cashCollected = getValuesForProperty(this.collectionsByOrderTypeData.cashCollected, 'collectedAmountJOD');
      const formattedCashCollected = cashCollected.map(value => value.toLocaleString());
      const chequesCollected = getValuesForProperty(this.collectionsByOrderTypeData.chequesCollected, 'collectedAmountJOD');
      const formattedChequesCollected = chequesCollected.map(value => value.toLocaleString());
      const visaCollected = getValuesForProperty(this.collectionsByOrderTypeData.visaCollected, 'collectedAmountJOD');
      const formattedvisaCollected = visaCollected.map(value => value.toLocaleString());
      const bankPledgeCollected = getValuesForProperty(this.collectionsByOrderTypeData.bankPledgeCollected, 'collectedAmountJOD');
      const formattedBankPledgeCollected = chequesCollected.map(value => value.toLocaleString());
      const bankTransferCollected = getValuesForProperty(this.collectionsByOrderTypeData.bankTransferCollected, 'collectedAmountJOD');
      const date = getValuesForProperty(this.collectionsByOrderTypeData.cashCollected, 'date');
      const formattedbankTransferCollected = bankTransferCollected.map(value => value.toLocaleString());
      this.barChartLabels = date;
      this.barChartData = [{
        label: 'Cheques',
        data: chequesCollected,
        backgroundColor: '#DC3545',
        borderColor: '#DC3545',
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        borderSkipped: false,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12
        },
        barThickness: 15
      }, {
        label: 'Visa',
        data: visaCollected,
        backgroundColor: '#253951',
        borderColor: '#253951',
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        borderSkipped: false,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12
        },
        barThickness: 15
      }, {
        label: 'Cash',
        data: cashCollected,
        backgroundColor: '#C4CDD5',
        borderColor: '#C4CDD5',
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        borderSkipped: false,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12
        },
        barThickness: 15
      }, {
        label: 'Bank Pledge',
        data: bankPledgeCollected,
        backgroundColor: '#767271',
        borderColor: '#767271',
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        borderSkipped: false,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12
        },
        barThickness: 15
      }, {
        label: 'Bank Transfer',
        data: bankTransferCollected,
        backgroundColor: '#B5B5B4',
        borderColor: '#B5B5B4',
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        borderSkipped: false,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12
        },
        barThickness: 15
      }];
    });
  }
  GetSettledSessionsCollections(FromDate, ToDate) {
    let url = `MainFundDashboard/GetSettledSessionsCollections?FromDate=${FromDate}&ToDate=${ToDate}`;
    this.dashboardService.getRequest(url).subscribe(data => {
      this.settledSessionsCollectionsData = data;
      console.log(this.settledSessionsCollectionsData);
      this.pieChartDataFunds = {
        labels: [`Visa ${this.settledSessionsCollectionsData.visaCollected.toLocaleString()} JOD`, `Cash ${this.settledSessionsCollectionsData.cashCollected.toLocaleString()} JOD`, `Cheques ${this.settledSessionsCollectionsData.chequesCollected.toLocaleString()} JOD`, `Bank Pledge ${this.settledSessionsCollectionsData.bankPledgeCollected.toLocaleString()} JOD`, `Bank Transfer ${this.settledSessionsCollectionsData.bankTransferCollected.toLocaleString()} JOD`],
        datasets: [{
          data: [this.settledSessionsCollectionsData.visaCollected, this.settledSessionsCollectionsData.cashCollected, this.settledSessionsCollectionsData.chequesCollected, this.settledSessionsCollectionsData.bankPledgeCollected, this.settledSessionsCollectionsData.bankTransferCollected],
          backgroundColor: ['#253951', '#DC3545', '#C4CDD5', '#767271', '#B5B5B4']
        }]
      };
    });
  }
  GetDashboardAllocationsAmount(FromDate, ToDate) {
    let url = `MainFundDashboard/GetDashboardAllocationsAmount?FromDate=${FromDate}&ToDate=${ToDate}`;
    this.dashboardService.getRequest(url).subscribe(data => {
      this.dashboardAllocationsAmountData = data;
      const bankNameArray = getValuesForProperty(this.dashboardAllocationsAmountData, 'bankName');
      const depositAmountArray = getValuesForProperty(this.dashboardAllocationsAmountData, 'depositAmount');
      this.barChartDataAllocations = {
        labels: bankNameArray,
        datasets: [{
          data: depositAmountArray,
          label: 'In Progress',
          backgroundColor: '#DC3545',
          hoverBorderColor: 'green',
          borderColor: '#000',
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          borderSkipped: false,
          borderRadius: Number.MAX_VALUE
        }]
      };
    });
  }
  GetDashboardSettledAmounts(FromDate, ToDate) {
    let url = `MainFundDashboard/GetDashboardSettledAmounts?FromDate=${FromDate}&ToDate=${ToDate}`;
    this.dashboardService.getRequest(url).subscribe(data => {
      this.dashboardSettledAmountsData = data;
      this.pieChartDataMainFunds = {
        labels: [`Visa ${this.dashboardSettledAmountsData.visaCollected.toLocaleString()} JOD`, `Cash ${this.dashboardSettledAmountsData.cashCollected.toLocaleString()} JOD`, `Cheques ${this.dashboardSettledAmountsData.chequesCollected.toLocaleString()} JOD`, `Bank Pledge ${this.dashboardSettledAmountsData.bankPledgeCollected.toLocaleString()} JOD`, `Bank Transfer ${this.dashboardSettledAmountsData.bankTransferCollected.toLocaleString()} JOD`],
        datasets: [{
          data: [this.dashboardSettledAmountsData.visaCollected, this.dashboardSettledAmountsData.cashCollected, this.dashboardSettledAmountsData.chequesCollected, this.dashboardSettledAmountsData.bankPledgeCollected, this.dashboardSettledAmountsData.bankTransferCollected],
          backgroundColor: ['#253951', '#DC3545', '#C4CDD5', '#767271', '#B5B5B4']
        }]
      };
    });
  }
  GetRegisters(status, pageNo, pageSize) {
    let url = `Register/GetRegisters?Status=${status}&PageNo=${pageNo}&PageSize=${pageSize}`;
    this.dashboardService.getRequest(url).subscribe(response => {
      this.registersDropdownData = response;
      this.registersDropdownData.data = this.registersDropdownData.data.map(x => ({
        ...x,
        selected: false
      }));
    });
  }
  handleCheckBoxChange() {
    this.selectedRegisterIds = this.registersDropdownData.data.filter(x => x.selected).map(x => x.id);
    console.log(this.selectedRegisterIds);
    this.onDropdownItemClickRegister('', {
      id: this.selectedRegisterIds.toString()
    });
  }
  GetDashboardRegisters() {
    let url = `MainFundDashboard/GetDashBoardRegisters`;
    this.dashboardService.getRequest(url).subscribe(data => {
      this.dashboardRegistersData = data;
    });
  }
  GetDashboardSessions(status) {
    let url = `MainFundDashboard/GetDashBoardSessions?status=${status}`;
    if (status === 'closed') {
      this.dashboardService.getRequest(url).subscribe(data => {
        this.dashboardDashboardSessionsClosed = data;
      });
    } else {
      this.dashboardService.getRequest(url).subscribe(data => {
        this.dashboardDashboardSessionsUnClosed = data;
      });
    }
  }
  ngOnInit() {
    this.getOnlineRegistersList();
    this.getOfflineRegistersList();
    this.onInitFunctions();
    this.interVal();
    this.clickListenerRegisterFilter = event => {
      const dropdownBtn = document.getElementById('registerFilter_btn');
      const dropdownMenu = document.getElementById('registerFilter_menu');
      const isClickInsideDropdown = dropdownBtn.contains(event.target) || dropdownMenu.contains(event.target);
      if (!isClickInsideDropdown) {
        this.isRegisterFilterDropdownOpen = false;
        document.removeEventListener('click', this.clickListenerRegisterFilter);
      }
    };
    this.clickListenerRegisterDropDownValue = event => {
      const dropdownBtn = document.getElementById('registerDropDownValue_btn');
      const dropdownMenu = document.getElementById('registerDropDownValue_menu');
      const isClickInsideDropdown = dropdownBtn.contains(event.target) || dropdownMenu.contains(event.target);
      if (!isClickInsideDropdown) {
        this.isAllRegisterDropdownOpen = false;
        document.removeEventListener('click', this.clickListenerRegisterDropDownValue);
      }
    };
    this.clickListenerRegisterWeekValue = event => {
      const dropdownBtn = document.getElementById('registerWeekValue_btn');
      const dropdownMenu = document.getElementById('registerWeekValue_menu');
      const isClickInsideDropdown = dropdownBtn.contains(event.target) || dropdownMenu.contains(event.target);
      if (!isClickInsideDropdown) {
        this.isThisWeekDropdownOpen = false;
        document.removeEventListener('click', this.clickListenerRegisterWeekValue);
      }
    };
    this.clickListenerRegisterWeekCollectionValue = event => {
      const dropdownBtn = document.getElementById('registerWeekCollectionValue_btn');
      const dropdownMenu = document.getElementById('registerWeekCollectionValue_menu');
      const isClickInsideDropdown = dropdownBtn.contains(event.target) || dropdownMenu.contains(event.target);
      if (!isClickInsideDropdown) {
        this.isThisWeekCollectionDropdownOpen = false;
        document.removeEventListener('click', this.clickListenerRegisterWeekCollectionValue);
      }
    };
    this.clickListenerOrderCollectionValue = event => {
      const dropdownBtn = document.getElementById('registerOrderCollectionValue_btn');
      const dropdownMenu = document.getElementById('registerOrderCollectionValue_menu');
      const isClickInsideDropdown = dropdownBtn.contains(event.target) || dropdownMenu.contains(event.target);
      if (!isClickInsideDropdown) {
        this.isThisOrderCollectionDropdownOpen = false;
        document.removeEventListener('click', this.clickListenerOrderCollectionValue);
      }
    };
    this.clickListenerCollectionSettlementWeekValue = event => {
      const dropdownBtn = document.getElementById('collectionSettlementWeekValue_btn');
      const dropdownMenu = document.getElementById('collectionSettlementWeekValue_menu');
      const isClickInsideDropdown = dropdownBtn.contains(event.target) || dropdownMenu.contains(event.target);
      if (!isClickInsideDropdown) {
        this.isCollectionSettlementDropdownOpen = false;
        document.removeEventListener('click', this.clickListenerCollectionSettlementWeekValue);
      }
    };
    this.clickListenerAllocationsWeekValue = event => {
      const dropdownBtn = document.getElementById('allocationsWeekValue_btn');
      const dropdownMenu = document.getElementById('allocationsWeekValue_menu');
      const isClickInsideDropdown = dropdownBtn.contains(event.target) || dropdownMenu.contains(event.target);
      if (!isClickInsideDropdown) {
        this.isAllocationsDropdownOpen = false;
        document.removeEventListener('click', this.clickListenerAllocationsWeekValue);
      }
    };
    this.clickListenerMainFundWeekValue = event => {
      const dropdownBtn = document.getElementById('MainFundWeekValue_btn');
      const dropdownMenu = document.getElementById('MainFundWeekValue_menu');
      const isClickInsideDropdown = dropdownBtn.contains(event.target) || dropdownMenu.contains(event.target);
      if (!isClickInsideDropdown) {
        this.isMainFundDropdownOpen = false;
        document.removeEventListener('click', this.clickListenerMainFundWeekValue);
      }
    };
  }
  interVal() {
    this.interValId = setInterval(() => {
      this.onInitFunctions();
    }, 180000);
  }
  onInitFunctions() {
    this.GetLookups(7);
    this.GetDashboardSessionsBlock();
    this.GetAllSessions();
    this.GetDashboardRegisters();
    this.GetRegisters('2001', 0, 1000);
    this.GetDashboardSessions('closed');
    this.GetDashboardSessions('unclosed');
    this.headerService.setTitle('Dashboard');
    this.GetRegistersStatistics(startDate.toLocaleDateString(), endDate.toLocaleDateString());
    this.GetDashboardSettledAmounts(startDate.toLocaleDateString(), endDate.toLocaleDateString());
    this.GetSettledSessionsCollections(startDate.toLocaleDateString(), endDate.toLocaleDateString());
    this.GetDashboardAllocationsAmount(startDate.toLocaleDateString(), endDate.toLocaleDateString());
    this.GetCollectionsByOrderType(this.selectedTabId, startDate.toLocaleDateString(), endDate.toLocaleDateString());
  }
  ngOnDestroy() {
    clearInterval(this.interValId);
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_4__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_5__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_register_settlements_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_6__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.success = _t.first);
    }
  },
  decls: 323,
  vars: 121,
  consts: [[1, "card-page"], [1, "row"], [1, "row", "mb-5"], [1, "col-sm-6", "col-xl-4", "col-xxl-3"], [1, "card_dashboard"], [1, "card-body"], [1, "col-8", "col-md-8"], [1, "icon-big", "text-center", "icon-warning", "icon_outter"], ["src", "assets/images/dashboard/offline-gloab.svg"], [1, "card_text_outter"], [1, "head"], [1, "head_numbers"], [1, "col-4", "col-md-4"], [1, "icon-big", "text-center", "icon-warning", "icon_outter_graph"], [2, "width", "76px", "height", "50px"], ["baseChart", "", "aria-label", "", 3, "type", "data", "options", "plugins", "width", "height"], ["src", "assets/images/dashboard/online-gloab.svg"], [1, "col-sm-6", "col-xl-4", "col-xxl-3", "mt-4", "mt-xl-0"], ["src", "assets/images/dashboard/folder_lock.svg"], [1, "numbers"], [1, "col-sm-6", "col-xl-4", "col-xxl-3", "mt-4", "mt-xxl-0"], [1, "row", "mb-5", "align-item-stretch"], [1, "col-sm-6", "col-md-7", "col-lg-8", "col-xxl-9"], [1, "card_dashboard_table", "h-100"], [1, "card_header"], [1, "row", "justify-content-end"], [1, "col-lg-8", "col-md-12", "col-sm-6"], [1, "header_left_text"], [1, "col-lg-4", "col-md-12", "col-sm-6"], [1, "header_right_text"], [1, "row", "search_outter", "justify-content-between", "align-items-center"], [1, "col-lg-4", "col-md-12", "col-sm-12"], [1, "input-group", "search-box"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "class", "btn", 3, "click", 4, "ngIf"], [1, "dropdown"], ["type", "button", "id", "registerFilter_btn", 1, "btn", "dropdown-toggle", 3, "ngStyle", "click"], ["width", "14", "height", "8", "viewBox", "0 0 14 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.25 1.75L7 7L1.75 1.75", "stroke", "#ABADC6", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "registerFilter_menu", 1, "dropdown-menu", 3, "ngClass"], [1, "dropdown-item", 3, "click"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "table-responsive"], [1, "table"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-sm-6", "col-md-5", "col-lg-4", "col-xxl-3"], [1, "card_header_unsettled"], [1, "col-lg-12", "col-md-6", "col-sm-6"], [1, "card-body_unsettled"], [1, "input-group", "search-box", "h-100"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "input", "ngModelChange"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], [1, "col-12", "col-lg-6"], [3, "regsiterList", "registerEvent", 4, "ngIf"], [1, "card_dashboard_graph_firsts"], [1, "card_header_graph_firsts"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "header_left_text", "flex-grow-1", "flex-shrink-1"], [1, "d-flex", "justify-content-center", "gap-2", "flex-grow-1", "flex-shrink-1"], [1, "dropdown_register", "flex-grow-1", "flex-shrink-1"], ["id", "registerDropDownValue_btn", "type", "button", 1, "btn", "dropdown-toggle", 3, "ngStyle", "click"], ["id", "registerDropDownValue_menu", 1, "dropdown-menu", 3, "ngClass"], ["class", "d-flex align-items-center gap-1 px-2", 4, "ngFor", "ngForOf"], [1, "dropdown_week", "flex-grow-1", "flex-shrink-1"], ["type", "button", "id", "registerWeekValue_btn", 1, "btn", "dropdown-toggle", 3, "ngStyle", "click"], ["id", "registerWeekValue_menu", 1, "dropdown-menu", 3, "ngClass"], [1, "card-body_graph_firsts"], ["class", "canvas_registers_bars", "baseChart", "", 3, "data", "options", "plugins", "legend", "type", 4, "ngIf"], [1, "mt-4", "mt-xxl-0", "col-12", "col-lg-6"], [1, "row", "justify-content-center", "align-item-center", "text-center"], [1, "col-lg-5", "col-md-6", "col-sm-6"], [1, "col-lg-4", "col-md-6", "col-sm-6", "position-relative", "text_collection_outter"], [1, "dropdown_week_collection"], ["id", "registerOrderCollectionValue_btn", "type", "button", 1, "btn", "dropdown-toggle", 2, "padding", "8px !important", 3, "ngStyle", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"], ["id", "registerOrderCollectionValue_menu", 1, "dropdown-menu", 3, "ngClass"], [1, "col-lg-3", "col-md-6", "col-sm-6", "position-relative", "cursor_pointer"], ["id", "registerWeekCollectionValue_btn", "type", "button", 1, "btn", "dropdown-toggle", 2, "padding", "8px !important", 3, "ngStyle", "click"], ["id", "registerWeekCollectionValue_menu", 1, "dropdown-menu", 3, "ngClass"], [1, "tab-content"], [1, "col-sm-6"], [1, "card_dashboard_graph_second", "h-100"], [1, "card_header_graph_second"], [1, "row", "justify-content-end", "total_graph_second"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "dropdown_week"], ["id", "collectionSettlementWeekValue_btn", "type", "button", 1, "btn", "dropdown-toggle", 3, "ngStyle", "click"], ["id", "collectionSettlementWeekValue_menu", 1, "dropdown-menu", 3, "ngClass"], [1, "card-body_graph_second"], ["baseChart", "", 1, "canvas_pie_funds", 3, "type", "data", "options", "plugins"], [1, "dropdown_week", "d-none"], ["type", "button", "id", "MainFundWeekValue_btn", 1, "btn", "dropdown-toggle", 3, "ngStyle", "click"], ["id", "MainFundWeekValue_menu", 1, "dropdown-menu", 3, "ngClass"], [1, "col-md-12"], ["loading", ""], ["content", ""], ["success", ""], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], ["dropdown", "", "container", "body", 1, "btn-group", "remove-caret-dropdown"], ["dropdownToggle", "", 1, "dot-details", "cursor-pointer", "dropdown-toggle"], [1, "fas", "fa-ellipsis-h"], ["class", "dropdown-menu dropdown-menu-right custom-session-dd", "role", "menu", 3, "id", 4, "dropdownMenu"], ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right", "custom-session-dd", 3, "id"], ["role", "menuitem", 4, "ngIf"], ["role", "menuitem"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "col-md-6", 3, "hidden"], [1, "showing", "m-3"], [1, "pagination", "mx-3"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "page-item"], [1, "page-link", 3, "ngClass", "disabled", "click"], [1, "row", "justify-content-end", "total_unsettled", "mt-2"], [1, "header_left_text_unsettled"], [1, "header_right_text_unsettled"], ["routerLink", "/register-settlements", 1, "gray-500", "text-decoration-none", 3, "queryParams"], ["class", "row data_row_unsettled", 4, "ngFor", "ngForOf"], [1, "row", "data_row_unsettled"], [1, "col-2", "position-relative"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "svg_blink"], ["clip-path", "url(#clip0_166_23681)"], ["cx", "10", "cy", "10", "r", "10"], ["cx", "10", "cy", "10", "r", "6"], ["id", "clip0_166_23681"], ["width", "20", "height", "20", "fill", "white"], ["class", "vertical-line", 4, "ngIf"], [1, "col-7"], [1, "data_heading"], [1, "data_user_detail"], [1, "col-3"], [1, "row", "justify-content-center", "align-item-center"], [1, "vertical-line"], [1, "data_description"], [3, "regsiterList", "registerEvent"], [1, "d-flex", "align-items-center", "gap-1", "px-2"], ["type", "checkbox", 1, "form-check-input", "m-0", 3, "id", "ngModel", "ngModelChange", "change"], [1, "dropdown-item", "m-0"], ["baseChart", "", 1, "canvas_registers_bars", 3, "data", "options", "plugins", "legend", "type"], ["baseChart", "", 1, "canvas_bars_collections", 3, "datasets", "labels", "options", "legend", "plugins"], [1, "fc-modal", "p-4"], [1, "modal-header", "p-0"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-3"], [1, "modal-body", "p-0"], [1, "body-layout", "mt-3"], [1, "d-flex", "flex-column"], [1, "dark-gray", "fw-bolder"], [1, "light-gray"], [1, "dark-gray", "fw-bolder", "my-4"], [1, "row", "my-5"], [1, "col-md-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "close", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "close", 1, "form-check-label"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["for", "session", 1, "form-check-label"], ["type", "radio", "id", "register", 1, "form-check-input", 3, "disabled", "value", "ngModel", "ngModelChange"], ["for", "register", 1, "form-check-label"], ["class", "alert alert-danger", 4, "ngIf"], [1, "modal-footer", "p-0"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], ["type", "radio", "id", "session", 1, "form-check-input", 3, "value", "ngModel", "disabled", "ngModelChange"], [1, "alert", "alert-danger"], [1, "modal-body"], ["class", "text-danger m-0 py-5 text-center", 4, "ngIf"], ["class", "m-0 py-5 text-center", 4, "ngIf"], [1, "text-danger", "m-0", "py-5", "text-center"], [1, "fa-regular", "fa-circle-xmark", "me-2"], [1, "m-0", "py-5", "text-center"], [1, "green-clr", "fa-regular", "fa-circle-check", "me-2"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 1)(7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9)(11, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " No Of Open Sessions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "canvas", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 3)(20, "div", 4)(21, "div", 5)(22, "div", 1)(23, "div", 6)(24, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 9)(27, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, " Amount Available In Open Sessions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 12)(33, "div", 13)(34, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "canvas", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 17)(37, "div", 4)(38, "div", 5)(39, "div", 1)(40, "div", 6)(41, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 9)(44, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Closed Session");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](48, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 12)(50, "div", 19)(51, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 13)(54, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "canvas", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 20)(57, "div", 4)(58, "div", 5)(59, "div", 1)(60, "div", 6)(61, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 9)(64, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Unclosed Session");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](68, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 12)(70, "div", 19)(71, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div", 13)(74, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](75, "canvas", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 21)(77, "div", 22)(78, "div", 23)(79, "div", 24)(80, "div", 25)(81, "div", 26)(82, "div", 27)(83, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Current Open Sessions");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 28)(86, "div", 29)(87, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "div", 30)(90, "div", 31)(91, "div", 32)(92, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](93, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_94_listener($event) {
        return ctx.searchQuery = $event;
      })("keyup", function DashboardComponent_Template_input_keyup_94_listener($event) {
        return ctx.searchExpenses($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](95, DashboardComponent_button_95_Template, 2, 0, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "div", 31)(97, "div", 25)(98, "div", 37)(99, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_99_listener() {
        return ctx.toggleRegisterFilterDropdown();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "svg", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](102, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "ul", 41)(104, "li")(105, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_105_listener() {
        return ctx.onDropdownItemClick("Register Search");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, " All Registers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](107, DashboardComponent_li_107_Template, 3, 2, "li", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "div", 5)(109, "div", 1)(110, "div", 44)(111, "div", 45)(112, "table", 46)(113, "thead")(114, "tr")(115, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](116, "Session No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "closing Within");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "Session Collection");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](125, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](126, DashboardComponent_tbody_126_Template, 2, 1, "tbody", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](127, DashboardComponent_div_127_Template, 13, 6, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "div", 49)(129, "div", 23)(130, "div", 50)(131, "div", 1)(132, "div", 51)(133, "div", 27)(134, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135, "Unsettled Sessions");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "div", 52)(137, "div", 1)(138, "div", 53)(139, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](140, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function DashboardComponent_Template_input_input_141_listener() {
        return ctx.handleUnsettledSearch();
      })("ngModelChange", function DashboardComponent_Template_input_ngModelChange_141_listener($event) {
        return ctx.unsettledSearchQuery = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](142, DashboardComponent_button_142_Template, 2, 0, "button", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](143, DashboardComponent_ng_container_143_Template, 11, 4, "ng-container", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "div", 21)(145, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](146, DashboardComponent_registers_list_146_Template, 1, 1, "registers-list", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "div", 56)(148, "div", 58)(149, "div", 59)(150, "div", 60)(151, "div", 61)(152, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "Registers");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "div", 62)(155, "div", 63)(156, "button", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_156_listener() {
        return ctx.toggleAllRegisterDropdown();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](157);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "svg", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](159, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "ul", 65)(161, "li")(162, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_162_listener() {
        return ctx.onDropdownItemClickRegister("All Register", null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, " All Register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](164, DashboardComponent_li_164_Template, 4, 5, "li", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "div", 67)(166, "button", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_166_listener() {
        return ctx.toggleThisWeekDropdown();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](167);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](168, "svg", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](169, "path", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "ul", 69)(171, "li")(172, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_172_listener() {
        return ctx.onDropdownItemClickWeek("This Week");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, "This Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "li")(175, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_175_listener() {
        return ctx.onDropdownItemClickWeek("Last Week");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, "Last Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "li")(178, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_178_listener() {
        return ctx.onDropdownItemClickWeek("This Month");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](179, "This Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "li")(181, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_181_listener() {
        return ctx.onDropdownItemClickWeek("Last Month");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, "Last Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "li")(184, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_184_listener() {
        return ctx.onDropdownItemClickWeek("This Year");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](185, "This Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](186, "li")(187, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_187_listener() {
        return ctx.onDropdownItemClickWeek("Last Year");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](188, "Last Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](190, DashboardComponent_div_190_Template, 2, 0, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](191, DashboardComponent_canvas_191_Template, 1, 5, "canvas", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](192, "div", 2)(193, "div", 72)(194, "div", 58)(195, "div", 59)(196, "div", 1)(197, "div", 51)(198, "div", 73)(199, "div", 74)(200, "div", 27)(201, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](202, "Collections");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](203, "div", 75)(204, "div", 76)(205, "div", 37)(206, "button", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_206_listener() {
        return ctx.toggleThisOrderCollectionDropdown();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](208, "svg", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](209, "path", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](210, "ul", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](211, DashboardComponent_li_211_Template, 3, 1, "li", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](212, "div", 81)(213, "div", 76)(214, "button", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_214_listener() {
        return ctx.toggleThisWeekCollectionDropdown();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](215);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](216, "svg", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](217, "path", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](218, "ul", 83)(219, "li")(220, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_220_listener() {
        return ctx.onDropdownItemClickWeekCollection("This Week");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, "This Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](222, "li")(223, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_223_listener() {
        return ctx.onDropdownItemClickWeekCollection("Last Week");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](224, "Last Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](225, "li")(226, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_226_listener() {
        return ctx.onDropdownItemClickWeekCollection("This Month");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](227, "This Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](228, "li")(229, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_229_listener() {
        return ctx.onDropdownItemClickWeekCollection("Last Month");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, "Last Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](231, "li")(232, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_232_listener() {
        return ctx.onDropdownItemClickWeekCollection("This Year");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](233, "This Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](234, "li")(235, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_235_listener() {
        return ctx.onDropdownItemClickWeekCollection("Last Year");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](236, "Last Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](237, "div", 70)(238, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](239, DashboardComponent_ng_container_239_Template, 2, 1, "ng-container", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](240, "div", 85)(241, "div", 86)(242, "div", 87)(243, "div", 1)(244, "div", 51)(245, "div", 1)(246, "div", 27)(247, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](248, "Collection Settlement");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](249, "div", 88)(250, "div", 89)(251, "div", 90)(252, "button", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_252_listener() {
        return ctx.toggleCollectionSettlementDropdown();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](253);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](254, "svg", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](255, "path", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](256, "ul", 92)(257, "li")(258, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_258_listener() {
        return ctx.collectionSettlementItemClickWeek("This Week");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](259, "This Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](260, "li")(261, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_261_listener() {
        return ctx.collectionSettlementItemClickWeek("Last Week");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](262, "Last Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](263, "li")(264, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_264_listener() {
        return ctx.collectionSettlementItemClickWeek("This Month");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](265, "This Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](266, "li")(267, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_267_listener() {
        return ctx.collectionSettlementItemClickWeek("Last Month");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](268, "Last Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](269, "li")(270, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_270_listener() {
        return ctx.collectionSettlementItemClickWeek("This Year");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](271, "This Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](272, "li")(273, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_273_listener() {
        return ctx.collectionSettlementItemClickWeek("Last Year");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274, "Last Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](276, "canvas", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](277, "div", 21)(278, "div", 85)(279, "div", 86)(280, "div", 87)(281, "div", 1)(282, "div", 51)(283, "div", 1)(284, "div", 27)(285, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](286, "Main Fund Current Amounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](287, "div", 88)(288, "div", 89)(289, "div", 95)(290, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_290_listener() {
        return ctx.toggleMainFundDropdown();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](291);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](292, "svg", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](293, "path", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](294, "ul", 97)(295, "li")(296, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_296_listener() {
        return ctx.mainFundItemClickWeek("This Week");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](297, "This Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](298, "li")(299, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_299_listener() {
        return ctx.mainFundItemClickWeek("Last Week");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](300, "Last Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](301, "li")(302, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_302_listener() {
        return ctx.mainFundItemClickWeek("This Month");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](303, "This Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](304, "li")(305, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_305_listener() {
        return ctx.mainFundItemClickWeek("Last Month");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](306, "Last Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](307, "li")(308, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_308_listener() {
        return ctx.mainFundItemClickWeek("This Year");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](309, "This Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](310, "li")(311, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_311_listener() {
        return ctx.mainFundItemClickWeek("Last Year");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](312, "Last Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](313, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](314, "canvas", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](315, "div", 1)(316, "div", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](317, DashboardComponent_ng_template_317_Template, 2, 0, "ng-template", null, 99, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](319, DashboardComponent_ng_template_319_Template, 58, 13, "ng-template", null, 100, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](321, DashboardComponent_ng_template_321_Template, 3, 2, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx.tableListData == null ? null : ctx.tableListData.totalRecordCount, "", (ctx.tableListData == null ? null : ctx.tableListData.totalRecordCount) > 1 && " Sessions" || " Session", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "line")("data", ctx.lineFirstChartDataFunds)("options", ctx.lineFirstChartOptionsFunds)("plugins", ctx.lineFirstChartPluginsFunds)("width", 76)("height", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](31, 77, ctx.dashboardRegistersData == null ? null : ctx.dashboardRegistersData.onlineCollectedAmounts, "2.3-3") || 0, " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "line")("data", ctx.lineSecondChartDataFunds)("options", ctx.lineSecondChartOptionsFunds)("plugins", ctx.lineSecondChartPluginsFunds)("width", 76)("height", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](48, 80, ctx.dashboardRegistersData == null ? null : ctx.dashboardRegistersData.closedSessionnsCollectedAmounts, "2.3-3") || 0, " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", (ctx.dashboardRegistersData == null ? null : ctx.dashboardRegistersData.numberClosedsessions) || "0", " ", (ctx.dashboardRegistersData == null ? null : ctx.dashboardRegistersData.numberClosedsessions) > 1 ? "Sessions" : "Session", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "line")("data", ctx.lineFirstChartDataFunds)("options", ctx.lineFirstChartOptionsFunds)("plugins", ctx.lineFirstChartPluginsFunds)("width", 76)("height", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](68, 83, ctx.dashboardRegistersData == null ? null : ctx.dashboardRegistersData.unClosedSessionnsCollectedAmounts, "2.3-3") || 0, " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", (ctx.dashboardRegistersData == null ? null : ctx.dashboardRegistersData.numberUnClosedsessions) || "0", " ", (ctx.dashboardRegistersData == null ? null : ctx.dashboardRegistersData.numberUnClosedsessions) > 1 ? "Sessions" : "Session", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "line")("data", ctx.lineFirstChartDataFunds)("options", ctx.lineFirstChartOptionsFunds)("plugins", ctx.lineFirstChartPluginsFunds)("width", 76)("height", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Total No : ", (ctx.tableListData == null ? null : ctx.tableListData.totalRecordCount) || "0", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.searchQuery == null ? null : ctx.searchQuery.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](86, _c3, ctx.isRegisterFilterDropdownOpen ? "#dc3545" : "#f8f8f8", ctx.isRegisterFilterDropdownOpen ? "white" : "#2d3047"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.registerFilter ? ctx.registerFilter : "All Registers", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](89, _c4, ctx.isRegisterFilterDropdownOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.registersDropdownData == null ? null : ctx.registersDropdownData.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.tableListDataCards && ctx.tableListDataCards.length > 0 && !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.tableListDataCards && ctx.tableListDataCards.length > 0 && !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.unsettledSearchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.unsettledSearchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.allSessionsDataCards == null ? null : ctx.allSessionsDataCards.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.offlineRegisters);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](91, _c3, ctx.isAllRegisterDropdownOpen ? "#dc3545" : "#f8f8f8", ctx.isAllRegisterDropdownOpen ? "white" : "#2d3047"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (ctx.selectedRegisterIds == null ? null : ctx.selectedRegisterIds.length) && ctx.selectedRegisterIds.toString() || "All Register", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](94, _c4, ctx.isAllRegisterDropdownOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.registersDropdownData == null ? null : ctx.registersDropdownData.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](96, _c3, ctx.isThisWeekDropdownOpen ? "#dc3545" : "#f8f8f8", ctx.isThisWeekDropdownOpen ? "white" : "#2d3047"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.registerWeekValue ? ctx.registerWeekValue : "This Week", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](99, _c4, ctx.isThisWeekDropdownOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isRegisterChartLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isRegisterChartLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](101, _c3, ctx.isThisOrderCollectionDropdownOpen ? "#dc3545" : "#f8f8f8", ctx.isThisWeekCollectionDropdownOpen ? "white" : "#2d3047"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.orderWeekCollectionValue ? ctx.orderWeekCollectionValue : "All Orders", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](104, _c4, ctx.isThisOrderCollectionDropdownOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.lookUpsTabsData);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](106, _c3, ctx.isThisWeekCollectionDropdownOpen ? "#dc3545" : "#f8f8f8", ctx.isThisWeekCollectionDropdownOpen ? "white" : "#2d3047"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.registerWeekCollectionValue ? ctx.registerWeekCollectionValue : "This Week", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](109, _c4, ctx.isThisWeekCollectionDropdownOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.lookUpsTabsData);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](111, _c3, ctx.isCollectionSettlementDropdownOpen ? "#dc3545" : "#f8f8f8", ctx.isCollectionSettlementDropdownOpen ? "white" : "#2d3047"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.collectionSettlementWeekValue ? ctx.collectionSettlementWeekValue : "This Week", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](114, _c4, ctx.isCollectionSettlementDropdownOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "pie")("data", ctx.pieChartDataFunds)("options", ctx.pieChartOptionsFunds)("plugins", ctx.pieChartPluginsFunds);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](116, _c3, ctx.isMainFundDropdownOpen ? "#dc3545" : "#f8f8f8", ctx.isMainFundDropdownOpen ? "white" : "#2d3047"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.MainFundWeekValue ? ctx.MainFundWeekValue : "This Week", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](119, _c4, ctx.isMainFundDropdownOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "pie")("data", ctx.pieChartDataMainFunds)("options", ctx.pieChartOptionsMainFunds)("plugins", ctx.pieChartPluginsMainFunds);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, ng2_charts__WEBPACK_IMPORTED_MODULE_15__.BaseChartDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__.BsDropdownDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__.LoadingComponent, _registers_list_registers_list_component__WEBPACK_IMPORTED_MODULE_9__.RegistersListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe],
  styles: [".card_dashboard[_ngcontent-%COMP%] {\n  padding: 24px;\n  \n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n}\n.card_dashboard[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n@media (max-width: 991.98px) {\n  .card_dashboard[_ngcontent-%COMP%] {\n    height: 178px;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 212px;\n  height: 44px;\n  background: #f8f8f8;\n  border-radius: 12px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  padding-left: 44px;\n  font-size: 16px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  fill: #bdbdbd;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  padding: 7px;\n  overflow: hidden;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  max-width: 100%;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  height: 56px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%] {\n  margin: 11px 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 20px;\n  color: #333333;\n  margin: 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head_numbers[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 25px;\n  color: #00261c;\n  letter-spacing: 0.016em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #00dea3;\n  letter-spacing: -0.02em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #f23985;\n  letter-spacing: -0.02em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n  color: #929eae;\n}\n\n.card_dashboard_table[_ngcontent-%COMP%] {\n  height: auto;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard_table[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%] {\n  padding: 20px 24px 0px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 181px;\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_left_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 181px;\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #e6e1e1;\n  column-count: 3;\n  column-gap: 20px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(-70%, 40px) !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #e6e1e1;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table_loader_container[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  \n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  text-transform: uppercase;\n  color: #2d3047;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border: none;\n}\n@media (max-width: 576px) {\n  .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: rgba(45, 48, 71, 0.8);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #0057ff;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 56px;\n  border-style: none !important;\n  position: relative;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 30px;\n  padding: 0px 8px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding: 0px 8px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_left_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%] {\n  padding: 0px 24px 20px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_left_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_outter[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 19px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 212px;\n  height: 44px;\n  background: #f8f8f8;\n  border-radius: 12px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  \n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border: none;\n  padding-left: 44px;\n  background-color: #f8f8f8;\n  border-radius: 12px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: rgb(45, 48, 71);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  fill: #bdbdbd;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 6px;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 44px;\n  background: #f8f8f8;\n  border-radius: 12px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  \n  \n  \n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border: none;\n  padding-left: 44px;\n  background-color: #f8f8f8;\n  border-radius: 12px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #212529;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  fill: #bdbdbd;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .total_unsettled[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%] {\n  height: 57px;\n  margin-bottom: 20px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .data_heading[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 23px;\n  color: #5e5873;\n  display: block;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .data_description[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 21px;\n  color: #6e6b7b;\n  display: block;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .data_user_detail[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 23px;\n  color: #5e5873;\n  display: block;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .svg_blink[_ngcontent-%COMP%] {\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_blink 1s infinite;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  padding: 7px;\n  overflow: hidden;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n  height: 56px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 56px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 56px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%] {\n  margin: 11px 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  color: #333333;\n  margin: 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head_numbers[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #00261c;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #00dea3;\n  letter-spacing: -0.02em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #f23985;\n  letter-spacing: -0.02em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  fill: none;\n  stroke-width: 2px;\n  stroke: #ccc;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .circle.red-fill[_ngcontent-%COMP%] {\n  stroke: #f00;\n  fill: #f00;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .circle.blue-fill[_ngcontent-%COMP%] {\n  stroke: #00f;\n  fill: #00f;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 21px;\n  width: 2px;\n  background-color: #ebe9f1;\n  border: none;\n  transform: translate(0%, 30%);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 7.5rem;\n  fill: #ccc;\n}\n\n.card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n  height: 573px;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 24px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%] {\n  \n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%] {\n  \n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%] {\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .text_collection[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .text_collection.active[_ngcontent-%COMP%] {\n  font-weight: 700 !important;\n  color: #dc3545 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .text_collection[_ngcontent-%COMP%]:hover {\n  color: rgba(220, 53, 70, 0.6549019608);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .bottom-line[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  transform: translate(0%, 0%);\n  width: 90%;\n  height: 2px;\n  background-color: #dc3545;\n  border-radius: 50%;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .bottom-line.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]:hover {\n  color: rgba(220, 53, 70, 0.6549019608);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%]   .canvas_registers_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 470px !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%]   .canvas_bars_collections[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 470px !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 460px;\n}\n\n.card_dashboard_graph_second[_ngcontent-%COMP%] {\n  height: auto;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_graph_second[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard_graph_second[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard_graph_second[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 24px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_right_text_graph_second[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_right_text_graph_second[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_right_text_graph_second[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%] {\n  width: 131px;\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .total_graph_second[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  margin-top: 18px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%]   .canvas_allocations_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%]   .canvas_pie_funds[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%]   .canvas_pie_funds2[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second_allocation[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second_allocation[_ngcontent-%COMP%]   .canvas_allocations_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 382px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .body_graph_second_allocation[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .body_graph_second_allocation[_ngcontent-%COMP%]   .canvas_allocations_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 410px !important;\n}\n\n.cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@keyframes _ngcontent-%COMP%_fade_in_and_zoom {\n  0% {\n    opacity: 0;\n    transform: translateY(50%) scale(1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFRSxhQUFBO0VBQ0E7R0FBQTtFQUVBLHVCQUFBO0VBQ0EsNENBVlc7RUFXWCxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBSkY7QUFNRTtFQUNFLHFCQUFBO0FBSko7QUFPRTtFQWhCRjtJQWtCSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBTEY7QUFDRjtBQU9FO0VBdkJGO0lBeUJJLG1CQUFBO0lBQ0EsYUFBQTtFQUxGO0FBQ0Y7QUFPRTtFQTdCRjtJQThCSSxpQkFBQTtFQUpGO0FBQ0Y7QUFRTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQU5SO0FBV007RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFUUjtBQWNFO0VBQ0Usc0JBQUE7RUFDQSxZQWhFZTtFQWlFZixZQWhFZ0I7RUFpRWhCLG1CQUFBO0VBQ0EsbUJBakV1QjtFQWtFdkIsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWk47QUFjTTtFQUNFLGFBQUE7QUFaUjtBQWVNO0VBQ0UsY0FBQTtBQWJSO0FBaUJJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBZk47QUFtQkU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQXhHUztFQXlHVCxZQUFBO0VB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V0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBM05SO0FBNk5RO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQTNOVjtBQWdPSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUE5Tk47QUFrT0U7RUFDRSxZQUFBO0FBaE9KO0FBa09JO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQWhPTjtBQW1PSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFqT047QUFvT0k7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0FBbE9OO0FBc09FO0VBQ0UsWUFBQTtBQXBPSjtBQXNPSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFwT047QUF3T0U7RUFDRSxZQUFBO0FBdE9KO0FBd09JO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQXRPTjs7QUEyT0E7RUFDRSxlQUFBO0FBeE9GOztBQTJPQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0VBeE9GO0VBMk9BO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VBek9GO0FBQ0Y7QUE0T0E7RUFDRTtJQUNFLHVCQUFBO0VBMU9GO0VBNk9BO0lBQ0UseUJBQUE7RUEzT0Y7QUFDRjtBQThPQTtFQUNFO0lBQ0UsWUFBQTtFQTVPRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuJHNlYXJjaC1ib3gtd2lkdGg6IDIxMnB4O1xuJHNlYXJjaC1ib3gtaGVpZ2h0OiA0NHB4O1xuJHNlYXJjaC1ib3gtYm9yZGVyLXJhZGl1czogMTJweDtcbi5jYXJkX2Rhc2hib2FyZCB7XG4gIC8vIHdpZHRoOiAyNzBweDtcbiAgcGFkZGluZzogMjRweDtcbiAgLyogIGhlaWdodDogMTc4cHg7XG4qL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZV9pbl9hbmRfem9vbSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC8vIGZvciB0YWJsZXQgYW5kIHNtYWxsZXIgc2NyZWVuc1xuICAgIGhlaWdodDogMTc4cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLy8gZm9yIG1vYmlsZSBzY3JlZW5zXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWFyZ2luOiAxMXB4IDExcHg7XG4gIH1cblxuICAuY2FyZF9oZWFkZXIge1xuICAgIC5oZWFkZXJfbGVmdF90ZXh0IHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfcmlnaHRfdGV4dCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoX2JveCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogJHNlYXJjaC1ib3gtd2lkdGg7XG4gICAgaGVpZ2h0OiAkc2VhcmNoLWJveC1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiAkc2VhcmNoLWJveC1ib3JkZXItcmFkaXVzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmctbGVmdDogNDRweDsgLy8gYWRqdXN0IGFzIG5lZWRlZCB0byBtYWtlIHNwYWNlIGZvciB0aGUgaWNvblxuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTJweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZmlsbDogI2JkYmRiZDtcbiAgICB9XG4gIH1cblxuICAuaWNvbl9vdXR0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIFRvIHByZXZlbnQgdGhlIGltYWdlIGZyb20gb3ZlcmZsb3dpbmcgb3V0c2lkZSB0aGUgZGl2XG5cbiAgICBpbWcge1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLy8gU2V0IHRoZSBhbmltYXRpb24gcHJvcGVydGllc1xuICAgIH1cbiAgfVxuXG4gIC5pY29uX291dHRlcl9ncmFwaCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcmRfdGV4dF9vdXR0ZXIge1xuICAgIG1hcmdpbjogMTFweCAwcHg7XG5cbiAgICAuaGVhZCB7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5oZWFkX251bWJlcnMge1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgY29sb3I6ICMwMDI2MWM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICB9XG5cbiAgICAuZm9vdGVyX2Rlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgY29sb3I6ICMwMGRlYTM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5mb290ZXJfZGVzY3JpcHRpb25fZGFuZ2VyIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgY29sb3I6ICNmMjM5ODU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5udW1iZXJzIHtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZF9kYXNoYm9hcmRfdGFibGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYW5pbWF0aW9uOiBmYWRlX2luX2FuZF96b29tIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC8vIGZvciB0YWJsZXQgYW5kIHNtYWxsZXIgc2NyZWVuc1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAvLyBmb3IgbW9iaWxlIHNjcmVlbnNcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBtYXJnaW46IDExcHggMTFweDtcbiAgfVxuXG4gIC5jYXJkX2hlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAyNHB4IDBweCAyNHB4O1xuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHQge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlcl9yaWdodF90ZXh0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24ge1xuICAgICAgd2lkdGg6IDE4MXB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDMycHggMCAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyZDMwNDc7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2x1bW4tY291bnQ6IDE7IC8vIGRpc3BsYXkgdGhlIGl0ZW1zIGluIDMgY29sdW1uc1xuICAgICAgICBjb2x1bW4tZ2FwOiAwcHg7IC8vIGFkZCBnYXAgYmV0d2VlbiBjb2x1bW5zXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLy8gYWRkIGEgYm94LXNoYWRvdyBvbiBob3ZlclxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyBkaXNwbGF5IHRoZSBsaXN0IGl0ZW1zIGlubGluZVxuICAgICAgICB3aWR0aDogMTAwJTsgLy8gc2V0IHRoZSB3aWR0aCB0byAxMDAlIHRvIGZpbGwgdGhlIGNvbHVtbnNcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLy8gYWRkIG1hcmdpbiBiZXR3ZWVuIGl0ZW1zXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXJkX2hlYWRlcl91bnNldHRsZWQge1xuICAgIHBhZGRpbmc6IDIwcHggMjRweCAyMHB4IDI0cHg7XG5cbiAgICAuaGVhZGVyX2xlZnRfdGV4dCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX3JpZ2h0X3RleHQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHRfdW5zZXR0bGVkIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfcmlnaHRfdGV4dF91bnNldHRsZWQge1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93biB7XG4gICAgICB3aWR0aDogMTgxcHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzJkMzA0NztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUxZTE7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMzsgLy8gZGlzcGxheSB0aGUgaXRlbXMgaW4gMyBjb2x1bW5zXG4gICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7IC8vIGFkZCBnYXAgYmV0d2VlbiBjb2x1bW5zXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLCA0MHB4KSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUxZTE7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy8gZGlzcGxheSB0aGUgbGlzdCBpdGVtcyBpbmxpbmVcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8vIHNldCB0aGUgd2lkdGggdG8gMTAwJSB0byBmaWxsIHRoZSBjb2x1bW5zXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8vIGFkZCBtYXJnaW4gYmV0d2VlbiBpdGVtc1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuXG4gICAgLnRhYmxlX2xvYWRlcl9jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50YWJsZSB7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG4gICAgICB0aCB7XG4gICAgICAgIC8qICAgICAgICBwYWRkaW5nOiAyMHB4IDI0cHggMjBweCAyNHB4O1xuKi8gZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjMmQzMDQ3O1xuICAgICAgfVxuXG4gICAgICB0ZCxcbiAgICAgIHRoIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGQge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoNDUsIDQ4LCA3MSwgMC44KTtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMDA1N2ZmO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyIHtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICB0cjpudGgtY2hpbGQob2RkKSB0ZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICB9XG5cbiAgICAgIHRkOmxhc3QtY2hpbGQsXG4gICAgICB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICB9XG5cbiAgICAgIHRkOmxhc3QtY2hpbGQsXG4gICAgICB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDhweDtcbiAgICAgIH1cblxuICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfbGVmdF90ZXh0X3Vuc2V0dGxlZCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX3JpZ2h0X3RleHRfdW5zZXR0bGVkIHtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgICAgY29sb3I6ICM5MjllYWU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZC1ib2R5X3Vuc2V0dGxlZCB7XG4gICAgcGFkZGluZzogMHB4IDI0cHggMjBweCAyNHB4O1xuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHRfdW5zZXR0bGVkIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfcmlnaHRfdGV4dF91bnNldHRsZWQge1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2hfb3V0dGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gIH1cblxuICAuc2VhcmNoX2JveCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogJHNlYXJjaC1ib3gtd2lkdGg7XG4gICAgaGVpZ2h0OiAkc2VhcmNoLWJveC1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiAkc2VhcmNoLWJveC1ib3JkZXItcmFkaXVzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmctbGVmdDogNDRweDsgLy8gYWRqdXN0IGFzIG5lZWRlZCB0byBtYWtlIHNwYWNlIGZvciB0aGUgaWNvblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogcmdiKDQ1LDQ4LDcxKTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMgKyBzdmcge1xuICAgICAgZmlsbDogI2RjMzU0NTtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfSovXG5cbiAgICAuc2VhcmNoLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTJweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZmlsbDogI2JkYmRiZDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2hfYm94X3Vuc2V0dGxlZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICRzZWFyY2gtYm94LWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIGJvcmRlci1yYWRpdXM6ICRzZWFyY2gtYm94LWJvcmRlci1yYWRpdXM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7IC8vIGFkanVzdCBhcyBuZWVkZWQgdG8gbWFrZSBzcGFjZSBmb3IgdGhlIGljb25cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICB9Ki9cbiAgICAvKiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyArIHN2ZyB7XG4gICAgICBmaWxsOiAjZGMzNTQ1O1xuICAgIH0qL1xuICAgIC8qICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICB9Ki9cblxuICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBmaWxsOiAjYmRiZGJkO1xuICAgIH1cbiAgfVxuXG4gIC50b3RhbF91bnNldHRsZWQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuZGF0YV9yb3dfdW5zZXR0bGVkIHtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIC5kYXRhX2hlYWRpbmcge1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgY29sb3I6ICM1ZTU4NzM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZGF0YV9kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICBjb2xvcjogIzZlNmI3YjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5kYXRhX3VzZXJfZGV0YWlsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgIGNvbG9yOiAjNWU1ODczO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnN2Z19ibGluayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBhbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5pY29uX291dHRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLy8gVG8gcHJldmVudCB0aGUgaW1hZ2UgZnJvbSBvdmVyZmxvd2luZyBvdXRzaWRlIHRoZSBkaXZcblxuICAgIGltZyB7XG4gICAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvLyBTZXQgdGhlIGFuaW1hdGlvbiBwcm9wZXJ0aWVzXG4gICAgfVxuICB9XG5cbiAgLmljb25fb3V0dGVyX2dyYXBoIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgIH1cblxuICAgIGNhbnZhcyB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICB9XG4gIH1cblxuICAuY2FyZF90ZXh0X291dHRlciB7XG4gICAgbWFyZ2luOiAxMXB4IDBweDtcblxuICAgIC5oZWFkIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRfbnVtYmVycyB7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBjb2xvcjogIzAwMjYxYztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgIH1cblxuICAgIC5mb290ZXJfZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAxNnB4IDBweDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICBjb2xvcjogIzAwZGVhMztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlcl9kZXNjcmlwdGlvbl9kYW5nZXIge1xuICAgICAgbWFyZ2luOiAxNnB4IDBweDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICBjb2xvcjogI2YyMzk4NTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm51bWJlcnMge1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgY29sb3I6ICM5MjllYWU7XG4gICAgfVxuICB9XG5cbiAgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgc3Ryb2tlOiAjY2NjO1xuXG4gICAgJi5yZWQtZmlsbCB7XG4gICAgICBzdHJva2U6ICNmMDA7XG4gICAgICBmaWxsOiAjZjAwO1xuICAgIH1cblxuICAgICYuYmx1ZS1maWxsIHtcbiAgICAgIHN0cm9rZTogIzAwZjtcbiAgICAgIGZpbGw6ICMwMGY7XG4gICAgfVxuICB9XG5cbiAgLnZlcnRpY2FsLWxpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAyMXB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTlmMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDMwJSk7XG4gIH1cblxuICAuZG90cyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDcuNXJlbTtcbiAgICBmaWxsOiAjY2NjO1xuICB9XG59XG5cbi5jYXJkX2Rhc2hib2FyZF9ncmFwaF9maXJzdHMge1xuICBoZWlnaHQ6IDU3M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZV9pbl9hbmRfem9vbSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAvLyBmb3IgdGFibGV0IGFuZCBzbWFsbGVyIHNjcmVlbnNcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLy8gZm9yIG1vYmlsZSBzY3JlZW5zXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWFyZ2luOiAxMXB4IDExcHg7XG4gIH1cblxuICAuY2FyZF9oZWFkZXJfZ3JhcGhfZmlyc3RzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHggMjBweCAyNHB4O1xuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHQge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlcl9yaWdodF90ZXh0IHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93bl9yZWdpc3RlciB7XG4gICAgICAvKiAgICAgIHdpZHRoOiAxODFweDtcbiovIGhlaWdodDogMzJweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMCAzMnB4IDAgMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMmQzMDQ3O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgICBzdmcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICMyZDMwNDcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICMyZDMwNDcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sdW1uLWNvdW50OiAxOyAvLyBkaXNwbGF5IHRoZSBpdGVtcyBpbiAzIGNvbHVtbnNcbiAgICAgICAgY29sdW1uLWdhcDogMHB4OyAvLyBhZGQgZ2FwIGJldHdlZW4gY29sdW1uc1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMCU7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIGFkZCBhIGJveC1zaGFkb3cgb24gaG92ZXJcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy8gZGlzcGxheSB0aGUgbGlzdCBpdGVtcyBpbmxpbmVcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8vIHNldCB0aGUgd2lkdGggdG8gMTAwJSB0byBmaWxsIHRoZSBjb2x1bW5zXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8vIGFkZCBtYXJnaW4gYmV0d2VlbiBpdGVtc1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLy8gYWRkIGEgYm94LXNoYWRvdyBvbiBob3ZlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duX3dlZWsge1xuICAgICAgLyogICAgICB3aWR0aDogMTgxcHg7XG4qLyBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzJkMzA0NztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMTsgLy8gZGlzcGxheSB0aGUgaXRlbXMgaW4gMyBjb2x1bW5zXG4gICAgICAgIGNvbHVtbi1nYXA6IDBweDsgLy8gYWRkIGdhcCBiZXR3ZWVuIGNvbHVtbnNcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAlO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIGRpc3BsYXkgdGhlIGxpc3QgaXRlbXMgaW5saW5lXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvLyBzZXQgdGhlIHdpZHRoIHRvIDEwMCUgdG8gZmlsbCB0aGUgY29sdW1uc1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvLyBhZGQgbWFyZ2luIGJldHdlZW4gaXRlbXNcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIGFkZCBhIGJveC1zaGFkb3cgb24gaG92ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93bl93ZWVrX2NvbGxlY3Rpb24ge1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDMycHggMCAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyZDMwNDc7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2x1bW4tY291bnQ6IDE7IC8vIGRpc3BsYXkgdGhlIGl0ZW1zIGluIDMgY29sdW1uc1xuICAgICAgICBjb2x1bW4tZ2FwOiAwcHg7IC8vIGFkZCBnYXAgYmV0d2VlbiBjb2x1bW5zXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLy8gYWRkIGEgYm94LXNoYWRvdyBvbiBob3ZlclxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyBkaXNwbGF5IHRoZSBsaXN0IGl0ZW1zIGlubGluZVxuICAgICAgICB3aWR0aDogMTAwJTsgLy8gc2V0IHRoZSB3aWR0aCB0byAxMDAlIHRvIGZpbGwgdGhlIGNvbHVtbnNcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLy8gYWRkIG1hcmdpbiBiZXR3ZWVuIGl0ZW1zXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dF9jb2xsZWN0aW9uX291dHRlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIC50ZXh0X2NvbGxlY3Rpb24ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyZDMwNDc7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NmE3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ib3R0b20tbGluZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ2YTc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keV9ncmFwaF9maXJzdHMge1xuICAgIG1hcmdpbjogMjRweDtcblxuICAgIC5jYW52YXNfcmVnaXN0ZXJzX2JhcnMge1xuICAgICAgLy8gbWFyZ2luLXRvcDogNzBweDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhbnZhc19iYXJzX2NvbGxlY3Rpb25zIHtcbiAgICAgIC8vIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA0NzBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDYwcHg7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkX2Rhc2hib2FyZF9ncmFwaF9zZWNvbmQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYW5pbWF0aW9uOiBmYWRlX2luX2FuZF96b29tIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC8vIGZvciB0YWJsZXQgYW5kIHNtYWxsZXIgc2NyZWVuc1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAvLyBmb3IgbW9iaWxlIHNjcmVlbnNcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBtYXJnaW46IDExcHggMTFweDtcbiAgfVxuXG4gIC5jYXJkX2hlYWRlcl9ncmFwaF9zZWNvbmQge1xuICAgIHBhZGRpbmc6IDIwcHggMjRweCAyMHB4IDI0cHg7XG5cbiAgICAuaGVhZGVyX2xlZnRfdGV4dCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX3JpZ2h0X3RleHRfZ3JhcGhfc2Vjb25kIHtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgICAgY29sb3I6ICM5MjllYWU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd25fd2VlayB7XG4gICAgICB3aWR0aDogMTMxcHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzJkMzA0NztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMTsgLy8gZGlzcGxheSB0aGUgaXRlbXMgaW4gMyBjb2x1bW5zXG4gICAgICAgIGNvbHVtbi1nYXA6IDBweDsgLy8gYWRkIGdhcCBiZXR3ZWVuIGNvbHVtbnNcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAlO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIGRpc3BsYXkgdGhlIGxpc3QgaXRlbXMgaW5saW5lXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvLyBzZXQgdGhlIHdpZHRoIHRvIDEwMCUgdG8gZmlsbCB0aGUgY29sdW1uc1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvLyBhZGQgbWFyZ2luIGJldHdlZW4gaXRlbXNcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIGFkZCBhIGJveC1zaGFkb3cgb24gaG92ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50b3RhbF9ncmFwaF9zZWNvbmQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keV9ncmFwaF9zZWNvbmQge1xuICAgIG1hcmdpbjogMjRweDtcblxuICAgIC5jYW52YXNfYWxsb2NhdGlvbnNfYmFycyB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAzMjBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYW52YXNfcGllX2Z1bmRzIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDMyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhbnZhc19waWVfZnVuZHMyIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDMyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keV9ncmFwaF9zZWNvbmRfYWxsb2NhdGlvbiB7XG4gICAgbWFyZ2luOiAyNHB4O1xuXG4gICAgLmNhbnZhc19hbGxvY2F0aW9uc19iYXJzIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDM4MnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmJvZHlfZ3JhcGhfc2Vjb25kX2FsbG9jYXRpb24ge1xuICAgIG1hcmdpbjogMTBweDtcblxuICAgIC5jYW52YXNfYWxsb2NhdGlvbnNfYmFycyB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA0MTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uY3Vyc29yX3BvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZmFkZV9pbl9hbmRfem9vbSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpIHNjYWxlKDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IC8vIFNldCB0aGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIGFuaW1hdGlvblxuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IC8vIFNldCB0aGUgZW5kIHBvaW50IG9mIHRoZSBhbmltYXRpb25cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 12081:
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/dashboard/dashboard.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 58361);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ 67380);
/* harmony import */ var _action_menu_action_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-menu/action-menu.component */ 99294);
/* harmony import */ var _registers_list_registers_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registers-list/registers-list.component */ 95734);
/* harmony import */ var _online_registers_online_registers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./online-registers/online-registers.component */ 61080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









class DashboardModule {}
DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)();
};
DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _action_menu_action_menu_component__WEBPACK_IMPORTED_MODULE_3__.ContextMenuComponent, _registers_list_registers_list_component__WEBPACK_IMPORTED_MODULE_4__.RegistersListComponent, _online_registers_online_registers_component__WEBPACK_IMPORTED_MODULE_5__.OnlineRegistersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 32618:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/dashboard/dashboard.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared.service */ 69082);



class DashboardService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  getRequest(url) {
    const apiUrl = `${this.apiUrl}${url}`;
    return this.http.get(apiUrl, this.sharedService.getHeaders());
  }
}
DashboardService.ɵfac = function DashboardService_Factory(t) {
  return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
DashboardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DashboardService,
  factory: DashboardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 61080:
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/dashboard/online-registers/online-registers.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineRegistersComponent": () => (/* binding */ OnlineRegistersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard.service */ 32618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);






function OnlineRegistersComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnlineRegistersComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OnlineRegistersComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.registersName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.branch == null ? null : item_r5.branch.branchName);
  }
}
function OnlineRegistersComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23)(2, "div", 24)(3, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 24)(12, "ngb-pagination", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function OnlineRegistersComponent_ng_container_33_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.pageNo = $event);
    })("pageChange", function OnlineRegistersComponent_ng_container_33_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.pageNo * 6 - 5, " - ", (ctx_r2.regsiterList.data == null ? null : ctx_r2.regsiterList.data.length) == 6 ? ctx_r2.pageNo * 6 : ctx_r2.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", ctx_r2.totalRecords)("page", ctx_r2.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
class OnlineRegistersComponent {
  constructor(_dashboardService) {
    this._dashboardService = _dashboardService;
    this.totalRecords = 0;
    this.pageNo = 1;
    this.searchQuery = '';
    this.registerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnChanges() {
    this.totalRecords = this.regsiterList.info.totalRecordsCount;
  }
  ngOnInit() {}
  onSearchChange(event) {
    this.pageNo = 1;
    let value = event.target.value;
    this.registerEvent.emit({
      ...this.eventData,
      search: value,
      pageNo: this.pageNo
    });
  }
  clearSearch() {
    this.pageNo = 1;
    this.searchQuery = '';
    this.registerEvent.emit({
      ...this.eventData,
      search: '',
      pageNo: this.pageNo
    });
  }
  pageChange(pageNo) {
    this.registerEvent.emit({
      ...this.eventData,
      pageNo
    });
  }
}
OnlineRegistersComponent.ɵfac = function OnlineRegistersComponent_Factory(t) {
  return new (t || OnlineRegistersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService));
};
OnlineRegistersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: OnlineRegistersComponent,
  selectors: [["online-registers"]],
  inputs: {
    regsiterList: "regsiterList"
  },
  outputs: {
    registerEvent: "registerEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 34,
  vars: 5,
  consts: [[1, "card_dashboard_table", "h-100"], [1, "card_header"], [1, "row", "justify-content-end"], [1, "col-lg-8", "col-md-12", "col-sm-6"], [1, "header_left_text"], [1, "col-lg-4", "col-md-12", "col-sm-6"], [1, "header_right_text"], [1, "row", "search_outter", "justify-content-between", "align-items-center"], [1, "col-lg-4", "col-md-12", "col-sm-12"], [1, "input-group", "search-box"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "button", "class", "btn", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md-6"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function OnlineRegistersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Online Registers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OnlineRegistersComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.searchQuery = $event;
      })("input", function OnlineRegistersComponent_Template_input_input_16_listener($event) {
        return ctx.onSearchChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, OnlineRegistersComponent_button_17_Template, 2, 0, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "table", 18)(23, "thead")(24, "tr")(25, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Register No");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Register Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Branch Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, OnlineRegistersComponent_tr_32_Template, 7, 3, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, OnlineRegistersComponent_ng_container_33_Template, 13, 9, "ng-container", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total No : ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.searchQuery == null ? null : ctx.searchQuery.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.regsiterList.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPagination],
  styles: [".card_dashboard[_ngcontent-%COMP%] {\n  padding: 24px;\n  \n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n}\n.card_dashboard[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n@media (max-width: 991.98px) {\n  .card_dashboard[_ngcontent-%COMP%] {\n    height: 178px;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 212px;\n  height: 44px;\n  background: #f8f8f8;\n  border-radius: 12px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  padding-left: 44px;\n  font-size: 16px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  fill: #bdbdbd;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  padding: 7px;\n  overflow: hidden;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  max-width: 100%;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  height: 56px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%] {\n  margin: 11px 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 20px;\n  color: #333333;\n  margin: 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head_numbers[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 25px;\n  color: #00261c;\n  letter-spacing: 0.016em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #00dea3;\n  letter-spacing: -0.02em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #f23985;\n  letter-spacing: -0.02em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n  color: #929eae;\n}\n\n.card_dashboard_table[_ngcontent-%COMP%] {\n  height: auto;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard_table[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%] {\n  padding: 20px 24px 0px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 181px;\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_left_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 181px;\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #e6e1e1;\n  column-count: 3;\n  column-gap: 20px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(-70%, 40px) !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #e6e1e1;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table_loader_container[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  \n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  text-transform: uppercase;\n  color: #2d3047;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border: none;\n}\n@media (max-width: 576px) {\n  .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: rgba(45, 48, 71, 0.8);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #0057ff;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 56px;\n  border-style: none !important;\n  position: relative;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 30px;\n  padding: 0px 8px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding: 0px 8px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_left_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%] {\n  padding: 0px 24px 20px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_left_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_outter[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 19px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 212px;\n  height: 44px;\n  background: #f8f8f8;\n  border-radius: 12px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  \n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border: none;\n  padding-left: 44px;\n  background-color: #f8f8f8;\n  border-radius: 12px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: rgb(45, 48, 71);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  fill: #bdbdbd;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 6px;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 44px;\n  background: #f8f8f8;\n  border-radius: 12px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  \n  \n  \n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border: none;\n  padding-left: 44px;\n  background-color: #f8f8f8;\n  border-radius: 12px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #212529;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  fill: #bdbdbd;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .total_unsettled[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%] {\n  height: 57px;\n  margin-bottom: 20px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .data_heading[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 23px;\n  color: #5e5873;\n  display: block;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .data_description[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 21px;\n  color: #6e6b7b;\n  display: block;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .data_user_detail[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 23px;\n  color: #5e5873;\n  display: block;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .svg_blink[_ngcontent-%COMP%] {\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_blink 1s infinite;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  padding: 7px;\n  overflow: hidden;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n  height: 56px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 56px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 56px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%] {\n  margin: 11px 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  color: #333333;\n  margin: 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head_numbers[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #00261c;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #00dea3;\n  letter-spacing: -0.02em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #f23985;\n  letter-spacing: -0.02em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  fill: none;\n  stroke-width: 2px;\n  stroke: #ccc;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .circle.red-fill[_ngcontent-%COMP%] {\n  stroke: #f00;\n  fill: #f00;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .circle.blue-fill[_ngcontent-%COMP%] {\n  stroke: #00f;\n  fill: #00f;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 21px;\n  width: 2px;\n  background-color: #ebe9f1;\n  border: none;\n  transform: translate(0%, 30%);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 7.5rem;\n  fill: #ccc;\n}\n\n.card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n  height: 573px;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 24px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%] {\n  \n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%] {\n  \n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%] {\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .text_collection[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .text_collection.active[_ngcontent-%COMP%] {\n  font-weight: 700 !important;\n  color: #dc3545 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .text_collection[_ngcontent-%COMP%]:hover {\n  color: rgba(220, 53, 70, 0.6549019608);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .bottom-line[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  transform: translate(0%, 0%);\n  width: 90%;\n  height: 2px;\n  background-color: #dc3545;\n  border-radius: 50%;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .bottom-line.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]:hover {\n  color: rgba(220, 53, 70, 0.6549019608);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%]   .canvas_registers_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 470px !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%]   .canvas_bars_collections[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 470px !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 460px;\n}\n\n.card_dashboard_graph_second[_ngcontent-%COMP%] {\n  height: auto;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_graph_second[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard_graph_second[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard_graph_second[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 24px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_right_text_graph_second[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_right_text_graph_second[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_right_text_graph_second[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%] {\n  width: 131px;\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .total_graph_second[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  margin-top: 18px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%]   .canvas_allocations_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%]   .canvas_pie_funds[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%]   .canvas_pie_funds2[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second_allocation[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second_allocation[_ngcontent-%COMP%]   .canvas_allocations_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 382px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .body_graph_second_allocation[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .body_graph_second_allocation[_ngcontent-%COMP%]   .canvas_allocations_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 410px !important;\n}\n\n.cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@keyframes _ngcontent-%COMP%_fade_in_and_zoom {\n  0% {\n    opacity: 0;\n    transform: translateY(50%) scale(1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFRSxhQUFBO0VBQ0E7R0FBQTtFQUVBLHVCQUFBO0VBQ0EsNENBVlc7RUFXWCxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBSkY7QUFNRTtFQUNFLHFCQUFBO0FBSko7QUFPRTtFQWhCRjtJQWtCSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBTEY7QUFDRjtBQU9FO0VBdkJGO0lBeUJJLG1CQUFBO0lBQ0EsYUFBQTtFQUxGO0FBQ0Y7QUFPRTtFQTdCRjtJQThCSSxpQkFBQTtFQUpGO0FBQ0Y7QUFRTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQU5SO0FBV007RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFUUjtBQWNFO0VBQ0Usc0JBQUE7RUFDQSxZQWhFZTtFQWlFZixZQWhFZ0I7RUFpRWhCLG1CQUFBO0VBQ0EsbUJBakV1QjtFQWtFdkIsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWk47QUFjTTtFQUNFLGFBQUE7QUFaUjtBQWVNO0VBQ0UsY0FBQTtBQWJSO0FBaUJJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBZk47QUFtQkU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQXhHUztFQXlHVCxZQUFBO0VB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V0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBM05SO0FBNk5RO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQTNOVjtBQWdPSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUE5Tk47QUFrT0U7RUFDRSxZQUFBO0FBaE9KO0FBa09JO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQWhPTjtBQW1PSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFqT047QUFvT0k7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0FBbE9OO0FBc09FO0VBQ0UsWUFBQTtBQXBPSjtBQXNPSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFwT047QUF3T0U7RUFDRSxZQUFBO0FBdE9KO0FBd09JO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQXRPTjs7QUEyT0E7RUFDRSxlQUFBO0FBeE9GOztBQTJPQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0VBeE9GO0VBMk9BO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VBek9GO0FBQ0Y7QUE0T0E7RUFDRTtJQUNFLHVCQUFBO0VBMU9GO0VBNk9BO0lBQ0UseUJBQUE7RUEzT0Y7QUFDRjtBQThPQTtFQUNFO0lBQ0UsWUFBQTtFQTVPRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuJHNlYXJjaC1ib3gtd2lkdGg6IDIxMnB4O1xuJHNlYXJjaC1ib3gtaGVpZ2h0OiA0NHB4O1xuJHNlYXJjaC1ib3gtYm9yZGVyLXJhZGl1czogMTJweDtcbi5jYXJkX2Rhc2hib2FyZCB7XG4gIC8vIHdpZHRoOiAyNzBweDtcbiAgcGFkZGluZzogMjRweDtcbiAgLyogIGhlaWdodDogMTc4cHg7XG4qL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZV9pbl9hbmRfem9vbSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC8vIGZvciB0YWJsZXQgYW5kIHNtYWxsZXIgc2NyZWVuc1xuICAgIGhlaWdodDogMTc4cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLy8gZm9yIG1vYmlsZSBzY3JlZW5zXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWFyZ2luOiAxMXB4IDExcHg7XG4gIH1cblxuICAuY2FyZF9oZWFkZXIge1xuICAgIC5oZWFkZXJfbGVmdF90ZXh0IHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfcmlnaHRfdGV4dCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoX2JveCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogJHNlYXJjaC1ib3gtd2lkdGg7XG4gICAgaGVpZ2h0OiAkc2VhcmNoLWJveC1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiAkc2VhcmNoLWJveC1ib3JkZXItcmFkaXVzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmctbGVmdDogNDRweDsgLy8gYWRqdXN0IGFzIG5lZWRlZCB0byBtYWtlIHNwYWNlIGZvciB0aGUgaWNvblxuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTJweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZmlsbDogI2JkYmRiZDtcbiAgICB9XG4gIH1cblxuICAuaWNvbl9vdXR0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIFRvIHByZXZlbnQgdGhlIGltYWdlIGZyb20gb3ZlcmZsb3dpbmcgb3V0c2lkZSB0aGUgZGl2XG5cbiAgICBpbWcge1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLy8gU2V0IHRoZSBhbmltYXRpb24gcHJvcGVydGllc1xuICAgIH1cbiAgfVxuXG4gIC5pY29uX291dHRlcl9ncmFwaCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcmRfdGV4dF9vdXR0ZXIge1xuICAgIG1hcmdpbjogMTFweCAwcHg7XG5cbiAgICAuaGVhZCB7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5oZWFkX251bWJlcnMge1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgY29sb3I6ICMwMDI2MWM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICB9XG5cbiAgICAuZm9vdGVyX2Rlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgY29sb3I6ICMwMGRlYTM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5mb290ZXJfZGVzY3JpcHRpb25fZGFuZ2VyIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgY29sb3I6ICNmMjM5ODU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5udW1iZXJzIHtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZF9kYXNoYm9hcmRfdGFibGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYW5pbWF0aW9uOiBmYWRlX2luX2FuZF96b29tIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC8vIGZvciB0YWJsZXQgYW5kIHNtYWxsZXIgc2NyZWVuc1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAvLyBmb3IgbW9iaWxlIHNjcmVlbnNcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBtYXJnaW46IDExcHggMTFweDtcbiAgfVxuXG4gIC5jYXJkX2hlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAyNHB4IDBweCAyNHB4O1xuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHQge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlcl9yaWdodF90ZXh0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24ge1xuICAgICAgd2lkdGg6IDE4MXB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDMycHggMCAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyZDMwNDc7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2x1bW4tY291bnQ6IDE7IC8vIGRpc3BsYXkgdGhlIGl0ZW1zIGluIDMgY29sdW1uc1xuICAgICAgICBjb2x1bW4tZ2FwOiAwcHg7IC8vIGFkZCBnYXAgYmV0d2VlbiBjb2x1bW5zXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLy8gYWRkIGEgYm94LXNoYWRvdyBvbiBob3ZlclxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyBkaXNwbGF5IHRoZSBsaXN0IGl0ZW1zIGlubGluZVxuICAgICAgICB3aWR0aDogMTAwJTsgLy8gc2V0IHRoZSB3aWR0aCB0byAxMDAlIHRvIGZpbGwgdGhlIGNvbHVtbnNcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLy8gYWRkIG1hcmdpbiBiZXR3ZWVuIGl0ZW1zXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXJkX2hlYWRlcl91bnNldHRsZWQge1xuICAgIHBhZGRpbmc6IDIwcHggMjRweCAyMHB4IDI0cHg7XG5cbiAgICAuaGVhZGVyX2xlZnRfdGV4dCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX3JpZ2h0X3RleHQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHRfdW5zZXR0bGVkIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfcmlnaHRfdGV4dF91bnNldHRsZWQge1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93biB7XG4gICAgICB3aWR0aDogMTgxcHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzJkMzA0NztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUxZTE7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMzsgLy8gZGlzcGxheSB0aGUgaXRlbXMgaW4gMyBjb2x1bW5zXG4gICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7IC8vIGFkZCBnYXAgYmV0d2VlbiBjb2x1bW5zXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLCA0MHB4KSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUxZTE7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy8gZGlzcGxheSB0aGUgbGlzdCBpdGVtcyBpbmxpbmVcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8vIHNldCB0aGUgd2lkdGggdG8gMTAwJSB0byBmaWxsIHRoZSBjb2x1bW5zXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8vIGFkZCBtYXJnaW4gYmV0d2VlbiBpdGVtc1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuXG4gICAgLnRhYmxlX2xvYWRlcl9jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50YWJsZSB7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG4gICAgICB0aCB7XG4gICAgICAgIC8qICAgICAgICBwYWRkaW5nOiAyMHB4IDI0cHggMjBweCAyNHB4O1xuKi8gZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjMmQzMDQ3O1xuICAgICAgfVxuXG4gICAgICB0ZCxcbiAgICAgIHRoIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGQge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoNDUsIDQ4LCA3MSwgMC44KTtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMDA1N2ZmO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyIHtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICB0cjpudGgtY2hpbGQob2RkKSB0ZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICB9XG5cbiAgICAgIHRkOmxhc3QtY2hpbGQsXG4gICAgICB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICB9XG5cbiAgICAgIHRkOmxhc3QtY2hpbGQsXG4gICAgICB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDhweDtcbiAgICAgIH1cblxuICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfbGVmdF90ZXh0X3Vuc2V0dGxlZCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX3JpZ2h0X3RleHRfdW5zZXR0bGVkIHtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgICAgY29sb3I6ICM5MjllYWU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZC1ib2R5X3Vuc2V0dGxlZCB7XG4gICAgcGFkZGluZzogMHB4IDI0cHggMjBweCAyNHB4O1xuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHRfdW5zZXR0bGVkIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfcmlnaHRfdGV4dF91bnNldHRsZWQge1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2hfb3V0dGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gIH1cblxuICAuc2VhcmNoX2JveCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogJHNlYXJjaC1ib3gtd2lkdGg7XG4gICAgaGVpZ2h0OiAkc2VhcmNoLWJveC1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiAkc2VhcmNoLWJveC1ib3JkZXItcmFkaXVzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmctbGVmdDogNDRweDsgLy8gYWRqdXN0IGFzIG5lZWRlZCB0byBtYWtlIHNwYWNlIGZvciB0aGUgaWNvblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogcmdiKDQ1LDQ4LDcxKTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMgKyBzdmcge1xuICAgICAgZmlsbDogI2RjMzU0NTtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfSovXG5cbiAgICAuc2VhcmNoLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTJweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZmlsbDogI2JkYmRiZDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2hfYm94X3Vuc2V0dGxlZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICRzZWFyY2gtYm94LWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIGJvcmRlci1yYWRpdXM6ICRzZWFyY2gtYm94LWJvcmRlci1yYWRpdXM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7IC8vIGFkanVzdCBhcyBuZWVkZWQgdG8gbWFrZSBzcGFjZSBmb3IgdGhlIGljb25cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICB9Ki9cbiAgICAvKiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyArIHN2ZyB7XG4gICAgICBmaWxsOiAjZGMzNTQ1O1xuICAgIH0qL1xuICAgIC8qICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICB9Ki9cblxuICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBmaWxsOiAjYmRiZGJkO1xuICAgIH1cbiAgfVxuXG4gIC50b3RhbF91bnNldHRsZWQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuZGF0YV9yb3dfdW5zZXR0bGVkIHtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIC5kYXRhX2hlYWRpbmcge1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgY29sb3I6ICM1ZTU4NzM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZGF0YV9kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICBjb2xvcjogIzZlNmI3YjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5kYXRhX3VzZXJfZGV0YWlsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgIGNvbG9yOiAjNWU1ODczO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnN2Z19ibGluayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBhbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5pY29uX291dHRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLy8gVG8gcHJldmVudCB0aGUgaW1hZ2UgZnJvbSBvdmVyZmxvd2luZyBvdXRzaWRlIHRoZSBkaXZcblxuICAgIGltZyB7XG4gICAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvLyBTZXQgdGhlIGFuaW1hdGlvbiBwcm9wZXJ0aWVzXG4gICAgfVxuICB9XG5cbiAgLmljb25fb3V0dGVyX2dyYXBoIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgIH1cblxuICAgIGNhbnZhcyB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICB9XG4gIH1cblxuICAuY2FyZF90ZXh0X291dHRlciB7XG4gICAgbWFyZ2luOiAxMXB4IDBweDtcblxuICAgIC5oZWFkIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRfbnVtYmVycyB7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBjb2xvcjogIzAwMjYxYztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgIH1cblxuICAgIC5mb290ZXJfZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAxNnB4IDBweDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICBjb2xvcjogIzAwZGVhMztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlcl9kZXNjcmlwdGlvbl9kYW5nZXIge1xuICAgICAgbWFyZ2luOiAxNnB4IDBweDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICBjb2xvcjogI2YyMzk4NTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm51bWJlcnMge1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgY29sb3I6ICM5MjllYWU7XG4gICAgfVxuICB9XG5cbiAgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgc3Ryb2tlOiAjY2NjO1xuXG4gICAgJi5yZWQtZmlsbCB7XG4gICAgICBzdHJva2U6ICNmMDA7XG4gICAgICBmaWxsOiAjZjAwO1xuICAgIH1cblxuICAgICYuYmx1ZS1maWxsIHtcbiAgICAgIHN0cm9rZTogIzAwZjtcbiAgICAgIGZpbGw6ICMwMGY7XG4gICAgfVxuICB9XG5cbiAgLnZlcnRpY2FsLWxpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAyMXB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTlmMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDMwJSk7XG4gIH1cblxuICAuZG90cyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDcuNXJlbTtcbiAgICBmaWxsOiAjY2NjO1xuICB9XG59XG5cbi5jYXJkX2Rhc2hib2FyZF9ncmFwaF9maXJzdHMge1xuICBoZWlnaHQ6IDU3M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZV9pbl9hbmRfem9vbSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAvLyBmb3IgdGFibGV0IGFuZCBzbWFsbGVyIHNjcmVlbnNcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLy8gZm9yIG1vYmlsZSBzY3JlZW5zXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWFyZ2luOiAxMXB4IDExcHg7XG4gIH1cblxuICAuY2FyZF9oZWFkZXJfZ3JhcGhfZmlyc3RzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHggMjBweCAyNHB4O1xuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHQge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlcl9yaWdodF90ZXh0IHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93bl9yZWdpc3RlciB7XG4gICAgICAvKiAgICAgIHdpZHRoOiAxODFweDtcbiovIGhlaWdodDogMzJweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMCAzMnB4IDAgMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMmQzMDQ3O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgICBzdmcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICMyZDMwNDcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICMyZDMwNDcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sdW1uLWNvdW50OiAxOyAvLyBkaXNwbGF5IHRoZSBpdGVtcyBpbiAzIGNvbHVtbnNcbiAgICAgICAgY29sdW1uLWdhcDogMHB4OyAvLyBhZGQgZ2FwIGJldHdlZW4gY29sdW1uc1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMCU7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIGFkZCBhIGJveC1zaGFkb3cgb24gaG92ZXJcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy8gZGlzcGxheSB0aGUgbGlzdCBpdGVtcyBpbmxpbmVcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8vIHNldCB0aGUgd2lkdGggdG8gMTAwJSB0byBmaWxsIHRoZSBjb2x1bW5zXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8vIGFkZCBtYXJnaW4gYmV0d2VlbiBpdGVtc1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLy8gYWRkIGEgYm94LXNoYWRvdyBvbiBob3ZlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duX3dlZWsge1xuICAgICAgLyogICAgICB3aWR0aDogMTgxcHg7XG4qLyBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzJkMzA0NztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMTsgLy8gZGlzcGxheSB0aGUgaXRlbXMgaW4gMyBjb2x1bW5zXG4gICAgICAgIGNvbHVtbi1nYXA6IDBweDsgLy8gYWRkIGdhcCBiZXR3ZWVuIGNvbHVtbnNcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAlO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIGRpc3BsYXkgdGhlIGxpc3QgaXRlbXMgaW5saW5lXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvLyBzZXQgdGhlIHdpZHRoIHRvIDEwMCUgdG8gZmlsbCB0aGUgY29sdW1uc1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvLyBhZGQgbWFyZ2luIGJldHdlZW4gaXRlbXNcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIGFkZCBhIGJveC1zaGFkb3cgb24gaG92ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93bl93ZWVrX2NvbGxlY3Rpb24ge1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDMycHggMCAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyZDMwNDc7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2x1bW4tY291bnQ6IDE7IC8vIGRpc3BsYXkgdGhlIGl0ZW1zIGluIDMgY29sdW1uc1xuICAgICAgICBjb2x1bW4tZ2FwOiAwcHg7IC8vIGFkZCBnYXAgYmV0d2VlbiBjb2x1bW5zXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLy8gYWRkIGEgYm94LXNoYWRvdyBvbiBob3ZlclxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyBkaXNwbGF5IHRoZSBsaXN0IGl0ZW1zIGlubGluZVxuICAgICAgICB3aWR0aDogMTAwJTsgLy8gc2V0IHRoZSB3aWR0aCB0byAxMDAlIHRvIGZpbGwgdGhlIGNvbHVtbnNcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLy8gYWRkIG1hcmdpbiBiZXR3ZWVuIGl0ZW1zXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dF9jb2xsZWN0aW9uX291dHRlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIC50ZXh0X2NvbGxlY3Rpb24ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyZDMwNDc7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NmE3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ib3R0b20tbGluZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ2YTc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keV9ncmFwaF9maXJzdHMge1xuICAgIG1hcmdpbjogMjRweDtcblxuICAgIC5jYW52YXNfcmVnaXN0ZXJzX2JhcnMge1xuICAgICAgLy8gbWFyZ2luLXRvcDogNzBweDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhbnZhc19iYXJzX2NvbGxlY3Rpb25zIHtcbiAgICAgIC8vIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA0NzBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDYwcHg7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkX2Rhc2hib2FyZF9ncmFwaF9zZWNvbmQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYW5pbWF0aW9uOiBmYWRlX2luX2FuZF96b29tIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC8vIGZvciB0YWJsZXQgYW5kIHNtYWxsZXIgc2NyZWVuc1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAvLyBmb3IgbW9iaWxlIHNjcmVlbnNcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBtYXJnaW46IDExcHggMTFweDtcbiAgfVxuXG4gIC5jYXJkX2hlYWRlcl9ncmFwaF9zZWNvbmQge1xuICAgIHBhZGRpbmc6IDIwcHggMjRweCAyMHB4IDI0cHg7XG5cbiAgICAuaGVhZGVyX2xlZnRfdGV4dCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX3JpZ2h0X3RleHRfZ3JhcGhfc2Vjb25kIHtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgICAgY29sb3I6ICM5MjllYWU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd25fd2VlayB7XG4gICAgICB3aWR0aDogMTMxcHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzJkMzA0NztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMTsgLy8gZGlzcGxheSB0aGUgaXRlbXMgaW4gMyBjb2x1bW5zXG4gICAgICAgIGNvbHVtbi1nYXA6IDBweDsgLy8gYWRkIGdhcCBiZXR3ZWVuIGNvbHVtbnNcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAlO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIGRpc3BsYXkgdGhlIGxpc3QgaXRlbXMgaW5saW5lXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvLyBzZXQgdGhlIHdpZHRoIHRvIDEwMCUgdG8gZmlsbCB0aGUgY29sdW1uc1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvLyBhZGQgbWFyZ2luIGJldHdlZW4gaXRlbXNcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIGFkZCBhIGJveC1zaGFkb3cgb24gaG92ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50b3RhbF9ncmFwaF9zZWNvbmQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keV9ncmFwaF9zZWNvbmQge1xuICAgIG1hcmdpbjogMjRweDtcblxuICAgIC5jYW52YXNfYWxsb2NhdGlvbnNfYmFycyB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAzMjBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYW52YXNfcGllX2Z1bmRzIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDMyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhbnZhc19waWVfZnVuZHMyIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDMyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keV9ncmFwaF9zZWNvbmRfYWxsb2NhdGlvbiB7XG4gICAgbWFyZ2luOiAyNHB4O1xuXG4gICAgLmNhbnZhc19hbGxvY2F0aW9uc19iYXJzIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDM4MnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmJvZHlfZ3JhcGhfc2Vjb25kX2FsbG9jYXRpb24ge1xuICAgIG1hcmdpbjogMTBweDtcblxuICAgIC5jYW52YXNfYWxsb2NhdGlvbnNfYmFycyB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA0MTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uY3Vyc29yX3BvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZmFkZV9pbl9hbmRfem9vbSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpIHNjYWxlKDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IC8vIFNldCB0aGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIGFuaW1hdGlvblxuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IC8vIFNldCB0aGUgZW5kIHBvaW50IG9mIHRoZSBhbmltYXRpb25cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */", "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 95734:
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/dashboard/registers-list/registers-list.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistersListComponent": () => (/* binding */ RegistersListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard.service */ 32618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);






function RegistersListComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistersListComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegistersListComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.registersName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.branch == null ? null : item_r5.branch.branchName);
  }
}
function RegistersListComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23)(2, "div", 24)(3, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 24)(12, "ngb-pagination", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function RegistersListComponent_ng_container_33_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.pageNo = $event);
    })("pageChange", function RegistersListComponent_ng_container_33_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.pageNo * 6 - 5, " - ", (ctx_r2.regsiterList.data == null ? null : ctx_r2.regsiterList.data.length) == 6 ? ctx_r2.pageNo * 6 : ctx_r2.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", ctx_r2.totalRecords)("page", ctx_r2.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
class RegistersListComponent {
  constructor(_dashboardService) {
    this._dashboardService = _dashboardService;
    this.totalRecords = 0;
    this.pageNo = 1;
    this.searchQuery = '';
    this.registerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnChanges() {
    this.totalRecords = this.regsiterList.info.totalRecordsCount;
  }
  ngOnInit() {}
  onSearchChange(event) {
    this.pageNo = 1;
    let value = event.target.value;
    this.registerEvent.emit({
      ...this.eventData,
      search: value,
      pageNo: this.pageNo
    });
  }
  clearSearch() {
    this.pageNo = 1;
    this.searchQuery = '';
    this.registerEvent.emit({
      ...this.eventData,
      search: '',
      pageNo: this.pageNo
    });
  }
  pageChange(pageNo) {
    this.registerEvent.emit({
      ...this.eventData,
      pageNo
    });
  }
}
RegistersListComponent.ɵfac = function RegistersListComponent_Factory(t) {
  return new (t || RegistersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService));
};
RegistersListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RegistersListComponent,
  selectors: [["registers-list"]],
  inputs: {
    regsiterList: "regsiterList"
  },
  outputs: {
    registerEvent: "registerEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 34,
  vars: 5,
  consts: [[1, "card_dashboard_table", "h-100"], [1, "card_header"], [1, "row", "justify-content-end"], [1, "col-lg-8", "col-md-12", "col-sm-6"], [1, "header_left_text"], [1, "col-lg-4", "col-md-12", "col-sm-6"], [1, "header_right_text"], [1, "row", "search_outter", "justify-content-between", "align-items-center"], [1, "col-lg-4", "col-md-12", "col-sm-12"], [1, "input-group", "search-box"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "button", "class", "btn", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md-6"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function RegistersListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Offline Registers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistersListComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.searchQuery = $event;
      })("input", function RegistersListComponent_Template_input_input_16_listener($event) {
        return ctx.onSearchChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegistersListComponent_button_17_Template, 2, 0, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "table", 18)(23, "thead")(24, "tr")(25, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Register No");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Register Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Branch Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RegistersListComponent_tr_32_Template, 7, 3, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RegistersListComponent_ng_container_33_Template, 13, 9, "ng-container", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total No :", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.searchQuery == null ? null : ctx.searchQuery.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.regsiterList.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPagination],
  styles: [".card_dashboard[_ngcontent-%COMP%] {\n  padding: 24px;\n  \n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n}\n.card_dashboard[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n@media (max-width: 991.98px) {\n  .card_dashboard[_ngcontent-%COMP%] {\n    height: 178px;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 212px;\n  height: 44px;\n  background: #f8f8f8;\n  border-radius: 12px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  padding-left: 44px;\n  font-size: 16px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.card_dashboard[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  fill: #bdbdbd;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  padding: 7px;\n  overflow: hidden;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  max-width: 100%;\n}\n.card_dashboard[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  height: 56px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%] {\n  margin: 11px 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 20px;\n  color: #333333;\n  margin: 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head_numbers[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 25px;\n  color: #00261c;\n  letter-spacing: 0.016em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #00dea3;\n  letter-spacing: -0.02em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #f23985;\n  letter-spacing: -0.02em;\n}\n.card_dashboard[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n  color: #929eae;\n}\n\n.card_dashboard_table[_ngcontent-%COMP%] {\n  height: auto;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard_table[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%] {\n  padding: 20px 24px 0px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 181px;\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%]   .card_header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_left_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 181px;\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #e6e1e1;\n  column-count: 3;\n  column-gap: 20px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(-70%, 40px) !important;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #e6e1e1;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_header_unsettled[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table_loader_container[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  \n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  text-transform: uppercase;\n  color: #2d3047;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border: none;\n}\n@media (max-width: 576px) {\n  .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: rgba(45, 48, 71, 0.8);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #0057ff;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 56px;\n  border-style: none !important;\n  position: relative;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 30px;\n  padding: 0px 8px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding: 0px 8px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_left_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%] {\n  padding: 0px 24px 20px 24px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_left_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card-body_unsettled[_ngcontent-%COMP%]   .header_right_text_unsettled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_outter[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 19px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 212px;\n  height: 44px;\n  background: #f8f8f8;\n  border-radius: 12px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  \n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border: none;\n  padding-left: 44px;\n  background-color: #f8f8f8;\n  border-radius: 12px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: rgb(45, 48, 71);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  fill: #bdbdbd;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_table[_ngcontent-%COMP%]   .search_box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 6px;\n  }\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 44px;\n  background: #f8f8f8;\n  border-radius: 12px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  \n  \n  \n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border: none;\n  padding-left: 44px;\n  background-color: #f8f8f8;\n  border-radius: 12px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #212529;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .search_box_unsettled[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  fill: #bdbdbd;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .total_unsettled[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%] {\n  height: 57px;\n  margin-bottom: 20px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .data_heading[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 23px;\n  color: #5e5873;\n  display: block;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .data_description[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 21px;\n  color: #6e6b7b;\n  display: block;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .data_user_detail[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 23px;\n  color: #5e5873;\n  display: block;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .data_row_unsettled[_ngcontent-%COMP%]   .svg_blink[_ngcontent-%COMP%] {\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_blink 1s infinite;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  padding: 7px;\n  overflow: hidden;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n  height: 56px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 56px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .icon_outter_graph[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 56px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%] {\n  margin: 11px 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  color: #333333;\n  margin: 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .head_numbers[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #00261c;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #00dea3;\n  letter-spacing: -0.02em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .card_text_outter[_ngcontent-%COMP%]   .footer_description_danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #f23985;\n  letter-spacing: -0.02em;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 16px;\n  color: #929eae;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  fill: none;\n  stroke-width: 2px;\n  stroke: #ccc;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .circle.red-fill[_ngcontent-%COMP%] {\n  stroke: #f00;\n  fill: #f00;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .circle.blue-fill[_ngcontent-%COMP%] {\n  stroke: #00f;\n  fill: #00f;\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 21px;\n  width: 2px;\n  background-color: #ebe9f1;\n  border: none;\n  transform: translate(0%, 30%);\n}\n.card_dashboard_table[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 7.5rem;\n  fill: #ccc;\n}\n\n.card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n  height: 573px;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard_graph_firsts[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 24px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .header_right_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.016em;\n  color: #dc3545;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%] {\n  \n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_register[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%] {\n  \n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%] {\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .dropdown_week_collection[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .text_collection[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  cursor: pointer;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .text_collection.active[_ngcontent-%COMP%] {\n  font-weight: 700 !important;\n  color: #dc3545 !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .text_collection[_ngcontent-%COMP%]:hover {\n  color: rgba(220, 53, 70, 0.6549019608);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .bottom-line[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  transform: translate(0%, 0%);\n  width: 90%;\n  height: 2px;\n  background-color: #dc3545;\n  border-radius: 50%;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]   .bottom-line.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card_header_graph_firsts[_ngcontent-%COMP%]   .text_collection_outter[_ngcontent-%COMP%]:hover {\n  color: rgba(220, 53, 70, 0.6549019608);\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%]   .canvas_registers_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 470px !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%]   .canvas_bars_collections[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 470px !important;\n}\n.card_dashboard_graph_firsts[_ngcontent-%COMP%]   .card-body_graph_firsts[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 460px;\n}\n\n.card_dashboard_graph_second[_ngcontent-%COMP%] {\n  height: auto;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  animation: _ngcontent-%COMP%_fade_in_and_zoom 0.5s ease-in-out forwards;\n  transition: all 0.2s ease-in-out;\n}\n@media (max-width: 991.98px) {\n  .card_dashboard_graph_second[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n}\n@media (max-width: 767.98px) {\n  .card_dashboard_graph_second[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 12px;\n  }\n}\n@media (max-width: 576px) {\n  .card_dashboard_graph_second[_ngcontent-%COMP%] {\n    margin: 11px 11px;\n  }\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 24px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_left_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 25px;\n  color: #1b212d;\n  letter-spacing: 0.016em;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_right_text_graph_second[_ngcontent-%COMP%] {\n  text-align: end;\n  cursor: pointer;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_right_text_graph_second[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.016em;\n  color: #929eae;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .header_right_text_graph_second[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%] {\n  width: 131px;\n  height: 32px;\n  position: relative;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border-radius: 12px;\n  border: none;\n  padding: 0 32px 0 16px;\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  color: #2d3047;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #2d3047 !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .dropdown_week[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card_header_graph_second[_ngcontent-%COMP%]   .total_graph_second[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  margin-top: 18px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%]   .canvas_allocations_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%]   .canvas_pie_funds[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second[_ngcontent-%COMP%]   .canvas_pie_funds2[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second_allocation[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .card-body_graph_second_allocation[_ngcontent-%COMP%]   .canvas_allocations_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 382px !important;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .body_graph_second_allocation[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.card_dashboard_graph_second[_ngcontent-%COMP%]   .body_graph_second_allocation[_ngcontent-%COMP%]   .canvas_allocations_bars[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 410px !important;\n}\n\n.cursor_pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@keyframes _ngcontent-%COMP%_fade_in_and_zoom {\n  0% {\n    opacity: 0;\n    transform: translateY(50%) scale(1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFRSxhQUFBO0VBQ0E7R0FBQTtFQUVBLHVCQUFBO0VBQ0EsNENBVlc7RUFXWCxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBSkY7QUFNRTtFQUNFLHFCQUFBO0FBSko7QUFPRTtFQWhCRjtJQWtCSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBTEY7QUFDRjtBQU9FO0VBdkJGO0lBeUJJLG1CQUFBO0lBQ0EsYUFBQTtFQUxGO0FBQ0Y7QUFPRTtFQTdCRjtJQThCSSxpQkFBQTtFQUpGO0FBQ0Y7QUFRTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQU5SO0FBV007RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFUUjtBQWNFO0VBQ0Usc0JBQUE7RUFDQSxZQWhFZTtFQWlFZixZQWhFZ0I7RUFpRWhCLG1CQUFBO0VBQ0EsbUJBakV1QjtFQWtFdkIsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWk47QUFjTTtFQUNFLGFBQUE7QUFaUjtBQWVNO0VBQ0UsY0FBQTtBQWJSO0FBaUJJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBZk47QUFtQkU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQXhHUztFQXlHVCxZQUFBO0VB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V0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBM05SO0FBNk5RO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQTNOVjtBQWdPSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUE5Tk47QUFrT0U7RUFDRSxZQUFBO0FBaE9KO0FBa09JO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQWhPTjtBQW1PSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFqT047QUFvT0k7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0FBbE9OO0FBc09FO0VBQ0UsWUFBQTtBQXBPSjtBQXNPSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFwT047QUF3T0U7RUFDRSxZQUFBO0FBdE9KO0FBd09JO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQXRPTjs7QUEyT0E7RUFDRSxlQUFBO0FBeE9GOztBQTJPQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0VBeE9GO0VBMk9BO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VBek9GO0FBQ0Y7QUE0T0E7RUFDRTtJQUNFLHVCQUFBO0VBMU9GO0VBNk9BO0lBQ0UseUJBQUE7RUEzT0Y7QUFDRjtBQThPQTtFQUNFO0lBQ0UsWUFBQTtFQTVPRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuJHNlYXJjaC1ib3gtd2lkdGg6IDIxMnB4O1xuJHNlYXJjaC1ib3gtaGVpZ2h0OiA0NHB4O1xuJHNlYXJjaC1ib3gtYm9yZGVyLXJhZGl1czogMTJweDtcbi5jYXJkX2Rhc2hib2FyZCB7XG4gIC8vIHdpZHRoOiAyNzBweDtcbiAgcGFkZGluZzogMjRweDtcbiAgLyogIGhlaWdodDogMTc4cHg7XG4qL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZV9pbl9hbmRfem9vbSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC8vIGZvciB0YWJsZXQgYW5kIHNtYWxsZXIgc2NyZWVuc1xuICAgIGhlaWdodDogMTc4cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLy8gZm9yIG1vYmlsZSBzY3JlZW5zXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWFyZ2luOiAxMXB4IDExcHg7XG4gIH1cblxuICAuY2FyZF9oZWFkZXIge1xuICAgIC5oZWFkZXJfbGVmdF90ZXh0IHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfcmlnaHRfdGV4dCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoX2JveCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogJHNlYXJjaC1ib3gtd2lkdGg7XG4gICAgaGVpZ2h0OiAkc2VhcmNoLWJveC1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiAkc2VhcmNoLWJveC1ib3JkZXItcmFkaXVzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmctbGVmdDogNDRweDsgLy8gYWRqdXN0IGFzIG5lZWRlZCB0byBtYWtlIHNwYWNlIGZvciB0aGUgaWNvblxuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTJweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZmlsbDogI2JkYmRiZDtcbiAgICB9XG4gIH1cblxuICAuaWNvbl9vdXR0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIFRvIHByZXZlbnQgdGhlIGltYWdlIGZyb20gb3ZlcmZsb3dpbmcgb3V0c2lkZSB0aGUgZGl2XG5cbiAgICBpbWcge1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLy8gU2V0IHRoZSBhbmltYXRpb24gcHJvcGVydGllc1xuICAgIH1cbiAgfVxuXG4gIC5pY29uX291dHRlcl9ncmFwaCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcmRfdGV4dF9vdXR0ZXIge1xuICAgIG1hcmdpbjogMTFweCAwcHg7XG5cbiAgICAuaGVhZCB7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5oZWFkX251bWJlcnMge1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgY29sb3I6ICMwMDI2MWM7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICB9XG5cbiAgICAuZm9vdGVyX2Rlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgY29sb3I6ICMwMGRlYTM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5mb290ZXJfZGVzY3JpcHRpb25fZGFuZ2VyIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgY29sb3I6ICNmMjM5ODU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5udW1iZXJzIHtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZF9kYXNoYm9hcmRfdGFibGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYW5pbWF0aW9uOiBmYWRlX2luX2FuZF96b29tIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC8vIGZvciB0YWJsZXQgYW5kIHNtYWxsZXIgc2NyZWVuc1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAvLyBmb3IgbW9iaWxlIHNjcmVlbnNcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBtYXJnaW46IDExcHggMTFweDtcbiAgfVxuXG4gIC5jYXJkX2hlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAyNHB4IDBweCAyNHB4O1xuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHQge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlcl9yaWdodF90ZXh0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24ge1xuICAgICAgd2lkdGg6IDE4MXB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDMycHggMCAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyZDMwNDc7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2x1bW4tY291bnQ6IDE7IC8vIGRpc3BsYXkgdGhlIGl0ZW1zIGluIDMgY29sdW1uc1xuICAgICAgICBjb2x1bW4tZ2FwOiAwcHg7IC8vIGFkZCBnYXAgYmV0d2VlbiBjb2x1bW5zXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLy8gYWRkIGEgYm94LXNoYWRvdyBvbiBob3ZlclxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyBkaXNwbGF5IHRoZSBsaXN0IGl0ZW1zIGlubGluZVxuICAgICAgICB3aWR0aDogMTAwJTsgLy8gc2V0IHRoZSB3aWR0aCB0byAxMDAlIHRvIGZpbGwgdGhlIGNvbHVtbnNcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLy8gYWRkIG1hcmdpbiBiZXR3ZWVuIGl0ZW1zXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXJkX2hlYWRlcl91bnNldHRsZWQge1xuICAgIHBhZGRpbmc6IDIwcHggMjRweCAyMHB4IDI0cHg7XG5cbiAgICAuaGVhZGVyX2xlZnRfdGV4dCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX3JpZ2h0X3RleHQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHRfdW5zZXR0bGVkIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfcmlnaHRfdGV4dF91bnNldHRsZWQge1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93biB7XG4gICAgICB3aWR0aDogMTgxcHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzJkMzA0NztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUxZTE7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMzsgLy8gZGlzcGxheSB0aGUgaXRlbXMgaW4gMyBjb2x1bW5zXG4gICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7IC8vIGFkZCBnYXAgYmV0d2VlbiBjb2x1bW5zXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLCA0MHB4KSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUxZTE7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy8gZGlzcGxheSB0aGUgbGlzdCBpdGVtcyBpbmxpbmVcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8vIHNldCB0aGUgd2lkdGggdG8gMTAwJSB0byBmaWxsIHRoZSBjb2x1bW5zXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8vIGFkZCBtYXJnaW4gYmV0d2VlbiBpdGVtc1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuXG4gICAgLnRhYmxlX2xvYWRlcl9jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50YWJsZSB7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG4gICAgICB0aCB7XG4gICAgICAgIC8qICAgICAgICBwYWRkaW5nOiAyMHB4IDI0cHggMjBweCAyNHB4O1xuKi8gZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjMmQzMDQ3O1xuICAgICAgfVxuXG4gICAgICB0ZCxcbiAgICAgIHRoIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGQge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoNDUsIDQ4LCA3MSwgMC44KTtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMDA1N2ZmO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRyIHtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICB0cjpudGgtY2hpbGQob2RkKSB0ZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICB9XG5cbiAgICAgIHRkOmxhc3QtY2hpbGQsXG4gICAgICB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICB9XG5cbiAgICAgIHRkOmxhc3QtY2hpbGQsXG4gICAgICB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDhweDtcbiAgICAgIH1cblxuICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfbGVmdF90ZXh0X3Vuc2V0dGxlZCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX3JpZ2h0X3RleHRfdW5zZXR0bGVkIHtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgICAgY29sb3I6ICM5MjllYWU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZC1ib2R5X3Vuc2V0dGxlZCB7XG4gICAgcGFkZGluZzogMHB4IDI0cHggMjBweCAyNHB4O1xuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHRfdW5zZXR0bGVkIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfcmlnaHRfdGV4dF91bnNldHRsZWQge1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgICAgICBjb2xvcjogIzkyOWVhZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2hfb3V0dGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gIH1cblxuICAuc2VhcmNoX2JveCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogJHNlYXJjaC1ib3gtd2lkdGg7XG4gICAgaGVpZ2h0OiAkc2VhcmNoLWJveC1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiAkc2VhcmNoLWJveC1ib3JkZXItcmFkaXVzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmctbGVmdDogNDRweDsgLy8gYWRqdXN0IGFzIG5lZWRlZCB0byBtYWtlIHNwYWNlIGZvciB0aGUgaWNvblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogcmdiKDQ1LDQ4LDcxKTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMgKyBzdmcge1xuICAgICAgZmlsbDogI2RjMzU0NTtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfSovXG5cbiAgICAuc2VhcmNoLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTJweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZmlsbDogI2JkYmRiZDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2hfYm94X3Vuc2V0dGxlZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICRzZWFyY2gtYm94LWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIGJvcmRlci1yYWRpdXM6ICRzZWFyY2gtYm94LWJvcmRlci1yYWRpdXM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7IC8vIGFkanVzdCBhcyBuZWVkZWQgdG8gbWFrZSBzcGFjZSBmb3IgdGhlIGljb25cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICB9Ki9cbiAgICAvKiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyArIHN2ZyB7XG4gICAgICBmaWxsOiAjZGMzNTQ1O1xuICAgIH0qL1xuICAgIC8qICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICB9Ki9cblxuICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBmaWxsOiAjYmRiZGJkO1xuICAgIH1cbiAgfVxuXG4gIC50b3RhbF91bnNldHRsZWQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuZGF0YV9yb3dfdW5zZXR0bGVkIHtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIC5kYXRhX2hlYWRpbmcge1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgY29sb3I6ICM1ZTU4NzM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZGF0YV9kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICBjb2xvcjogIzZlNmI3YjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5kYXRhX3VzZXJfZGV0YWlsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgIGNvbG9yOiAjNWU1ODczO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnN2Z19ibGluayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBhbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5pY29uX291dHRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLy8gVG8gcHJldmVudCB0aGUgaW1hZ2UgZnJvbSBvdmVyZmxvd2luZyBvdXRzaWRlIHRoZSBkaXZcblxuICAgIGltZyB7XG4gICAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvLyBTZXQgdGhlIGFuaW1hdGlvbiBwcm9wZXJ0aWVzXG4gICAgfVxuICB9XG5cbiAgLmljb25fb3V0dGVyX2dyYXBoIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgIH1cblxuICAgIGNhbnZhcyB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICB9XG4gIH1cblxuICAuY2FyZF90ZXh0X291dHRlciB7XG4gICAgbWFyZ2luOiAxMXB4IDBweDtcblxuICAgIC5oZWFkIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRfbnVtYmVycyB7XG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBjb2xvcjogIzAwMjYxYztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xuICAgIH1cblxuICAgIC5mb290ZXJfZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAxNnB4IDBweDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICBjb2xvcjogIzAwZGVhMztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3Rlcl9kZXNjcmlwdGlvbl9kYW5nZXIge1xuICAgICAgbWFyZ2luOiAxNnB4IDBweDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICBjb2xvcjogI2YyMzk4NTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm51bWJlcnMge1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgY29sb3I6ICM5MjllYWU7XG4gICAgfVxuICB9XG5cbiAgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgc3Ryb2tlOiAjY2NjO1xuXG4gICAgJi5yZWQtZmlsbCB7XG4gICAgICBzdHJva2U6ICNmMDA7XG4gICAgICBmaWxsOiAjZjAwO1xuICAgIH1cblxuICAgICYuYmx1ZS1maWxsIHtcbiAgICAgIHN0cm9rZTogIzAwZjtcbiAgICAgIGZpbGw6ICMwMGY7XG4gICAgfVxuICB9XG5cbiAgLnZlcnRpY2FsLWxpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAyMXB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTlmMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDMwJSk7XG4gIH1cblxuICAuZG90cyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDcuNXJlbTtcbiAgICBmaWxsOiAjY2NjO1xuICB9XG59XG5cbi5jYXJkX2Rhc2hib2FyZF9ncmFwaF9maXJzdHMge1xuICBoZWlnaHQ6IDU3M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZV9pbl9hbmRfem9vbSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAvLyBmb3IgdGFibGV0IGFuZCBzbWFsbGVyIHNjcmVlbnNcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLy8gZm9yIG1vYmlsZSBzY3JlZW5zXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWFyZ2luOiAxMXB4IDExcHg7XG4gIH1cblxuICAuY2FyZF9oZWFkZXJfZ3JhcGhfZmlyc3RzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHggMjBweCAyNHB4O1xuXG4gICAgLmhlYWRlcl9sZWZ0X3RleHQge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlcl9yaWdodF90ZXh0IHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93bl9yZWdpc3RlciB7XG4gICAgICAvKiAgICAgIHdpZHRoOiAxODFweDtcbiovIGhlaWdodDogMzJweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMCAzMnB4IDAgMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMmQzMDQ3O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgICBzdmcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICMyZDMwNDcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICMyZDMwNDcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sdW1uLWNvdW50OiAxOyAvLyBkaXNwbGF5IHRoZSBpdGVtcyBpbiAzIGNvbHVtbnNcbiAgICAgICAgY29sdW1uLWdhcDogMHB4OyAvLyBhZGQgZ2FwIGJldHdlZW4gY29sdW1uc1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMCU7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIGFkZCBhIGJveC1zaGFkb3cgb24gaG92ZXJcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy8gZGlzcGxheSB0aGUgbGlzdCBpdGVtcyBpbmxpbmVcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8vIHNldCB0aGUgd2lkdGggdG8gMTAwJSB0byBmaWxsIHRoZSBjb2x1bW5zXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8vIGFkZCBtYXJnaW4gYmV0d2VlbiBpdGVtc1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLy8gYWRkIGEgYm94LXNoYWRvdyBvbiBob3ZlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duX3dlZWsge1xuICAgICAgLyogICAgICB3aWR0aDogMTgxcHg7XG4qLyBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzJkMzA0NztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMTsgLy8gZGlzcGxheSB0aGUgaXRlbXMgaW4gMyBjb2x1bW5zXG4gICAgICAgIGNvbHVtbi1nYXA6IDBweDsgLy8gYWRkIGdhcCBiZXR3ZWVuIGNvbHVtbnNcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAlO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIGRpc3BsYXkgdGhlIGxpc3QgaXRlbXMgaW5saW5lXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvLyBzZXQgdGhlIHdpZHRoIHRvIDEwMCUgdG8gZmlsbCB0aGUgY29sdW1uc1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvLyBhZGQgbWFyZ2luIGJldHdlZW4gaXRlbXNcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIGFkZCBhIGJveC1zaGFkb3cgb24gaG92ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93bl93ZWVrX2NvbGxlY3Rpb24ge1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDMycHggMCAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyZDMwNDc7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzJkMzA0NyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2x1bW4tY291bnQ6IDE7IC8vIGRpc3BsYXkgdGhlIGl0ZW1zIGluIDMgY29sdW1uc1xuICAgICAgICBjb2x1bW4tZ2FwOiAwcHg7IC8vIGFkZCBnYXAgYmV0d2VlbiBjb2x1bW5zXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLy8gYWRkIGEgYm94LXNoYWRvdyBvbiBob3ZlclxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyBkaXNwbGF5IHRoZSBsaXN0IGl0ZW1zIGlubGluZVxuICAgICAgICB3aWR0aDogMTAwJTsgLy8gc2V0IHRoZSB3aWR0aCB0byAxMDAlIHRvIGZpbGwgdGhlIGNvbHVtbnNcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLy8gYWRkIG1hcmdpbiBiZXR3ZWVuIGl0ZW1zXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dF9jb2xsZWN0aW9uX291dHRlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIC50ZXh0X2NvbGxlY3Rpb24ge1xuICAgICAgICBmb250LWZhbWlseTogXCJLdW1iaCBTYW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyZDMwNDc7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NmE3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ib3R0b20tbGluZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ2YTc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keV9ncmFwaF9maXJzdHMge1xuICAgIG1hcmdpbjogMjRweDtcblxuICAgIC5jYW52YXNfcmVnaXN0ZXJzX2JhcnMge1xuICAgICAgLy8gbWFyZ2luLXRvcDogNzBweDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhbnZhc19iYXJzX2NvbGxlY3Rpb25zIHtcbiAgICAgIC8vIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA0NzBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDYwcHg7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkX2Rhc2hib2FyZF9ncmFwaF9zZWNvbmQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYW5pbWF0aW9uOiBmYWRlX2luX2FuZF96b29tIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC8vIGZvciB0YWJsZXQgYW5kIHNtYWxsZXIgc2NyZWVuc1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAvLyBmb3IgbW9iaWxlIHNjcmVlbnNcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBtYXJnaW46IDExcHggMTFweDtcbiAgfVxuXG4gIC5jYXJkX2hlYWRlcl9ncmFwaF9zZWNvbmQge1xuICAgIHBhZGRpbmc6IDIwcHggMjRweCAyMHB4IDI0cHg7XG5cbiAgICAuaGVhZGVyX2xlZnRfdGV4dCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX3JpZ2h0X3RleHRfZ3JhcGhfc2Vjb25kIHtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcbiAgICAgICAgY29sb3I6ICM5MjllYWU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd25fd2VlayB7XG4gICAgICB3aWR0aDogMTMxcHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzJkMzA0NztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMmQzMDQ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMTsgLy8gZGlzcGxheSB0aGUgaXRlbXMgaW4gMyBjb2x1bW5zXG4gICAgICAgIGNvbHVtbi1nYXA6IDBweDsgLy8gYWRkIGdhcCBiZXR3ZWVuIGNvbHVtbnNcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAlO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBhZGQgYSBib3gtc2hhZG93IG9uIGhvdmVyXG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIGRpc3BsYXkgdGhlIGxpc3QgaXRlbXMgaW5saW5lXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvLyBzZXQgdGhlIHdpZHRoIHRvIDEwMCUgdG8gZmlsbCB0aGUgY29sdW1uc1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvLyBhZGQgbWFyZ2luIGJldHdlZW4gaXRlbXNcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIGFkZCBhIGJveC1zaGFkb3cgb24gaG92ZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50b3RhbF9ncmFwaF9zZWNvbmQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keV9ncmFwaF9zZWNvbmQge1xuICAgIG1hcmdpbjogMjRweDtcblxuICAgIC5jYW52YXNfYWxsb2NhdGlvbnNfYmFycyB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAzMjBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYW52YXNfcGllX2Z1bmRzIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDMyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhbnZhc19waWVfZnVuZHMyIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDMyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keV9ncmFwaF9zZWNvbmRfYWxsb2NhdGlvbiB7XG4gICAgbWFyZ2luOiAyNHB4O1xuXG4gICAgLmNhbnZhc19hbGxvY2F0aW9uc19iYXJzIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDM4MnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmJvZHlfZ3JhcGhfc2Vjb25kX2FsbG9jYXRpb24ge1xuICAgIG1hcmdpbjogMTBweDtcblxuICAgIC5jYW52YXNfYWxsb2NhdGlvbnNfYmFycyB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA0MTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uY3Vyc29yX3BvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZmFkZV9pbl9hbmRfem9vbSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpIHNjYWxlKDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IC8vIFNldCB0aGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIGFuaW1hdGlvblxuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IC8vIFNldCB0aGUgZW5kIHBvaW50IG9mIHRoZSBhbmltYXRpb25cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */", "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
//# sourceMappingURL=src_app_dashboard_modules_main-fund_dashboard_dashboard_module_ts.js.map