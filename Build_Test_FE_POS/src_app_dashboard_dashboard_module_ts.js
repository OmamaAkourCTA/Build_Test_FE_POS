(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 50425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.guard */ 98063);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 77528);
/* harmony import */ var _no_menu_no_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-menu/no-menu.component */ 27112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
// { path: '', redirectTo: '/branches', pathMatch: 'full' },
// { path: '', redirectTo: '/opening-register', pathMatch: 'full' },
{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
  canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  children: [{
    path: 'branches',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_admin_branches_branches_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/branches/branches.module */ 74256)).then(m => m.BranchesModule)
  }, {
    path: 'main-fund',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_modules_cashier_collect_payment-modal_view-file_view-file_component-753f59"), __webpack_require__.e("default-src_app_dashboard_modules_main-fund_bank-deposits_view-cash-deposits-modal_view-cash--260ad0"), __webpack_require__.e("src_app_dashboard_modules_main-fund_bank-deposits_bank-deposits_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main-fund/bank-deposits/bank-deposits.module */ 70798)).then(m => m.BankDepositsModule)
  }, {
    path: 'branches',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_admin_branches_branches_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/branches/branches.module */ 74256)).then(m => m.BranchesModule)
  }, {
    path: 'registers',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_admin_registers_registers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/registers/registers.module */ 76949)).then(m => m.RegistersModule)
  }, {
    path: 'roles',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_modules_admin_roles_roles_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/roles/roles.module */ 12965)).then(m => m.RolesModule)
  }, {
    path: 'users',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_admin_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/users/users.module */ 91421)).then(m => m.UsersModule)
  }, {
    path: 'opening-register',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_modules_cashier_opening-register_opening-register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/opening-register/opening-register.module */ 58294)).then(m => m.OpeningRegisterModule)
  }, {
    path: 'close-register',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_cashier_close-register_close-register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/close-register/close-register.module */ 55860)).then(m => m.CloseRegisterModule)
  }, {
    path: 'collect',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_modules_cashier_collect_payment-modal_payment-modal_component_ts-sr-360cb3"), __webpack_require__.e("src_app_dashboard_modules_cashier_collect_collect_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/collect/collect.module */ 54471)).then(m => m.CollectModule)
  }, {
    path: 'petty-cash',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_modules_cashier_petty-cash_add-petty-cash_add-petty-cash_component_-17a39e"), __webpack_require__.e("src_app_dashboard_modules_cashier_petty-cash_petty-cash_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/petty-cash/petty-cash.module */ 98982)).then(m => m.PettyCashModule)
  }, {
    path: 'pettycash-approvals',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_cashier_petty-cash-approval_petty-cash-approval_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/petty-cash-approval/petty-cash-approval.module */ 95909)).then(m => m.PettyCashApprovalModule)
  }, {
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chartjs-plugin-datalabels_dist_chartjs-plugin-datalabels_esm_js"), __webpack_require__.e("src_app_dashboard_modules_cashier_petty-cash_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/petty-cash/dashboard/dashboard.module */ 66947)).then(m => m.DashboardModule)
  }, {
    path: 'unsettled-session',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_modules_cashier_collect_payment-modal_view-file_view-file_component-753f59"), __webpack_require__.e("default-src_app_dashboard_modules_main-fund_bank-deposits_view-cash-deposits-modal_view-cash--260ad0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_cashier_unsettled-session_unsettled-session_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/unsettled-session/unsettled-session.module */ 90808)).then(m => m.UnsettledSessionModule)
  }, {
    path: 'return',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_modules_cashier_collect_payment-modal_payment-modal_component_ts-sr-360cb3"), __webpack_require__.e("default-src_app_dashboard_modules_cashier_return_components_sign_sign_component_ts"), __webpack_require__.e("default-src_app_dashboard_modules_cashier_return_components_refund-details_refund-details_com-6ad2a4"), __webpack_require__.e("src_app_dashboard_modules_cashier_return_return_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/return/return.module */ 60154)).then(m => m.ReturnModule)
  }, {
    path: 'treasuryrefundorders',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_modules_cashier_return_components_sign_sign_component_ts"), __webpack_require__.e("src_app_dashboard_modules_cashier_return-treasury-fund_return-treasury-fund_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/return-treasury-fund/return-treasury-fund.module */ 63473)).then(m => m.ReturnTreasuryFundModule)
  }, {
    path: 'provide-expenses',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_excel_service_ts"), __webpack_require__.e("default-src_app_dashboard_modules_main-fund_provide-expenses_provide-expenses-modal_provide-e-84648b"), __webpack_require__.e("default-src_app_dashboard_modules_main-fund_provide-expenses_expense-request-details_expense--cd6a74"), __webpack_require__.e("src_app_dashboard_modules_main-fund_provide-expenses_provide-expenses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main-fund/provide-expenses/provide-expenses.module */ 58167)).then(m => m.provideExpensesModule)
  }, {
    path: 'mainFund-allocation',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_main-fund_allocation_allocation_allocation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main-fund/allocation/allocation/allocation.module */ 92391)).then(m => m.allocationModule)
  }, {
    path: 'register-settlements',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_main-fund_register-settlements_register-settlements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main-fund/register-settlements/register-settlements.module */ 82621)).then(m => m.RegisterSettlementsModule)
  }, {
    path: 'dashboard',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chartjs-plugin-datalabels_dist_chartjs-plugin-datalabels_esm_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_main-fund_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main-fund/dashboard/dashboard.module */ 12081)).then(m => m.DashboardModule)
  }, {
    path: 'collection-report',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_dashboard_modules_cashier_collect_payment-modal_payment-modal_component_ts-sr-360cb3"), __webpack_require__.e("default-src_app_dashboard_modules_cashier_return_components_refund-details_refund-details_com-6ad2a4"), __webpack_require__.e("src_app_dashboard_modules_collection-report_collection-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/collection-report/collection-report.module */ 92588)).then(m => m.CollectionReportModule)
  }, {
    path: 'markazia-vouchers',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_excel_service_ts"), __webpack_require__.e("src_app_dashboard_modules_cashier_markazia-vouchers_markazia-vouchers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/cashier/markazia-vouchers/markazia-vouchers.module */ 47781)).then(m => m.MarkaziaVouchersModule)
  }, {
    path: 'mainfund-receipt',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_modules_cashier_collect_payment-modal_view-file_view-file_component-753f59"), __webpack_require__.e("src_app_dashboard_modules_main-fund_receipts_receipts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/main-fund/receipts/receipts.module */ 96335)).then(m => m.ReceiptsModule)
  },
  // ========= Treasury  ========================================================
  {
    path: 'allocation',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_treasury_allocation_allocation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/treasury/allocation/allocation.module */ 60217)).then(m => m.AllocationModule)
  }, {
    path: 'transactions',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_modules_treasury_transactions_transactions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/treasury/transactions/transactions.module */ 88552)).then(m => m.TransactionsModule)
  }, {
    path: 'transactions-history',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_modules_main-fund_provide-expenses_provide-expenses-modal_provide-e-84648b"), __webpack_require__.e("default-src_app_dashboard_modules_treasury_transactions-history_transaction-history-services_-bfddf7"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_treasury_transactions-history_transactions-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/treasury/transactions-history/transactions-history.module */ 66144)).then(m => m.TransactionsHistoryModule)
  }, {
    path: 'pettycash',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_services_excel_service_ts"), __webpack_require__.e("default-src_app_dashboard_modules_cashier_petty-cash_add-petty-cash_add-petty-cash_component_-17a39e"), __webpack_require__.e("default-src_app_dashboard_modules_main-fund_provide-expenses_expense-request-details_expense--cd6a74"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_modules_treasury_petty-cash-treasury_petty-cash-treasury_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/treasury/petty-cash-treasury/petty-cash-treasury.module */ 88396)).then(m => m.PettyCashTreasuryModule)
  }, {
    path: 'register-bank-deposit',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_modules_treasury_transactions-history_transaction-history-services_-bfddf7"), __webpack_require__.e("src_app_dashboard_modules_treasury_register-bank-deposit_register-bank-deposit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/treasury/register-bank-deposit/register-bank-deposit.module */ 91318)).then(m => m.RegisterBankDepositModule)
  }, {
    path: 'profile',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_modules_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/profile/profile.module */ 22082)).then(m => m.ProfileModule)
  }, {
    path: 'no-menu',
    component: _no_menu_no_menu_component__WEBPACK_IMPORTED_MODULE_2__.NoMenuComponent
  }]
}];
class DashboardRoutingModule {}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
  return new (t || DashboardRoutingModule)();
};
DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: DashboardRoutingModule
});
DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 77528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/shared.service */ 69082);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header/header.component */ 1860);
/* harmony import */ var _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/sidenav/sidenav.component */ 68102);







const _c0 = function (a0) {
  return {
    "app-side-nav-open": a0
  };
};
const _c1 = function (a0) {
  return {
    "display-area-shrink": a0
  };
};
class DashboardComponent {
  constructor(route, sharedService, router, datePipe) {
    this.route = route;
    this.sharedService = sharedService;
    this.router = router;
    this.datePipe = datePipe;
    this.sidebarExpanded = true;
    this.Pagetitle = {};
    this.navList = [];
    this.titleOfPage = '';
    this.sideNavStatus = true;
  }
  ngOnInit() {
    //this.router.events
    //  .pipe(filter((event) => event instanceof NavigationEnd))
    //  .subscribe((event) => {
    //    if (event['url'] == '/' && this.sharedService.getRole?.roleId == 36) {
    //      this.router.navigate(['/branches']);
    //    } else if (
    //      event['url'] == '/' &&
    //      this.sharedService.getRole?.roleId == 1
    //    ) {
    //      this.router.navigate(['/opening-register']);
    //    }
    //  });
    //if (this.sharedService.getRole?.roleId == 36) {
    //  if (this.router.url == '/') {
    //    this.router.navigate(['/branches']);
    //  }
    //} else if (this.sharedService.getRole?.roleId == 1) {
    //  if (this.router.url == '/') {
    //    this.router.navigate(['/opening-register']);
    //  }
    //}
  }
  onSelectMenu(index) {
    this.navList.forEach(element => {
      element.IsActive = false;
    });
    for (let i = 0; i < this.navList.length; i++) {
      if (i == index) {
        this.navList[i].IsActive = true;
      }
    }
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe])],
  decls: 6,
  vars: 8,
  consts: [[1, "container-fluid", "g-0"], [3, "titleOfPage", "sideNavToggled"], [3, "sideNavStatus", "ngClass", "titleOfPage", "sideNavToggled"], [1, "display-area", "p-3", 3, "ngClass"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "app-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sideNavToggled", function DashboardComponent_Template_app_header_sideNavToggled_1_listener($event) {
        return ctx.sideNavStatus = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "main")(3, "app-sidenav", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("titleOfPage", function DashboardComponent_Template_app_sidenav_titleOfPage_3_listener($event) {
        return ctx.titleOfPage = $event;
      })("sideNavToggled", function DashboardComponent_Template_app_sidenav_sideNavToggled_3_listener($event) {
        return ctx.sideNavStatus = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titleOfPage", ctx.titleOfPage);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sideNavStatus", ctx.sideNavStatus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx.sideNavStatus));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, ctx.sideNavStatus));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__.SidenavComponent],
  styles: ["app-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  height: 4rem;\n  z-index: 100;\n  background: #FFFFFF;\n}\n\nmain[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 4rem;\n}\n\napp-sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0rem;\n  width: 60px;\n  height: 100vh;\n  background: #F8F8F8;\n  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);\n  z-index: 200;\n  overflow: hidden;\n  white-space: nowrap;\n  transition: width 250ms ease-in;\n}\n\n.app-side-nav-open[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.display-area[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 60px;\n  width: calc(100% - 60px);\n  transition: width 250ms ease-in;\n}\n\n.display-area-shrink[_ngcontent-%COMP%] {\n  left: 250px;\n  width: calc(100% - 250px);\n  transition: width 250ms ease-in;\n}\n\n.ipadress[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQURGOztBQUtBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBQUZGOztBQUtBO0VBQ0MsV0FBQTtFQUNDLHlCQUFBO0VBQ0EsK0JBQUE7QUFGRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIlxuYXBwLWhlYWRlcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogNHJlbTtcbiAgei1pbmRleDogMTAwO1xuXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG5cbn1cbm1haW57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNHJlbTtcblxufVxuYXBwLXNpZGVuYXZ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMHJlbTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIGJveC1zaGFkb3c6IDBweCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiAyMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDI1MG1zIGVhc2UtaW47XG5cblxufVxuLmFwcC1zaWRlLW5hdi1vcGVue1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5kaXNwbGF5LWFyZWF7XG4gIHBvc2l0aW9uOmFic29sdXRlIDtcbiAgbGVmdDogNjBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAyNTBtcyBlYXNlLWluO1xuXG59XG4uZGlzcGxheS1hcmVhLXNocmlua3tcbiBsZWZ0OiAyNTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMjUwbXMgZWFzZS1pbjtcblxufVxuXG4uaXBhZHJlc3N7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAzMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 77528);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/header/header.component */ 1860);
/* harmony import */ var _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/sidenav/sidenav.component */ 68102);
/* harmony import */ var _layout_modal_close_session_modal_close_session_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/modal-close-session/modal-close-session.component */ 59669);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _no_menu_no_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./no-menu/no-menu.component */ 27112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);









class DashboardModule {}
DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)();
};
DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _layout_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent, _layout_modal_close_session_modal_close_session_component__WEBPACK_IMPORTED_MODULE_4__.ModalCloseSessionComponent, _no_menu_no_menu_component__WEBPACK_IMPORTED_MODULE_6__.NoMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
})();

/***/ }),

/***/ 1860:
/*!*************************************************************!*\
  !*** ./src/app/dashboard/layout/header/header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var src_app_services_header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/header.service */ 36690);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared.service */ 69082);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/general.service */ 21864);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/subject.service */ 29444);
/* harmony import */ var _services_signalR_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/signalR.service */ 91493);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);














function HeaderComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.mainPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 22);
  }
}
function HeaderComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 23);
  }
}
function HeaderComponent_div_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HeaderComponent_div_6_span_2_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.titleOfPage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.pagename);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.pagename.slice(1), " ");
  }
}
function HeaderComponent_ul_13_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_ul_13_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.redirectToOrder(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 29)(2, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r11 == null ? null : item_r11.NotificationMessage);
  }
}
function HeaderComponent_ul_13_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No order for collection yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_ul_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HeaderComponent_ul_13_li_1_Template, 4, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HeaderComponent_ul_13_li_2_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.notificationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.notificationList.length);
  }
}
function HeaderComponent_ul_17_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_ul_17_li_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.redirectTo(item_r15 == null ? null : item_r15.description));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r15 == null ? null : item_r15.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r15 == null ? null : item_r15.translations);
  }
}
function HeaderComponent_ul_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HeaderComponent_ul_17_li_1_Template, 5, 2, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.portalsList);
  }
}
const _c0 = function (a0) {
  return [a0];
};
class HeaderComponent {
  constructor(router, route, headerService, sharedService, generalService, _subjectService, signalRService, commonService) {
    this.router = router;
    this.route = route;
    this.headerService = headerService;
    this.sharedService = sharedService;
    this.generalService = generalService;
    this._subjectService = _subjectService;
    this.signalRService = signalRService;
    this.commonService = commonService;
    this.sideNavToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.titleOfPage = '';
    this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBars;
    this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faArrowLeft;
    this.faBell = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBell;
    this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faArrowRight;
    this.menuStatus = true;
    this.iscollapse = false;
    this.marginleft = 50;
    this.Pagetitle = {};
    this.showTitle = true;
    this.portalsList = [];
    this.orderId = 0;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.notificationList = [];
    this.headerService.title.subscribe(title => {
      this.titleOfPage = title;
      // this.showTitle = true;
      // this.headerService.setTitle(this.titleOfPage);
      // console.log('title', this.titleOfPage);
      // setTimeout(() => {
      //   this.titleOfPage = title;
      // }, 1000);
    });

    this.pagename = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationStart) {
        // Handle Navigation Start
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
        // Handle Navigation End
        this.pagename = '';
      }
    });
    this.getUserPortals();
  }
  ngOnInit() {
    this.fullName = localStorage.getItem('fullName');
    if (this.fullName) {
      const fullname = this.fullName?.split(' ');
      this.firstName = fullname[0];
      this.lastName = fullname[1];
    }
    this.receiveNotifications();
    this.collectedOrder();
  }
  collectedOrder() {
    let sub = this._subjectService.collectedOrder.subscribe(data => {
      this.orderId = data.orderId;
      if (this.notificationList.length > 0) {
        this.notificationList = this.notificationList.filter(x => +x.OrderId !== this.orderId);
      }
    });
    this.subscription.add(sub);
  }
  receiveNotifications() {
    let notifications = [];
    this.signalRService.startConnection();
    this.signalRService.addNotificationListener(data => {
      console.log('Received notification:', data);
      notifications.unshift(JSON.parse(data));
      this.notificationList = this.removeDuplicates(notifications).filter(x => +x.OrderId !== this.orderId);
    });
  }
  redirectToOrder(item) {
    if (item?.OrderType == 7003) {
      this.commonService.NavigateToRoute(`/collect/details/spare/`, item?.OrderId);
    } else if (item?.OrderType == 7002) {
      this.commonService.NavigateToRoute(`/collect/details/service/`, item?.OrderId);
    } else if (item?.OrderType == 7001) {
      this.commonService.NavigateToRoute(`collect/details/payment/`, item?.OrderId);
    }
  }
  removeDuplicates(notifications) {
    return notifications.reduce((unique, notification) => {
      if (!unique.some(obj => obj.OrderId === notification.OrderId)) {
        unique.push(notification);
      }
      return unique;
    }, []);
  }
  getUserPortals() {
    this.generalService.getUserPortals().subscribe(res => {
      this.portalsList = res['data'];
    });
  }
  redirectTo(path) {
    window.location.replace(`${path}/login?token=${sessionStorage.getItem('token')}`);
  }
  mainPage() {
    if (this.sharedService.getRole?.roleId == 1) {
      this.router.navigateByUrl('/opening-register');
      this.headerService.setTitle('Opening Register');
    } else {
      this.router.navigateByUrl('/branches');
    }
  }
  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
    this.iscollapse = this.iscollapse == false ? true : false;
    this.marginleft = this.marginleft == 50 ? 0 : 50;
    if (window.innerWidth < 600) {
      this.iscollapse = true;
    }
    const menuItems = document.querySelectorAll('[dropdown]');
    menuItems.forEach(item => {
      item.setAttribute('container', 'body');
    });
  }
  onWindowResize() {
    if (window.innerWidth < 600) {
      this.iscollapse = true;
      this.marginleft = 0;
      this.menuStatus = false;
      this.sideNavToggled.emit(false);
      this.showTitle = false;
    } else {
      this.iscollapse = false;
      this.marginleft = 50;
      this.menuStatus = true;
      this.showTitle = true;
      this.sideNavToggled.emit(true);
    }
  }
  logout() {
    sessionStorage.removeItem('fullName');
    this.router.navigateByUrl('/login');
  }
  ngOnDestroy() {
    // Clean up SignalR connections when component is destroyed
    this.signalRService.stopConnection();
    console.log('destroy');
    this.subscription.unsubscribe();
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_header_service__WEBPACK_IMPORTED_MODULE_0__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_3__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_signalR_service__WEBPACK_IMPORTED_MODULE_4__.SignalRService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) {
        return ctx.onWindowResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    titleOfPage: "titleOfPage"
  },
  outputs: {
    sideNavToggled: "sideNavToggled"
  },
  decls: 29,
  vars: 21,
  consts: [[1, "navbar", "navbar-expand", "px-2"], ["class", "navbar-brand px-1", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn-circle", 3, "click"], ["class", "fa-solid fa-arrow-left", 4, "ngIf"], ["class", "fa-solid fa-arrow-right", 4, "ngIf"], [1, "navbar-collapse", "px-3"], ["class", "page-Tile", 4, "ngIf"], [1, "navbar-nav", "ms-auto", "d-flex", "flex-row", "align-items-center"], [1, "cursor-pointer"], ["dropdown", "", "container", "body", "placement", "left bottom"], ["dropdownToggle", "", "id", "button-basic2", "aria-controls", "dropdown-basic2", 1, "fas", "fa-bell", "font-24", "position-relative"], [1, "notification-badge"], ["style", "width:220px", "id", "dropdown-basic2", "class", "dropdown-menu-right dropdown-menu d-flex gap-1 flex-column p-2", "role", "menu", "aria-labelledby", "button-basic2", 4, "dropdownMenu"], ["src", "/assets/images/navicon/grid.svg", "dropdownToggle", "", "id", "button-basic", "aria-controls", "dropdown-basic"], ["style", "width:220px", "id", "dropdown-basic", "class", "dropdown-menu-right dropdown-menu d-flex gap-4 flex-column p-2", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "char-name"], [1, "dropdown-menu"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "navbar-brand", "px-1", 3, "click"], ["width", "105", "height", "17.5", "src", "assets/images/markazia.png", "alt", ""], [1, "fa-solid", "fa-arrow-left"], [1, "fa-solid", "fa-arrow-right"], [1, "page-Tile"], [4, "ngIf"], ["id", "dropdown-basic2", "role", "menu", "aria-labelledby", "button-basic2", 1, "dropdown-menu-right", "dropdown-menu", "d-flex", "gap-1", "flex-column", "p-2", 2, "width", "220px"], ["class", "cursor-pointer", "role", "menuitem", 3, "click", 4, "ngFor", "ngForOf"], ["role", "menuitem", 1, "cursor-pointer", 3, "click"], [1, "d-flex", "align-items-center", "gap-2"], [1, "fw-500", "m-0"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu-right", "dropdown-menu", "d-flex", "gap-4", "flex-column", "p-2", 2, "width", "220px"], ["class", "cursor-pointer", "role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem", 1, "cursor-pointer"], [1, "d-flex", "align-items-center", "gap-2", 3, "click"], [3, "src"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HeaderComponent_a_1_Template, 2, 0, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
        return ctx.SideNavToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HeaderComponent_i_3_Template, 1, 0, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HeaderComponent_i_4_Template, 1, 0, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 7)(8, "li", 8)(9, "div", 9)(10, "i", 10)(11, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, HeaderComponent_ul_13_Template, 3, 2, "ul", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "li", 8)(15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, HeaderComponent_ul_17_Template, 2, 1, "ul", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li", 15)(19, "a", 16)(20, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ul", 18)(26, "li")(27, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "My Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.iscollapse);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("margin-left", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](19, _c0, ctx.marginleft), "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.iscollapse);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.iscollapse);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.notificationList.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](22, 11, ctx.firstName, 0, 1), "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](23, 15, ctx.lastName, 0, 1), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx.firstName, " ", ctx.lastName, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__.BsDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.SlicePipe],
  styles: [".notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  padding: 3px;\n  height: 18px;\n  width: 18px;\n  background-color: var(--primary);\n  color: white;\n  font-size: 12px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nnav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.side-nav-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  cursor: pointer;\n  margin-left: 50px;\n}\n\n.side-nav-button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(171, 168, 168);\n  border-radius: 30%;\n}\n\n.btn-circle[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n  background: #dc3545;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  transition: margin 250ms ease-in;\n}\n\n.page-Tile[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 22px;\n  line-height: 28px;\n  color: #000000;\n  text-transform: capitalize;\n}\n\n.userlogo[_ngcontent-%COMP%] {\n  font-family: \"Kumbh Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: #1b212d;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  cursor: pointer;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #c4cdd5;\n  box-shadow: 0px 4px 5px rgba(104, 105, 106, 0.1);\n  border-radius: 8px 8px 0px 0px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n  padding: 5px 15px;\n}\n\n.char-name[_ngcontent-%COMP%] {\n  background-color: #49a1bb;\n  width: 38px;\n  height: 38px;\n  display: inline-block;\n  border-radius: 50%;\n  font-weight: 600;\n  font-size: 14px;\n  text-align: center;\n  padding: 8px;\n  margin: 0px 5px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  padding: 0px;\n  border: 0px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  border: 1px solid #ddd !important;\n  padding: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFLRjs7QUFIQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQU9GOztBQUxBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdEQUFBO0VBQ0EsOEJBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVNGOztBQVBBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBVUY7O0FBTkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVNGOztBQU5BO0VBQ0UsaUNBQUE7RUFDQSx3QkFBQTtBQVNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogLTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5uYXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2lkZS1uYXYtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uc2lkZS1uYXYtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MSwgMTY4LCAxNjgpO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG59XG4uYnRuLWNpcmNsZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDI1MG1zIGVhc2UtaW47XG59XG4ucGFnZS1UaWxlIHtcbiAgZm9udC1mYW1pbHk6IFwiS3VtYmggU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi51c2VybG9nbyB7XG4gIGZvbnQtZmFtaWx5OiBcIkt1bWJoIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzFiMjEyZDtcbn1cbi5uYXZiYXItYnJhbmQge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2M0Y2RkNTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggcmdiKDEwNCAxMDUgMTA2IC8gMTAlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xufVxuLm5hdi1saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG4uY2hhci1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTFiYjtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cblxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 59669:
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/layout/modal-close-session/modal-close-session.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCloseSessionComponent": () => (/* binding */ ModalCloseSessionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





function ModalCloseSessionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The session time will end in 15 min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCloseSessionComponent_div_0_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.activeModal.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function ModalCloseSessionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Session Timeout ! You Cant Collect or Close the Session, You will be logged out now... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCloseSessionComponent_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.closeSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Close register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class ModalCloseSessionComponent {
  constructor(activeModal, modalService, router) {
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.router = router;
    this.semdToConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  confirm() {
    this.semdToConfirm.emit();
  }
  closeSession() {
    localStorage.setItem('closeSession', 'yes');
    this.modalService.dismissAll();
    this.router.navigateByUrl('/close-register');
    window.location.reload();
  }
}
ModalCloseSessionComponent.ɵfac = function ModalCloseSessionComponent_Factory(t) {
  return new (t || ModalCloseSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ModalCloseSessionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModalCloseSessionComponent,
  selectors: [["app-modal-close-session"]],
  inputs: {
    type: "type",
    minute: "minute"
  },
  outputs: {
    semdToConfirm: "semdToConfirm"
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [1, "modal-body"], [1, "message"], [1, "fa-solid", "fa-triangle-exclamation"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-save", 3, "click"]],
  template: function ModalCloseSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalCloseSessionComponent_div_0_Template, 9, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalCloseSessionComponent_div_1_Template, 9, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 50px;\n}\n.message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #dc3545;\n  margin-bottom: 30px;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: #fff;\n}\n\n.btns-group[_ngcontent-%COMP%] {\n  margin: 10px;\n  justify-content: center;\n}\n\n.btns-group[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  padding-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2xheW91dC9tb2RhbC1jbG9zZS1zZXNzaW9uL21vZGFsLWNsb3NlLXNlc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCA1MHB4O1xuICBpIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgY29sb3I6ICNkYzM1NDU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuXG4uYnRuLXNhdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBjb2xvcjogI2ZmZjtcblxufVxuXG4uYnRucy1ncm91cCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0bnMtZ3JvdXAge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 77787:
/*!************************************************************!*\
  !*** ./src/app/dashboard/layout/sidenav/logout.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutService": () => (/* binding */ LogoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/shared.service */ 69082);



class LogoutService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  LogoutUser(id) {
    return this.http.post(this.apiUrl + `User/Logout?userId=${id}`, {}, this.sharedService.getHeaders());
  }
}
LogoutService.ɵfac = function LogoutService_Factory(t) {
  return new (t || LogoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
LogoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LogoutService,
  factory: LogoutService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 68102:
/*!***************************************************************!*\
  !*** ./src/app/dashboard/layout/sidenav/sidenav.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavComponent": () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _modal_close_session_modal_close_session_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-close-session/modal-close-session.component */ 59669);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _logout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.service */ 77787);
/* harmony import */ var _modules_cashier_opening_register_services_openregister_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/cashier/opening-register/services/openregister.service */ 45832);
/* harmony import */ var _modules_cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/cashier/close-register/services/close-register.service */ 15070);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/general.service */ 21864);
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/httpservice.service */ 79345);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/common.service */ 5620);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/subject.service */ 29444);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 82184);


















function SidenavComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6)(1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Session Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Opening At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.sessionId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](9, 2, ctx_r0.registerSessionCreatedAt, "short"), " ");
  }
}
const _c0 = function () {
  return {
    "cursor": "default"
  };
};
const _c1 = function () {
  return {
    "cursor": "pointer"
  };
};
function SidenavComponent_ul_2_ng_container_1_ng_container_1_ul_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SidenavComponent_ul_2_ng_container_1_ng_container_1_ul_6_ng_container_1_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.onSelectMenuCashier(item_r10 == null ? null : item_r10.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", !item_r10.canClick && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](6, _c0) || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](7, _c1))("routerLink", item_r10.url)("disabled", !item_r10.canClick)("hidden", !item_r10.canView);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _r12.isActive ? item_r10.icon2 : item_r10.icon2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r10.title, " ");
  }
}
function SidenavComponent_ul_2_ng_container_1_ng_container_1_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SidenavComponent_ul_2_ng_container_1_ng_container_1_ul_6_ng_container_1_Template, 6, 8, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    const i_r6 = ctx_r15.index;
    const menu_r5 = ctx_r15.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "dropdown-basic", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-labelledby", "button-basic" + i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menu_r5 == null ? null : menu_r5.items);
  }
}
function SidenavComponent_ul_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 10)(2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, SidenavComponent_ul_2_ng_container_1_ng_container_1_ul_6_Template, 2, 3, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const i_r6 = ctx_r16.index;
    const menu_r5 = ctx_r16.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "button-basic", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-controls", "dropdown-basic" + i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", menu_r5 == null ? null : menu_r5.menuItem, " ");
  }
}
function SidenavComponent_ul_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SidenavComponent_ul_2_ng_container_1_ng_container_1_Template, 7, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r5 == null ? null : menu_r5.viewPermission);
  }
}
const _c2 = function (a0) {
  return {
    "nav-list-open": a0
  };
};
function SidenavComponent_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SidenavComponent_ul_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c2, ctx_r1.sideNavStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.userMenu);
  }
}
const _c3 = function (a0) {
  return {
    exact: a0
  };
};
function SidenavComponent_ng_container_4_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 24, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SidenavComponent_ng_container_4_ng_container_1_ng_container_8_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.onSelectMenuCashier(item_r21 == null ? null : item_r21.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", !item_r21.canClick && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](7, _c0) || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c1))("routerLink", item_r21.url)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](9, _c3, (item_r21 == null ? null : item_r21.menuItemId) == 17 ? true : false))("disabled", !item_r21.canClick)("hidden", !item_r21.canView);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _r23.isActive ? item_r21.icon2 : item_r21.icon, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r21.title, " ");
  }
}
function SidenavComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, SidenavComponent_ng_container_4_ng_container_1_ng_container_8_Template, 6, 11, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menu_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menu_r17 == null ? null : menu_r17.menuItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menu_r17 == null ? null : menu_r17.items);
  }
}
function SidenavComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SidenavComponent_ng_container_4_ng_container_1_Template, 9, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menu_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menu_r17 == null ? null : menu_r17.viewPermission);
  }
}
function SidenavComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25)(1, "ul", 26)(2, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SidenavComponent_div_5_Template_li_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Back To Portal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Version 3.0.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
class SidenavComponent {
  constructor(router, sharedService, modalService, logoutService, openregisterService, closeRegisterService, GeneralService, _loginService, datePipe, _commonService, _subjectService) {
    this.router = router;
    this.sharedService = sharedService;
    this.modalService = modalService;
    this.logoutService = logoutService;
    this.openregisterService = openregisterService;
    this.closeRegisterService = closeRegisterService;
    this.GeneralService = GeneralService;
    this._loginService = _loginService;
    this.datePipe = datePipe;
    this._commonService = _commonService;
    this._subjectService = _subjectService;
    this.sideNavStatus = true;
    this.sideNavToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.titleOfPage = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.navList = [];
    this.userMenu = [];
    this.toggleCaretIcon = false;
  }
  ngOnInit() {
    this._subjectService.isRegisterOpen.subscribe(res => {
      if (res) {
        this.getUserMenuNew();
        this.GetUserMenu();
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd)).subscribe(event => {
      let findItem = this.userMenu[0].items.find(x => x.url == event['url']);
      let canClickItem = this.userMenu[0].items.find(x => x.canClick);
      if (!findItem.canClick) {
        this._commonService.NavigateToRoute(canClickItem?.url);
      }
    });
    if (this.sharedService.getRole?.roleId == 1) {
      this.GetUserMenu();
    }
    this.getUserMenuNew();
  }
  onSelectMenu(index) {
    this.checkScreenSize();
    this.navList.forEach(element => {
      element.IsActive = false;
    });
    for (let i = 0; i < this.navList.length; i++) {
      if (i == index) {
        this.navList[i].IsActive = true;
        this.titleOfPage.emit(this.navList[i].title);
      }
    }
    localStorage.removeItem('collectionOrderNum');
    localStorage.removeItem('collectBranchId');
    localStorage.removeItem('collectUserId');
    localStorage.removeItem('collectSearchText');
    localStorage.removeItem('collectVin');
  }
  onSelectMenuCashier(title) {
    // this.checkScreenSize();
    // this.navList.forEach((element: { IsActive: boolean }) => {
    //   element.IsActive = false;
    // });
    // this.navList[i].IsActive = true;
    this.titleOfPage.emit(title);
    localStorage.removeItem('collectionOrderNum');
    localStorage.removeItem('collectBranchId');
    localStorage.removeItem('collectUserId');
    localStorage.removeItem('collectSearchText');
    localStorage.removeItem('collectVin');
    // this.openAutoClose();
    // this.GetUserMenu();
  }

  checkScreenSize() {
    if (window.innerWidth < 600) {
      this.sideNavToggled.emit(false);
      this.sideNavStatus = false;
    }
  }
  openAutoCloseWarning() {
    // console.log('openAutoClose');
    this.dateSession = this.datePipe.transform(this.registerSessionCreatedAt, 'MMMM d, y');
    // Fri Mar 17 2023 22:36:23 GMT+0200 (Eastern European Standard Time)
    var dateEndSession = new Date(this.dateSession + ' ' + this.endSession);
    // var dateEndSession = new Date('Fri Mar 17 2023 23:55:23');
    var dateCurrunt = new Date();
    // console.log(dateCurrunt);
    let sessionEndMillesecnd = dateEndSession.getTime() - dateCurrunt.getTime() - 900000;
    // console.log('sessionEndMillesecnd', sessionEndMillesecnd);
    this.sessionEndMinut = dateEndSession.getMinutes() - dateCurrunt.getMinutes();
    // console.log('sessionEndMinut', this.sessionEndMinut);
    if (sessionEndMillesecnd > 0) {
      setTimeout(() => {
        const modalRef = this.modalService.open(_modal_close_session_modal_close_session_component__WEBPACK_IMPORTED_MODULE_0__.ModalCloseSessionComponent);
        modalRef.componentInstance.type = 1;
        modalRef.componentInstance.minute = this.sessionEndMinut;
      }, sessionEndMillesecnd);
    }
  }
  openAutoClose() {
    // console.log('openAutoClose');
    this.dateSession = this.datePipe.transform(this.registerSessionCreatedAt, 'MMMM d, y');
    var dateEndSession = new Date(this.dateSession + ' ' + this.endSession);
    var dateCurrunt = new Date();
    let sessionEndMillesecnd = dateEndSession.getTime() - dateCurrunt.getTime();
    // console.log('sessionEndMillesecnd', sessionEndMillesecnd);
    if (sessionEndMillesecnd > 0) {
      setTimeout(() => {
        const modalRef = this.modalService.open(_modal_close_session_modal_close_session_component__WEBPACK_IMPORTED_MODULE_0__.ModalCloseSessionComponent);
        modalRef.componentInstance.type = 2;
        sessionStorage.removeItem('token');
        setTimeout(() => {
          //window.location.href = 'https://dx-portalsstage.azurewebsites.net/login';
          this.redirectUserAccordingToEnv();
        }, 5000);
        //}, 10000);
      }, sessionEndMillesecnd);
    }
  }
  redirectUserAccordingToEnv() {
    let host = window.location.host;
    //STAGING
    if (host.indexOf('dxpos.markaziaapis.com') >= 0) {
      window.location.href = 'https://portal.markaziahub.com';
    }
    //TEST
    else if (host.indexOf('dxtestpos.markaziaapis.com') >= 0) {
      window.location.href = 'https://dxtestportal.markaziahub.com';
    }
    //LOCAL
    else if (host.indexOf('localhost:4200') >= 0) {
      // I AM USING PORTAL ON PORT 4201 SO THAT'S' WHY I REDIRECTED HERE
      window.location.href = 'https://dxdevportal.markaziahub.com';
    }
  }
  logout() {
    //const modalRef = this.modalService.open(ModalLogoutComponent);
    //modalRef.componentInstance.name = 'World';
    //modalRef.componentInstance.semdToConfirm.subscribe((result: any) => {
    //  this.modalService.dismissAll();
    //});
    this.LogoutUser();
    localStorage.removeItem('fullName');
    localStorage.removeItem('role');
    localStorage.removeItem('userid');
    localStorage.removeItem('branch');
    localStorage.removeItem('city');
    localStorage.removeItem('register');
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    localStorage.removeItem('collectionOrderNum');
    localStorage.removeItem('collectBranchId');
    localStorage.removeItem('collectUserId');
    localStorage.removeItem('collectSearchText');
    localStorage.removeItem('collectVin');
    localStorage.removeItem('closeSession');
    // localStorage.removeItem('identity');
    // localStorage.removeItem('password');
    // localStorage.removeItem('rememberMe');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    //this.router.navigate(['/login']);
    // window.location.href = 'https://dx-portalsstage.azurewebsites.net/login';
    window.location.replace(localStorage.getItem('redirectUrl'));
    localStorage.removeItem('redirectUrl');
    // this.sharedService.getToken = '';\
  }

  LogoutUser() {
    return this.logoutService.LogoutUser(+this.sharedService.getUserId).subscribe(response => {
      if (response) {
        // this.roles = response.data.permissions;
      }
    });
  }
  CanOpenRegisterSession() {
    return this.openregisterService.CanOpenRegisterSession({}).subscribe(response => {
      if (response.isSuccess == true) {
        this.canOpenRegister = response.data.canOpenRegister;
        this.opendSession = response.data.opendSession;
        if (this.canOpenRegister == true) {
          this.openreg = true;
          this.closereg = false;
          this.clollectreg = false;
        } else if (this.canOpenRegister == false) {
          // this.router.navigate(['/collect']);
          this.openreg = false;
          this.closereg = true;
          this.clollectreg = true;
        }
        // else if (this.canOpenRegister == false && this.opendSession) {
        //   this.openreg = false;
        //   this.closereg = true;
        //   this.clollectreg = true;
        // } else if (this.canOpenRegister == false && !this.opendSession) {
        //   this.openreg = false;
        //   this.closereg = false;
        //   this.clollectreg = false;
        // }
        // this.canOpenRegister = true;
      }
    });
  }

  CanCloseRegisterSession() {
    return this.closeRegisterService.CanCloseRegisterSession({}).subscribe(response => {
      if (response.isSuccess == true) {
        this.canCloseRegisterSession = response.data.opendSession ? true : false;
        this.registerSessionCreatedAt = response.data?.registerSession?.createdAt;
      }
    });
  }
  getUserMenuNew() {
    this.GeneralService.GetUserMenuNew(17001).subscribe(response => {
      //this.userMenu = response?.data?.menu;
      let editMenu = response?.data?.menu;
      this.userMenu = [];
      editMenu.forEach(x => {
        let isExist = x.items.filter(item => item?.canView);
        if (isExist?.length > 0) {
          this.userMenu = [...this.userMenu, {
            ...x,
            viewPermission: true
          }];
          console.log(this.userMenu);
        }
      });
      this.cashierNavList = response?.data?.menu[0];
      if (this.sharedService.getRole?.roleId == 1) {
        let isExist = this.cashierNavList.items.filter(item => !item?.canView);
        if (!isExist) {
          this.isIpAddres = false;
          localStorage.setItem('IsFoundIPAddress', '1');
        } else {
          localStorage.removeItem('IsFoundIPAddress');
        }
      }
      for (let menu of this.userMenu) {
        let findItem = menu.items.find(x => x.canClick);
        if (findItem) {
          this._commonService.NavigateToRoute(findItem.url);
          break;
        }
      }
    });
  }
  handler() {
    this.toggleCaretIcon = !this.toggleCaretIcon;
  }
  GetUserMenu() {
    return this.GeneralService.GetUserMenu({}).subscribe(response => {
      if (response.isSuccess) {
        this.cashierMenu = response.data[0]?.cashier;
        this.registerSession = response.data[0]?.registerSession;
        this.registerSessionCreatedAt = this.registerSession?.oppendAt;
        this.sessionId = this.registerSession?.currentSessionId;
        localStorage.setItem('current_session', this.sessionId?.toString());
        this.endSession = this.registerSession?.allowedToTime;
        this.hasOppendSession = this.registerSession?.hasOppendSession;
        this.isIpAddres = true;
        this._subjectService.sessionDetails.next({
          opened: this.hasOppendSession
        });
        if (this.hasOppendSession) {
          setTimeout(() => {
            this.openAutoCloseWarning();
          }, 2000);
          setTimeout(() => {
            this.openAutoClose();
          }, 2000);
        }
      }
    });
  }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
  return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_logout_service__WEBPACK_IMPORTED_MODULE_2__.LogoutService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_modules_cashier_opening_register_services_openregister_service__WEBPACK_IMPORTED_MODULE_3__.OpenregisterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_modules_cashier_close_register_services_close_register_service__WEBPACK_IMPORTED_MODULE_4__.CloseRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_6__.HttpserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_8__.SubjectService));
};
SidenavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: SidenavComponent,
  selectors: [["app-sidenav"]],
  inputs: {
    sideNavStatus: "sideNavStatus"
  },
  outputs: {
    sideNavToggled: "sideNavToggled",
    titleOfPage: "titleOfPage"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe])],
  decls: 6,
  vars: 7,
  consts: [[1, "side-nav-content"], ["class", "register-open", 4, "ngIf"], ["class", "d-none nav-list d-flex flex-column gap-3", 3, "ngClass", 4, "ngIf"], [1, "nav-list", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "col-xs-3", 4, "ngIf"], [1, "register-open"], [1, "m-0", "mb-2"], [1, "d-none", "nav-list", "d-flex", "flex-column", "gap-3", 3, "ngClass"], [4, "ngIf"], ["dropdown", "", 1, "btn-group"], ["dropdownToggle", "", "type", "button", 1, "btn", "dropdown-toggle", 3, "id"], ["src", "/assets/images/navicon/dashboardIcon2.svg"], ["src", "/assets/images/navicon/angel-down.svg"], ["class", "dropdown-menu", "role", "menu", 3, "id", 4, "dropdownMenu"], ["role", "menu", 1, "dropdown-menu", 3, "id"], ["routerLinkActive", "active", 1, "nav-list-item", 3, "ngStyle", "routerLink", "disabled", "hidden", "click"], ["rla", "routerLinkActive"], ["alt", "", 3, "src"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "my-3"], [1, "m-0", "dark-gray", "font-18", "fw-600"], ["src", "/assets/images/navicon/angel-down.svg", 1, "me-2"], [1, "m-0", "p-0", "overflow-scroll-menu"], ["routerLinkActive", "active", 1, "nav-list-item", 3, "ngStyle", "routerLink", "routerLinkActiveOptions", "disabled", "hidden", "click"], [1, "col-xs-3"], [1, "ps-3", 2, "position", "fixed", "bottom", "0"], [1, "logout-btn", "align-items-center", "d-flex", "gap-2", "justify-content-between", "dark-gray", "fw-700", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-circle-left", "fa-2x", "primary-clr"], [1, "primary-clr", "text-center", "font-14", "fw-500"]],
  template: function SidenavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SidenavComponent_div_1_Template, 10, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SidenavComponent_ul_2_Template, 2, 4, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SidenavComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SidenavComponent_div_5_Template, 7, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasOppendSession && (ctx.sharedService.getRole == null ? null : ctx.sharedService.getRole.roleId) == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.sharedService.getRole == null ? null : ctx.sharedService.getRole.roleId) == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c2, ctx.sideNavStatus));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.userMenu);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.sideNavStatus);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__.BsDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [".side-nav-content[_ngcontent-%COMP%] {\n  color: #929eae;\n  \n  margin-left: 10px;\n  \n  margin-top: 10px;\n}\n\n.nav-list[_ngcontent-%COMP%] {\n  height: 100;\n  padding: 0%;\n  margin-bottom: 0px;\n  list-style: none;\n}\n\n.nav-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  cursor: pointer;\n  text-align: start;\n  border: 0px;\n  background: none;\n  color: #929eae;\n  width: 98%;\n}\n\n.nav-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n  margin-left: 10px;\n  text-align: center;\n  line-height: 25px;\n}\n\n.nav-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 120px;\n  text-transform: capitalize;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #86888b;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #dc3545;\n  box-shadow: none;\n  border-radius: 8px;\n  color: white;\n  cursor: pointer;\n}\n\n.a-active[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #f5f6f7;\n}\n\n.btn-circle[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n  background: #dc3545;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n}\n\n.register-open[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  color: #1b212d;\n  text-align: center;\n  margin-top: 31px;\n}\n.register-open[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.nav-list-item[_ngcontent-%COMP%]:disabled {\n  color: #a9a9a9 !important;\n  color: #cdd4da !important;\n}\n\n.nav-list[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: none;\n  border-bottom: 1px solid #929EAE;\n  border-radius: 0px;\n  padding-bottom: 15px;\n}\n.nav-list[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.nav-list[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:after {\n  border: none;\n  margin: 0;\n  content: \"\";\n  display: none;\n}\n.nav-list[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  list-style: none;\n  display: block;\n}\n.logout-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: rgb(33, 37, 41);\n  gap: 15px;\n}\n\n.overflow-scroll-menu[_ngcontent-%COMP%] {\n  height: 72vh;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2xheW91dC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNGO0dBQUE7RUFDSSxnQkFBQTtBQUVKOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQUZGOztBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0k7RUFDRSxjQUFBO0FBSE47O0FBUUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBVUk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBUE47QUFTTTtFQUNFLFlBQUE7QUFQUjtBQVVNO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVJSO0FBWUk7RUFDRSxXQUFBO0FBVk47O0FBZUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFaRjtBQWNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFaSjs7QUFlQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQVpGIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtbmF2LWNvbnRlbnQge1xuICBjb2xvcjogIzkyOWVhZTtcbiAgLyp3aWR0aDogMjMwcHg7Ki9cbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4vKiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuKi8gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uYXYtbGlzdCB7XG4gIGhlaWdodDogMTAwO1xuICBwYWRkaW5nOiAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubmF2LWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjOTI5ZWFlO1xuICB3aWR0aDogOTglO1xufVxuLy8gLm5hdi1saXN0LW9wZW4gLm5hdi1saXN0LWl0ZW06aG92ZXJ7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTksIDkwLCA5MCwgMC4zKTtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuLm5hdi1saXN0LWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLm5hdi1saXN0LWl0ZW0gc3BhbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjODY4ODhiO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmEtYWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2Y1ZjZmNztcbn1cblxuLmJ0bi1jaXJjbGUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5yZWdpc3Rlci1vcGVuIHtcbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMxcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgIH1cbiAgfVxufVxuXG4ubmF2LWxpc3QtaXRlbTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjYTlhOWE5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjY2RkNGRhICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtbGlzdCB7XG4gIC5idG4tZ3JvdXAge1xuICAgICYgPiBidXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzkyOUVBRTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuLmxvZ291dC1idG4ge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOnJnYigzMywgMzcsIDQxKTtcbiAgICBnYXA6MTVweDtcbiAgfVxufVxuLm92ZXJmbG93LXNjcm9sbC1tZW51IHtcbiAgaGVpZ2h0OiA3MnZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 15070:
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/close-register/services/close-register.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseRegisterService": () => (/* binding */ CloseRegisterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class CloseRegisterService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  getCurrentSessionCollectedBankTransfere(searchText, pageNo) {
    return this.http.get(this.apiUrl + `Cashier/GetCurrentSessionCollectedBankTransfere?Search=${searchText}&PageNo=${pageNo - 1}&PageSize=6`, this.sharedService.getHeaders());
  }
  actionsOnBankTransfere(transfer) {
    return this.http.post(this.apiUrl + 'Cashier/ActionsOnBankTransfere', transfer, this.sharedService.getHeaders());
  }
  editCollectionBankTransfere(transfer) {
    return this.http.post(this.apiUrl + 'Cashier/EditCollectionBankTransfere', transfer, this.sharedService.getHeaders());
  }
  reverseActionsOnBankTransfere(transfer) {
    return this.http.post(this.apiUrl + 'Cashier/ReverseActionsOnBankTransfere', transfer, this.sharedService.getHeaders());
  }
  // BANK PLEDGES
  getCurrentSessionCollectedBankPledge(searchText, pageNo) {
    return this.http.get(this.apiUrl + `Cashier/GetCurrentSessionCollectedBankPledge?Search=${searchText}&PageNo=${pageNo - 1}&PageSize=6`, this.sharedService.getHeaders());
  }
  actionsOnBankPledge(pledge) {
    return this.http.post(this.apiUrl + 'Cashier/ActionsOnBankPledge', pledge, this.sharedService.getHeaders());
  }
  editCollectionBankPledge(pledge) {
    return this.http.post(this.apiUrl + 'Cashier/EditCollectionBankPledge', pledge, this.sharedService.getHeaders());
  }
  reverseActionsOnBankPledge(pledge) {
    return this.http.post(this.apiUrl + 'Cashier/reverseActionsOnBankPledge', pledge, this.sharedService.getHeaders());
  }
  GetRegisterClosingData() {
    return this.http.get(this.apiUrl + 'Cashier/GetRegisterClosingData', this.sharedService.getHeaders());
  }
  getRegisterClosingDataFinal() {
    return this.http.get(this.apiUrl + 'Cashier/GetRegisterClosingDataFinal', this.sharedService.getHeaders());
  }
  CloseRegisterSession(data) {
    return this.http.post(this.apiUrl + `Cashier/CloseRegisterSession`, data, this.sharedService.getHeaders());
  }
  CanCloseRegisterSession(data) {
    return this.http.post(this.apiUrl + `Cashier/CanCloseRegisterSession`, data, this.sharedService.getHeaders());
  }
  GetCurrentSessionCollectedCheques(searchText, pageNo) {
    return this.http.get(this.apiUrl + `Cashier/GetCurrentSessionCollectedCheques?drawerName=${searchText}&PageNo=${pageNo - 1}&PageSize=6`, this.sharedService.getHeaders());
  }
  GetCurrentSessionCollectedCard(searchText, pageNo, pageSize = 6) {
    return this.http.get(this.apiUrl + `Cashier/GetCurrentSessionCollectedCard?PayerName=${searchText}&PageNo=${pageNo - 1}&PageSize=${pageSize}`, this.sharedService.getHeaders());
  }
  EditCollectionCheuqe(cheque) {
    return this.http.post(this.apiUrl + 'Cashier/EditCollectionCheuqe', cheque, this.sharedService.getHeaders());
  }
  ActionsOnCheques(cheque) {
    return this.http.post(this.apiUrl + 'Cashier/ActionsOnCheques', cheque, this.sharedService.getHeaders());
  }
  ReverseActionsOnCheques(cheque) {
    return this.http.post(this.apiUrl + 'Cashier/ReverseActionsOnCheques', cheque, this.sharedService.getHeaders());
  }
  EditCollectionByCards(cheque) {
    return this.http.post(this.apiUrl + 'Cashier/EditCollectionByCards', cheque, this.sharedService.getHeaders());
  }
  ActionsOnCard(cheque) {
    return this.http.post(this.apiUrl + 'Cashier/ActionsOnCard', cheque, this.sharedService.getHeaders());
  }
  actionsOnCardGroup(cheque) {
    return this.http.post(this.apiUrl + 'Cashier/ActionsOnCardGroup', cheque, this.sharedService.getHeaders());
  }
  ReverseActionsOnCard(cheque) {
    return this.http.post(this.apiUrl + 'Cashier/ReverseActionsOnCard', cheque, this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + 'Lookups/GetLookups?lookupTypeId=' + id + '&pageNo=0&pageSize=1000', this.sharedService.getHeaders());
  }
}
CloseRegisterService.ɵfac = function CloseRegisterService_Factory(t) {
  return new (t || CloseRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
CloseRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CloseRegisterService,
  factory: CloseRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 45832:
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/opening-register/services/openregister.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenregisterService": () => (/* binding */ OpenregisterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class OpenregisterService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  OpenRegisterSession(register) {
    return this.http.post(this.apiUrl + 'Cashier/OpenRegisterSession', register, this.sharedService.getHeaders());
  }
  CanOpenRegisterSession(register) {
    return this.http.post(this.apiUrl + 'Cashier/CanOpenRegisterSession', register, this.sharedService.getHeaders());
  }
}
OpenregisterService.ɵfac = function OpenregisterService_Factory(t) {
  return new (t || OpenregisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
OpenregisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OpenregisterService,
  factory: OpenregisterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 27112:
/*!********************************************************!*\
  !*** ./src/app/dashboard/no-menu/no-menu.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoMenuComponent": () => (/* binding */ NoMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NoMenuComponent {}
NoMenuComponent.ɵfac = function NoMenuComponent_Factory(t) {
  return new (t || NoMenuComponent)();
};
NoMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NoMenuComponent,
  selectors: [["app-no-menu"]],
  decls: 0,
  vars: 0,
  template: function NoMenuComponent_Template(rf, ctx) {},
  styles: ["div[_ngcontent-%COMP%] {\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL25vLW1lbnUvbm8tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICBoZWlnaHQ6NjAwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 91493:
/*!*********************************************!*\
  !*** ./src/app/services/signalR.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignalRService": () => (/* binding */ SignalRService)
/* harmony export */ });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ 77930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.service */ 69082);



class SignalRService {
  constructor(sharedService) {
    this.sharedService = sharedService;
  }
  startConnection() {
    this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__.HubConnectionBuilder().withUrl(`http://dxtestpos.markaziaapis.com/ChatHub?userId=${this.sharedService.getUserId}`).withAutomaticReconnect().build();
    this.hubConnection.start().then(() => {
      console.log('Connection started');
    }).catch(err => {
      //console.log('Error while starting connection: ' + err)
    });
    // Handle connection closed with error
    this.hubConnection.onclose(error => {
      //console.log('Connection closed with error:', error);
      // Manually attempt to reconnect
      this.startConnection();
    });
  }
  addNotificationListener(callback) {
    this.hubConnection.on('sendMessage', callback);
  }
  stopConnection() {
    if (this.hubConnection) {
      this.hubConnection.stop().then(() => console.log('Connection stopped'));
    }
  }
}
SignalRService.ɵfac = function SignalRService_Factory(t) {
  return new (t || SignalRService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
SignalRService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SignalRService,
  factory: SignalRService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 29444:
/*!*********************************************!*\
  !*** ./src/app/services/subject.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectService": () => (/* binding */ SubjectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);


class SubjectService {
  constructor() {
    this.isRegisterOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sessionDetails = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      opened: false
    });
    this.isCollectionPaymentDone = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.bankTransferFiles = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.chequeFiles = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.chequeFinanceApprovalFiles = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.bankPledgeFiles = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.orderReturnFilters = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.pettyCashTreasuryExpenses = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.replenishmentRequestReceived = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.pNCollectionReceiving = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.cashierNote = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.collectedOrder = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.paymentDoneModalClosed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.updateCustomerInLocalStorage = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
}
SubjectService.ɵfac = function SubjectService_Factory(t) {
  return new (t || SubjectService)();
};
SubjectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SubjectService,
  factory: SubjectService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 38591:
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/AbortController.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortController": () => (/* binding */ AbortController)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
class AbortController {
  constructor() {
    this._isAborted = false;
    this.onabort = null;
  }
  abort() {
    if (!this._isAborted) {
      this._isAborted = true;
      if (this.onabort) {
        this.onabort();
      }
    }
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
}

/***/ }),

/***/ 73743:
/*!***************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/AccessTokenHttpClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessTokenHttpClient": () => (/* binding */ AccessTokenHttpClient)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderNames */ 25018);
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ 20170);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


/** @private */
class AccessTokenHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_1__.HttpClient {
  constructor(innerClient, accessTokenFactory) {
    super();
    this._innerClient = innerClient;
    this._accessTokenFactory = accessTokenFactory;
  }
  send(request) {
    var _this = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let allowRetry = true;
      if (_this._accessTokenFactory && (!_this._accessToken || request.url && request.url.indexOf("/negotiate?") > 0)) {
        // don't retry if the request is a negotiate or if we just got a potentially new token from the access token factory
        allowRetry = false;
        _this._accessToken = yield _this._accessTokenFactory();
      }
      _this._setAuthorizationHeader(request);
      const response = yield _this._innerClient.send(request);
      if (allowRetry && response.statusCode === 401 && _this._accessTokenFactory) {
        _this._accessToken = yield _this._accessTokenFactory();
        _this._setAuthorizationHeader(request);
        return yield _this._innerClient.send(request);
      }
      return response;
    })();
  }
  _setAuthorizationHeader(request) {
    if (!request.headers) {
      request.headers = {};
    }
    if (this._accessToken) {
      request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_2__.HeaderNames.Authorization] = `Bearer ${this._accessToken}`;
    }
    // don't remove the header if there isn't an access token factory, the user manually added the header in this case
    else if (this._accessTokenFactory) {
      if (request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_2__.HeaderNames.Authorization]) {
        delete request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_2__.HeaderNames.Authorization];
      }
    }
  }
  getCookieString(url) {
    return this._innerClient.getCookieString(url);
  }
}

/***/ }),

/***/ 14730:
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultHttpClient": () => (/* binding */ DefaultHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ 78139);
/* harmony import */ var _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchHttpClient */ 46746);
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ 20170);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 7375);
/* harmony import */ var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XhrHttpClient */ 98385);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





/** Default implementation of {@link @microsoft/signalr.HttpClient}. */
class DefaultHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(logger) {
    super();
    if (typeof fetch !== "undefined" || _Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode) {
      this._httpClient = new _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__.FetchHttpClient(logger);
    } else if (typeof XMLHttpRequest !== "undefined") {
      this._httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__.XhrHttpClient(logger);
    } else {
      throw new Error("No usable HttpClient found.");
    }
  }
  /** @inheritDoc */
  send(request) {
    // Check that abort was not signaled before calling send
    if (request.abortSignal && request.abortSignal.aborted) {
      return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_4__.AbortError());
    }
    if (!request.method) {
      return Promise.reject(new Error("No method defined."));
    }
    if (!request.url) {
      return Promise.reject(new Error("No url defined."));
    }
    return this._httpClient.send(request);
  }
  getCookieString(url) {
    return this._httpClient.getCookieString(url);
  }
}

/***/ }),

/***/ 87447:
/*!****************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultReconnectPolicy": () => (/* binding */ DefaultReconnectPolicy)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// 0, 2, 10, 30 second delays before reconnect attempts.
const DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
/** @private */
class DefaultReconnectPolicy {
  constructor(retryDelays) {
    this._retryDelays = retryDelays !== undefined ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
  }
  nextRetryDelayInMilliseconds(retryContext) {
    return this._retryDelays[retryContext.previousRetryCount];
  }
}

/***/ }),

/***/ 71733:
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/DynamicImports.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureAbortController": () => (/* binding */ configureAbortController),
/* harmony export */   "configureFetch": () => (/* binding */ configureFetch),
/* harmony export */   "getEventSource": () => (/* binding */ getEventSource),
/* harmony export */   "getWS": () => (/* binding */ getWS)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ 7375);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

/** @private */
function configureFetch(obj) {
  // Node added a fetch implementation to the global scope starting in v18.
  // We need to add a cookie jar in node to be able to share cookies with WebSocket
  if (typeof fetch === "undefined" || _Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode) {
    // Cookies aren't automatically handled in Node so we need to add a CookieJar to preserve cookies across requests
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    obj._jar = new ((__webpack_require__(/*! tough-cookie */ 57333).CookieJar))();
    if (typeof fetch === "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      obj._fetchType = __webpack_require__(/*! node-fetch */ 98190);
    } else {
      // Use fetch from Node if available
      obj._fetchType = fetch;
    }
    // node-fetch doesn't have a nice API for getting and setting cookies
    // fetch-cookie will wrap a fetch implementation with a default CookieJar or a provided one
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    obj._fetchType = __webpack_require__(/*! fetch-cookie */ 86045)(obj._fetchType, obj._jar);
    return true;
  }
  return false;
}
/** @private */
function configureAbortController(obj) {
  if (typeof AbortController === "undefined") {
    // Node needs EventListener methods on AbortController which our custom polyfill doesn't provide
    obj._abortControllerType = __webpack_require__(/*! abort-controller */ 6771);
    return true;
  }
  return false;
}
/** @private */
function getWS() {
  return __webpack_require__(/*! ws */ 6139);
}
/** @private */
function getEventSource() {
  return __webpack_require__(/*! eventsource */ 18022);
}

/***/ }),

/***/ 78139:
/*!************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Errors.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortError": () => (/* binding */ AbortError),
/* harmony export */   "AggregateErrors": () => (/* binding */ AggregateErrors),
/* harmony export */   "DisabledTransportError": () => (/* binding */ DisabledTransportError),
/* harmony export */   "FailedToNegotiateWithServerError": () => (/* binding */ FailedToNegotiateWithServerError),
/* harmony export */   "FailedToStartTransportError": () => (/* binding */ FailedToStartTransportError),
/* harmony export */   "HttpError": () => (/* binding */ HttpError),
/* harmony export */   "TimeoutError": () => (/* binding */ TimeoutError),
/* harmony export */   "UnsupportedTransportError": () => (/* binding */ UnsupportedTransportError)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Error thrown when an HTTP request fails. */
class HttpError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The HTTP status code represented by this error.
   */
  constructor(errorMessage, statusCode) {
    const trueProto = new.target.prototype;
    super(`${errorMessage}: Status code '${statusCode}'`);
    this.statusCode = statusCode;
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    this.__proto__ = trueProto;
  }
}
/** Error thrown when a timeout elapses. */
class TimeoutError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(errorMessage = "A timeout occurred.") {
    const trueProto = new.target.prototype;
    super(errorMessage);
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    this.__proto__ = trueProto;
  }
}
/** Error thrown when an action is aborted. */
class AbortError extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(errorMessage = "An abort occurred.") {
    const trueProto = new.target.prototype;
    super(errorMessage);
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    this.__proto__ = trueProto;
  }
}
/** Error thrown when the selected transport is unsupported by the browser. */
/** @private */
class UnsupportedTransportError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(message, transport) {
    const trueProto = new.target.prototype;
    super(message);
    this.transport = transport;
    this.errorType = 'UnsupportedTransportError';
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    this.__proto__ = trueProto;
  }
}
/** Error thrown when the selected transport is disabled by the browser. */
/** @private */
class DisabledTransportError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(message, transport) {
    const trueProto = new.target.prototype;
    super(message);
    this.transport = transport;
    this.errorType = 'DisabledTransportError';
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    this.__proto__ = trueProto;
  }
}
/** Error thrown when the selected transport cannot be started. */
/** @private */
class FailedToStartTransportError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(message, transport) {
    const trueProto = new.target.prototype;
    super(message);
    this.transport = transport;
    this.errorType = 'FailedToStartTransportError';
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    this.__proto__ = trueProto;
  }
}
/** Error thrown when the negotiation with the server failed to complete. */
/** @private */
class FailedToNegotiateWithServerError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(message) {
    const trueProto = new.target.prototype;
    super(message);
    this.errorType = 'FailedToNegotiateWithServerError';
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    this.__proto__ = trueProto;
  }
}
/** Error thrown when multiple errors have occurred. */
/** @private */
class AggregateErrors extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
   *
   * @param {string} message A descriptive error message.
   * @param {Error[]} innerErrors The collection of errors this error is aggregating.
   */
  constructor(message, innerErrors) {
    const trueProto = new.target.prototype;
    super(message);
    this.innerErrors = innerErrors;
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    this.__proto__ = trueProto;
  }
}

/***/ }),

/***/ 46746:
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchHttpClient": () => (/* binding */ FetchHttpClient)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ 78139);
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ 20170);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ 7375);
/* harmony import */ var _DynamicImports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynamicImports */ 71733);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





class FetchHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_1__.HttpClient {
  constructor(logger) {
    super();
    this._logger = logger;
    // This is how you do "reference" arguments
    const fetchObj = {
      _fetchType: undefined,
      _jar: undefined
    };
    if ((0,_DynamicImports__WEBPACK_IMPORTED_MODULE_2__.configureFetch)(fetchObj)) {
      this._fetchType = fetchObj._fetchType;
      this._jar = fetchObj._jar;
    } else {
      this._fetchType = fetch.bind((0,_Utils__WEBPACK_IMPORTED_MODULE_3__.getGlobalThis)());
    }
    this._abortControllerType = AbortController;
    const abortObj = {
      _abortControllerType: this._abortControllerType
    };
    if ((0,_DynamicImports__WEBPACK_IMPORTED_MODULE_2__.configureAbortController)(abortObj)) {
      this._abortControllerType = abortObj._abortControllerType;
    }
  }
  /** @inheritDoc */
  send(request) {
    var _this = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Check that abort was not signaled before calling send
      if (request.abortSignal && request.abortSignal.aborted) {
        throw new _Errors__WEBPACK_IMPORTED_MODULE_4__.AbortError();
      }
      if (!request.method) {
        throw new Error("No method defined.");
      }
      if (!request.url) {
        throw new Error("No url defined.");
      }
      const abortController = new _this._abortControllerType();
      let error;
      // Hook our abortSignal into the abort controller
      if (request.abortSignal) {
        request.abortSignal.onabort = () => {
          abortController.abort();
          error = new _Errors__WEBPACK_IMPORTED_MODULE_4__.AbortError();
        };
      }
      // If a timeout has been passed in, setup a timeout to call abort
      // Type needs to be any to fit window.setTimeout and NodeJS.setTimeout
      let timeoutId = null;
      if (request.timeout) {
        const msTimeout = request.timeout;
        timeoutId = setTimeout(() => {
          abortController.abort();
          _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Warning, `Timeout from HTTP request.`);
          error = new _Errors__WEBPACK_IMPORTED_MODULE_4__.TimeoutError();
        }, msTimeout);
      }
      if (request.content === "") {
        request.content = undefined;
      }
      if (request.content) {
        // Explicitly setting the Content-Type header for React Native on Android platform.
        request.headers = request.headers || {};
        if ((0,_Utils__WEBPACK_IMPORTED_MODULE_3__.isArrayBuffer)(request.content)) {
          request.headers["Content-Type"] = "application/octet-stream";
        } else {
          request.headers["Content-Type"] = "text/plain;charset=UTF-8";
        }
      }
      let response;
      try {
        response = yield _this._fetchType(request.url, {
          body: request.content,
          cache: "no-cache",
          credentials: request.withCredentials === true ? "include" : "same-origin",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            ...request.headers
          },
          method: request.method,
          mode: "cors",
          redirect: "follow",
          signal: abortController.signal
        });
      } catch (e) {
        if (error) {
          throw error;
        }
        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_5__.LogLevel.Warning, `Error from HTTP request. ${e}.`);
        throw e;
      } finally {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (request.abortSignal) {
          request.abortSignal.onabort = null;
        }
      }
      if (!response.ok) {
        const errorMessage = yield deserializeContent(response, "text");
        throw new _Errors__WEBPACK_IMPORTED_MODULE_4__.HttpError(errorMessage || response.statusText, response.status);
      }
      const content = deserializeContent(response, request.responseType);
      const payload = yield content;
      return new _HttpClient__WEBPACK_IMPORTED_MODULE_1__.HttpResponse(response.status, response.statusText, payload);
    })();
  }
  getCookieString(url) {
    let cookies = "";
    if (_Utils__WEBPACK_IMPORTED_MODULE_3__.Platform.isNode && this._jar) {
      // @ts-ignore: unused variable
      this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
    }
    return cookies;
  }
}
function deserializeContent(response, responseType) {
  let content;
  switch (responseType) {
    case "arraybuffer":
      content = response.arrayBuffer();
      break;
    case "text":
      content = response.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${responseType} is not supported.`);
    default:
      content = response.text();
      break;
  }
  return content;
}

/***/ }),

/***/ 48427:
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandshakeProtocol": () => (/* binding */ HandshakeProtocol)
/* harmony export */ });
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMessageFormat */ 2365);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 7375);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


/** @private */
class HandshakeProtocol {
  // Handshake request is always JSON
  writeHandshakeRequest(handshakeRequest) {
    return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.write(JSON.stringify(handshakeRequest));
  }
  parseHandshakeResponse(data) {
    let messageData;
    let remainingData;
    if ((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(data)) {
      // Format is binary but still need to read JSON text from handshake response
      const binaryData = new Uint8Array(data);
      const separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparatorCode);
      if (separatorIndex === -1) {
        throw new Error("Message is incomplete.");
      }
      // content before separator is handshake response
      // optional content after is additional messages
      const responseLength = separatorIndex + 1;
      messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
      remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
    } else {
      const textData = data;
      const separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparator);
      if (separatorIndex === -1) {
        throw new Error("Message is incomplete.");
      }
      // content before separator is handshake response
      // optional content after is additional messages
      const responseLength = separatorIndex + 1;
      messageData = textData.substring(0, responseLength);
      remainingData = textData.length > responseLength ? textData.substring(responseLength) : null;
    }
    // At this point we should have just the single handshake message
    const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.parse(messageData);
    const response = JSON.parse(messages[0]);
    if (response.type) {
      throw new Error("Expected a handshake response from the server.");
    }
    const responseMessage = response;
    // multiple messages could have arrived with handshake
    // return additional data to be parsed as usual, or null if all parsed
    return [remainingData, responseMessage];
  }
}

/***/ }),

/***/ 25018:
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HeaderNames.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderNames": () => (/* binding */ HeaderNames)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
class HeaderNames {}
HeaderNames.Authorization = "Authorization";
HeaderNames.Cookie = "Cookie";

/***/ }),

/***/ 20170:
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HttpClient.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClient": () => (/* binding */ HttpClient),
/* harmony export */   "HttpResponse": () => (/* binding */ HttpResponse)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Represents an HTTP response. */
class HttpResponse {
  constructor(statusCode, statusText, content) {
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.content = content;
  }
}
/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
class HttpClient {
  get(url, options) {
    return this.send({
      ...options,
      method: "GET",
      url
    });
  }
  post(url, options) {
    return this.send({
      ...options,
      method: "POST",
      url
    });
  }
  delete(url, options) {
    return this.send({
      ...options,
      method: "DELETE",
      url
    });
  }
  /** Gets all cookies that apply to the specified URL.
   *
   * @param url The URL that the cookies are valid for.
   * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
   */
  // @ts-ignore
  getCookieString(url) {
    return "";
  }
}

/***/ }),

/***/ 43606:
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HttpConnection.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConnection": () => (/* binding */ HttpConnection),
/* harmony export */   "TransportSendQueue": () => (/* binding */ TransportSendQueue)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _AccessTokenHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessTokenHttpClient */ 73743);
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultHttpClient */ 14730);
/* harmony import */ var _DynamicImports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynamicImports */ 71733);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Errors */ 78139);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ITransport */ 84493);
/* harmony import */ var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LongPollingTransport */ 26370);
/* harmony import */ var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ServerSentEventsTransport */ 98331);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 7375);
/* harmony import */ var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebSocketTransport */ 86097);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.










const MAX_REDIRECTS = 100;
/** @private */
class HttpConnection {
  constructor(url, options = {}) {
    this._stopPromiseResolver = () => {};
    this.features = {};
    this._negotiateVersion = 1;
    _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
    this._logger = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createLogger)(options.logger);
    this.baseUrl = this._resolveUrl(url);
    options = options || {};
    options.logMessageContent = options.logMessageContent === undefined ? false : options.logMessageContent;
    if (typeof options.withCredentials === "boolean" || options.withCredentials === undefined) {
      options.withCredentials = options.withCredentials === undefined ? true : options.withCredentials;
    } else {
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    }
    options.timeout = options.timeout === undefined ? 100 * 1000 : options.timeout;
    let webSocketModule = null;
    let eventSourceModule = null;
    if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && "function" !== "undefined") {
      webSocketModule = (0,_DynamicImports__WEBPACK_IMPORTED_MODULE_2__.getWS)();
      eventSourceModule = (0,_DynamicImports__WEBPACK_IMPORTED_MODULE_2__.getEventSource)();
    }
    if (!_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
      options.WebSocket = WebSocket;
    } else if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && !options.WebSocket) {
      if (webSocketModule) {
        options.WebSocket = webSocketModule;
      }
    }
    if (!_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
      options.EventSource = EventSource;
    } else if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && !options.EventSource) {
      if (typeof eventSourceModule !== "undefined") {
        options.EventSource = eventSourceModule;
      }
    }
    this._httpClient = new _AccessTokenHttpClient__WEBPACK_IMPORTED_MODULE_3__.AccessTokenHttpClient(options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_4__.DefaultHttpClient(this._logger), options.accessTokenFactory);
    this._connectionState = "Disconnected" /* ConnectionState.Disconnected */;
    this._connectionStarted = false;
    this._options = options;
    this.onreceive = null;
    this.onclose = null;
  }
  start(transferFormat) {
    var _this = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_5__.TransferFormat.Binary;
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_5__.TransferFormat, "transferFormat");
      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Starting connection with transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_5__.TransferFormat[transferFormat]}'.`);
      if (_this._connectionState !== "Disconnected" /* ConnectionState.Disconnected */) {
        return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
      }
      _this._connectionState = "Connecting" /* ConnectionState.Connecting */;
      _this._startInternalPromise = _this._startInternal(transferFormat);
      yield _this._startInternalPromise;
      // The TypeScript compiler thinks that connectionState must be Connecting here. The TypeScript compiler is wrong.
      if (_this._connectionState === "Disconnecting" /* ConnectionState.Disconnecting */) {
        // stop() was called and transitioned the client into the Disconnecting state.
        const message = "Failed to start the HttpConnection before stop() was called.";
        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Error, message);
        // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
        yield _this._stopPromise;
        return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_7__.AbortError(message));
      } else if (_this._connectionState !== "Connected" /* ConnectionState.Connected */) {
        // stop() was called and transitioned the client into the Disconnecting state.
        const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Error, message);
        return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_7__.AbortError(message));
      }
      _this._connectionStarted = true;
    })();
  }
  send(data) {
    if (this._connectionState !== "Connected" /* ConnectionState.Connected */) {
      return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
    }
    if (!this._sendQueue) {
      this._sendQueue = new TransportSendQueue(this.transport);
    }
    // Transport will not be null if state is connected
    return this._sendQueue.send(data);
  }
  stop(error) {
    var _this2 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2._connectionState === "Disconnected" /* ConnectionState.Disconnected */) {
        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);
        return Promise.resolve();
      }
      if (_this2._connectionState === "Disconnecting" /* ConnectionState.Disconnecting */) {
        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
        return _this2._stopPromise;
      }
      _this2._connectionState = "Disconnecting" /* ConnectionState.Disconnecting */;
      _this2._stopPromise = new Promise(resolve => {
        // Don't complete stop() until stopConnection() completes.
        _this2._stopPromiseResolver = resolve;
      });
      // stopInternal should never throw so just observe it.
      yield _this2._stopInternal(error);
      yield _this2._stopPromise;
    })();
  }
  _stopInternal(error) {
    var _this3 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Set error as soon as possible otherwise there is a race between
      // the transport closing and providing an error and the error from a close message
      // We would prefer the close message error.
      _this3._stopError = error;
      try {
        yield _this3._startInternalPromise;
      } catch (e) {
        // This exception is returned to the user as a rejected Promise from the start method.
      }
      // The transport's onclose will trigger stopConnection which will run our onclose event.
      // The transport should always be set if currently connected. If it wasn't set, it's likely because
      // stop was called during start() and start() failed.
      if (_this3.transport) {
        try {
          yield _this3.transport.stop();
        } catch (e) {
          _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);
          _this3._stopConnection();
        }
        _this3.transport = undefined;
      } else {
        _this3._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
      }
    })();
  }
  _startInternal(transferFormat) {
    var _this4 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Store the original base url and the access token factory since they may change
      // as part of negotiating
      let url = _this4.baseUrl;
      _this4._accessTokenFactory = _this4._options.accessTokenFactory;
      _this4._httpClient._accessTokenFactory = _this4._accessTokenFactory;
      try {
        if (_this4._options.skipNegotiation) {
          if (_this4._options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType.WebSockets) {
            // No need to add a connection ID in this case
            _this4.transport = _this4._constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType.WebSockets);
            // We should just call connect directly in this case.
            // No fallback or negotiate in this case.
            yield _this4._startTransport(url, transferFormat);
          } else {
            throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
          }
        } else {
          let negotiateResponse = null;
          let redirects = 0;
          do {
            negotiateResponse = yield _this4._getNegotiationResponse(url);
            // the user tries to stop the connection when it is being started
            if (_this4._connectionState === "Disconnecting" /* ConnectionState.Disconnecting */ || _this4._connectionState === "Disconnected" /* ConnectionState.Disconnected */) {
              throw new _Errors__WEBPACK_IMPORTED_MODULE_7__.AbortError("The connection was stopped during negotiation.");
            }
            if (negotiateResponse.error) {
              throw new Error(negotiateResponse.error);
            }
            if (negotiateResponse.ProtocolVersion) {
              throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
            }
            if (negotiateResponse.url) {
              url = negotiateResponse.url;
            }
            if (negotiateResponse.accessToken) {
              // Replace the current access token factory with one that uses
              // the returned access token
              const accessToken = negotiateResponse.accessToken;
              _this4._accessTokenFactory = () => accessToken;
              // set the factory to undefined so the AccessTokenHttpClient won't retry with the same token, since we know it won't change until a connection restart
              _this4._httpClient._accessToken = accessToken;
              _this4._httpClient._accessTokenFactory = undefined;
            }
            redirects++;
          } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
          if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
            throw new Error("Negotiate redirection limit exceeded.");
          }
          yield _this4._createTransport(url, _this4._options.transport, negotiateResponse, transferFormat);
        }
        if (_this4.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_8__.LongPollingTransport) {
          _this4.features.inherentKeepAlive = true;
        }
        if (_this4._connectionState === "Connecting" /* ConnectionState.Connecting */) {
          // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
          // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
          _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, "The HttpConnection connected successfully.");
          _this4._connectionState = "Connected" /* ConnectionState.Connected */;
        }
        // stop() is waiting on us via this.startInternalPromise so keep this.transport around so it can clean up.
        // This is the only case startInternal can exit in neither the connected nor disconnected state because stopConnection()
        // will transition to the disconnected state. start() will wait for the transition using the stopPromise.
      } catch (e) {
        _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Error, "Failed to start the connection: " + e);
        _this4._connectionState = "Disconnected" /* ConnectionState.Disconnected */;
        _this4.transport = undefined;
        // if start fails, any active calls to stop assume that start will complete the stop promise
        _this4._stopPromiseResolver();
        return Promise.reject(e);
      }
    })();
  }
  _getNegotiationResponse(url) {
    var _this5 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = {};
      const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
      headers[name] = value;
      const negotiateUrl = _this5._resolveNegotiateUrl(url);
      _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
      try {
        const response = yield _this5._httpClient.post(negotiateUrl, {
          content: "",
          headers: {
            ...headers,
            ..._this5._options.headers
          },
          timeout: _this5._options.timeout,
          withCredentials: _this5._options.withCredentials
        });
        if (response.statusCode !== 200) {
          return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
        }
        const negotiateResponse = JSON.parse(response.content);
        if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
          // Negotiate version 0 doesn't use connectionToken
          // So we set it equal to connectionId so all our logic can use connectionToken without being aware of the negotiate version
          negotiateResponse.connectionToken = negotiateResponse.connectionId;
        }
        if (negotiateResponse.useStatefulReconnect && _this5._options._useStatefulReconnect !== true) {
          return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_7__.FailedToNegotiateWithServerError("Client didn't negotiate Stateful Reconnect but the server did."));
        }
        return negotiateResponse;
      } catch (e) {
        let errorMessage = "Failed to complete negotiation with the server: " + e;
        if (e instanceof _Errors__WEBPACK_IMPORTED_MODULE_7__.HttpError) {
          if (e.statusCode === 404) {
            errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
          }
        }
        _this5._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Error, errorMessage);
        return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_7__.FailedToNegotiateWithServerError(errorMessage));
      }
    })();
  }
  _createConnectUrl(url, connectionToken) {
    if (!connectionToken) {
      return url;
    }
    return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
  }
  _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
    var _this6 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let connectUrl = _this6._createConnectUrl(url, negotiateResponse.connectionToken);
      if (_this6._isITransport(requestedTransport)) {
        _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
        _this6.transport = requestedTransport;
        yield _this6._startTransport(connectUrl, requestedTransferFormat);
        _this6.connectionId = negotiateResponse.connectionId;
        return;
      }
      const transportExceptions = [];
      const transports = negotiateResponse.availableTransports || [];
      let negotiate = negotiateResponse;
      for (const endpoint of transports) {
        const transportOrError = _this6._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, (negotiate === null || negotiate === void 0 ? void 0 : negotiate.useStatefulReconnect) === true);
        if (transportOrError instanceof Error) {
          // Store the error and continue, we don't want to cause a re-negotiate in these cases
          transportExceptions.push(`${endpoint.transport} failed:`);
          transportExceptions.push(transportOrError);
        } else if (_this6._isITransport(transportOrError)) {
          _this6.transport = transportOrError;
          if (!negotiate) {
            try {
              negotiate = yield _this6._getNegotiationResponse(url);
            } catch (ex) {
              return Promise.reject(ex);
            }
            connectUrl = _this6._createConnectUrl(url, negotiate.connectionToken);
          }
          try {
            yield _this6._startTransport(connectUrl, requestedTransferFormat);
            _this6.connectionId = negotiate.connectionId;
            return;
          } catch (ex) {
            _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
            negotiate = undefined;
            transportExceptions.push(new _Errors__WEBPACK_IMPORTED_MODULE_7__.FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, _ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType[endpoint.transport]));
            if (_this6._connectionState !== "Connecting" /* ConnectionState.Connecting */) {
              const message = "Failed to select transport before stop() was called.";
              _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, message);
              return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_7__.AbortError(message));
            }
          }
        }
      }
      if (transportExceptions.length > 0) {
        return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_7__.AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
      }
      return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
    })();
  }
  _constructTransport(transport) {
    switch (transport) {
      case _ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType.WebSockets:
        if (!this._options.WebSocket) {
          throw new Error("'WebSocket' is not supported in your environment.");
        }
        return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_9__.WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case _ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType.ServerSentEvents:
        if (!this._options.EventSource) {
          throw new Error("'EventSource' is not supported in your environment.");
        }
        return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_10__.ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
      case _ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType.LongPolling:
        return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_8__.LongPollingTransport(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${transport}.`);
    }
  }
  _startTransport(url, transferFormat) {
    var _this7 = this;
    this.transport.onreceive = this.onreceive;
    if (this.features.reconnect) {
      this.transport.onclose = /*#__PURE__*/function () {
        var _ref = (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          let callStop = false;
          if (_this7.features.reconnect) {
            try {
              _this7.features.disconnected();
              yield _this7.transport.connect(url, transferFormat);
              yield _this7.features.resend();
            } catch {
              callStop = true;
            }
          } else {
            _this7._stopConnection(e);
            return;
          }
          if (callStop) {
            _this7._stopConnection(e);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    } else {
      this.transport.onclose = e => this._stopConnection(e);
    }
    return this.transport.connect(url, transferFormat);
  }
  _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, useStatefulReconnect) {
    const transport = _ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType[endpoint.transport];
    if (transport === null || transport === undefined) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
      return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
    } else {
      if (transportMatches(requestedTransport, transport)) {
        const transferFormats = endpoint.transferFormats.map(s => _ITransport__WEBPACK_IMPORTED_MODULE_5__.TransferFormat[s]);
        if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
          if (transport === _ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType.WebSockets && !this._options.WebSocket || transport === _ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType.ServerSentEvents && !this._options.EventSource) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType[transport]}' because it is not supported in your environment.'`);
            return new _Errors__WEBPACK_IMPORTED_MODULE_7__.UnsupportedTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType[transport]}' is not supported in your environment.`, transport);
          } else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Selecting transport '${_ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType[transport]}'.`);
            try {
              this.features.reconnect = transport === _ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType.WebSockets ? useStatefulReconnect : undefined;
              return this._constructTransport(transport);
            } catch (ex) {
              return ex;
            }
          }
        } else {
          this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType[transport]}' because it does not support the requested transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_5__.TransferFormat[requestedTransferFormat]}'.`);
          return new Error(`'${_ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType[transport]}' does not support ${_ITransport__WEBPACK_IMPORTED_MODULE_5__.TransferFormat[requestedTransferFormat]}.`);
        }
      } else {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType[transport]}' because it was disabled by the client.`);
        return new _Errors__WEBPACK_IMPORTED_MODULE_7__.DisabledTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_5__.HttpTransportType[transport]}' is disabled by the client.`, transport);
      }
    }
  }
  _isITransport(transport) {
    return transport && typeof transport === "object" && "connect" in transport;
  }
  _stopConnection(error) {
    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);
    this.transport = undefined;
    // If we have a stopError, it takes precedence over the error from the transport
    error = this._stopError || error;
    this._stopError = undefined;
    if (this._connectionState === "Disconnected" /* ConnectionState.Disconnected */) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting" /* ConnectionState.Connecting */) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);
      throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
    }
    if (this._connectionState === "Disconnecting" /* ConnectionState.Disconnecting */) {
      // A call to stop() induced this call to stopConnection and needs to be completed.
      // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
      this._stopPromiseResolver();
    }
    if (error) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Error, `Connection disconnected with error '${error}'.`);
    } else {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Information, "Connection disconnected.");
    }
    if (this._sendQueue) {
      this._sendQueue.stop().catch(e => {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
      });
      this._sendQueue = undefined;
    }
    this.connectionId = undefined;
    this._connectionState = "Disconnected" /* ConnectionState.Disconnected */;
    if (this._connectionStarted) {
      this._connectionStarted = false;
      try {
        if (this.onclose) {
          this.onclose(error);
        }
      } catch (e) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e}'.`);
      }
    }
  }
  _resolveUrl(url) {
    // startsWith is not supported in IE
    if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
      return url;
    }
    if (!_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser) {
      throw new Error(`Cannot resolve '${url}'.`);
    }
    // Setting the url to the href propery of an anchor tag handles normalization
    // for us. There are 3 main cases.
    // 1. Relative path normalization e.g "b" -> "http://localhost:5000/a/b"
    // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
    // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
    const aTag = window.document.createElement("a");
    aTag.href = url;
    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);
    return aTag.href;
  }
  _resolveNegotiateUrl(url) {
    const negotiateUrl = new URL(url);
    if (negotiateUrl.pathname.endsWith('/')) {
      negotiateUrl.pathname += "negotiate";
    } else {
      negotiateUrl.pathname += "/negotiate";
    }
    const searchParams = new URLSearchParams(negotiateUrl.searchParams);
    if (!searchParams.has("negotiateVersion")) {
      searchParams.append("negotiateVersion", this._negotiateVersion.toString());
    }
    if (searchParams.has("useStatefulReconnect")) {
      if (searchParams.get("useStatefulReconnect") === "true") {
        this._options._useStatefulReconnect = true;
      }
    } else if (this._options._useStatefulReconnect === true) {
      searchParams.append("useStatefulReconnect", "true");
    }
    negotiateUrl.search = searchParams.toString();
    return negotiateUrl.toString();
  }
}
function transportMatches(requestedTransport, actualTransport) {
  return !requestedTransport || (actualTransport & requestedTransport) !== 0;
}
/** @private */
class TransportSendQueue {
  constructor(_transport) {
    this._transport = _transport;
    this._buffer = [];
    this._executing = true;
    this._sendBufferedData = new PromiseSource();
    this._transportResult = new PromiseSource();
    this._sendLoopPromise = this._sendLoop();
  }
  send(data) {
    this._bufferData(data);
    if (!this._transportResult) {
      this._transportResult = new PromiseSource();
    }
    return this._transportResult.promise;
  }
  stop() {
    this._executing = false;
    this._sendBufferedData.resolve();
    return this._sendLoopPromise;
  }
  _bufferData(data) {
    if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof data}`);
    }
    this._buffer.push(data);
    this._sendBufferedData.resolve();
  }
  _sendLoop() {
    var _this8 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      while (true) {
        yield _this8._sendBufferedData.promise;
        if (!_this8._executing) {
          if (_this8._transportResult) {
            _this8._transportResult.reject("Connection stopped.");
          }
          break;
        }
        _this8._sendBufferedData = new PromiseSource();
        const transportResult = _this8._transportResult;
        _this8._transportResult = undefined;
        const data = typeof _this8._buffer[0] === "string" ? _this8._buffer.join("") : TransportSendQueue._concatBuffers(_this8._buffer);
        _this8._buffer.length = 0;
        try {
          yield _this8._transport.send(data);
          transportResult.resolve();
        } catch (error) {
          transportResult.reject(error);
        }
      }
    })();
  }
  static _concatBuffers(arrayBuffers) {
    const totalLength = arrayBuffers.map(b => b.byteLength).reduce((a, b) => a + b);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const item of arrayBuffers) {
      result.set(new Uint8Array(item), offset);
      offset += item.byteLength;
    }
    return result.buffer;
  }
}
class PromiseSource {
  constructor() {
    this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
  }
  resolve() {
    this._resolver();
  }
  reject(reason) {
    this._rejecter(reason);
  }
}

/***/ }),

/***/ 96666:
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HubConnection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubConnection": () => (/* binding */ HubConnection),
/* harmony export */   "HubConnectionState": () => (/* binding */ HubConnectionState)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HandshakeProtocol */ 48427);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Errors */ 78139);
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IHubProtocol */ 82362);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Subject */ 13838);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ 7375);
/* harmony import */ var _MessageBuffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessageBuffer */ 26605);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.







const DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
const DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
const DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE = 100000;
/** Describes the current state of the {@link HubConnection} to the server. */
var HubConnectionState;
(function (HubConnectionState) {
  /** The hub connection is disconnected. */
  HubConnectionState["Disconnected"] = "Disconnected";
  /** The hub connection is connecting. */
  HubConnectionState["Connecting"] = "Connecting";
  /** The hub connection is connected. */
  HubConnectionState["Connected"] = "Connected";
  /** The hub connection is disconnecting. */
  HubConnectionState["Disconnecting"] = "Disconnecting";
  /** The hub connection is reconnecting. */
  HubConnectionState["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */
class HubConnection {
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
    return new HubConnection(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize);
  }
  constructor(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
    this._nextKeepAlive = 0;
    this._freezeEventListener = () => {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    };
    _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(connection, "connection");
    _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(logger, "logger");
    _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(protocol, "protocol");
    this.serverTimeoutInMilliseconds = serverTimeoutInMilliseconds !== null && serverTimeoutInMilliseconds !== void 0 ? serverTimeoutInMilliseconds : DEFAULT_TIMEOUT_IN_MS;
    this.keepAliveIntervalInMilliseconds = keepAliveIntervalInMilliseconds !== null && keepAliveIntervalInMilliseconds !== void 0 ? keepAliveIntervalInMilliseconds : DEFAULT_PING_INTERVAL_IN_MS;
    this._statefulReconnectBufferSize = statefulReconnectBufferSize !== null && statefulReconnectBufferSize !== void 0 ? statefulReconnectBufferSize : DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE;
    this._logger = logger;
    this._protocol = protocol;
    this.connection = connection;
    this._reconnectPolicy = reconnectPolicy;
    this._handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_3__.HandshakeProtocol();
    this.connection.onreceive = data => this._processIncomingData(data);
    this.connection.onclose = error => this._connectionClosed(error);
    this._callbacks = {};
    this._methods = {};
    this._closedCallbacks = [];
    this._reconnectingCallbacks = [];
    this._reconnectedCallbacks = [];
    this._invocationId = 0;
    this._receivedHandshakeResponse = false;
    this._connectionState = HubConnectionState.Disconnected;
    this._connectionStarted = false;
    this._cachedPingMessage = this._protocol.writeMessage({
      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Ping
    });
  }
  /** Indicates the state of the {@link HubConnection} to the server. */
  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */
  get connectionId() {
    return this.connection ? this.connection.connectionId || null : null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */
  set baseUrl(url) {
    if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    }
    if (!url) {
      throw new Error("The HubConnection url must be a valid url.");
    }
    this.connection.baseUrl = url;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */
  start() {
    this._startPromise = this._startWithStateTransitions();
    return this._startPromise;
  }
  _startWithStateTransitions() {
    var _this = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._connectionState !== HubConnectionState.Disconnected) {
        return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
      }
      _this._connectionState = HubConnectionState.Connecting;
      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Starting HubConnection.");
      try {
        yield _this._startInternal();
        if (_Utils__WEBPACK_IMPORTED_MODULE_2__.Platform.isBrowser) {
          // Log when the browser freezes the tab so users know why their connection unexpectedly stopped working
          window.document.addEventListener("freeze", _this._freezeEventListener);
        }
        _this._connectionState = HubConnectionState.Connected;
        _this._connectionStarted = true;
        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "HubConnection connected successfully.");
      } catch (e) {
        _this._connectionState = HubConnectionState.Disconnected;
        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);
        return Promise.reject(e);
      }
    })();
  }
  _startInternal() {
    var _this2 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._stopDuringStartError = undefined;
      _this2._receivedHandshakeResponse = false;
      // Set up the promise before any connection is (re)started otherwise it could race with received messages
      const handshakePromise = new Promise((resolve, reject) => {
        _this2._handshakeResolver = resolve;
        _this2._handshakeRejecter = reject;
      });
      yield _this2.connection.start(_this2._protocol.transferFormat);
      try {
        let version = _this2._protocol.version;
        if (!_this2.connection.features.reconnect) {
          // Stateful Reconnect starts with HubProtocol version 2, newer clients connecting to older servers will fail to connect due to
          // the handshake only supporting version 1, so we will try to send version 1 during the handshake to keep old servers working.
          version = 1;
        }
        const handshakeRequest = {
          protocol: _this2._protocol.name,
          version
        };
        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Sending handshake request.");
        yield _this2._sendMessage(_this2._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Using HubProtocol '${_this2._protocol.name}'.`);
        // defensively cleanup timeout in case we receive a message from the server before we finish start
        _this2._cleanupTimeout();
        _this2._resetTimeoutPeriod();
        _this2._resetKeepAliveInterval();
        yield handshakePromise;
        // It's important to check the stopDuringStartError instead of just relying on the handshakePromise
        // being rejected on close, because this continuation can run after both the handshake completed successfully
        // and the connection was closed.
        if (_this2._stopDuringStartError) {
          // It's important to throw instead of returning a rejected promise, because we don't want to allow any state
          // transitions to occur between now and the calling code observing the exceptions. Returning a rejected promise
          // will cause the calling continuation to get scheduled to run later.
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw _this2._stopDuringStartError;
        }
        const useStatefulReconnect = _this2.connection.features.reconnect || false;
        if (useStatefulReconnect) {
          _this2._messageBuffer = new _MessageBuffer__WEBPACK_IMPORTED_MODULE_5__.MessageBuffer(_this2._protocol, _this2.connection, _this2._statefulReconnectBufferSize);
          _this2.connection.features.disconnected = _this2._messageBuffer._disconnected.bind(_this2._messageBuffer);
          _this2.connection.features.resend = () => {
            if (_this2._messageBuffer) {
              return _this2._messageBuffer._resend();
            }
          };
        }
        if (!_this2.connection.features.inherentKeepAlive) {
          yield _this2._sendMessage(_this2._cachedPingMessage);
        }
      } catch (e) {
        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);
        _this2._cleanupTimeout();
        _this2._cleanupPingTimer();
        // HttpConnection.stop() should not complete until after the onclose callback is invoked.
        // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
        yield _this2.connection.stop(e);
        throw e;
      }
    })();
  }
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */
  stop() {
    var _this3 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Capture the start promise before the connection might be restarted in an onclose callback.
      const startPromise = _this3._startPromise;
      _this3.connection.features.reconnect = false;
      _this3._stopPromise = _this3._stopInternal();
      yield _this3._stopPromise;
      try {
        // Awaiting undefined continues immediately
        yield startPromise;
      } catch (e) {
        // This exception is returned to the user as a rejected Promise from the start method.
      }
    })();
  }
  _stopInternal(error) {
    if (this._connectionState === HubConnectionState.Disconnected) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);
      return Promise.resolve();
    }
    if (this._connectionState === HubConnectionState.Disconnecting) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
      return this._stopPromise;
    }
    const state = this._connectionState;
    this._connectionState = HubConnectionState.Disconnecting;
    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Stopping HubConnection.");
    if (this._reconnectDelayHandle) {
      // We're in a reconnect delay which means the underlying connection is currently already stopped.
      // Just clear the handle to stop the reconnect loop (which no one is waiting on thankfully) and
      // fire the onclose callbacks.
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
      clearTimeout(this._reconnectDelayHandle);
      this._reconnectDelayHandle = undefined;
      this._completeClose();
      return Promise.resolve();
    }
    if (state === HubConnectionState.Connected) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this._sendCloseMessage();
    }
    this._cleanupTimeout();
    this._cleanupPingTimer();
    this._stopDuringStartError = error || new _Errors__WEBPACK_IMPORTED_MODULE_6__.AbortError("The connection was stopped before the hub handshake could complete.");
    // HttpConnection.stop() should not complete until after either HttpConnection.start() fails
    // or the onclose callback is invoked. The onclose callback will transition the HubConnection
    // to the disconnected state if need be before HttpConnection.stop() completes.
    return this.connection.stop(error);
  }
  _sendCloseMessage() {
    var _this4 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4._sendWithProtocol(_this4._createCloseMessage());
      } catch {
        // Ignore, this is a best effort attempt to let the server know the client closed gracefully.
      }
    })();
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */
  stream(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);
    const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
    // eslint-disable-next-line prefer-const
    let promiseQueue;
    const subject = new _Subject__WEBPACK_IMPORTED_MODULE_7__.Subject();
    subject.cancelCallback = () => {
      const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
      delete this._callbacks[invocationDescriptor.invocationId];
      return promiseQueue.then(() => {
        return this._sendWithProtocol(cancelInvocation);
      });
    };
    this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
      if (error) {
        subject.error(error);
        return;
      } else if (invocationEvent) {
        // invocationEvent will not be null when an error is not passed to the callback
        if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion) {
          if (invocationEvent.error) {
            subject.error(new Error(invocationEvent.error));
          } else {
            subject.complete();
          }
        } else {
          subject.next(invocationEvent.item);
        }
      }
    };
    promiseQueue = this._sendWithProtocol(invocationDescriptor).catch(e => {
      subject.error(e);
      delete this._callbacks[invocationDescriptor.invocationId];
    });
    this._launchStreams(streams, promiseQueue);
    return subject;
  }
  _sendMessage(message) {
    this._resetKeepAliveInterval();
    return this.connection.send(message);
  }
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */
  _sendWithProtocol(message) {
    if (this._messageBuffer) {
      return this._messageBuffer._send(message);
    } else {
      return this._sendMessage(this._protocol.writeMessage(message));
    }
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */
  send(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);
    const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
    this._launchStreams(streams, sendPromise);
    return sendPromise;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */
  invoke(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);
    const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
    const p = new Promise((resolve, reject) => {
      // invocationId will always have a value for a non-blocking invocation
      this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
        if (error) {
          reject(error);
          return;
        } else if (invocationEvent) {
          // invocationEvent will not be null when an error is not passed to the callback
          if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion) {
            if (invocationEvent.error) {
              reject(new Error(invocationEvent.error));
            } else {
              resolve(invocationEvent.result);
            }
          } else {
            reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
          }
        }
      };
      const promiseQueue = this._sendWithProtocol(invocationDescriptor).catch(e => {
        reject(e);
        // invocationId will always have a value for a non-blocking invocation
        delete this._callbacks[invocationDescriptor.invocationId];
      });
      this._launchStreams(streams, promiseQueue);
    });
    return p;
  }
  on(methodName, newMethod) {
    if (!methodName || !newMethod) {
      return;
    }
    methodName = methodName.toLowerCase();
    if (!this._methods[methodName]) {
      this._methods[methodName] = [];
    }
    // Preventing adding the same handler multiple times.
    if (this._methods[methodName].indexOf(newMethod) !== -1) {
      return;
    }
    this._methods[methodName].push(newMethod);
  }
  off(methodName, method) {
    if (!methodName) {
      return;
    }
    methodName = methodName.toLowerCase();
    const handlers = this._methods[methodName];
    if (!handlers) {
      return;
    }
    if (method) {
      const removeIdx = handlers.indexOf(method);
      if (removeIdx !== -1) {
        handlers.splice(removeIdx, 1);
        if (handlers.length === 0) {
          delete this._methods[methodName];
        }
      }
    } else {
      delete this._methods[methodName];
    }
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */
  onclose(callback) {
    if (callback) {
      this._closedCallbacks.push(callback);
    }
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */
  onreconnecting(callback) {
    if (callback) {
      this._reconnectingCallbacks.push(callback);
    }
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */
  onreconnected(callback) {
    if (callback) {
      this._reconnectedCallbacks.push(callback);
    }
  }
  _processIncomingData(data) {
    this._cleanupTimeout();
    if (!this._receivedHandshakeResponse) {
      data = this._processHandshakeResponse(data);
      this._receivedHandshakeResponse = true;
    }
    // Data may have all been read when processing handshake response
    if (data) {
      // Parse the messages
      const messages = this._protocol.parseMessages(data, this._logger);
      for (const message of messages) {
        if (this._messageBuffer && !this._messageBuffer._shouldProcessMessage(message)) {
          // Don't process the message, we are either waiting for a SequenceMessage or received a duplicate message
          continue;
        }
        switch (message.type) {
          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation:
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._invokeClientMethod(message);
            break;
          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.StreamItem:
          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion:
            {
              const callback = this._callbacks[message.invocationId];
              if (callback) {
                if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion) {
                  delete this._callbacks[message.invocationId];
                }
                try {
                  callback(message);
                } catch (e) {
                  this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `Stream callback threw error: ${(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getErrorString)(e)}`);
                }
              }
              break;
            }
          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Ping:
            // Don't care about pings
            break;
          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Close:
            {
              this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, "Close message received from server.");
              const error = message.error ? new Error("Server returned an error on close: " + message.error) : undefined;
              if (message.allowReconnect === true) {
                // It feels wrong not to await connection.stop() here, but processIncomingData is called as part of an onreceive callback which is not async,
                // this is already the behavior for serverTimeout(), and HttpConnection.Stop() should catch and log all possible exceptions.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.connection.stop(error);
              } else {
                // We cannot await stopInternal() here, but subsequent calls to stop() will await this if stopInternal() is still ongoing.
                this._stopPromise = this._stopInternal(error);
              }
              break;
            }
          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Ack:
            if (this._messageBuffer) {
              this._messageBuffer._ack(message);
            }
            break;
          case _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Sequence:
            if (this._messageBuffer) {
              this._messageBuffer._resetSequence(message);
            }
            break;
          default:
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning, `Invalid message type: ${message.type}.`);
            break;
        }
      }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(data) {
    let responseMessage;
    let remainingData;
    try {
      [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
    } catch (e) {
      const message = "Error parsing handshake response: " + e;
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, message);
      const error = new Error(message);
      this._handshakeRejecter(error);
      throw error;
    }
    if (responseMessage.error) {
      const message = "Server returned handshake error: " + responseMessage.error;
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, message);
      const error = new Error(message);
      this._handshakeRejecter(error);
      throw error;
    } else {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Server handshake complete.");
    }
    this._handshakeResolver();
    return remainingData;
  }
  _resetKeepAliveInterval() {
    if (this.connection.features.inherentKeepAlive) {
      return;
    }
    // Set the time we want the next keep alive to be sent
    // Timer will be setup on next message receive
    this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds;
    this._cleanupPingTimer();
  }
  _resetTimeoutPeriod() {
    var _this5 = this;
    if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
      // Set the timeout timer
      this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
      // Set keepAlive timer if there isn't one
      if (this._pingServerHandle === undefined) {
        let nextPing = this._nextKeepAlive - new Date().getTime();
        if (nextPing < 0) {
          nextPing = 0;
        }
        // The timer needs to be set from a networking callback to avoid Chrome timer throttling from causing timers to run once a minute
        this._pingServerHandle = setTimeout( /*#__PURE__*/(0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (_this5._connectionState === HubConnectionState.Connected) {
            try {
              yield _this5._sendMessage(_this5._cachedPingMessage);
            } catch {
              // We don't care about the error. It should be seen elsewhere in the client.
              // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
              _this5._cleanupPingTimer();
            }
          }
        }), nextPing);
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  serverTimeout() {
    // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
    // Terminate the connection, but we don't need to wait on the promise. This could trigger reconnecting.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  _invokeClientMethod(invocationMessage) {
    var _this6 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const methodName = invocationMessage.target.toLowerCase();
      const methods = _this6._methods[methodName];
      if (!methods) {
        _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning, `No client method with the name '${methodName}' found.`);
        // No handlers provided by client but the server is expecting a response still, so we send an error
        if (invocationMessage.invocationId) {
          _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
          yield _this6._sendWithProtocol(_this6._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
        }
        return;
      }
      // Avoid issues with handlers removing themselves thus modifying the list while iterating through it
      const methodsCopy = methods.slice();
      // Server expects a response
      const expectsResponse = invocationMessage.invocationId ? true : false;
      // We preserve the last result or exception but still call all handlers
      let res;
      let exception;
      let completionMessage;
      for (const m of methodsCopy) {
        try {
          const prevRes = res;
          res = yield m.apply(_this6, invocationMessage.arguments);
          if (expectsResponse && res && prevRes) {
            _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `Multiple results provided for '${methodName}'. Sending error to server.`);
            completionMessage = _this6._createCompletionMessage(invocationMessage.invocationId, `Client provided multiple results.`, null);
          }
          // Ignore exception if we got a result after, the exception will be logged
          exception = undefined;
        } catch (e) {
          exception = e;
          _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `A callback for the method '${methodName}' threw error '${e}'.`);
        }
      }
      if (completionMessage) {
        yield _this6._sendWithProtocol(completionMessage);
      } else if (expectsResponse) {
        // If there is an exception that means either no result was given or a handler after a result threw
        if (exception) {
          completionMessage = _this6._createCompletionMessage(invocationMessage.invocationId, `${exception}`, null);
        } else if (res !== undefined) {
          completionMessage = _this6._createCompletionMessage(invocationMessage.invocationId, null, res);
        } else {
          _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
          // Client didn't provide a result or throw from a handler, server expects a response so we send an error
          completionMessage = _this6._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
        }
        yield _this6._sendWithProtocol(completionMessage);
      } else {
        if (res) {
          _this6._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `Result given for '${methodName}' method but server is not expecting a result.`);
        }
      }
    })();
  }
  _connectionClosed(error) {
    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`);
    // Triggering this.handshakeRejecter is insufficient because it could already be resolved without the continuation having run yet.
    this._stopDuringStartError = this._stopDuringStartError || error || new _Errors__WEBPACK_IMPORTED_MODULE_6__.AbortError("The underlying connection was closed before the hub handshake could complete.");
    // If the handshake is in progress, start will be waiting for the handshake promise, so we complete it.
    // If it has already completed, this should just noop.
    if (this._handshakeResolver) {
      this._handshakeResolver();
    }
    this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
    this._cleanupTimeout();
    this._cleanupPingTimer();
    if (this._connectionState === HubConnectionState.Disconnecting) {
      this._completeClose(error);
    } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this._reconnect(error);
    } else if (this._connectionState === HubConnectionState.Connected) {
      this._completeClose(error);
    }
    // If none of the above if conditions were true were called the HubConnection must be in either:
    // 1. The Connecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail it.
    // 2. The Reconnecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail the current reconnect attempt
    //    and potentially continue the reconnect() loop.
    // 3. The Disconnected state in which case we're already done.
  }

  _completeClose(error) {
    if (this._connectionStarted) {
      this._connectionState = HubConnectionState.Disconnected;
      this._connectionStarted = false;
      if (this._messageBuffer) {
        this._messageBuffer._dispose(error !== null && error !== void 0 ? error : new Error("Connection closed."));
        this._messageBuffer = undefined;
      }
      if (_Utils__WEBPACK_IMPORTED_MODULE_2__.Platform.isBrowser) {
        window.document.removeEventListener("freeze", this._freezeEventListener);
      }
      try {
        this._closedCallbacks.forEach(c => c.apply(this, [error]));
      } catch (e) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e}'.`);
      }
    }
  }
  _reconnect(error) {
    var _this7 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const reconnectStartTime = Date.now();
      let previousReconnectAttempts = 0;
      let retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");
      let nextRetryDelay = _this7._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
      if (nextRetryDelay === null) {
        _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
        _this7._completeClose(error);
        return;
      }
      _this7._connectionState = HubConnectionState.Reconnecting;
      if (error) {
        _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
      } else {
        _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, "Connection reconnecting.");
      }
      if (_this7._reconnectingCallbacks.length !== 0) {
        try {
          _this7._reconnectingCallbacks.forEach(c => c.apply(_this7, [error]));
        } catch (e) {
          _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e}'.`);
        }
        // Exit early if an onreconnecting callback called connection.stop().
        if (_this7._connectionState !== HubConnectionState.Reconnecting) {
          _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
          return;
        }
      }
      while (nextRetryDelay !== null) {
        _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts} will start in ${nextRetryDelay} ms.`);
        yield new Promise(resolve => {
          _this7._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
        });
        _this7._reconnectDelayHandle = undefined;
        if (_this7._connectionState !== HubConnectionState.Reconnecting) {
          _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
          return;
        }
        try {
          yield _this7._startInternal();
          _this7._connectionState = HubConnectionState.Connected;
          _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, "HubConnection reconnected successfully.");
          if (_this7._reconnectedCallbacks.length !== 0) {
            try {
              _this7._reconnectedCallbacks.forEach(c => c.apply(_this7, [_this7.connection.connectionId]));
            } catch (e) {
              _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `An onreconnected callback called with connectionId '${_this7.connection.connectionId}; threw error '${e}'.`);
            }
          }
          return;
        } catch (e) {
          _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);
          if (_this7._connectionState !== HubConnectionState.Reconnecting) {
            _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Debug, `Connection moved to the '${_this7._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
            // The TypeScript compiler thinks that connectionState must be Connected here. The TypeScript compiler is wrong.
            if (_this7._connectionState === HubConnectionState.Disconnecting) {
              _this7._completeClose();
            }
            return;
          }
          retryError = e instanceof Error ? e : new Error(e.toString());
          nextRetryDelay = _this7._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
        }
      }
      _this7._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
      _this7._completeClose();
    })();
  }
  _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds,
        previousRetryCount,
        retryReason
      });
    } catch (e) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);
      return null;
    }
  }
  _cancelCallbacksWithError(error) {
    const callbacks = this._callbacks;
    this._callbacks = {};
    Object.keys(callbacks).forEach(key => {
      const callback = callbacks[key];
      try {
        callback(null, error);
      } catch (e) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getErrorString)(e)}`);
      }
    });
  }
  _cleanupPingTimer() {
    if (this._pingServerHandle) {
      clearTimeout(this._pingServerHandle);
      this._pingServerHandle = undefined;
    }
  }
  _cleanupTimeout() {
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
    }
  }
  _createInvocation(methodName, args, nonblocking, streamIds) {
    if (nonblocking) {
      if (streamIds.length !== 0) {
        return {
          arguments: args,
          streamIds,
          target: methodName,
          type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation
        };
      } else {
        return {
          arguments: args,
          target: methodName,
          type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation
        };
      }
    } else {
      const invocationId = this._invocationId;
      this._invocationId++;
      if (streamIds.length !== 0) {
        return {
          arguments: args,
          invocationId: invocationId.toString(),
          streamIds,
          target: methodName,
          type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation
        };
      } else {
        return {
          arguments: args,
          invocationId: invocationId.toString(),
          target: methodName,
          type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Invocation
        };
      }
    }
  }
  _launchStreams(streams, promiseQueue) {
    if (streams.length === 0) {
      return;
    }
    // Synchronize stream data so they arrive in-order on the server
    if (!promiseQueue) {
      promiseQueue = Promise.resolve();
    }
    // We want to iterate over the keys, since the keys are the stream ids
    // eslint-disable-next-line guard-for-in
    for (const streamId in streams) {
      streams[streamId].subscribe({
        complete: () => {
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
        },
        error: err => {
          let message;
          if (err instanceof Error) {
            message = err.message;
          } else if (err && err.toString) {
            message = err.toString();
          } else {
            message = "Unknown error";
          }
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
        },
        next: item => {
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
        }
      });
    }
  }
  _replaceStreamingParams(args) {
    const streams = [];
    const streamIds = [];
    for (let i = 0; i < args.length; i++) {
      const argument = args[i];
      if (this._isObservable(argument)) {
        const streamId = this._invocationId;
        this._invocationId++;
        // Store the stream for later use
        streams[streamId] = argument;
        streamIds.push(streamId.toString());
        // remove stream from args
        args.splice(i, 1);
      }
    }
    return [streams, streamIds];
  }
  _isObservable(arg) {
    // This allows other stream implementations to just work (like rxjs)
    return arg && arg.subscribe && typeof arg.subscribe === "function";
  }
  _createStreamInvocation(methodName, args, streamIds) {
    const invocationId = this._invocationId;
    this._invocationId++;
    if (streamIds.length !== 0) {
      return {
        arguments: args,
        invocationId: invocationId.toString(),
        streamIds,
        target: methodName,
        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.StreamInvocation
      };
    } else {
      return {
        arguments: args,
        invocationId: invocationId.toString(),
        target: methodName,
        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.StreamInvocation
      };
    }
  }
  _createCancelInvocation(id) {
    return {
      invocationId: id,
      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.CancelInvocation
    };
  }
  _createStreamItemMessage(id, item) {
    return {
      invocationId: id,
      item,
      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.StreamItem
    };
  }
  _createCompletionMessage(id, error, result) {
    if (error) {
      return {
        error,
        invocationId: id,
        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion
      };
    }
    return {
      invocationId: id,
      result,
      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Completion
    };
  }
  _createCloseMessage() {
    return {
      type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__.MessageType.Close
    };
  }
}

/***/ }),

/***/ 77930:
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubConnectionBuilder": () => (/* binding */ HubConnectionBuilder)
/* harmony export */ });
/* harmony import */ var _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultReconnectPolicy */ 87447);
/* harmony import */ var _HttpConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpConnection */ 43606);
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HubConnection */ 96666);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JsonHubProtocol */ 25000);
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loggers */ 96867);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 7375);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.







const LogLevelNameMapping = {
  trace: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace,
  debug: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug,
  info: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
  information: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
  warn: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
  warning: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
  error: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error,
  critical: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Critical,
  none: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.None
};
function parseLogLevel(name) {
  // Case-insensitive matching via lower-casing
  // Yes, I know case-folding is a complicated problem in Unicode, but we only support
  // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
  const mapping = LogLevelNameMapping[name.toLowerCase()];
  if (typeof mapping !== "undefined") {
    return mapping;
  } else {
    throw new Error(`Unknown log level: ${name}`);
  }
}
/** A builder for configuring {@link @microsoft/signalr.HubConnection} instances. */
class HubConnectionBuilder {
  configureLogging(logging) {
    _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(logging, "logging");
    if (isLogger(logging)) {
      this.logger = logging;
    } else if (typeof logging === "string") {
      const logLevel = parseLogLevel(logging);
      this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logLevel);
    } else {
      this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logging);
    }
    return this;
  }
  withUrl(url, transportTypeOrOptions) {
    _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
    _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isNotEmpty(url, "url");
    this.url = url;
    // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
    // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
    if (typeof transportTypeOrOptions === "object") {
      this.httpConnectionOptions = {
        ...this.httpConnectionOptions,
        ...transportTypeOrOptions
      };
    } else {
      this.httpConnectionOptions = {
        ...this.httpConnectionOptions,
        transport: transportTypeOrOptions
      };
    }
    return this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(protocol) {
    _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(protocol, "protocol");
    this.protocol = protocol;
    return this;
  }
  withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
    if (this.reconnectPolicy) {
      throw new Error("A reconnectPolicy has already been set.");
    }
    if (!retryDelaysOrReconnectPolicy) {
      this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy();
    } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
      this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
    } else {
      this.reconnectPolicy = retryDelaysOrReconnectPolicy;
    }
    return this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withServerTimeout(milliseconds) {
    _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(milliseconds, "milliseconds");
    this._serverTimeoutInMilliseconds = milliseconds;
    return this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withKeepAliveInterval(milliseconds) {
    _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(milliseconds, "milliseconds");
    this._keepAliveIntervalInMilliseconds = milliseconds;
    return this;
  }
  /** Enables and configures options for the Stateful Reconnect feature.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withStatefulReconnect(options) {
    if (this.httpConnectionOptions === undefined) {
      this.httpConnectionOptions = {};
    }
    this.httpConnectionOptions._useStatefulReconnect = true;
    this._statefulReconnectBufferSize = options === null || options === void 0 ? void 0 : options.bufferSize;
    return this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
    // provided to configureLogger
    const httpConnectionOptions = this.httpConnectionOptions || {};
    // If it's 'null', the user **explicitly** asked for null, don't mess with it.
    if (httpConnectionOptions.logger === undefined) {
      // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
      httpConnectionOptions.logger = this.logger;
    }
    // Now create the connection
    if (!this.url) {
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    }
    const connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_3__.HttpConnection(this.url, httpConnectionOptions);
    return _HubConnection__WEBPACK_IMPORTED_MODULE_4__.HubConnection.create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_5__.NullLogger.instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__.JsonHubProtocol(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
  }
}
function isLogger(logger) {
  return logger.log !== undefined;
}

/***/ }),

/***/ 82362:
/*!******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageType": () => (/* binding */ MessageType)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
  /** Indicates the message is an Invocation message and implements the {@link @microsoft/signalr.InvocationMessage} interface. */
  MessageType[MessageType["Invocation"] = 1] = "Invocation";
  /** Indicates the message is a StreamItem message and implements the {@link @microsoft/signalr.StreamItemMessage} interface. */
  MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
  /** Indicates the message is a Completion message and implements the {@link @microsoft/signalr.CompletionMessage} interface. */
  MessageType[MessageType["Completion"] = 3] = "Completion";
  /** Indicates the message is a Stream Invocation message and implements the {@link @microsoft/signalr.StreamInvocationMessage} interface. */
  MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
  /** Indicates the message is a Cancel Invocation message and implements the {@link @microsoft/signalr.CancelInvocationMessage} interface. */
  MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
  /** Indicates the message is a Ping message and implements the {@link @microsoft/signalr.PingMessage} interface. */
  MessageType[MessageType["Ping"] = 6] = "Ping";
  /** Indicates the message is a Close message and implements the {@link @microsoft/signalr.CloseMessage} interface. */
  MessageType[MessageType["Close"] = 7] = "Close";
  MessageType[MessageType["Ack"] = 8] = "Ack";
  MessageType[MessageType["Sequence"] = 9] = "Sequence";
})(MessageType || (MessageType = {}));

/***/ }),

/***/ 14449:
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ILogger.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
  /** Log level for very low severity diagnostic messages. */
  LogLevel[LogLevel["Trace"] = 0] = "Trace";
  /** Log level for low severity diagnostic messages. */
  LogLevel[LogLevel["Debug"] = 1] = "Debug";
  /** Log level for informational diagnostic messages. */
  LogLevel[LogLevel["Information"] = 2] = "Information";
  /** Log level for diagnostic messages that indicate a non-fatal problem. */
  LogLevel[LogLevel["Warning"] = 3] = "Warning";
  /** Log level for diagnostic messages that indicate a failure in the current operation. */
  LogLevel[LogLevel["Error"] = 4] = "Error";
  /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
  LogLevel[LogLevel["Critical"] = 5] = "Critical";
  /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
  LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));

/***/ }),

/***/ 84493:
/*!****************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ITransport.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpTransportType": () => (/* binding */ HttpTransportType),
/* harmony export */   "TransferFormat": () => (/* binding */ TransferFormat)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
  /** Specifies no transport preference. */
  HttpTransportType[HttpTransportType["None"] = 0] = "None";
  /** Specifies the WebSockets transport. */
  HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
  /** Specifies the Server-Sent Events transport. */
  HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
  /** Specifies the Long Polling transport. */
  HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
  /** Specifies that only text data will be transmitted over the connection. */
  TransferFormat[TransferFormat["Text"] = 1] = "Text";
  /** Specifies that binary data will be transmitted over the connection. */
  TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));

/***/ }),

/***/ 25000:
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonHubProtocol": () => (/* binding */ JsonHubProtocol)
/* harmony export */ });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IHubProtocol */ 82362);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ITransport */ 84493);
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ 96867);
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextMessageFormat */ 2365);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





const JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
class JsonHubProtocol {
  constructor() {
    /** @inheritDoc */
    this.name = JSON_HUB_PROTOCOL_NAME;
    /** @inheritDoc */
    this.version = 2;
    /** @inheritDoc */
    this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_0__.TransferFormat.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
   *
   * @param {string} input A string containing the serialized representation.
   * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
   */
  parseMessages(input, logger) {
    // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
    if (typeof input !== "string") {
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    }
    if (!input) {
      return [];
    }
    if (logger === null) {
      logger = _Loggers__WEBPACK_IMPORTED_MODULE_1__.NullLogger.instance;
    }
    // Parse the messages
    const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.parse(input);
    const hubMessages = [];
    for (const message of messages) {
      const parsedMessage = JSON.parse(message);
      if (typeof parsedMessage.type !== "number") {
        throw new Error("Invalid payload.");
      }
      switch (parsedMessage.type) {
        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation:
          this._isInvocationMessage(parsedMessage);
          break;
        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem:
          this._isStreamItemMessage(parsedMessage);
          break;
        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion:
          this._isCompletionMessage(parsedMessage);
          break;
        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping:
          // Single value, no need to validate
          break;
        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close:
          // All optional values, no need to validate
          break;
        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ack:
          this._isAckMessage(parsedMessage);
          break;
        case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Sequence:
          this._isSequenceMessage(parsedMessage);
          break;
        default:
          // Future protocol changes can add message types, old clients can ignore them
          logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
          continue;
      }
      hubMessages.push(parsedMessage);
    }
    return hubMessages;
  }
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
   *
   * @param {HubMessage} message The message to write.
   * @returns {string} A string containing the serialized representation of the message.
   */
  writeMessage(message) {
    return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.write(JSON.stringify(message));
  }
  _isInvocationMessage(message) {
    this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
    if (message.invocationId !== undefined) {
      this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
    }
  }
  _isStreamItemMessage(message) {
    this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
    if (message.item === undefined) {
      throw new Error("Invalid payload for StreamItem message.");
    }
  }
  _isCompletionMessage(message) {
    if (message.result && message.error) {
      throw new Error("Invalid payload for Completion message.");
    }
    if (!message.result && message.error) {
      this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
    }
    this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
  }
  _isAckMessage(message) {
    if (typeof message.sequenceId !== 'number') {
      throw new Error("Invalid SequenceId for Ack message.");
    }
  }
  _isSequenceMessage(message) {
    if (typeof message.sequenceId !== 'number') {
      throw new Error("Invalid SequenceId for Sequence message.");
    }
  }
  _assertNotEmptyString(value, errorMessage) {
    if (typeof value !== "string" || value === "") {
      throw new Error(errorMessage);
    }
  }
}

/***/ }),

/***/ 96867:
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Loggers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NullLogger": () => (/* binding */ NullLogger)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** A logger that does nothing when log messages are sent to it. */
class NullLogger {
  constructor() {}
  /** @inheritDoc */
  // eslint-disable-next-line
  log(_logLevel, _message) {}
}
/** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
NullLogger.instance = new NullLogger();

/***/ }),

/***/ 26370:
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LongPollingTransport": () => (/* binding */ LongPollingTransport)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbortController */ 38591);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Errors */ 78139);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ITransport */ 84493);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ 7375);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





// Not exported from 'index', this type is internal.
/** @private */
class LongPollingTransport {
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(httpClient, logger, options) {
    this._httpClient = httpClient;
    this._logger = logger;
    this._pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_1__.AbortController();
    this._options = options;
    this._running = false;
    this.onreceive = null;
    this.onclose = null;
  }
  connect(url, transferFormat) {
    var _this = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(url, "url");
      _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isRequired(transferFormat, "transferFormat");
      _Utils__WEBPACK_IMPORTED_MODULE_2__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat, "transferFormat");
      _this._url = url;
      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Connecting.");
      // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
      if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat.Binary && typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string") {
        throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
      }
      const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getUserAgentHeader)();
      const headers = {
        [name]: value,
        ..._this._options.headers
      };
      const pollOptions = {
        abortSignal: _this._pollAbort.signal,
        headers,
        timeout: 100000,
        withCredentials: _this._options.withCredentials
      };
      if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat.Binary) {
        pollOptions.responseType = "arraybuffer";
      }
      // Make initial long polling request
      // Server uses first long polling request to finish initializing connection and it returns without data
      const pollUrl = `${url}&_=${Date.now()}`;
      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
      const response = yield _this._httpClient.get(pollUrl, pollOptions);
      if (response.statusCode !== 200) {
        _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
        // Mark running as false so that the poll immediately ends and runs the close logic
        _this._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_5__.HttpError(response.statusText || "", response.statusCode);
        _this._running = false;
      } else {
        _this._running = true;
      }
      _this._receiving = _this._poll(_this._url, pollOptions);
    })();
  }
  _poll(url, pollOptions) {
    var _this2 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        while (_this2._running) {
          try {
            const pollUrl = `${url}&_=${Date.now()}`;
            _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
            const response = yield _this2._httpClient.get(pollUrl, pollOptions);
            if (response.statusCode === 204) {
              _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
              _this2._running = false;
            } else if (response.statusCode !== 200) {
              _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
              // Unexpected status code
              _this2._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_5__.HttpError(response.statusText || "", response.statusCode);
              _this2._running = false;
            } else {
              // Process the response
              if (response.content) {
                _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getDataDetail)(response.content, _this2._options.logMessageContent)}.`);
                if (_this2.onreceive) {
                  _this2.onreceive(response.content);
                }
              } else {
                // This is another way timeout manifest.
                _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
              }
            }
          } catch (e) {
            if (!_this2._running) {
              // Log but disregard errors that occur after stopping
              _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
            } else {
              if (e instanceof _Errors__WEBPACK_IMPORTED_MODULE_5__.TimeoutError) {
                // Ignore timeouts and reissue the poll.
                _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
              } else {
                // Close the connection with the error as the result.
                _this2._closeError = e;
                _this2._running = false;
              }
            }
          }
        }
      } finally {
        _this2._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Polling complete.");
        // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
        // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
        if (!_this2.pollAborted) {
          _this2._raiseOnClose();
        }
      }
    })();
  }
  send(data) {
    var _this3 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3._running) {
        return Promise.reject(new Error("Cannot send until the transport is connected"));
      }
      return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(_this3._logger, "LongPolling", _this3._httpClient, _this3._url, data, _this3._options);
    })();
  }
  stop() {
    var _this4 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Stopping polling.");
      // Tell receiving loop to stop, abort any current request, and then wait for it to finish
      _this4._running = false;
      _this4._pollAbort.abort();
      try {
        yield _this4._receiving;
        // Send DELETE to clean up long polling on the server
        _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${_this4._url}.`);
        const headers = {};
        const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getUserAgentHeader)();
        headers[name] = value;
        const deleteOptions = {
          headers: {
            ...headers,
            ..._this4._options.headers
          },
          timeout: _this4._options.timeout,
          withCredentials: _this4._options.withCredentials
        };
        let error;
        try {
          yield _this4._httpClient.delete(_this4._url, deleteOptions);
        } catch (err) {
          error = err;
        }
        if (error) {
          if (error instanceof _Errors__WEBPACK_IMPORTED_MODULE_5__.HttpError) {
            if (error.statusCode === 404) {
              _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.");
            } else {
              _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, `(LongPolling transport) Error sending a DELETE request: ${error}`);
            }
          }
        } else {
          _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) DELETE request accepted.");
        }
      } finally {
        _this4._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, "(LongPolling transport) Stop finished.");
        // Raise close event here instead of in polling
        // It needs to happen after the DELETE request is sent
        _this4._raiseOnClose();
      }
    })();
  }
  _raiseOnClose() {
    if (this.onclose) {
      let logMessage = "(LongPolling transport) Firing onclose event.";
      if (this._closeError) {
        logMessage += " Error: " + this._closeError;
      }
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Trace, logMessage);
      this.onclose(this._closeError);
    }
  }
}

/***/ }),

/***/ 26605:
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/MessageBuffer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBuffer": () => (/* binding */ MessageBuffer)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IHubProtocol */ 82362);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 7375);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


/** @private */
class MessageBuffer {
  constructor(protocol, connection, bufferSize) {
    this._bufferSize = 100000;
    this._messages = [];
    this._totalMessageCount = 0;
    this._waitForSequenceMessage = false;
    // Message IDs start at 1 and always increment by 1
    this._nextReceivingSequenceId = 1;
    this._latestReceivedSequenceId = 0;
    this._bufferedByteCount = 0;
    this._reconnectInProgress = false;
    this._protocol = protocol;
    this._connection = connection;
    this._bufferSize = bufferSize;
  }
  _send(message) {
    var _this = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const serializedMessage = _this._protocol.writeMessage(message);
      let backpressurePromise = Promise.resolve();
      // Only count invocation messages. Acks, pings, etc. don't need to be resent on reconnect
      if (_this._isInvocationMessage(message)) {
        _this._totalMessageCount++;
        let backpressurePromiseResolver = () => {};
        let backpressurePromiseRejector = () => {};
        if ((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(serializedMessage)) {
          _this._bufferedByteCount += serializedMessage.byteLength;
        } else {
          _this._bufferedByteCount += serializedMessage.length;
        }
        if (_this._bufferedByteCount >= _this._bufferSize) {
          backpressurePromise = new Promise((resolve, reject) => {
            backpressurePromiseResolver = resolve;
            backpressurePromiseRejector = reject;
          });
        }
        _this._messages.push(new BufferedItem(serializedMessage, _this._totalMessageCount, backpressurePromiseResolver, backpressurePromiseRejector));
      }
      try {
        // If this is set it means we are reconnecting or resending
        // We don't want to send on a disconnected connection
        // And we don't want to send if resend is running since that would mean sending
        // this message twice
        if (!_this._reconnectInProgress) {
          yield _this._connection.send(serializedMessage);
        }
      } catch {
        _this._disconnected();
      }
      yield backpressurePromise;
    })();
  }
  _ack(ackMessage) {
    let newestAckedMessage = -1;
    // Find index of newest message being acked
    for (let index = 0; index < this._messages.length; index++) {
      const element = this._messages[index];
      if (element._id <= ackMessage.sequenceId) {
        newestAckedMessage = index;
        if ((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(element._message)) {
          this._bufferedByteCount -= element._message.byteLength;
        } else {
          this._bufferedByteCount -= element._message.length;
        }
        // resolve items that have already been sent and acked
        element._resolver();
      } else if (this._bufferedByteCount < this._bufferSize) {
        // resolve items that now fall under the buffer limit but haven't been acked
        element._resolver();
      } else {
        break;
      }
    }
    if (newestAckedMessage !== -1) {
      // We're removing everything including the message pointed to, so add 1
      this._messages = this._messages.slice(newestAckedMessage + 1);
    }
  }
  _shouldProcessMessage(message) {
    if (this._waitForSequenceMessage) {
      if (message.type !== _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.Sequence) {
        return false;
      } else {
        this._waitForSequenceMessage = false;
        return true;
      }
    }
    // No special processing for acks, pings, etc.
    if (!this._isInvocationMessage(message)) {
      return true;
    }
    const currentId = this._nextReceivingSequenceId;
    this._nextReceivingSequenceId++;
    if (currentId <= this._latestReceivedSequenceId) {
      if (currentId === this._latestReceivedSequenceId) {
        // Should only hit this if we just reconnected and the server is sending
        // Messages it has buffered, which would mean it hasn't seen an Ack for these messages
        this._ackTimer();
      }
      // Ignore, this is a duplicate message
      return false;
    }
    this._latestReceivedSequenceId = currentId;
    // Only start the timer for sending an Ack message when we have a message to ack. This also conveniently solves
    // timer throttling by not having a recursive timer, and by starting the timer via a network call (recv)
    this._ackTimer();
    return true;
  }
  _resetSequence(message) {
    if (message.sequenceId > this._nextReceivingSequenceId) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
      return;
    }
    this._nextReceivingSequenceId = message.sequenceId;
  }
  _disconnected() {
    this._reconnectInProgress = true;
    this._waitForSequenceMessage = true;
  }
  _resend() {
    var _this2 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const sequenceId = _this2._messages.length !== 0 ? _this2._messages[0]._id : _this2._totalMessageCount + 1;
      yield _this2._connection.send(_this2._protocol.writeMessage({
        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.Sequence,
        sequenceId
      }));
      // Get a local variable to the _messages, just in case messages are acked while resending
      // Which would slice the _messages array (which creates a new copy)
      const messages = _this2._messages;
      for (const element of messages) {
        yield _this2._connection.send(element._message);
      }
      _this2._reconnectInProgress = false;
    })();
  }
  _dispose(error) {
    error !== null && error !== void 0 ? error : error = new Error("Unable to reconnect to server.");
    // Unblock backpressure if any
    for (const element of this._messages) {
      element._rejector(error);
    }
  }
  _isInvocationMessage(message) {
    // There is no way to check if something implements an interface.
    // So we individually check the messages in a switch statement.
    // To make sure we don't miss any message types we rely on the compiler
    // seeing the function returns a value and it will do the
    // exhaustive check for us on the switch statement, since we don't use 'case default'
    switch (message.type) {
      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.Invocation:
      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.StreamItem:
      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.Completion:
      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.StreamInvocation:
      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.CancelInvocation:
        return true;
      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.Close:
      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.Sequence:
      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.Ping:
      case _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.Ack:
        return false;
    }
  }
  _ackTimer() {
    var _this3 = this;
    if (this._ackTimerHandle === undefined) {
      this._ackTimerHandle = setTimeout( /*#__PURE__*/(0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (!_this3._reconnectInProgress) {
            yield _this3._connection.send(_this3._protocol.writeMessage({
              type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_2__.MessageType.Ack,
              sequenceId: _this3._latestReceivedSequenceId
            }));
          }
          // Ignore errors, that means the connection is closed and we don't care about the Ack message anymore.
        } catch {}
        clearTimeout(_this3._ackTimerHandle);
        _this3._ackTimerHandle = undefined;
        // 1 second delay so we don't spam Ack messages if there are many messages being received at once.
      }), 1000);
    }
  }
}
class BufferedItem {
  constructor(message, id, resolver, rejector) {
    this._message = message;
    this._id = id;
    this._resolver = resolver;
    this._rejector = rejector;
  }
}

/***/ }),

/***/ 98331:
/*!*******************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerSentEventsTransport": () => (/* binding */ ServerSentEventsTransport)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ 84493);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 7375);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.



/** @private */
class ServerSentEventsTransport {
  constructor(httpClient, accessToken, logger, options) {
    this._httpClient = httpClient;
    this._accessToken = accessToken;
    this._logger = logger;
    this._options = options;
    this.onreceive = null;
    this.onclose = null;
  }
  connect(url, transferFormat) {
    var _this = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(transferFormat, "transferFormat");
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat, "transferFormat");
      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(SSE transport) Connecting.");
      // set url before accessTokenFactory because this._url is only for send and we set the auth header instead of the query string for send
      _this._url = url;
      if (_this._accessToken) {
        url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(_this._accessToken)}`;
      }
      return new Promise((resolve, reject) => {
        let opened = false;
        if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Text) {
          reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
          return;
        }
        let eventSource;
        if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser || _Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isWebWorker) {
          eventSource = new _this._options.EventSource(url, {
            withCredentials: _this._options.withCredentials
          });
        } else {
          // Non-browser passes cookies via the dictionary
          const cookies = _this._httpClient.getCookieString(url);
          const headers = {};
          headers.Cookie = cookies;
          const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
          headers[name] = value;
          eventSource = new _this._options.EventSource(url, {
            withCredentials: _this._options.withCredentials,
            headers: {
              ...headers,
              ..._this._options.headers
            }
          });
        }
        try {
          eventSource.onmessage = e => {
            if (_this.onreceive) {
              try {
                _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(SSE transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getDataDetail)(e.data, _this._options.logMessageContent)}.`);
                _this.onreceive(e.data);
              } catch (error) {
                _this._close(error);
                return;
              }
            }
          };
          // @ts-ignore: not using event on purpose
          eventSource.onerror = e => {
            // EventSource doesn't give any useful information about server side closes.
            if (opened) {
              _this._close();
            } else {
              reject(new Error("EventSource failed to connect. The connection could not be found on the server," + " either the connection ID is not present on the server, or a proxy is refusing/buffering the connection." + " If you have multiple servers check that sticky sessions are enabled."));
            }
          };
          eventSource.onopen = () => {
            _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, `SSE connected to ${_this._url}`);
            _this._eventSource = eventSource;
            opened = true;
            resolve();
          };
        } catch (e) {
          reject(e);
          return;
        }
      });
    })();
  }
  send(data) {
    var _this2 = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2._eventSource) {
        return Promise.reject(new Error("Cannot send until the transport is connected"));
      }
      return (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(_this2._logger, "SSE", _this2._httpClient, _this2._url, data, _this2._options);
    })();
  }
  stop() {
    this._close();
    return Promise.resolve();
  }
  _close(e) {
    if (this._eventSource) {
      this._eventSource.close();
      this._eventSource = undefined;
      if (this.onclose) {
        this.onclose(e);
      }
    }
  }
}

/***/ }),

/***/ 13838:
/*!*************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Subject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subject": () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ 7375);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

/** Stream implementation to stream items to the server. */
class Subject {
  constructor() {
    this.observers = [];
  }
  next(item) {
    for (const observer of this.observers) {
      observer.next(item);
    }
  }
  error(err) {
    for (const observer of this.observers) {
      if (observer.error) {
        observer.error(err);
      }
    }
  }
  complete() {
    for (const observer of this.observers) {
      if (observer.complete) {
        observer.complete();
      }
    }
  }
  subscribe(observer) {
    this.observers.push(observer);
    return new _Utils__WEBPACK_IMPORTED_MODULE_0__.SubjectSubscription(this, observer);
  }
}

/***/ }),

/***/ 2365:
/*!***********************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextMessageFormat": () => (/* binding */ TextMessageFormat)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// Not exported from index
/** @private */
class TextMessageFormat {
  static write(output) {
    return `${output}${TextMessageFormat.RecordSeparator}`;
  }
  static parse(input) {
    if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
      throw new Error("Message is incomplete.");
    }
    const messages = input.split(TextMessageFormat.RecordSeparator);
    messages.pop();
    return messages;
  }
}
TextMessageFormat.RecordSeparatorCode = 0x1e;
TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);

/***/ }),

/***/ 7375:
/*!***********************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/Utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arg": () => (/* binding */ Arg),
/* harmony export */   "ConsoleLogger": () => (/* binding */ ConsoleLogger),
/* harmony export */   "Platform": () => (/* binding */ Platform),
/* harmony export */   "SubjectSubscription": () => (/* binding */ SubjectSubscription),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "constructUserAgent": () => (/* binding */ constructUserAgent),
/* harmony export */   "createLogger": () => (/* binding */ createLogger),
/* harmony export */   "formatArrayBuffer": () => (/* binding */ formatArrayBuffer),
/* harmony export */   "getDataDetail": () => (/* binding */ getDataDetail),
/* harmony export */   "getErrorString": () => (/* binding */ getErrorString),
/* harmony export */   "getGlobalThis": () => (/* binding */ getGlobalThis),
/* harmony export */   "getUserAgentHeader": () => (/* binding */ getUserAgentHeader),
/* harmony export */   "isArrayBuffer": () => (/* binding */ isArrayBuffer),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loggers */ 96867);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */
const VERSION = "8.0.0";
/** @private */
class Arg {
  static isRequired(val, name) {
    if (val === null || val === undefined) {
      throw new Error(`The '${name}' argument is required.`);
    }
  }
  static isNotEmpty(val, name) {
    if (!val || val.match(/^\s*$/)) {
      throw new Error(`The '${name}' argument should not be empty.`);
    }
  }
  static isIn(val, values, name) {
    // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
    if (!(val in values)) {
      throw new Error(`Unknown ${name} value: ${val}.`);
    }
  }
}
/** @private */
class Platform {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return !Platform.isNode && typeof window === "object" && typeof window.document === "object";
  }
  // WebWorkers don't have a window object so the isBrowser check would fail
  static get isWebWorker() {
    return !Platform.isNode && typeof self === "object" && "importScripts" in self;
  }
  // react-native has a window but no document
  static get isReactNative() {
    return !Platform.isNode && typeof window === "object" && typeof window.document === "undefined";
  }
  // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window
  static get isNode() {
    return typeof process !== "undefined" && process.release && process.release.name === "node";
  }
}
/** @private */
function getDataDetail(data, includeContent) {
  let detail = "";
  if (isArrayBuffer(data)) {
    detail = `Binary data of length ${data.byteLength}`;
    if (includeContent) {
      detail += `. Content: '${formatArrayBuffer(data)}'`;
    }
  } else if (typeof data === "string") {
    detail = `String data of length ${data.length}`;
    if (includeContent) {
      detail += `. Content: '${data}'`;
    }
  }
  return detail;
}
/** @private */
function formatArrayBuffer(data) {
  const view = new Uint8Array(data);
  // Uint8Array.map only supports returning another Uint8Array?
  let str = "";
  view.forEach(num => {
    const pad = num < 16 ? "0" : "";
    str += `0x${pad}${num.toString(16)} `;
  });
  // Trim of trailing space.
  return str.substr(0, str.length - 1);
}
// Also in signalr-protocol-msgpack/Utils.ts
/** @private */
function isArrayBuffer(val) {
  return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer ||
  // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  val.constructor && val.constructor.name === "ArrayBuffer");
}
/** @private */
function sendMessage(_x, _x2, _x3, _x4, _x5, _x6) {
  return _sendMessage.apply(this, arguments);
}
/** @private */
function _sendMessage() {
  _sendMessage = (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (logger, transportName, httpClient, url, content, options) {
    const headers = {};
    const [name, value] = getUserAgentHeader();
    headers[name] = value;
    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
    const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
    const response = yield httpClient.post(url, {
      content,
      headers: {
        ...headers,
        ...options.headers
      },
      responseType,
      timeout: options.timeout,
      withCredentials: options.withCredentials
    });
    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
  });
  return _sendMessage.apply(this, arguments);
}
function createLogger(logger) {
  if (logger === undefined) {
    return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information);
  }
  if (logger === null) {
    return _Loggers__WEBPACK_IMPORTED_MODULE_2__.NullLogger.instance;
  }
  if (logger.log !== undefined) {
    return logger;
  }
  return new ConsoleLogger(logger);
}
/** @private */
class SubjectSubscription {
  constructor(subject, observer) {
    this._subject = subject;
    this._observer = observer;
  }
  dispose() {
    const index = this._subject.observers.indexOf(this._observer);
    if (index > -1) {
      this._subject.observers.splice(index, 1);
    }
    if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
      this._subject.cancelCallback().catch(_ => {});
    }
  }
}
/** @private */
class ConsoleLogger {
  constructor(minimumLogLevel) {
    this._minLevel = minimumLogLevel;
    this.out = console;
  }
  log(logLevel, message) {
    if (logLevel >= this._minLevel) {
      const msg = `[${new Date().toISOString()}] ${_ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel[logLevel]}: ${message}`;
      switch (logLevel) {
        case _ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Critical:
        case _ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Error:
          this.out.error(msg);
          break;
        case _ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Warning:
          this.out.warn(msg);
          break;
        case _ILogger__WEBPACK_IMPORTED_MODULE_1__.LogLevel.Information:
          this.out.info(msg);
          break;
        default:
          // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
          this.out.log(msg);
          break;
      }
    }
  }
}
/** @private */
function getUserAgentHeader() {
  let userAgentHeaderName = "X-SignalR-User-Agent";
  if (Platform.isNode) {
    userAgentHeaderName = "User-Agent";
  }
  return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
}
/** @private */
function constructUserAgent(version, os, runtime, runtimeVersion) {
  // Microsoft SignalR/[Version] ([Detailed Version]; [Operating System]; [Runtime]; [Runtime Version])
  let userAgent = "Microsoft SignalR/";
  const majorAndMinor = version.split(".");
  userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
  userAgent += ` (${version}; `;
  if (os && os !== "") {
    userAgent += `${os}; `;
  } else {
    userAgent += "Unknown OS; ";
  }
  userAgent += `${runtime}`;
  if (runtimeVersion) {
    userAgent += `; ${runtimeVersion}`;
  } else {
    userAgent += "; Unknown Runtime Version";
  }
  userAgent += ")";
  return userAgent;
}
// eslint-disable-next-line spaced-comment
/*#__PURE__*/
function getOsName() {
  if (Platform.isNode) {
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  } else {
    return "";
  }
}
// eslint-disable-next-line spaced-comment
/*#__PURE__*/
function getRuntimeVersion() {
  if (Platform.isNode) {
    return process.versions.node;
  }
  return undefined;
}
function getRuntime() {
  if (Platform.isNode) {
    return "NodeJS";
  } else {
    return "Browser";
  }
}
/** @private */
function getErrorString(e) {
  if (e.stack) {
    return e.stack;
  } else if (e.message) {
    return e.message;
  }
  return `${e}`;
}
/** @private */
function getGlobalThis() {
  // globalThis is semi-new and not available in Node until v12
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("could not find global");
}

/***/ }),

/***/ 86097:
/*!************************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketTransport": () => (/* binding */ WebSocketTransport)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderNames */ 25018);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ 84493);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ 7375);

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.




/** @private */
class WebSocketTransport {
  constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
    this._logger = logger;
    this._accessTokenFactory = accessTokenFactory;
    this._logMessageContent = logMessageContent;
    this._webSocketConstructor = webSocketConstructor;
    this._httpClient = httpClient;
    this.onreceive = null;
    this.onclose = null;
    this._headers = headers;
  }
  connect(url, transferFormat) {
    var _this = this;
    return (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(transferFormat, "transferFormat");
      _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat, "transferFormat");
      _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(WebSockets transport) Connecting.");
      let token;
      if (_this._accessTokenFactory) {
        token = yield _this._accessTokenFactory();
      }
      return new Promise((resolve, reject) => {
        url = url.replace(/^http/, "ws");
        let webSocket;
        const cookies = _this._httpClient.getCookieString(url);
        let opened = false;
        if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode || _Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isReactNative) {
          const headers = {};
          const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
          headers[name] = value;
          if (token) {
            headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_4__.HeaderNames.Authorization] = `Bearer ${token}`;
          }
          if (cookies) {
            headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_4__.HeaderNames.Cookie] = cookies;
          }
          // Only pass headers when in non-browser environments
          webSocket = new _this._webSocketConstructor(url, undefined, {
            headers: {
              ...headers,
              ..._this._headers
            }
          });
        } else {
          if (token) {
            url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
          }
        }
        if (!webSocket) {
          // Chrome is not happy with passing 'undefined' as protocol
          webSocket = new _this._webSocketConstructor(url);
        }
        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Binary) {
          webSocket.binaryType = "arraybuffer";
        }
        webSocket.onopen = _event => {
          _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, `WebSocket connected to ${url}.`);
          _this._webSocket = webSocket;
          opened = true;
          resolve();
        };
        webSocket.onerror = event => {
          let error = null;
          // ErrorEvent is a browser only type we need to check if the type exists before using it
          if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
            error = event.error;
          } else {
            error = "There was an error with the transport";
          }
          _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, `(WebSockets transport) ${error}.`);
        };
        webSocket.onmessage = message => {
          _this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(WebSockets transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getDataDetail)(message.data, _this._logMessageContent)}.`);
          if (_this.onreceive) {
            try {
              _this.onreceive(message.data);
            } catch (error) {
              _this._close(error);
              return;
            }
          }
        };
        webSocket.onclose = event => {
          // Don't call close handler if connection was never established
          // We'll reject the connect call instead
          if (opened) {
            _this._close(event);
          } else {
            let error = null;
            // ErrorEvent is a browser only type we need to check if the type exists before using it
            if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
              error = event.error;
            } else {
              error = "WebSocket failed to connect. The connection could not be found on the server," + " either the endpoint may not be a SignalR endpoint," + " the connection ID is not present on the server, or there is a proxy blocking WebSockets." + " If you have multiple servers check that sticky sessions are enabled.";
            }
            reject(new Error(error));
          }
        };
      });
    })();
  }
  send(data) {
    if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
      this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(WebSockets transport) sending data. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getDataDetail)(data, this._logMessageContent)}.`);
      this._webSocket.send(data);
      return Promise.resolve();
    }
    return Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    if (this._webSocket) {
      // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
      // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
      this._close(undefined);
    }
    return Promise.resolve();
  }
  _close(event) {
    // webSocket will be null if the transport did not start successfully
    if (this._webSocket) {
      // Clear websocket handlers because we are considering the socket closed now
      this._webSocket.onclose = () => {};
      this._webSocket.onmessage = () => {};
      this._webSocket.onerror = () => {};
      this._webSocket.close();
      this._webSocket = undefined;
    }
    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(WebSockets transport) socket closed.");
    if (this.onclose) {
      if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1000)) {
        this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
      } else if (event instanceof Error) {
        this.onclose(event);
      } else {
        this.onclose();
      }
    }
  }
  _isCloseEvent(event) {
    return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
  }
}

/***/ }),

/***/ 98385:
/*!*******************************************************************!*\
  !*** ./node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XhrHttpClient": () => (/* binding */ XhrHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ 78139);
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ 20170);
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ 14449);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ 7375);
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.




class XhrHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
  constructor(logger) {
    super();
    this._logger = logger;
  }
  /** @inheritDoc */
  send(request) {
    // Check that abort was not signaled before calling send
    if (request.abortSignal && request.abortSignal.aborted) {
      return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
    }
    if (!request.method) {
      return Promise.reject(new Error("No method defined."));
    }
    if (!request.url) {
      return Promise.reject(new Error("No url defined."));
    }
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(request.method, request.url, true);
      xhr.withCredentials = request.withCredentials === undefined ? true : request.withCredentials;
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      if (request.content === "") {
        request.content = undefined;
      }
      if (request.content) {
        // Explicitly setting the Content-Type header for React Native on Android platform.
        if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isArrayBuffer)(request.content)) {
          xhr.setRequestHeader("Content-Type", "application/octet-stream");
        } else {
          xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        }
      }
      const headers = request.headers;
      if (headers) {
        Object.keys(headers).forEach(header => {
          xhr.setRequestHeader(header, headers[header]);
        });
      }
      if (request.responseType) {
        xhr.responseType = request.responseType;
      }
      if (request.abortSignal) {
        request.abortSignal.onabort = () => {
          xhr.abort();
          reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
        };
      }
      if (request.timeout) {
        xhr.timeout = request.timeout;
      }
      xhr.onload = () => {
        if (request.abortSignal) {
          request.abortSignal.onabort = null;
        }
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
        } else {
          reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
        }
      };
      xhr.onerror = () => {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
        reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.statusText, xhr.status));
      };
      xhr.ontimeout = () => {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Timeout from HTTP request.`);
        reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.TimeoutError());
      };
      xhr.send(request.content);
    });
  }
}

/***/ }),

/***/ 6771:
/*!**********************************!*\
  !*** abort-controller (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 18022:
/*!*****************************!*\
  !*** eventsource (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 86045:
/*!******************************!*\
  !*** fetch-cookie (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 98190:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 57333:
/*!******************************!*\
  !*** tough-cookie (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6139:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map