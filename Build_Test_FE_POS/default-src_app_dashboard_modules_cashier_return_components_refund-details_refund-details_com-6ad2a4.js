"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["default-src_app_dashboard_modules_cashier_return_components_refund-details_refund-details_com-6ad2a4"],{

/***/ 87364:
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/components/refund-details/refund-details.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundDetailsComponent": () => (/* binding */ RefundDetailsComponent)
/* harmony export */ });
/* harmony import */ var _main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../main-fund/bank-deposits/view-uploaded-file/view-uploaded-file.component */ 71891);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);







function RefundDetailsComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "table", 26)(3, "thead")(4, "tr")(5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Refund Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tbody")(10, "tr")(11, "td")(12, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td")(15, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.details == null ? null : ctx_r0.details.refund == null ? null : ctx_r0.details.refund.refundAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.details == null ? null : ctx_r0.details.refund == null ? null : ctx_r0.details.refund.currency[0] == null ? null : ctx_r0.details.refund.currency[0].lookupName);
  }
}
class RefundDetailsComponent {
  constructor(_activeModal, _collectService, _modalService, _commonService) {
    this._activeModal = _activeModal;
    this._collectService = _collectService;
    this._modalService = _modalService;
    this._commonService = _commonService;
  }
  ngOnInit() {
    if (this.data?.orderType == 7001) {
      // IN CASE OF SERVICE
      this.getReturnServiceOrderRefundDetails(this.data?.details?.servicesSalesOrderNo || this.data?.details?.order?.servicesSalesOrderNo);
    } else if (this.data?.orderType == 7002) {
      // IN CASE OF DP
      this.getReturnDpOrderRefundDetails(this.data?.details?.directPaymentSalesOrderOpportunityNo || this.data?.order?.directPaymentSalesOrderOpportunityNo);
    } else {
      let orderId = this.data?.details?.sparePartsSalesOrderOpportunityNo || this.data?.details?.returnOrderId; // this is from return order in collection report 
      this.getReturnSparePartOrderRefundDetails(orderId);
    }
  }
  getReturnDpOrderRefundDetails(id) {
    this._collectService.getReturnDpOrderRefundDetails(id).subscribe(response => {
      console.log(response);
      this.details = response.data;
      this.fileName = this.details?.refund?.cashier?.signAttachment?.split('/').pop();
    });
  }
  getReturnServiceOrderRefundDetails(id) {
    this._collectService.getReturnServiceOrderRefundDetails(id).subscribe(response => {
      console.log(response);
      this.details = response.data;
      this.fileName = this.details?.refund?.cashier?.signAttachment?.split('/').pop();
    });
  }
  getReturnSparePartOrderRefundDetails(id) {
    this._collectService.getReturnOrderRefundDetails(id).subscribe(response => {
      this.details = response.data;
      this.fileName = this.details?.refund?.cashier?.signAttachment?.split('/').pop();
    });
  }
  viewFile() {
    const modalRef = this._modalService.open(_main_fund_bank_deposits_view_uploaded_file_view_uploaded_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewUploadedFileComponent, {
      size: 'md'
    });
    modalRef.componentInstance.file = this.details?.signAttachment;
  }
  printInvoices() {
    if (this.data?.orderType == 7001 || this.data?.orderType == 7003) {
      this.getInvoice();
    } else {
      this._commonService.downloadInvoices({
        invoices: this.details?.refund?.invoices?.clientCopy
      });
    }
  }
  getInvoice() {
    let URL;
    let orderNo = '';
    const formData = new FormData();
    if (this.data.orderType == 7001) {
      URL = this._collectService.viewServiceLayerReturnOrderOrigionalInvoice(formData);
      orderNo = this.data?.details?.servicesSalesOrderNo || this.data?.details?.returnOrderId;
      formData.append('returnOrderNo', orderNo);
    } else if (this.data.orderType == 7003) {
      URL = this._collectService.viewReturnOrderOrigionalInvoice(formData);
      orderNo = this.data?.details?.sparePartsSalesOrderOpportunityNo || this.data?.details?.returnOrderId;
      formData.append('returnOrderNo', orderNo);
    }
    URL.subscribe({
      next: response => {
        if (response.isSuccess) {
          this._commonService.downloadURI(response.data);
        }
      },
      error: err => {
        this.responseModal('error', err?.error.errors || err?.error.Errors);
      }
    });
  }
  responseModal(type, message) {
    const ref = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
    if (type == 'success') ref.componentInstance.message = message;
    ref.componentInstance.messageError = message;
    ref.componentInstance.type = type;
  }
}
RefundDetailsComponent.ɵfac = function RefundDetailsComponent_Factory(t) {
  return new (t || RefundDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_2__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
};
RefundDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RefundDetailsComponent,
  selectors: [["app-refund-details"]],
  inputs: {
    data: "data"
  },
  decls: 80,
  vars: 22,
  consts: [[1, "fc-modal", "p-4"], [1, "modal-header", "p-0", "pb-3", "align-items-center"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder"], [1, "m-0", "primary-clr", "fw-500"], [1, "modal-body", "p-0"], [1, "dark-gray", "fw-700", "my-3"], [1, "d-flex", "mt-3", "flex-wrap"], [1, "d-flex", "flex-column", "flex-basis"], [1, "dark-gray", "fw-500"], [1, "light-gray"], [1, "separator", "mt-3", "mb-4"], [1, "dark-gray", "fw-700", "my-3", 2, "flex", "1 0 100%"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "redBtn", 3, "click"], [1, "row"], [1, "row", "mt-3"], [1, "col-sm-6"], [1, "fw-500"], [1, "disabled-box"], [1, "fw-500", "light-gray"], ["class", "col-12", 4, "ngIf"], [1, "modal-footer", "p-0"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "col-12"], [1, "card-table"], [1, "table"], ["width", "50%", 1, "text-center"], [1, "text-center", "green-clr", "m-0"], [1, "dark-gray", "text-center", "m-0"]],
  template: function RefundDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Refund Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7)(16, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Register Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 7)(21, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Register No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 7)(27, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Session No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h6", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 7)(34, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Employee");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 7)(39, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 7)(45, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 12)(52, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RefundDetailsComponent_Template_button_click_52_listener() {
        return ctx.printInvoices();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 14)(55, "div", 15)(56, "div", 16)(57, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 18)(60, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 14)(63, "div", 16)(64, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 18)(67, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 16)(70, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Remaining Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 18)(73, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, RefundDetailsComponent_div_75_Template, 17, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 21)(77, "div", 22)(78, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RefundDetailsComponent_Template_button_click_78_listener() {
        return ctx._activeModal.close("Save click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Refund Order No: ", (ctx.details == null ? null : ctx.details.servicesSalesOrderNo) || (ctx.details == null ? null : ctx.details.sparePartsSalesOrderOpportunityNo) || (ctx.details == null ? null : ctx.details.directPaymentSalesOrderOpportunityNo), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.details == null ? null : ctx.details.returnOrderType == null ? null : ctx.details.returnOrderType.toLowerCase()) == "replace" && "Collected In" || "Refunded In");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.refund == null ? null : ctx.details.refund.registerBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.refund == null ? null : ctx.details.refund.register == null ? null : ctx.details.refund.register.registersName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.refund == null ? null : ctx.details.refund.register == null ? null : ctx.details.refund.register.registerId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.refund == null ? null : ctx.details.refund.registerSessionId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.details == null ? null : ctx.details.returnOrderType == null ? null : ctx.details.returnOrderType.toLowerCase()) == "replace" && "Collected By" || "Refunded By");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.refund == null ? null : ctx.details.refund.refundedBy == null ? null : ctx.details.refund.refundedBy.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](43, 16, ctx.details == null ? null : ctx.details.refund == null ? null : ctx.details.refund.refundAt, "mediumDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](49, 19, ctx.details == null ? null : ctx.details.refund == null ? null : ctx.details.refund.refundAt, "h:mm a"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.data == null ? null : ctx.data.orderType) == 7002 && "View Receipt" || "View Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.customer == null ? null : ctx.details.customer.customerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (ctx.details == null ? null : ctx.details.returnOrderType == null ? null : ctx.details.returnOrderType.toLowerCase()) == "replace" && "Collected" || "Refunded", " Grand Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.grandAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.remainingAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.details == null ? null : ctx.details.returnOrderType == null ? null : ctx.details.returnOrderType.toLowerCase()) !== "replace");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [".flex-basis[_ngcontent-%COMP%] {\n  flex: 0 1 25%;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  border: 1px solid #2eb93e;\n  border-radius: 5px;\n}\n\n[_nghost-%COMP%]   .card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  padding: 10px 0px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9yZXR1cm4vY29tcG9uZW50cy9yZWZ1bmQtZGV0YWlscy9yZWZ1bmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFFUTtFQUNJLHFCQUFBO0VBQ0EsNEJBQUE7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWJhc2lzIHtcbiAgZmxleDogMCAxIGNhbGMoMTAwJS80KTtcbn1cbi5maWxlLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmViOTNlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG46aG9zdHtcbiAgICAuY2FyZC10YWJsZXtcbiAgICAgICAgdGR7XG4gICAgICAgICAgICBwYWRkaW5nOjAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_modules_cashier_return_components_refund-details_refund-details_com-6ad2a4.js.map