"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_main-fund_register-settlements_register-settlements_module_ts"],{

/***/ 32298:
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/view-file/view-file.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewFileComponent": () => (/* binding */ ViewFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function ViewFileComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.imageUploadedView == null ? null : ctx_r3.imageUploadedView.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewFileComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "click to open pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r5.viewPdf(ctx_r5.imageUploadedView == null ? null : ctx_r5.imageUploadedView.file), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewFileComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewFileComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewFileComponent_ng_container_0_ng_template_3_Template, 5, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFileComponent_ng_container_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.imageUploadedView == null ? null : ctx_r0.imageUploadedView.fileType) == "image/png" || (ctx_r0.imageUploadedView == null ? null : ctx_r0.imageUploadedView.fileType) == "image/jpeg" || (ctx_r0.imageUploadedView == null ? null : ctx_r0.imageUploadedView.fileType) == "image/jpg")("ngIfElse", _r4);
  }
}
function ViewFileComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.fileURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewFileComponent_ng_template_1_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8)(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "click to open PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r11.fileURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewFileComponent_ng_template_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewFileComponent_ng_template_1_ng_template_2_ng_container_1_Template, 6, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r10.fileType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pdf");
  }
}
function ViewFileComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewFileComponent_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewFileComponent_ng_template_1_ng_template_2_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFileComponent_ng_template_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileType == "png" || ctx_r2.fileType == "jpeg" || ctx_r2.fileType == "jpg" || ctx_r2.fileType == "svg")("ngIfElse", _r9);
  }
}
class ViewFileComponent {
  constructor(activeModal, sanitizer) {
    this.activeModal = activeModal;
    this.sanitizer = sanitizer;
    this.viewOnly = false;
    this.fileType = '';
    this.fileURL = '';
  }
  ngOnInit() {
    console.log(this.imageUploadedView);
    this.viewOnly = this.imageUploadedView?.viewOnly;
    if (this.viewOnly) {
      this.fileType = this.getFileType(this.imageUploadedView.url);
      this.fileURL = this.imageUploadedView.url;
    }
  }
  viewPdf(file) {
    let src = URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
  getFileType(fileName) {
    return fileName?.split('.').pop().trim().toLowerCase();
  }
}
ViewFileComponent.ɵfac = function ViewFileComponent_Factory(t) {
  return new (t || ViewFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};
ViewFileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewFileComponent,
  selectors: [["app-view-file"]],
  inputs: {
    imageUploadedView: "imageUploadedView"
  },
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["viewOnlyURL", ""], [1, "modal-body", "p-2"], ["pdf", ""], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "w-100", 3, "src"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center"], ["height", "80", "width", "80", "src", "assets/images/pdf.png", "alt", ""], ["target", "_blank", 1, "text-decoration-none", "text-capitalize", 3, "href"], ["elseExtViewBlock", ""], [1, "w-100", "mb-2", 3, "src"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
  template: function ViewFileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewFileComponent_ng_container_0_Template, 8, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewFileComponent_ng_template_1_Template, 7, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewOnly)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase],
  styles: [".imagepath[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.imagepath-no[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n\n.btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.btns-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  color: #dc3545;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-weight: 600;\n}\n\n.card-pdf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.card-pdf[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 600;\n  display: block;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvdmlldy1maWxlL3ZpZXctZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7QUFBSjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQU1FO0VBQ0UsWUFBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFKSiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXBhdGgge1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5pbWFnZXBhdGgtbm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5idG5zLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBjb2xvcjogI2RjMzU0NTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMzVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5jYXJkLXBkZiB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70860:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/components/session-bank-pledges/session-bank-pledges.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionBankPledgesComponent": () => (/* binding */ SessionBankPledgesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../cashier/close-register/services/close-register.service */ 15070);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);
















function SessionBankPledgesComponent_div_16_th_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th")(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_th_33_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 20)(4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionData_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r9.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r9.sort == 13);
  }
}
const _c0 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1
  };
};
function SessionBankPledgesComponent_div_16_tr_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td")(17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td")(20, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_tr_37_ng_container_1_Template_i_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.handleBankTransferDetails(item_r15, _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r15 == null ? null : item_r15.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.translations[0] == null ? null : item_r15.statusObj.translations[0].lookupName) == "Settled" && (item_r15 == null ? null : item_r15.settleActionType) == "edit" && (item_r15 == null ? null : item_r15.settleBankPledgeNumber) || (item_r15 == null ? null : item_r15.bankPledgeNumber), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 8, item_r15 == null ? null : item_r15.pledgeAmountJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.currency) && (item_r15 == null ? null : item_r15.currency[0] == null ? null : item_r15.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.translations[0] == null ? null : item_r15.statusObj.translations[0].lookupName) == "Settled" && (item_r15 == null ? null : item_r15.settleActionType) == "edit" && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 11, item_r15 == null ? null : item_r15.settleBankPledgeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](13, 14, item_r15 == null ? null : item_r15.bankPledgeDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.translations[0] == null ? null : item_r15.statusObj.translations[0].lookupName) == "Unsettled" && (item_r15 == null ? null : item_r15.performedAction) == "edit" && (item_r15 == null ? null : item_r15.settleBank[0] == null ? null : item_r15.settleBank[0].lookupName) || (item_r15 == null ? null : item_r15.bank[0] == null ? null : item_r15.bank[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](17, _c0, item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.lookupBGColor, item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.translations[0] == null ? null : item_r15.statusObj.translations[0].lookupName, " ");
  }
}
function SessionBankPledgesComponent_div_16_tr_37_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r15 == null ? null : item_r15.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r15 == null ? null : item_r15.bankPledgeNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 6, item_r15 == null ? null : item_r15.pledgeAmountJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.currency) && (item_r15 == null ? null : item_r15.currency[0] == null ? null : item_r15.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](11, 9, item_r15 == null ? null : item_r15.bankPledgeDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.settleBank[0] == null ? null : item_r15.settleBank[0].lookupName) || (item_r15 == null ? null : item_r15.bank[0] == null ? null : item_r15.bank[0].lookupName), "");
  }
}
function SessionBankPledgesComponent_div_16_tr_37_td_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_tr_37_td_4_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.reverseActionsOnBankPledge(item_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Undo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankPledgesComponent_div_16_tr_37_td_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_tr_37_td_4_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.actionsOnBankPledge(item_r15, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r15.settleActionType == "right" ? true :  false || item_r15.settleActionType == "edit" ? true : false);
  }
}
function SessionBankPledgesComponent_div_16_tr_37_td_4_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_tr_37_td_4_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.actionsOnBankPledge(item_r15, "wrong"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r15.settleActionType == "wrong" ? true : false);
  }
}
function SessionBankPledgesComponent_div_16_tr_37_td_4_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_tr_37_td_4_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r40.openModalEdit(item_r15, _r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r15.settleActionType == "edit" ? true : false);
  }
}
function SessionBankPledgesComponent_div_16_tr_37_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankPledgesComponent_div_16_tr_37_td_4_button_1_Template, 3, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SessionBankPledgesComponent_div_16_tr_37_td_4_button_2_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SessionBankPledgesComponent_div_16_tr_37_td_4_button_3_Template, 2, 1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SessionBankPledgesComponent_div_16_tr_37_td_4_button_4_Template, 2, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r15.settleActionTaken);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r15.settleActionTaken || item_r15.settleActionType == "right" || item_r15.settleActionType == "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r15.settleActionTaken || item_r15.settleActionType == "wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r15.settleActionTaken || item_r15.settleActionType == "edit");
  }
}
function SessionBankPledgesComponent_div_16_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankPledgesComponent_div_16_tr_37_ng_container_1_Template, 21, 20, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SessionBankPledgesComponent_div_16_tr_37_ng_template_2_Template, 14, 12, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SessionBankPledgesComponent_div_16_tr_37_td_4_Template, 5, 4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r10.isSettle)("ngIfElse", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.isSettle);
  }
}
function SessionBankPledgesComponent_div_16_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankPledgesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "div", 16)(2, "table", 17)(3, "thead")(4, "tr", 18)(5, "th")(6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r45.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 20)(9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th")(11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r47.sortByPledgeNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Bank Pledge Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 20)(14, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th")(16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r48.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Pledge Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 20)(19, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 22)(21, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "th")(24, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Bank Pledge Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "i", 20)(27, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "th")(29, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_div_16_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r50.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, " Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "i", 20)(32, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, SessionBankPledgesComponent_div_16_th_33_Template, 5, 5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, SessionBankPledgesComponent_div_16_tr_37_Template, 5, 3, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, SessionBankPledgesComponent_div_16_div_38_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sessionData_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isSettle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", sessionData_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
  }
}
function SessionBankPledgesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankPledgesComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function SessionBankPledgesComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r51.pageNo = $event);
    })("pageChange", function SessionBankPledgesComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r53.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.sessionData == null ? null : ctx_r3.sessionData.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordsCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordsCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r3.totalRecordsCount)("page", ctx_r3.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionBankPledgesComponent_ng_template_21_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 57)(4, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 59)(7, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_ng_template_21_div_39_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r56.viewFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r55.fileDetails == null ? null : ctx_r55.fileDetails.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r55.fileDetails == null ? null : ctx_r55.fileDetails.file, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function SessionBankPledgesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Bank Pledge Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Customer Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 48)(9, "div", 49)(10, "div", 50)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Paid Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 50)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 50)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Bank Pledge Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 49)(27, "div", 50)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Bank Pledge Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 50)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, SessionBankPledgesComponent_ng_template_21_div_39_Template, 10, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 53)(41, "div", 54)(42, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_ng_template_21_Template_button_click_42_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59);
      const modal_r54 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r54.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.details == null ? null : ctx_r5.details.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 7, ctx_r5.details == null ? null : ctx_r5.details.pledgeAmountJod, "2.3-3") + " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.details == null ? null : ctx_r5.details.currency[0] == null ? null : ctx_r5.details.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.settleBankPledgeNumber) || (ctx_r5.details == null ? null : ctx_r5.details.bankPledgeNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](32, 10, ctx_r5.details == null ? null : ctx_r5.details.settleBankPledgeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](33, 13, ctx_r5.details == null ? null : ctx_r5.details.bankPledgeDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.settleBank[0] == null ? null : ctx_r5.details.settleBank[0].lookupName) || (ctx_r5.details == null ? null : ctx_r5.details.bank[0] == null ? null : ctx_r5.details.bank[0].lookupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.fileDetails == null ? null : ctx_r5.fileDetails.fileName);
  }
}
function SessionBankPledgesComponent_ng_template_23_ng_container_25_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankPledgesComponent_ng_template_23_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankPledgesComponent_ng_template_23_ng_container_25_ng_container_1_span_1_Template, 2, 0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r65.formGroup == null ? null : (tmp_0_0 = ctx_r65.formGroup.get("bankPledgeNumber")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function SessionBankPledgesComponent_ng_template_23_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankPledgesComponent_ng_template_23_ng_container_25_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r61.formGroup == null ? null : (tmp_0_0 = ctx_r61.formGroup.get("bankPledgeNumber")) == null ? null : tmp_0_0.invalid) && (ctx_r61.formGroup == null ? null : (tmp_0_0 = ctx_r61.formGroup.get("bankPledgeNumber")) == null ? null : tmp_0_0.touched) || (ctx_r61.formGroup == null ? null : (tmp_0_0 = ctx_r61.formGroup.get("bankPledgeNumber")) == null ? null : tmp_0_0.dirty));
  }
}
function SessionBankPledgesComponent_ng_template_23_ng_container_31_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankPledgesComponent_ng_template_23_ng_container_31_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankPledgesComponent_ng_template_23_ng_container_31_ng_container_1_span_1_Template, 2, 0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r67.formGroup == null ? null : (tmp_0_0 = ctx_r67.formGroup.get("bankId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function SessionBankPledgesComponent_ng_template_23_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankPledgesComponent_ng_template_23_ng_container_31_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r62.formGroup == null ? null : (tmp_0_0 = ctx_r62.formGroup.get("bankId")) == null ? null : tmp_0_0.invalid) && (ctx_r62.formGroup == null ? null : (tmp_0_0 = ctx_r62.formGroup.get("bankId")) == null ? null : tmp_0_0.touched) || (ctx_r62.formGroup == null ? null : (tmp_0_0 = ctx_r62.formGroup.get("bankId")) == null ? null : tmp_0_0.dirty));
  }
}
function SessionBankPledgesComponent_ng_template_23_ng_container_37_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankPledgesComponent_ng_template_23_ng_container_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankPledgesComponent_ng_template_23_ng_container_37_ng_container_1_span_1_Template, 2, 0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r69.formGroup == null ? null : (tmp_0_0 = ctx_r69.formGroup.get("bankPledgeDate")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function SessionBankPledgesComponent_ng_template_23_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankPledgesComponent_ng_template_23_ng_container_37_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r63.formGroup == null ? null : (tmp_0_0 = ctx_r63.formGroup.get("bankPledgeDate")) == null ? null : tmp_0_0.invalid) && (ctx_r63.formGroup == null ? null : (tmp_0_0 = ctx_r63.formGroup.get("bankPledgeDate")) == null ? null : tmp_0_0.touched) || (ctx_r63.formGroup == null ? null : (tmp_0_0 = ctx_r63.formGroup.get("bankPledgeDate")) == null ? null : tmp_0_0.dirty));
  }
}
function SessionBankPledgesComponent_ng_template_23_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 81)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 57)(4, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 59)(7, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_ng_template_23_div_38_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r71.viewFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r64.fileDetails == null ? null : ctx_r64.fileDetails.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r64.fileDetails == null ? null : ctx_r64.fileDetails.file, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function SessionBankPledgesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Edit Bank Pledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function SessionBankPledgesComponent_ng_template_23_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r73.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "div", 69)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Paid Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 1)(16, "div", 69)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 1)(21, "div", 69)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Bank Pledge Number*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, SessionBankPledgesComponent_ng_template_23_ng_container_25_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 1)(27, "div", 69)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "ng-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, SessionBankPledgesComponent_ng_template_23_ng_container_31_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 1)(33, "div", 69)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Bank Pledge Date*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, SessionBankPledgesComponent_ng_template_23_ng_container_37_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, SessionBankPledgesComponent_ng_template_23_div_38_Template, 10, 2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 9)(40, "div", 76)(41, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_ng_template_23_Template_button_click_41_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r74);
      const modal_r60 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r60.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r7.payerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r7.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r7.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r7.formGroup.get("bankPledgeNumber")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r7.banks);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r7.formGroup.get("bankId")) == null ? null : tmp_5_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r7.formGroup.get("bankPledgeDate")) == null ? null : tmp_6_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.fileDetails == null ? null : ctx_r7.fileDetails.fileName);
  }
}
class SessionBankPledgesComponent {
  constructor(_registerSettlementService, activeRoute, closeRegisterService, sharedService, _modalService, fb, _collectService) {
    this._registerSettlementService = _registerSettlementService;
    this.activeRoute = activeRoute;
    this.closeRegisterService = closeRegisterService;
    this.sharedService = sharedService;
    this._modalService = _modalService;
    this.fb = fb;
    this._collectService = _collectService;
    this.banks = [];
    this.payerName = '';
    this.currency = '';
    this.sort = 1;
    this.pageNo = 1;
    this.searchText = '';
    this.fileDetails = {
      fileName: '',
      file: ''
    };
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
  }
  ngOnInit() {
    this.initForm();
    this.activeRoute.params.subscribe(params => {
      this.sessionId = params['sessionId'];
      this.getSessionBankPledge();
    });
    this.getBanks();
  }
  initForm() {
    this.formGroup = this.fb.group({
      collectionId: [''],
      paidAmountJod: [{
        value: '',
        disabled: true
      }],
      bankId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      bankPledgeDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      bankPledgeNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      pledgeAttachment: [null],
      attachment: [null]
    });
  }
  handleBankTransferDetails(item, content) {
    this.details = item;
    this.fileDetails.file = item?.pledgeAttachment;
    this.fileDetails.fileName = this.getFilName(item?.pledgeAttachment);
    this._modalService.open(content, {
      size: 'lg',
      centered: true
    });
  }
  getFilName(name) {
    return name?.split('/').pop();
  }
  viewFile() {
    const modalRef = this._modalService.open(_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__.ViewUploadedFileComponent, {
      size: 'md'
    });
    modalRef.componentInstance.file = this.fileDetails?.file;
  }
  getSessionBankPledge() {
    let obj = `?sessionId=${this.sessionId}&search=${this.searchText}&pageNo=${this.pageNo - 1}&pageSize=6&sort=${this.sort || 1}`;
    return this._registerSettlementService.getSessionBankPledge(obj).subscribe(response => {
      if (response) {
        this.sessionData = response.data;
        console.log(this.sessionData);
        this.totalAllRecordsCount = response?.totalAllRecordsCount;
        this.totalRecordsCount = response?.totalRecordCount;
      }
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.getSessionBankPledge();
    window.scroll(0, 0);
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 1) {
      this.searchText = text;
      this.pageNo = 1;
      this.getSessionBankPledge();
    }
    if (text.length == 0) {
      this.pageNo = 1;
      this.getSessionBankPledge();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.getSessionBankPledge();
  }
  actionsOnBankPledge(item, type) {
    const formData = new FormData();
    formData.append('ChequeCollectionId', item.ordersBanksPledgeCollectionId);
    formData.append('Action', type);
    return this._registerSettlementService.actionsOnBankPledge(formData).subscribe(response => {
      if (response.isSuccess) {
        this.getSessionBankPledge();
      } else {
        console.log('error', response);
      }
    });
  }
  reverseActionsOnBankPledge(item) {
    const formData = new FormData();
    formData.append('OrdersPledgeCollectionId', item.ordersBanksPledgeCollectionId);
    return this._registerSettlementService.reverseActionsOnBankPledge(formData).subscribe(response => {
      if (response.isSuccess) {
        this.getSessionBankPledge();
      } else {
        console.log('error', response);
      }
    });
  }
  openModalEdit(item, content) {
    console.log(item);
    this.payerName = item?.custoemrName;
    this.currency = item?.currency[0]?.lookupName;
    this.fileDetails.file = item?.pledgeAttachment;
    this.fileDetails.fileName = this.getFilName(item?.pledgeAttachment);
    let obj = {
      collectionId: item?.ordersBanksPledgeCollectionId,
      paidAmountJod: (item?.pledgeAmountJod).toFixed(3),
      bankId: item?.lastBankId || item?.bankId,
      bankPledgeDate: item?.bankPledgeDate.split('T')[0],
      bankPledgeNumber: item?.bankPledgeNumber
    };
    console.log(obj);
    this.formGroup.patchValue(obj);
    this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      let values = this.formGroup.value;
      const formData = new FormData();
      formData.append('CollectionId', values?.collectionId);
      formData.append('BankId', values?.bankId);
      formData.append('DrawerName', values?.drawerName);
      formData.append('BankPledgeDate', values?.bankPledgeDate);
      formData.append('BankPledgeNumber', values?.bankPledgeNumber);
      this._registerSettlementService.editCollectionBankPledge(formData).subscribe(response => {
        console.log(response);
        if (response.isSuccess) {
          this._modalService.dismissAll();
          this.successModal('success', 'Data saved successfully!');
          this.getSessionBankPledge();
        }
      }, error => {
        this.successModal('error', error.error['errors']);
      });
    }
  }
  successModal(type, message) {
    const modelRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent, {
      size: 'md'
    });
    modelRef.componentInstance.type = type;
    if (type == 'success') {
      modelRef.componentInstance.message = message;
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  getBanks() {
    this._collectService.getLookupsById(11).subscribe(response => {
      this.banks = response.data.map(x => {
        return {
          id: x.id,
          name: x.name[0].lookupName
        };
      });
    });
  }
  //SORTING
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getSessionBankPledge();
  }
  sortByPledgeNumber() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getSessionBankPledge();
  }
  sortByAmount() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getSessionBankPledge();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getSessionBankPledge();
  }
  sortByBank() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getSessionBankPledge();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.getSessionBankPledge();
  }
}
SessionBankPledgesComponent.ɵfac = function SessionBankPledgesComponent_Factory(t) {
  return new (t || SessionBankPledgesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_3__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__.CollectService));
};
SessionBankPledgesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SessionBankPledgesComponent,
  selectors: [["app-session-bank-pledges"]],
  inputs: {
    isSettle: "isSettle"
  },
  outputs: {
    loadMainData: "loadMainData"
  },
  decls: 25,
  vars: 6,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], ["sessionBankPledgeDetails", ""], ["editModal", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], ["scope", "col"], [1, "btn", 3, "disabled"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["settleData", ""], [1, "status-tag", 3, "ngStyle"], [1, "fa-regular", "fa-eye", "cursor-pointer", 3, "click"], ["class", "btn btn-undo", 3, "click", 4, "ngIf"], ["class", "btn btn-right", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-xmark", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-edit", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-undo", 3, "click"], ["src", "assets/images/undo.png", "alt", ""], [1, "btn", "btn-right", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-check"], [1, "btn", "btn-xmark", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-xmark"], [1, "btn", "btn-edit", 3, "disabled", "click"], [1, "fa-solid", "fa-pen"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "pb-2", "fw-600"], [1, "light-gray"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-4"], [1, "pb-2", "fw-600", "light-gray"], ["class", "col-6", 4, "ngIf"], [1, "modal-footer", "p-4"], [1, "btns-group"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "col-6"], [1, "file-item", "d-flex", "justify-content-between", "align-items-center", "py-2", "px-3"], [1, "fw-600", "green-clr", "mb-0"], [1, "d-flex", "gap-2", "align-items-center"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["target", "_blank", "download", "", 3, "href"], ["height", "20", "src", "assets/images/Download.png", 1, "cursor-pointer"], ["ngbAutoFocus", "", 1, "modal-body"], [1, "modal-head"], [1, "fw-700", "font-18"], [1, "fw-600", "font-16"], [1, "px-2", "gray-500", "text-capitalize"], [3, "formGroup", "submit"], [1, "form-group"], ["name", "name", "type", "text", "formControlName", "paidAmountJod", 1, "form-control"], ["type", "text", 1, "form-control", 3, "value"], ["name", "name", "type", "text", "formControlName", "bankPledgeNumber", 1, "form-control"], ["placeholder", " Select bank ", "bindLabel", "name", "bindValue", "id", "formControlName", "bankId", 3, "items"], ["type", "date", "formControlName", "bankPledgeDate", 1, "form-control"], ["class", "col-6 mt-3", 4, "ngIf"], [1, "btns-group", "my-2"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "col-6", "mt-3"]],
  template: function SessionBankPledgesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SessionBankPledgesComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function SessionBankPledgesComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankPledgesComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SessionBankPledgesComponent_div_16_Template, 39, 29, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, SessionBankPledgesComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SessionBankPledgesComponent_ng_container_20_Template, 12, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SessionBankPledgesComponent_ng_template_21_Template, 44, 16, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, SessionBankPledgesComponent_ng_template_23_Template, 45, 8, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("No. Of Pledges ", ctx.totalRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sessionData)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n\n.custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  height: 46px;\n  border-radius: 0.375rem;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n\n.file-input__input[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.file-input__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-500);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL3JlZ2lzdGVyLXNldHRsZW1lbnRzL2NvbXBvbmVudHMvc2Vzc2lvbi1iYW5rLXBsZWRnZXMvc2Vzc2lvbi1iYW5rLXBsZWRnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLFVBQUE7QUFFSjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKOztBQUdBO0VBQ0Usc0NBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBTUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBSEo7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFITjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpOO0FBTU07RUFDRSxjQUFBO0FBSlI7QUFVSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSTtFQUNFLG1CQUFBO0FBVE47QUFXTTtFQUNFLFlBQUE7QUFUUjtBQVlNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFWUjtBQWFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQVhSO0FBZ0JFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWlCQSxTQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQWRGOztBQWlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQWRGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxNXB4O1xuICAuYnRuIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi5idG4tcmlnaHQge1xuICBjb2xvcjogIzI5YTA3MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLXhtYXJrIHtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi1lZGl0IHtcbiAgY29sb3I6ICM0ZTlhZmY7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5idG4tdW5kbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDBweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG5cbi5jYXJkLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5idG4ge1xuICBjb2xvcjogI2E5YTlhOSAhaW1wb3J0YW50O1xufVxuXG5cblxuLm1vZGFsLWJvZHkge1xuICAubW9kYWwtaGVhZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvcm0ge1xuICAgIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsZS1pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmViOTNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuLyoqKkZJTEUqL1xuLmN1c3RvbS1maWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZmlsZS1pbnB1dF9faW5wdXQge1xuICB3aWR0aDogMC4xcHg7XG4gIGhlaWdodDogMC4xcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5maWxlLWlucHV0X19sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 37243:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/components/session-bank-transfer/session-bank-transfer.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionBankTransferComponent": () => (/* binding */ SessionBankTransferComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../cashier/close-register/services/close-register.service */ 15070);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);
















function SessionBankTransferComponent_div_16_th_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th")(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_th_35_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 20)(4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionData_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r9.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r9.sort == 13);
  }
}
const _c0 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1
  };
};
function SessionBankTransferComponent_div_16_tr_39_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td")(17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td")(20, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_tr_39_ng_container_1_Template_i_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.handleBankTransferDetails(item_r15, _r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r15 == null ? null : item_r15.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.translations[0] == null ? null : item_r15.statusObj.translations[0].lookupName) == "Settled" && (item_r15 == null ? null : item_r15.settleActionType) == "edit" && (item_r15 == null ? null : item_r15.settleTransfereReference) || (item_r15 == null ? null : item_r15.transfereReference), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 8, item_r15 == null ? null : item_r15.paidAmountJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.currency) && (item_r15 == null ? null : item_r15.currency[0] == null ? null : item_r15.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.translations[0] == null ? null : item_r15.statusObj.translations[0].lookupName) == "Settled" && (item_r15 == null ? null : item_r15.settleActionType) == "edit" && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 11, item_r15 == null ? null : item_r15.settleTransfereDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](13, 14, item_r15 == null ? null : item_r15.transfereDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.translations[0] == null ? null : item_r15.statusObj.translations[0].lookupName) == "Settled" && (item_r15 == null ? null : item_r15.settleActionType) == "edit" && (item_r15 == null ? null : item_r15.settleBankAccount == null ? null : item_r15.settleBankAccount.bankNameEnglish) + " - " + (item_r15 == null ? null : item_r15.settleBankAccount == null ? null : item_r15.settleBankAccount.accountName) + " - " + (item_r15 == null ? null : item_r15.settleBankAccount == null ? null : item_r15.settleBankAccount.accountNumber) || (item_r15 == null ? null : item_r15.bankAccount == null ? null : item_r15.bankAccount.bankNameEnglish) + " - " + (item_r15 == null ? null : item_r15.bankAccount == null ? null : item_r15.bankAccount.accountName) + " - " + (item_r15 == null ? null : item_r15.bankAccount == null ? null : item_r15.bankAccount.accountNumber), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](17, _c0, item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.lookupBGColor, item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r15 == null ? null : item_r15.statusObj == null ? null : item_r15.statusObj.translations[0] == null ? null : item_r15.statusObj.translations[0].lookupName, " ");
  }
}
function SessionBankTransferComponent_div_16_tr_39_ng_template_2_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.bankAccount == null ? null : item_r15.bankAccount.bankNameEnglish) + " - " + (item_r15 == null ? null : item_r15.bankAccount == null ? null : item_r15.bankAccount.accountName) + " - " + (item_r15 == null ? null : item_r15.bankAccount == null ? null : item_r15.bankAccount.accountNumber), "");
  }
}
function SessionBankTransferComponent_div_16_tr_39_ng_template_2_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.settleBankAccount == null ? null : item_r15.settleBankAccount.bankNameEnglish) + " - " + (item_r15 == null ? null : item_r15.settleBankAccount == null ? null : item_r15.settleBankAccount.accountName) + " - " + (item_r15 == null ? null : item_r15.settleBankAccount == null ? null : item_r15.settleBankAccount.accountNumber), "");
  }
}
function SessionBankTransferComponent_div_16_tr_39_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SessionBankTransferComponent_div_16_tr_39_ng_template_2_td_12_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, SessionBankTransferComponent_div_16_tr_39_ng_template_2_td_13_Template, 2, 1, "td", 13);
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r15 == null ? null : item_r15.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.lastTransfereReference) || (item_r15 == null ? null : item_r15.transfereReference), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 7, item_r15 == null ? null : item_r15.paidAmountJod, "2.3-3") + " JOD", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r15 == null ? null : item_r15.currency) && (item_r15 == null ? null : item_r15.currency[0] == null ? null : item_r15.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](11, 10, item_r15 == null ? null : item_r15.transfereDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(item_r15 == null ? null : item_r15.settleBankAccount == null ? null : item_r15.settleBankAccount.bankNameEnglish));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r15 == null ? null : item_r15.settleBankAccount == null ? null : item_r15.settleBankAccount.bankNameEnglish);
  }
}
function SessionBankTransferComponent_div_16_tr_39_td_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_tr_39_td_4_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r33.reverseActionOnBankTransfer(item_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Undo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankTransferComponent_div_16_tr_39_td_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_tr_39_td_4_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.actionsOnBankTransfer(item_r15, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r15.settleActionType == "right" ? true :  false || item_r15.settleActionType == "edit" ? true : false);
  }
}
function SessionBankTransferComponent_div_16_tr_39_td_4_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_tr_39_td_4_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r40.actionsOnBankTransfer(item_r15, "wrong"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r15.settleActionType == "wrong" ? true : false);
  }
}
function SessionBankTransferComponent_div_16_tr_39_td_4_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_tr_39_td_4_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r44.openModalEdit(item_r15, _r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", item_r15.settleActionType == "edit" ? true : false);
  }
}
function SessionBankTransferComponent_div_16_tr_39_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_div_16_tr_39_td_4_button_1_Template, 3, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SessionBankTransferComponent_div_16_tr_39_td_4_button_2_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SessionBankTransferComponent_div_16_tr_39_td_4_button_3_Template, 2, 1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SessionBankTransferComponent_div_16_tr_39_td_4_button_4_Template, 2, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r15.settleActionTaken == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r15.settleActionTaken || item_r15.settleActionType == "right" || item_r15.settleActionType == "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r15.settleActionTaken || item_r15.settleActionType == "wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r15.settleActionTaken || item_r15.settleActionType == "edit");
  }
}
function SessionBankTransferComponent_div_16_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_div_16_tr_39_ng_container_1_Template, 21, 20, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SessionBankTransferComponent_div_16_tr_39_ng_template_2_Template, 14, 13, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SessionBankTransferComponent_div_16_tr_39_td_4_Template, 5, 4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r10.isSettle)("ngIfElse", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.isSettle);
  }
}
function SessionBankTransferComponent_div_16_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankTransferComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "div", 16)(2, "table", 17)(3, "thead")(4, "tr", 18)(5, "th")(6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 20)(9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th")(11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r51.sortByReference());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Transfer Reference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 20)(14, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th")(16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r52.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Paid Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 20)(19, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 22)(21, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "th")(24, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r53.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Transfer Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "i", 20)(27, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "th")(29, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_div_16_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r54.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, " Markazia Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Account No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "i", 20)(34, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, SessionBankTransferComponent_div_16_th_35_Template, 5, 5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, SessionBankTransferComponent_div_16_tr_39_Template, 5, 3, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, SessionBankTransferComponent_div_16_div_40_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sessionData_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isSettle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", sessionData_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (sessionData_r8 == null ? null : sessionData_r8.length) == 0);
  }
}
function SessionBankTransferComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankTransferComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function SessionBankTransferComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r55.pageNo = $event);
    })("pageChange", function SessionBankTransferComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r57.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.sessionData == null ? null : ctx_r3.sessionData.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordsCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordsCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r3.totalRecordsCount)("page", ctx_r3.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionBankTransferComponent_ng_template_21_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 57)(4, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 59)(7, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_ng_template_21_div_46_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r60.viewFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r59.fileDetails == null ? null : ctx_r59.fileDetails.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r59.fileDetails == null ? null : ctx_r59.fileDetails.file, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function SessionBankTransferComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Bank Transfer Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Customer Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 48)(9, "div", 49)(10, "div", 50)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Paid Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 50)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 50)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Transfer Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 49)(27, "div", 50)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Transfer Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 50)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Markazia Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Account No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 50)(42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Payer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, SessionBankTransferComponent_ng_template_21_div_46_Template, 10, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 53)(48, "div", 54)(49, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_ng_template_21_Template_button_click_49_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r63);
      const modal_r58 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r58.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.details == null ? null : ctx_r5.details.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 8, ctx_r5.details == null ? null : ctx_r5.details.paidAmountJod, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.details == null ? null : ctx_r5.details.currency[0] == null ? null : ctx_r5.details.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.settleTransfereReference) || (ctx_r5.details == null ? null : ctx_r5.details.transfereReference));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](32, 11, ctx_r5.details == null ? null : ctx_r5.details.settleTransfereDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](33, 14, ctx_r5.details == null ? null : ctx_r5.details.transfereDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r5.details == null ? null : ctx_r5.details.settleBankAccount) && (ctx_r5.details == null ? null : ctx_r5.details.settleBankAccount == null ? null : ctx_r5.details.settleBankAccount.bankNameEnglish) + " - " + (ctx_r5.details == null ? null : ctx_r5.details.settleBankAccount == null ? null : ctx_r5.details.settleBankAccount.accountName) + " - " + (ctx_r5.details == null ? null : ctx_r5.details.settleBankAccount == null ? null : ctx_r5.details.settleBankAccount.accountNumber) || (ctx_r5.details == null ? null : ctx_r5.details.bankAccount == null ? null : ctx_r5.details.bankAccount.bankNameEnglish) + " - " + (ctx_r5.details == null ? null : ctx_r5.details.bankAccount == null ? null : ctx_r5.details.bankAccount.accountName) + " - " + (ctx_r5.details == null ? null : ctx_r5.details.bankAccount == null ? null : ctx_r5.details.bankAccount.accountNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.details == null ? null : ctx_r5.details.cardPayerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.fileDetails == null ? null : ctx_r5.fileDetails.fileName);
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_25_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_ng_template_23_ng_container_25_ng_container_1_span_1_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r71.formGroup == null ? null : (tmp_0_0 = ctx_r71.formGroup.get("transfereReference")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_ng_template_23_ng_container_25_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r65.formGroup == null ? null : (tmp_0_0 = ctx_r65.formGroup.get("transfereReference")) == null ? null : tmp_0_0.invalid) && (ctx_r65.formGroup == null ? null : (tmp_0_0 = ctx_r65.formGroup.get("transfereReference")) == null ? null : tmp_0_0.touched) || (ctx_r65.formGroup == null ? null : (tmp_0_0 = ctx_r65.formGroup.get("transfereReference")) == null ? null : tmp_0_0.dirty));
  }
}
function SessionBankTransferComponent_ng_template_23_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r73 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((item_r73 == null ? null : item_r73.name) + " - " + (item_r73 == null ? null : item_r73.accountName) + " - " + (item_r73 == null ? null : item_r73.accountNumber));
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_32_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_32_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_ng_template_23_ng_container_32_ng_container_1_span_1_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r74.formGroup == null ? null : (tmp_0_0 = ctx_r74.formGroup.get("bankId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_ng_template_23_ng_container_32_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r67.formGroup == null ? null : (tmp_0_0 = ctx_r67.formGroup.get("bankId")) == null ? null : tmp_0_0.invalid) && (ctx_r67.formGroup == null ? null : (tmp_0_0 = ctx_r67.formGroup.get("bankId")) == null ? null : tmp_0_0.touched) || (ctx_r67.formGroup == null ? null : (tmp_0_0 = ctx_r67.formGroup.get("bankId")) == null ? null : tmp_0_0.dirty));
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_38_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_38_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_ng_template_23_ng_container_38_ng_container_1_span_1_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r76.formGroup == null ? null : (tmp_0_0 = ctx_r76.formGroup.get("drawerName")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_ng_template_23_ng_container_38_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r68.formGroup == null ? null : (tmp_0_0 = ctx_r68.formGroup.get("drawerName")) == null ? null : tmp_0_0.invalid) && (ctx_r68.formGroup == null ? null : (tmp_0_0 = ctx_r68.formGroup.get("drawerName")) == null ? null : tmp_0_0.touched) || (ctx_r68.formGroup == null ? null : (tmp_0_0 = ctx_r68.formGroup.get("drawerName")) == null ? null : tmp_0_0.dirty));
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_44_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_ng_template_23_ng_container_44_ng_container_1_span_1_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r78.formGroup == null ? null : (tmp_0_0 = ctx_r78.formGroup.get("transfereDate")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function SessionBankTransferComponent_ng_template_23_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SessionBankTransferComponent_ng_template_23_ng_container_44_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r69.formGroup == null ? null : (tmp_0_0 = ctx_r69.formGroup.get("transfereDate")) == null ? null : tmp_0_0.invalid) && (ctx_r69.formGroup == null ? null : (tmp_0_0 = ctx_r69.formGroup.get("transfereDate")) == null ? null : tmp_0_0.touched) || (ctx_r69.formGroup == null ? null : (tmp_0_0 = ctx_r69.formGroup.get("transfereDate")) == null ? null : tmp_0_0.dirty));
  }
}
function SessionBankTransferComponent_ng_template_23_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 57)(4, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 59)(7, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_ng_template_23_div_51_Template_img_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r80.viewFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r70.fileDetails == null ? null : ctx_r70.fileDetails.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r70.fileDetails == null ? null : ctx_r70.fileDetails.file, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function SessionBankTransferComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Edit Bank Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function SessionBankTransferComponent_ng_template_23_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r82.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "div", 69)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Paid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 1)(16, "div", 69)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 1)(21, "div", 69)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Transfer Reference* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, SessionBankTransferComponent_ng_template_23_ng_container_25_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 1)(27, "div", 69)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Markazia Bank Account No.*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "ng-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, SessionBankTransferComponent_ng_template_23_ng_template_31_Template, 2, 1, "ng-template", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, SessionBankTransferComponent_ng_template_23_ng_container_32_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 1)(34, "div", 69)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Payer Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, SessionBankTransferComponent_ng_template_23_ng_container_38_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 1)(40, "div", 69)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Transfer Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, SessionBankTransferComponent_ng_template_23_ng_container_44_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 1)(46, "div", 69)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Same Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div")(50, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SessionBankTransferComponent_ng_template_23_Template_input_change_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r83);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r84.sameCustomer($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, SessionBankTransferComponent_ng_template_23_div_51_Template, 10, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 9)(53, "div", 78)(54, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_ng_template_23_Template_button_click_54_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r83);
      const modal_r64 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r64.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r7.payerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r7.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx_r7.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r7.formGroup.get("transfereReference")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r7.banks);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r7.formGroup.get("bankId")) == null ? null : tmp_5_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r7.formGroup.get("drawerName")) == null ? null : tmp_6_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r7.formGroup.get("transfereDate")) == null ? null : tmp_7_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.fileDetails == null ? null : ctx_r7.fileDetails.fileName);
  }
}
class SessionBankTransferComponent {
  constructor(_registerSettlementService, activeRoute, closeRegisterService, sharedService, _modalService, fb, _collectService) {
    this._registerSettlementService = _registerSettlementService;
    this.activeRoute = activeRoute;
    this.closeRegisterService = closeRegisterService;
    this.sharedService = sharedService;
    this._modalService = _modalService;
    this.fb = fb;
    this._collectService = _collectService;
    this.banks = [];
    this.payerName = '';
    this.currency = '';
    this.pageNo = 1;
    this.sort = 1;
    this.searchText = '';
    this.fileDetails = {
      fileName: '',
      file: ''
    };
    this.loadMainData = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
  }
  ngOnInit() {
    this.initForm();
    this.getBankAccounts();
    this.activeRoute.params.subscribe(params => {
      this.sessionId = params['sessionId'];
      this.getSessionBankTransfere();
    });
    console.log(this.isSettle, 'Is setle');
  }
  initForm() {
    this.formGroup = this.fb.group({
      collectionId: [''],
      paidAmountJod: [{
        value: '',
        disabled: true
      }],
      bankId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      drawerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      transfereDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      transfereReference: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      transfereAttachment: [null],
      attachment: [null]
    });
  }
  handleBankTransferDetails(item, content) {
    this.details = item;
    this.fileDetails.file = item?.transfereAttachment;
    this.fileDetails.fileName = this.getFilName(item?.transfereAttachment);
    this._modalService.open(content, {
      size: 'lg',
      centered: true
    });
  }
  getFilName(name) {
    if (name) return name?.split('/').pop();
  }
  viewFile() {
    const modalRef = this._modalService.open(_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_1__.ViewUploadedFileComponent, {
      size: 'md'
    });
    modalRef.componentInstance.file = this.fileDetails?.file;
  }
  getSessionBankTransfere() {
    let obj = `?sessionId=${this.sessionId}&search=${this.searchText}&pageNo=${this.pageNo - 1}&pageSize=6&sort=${this.sort || 1}`;
    this._registerSettlementService.getSessionBankTransfer(obj).subscribe(response => {
      if (response) {
        this.sessionData = response.data;
        this.totalAllRecordsCount = response?.totalAllRecordsCount;
        this.totalRecordsCount = response?.totalRecordCount;
      }
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.getSessionBankTransfere();
    window.scroll(0, 0);
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 1) {
      this.searchText = text;
      this.pageNo = 1;
      this.getSessionBankTransfere();
    }
    if (text.length == 0) {
      this.pageNo = 1;
      this.getSessionBankTransfere();
    }
  }
  removeSearch() {
    this.searchText = '';
    this.pageNo = 1;
    this.getSessionBankTransfere();
  }
  actionsOnBankTransfer(item, type) {
    const formData = new FormData();
    formData.append('CollectionId', item.orderBankTransfereCollectionId);
    formData.append('Action', type);
    return this._registerSettlementService.actionsOnBankTransfer(formData).subscribe(response => {
      if (response.isSuccess) {
        this.getSessionBankTransfere();
      } else {
        console.log('error', response);
      }
    });
  }
  reverseActionOnBankTransfer(item) {
    const formData = new FormData();
    formData.append('OrderstransfereCollectionId', item.orderBankTransfereCollectionId);
    return this._registerSettlementService.reverseActionsOnBankTransfer(formData).subscribe(response => {
      if (response.isSuccess) {
        this.getSessionBankTransfere();
      } else {
        console.log('error', response);
      }
    });
  }
  openModalEdit(item, content) {
    console.log(item);
    this.fileDetails.file = item?.transfereAttachment;
    this.fileDetails.fileName = this.getFilName(item?.transfereAttachment);
    this.payerName = item?.cardPayerName;
    this.currency = item?.currency[0]?.lookupName;
    let obj = {
      collectionId: item?.orderBankTransfereCollectionId,
      paidAmountJod: (item?.paidAmountJod).toFixed(3),
      bankId: item?.bankAccount?.accountId,
      transfereDate: item?.transfereDate.split('T')[0],
      transfereReference: item?.transfereReference,
      drawerName: item?.cardPayerName
    };
    this.formGroup.patchValue(obj);
    this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      let values = this.formGroup.value;
      const formData = new FormData();
      formData.append('CollectionId', values?.collectionId);
      formData.append('BankId', values?.bankId);
      formData.append('DrawerName', values?.drawerName);
      formData.append('TransfereDate', values?.transfereDate);
      formData.append('TransfereReference', values?.transfereReference);
      this._registerSettlementService.editCollectionBankTransfer(formData).subscribe(response => {
        console.log(response);
        if (response.isSuccess) {
          this._modalService.dismissAll();
          this.successModal('success', 'Data saved successfully!');
          this.getSessionBankTransfere();
        }
      }, error => {
        this.successModal('error', error.error['errors']);
      });
    }
  }
  successModal(type, message) {
    const modelRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent, {
      size: 'md'
    });
    modelRef.componentInstance.type = type;
    if (type == 'success') {
      modelRef.componentInstance.message = message;
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  getBankAccounts() {
    let params = `?AccountType=15001&currencyId=9001&Status=2001&PageNo=0&PageSize=1000`;
    this._collectService.getBankAccounts(params).subscribe(response => {
      if (response.isSuccess) {
        this.banks = response['data'].map(x => {
          return {
            id: x.accountId,
            name: x.bankNameEnglish,
            accountName: x.accountName,
            accountNumber: x.accountNumber
          };
        });
      }
    });
  }
  sameCustomer(event) {
    let value = event?.target?.checked;
    if (value) this.formGroup.get('drawerName').setValue(this.payerName);else this.formGroup.get('drawerName').setValue('');
  }
  //SORTING
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getSessionBankTransfere();
  }
  sortByReference() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getSessionBankTransfere();
  }
  sortByAmount() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getSessionBankTransfere();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getSessionBankTransfere();
  }
  sortByBank() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getSessionBankTransfere();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.getSessionBankTransfere();
  }
}
SessionBankTransferComponent.ɵfac = function SessionBankTransferComponent_Factory(t) {
  return new (t || SessionBankTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_3__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__.CollectService));
};
SessionBankTransferComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SessionBankTransferComponent,
  selectors: [["app-session-bank-transfer"]],
  inputs: {
    isSettle: "isSettle"
  },
  outputs: {
    loadMainData: "loadMainData"
  },
  decls: 25,
  vars: 6,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], ["sessionBankTransferDetails", ""], ["editModal", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], ["scope", "col"], [1, "btn", 3, "disabled"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["settleData", ""], [1, "status-tag", 3, "ngStyle"], [1, "fa-regular", "fa-eye", "cursor-pointer", 3, "click"], ["class", "btn btn-undo", 3, "click", 4, "ngIf"], ["class", "btn btn-right", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-xmark", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-edit", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-undo", 3, "click"], ["src", "assets/images/undo.png", "alt", ""], [1, "btn", "btn-right", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-check"], [1, "btn", "btn-xmark", 3, "disabled", "click"], [1, "fa-regular", "fa-circle-xmark"], [1, "btn", "btn-edit", 3, "disabled", "click"], [1, "fa-solid", "fa-pen"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "pb-2", "fw-600"], [1, "light-gray"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-4"], [1, "pb-2", "fw-600", "light-gray"], ["class", "col-6 mt-3", 4, "ngIf"], [1, "modal-footer", "p-4"], [1, "btns-group"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "col-6", "mt-3"], [1, "file-item", "d-flex", "justify-content-between", "align-items-center", "py-2", "px-3"], [1, "fw-600", "green-clr", "mb-0"], [1, "d-flex", "gap-2", "align-items-center"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["target", "_blank", "download", "", 3, "href"], ["height", "20", "src", "assets/images/Download.png", 1, "cursor-pointer"], ["ngbAutoFocus", "", 1, "modal-body"], [1, "modal-head"], [1, "fw-700", "font-18"], [1, "fw-600", "font-16"], [1, "px-2", "gray-500", "text-capitalize"], [3, "formGroup", "submit"], [1, "form-group"], ["name", "name", "type", "text", "formControlName", "paidAmountJod", 1, "form-control"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["name", "name", "type", "text", "formControlName", "transfereReference", 1, "form-control"], ["placeholder", " Select bank ", "bindLabel", "name", "bindValue", "id", "formControlName", "bankId", 3, "items"], ["ng-option-tmp", ""], ["type", "text", "formControlName", "drawerName", 1, "form-control"], ["type", "date", "formControlName", "transfereDate", 1, "form-control"], ["type", "checkbox", 1, "form-check-input", 3, "change"], [1, "btns-group", "m-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["class", "error", 4, "ngIf"], [1, "error"]],
  template: function SessionBankTransferComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SessionBankTransferComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function SessionBankTransferComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SessionBankTransferComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SessionBankTransferComponent_div_16_Template, 41, 29, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, SessionBankTransferComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SessionBankTransferComponent_ng_container_20_Template, 12, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SessionBankTransferComponent_ng_template_21_Template, 51, 17, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, SessionBankTransferComponent_ng_template_23_Template, 58, 9, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("No. Of Transfers ", ctx.totalRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sessionData)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.totalRecordsCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgOptionTemplateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n\n.custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  height: 46px;\n  border-radius: 0.375rem;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n\n.file-input__input[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.file-input__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-500);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL3JlZ2lzdGVyLXNldHRsZW1lbnRzL2NvbXBvbmVudHMvc2Vzc2lvbi1iYW5rLXRyYW5zZmVyL3Nlc3Npb24tYmFuay10cmFuc2Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUFFO0VBQ0ksVUFBQTtBQUVOOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7O0FBR0E7RUFDRSxzQ0FBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUFISjtBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhOO0FBTUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSk47QUFNTTtFQUNFLGNBQUE7QUFKUjtBQVVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFSTjtBQVdJO0VBQ0UsbUJBQUE7QUFUTjtBQVdNO0VBQ0UsWUFBQTtBQVRSO0FBWU07RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVZSO0FBYU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBWFI7QUFnQkU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBZEo7O0FBaUJBLFNBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFkRjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBZEYiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC5idG57XG4gICAgICBwYWRkaW5nOjA7XG4gIH1cbn1cblxuLmJ0bi1yaWdodCB7XG4gIGNvbG9yOiAjMjlhMDczO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5idG4teG1hcmsge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLWVkaXQge1xuICBjb2xvcjogIzRlOWFmZjtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi11bmRvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cblxuLmNhcmQtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi5kaXNhYmxlZCwgLmJ0bjpkaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLmJ0biB7XG4gIGNvbG9yOiAjYTlhOWE5ICFpbXBvcnRhbnQ7XG59XG5cblxuXG4ubW9kYWwtYm9keSB7XG4gIC5tb2RhbC1oZWFkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuXG4gICAgaDMge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjMWIyMTJkO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICM5MjllYWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9ybSB7XG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICB9XG5cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgfVxuXG4gICAgICAuZXJyb3Ige1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBhY2NlbnQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWxlLWl0ZW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZWI5M2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG4vKioqRklMRSovXG4uY3VzdG9tLWZpbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5maWxlLWlucHV0X19pbnB1dCB7XG4gIHdpZHRoOiAwLjFweDtcbiAgaGVpZ2h0OiAwLjFweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmZpbGUtaW5wdXRfX2xhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 49558:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/components/session-card-payments/session-card-payments.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionCardPaymentsComponent": () => (/* binding */ SessionCardPaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/confirm-modal/confirm-modal.component */ 87192);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../cashier/close-register/services/close-register.service */ 15070);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/directive/numbers-only.directive */ 82757);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/directive/character.directive */ 80145);



















function SessionCardPaymentsComponent_div_19_th_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_th_41_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 25)(4, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionCards_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r9.sort == 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r9.sort == 15);
  }
}
function SessionCardPaymentsComponent_div_19_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 23)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionCards_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
  }
}
const _c0 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1
  };
};
function SessionCardPaymentsComponent_div_19_tr_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "td")(20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "td")(23, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_tr_44_ng_container_1_Template_i_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](27);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r22.handleCardDetails(item_r17, _r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.customer == null ? null : item_r17.customer.customerName) || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r17.paymentCardType[0] == null ? null : item_r17.paymentCardType[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.translations[0] == null ? null : item_r17.statusObj.translations[0].lookupName) == "Settled" && (item_r17 == null ? null : item_r17.settleActionType) == "edit" && (item_r17 == null ? null : item_r17.settled4Digits) || (item_r17 == null ? null : item_r17.cardLast4Digits), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.translations[0] == null ? null : item_r17.statusObj.translations[0].lookupName) == "Settled" && (item_r17 == null ? null : item_r17.settleActionType) == "edit" && (item_r17 == null ? null : item_r17.settleMachineReceiptNumber) || (item_r17 == null ? null : item_r17.machineReceiptNumber), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.translations[0] == null ? null : item_r17.statusObj.translations[0].lookupName) == "Settled" && (item_r17 == null ? null : item_r17.settleActionType) == "edit" && (item_r17 == null ? null : item_r17.settledCardProvide == null ? null : item_r17.settledCardProvide.providerName) || (item_r17 == null ? null : item_r17.cardProvide == null ? null : item_r17.cardProvide.providerName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](13, 10, item_r17 == null ? null : item_r17.cardCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.currency) && (item_r17 == null ? null : item_r17.currency[0] == null ? null : item_r17.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](18, 13, item_r17 == null ? null : item_r17.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](16, _c0, item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.lookupBGColor, item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.translations[0] == null ? null : item_r17.statusObj.translations[0].lookupName, " ");
  }
}
function SessionCardPaymentsComponent_div_19_tr_44_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.customer == null ? null : item_r17.customer.customerName) || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r17.paymentCardType[0] == null ? null : item_r17.paymentCardType[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.settled4Digits) || (item_r17 == null ? null : item_r17.cardLast4Digits), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r17 == null ? null : item_r17.machineReceiptNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r17 == null ? null : item_r17.cardProvide == null ? null : item_r17.cardProvide.providerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](12, 8, item_r17 == null ? null : item_r17.cardCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r17 == null ? null : item_r17.currency) && (item_r17 == null ? null : item_r17.currency[0] == null ? null : item_r17.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](17, 11, item_r17 == null ? null : item_r17.collectedAmount, "2.3-3"), "");
  }
}
function SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_container_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", item_r17.settleActionType == "right");
  }
}
function SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_container_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", item_r17.settleActionType == "wrong");
  }
}
function SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_container_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", item_r17.settleActionType == "edit");
  }
}
function SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_container_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r36.hadleReverseActionOnCard(item_r17 == null ? null : item_r17.ordersCardsCollectionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Undo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_container_1_button_4_Template, 2, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_container_1_button_5_Template, 2, 1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_container_1_button_6_Template, 2, 1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r17.settleActionType == "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r17.settleActionType == "wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r17.settleActionType == "edit");
  }
}
function SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r40.handleActionClick("right", item_r17 == null ? null : item_r17.ordersCardsCollectionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_template_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r43.handleActionClick("wrong", item_r17 == null ? null : item_r17.ordersCardsCollectionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_template_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r45.handleEditAction(_r4, item_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionCardPaymentsComponent_div_19_tr_44_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_container_1_Template, 7, 3, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, SessionCardPaymentsComponent_div_19_tr_44_td_4_ng_template_2_Template, 6, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r17.settleActionTaken)("ngIfElse", _r28);
  }
}
function SessionCardPaymentsComponent_div_19_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionCardPaymentsComponent_div_19_tr_44_ng_container_1_Template, 24, 19, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, SessionCardPaymentsComponent_div_19_tr_44_ng_template_2_Template, 18, 14, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, SessionCardPaymentsComponent_div_19_tr_44_td_4_Template, 4, 2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("highlight-tr", item_r17 == null ? null : item_r17.wrongActionInClosing);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r11.isSettle)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r11.isSettle && ctx_r11.canManageAndView);
  }
}
function SessionCardPaymentsComponent_div_19_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionCardPaymentsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 13)(1, "div", 20)(2, "table", 21)(3, "thead")(4, "tr", 22)(5, "th", 23)(6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r48.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 25)(9, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th", 23)(11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.sortByCardType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " Card Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "i", 25)(14, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th", 23)(16, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r51.sortByLastFour());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, " Last 4 Digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "i", 25)(19, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "th", 23)(21, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.sortByInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, " Machine Receipt No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "i", 25)(24, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "th", 23)(26, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r53.sortByTerminal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, " Terminal Provider ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "i", 25)(29, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "th", 23)(31, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_div_19_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r54.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, " Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "i", 25)(34, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "th", 23)(36, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "th", 23)(39, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, SessionCardPaymentsComponent_div_19_th_41_Template, 5, 5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, SessionCardPaymentsComponent_div_19_th_42_Template, 3, 1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, SessionCardPaymentsComponent_div_19_tr_44_Template, 5, 5, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, SessionCardPaymentsComponent_div_19_div_45_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sessionCards_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.isSettle);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.canManageAndView);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", sessionCards_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (sessionCards_r8 == null ? null : sessionCards_r8.length) == 0);
  }
}
function SessionCardPaymentsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionCardPaymentsComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function SessionCardPaymentsComponent_ng_container_23_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r55.pageNo = $event);
    })("pageChange", function SessionCardPaymentsComponent_ng_container_23_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r57.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.sessionCards == null ? null : ctx_r3.sessionCards.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collectionSize", ctx_r3.totalRecordCount)("page", ctx_r3.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionCardPaymentsComponent_ng_template_24_div_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionCardPaymentsComponent_ng_template_24_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionCardPaymentsComponent_ng_template_24_div_36_span_1_Template, 2, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r59.formValid["LastTerminalId"].errors["required"]);
  }
}
function SessionCardPaymentsComponent_ng_template_24_div_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionCardPaymentsComponent_ng_template_24_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionCardPaymentsComponent_ng_template_24_div_42_span_1_Template, 2, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r60.formValid["CardDate"].errors["required"]);
  }
}
function SessionCardPaymentsComponent_ng_template_24_div_48_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionCardPaymentsComponent_ng_template_24_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionCardPaymentsComponent_ng_template_24_div_48_span_1_Template, 2, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r61.formValid["CardLast4Digits"].errors["required"] || ctx_r61.formValid["CardLast4Digits"].errors["minlength"]);
  }
}
function SessionCardPaymentsComponent_ng_template_24_div_54_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionCardPaymentsComponent_ng_template_24_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionCardPaymentsComponent_ng_template_24_div_54_span_1_Template, 2, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r62.formValid["CardDrawerName"].errors["required"]);
  }
}
function SessionCardPaymentsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Edit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "form", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("submit", function SessionCardPaymentsComponent_ng_template_24_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r67.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "div", 57)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 59)(16, "div", 57)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 59)(21, "div", 57)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 1)(27, "div", 57)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Machine Reciept No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 1)(32, "div", 57)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "Terminal Provider*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](35, "ng-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, SessionCardPaymentsComponent_ng_template_24_div_36_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 1)(38, "div", 57)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, SessionCardPaymentsComponent_ng_template_24_div_42_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 1)(44, "div", 57)(45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "The last 4 digits of the card");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](47, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](48, SessionCardPaymentsComponent_ng_template_24_div_48_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 1)(50, "div", 57)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "Payer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, SessionCardPaymentsComponent_ng_template_24_div_54_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 13)(56, "div", 66)(57, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_ng_template_24_Template_button_click_57_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r68);
      const modal_r58 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r58.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.customer == null ? null : ctx_r5.cardDetails.customer.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r5.cardForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.currency[0] == null ? null : ctx_r5.cardDetails.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](25, 9, ctx_r5.cardDetails == null ? null : ctx_r5.cardDetails.collectedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r5.terminals);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formValid["LastTerminalId"].invalid && (ctx_r5.formValid["LastTerminalId"].touched || ctx_r5.formValid["LastTerminalId"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formValid["CardDate"].invalid && (ctx_r5.formValid["CardDate"].touched || ctx_r5.formValid["CardDate"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formValid["CardLast4Digits"].invalid && (ctx_r5.formValid["CardLast4Digits"].touched || ctx_r5.formValid["CardLast4Digits"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formValid["CardDrawerName"].invalid && (ctx_r5.formValid["CardDrawerName"].touched || ctx_r5.formValid["CardDrawerName"].dirty));
  }
}
function SessionCardPaymentsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "h4", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h6", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Customer Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 76)(9, "div", 77)(10, "div", 78)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 80)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 81)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 81)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Last 4 Digits of the Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 77)(33, "div", 78)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Machine Receipt No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 78)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "Provider Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 78)(44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, "Payer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 82)(49, "div", 83)(50, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_ng_template_26_Template_button_click_50_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r72);
      const modal_r70 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r70.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.customer == null ? null : ctx_r7.cardDetails.customer.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](15, 8, ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.cardCollectionJod, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.currency[0] == null ? null : ctx_r7.cardDetails.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](26, 11, ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.collectedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.settled4Digits) || (ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.cardLast4Digits));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.settleMachineReceiptNumber) || (ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.machineReceiptNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.settledCardProvide == null ? null : ctx_r7.cardDetails.settledCardProvide.providerName) || (ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.cardProvide == null ? null : ctx_r7.cardDetails.cardProvide.providerName));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r7.cardDetails == null ? null : ctx_r7.cardDetails.cardPayerName);
  }
}
class SessionCardPaymentsComponent {
  constructor(fb, _registerSettlementService, datePipe, _collectService, _modalService, _closeRegisterService, _commonService, _spinnerService, _activeRoute) {
    this.fb = fb;
    this._registerSettlementService = _registerSettlementService;
    this.datePipe = datePipe;
    this._collectService = _collectService;
    this._modalService = _modalService;
    this._closeRegisterService = _closeRegisterService;
    this._commonService = _commonService;
    this._spinnerService = _spinnerService;
    this._activeRoute = _activeRoute;
    this.pageNo = 1;
    this.sort = 1;
    this.searchText = '';
    this.loadCardData = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.isSettle = true;
    this.terminals = [];
    this.groupActionFlag = false;
    this.cardCollectionIds = '';
    this.sessionID = 0;
  }
  ngOnChanges(changes) {
    this.response = changes['response'].currentValue;
    this.sessionCards = this.response?.cards;
    this.totalRecordCount = this.response?.totalRecordCount;
    this.pagin = Math.ceil(this.totalRecordCount / 6);
    this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
  }
  ngOnInit() {
    this.initCardForm();
    this.canManageAndView = JSON.parse(localStorage.getItem('cmav'));
    this.getTerminalProviders();
    let params = this._activeRoute.snapshot.params;
    this.sessionID = +params['sessionId'];
    this.getCurrentSessionCollectedCardAll();
  }
  confirmGrouping() {
    if (!this.cardCollectionIds) return;
    const ref = this._modalService.open(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmModalComponent, {
      centered: true
    });
    ref.componentInstance.data = {
      body: 'Are you sure you want to accept all cards?'
    };
    ref.componentInstance.eventData.subscribe(x => {
      if (x) {
        this.groupActionsOnCard();
      }
    });
  }
  getCurrentSessionCollectedCardAll() {
    return this._registerSettlementService.getSessionAllCardsPayments(this.sessionID).subscribe(response => {
      if (response) {
        let data = response?.cards;
        this.groupActionFlag = data.every(x => x?.settleActionTaken);
        this.cardCollectionIds = data.map(x => x?.ordersCardsCollectionId).toString();
      }
    });
  }
  groupActionsOnCard() {
    this._spinnerService.show();
    const formData = new FormData();
    formData.append('OrdersCardsCollectionIds', this.cardCollectionIds);
    formData.append('Action', 'right');
    this._registerSettlementService.actionsOnCardGroup(formData).subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', 'The action done successfully');
          this.getCurrentSessionCollectedCardAll();
          this.loadCardData.emit({
            page: this.pageNo
          });
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors);
      }
    }).add(() => this._spinnerService.hide());
  }
  responseModal(type, message) {
    const ref = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
    ref.componentInstance.type = type;
    if (type == 'success') ref.componentInstance.message = message;else ref.componentInstance.messageError = message;
  }
  initCardForm() {
    this.cardForm = this.fb.group({
      OrdersCardsCollectionId: 0,
      LastTerminalId: [''],
      LastCollectedAmount: [''],
      CardDrawerName: '',
      MachineReceiptNumber: [''],
      CardDate: [''],
      CardLast4Digits: ['']
    });
  }
  get formValid() {
    return this.cardForm.controls;
  }
  getTerminalProviders() {
    this._collectService.getTerminalProviders().subscribe(response => {
      this.terminals = response.data.map(x => {
        return {
          id: x.providerId,
          name: x.providerName
        };
      });
    });
  }
  handleCardDetails(item, content) {
    this.cardDetails = {};
    this.cardDetails = item;
    this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  handleEditAction(content, item) {
    this.getBanks();
    this.cardDetails = {};
    this.cardDetails = item;
    console.log(item);
    let obj = {
      OrdersCardsCollectionId: item.ordersCardsCollectionId,
      LastTerminalId: item?.cardProvide?.providerId,
      CardDrawerName: item?.cardPayerName,
      LastCollectedAmount: item.cardCollectionJod,
      MachineReceiptNumber: item.machineReceiptNumber,
      CardDate: this.datePipe.transform(item?.collectionAt, 'yyyy-MM-dd'),
      CardLast4Digits: item?.cardLast4Digits
    };
    this.cardForm.patchValue(obj);
    //this.cardForm.controls['cardDrawerName'].setValue('');
    this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  handleCheckBoxChange(event) {
    let value = event.target.checked;
    if (value) {
      this.cardForm.controls['cardDrawerName'].setValue(this.cardDetails?.cardPayerName);
    } else {
      this.cardForm.controls['cardDrawerName'].setValue('');
      this.cardForm.controls['cardDrawerName'].markAsTouched();
    }
  }
  handleActionClick(action, ordersCardsCollectionId) {
    let formData = new FormData();
    formData.append('action', action);
    formData.append('ordersCardsCollectionId', ordersCardsCollectionId);
    this._registerSettlementService.actionOnCard(formData).subscribe(response => {
      this.getCurrentSessionCollectedCardAll();
      this.loadCardData.emit({
        page: this.pageNo,
        customer: '',
        action: true
      });
    });
  }
  hadleReverseActionOnCard(ordersCardsCollectionId) {
    let formData = new FormData();
    formData.append('ordersCardsCollectionId', ordersCardsCollectionId);
    this._registerSettlementService.reverseActionOnCard(formData).subscribe(response => {
      this.getCurrentSessionCollectedCardAll();
      this.loadCardData.emit({
        page: this.pageNo,
        customer: ''
      });
    });
  }
  handleSubmit() {
    if (this.cardForm.valid) {
      let formData = new FormData();
      const values = this.cardForm.value;
      formData.append('OrdersCardsCollectionId', values?.OrdersCardsCollectionId);
      formData.append('LastTerminalId', values?.LastTerminalId);
      formData.append('CardDrawerName', values?.CardDrawerName);
      formData.append('MachineReceiptNumber', values?.MachineReceiptNumber);
      formData.append('CardLast4Digits', values?.CardLast4Digits);
      this._registerSettlementService.editCollectionCard(formData).subscribe(response => {
        this.editCollectionResponse = response;
        if (this.editCollectionResponse.isSuccess) {
          this._modalService.dismissAll();
          this.successModal('success', 'Data saved successfully!');
          this.loadCardData.emit({
            page: this.pageNo,
            customer: '',
            action: true
          });
          //this._modalService.open(this.successModal, { centered: true, })
        }
      });
    } else {
      this.cardForm.markAllAsTouched();
    }
  }
  successModal(type, message) {
    const modelRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent, {
      size: 'md'
    });
    modelRef.componentInstance.type = type;
    if (type == 'success') {
      modelRef.componentInstance.message = message;
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  getBanks() {
    this._closeRegisterService.getLookupsById(11).subscribe(response => {
      this.bankList = response.data.map(x => ({
        id: x.id,
        name: x.name[0].lookupName
      }));
    });
  }
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByCardType() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByLastFour() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByInvoice() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByTerminal() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByAmount() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  sortByStatus() {
    if (this.sort == 15) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 14 ? 15 : 14;
    }
    this.loadCardData.emit({
      page: this.pageNo,
      customer: this.searchText,
      sort: this.sort
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.loadCardData.emit({
      page,
      customer: '',
      sort: 1
    });
    window.scroll(0, 0);
  }
  removeSearch() {
    this.searchText = '';
    this.loadCardData.emit({
      page: 1,
      customer: '',
      sort: 1
    });
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 3) {
      this.searchText = text;
      this.loadCardData.emit({
        page: 1,
        customer: text
      });
    } else if (text.length == 0) {
      this.searchText = '';
      this.loadCardData.emit({
        page: 1,
        customer: ''
      });
    }
  }
}
SessionCardPaymentsComponent.ɵfac = function SessionCardPaymentsComponent_Factory(t) {
  return new (t || SessionCardPaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_3__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_4__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_5__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute));
};
SessionCardPaymentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: SessionCardPaymentsComponent,
  selectors: [["app-session-card-payments"]],
  inputs: {
    response: "response",
    isSettle: "isSettle"
  },
  outputs: {
    loadCardData: "loadCardData"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
  decls: 28,
  vars: 7,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "col-md-6", "d-flex", "justify-content-end", "align-items-center", "gap-2"], [1, "btns-group", "m-0"], ["type", "button", 1, "font-14", "btn", "btn-save", "py-2", "px-3", 3, "disabled", "click"], [1, "top-details", "justify-content-end"], [1, "m-0"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], ["content", ""], ["sessionCardDetails", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], ["scope", "col", 4, "ngIf"], [3, "highlight-tr", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["settleData", ""], [1, "status-tag", 3, "ngStyle"], [1, "fa-regular", "fa-eye", "cursor-pointer", 3, "click"], ["elseBlock", ""], [1, "btn", "btn-undo", 3, "click"], ["src", "assets/images/undo.png", "alt", ""], ["class", "btn btn-right", 3, "disabled", 4, "ngIf"], ["class", "btn btn-xmark", 3, "disabled", 4, "ngIf"], ["class", "btn btn-edit", 3, "disabled", 4, "ngIf"], [1, "btn", "btn-right", 3, "disabled"], [1, "fa-regular", "fa-circle-check"], [1, "btn", "btn-xmark", 3, "disabled"], [1, "fa-regular", "fa-circle-xmark"], [1, "btn", "btn-edit", 3, "disabled"], [1, "fa-solid", "fa-pen"], [1, "btn", "btn-right", 3, "click"], [1, "btn", "btn-xmark", 3, "click"], [1, "btn", "btn-edit", 3, "click"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [1, "modal-body"], [1, "modal-head"], [1, "fw-700", "font-18"], [1, "fw-600", "font-16"], [1, "px-2", "gray-500", "text-capitalize"], [3, "formGroup", "submit"], [1, "form-group"], ["name", "name", "type", "text", "formControlName", "LastCollectedAmount", "readonly", "", 1, "form-control"], [1, "col-md-3"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["name", "name", "type", "text", "formControlName", "MachineReceiptNumber", "numbersOnly", "", 1, "form-control"], ["placeholder", "--Terminal---", "bindLabel", "name", "bindValue", "id", "required", "", "formControlName", "LastTerminalId", 3, "items"], ["type", "date", "formControlName", "CardDate", "name", "CardDate", "required", "", "readonly", "", 1, "form-control"], ["name", "name", "type", "text", "formControlName", "CardLast4Digits", "minlength", "4", "maxlength", "4", "numbersOnly", "", "required", "", 1, "form-control"], ["name", "name", "type", "text", "formControlName", "CardDrawerName", "OnlyCharacter", "", "required", "", "readonly", "", 1, "form-control"], [1, "btns-group", "my-2"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "pb-2", "fw-600"], [1, "light-gray"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-4"], [1, "pb-2", "fw-600", "light-gray"], [1, "col-sm-2"], [1, "col-sm-3"], [1, "modal-footer", "p-4"], [1, "btns-group"], ["type", "submit", 1, "btn", "btn-save", 3, "click"]],
  template: function SessionCardPaymentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function SessionCardPaymentsComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function SessionCardPaymentsComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionCardPaymentsComponent_Template_button_click_10_listener() {
        return ctx.confirmGrouping();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Accept All");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 11)(13, "p", 12)(14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, SessionCardPaymentsComponent_div_19_Template, 46, 36, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, SessionCardPaymentsComponent_ng_template_21_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, SessionCardPaymentsComponent_ng_container_23_Template, 12, 9, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, SessionCardPaymentsComponent_ng_template_24_Template, 61, 12, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, SessionCardPaymentsComponent_ng_template_26_Template, 52, 14, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.groupActionFlag);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No. Of Transactions ", ctx.totalRecordCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.sessionCards)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.totalRecordCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponent, _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_9__.NumberDirective, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_10__.CharacterDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  font-size: 18px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.highlight-tr[_ngcontent-%COMP%] {\n  background-color: #ffd2d2;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL3JlZ2lzdGVyLXNldHRsZW1lbnRzL2NvbXBvbmVudHMvc2Vzc2lvbi1jYXJkLXBheW1lbnRzL3Nlc3Npb24tY2FyZC1wYXltZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0Y7QUFERTtFQUNFLFdBQUE7QUFHSjs7QUFDQTtFQUNFLHNDQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUFHSjtBQURJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdOO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRU47QUFBTTtFQUNFLGNBQUE7QUFFUjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtJO0VBQ0UsbUJBQUE7QUFITjtBQUtNO0VBQ0UsWUFBQTtBQUhSO0FBTU07RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUpSO0FBT007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBTFI7QUFVRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFSSiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5jYXJkLXRhYmxlIHRoZWFkIHRoIC5idG57XG4gICAgcGFkZGluZzowO1xufVxuLmJ0bi1yaWdodCB7XG4gIGNvbG9yOiAjMjlhMDczO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5idG4teG1hcmsge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLWVkaXQge1xuICBjb2xvcjogIzRlOWFmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYnRuLXVuZG8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiAwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxufVxuXG4uY2FyZC10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLmRpc2FibGVkLCAuYnRuOmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAuYnRuIHtcbiAgY29sb3I6ICNhOWE5YTkgIWltcG9ydGFudDtcbn1cbi5oaWdobGlnaHQtdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkMmQyO1xufVxuLm1vZGFsLWJvZHkge1xuICAubW9kYWwtaGVhZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzFiMjEyZDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvcm0ge1xuICAgIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgfVxuXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsZS1pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmViOTNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 28054:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/components/session-cheques/session-cheques.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionChequesComponent": () => (/* binding */ SessionChequesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _cashier_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../cashier/collect/payment-modal/view-file/view-file.component */ 32298);
/* harmony import */ var _bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../cashier/close-register/services/close-register.service */ 15070);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/directive/drag-and-drop.directive */ 96603);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/view-file/view-file.component */ 67761);




















const _c0 = ["fileInput"];
function SessionChequesComponent_div_16_th_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_th_36_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r17.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 25)(4, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionCheques_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r13.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r13.sort == 13);
  }
}
function SessionChequesComponent_div_16_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 23)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionCheques_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
  }
}
const _c1 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1
  };
};
function SessionChequesComponent_div_16_tr_39_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "td")(20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "td")(23, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_tr_39_ng_container_1_Template_i_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](34);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r26.handleChequeDetails(item_r21, _r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r21 == null ? null : item_r21.chequeCustomer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r21 == null ? null : item_r21.statusObj == null ? null : item_r21.statusObj.translations[0] == null ? null : item_r21.statusObj.translations[0].lookupName) == "Settled" && (item_r21 == null ? null : item_r21.settleActionType) == "edit" && (item_r21 == null ? null : item_r21.settleChequeNumber) || (item_r21 == null ? null : item_r21.chequeNo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 9, item_r21 == null ? null : item_r21.chequeCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r21 == null ? null : item_r21.currency) && (item_r21 == null ? null : item_r21.currency[0] == null ? null : item_r21.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](12, 12, item_r21 == null ? null : item_r21.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r21 == null ? null : item_r21.statusObj == null ? null : item_r21.statusObj.translations[0] == null ? null : item_r21.statusObj.translations[0].lookupName) == "Settled" && (item_r21 == null ? null : item_r21.settleActionType) == "edit" && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](15, 15, item_r21 == null ? null : item_r21.settleChequeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](16, 18, item_r21.chequeDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r21 == null ? null : item_r21.statusObj == null ? null : item_r21.statusObj.translations[0] == null ? null : item_r21.statusObj.translations[0].lookupName) == "Settled" && (item_r21 == null ? null : item_r21.settleActionType) == "edit" && (item_r21 == null ? null : item_r21.settleBank[0] == null ? null : item_r21.settleBank[0].lookupName) || (item_r21.bank[0] == null ? null : item_r21.bank[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](21, _c1, item_r21 == null ? null : item_r21.statusObj == null ? null : item_r21.statusObj.lookupBGColor, item_r21 == null ? null : item_r21.statusObj == null ? null : item_r21.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r21 == null ? null : item_r21.statusObj == null ? null : item_r21.statusObj.translations[0] == null ? null : item_r21.statusObj.translations[0].lookupName, " ");
  }
}
function SessionChequesComponent_div_16_tr_39_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r21 == null ? null : item_r21.chequeCustomer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r21 == null ? null : item_r21.settleChequeNumber) || (item_r21 == null ? null : item_r21.chequeNo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](6, 7, item_r21 == null ? null : item_r21.chequeCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r21 == null ? null : item_r21.currency) && (item_r21 == null ? null : item_r21.currency[0] == null ? null : item_r21.currency[0].lookupName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](11, 10, item_r21 == null ? null : item_r21.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](14, 13, item_r21 == null ? null : item_r21.settleChequeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](15, 16, item_r21.chequeDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r21 == null ? null : item_r21.settleBank[0] == null ? null : item_r21.settleBank[0].lookupName) || (item_r21.bank[0] == null ? null : item_r21.bank[0].lookupName), "");
  }
}
function SessionChequesComponent_div_16_tr_39_td_4_ng_container_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", item_r21.settleActionType == "right");
  }
}
function SessionChequesComponent_div_16_tr_39_td_4_ng_container_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", item_r21.settleActionType == "wrong");
  }
}
function SessionChequesComponent_div_16_tr_39_td_4_ng_container_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", item_r21.settleActionType == "edit");
  }
}
function SessionChequesComponent_div_16_tr_39_td_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_tr_39_td_4_ng_container_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r40.hadleReverseActionOnCheque(item_r21 == null ? null : item_r21.chequeCollectionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Undo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, SessionChequesComponent_div_16_tr_39_td_4_ng_container_1_button_4_Template, 2, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, SessionChequesComponent_div_16_tr_39_td_4_ng_container_1_button_5_Template, 2, 1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, SessionChequesComponent_div_16_tr_39_td_4_ng_container_1_button_6_Template, 2, 1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r21.settleActionType == "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r21.settleActionType == "wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r21.settleActionType == "edit");
  }
}
function SessionChequesComponent_div_16_tr_39_td_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_tr_39_td_4_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r44.handleActionClick("right", item_r21 == null ? null : item_r21.chequeCollectionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_tr_39_td_4_ng_template_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r47.handleActionClick("wrong", item_r21 == null ? null : item_r21.chequeCollectionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_tr_39_td_4_ng_template_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](32);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r49.handleEditAction(_r8, item_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_div_16_tr_39_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionChequesComponent_div_16_tr_39_td_4_ng_container_1_Template, 7, 3, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, SessionChequesComponent_div_16_tr_39_td_4_ng_template_2_Template, 6, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r21.settleActionTaken)("ngIfElse", _r32);
  }
}
function SessionChequesComponent_div_16_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionChequesComponent_div_16_tr_39_ng_container_1_Template, 24, 24, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, SessionChequesComponent_div_16_tr_39_ng_template_2_Template, 18, 19, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, SessionChequesComponent_div_16_tr_39_td_4_Template, 4, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("highlight-tr", item_r21 == null ? null : item_r21.wrongActionInClosing);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r15.isSettle)("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r15.isSettle && ctx_r15.canManageAndView);
  }
}
function SessionChequesComponent_div_16_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 9)(1, "div", 20)(2, "table", 21)(3, "thead")(4, "tr", 22)(5, "th", 23)(6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.sortByCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 25)(9, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th", 23)(11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r54.sortByChequeNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "i", 25)(14, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th", 23)(16, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r55.sortByAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, " Amount JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "i", 25)(19, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "th", 23)(21, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "th", 23)(24, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "th", 23)(27, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r56.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "i", 25)(30, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "th", 23)(32, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_16_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r53);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r57.sortByBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "i", 25)(35, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, SessionChequesComponent_div_16_th_36_Template, 5, 5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, SessionChequesComponent_div_16_th_37_Template, 3, 1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, SessionChequesComponent_div_16_tr_39_Template, 5, 5, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, SessionChequesComponent_div_16_div_40_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sessionCheques_r12 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r0.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.isSettle);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.canManageAndView);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", sessionCheques_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (sessionCheques_r12 == null ? null : sessionCheques_r12.length) == 0);
  }
}
function SessionChequesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function SessionChequesComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r58.pageNo = $event);
    })("pageChange", function SessionChequesComponent_ng_container_20_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r60.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r3.pageNo * 6 - 5, " - ", (ctx_r3.sessionCheques == null ? null : ctx_r3.sessionCheques.length) == 6 ? ctx_r3.pageNo * 6 : ctx_r3.totalRecordCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collectionSize", ctx_r3.totalRecordCount)("page", ctx_r3.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionChequesComponent_div_26_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "td")(19, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_div_26_tr_22_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r65);
      const item_r63 = restoredCtx.$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r64.viewDepositedAttachment(item_r63 == null ? null : item_r63.depositeFile));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "View Deposit Attachement");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r63 == null ? null : item_r63.chequeCustomer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r63 == null ? null : item_r63.chequeNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 7, item_r63 == null ? null : item_r63.chequeCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r63 == null ? null : item_r63.currency[0] == null ? null : item_r63.currency[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](12, 10, item_r63 == null ? null : item_r63.collectedAmount, "2.3-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](15, 13, item_r63 == null ? null : item_r63.collectionAt, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r63 == null ? null : item_r63.bank[0] == null ? null : item_r63.bank[0].lookupName, "");
  }
}
function SessionChequesComponent_div_26_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 9)(1, "div", 20)(2, "table", 21)(3, "thead")(4, "tr", 22)(5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, SessionChequesComponent_div_26_tr_22_Template, 21, 16, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, SessionChequesComponent_div_26_div_23_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.depositedCheques);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r4.depositedCheques == null ? null : ctx_r4.depositedCheques.length) == 0);
  }
}
function SessionChequesComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 1)(11, "ngb-pagination", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function SessionChequesComponent_ng_container_30_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r66.dcPageNo = $event);
    })("pageChange", function SessionChequesComponent_ng_container_30_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r68.dcPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r7.dcPageNo * 6 - 5, " - ", (ctx_r7.depositedCheques == null ? null : ctx_r7.depositedCheques.length) == 6 ? ctx_r7.dcPageNo * 6 : ctx_r7.dcTotalRecordCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r7.dcTotalRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collectionSize", ctx_r7.dcTotalRecordCount)("page", ctx_r7.dcPageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SessionChequesComponent_ng_template_31_ng_container_27_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_ng_template_31_ng_container_27_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionChequesComponent_ng_template_31_ng_container_27_ng_container_1_span_1_Template, 2, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r77.f["chequeNo"] == null ? null : ctx_r77.f["chequeNo"].errors == null ? null : ctx_r77.f["chequeNo"].errors["required"]);
  }
}
function SessionChequesComponent_ng_template_31_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionChequesComponent_ng_template_31_ng_container_27_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r70.f["chequeNo"] == null ? null : ctx_r70.f["chequeNo"].invalid) && (ctx_r70.f["chequeNo"] == null ? null : ctx_r70.f["chequeNo"].touched) || (ctx_r70.f["chequeNo"] == null ? null : ctx_r70.f["chequeNo"].dirty));
  }
}
function SessionChequesComponent_ng_template_31_ng_container_33_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_ng_template_31_ng_container_33_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionChequesComponent_ng_template_31_ng_container_33_ng_container_1_span_1_Template, 2, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r79.f["bankId"] == null ? null : ctx_r79.f["bankId"].errors == null ? null : ctx_r79.f["bankId"].errors["required"]);
  }
}
function SessionChequesComponent_ng_template_31_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionChequesComponent_ng_template_31_ng_container_33_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r71.f["bankId"] == null ? null : ctx_r71.f["bankId"].invalid) && (ctx_r71.f["bankId"] == null ? null : ctx_r71.f["bankId"].touched) || (ctx_r71.f["bankId"] == null ? null : ctx_r71.f["bankId"].dirty));
  }
}
function SessionChequesComponent_ng_template_31_ng_container_38_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function SessionChequesComponent_ng_template_31_ng_container_38_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionChequesComponent_ng_template_31_ng_container_38_ng_container_1_span_1_Template, 2, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r81.f["chequeDate"] == null ? null : ctx_r81.f["chequeDate"].errors == null ? null : ctx_r81.f["chequeDate"].errors["required"]);
  }
}
function SessionChequesComponent_ng_template_31_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SessionChequesComponent_ng_template_31_ng_container_38_ng_container_1_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r72.f["chequeDate"] == null ? null : ctx_r72.f["chequeDate"].invalid) && (ctx_r72.f["chequeDate"] == null ? null : ctx_r72.f["chequeDate"].touched) || (ctx_r72.f["chequeDate"] == null ? null : ctx_r72.f["chequeDate"].dirty));
  }
}
function SessionChequesComponent_ng_template_31_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 81)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Previous Cheque Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "view-file", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("file", ctx_r73.chequeDetails == null ? null : ctx_r73.chequeDetails.chequeImage);
  }
}
function SessionChequesComponent_ng_template_31_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 83)(2, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 85)(5, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_ng_template_31_ng_container_55_Template_img_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r83.fileAction("view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_ng_template_31_ng_container_55_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r85.fileAction("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r75.fileName);
  }
}
function SessionChequesComponent_ng_template_31_small_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "small", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r76.invalidFileType);
  }
}
function SessionChequesComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 53)(1, "form", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("submit", function SessionChequesComponent_ng_template_31_Template_form_submit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r86.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 55)(3, "h3", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Edit Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 59)(10, "div", 60)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 62)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 64)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 64)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Cheque No *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function SessionChequesComponent_ng_template_31_Template_input_keypress_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r88._commonService.numberOnly($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, SessionChequesComponent_ng_template_31_ng_container_27_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 59)(29, "div", 66)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](32, "ng-select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, SessionChequesComponent_ng_template_31_ng_container_33_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 66)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Date*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, SessionChequesComponent_ng_template_31_ng_container_38_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 59)(40, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, SessionChequesComponent_ng_template_31_ng_container_41_Template, 5, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div", 66)(43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "Cheque Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 69)(46, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("files", function SessionChequesComponent_ng_template_31_Template_div_files_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r89.filesDropped($event));
    })("enter", function SessionChequesComponent_ng_template_31_Template_div_enter_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r90.enter = !ctx_r90.enter);
    })("leave", function SessionChequesComponent_ng_template_31_Template_div_leave_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r91.enter = !ctx_r91.enter);
    })("click", function SessionChequesComponent_ng_template_31_Template_div_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87);
      const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](54);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r74.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "Select OR Drag & drop files");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "Supported formates: JPEG, PNG, PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "input", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function SessionChequesComponent_ng_template_31_Template_input_change_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r93.onSelectFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, SessionChequesComponent_ng_template_31_ng_container_55_Template, 7, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, SessionChequesComponent_ng_template_31_small_56_Template, 2, 1, "small", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "div", 59)(58, "div", 76)(59, "div", 77)(60, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_ng_template_31_Template_button_click_60_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r87);
      const modal_r69 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r69.close("yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r9.chequeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.chequeCustomer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.currency[0] == null ? null : ctx_r9.chequeDetails.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](22, 11, ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.collectedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r9.f["chequeNo"] == null ? null : ctx_r9.f["chequeNo"]["errors"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r9.bankList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r9.f["bankId"] == null ? null : ctx_r9.f["bankId"]["errors"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r9.f["chequeDate"] == null ? null : ctx_r9.f["chequeDate"]["errors"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r9.chequeDetails == null ? null : ctx_r9.chequeDetails.chequeImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r9.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r9.invalidFileType);
  }
}
function SessionChequesComponent_ng_template_33_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cheque Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "view-file", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("file", ctx_r96.chequeDetails == null ? null : ctx_r96.chequeDetails.chequeImage);
  }
}
function SessionChequesComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 88)(1, "div", 89)(2, "h4", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Cheque Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h6", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Customer Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 93)(9, "div", 59)(10, "div", 60)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Amount JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "h6", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 62)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "h6", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 64)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "h6", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 64)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Cheque No");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "h6", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 59)(33, "div", 60)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "h6", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 60)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "h6", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](43, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](44, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 60)(46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "Drawer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "h6", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](50, SessionChequesComponent_ng_template_33_div_50_Template, 4, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "div", 96)(52, "div", 97)(53, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_ng_template_33_Template_button_click_53_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r98);
      const modal_r95 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](modal_r95.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.chequeCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](15, 9, ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.chequeCollectionJod, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.currency[0] == null ? null : ctx_r11.chequeDetails.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](26, 12, ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.collectedAmount, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.settleChequeNumber) || (ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.chequeNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.settleBank[0] == null ? null : ctx_r11.chequeDetails.settleBank[0].lookupName) || (ctx_r11.chequeDetails.bank[0] == null ? null : ctx_r11.chequeDetails.bank[0].lookupName));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](43, 15, ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.settleChequeDate, "mediumDate") || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](44, 18, ctx_r11.chequeDetails.chequeDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.settleDrawerName) || (ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.chequeDrawerName));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r11.chequeDetails == null ? null : ctx_r11.chequeDetails.chequeImage);
  }
}
class SessionChequesComponent {
  constructor(fb, _registerSettlementService, _activeRoute, _modalService, _closeRegisterService, _commonService) {
    this.fb = fb;
    this._registerSettlementService = _registerSettlementService;
    this._activeRoute = _activeRoute;
    this._modalService = _modalService;
    this._closeRegisterService = _closeRegisterService;
    this._commonService = _commonService;
    this.pageNo = 1;
    this.dcPageNo = 1;
    this.sort = 1;
    this.searchText = '';
    this.depositedCheques = [];
    this.dcTotalRecordCount = 0;
    this.sessionId = 0;
    this.loadData = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.isSettle = true;
    this.fileName = '';
    this.invalidFileType = '';
  }
  ngOnChanges(changes) {
    this.response = changes['response'].currentValue;
    this.sessionCheques = this.response?.data;
    this.totalRecordCount = this.response?.totalRecordCount;
    this.pagin = Math.ceil(this.totalRecordCount / 6);
    this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
  }
  ngOnInit() {
    this._activeRoute.params.subscribe(param => {
      this.sessionId = param['sessionId'];
      this.getDepositedCheques();
    });
    this.initChequeForm();
    this.canManageAndView = JSON.parse(localStorage.getItem('cmav'));
  }
  initChequeForm() {
    this.chequeForm = this.fb.group({
      chequeCollectionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      chequeCollectionJod: [{
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      chequeDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      bankId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      chequeDrawerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      chequeNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
    });
  }
  get f() {
    return this.chequeForm.controls;
  }
  getDepositedCheques() {
    let params = `?sessionId=${this.sessionId}&pageNo=${this.dcPageNo - 1}&pageSize=6`;
    this._registerSettlementService.getSessionDepositedCheques(params).subscribe(response => {
      console.log(response);
      if (response?.data?.length) {
        this.depositedCheques = response?.data;
        this.dcTotalRecordCount = response?.totalRecordCount;
      }
    });
  }
  viewDepositedAttachment(file) {
    const modalRef = this._modalService.open(_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_3__.ViewUploadedFileComponent);
    modalRef.componentInstance.file = file;
  }
  dcPageChange(page) {
    this.dcPageNo = page;
    this.getDepositedCheques();
  }
  handleChequeDetails(item, content) {
    this.chequeDetails = {};
    this.chequeDetails = item;
    console.log(this.chequeDetails);
    this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  handleEditAction(content, item) {
    console.log(item);
    this.getBanks();
    this.chequeDetails = {};
    this.chequeDetails = item;
    let obj = {
      chequeCollectionId: item.chequeCollectionId,
      chequeCollectionJod: item?.chequeCollectionJod,
      chequeDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_13__.formatDate)(item?.chequeDate, "yyyy-MM-dd", "en"),
      bankId: item?.bank[0]?.lookupId,
      chequeNo: item?.chequeNo,
      chequeDrawerName: item?.chequeCustomer
    };
    this.chequeForm.patchValue(obj);
    //this.chequeForm.controls['chequeDrawerName'].setValue('');
    const modalRef = this._modalService.open(content, {
      centered: true,
      size: 'lg'
    });
    modalRef.result.then(x => {
      if (x === 'yes') {
        this.uploadedFile = null;
        this.fileName = '';
      }
    }, reject => {});
  }
  handleCheckBoxChange(event) {
    let value = event.target.checked;
    if (value) {
      this.chequeForm.controls['chequeDrawerName'].setValue(this.chequeDetails?.chequeCustomer);
    } else {
      this.chequeForm.controls['chequeDrawerName'].setValue('');
      this.chequeForm.controls['chequeDrawerName'].markAsTouched();
    }
  }
  handleSubmit() {
    if (this.chequeForm.valid) {
      let formData = new FormData();
      formData.append('chequeCollectionId', this.f['chequeCollectionId'].value);
      formData.append('chequeDate', this.f['chequeDate'].value);
      formData.append('bankId', this.f['bankId'].value);
      formData.append('chequeDrawerName', this.f['chequeDrawerName'].value);
      formData.append('chequeNo', this.f['chequeNo'].value);
      this._registerSettlementService.editCollectionCheuqe(formData).subscribe(response => {
        this.editCollectionResponse = response;
        if (this.uploadedFile?.file) {
          this.addSettleCheckImage();
        }
        this._modalService.dismissAll();
        this.successModal('success', 'Data saved successfully!');
        this.loadData.emit({
          page: this.pageNo,
          chequeNumber: '',
          action: true
        });
        //this._modalService.open(this.successModal, { centered: true, })
      });
    } else {
      this.chequeForm.markAllAsTouched();
    }
  }
  addSettleCheckImage() {
    let formData = new FormData();
    formData.append('chequeCollectionId', this.f['chequeCollectionId'].value);
    formData.append('Image', this.uploadedFile?.file);
    this._registerSettlementService.addSettledChequesImages(formData).subscribe(response => {
      if (response.isSuccess) {
        this.uploadedFile = null;
        this.fileName = '';
      }
    });
  }
  successModal(type, message) {
    const modelRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent, {
      size: 'md'
    });
    modelRef.componentInstance.type = type;
    if (type == 'success') {
      modelRef.componentInstance.message = message;
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  handleActionClick(action, chequeCollectionId) {
    let formData = new FormData();
    formData.append('action', action);
    formData.append('chequeCollectionId', chequeCollectionId);
    this._registerSettlementService.actionOnCheque(formData).subscribe(response => {
      this.loadData.emit({
        page: this.pageNo,
        chequeNumber: '',
        action: true
      });
    });
  }
  hadleReverseActionOnCheque(chequeCollectionId) {
    let formData = new FormData();
    formData.append('chequeCollectionId', chequeCollectionId);
    this._registerSettlementService.reverseActionOnCheque(formData).subscribe(response => {
      this.loadData.emit({
        page: this.pageNo,
        chequeNumber: ''
      });
    });
  }
  getBanks() {
    this._closeRegisterService.getLookupsById(11).subscribe(response => {
      this.bankList = response.data.map(x => ({
        id: x.id,
        name: x.name[0].lookupName
      }));
    });
  }
  sortByCustomer() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByChequeNo() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByAmount() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByBank() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.loadData.emit({
      page: this.pageNo,
      chequeNumber: this.searchText,
      sort: this.sort
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.loadData.emit({
      page,
      chequeNumber: '',
      sort: 1
    });
    window.scroll(0, 0);
  }
  removeSearch() {
    this.searchText = '';
    this.loadData.emit({
      page: 1,
      chequeNumber: '',
      sort: 1
    });
  }
  searchData(event) {
    const text = event.target.value;
    if (text.length >= 3) {
      this.searchText = text;
      this.loadData.emit({
        page: 1,
        chequeNumber: text,
        sort: 1
      });
    } else if (text.length == 0) {
      this.searchText = '';
      this.loadData.emit({
        page: 1,
        chequeNumber: '',
        sort: 1
      });
    }
  }
  fileAction(action) {
    if (action == 'view') {
      const modelRef = this._modalService.open(_cashier_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_2__.ViewFileComponent, {
        size: 'md'
      });
      modelRef.componentInstance.imageUploadedView = this.uploadedFile;
    } else {
      //this.inputFile.nativeElement.value = null;
      document.getElementById('chequeFile').value = null;
      this.fileName = '';
      this.uploadedFile = {};
    }
  }
  filesDropped(data) {
    this.enter = false;
    let isInvalid = this._commonService.checkInvalidImageFormat(data, true).invalidExtentions;
    this.invalidFileType = this._commonService.checkInvalidImageFormat(data, true).invalidError;
    if (isInvalid) {
      this.inputFile.nativeElement.value = null;
      return;
    }
    let files = data.map(x => {
      return x.file;
    });
    if (!isInvalid) {
      files.forEach(file => {
        this.fileName = file.name;
        this._commonService.fileToBase64(file).then(response => {
          this.uploadedFile = response;
        });
      });
    }
  }
  onSelectFile(event) {
    let files = [...event.target.files];
    let isInvalid = this._commonService.checkInvalidImageFormat(files, true).invalidExtentions;
    this.invalidFileType = this._commonService.checkInvalidImageFormat(files, true).invalidError;
    if (isInvalid) {
      this.inputFile.nativeElement.value = null;
      return;
    }
    if (files.length > 0) {
      if (!isInvalid) {
        files.forEach(file => {
          this.fileName = file.name;
          this._commonService.fileToBase64(file).then(response => {
            this.uploadedFile = response;
          });
        });
      }
    }
  }
}
SessionChequesComponent.ɵfac = function SessionChequesComponent_Factory(t) {
  return new (t || SessionChequesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_4__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_5__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService));
};
SessionChequesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: SessionChequesComponent,
  selectors: [["app-session-cheques"]],
  viewQuery: function SessionChequesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
    }
  },
  inputs: {
    response: "response",
    isSettle: "isSettle"
  },
  outputs: {
    loadData: "loadData"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
  decls: 35,
  vars: 9,
  consts: [[1, "row"], [1, "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "top-details", "justify-content-end", "pt-3"], [1, "col-md-12"], [1, "card-table", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loading", ""], [4, "ngIf"], [1, "col-md-12", "mt-4"], [1, "fw-600", "mb-3"], [1, "card-table", "mt-0"], ["loading1", ""], ["content", ""], ["sessionChequedetails", ""], [1, "table-responsive"], [1, "table"], [1, "py-2"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], ["scope", "col", 4, "ngIf"], [3, "highlight-tr", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["settleData", ""], [1, "status-tag", 3, "ngStyle"], [1, "fa-regular", "fa-eye", "cursor-pointer", 3, "click"], ["elseBlock", ""], [1, "btn", "btn-undo", 3, "click"], ["src", "assets/images/undo.png", "alt", ""], ["class", "btn btn-right", 3, "disabled", 4, "ngIf"], ["class", "btn btn-xmark", 3, "disabled", 4, "ngIf"], ["class", "btn btn-edit", 3, "disabled", 4, "ngIf"], [1, "btn", "btn-right", 3, "disabled"], [1, "fa-regular", "fa-circle-check"], [1, "btn", "btn-xmark", 3, "disabled"], [1, "fa-regular", "fa-circle-xmark"], [1, "btn", "btn-edit", 3, "disabled"], [1, "fa-solid", "fa-pen"], [1, "btn", "btn-right", 3, "click"], [1, "btn", "btn-xmark", 3, "click"], [1, "btn", "btn-edit", 3, "click"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [4, "ngFor", "ngForOf"], [1, "redBtn", 3, "click"], [1, "modal-body"], [3, "formGroup", "submit"], [1, "modal-head"], [1, "fw-700", "font-18"], [1, "fw-600", "font-16"], [1, "px-2", "gray-500", "text-capitalize"], [1, "row", "mt-3"], [1, "col-sm-4"], ["formControlName", "chequeCollectionJod", "placeholder", "Amount to Pay", 1, "form-control"], [1, "col-sm-2"], ["disabled", "", 1, "form-control", 3, "value"], [1, "col-sm-3"], ["formControlName", "chequeNo", "placeholder", "Cheque no", 1, "form-control", 3, "keypress"], [1, "col-sm-6"], ["formControlName", "bankId", "placeholder", "Bank", "bindLabel", "name", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], ["type", "date", "formControlName", "chequeDate", "placeholder", "date", 1, "form-control"], [1, "form-group", "mb-3"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "id", "chequeFile", "accept", ".png,.jpg,.jpeg,.pdf", "hidden", "", 1, "form-control", 3, "change"], ["fileInput", ""], ["class", "text-danger", 4, "ngIf"], [1, "col-12"], [1, "btns-group", "mx-0", "my-2"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], [1, "text-danger"], [1, "mt-2"], [3, "file"], [1, "d-flex", "gap-3", "file-item", "align-items-center", "justify-content-between"], [1, "p-0"], [1, "d-flex", "gap-2"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"], [1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "pb-2", "fw-600"], [1, "light-gray"], [1, "modal-body", "p-0"], [1, "pb-2", "fw-600", "light-gray"], ["class", "col-sm-4", 4, "ngIf"], [1, "modal-footer", "p-4"], [1, "btns-group"], ["type", "submit", 1, "btn", "btn-save", 3, "click"]],
  template: function SessionChequesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_Template_button_click_3_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function SessionChequesComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function SessionChequesComponent_Template_input_keyup_5_listener($event) {
        return ctx.searchData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SessionChequesComponent_Template_button_click_6_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 1)(9, "div", 8)(10, "p")(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, SessionChequesComponent_div_16_Template, 41, 31, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, SessionChequesComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, SessionChequesComponent_ng_container_20_Template, 12, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 14)(22, "h6", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Deposited Cheques");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 16)(25, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, SessionChequesComponent_div_26_Template, 24, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, SessionChequesComponent_ng_template_28_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, SessionChequesComponent_ng_container_30_Template, 12, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, SessionChequesComponent_ng_template_31_Template, 64, 14, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, SessionChequesComponent_ng_template_33_Template, 55, 21, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.searchText.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" No. Of Transactions ", ctx.totalRecordCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.sessionCheques)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.totalRecordCount > 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.depositedCheques)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.dcTotalRecordCount > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponent, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_9__.DragAndDropDirective, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_10__.ViewFileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [".card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.card-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.btn-right[_ngcontent-%COMP%] {\n  color: #29a073;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-xmark[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 20px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  color: #4e9aff;\n  font-size: 18px;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  border: 0px;\n}\n\n.btn-undo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0px;\n  border: 0px;\n}\n.btn-undo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 5px 10px 15px !important;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled, fieldset[_ngcontent-%COMP%]:disabled   .btn[_ngcontent-%COMP%] {\n  color: #a9a9a9 !important;\n}\n\n.highlight-tr[_ngcontent-%COMP%] {\n  background-color: #ffd2d2;\n}\n\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ddd;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1b212d;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #929eae;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary);\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #dadada;\n  background: white;\n}\n.file-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: green;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL3JlZ2lzdGVyLXNldHRsZW1lbnRzL2NvbXBvbmVudHMvc2Vzc2lvbi1jaGVxdWVzL3Nlc3Npb24tY2hlcXVlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0Y7QUFERTtFQUNFLFdBQUE7QUFHSjs7QUFDQTtFQUNFLHNDQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUFHSjtBQURJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdOO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRU47QUFBTTtFQUNFLGNBQUE7QUFFUjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUlNO0VBQ0UsWUFBQTtBQUZSO0FBS007RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBTU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBSlI7QUFRRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFTQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU5GO0FBUUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVBKO0FBVUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFURjtBQVdFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVRKIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmNhcmQtdGFibGUgdGhlYWQgdGggLmJ0biB7XG4gIHBhZGRpbmc6IDA7XG59XG4uYnRuLXJpZ2h0IHtcbiAgY29sb3I6ICMyOWEwNzM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLmJ0bi14bWFyayB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5idG4tZWRpdCB7XG4gIGNvbG9yOiAjNGU5YWZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5idG4tdW5kbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDBweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG5cbi5jYXJkLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5idG4ge1xuICBjb2xvcjogI2E5YTlhOSAhaW1wb3J0YW50O1xufVxuLmhpZ2hsaWdodC10ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQyZDI7XG59XG4ubW9kYWwtYm9keSB7XG4gIC5tb2RhbC1oZWFkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuXG4gICAgaDMge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjMWIyMTJkO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjMWIyMTJkO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICM5MjllYWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9ybSB7XG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICB9XG4gICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgfVxuXG4gICAgICAuZXJyb3Ige1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBhY2NlbnQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICB9XG5cbiAgLmZpbGUtaXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlYjkzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cbi5jYXJkLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjOTM5YWE4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMGYwZjBmO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gIH1cbn1cblxuLmZpbGUtaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 14333:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/components/view-settle-attachments/view-settle-attachments.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSettleAttachmentsComponent": () => (/* binding */ ViewSettleAttachmentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ViewSettleAttachmentsComponent {}
ViewSettleAttachmentsComponent.ɵfac = function ViewSettleAttachmentsComponent_Factory(t) {
  return new (t || ViewSettleAttachmentsComponent)();
};
ViewSettleAttachmentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewSettleAttachmentsComponent,
  selectors: [["app-view-settle-attachments"]],
  decls: 2,
  vars: 0,
  template: function ViewSettleAttachmentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-settle-attachments works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 52611:
/*!*************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/reg-settlement/reg-settlement.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegSettlementComponent": () => (/* binding */ RegSettlementComponent)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/enum */ 75706);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/not-found/not-found.component */ 59442);
















const _c0 = ["success"];
function RegSettlementComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.resetRegisterNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RegSettlementComponent_i_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_i_16_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.resetDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RegSettlementComponent_div_24_tr_43_ul_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "li", 45)(2, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_tr_43_ul_21_ng_container_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.navigateTo("settle", item_r17 == null ? null : item_r17.registerSessionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Settle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function RegSettlementComponent_div_24_tr_43_ul_21_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "li", 45)(2, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_tr_43_ul_21_ng_container_11_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.markAsOnHold(item_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Mark as On-Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function RegSettlementComponent_div_24_tr_43_ul_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RegSettlementComponent_div_24_tr_43_ul_21_ng_container_1_Template, 4, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "li", 45)(3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_tr_43_ul_21_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](30);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.openModal(_r6, item_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Force Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "li", 45)(6, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_tr_43_ul_21_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.navigateTo("register", item_r17 == null ? null : item_r17.register == null ? null : item_r17.register.registerId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "View Register Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "li", 45)(9, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_tr_43_ul_21_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.navigateTo("session", item_r17 == null ? null : item_r17.registerSessionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "View Session Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, RegSettlementComponent_div_24_tr_43_ul_21_ng_container_11_Template, 4, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r17.status == ctx_r18.status.Closed || item_r17.status == ctx_r18.status.Unclosed || item_r17.status == ctx_r18.status.Partial || item_r17.status == ctx_r18.status.OnHold || item_r17.status == ctx_r18.status.PartiallySettled || item_r17.status == ctx_r18.status.RegisterFullDeposit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r17.status == ctx_r18.status.Closed || item_r17.status == ctx_r18.status.Unclosed || item_r17.status == ctx_r18.status.Partial);
  }
}
const _c1 = function (a0, a1) {
  return {
    "background-color": a0,
    color: a1
  };
};
function RegSettlementComponent_div_24_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td")(15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td")(18, "div", 40)(19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, RegSettlementComponent_div_24_tr_43_ul_21_Template, 12, 2, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r17 == null ? null : item_r17.branch == null ? null : item_r17.branch.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r17 == null ? null : item_r17.register.registerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r17 == null ? null : item_r17.register.registersName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r17 == null ? null : item_r17.registerSessionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](11, 8, item_r17 == null ? null : item_r17.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r17 == null ? null : item_r17.createdBy == null ? null : item_r17.createdBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](11, _c1, item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.lookupBGColor, item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r17 == null ? null : item_r17.statusObj == null ? null : item_r17.statusObj.translations[0] == null ? null : item_r17.statusObj.translations[0].lookupName, " ");
  }
}
function RegSettlementComponent_div_24_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RegSettlementComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "div", 29)(2, "div", 30)(3, "table", 31)(4, "thead")(5, "tr")(6, "th", 32)(7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r35.sortByBranch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Branch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "i", 34)(10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th", 32)(12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r37.sortByRegisterNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Register No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 34)(15, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th", 32)(17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r38.sortByRegisterName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Register Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "i", 34)(20, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "th", 32)(22, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Session Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th", 32)(25, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r39.sortByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Request Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "i", 34)(28, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "th", 32)(30, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r40.sortByRequested());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " Requested By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "i", 34)(33, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "th", 32)(35, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_div_24_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r41.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "i", 34)(38, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "th", 32)(40, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, RegSettlementComponent_div_24_tr_43_Template, 22, 14, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, RegSettlementComponent_div_24_div_44_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sessionList_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionList_r14 == null ? null : sessionList_r14.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionList_r14 == null ? null : sessionList_r14.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionList_r14 == null ? null : sessionList_r14.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionList_r14 == null ? null : sessionList_r14.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionList_r14 == null ? null : sessionList_r14.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionList_r14 == null ? null : sessionList_r14.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionList_r14 == null ? null : sessionList_r14.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.sort == 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", (sessionList_r14 == null ? null : sessionList_r14.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", sessionList_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (sessionList_r14 == null ? null : sessionList_r14.length) == 0);
  }
}
function RegSettlementComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function RegSettlementComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 48)(2, "div", 49)(3, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 49)(12, "ngb-pagination", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function RegSettlementComponent_ng_container_28_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r42.pageNo = $event);
    })("pageChange", function RegSettlementComponent_ng_container_28_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r44.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r5.pageNo * 6 - 5, " - ", (ctx_r5.sessionList == null ? null : ctx_r5.sessionList.length) == 6 ? ctx_r5.pageNo * 6 : ctx_r5.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r5.totalRecords)("page", ctx_r5.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function RegSettlementComponent_ng_template_29_p_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r46.errorMessage);
  }
}
function RegSettlementComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "h4", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Force Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 55)(5, "div", 56)(6, "div", 57)(7, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Branch Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 57)(12, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Register Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 57)(17, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Register No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 57)(22, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Session No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 57)(27, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "You are about to force close the following register");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 61)(34, "div", 62)(35, "div", 63)(36, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RegSettlementComponent_ng_template_29_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r47.radioValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Close Register for all day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 62)(40, "div", 63)(41, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RegSettlementComponent_ng_template_29_Template_input_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.radioValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Close Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 62)(45, "div", 63)(46, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RegSettlementComponent_ng_template_29_Template_input_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r50.radioValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Deactivate Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, RegSettlementComponent_ng_template_29_p_49_Template, 2, 1, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 71)(51, "div", 72)(52, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_ng_template_29_Template_button_click_52_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const modal_r45 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](modal_r45.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegSettlementComponent_ng_template_29_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r52.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.sessionDetails == null ? null : ctx_r7.sessionDetails.branch == null ? null : ctx_r7.sessionDetails.branch.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.sessionDetails == null ? null : ctx_r7.sessionDetails.register == null ? null : ctx_r7.sessionDetails.register.registersName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.sessionDetails == null ? null : ctx_r7.sessionDetails.register == null ? null : ctx_r7.sessionDetails.register.registerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.sessionDetails == null ? null : ctx_r7.sessionDetails.registerSessionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.sessionDetails == null ? null : ctx_r7.sessionDetails.createdBy == null ? null : ctx_r7.sessionDetails.createdBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "cr_" + (ctx_r7.sessionDetails == null ? null : ctx_r7.sessionDetails.register == null ? null : ctx_r7.sessionDetails.register.registerId))("ngModel", ctx_r7.radioValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "cs_" + (ctx_r7.sessionDetails == null ? null : ctx_r7.sessionDetails.registerSessionId))("ngModel", ctx_r7.radioValue)("disabled", ctx_r7.sessionDetails.status != ctx_r7.status.Opened && ctx_r7.sessionDetails.status != ctx_r7.status.Partial);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r7.registerDetails.status == 2002)("value", "dr_" + (ctx_r7.sessionDetails == null ? null : ctx_r7.sessionDetails.register == null ? null : ctx_r7.sessionDetails.register.registerId))("ngModel", ctx_r7.radioValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.errorMessage);
  }
}
function RegSettlementComponent_ng_template_31_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h5", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r53.message);
  }
}
function RegSettlementComponent_ng_template_31_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h5", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r55.response == null ? null : ctx_r55.response.errors[0].errorMessageEn);
  }
}
function RegSettlementComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RegSettlementComponent_ng_template_31_h5_1_Template, 3, 1, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, RegSettlementComponent_ng_template_31_ng_template_2_Template, 3, 1, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.response == null ? null : ctx_r9.response.isSuccess)("ngIfElse", _r54);
  }
}
const _c2 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
class RegSettlementComponent {
  constructor(_registerSettlementService, _activeRoute, _commonService, _headerService, fb, datepipe, modalService) {
    this._registerSettlementService = _registerSettlementService;
    this._activeRoute = _activeRoute;
    this._commonService = _commonService;
    this._headerService = _headerService;
    this.fb = fb;
    this.datepipe = datepipe;
    this.modalService = modalService;
    this.searchText = '';
    this.filterParams = undefined;
    this.sort = 1;
    this.totalRecords = 0;
    this.pageNo = 1;
    this.pageSize = 6;
    this.pages = [];
    this.sessionList = [];
    this.branchesList = [];
    this.employeesList = [];
    this.statusList = [];
    this.status = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.Status;
    this.message = '';
    this.errorMessage = '';
    this.statusQp = '';
  }
  initFilterForm() {
    this.sessionFilterForm = this.fb.group({
      register: [''],
      branch: [null],
      createdBy: [null],
      date: [''],
      status: [null]
    });
  }
  ngOnInit() {
    this._activeRoute.queryParams.subscribe(param => {
      if (param['status']) {
        this.statusQp = param['status'];
      }
    });
    this._headerService.setTitle(' Register Settlements');
    this.getAllSessions(this.filterParams);
    this.getBaranches();
    this.getEmployees();
    this.getStatusList(16);
    this.initFilterForm();
    this.sessionFilterForm.valueChanges.subscribe(value => {
      this.statusQp = '';
      this.pageNo = 1;
      let dateObj = {
        fromDate: '',
        toDate: ''
      };
      let formValues;
      if (value['date']) {
        dateObj['fromDate'] = this.datepipe.transform(value['date'][0], 'yyyy-MM-dd');
        dateObj['toDate'] = this.datepipe.transform(value['date'][1], 'yyyy-MM-dd');
        ;
      }
      formValues = {
        ...value,
        ...dateObj
      };
      delete formValues['date'];
      if (formValues.branch == null) {
        formValues = {
          ...formValues,
          branch: ''
        };
      }
      if (formValues.createdBy == null) {
        formValues = {
          ...formValues,
          createdBy: ''
        };
      }
      if (formValues.status == null) {
        formValues = {
          ...formValues,
          status: ''
        };
      }
      this.filterParams = '?' + new URLSearchParams(formValues).toString();
      this.getAllSessions(this.filterParams);
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
    this._registerSettlementService.getRegisterDetails(item?.register?.registerId).subscribe(response => {
      this.registerDetails = {};
      this.registerDetails = response.data;
      this.modalService.open(content, {
        centered: true,
        size: 'lg'
      });
    });
  }
  markAsOnHold(item) {
    console.log(item);
    const payload = new FormData();
    payload.append('registerId', item?.register?.registerId);
    payload.append('registerSessionId', item?.registerSessionId);
    this._registerSettlementService.onholdRegisterSession(payload).subscribe({
      next: reposnse => {
        if (reposnse.isSuccess) {
          this.getAllSessions();
          this.responseModal('success', 'Status updated successfully!');
        }
      },
      error: err => {
        console.log(err?.error?.errors);
        this.responseModal('error', err?.error?.errors[0].ErrorMessageEn);
      }
    });
  }
  responseModal(type, message) {
    const ref = this.modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_2__.ModalMessageComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.dismissOnlyActive = true;
    if (type == 'success') ref.componentInstance.message = message;else ref.componentInstance.message = message;
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
        this.message = 'Close Register for all day request successfully sent';
        this.modalService.dismissAll();
        this.getAllSessions();
        const successRef = this.modalService.open(this.success);
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
        this.modalService.dismissAll();
        this.getAllSessions();
        const successRef = this.modalService.open(this.success);
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
        this.message = 'Register successfully deactivated.';
        this.modalService.dismissAll();
        const successRef = this.modalService.open(this.success);
        this.getAllSessions();
        setTimeout(() => {
          successRef.close();
        }, 3000);
      }, error => {
        this.errorMessage = error['error']?.Errors[0]?.ErrorMessageEn;
        setTimeout(() => {
          this.errorMessage = '';
        }, 4000);
      });
    }
  }
  resetDate() {
    this.sessionFilterForm.controls['date'].setValue('');
  }
  resetRegisterNo() {
    this.sessionFilterForm.controls['register'].setValue('');
  }
  getAllSessions(filterParams = this.filterParams) {
    let defaultParams = `pageNo=${this.pageNo - 1}&sort=${this.sort}&pageSize=${this.pageSize}`;
    if (this.statusQp) defaultParams += `&status=${this.statusQp}`;
    this._registerSettlementService.getAllSessions(filterParams && filterParams + `&${defaultParams}` || `?${defaultParams}`).subscribe(response => {
      this.sessionList = response?.data;
      console.log(this.sessionList);
      this.totalRecords = response?.totalRecordCount;
      this.pagin = Math.ceil(this.totalRecords / 6);
      this.pages = underscore__WEBPACK_IMPORTED_MODULE_0__.range(this.pagin);
    });
  }
  getBaranches() {
    this._registerSettlementService.getBranches().subscribe(response => {
      this.branchesList = response.data;
    });
  }
  getEmployees() {
    this._registerSettlementService.getEmployees().subscribe(response => {
      this.employeesList = response.data;
    });
  }
  getStatusList(id) {
    this._registerSettlementService.getStatusList(id).subscribe(response => {
      this.statusList = response.data;
    });
  }
  // Sorting Functions
  sortByBranch() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getAllSessions();
  }
  sortByRegisterNo() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getAllSessions();
  }
  sortByRegisterName() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getAllSessions();
  }
  sortByDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getAllSessions();
  }
  sortByRequested() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getAllSessions();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.getAllSessions();
  }
  /**
   * pagination
   * @param page page no
   */
  pageChange(page) {
    this.pageNo = page;
    window.scroll(0, 0);
    this.getAllSessions();
  }
}
RegSettlementComponent.ɵfac = function RegSettlementComponent_Factory(t) {
  return new (t || RegSettlementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_3__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_5__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal));
};
RegSettlementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: RegSettlementComponent,
  selectors: [["app-reg-settlement"]],
  viewQuery: function RegSettlementComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.success = _t.first);
    }
  },
  decls: 33,
  vars: 12,
  consts: [[1, "page-layout"], [1, "heading-text"], [3, "formGroup"], [1, "row", "align-items-stretch"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "input-group", "search-box", "h-100"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "formControlName", "register", "placeholder", "Register Name or No.", 1, "form-control"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], ["formControlName", "branch", "placeholder", "Branch Name", "bindLabel", "branchName", "bindValue", "branchId", 1, "flex-grow-1", "mt-3", "mt-sm-0", 3, "items"], ["formControlName", "createdBy", "placeholder", "Employee", "bindLabel", "fullName", "bindValue", "userId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "position-relative"], ["class", "fa-solid fa-times", "style", "position:absolute;top:15px;right:30px;cursor:pointer", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "date", "placeholder", "Select Date", "bsDaterangepicker", "", "placement", "left", 1, "form-control", "mt-3", "mt-lg-0", 2, "height", "46px", 3, "bsConfig"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "mt-3"], ["formControlName", "status", "placeholder", "Status", "bindLabel", "description", "bindValue", "id", 1, "flex-grow-1", 3, "items"], [1, "d-flex", "justify-content-end"], [1, "total-records"], [1, "row"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], [4, "ngIf"], ["content", ""], ["success", ""], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-times", 2, "position", "absolute", "top", "15px", "right", "30px", "cursor", "pointer", 3, "click"], [1, "card-table", "mt-2", "register-sessions-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "status-tag", "w-auto", "text-center", 3, "ngStyle"], ["dropdown", "", "container", "body", 1, "btn-group", "remove-caret-dropdown"], ["dropdownToggle", "", "aria-controls", "dropdown-basic", 1, "dot-details", "cursor-pointer", "dropdown-toggle"], [1, "fas", "fa-ellipsis-h"], ["id", "dropdown-basic", "class", "dropdown-menu dropdown-menu-right custom-session-dd", "role", "menu", "aria-labelledby", "button-alignment", 4, "dropdownMenu"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-alignment", 1, "dropdown-menu", "dropdown-menu-right", "custom-session-dd"], ["role", "menuitem"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "not-found"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md-6"], [1, "showing", "mb-0"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"], [1, "fc-modal", "p-4"], [1, "modal-header", "p-0"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-3"], [1, "modal-body", "p-0"], [1, "body-layout", "mt-3"], [1, "d-flex", "flex-column"], [1, "dark-gray", "fw-bolder"], [1, "light-gray"], [1, "dark-gray", "fw-bolder", "my-4"], [1, "row", "my-5"], [1, "col-md-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "close", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "close", 1, "form-check-label"], ["type", "radio", "id", "session", 1, "form-check-input", 3, "value", "ngModel", "disabled", "ngModelChange"], ["for", "session", 1, "form-check-label"], ["type", "radio", "id", "register", 1, "form-check-input", 3, "disabled", "value", "ngModel", "ngModelChange"], ["for", "register", 1, "form-check-label"], ["class", "alert alert-danger", 4, "ngIf"], [1, "modal-footer", "p-0"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "alert", "alert-danger"], [1, "modal-body"], ["class", "m-0 py-5 text-center", 4, "ngIf", "ngIfElse"], ["errorMessage", ""], [1, "m-0", "py-5", "text-center"], [1, "green-clr", "fa-regular", "fa-circle-check", "me-2"], [1, "text-danger", "m-0", "py-5", "text-center"], [1, "fa-regular", "fa-circle-xmark", "me-2"]],
  template: function RegSettlementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Sessions List");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, RegSettlementComponent_button_10_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ng-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, RegSettlementComponent_i_16_Template, 1, 0, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "ng-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 17)(21, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, RegSettlementComponent_div_24_Template, 45, 34, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, RegSettlementComponent_ng_template_26_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, RegSettlementComponent_ng_container_28_Template, 13, 9, "ng-container", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, RegSettlementComponent_ng_template_29_Template, 56, 14, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, RegSettlementComponent_ng_template_31_Template, 4, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.sessionFilterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sessionFilterForm.controls["register"].value !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.branchesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.employeesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sessionFilterForm.controls["date"].value.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](11, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.statusList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sessionList)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 28651:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/register-details/register-details.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterDetailsComponent": () => (/* binding */ RegisterDetailsComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/enums/enum */ 75706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);








function RegisterDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Register Basic Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 10)(7, "div", 9)(8, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9)(13, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Branch Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9)(18, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9)(23, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Register Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 9)(28, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Register No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r0.status.Active == (ctx_r0.registerDetails == null ? null : ctx_r0.registerDetails.register == null ? null : ctx_r0.registerDetails.register.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r0.registerDetails == null ? null : ctx_r0.registerDetails.register == null ? null : ctx_r0.registerDetails.register.basicDetails == null ? null : ctx_r0.registerDetails.register.basicDetails.branchName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", (ctx_r0.registerDetails == null ? null : ctx_r0.registerDetails.register == null ? null : ctx_r0.registerDetails.register.basicDetails == null ? null : ctx_r0.registerDetails.register.basicDetails.city) || "-", ",", ctx_r0.registerDetails == null ? null : ctx_r0.registerDetails.register == null ? null : ctx_r0.registerDetails.register.basicDetails == null ? null : ctx_r0.registerDetails.register.basicDetails.branchArea, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r0.registerDetails == null ? null : ctx_r0.registerDetails.register == null ? null : ctx_r0.registerDetails.register.basicDetails == null ? null : ctx_r0.registerDetails.register.basicDetails.registersName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r0.registerDetails == null ? null : ctx_r0.registerDetails.register == null ? null : ctx_r0.registerDetails.register.basicDetails == null ? null : ctx_r0.registerDetails.register.basicDetails.registersId) || "-");
  }
}
const _c0 = function (a0, a1, a2, a3) {
  return {
    "green-clr": a0,
    "gray-500": a1,
    "primary-clr": a2,
    "orange-clr": a3
  };
};
function RegisterDetailsComponent_div_5_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "div", 30)(2, "div", 31)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Session No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 31)(8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7.registerSessionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](3, _c0, (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "Open" || (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "Opened" || (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "Online" || (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "Settled", (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "Offline", (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "ForcedClose" || (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "Closed" || (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "UnClosed", (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "Waiting" || (item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName) === "Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.statusObj[0] == null ? null : item_r7.statusObj[0].lookupName);
  }
}
function RegisterDetailsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "View All Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 16)(8, "div", 17)(9, "div", 18)(10, "div", 9)(11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Current Situation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 21)(16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Current Open Session Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 23)(23, "div", 18)(24, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Session No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 18)(29, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Cashier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 18)(34, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Number of collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 18)(39, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Grand collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 17)(45, "div", 18)(46, "div", 9)(47, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Previous Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 21)(52, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 23)(58, "div", 18)(59, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Session No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 18)(64, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Cashier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 18)(69, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Number of collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 18)(74, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Grand collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 26)(80, "div", 18)(81, "div", 9)(82, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Unsettled Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 21)(87, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Total No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, RegisterDetailsComponent_div_5_div_91_Template, 12, 8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](24, _c0, (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "Open" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "Opened" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "Online" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "Settled", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "Offline", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "ForcedClose" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "Closed" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "UnClosed", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "Waiting" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) === "Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.status) || "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](29, _c0, (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "Open" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "Opened" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "Online" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "Settled", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "Offline", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "ForcedClose" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "Closed" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "UnClosed", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "Waiting" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) === "Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.currentStatus) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.registerSessionId) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.cratedBy == null ? null : ctx_r1.registerDetails.register.currentSituation.cratedBy.fullName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.numberOfCollections) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](43, 18, ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.currentSituation == null ? null : ctx_r1.registerDetails.register.currentSituation.grandCollection, "2.3-3") || "0", " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](34, _c0, (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "Open" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "Opened" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "Online" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "Settled", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "Offline", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "ForcedClose" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "Closed" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "UnClosed", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "Waiting" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) === "Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.status) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](39, _c0, (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "Open" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "Opened" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "Online" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "Settled", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "Offline", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "ForcedClose" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "Closed" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "UnClosed", (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "Waiting" || (ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) === "Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.currentStatus) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.registerSessionId) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.cratedBy == null ? null : ctx_r1.registerDetails.register.previousSituation.cratedBy.fullName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.numberOfCollections) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](78, 21, ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.previousSituation == null ? null : ctx_r1.registerDetails.register.previousSituation.grandCollection, "2.3-3") || "0", " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.registerDetails == null ? null : ctx_r1.registerDetails.register == null ? null : ctx_r1.registerDetails.register.unsettledSessionsCount) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.unsettledSessions);
  }
}
function RegisterDetailsComponent_div_6_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((item_r9 == null ? null : item_r9.totalCount) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.collectedAmount);
  }
}
function RegisterDetailsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 32)(2, "div", 7)(3, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Cash Situation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 33)(7, "div", 34)(8, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 36)(11, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Current Amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "table", 38)(14, "thead")(15, "tr")(16, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "total no");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Grand Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, RegisterDetailsComponent_div_6_tr_25_Template, 9, 4, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 41)(28, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 23)(31, "div", 43)(32, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Current Provided Petty Cash Amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 43)(38, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Current Expenses Amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 30)(44, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Petty Cash Remaining");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](26, 4, ctx_r2.cashSituation, 0, 6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](36, 8, ctx_r2.registerDetails == null ? null : ctx_r2.registerDetails.register == null ? null : ctx_r2.registerDetails.register.expenses == null ? null : ctx_r2.registerDetails.register.expenses.currentProvidedPettyCashAmount, "2.3-3") || "0", " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](42, 11, ctx_r2.registerDetails == null ? null : ctx_r2.registerDetails.register == null ? null : ctx_r2.registerDetails.register.expenses == null ? null : ctx_r2.registerDetails.register.expenses.currentExpensesAmount, "2.3-3") || "0", " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](48, 14, ctx_r2.registerDetails == null ? null : ctx_r2.registerDetails.register == null ? null : ctx_r2.registerDetails.register.expenses == null ? null : ctx_r2.registerDetails.register.expenses.pettyCashRemaining, "2.3-3") || "0", " JOD");
  }
}
function RegisterDetailsComponent_div_7_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r15 == null ? null : item_r15.lookupName);
  }
}
function RegisterDetailsComponent_div_7_div_63_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((item_r17 == null ? null : item_r17.bankNameEnglish) + " - " + (item_r17 == null ? null : item_r17.accountName) + " - " + (item_r17 == null ? null : item_r17.accountNumber));
  }
}
function RegisterDetailsComponent_div_7_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RegisterDetailsComponent_div_7_div_63_div_4_Template, 3, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r11.registerDetails == null ? null : ctx_r11.registerDetails.register == null ? null : ctx_r11.registerDetails.register.depositBanks);
  }
}
function RegisterDetailsComponent_div_7_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 69)(1, "div", 60)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 60)(5, "div", 48)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.role == null ? null : item_r18.role.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.user == null ? null : item_r18.user.fullName);
  }
}
function RegisterDetailsComponent_div_7_ng_container_86_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "div", 71)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const currency_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("activePrimaryClr", ctx_r19.compareCurrency(currency_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](currency_r20 == null ? null : currency_r20.name[0] == null ? null : currency_r20.name[0].lookupName);
  }
}
function RegisterDetailsComponent_div_7_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterDetailsComponent_div_7_ng_container_86_div_1_Template, 4, 3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.currenciesList);
  }
}
function RegisterDetailsComponent_div_7_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r22 == null ? null : item_r22.translations[0] == null ? null : item_r22.translations[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r22 == null ? null : item_r22.paymentTypeImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function RegisterDetailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 45)(2, "div", 46)(3, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Register Setup");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1)(7, "div", 47)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Number of Sessions Per Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 48)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 49)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Remaining");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 50)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 51)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "All Sessions Timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 52)(23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 53)(26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 53)(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 54)(34, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Opening Without Settlement");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 1)(38, "div", 55)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Allowed Sessions Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 52)(42, "div", 56)(43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Per Weekdays");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 55)(48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Remaining");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 50)(51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 54)(54, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Cash Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 1)(58, "div", 55)(59, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Deposit Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, RegisterDetailsComponent_div_7_div_62_Template, 3, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, RegisterDetailsComponent_div_7_div_63_Template, 5, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 54)(65, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 1)(69, "div", 60)(70, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 60)(73, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, RegisterDetailsComponent_div_7_div_76_Template, 8, 2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 54)(78, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 62)(82, "div", 63)(83, "div", 64)(84, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, RegisterDetailsComponent_div_7_ng_container_86_Template, 2, 1, "ng-container", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 62)(89, "div", 63)(90, "div", 64)(91, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Payment Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 66)(94, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, RegisterDetailsComponent_div_7_div_95_Template, 5, 2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r3.registerDetails == null ? null : ctx_r3.registerDetails.register == null ? null : ctx_r3.registerDetails.register.numberOfSessionsPerDay) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.registerDetails == null ? null : ctx_r3.registerDetails.register == null ? null : ctx_r3.registerDetails.register.remainingSessionsPerDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3._commonService.stringToTime(ctx_r3.registerDetails == null ? null : ctx_r3.registerDetails.register == null ? null : ctx_r3.registerDetails.register.allowedSessionTimeFrom));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3._commonService.stringToTime(ctx_r3.registerDetails == null ? null : ctx_r3.registerDetails.register == null ? null : ctx_r3.registerDetails.register.allowedSessionTimeTo));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.registerDetails == null ? null : ctx_r3.registerDetails.register == null ? null : ctx_r3.registerDetails.register.numberOfOpeningWithoutSettlementPerWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.registerDetails == null ? null : ctx_r3.registerDetails.register == null ? null : ctx_r3.registerDetails.register.remainingPerWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.registerDetails == null ? null : ctx_r3.registerDetails.register == null ? null : ctx_r3.registerDetails.register.cashDepositType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r3.registerDetails == null ? null : ctx_r3.registerDetails.register == null ? null : ctx_r3.registerDetails.register.cashDepositTypeId) !== 8001);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.registerDetails == null ? null : ctx_r3.registerDetails.register == null ? null : ctx_r3.registerDetails.register.registerEmployees);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.currenciesList == null ? null : ctx_r3.currenciesList.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.registerPaymentTypes);
  }
}
function RegisterDetailsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loading");
  }
}
class RegisterDetailsComponent {
  constructor(activeRoute, _registerSettlementService, _commonService, _sharedService) {
    this.activeRoute = activeRoute;
    this._registerSettlementService = _registerSettlementService;
    this._commonService = _commonService;
    this._sharedService = _sharedService;
    this.status = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__.Status;
    this.cashSituation = [];
    this.unsettledSessions = [];
    this.registerPaymentTypes = [];
  }
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.registerId = params['registerId'];
      //this.getRegisterDetails();
      this.getRegisterDetails1();
    });
  }
  getRegisterDetails1() {
    this._registerSettlementService.getRegisterDetails1(this.registerId).subscribe(response => {
      this.getRegisterPaymentTypes();
      this.getCurrencies();
      this.getRegisterDetails2();
      this.registerDetails = response;
      console.log(this.registerDetails);
      this.cashSituation = [...this.registerDetails?.register?.cashSituation, ...this.registerDetails?.register?.chequeSituation];
    });
  }
  getRegisterDetails2() {
    this._registerSettlementService.getRegisterDetails2(this.registerId).subscribe(response => {
      this.unsettledSessions = response.unsettledSessions.slice(0, 7);
    });
  }
  getRegisterDetails() {
    this._registerSettlementService.getSettleRegisterDetails(this.registerId).subscribe(response => {
      this.registerDetails = response;
      this.getRegisterPaymentTypes();
      //this.registerDetails.register.status = 2020;
      this.unsettledSessions = this.registerDetails.unsettledSessions.slice(0, 7);
      this.getCurrencies();
      this.cashSituation = [...this.registerDetails?.register?.cashSituation, ...this.registerDetails?.register?.chequeSituation];
    });
  }
  getRegisterPaymentTypes() {
    this._registerSettlementService.getRegisterPaymentTypes(this.registerId).subscribe(response => {
      this.registerPaymentTypes = response?.data;
      console.log(response);
    });
  }
  getCurrencies() {
    this._registerSettlementService.getLookupById(9).subscribe(response => {
      this.currenciesList = response?.data;
    });
  }
  compareCurrency(data) {
    let currencies = [];
    this.registerDetails?.register?.registerCurrencies.forEach(item => {
      currencies = [...currencies, item.currency[0]];
    });
    let isExist = currencies.find(x => x.lookupId == data?.id);
    return isExist ? true : false;
  }
}
RegisterDetailsComponent.ɵfac = function RegisterDetailsComponent_Factory(t) {
  return new (t || RegisterDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_1__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService));
};
RegisterDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RegisterDetailsComponent,
  selectors: [["app-register-details"]],
  decls: 10,
  vars: 8,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-12"], ["class", "card-collect card-with-details", 4, "ngIf", "ngIfElse"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], ["loadingData", ""], [1, "card-collect", "card-with-details"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "card-inner-heading"], [1, "d-flex", "flex-column"], [1, "gap-3", "sd-item"], [1, "dark-gray"], [1, "form-check", "form-switch"], ["type", "checkbox", "disabled", "", "id", "switchCheckGreen", 1, "form-check-input", 3, "checked"], [1, "light-gray", "fw-400"], ["routerLink", "/register-settlements", 1, "light-gray", "font-14", "fw-700", "td-none"], [1, "row", "flex-column", "gap-5", "gap-xl-0", "flex-xl-row", "gx-xl-5", "justify-content-sm-center", "justify-content-xl-start"], [1, "col-12", "col-xl-4", "border-end"], [1, "d-flex", "justify-content-between"], [1, "dark-gray", "font-16", "fw-600"], [1, "font-16", "fw-400", 3, "ngClass"], [1, "d-flex", "flex-column", "align-items-end"], [1, "card-inner-heading", "my-3"], [1, "d-flex", "flex-column", "gap-2"], [1, "light-gray", "font-16", "fw-400"], [1, "my-3"], [1, "col-12", "col-xl-4"], [1, "font-16", "fw-400"], [1, "primary-clr", "font-16", "fw-400"], ["class", "d-flex flex-column gap-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "gap-3", "flex-wrap"], [1, "d-flex", "justify-content-between", "gap-3"], [1, "card-collect"], [1, "row", "gx-0", "gx-5"], [1, "col-lg-6"], [1, "font-18", "fw-600", "mb-3"], [1, "cash-situations"], [1, "font-14", "fw-600", "px-3", "pt-3"], [1, "table", "table-striped", "mb-0"], [1, "px-3"], [4, "ngFor", "ngForOf"], [1, "col-lg-6", "border-start"], [1, "font-18", "fw-600"], [1, "d-flex", "justify-content-between", "gap-3", "flex-wrap", "border-bottom", "pb-3"], [1, "dark-gray", "font-16", "fw-500"], [1, "card-collect", "register-setup"], [1, "mb-4"], [1, "col-12", "col-md-6", "col-xl-4", "col-xxl-3"], [1, "bordered-box"], [1, "col-12", "col-md-6", "col-xl-2", "col-xxl-3"], [1, "bordered-box", "disabled"], [1, "col-12", "col-md-9", "col-xl-7", "col-xxl-6"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "bordered-box", "text-center", "flex-grow-1"], [1, "my-4"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3"], [1, "bordered-box", "flex-grow-1"], [1, "d-flex", "flex-column", "gap-3"], ["class", "bordered-box flex-grow-1", 4, "ngFor", "ngForOf"], ["class", "col-12 col-md-6 col-lg-4 col-xl-3", 4, "ngIf"], [1, "col-md-5", "col-lg-3"], ["class", "row mb-3 align-items-center", 4, "ngFor", "ngForOf"], [1, "row", "payments"], [1, "col-sm-3"], [1, "d-flex", "align-items-center", "gap-2"], [4, "ngIf"], [1, "col-sm-9"], ["class", "col-4 mb-3", 4, "ngFor", "ngForOf"], ["class", "bordered-box", 4, "ngFor", "ngForOf"], [1, "row", "mb-3", "align-items-center"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "bordered-box", "text-center"], [1, "col-4", "mb-3"], [1, "bordered-box", "d-flex", "justify-content-center", "gap-2", "align-items-center"], [1, "fw-500", "m-0"], ["width", "30", 3, "src"]],
  template: function RegisterDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, RegisterDetailsComponent_div_3_Template, 32, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, RegisterDetailsComponent_div_5_Template, 92, 44, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, RegisterDetailsComponent_div_6_Template, 49, 17, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RegisterDetailsComponent_div_7_Template, 96, 11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RegisterDetailsComponent_ng_template_8_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.registerDetails == null ? null : ctx.registerDetails.register)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.registerDetails == null ? null : ctx.registerDetails.register)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.registerDetails == null ? null : ctx.registerDetails.register)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.registerDetails == null ? null : ctx.registerDetails.register)("ngIfElse", _r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 15234:
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/register-settlements-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterSettlementsRoutingModule": () => (/* binding */ RegisterSettlementsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _reg_settlement_reg_settlement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg-settlement/reg-settlement.component */ 52611);
/* harmony import */ var _register_details_register_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-details/register-details.component */ 28651);
/* harmony import */ var _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-details/session-details.component */ 68098);
/* harmony import */ var _settel_settel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settel/settel.component */ 94298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [{
  path: '',
  component: _reg_settlement_reg_settlement_component__WEBPACK_IMPORTED_MODULE_0__.RegSettlementComponent
}, {
  path: 'settle/:sessionId',
  component: _settel_settel_component__WEBPACK_IMPORTED_MODULE_3__.SettelComponent
}, {
  path: 'session/:sessionId',
  component: _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_2__.SessionDetailsComponent
}, {
  path: 'register/:registerId',
  component: _register_details_register_details_component__WEBPACK_IMPORTED_MODULE_1__.RegisterDetailsComponent
}];
class RegisterSettlementsRoutingModule {}
RegisterSettlementsRoutingModule.ɵfac = function RegisterSettlementsRoutingModule_Factory(t) {
  return new (t || RegisterSettlementsRoutingModule)();
};
RegisterSettlementsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: RegisterSettlementsRoutingModule
});
RegisterSettlementsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RegisterSettlementsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 82621:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/register-settlements.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterSettlementsModule": () => (/* binding */ RegisterSettlementsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _register_settlements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-settlements-routing.module */ 15234);
/* harmony import */ var _reg_settlement_reg_settlement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg-settlement/reg-settlement.component */ 52611);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _settel_settel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settel/settel.component */ 94298);
/* harmony import */ var _components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/session-cheques/session-cheques.component */ 28054);
/* harmony import */ var _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-details/session-details.component */ 68098);
/* harmony import */ var _register_details_register_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-details/register-details.component */ 28651);
/* harmony import */ var _components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/session-bank-transfer/session-bank-transfer.component */ 37243);
/* harmony import */ var _components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/session-bank-pledges/session-bank-pledges.component */ 70860);
/* harmony import */ var _components_view_settle_attachments_view_settle_attachments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/view-settle-attachments/view-settle-attachments.component */ 14333);
/* harmony import */ var _components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/session-card-payments/session-card-payments.component */ 49558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);













class RegisterSettlementsModule {}
RegisterSettlementsModule.ɵfac = function RegisterSettlementsModule_Factory(t) {
  return new (t || RegisterSettlementsModule)();
};
RegisterSettlementsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: RegisterSettlementsModule
});
RegisterSettlementsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _register_settlements_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterSettlementsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](RegisterSettlementsModule, {
    declarations: [_reg_settlement_reg_settlement_component__WEBPACK_IMPORTED_MODULE_1__.RegSettlementComponent, _settel_settel_component__WEBPACK_IMPORTED_MODULE_3__.SettelComponent, _components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_10__.SessionCardPaymentsComponent, _components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_4__.SessionChequesComponent, _session_details_session_details_component__WEBPACK_IMPORTED_MODULE_5__.SessionDetailsComponent, _register_details_register_details_component__WEBPACK_IMPORTED_MODULE_6__.RegisterDetailsComponent, _components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_7__.SessionBankTransferComponent, _components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_8__.SessionBankPledgesComponent, _components_view_settle_attachments_view_settle_attachments_component__WEBPACK_IMPORTED_MODULE_9__.ViewSettleAttachmentsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _register_settlements_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterSettlementsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 68098:
/*!***************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/session-details/session-details.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDetailsComponent": () => (/* binding */ SessionDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/session-card-payments/session-card-payments.component */ 49558);
/* harmony import */ var _components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/session-cheques/session-cheques.component */ 28054);
/* harmony import */ var _components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/session-bank-transfer/session-bank-transfer.component */ 37243);
/* harmony import */ var _components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/session-bank-pledges/session-bank-pledges.component */ 70860);










const _c0 = function (a0, a1) {
  return {
    "background": a0,
    "color": a1,
    "borderRadius": "5px",
    "padding": "8px 20px",
    "fontWeight": "600"
  };
};
function SessionDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Session Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 10)(5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 12)(9, "div", 10)(10, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Session No");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10)(15, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Session Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10)(21, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Session Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 10)(27, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Session Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 10)(32, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Register Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 10)(37, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 10)(42, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Register No");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 10)(47, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Branch Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](16, _c0, ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.statusObj == null ? null : ctx_r0.sessionDetails.statusObj.lookupBGColor, ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.statusObj == null ? null : ctx_r0.sessionDetails.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.statusObj == null ? null : ctx_r0.sessionDetails.statusObj.translations[0] == null ? null : ctx_r0.sessionDetails.statusObj.translations[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.registerSessionId) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](19, 10, ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.createdAt, "mediumDate") || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](25, 13, ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.createdAt, "mediumTime") || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.statusObj == null ? null : ctx_r0.sessionDetails.statusObj.translations[0] == null ? null : ctx_r0.sessionDetails.statusObj.translations[0].lookupName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.register == null ? null : ctx_r0.sessionDetails.register.registersName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.createdBy == null ? null : ctx_r0.sessionDetails.createdBy.fullName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.register == null ? null : ctx_r0.sessionDetails.register.registerId) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r0.sessionDetails == null ? null : ctx_r0.sessionDetails.branch == null ? null : ctx_r0.sessionDetails.branch.branchName) || "-");
  }
}
function SessionDetailsComponent_div_6_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 34)(6, "div", 29)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Registered Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 34)(13, "div", 29)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Refunded Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 34)(20, "div", 29)(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Actual Cashier Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 29)(27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Actual Main Fund Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 34)(33, "div", 29)(34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Differences");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", i_r10 + 1, ". ", (item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName) || "0", " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 13, item_r9 == null ? null : item_r9.registerdAmount, "2.3-3") || "0", " ", " " + (item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](18, 16, (item_r9 == null ? null : item_r9.refundedAmount) || 0, "2.3-3"), " ", " " + (item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](25, 19, item_r9 == null ? null : item_r9.actualAmount, "2.3-3") || "0", " ", " " + (item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](31, 22, item_r9 == null ? null : item_r9.mainFundActualAmount, "2.3-3") || "0", " ", " " + (item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (item_r9 == null ? null : item_r9.isDifferencePositiveOrZero) === 0 ? "" : (item_r9 == null ? null : item_r9.isDifferencePositiveOrZero) ? "greenHighlight" : "redHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](38, 25, item_r9 == null ? null : item_r9.differenceAmount, "2.3-3") || "0", " ", " " + (item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName), " ");
  }
}
function SessionDetailsComponent_div_6_div_97_app_session_cheques_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-session-cheques", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("loadData", function SessionDetailsComponent_div_6_div_97_app_session_cheques_1_Template_app_session_cheques_loadData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.handleLoadData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("response", ctx_r11.sessionCheques)("isSettle", false);
  }
}
function SessionDetailsComponent_div_6_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SessionDetailsComponent_div_6_div_97_app_session_cheques_1_Template, 1, 2, "app-session-cheques", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.sessionCheques == null ? null : ctx_r5.sessionCheques.data);
  }
}
function SessionDetailsComponent_div_6_div_98_app_session_card_payments_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-session-card-payments", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("loadCardData", function SessionDetailsComponent_div_6_div_98_app_session_card_payments_1_Template_app_session_card_payments_loadCardData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.handleCardsLoad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("response", ctx_r14.sessionCardsPayments)("isSettle", false);
  }
}
function SessionDetailsComponent_div_6_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SessionDetailsComponent_div_6_div_98_app_session_card_payments_1_Template, 1, 2, "app-session-card-payments", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.sessionCardsPayments == null ? null : ctx_r6.sessionCardsPayments.cards);
  }
}
function SessionDetailsComponent_div_6_div_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-session-bank-transfer", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isSettle", false);
  }
}
function SessionDetailsComponent_div_6_div_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-session-bank-pledges", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isSettle", false);
  }
}
function SessionDetailsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 15)(3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionDetailsComponent_div_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.chooseTab(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 17)(5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 20)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Total Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionDetailsComponent_div_6_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.chooseTab(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 17)(15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 20)(18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Total Cheque ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionDetailsComponent_div_6_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.chooseTab(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 17)(25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 20)(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Total Card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionDetailsComponent_div_6_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.chooseTab(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 17)(35, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 20)(38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " TTL Bank Transfers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionDetailsComponent_div_6_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.chooseTab(5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 17)(45, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 20)(48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, " TTL Bank Pledges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](52, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 1)(54, "div", 2)(55, "div", 25)(56, "div", 26)(57, "div", 1)(58, "div", 2)(59, "div", 27)(60, "div", 1)(61, "div", 28)(62, "div", 29)(63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Initial Fund");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](67, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 2)(69, "div", 31)(70, "div", 32)(71, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "p")(74, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, SessionDetailsComponent_div_6_div_76_Template, 39, 28, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 2)(78, "div", 31)(79, "div", 32)(80, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, " Cash Deposited");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 1)(83, "div", 34)(84, "div", 29)(85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Deposited Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](89, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 34)(91, "div", 29)(92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Remaining Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](96, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](97, SessionDetailsComponent_div_6_div_97_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](98, SessionDetailsComponent_div_6_div_98_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, SessionDetailsComponent_div_6_div_99_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](100, SessionDetailsComponent_div_6_div_100_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 36)(102, "div", 31)(103, "div", 1)(104, "div", 37)(105, "div", 38)(106, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "Closing Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](108, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 37)(110, "div", 38)(111, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112, "Settlement Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](113, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "div", 2)(115, "div", 40)(116, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SessionDetailsComponent_div_6_Template_button_click_116_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selected == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 27, (ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.registerAmounts == null ? null : ctx_r1.sessionDetails.registerAmounts.totalCash) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selected == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](22, 30, (ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.registerAmounts == null ? null : ctx_r1.sessionDetails.registerAmounts.totalCheques) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selected == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](32, 33, (ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.registerAmounts == null ? null : ctx_r1.sessionDetails.registerAmounts.totalCards) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selected == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](42, 36, (ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.registerAmounts == null ? null : ctx_r1.sessionDetails.registerAmounts.totalBankTransfere) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selected == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](52, 39, (ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.registerAmounts == null ? null : ctx_r1.sessionDetails.registerAmounts.totalBanksPledge) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r1.selected != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](67, 42, (ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.initialFund) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" No. Of Currencies ", ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.cashAtClosing.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.cashAtClosing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](89, 45, ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.debositedCash, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](96, 48, ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.remainingCash, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selected == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selected == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selected == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selected == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.closingNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.sessionDetails == null ? null : ctx_r1.sessionDetails.settlementNotes);
  }
}
function SessionDetailsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loading");
  }
}
class SessionDetailsComponent {
  constructor(activeRoute, _registerSettlementService, _headerService, _location) {
    this.activeRoute = activeRoute;
    this._registerSettlementService = _registerSettlementService;
    this._headerService = _headerService;
    this._location = _location;
    this.selected = 1;
    this.pageNo = 1;
    this.sort = 1;
    this.searchText = '';
    console.log(this._location.go);
  }
  ngOnInit() {
    this._headerService.setTitle('Unsettled Sessions');
    this.activeRoute.params.subscribe(params => {
      this.sessionId = params['sessionId'];
      this.getSessionDetailsSettlements();
    });
  }
  goBack() {
    this._location.back();
  }
  getSessionDetailsSettlements() {
    this._registerSettlementService.getSessionDetailSettlement(this.sessionId).subscribe(response => {
      let cashAtClosing = response.data.cashAtClosing.map(item => {
        return {
          ...item,
          differenceAmount: Math.abs(item.differenceAmount),
          isDifferencePositiveOrZero: item?.actualAmount == item?.registerdAmount ? 0 : item?.actualAmount >= item?.registerdAmount
        };
      });
      this.sessionDetails = {
        ...response.data,
        cashAtClosing
      };
    });
  }
  getSessionCheques() {
    this._registerSettlementService.getSessionCheques(this.sessionId, this.pageNo, this.searchText, this.sort).subscribe(response => {
      this.sessionCheques = {
        ...response
      };
    });
  }
  getSessionCardsPayments() {
    this._registerSettlementService.getSessionCardsPayments(this.sessionId, this.pageNo, this.searchText, this.sort).subscribe(response => {
      this.sessionCardsPayments = {
        ...response
      };
    });
  }
  chooseTab(val) {
    this.searchText = '';
    this.pageNo = 1;
    this.selected = val;
    if (val == 2) {
      this.getSessionCheques();
    } else if (val == 3) {
      this.getSessionCardsPayments();
    }
  }
  handleLoadData(event) {
    this.pageNo = event.page;
    this.searchText = event.chequeNumber;
    this.sort = event.sort;
    this.getSessionCheques();
  }
  handleCardsLoad(event) {
    this.pageNo = event.page;
    this.searchText = event.customer;
    this.sort = event.sort;
    this.getSessionCardsPayments();
  }
}
SessionDetailsComponent.ɵfac = function SessionDetailsComponent_Factory(t) {
  return new (t || SessionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_0__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location));
};
SessionDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SessionDetailsComponent,
  selectors: [["app-session-details"]],
  decls: 9,
  vars: 4,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-12"], ["class", "card-collect card-with-details", 4, "ngIf", "ngIfElse"], [1, "heading-text", "mb-3"], ["class", "row", 4, "ngIf", "ngIfElse"], ["loadingData", ""], [1, "card-collect", "card-with-details"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "card-inner-heading"], [1, "d-flex", "flex-column"], [3, "ngStyle"], [1, "gap-3", "sd-item"], [1, "dark-gray"], [1, "light-gray"], [1, "tab-nav", "d-flex", "flex-wrap"], [1, "btn", 3, "click"], [1, "d-flex", "gap-3", "align-items-center"], [1, "imag"], ["src", "assets/images/wallet.png", "alt", ""], [1, "info"], ["src", "assets/images/cheque.png", "alt", ""], ["src", "assets/images/card.png", "alt", ""], ["src", "assets/images/bt.svg", "alt", ""], ["src", "assets/images/bp.svg", "alt", ""], [1, "tab-content"], [1, "tab-item", 3, "hidden"], [1, "card-collect", "py-2"], [1, "col-sm-4"], [1, "total-card"], [1, "total"], [1, "card-collect"], [1, "top-details"], ["class", "row mb-4", 4, "ngFor", "ngForOf"], [1, "col-sm-3"], ["class", "tab-item", 4, "ngIf"], [1, "col-md-12", "mt-3"], [1, "col-md-8"], [1, "form-group", "mb-3"], ["disabled", "", "rows", "4", "minlength", "200", "maxlength", "200", 1, "form-control", 3, "value"], [1, "btns-group", "m-0", "my-1"], [1, "btn", "btn-save", 3, "click"], [1, "row", "mb-4"], [1, "col-sm-12"], [1, "curncy"], [1, "total", 3, "ngClass"], [1, "tab-item"], [3, "response", "isSettle", "loadData", 4, "ngIf"], [3, "response", "isSettle", "loadData"], [3, "response", "isSettle", "loadCardData", 4, "ngIf"], [3, "response", "isSettle", "loadCardData"], [3, "isSettle"]],
  template: function SessionDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SessionDetailsComponent_div_3_Template, 51, 19, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Register Amounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SessionDetailsComponent_div_6_Template, 118, 51, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SessionDetailsComponent_ng_template_7_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sessionDetails == null ? null : ctx.sessionDetails.register)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sessionDetails == null ? null : ctx.sessionDetails.registerAmounts)("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_3__.SessionCardPaymentsComponent, _components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_4__.SessionChequesComponent, _components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_5__.SessionBankTransferComponent, _components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_6__.SessionBankPledgesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: [".tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n  margin-bottom: 30px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ced5dd;\n  border-radius: 10px;\n  padding: 15px 20px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .imag[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background: #f8f8f8;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .imag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 3px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0px;\n  padding: 3px;\n}\n\n.actual-amount[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 130px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-size: 14px;\n  padding: 5px;\n  display: block;\n  font-weight: 500;\n}\n\n.nosession[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL3JlZ2lzdGVyLXNldHRsZW1lbnRzL3Nlc3Npb24tZGV0YWlscy9zZXNzaW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsNENBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUROO0FBR007RUFDRSxXQUFBO0FBRFI7QUFLSTtFQUNFLGlCQUFBO0FBSE47QUFLTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSFI7QUFNTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSlI7O0FBV0U7RUFDRSxZQUFBO0FBUko7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFURiIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYi1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgLmJ0bi5hY3RpdmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjVweCByZ2IoMCAwIDAgLyAxMCUpO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDVkZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcblxuICAgIC5pbWFnIHtcbiAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgIH1cblxuICAgICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hY3R1YWwtYW1vdW50IHtcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ub3Nlc3Npb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMzBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 94298:
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/settel/settel.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettelComponent": () => (/* binding */ SettelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/enum */ 75706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register-settlements-service/register-settlement.service */ 1618);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/session-card-payments/session-card-payments.component */ 49558);
/* harmony import */ var _components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/session-cheques/session-cheques.component */ 28054);
/* harmony import */ var _components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/session-bank-transfer/session-bank-transfer.component */ 37243);
/* harmony import */ var _components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/session-bank-pledges/session-bank-pledges.component */ 70860);



















const _c0 = ["successModal"];
const _c1 = ["depositedAttachment"];
function SettelComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Settle");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 13)(5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Closing Date & Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 15)(12, "div", 13)(13, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Branch Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 13)(18, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Register Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 13)(23, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Register No");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div", 13)(28, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Session No");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 13)(33, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](9, 6, ctx_r0.settlementDetails == null ? null : ctx_r0.settlementDetails.createdAt, "short") || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r0.settlementDetails == null ? null : ctx_r0.settlementDetails.branch == null ? null : ctx_r0.settlementDetails.branch.branchName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r0.settlementDetails == null ? null : ctx_r0.settlementDetails.register == null ? null : ctx_r0.settlementDetails.register.registersName) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r0.settlementDetails == null ? null : ctx_r0.settlementDetails.register == null ? null : ctx_r0.settlementDetails.register.registerId) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r0.settlementDetails == null ? null : ctx_r0.settlementDetails.registerSessionId) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r0.settlementDetails == null ? null : ctx_r0.settlementDetails.createdBy == null ? null : ctx_r0.settlementDetails.createdBy.fullName) || "-");
  }
}
function SettelComponent_div_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_div_6_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.chooseTab(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 24)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Total Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r10.selected == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](9, 3, (ctx_r10.settlementDetails == null ? null : ctx_r10.settlementDetails.registerAmounts == null ? null : ctx_r10.settlementDetails.registerAmounts.totalCash) || 0, "2.3-3"), " JOD ");
  }
}
function SettelComponent_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_div_6_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r22.chooseTab(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 24)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Total Cheque ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r11.selected == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](9, 3, (ctx_r11.settlementDetails == null ? null : ctx_r11.settlementDetails.registerAmounts == null ? null : ctx_r11.settlementDetails.registerAmounts.totalCheques) || 0, "2.3-3"), " JOD ");
  }
}
function SettelComponent_div_6_div_60_ng_container_28_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function SettelComponent_div_6_div_60_ng_container_28_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Input does not allow negative values");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function SettelComponent_div_6_div_60_ng_container_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettelComponent_div_6_div_60_ng_container_28_ng_container_1_span_1_Template, 2, 0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SettelComponent_div_6_div_60_ng_container_28_ng_container_1_span_2_Template, 2, 0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_0_0 = item_r24.get("actualAmount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_1_0 = item_r24.get("actualAmount")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["min"]);
  }
}
function SettelComponent_div_6_div_60_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettelComponent_div_6_div_60_ng_container_28_ng_container_1_Template, 3, 2, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_0_0 = item_r24.get("actualAmount")) == null ? null : tmp_0_0.invalid) && ((tmp_0_0 = item_r24.get("actualAmount")) == null ? null : tmp_0_0.touched) || ((tmp_0_0 = item_r24.get("actualAmount")) == null ? null : tmp_0_0.dirty));
  }
}
function SettelComponent_div_6_div_60_span_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_div_6_div_60_span_39_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r36);
      const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().index;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r34.viewDepositAttachment(i_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "View Deposit Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function SettelComponent_div_6_div_60_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "No Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function SettelComponent_div_6_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 1)(3, "div", 53)(4, "div", 54)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 55)(8, "div", 56)(9, "div", 1)(10, "div", 57)(11, "div", 31)(12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 57)(17, "div", 31)(18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 57)(23, "div", 31)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 58)(27, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("input", function SettelComponent_div_6_div_60_Template_input_input_27_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38);
      const item_r24 = restoredCtx.$implicit;
      const i_r25 = restoredCtx.index;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r37.actualAmountChange(item_r24.get("registerdAmount").value, item_r24.get("actualAmount").value, i_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, SettelComponent_div_6_div_60_ng_container_28_Template, 2, 1, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 57)(30, "div", 31)(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 63)(36, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](38, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, SettelComponent_div_6_div_60_span_39_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, SettelComponent_div_6_div_60_span_40_Template, 2, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "div", 63)(42, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](44, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroupName", i_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", i_r25 + 1, ". ", item_r24.get("currency").value, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Registered Amount ", item_r24.get("currency").value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Closing Difference ", item_r24.get("currency").value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", item_r24.get("differenceAmount").value == 0 ? "" : +item_r24.get("differenceAmount").value > 0 ? "greenHighlight" : "redHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r12.removeMinusFromNegativeValue(item_r24.get("differenceAmount").value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Actual Amount ", item_r24.get("currency").value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_7_0 = item_r24.get("actualAmount")) == null ? null : tmp_7_0["errors"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Differnce ", item_r24.get("currency").value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", item_r24.get("isDifferencePositiveOrZero").value === 0 ? "" : item_r24.get("isDifferencePositiveOrZero").value ? "greenHighlight" : "redHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r24.get("differenceViewOnly").value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("Deposited Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](38, 18, item_r24 == null ? null : item_r24.get("debositedAmount").value, "2.3-3"), " ", item_r24.get("currency").value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r12.settlementDetails == null ? null : ctx_r12.settlementDetails.cashAtClosing[i_r25].depositAttachmentFiles == null ? null : ctx_r12.settlementDetails.cashAtClosing[i_r25].depositAttachmentFiles.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r12.settlementDetails == null ? null : ctx_r12.settlementDetails.cashAtClosing[i_r25].depositAttachmentFiles == null ? null : ctx_r12.settlementDetails.cashAtClosing[i_r25].depositAttachmentFiles.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("Refunded Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](44, 21, item_r24 == null ? null : item_r24.get("refundedAmount").value, "2.3-3"), " ", item_r24.get("currency").value, "");
  }
}
function SettelComponent_div_6_div_61_app_session_cheques_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-session-cheques", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("loadData", function SettelComponent_div_6_div_61_app_session_cheques_1_Template_app_session_cheques_loadData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r40.handleLoadData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("response", ctx_r39.sessionCheques);
  }
}
function SettelComponent_div_6_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettelComponent_div_6_div_61_app_session_cheques_1_Template, 1, 1, "app-session-cheques", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r13.sessionCheques == null ? null : ctx_r13.sessionCheques.data);
  }
}
function SettelComponent_div_6_div_62_app_session_card_payments_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-session-card-payments", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("loadCardData", function SettelComponent_div_6_div_62_app_session_card_payments_1_Template_app_session_card_payments_loadCardData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r43.handleCardsLoad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("response", ctx_r42.sessionCardsPayments);
  }
}
function SettelComponent_div_6_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettelComponent_div_6_div_62_app_session_card_payments_1_Template, 1, 1, "app-session-card-payments", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r14.sessionCardsPayments == null ? null : ctx_r14.sessionCardsPayments.cards);
  }
}
function SettelComponent_div_6_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-session-bank-transfer", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isSettle", true);
  }
}
function SettelComponent_div_6_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-session-bank-pledges", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isSettle", true);
  }
}
function SettelComponent_div_6_p_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r17.successMessage);
  }
}
function SettelComponent_div_6_p_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r18.errorMessage);
  }
}
function SettelComponent_div_6_button_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_div_6_button_84_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r45.openConfirmModal(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Settle Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r19.cashForm.valid && ctx_r19.cashDepositTypeId !== 8002);
  }
}
function SettelComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, SettelComponent_div_6_button_3_Template, 10, 6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, SettelComponent_div_6_button_4_Template, 10, 6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_div_6_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r47.chooseTab(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 21)(7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 24)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, " Total Card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_div_6_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r49.chooseTab(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 21)(17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 24)(20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, " TTL Bank Transfers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_div_6_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r50.chooseTab(5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 21)(27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 24)(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, " TTL Bank Pledges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 1)(36, "div", 2)(37, "div", 27)(38, "div", 28)(39, "div", 1)(40, "div", 2)(41, "div", 29)(42, "div", 1)(43, "div", 30)(44, "div", 31)(45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "Initial Fund");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](49, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "div", 2)(51, "div", 33)(52, "div", 34)(53, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "p")(56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "form", 35)(59, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](60, SettelComponent_div_6_div_60_Template, 45, 24, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](61, SettelComponent_div_6_div_61_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, SettelComponent_div_6_div_62_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](63, SettelComponent_div_6_div_63_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](64, SettelComponent_div_6_div_64_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "div", 39)(66, "div", 33)(67, "div", 1)(68, "div", 40)(69, "div", 41)(70, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71, "Closing Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](72, "textarea", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "div", 40)(74, "div", 41)(75, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, "Settlement Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function SettelComponent_div_6_Template_textarea_ngModelChange_77_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r48);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r51.settlementNotes = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](79, SettelComponent_div_6_p_79_Template, 2, 1, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](80, SettelComponent_div_6_p_80_Template, 2, 1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "div", 46)(82, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](83, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](84, SettelComponent_div_6_button_84_Template, 2, 1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.cashDepositTypeId !== 8002);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.cashDepositTypeId !== 8002);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r1.selected == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](14, 25, (ctx_r1.settlementDetails == null ? null : ctx_r1.settlementDetails.registerAmounts == null ? null : ctx_r1.settlementDetails.registerAmounts.totalCards) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r1.selected == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](24, 28, (ctx_r1.settlementDetails == null ? null : ctx_r1.settlementDetails.registerAmounts == null ? null : ctx_r1.settlementDetails.registerAmounts.totalBankTransfere) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r1.selected == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](34, 31, (ctx_r1.settlementDetails == null ? null : ctx_r1.settlementDetails.registerAmounts == null ? null : ctx_r1.settlementDetails.registerAmounts.totalBanksPledge) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r1.selected != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](49, 34, (ctx_r1.settlementDetails == null ? null : ctx_r1.settlementDetails.initialFund) || 0, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" No. Of Currencies ", (ctx_r1.settlementDetails == null ? null : ctx_r1.settlementDetails.cashAtClosing.length) || "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r1.cashForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.cashArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.selected == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.selected == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.selected == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.selected == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r1.settlementDetails == null ? null : ctx_r1.settlementDetails.closingNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r1.settlementNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.successMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.canManageAndView);
  }
}
function SettelComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 80)(1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Settle successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Your settlement is completed successfully. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 83)(8, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_ng_template_7_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54);
      const modal_r52 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r52.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function SettelComponent_ng_template_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 88)(1, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 90)(4, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_ng_template_9_div_4_Template_img_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r59);
      const file_r57 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r58.viewFile(file_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const file_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r56.getFileName(file_r57));
  }
}
function SettelComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 80)(1, "div", 85)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Deposited Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, SettelComponent_ng_template_9_div_4_Template, 5, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 87)(6, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_ng_template_9_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61);
      const modal_r55 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r55.close("yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r5.depositAttachmentFiles);
  }
}
function SettelComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 80)(1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Confirmation!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h6", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Are you sure you want to settle this session? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 87)(8, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_ng_template_11_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r64);
      const modal_r62 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r62.close("yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettelComponent_ng_template_11_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r64);
      const modal_r62 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](modal_r62.dismiss("dismiss"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function SettelComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-loading");
  }
}
class SettelComponent {
  constructor(fb, activeRoute, _registerSettlementService, _headerService, _collectService, _commonService, _modalService, _sharedService) {
    this.fb = fb;
    this.activeRoute = activeRoute;
    this._registerSettlementService = _registerSettlementService;
    this._headerService = _headerService;
    this._collectService = _collectService;
    this._commonService = _commonService;
    this._modalService = _modalService;
    this._sharedService = _sharedService;
    this.selected = 1;
    this.pageNo = 1;
    this.sort = 1;
    this.searchText = '';
    this.settlementNotes = '';
    this.successMessage = '';
    this.differenceAmount = null;
    this.errorMessage = '';
    this.cashDepositTypeId = 0;
    this.depositAttachmentFiles = [];
  }
  ngOnInit() {
    this._headerService.setTitle('Settled Sessions');
    this.initCashForm();
    this.getRegisterDetails();
    this.activeRoute.params.subscribe(params => {
      this.sessionId = params['sessionId'];
      this.getSessionDetailsSettlements();
      this.getSessionCheques();
      this.getSessionCardsPayments();
    });
    this.getPermissions();
  }
  getRegisterDetails() {
    return this._collectService.GetRegisterDetails(this._sharedService.getRegister.registerObj?.id).subscribe(response => {
      if (response) {
        this.cashDepositTypeId = response?.['data']['cashDepositTypeId'];
        if (this.cashDepositTypeId == 8002) {
          this.selected = 3;
        }
      }
    });
  }
  getPermissions() {
    this.canManageAndView = this._sharedService.getPermissions.find(x => x.permissionCatId == 25).permissionSubCategories.find(y => y.permissionSubCatId == 61).permissionItems.find(z => z.permissionItemId == 143).selected;
    localStorage.setItem('cmav', this.canManageAndView.toString());
  }
  initCashForm() {
    this.cashForm = this.fb.group({
      cashArray: this.fb.array([])
    });
  }
  get cashArray() {
    return this.cashForm.get('cashArray');
  }
  openConfirmModal(content) {
    const ref = this._modalService.open(content, {
      centered: true
    });
    ref.result.then(x => {
      if (x === 'yes') {
        this.handleSettleRegister();
      }
    }, reject => {});
  }
  handleSettleRegister() {
    let obj;
    if (!this.cashForm.valid && this.cashDepositTypeId !== 8002) {
      this.cashForm.markAllAsTouched();
      return;
    }
    obj = {
      registerSessionId: this.sessionId,
      settlementNotes: this.settlementNotes
    };
    if (this.cashDepositTypeId !== 8002) {
      let values = this.cashForm.getRawValue().cashArray.map(x => {
        return {
          currencyID: x.currencyId,
          actualAmount: this.settlementDetails?.status == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.Status.PartiallySettled ? 0 : x.actualAmount,
          differenceAmount: x.difference || '0.000',
          closingRegisteredAmount: x.registerdAmount
        };
      });
      obj = {
        ...obj,
        registerSessionSettlementAmounts: values
      };
    }
    this._registerSettlementService.settleRegister(obj).subscribe(x => {
      if (x.isSuccess) {
        //this.successMessage = 'Settlement successfully registered!';
        this._modalService.open(this.successModal, {
          centered: true
        });
        setTimeout(() => {
          this._modalService.dismissAll();
          this._commonService.NavigateToRoute('/register-settlements');
        }, 4000);
      }
    }, error => {
      this.errorMessage = error['error'].errors[0]?.ErrorMessageEn;
      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
    });
  }
  viewDepositAttachment(i) {
    this.depositAttachmentFiles = this.settlementDetails?.cashAtClosing[i].depositAttachmentFiles;
    this._modalService.open(this.depositedAttachment, {
      size: 'md'
    });
  }
  viewFile(file) {
    const modalRef = this._modalService.open(_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewUploadedFileComponent, {
      size: 'xl'
    });
    modalRef.componentInstance.file = file;
  }
  getFileName(name) {
    return name?.split('/').pop();
  }
  getSessionDetailsSettlements() {
    this._registerSettlementService.getSessionDetailSettlement(this.sessionId).subscribe(response => {
      this.settlementDetails = response.data;
      this.settlementNotes = this.settlementDetails?.settlementNotes;
      this.settlementDetails?.cashAtClosing.forEach(item => {
        let actualAmount;
        if (this.settlementDetails?.status == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.Status.PartiallySettled) actualAmount = {
          value: item?.actualAmount.toFixed(3),
          disabled: true
        };else actualAmount = '';
        const registerdAmount = +item?.registerdAmount - +item.refundedAmount;
        const differenceAmount = registerdAmount - +item.differenceAmount;
        let formGroup = this.fb.group({
          registerdAmount: [{
            value: registerdAmount.toFixed(3),
            disabled: true
          }],
          differenceAmount: [{
            value: differenceAmount.toFixed(3),
            disabled: true
          }],
          debositedAmount: [item.debositedAmount],
          refundedAmount: [item.refundedAmount],
          actualAmount: [actualAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.min(0)]],
          difference: [''],
          differenceViewOnly: [''],
          currency: [item.currency[0].lookupName],
          currencyId: [item.currencyID],
          isDifferencePositiveOrZero: [0]
        });
        this.cashArray.push(formGroup);
      });
    });
  }
  getSessionCheques() {
    this._registerSettlementService.getSessionCheques(this.sessionId, this.pageNo, this.searchText, this.sort).subscribe(response => {
      this.sessionCheques = {
        ...response
      };
      console.log(this.sessionCheques);
      if (this.sessionCheques.data.length == 0) {
        this.actionOnCheque = true;
      }
    });
    console.log(this.pageNo);
  }
  getSessionCardsPayments() {
    this._registerSettlementService.getSessionCardsPayments(this.sessionId, this.pageNo, this.searchText, this.sort).subscribe(response => {
      this.sessionCardsPayments = {
        ...response
      };
      if (this.sessionCardsPayments.cards.length == 0) {
        this.actionOnCards = true;
      }
    });
  }
  handleKeyPress(event) {
    this._commonService.numberOnly(event);
  }
  actualAmountChange(amount, value, index) {
    let formGroup = this.cashArray.at(index);
    if (!value) {
      formGroup.controls['difference'].setValue('');
      return;
    }
    formGroup.controls['difference'].setValue((+amount - +value).toFixed(3));
    let difference = Math.abs(+(+amount - +value).toFixed(3));
    formGroup.controls['differenceViewOnly'].setValue(difference);
    let isDifferencePositiveOrZero = value == amount ? 0 : value >= amount;
    formGroup.controls['isDifferencePositiveOrZero'].setValue(isDifferencePositiveOrZero);
  }
  removeMinusFromNegativeValue(value) {
    return Math.abs(value);
  }
  chooseTab(val) {
    this.searchText = '';
    this.pageNo = 1;
    //if (this.cashDepositTypeId !== 8002) {
    //  if (this.cashForm.invalid) {
    //    this.cashForm.markAllAsTouched();
    //    return;
    //  }
    //}
    this.selected = val;
    if (val == 2) this.getSessionCheques();else if (val == 3) this.getSessionCardsPayments();
  }
  handleLoadData(event) {
    this.actionOnCheque = event?.action;
    this.pageNo = event.page;
    this.sort = event.sort;
    this.searchText = event.chequeNumber;
    this.getSessionCheques();
  }
  handleCardsLoad(event) {
    this.actionOnCards = event?.action;
    this.pageNo = event?.page;
    this.sort = event?.sort;
    this.searchText = event?.customer || '';
    this.getSessionCardsPayments();
  }
}
SettelComponent.ɵfac = function SettelComponent_Factory(t) {
  return new (t || SettelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_register_settlements_service_register_settlement_service__WEBPACK_IMPORTED_MODULE_2__.RegisterSettlementService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_4__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService));
};
SettelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: SettelComponent,
  selectors: [["app-settel"]],
  viewQuery: function SettelComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.successModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.depositedAttachment = _t.first);
    }
  },
  decls: 15,
  vars: 4,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-12"], ["class", "card-collect card-with-details", 4, "ngIf", "ngIfElse"], [1, "heading-text", "mb-3"], ["class", "row", 4, "ngIf", "ngIfElse"], ["successModal", ""], ["depositedAttachment", ""], ["confirmModal", ""], ["loadingData", ""], [1, "card-collect", "card-with-details"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "card-inner-heading"], [1, "d-flex", "flex-column"], [1, "m-0"], [1, "d-flex", "mt-4", "justify-content-between", "flex-wrap", "gap-3"], [1, "dark-gray"], [1, "light-gray"], [1, "tab-nav", "d-flex", "flex-wrap"], ["class", "btn", 3, "active", "click", 4, "ngIf"], [1, "btn", 3, "click"], [1, "d-flex", "gap-3", "align-items-center"], [1, "imag"], ["src", "assets/images/card.png", "alt", ""], [1, "info"], ["src", "assets/images/bt.svg", "alt", ""], ["src", "assets/images/bp.svg", "alt", ""], [1, "tab-content"], [1, "tab-item", 3, "hidden"], [1, "card-collect", "py-2"], [1, "col-sm-4"], [1, "total-card"], [1, "total"], [1, "card-collect"], [1, "top-details"], [3, "formGroup"], ["formArrayName", "cashArray"], ["class", "mb-5", 4, "ngFor", "ngForOf"], ["class", "tab-item", 4, "ngIf"], [1, "col-md-12", "mt-3"], [1, "col-md-8"], [1, "form-group", "mb-3"], ["disabled", "", "rows", "4", "minlength", "200", "maxlength", "200", 1, "form-control", 3, "value"], ["rows", "4", "maxlength", "200", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "success-message-alert", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "btns-group", "m-0", "my-1"], ["routerLink", "/register-settlements", 1, "btn", "btn-cancel"], ["type", "button", "class", "btn btn-save", 3, "disabled", "click", 4, "ngIf"], ["src", "assets/images/wallet.png", "alt", ""], ["src", "assets/images/cheque.png", "alt", ""], [1, "mb-5"], [3, "formGroupName"], [1, "col-sm-12"], [1, "curncy"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-10", "col-lg-8"], [1, "col-sm-6"], [1, "actual-amount"], ["type", "number", "formControlName", "registerdAmount", 1, "form-control"], [1, "difference-amount", 3, "ngClass"], ["type", "number", "formControlName", "actualAmount", "appDecimalNumber", "", 1, "form-control", 3, "input"], [4, "ngIf"], [1, "col-sm-6", "my-3"], [1, "fw-500", "m-0", "mb-3"], ["class", "blue-clr cursor-pointer m-0 d-inlne-block", 3, "click", 4, "ngIf"], ["class", "d-inlne-block primary-clr", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "blue-clr", "cursor-pointer", "m-0", "d-inlne-block", 3, "click"], [1, "d-inlne-block", "primary-clr"], [1, "tab-item"], [3, "response", "loadData", 4, "ngIf"], [3, "response", "loadData"], [3, "response", "loadCardData", 4, "ngIf"], [3, "response", "loadCardData"], [3, "isSettle"], [1, "success-message-alert"], [1, "alert", "alert-danger"], ["type", "button", 1, "btn", "btn-save", 3, "disabled", "click"], [1, "modal-body"], [1, "d-flex", "flex-column", "align-items-center", "gap-2", "text-center", "p-3"], [1, "green-clr", "fa-regular", "fa-circle-check", "fa-2x"], [1, "btns-group", "m-0", "d-block"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "p-3"], ["class", "file-item mb-2 d-flex justify-content-between align-items-center py-2 px-3", 4, "ngFor", "ngForOf"], [1, "btns-group", "m-0", "gap-2"], [1, "file-item", "mb-2", "d-flex", "justify-content-between", "align-items-center", "py-2", "px-3"], [1, "fw-600", "green-clr"], [1, "d-flex", "gap-2", "align-items-center"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], [1, "m-0", "mb-2"]],
  template: function SettelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, SettelComponent_div_3_Template, 37, 9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Register Amounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, SettelComponent_div_6_Template, 85, 37, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, SettelComponent_ng_template_7_Template, 10, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, SettelComponent_ng_template_9_Template, 8, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, SettelComponent_ng_template_11_Template, 12, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, SettelComponent_ng_template_13_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.settlementDetails == null ? null : ctx.settlementDetails.register)("ngIfElse", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.settlementDetails == null ? null : ctx.settlementDetails.registerAmounts)("ngIfElse", _r8);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__.LoadingComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_8__.DecimalNumberDirective, _components_session_card_payments_session_card_payments_component__WEBPACK_IMPORTED_MODULE_9__.SessionCardPaymentsComponent, _components_session_cheques_session_cheques_component__WEBPACK_IMPORTED_MODULE_10__.SessionChequesComponent, _components_session_bank_transfer_session_bank_transfer_component__WEBPACK_IMPORTED_MODULE_11__.SessionBankTransferComponent, _components_session_bank_pledges_session_bank_pledges_component__WEBPACK_IMPORTED_MODULE_12__.SessionBankPledgesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: [".tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n  margin-bottom: 30px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ced5dd;\n  border-radius: 10px;\n  padding: 15px 20px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .imag[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background: #f8f8f8;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .imag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 3px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0px;\n  padding: 3px;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n.actual-amount[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 130px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #f44336;\n  font-size: 14px;\n  padding: 5px;\n  display: block;\n  font-weight: 500;\n}\n\n.nosession[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 30px;\n}\n\n.difference-amount[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  font-size: 14px;\n  font-weight: 600;\n  display: block;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  height: 38px;\n  min-width: 130px;\n  padding: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL3JlZ2lzdGVyLXNldHRsZW1lbnRzL3NldHRlbC9zZXR0ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsNENBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUROO0FBR007RUFDRSxXQUFBO0FBRFI7QUFLSTtFQUNFLGlCQUFBO0FBSE47QUFLTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSFI7QUFNTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSlI7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0U7RUFDRSxZQUFBO0FBTko7O0FBVUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFTQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYi1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgLmJ0bi5hY3RpdmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjVweCByZ2IoMCAwIDAgLyAxMCUpO1xuICB9XG5cbiAgLmJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDVkZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcblxuICAgIC5pbWFnIHtcbiAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgIH1cblxuICAgICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uZmlsZS1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJlYjkzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFjdHVhbC1hbW91bnQge1xuICAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm5vc2Vzc2lvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAzMHB4O1xufVxuLmRpZmZlcmVuY2UtYW1vdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDM4cHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
//# sourceMappingURL=src_app_dashboard_modules_main-fund_register-settlements_register-settlements_module_ts.js.map