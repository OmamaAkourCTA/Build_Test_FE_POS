"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_cashier_return_return_module_ts"],{

/***/ 7225:
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/components/collect/collect.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectComponent": () => (/* binding */ CollectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_download_invoices_download_invoices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/download-invoices/download-invoices.component */ 41746);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);






function CollectComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
class CollectComponent {
  constructor(_activeModal, _modalService, _collectService) {
    this._activeModal = _activeModal;
    this._modalService = _modalService;
    this._collectService = _collectService;
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.message = '';
  }
  ngOnInit() {
    console.log(this.data);
  }
  handleConfirm() {
    const formData = new FormData();
    formData.append('OrderId', this.data?.details?.sparePartsSalesOrderOpportunityNo);
    this._collectService.collectZeroReturnOrder(formData).subscribe(response => {
      console.log(response);
      if (response.isSuccess) {
        this.eventData.emit({
          isSuccess: response.isSuccess
        });
        const modalRef = this._modalService.open(_shared_components_download_invoices_download_invoices_component__WEBPACK_IMPORTED_MODULE_0__.DownloadInvoicesComponent);
        modalRef.componentInstance.data = {
          message: 'Successfully done!',
          invoices: response.data
        };
      }
    }, error => {
      this.message = error?.error?.errors[0]?.ErrorMessageEn;
      setTimeout(() => this.message = '', 3000);
    });
  }
}
CollectComponent.ɵfac = function CollectComponent_Factory(t) {
  return new (t || CollectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__.CollectService));
};
CollectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CollectComponent,
  selectors: [["app-collect"]],
  inputs: {
    data: "data"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 43,
  vars: 5,
  consts: [[1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-6"], [1, "fw-500"], [1, "disabled-box"], [1, "fw-500", "light-gray"], [1, "row"], [1, "col-12", "mt-3"], [1, "signed-attachment"], [1, "m-0"], ["class", "mt-2 alert alert-danger", 4, "ngIf"], [1, "modal-footer", "p-4", "border-0"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "mt-2", "alert", "alert-danger"]],
  template: function CollectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Collect");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "div", 5)(14, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Return Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5)(20, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Register Refund Threshold");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7)(23, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9)(26, "div", 5)(27, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Refund amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 7)(30, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 10)(33, "div", 11)(34, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Here we need to print the invoices and sign them only, please click confirm to continue.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, CollectComponent_p_36_Template, 2, 1, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 14)(38, "div", 15)(39, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollectComponent_Template_button_click_39_listener() {
        return ctx._activeModal.close("Save click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollectComponent_Template_button_click_41_listener() {
        return ctx.handleConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.customer == null ? null : ctx.data.details.customer.customerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.returnOrderType);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.registerThreshold);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.grandAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".signed-attachment[_ngcontent-%COMP%] {\n  height: 108px;\n  border-radius: 5px;\n  background: #F9F9F9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.signed-attachment[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n  color: #929EAE;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9yZXR1cm4vY29tcG9uZW50cy9jb2xsZWN0L2NvbGxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ25lZC1hdHRhY2htZW50IHtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBoNiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOTI5RUFFO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 33743:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/components/direct-payment-return/direct-payment-return.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectPaymentReturnComponent": () => (/* binding */ DirectPaymentReturnComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/enums/enum */ 75706);
/* harmony import */ var _collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../collect/payment-modal/payment-modal.component */ 82045);
/* harmony import */ var _modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-popup/modal-popup.component */ 92282);
/* harmony import */ var _refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../refund-details/refund-details.component */ 87364);
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign/sign.component */ 38936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/table-advanced/table-advanced.component */ 49973);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/table-advanced/table-advanced.directives */ 85746);

















function DirectPaymentReturnComponent_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", "Own Branch - " + item_r7.branchName, " ");
  }
}
function DirectPaymentReturnComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DirectPaymentReturnComponent_ng_container_4_ng_template_1_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function DirectPaymentReturnComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Branch is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DirectPaymentReturnComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DirectPaymentReturnComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.f.get("orderNo").setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DirectPaymentReturnComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DirectPaymentReturnComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.f.get("customer").setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DirectPaymentReturnComponent_i_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DirectPaymentReturnComponent_i_21_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.f.get("date").setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DirectPaymentReturnComponent_ng_template_26_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DirectPaymentReturnComponent_ng_template_26_ng_container_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DirectPaymentReturnComponent_ng_template_26_ng_container_0_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).row;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.returnAction(row_r14 == null ? null : row_r14.returnOrderType, row_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (row_r14 == null ? null : row_r14.sentTo) == "Treasury");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r14 == null ? null : row_r14.actionObj[0] == null ? null : row_r14.actionObj[0].lookupName, " ");
  }
}
function DirectPaymentReturnComponent_ng_template_26_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0)(1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DirectPaymentReturnComponent_ng_template_26_ng_container_0_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, DirectPaymentReturnComponent_ng_template_26_ng_container_0_button_3_Template, 2, 2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", row_r14 == null ? null : row_r14.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", 10010);
  }
}
function DirectPaymentReturnComponent_ng_template_26_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DirectPaymentReturnComponent_ng_template_26_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.returnAction("view", row_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DirectPaymentReturnComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, DirectPaymentReturnComponent_ng_template_26_ng_container_0_Template, 4, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DirectPaymentReturnComponent_ng_template_26_ng_template_1_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (row_r14 == null ? null : row_r14.statusObj[0] == null ? null : row_r14.statusObj[0].lookupName.toLowerCase()) !== "refunded" && (row_r14 == null ? null : row_r14.statusObj[0] == null ? null : row_r14.statusObj[0].lookupName.toLowerCase()) !== "collected")("ngIfElse", _r16);
  }
}
const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
class DirectPaymentReturnComponent {
  constructor(_collectService, _commonService, _sharedService, fb, _datePipe, _modalService) {
    this._collectService = _collectService;
    this._commonService = _commonService;
    this._sharedService = _sharedService;
    this.fb = fb;
    this._datePipe = _datePipe;
    this._modalService = _modalService;
    this.pageNo = 1;
    this.total = 0;
    this.limit = 6;
    this.loading = false;
    this.tableConfig = {
      paging: true,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    this.tableColumns = [];
    this.returnStatus = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__.ReturnStatus;
    this.returnType = '';
    this.dateFilter = null;
    this.returnOrdersList = [];
    this.branches = [];
    this.users = [];
    this.orderStatus = null;
    this.statusList = [];
  }
  ngOnInit() {
    //this.getDpReturnOrders();
    this.getRegisterDetails();
    this.getUsers();
    this.getStausList();
    this.initFilterParams();
    this.initTableColumns();
  }
  initFilterParams() {
    this.filterForm = this.fb.group({
      branchId: [null],
      customer: [''],
      created: [null],
      orderNo: [''],
      sentTo: [''],
      date: [''],
      status: [null]
    });
    let returnParam = JSON.parse(localStorage.getItem('returnParams'));
    if (returnParam?.branchId) {
      if (returnParam?.date) {
        let date = [new Date(returnParam?.date[0]), new Date(returnParam?.date[1])];
        returnParam = {
          ...returnParam,
          date
        };
      }
      this.filterForm.patchValue(returnParam);
    }
    this.filterForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)()).subscribe(value => {
      this.pageNo = 1;
      let dateObj = {
        returnDateFrom: '',
        returnDateTo: ''
      };
      let formValues;
      if (value['date']) {
        dateObj['returnDateFrom'] = this._datePipe.transform(value['date'][0], 'yyyy-MM-dd');
        dateObj['returnDateTo'] = this._datePipe.transform(value['date'][1], 'yyyy-MM-dd');
        ;
      }
      formValues = {
        ...value,
        ...dateObj
      };
      delete formValues['date'];
      if (formValues.branchId == null) {
        formValues = {
          ...formValues,
          branchId: ''
        };
      }
      if (formValues.status == null) {
        formValues = {
          ...formValues,
          status: ''
        };
      }
      if (formValues.created == null) {
        formValues = {
          ...formValues,
          created: ''
        };
      }
      this.filterParams = '?' + new URLSearchParams(formValues).toString();
      this.getDpReturnOrders();
    });
  }
  getDpReturnOrders() {
    let defaultParams = `pageSize=${this.tableConfig.filter.PageSize}&pageNo=${this.pageNo - 1}&sort=${this.tableConfig.filter.Sort}`;
    let params;
    if (this.filterParams) params = `${this.filterParams}&${defaultParams}`;else params = `?${defaultParams}`;
    this._collectService.getDpReturnOrders(params).subscribe(response => {
      this.returnOrdersList = response?.data;
      this.total = response?.totalRecordCount;
    });
  }
  getStausList() {
    this._collectService.getLookupsById(10).subscribe(response => {
      this.statusList = response.data.map(x => {
        return {
          text: x?.name[0]?.lookupName,
          value: x?.id
        };
      });
    });
  }
  eventData(event) {
    if (event.isTableRowClicked) {
      let id = event.eventData.target.id;
      if (id === 'orderAction') {
        return;
      } else {
        let obj = {
          ...this.filterForm.value
        };
        localStorage.setItem('returnParams', JSON.stringify({
          ...JSON.parse(localStorage.getItem('returnParams')),
          ...obj
        }));
        this._commonService.NavigateToRoute(`/return/dpayment-details/${event?.item?.directPaymentSalesOrderOpportunityNo}`);
      }
    }
  }
  downloadInvoices(invoices) {
    this._commonService.downloadInvoices({
      invoices
    });
  }
  getRegisterDetails() {
    this._collectService.GetRegisterDetails(this._sharedService.getRegister.registerObj?.id).subscribe(response => {
      this.registerDetails = response.data;
      if (this.registerDetails?.collectForOwnBranch) {
        this.f.get('branchId').disable();
      }
      this.getBranches(3001);
    });
  }
  get f() {
    return this.filterForm;
  }
  getBranches(branchTypeId) {
    this.branches = this.registerDetails.registerBranches.map(x => {
      return {
        ...x,
        branchType: x?.branchTypes[0]?.branchTypeId
      };
    }).filter(branch => branch.branchType == branchTypeId);
    this.isRegisterBranch = this.registerDetails.branchId;
    if (!this.registerDetails?.collectForOwnBranch) {
      this.filterForm.get('branchId').setValue(this.branches[0].branchId);
    } else {
      let index = this.branches.findIndex(branch => branch.branchId == this.isRegisterBranch);
      if (index >= 0) {
        this.filterForm.get('branchId').setValue(this.isRegisterBranch);
      } else this.filterForm.get('branchId').setValue(null);
    }
  }
  getUsers() {
    let roleId = 3;
    return this._collectService.getUsers(roleId).subscribe(response => {
      if (response) {
        this.users = response.data;
      }
    });
  }
  returnAction(type, details) {
    let action = details?.actionObj[0]?.lookupName.toLowerCase();
    if (action === 'view') {
      const modalRef = this._modalService.open(_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_3__.RefundDetailsComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7002
      };
    } else if (action === 'collect') {
      const modalRef = this._modalService.open(_collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__.PaymentModalComponent, {
        modalDialogClass: 'payment-modal-size'
      });
      modalRef.componentInstance.detailsItem = {
        ...details,
        isFromReturn: true
      };
      modalRef.componentInstance.collectionType = 7002;
      modalRef.componentInstance.sendtoLoadData.subscribe(x => {
        modalRef.dismiss();
        this.getDpReturnOrders();
      });
    } else if (action === 'sign') {
      const modalRef = this._modalService.open(_sign_sign_component__WEBPACK_IMPORTED_MODULE_4__.SignComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7002
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getDpReturnOrders();
        }
      });
    } else if (action === 'refund') {
      const modalRef = this._modalService.open(_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_2__.ModalPopupComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        returnType: this.returnType,
        details,
        orderType: 7002
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getDpReturnOrders();
        }
      });
    }
  }
  onSortChange(sort) {
    if (sort?.direction && sort?.column) {
      switch (sort.column) {
        case 'directPaymentSalesOrderOpportunityNo':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
          break;
        case 'customer.customerName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 5 : 4;
          break;
        case 'returnedBy.fullName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 7 : 6;
          break;
        case 'returnAt':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 9 : 8;
          break;
        case 'grandAmount':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 11 : 10;
          break;
        case 'statusObj[0].lookupName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 13 : 12;
          break;
        default:
          break;
      }
    } else {
      this.tableConfig.filter.Sort = 1;
    }
    this.getDpReturnOrders();
  }
  onPageChange(page) {
    this.pageNo = page;
    this.getDpReturnOrders();
  }
  initTableColumns() {
    this.tableColumns = [{
      key: 'directPaymentSalesOrderOpportunityNo',
      label: 'Order No',
      canSort: true
    }, {
      key: 'customer.customerName',
      label: 'Customer Details',
      canSort: true
    }, {
      key: 'returnedBy.fullName',
      label: 'Return By',
      canSort: true
    }, {
      key: 'returnAt',
      label: 'Return Date',
      canSort: true,
      dateFormat: 'mediumDate'
    }, {
      key: 'grandAmount',
      label: 'Refund/Collect Amount',
      canSort: true,
      currency: {
        decimalFormat: '2.3-3',
        appendText: ' JOD'
      }
    }, {
      key: 'statusObj[0].lookupName',
      label: 'Status',
      canSort: true
    }, {
      key: 'action',
      label: 'Action'
    }];
  }
}
DirectPaymentReturnComponent.ɵfac = function DirectPaymentReturnComponent_Factory(t) {
  return new (t || DirectPaymentReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal));
};
DirectPaymentReturnComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: DirectPaymentReturnComponent,
  selectors: [["app-direct-payment-return"]],
  inputs: {
    data: "data"
  },
  decls: 27,
  vars: 18,
  consts: [[3, "formGroup"], [1, "row"], [1, "col-sm-3"], ["placeholder", "Search by branch", "bindLabel", "branchName", "bindValue", "branchId", "formControlName", "branchId", 3, "items"], [4, "ngIf"], ["class", "font-14 primary-clr mb-2 d-inline-block", 4, "ngIf"], [1, "input-group", "mb-3", "search-box"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Order no...", "formControlName", "orderNo", 1, "form-control"], ["class", "btn", "type", "button", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Customer name...", "formControlName", "customer", 1, "form-control"], ["placeholder", "Return by...", "bindLabel", "fullName", "bindValue", "userId", "formControlName", "created", 3, "items"], [1, "col-sm-3", "position-relative"], ["class", "fa-solid fa-times", "style", "position:absolute;top:15px;right:30px;cursor:pointer", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "date", "placeholder", "Select Date", "bsDaterangepicker", "", "placement", "right", 1, "form-control", 2, "height", "46px", 3, "bsConfig"], [1, "col-3", "mb-3"], ["placeholder", "Status", "bindLabel", "text", "bindValue", "value", "formControlName", "status", 3, "items"], [3, "config", "columns", "data", "loading", "page", "total", "limit", "eventData", "sortUpdated", "pageUpdated"], ["libTableAdvancedColumn", "action"], ["ng-label-tmp", ""], [1, "font-14", "primary-clr", "mb-2", "d-inline-block"], ["type", "button", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-times", 2, "position", "absolute", "top", "15px", "right", "30px", "cursor", "pointer", 3, "click"], [4, "ngIf", "ngIfElse"], ["showElipse", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], ["type", "button", "class", "redBtn", 3, "disabled", "click", 4, "ngSwitchDefault"], ["type", "button", 1, "redBtn", 3, "disabled", "click"], ["type", "button", "id", "orderAction", 1, "redBtn", 3, "click"]],
  template: function DirectPaymentReturnComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "ng-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, DirectPaymentReturnComponent_ng_container_4_Template, 2, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, DirectPaymentReturnComponent_span_5_Template, 2, 0, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 2)(7, "div", 6)(8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, DirectPaymentReturnComponent_button_11_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 2)(13, "div", 6)(14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, DirectPaymentReturnComponent_button_17_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "ng-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, DirectPaymentReturnComponent_i_21_Template, 1, 0, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "ng-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "table-advanced", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("eventData", function DirectPaymentReturnComponent_Template_table_advanced_eventData_25_listener($event) {
        return ctx.eventData($event);
      })("sortUpdated", function DirectPaymentReturnComponent_Template_table_advanced_sortUpdated_25_listener($event) {
        return ctx.onSortChange($event);
      })("pageUpdated", function DirectPaymentReturnComponent_Template_table_advanced_pageUpdated_25_listener($event) {
        return ctx.onPageChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, DirectPaymentReturnComponent_ng_template_26_Template, 3, 2, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.filterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.branches);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.registerDetails == null ? null : ctx.registerDetails.branchId) == +ctx.f.get("branchId").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", +ctx.f.get("branchId").value < 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.f.get("orderNo").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.f.get("customer").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.users);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.f.get("date").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](17, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.statusList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx.tableConfig)("columns", ctx.tableColumns)("data", ctx.returnOrdersList)("loading", ctx.loading)("page", ctx.pageNo)("total", ctx.total)("limit", ctx.limit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchDefault, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgLabelTemplateDirective, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_8__.TableAdvancedComponent, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_9__.TableAdvancedColumnDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 92282:
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/components/modal-popup/modal-popup.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopupComponent": () => (/* binding */ ModalPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_download_invoices_download_invoices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/download-invoices/download-invoices.component */ 41746);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);









const _c0 = ["invoicesModal"];
function ModalPopupComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function ModalPopupComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Return By Credit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Return By Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disable-elm", !(ctx_r1.data == null ? null : ctx_r1.data.details == null ? null : ctx_r1.data.details.returnPaymentMethodByCard) || ctx_r1.returnOrderType == "partial return");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", true)("formControl", ctx_r1.isCreditCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", false)("formControl", ctx_r1.isCreditCard);
  }
}
function ModalPopupComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Confirmation!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 35)(8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalPopupComponent_ng_template_46_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const modal_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r4.close("yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalPopupComponent_ng_template_46_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const modal_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r4.dismiss("dismiss"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Are you sure you want to ", (ctx_r3.statusCode == 238 || ctx_r3.statusCode == 239) && "transfer this order to treasury?" || "refund this order?", "");
  }
}
class ModalPopupComponent {
  constructor(_activeModal, _modalService, _collectService) {
    this._activeModal = _activeModal;
    this._modalService = _modalService;
    this._collectService = _collectService;
    this.statusCode = 0;
    this.returnOrderType = '';
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.isCreditCard = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false);
  }
  ngOnInit() {
    console.log(this.data);
    this.returnOrderType = this.data?.details?.returnOrderType.toLowerCase();
    if (this.returnOrderType == 'partial return') this.isCreditCard.setValue(false);else this.isCreditCard.setValue(this.data?.details?.returnPaymentMethodByCard);
  }
  handleConfirm(content) {
    //if (this.data?.returnType !== 'full refund') {
    //  return;
    //}
    this._modalService.open(content, {
      size: 'md'
    }).result.then(x => {
      if (x == 'yes') {
        if (this.data?.orderType == 7001) {
          //IN CASE OF SERVICE
          this.cashierRefundServiceOrder();
        } else if (this.data?.orderType == 7002) {
          //IN CASE OF SERVICE{
          this.dPCashierFullRefundOrder();
        } else {
          this.cashierFullRefundSparePartsOrder();
        }
      }
    }, reject => {});
  }
  cashierRefundServiceOrder() {
    const formData = new FormData();
    formData.append("OrderId", this.data?.details?.servicesSalesOrderNo);
    if (this.statusCode == 238 || this.statusCode == 239) {
      this._collectService.sendServiceReturnOrderToTreasury(formData).subscribe(response => {
        if (response.isSuccess) {
          this.eventData.emit({
            isSuccess: true
          });
          this.openTreasurySuccessModal();
        }
      }, error => {
        const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
        modalRef.componentInstance.type = 'error';
        modalRef.componentInstance.messageError = error?.error?.errors;
      });
    } else {
      formData.append("ReturnPaymentMethodByCard", this.isCreditCard.value);
      formData.append("RefundAmount", this.data?.details?.grandAmount);
      this._collectService.cashierRefundServiceOrder(formData).subscribe(response => {
        if (response.isSuccess) {
          this.eventData.emit({
            isSuccess: true
          });
          let obj = {
            message: 'Your refund successfully completed!',
            invoices: response?.data
          };
          this._modalService.open(_shared_components_download_invoices_download_invoices_component__WEBPACK_IMPORTED_MODULE_0__.DownloadInvoicesComponent).componentInstance.data = obj;
        }
      }, error => {
        this.statusCode = error?.error?.errors[0]?.StatusCode;
        if (this.statusCode == 238 || this.statusCode == 239) {
          this.message = error?.error?.errors[0]?.ErrorMessageEn;
          //  this.message = `The refund amount exceeds the “Register Refund Threshold” so that this refund need to be done by the treasury
          //team please click confirm to send the refund order`;
        } else this.message = error?.error?.errors[0]?.ErrorMessageEn;
      });
    }
  }
  cashierFullRefundSparePartsOrder() {
    const formData = new FormData();
    formData.append("OrderId", this.data?.details?.sparePartsSalesOrderOpportunityNo);
    if (this.statusCode == 238 || this.statusCode == 239) {
      this._collectService.sendSparePartsReturnOrderToTreasury(formData).subscribe(response => {
        if (response.isSuccess) {
          this.eventData.emit({
            isSuccess: true
          });
          this.openTreasurySuccessModal();
        }
      }, error => {
        const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
        modalRef.componentInstance.type = 'error';
        modalRef.componentInstance.messageError = error?.error?.errors;
      });
    } else {
      formData.append("ReturnPaymentMethodByCard", this.isCreditCard.value);
      formData.append("RefundAmount", this.data?.details?.grandAmount);
      this._collectService.cashierFullRefundSparePartsOrder(formData).subscribe(response => {
        if (response.isSuccess) {
          this.eventData.emit({
            isSuccess: true
          });
          let obj = {
            message: 'Your refund successfully completed!',
            invoices: response?.data
          };
          this._modalService.open(_shared_components_download_invoices_download_invoices_component__WEBPACK_IMPORTED_MODULE_0__.DownloadInvoicesComponent).componentInstance.data = obj;
        }
      }, error => {
        this.statusCode = error?.error?.errors[0]?.StatusCode;
        if (this.statusCode == 238 || this.statusCode == 239) {
          this.message = error?.error?.errors[0]?.ErrorMessageEn;
        } else this.message = error?.error?.errors[0]?.ErrorMessageEn;
      });
    }
  }
  dPCashierFullRefundOrder() {
    const formData = new FormData();
    formData.append("OrderId", this.data?.details?.directPaymentSalesOrderOpportunityNo);
    if (this.statusCode == 238 || this.statusCode == 239) {
      this._collectService.sendReturnDpOrderToTreasury(formData).subscribe(response => {
        if (response.isSuccess) {
          this.eventData.emit({
            isSuccess: true
          });
          this.openTreasurySuccessModal();
        }
      }, error => {
        const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
        modalRef.componentInstance.type = 'error';
        modalRef.componentInstance.messageError = error?.error?.errors;
      });
    } else {
      formData.append("ReturnPaymentMethodByCard", this.isCreditCard.value);
      formData.append("RefundAmount", this.data?.details?.grandAmount);
      this._collectService.dPCashierFullRefundOrder(formData).subscribe(response => {
        if (response.isSuccess) {
          this.eventData.emit({
            isSuccess: true
          });
          let obj = {
            message: 'Your refund successfully completed!',
            invoices: response?.data,
            buttonName: 'View Receipt'
          };
          this._modalService.open(_shared_components_download_invoices_download_invoices_component__WEBPACK_IMPORTED_MODULE_0__.DownloadInvoicesComponent).componentInstance.data = obj;
        }
      }, error => {
        this.statusCode = error?.error?.errors[0]?.StatusCode;
        if (this.statusCode == 238 || this.statusCode == 239) {
          this.message = error?.error?.errors[0]?.ErrorMessageEn;
        } else this.message = error?.error?.errors[0]?.ErrorMessageEn;
      });
    }
  }
  openTreasurySuccessModal() {
    const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
    modalRef.componentInstance.type = 'success';
    modalRef.componentInstance.message = 'Your return order successfully sent to Treasury!';
  }
}
ModalPopupComponent.ɵfac = function ModalPopupComponent_Factory(t) {
  return new (t || ModalPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_2__.CollectService));
};
ModalPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ModalPopupComponent,
  selectors: [["app-modal-popup"]],
  viewQuery: function ModalPopupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.invoicesModal = _t.first);
    }
  },
  inputs: {
    data: "data"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 48,
  vars: 13,
  consts: [[1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-6"], [1, "fw-500"], [1, "disabled-box"], [1, "fw-500", "light-gray"], [1, "row"], [1, "fw-500", "light-gray", "text-capitalize"], ["class", "col-12", 4, "ngIf"], [1, "col-sm-12"], [1, "fw-500", "mb-2"], ["rows", "4", 1, "form-control"], ["class", "col-12 mt-3", 4, "ngIf"], [1, "modal-footer", "p-4", "border-0"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], ["confirmModal", ""], [1, "col-12"], [1, "error-message", "my-3"], [1, "col-12", "mt-3"], [1, "d-flex", "gap-3", "align-items-center"], [1, "form-check", "d-flex", "align-items-center", "pe-2", "gap-2"], ["id", "card", "type", "radio", 1, "form-check-input", 3, "value", "formControl"], ["for", "card"], [1, "form-check", "d-flex", "align-items-center", "ps-2", "gap-2"], ["id", "cash", "type", "radio", 1, "form-check-input", 3, "value", "formControl"], ["for", "cash"], [1, "modal-body"], [1, "d-flex", "flex-column", "align-items-center", "gap-2", "text-center", "p-3"], [1, "green-clr", "fa-regular", "fa-circle-check", "fa-2x"], [1, "m-0", "mb-2"], [1, "btns-group", "m-0", "gap-2"]],
  template: function ModalPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Refund");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "div", 5)(14, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Return Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 5)(20, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Register Refund Threshold");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 7)(23, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 9)(27, "div", 5)(28, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Refund amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 7)(31, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ModalPopupComponent_div_34_Template, 4, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 12)(36, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "textarea", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ModalPopupComponent_div_39_Template, 10, 6, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 16)(41, "div", 17)(42, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalPopupComponent_Template_button_click_42_listener() {
        return ctx._activeModal.close("Save click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalPopupComponent_Template_button_click_44_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](47);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.handleConfirm(_r2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ModalPopupComponent_ng_template_46_Template, 12, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.customer == null ? null : ctx.data.details.customer.customerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.returnOrderType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](25, 7, ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.registerThreshold, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](33, 10, ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.grandAmount, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.invoiceType.toLowerCase()) == "cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.statusCode == 0 && "Confirm" || "Transfer to Treasury");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
  styles: [".error-message[_ngcontent-%COMP%] {\n  min-height: 80px;\n  border-radius: 5px;\n  border: 1px solid #F70B0B;\n  background: #F9F9F9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px 10px;\n}\n.error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  color: #F70B0B;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9yZXR1cm4vY29tcG9uZW50cy9tb2RhbC1wb3B1cC9tb2RhbC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZSB7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y3MEIwQjtcbiAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6MTVweCAxMHB4O1xuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjRjcwQjBCO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 76062:
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/components/reject-refund/reject-refund.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RejectRefundComponent": () => (/* binding */ RejectRefundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








function RejectRefundComponent_ng_container_9_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RejectRefundComponent_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RejectRefundComponent_ng_container_9_ng_container_1_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.reasonDetails == null ? null : ctx_r1.reasonDetails.errors == null ? null : ctx_r1.reasonDetails.errors["required"]);
  }
}
function RejectRefundComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RejectRefundComponent_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.reasonDetails == null ? null : ctx_r0.reasonDetails.invalid) && (ctx_r0.reasonDetails == null ? null : ctx_r0.reasonDetails.touched) || (ctx_r0.reasonDetails == null ? null : ctx_r0.reasonDetails.dirty));
  }
}
class RejectRefundComponent {
  constructor(_activeModal, _modalService, _collectService) {
    this._activeModal = _activeModal;
    this._modalService = _modalService;
    this._collectService = _collectService;
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.reasonDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
  }
  ngOnInit() {
    console.log(this.data);
  }
  save() {
    if (this.reasonDetails.invalid) {
      this.reasonDetails.markAsTouched();
      return;
    }
    const formData = new FormData();
    formData.append('Reason', this.reasonDetails.value);
    let api;
    if (this.data.collectionType == 7003) {
      formData.append("OrderId", this.data.sparePartsSalesOrderOpportunityNo);
      api = this._collectService.rejectSparePartsReturnOrder(formData);
    } else if (this.data.collectionType == 7002) {
      formData.append("OrderId", this.data?.order?.directPaymentSalesOrderOpportunityNo);
      api = this._collectService.rejectDpReturnOrder(formData);
    } else {
      formData.append("OrderId", this.data?.order?.servicesSalesOrderNo);
      api = this._collectService.rejectServicesReturnOrder(formData);
    }
    api.subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', 'Action done successfully!');
          this.eventData.emit(true);
        }
      },
      error: err => {
        this.responseModal('error', err?.error.errors || err?.error.Errors);
      }
    });
  }
  responseModal(type, message) {
    const ref = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
    if (type == 'success') ref.componentInstance.message = message;
    ref.componentInstance.messageError = message;
    ref.componentInstance.type = type;
  }
}
RejectRefundComponent.ɵfac = function RejectRefundComponent_Factory(t) {
  return new (t || RejectRefundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_1__.CollectService));
};
RejectRefundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RejectRefundComponent,
  selectors: [["app-reject-refund"]],
  inputs: {
    data: "data"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 16,
  vars: 2,
  consts: [[1, "modal-header"], [1, "modal-title", "fw-600"], [1, "modal-body"], [1, "row"], [1, "col-12"], [1, "input-label", "font-13"], ["rows", "2", 1, "form-control", "h-100", 3, "formControl"], [4, "ngIf"], [1, "modal-footer", "border-0", "mt-3"], [1, "btns-group", "px-0", "mx-0"], ["type", "button", 1, "btn", "btn-save", 3, "click"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
  template: function RejectRefundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reject Refund");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Reason Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RejectRefundComponent_ng_container_9_Template, 2, 1, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RejectRefundComponent_Template_button_click_12_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Reject Refund");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RejectRefundComponent_Template_button_click_14_listener() {
        return ctx._activeModal.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.reasonDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.reasonDetails == null ? null : ctx.reasonDetails["errors"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 89967:
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/components/return-services/return-services.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnServicesComponent": () => (/* binding */ ReturnServicesComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/enums/enum */ 75706);
/* harmony import */ var _collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../collect/payment-modal/payment-modal.component */ 82045);
/* harmony import */ var _modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-popup/modal-popup.component */ 92282);
/* harmony import */ var _refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../refund-details/refund-details.component */ 87364);
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign/sign.component */ 38936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);
















function ReturnServicesComponent_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r11 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", "Own Branch - " + item_r11.branchName, " ");
  }
}
function ReturnServicesComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ReturnServicesComponent_ng_container_3_ng_template_1_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function ReturnServicesComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Branch is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ReturnServicesComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.clearSearchByOrderNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ReturnServicesComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.clearSearchByCashCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ReturnServicesComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.clearSearchByName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ReturnServicesComponent_i_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_i_26_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.clearSearchByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ReturnServicesComponent_div_31_tr_40_td_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ReturnServicesComponent_div_31_tr_40_td_16_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_div_31_tr_40_td_16_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.returnAction(item_r22 == null ? null : item_r22.returnOrderType, item_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (item_r22 == null ? null : item_r22.sentTo) == "Treasury");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r22 == null ? null : item_r22.actionObj[0] == null ? null : item_r22.actionObj[0].lookupName, " ");
  }
}
function ReturnServicesComponent_div_31_tr_40_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ReturnServicesComponent_div_31_tr_40_td_16_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ReturnServicesComponent_div_31_tr_40_td_16_button_3_Template, 2, 2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", item_r22 == null ? null : item_r22.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", 10010);
  }
}
function ReturnServicesComponent_div_31_tr_40_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td")(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_div_31_tr_40_ng_template_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r33.returnAction("view", item_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0, a1) {
  return {
    "background-color": a0,
    color: a1
  };
};
function ReturnServicesComponent_div_31_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_div_31_tr_40_Template_tr_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37);
      const item_r22 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.viewDetails($event, item_r22 == null ? null : item_r22.servicesSalesOrderNo, item_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td")(14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, ReturnServicesComponent_div_31_tr_40_td_16_Template, 4, 2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ReturnServicesComponent_div_31_tr_40_ng_template_17_Template, 3, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r22 == null ? null : item_r22.servicesSalesOrderNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r22 == null ? null : item_r22.customer == null ? null : item_r22.customer.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r22 == null ? null : item_r22.returnedBy == null ? null : item_r22.returnedBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 9, item_r22 == null ? null : item_r22.returnAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](12, 12, item_r22 == null ? null : item_r22.grandAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](15, _c0, item_r22 == null ? null : item_r22.statusObj == null ? null : item_r22.statusObj.lookupBGColor, item_r22 == null ? null : item_r22.statusObj == null ? null : item_r22.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r22 == null ? null : item_r22.statusObj[0] == null ? null : item_r22.statusObj[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (item_r22 == null ? null : item_r22.statusObj[0] == null ? null : item_r22.statusObj[0].lookupName.toLowerCase()) !== "refunded" && (item_r22 == null ? null : item_r22.statusObj[0] == null ? null : item_r22.statusObj[0].lookupName.toLowerCase()) !== "collected")("ngIfElse", _r24);
  }
}
function ReturnServicesComponent_div_31_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ReturnServicesComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20)(1, "div", 27)(2, "div", 28)(3, "table", 29)(4, "thead")(5, "tr")(6, "th", 30)(7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_div_31_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r38.sortByOrderNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Order No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 32)(10, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 30)(12, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_div_31_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.sortByCustomerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " Customer Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 32)(15, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 30)(17, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_div_31_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r41.sortByReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Return By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 32)(20, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th", 30)(22, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_div_31_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.sortByReturnDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Return Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "i", 32)(25, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th", 30)(27, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_div_31_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r43.sortByRefund());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, " Refund/Collect Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "i", 32)(30, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "th", 30)(32, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ReturnServicesComponent_div_31_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r44.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "i", 32)(35, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "th", 30)(37, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, ReturnServicesComponent_div_31_tr_40_Template, 19, 18, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, ReturnServicesComponent_div_31_div_41_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r6.returnOrdersList == null ? null : ctx_r6.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r6.returnOrdersList == null ? null : ctx_r6.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r6.returnOrdersList == null ? null : ctx_r6.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r6.returnOrdersList == null ? null : ctx_r6.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r6.returnOrdersList == null ? null : ctx_r6.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r6.returnOrdersList == null ? null : ctx_r6.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r6.sort == 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r6.returnOrdersList == null ? null : ctx_r6.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.returnOrdersList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r6.returnOrdersList == null ? null : ctx_r6.returnOrdersList.length) == 0);
  }
}
function ReturnServicesComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 47)(2, "h6", 48);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 47)(11, "ngb-pagination", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function ReturnServicesComponent_ng_container_32_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r45.pageNo = $event);
    })("pageChange", function ReturnServicesComponent_ng_container_32_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r47.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r7.pageNo * 6 - 5, " - ", (ctx_r7.returnOrdersList == null ? null : ctx_r7.returnOrdersList.length) == 6 ? ctx_r7.pageNo * 6 : ctx_r7.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", ctx_r7.totalRecords)("page", ctx_r7.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function ReturnServicesComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
class ReturnServicesComponent {
  constructor(_collectService, _commonService, _sharedService, _datePipe, _modalService) {
    this._collectService = _collectService;
    this._commonService = _commonService;
    this._sharedService = _sharedService;
    this._datePipe = _datePipe;
    this._modalService = _modalService;
    this.returnStatus = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__.ReturnStatus;
    this.searchOrderNo = '';
    this.searchCustomerName = '';
    this.serachCashCard = '';
    this.returnType = '';
    this.dateObj = {
      fromDate: '',
      toDate: ''
    };
    this.dateFilter = null;
    this.returnOrdersList = [];
    this.branches = [];
    this.users = [];
    this.branchId = null;
    this.userId = null;
    this.sort = 1;
    this.pageNo = 1;
    this.totalRecords = 0;
    this.orderStatus = null;
    this.statusList = [];
  }
  ngOnInit() {
    //this.getServicesReturnOrders();
    this.getRegisterDetails();
    this.getUsers();
    this.getStausList();
  }
  filterByOrderStatus(event) {
    if (event) {
      this.orderStatus = event?.value;
      this.pageNo = 1;
      this.getServicesReturnOrders();
    } else {
      this.pageNo = 1;
      this.orderStatus = null;
      this.getServicesReturnOrders();
    }
  }
  getStausList() {
    this._collectService.getLookupsById(10).subscribe(response => {
      this.statusList = response.data.map(x => {
        return {
          text: x?.name[0]?.lookupName,
          value: x?.id
        };
      });
    });
  }
  viewDetails(event, id, item) {
    let target = event.target.tagName.toLowerCase();
    let eleId = event.target.id;
    if (target == 'button' || eleId == 'elipse') return;else {
      let obj = {
        branchId: this.branchId,
        searchCustomerName: this.searchCustomerName,
        searchOrderNo: this.searchOrderNo,
        serachCashCard: this.serachCashCard,
        userId: this.userId,
        orderStatus: this.orderStatus,
        dateFilter: this.dateFilter
      };
      localStorage.setItem('returnOrder', JSON.stringify(item));
      localStorage.setItem('returnParams', JSON.stringify({
        ...JSON.parse(localStorage.getItem('returnParams')),
        ...obj
      }));
      this._commonService.NavigateToRoute(`/return/services-details/${id}`);
    }
  }
  downloadInvoices(invoices) {
    this._commonService.downloadInvoices({
      invoices
    });
  }
  getRegisterDetails() {
    this._collectService.GetRegisterDetails(this._sharedService.getRegister.registerObj?.id).subscribe(response => {
      this.registerDetails = response.data;
      this.getBranches(3002);
    });
  }
  getBranches(branchTypeId) {
    this.branches = this.registerDetails.registerBranches.map(x => {
      return {
        ...x,
        branchType: x?.branchTypes[0]?.branchTypeId
      };
    }).filter(branch => branch?.branchType == branchTypeId);
    this.isRegisterBranch = this.registerDetails.branchId;
    if (!this.registerDetails?.collectForOwnBranch) {
      this.branchId = this.branches[0].branchId;
    } else {
      let index = this.branches.findIndex(branch => branch.branchId == this.isRegisterBranch);
      if (index >= 0) {
        this.branchId = this.isRegisterBranch;
      } else this.branchId = null;
    }
    let returnParam = JSON.parse(localStorage.getItem('returnParams'));
    if (returnParam?.branchId) {
      this.branchId = returnParam.branchId;
      this.searchCustomerName = returnParam.searchCustomerName;
      this.searchOrderNo = returnParam.searchOrderNo;
      this.userId = returnParam.userId;
      this.serachCashCard = returnParam.serachCashCard;
      this.orderStatus = returnParam.orderStatus;
      if (returnParam?.dateFilter) {
        this.dateFilter = [new Date(returnParam?.dateFilter[0]), new Date(returnParam?.dateFilter[1])];
      }
      localStorage.removeItem('returnParams');
    }
    if (this.branchId !== null) {
      this.getServicesReturnOrders();
    }
  }
  getUsers() {
    let roleId = 32;
    //if (this.data['branchTypeId'] == 3003) {
    //  roleId = 33
    //} else if (this.data['branchTypeId'] == 3002) {
    //  roleId = 32
    //}
    return this._collectService.getUsers(roleId).subscribe(response => {
      if (response) {
        this.users = response.data;
      }
    });
  }
  //Filters Start
  handleBranchChange(event) {
    let brandId = event?.branchId;
    if (brandId !== null || brandId !== undefined) {
      this.branchId = event?.branchId;
      this.pageNo = 1;
      this.getServicesReturnOrders();
    }
  }
  clearBranch(event) {
    this.branchId = event?.branchId;
    this.returnOrdersList = [];
    this.totalRecords = 0;
  }
  filterByUserId(event) {
    this.pageNo = 1;
    this.userId = event?.userId;
    this.getServicesReturnOrders();
  }
  clearUser() {
    this.pageNo = 1;
    this.getServicesReturnOrders();
  }
  handleSearchByOrderNo(event) {
    this.pageNo = 1;
    this.searchOrderNo = event?.target.value;
    this.getServicesReturnOrders();
  }
  clearSearchByOrderNo() {
    this.pageNo = 1;
    this.searchOrderNo = '';
    this.getServicesReturnOrders();
  }
  handleSearchByName(event) {
    this.pageNo = 1;
    this.searchCustomerName = event?.target.value;
    this.getServicesReturnOrders();
  }
  clearSearchByName() {
    this.pageNo = 1;
    this.searchCustomerName = '';
    this.getServicesReturnOrders();
  }
  handleSearchByCashCard(event) {
    this.pageNo = 1;
    this.serachCashCard = event?.target.value;
    this.getServicesReturnOrders();
  }
  clearSearchByCashCard() {
    this.pageNo = 1;
    this.serachCashCard = '';
    this.getServicesReturnOrders();
  }
  handleSearchByDate(event) {
    if (event) {
      this.dateObj['fromDate'] = this._datePipe.transform(event[0], 'yyyy-MM-dd');
      this.dateObj['toDate'] = this._datePipe.transform(event[1], 'yyyy-MM-dd');
      ;
    }
    this.pageNo = 1;
    this.getServicesReturnOrders();
  }
  clearSearchByDate() {
    this.pageNo = 1;
    this.dateObj = {
      fromDate: '',
      toDate: ''
    };
    this.dateFilter = null;
    this.getServicesReturnOrders();
  }
  //Filters End
  getServicesReturnOrders() {
    let defaultParams = `status=${this.orderStatus || ''}&customer=${this.searchCustomerName}&ReturnDateFrom=${this.dateObj?.fromDate}&ReturnDateTo=${this.dateObj?.toDate}&cashCard=${this.serachCashCard || ''}&sort=${this.sort}&orderNo=${this.searchOrderNo}&pageNo=${this.pageNo - 1}&sort=${this.sort}&pageSize=${6}`;
    if (this.userId) {
      defaultParams += `&created=${this.userId}`;
    }
    if (+(this.branchId == 0) || +this.branchId > 0) {
      defaultParams += `&branchId=${this.branchId}`;
    }
    this._collectService.getServicesReturnOrders(defaultParams).subscribe(response => {
      this.returnOrdersList = response?.data;
      this.totalRecords = response?.totalRecordCount;
    });
  }
  returnAction(type, details) {
    this.returnType = type.toLowerCase();
    let action = details?.actionObj[0]?.lookupName.toLowerCase();
    if (action === 'view') {
      const modalRef = this._modalService.open(_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_3__.RefundDetailsComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7001
      };
    } else if (action === 'collect') {
      const modalRef = this._modalService.open(_collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__.PaymentModalComponent, {
        modalDialogClass: 'payment-modal-size'
      });
      modalRef.componentInstance.detailsItem = {
        ...details,
        isFromReturn: true
      };
      modalRef.componentInstance.collectionType = 7001;
      modalRef.componentInstance.sendtoLoadData.subscribe(x => {
        modalRef.dismiss();
        this.getServicesReturnOrders();
      });
    } else if (action === 'sign') {
      const modalRef = this._modalService.open(_sign_sign_component__WEBPACK_IMPORTED_MODULE_4__.SignComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7001
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getServicesReturnOrders();
        }
      });
    } else if (action === 'refund') {
      const modalRef = this._modalService.open(_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_2__.ModalPopupComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        returnType: this.returnType,
        details,
        orderType: 7001
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getServicesReturnOrders();
        }
      });
    }
  }
  pageChange(pageNo) {
    this.pageNo = pageNo;
    this.getServicesReturnOrders();
  }
  // Sorting Functions
  sortByOrderNo() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getServicesReturnOrders();
  }
  sortByCustomerDetails() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getServicesReturnOrders();
  }
  sortByReturn() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getServicesReturnOrders();
  }
  sortByReturnDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getServicesReturnOrders();
  }
  sortByRefund() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getServicesReturnOrders();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.getServicesReturnOrders();
  }
}
ReturnServicesComponent.ɵfac = function ReturnServicesComponent_Factory(t) {
  return new (t || ReturnServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal));
};
ReturnServicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ReturnServicesComponent,
  selectors: [["app-return-services"]],
  inputs: {
    data: "data"
  },
  decls: 36,
  vars: 22,
  consts: [[1, "row"], [1, "col-sm-3"], ["placeholder", "Search by branch", "bindLabel", "branchName", "bindValue", "branchId", 3, "disabled", "items", "ngModel", "ngModelChange", "change", "clear"], [4, "ngIf"], ["class", "font-14 primary-clr mb-2 d-inline-block", 4, "ngIf"], [1, "input-group", "mb-3", "search-box"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Order no...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["class", "btn", "type", "button", "id", "button-addon4", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Cash card...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "text", "placeholder", "Customer name...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["placeholder", "Returned by...", "bindLabel", "fullName", "bindValue", "userId", 3, "items", "ngModel", "ngModelChange", "change", "clear"], [1, "col-sm-3", "position-relative"], ["class", "fa-solid fa-times", "style", "position:absolute;top:15px;right:30px;cursor:pointer", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Select Date", "bsDaterangepicker", "", "placement", "right", 1, "form-control", 2, "height", "46px", 3, "ngModel", "bsConfig", "ngModelChange", "bsValueChange"], [1, "col-3", "mb-3"], ["placeholder", "Status", "bindLabel", "text", "bindValue", "value", 3, "items", "ngModel", "ngModelChange", "change"], [1, "row", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], ["ng-label-tmp", ""], [1, "font-14", "primary-clr", "mb-2", "d-inline-block"], ["type", "button", "id", "button-addon4", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-times", 2, "position", "absolute", "top", "15px", "right", "30px", "cursor", "pointer", 3, "click"], [1, "card-table", "mt-2", "register-sessions-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], ["class", "cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "cursor-pointer", 3, "click"], [1, "status-tag", "d-block", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["showElipse", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], ["type", "button", "class", "redBtn", 3, "disabled", "click", 4, "ngSwitchDefault"], ["type", "button", 1, "redBtn", 3, "disabled", "click"], ["type", "button", 1, "redBtn", 3, "click"], [1, "not-found"], [1, "col-md-6"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function ReturnServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ng-select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ReturnServicesComponent_Template_ng_select_ngModelChange_2_listener($event) {
        return ctx.branchId = $event;
      })("change", function ReturnServicesComponent_Template_ng_select_change_2_listener($event) {
        return ctx.handleBranchChange($event);
      })("clear", function ReturnServicesComponent_Template_ng_select_clear_2_listener($event) {
        return ctx.clearBranch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ReturnServicesComponent_ng_container_3_Template, 2, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ReturnServicesComponent_span_4_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 1)(6, "div", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ReturnServicesComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.searchOrderNo = $event;
      })("input", function ReturnServicesComponent_Template_input_input_9_listener($event) {
        return ctx.handleSearchByOrderNo($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ReturnServicesComponent_button_10_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 1)(12, "div", 5)(13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ReturnServicesComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.serachCashCard = $event;
      })("input", function ReturnServicesComponent_Template_input_input_15_listener($event) {
        return ctx.handleSearchByCashCard($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, ReturnServicesComponent_button_16_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 1)(18, "div", 5)(19, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ReturnServicesComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.searchCustomerName = $event;
      })("input", function ReturnServicesComponent_Template_input_input_21_listener($event) {
        return ctx.handleSearchByName($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, ReturnServicesComponent_button_22_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 1)(24, "ng-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ReturnServicesComponent_Template_ng_select_ngModelChange_24_listener($event) {
        return ctx.userId = $event;
      })("change", function ReturnServicesComponent_Template_ng_select_change_24_listener($event) {
        return ctx.filterByUserId($event);
      })("clear", function ReturnServicesComponent_Template_ng_select_clear_24_listener() {
        return ctx.clearUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, ReturnServicesComponent_i_26_Template, 1, 0, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ReturnServicesComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.dateFilter = $event;
      })("bsValueChange", function ReturnServicesComponent_Template_input_bsValueChange_27_listener($event) {
        return ctx.handleSearchByDate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 16)(29, "ng-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ReturnServicesComponent_Template_ng_select_ngModelChange_29_listener($event) {
        return ctx.orderStatus = $event;
      })("change", function ReturnServicesComponent_Template_ng_select_change_29_listener($event) {
        return ctx.filterByOrderStatus($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, ReturnServicesComponent_div_31_Template, 42, 33, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, ReturnServicesComponent_ng_container_32_Template, 12, 9, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, ReturnServicesComponent_ng_template_34_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.registerDetails == null ? null : ctx.registerDetails.collectForOwnBranch)("items", ctx.branches)("ngModel", ctx.branchId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.registerDetails == null ? null : ctx.registerDetails.branchId) == ctx.branchId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.branchId < 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchOrderNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.searchOrderNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.serachCashCard);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.serachCashCard);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchCustomerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.searchCustomerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.users)("ngModel", ctx.userId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.dateFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.dateFilter)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](21, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.statusList)("ngModel", ctx.orderStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.returnOrdersList)("ngIfElse", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchDefault, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgLabelTemplateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPagination, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".redBtn[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9yZXR1cm4vY29tcG9uZW50cy9yZXR1cm4tc2VydmljZXMvcmV0dXJuLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRCdG4ge1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 85181:
/*!**************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/components/spare-part-return/spare-part-return.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SparePartReturnComponent": () => (/* binding */ SparePartReturnComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/enums/enum */ 75706);
/* harmony import */ var _collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../collect/payment-modal/payment-modal.component */ 82045);
/* harmony import */ var _collect_collect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../collect/collect.component */ 7225);
/* harmony import */ var _modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-popup/modal-popup.component */ 92282);
/* harmony import */ var _refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../refund-details/refund-details.component */ 87364);
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign/sign.component */ 38936);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/not-found/not-found.component */ 59442);


















function SparePartReturnComponent_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r10 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", "Own Branch - " + item_r10.branchName, " ");
  }
}
function SparePartReturnComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, SparePartReturnComponent_ng_container_3_ng_template_1_Template, 1, 1, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function SparePartReturnComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Branch is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SparePartReturnComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r11.clearSearchByOrderNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SparePartReturnComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r13.clearSearchByName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SparePartReturnComponent_i_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_i_20_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.clearSearchByDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SparePartReturnComponent_div_25_tr_43_i_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_tr_43_i_20_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](18);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r20.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SparePartReturnComponent_div_25_tr_43_td_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SparePartReturnComponent_div_25_tr_43_td_24_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_tr_43_td_24_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31);
      const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r29.returnAction(item_r19 == null ? null : item_r19.returnOrderType, item_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (item_r19 == null ? null : item_r19.sentTo) == "Treasury");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r19 == null ? null : item_r19.actionObj[0] == null ? null : item_r19.actionObj[0].lookupName, " ");
  }
}
function SparePartReturnComponent_div_25_tr_43_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, SparePartReturnComponent_div_25_tr_43_td_24_span_2_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, SparePartReturnComponent_div_25_tr_43_td_24_button_3_Template, 2, 2, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitch", item_r19 == null ? null : item_r19.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 10010);
  }
}
function SparePartReturnComponent_div_25_tr_43_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td")(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_tr_43_ng_template_25_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36);
      const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r34.returnAction("view", item_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0, a1) {
  return {
    "background-color": a0,
    color: a1
  };
};
function SparePartReturnComponent_div_25_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_tr_43_Template_tr_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r38);
      const item_r19 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r37.viewDetails($event, item_r19 == null ? null : item_r19.sparePartsSalesOrderOpportunityNo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td")(14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td")(17, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function SparePartReturnComponent_div_25_tr_43_Template_input_change_17_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r38);
      const item_r19 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r39.onSelectFile($event, item_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, SparePartReturnComponent_div_25_tr_43_i_20_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "a", 42)(22, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "View Return Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, SparePartReturnComponent_div_25_tr_43_td_24_Template, 4, 2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, SparePartReturnComponent_div_25_tr_43_ng_template_25_Template, 3, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r19 == null ? null : item_r19.sparePartsSalesOrderOpportunityNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r19 == null ? null : item_r19.customer == null ? null : item_r19.customer.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r19 == null ? null : item_r19.returnedBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](9, 12, item_r19 == null ? null : item_r19.returnAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](12, 15, item_r19 == null ? null : item_r19.grandAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](18, _c0, item_r19 == null ? null : item_r19.statusObj == null ? null : item_r19.statusObj.lookupBGColor, item_r19 == null ? null : item_r19.statusObj == null ? null : item_r19.statusObj.lookupTextColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r19 == null ? null : item_r19.statusObj[0] == null ? null : item_r19.statusObj[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (item_r19 == null ? null : item_r19.returnPaymentMethodByCard) && (item_r19 == null ? null : item_r19.actionId) == 34004 && (item_r19 == null ? null : item_r19.statusObj[0] == null ? null : item_r19.statusObj[0].lookupName) == "Refunded");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("href", item_r19 == null ? null : item_r19.approvalAttachment, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !(item_r19 == null ? null : item_r19.approvalAttachment));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (item_r19 == null ? null : item_r19.statusObj[0] == null ? null : item_r19.statusObj[0].lookupName.toLowerCase()) !== "refunded" && (item_r19 == null ? null : item_r19.statusObj[0] == null ? null : item_r19.statusObj[0].lookupName.toLowerCase()) !== "collected")("ngIfElse", _r23);
  }
}
function SparePartReturnComponent_div_25_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function SparePartReturnComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 19)(1, "div", 26)(2, "div", 27)(3, "table", 28)(4, "thead")(5, "tr")(6, "th", 29)(7, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r40.sortByOrderNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Order No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 31)(10, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th", 29)(12, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r42.sortByCustomerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Customer Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 31)(15, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "th", 29)(17, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r43.sortByReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, " Return By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "i", 31)(20, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "th", 29)(22, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r44.sortByReturnDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, " Return Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "i", 31)(25, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "th", 29)(27, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r45.sortByRefund());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, " Refund/Collect Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "i", 31)(30, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "th", 29)(32, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SparePartReturnComponent_div_25_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r46.sortByStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "i", 31)(35, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "th", 29)(37, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, " Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "th", 29)(40, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, SparePartReturnComponent_div_25_tr_43_Template, 27, 21, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, SparePartReturnComponent_div_25_div_44_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r5.returnOrdersList == null ? null : ctx_r5.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r5.returnOrdersList == null ? null : ctx_r5.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r5.returnOrdersList == null ? null : ctx_r5.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r5.returnOrdersList == null ? null : ctx_r5.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r5.returnOrdersList == null ? null : ctx_r5.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r5.returnOrdersList == null ? null : ctx_r5.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r5.sort == 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r5.returnOrdersList == null ? null : ctx_r5.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", (ctx_r5.returnOrdersList == null ? null : ctx_r5.returnOrdersList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r5.returnOrdersList);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r5.returnOrdersList == null ? null : ctx_r5.returnOrdersList.length) == 0);
  }
}
function SparePartReturnComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 53)(2, "h6", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 53)(11, "ngb-pagination", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function SparePartReturnComponent_ng_container_26_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r47.pageNo = $event);
    })("pageChange", function SparePartReturnComponent_ng_container_26_Template_ngb_pagination_pageChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r49.pageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r6.pageNo * 6 - 5, " - ", (ctx_r6.returnOrdersList == null ? null : ctx_r6.returnOrdersList.length) == 6 ? ctx_r6.pageNo * 6 : ctx_r6.totalRecords, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r6.totalRecords, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionSize", ctx_r6.totalRecords)("page", ctx_r6.pageNo)("maxSize", 3)("pageSize", 6)("rotate", true)("ellipses", false);
  }
}
function SparePartReturnComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
class SparePartReturnComponent {
  constructor(_collectService, _commonService, _datePipe, _sharedService, _modalService) {
    this._collectService = _collectService;
    this._commonService = _commonService;
    this._datePipe = _datePipe;
    this._sharedService = _sharedService;
    this._modalService = _modalService;
    this.returnStatus = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__.ReturnStatus;
    this.searchOrderNo = '';
    this.searchCustomerName = '';
    this.dateObj = {
      fromDate: '',
      toDate: ''
    };
    this.dateFilter = null;
    this.returnType = '';
    this.returnOrdersList = [];
    this.branches = [];
    this.users = [];
    this.branchId = null;
    this.userId = null;
    this.sort = 1;
    this.pageNo = 1;
    this.totalRecords = 0;
    this.orderStatus = null;
    this.statusList = [];
  }
  ngOnInit() {
    this.getRegisterDetails();
    this.getUsers();
    this.getStausList();
  }
  onSelectFile(event, row) {
    if (event.target.files && event.target.files[0]) {
      this._commonService.fileToBase64(event.target.files[0]).then(response => {
        const formData = new FormData();
        formData.append('ReturnOrderId', row?.sparePartsSalesOrderOpportunityNo);
        formData.append('file', response.file || '');
        this._collectService.uploadCreditRefund(formData).subscribe(response => {
          if (response.isSuccess) {
            this.successModal('success', 'Return receipt uploaded successfully!');
            this.getSparePartsReturnOrders();
          }
        }, err => {
          this.successModal('error', err.error.errors);
        });
      });
    }
  }
  successModal(type, message) {
    const modelRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_6__.ModalMessageComponent, {
      size: 'md'
    });
    modelRef.componentInstance.type = type;
    if (type == 'success') {
      modelRef.componentInstance.message = message;
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  filterByOrderStatus(event) {
    if (event) {
      this.orderStatus = event?.value;
      this.pageNo = 1;
      this.getSparePartsReturnOrders();
    } else {
      this.pageNo = 1;
      this.orderStatus = null;
      this.getSparePartsReturnOrders();
    }
  }
  getStausList() {
    this._collectService.getLookupsById(10).subscribe(response => {
      this.statusList = response.data.map(x => {
        return {
          text: x?.name[0]?.lookupName,
          value: x?.id
        };
      });
    });
  }
  viewDetails(event, id) {
    let target = event.target.tagName.toLowerCase();
    let eleId = event.target.id;
    let returnReceipt = event.target.id;
    if (target == 'button' || eleId == 'elipse' || returnReceipt == 'uploadFile' || returnReceipt == 'returnReceipt') {
      return;
    } else {
      let obj = {
        branchId: this.branchId,
        searchCustomerName: this.searchCustomerName,
        searchOrderNo: this.searchOrderNo,
        userId: this.userId,
        orderStatus: this.orderStatus,
        dateFilter: this.dateFilter
      };
      localStorage.setItem('returnParams', JSON.stringify({
        ...JSON.parse(localStorage.getItem('returnParams')),
        ...obj
      }));
      this._commonService.NavigateToRouteWithQueryString(`/return/details`, {
        queryParams: {
          id
        }
      });
    }
  }
  downloadInvoices(invoices) {
    this._commonService.downloadInvoices({
      invoices
    });
  }
  getRegisterDetails() {
    this._collectService.GetRegisterDetails(this._sharedService.getRegister.registerObj?.id).subscribe(response => {
      this.registerDetails = response.data;
      this.getBranches(3003);
    });
  }
  getBranches(branchTypeId) {
    this.branches = this.registerDetails.registerBranches.map(x => {
      return {
        ...x,
        branchType: x?.branchTypes[0]?.branchTypeId
      };
    }).filter(branch => branch.branchType == branchTypeId);
    this.isRegisterBranch = this.registerDetails.branchId;
    if (!this.registerDetails?.collectForOwnBranch) {
      this.branchId = this.branches[0].branchId;
    } else {
      let index = this.branches.findIndex(branch => branch.branchId == this.isRegisterBranch);
      if (index >= 0) {
        this.branchId = this.isRegisterBranch;
      } else this.branchId = null;
    }
    let returnParam = JSON.parse(localStorage.getItem('returnParams'));
    if (returnParam?.branchId) {
      this.branchId = returnParam.branchId;
      this.searchCustomerName = returnParam.searchCustomerName;
      this.searchOrderNo = returnParam.searchOrderNo;
      this.userId = returnParam.userId;
      this.orderStatus = returnParam.orderStatus;
      if (returnParam?.dateFilter) {
        this.dateFilter = [new Date(returnParam?.dateFilter[0]), new Date(returnParam?.dateFilter[1])];
      }
    }
    if (this.branchId !== null) {
      this.getSparePartsReturnOrders();
    }
  }
  getUsers() {
    let roleId;
    if (this.data['branchTypeId'] == 3003) {
      roleId = 33;
    } else if (this.data['branchTypeId'] == 3002) {
      roleId = 32;
    }
    return this._collectService.getUsers(roleId).subscribe(response => {
      if (response) {
        this.users = response.data;
      }
    });
  }
  //Filters Start
  handleBranchChange(event) {
    let brandId = event?.branchId;
    if (brandId !== null || brandId !== undefined) {
      this.branchId = event?.branchId;
      this.pageNo = 1;
      this.getSparePartsReturnOrders();
    }
  }
  clearBranch(event) {
    this.branchId = event?.branchId;
    this.returnOrdersList = [];
    this.totalRecords = 0;
  }
  filterByUserId(event) {
    this.pageNo = 1;
    this.userId = event?.userId;
    this.getSparePartsReturnOrders();
  }
  clearUser() {
    this.pageNo = 1;
    this.getSparePartsReturnOrders();
  }
  handleSearchByOrderNo(event) {
    this.pageNo = 1;
    this.searchOrderNo = event?.target.value;
    this.getSparePartsReturnOrders();
  }
  clearSearchByOrderNo() {
    this.pageNo = 1;
    this.searchOrderNo = '';
    this.getSparePartsReturnOrders();
  }
  handleSearchByName(event) {
    this.pageNo = 1;
    this.searchCustomerName = event?.target.value;
    this.getSparePartsReturnOrders();
  }
  clearSearchByName() {
    this.pageNo = 1;
    this.searchCustomerName = '';
    this.getSparePartsReturnOrders();
  }
  handleSearchByDate(event) {
    if (event) {
      this.dateObj['fromDate'] = this._datePipe.transform(event[0], 'yyyy-MM-dd');
      this.dateObj['toDate'] = this._datePipe.transform(event[1], 'yyyy-MM-dd');
      ;
    }
    this.pageNo = 1;
    this.getSparePartsReturnOrders();
  }
  clearSearchByDate() {
    this.pageNo = 1;
    this.dateObj = {
      fromDate: '',
      toDate: ''
    };
    this.dateFilter = null;
    this.getSparePartsReturnOrders();
  }
  //Filters End
  getSparePartsReturnOrders() {
    let defaultParams = `status=${this.orderStatus || ''}&customer=${this.searchCustomerName}&ReturnDateFrom=${this.dateObj?.fromDate}&ReturnDateTo=${this.dateObj?.toDate}&sort=${this.sort}&orderNo=${this.searchOrderNo}
    &pageNo=${this.pageNo - 1}&sort=${this.sort}&pageSize=${6}`;
    if (this.userId) {
      defaultParams += `&created=${this.userId}`;
    }
    if (+(this.branchId == 0) || +this.branchId > 0) {
      defaultParams += `&branchId=${this.branchId}`;
    }
    this._collectService.getSparePartsReturnOrders(defaultParams).subscribe(response => {
      this.returnOrdersList = response?.data;
      this.totalRecords = response?.totalRecordCount;
    });
  }
  returnAction(type, details) {
    this.returnType = type.toLowerCase();
    let action = details?.actionObj[0]?.lookupName.toLowerCase();
    if (action === 'view') {
      const modalRef = this._modalService.open(_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_4__.RefundDetailsComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7003
      };
    } else if (action === 'collect') {
      if (details?.grandAmount > 0) {
        const modalRef = this._modalService.open(_collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__.PaymentModalComponent, {
          modalDialogClass: 'payment-modal-size'
        });
        modalRef.componentInstance.detailsItem = {
          ...details,
          isFromReturn: true
        };
        modalRef.componentInstance.collectionType = 7003;
        modalRef.componentInstance.sendtoLoadData.subscribe(x => {
          modalRef.dismiss();
          this.getSparePartsReturnOrders();
        });
      } else {
        const modalRef = this._modalService.open(_collect_collect_component__WEBPACK_IMPORTED_MODULE_2__.CollectComponent, {
          size: 'lg'
        });
        modalRef.componentInstance.data = {
          details
        };
        modalRef.componentInstance.eventData.subscribe(x => {
          if (x?.isSuccess) {
            modalRef.dismiss();
            this.getSparePartsReturnOrders();
          }
        });
      }
    } else if (action === 'sign') {
      const modalRef = this._modalService.open(_sign_sign_component__WEBPACK_IMPORTED_MODULE_5__.SignComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getSparePartsReturnOrders();
        }
      });
    } else if (action === 'refund') {
      const modalRef = this._modalService.open(_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_3__.ModalPopupComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        returnType: this.returnType,
        details,
        orderType: 7003
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getSparePartsReturnOrders();
        }
      });
    }
  }
  pageChange(pageNo) {
    this.pageNo = pageNo;
    this.getSparePartsReturnOrders();
  }
  // Sorting Functions
  sortByOrderNo() {
    if (this.sort == 3) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    this.getSparePartsReturnOrders();
  }
  sortByCustomerDetails() {
    if (this.sort == 5) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 4 ? 5 : 4;
    }
    this.getSparePartsReturnOrders();
  }
  sortByReturn() {
    if (this.sort == 7) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 6 ? 7 : 6;
    }
    this.getSparePartsReturnOrders();
  }
  sortByReturnDate() {
    if (this.sort == 9) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 8 ? 9 : 8;
    }
    this.getSparePartsReturnOrders();
  }
  sortByRefund() {
    if (this.sort == 11) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 10 ? 11 : 10;
    }
    this.getSparePartsReturnOrders();
  }
  sortByStatus() {
    if (this.sort == 13) {
      this.sort = 1;
    } else {
      this.sort = this.sort == 12 ? 13 : 12;
    }
    this.getSparePartsReturnOrders();
  }
}
SparePartReturnComponent.ɵfac = function SparePartReturnComponent_Factory(t) {
  return new (t || SparePartReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_7__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_9__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal));
};
SparePartReturnComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: SparePartReturnComponent,
  selectors: [["app-spare-part-return"]],
  inputs: {
    data: "data"
  },
  decls: 30,
  vars: 20,
  consts: [[1, "row"], [1, "col-sm-3"], ["placeholder", "Search by branch", "bindLabel", "branchName", "bindValue", "branchId", 3, "disabled", "items", "ngModel", "ngModelChange", "change", "clear"], [4, "ngIf"], ["class", "font-14 primary-clr mb-2 d-inline-block", 4, "ngIf"], [1, "input-group", "mb-3", "search-box"], ["type", "button", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Order no...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["class", "btn", "type", "button", "id", "button-addon4", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Customer name...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["placeholder", "Returned by...", "bindLabel", "fullName", "bindValue", "userId", 3, "items", "ngModel", "ngModelChange", "change", "clear"], [1, "col-sm-3", "position-relative"], ["class", "fa-solid fa-times", "style", "position:absolute;top:15px;right:30px;cursor:pointer", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Select Date", "bsDaterangepicker", "", "placement", "right", 1, "form-control", 2, "height", "46px", 3, "ngModel", "bsConfig", "ngModelChange", "bsValueChange"], [1, "col-3", "mb-3"], ["placeholder", "Status", "bindLabel", "text", "bindValue", "value", 3, "items", "ngModel", "ngModelChange", "change"], [1, "row", "mt-3"], ["class", "col-md-12", 4, "ngIf", "ngIfElse"], [1, "col-md-12"], ["loading", ""], ["ng-label-tmp", ""], [1, "font-14", "primary-clr", "mb-2", "d-inline-block"], ["type", "button", "id", "button-addon4", 1, "btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "fa-solid", "fa-times", 2, "position", "absolute", "top", "15px", "right", "30px", "cursor", "pointer", 3, "click"], [1, "card-table", "mt-2", "register-sessions-table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], ["class", "cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], ["class", "not-found", 4, "ngIf"], [1, "cursor-pointer", 3, "click"], [1, "status-tag", "d-block", 3, "ngStyle"], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "id", "uploadFile", "hidden", "", 1, "form-control", 3, "change"], ["fileUpload", ""], [1, "d-flex", "gap-2"], ["placement", "bottom", "ngbTooltip", "Upload Return Receipt", "id", "returnReceipt", "class", "fas fa-upload cursor-pointer primary-clr fa-2x", 3, "click", 4, "ngIf"], ["target", "_blank", 3, "href"], ["type", "button", 1, "redBtn", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["showElipse", ""], ["placement", "bottom", "ngbTooltip", "Upload Return Receipt", "id", "returnReceipt", 1, "fas", "fa-upload", "cursor-pointer", "primary-clr", "fa-2x", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["type", "button", "class", "redBtn", 3, "disabled", "click", 4, "ngSwitchDefault"], ["type", "button", 1, "redBtn", 3, "disabled", "click"], ["type", "button", 1, "redBtn", 3, "click"], [1, "not-found"], [1, "col-md-6"], [1, "showing"], [3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "ellipses", "pageChange"]],
  template: function SparePartReturnComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ng-select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function SparePartReturnComponent_Template_ng_select_ngModelChange_2_listener($event) {
        return ctx.branchId = $event;
      })("change", function SparePartReturnComponent_Template_ng_select_change_2_listener($event) {
        return ctx.handleBranchChange($event);
      })("clear", function SparePartReturnComponent_Template_ng_select_clear_2_listener($event) {
        return ctx.clearBranch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, SparePartReturnComponent_ng_container_3_Template, 2, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, SparePartReturnComponent_span_4_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 1)(6, "div", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function SparePartReturnComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.searchOrderNo = $event;
      })("input", function SparePartReturnComponent_Template_input_input_9_listener($event) {
        return ctx.handleSearchByOrderNo($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, SparePartReturnComponent_button_10_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 1)(12, "div", 5)(13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function SparePartReturnComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.searchCustomerName = $event;
      })("input", function SparePartReturnComponent_Template_input_input_15_listener($event) {
        return ctx.handleSearchByName($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, SparePartReturnComponent_button_16_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 1)(18, "ng-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function SparePartReturnComponent_Template_ng_select_ngModelChange_18_listener($event) {
        return ctx.userId = $event;
      })("change", function SparePartReturnComponent_Template_ng_select_change_18_listener($event) {
        return ctx.filterByUserId($event);
      })("clear", function SparePartReturnComponent_Template_ng_select_clear_18_listener() {
        return ctx.clearUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, SparePartReturnComponent_i_20_Template, 1, 0, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function SparePartReturnComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.dateFilter = $event;
      })("bsValueChange", function SparePartReturnComponent_Template_input_bsValueChange_21_listener($event) {
        return ctx.handleSearchByDate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 15)(23, "ng-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function SparePartReturnComponent_Template_ng_select_ngModelChange_23_listener($event) {
        return ctx.orderStatus = $event;
      })("change", function SparePartReturnComponent_Template_ng_select_change_23_listener($event) {
        return ctx.filterByOrderStatus($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, SparePartReturnComponent_div_25_Template, 45, 34, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, SparePartReturnComponent_ng_container_26_Template, 12, 9, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, SparePartReturnComponent_ng_template_28_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.registerDetails == null ? null : ctx.registerDetails.collectForOwnBranch)("items", ctx.branches)("ngModel", ctx.branchId);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.registerDetails == null ? null : ctx.registerDetails.branchId) == ctx.branchId);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.branchId < 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.searchOrderNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.searchOrderNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.searchCustomerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.searchCustomerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.users)("ngModel", ctx.userId);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.dateFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.dateFilter)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](19, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.statusList)("ngModel", ctx.orderStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.returnOrdersList)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.totalRecords > 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchDefault, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgLabelTemplateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltip, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__.LoadingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [".redBtn[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n}\n.form-check-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9yZXR1cm4vY29tcG9uZW50cy9zcGFyZS1wYXJ0LXJldHVybi9zcGFyZS1wYXJ0LXJldHVybi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVGO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkQnRuIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbi5mb3JtLWNoZWNrLWlucHV0IHtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgKyBsYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 52773:
/*!*************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/direct-payment-details/direct-payment-details.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectPaymentDetailsComponent": () => (/* binding */ DirectPaymentDetailsComponent)
/* harmony export */ });
/* harmony import */ var _components_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/refund-details/refund-details.component */ 87364);
/* harmony import */ var _collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../collect/payment-modal/payment-modal.component */ 82045);
/* harmony import */ var _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modal-popup/modal-popup.component */ 92282);
/* harmony import */ var _components_sign_sign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sign/sign.component */ 38936);
/* harmony import */ var _components_reject_refund_reject_refund_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/reject-refund/reject-refund.component */ 76062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../collect/services/collect.service */ 43346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);













function DirectPaymentDetailsComponent_div_1_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const num_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", num_r6, " ");
  }
}
function DirectPaymentDetailsComponent_div_1_button_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DirectPaymentDetailsComponent_div_1_button_123_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.rejectRefund());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Reject Refund");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DirectPaymentDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "p");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 6)(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Invoice Type : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Invoice No : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Receipt No : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 8)(30, "div", 9)(31, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " Customer Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 10)(34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div")(37, "div", 12)(38, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 12)(43, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 12)(48, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 15)(53, "div", 16)(54, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, " Vehicle Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 3)(57, "div", 18)(58, "div", 3)(59, "div", 19)(60, "div", 12)(61, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, " Brand ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 19)(66, "div", 12)(67, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, " Cash Card No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](70, DirectPaymentDetailsComponent_div_1_span_70_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 19)(72, "div", 12)(73, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, " Opportunity No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "hr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 3)(79, "div", 19)(80, "div", 12)(81, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 23)(86, "div", 12)(87, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, " Sales Consultant");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 4)(92, "div", 16)(93, "div", 3)(94, "div", 8)(95, "div", 24)(96, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, " Remaining Amount to pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div", 25)(99, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](101, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](104, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](105, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "div", 27)(107, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](108, " Sales note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](109, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "div", 29)(111, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](112, " Cashier notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](113, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "div", 4)(115, "div", 30)(116, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117, " Grand Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](120, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div", 4)(122, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](123, DirectPaymentDetailsComponent_div_1_button_123_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DirectPaymentDetailsComponent_div_1_Template_button_click_124_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](125, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const details_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](7, 21, details_r3 == null ? null : details_r3.order == null ? null : details_r3.order.orderDate, " d MMM y "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](11, 24, details_r3 == null ? null : details_r3.order == null ? null : details_r3.order.orderDate, " h:mm a "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", details_r3 == null ? null : details_r3.order == null ? null : details_r3.order.status[0] == null ? null : details_r3.order.status[0].statusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", details_r3 == null ? null : details_r3.invoiceType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", details_r3 == null ? null : details_r3.order == null ? null : details_r3.order.invoiceNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", details_r3 == null ? null : details_r3.order == null ? null : details_r3.order.collectionId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.custmerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", details_r3 == null ? null : details_r3.customer == null ? null : details_r3.customer.customerId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", details_r3 == null ? null : details_r3.customer == null ? null : details_r3.customer.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", details_r3 == null ? null : details_r3.customer == null ? null : details_r3.customer.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((details_r3.vin == null ? null : details_r3.vin.brand == null ? null : details_r3.vin.brand.brand) ? details_r3.vin == null ? null : details_r3.vin.brand == null ? null : details_r3.vin.brand.brand : "No data");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", details_r3.order.directPaymentCards);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](details_r3 == null ? null : details_r3.order == null ? null : details_r3.order.directPaymentSalesOrderOpportunityNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (details_r3 == null ? null : details_r3.vin == null ? null : details_r3.vin.brand == null ? null : details_r3.vin.brand.modelName) || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", details_r3 == null ? null : details_r3.salesConsultant == null ? null : details_r3.salesConsultant.salesConsultantName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](101, 27, details_r3.order.remainingAmount, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Minimum Payment: ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](104, 30, details_r3.order.minAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", details_r3.order.salesNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", details_r3.cashierNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](120, 33, details_r3.order.grandAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.orderStatus == "Refunding");
  }
}
function DirectPaymentDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
class DirectPaymentDetailsComponent {
  constructor(collectService, route, sharedService, _modalService, _commonService, _location) {
    this.collectService = collectService;
    this.route = route;
    this.sharedService = sharedService;
    this._modalService = _modalService;
    this._commonService = _commonService;
    this._location = _location;
    this.orderStatus = '';
    this.orderId = 0;
  }
  ngOnInit() {
    this.route.params.subscribe(x => {
      this.orderId = x.orderId;
      this.GetDirectPaymentSalesOrdersDetails();
    });
  }
  goBack() {
    this._location.back();
  }
  rejectRefund() {
    const modalRef = this._modalService.open(_components_reject_refund_reject_refund_component__WEBPACK_IMPORTED_MODULE_4__.RejectRefundComponent, {
      size: 'md'
    });
    modalRef.componentInstance.data = {
      ...this.details,
      collectionType: 7002
    };
    modalRef.componentInstance.eventData.subscribe(x => {
      if (x) {
        this.GetDirectPaymentSalesOrdersDetails();
      }
    });
  }
  downloadInvoices(invoices) {
    this._commonService.downloadInvoices({
      invoices
    });
  }
  returnAction(details) {
    let action = details?.actionObj[0]?.lookupName.toLowerCase();
    if (action === 'view') {
      const modalRef = this._modalService.open(_components_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_0__.RefundDetailsComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7002
      };
    } else if (action === 'collect') {
      const modalRef = this._modalService.open(_collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__.PaymentModalComponent, {
        modalDialogClass: 'payment-modal-size'
      });
      modalRef.componentInstance.detailsItem = {
        ...details,
        isFromReturn: true
      };
      modalRef.componentInstance.collectionType = 7002;
      modalRef.componentInstance.sendtoLoadData.subscribe(x => {
        modalRef.dismiss();
        this.GetDirectPaymentSalesOrdersDetails();
      });
    } else if (action === 'sign') {
      const modalRef = this._modalService.open(_components_sign_sign_component__WEBPACK_IMPORTED_MODULE_3__.SignComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7002
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.GetDirectPaymentSalesOrdersDetails();
        }
      });
    } else if (action === 'refund') {
      const modalRef = this._modalService.open(_components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_2__.ModalPopupComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        returnType: '',
        details,
        orderType: 7002
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.GetDirectPaymentSalesOrdersDetails();
        }
      });
    }
  }
  GetDirectPaymentSalesOrdersDetails() {
    return this.collectService.GetDirectPaymentSalesOrdersDetails(this.orderId).subscribe(response => {
      if (response) {
        this.details = response.data;
        console.log(this.details);
        this.orderStatus = (this.details?.order?.status[0]?.statusName).trim();
        const customername = this.details?.customer.customerName.split(' ');
        let firstChar = customername[0];
        let secChar = customername[1];
        this.custmerName = `${firstChar?.charAt(0)} ${secChar ? secChar?.charAt(0) : ''}`;
      }
    });
  }
}
DirectPaymentDetailsComponent.ɵfac = function DirectPaymentDetailsComponent_Factory(t) {
  return new (t || DirectPaymentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location));
};
DirectPaymentDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: DirectPaymentDetailsComponent,
  selectors: [["app-direct-payment-details"]],
  decls: 4,
  vars: 2,
  consts: [[1, "card-page"], ["class", "row", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "row"], [1, "col-md-12"], [1, "top-details"], [1, "d-flex", "gap-2"], [1, "text-capitalize"], [1, "col-md-4"], [1, "card-collect", "customerDetail"], [1, "collect-details"], [1, "char"], [1, "card-sm"], [1, "d-flex", "align-items-center"], [1, "m-0"], [1, "col-md-8"], [1, "card-collect"], [2, "margin-bottom", "20px"], [1, "col-md-9"], [1, "col-sm-4"], [1, "mb-1"], [4, "ngFor", "ngForOf"], [1, "v-line"], [1, "col-sm-3"], [1, "form-group", "mb-2"], [1, "disabled-box", "mb-2"], [1, "font-13"], [1, "form-group"], ["rows", "3", "disabled", "", 1, "form-control", 3, "value"], [1, "form-group", "mt-3"], [1, "total-card", "justify-content-end", "pt-75"], [1, "total"], [1, "btns-group", "px-0", "mx-0"], ["type", "button", "class", "btn btn-save", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"]],
  template: function DirectPaymentDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DirectPaymentDetailsComponent_div_1_Template, 126, 36, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DirectPaymentDetailsComponent_ng_template_2_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.details)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__.LoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".card-page[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.pt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.v-line[_ngcontent-%COMP%] {\n  margin: 0px 0 10px;\n  border-color: #777;\n}\n\n.l-line[_ngcontent-%COMP%] {\n  border-left: 1px solid #ddd;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled {\n  background: #f1f3f3 !important;\n  color: #9b9b9b !important;\n  border: 1px solid #f1f3f3;\n  cursor: initial;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f8f9;\n  border: 0px;\n  opacity: 1;\n  border: 0p;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9yZXR1cm4vZGlyZWN0LXBheW1lbnQtZGV0YWlscy9kaXJlY3QtcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXBhZ2Uge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucHQtNzUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4udi1saW5lIHtcbiAgbWFyZ2luOiAwcHggMCAxMHB4O1xuICBib3JkZXItY29sb3I6ICM3Nzc7XG59XG5cbi5sLWxpbmUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5idG4uZGlzYWJsZWQsXG4uYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2YxZjNmMyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzliOWI5YiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2YzO1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY5O1xuICBib3JkZXI6IDBweDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwcDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 93599:
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/return-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnRoutingModule": () => (/* binding */ ReturnRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _return_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./return.component */ 10510);
/* harmony import */ var _services_details_services_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services-details/services-details.component */ 9472);
/* harmony import */ var _spart_part_details_spart_part_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spart-part-details/spart-part-details.component */ 32842);
/* harmony import */ var _direct_payment_details_direct_payment_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./direct-payment-details/direct-payment-details.component */ 52773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [{
  path: '',
  component: _return_component__WEBPACK_IMPORTED_MODULE_0__.ReturnComponent
}, {
  path: 'details',
  component: _spart_part_details_spart_part_details_component__WEBPACK_IMPORTED_MODULE_2__.SpartPartDetailsComponent
}, {
  path: 'services-details/:id',
  component: _services_details_services_details_component__WEBPACK_IMPORTED_MODULE_1__.ServicesDetailsComponent
}, {
  path: 'dpayment-details/:orderId',
  component: _direct_payment_details_direct_payment_details_component__WEBPACK_IMPORTED_MODULE_3__.DirectPaymentDetailsComponent
}];
class ReturnRoutingModule {}
ReturnRoutingModule.ɵfac = function ReturnRoutingModule_Factory(t) {
  return new (t || ReturnRoutingModule)();
};
ReturnRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ReturnRoutingModule
});
ReturnRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ReturnRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 10510:
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/return.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnComponent": () => (/* binding */ ReturnComponent)
/* harmony export */ });
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 10082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_return_services_return_services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/return-services/return-services.component */ 89967);
/* harmony import */ var _components_spare_part_return_spare_part_return_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/spare-part-return/spare-part-return.component */ 85181);
/* harmony import */ var _components_direct_payment_return_direct_payment_return_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/direct-payment-return/direct-payment-return.component */ 33743);








function ReturnComponent_app_return_services_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-return-services", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r1.data);
  }
}
function ReturnComponent_app_direct_payment_return_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-direct-payment-return", 8);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r3.data);
  }
}
function ReturnComponent_app_spare_part_return_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-spare-part-return", 8);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r5.data);
  }
}
class ReturnComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.data = {
      branchTypeId: 3002
    };
    let tab = JSON.parse(localStorage.getItem('returnParams'))?.tab;
    if (tab >= 0) {
      this.tabSet.tabs[tab].active = true;
      localStorage.setItem('returnParams', JSON.stringify({
        ...JSON.parse(localStorage.getItem('returnParams')),
        ...{
          tab
        }
      }));
    }
  }
  handleTabSelection(event, branchTypeId, tab) {
    localStorage.removeItem('returnParams');
    this.data = {
      branchTypeId
    };
    localStorage.setItem('returnParams', JSON.stringify({
      ...JSON.parse(localStorage.getItem('returnParams')),
      ...{
        tab
      }
    }));
  }
  ngOnDestroy() {
    let nextRoute = this.router.url;
    if (!nextRoute.includes('/return/details') && !nextRoute.includes('/return/services-details') && !nextRoute.includes('/return/dpayment-details')) {
      localStorage.removeItem('returnParams');
    }
  }
}
ReturnComponent.ɵfac = function ReturnComponent_Factory(t) {
  return new (t || ReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
ReturnComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReturnComponent,
  selectors: [["app-return"]],
  viewQuery: function ReturnComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsetComponent, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tabSet = _t.first);
    }
  },
  decls: 10,
  vars: 3,
  consts: [["type", "pills"], ["heading", "Services Return Orders", 3, "selectTab"], ["tabA", "tab"], [3, "data", 4, "ngIf"], ["heading", "Direct Payment Return Orders", 3, "selectTab"], ["tabC", "tab"], ["heading", "Spare Parts Return Orders", 3, "selectTab"], ["tabB", "tab"], [3, "data"]],
  template: function ReturnComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tabset", 0)(1, "tab", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectTab", function ReturnComponent_Template_tab_selectTab_1_listener($event) {
        return ctx.handleTabSelection($event, 3001, 0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReturnComponent_app_return_services_3_Template, 1, 1, "app-return-services", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "tab", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectTab", function ReturnComponent_Template_tab_selectTab_4_listener($event) {
        return ctx.handleTabSelection($event, 3002, 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ReturnComponent_app_direct_payment_return_6_Template, 1, 1, "app-direct-payment-return", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tab", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectTab", function ReturnComponent_Template_tab_selectTab_7_listener($event) {
        return ctx.handleTabSelection($event, 3003, 2);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ReturnComponent_app_spare_part_return_9_Template, 1, 1, "app-spare-part-return", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r0.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.active);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsetComponent, _components_return_services_return_services_component__WEBPACK_IMPORTED_MODULE_0__.ReturnServicesComponent, _components_spare_part_return_spare_part_return_component__WEBPACK_IMPORTED_MODULE_1__.SparePartReturnComponent, _components_direct_payment_return_direct_payment_return_component__WEBPACK_IMPORTED_MODULE_2__.DirectPaymentReturnComponent],
  styles: ["[_nghost-%COMP%]     .nav-pills {\n  margin-bottom: 30px;\n}\n[_nghost-%COMP%]     .nav-pills .nav-link {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1B212D;\n  border-radius: 0;\n}\n[_nghost-%COMP%]     .nav-pills .nav-link.active {\n  background: none;\n  color: #1B212D;\n  border-bottom: 2px solid var(--primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9yZXR1cm4vcmV0dXJuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsbUJBQUE7QUFETjtBQUdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRFI7QUFHUTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0FBRFYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgOjpuZy1kZWVwIHtcbiAgICAubmF2LXBpbGxzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgIC5uYXYtbGluayB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMxQjIxMkQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICMxQjIxMkQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 60154:
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/return.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnModule": () => (/* binding */ ReturnModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _return_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./return-routing.module */ 93599);
/* harmony import */ var _return_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./return.component */ 10510);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _components_return_services_return_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/return-services/return-services.component */ 89967);
/* harmony import */ var _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal-popup/modal-popup.component */ 92282);
/* harmony import */ var _spart_part_details_spart_part_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spart-part-details/spart-part-details.component */ 32842);
/* harmony import */ var _components_sign_sign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sign/sign.component */ 38936);
/* harmony import */ var _components_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/refund-details/refund-details.component */ 87364);
/* harmony import */ var _components_spare_part_return_spare_part_return_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/spare-part-return/spare-part-return.component */ 85181);
/* harmony import */ var _services_details_services_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services-details/services-details.component */ 9472);
/* harmony import */ var _components_collect_collect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/collect/collect.component */ 7225);
/* harmony import */ var _components_reject_refund_reject_refund_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reject-refund/reject-refund.component */ 76062);
/* harmony import */ var _components_direct_payment_return_direct_payment_return_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/direct-payment-return/direct-payment-return.component */ 33743);
/* harmony import */ var _direct_payment_details_direct_payment_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./direct-payment-details/direct-payment-details.component */ 52773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
















class ReturnModule {}
ReturnModule.ɵfac = function ReturnModule_Factory(t) {
  return new (t || ReturnModule)();
};
ReturnModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: ReturnModule
});
ReturnModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _return_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReturnRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ReturnModule, {
    declarations: [_return_component__WEBPACK_IMPORTED_MODULE_1__.ReturnComponent, _components_return_services_return_services_component__WEBPACK_IMPORTED_MODULE_3__.ReturnServicesComponent, _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_4__.ModalPopupComponent, _spart_part_details_spart_part_details_component__WEBPACK_IMPORTED_MODULE_5__.SpartPartDetailsComponent, _components_sign_sign_component__WEBPACK_IMPORTED_MODULE_6__.SignComponent, _components_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_7__.RefundDetailsComponent, _components_spare_part_return_spare_part_return_component__WEBPACK_IMPORTED_MODULE_8__.SparePartReturnComponent, _services_details_services_details_component__WEBPACK_IMPORTED_MODULE_9__.ServicesDetailsComponent, _components_collect_collect_component__WEBPACK_IMPORTED_MODULE_10__.CollectComponent, _components_reject_refund_reject_refund_component__WEBPACK_IMPORTED_MODULE_11__.RejectRefundComponent, _components_direct_payment_return_direct_payment_return_component__WEBPACK_IMPORTED_MODULE_12__.DirectPaymentReturnComponent, _direct_payment_details_direct_payment_details_component__WEBPACK_IMPORTED_MODULE_13__.DirectPaymentDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _return_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReturnRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 9472:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/services-details/services-details.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesDetailsComponent": () => (/* binding */ ServicesDetailsComponent)
/* harmony export */ });
/* harmony import */ var _collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../collect/payment-modal/payment-modal.component */ 82045);
/* harmony import */ var _components_collect_collect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/collect/collect.component */ 7225);
/* harmony import */ var _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modal-popup/modal-popup.component */ 92282);
/* harmony import */ var _components_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/refund-details/refund-details.component */ 87364);
/* harmony import */ var _components_sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sign/sign.component */ 38936);
/* harmony import */ var _components_reject_refund_reject_refund_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/reject-refund/reject-refund.component */ 76062);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var _shared_components_spare_spare_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/spare/spare.component */ 98988);
/* harmony import */ var _shared_components_labor_labor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/labor/labor.component */ 68866);
/* harmony import */ var _shared_components_sublet_sublet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/sublet/sublet.component */ 33980);

















function ServicesDetailsComponent_div_1_ng_container_67_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const num_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", num_r12, " ");
  }
}
function ServicesDetailsComponent_div_1_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ServicesDetailsComponent_div_1_ng_container_67_p_1_Template, 2, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](2, 1, ctx_r3.details.order.workingCards, 0, 1));
  }
}
function ServicesDetailsComponent_div_1_div_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Reject Refund Reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.details == null ? null : ctx_r4.details.rejectReturnReason);
  }
}
function ServicesDetailsComponent_div_1_button_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ServicesDetailsComponent_div_1_button_110_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r13.rejectRefund());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Reject Refund");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ServicesDetailsComponent_div_1_ng_container_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function ServicesDetailsComponent_div_1_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function ServicesDetailsComponent_div_1_ng_container_114_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ServicesDetailsComponent_div_1_ng_container_114_ng_container_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r16.returnAction(ctx_r16.details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", (ctx_r15.returnedOrder == null ? null : ctx_r15.returnedOrder.sentTo) == "Treasury");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", (ctx_r15.details == null ? null : ctx_r15.details.actionObj) && (ctx_r15.details == null ? null : ctx_r15.details.actionObj[0] == null ? null : ctx_r15.details.actionObj[0].lookupName), " ");
  }
}
function ServicesDetailsComponent_div_1_ng_container_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ServicesDetailsComponent_div_1_ng_container_114_ng_container_1_Template, 3, 2, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](116);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r8.orderStatus !== "refunded" && ctx_r8.orderStatus !== "collected")("ngIfElse", _r9);
  }
}
function ServicesDetailsComponent_div_1_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ServicesDetailsComponent_div_1_ng_template_115_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r18.getInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "View Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ServicesDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 5)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " \u00A0 Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 6)(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Invoice No : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 7)(22, "div", 8)(23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, " Customer Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 9)(26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div")(29, "div", 11)(30, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "div", 11)(35, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 11)(40, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 14)(45, "div", 15)(46, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, " Vehicle Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 2)(49, "div", 17)(50, "div", 2)(51, "div", 18)(52, "div", 11)(53, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, " Brand ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "div", 18)(58, "div", 11)(59, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, " Vehicle Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "div", 18)(64, "div", 11)(65, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](66, " Card No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](67, ServicesDetailsComponent_div_1_ng_container_67_Template, 3, 5, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](68, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "div", 2)(70, "div", 18)(71, "div", 11)(72, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, "Vin No");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "div", 18)(77, "div", 11)(78, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79, "Plate No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "div", 21)(83, "div", 11)(84, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, " Service Advisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "div", 11)(89, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](90, " Sales order No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](94, "app-spare");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](96, "app-labor");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](98, "app-sublet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](99, "div", 3)(100, "div", 15)(101, "div", 2)(102, "div", 7)(103, "div", 22)(104, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](105, " Sales note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](106, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](107, ServicesDetailsComponent_div_1_div_107_Template, 5, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "div", 3)(109, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](110, ServicesDetailsComponent_div_1_button_110_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](111, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](112, ServicesDetailsComponent_div_1_ng_container_112_Template, 1, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](113, ServicesDetailsComponent_div_1_ng_container_113_Template, 1, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](114, ServicesDetailsComponent_div_1_ng_container_114_Template, 2, 2, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](115, ServicesDetailsComponent_div_1_ng_template_115_Template, 2, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ServicesDetailsComponent_div_1_Template_button_click_117_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](118, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 21, ctx_r0.details == null ? null : ctx_r0.details.order == null ? null : ctx_r0.details.order.orderDate, " d MMM y "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](11, 24, ctx_r0.details == null ? null : ctx_r0.details.order == null ? null : ctx_r0.details.order.orderDate, " h:mm a "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r0.details == null ? null : ctx_r0.details.order == null ? null : ctx_r0.details.order.status[0] == null ? null : ctx_r0.details.order.status[0].statusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", (ctx_r0.details == null ? null : ctx_r0.details.invoicNo) || (ctx_r0.details == null ? null : ctx_r0.details.order == null ? null : ctx_r0.details.order.invoiceNo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.details == null ? null : ctx_r0.details.customer == null ? null : ctx_r0.details.customer.customerId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.details == null ? null : ctx_r0.details.customer == null ? null : ctx_r0.details.customer.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.details == null ? null : ctx_r0.details.customer == null ? null : ctx_r0.details.customer.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.details == null ? null : ctx_r0.details.vin == null ? null : ctx_r0.details.vin.brandName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.details == null ? null : ctx_r0.details.vin == null ? null : ctx_r0.details.vin.modelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.details.order.workingCards == null ? null : ctx_r0.details.order.workingCards.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.details == null ? null : ctx_r0.details.vin == null ? null : ctx_r0.details.vin.vinNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.details == null ? null : ctx_r0.details.vin == null ? null : ctx_r0.details.vin.plateNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.details == null ? null : ctx_r0.details.serviceAdvisor == null ? null : ctx_r0.details.serviceAdvisor.serviceAdvisorName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.details == null ? null : ctx_r0.details.order == null ? null : ctx_r0.details.order.servicesSalesOrderNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r0.details.order.salesNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.orderStatus == "Rejected Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.orderStatus == "refunding");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngSwitch", ctx_r0.details == null ? null : ctx_r0.details.statusObj[0] == null ? null : ctx_r0.details.statusObj[0].statusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngSwitchCase", 10006);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngSwitchCase", 10010);
  }
}
function ServicesDetailsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
class ServicesDetailsComponent {
  constructor(_collectService, _commonService, _activatedRoute, _modalService, _location) {
    this._collectService = _collectService;
    this._commonService = _commonService;
    this._activatedRoute = _activatedRoute;
    this._modalService = _modalService;
    this._location = _location;
    this.customerName = '';
    this.orderStatus = '';
  }
  ngOnInit() {
    this.returnedOrder = JSON.parse(localStorage.getItem('returnOrder'));
    this._activatedRoute.params.subscribe(params => {
      this.orderId = params['id'];
      this.getServicesSalesOrderDetails(this.orderId);
    });
  }
  ngOnDestroy() {
    localStorage.removeItem('returnOrder');
  }
  goBack() {
    this._location.back();
  }
  getServicesSalesOrderDetails(id) {
    this._collectService.GetServicesSalesOrderDetails(id).subscribe(response => {
      if (response) {
        this.details = response.data;
        console.log(this.details);
        this.orderStatus = this.details?.statusObj && (this.details?.statusObj[0]?.statusName || this.details?.statusObj[0]?.lookupName).trim().toLowerCase();
        const customername = this.details.customer.customerName.split(' ');
        let firstChar = customername[0];
        let secChar = customername[1];
        this.customerName = `${firstChar?.charAt(0)} ${secChar ? secChar?.charAt(0) : ''}`;
      }
    });
  }
  rejectRefund() {
    const modalRef = this._modalService.open(_components_reject_refund_reject_refund_component__WEBPACK_IMPORTED_MODULE_5__.RejectRefundComponent, {
      size: 'md'
    });
    modalRef.componentInstance.data = {
      ...this.details,
      collectionType: 7001
    };
    modalRef.componentInstance.eventData.subscribe(x => {
      if (x) {
        this.getServicesSalesOrderDetails(this.orderId);
      }
    });
  }
  //downloadInvoices(invoices) {
  //  this._commonService.downloadInvoices({ invoices })
  //}
  getInvoice() {
    const formData = new FormData();
    formData.append('returnOrderNo', this.orderId);
    this._collectService.viewServiceLayerReturnOrderOrigionalInvoice(formData).subscribe({
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
    const ref = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_6__.ModalMessageComponent);
    if (type == 'success') ref.componentInstance.message = message;
    ref.componentInstance.messageError = message;
    ref.componentInstance.type = type;
  }
  returnAction(details) {
    details = {
      ...details,
      grandAmount: details?.order?.grandAmount,
      servicesSalesOrderNo: details?.order?.servicesSalesOrderNo
    };
    let action = details?.actionObj[0]?.lookupName.toLowerCase();
    if (action === 'view') {
      const modalRef = this._modalService.open(_components_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_3__.RefundDetailsComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7001
      };
    } else if (action === 'collect') {
      if (details?.grandAmount > 0) {
        const modalRef = this._modalService.open(_collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_0__.PaymentModalComponent, {
          modalDialogClass: 'payment-modal-size'
        });
        modalRef.componentInstance.detailsItem = {
          ...details,
          isFromReturn: true
        };
        modalRef.componentInstance.collectionType = 7003;
        modalRef.componentInstance.sendtoLoadData.subscribe(x => {
          modalRef.dismiss();
          this.getServicesSalesOrderDetails(this.orderId);
        });
      } else {
        const modalRef = this._modalService.open(_components_collect_collect_component__WEBPACK_IMPORTED_MODULE_1__.CollectComponent, {
          size: 'lg'
        });
        modalRef.componentInstance.data = {
          details
        };
        modalRef.componentInstance.eventData.subscribe(x => {
          if (x?.isSuccess) {
            modalRef.dismiss();
            this.getServicesSalesOrderDetails(this.orderId);
          }
        });
      }
    } else if (action === 'sign') {
      const modalRef = this._modalService.open(_components_sign_sign_component__WEBPACK_IMPORTED_MODULE_4__.SignComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7001
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getServicesSalesOrderDetails(this.orderId);
        }
      });
    } else if (action === 'refund') {
      const modalRef = this._modalService.open(_components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_2__.ModalPopupComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details,
        orderType: 7001
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getServicesSalesOrderDetails(this.orderId);
        }
      });
    }
  }
}
ServicesDetailsComponent.ɵfac = function ServicesDetailsComponent_Factory(t) {
  return new (t || ServicesDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_7__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.Location));
};
ServicesDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: ServicesDetailsComponent,
  selectors: [["app-services-details"]],
  decls: 7,
  vars: 2,
  consts: [[1, "card-page"], ["class", "row", 4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-md-12"], ["loading", ""], [1, "top-details"], [1, "d-flex", "gap-2"], [1, "col-md-4"], [1, "card-collect", "customerDetail"], [1, "collect-details"], [1, "char"], [1, "card-sm"], [1, "d-flex", "align-items-center"], [1, "m-0"], [1, "col-md-8"], [1, "card-collect"], [2, "margin-bottom", "20px"], [1, "col-md-9"], [1, "col-sm-4"], [4, "ngIf"], [1, "v-line"], [1, "col-sm-3", "l-line"], [1, "form-group"], ["rows", "3", "disabled", "", 1, "form-control", 3, "value"], ["class", "form-group mt-3", 4, "ngIf"], [1, "btns-group", "px-0", "mx-0"], ["type", "button", "class", "btn btn-save", 3, "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["otherActions", ""], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [1, "mb-1"], [1, "form-group", "mt-3"], ["rows", "3", "disabled", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [4, "ngIf", "ngIfElse"], ["type", "button", 1, "btn", "btn-save", 3, "disabled", "click"]],
  template: function ServicesDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ServicesDetailsComponent_div_1_Template, 119, 27, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, ServicesDetailsComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.details)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitchDefault, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__.LoadingComponent, _shared_components_spare_spare_component__WEBPACK_IMPORTED_MODULE_10__.SpareComponent, _shared_components_labor_labor_component__WEBPACK_IMPORTED_MODULE_11__.LaborComponent, _shared_components_sublet_sublet_component__WEBPACK_IMPORTED_MODULE_12__.SubletComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 32842:
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/spart-part-details/spart-part-details.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpartPartDetailsComponent": () => (/* binding */ SpartPartDetailsComponent)
/* harmony export */ });
/* harmony import */ var _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modal-popup/modal-popup.component */ 92282);
/* harmony import */ var _components_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/refund-details/refund-details.component */ 87364);
/* harmony import */ var _collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../collect/payment-modal/payment-modal.component */ 82045);
/* harmony import */ var _components_sign_sign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sign/sign.component */ 38936);
/* harmony import */ var _components_collect_collect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/collect/collect.component */ 7225);
/* harmony import */ var _components_reject_refund_reject_refund_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/reject-refund/reject-refund.component */ 76062);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/loading/loading.component */ 28424);














function SpartPartDetailsComponent_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (item_r10 == null ? null : item_r10.partNo) ? item_r10.partNo : "No data", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (item_r10 == null ? null : item_r10.description) ? item_r10.description : "No data", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (item_r10 == null ? null : item_r10.qty) ? item_r10.qty : "No data", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.unitOfMeasure[0] == null ? null : item_r10.unitOfMeasure[0].lookupName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 13, item_r10 == null ? null : item_r10.unitPrice, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](14, 16, item_r10 == null ? null : item_r10.totalPrice, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.lineDiscountPercentage, " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](19, 19, item_r10 == null ? null : item_r10.lineDiscountAmount, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](22, 22, item_r10 == null ? null : item_r10.invoiceDiscountAmount, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](25, 25, item_r10 == null ? null : item_r10.netAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.taxPercentage, " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](30, 28, item_r10 == null ? null : item_r10.taxAmount, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](33, 31, item_r10 == null ? null : item_r10.totalLine, "2.3-3"), " JOD ");
  }
}
function SpartPartDetailsComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 40)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Reject Refund Reason ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.details == null ? null : ctx_r1.details.rejectReturnReason);
  }
}
function SpartPartDetailsComponent_button_197_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SpartPartDetailsComponent_button_197_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.rejectRefund());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Reject Refund");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SpartPartDetailsComponent_ng_container_199_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function SpartPartDetailsComponent_ng_container_200_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function SpartPartDetailsComponent_ng_container_201_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SpartPartDetailsComponent_ng_container_201_ng_container_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.returnAction(ctx_r14.details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", (ctx_r13.details == null ? null : ctx_r13.details.sentTo) == "Treasury");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r13.details == null ? null : ctx_r13.details.actionObj[0] == null ? null : ctx_r13.details.actionObj[0].lookupName, " ");
  }
}
function SpartPartDetailsComponent_ng_container_201_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SpartPartDetailsComponent_ng_container_201_ng_container_1_Template, 3, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](203);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r5.details == null ? null : ctx_r5.details.statusObj[0] == null ? null : ctx_r5.details.statusObj[0].lookupName.toLowerCase()) !== "refunded" && (ctx_r5.details == null ? null : ctx_r5.details.statusObj[0] == null ? null : ctx_r5.details.statusObj[0].lookupName.toLowerCase()) !== "collected")("ngIfElse", _r6);
  }
}
function SpartPartDetailsComponent_ng_template_202_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SpartPartDetailsComponent_ng_template_202_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.getInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "View Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SpartPartDetailsComponent_ng_template_209_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
class SpartPartDetailsComponent {
  constructor(_collectService, _commonService, _activatedRoute, _location, _modalService) {
    this._collectService = _collectService;
    this._commonService = _commonService;
    this._activatedRoute = _activatedRoute;
    this._location = _location;
    this._modalService = _modalService;
    this.spareParts = [];
    this.totalRecordCount = 0;
  }
  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      this.orderId = params['id'];
      this.getReturnOrderRefundDetails(this.orderId);
    });
  }
  goBack() {
    this._location.back();
  }
  getReturnOrderRefundDetails(id) {
    this._collectService.getSparePartsReturnOrdersPrtsV2(id).subscribe(response => {
      this.spareParts = response['data'];
      this.getSparePartsReturnOrders(id);
    });
  }
  getSparePartsReturnOrders(id) {
    let defaultParams = `orderNo=${id}`;
    this._collectService.getSparePartsReturnOrders(defaultParams).subscribe(response => {
      this.details = response?.data[0];
      this.orderStatus = (this.details?.statusObj[0]?.lookupName).trim();
    });
  }
  downloadInvoices() {
    //this._commonService.downloadInvoices({ invoices })
  }
  getInvoice() {
    const formData = new FormData();
    formData.append('returnOrderNo', this.orderId);
    this._collectService.viewReturnOrderOrigionalInvoice(formData).subscribe({
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
    const ref = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_6__.ModalMessageComponent);
    if (type == 'success') ref.componentInstance.message = message;
    ref.componentInstance.messageError = message;
    ref.componentInstance.type = type;
  }
  rejectRefund() {
    const modalRef = this._modalService.open(_components_reject_refund_reject_refund_component__WEBPACK_IMPORTED_MODULE_5__.RejectRefundComponent, {
      size: 'md'
    });
    modalRef.componentInstance.data = {
      ...this.details,
      collectionType: 7003
    };
    modalRef.componentInstance.eventData.subscribe(x => {
      if (x) {
        this.getReturnOrderRefundDetails(this.orderId);
      }
    });
  }
  returnAction(details) {
    let action = details?.actionObj[0]?.lookupName.toLowerCase();
    if (action === 'view') {
      const modalRef = this._modalService.open(_components_refund_details_refund_details_component__WEBPACK_IMPORTED_MODULE_1__.RefundDetailsComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details
      };
    } else if (action === 'collect') {
      if (details?.grandAmount > 0) {
        const modalRef = this._modalService.open(_collect_payment_modal_payment_modal_component__WEBPACK_IMPORTED_MODULE_2__.PaymentModalComponent, {
          modalDialogClass: 'payment-modal-size'
        });
        modalRef.componentInstance.detailsItem = {
          ...details,
          isFromReturn: true
        };
        modalRef.componentInstance.collectionType = 7003;
        modalRef.componentInstance.sendtoLoadData.subscribe(x => {
          modalRef.dismiss();
          this.getReturnOrderRefundDetails(this.orderId);
        });
      } else {
        const modalRef = this._modalService.open(_components_collect_collect_component__WEBPACK_IMPORTED_MODULE_4__.CollectComponent, {
          size: 'lg'
        });
        modalRef.componentInstance.data = {
          details
        };
        modalRef.componentInstance.eventData.subscribe(x => {
          if (x?.isSuccess) {
            modalRef.dismiss();
            this.getReturnOrderRefundDetails(this.orderId);
          }
        });
      }
    } else if (action === 'sign') {
      const modalRef = this._modalService.open(_components_sign_sign_component__WEBPACK_IMPORTED_MODULE_3__.SignComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getReturnOrderRefundDetails(this.orderId);
        }
      });
    } else if (action === 'refund') {
      const modalRef = this._modalService.open(_components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_0__.ModalPopupComponent, {
        size: 'lg'
      });
      modalRef.componentInstance.data = {
        details
      };
      modalRef.componentInstance.eventData.subscribe(res => {
        if (res?.isSuccess) {
          modalRef.dismiss();
          this.getReturnOrderRefundDetails(this.orderId);
        }
      });
    }
  }
}
SpartPartDetailsComponent.ɵfac = function SpartPartDetailsComponent_Factory(t) {
  return new (t || SpartPartDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_7__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal));
};
SpartPartDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: SpartPartDetailsComponent,
  selectors: [["app-spart-part-details"]],
  decls: 211,
  vars: 59,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-12"], [1, "top-details"], [1, "d-flex", "gap-2"], [1, "col-md-4"], [1, "card-collect", "customerDetail"], [1, "collect-details"], [1, "char"], [1, "card-sm"], [1, "d-flex", "align-items-center"], [1, "m-0"], [1, "col-md-8"], [1, "card-collect"], [1, "col-sm-12"], [1, "d-flex", "gap-5"], [1, "card-sm", "mb-0"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "form-group"], ["rows", "3", "disabled", "", 1, "form-control"], ["class", "form-group mt-3", 4, "ngIf"], [1, "offset-md-2", "col-md-4"], [1, "row", "align-items-center"], [1, "col-6"], [1, "fw-500"], [1, "fw-500", "light-gray"], [1, "total-card", "justify-content-end", "pt-75"], [1, "total"], [1, "btns-group", "px-0", "mx-0"], ["type", "button", "class", "btn btn-save", 3, "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["otherActions", ""], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["loading", ""], [1, "form-group", "mt-3"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [4, "ngIf", "ngIfElse"], ["type", "button", 1, "btn", "btn-save", 3, "disabled", "click"]],
  template: function SpartPartDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " \u00A0 Time ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 4)(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Status : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Invoice No : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 5)(23, "div", 6)(24, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " Customer Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 7)(27, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div")(30, "div", 9)(31, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "ID: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 9)(36, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 9)(41, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Mobile");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 12)(46, "div", 13)(47, "div", 1)(48, "div", 2)(49, "div", 1)(50, "div", 14)(51, "div", 15)(52, "div", 16)(53, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Sales Channel");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 16)(58, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Invoice Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 16)(63, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, " Sales Order No");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 16)(68, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Special Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 16)(73, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, " Sales Consultant");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 16)(78, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](82, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 2)(84, "div", 13)(85, "div", 3)(86, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, " Spare Parts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "div")(89, "div", 17)(90, "table", 18)(91, "thead")(92, "tr")(93, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, " Part No ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, " Description ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, " Qty ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, " Unit of Measure ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, " Unit price ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, " Total ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, " Line Discount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108, " Line Discount Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, " Invoice Discount Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, " Net Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, " Tax ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](116, " Tax Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, " Grand Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](120, SpartPartDetailsComponent_tr_120_Template, 34, 34, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "div", 2)(122, "div", 13)(123, "div", 1)(124, "div", 21)(125, "div", 22)(126, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, " Sales note ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "textarea", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](130, SpartPartDetailsComponent_div_130_Template, 5, 1, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "div", 25)(132, "div", 26)(133, "div", 27)(134, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135, "Sub Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "div", 27)(137, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](139, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "div", 26)(141, "div", 27)(142, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](143, "Total Line Discount");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "div", 27)(145, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](146);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](147, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "div", 26)(149, "div", 27)(150, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, "Invoice Discount Percentage");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "div", 27)(153, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](154);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "div", 26)(156, "div", 27)(157, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, "Invoice Discount Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "div", 27)(160, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](162, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "div", 26)(164, "div", 27)(165, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](166, "Net Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "div", 27)(168, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](169);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](170, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "div", 26)(172, "div", 27)(173, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174, "Total Tax Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "div", 27)(176, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](177);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](178, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "div", 26)(180, "div", 27)(181, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, "Grand Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "div", 27)(184, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](185);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](186, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "div", 2)(188, "div", 30)(189, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, " Total Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](193, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](194, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](195, "div", 2)(196, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](197, SpartPartDetailsComponent_button_197_Template, 2, 0, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](198, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](199, SpartPartDetailsComponent_ng_container_199_Template, 1, 0, "ng-container", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](200, SpartPartDetailsComponent_ng_container_200_Template, 1, 0, "ng-container", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](201, SpartPartDetailsComponent_ng_container_201_Template, 2, 2, "ng-container", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](202, SpartPartDetailsComponent_ng_template_202_Template, 2, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](204, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SpartPartDetailsComponent_Template_button_click_204_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](205, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](206, "div", 1)(207, "div", 2)(208, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](209, SpartPartDetailsComponent_ng_template_209_Template, 2, 0, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](8, 29, ctx.details == null ? null : ctx.details.returnAt, "mediumDate"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](12, 32, ctx.details == null ? null : ctx.details.returnAt, "h:mm a"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.details == null ? null : ctx.details.statusObj[0] == null ? null : ctx.details.statusObj[0].lookupName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.details == null ? null : ctx.details.invoicNo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.custmerName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.customer == null ? null : ctx.details.customer.customerId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.customer == null ? null : ctx.details.customer.customerName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.customer == null ? null : ctx.details.customer.mobile, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.salesChannel == null ? null : ctx.details.salesChannel.channelName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.invoiceType, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.sparePartsSalesOrderOpportunityNo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (ctx.details == null ? null : ctx.details.isSpecialOrder) && "True" || "False", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.returnedBy.fullName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](82, 35, ctx.details == null ? null : ctx.details.orderDate, "mediumDate"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.spareParts);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.salesNote);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.orderStatus == "Rejected Return");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](139, 38, ctx.details == null ? null : ctx.details.subTotal, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](147, 41, ctx.details == null ? null : ctx.details.totalLineDiscount, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.details == null ? null : ctx.details.invoiceDiscountPercentage, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](162, 44, ctx.details == null ? null : ctx.details.invoiceDiscountAmount, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](170, 47, ctx.details == null ? null : ctx.details.netTotal, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](178, 50, ctx.details == null ? null : ctx.details.totalTaxAmount, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](186, 53, ctx.details == null ? null : ctx.details.grandAmount, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](193, 56, ctx.details == null ? null : ctx.details.grandAmount, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.orderStatus == "Refunding");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", ctx.details == null ? null : ctx.details.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", 10006);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", 10010);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchDefault, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__.LoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".card-page[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.pt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n\n.v-line[_ngcontent-%COMP%] {\n  margin: 0px 0 10px;\n  border-color: #777;\n}\n\n.l-line[_ngcontent-%COMP%] {\n  border-left: 1px solid #ddd;\n}\n\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled {\n  background: #f1f3f3 !important;\n  color: #9b9b9b !important;\n  border: 1px solid #f1f3f3;\n  cursor: initial;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f8f9;\n  border: 0px;\n  opacity: 1;\n  border: 0p;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9yZXR1cm4vc3BhcnQtcGFydC1kZXRhaWxzL3NwYXJ0LXBhcnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGOztBQUNBOztFQUVFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wYWdlIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnB0LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG4udi1saW5lIHtcbiAgbWFyZ2luOiAwcHggMCAxMHB4O1xuICBib3JkZXItY29sb3I6ICM3Nzc7XG59XG5cbi5sLWxpbmUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5idG4uZGlzYWJsZWQsXG4uYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2YxZjNmMyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzliOWI5YiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2YzO1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY5O1xuICBib3JkZXI6IDBweDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiAwcDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_cashier_return_return_module_ts.js.map