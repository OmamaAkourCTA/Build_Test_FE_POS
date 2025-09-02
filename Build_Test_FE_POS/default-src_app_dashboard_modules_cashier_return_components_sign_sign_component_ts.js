"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["default-src_app_dashboard_modules_cashier_return_components_sign_sign_component_ts"],{

/***/ 38936:
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/return/components/sign/sign.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignComponent": () => (/* binding */ SignComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../collect/payment-modal/view-file/view-file.component */ 32298);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _collect_services_collect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../collect/services/collect.service */ 43346);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/directive/drag-and-drop.directive */ 96603);










const _c0 = ["fileInput"];
function SignComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29)(2, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 31)(5, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignComponent_ng_container_29_Template_img_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.fileAction("view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignComponent_ng_container_29_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.fileAction("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.fileName);
  }
}
function SignComponent_small_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Attachment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SignComponent_small_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.invalidFileType);
  }
}
class SignComponent {
  constructor(_activeModal, _modalService, _collectService, _commonService) {
    this._activeModal = _activeModal;
    this._modalService = _modalService;
    this._collectService = _collectService;
    this._commonService = _commonService;
    this.fileName = '';
    this.note = '';
    this.invalidFileType = '';
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    console.log(this.data.details);
    console.log(this.data?.details?.servicesSalesOrderNo);
  }
  handleConfirm() {
    this.isSubmitted = true;
    if (!this.fileName) {
      return;
    }
    let formData = new FormData();
    formData.append('SignNote', this.note);
    formData.append('Attachment', this.uploadedFile?.file);
    if (this.data?.orderType == 7001) {
      //IN CASE OF SERVICE
      formData.append('OrderId', this.data?.details?.servicesSalesOrderNo); //servicesSalesOrderNo
      this.serviceSignInvoice(formData);
    } else if (this.data?.orderType == 7002) {
      //IN CASE OF DP
      formData.append('OrderId', this.data?.details?.directPaymentSalesOrderOpportunityNo || this.data?.order?.directPaymentSalesOrderOpportunityNo);
      this.dpSignInvoice(formData);
    } else {
      formData.append('OrderId', this.data?.details?.sparePartsSalesOrderOpportunityNo);
      this.sparePartSignInvoice(formData);
    }
  }
  serviceSignInvoice(formData) {
    this._collectService.serviceSignRefundInvoice(formData).subscribe(response => {
      if (response.isSuccess) {
        this.eventData.emit({
          isSuccess: true
        });
        const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
        modalRef.componentInstance.type = 'success';
        modalRef.componentInstance.message = 'Signed successfully!';
      }
    }, error => {
      const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
      modalRef.componentInstance.type = 'error';
      modalRef.componentInstance.messageError = error?.error?.errors;
    });
  }
  dpSignInvoice(formData) {
    this._collectService.dpSignInvoice(formData).subscribe(response => {
      if (response.isSuccess) {
        this.eventData.emit({
          isSuccess: true
        });
        const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
        modalRef.componentInstance.type = 'success';
        modalRef.componentInstance.message = 'Signed successfully!';
      }
    }, error => {
      const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
      modalRef.componentInstance.type = 'error';
      modalRef.componentInstance.messageError = error?.error?.errors;
    });
  }
  sparePartSignInvoice(formData) {
    this._collectService.signRefundInvoice(formData).subscribe(response => {
      if (response.isSuccess) {
        this.eventData.emit({
          isSuccess: true
        });
        const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
        modalRef.componentInstance.type = 'success';
        modalRef.componentInstance.message = 'Signed successfully!';
      }
    }, error => {
      const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
      modalRef.componentInstance.type = 'error';
      modalRef.componentInstance.messageError = error?.error?.errors;
    });
  }
  fileAction(action) {
    if (action == 'view') {
      const modelRef = this._modalService.open(_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_1__.ViewFileComponent, {
        size: 'md'
      });
      modelRef.componentInstance.imageUploadedView = this.uploadedFile;
    } else {
      this.inputFile.nativeElement.value = null;
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
  removeFile(item) {
    this.inputFile.nativeElement.value = null;
    this.fileName = '';
    this.uploadedFile = null;
  }
}
SignComponent.ɵfac = function SignComponent_Factory(t) {
  return new (t || SignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_2__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
};
SignComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SignComponent,
  selectors: [["app-sign"]],
  viewQuery: function SignComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
    }
  },
  inputs: {
    data: "data"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 43,
  vars: 5,
  consts: [[1, "fc-modal", "p-4", "custom-form-input"], [1, "modal-header", "p-0", "flex-column", "align-items-start"], ["ngbAutofocus", "", 1, "modal-title", "fw-bolder", "pb-1"], [1, "modal-body", "p-0"], [1, "row", "mt-3"], [1, "col-sm-6"], [1, "fw-500"], [1, "disabled-box"], [1, "fw-500", "light-gray"], [1, "col-12"], [1, "signed-attachment"], [1, "m-0"], [1, "col-sm-6", "mt-3"], [1, "form-group", "mb-3"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "hidden", "", 1, "form-control", 3, "change"], ["fileInput", ""], [4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "col-sm-12", "mt-3"], [1, "fw-500", "d-inline-block", "mb-2"], [1, ""], ["rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer", "p-4", "border-0"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "d-flex", "gap-3", "file-item", "align-items-center", "justify-content-between"], [1, "p-0"], [1, "d-flex", "gap-2"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"], [1, "text-danger"]],
  template: function SignComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Receipt Sign");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7)(10, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "h6", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Upload signed attachment and mark the order as signed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12)(17, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Attachment*");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13)(20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("files", function SignComponent_Template_div_files_20_listener($event) {
        return ctx.filesDropped($event);
      })("enter", function SignComponent_Template_div_enter_20_listener() {
        return ctx.enter = !ctx.enter;
      })("leave", function SignComponent_Template_div_leave_20_listener() {
        return ctx.enter = !ctx.enter;
      })("click", function SignComponent_Template_div_click_20_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](28);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Select OR Drag & drop files");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Supported formates: JPEG, PNG, PDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SignComponent_Template_input_change_27_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, SignComponent_ng_container_29_Template, 7, 1, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, SignComponent_small_30_Template, 2, 0, "small", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, SignComponent_small_31_Template, 2, 1, "small", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 21)(33, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Note");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 23)(36, "textarea", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SignComponent_Template_textarea_ngModelChange_36_listener($event) {
        return ctx.note = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 25)(38, "div", 26)(39, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignComponent_Template_button_click_39_listener() {
        return ctx._activeModal.close("Save click");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignComponent_Template_button_click_41_listener() {
        return ctx.handleConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.details == null ? null : ctx.data.details.customer == null ? null : ctx.data.details.customer.customerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fileName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.fileName && ctx.isSubmitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.invalidFileType);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.note);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_4__.DragAndDropDirective],
  styles: [".signed-attachment[_ngcontent-%COMP%] {\n  height: 108px;\n  border-radius: 5px;\n  background: #F9F9F9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.signed-attachment[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n  color: #929EAE;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #dadada;\n  background: white;\n}\n.file-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: green;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9yZXR1cm4vY29tcG9uZW50cy9zaWduL3NpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUZGO0FBSUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbmVkLWF0dGFjaG1lbnQge1xuICBoZWlnaHQ6IDEwOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNGOUY5Rjk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGg2IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5MjlFQUU7XG4gIH1cbn1cbi5jYXJkLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjOTM5YWE4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMGYwZjBmO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gIH1cbn1cblxuLmZpbGUtaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_modules_cashier_return_components_sign_sign_component_ts.js.map