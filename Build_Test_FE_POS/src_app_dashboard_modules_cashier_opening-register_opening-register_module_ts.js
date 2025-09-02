"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_cashier_opening-register_opening-register_module_ts"],{

/***/ 93240:
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/opening-register/modal-msg/modal-msg.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalMsgComponent": () => (/* binding */ ModalMsgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function ModalMsgComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The session has been opened successfully ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ModalMsgComponent_div_1_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.ErrorMessageEn, " ");
  }
}
function ModalMsgComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalMsgComponent_div_1_h5_1_Template, 3, 1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.errors);
  }
}
class ModalMsgComponent {
  constructor(router, modalService) {
    this.router = router;
    this.modalService = modalService;
  }
  ngOnInit() {
    if (this.name === 'ok') {
      console.log(this.name);
      setTimeout(() => {
        this.modalService.dismissAll();
        //  window.location.reload();
        //  this.router.navigateByUrl('/collect');
      }, 4000);
    } else {
      setTimeout(() => {
        this.modalService.dismissAll();
        // this.router.navigateByUrl('/collect');
      }, 4000);
    }
  }
}
ModalMsgComponent.ɵfac = function ModalMsgComponent_Factory(t) {
  return new (t || ModalMsgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
ModalMsgComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModalMsgComponent,
  selectors: [["app-modal-msg"]],
  inputs: {
    name: "name",
    errors: "errors"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "message", 4, "ngIf"], [1, "message"], [1, "fa-regular", "fa-circle-check"], [4, "ngFor", "ngForOf"], [1, "fa-regular", "fa-circle-xmark"]],
  template: function ModalMsgComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalMsgComponent_div_0_Template, 4, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalMsgComponent_div_1_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "no");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".message[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.message[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  color: #1b212d;\n  margin: 0px;\n  padding: 20px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-check[_ngcontent-%COMP%] {\n  color: #25BB00;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-xmark[_ngcontent-%COMP%] {\n  color: #DC3545;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9vcGVuaW5nLXJlZ2lzdGVyL21vZGFsLW1zZy9tb2RhbC1tc2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoNSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAuZmEtY2lyY2xlLWNoZWNre1xuICAgIGNvbG9yOiAjMjVCQjAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMnB4IDEwcHggNXB4O1xuICB9XG4gIC5mYS1jaXJjbGUteG1hcmt7XG4gICAgY29sb3I6ICNEQzM1NDU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAycHggMTBweCA1cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 59577:
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/opening-register/opening-register-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpeningRegisterRoutingModule": () => (/* binding */ OpeningRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _opening_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opening-register.component */ 44986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _opening_register_component__WEBPACK_IMPORTED_MODULE_0__.OpeningRegisterComponent
}];
class OpeningRegisterRoutingModule {}
OpeningRegisterRoutingModule.ɵfac = function OpeningRegisterRoutingModule_Factory(t) {
  return new (t || OpeningRegisterRoutingModule)();
};
OpeningRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: OpeningRegisterRoutingModule
});
OpeningRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OpeningRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 44986:
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/opening-register/opening-register.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpeningRegisterComponent": () => (/* binding */ OpeningRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _modal_msg_modal_msg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-msg/modal-msg.component */ 93240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/shared.service */ 69082);
/* harmony import */ var _services_openregister_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/openregister.service */ 45832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/header.service */ 36690);
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/httpservice.service */ 79345);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/common.service */ 5620);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/subject.service */ 29444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_components_no_ip_address_no_ip_address_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/no-ip-address/no-ip-address.component */ 78787);















const _c0 = ["modalPopup"];
function OpeningRegisterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-no-ip-address");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OpeningRegisterComponent_div_1_div_1_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Branch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r4.registerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r4.branchName, " ");
  }
}
function OpeningRegisterComponent_div_1_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Where you can define the initial fund and be active to start collecting");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p")(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " To open the register, please click on the button below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OpeningRegisterComponent_div_1_div_1_div_13_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.isShow = !ctx_r7.isShow);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Open Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate4"]("Welcome To Register ", ctx_r5.registerName, " ", ctx_r5.registerId, " in Branch ", ctx_r5.branchName, " - ", ctx_r5.cityName, "");
  }
}
function OpeningRegisterComponent_div_1_div_1_div_14_ng_container_13_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OpeningRegisterComponent_div_1_div_1_div_14_ng_container_13_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Value cannot be negative number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OpeningRegisterComponent_div_1_div_1_div_14_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, OpeningRegisterComponent_div_1_div_1_div_14_ng_container_13_ng_container_1_span_1_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, OpeningRegisterComponent_div_1_div_1_div_14_ng_container_13_ng_container_1_span_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.f == null ? null : (tmp_0_0 = ctx_r12.f.get("InitialFund")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.f == null ? null : (tmp_1_0 = ctx_r12.f.get("InitialFund")) == null ? null : tmp_1_0.errors["min"]);
  }
}
function OpeningRegisterComponent_div_1_div_1_div_14_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, OpeningRegisterComponent_div_1_div_1_div_14_ng_container_13_ng_container_1_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r9.f == null ? null : (tmp_0_0 = ctx_r9.f.get("InitialFund")) == null ? null : tmp_0_0.invalid) && (ctx_r9.f == null ? null : (tmp_0_0 = ctx_r9.f.get("InitialFund")) == null ? null : tmp_0_0.touched) || (ctx_r9.f == null ? null : (tmp_0_0 = ctx_r9.f.get("InitialFund")) == null ? null : tmp_0_0.dirty));
  }
}
function OpeningRegisterComponent_div_1_div_1_div_14_button_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OpeningRegisterComponent_div_1_div_1_div_14_button_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function OpeningRegisterComponent_div_1_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5)(1, "div", 8)(2, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function OpeningRegisterComponent_div_1_div_1_div_14_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 14)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Initial Fund .");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " Where you can define the initial fund and to be active to start collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 16)(11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, OpeningRegisterComponent_div_1_div_1_div_14_ng_container_13_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 19)(16, "div", 14)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 5)(21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, OpeningRegisterComponent_div_1_div_1_div_14_button_22_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, OpeningRegisterComponent_div_1_div_1_div_14_button_23_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r6.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.f == null ? null : (tmp_1_0 = ctx_r6.f.get("InitialFund")) == null ? null : tmp_1_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
  }
}
function OpeningRegisterComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " \u00A0 Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, OpeningRegisterComponent_div_1_div_1_p_12_Template, 7, 2, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, OpeningRegisterComponent_div_1_div_1_div_13_Template, 14, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, OpeningRegisterComponent_div_1_div_1_div_14_Template, 24, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](7, 5, ctx_r2.currentDate, " d MMM y "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](11, 8, ctx_r2.currentDate, " hh:mm:ss a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.isShow);
  }
}
function OpeningRegisterComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 8)(3, "div", 9)(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "You don't have register yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
}
function OpeningRegisterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, OpeningRegisterComponent_div_1_div_1_Template, 15, 11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, OpeningRegisterComponent_div_1_div_2_Template, 8, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.sharedService.getRegister);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.sharedService.getRegister);
  }
}
class OpeningRegisterComponent {
  constructor(sharedService, openregisterService, route, fb, modalService, headerService, router, config, httpserviceService, _commonService, _subjectService) {
    this.sharedService = sharedService;
    this.openregisterService = openregisterService;
    this.route = route;
    this.fb = fb;
    this.modalService = modalService;
    this.headerService = headerService;
    this.router = router;
    this.httpserviceService = httpserviceService;
    this._commonService = _commonService;
    this._subjectService = _subjectService;
    this.isShow = false;
    this.currentDate = new Date();
    config.backdrop = 'static';
    config.keyboard = false;
  }
  // getCity;
  ngOnInit() {
    // cityName
    // console.log( console.log(this.router))
    // console.log( console.log(this.router.url))
    if (this.sharedService.getRegister) {
      this.headerService.setTitle('Opening Register');
    } else {
      this.headerService.setTitle('');
    }
    // this.CanOpenRegisterSession();
    this.registerName = this.sharedService.getRegister?.registerObj?.registersName;
    this.registerId = this.sharedService.getRegister?.registerObj?.id;
    this.branchName = this.sharedService?.getRegister?.registerObj.registeBranch.branchName;
    this.cityName = this.sharedService?.getRegister?.registerObj.registeBranch.city;
    console.log(this.registerName);
    this.getForm();
    this.intervalId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
  getForm() {
    this.formGroup = this.fb.group({
      InitialFund: ['0.000', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0)]],
      Notes: ['']
    });
  }
  get f() {
    return this.formGroup;
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
  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return window.scroll(0, 0);
    }
    //this.formGroup.get('InitialFund')?.patchValue(+(this.formGroup.get('InitialFund')?.value).toFixed(3));
    const formData = new FormData();
    formData.append('InitialFund', (+this.formGroup.get('InitialFund')?.value).toFixed(3));
    formData.append('Notes', this.formGroup.get('Notes')?.value);
    this.isLoading = true;
    this.openregisterService.OpenRegisterSession(formData).subscribe(response => {
      if (response.isSuccess) {
        this.isLoading = false;
        const modalRef = this.modalService.open(_modal_msg_modal_msg_component__WEBPACK_IMPORTED_MODULE_0__.ModalMsgComponent);
        modalRef.componentInstance.name = 'ok';
        console.log(response);
        localStorage.setItem('timeRegister', new Date().toString());
        this.getUserMenu();
        this._subjectService.isRegisterOpen.next(true);
        this._subjectService.sessionDetails.next({
          opened: true
        });
      } else {
        this.isLoading = false;
        const modalRef = this.modalService.open(_modal_msg_modal_msg_component__WEBPACK_IMPORTED_MODULE_0__.ModalMsgComponent);
        modalRef.componentInstance.name = 'no';
        modalRef.componentInstance.errors = response.Errors;
        // this.errorMessage = response.Errors || response.errors;
      }
    }, error => {
      this.isLoading = false;
      const modalRef = this.modalService.open(_modal_msg_modal_msg_component__WEBPACK_IMPORTED_MODULE_0__.ModalMsgComponent);
      modalRef.componentInstance.name = 'no';
      modalRef.componentInstance.errors = error?.error.errors;
      //modalRef.componentInstance.errors = 'asif';
      // console.log(error), (this.errorMessage = error.statusText);
    });
  }

  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  CanOpenRegisterSession() {
    return this.openregisterService.CanOpenRegisterSession({}).subscribe(response => {
      if (response.isSuccess == true) {
        this.canOpenRegister = response.data.canOpenRegister;
        if (this.canOpenRegister == true) {} else if (this.canOpenRegister == false) {
          // this.router.navigate(['/collect']);
        }
      }
    });
  }
}
OpeningRegisterComponent.ɵfac = function OpeningRegisterComponent_Factory(t) {
  return new (t || OpeningRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_openregister_service__WEBPACK_IMPORTED_MODULE_2__.OpenregisterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_4__.HttpserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_6__.SubjectService));
};
OpeningRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: OpeningRegisterComponent,
  selectors: [["app-opening-register"]],
  viewQuery: function OpeningRegisterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.modalPopup = _t.first);
    }
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["class", "card-page", 4, "ngIf"], [1, "card-page"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "top-details"], ["class", "col-md-12", 4, "ngIf"], [1, "card-collect"], [1, "open-reg"], [1, "bgimg"], ["src", "assets/images/locker.png", "alt", ""], [1, "btn", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], [1, ""], [1, "col-md-4"], ["appDecimalNumber", "", "type", "text", "formControlName", "InitialFund", 1, "form-control"], [1, "col-md-6"], [1, "col-md-8"], ["rows", "4", "formControlName", "Notes", "name", "Notes", 1, "form-control"], [1, "btns-group", "my-1", "mx-1"], ["type", "submit", "class", "btn btn-save", 4, "ngIf"], ["type", "button", "class", "btn btn-save btn-load", "disabled", "", 4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"], ["type", "submit", 1, "btn", "btn-save"], ["type", "button", "disabled", "", 1, "btn", "btn-save", "btn-load"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function OpeningRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, OpeningRegisterComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, OpeningRegisterComponent_div_1_Template, 3, 2, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.sharedService.IsFoundIPAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.sharedService.IsFoundIPAddress);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_7__.DecimalNumberDirective, _shared_components_no_ip_address_no_ip_address_component__WEBPACK_IMPORTED_MODULE_8__.NoIpAddressComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [".open-reg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n.open-reg[_ngcontent-%COMP%]   .bgimg[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  width: 225px;\n  height: 225px;\n  padding: 30px;\n  display: block;\n  margin: 10px auto;\n  border-radius: 50%;\n  margin-bottom: 30px;\n}\n.open-reg[_ngcontent-%COMP%]   .bgimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.open-reg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #202020;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.open-reg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6d7985;\n  font-size: 18px;\n  font-weight: 500;\n  margin: 5px;\n}\n.open-reg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n.open-reg[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: #fff;\n  font-size: 16px;\n  padding: 12px 50px;\n  margin: 25px 0 0;\n}\n\n.card-collect[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #1b212d;\n}\n.card-collect[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  color: #6d7985;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #f44336;\n  font-weight: 500;\n  padding: 7px;\n  display: block;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  height: 52px;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9vcGVuaW5nLXJlZ2lzdGVyL29wZW5pbmctcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7QUFDTjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNOO0FBRUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlFO0VBQ0UsY0FBQTtBQURKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFERjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIub3Blbi1yZWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgLmJnaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIHdpZHRoOiAyMjVweDtcbiAgICBoZWlnaHQ6IDIyNXB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIGgzIHtcbiAgICBjb2xvcjogIzIwMjAyMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAjNmQ3OTg1O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gIH1cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMTJweCA1MHB4O1xuICAgIG1hcmdpbjogMjVweCAwIDA7XG4gIH1cbn1cbi5jYXJkLWNvbGxlY3Qge1xuICBsYWJlbCB7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gIH1cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM2ZDc5ODU7XG4gIH1cbn1cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDdweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYnRuLXNhdmV7XG4gIGhlaWdodDogNTJweDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 58294:
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/opening-register/opening-register.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpeningRegisterModule": () => (/* binding */ OpeningRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _opening_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opening-register-routing.module */ 59577);
/* harmony import */ var _opening_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opening-register.component */ 44986);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _modal_msg_modal_msg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-msg/modal-msg.component */ 93240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);






class OpeningRegisterModule {}
OpeningRegisterModule.ɵfac = function OpeningRegisterModule_Factory(t) {
  return new (t || OpeningRegisterModule)();
};
OpeningRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: OpeningRegisterModule
});
OpeningRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _opening_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.OpeningRegisterRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OpeningRegisterModule, {
    declarations: [_opening_register_component__WEBPACK_IMPORTED_MODULE_1__.OpeningRegisterComponent, _modal_msg_modal_msg_component__WEBPACK_IMPORTED_MODULE_3__.ModalMsgComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _opening_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.OpeningRegisterRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_cashier_opening-register_opening-register_module_ts.js.map