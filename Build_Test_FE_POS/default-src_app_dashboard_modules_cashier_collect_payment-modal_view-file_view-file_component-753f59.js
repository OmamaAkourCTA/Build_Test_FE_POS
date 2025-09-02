"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["default-src_app_dashboard_modules_cashier_collect_payment-modal_view-file_view-file_component-753f59"],{

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

/***/ 20320:
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/unsettled-session/services/unsettled-session.service.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsettledSessionService": () => (/* binding */ UnsettledSessionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class UnsettledSessionService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  getRegisterDirectCashDeposit(sageAccountID) {
    let endPoint = `AllocationOrdersService/GetRegisterDirectCashDeposit?sageAccountID=` + sageAccountID;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getCashDeposits(filters) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetDeposits${filters}`, this.sharedService.getHeaders());
  }
  getBanks() {
    return this.http.get(this.apiUrl + `BankAccount/GetBanks?pageNo=0&status=2001&pageSize=1000`, this.sharedService.getHeaders());
  }
  getDataFromLookUp(param) {
    return this.http.get(this.apiUrl + `Lookups/GetLookups${param}`, this.sharedService.getHeaders());
  }
  getBankAccounts(param) {
    return this.http.get(this.apiUrl + `BankAccount/GetBankAccounts${param}`, this.sharedService.getHeaders());
  }
  getRegisterDirectDepositCheques(sageAccountID, registerId) {
    let endPoint = `AllocationOrdersService/GetRegisterDirectDepositCheques?sageAccountID=${sageAccountID}&registerId=${registerId}`;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getRegisterUnsettledCheques(params) {
    let endPoint = `AllocationOrdersService/GetRegisterUnsettledCheques${params}`;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getRegisterUnsettledSessions(params) {
    let endPoint = `Sessions/GetRegisterUnsettledSessions` + params;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getRegisterUnsettledSessionsAmount(registerId) {
    let endPoint = `Sessions/GetRegisterUnsettledSessionsAmount?registerId=${registerId}`;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getSageBanksAccounts(registerId) {
    let endPoint = `Register/GetRegisterDetails?Id=${registerId}`;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  registerDirectDepositCheques(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/RegisterDirectDepositCheques`, params, this.sharedService.getHeaders());
  }
  registerDirectCashDeposite(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/RegisterDirectCashDeposite`, params, this.sharedService.getHeaders());
  }
  getUserCashier() {
    return this.http.get(this.apiUrl + `User/GetUsers?registerId=${this.sharedService.getRegister?.registerObj?.id}&RoleId=1&sort=1&Status=2001&Invitation=2004&PageNo=0&PageSize=1000`, this.sharedService.getHeaders());
  }
}
UnsettledSessionService.ɵfac = function UnsettledSessionService_Factory(t) {
  return new (t || UnsettledSessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
UnsettledSessionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UnsettledSessionService,
  factory: UnsettledSessionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 51445:
/*!*************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/allocation-services/allocation.service.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllocationService": () => (/* binding */ AllocationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared.service */ 69082);




class AllocationService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
    this.despositeAmount = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._viewDepositAmount = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._mainFundAlocationOrderItemDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  }
  /**
   * get last allocation orders
   */
  allocationOrdersService(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AllocationOrderDepositCash`, params, this.sharedService.getHeaders());
  }
  getRegisterDirectDeposits(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterDirectDeposits${params}`, this.sharedService.getHeaders());
  }
  getRegisterUnsettledCheques(param) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterUnsettledCheques${param}`, this.sharedService.getHeaders());
  }
  addRegisterDirectCashDepositToMarkaziaAccount(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AddRegisterDirectCashDepositToMarkaziaAccount`, params, this.sharedService.getHeaders());
  }
  addRegisterDirectChequesToMarkaziaAccount(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AddRegisterDirectChequesToMarkaziaAccount`, params, this.sharedService.getHeaders());
  }
  addCashDepositToMarkaziaAccount(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AddCashDepositToMarkaziaAccount`, params, this.sharedService.getHeaders());
  }
  addChequesToMarkaziaAccount(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AddChequesToMarkaziaAccount`, params, this.sharedService.getHeaders());
  }
  allocationOrderDepositCheque(params) {
    return this.http.post(this.apiUrl + `AllocationOrdersService/AllocationOrderDepositCheque`, params, this.sharedService.getHeaders());
  }
  getCashDepositDetails(depositId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetCashDepositDetails?depositeId=${depositId}`, this.sharedService.getHeaders());
  }
  getRegisterDirectCashDepositDetails(depositId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterDirectCashDepositDetails?depositeId=${depositId}`, this.sharedService.getHeaders());
  }
  getMainFundCash() {
    return this.http.get(this.apiUrl + `Mainfund/GetMainFundCash`, this.sharedService.getHeaders());
  }
  getRegisterDirectChequeDepositDetails(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterDirectChequeDepositDetails${params}`, this.sharedService.getHeaders());
  }
  getChequeDepositDetails(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetChequeDepositDetails${params}`, this.sharedService.getHeaders());
  }
  getDepositsById(id, type) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetDeposits?DepositeId=${id}&DepositeType=${type}`, this.sharedService.getHeaders());
  }
  getRegisterDirectDepositsNew(id, type) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterDirectDeposits?DepositeId=${id}&DepositeType=${type}`, this.sharedService.getHeaders());
  }
  getCurrencyList() {
    return this.http.get(this.apiUrl + `Lookups/GetLookups?lookupTypeId=9`, this.sharedService.getHeaders());
  }
  getMainFundSettledCheques(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetMainFundSettledCheques${params}`, this.sharedService.getHeaders());
  }
  getMainFundSettledChequesNew(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetMainFundSettledChequesNew${params}`, this.sharedService.getHeaders());
  }
  getLastAllocation() {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetLastAllocationOrder`, this.sharedService.getHeaders());
  }
  /**
   * get list of allocation order
   */
  getAllocation(pageNo, search, sort) {
    let queryString = `AllocationOrdersService/GetAllocationOrders?PageNo=${pageNo}&PageSize=6&sort=${sort}`;
    if (search) {
      queryString = queryString + `&search=${search}`;
    }
    return this.http.get(this.apiUrl + queryString, this.sharedService.getHeaders());
  }
  //veiw detail get allocation
  getViewDetailAllocation(orderId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetAllocationOrderDetails?OrderId=${orderId}`, this.sharedService.getHeaders());
  }
  getListOfSettledChequesForAllocationOrderDetails(params) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/ListOfSettledChequesForAllocationOrderDetails${params}`, this.sharedService.getHeaders());
  }
  viewCashAllocationOrderDetailsDeposits(orderId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/ViewCashAllocationOrderDetailsDeposits?allocationOrderDetailsId=${orderId}`, this.sharedService.getHeaders());
  }
  viewChequeAllocationOrderDetailsDeposits(orderId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/ViewChequeAllocationOrderDetailsDeposits?allocationOrderDetailsId=${orderId}`, this.sharedService.getHeaders());
  }
}
AllocationService.ɵfac = function AllocationService_Factory(t) {
  return new (t || AllocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
AllocationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AllocationService,
  factory: AllocationService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_modules_cashier_collect_payment-modal_view-file_view-file_component-753f59.js.map