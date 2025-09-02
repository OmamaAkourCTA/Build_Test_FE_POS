"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["src_app_dashboard_modules_main-fund_receipts_receipts_module_ts"],{

/***/ 81181:
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/markazia-vouchers/services/markazia-voucher.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkaziaVoucherService": () => (/* binding */ MarkaziaVoucherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class MarkaziaVoucherService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
    this.apiUrl2 = this.sharedService.getUrl2;
  }
  getBrands(params) {
    return this.http.get(`${this.apiUrl2}Customer/GetBrands${params}`, this.sharedService.getHeaders());
  }
  getLookup(params) {
    return this.http.get(`${this.apiUrl}Lookups/GetLookups${params}`, this.sharedService.getHeaders());
  }
  getCostCenter(params) {
    return this.http.get(`${this.apiUrl}PettyCash/GetCostCenters${params}`, this.sharedService.getHeaders());
  }
  getMarkaziaVoucherList(params) {
    return this.http.get(`${this.apiUrl}MarkaziaVouchers/GetMarkaziaVouchers${params}`, this.sharedService.getHeaders());
  }
  deleteMarkaziaVouchers(payload) {
    return this.http.post(`${this.apiUrl}MarkaziaVouchers/DeleteMarkaziaVouchers`, payload, this.sharedService.getHeaders());
  }
  generateVoucher(payload) {
    return this.http.post(`${this.apiUrl}MarkaziaVouchers/GenerateMarkaziaVouchers`, payload, this.sharedService.getHeaders());
  }
}
MarkaziaVoucherService.ɵfac = function MarkaziaVoucherService_Factory(t) {
  return new (t || MarkaziaVoucherService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
MarkaziaVoucherService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MarkaziaVoucherService,
  factory: MarkaziaVoucherService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 53972:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/receipts/create-receipt/create-receipt.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateReceiptComponent": () => (/* binding */ CreateReceiptComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _cashier_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cashier/collect/payment-modal/view-file/view-file.component */ 32298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/general.service */ 21864);
/* harmony import */ var _services_receipts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/receipts.service */ 29405);
/* harmony import */ var _cashier_markazia_vouchers_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cashier/markazia-vouchers/services/markazia-voucher.service */ 81181);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../allocation/allocation/allocation-services/allocation.service */ 51445);
/* harmony import */ var _cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _cashier_unsettled_session_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cashier/unsettled-session/services/unsettled-session.service */ 20320);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/directive/drag-and-drop.directive */ 96603);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/validation-error/validation-error.component */ 67711);





















const _c0 = ["inputFile"];
const _c1 = ["container"];
function CreateReceiptComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", ctx_r0.currencyName, ")");
  }
}
function CreateReceiptComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", ctx_r1.currencyName, ")");
  }
}
function CreateReceiptComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r10 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r10.text, "% ");
  }
}
function CreateReceiptComponent_ng_template_51_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r11.text, "% ");
  }
}
function CreateReceiptComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CreateReceiptComponent_ng_template_51_ng_container_0_Template, 2, 1, "ng-container", 18);
  }
  if (rf & 2) {
    const item_r11 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r11 == null ? null : item_r11.text);
  }
}
function CreateReceiptComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", ctx_r4.currencyName, ")");
  }
}
function CreateReceiptComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 40)(2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 42)(5, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateReceiptComponent_ng_container_76_Template_img_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r14.fileAction("view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateReceiptComponent_ng_container_76_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r16.fileAction("delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r6.f.get("paymentAttachment")) == null ? null : tmp_0_0.value);
  }
}
function CreateReceiptComponent_small_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r7.invalidFileType);
  }
}
function CreateReceiptComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "View Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
const _c2 = function () {
  return {
    required: "Input is required"
  };
};
class CreateReceiptComponent {
  constructor(_generalService, _receiptsService, _voucherService, _spinner, _commonService, fb, _modalService, _allocationService, _collectService, _decimalPipe, _unsettleSession) {
    this._generalService = _generalService;
    this._receiptsService = _receiptsService;
    this._voucherService = _voucherService;
    this._spinner = _spinner;
    this._commonService = _commonService;
    this.fb = fb;
    this._modalService = _modalService;
    this._allocationService = _allocationService;
    this._collectService = _collectService;
    this._decimalPipe = _decimalPipe;
    this._unsettleSession = _unsettleSession;
    this.currencyList = [];
    this.employeeList = [];
    this.costCenterList = [];
    this.mfCategoryList = [];
    this.currencyName = '';
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']; //'application/pdf'
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
    this.dateYMD = new Date();
    this.taxesList = [];
  }
  ngOnInit() {
    this.initForm();
    this.getCurrencyList();
    this.getLookups();
    this.f.get('mainFundPaymentCategoryID').valueChanges.subscribe(value => {
      this.toggleControlDisability(value);
    });
  }
  handleSearch(event) {
    this._collectService.customersList(event.term).subscribe(response => {
      this.employeeList = response.data;
    });
  }
  customSearch(term, item) {
    return item?.customerName?.toLowerCase().includes(term.toLowerCase()) || item?.mobile?.toLowerCase().includes(term.toLowerCase());
  }
  getLookups() {
    //const employee = this._collectService.customersList().pipe(catchError(error => of(error)));
    const costCenter = this._voucherService.getCostCenter(`?StatusId=2001&PageSize=1000`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(error)));
    const mainFundCat = this._receiptsService.getMainFundPaymentCategories(`?status=2001&PageSize=1000`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(error)));
    let params = `?lookupTypeId=23&status=2001&pageSize=1000`;
    const taxes = this._generalService.getLookupsWithParams(params);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)([costCenter, mainFundCat, taxes]).subscribe(data => {
      this.costCenterList = data[0].data;
      this.mfCategoryList = data[1].data;
      this.taxesList = data[2].data.map(x => {
        return {
          ...x,
          text: x.name[0].lookupName
        };
      });
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  initForm() {
    this.formGroup = this.fb.group({
      accountID: [null],
      mainFundPaymentCategoryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
      paymentAmount: [{
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
      paymentTaxPer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
      paymentTaxAmount: [{
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
      paymentTotalAmount: [{
        value: '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
      paymentCurrencyID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
      paymentCostCenterID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
      paymentAttachment: [''],
      notes: [''],
      dateYMD: [{
        value: new Date(),
        disabled: true
      }],
      time: [{
        value: this.formatTime(new Date()),
        disabled: true
      }] // Readonly
    });
  }

  handleCurrencyChange(event) {
    this.currencyName = event?.text || '';
  }
  handleTaxChange(event) {
    this.handleAmountChange();
  }
  handleMfCategoryChange(event) {
    let obj = {
      paymentTaxPer: event?.taxPercentId || null,
      paymentCostCenterID: event?.costCenter?.costCenterId,
      paymentAmount: '',
      paymentTaxAmount: '',
      paymentTotalAmount: ''
    };
    this.f.patchValue(obj);
    this.handleAmountChange();
  }
  handleAmountChange() {
    let amount = +this.f.get('paymentAmount').value;
    let taxId = +this.f.get('paymentTaxPer').value;
    let taxPercentage = +this.taxesList.find(x => x.id == taxId)?.name[0]?.lookupName;
    let taxAmount = taxPercentage / 100 * amount;
    this.f.get('paymentTaxAmount').setValue(this._decimalPipe.transform(taxAmount, '2.3'));
    this.f.get('paymentTotalAmount').setValue(this._decimalPipe.transform(amount + taxAmount, '2.3'));
  }
  handleTotalAmountChange() {
    let totalAmount = +this.f.get('paymentTotalAmount').value;
    let taxId = +this.f.get('paymentTaxPer').value;
    let taxPercentage = +this.taxesList.find(x => x.id == taxId)?.name[0]?.lookupName;
    let taxAmount = totalAmount * taxPercentage / (100 + taxPercentage);
    this.f.get('paymentTaxAmount').setValue(this._decimalPipe.transform(taxAmount, '2.3'));
    this.f.get('paymentAmount').setValue(this._decimalPipe.transform(totalAmount - taxAmount, '2.3'));
  }
  handleSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    } else {
      this._spinner.show();
      let formData = this._commonService.convertFormGroupToFormData(this.formGroup, ['accountID', 'paymentAttachment', 'time', 'dateYMD']);
      formData.append('accountID', this.f.value.accountID && this.f.value.accountID || '');
      if (this.uploadedFile?.['file']) {
        formData.append('paymentAttachment', this.uploadedFile['file']);
      }
      this._receiptsService.addMainFundPaymentReceipt(formData).subscribe({
        next: response => {
          if (response.isSuccess) {
            this.successModal('success', 'Receipt has been created successfully', response.data);
          }
        },
        error: err => {
          this.successModal('error', err?.error.errors || err?.error.Errors);
        }
      }).add(() => {
        this._spinner.hide();
      });
    }
  }
  toggleControlDisability(value) {
    const controlNames = ['paymentAmount', 'paymentTotalAmount'];
    controlNames.forEach(controlName => {
      const control = this.f.get(controlName);
      if (control) {
        value ? control.enable() : control.disable();
      }
    });
  }
  successModal(type, message, data) {
    const modelRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent, {
      size: 'md'
    });
    modelRef.componentInstance.type = type;
    if (type == 'success') {
      modelRef.componentInstance.message = message;
      modelRef.componentInstance.data = {
        receipt: data
      };
      modelRef.componentInstance.routeName = "/mainfund-receipt";
    } else if (type == 'error') {
      modelRef.componentInstance.messageError = message;
    }
  }
  get f() {
    return this.formGroup;
  }
  get c() {
    return this.formGroup.controls;
  }
  getCurrencyList() {
    this._allocationService.getCurrencyList().subscribe(response => {
      this.currencyList = response['data'].map(x => {
        return {
          value: x.id,
          text: x.name[0]?.lookupName
        };
      });
    });
  }
  fileAction(action) {
    if (action == 'view') {
      const modelRef = this._modalService.open(_cashier_collect_payment_modal_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_1__.ViewFileComponent, {
        size: 'md'
      });
      modelRef.componentInstance.imageUploadedView = this.uploadedFile;
    } else {
      this.inputFile.nativeElement.value = null;
      this.formGroup.get('paymentAttachment')?.setValue('');
      this.uploadedFile = {};
    }
  }
  filesDropped(data) {
    this.enter = false;
    let isInvalid = this.checkInvalidImageFormat(data);
    if (isInvalid) {
      this.inputFile.nativeElement.value = null;
      return;
    }
    let files = data.map(x => {
      return x.file;
    });
    if (!isInvalid) {
      files.forEach(file => {
        this.formGroup.get('paymentAttachment')?.setValue(file.name);
        this._commonService.fileToBase64(file).then(response => {
          this.uploadedFile = response;
        });
      });
    }
  }
  onSelectFile(event) {
    let files = [...event.target.files];
    let isInvalid = this.checkInvalidImageFormat(files);
    if (isInvalid) {
      this.inputFile.nativeElement.value = null;
      return;
    }
    if (files.length > 0) {
      if (!isInvalid) {
        files.forEach(file => {
          this.formGroup.get('paymentAttachment')?.setValue(file.name);
          this._commonService.fileToBase64(file).then(response => {
            this.uploadedFile = response;
          });
        });
      }
    }
  }
  removeFile(item) {
    this.inputFile.nativeElement.value = null;
    this.formGroup.get('paymentAttachment')?.setValue('');
    this.uploadedFile = null;
  }
  checkInvalidImageFormat(data) {
    let files;
    let getFiles = data.map(x => {
      return x.file;
    });
    if (getFiles[0] !== undefined) {
      files = getFiles;
    } else {
      files = data;
    }
    let invalidExtentions = false;
    for (let file of files) {
      if (!this.fileTypes.includes(file.type)) {
        invalidExtentions = true;
        this.invalidFileType = 'This file not support, supported formates: JPEG, JPG, PNG, PDF';
        this.formGroup.get('paymentAttachment')?.patchValue('');
        setTimeout(() => {
          this.invalidFileType = '';
        }, 3000);
        break;
      }
    }
    return invalidExtentions;
  }
  formatTime(date) {
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  }
}
CreateReceiptComponent.ɵfac = function CreateReceiptComponent_Factory(t) {
  return new (t || CreateReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_receipts_service__WEBPACK_IMPORTED_MODULE_3__.ReceiptsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_cashier_markazia_vouchers_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_4__.MarkaziaVoucherService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_allocation_allocation_allocation_services_allocation_service__WEBPACK_IMPORTED_MODULE_6__.AllocationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_7__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_cashier_unsettled_session_services_unsettled_session_service__WEBPACK_IMPORTED_MODULE_8__.UnsettledSessionService));
};
CreateReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: CreateReceiptComponent,
  selectors: [["app-create-receipt"]],
  viewQuery: function CreateReceiptComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.inputFile = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    }
  },
  decls: 86,
  vars: 37,
  consts: [[1, "page-layout"], [3, "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "input-label"], ["placeholder", "Search Account", "formControlName", "accountID", "bindLabel", "customerName", "bindValue", "customerId", 3, "items", "searchFn", "search"], [3, "control", "errorMessages"], ["type", "text", "disabled", "", 1, "form-control", "height-47", 3, "value"], [1, "separator"], [1, "card-Box", "mt-4"], [1, "row", "align-items-center"], [1, "col-sm-2"], ["formControlName", "paymentCurrencyID", "placeholder", "Currency", "bindLabel", "text", "bindValue", "value", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "change"], ["formControlName", "mainFundPaymentCategoryID", "placeholder", "Main Fund Category", "bindLabel", "paymentCategoryName", "bindValue", "paymentCategoryID", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "change"], ["formControlName", "paymentCostCenterID", "placeholder", "Cost Center", "bindLabel", "costCenterName", "bindValue", "costCenterId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], [1, "card-Box", "mt-5"], [1, "col-sm-8"], [1, "col-3", "mb-3"], [4, "ngIf"], ["type", "text", "formControlName", "paymentAmount", "appDecimalNumber", "", 1, "form-control", "height-47", 3, "change"], ["type", "text", "formControlName", "paymentTaxAmount", 1, "form-control", "height-47"], ["formControlName", "paymentTaxPer", "placeholder", "Tax Percentage", "bindLabel", "text", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "change"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], ["type", "text", "appDecimalNumber", "", "formControlName", "paymentTotalAmount", 1, "form-control", "height-47", 3, "change"], [1, "col-12", "mb-3"], ["type", "text", "formControlName", "notes", 1, "form-control"], [1, "col-sm-4"], [1, "form-group", "mb-3"], ["appImageDrag", "", "accept", ".png,.jpg,.jpeg,.pdf", 1, "card-upload", 3, "files", "enter", "leave", "click"], [1, "my-3"], ["src", "assets/images/upload.png", "alt", ""], ["type", "file", "accept", ".png,.jpg,.jpeg,.pdf", "multiple", "", "hidden", "", 1, "form-control", 3, "change"], ["inputFile", ""], ["class", "text-danger", 4, "ngIf"], [1, "d-flex", "justify-content-end", "mt-5"], [1, "btns-group", "my-2", "mx-0"], ["type", "button", "routerLink", "/mainfund-receipt", 1, "btn", "btn-cancel"], ["type", "button", 1, "btn", "btn-save", 3, "click"], ["container", ""], [1, "d-flex", "gap-3", "file-item", "align-items-center", "justify-content-between"], [1, "p-0"], [1, "d-flex", "gap-2"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"], [1, "text-danger"], ["type", "button", 1, "redBtn"]],
  template: function CreateReceiptComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Account Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "ng-select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("search", function CreateReceiptComponent_Template_ng_select_search_6_listener($event) {
        return ctx.handleSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "validation-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Account Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Select Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "ng-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateReceiptComponent_Template_ng_select_change_18_listener($event) {
        return ctx.handleCurrencyChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "validation-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 11)(21, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Select Payment Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "ng-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateReceiptComponent_Template_ng_select_change_23_listener($event) {
        return ctx.handleMfCategoryChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "validation-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 11)(26, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Cost Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "ng-select", 14)(29, "validation-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 15)(31, "div", 2)(32, "div", 16)(33, "div", 2)(34, "div", 17)(35, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Amount* ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, CreateReceiptComponent_ng_container_37_Template, 2, 1, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateReceiptComponent_Template_input_change_38_listener() {
        return ctx.handleAmountChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](39, "validation-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 17)(41, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Tax Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, CreateReceiptComponent_ng_container_43_Template, 2, 1, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](44, "input", 20)(45, "validation-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 17)(47, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "Tax Percentage %");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "ng-select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateReceiptComponent_Template_ng_select_change_49_listener($event) {
        return ctx.handleTaxChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](50, CreateReceiptComponent_ng_template_50_Template, 1, 1, "ng-template", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](51, CreateReceiptComponent_ng_template_51_Template, 1, 1, "ng-template", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](52, "validation-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 17)(54, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, "Total Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](56, CreateReceiptComponent_ng_container_56_Template, 2, 1, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateReceiptComponent_Template_input_change_57_listener() {
        return ctx.handleTotalAmountChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](58, "validation-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 25)(60, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](62, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 27)(64, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div", 28)(67, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("files", function CreateReceiptComponent_Template_div_files_67_listener($event) {
        return ctx.filesDropped($event);
      })("enter", function CreateReceiptComponent_Template_div_enter_67_listener() {
        return ctx.enter = !ctx.enter;
      })("leave", function CreateReceiptComponent_Template_div_leave_67_listener() {
        return ctx.enter = !ctx.enter;
      })("click", function CreateReceiptComponent_Template_div_click_67_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](75);
        return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r5.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](69, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "Select OR Drag & drop files");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "Supported formates: JPEG, PNG, PDF");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "input", 32, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function CreateReceiptComponent_Template_input_change_74_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](76, CreateReceiptComponent_ng_container_76_Template, 7, 1, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](77, CreateReceiptComponent_small_77_Template, 2, 1, "small", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "div", 35)(79, "div", 36)(80, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CreateReceiptComponent_Template_button_click_82_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](84, CreateReceiptComponent_ng_template_84_Template, 2, 0, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      let tmp_27_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.employeeList)("searchFn", ctx.customSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.f.get("accountID"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](29, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.f.get("accountID").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.currencyList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.f.get("paymentCurrencyID"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](30, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.mfCategoryList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.f.get("mainFundPaymentCategoryID"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](31, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.costCenterList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.f.get("paymentCostCenterID"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](32, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.currencyName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.f.get("paymentAmount"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](33, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.currencyName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.f.get("paymentTaxAmount"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](34, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.taxesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.f.get("paymentTaxPer"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](35, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.currencyName);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.f.get("paymentTotalAmount"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](36, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_27_0 = ctx.f.get("paymentAttachment")) == null ? null : tmp_27_0.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invalidFileType);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgLabelTemplateDirective, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_9__.DecimalNumberDirective, _shared_directive_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_10__.DragAndDropDirective, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_11__.ValidationErrorComponent],
  styles: [".card-Box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0.5px solid #f5f5f5;\n  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 24px 34px;\n}\n\n.card-upload[_ngcontent-%COMP%] {\n  border: 1px dashed #939aa8;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n}\n.card-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-bottom: 15px;\n}\n.card-upload[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #0f0f0f;\n}\n.card-upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: #676767;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #dadada;\n  background: white;\n}\n.file-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 1;\n  color: green;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL3JlY2VpcHRzL2NyZWF0ZS1yZWNlaXB0L2NyZWF0ZS1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUY7QUFBRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1Cb3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDI0cHggMzRweDtcbn1cbi5jYXJkLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjOTM5YWE4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMGYwZjBmO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gIH1cbn1cbi5maWxlLWl0ZW0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gIGxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 34646:
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/receipts/receipts-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptsRoutingModule": () => (/* binding */ ReceiptsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _receipts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipts.component */ 99382);
/* harmony import */ var _create_receipt_create_receipt_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-receipt/create-receipt.component */ 53972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _receipts_component__WEBPACK_IMPORTED_MODULE_0__.ReceiptsComponent
}, {
  path: 'create-receipt',
  component: _create_receipt_create_receipt_component__WEBPACK_IMPORTED_MODULE_1__.CreateReceiptComponent
}];
class ReceiptsRoutingModule {}
ReceiptsRoutingModule.ɵfac = function ReceiptsRoutingModule_Factory(t) {
  return new (t || ReceiptsRoutingModule)();
};
ReceiptsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ReceiptsRoutingModule
});
ReceiptsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReceiptsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 99382:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/receipts/receipts.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptsComponent": () => (/* binding */ ReceiptsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_receipts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/receipts.service */ 29405);
/* harmony import */ var _cashier_markazia_vouchers_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cashier/markazia-vouchers/services/markazia-voucher.service */ 81181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/header.service */ 36690);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common.service */ 5620);
/* harmony import */ var _cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cashier/collect/services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/table-advanced/table-advanced.component */ 49973);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/table-advanced/table-advanced.directives */ 85746);















function ReceiptsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 19)(5, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", item_r2 == null ? null : item_r2.accountTypeImage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.accountType[0] == null ? null : item_r2.accountType[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 3, item_r2 == null ? null : item_r2.remainingAmountTobeDistributed, "2.3-3"), " ");
  }
}
function ReceiptsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReceiptsComponent_ng_template_21_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const row_r3 = restoredCtx.row;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4._commonService.downloadInvoices({
        invoices: row_r3 == null ? null : row_r3.mainFundPaymentVoucher
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "View Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
class ReceiptsComponent {
  constructor(_receiptsService, _voucherService, fb, _modalService, _headerService, _commonService, _collectService) {
    this._receiptsService = _receiptsService;
    this._voucherService = _voucherService;
    this.fb = fb;
    this._modalService = _modalService;
    this._headerService = _headerService;
    this._commonService = _commonService;
    this._collectService = _collectService;
    this.mainFundAmounts = [];
    this.employeeList = [];
    this.costCenterList = [];
    this.mfCategoryList = [];
    this.paymentList = [];
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
  }
  ngOnInit() {
    this._headerService.setTitle('Main Fund Receipt');
    this.initTableColumns();
    this.initFilterParams();
    this.getPaymentList();
    this.getLookups();
  }
  getLookups() {
    //const employee = this._receiptsService.getEmployees().pipe(catchError(error => of(error)));
    const mainFundAmount = this._receiptsService.getMainFundCash().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(error)));
    const costCenter = this._voucherService.getCostCenter(`?StatusId=2001&PageSize=1000`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(error)));
    const mainFundCat = this._receiptsService.getMainFundPaymentCategories(`?status=2001&PageSize=1000`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(error)));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([mainFundAmount, costCenter, mainFundCat]).subscribe(data => {
      //this.employeeList = data[0].data;
      this.mainFundAmounts = data[0].data.filter(x => x.isCash);
      this.costCenterList = data[1].data;
      this.mfCategoryList = data[2].data;
    });
  }
  initFilterParams() {
    this.filterForm = this.fb.group({
      search: [''],
      //paidByUser: [null],
      paidToUser: [null],
      mainFundCategory: [null],
      costCenterId: [null]
    });
    this.filterForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      this.pageNo = 1;
      let formValues = {
        ...value
      };
      //if (formValues?.paidByUser == null) {
      //  formValues = { ...formValues, paidByUser: '' }
      //}
      if (formValues?.paidToUser == null) {
        formValues = {
          ...formValues,
          paidToUser: ''
        };
      }
      if (formValues?.mainFundCategory == null) {
        formValues = {
          ...formValues,
          mainFundCategory: ''
        };
      }
      if (formValues?.costCenterId == null) {
        formValues = {
          ...formValues,
          costCenterId: ''
        };
      }
      this.filterParams = '?' + new URLSearchParams(formValues).toString();
      this.getPaymentList();
    });
  }
  getPaymentList() {
    let defaultParams = `pageSize=${this.tableConfig.filter.PageSize}&pageNo=${this.pageNo - 1}&sort=${this.tableConfig.filter.Sort}`;
    let params;
    if (this.filterParams) params = `${this.filterParams}&${defaultParams}`;else params = `?${defaultParams}`;
    this._receiptsService.getMainFundPayments(params).subscribe(response => {
      this.paymentList = response.data;
      this.total = response.totalRecordCount;
    }).add(() => {});
  }
  handleSearch(event) {
    this._collectService.customersList(event.term).subscribe(response => {
      this.employeeList = response.data;
    });
  }
  customSearch(term, item) {
    return item?.customerName?.toLowerCase().includes(term.toLowerCase()) || item?.mobile?.toLowerCase().includes(term.toLowerCase());
  }
  onSortChange(sort) {
    if (sort?.direction && sort?.column) {
      switch (sort.column) {
        case 'mainFundPaymentReceiptID':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
          break;
        case 'givenToAccount.fullName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 5 : 4;
          break;
        case 'givenToAccount.userId':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 7 : 6;
          break;
        case 'mainFundPaymentTotalAmount':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 9 : 8;
          break;
        case 'currency[0].lookupName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 11 : 10;
          break;
        default:
          break;
      }
    } else {
      this.tableConfig.filter.Sort = 1;
    }
    this.getPaymentList();
  }
  onPageChange(page) {
    this.pageNo = page;
    this.getPaymentList();
  }
  initTableColumns() {
    this.tableColumns = [{
      key: 'mainFundPaymentReceiptID',
      label: 'Receipt ID',
      canSort: true
    },
    //{ key: 'createdBy.fullName', label: 'Paid By Employee'},
    {
      key: 'givenToAccount.fullName',
      label: 'Account Name',
      canSort: true
    }, {
      key: 'givenToAccount.userId',
      label: 'Account No',
      canSort: true
    }, {
      key: 'mainFundPaymentCategory.paymentCategoryName',
      label: 'Payment Category'
    }, {
      key: 'mainFundPaymentTotalAmount',
      label: 'Total Amount',
      canSort: true,
      currency: {
        decimalFormat: '2.3-3',
        appendText: ' JOD'
      }
    }, {
      key: 'currency[0].lookupName',
      label: 'Currency',
      canSort: true,
      placeholder: '---'
    }, {
      key: 'action',
      label: 'Action'
    }];
  }
  responseModal(type, message) {
    const ref = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_0__.ModalMessageComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.dismissOnlyActive = true;
    if (type == 'success') ref.componentInstance.message = message;else ref.componentInstance.messageError = message;
  }
}
ReceiptsComponent.ɵfac = function ReceiptsComponent_Factory(t) {
  return new (t || ReceiptsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_receipts_service__WEBPACK_IMPORTED_MODULE_1__.ReceiptsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cashier_markazia_vouchers_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_2__.MarkaziaVoucherService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_cashier_collect_services_collect_service__WEBPACK_IMPORTED_MODULE_5__.CollectService));
};
ReceiptsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ReceiptsComponent,
  selectors: [["app-receipts"]],
  decls: 22,
  vars: 12,
  consts: [[1, "heading-text", "mb-3"], [1, "main-fund-container", "gap-4", "mb-4"], ["class", "main-fund-wrapper", 4, "ngFor", "ngForOf"], [1, "heading-text", "my-3"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-2"], ["type", "text", "formControlName", "search", "placeholder", "Seach by Receipt ID or Amount", 1, "form-control", "height-47"], ["placeholder", "Search Account", "formControlName", "paidToUser", "bindLabel", "customerName", "bindValue", "customerId", 3, "items", "searchFn", "search"], ["placeholder", "Main Fund Category", "bindLabel", "paymentCategoryName", "bindValue", "paymentCategoryID", "formControlName", "mainFundCategory", 3, "items"], ["placeholder", "Cost Center", "bindLabel", "costCenterName", "bindValue", "costCenterId", "formControlName", "costCenterId", 3, "items"], [1, "btns-group", "m-0"], ["routerLink", "/mainfund-receipt/create-receipt", 1, "btn", "btn-save"], [3, "config", "columns", "data", "page", "total", "limit", "sortUpdated", "pageUpdated"], ["libTableAdvancedColumn", "action"], [1, "main-fund-wrapper"], [1, "main-fund-div"], [1, "currency-symbol"], ["alt", "", 3, "src"], [1, "d-flex", "flex-column"], [1, "fw-700", "font-18"], [1, "fw-700", "font-20", "gray-500", "m-0"], ["type", "button", 1, "redBtn", 3, "click"]],
  template: function ReceiptsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Main Fund Current Amounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ReceiptsComponent_div_3_Template, 10, 6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Receipt List");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 4)(7, "div", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 6)(11, "ng-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("search", function ReceiptsComponent_Template_ng_select_search_11_listener($event) {
        return ctx.handleSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "ng-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 6)(17, "div", 11)(18, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Create Receipt");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "table-advanced", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sortUpdated", function ReceiptsComponent_Template_table_advanced_sortUpdated_20_listener($event) {
        return ctx.onSortChange($event);
      })("pageUpdated", function ReceiptsComponent_Template_table_advanced_pageUpdated_20_listener($event) {
        return ctx.onPageChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ReceiptsComponent_ng_template_21_Template, 2, 0, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.mainFundAmounts);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.filterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.employeeList)("searchFn", ctx.customSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.mfCategoryList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.costCenterList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx.tableConfig)("columns", ctx.tableColumns)("data", ctx.paymentList)("page", ctx.pageNo)("total", ctx.total)("limit", ctx.limit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectComponent, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_6__.TableAdvancedComponent, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_7__.TableAdvancedColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe],
  styles: [".heading-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.main-fund-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 1px solid #E9E9E9;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px 15px;\n  flex: 0 1 240px;\n  display: flex;\n  align-items: center;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.main-fund-container[_ngcontent-%COMP%]   .main-fund-wrapper[_ngcontent-%COMP%]   .main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.mdtext[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  color: #1b212d;\n}\n\n.smText[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  color: #858585;\n}\n\n.d-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(173px, 1fr));\n  gap: 20px;\n}\n\n.uploadedfile[_ngcontent-%COMP%] {\n  border: 1px solid #11af22;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin: 0px 0px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uploadedfile[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.uploadedfile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  color: #696969;\n  margin: 0px;\n  cursor: pointer;\n}\n\n.main-fund-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.main-fund-div[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #F6F6F6;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n\n.heading-main-fund[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n}\n.form-check-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvbWFpbi1mdW5kL3JlY2VpcHRzL3JlY2VpcHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDTjtBQUNNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7QUFBRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7QUFDTjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFERjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1haW4tZnVuZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLm1haW4tZnVuZC13cmFwcGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U5RTlFOTtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGZsZXg6IDAgMSAyNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubWFpbi1mdW5kLWRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNXB4O1xuXG4gICAgICAuY3VycmVuY3ktc3ltYm9sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tZHRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxYjIxMmQ7XG59XG4uc21UZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjODU4NTg1O1xufVxuLmQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTczcHgsMWZyKSk7XG4gIGdhcDogMjBweDtcbn1cbi51cGxvYWRlZGZpbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTFhZjIyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLm1haW4tZnVuZC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmN1cnJlbmN5LXN5bWJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxufVxuXG4uaGVhZGluZy1tYWluLWZ1bmQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQge1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICArIGxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 96335:
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/receipts/receipts.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptsModule": () => (/* binding */ ReceiptsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _receipts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipts-routing.module */ 34646);
/* harmony import */ var _receipts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receipts.component */ 99382);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _create_receipt_create_receipt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-receipt/create-receipt.component */ 53972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);






class ReceiptsModule {}
ReceiptsModule.ɵfac = function ReceiptsModule_Factory(t) {
  return new (t || ReceiptsModule)();
};
ReceiptsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ReceiptsModule
});
ReceiptsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _receipts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReceiptsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ReceiptsModule, {
    declarations: [_receipts_component__WEBPACK_IMPORTED_MODULE_1__.ReceiptsComponent, _create_receipt_create_receipt_component__WEBPACK_IMPORTED_MODULE_3__.CreateReceiptComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _receipts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReceiptsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 29405:
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/modules/main-fund/receipts/services/receipts.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptsService": () => (/* binding */ ReceiptsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);



class ReceiptsService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
    this.apiUrl2 = this.sharedService.getUrl2;
  }
  getMainFundPayments(params) {
    return this.http.get(this.apiUrl + `Mainfund/GetMainFundPayments${params}`, this.sharedService.getHeaders());
  }
  addMainFundPaymentReceipt(payload) {
    return this.http.post(this.apiUrl + 'Mainfund/AddMainFundPaymentReceipt', payload, this.sharedService.getHeaders());
  }
  getMainFundCash() {
    return this.http.get(this.apiUrl + `Mainfund/GetMainFundCash`, this.sharedService.getHeaders());
  }
  getEmployees() {
    return this.http.get(this.apiUrl + `User/GetUsers?status=2001&pageNo=0&pageSize=1000`, this.sharedService.getHeaders());
  }
  getMainFundPaymentCategories(params) {
    return this.http.get(
    //this.apiUrl2 + `MainFundPaymentCategories/GetMainFundPaymentCategories${params}`,
    this.apiUrl2 + `MainFundPaymentCategories/GetMainFundPaymentCategories${params}`, this.sharedService.getHeaders());
  }
}
ReceiptsService.ɵfac = function ReceiptsService_Factory(t) {
  return new (t || ReceiptsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
ReceiptsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ReceiptsService,
  factory: ReceiptsService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_modules_main-fund_receipts_receipts_module_ts.js.map