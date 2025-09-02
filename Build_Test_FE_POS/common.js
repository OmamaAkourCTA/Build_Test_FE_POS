"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["common"],{

/***/ 16518:
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shared.service */ 69082);



class AuthService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  ResetPassword(body) {
    return this.http.post(this.apiUrl + `User/ResetPassword`, body);
  }
  TestEmailLinkExpiration(body, userId) {
    return this.http.post(this.apiUrl + `User/TestEmailLinkExpiration?userId=${userId}`, body);
  }
  ForgetPassword(body, email) {
    return this.http.post(this.apiUrl + `User/SendResetPasswordLink?email=${email}`, body);
  }
  GetUserDetails(id) {
    return this.http.get(this.apiUrl + `User/GetUSERDetails?userId=${id}`
    // this.sharedService.getHeaders()
    );
  }
}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9687:
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/branches/modal-confirm/modal-confirm.component.ts ***!
  \*******************************************************************************************/
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
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: #75b878;\n  margin-bottom: 30px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  width: 120px;\n  border-radius: 30px;\n  display: block;\n  color: #000;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vYnJhbmNoZXMvbW9kYWwtY29uZmlybS9tb2RhbC1jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVGO0FBREU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbiAgaSB7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICAgIGNvbG9yOiAjNzViODc4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5tb2RhbC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLmJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 82226:
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/branches/modal-done/modal-done.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDoneComponent": () => (/* binding */ ModalDoneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function ModalDoneComponent_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your new branch is added successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ModalDoneComponent_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your branch updated successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ModalDoneComponent {
  constructor(activeModal, modalService, router) {
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.router = router;
  }
  ngOnInit() {
    console.log(this.name);
    // console.log(this.name = 'edit');
    if (this.name == 'edit') {
      setTimeout(() => {
        this.modalService.dismissAll();
      }, 3000);
    } else {
      setTimeout(() => {
        this.router.navigateByUrl('/branches');
        this.modalService.dismissAll();
      }, 5000);
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
  decls: 5,
  vars: 2,
  consts: [[1, "modal-body"], [1, "message"], [1, "fa-regular", "fa-circle-check"], [4, "ngIf"]],
  template: function ModalDoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalDoneComponent_h3_3_Template, 2, 0, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalDoneComponent_h3_4_Template, 2, 0, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name != "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "edit");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 10px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 90px;\n  color: #75b878;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvYWRtaW4vYnJhbmNoZXMvbW9kYWwtZG9uZS9tb2RhbC1kb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG4gIGl7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICAgIGNvbG9yOiAjNzViODc4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 30624:
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/modules/admin/registers/register-setup.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterSetupService": () => (/* binding */ RegisterSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared.service */ 69082);



class RegisterSetupService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
    this.apiUrlAdmin = this.sharedService.getUrl2;
  }
  getBranches(params) {
    let qparams = new URLSearchParams(params).toString();
    return this.http.get(this.apiUrl + `Branches/GetBranches?` + qparams, this.sharedService.getHeaders());
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
  getUsers(rolid) {
    return this.http.get(this.apiUrl + `User/GetUsers?sort=2&Status=2001&Invitation=2004&PageSize=1000&RoleId=${rolid}`, this.sharedService.getHeaders());
  }
  getUsersall() {
    return this.http.get(this.apiUrl + `User/GetUsers?sort=2&Status=2001&PageSize=1000`, this.sharedService.getHeaders());
  }
  // this.apiUrl + `User/GetUsers?sort=2&Status=2001&RoleId=${roleId}`,
  getRoles() {
    return this.http.get(this.apiUrl + 'Roles/GetRoles?Status=2001&Sort=2', this.sharedService.getHeaders());
  }
  getLocations() {
    return this.http.get(this.apiUrl + 'Lookups/GetLocations', this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + 'Lookups/GetLookups?lookupTypeId=' + id, this.sharedService.getHeaders());
  }
  addRegister(info) {
    return this.http.post(this.apiUrl + 'Register/AddRegister', info, this.sharedService.getHeaders());
  }
  UpdateRegister(info) {
    return this.http.post(this.apiUrl + 'Register/UpdateRegister', info, this.sharedService.getHeaders());
  }
  GetRegisterDetails(id) {
    return this.http.get(this.apiUrl + `Register/GetRegisterDetails?Id=${id}`, this.sharedService.getHeaders());
  }
  getRegisterDetailsV2(id) {
    return this.http.get(this.apiUrlAdmin + `Register/GetRegisterDetailsV2?Id=${id}`, this.sharedService.getHeaders());
  }
  getDefaultPermissions() {
    return this.http.get(this.apiUrl + `Permissions/GetDefaultPermissions?Status=2001`, this.sharedService.getHeaders());
  }
  GetRoleDetails(id) {
    return this.http.get(this.apiUrl + `Roles/GetRoleDetails?roleId=${id}`, this.sharedService.getHeaders());
  }
}
RegisterSetupService.ɵfac = function RegisterSetupService_Factory(t) {
  return new (t || RegisterSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
RegisterSetupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RegisterSetupService,
  factory: RegisterSetupService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 72200:
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/allocation/allocation/view-image/view-image.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewImageComponent": () => (/* binding */ ViewImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);





function ViewImageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageUploadedView == null ? null : ctx_r0.imageUploadedView.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ViewImageComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "click to open pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.viewPdf(ctx_r2.imageUploadedView == null ? null : ctx_r2.imageUploadedView.file), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class ViewImageComponent {
  constructor(activeModal, modalService, router, sanitizer) {
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.router = router;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    console.log(this.imageUploadedView);
    //if (this.imageUploadedView !== 'application/pdf') {
    //  this.imagePath = this.imageUploadedView.base64;
    //}
  }

  viewPdf(file) {
    let src = URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
}
ViewImageComponent.ɵfac = function ViewImageComponent_Factory(t) {
  return new (t || ViewImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
};
ViewImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewImageComponent,
  selectors: [["app-view-image"]],
  inputs: {
    expenseDetails: "expenseDetails",
    imageUploadedView: "imageUploadedView"
  },
  decls: 7,
  vars: 2,
  consts: [[1, "modal-body", "p-2"], [4, "ngIf", "ngIfElse"], ["pdf", ""], [1, "btns-group", "my-2", "mx-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "w-100", 3, "src"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center"], ["height", "80", "width", "80", "src", "assets/images/pdf.png", "alt", ""], ["target", "_blank", 1, "text-decoration-none", "text-capitalize", 3, "href"]],
  template: function ViewImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewImageComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewImageComponent_ng_template_2_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewImageComponent_Template_button_click_5_listener() {
        return ctx.activeModal.close("Close click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.imageUploadedView == null ? null : ctx.imageUploadedView.fileType) == "image/png" || (ctx.imageUploadedView == null ? null : ctx.imageUploadedView.fileType) == "image/jpeg" || (ctx.imageUploadedView == null ? null : ctx.imageUploadedView.fileType) == "image/jpg")("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".imagepath[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.imagepath-no[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n\n.btns-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.btns-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  color: #dc3545;\n  border-radius: 10px;\n  padding: 12px 35px;\n  font-weight: 600;\n}\n\n.card-pdf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.card-pdf[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 600;\n  display: block;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL2FsbG9jYXRpb24vYWxsb2NhdGlvbi92aWV3LWltYWdlL3ZpZXctaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0FBQUo7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFHRTtFQUNFLFlBQUE7QUFBSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VwYXRoIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmltYWdlcGF0aC1ubyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5idG5zLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgY29sb3I6ICNkYzM1NDU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4uY2FyZC1wZGYge1xuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1618:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/register-settlements/register-settlements-service/register-settlement.service.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterSettlementService": () => (/* binding */ RegisterSettlementService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class RegisterSettlementService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  forceCloseRegisterTestSignalR(data) {
    return this.http.post(this.apiUrl + 'Sessions/ForceCloseRegisterTestSignalR', data, this.sharedService.getHeaders());
  }
  getSessionBankTransfer(params) {
    let endPoint = `SessionsSettlements/GetSessionBankTransfer` + params;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  onholdRegisterSession(data) {
    return this.http.post(this.apiUrl + 'Cashier/OnholdRegisterSession', data, this.sharedService.getHeaders());
  }
  addSettledChequesImages(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/AddSettledChequesImages', data, this.sharedService.getHeaders());
  }
  editCollectionBankTransfer(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/EditCollectionBankTransfer', data, this.sharedService.getHeaders());
  }
  actionsOnBankTransfer(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/ActionsOnBankTransfer', data, this.sharedService.getHeaders());
  }
  reverseActionsOnBankTransfer(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/ReverseActionsOnBankTransfer', data, this.sharedService.getHeaders());
  }
  getSessionBankPledge(params) {
    let endPoint = `SessionsSettlements/GetSessionBankPledge` + params;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  editCollectionBankPledge(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/EditCollectionBankPledge', data, this.sharedService.getHeaders());
  }
  actionsOnBankPledge(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/AtionsOnBankPledge', data, this.sharedService.getHeaders());
  }
  reverseActionsOnBankPledge(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/ReverseActionsOnBankPledge', data, this.sharedService.getHeaders());
  }
  getAllSessions(params) {
    let endPoint = `Sessions/GetAllSessions` + params;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getSessionDepositedCheques(params) {
    let endPoint = `SessionsSettlements/GetSessionDepositedCheques` + params;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getStatusList(id) {
    return this.http.get(this.apiUrl + `Lookups/GetLookups?lookupTypeId=${id}`, this.sharedService.getHeaders());
  }
  forceCloseRegiter(data) {
    return this.http.post(this.apiUrl + 'Sessions/ForceCloseRegister', data, this.sharedService.getHeaders());
  }
  forceCloseSession(data) {
    return this.http.post(this.apiUrl + 'Sessions/ForceCloseSession', data, this.sharedService.getHeaders());
  }
  updateRegister(registerId) {
    return this.http.post(this.apiUrl + `SessionsSettlements/DeactivateRegister?registerId=${registerId}`, this.sharedService.getHeaders());
  }
  actionOnCheque(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/ActionsOnCheques', data, this.sharedService.getHeaders());
  }
  reverseActionOnCheque(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/ReverseActionsOnCheques', data, this.sharedService.getHeaders());
  }
  editCollectionCheuqe(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/EditCollectionCheuqe', data, this.sharedService.getHeaders());
  }
  actionsOnCardGroup(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/ActionsOnCardGroup', data, this.sharedService.getHeaders());
  }
  actionOnCard(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/ActionsOnCard', data, this.sharedService.getHeaders());
  }
  reverseActionOnCard(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/ReverseActionsOnCard', data, this.sharedService.getHeaders());
  }
  editCollectionCard(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/EditCollectionByCards', data, this.sharedService.getHeaders());
  }
  getSessionDetailSettlement(sessionId) {
    return this.http.get(this.apiUrl + `SessionsSettlements/GetSessionDetailsforSettlement?sessionId=${sessionId}`, this.sharedService.getHeaders());
  }
  settleRegister(data) {
    return this.http.post(this.apiUrl + 'SessionsSettlements/CompleteSettleSession', data, this.sharedService.getHeaders());
  }
  getSettleRegisterDetails(registerId) {
    return this.http.get(this.apiUrl + `SessionsSettlements/ViewRegisterDetails?registerId=${registerId}`, this.sharedService.getHeaders());
  }
  getRegisterDetails1(registerId) {
    return this.http.get(this.apiUrl + `SessionsSettlements/ViewRegisterDetailsPart1?registerId=${registerId}`, this.sharedService.getHeaders());
  }
  getRegisterDetails2(registerId) {
    return this.http.get(this.apiUrl + `SessionsSettlements/ViewRegisterDetailsPart2?registerId=${registerId}`, this.sharedService.getHeaders());
  }
  getRegisterDetails3(registerId) {
    return this.http.get(this.apiUrl + `SessionsSettlements/ViewRegisterDetailsPart3?registerId=${registerId}`, this.sharedService.getHeaders());
  }
  getRegisterDetails4(registerId) {
    return this.http.get(this.apiUrl + `SessionsSettlements/ViewRegisterDetailsPart4?registerId=${registerId}`, this.sharedService.getHeaders());
  }
  getRegisterPaymentTypes(registerId) {
    return this.http.get(this.apiUrl + `Register/GetRegisterPaymentTypes?registerId=${registerId}`, this.sharedService.getHeaders());
  }
  getSessionCheques(sessionId, pageNo, searchText, sort) {
    return this.http.get(this.apiUrl + `SessionsSettlements/GetSessionCheques?SessionId=${sessionId}&search=${searchText}&pageNo=${pageNo - 1}&pageSize=6&sort=${sort || 1}`, this.sharedService.getHeaders());
  }
  getSessionCardsPayments(sessionId, pageNo, searchText, sort) {
    return this.http.get(this.apiUrl + `SessionsSettlements/GetSessionCardsPayments?SessionId=${sessionId}&search=${searchText}&pageNo=${pageNo - 1}&pageSize=6&sort=${sort || 1}`, this.sharedService.getHeaders());
  }
  getSessionAllCardsPayments(sessionId) {
    return this.http.get(this.apiUrl + `SessionsSettlements/GetSessionCardsPayments?SessionId=${sessionId}&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getRegisterDetails(registerId) {
    return this.http.get(this.apiUrl + `Register/GetRegisterDetails?Id=${registerId}`, this.sharedService.getHeaders());
  }
  getBranches() {
    return this.http.get(this.apiUrl + `Branches/GetBranches?sort=1&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getLookupById(lookupTypeId, parentId, pageNo, pageSize) {
    let params = `Lookups/GetLookups?lookupTypeId=${lookupTypeId}`;
    if (parentId) {
      params += `&parentId=${parentId}`;
    }
    if (pageNo && pageSize) {
      params += `&pageNo=${pageNo}&pageSize=${pageSize}`;
    }
    return this.http.get(this.apiUrl + params, this.sharedService.getHeaders());
  }
  getEmployees() {
    return this.http.get(this.apiUrl + `User/GetUsers?pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
}
RegisterSettlementService.ɵfac = function RegisterSettlementService_Factory(t) {
  return new (t || RegisterSettlementService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
RegisterSettlementService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RegisterSettlementService,
  factory: RegisterSettlementService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 79541:
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/petty-cash-treasury/services/treasury.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreasuryService": () => (/* binding */ TreasuryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);





// import { Subject } from 'rxjs-compat';
class TreasuryService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
    this.pettyCashRequest$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  getAllocationOrders(params) {
    let endPoint = `AllocationOrdersService/GetAllocationOrders` + params;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getPNOrderCollectionDetails(id) {
    let endPoint = `Treasury/GetPNOrderCollectionDetails?CollectionId=${id}`;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getPNOrderCollectionNotes(params) {
    let endPoint = `Treasury/GetPNOrderCollectionNotes${params}`;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  approveMultipleExpense(params) {
    let endPoint = `PettyCash/ApproveExpense`;
    return this.http.post(this.apiUrl + endPoint, params, this.sharedService.getHeaders());
  }
  approverApproveExpense(params) {
    let endPoint = `PettyCash/ApproverApproveExpense`;
    return this.http.post(this.apiUrl + endPoint, params, this.sharedService.getHeaders());
  }
  requestReviseExpense(params) {
    let endPoint = `PettyCash/RequestReviseExpense`;
    return this.http.post(this.apiUrl + endPoint, params, this.sharedService.getHeaders());
  }
  rejectMultipleExpense(params) {
    let endPoint = `PettyCash/RejectExpense`;
    return this.http.post(this.apiUrl + endPoint, params, this.sharedService.getHeaders());
  }
  getAllocationOrderDetails(orderId) {
    let endPoint = `AllocationOrdersService/GetAllocationOrderDetailsNew?orderId=${orderId}`;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getUsers(params) {
    let endPoint = `User/GetUsers` + params;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  GetExpenses(searchText, sort, pageNo) {
    return this.http.get(this.apiUrl + `Expense/GetExpenses?Search=${searchText}&Sort=${sort}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  AddExpense(expense) {
    return this.http.post(this.apiUrl + 'Expense/AddExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  EditExpense(expense) {
    return this.http.post(this.apiUrl + 'Expense/EditExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  GetExpenseDetails(id) {
    return this.http.get(this.apiUrl + `Expense/GetExpenseDetails?expenseRecordId=${id}`, this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + 'Lookups/GetLookups?lookupTypeId=' + id, this.sharedService.getHeaders());
  }
  //==============================================
  GetPettyCashExpenses(searchText, sort, status, pageNo, registerId) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpenses?Search=${searchText}&Status=${status}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&RegisterId=${registerId}`, this.sharedService.getHeaders());
  }
  getPettyCashPendingManagerApprovalExpenses(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpenses${params}`, this.sharedService.getHeaders());
  }
  AddPettyCashExpense(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/AddExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  EditPettyCashExpense(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/EditExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
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
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettycashrequest?Search=${searchText}&Status=${status}&Sort=${sort}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  GetRegisterPettycashrequestDetails(id) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettycashrequestDetails?pettyCashRequestId=${id}`, this.sharedService.getHeaders());
  }
  GetRegistersPettyCashLimits(searchText, id, pageNo) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegistersPettyCashLimits?Search=${searchText}&Sort=${id}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  EditPettyCashLimit(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/EditPettyCashLimit', expense, this.sharedService.getHeaders());
  }
  GetExpensesCategories(id, pageNo) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpensesCategories?Sort=${id}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  AddExpenseCategory(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/AddExpenseCategory', expense, this.sharedService.getHeaders());
  }
  EditExpenseCategory(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/EditExpenseCategory', expense, this.sharedService.getHeaders());
  }
  DeleteExpenseCategory(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/DeleteExpenseCategory', expense, this.sharedService.getHeaders());
  }
  AddPettyCashRequest(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/AddPettyCashRequest', expense, this.sharedService.getHeaders());
  }
  ApprovePettyCashRequest(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/ApprovePettyCashRequest', expense, this.sharedService.getHeaders());
  }
  RejectPettyCashRequest(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/RejectPettyCashRequest', expense, this.sharedService.getHeaders());
  }
  ApproveExpense(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/ApproveExpense', expense, this.sharedService.getHeaders());
  }
  RejectExpense(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/RejectExpense', expense, this.sharedService.getHeaders());
  }
  // allocation api's
  getSageBanksAccounts() {
    return this.http.get(this.apiUrl + 'Mainfund/GetSageBanksAccounts', this.sharedService.getHeaders());
  }
  getMainFundCash() {
    return this.http.get(this.apiUrl + 'Mainfund/GetMainFundCash', this.sharedService.getHeaders());
  }
  sortSageBanksAccounts(sort, pageNo, pageSize) {
    return this.http.get(this.apiUrl + `Mainfund/GetSageBanksAccounts?sort${sort}&PageNo${pageNo}&PageSize${pageNo}`, this.sharedService.getHeaders());
  }
  createAllocationOrders(orderDetail) {
    return this.http.post(this.apiUrl + 'AllocationOrdersService/CreateAllocationOrders', orderDetail, this.sharedService.getHeaders());
  }
  getAll(orderDetail) {
    return this.http.post(this.apiUrl + 'AllocationOrdersService/CreateAllocationOrders', orderDetail, this.sharedService.getHeaders());
  }
}
TreasuryService.ɵfac = function TreasuryService_Factory(t) {
  return new (t || TreasuryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
TreasuryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TreasuryService,
  factory: TreasuryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 21864:
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralService": () => (/* binding */ GeneralService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.service */ 69082);



class GeneralService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
    this.apiUrl2 = this.sharedService.getUrl2; //admin
  }

  GetUserMenu(body) {
    return this.http.get(this.apiUrl + `Cashier/GetUserMenu`, this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + 'Lookups/GetLookups?lookupTypeId=' + id + '&pageSize=1000', this.sharedService.getHeaders());
  }
  getLookupsWithParams(params) {
    return this.http.get(this.apiUrl + `Lookups/GetLookups${params}`, this.sharedService.getHeaders());
  }
  getLookupsStatus() {
    return this.http.get(this.apiUrl + 'Lookups/GetLookups?lookupTypeId=2&parentId=1', this.sharedService.getHeaders());
  }
  GetUserDetails(id) {
    return this.http.get(this.apiUrl + `User/GetUSERDetails?userId=${id}`, this.sharedService.getHeaders());
  }
  getUserPermissions(userId, portalId = 17001) {
    return this.http.get(this.apiUrl + `User/GetUserPermissions?userId=${userId}&portalId=${portalId}`, this.sharedService.getHeaders());
  }
  getUserPortals() {
    return this.http.get(this.apiUrl + `User/GetUserPortals`, this.sharedService.getHeaders());
  }
  GetUserMenuNew(portalId) {
    return this.http.get(this.apiUrl + `User/GetUserMenuNew?portalId=${portalId}`, this.sharedService.getHeaders());
  }
  EditUser(body) {
    return this.http.post(this.apiUrl + `User/EditUser`, body, this.sharedService.getHeaders());
  }
  editUser(body) {
    return this.http.post(this.apiUrl2 + `/api/User/EditUser`, body, this.sharedService.getHeaders());
  }
}
GeneralService.ɵfac = function GeneralService_Factory(t) {
  return new (t || GeneralService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
GeneralService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GeneralService,
  factory: GeneralService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map