"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_cashier_petty-cash_dashboard_dashboard_module_ts"],{

/***/ 16627:
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/dashboard/dashboard-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 16674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: 'pettycash-dashboard',
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

/***/ 16674:
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/dashboard/dashboard.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 34482);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 59007);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/header.service */ 36690);
/* harmony import */ var _services_petty_cash_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/petty-cash.service */ 72657);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/not-found/not-found.component */ 59442);
















const _c0 = ["success"];
const _c1 = ["barChartCanvas"];
const _c2 = ["expenseCategoryCanvas"];
function DashboardComponent_i_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_i_9_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.resetDate("date"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.invoiceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.category[0] == null ? null : item_r9.category[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.costCenter == null ? null : item_r9.costCenter.costCenterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 8, item_r9 == null ? null : item_r9.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 11, item_r9 == null ? null : item_r9.expenseAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r9 == null ? null : item_r9.expenseTax, " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](17, 14, item_r9 == null ? null : item_r9.expenseTotalAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.statusObj == null ? null : item_r9.statusObj.description);
  }
}
function DashboardComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_container_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 40)(2, "div", 41)(3, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 41)(12, "ngb-pagination", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function DashboardComponent_ng_container_78_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.pageNo = $event);
    })("pageChange", function DashboardComponent_ng_container_78_Template_ngb_pagination_pageChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r5.pageNo * 6 - 5, " - ", (ctx_r5.pettyCashExpensesList == null ? null : ctx_r5.pettyCashExpensesList.length) == 6 ? ctx_r5.pageNo * 6 : ctx_r5.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", ctx_r5.totalRecords)("page", ctx_r5.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function DashboardComponent_i_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_i_88_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.resetDate("interval"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c3 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
var _region = /*#__PURE__*/new WeakMap();
var _endRegion = /*#__PURE__*/new WeakMap();
class DashboardComponent {
  constructor(_sharedService, _headerService, _pettyCashService, fb, datepipe, modalService) {
    (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _region, {
      writable: true,
      value: void 0
    });
    (0,C_Users_Omama_Akour_source_repos_DX_DX_FE_DX_FE_POS_DX_FE_POS_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _endRegion, {
      writable: true,
      value: void 0
    });
    this._sharedService = _sharedService;
    this._headerService = _headerService;
    this._pettyCashService = _pettyCashService;
    this.fb = fb;
    this.datepipe = datepipe;
    this.modalService = modalService;
    this.searchText = '';
    this.filterParams = undefined;
    this.sort = 1;
    this.totalRecords = 1;
    this.expenseTotalAmount = 0;
    this.pageNo = 1;
    this.pageSize = 6;
    this.pettyCashExpensesList = [];
    this.statusList = [];
    this.categoriesList = [];
    this.registerList = [];
    this.expensesAmount = [];
    this.expenseCategories = null;
    this.expenseCategoriesList = [];
    this.pieChartColors = [];
    this.timeInterVal = null;
    this.pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#2D3047'
          }
        },
        datalabels: {
          formatter: (value, ctx) => {
            if (ctx.chart.data.labels) {
              //return ctx.chart.data.labels[ctx.dataIndex];
              return ctx.chart.data.datasets[0].data[ctx.dataIndex];
            }
          },
          color: '#fff'
        }
      }
    };
    this.pieChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__["default"]];
  }
  initFilterForm() {
    this.filterForm = this.fb.group({
      categoryId: [null],
      status: [null],
      registerId: [null],
      date: ['']
    });
  }
  ngOnInit() {
    this._headerService.setTitle('Petty Cash Dashboard');
    this.initFilterForm();
    this.getPettyCashStatus();
    this.getRegisters();
    this.getPettyCashCategories();
    this.filterForm.valueChanges.subscribe(value => {
      this.pageNo = 1;
      let dateObj = {
        fromDate: '',
        toDate: ''
      };
      let formValues;
      if (value['date']) {
        dateObj['dateFrom'] = this.datepipe.transform(value['date'][0], 'yyyy-MM-dd');
        dateObj['dateTo'] = this.datepipe.transform(value['date'][1], 'yyyy-MM-dd');
        ;
      }
      formValues = {
        ...value,
        ...dateObj
      };
      delete formValues['date'];
      if (formValues.categoryId == null) {
        formValues = {
          ...formValues,
          categoryId: ''
        };
      }
      if (formValues.status == null) {
        formValues = {
          ...formValues,
          status: ''
        };
      }
      if (formValues.registerId == null) {
        formValues = {
          ...formValues,
          registerId: ''
        };
      }
      this.filterParams = '?' + new URLSearchParams(formValues).toString();
      if (this.myChart?.canvas) {
        this.myChart.destroy();
      }
      this.expensesAmount = [];
      this.getExpensesDashboard(this.filterParams);
    });
    //this.getExpensesDashboardCards();
  }

  ngAfterViewInit() {
    this.getExpensesDashboard(this.filterParams);
    this.getGraphData();
  }
  generateChart() {
    //const ctx = document.getElementById('expenseChart') as HTMLCanvasElement;
    const ctx = this.expenseChartCanvas.nativeElement;
    const chartStatus = chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart.getChart(ctx.id);
    if (chartStatus) {
      chartStatus.destroy();
    }
    console.log({
      ctx,
      chartStatus
    });
    this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Pending Expense', 'Approved Expense', 'Rejected Expense'],
        datasets: [{
          label: 'Expenses',
          data: this.expensesAmount,
          backgroundColor: '#DC3545',
          barPercentage: 0.1,
          categoryPercentage: 0.8,
          borderSkipped: false,
          borderRadius: Number.MAX_VALUE
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  getGraphData() {
    let dateObj = {
      fromDate: '',
      toDate: ''
    };
    if (this.timeInterVal?.length) {
      dateObj['fromDate'] = this.datepipe.transform(this.timeInterVal[0], 'yyyy-MM-dd');
      dateObj['toDate'] = this.datepipe.transform(this.timeInterVal[1], 'yyyy-MM-dd');
      ;
    } else {
      const currentYear = new Date().getFullYear();
      const firstDayOfYear = new Date(currentYear, 0, 1);
      const lastDayOfYear = new Date(currentYear, 11, 31);
      dateObj['fromDate'] = this.datepipe.transform(firstDayOfYear, 'yyyy-MM-dd');
      dateObj['toDate'] = this.datepipe.transform(lastDayOfYear, 'yyyy-MM-dd');
      ;
    }
    let params = `categoryId=${this.expenseCategories?.toString() || ''}&dateFrom=${dateObj?.fromDate}&dateTo=${dateObj?.toDate}`;
    this._pettyCashService.getPettyCashGraphDashboard(params).subscribe(response => {
      if (response.isSuccess) {
        this.expenseCategoriesList = response.data;
        this.pieChartColors = [];
        this.expenseCategoriesList.forEach((x, index) => {
          if (index == this.expenseCategoriesList.length - 1) this.pieChartColors.unshift('rgb(220, 53, 69)');else this.pieChartColors = [...this.pieChartColors, this.getRandomGrayColor()];
        });
        this.expenseCategoriesChart();
      }
    });
  }
  handleDateChange(event) {
    this.timeInterVal = event;
    this.getGraphData();
  }
  handleCategoryChange(event) {
    this.getGraphData();
  }
  expenseCategoriesChart() {
    //const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    this.pieChartData = {
      labels: [...this.expenseCategoriesList.map(x => x.category[0].lookupName)],
      datasets: [{
        data: [...this.expenseCategoriesList.map(x => x.amount)],
        backgroundColor: [...this.pieChartColors]
      }]
      //labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
      //datasets: [
      //  {
      //    data: [300, 500, 100],
      //  },
      //],
    };
  }

  getRandomGrayColor() {
    const grayValue = Math.floor(Math.random() * 256);
    const grayColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
    return grayColor;
  }
  resetDate(control) {
    if (control == 'interval') {
      this.timeInterVal = null;
    } else {
      this.filterForm.controls['date'].setValue('');
    }
  }
  getExpensesDashboard(filterParams = this.filterParams) {
    let defaultParams = `pageNo=${this.pageNo - 1}&pageSize=${this.pageSize}`;
    this._pettyCashService.getExpensesDashboard(filterParams && filterParams + `&${defaultParams}` || `?${defaultParams}`).subscribe(response => {
      this.expenseTotalAmount = response?.info?.expenseTotalAmount;
      this.pettyCashExpensesList = response?.data;
      this.info = response?.info;
      this.totalRecords = response?.totalRecordCount;
      this.expensesAmount = [...this.expensesAmount, response?.info?.pending, response?.info?.approved, response?.info?.rejected];
      //this.generateChart();
    });
  }

  getExpensesDashboardCards() {
    this._pettyCashService.getExpensesDashboardCards(this._sharedService.getRegister.registerObj.id).subscribe(response => {
      this.expensesCardsData = response.data;
    });
  }
  getPettyCashStatus() {
    this._pettyCashService.getPettyCashStatus().subscribe(response => {
      this.statusList = response.data;
    });
  }
  getPettyCashCategories() {
    this._pettyCashService.getLookupsById(12).subscribe(response => {
      this.categoriesList = response.data.map(x => {
        return {
          id: x.id,
          name: x.name[0].lookupName
        };
      });
    });
  }
  getRegisters() {
    this._pettyCashService.getRegistersList().subscribe(response => {
      this.registerList = response.data;
    });
  }
  pageChange(page) {
    this.pageNo = page;
    this.getExpensesDashboard();
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_petty_cash_service__WEBPACK_IMPORTED_MODULE_4__.PettyCashService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_12__.BaseChartDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.success = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.expenseChartCanvas = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.expenseCategoryCanvas = _t.first);
    }
  },
  decls: 93,
  vars: 41,
  consts: [[1, "mt-4", 3, "formGroup"], [1, "row", "align-items-stretch"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], ["formControlName", "categoryId", "placeholder", "Category Name", "bindLabel", "name", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-sm-0", 3, "items"], ["formControlName", "status", "placeholder", "Status", "bindLabel", "description", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], ["formControlName", "registerId", "placeholder", "Register", "bindLabel", "registersName", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "multiple", "searchable", "items", "closeOnSelect"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "position-relative"], ["class", "fa-solid fa-times", "style", "position:absolute;top:15px;right:30px;cursor:pointer", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "date", "placeholder", "Select Date", "bsDaterangepicker", "", "placement", "left", 1, "form-control", "mt-3", "mt-lg-0", 2, "height", "46px", 3, "bsConfig"], [1, "heading-text", "my-3"], [1, "main-fund-container", "gap-4", "mb-4", "mt-4"], [1, "main-fund-wrapper"], [1, "main-fund-div"], [1, "d-flex", "flex-column"], [1, "fw-700", "font-18"], [1, "fw-700", "font-20", "gray-500", "m-0"], [1, "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "mt-3", "align-items-center"], [1, "heading-text", "mb-0"], [1, "d-flex", "gap-4"], [1, "total-records"], [1, "col-md-12"], [1, "card-table", "mt-2"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], ["loading", ""], [4, "ngIf"], [1, "row", "mt-5"], [1, "row", "mb-3"], [1, "col-4"], ["placeholder", "Categories", "bindLabel", "name", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-sm-0", 3, "ngModel", "multiple", "items", "ngModelChange", "change"], [1, "col-4", "position-relative"], ["type", "text", "placeholder", "Time Interval", "bsDaterangepicker", "", "placement", "left", 1, "form-control", 2, "height", "46px", 3, "ngModel", "bsConfig", "ngModelChange", "bsValueChange"], [1, "d-flex", "justify-content-center", 2, "height", "500px"], ["baseChart", "", 1, "chart", 3, "data", "type", "options", "plugins"], [1, "fa-solid", "fa-times", 2, "position", "absolute", "top", "15px", "right", "30px", "cursor", "pointer", 3, "click"], [1, "not-found"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md-6"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ng-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ng-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ng-select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, DashboardComponent_i_9_Template, 1, 0, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Petty Cash Expenses");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Approved");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "h6", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Rejected");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "h6", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 11)(31, "div", 12)(32, "div", 13)(33, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "h6", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 16)(39, "div", 17)(40, "div", 18)(41, "h3", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Petty Cash Expenses");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 20)(44, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 16)(50, "div", 22)(51, "div", 23)(52, "div", 24)(53, "table", 25)(54, "thead")(55, "tr")(56, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Invoice No");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Expense Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Cost Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Tax %");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Total Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, DashboardComponent_tr_73_Template, 20, 17, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, DashboardComponent_div_74_Template, 2, 0, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, DashboardComponent_ng_template_76_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, DashboardComponent_ng_container_78_Template, 13, 9, "ng-container", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 30)(80, "div", 17)(81, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "Expenses By Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 17)(84, "div", 31)(85, "div", 32)(86, "ng-select", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_ng_select_ngModelChange_86_listener($event) {
        return ctx.expenseCategories = $event;
      })("change", function DashboardComponent_Template_ng_select_change_86_listener($event) {
        return ctx.handleCategoryChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, DashboardComponent_i_88_Template, 1, 0, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_89_listener($event) {
        return ctx.timeInterVal = $event;
      })("bsValueChange", function DashboardComponent_Template_input_bsValueChange_89_listener($event) {
        return ctx.handleDateChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 17)(91, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](92, "canvas", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.filterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.categoriesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.statusList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiple", true)("searchable", true)("items", ctx.registerList)("closeOnSelect", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.filterForm.controls["date"].value.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](39, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](21, 27, ctx.info == null ? null : ctx.info.approved, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](29, 30, ctx.info == null ? null : ctx.info.rejected, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](37, 33, ctx.info == null ? null : ctx.info.pending, "2.3-3"), " JOD ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Expenses Total Amount. ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](46, 36, ctx.expenseTotalAmount, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalRecords, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.pettyCashExpensesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.pettyCashExpensesList == null ? null : ctx.pettyCashExpensesList.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.expenseCategories)("multiple", true)("items", ctx.categoriesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.timeInterVal == null ? null : ctx.timeInterVal.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.timeInterVal)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](40, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.pieChartData)("type", "pie")("options", ctx.pieChartOptions)("plugins", ctx.pieChartPlugins);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_12__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".main-fund-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 1px solid #E9E9E9;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px 15px;\n  flex: 0 1 240px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px 5px 20px 15px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9wZXR0eS1jYXNoL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ047QUFDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFJQTtFQUNFLHNDQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1mdW5kLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAubWFpbi1mdW5kLXdyYXBwZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTlFOUU5O1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgZmxleDogMCAxIDI0MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLm1haW4tZnVuZC1kaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTVweDtcblxuICAgICAgLmN1cnJlbmN5LXN5bWJvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmNhcmQtdGFibGUgdGQge1xuICBwYWRkaW5nOiAyMHB4IDVweCAyMHB4IDE1cHggIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 66947:
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/dashboard/dashboard.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 16627);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/shared.module */ 44466);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 16674);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class DashboardModule {}
DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)();
};
DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.NgChartsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.NgChartsModule]
  });
})();

/***/ }),

/***/ 72657:
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/petty-cash/services/petty-cash.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PettyCashService": () => (/* binding */ PettyCashService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);




class PettyCashService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  GetExpenses(searchText, sort, pageNo) {
    return this.http.get(this.apiUrl + `Expense/GetExpenses?Search=${searchText}&Sort=${sort}&PageNo=${pageNo}&PageSize=6`, this.sharedService.getHeaders());
  }
  getRegisterPettyCashSituation(registerId) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettyCashSituation?registerId=${registerId}`, this.sharedService.getHeaders());
  }
  getApprovedExpensesSinceReplinshment(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetApprovedExpensesSinceReplinshment${params}`, this.sharedService.getHeaders());
  }
  getPettyCashRequestExpensesList(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetPettyCashRequestExpensesList${params}`, this.sharedService.getHeaders());
  }
  getExpensesDashboard(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpensesDashboard${params}`, this.sharedService.getHeaders());
  }
  getPettyCashGraphDashboard(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetPettyCashGraphDashboard?${params}`, this.sharedService.getHeaders());
  }
  getExpensesDashboardCards(registerId) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpensesDashboardCards?RegisterId=${registerId}`, this.sharedService.getHeaders());
  }
  AddExpense(expense) {
    return this.http.post(this.apiUrl + 'Expense/AddExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  confirmReceivePettyCashAmount(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/ConfirmReceivePettyCashAmount', formData, this.sharedService.getHeaders());
  }
  uploadConfirmReceivePettyCashAmount(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/UploadConfirmReceivePettyCashAmount', formData, this.sharedService.getHeaders());
  }
  EditExpense(expense) {
    return this.http.post(this.apiUrl + 'Expense/EditExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  GetExpenseDetails(id) {
    return this.http.get(this.apiUrl + `Expense/GetExpenseDetails?expenseRecordId=${id}`, this.sharedService.getHeaders());
  }
  getLookupsById(id) {
    return this.http.get(this.apiUrl + `Lookups/GetLookups?lookupTypeId=${id}&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getExpenseCategories() {
    return this.http.get(this.apiUrl + `PettyCash/GetExpensesCategories?status=2001&Sort=0&PageNo=0&PageSize=1000`, this.sharedService.getHeaders());
  }
  getPettyCashStatus() {
    return this.http.get(this.apiUrl + `Lookups/GetLookups?lookupTypeId=2&parentId=1`, this.sharedService.getHeaders());
  }
  getCostCenters() {
    return this.http.get(this.apiUrl + `PettyCash/GetCostCenters?StatusId=2001&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getCostCentersByTypeId(typeId) {
    return this.http.get(this.apiUrl + `PettyCash/GetCostCenters?StatusId=2001&CostCenterType=${typeId}&PageSize=1000`, this.sharedService.getHeaders());
  }
  getRegistersList() {
    let url = `Register/GetRegisters?Status=2001&PageNo=0&PageSize=100`;
    return this.http.get(this.apiUrl + url, this.sharedService.getHeaders());
  }
  //==============================================
  getPettyCashExpensesNew(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpenses${params}`, this.sharedService.getHeaders());
  }
  GetPettyCashExpenses(searchText, expenseId, sort, status, pageNo) {
    return this.http.get(this.apiUrl + `PettyCash/GetExpenses?Search=${searchText}&expenseId=${expenseId}&Status=${status}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&RegisterId=${this.sharedService.getRegister?.registerObj?.id}`, this.sharedService.getHeaders());
  }
  AddPettyCashExpense(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/AddExpense', expense, {
      reportProgress: true,
      observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  EditPettyCashExpense(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/EditExpense', expense, {
      //reportProgress: true,
      //observe: 'events',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: 'Bearer ' + this.sharedService.getToken
      })
    });
  }
  expenseRevised(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/ExpenseRevised', expense, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
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
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettycashrequest?Search=${searchText}&Status=${status}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&RegisterId=${this.sharedService.getRegister?.registerObj?.id}`, this.sharedService.getHeaders());
  }
  getRegisterPettycashrequestNew(params) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettycashrequest${params}`, this.sharedService.getHeaders());
  }
  GetRegisterPettycashrequestDetails(id) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegisterPettycashrequestDetails?pettyCashRequestId=${id}`, this.sharedService.getHeaders());
  }
  GetRegistersPettyCashLimits(id) {
    return this.http.get(this.apiUrl + `PettyCash/GetRegistersPettyCashLimits?Search=${id}`, this.sharedService.getHeaders());
  }
  AddPettyCashRequest(expense) {
    return this.http.post(this.apiUrl + 'PettyCash/AddPettyCashRequest', expense, this.sharedService.getHeaders());
  }
  givePettyCashPayment(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/GivePettyCashPayment', formData, this.sharedService.getHeaders());
  }
  addExpenseV2(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/AddExpenseV2', formData, this.sharedService.getHeaders());
  }
  cancelGivenPettyCashPayment(formData) {
    return this.http.post(this.apiUrl + 'PettyCash/CancelGivenPettyCashPayment', formData, this.sharedService.getHeaders());
  }
  getEmployees() {
    return this.http.get(this.apiUrl + `User/GetUsers?status=2001&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getCashierEmployees() {
    return this.http.get(this.apiUrl + `User/GetUsers?roleId=1&status=2001&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getPettyCashPayments(parmas) {
    return this.http.get(this.apiUrl + `PettyCash/GetPettyCashPayments${parmas}`, this.sharedService.getHeaders());
  }
}
PettyCashService.ɵfac = function PettyCashService_Factory(t) {
  return new (t || PettyCashService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
PettyCashService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PettyCashService,
  factory: PettyCashService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 34328:
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/checkPrivateRedeclaration.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _checkPrivateRedeclaration)
/* harmony export */ });
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

/***/ }),

/***/ 34482:
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldInitSpec)
/* harmony export */ });
/* harmony import */ var _checkPrivateRedeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkPrivateRedeclaration.js */ 34328);

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  (0,_checkPrivateRedeclaration_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, privateMap);
  privateMap.set(obj, value);
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_cashier_petty-cash_dashboard_dashboard_module_ts.js.map