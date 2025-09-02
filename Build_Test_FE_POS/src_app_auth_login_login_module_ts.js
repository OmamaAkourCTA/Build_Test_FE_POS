"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_auth_login_login_module_ts"],{

/***/ 14272:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_log_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/log.guard */ 21991);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 78146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
  canActivate: [_services_log_guard__WEBPACK_IMPORTED_MODULE_0__.LogGuard]
}];
class LoginRoutingModule {}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
  return new (t || LoginRoutingModule)();
};
LoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LoginRoutingModule
});
LoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 78146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2898);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_services_utility_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/utility-service.service */ 48766);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/httpservice.service */ 79345);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/header.service */ 36690);
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-connection-service */ 84083);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/general.service */ 21864);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
















function LoginComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please wait.................loading your permissions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please Enter Email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginComponent_div_17_span_1_Template, 3, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.itemForm.controls["identity"].errors);
  }
}
function LoginComponent_fa_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_fa_icon_24_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r2.faEye);
  }
}
function LoginComponent_fa_icon_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_fa_icon_25_Template_fa_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r3.faEyeSlash);
  }
}
function LoginComponent_div_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please Enter Password .");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginComponent_div_26_span_1_Template, 3, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.itemForm.controls["password"].errors);
  }
}
function LoginComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r5.errorMessage, " ");
  }
}
function LoginComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function LoginComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(toastr, utlilitySerivce, spinner, router, formBuilder, httpserviceService, headerService, connectionService, _generalService, _commonService, _activeRoute) {
    this.toastr = toastr;
    this.utlilitySerivce = utlilitySerivce;
    this.spinner = spinner;
    this.router = router;
    this.formBuilder = formBuilder;
    this.httpserviceService = httpserviceService;
    this.headerService = headerService;
    this.connectionService = connectionService;
    this._generalService = _generalService;
    this._commonService = _commonService;
    this._activeRoute = _activeRoute;
    this.formModel = {};
    this.faUser = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faUser;
    this.faEye = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEye;
    this.faEyeSlash = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEyeSlash;
    this.IsshowPassword = false;
    this.userInfo = {};
    this.rememberMe = false;
    this.isRemembered = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.status = 'ONLINE';
    this.isConnected = true;
    this.token = '';
    this.connectionService.monitor().subscribe(isConnected => {
      console.log(isConnected);
      this.isConnected = isConnected.hasNetworkConnection;
      if (this.isConnected) {
        this.status = 'ONLINE';
        console.log(this.status);
      } else {
        this.status = 'OFFLINE';
        console.log(this.status);
      }
    });
    this.itemForm = this.formBuilder.group({
      identity: [this.formModel.identity, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      password: [this.formModel.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      rememberMe: [this.formModel.rememberMe]
    });
  }
  ngOnInit() {
    this.checkRememberMe();
    // this.subscription.add(
    //   this.connectionService.monitor(options).pipe(
    //     tap((newState: ConnectionState) => {
    //       this.currentState = newState;
    //       if (this.currentState.hasNetworkConnection) {
    //         this.status = 'ONLINE';
    //       } else {
    //         this.status = 'OFFLINE';
    //       }
    //     })
    //   ).subscribe()
    // );
    this.getToken();
  }
  getToken() {
    this._activeRoute.queryParams.subscribe(x => {
      debugger;
      this.token = x['token'];
      let redirectUrl = x['redirectUrl'];
      if (this.token) {
        localStorage.setItem('redirectUrl', redirectUrl);
        let data = this._commonService.decodeToken(this.token);
        sessionStorage.setItem('token', this.token);
        console.log(data);
        if (data?.Register2) {
          this.register2 = JSON.parse(data.Register2);
        }
        this.getUserDetails(+data['nameid']);
        this.getUserPermissions(+data['nameid']);
      }
    });
  }
  getUserPermissions(userId) {
    this._generalService.getUserPermissions(userId).subscribe(response => {
      localStorage.setItem('permissions', JSON.stringify(response.data));
    });
  }
  getUserDetails(userId) {
    this._generalService.GetUserDetails(userId).subscribe(response => {
      this.userData = response.data;
      console.log(this.userData);
      localStorage.setItem('fullName', this.userData.fullName);
      localStorage.setItem('city', this.userData.city);
      localStorage.setItem('userid', this.userData.userId);
      localStorage.setItem('role', JSON.stringify(this.userData.role));
      localStorage.setItem('branch', JSON.stringify(this.userData.branch));
      // this is new flow so in previous flow register data was saved in localstorage in this ways so that's why saving in that way.
      if (this.register2) {
        let register = {
          registerObj: {
            id: this.register2.Id,
            registersName: this.register2.RegistersName,
            registeBranch: {
              branchId: this.register2.RegisteBranch.BranchId,
              branchName: this.register2.RegisteBranch.BranchName,
              city: this.register2.RegisteBranch.City
            }
          }
        };
        localStorage.setItem('register', JSON.stringify(register));
      }
      //localStorage.setItem('permissions', JSON.stringify(this.userData.permissions));
      this.getUserMenu();
    });
  }
  getUserMenu() {
    this._generalService.GetUserMenuNew(17001).subscribe(response => {
      let userMenu = response?.data?.menu[0]?.items;
      if (userMenu.length) {
        for (let menu of userMenu) {
          if (menu?.canClick) {
            this._commonService.NavigateToRoute(menu?.url);
            break;
          }
        }
        let filterCanClick = userMenu.filter(x => x.canClick);
        if (filterCanClick.length == 0) {
          this._commonService.NavigateToRoute('no-menu');
        }
      } else {
        this._commonService.NavigateToRoute('no-menu');
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  checkRememberMe() {
    var isRemember = localStorage.getItem('rememberMe');
    if (isRemember !== null) {
      this.itemForm.controls['identity'].setValue(localStorage.getItem('identity'));
      this.itemForm.controls['password'].setValue(localStorage.getItem('password'));
      this.formModel.identity = localStorage.getItem('identity');
      this.formModel.password = localStorage.getItem('password');
      this.formModel.rememberMe = true;
      this.rememberMe = true;
      this.isRemembered = true;
    }
  }
  showPassword() {
    this.IsshowPassword = this.IsshowPassword == false ? true : false;
  }
  onLogin() {
    if (this.itemForm.valid) {
      if (this.status == 'ONLINE') {
        this.userInfo = {};
        this.isLoading = true;
        this.httpserviceService.login(this.itemForm.value).subscribe(response => {
          this.userInfo = response;
          this.userData = response.data;
          console.log(this.userData);
          if (this.userData) {
            this.isLoading = false;
            localStorage.setItem('fullName', this.userData.fullName);
            localStorage.setItem('city', this.userData.city);
            localStorage.setItem('userid', this.userData.id);
            localStorage.setItem('role', JSON.stringify(this.userData.role));
            localStorage.setItem('branch', JSON.stringify(this.userData.branch));
            localStorage.setItem('register', JSON.stringify(this.userData.register));
            localStorage.setItem('permissions', JSON.stringify(this.userData.permissions));
            // localStorage.setItem('rememberMe', this.rememberMe.toString());
            // localStorage.setItem('rememberMe', this.rememberMe.toString());
            // localStorage.setItem('rememberMe', this.rememberMe.toString());
            if (this.rememberMe == true) {
              localStorage.setItem('identity', this.itemForm.controls['identity'].value);
              localStorage.setItem('password', this.itemForm.controls['password'].value);
              localStorage.setItem('rememberMe', this.rememberMe.toString());
              localStorage.setItem('token', this.userData.token);
            } else {
              // sessionStorage.setItem('fullName', this.userInfo.data.fullName);
              // sessionStorage.setItem('id', this.userInfo.data.id);
              sessionStorage.setItem('token', this.userData.token);
              // localStorage.removeItem('identity');
              // localStorage.removeItem('password');
              // localStorage.removeItem('rememberMe');
            }

            if (this.userData?.role?.roleId == 1) {
              this.getUserMenu();
              //this.router.navigateByUrl('/opening-register');
            } else if (this.userData?.role?.roleId == 36) {
              this.getUserMenu();
              //this.router.navigateByUrl('/branches');
            } else if (this.userData?.role?.roleId == 37) {
              this.getUserMenu();
              //this.router.navigateByUrl('/');
            } else if (this.userData?.role?.roleId == 38) {
              this.getUserMenu();
              //this.router.navigateByUrl('/dashboard');
            }
          } else {
            var response = this.userInfo.Errors[0];
            this.errorMessage = response.ErrorMessageEn;
            this.isLoading = false;
          }
        }, error => {
          this.isLoading = false;
          this.spinner.hide(), this.errorMessage = error.error.errors[0].ErrorMessageEn;
        });
      } else {
        this.errorMessage = 'Please check your connection, Network error';
      }
    } else {
      this.itemForm.markAllAsTouched();
    }
  }
  rememberMeClick($event) {
    alert($event);
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_utility_service_service__WEBPACK_IMPORTED_MODULE_0__.UtilityServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__.HttpserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_connection_service__WEBPACK_IMPORTED_MODULE_12__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 41,
  vars: 13,
  consts: [[1, "page-login", "d-flex", "align-items-center", "justify-content-center"], [1, "d-block", "fa-solid", "fa-circle-notch", "fa-spin", "primary-clr", "me-4", 2, "font-size", "80px"], ["class", "d-flex flex-column gap-2", 4, "ngIf"], [1, "container-fluid", "px-0", "mx-0", "d-none"], [1, "row", "px-0", "mx-0"], [1, "col-md-6", "col-sm-12", "px-0", "mx-0"], [1, "card-login"], ["src", "assets/images/markazia.png", "alt", "logo"], [1, "log-text"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "identity", "placeholder", "example@markazia.jo", 1, "form-control", 3, "ngModel"], ["class", "ng-dirty", 4, "ngIf"], ["formControlName", "password", 1, "form-control", 3, "type", "ngModel"], [1, "passicon"], ["class", "custom-search-botton", 3, "icon", "click", 4, "ngIf"], [1, "form-group", "rememberme"], [1, "form-check"], ["type", "checkbox", "formControlName", "rememberMe", "name", "rememberbtn", "id", "rememberMe", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "rememberMe", 1, "form-check-label"], ["routerLink", "/forgot-password", 1, "forgetpass"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["type", "submit", "class", "btn btn-login", 4, "ngIf"], ["type", "button", "class", "btn btn-login", 4, "ngIf"], [1, "bg-image"], ["src", "assets/images/loginLogo.png", "alt", ""], [1, "d-flex", "flex-column", "gap-2"], [1, "fw-600", "m-0"], [1, "ng-dirty"], [4, "ngIf"], [1, "error"], [1, "custom-search-botton", 3, "icon", "click"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-login"], ["type", "button", 1, "btn", "btn-login"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 3, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Please fill your detail to access your account.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10)(19, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, LoginComponent_fa_icon_24_Template, 1, 1, "fa-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, LoginComponent_fa_icon_25_Template, 1, 1, "fa-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.rememberMe = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Remember Me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Forget your password ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, LoginComponent_div_34_Template, 2, 1, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, LoginComponent_button_36_Template, 2, 0, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, LoginComponent_button_37_Template, 2, 0, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 5)(39, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.token);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.itemForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.formModel.identity);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.itemForm.controls["identity"].invalid && (ctx.itemForm.controls["identity"].dirty || ctx.itemForm.controls["identity"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.IsshowPassword ? "text" : "password")("ngModel", ctx.formModel.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.IsshowPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.IsshowPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.itemForm.controls["password"].invalid && (ctx.itemForm.controls["password"].dirty || ctx.itemForm.controls["password"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.rememberMe);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 28990:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 14272);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 78146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-connection-service */ 84083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);







class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ng_connection_service__WEBPACK_IMPORTED_MODULE_6__.ConnectionServiceModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ng_connection_service__WEBPACK_IMPORTED_MODULE_6__.ConnectionServiceModule]
  });
})();

/***/ }),

/***/ 21991:
/*!***************************************!*\
  !*** ./src/app/services/log.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogGuard": () => (/* binding */ LogGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.service */ 69082);



class LogGuard {
  constructor(router, sharedService) {
    this.router = router;
    this.sharedService = sharedService;
    this.isLog = false;
    console.log(this.sharedService.getToken ? true : false);
    this.isLog = this.sharedService.getToken ? true : false;
  }
  canActivate(route, state) {
    // return true;
    if (this.sharedService.getToken) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
LogGuard.ɵfac = function LogGuard_Factory(t) {
  return new (t || LogGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
LogGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LogGuard,
  factory: LogGuard.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map