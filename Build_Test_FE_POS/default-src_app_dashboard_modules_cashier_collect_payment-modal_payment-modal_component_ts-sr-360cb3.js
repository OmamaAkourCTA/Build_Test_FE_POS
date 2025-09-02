"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["default-src_app_dashboard_modules_cashier_collect_payment-modal_payment-modal_component_ts-sr-360cb3"],{

/***/ 55034:
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/modal-payment/modal-pay-done/modal-pay-done.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPayDoneComponent": () => (/* binding */ ModalPayDoneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);






function ModalPayDoneComponent_div_0_ng_container_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalPayDoneComponent_div_0_ng_container_5_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.downloadInvoices());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ((ctx_r6.data == null ? null : ctx_r6.data.collectionType) == 7004 || (ctx_r6.data == null ? null : ctx_r6.data.collectionType) == 7005 || (ctx_r6.data == null ? null : ctx_r6.data.collectionType) == 7008 || (ctx_r6.data == null ? null : ctx_r6.data.collectionType) == 7009) && "View Receipt" || "View Invoice", " ");
  }
}
function ModalPayDoneComponent_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalPayDoneComponent_div_0_ng_container_5_button_1_Template, 2, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r3.data == null ? null : ctx_r3.data.collectionType) !== 7001 && (ctx_r3.data == null ? null : ctx_r3.data.collectionType) !== 7002 && (ctx_r3.data == null ? null : ctx_r3.data.collectionType) !== 7003)("ngIfElse", _r4);
  }
}
function ModalPayDoneComponent_div_0_ng_template_8_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "View Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r11.data == null ? null : ctx_r11.data.invoice, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ModalPayDoneComponent_div_0_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalPayDoneComponent_div_0_ng_template_8_ng_container_0_a_1_Template, 3, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.data.status == 10004 && (ctx_r9.data == null ? null : ctx_r9.data.collectionType) !== 7002);
  }
}
function ModalPayDoneComponent_div_0_ng_template_8_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "View Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r10.data == null ? null : ctx_r10.data.receipt, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ModalPayDoneComponent_div_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModalPayDoneComponent_div_0_ng_template_8_ng_container_0_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalPayDoneComponent_div_0_ng_template_8_a_1_Template, 3, 1, "a", 8);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r5.data == null ? null : ctx_r5.data.reverse) && !(ctx_r5.data == null ? null : ctx_r5.data.refund));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r5.data.status == 10004 || ctx_r5.data.status == 10005) && (ctx_r5.data == null ? null : ctx_r5.data.invoiceType) !== "credit" && (ctx_r5.data == null ? null : ctx_r5.data.invoiceType) !== "internal" && (ctx_r5.data == null ? null : ctx_r5.data.invoiceType) !== "tmc");
  }
}
function ModalPayDoneComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModalPayDoneComponent_div_0_ng_container_5_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalPayDoneComponent_div_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r12.activeModal.close("Close click");
      ctx_r12.navigateTo();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.emitData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ModalPayDoneComponent_div_0_ng_template_8_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r0.data == null ? null : ctx_r0.data.reverse) && "Collection Successfully Updated" || (ctx_r0.data == null ? null : ctx_r0.data.refund) && "Refund Successfully Performed" || "Your payment successfully completed", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.data == null ? null : ctx_r0.data.isMultiCollect));
  }
}
function ModalPayDoneComponent_div_1_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r15.errorMessageEn || item_r15.ErrorMessageEn, " ");
  }
}
function ModalPayDoneComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalPayDoneComponent_div_1_h5_1_Template, 3, 1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalPayDoneComponent_div_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r16.activeModal.close("Close click");
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.emitData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.errors);
  }
}
function ModalPayDoneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Payment must be completed, there is an amount left to pay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalPayDoneComponent_div_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r18.activeModal.close("Close click");
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.emitData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ModalPayDoneComponent {
  constructor(router, modalService, activeModal, _subjectService) {
    this.router = router;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this._subjectService = _subjectService;
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    if (this.name == 'ok') {
      setTimeout(() => {
        //this.modalService.dismissAll();
        //this.router.navigateByUrl('/collect');
        //  window.location.reload()
      }, 4000);
    } else if (this.name == 'remain') {
      setTimeout(() => {
        // this.modalService.dismissAll();
      }, 4000);
    } else {
      setTimeout(() => {
        // this.modalService.dismissAll();
      }, 4000);
    }
  }
  navigateTo() {
    if (this.data?.collectionType !== 7008) {
      this.modalService.dismissAll();
      //this.router.navigateByUrl('/collect');
      if (this.routeName) this.router.navigateByUrl(`/${this.routeName}`);else this._subjectService.isCollectionPaymentDone.next(true);
    }
  }
  emitData() {
    if (this.data?.collectionType == 7008) {
      this._subjectService.paymentDoneModalClosed.next({
        closed: true
      });
    }
  }
  downloadInvoices() {
    let isArray = Array.isArray(this.response.data);
    if (isArray) {
      this.response.data.forEach(x => {
        this.iterateData(x);
      });
    } else {
      this.iterateData(this.response.data);
    }
    if (!this.notAutoDismiss) {
      setTimeout(() => {
        if (this.routeName) this.router.navigateByUrl(`/${this.routeName}`);else this._subjectService.isCollectionPaymentDone.next(true);
        this.modalService.dismissAll();
      }, 3000);
    } else {
      if (this.routeName) this.router.navigateByUrl(`/${this.routeName}`);
    }
  }
  iterateData(data) {
    for (let key in data) {
      let item = data[key];
      if (item) {
        setTimeout(() => {
          this.downloadURI(item);
        }, 500);
      }
    }
  }
  downloadURI(uri) {
    let name = uri.split('/').pop();
    var link = document.createElement("a");
    //link.setAttribute('download', name);
    link.setAttribute('target', '_blank');
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
ModalPayDoneComponent.ɵfac = function ModalPayDoneComponent_Factory(t) {
  return new (t || ModalPayDoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_0__.SubjectService));
};
ModalPayDoneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ModalPayDoneComponent,
  selectors: [["app-modal-pay-done"]],
  inputs: {
    name: "name",
    data: "data",
    errors: "errors",
    response: "response",
    routeName: "routeName",
    notAutoDismiss: "notAutoDismiss"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 3,
  vars: 3,
  consts: [["class", "message", 4, "ngIf"], [1, "message"], [1, "fa-regular", "fa-circle-check"], [1, "btns-group", "gap-2", "my-0"], [4, "ngIf"], [1, "redBtn", 3, "click"], ["elseBlock", ""], ["class", "redBtn", 3, "click", 4, "ngIf", "ngIfElse"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["type", "button", 1, "redBtn"], [4, "ngFor", "ngForOf"], [1, "btn", "btnclose", 3, "click"], [1, "fa-regular", "fa-circle-xmark"]],
  template: function ModalPayDoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModalPayDoneComponent_div_0_Template, 10, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalPayDoneComponent_div_1_Template, 4, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalPayDoneComponent_div_2_Template, 6, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name == "ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name == "no");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name == "remain");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".message[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.message[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  color: #1b212d;\n  margin: 0px;\n  padding: 20px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-check[_ngcontent-%COMP%] {\n  color: #25BB00;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n.message[_ngcontent-%COMP%]   .fa-circle-xmark[_ngcontent-%COMP%] {\n  color: #DC3545;\n  font-size: 28px;\n  vertical-align: middle;\n  margin: 2px 10px 5px;\n}\n\n.btnclose[_ngcontent-%COMP%] {\n  border: 1px solid #f5f5f5;\n  border-radius: 30px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n  padding: 10px 40px;\n  background: #f5f5f5;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L21vZGFsLXBheW1lbnQvbW9kYWwtcGF5LWRvbmUvbW9kYWwtcGF5LWRvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoNSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMxYjIxMmQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAuZmEtY2lyY2xlLWNoZWNre1xuICAgIGNvbG9yOiAjMjVCQjAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMnB4IDEwcHggNXB4O1xuICB9XG4gIC5mYS1jaXJjbGUteG1hcmt7XG4gICAgY29sb3I6ICNEQzM1NDU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAycHggMTBweCA1cHg7XG4gIH1cbn1cbi5idG5jbG9zZXtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBtYXJnaW46IDVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 62443:
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/bank-pledge/bank-pledge.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankPledgeComponent": () => (/* binding */ BankPledgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view-file/view-file.component */ 32298);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/directive/decimal-number.directive */ 55134);














const _c0 = ["fileInput"];
function BankPledgeComponent_ng_container_27_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_5_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Value must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_5_ng_container_1_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BankPledgeComponent_ng_container_27_ng_container_5_ng_container_1_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_0_0 = item_r4.get("pledgeAmountJod")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_1_0 = item_r4.get("pledgeAmountJod")) == null ? null : tmp_1_0.errors["min"]);
  }
}
function BankPledgeComponent_ng_container_27_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r4 == null ? null : (tmp_0_0 = item_r4.get("pledgeAmountJod")) == null ? null : tmp_0_0.invalid) && (item_r4 == null ? null : (tmp_0_0 = item_r4.get("pledgeAmountJod")) == null ? null : tmp_0_0.touched) || (item_r4 == null ? null : (tmp_0_0 = item_r4.get("pledgeAmountJod")) == null ? null : tmp_0_0.dirty));
  }
}
function BankPledgeComponent_ng_container_27_ng_container_9_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_9_ng_container_1_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_0_0 = item_r4.get("currencyId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function BankPledgeComponent_ng_container_27_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r4 == null ? null : (tmp_0_0 = item_r4.get("currencyId")) == null ? null : tmp_0_0.invalid) && (item_r4 == null ? null : (tmp_0_0 = item_r4.get("currencyId")) == null ? null : tmp_0_0.touched) || (item_r4 == null ? null : (tmp_0_0 = item_r4.get("currencyId")) == null ? null : tmp_0_0.dirty));
  }
}
function BankPledgeComponent_ng_container_27_ng_container_13_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_13_ng_container_1_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankPledgeDate")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function BankPledgeComponent_ng_container_27_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_13_ng_container_1_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankPledgeDate")) == null ? null : tmp_0_0.invalid) && (item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankPledgeDate")) == null ? null : tmp_0_0.touched) || (item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankPledgeDate")) == null ? null : tmp_0_0.dirty));
  }
}
function BankPledgeComponent_ng_container_27_ng_container_17_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_17_ng_container_1_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function BankPledgeComponent_ng_container_27_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_17_ng_container_1_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankId")) == null ? null : tmp_0_0.invalid) && (item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankId")) == null ? null : tmp_0_0.touched) || (item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankId")) == null ? null : tmp_0_0.dirty));
  }
}
function BankPledgeComponent_ng_container_27_ng_container_21_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_21_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Input allows only digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_21_ng_container_1_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BankPledgeComponent_ng_container_27_ng_container_21_ng_container_1_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankPledgeNumber")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_1_0 = item_r4.get("bankPledgeNumber")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function BankPledgeComponent_ng_container_27_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_21_ng_container_1_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankPledgeNumber")) == null ? null : tmp_0_0.invalid) && (item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankPledgeNumber")) == null ? null : tmp_0_0.touched) || (item_r4 == null ? null : (tmp_0_0 = item_r4.get("bankPledgeNumber")) == null ? null : tmp_0_0.dirty));
  }
}
function BankPledgeComponent_ng_container_27_input_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BankPledgeComponent_ng_container_27_input_24_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.onFileChange($event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", i_r5 + "file-input");
  }
}
function BankPledgeComponent_ng_container_27_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BankPledgeComponent_ng_container_27_ng_container_27_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r4 = ctx_r44.$implicit;
      const i_r5 = ctx_r44.index;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.fileAction(item_r4 == null ? null : item_r4.value.attachment, i_r5, "view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BankPledgeComponent_ng_container_27_ng_container_27_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r4 = ctx_r47.$implicit;
      const i_r5 = ctx_r47.index;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.fileAction(item_r4 == null ? null : item_r4.value.attachment, i_r5, "delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_28_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BankPledgeComponent_ng_container_27_ng_container_28_ng_container_1_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_0_0 = item_r4.get("attachment")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function BankPledgeComponent_ng_container_27_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_28_ng_container_1_Template, 3, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r4 == null ? null : (tmp_0_0 = item_r4.get("attachment")) == null ? null : tmp_0_0.invalid) && (item_r4 == null ? null : (tmp_0_0 = item_r4.get("attachment")) == null ? null : tmp_0_0.touched) || (item_r4 == null ? null : (tmp_0_0 = item_r4.get("attachment")) == null ? null : tmp_0_0.dirty));
  }
}
function BankPledgeComponent_ng_container_27_ng_container_30_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BankPledgeComponent_ng_container_27_ng_container_30_ng_container_1_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r53.removeItem(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_container_30_ng_container_1_Template, 2, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](32);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx_r14.otherData == null ? null : ctx_r14.otherData.reverse))("ngIfElse", _r15);
  }
}
function BankPledgeComponent_ng_container_27_ng_template_31_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BankPledgeComponent_ng_container_27_ng_template_31_ng_container_0_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61);
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r59.removeItem(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_template_31_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BankPledgeComponent_ng_container_27_ng_template_31_ng_template_1_ng_container_0_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      const item_r4 = ctx_r64.$implicit;
      const i_r5 = ctx_r64.index;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r63.reverse(item_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function BankPledgeComponent_ng_container_27_ng_template_31_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BankPledgeComponent_ng_container_27_ng_template_31_ng_template_1_ng_container_0_Template, 2, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r4.get("isReversed").value);
  }
}
function BankPledgeComponent_ng_container_27_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BankPledgeComponent_ng_container_27_ng_template_31_ng_container_0_Template, 2, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BankPledgeComponent_ng_container_27_ng_template_31_ng_template_1_Template, 1, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4.get("isNew").value)("ngIfElse", _r57);
  }
}
function BankPledgeComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 17)(2, "td")(3, "div", 18)(4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BankPledgeComponent_ng_container_27_Template_input_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r68.sendAmount());
    })("input", function BankPledgeComponent_ng_container_27_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r70.handleAmountFocus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, BankPledgeComponent_ng_container_27_ng_container_5_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td")(7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ng-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, BankPledgeComponent_ng_container_27_ng_container_9_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td")(11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, BankPledgeComponent_ng_container_27_ng_container_13_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td")(15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "ng-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, BankPledgeComponent_ng_container_27_ng_container_17_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td")(19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, BankPledgeComponent_ng_container_27_ng_container_21_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td")(23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, BankPledgeComponent_ng_container_27_input_24_Template, 1, 1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, BankPledgeComponent_ng_container_27_ng_container_27_Template, 3, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, BankPledgeComponent_ng_container_27_ng_container_28_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, BankPledgeComponent_ng_container_27_ng_container_30_Template, 2, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, BankPledgeComponent_ng_container_27_ng_template_31_Template, 3, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_14_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_1_0 = item_r4.get("pledgeAmountJod")) == null ? null : tmp_1_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r0.currencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_3_0 = item_r4.get("currencyId")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_4_0 = item_r4.get("bankPledgeDate")) == null ? null : tmp_4_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r0.banks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_6_0 = item_r4.get("bankId")) == null ? null : tmp_6_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_7_0 = item_r4.get("bankPledgeNumber")) == null ? null : tmp_7_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disable-elm", ctx_r0.otherData.refund);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4.get("isNew").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-success", item_r4 == null ? null : item_r4.value.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("for", i_r5 + "file-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((item_r4 == null ? null : item_r4.value.attachment) && (item_r4 == null ? null : item_r4.value.attachment) || "Upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : item_r4.value.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r4 == null ? null : (tmp_14_0 = item_r4.get("attachment")) == null ? null : tmp_14_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.otherData.refund);
  }
}
function BankPledgeComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39)(1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Press Tab to add new row ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BankPledgeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42)(1, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cashier Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BankPledgeComponent_div_29_Template_textarea_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r71._subjectService.cashierNote.next($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BankPledgeComponent_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 45);
  }
}
class BankPledgeComponent {
  onKeydownHandler() {
    this.handleTabKeyDown();
  }
  constructor(fb, _modalService, _activeModal, _commonService, _subjectService, _collectService) {
    this.fb = fb;
    this._modalService = _modalService;
    this._activeModal = _activeModal;
    this._commonService = _commonService;
    this._subjectService = _subjectService;
    this._collectService = _collectService;
    this.invalidFileType = '';
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    this.banks = [];
    this.filesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.amountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.formValueEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.uploadedFiles = [];
    this.filesArray = [];
    this.colllectedViaMachine = false;
  }
  ngOnInit() {
    this.colllectedViaMachine = JSON.parse(localStorage.getItem('pos_mc'));
    this.initForm();
    this.bankPledgeForm.statusChanges.subscribe(x => {
      let touched;
      if (this.otherData?.reverse) touched = x == 'VALID' || x == 'DISABLED' ? false : true;else touched = x == 'VALID' ? false : true;
      this.bankPledgeForm.markAllAsTouched();
      this.formValueEvent.emit({
        values: this.bankPledgeForm.getRawValue(),
        touched
      });
    });
    // ONLY IN CASE OF Refund
    if (this.otherData?.refund) this.pledgeArrControls.disable({
      emitEvent: false
    });
    // ONLY IN CASE OF REVERSE
    if (this.otherData?.reverse) {
      this.disableReversedItems();
    }
  }
  disableReversedItems() {
    this.pledgeArrControls.controls.forEach(control => {
      // THIS OPERATION IS DONE BECAUSE WHILE REVERSE IN BELOW CONTROLS THE VALUE IS FULL URL OF FILE FROM SERVER,
      // SO IN TEMPLATE WE NEED TO SHOW TEXT OF ATTACHMENT ONLY INSTEAD OF FULL URL.
      let pledgeAttachment = control.get('attachment');
      // PUSH VALUES ARRAY TO MANUPLATE THE ARRAY ACCORDING TO FORMARRY LENGTH
      let pledgeAttachmentValue = pledgeAttachment.getRawValue();
      this.filesArray.push(pledgeAttachmentValue);
      if (pledgeAttachmentValue) {
        pledgeAttachment.setValue('Attachment');
      }
      // END HERE
      let isNew = control.get('isNew').value;
      if (!isNew) control.disable();
    });
  }
  initForm() {
    this.bankPledgeForm = this.fb.group({
      pledgeArray: this.fb.array([this.pledgeFormControls()])
    });
    if (this.recentFormValues?.bankPledge?.pledgeArray?.length) {
      let values = this.recentFormValues['bankPledge'].pledgeArray;
      let formArray = this.bankPledgeForm.get('pledgeArray');
      formArray.removeAt(0);
      for (let item of values) {
        formArray.push(this.pledgeFormControls(item));
      }
      let filesSub = this._subjectService.bankPledgeFiles.subscribe(files => {
        if (files?.length > 0) {
          this.filesArray = files;
        }
      });
      this.filesSubscription.add(filesSub);
    }
  }
  ngOnDestroy() {
    if (this.recentFormValues?.bankPledge?.pledgeArray[0]?.pledgeAmountJod > 0) {
      this.formValueEvent.emit({
        values: this.bankPledgeForm.getRawValue(),
        touched: false
      });
      this._subjectService.bankPledgeFiles.next(this.filesArray);
      this.filesSubscription.unsubscribe();
    }
  }
  handleAmountFocus() {
    this.bankPledgeForm.markAllAsTouched();
  }
  pledgeFormControls(item) {
    //let lineNew = false;
    //if (item?.lineNew) lineNew = true;
    //else if (item?.isNew == undefined || item?.isNew == null) lineNew = true;
    console.log(item?.isNew);
    return this.fb.group({
      pledgeAmountJod: [item?.pledgeAmountJod || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(0.0000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      bankPledgeDate: [item?.bankPledgeDate || new Date().toISOString().substring(0, 10), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      bankId: [item?.bankId || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      bankPledgeNumber: [item?.bankPledgeNumber || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]*$')]],
      pledgeAttachment: [item?.pledgeAttachment || ''],
      attachment: [item?.attachment || ''],
      currencyId: [9001, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      isReversed: [(item?.isReversed ?? item?.isReversed) || false],
      isNew: [item?.isNew ?? (!this.otherData?.reverse ? true : +item?.pledgeAmountJod > 0 ? false : true)],
      lineNew: [item?.lineNew ?? (!this.otherData?.reverse ? true : +item?.pledgeAmountJod > 0 ? false : true)]
    });
  }
  fileAction(fileName, index, action) {
    if (action == 'view') {
      const modelRef = this._modalService.open(_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewFileComponent, {
        size: 'md'
      });
      let isReversed = this.pledgeArrControls.at(index).get('isReversed').getRawValue();
      let isNew = this.pledgeArrControls.at(index).get('isNew').getRawValue();
      if (!this.otherData?.reverse || isReversed === false) {
        let file = this.filesArray[index];
        if (isNew) modelRef.componentInstance.imageUploadedView = file;else modelRef.componentInstance.imageUploadedView = {
          viewOnly: true,
          url: file
        };
      } else {
        // IN CASE OF REVERSE ONLY
        if (isReversed === null || isReversed) {
          let file = this.filesArray[index];
          modelRef.componentInstance.imageUploadedView = {
            viewOnly: true,
            url: file
          };
        }
      }
    } else {
      if (this.otherData?.reverse) {
        let isNew = this.pledgeArrControls.at(index).get('isNew').getRawValue();
        if (!isNew) return;
      }
      this.filesArray.splice(index, 1, {});
      let inputRef = this.inputRefList.toArray()[index];
      this.bankPledgeForm.get('pledgeArray').at(index).get('attachment')?.setValue('');
      this.bankPledgeForm.get('pledgeArray').at(index).get('pledgeAttachment')?.setValue('');
      inputRef.nativeElement.value = null;
      this.removeFileFromLocalStorage(index);
    }
  }
  removeFileFromLocalStorage(index) {
    let files = localStorage.getItem('bpUploadedFiles');
    if (files) {
      this.uploadedFiles = [...JSON.parse(files)];
      this.uploadedFiles.splice(index, 1, 'noFile');
      localStorage.setItem('bpUploadedFiles', JSON.stringify(this.uploadedFiles));
    }
  }
  onFileChange(event, i) {
    let files = [...event.target.files];
    let formArray = this.bankPledgeForm.get('pledgeArray');
    if (files.length > 0) {
      let isInvalid = this.checkInvalidImageFormat(files);
      if (!isInvalid) {
        files.forEach(file => {
          this.uploadFile(file, i);
          this._commonService.fileToBase64(file).then(response => {
            this.filesArray.splice(i, 1, response);
            formArray.at(i).get('attachment')?.setValue('Attachment');
          });
        });
      }
    }
  }
  uploadFile(file, index) {
    const formData = new FormData();
    formData.append('Folder', 'BankPledge');
    formData.append('File', file);
    this._collectService.uploadFile(formData).subscribe(response => {
      if (response.isSuccess) {
        this.uploadedFiles.splice(index, 1, response['data']);
        this.bankPledgeForm.get('pledgeArray').at(index).get('pledgeAttachment')?.setValue(response['data']);
        localStorage.setItem('bpUploadedFiles', JSON.stringify(this.uploadedFiles));
      }
    });
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
        this.bankPledgeForm.get('attachment')?.patchValue('');
        setTimeout(() => this.invalidFileType = '', 3000);
        break;
      }
    }
    return invalidExtentions;
  }
  removeItem(i) {
    if (this.otherData.refund) return;
    this.filesArray.splice(i, 1);
    this.pledgeArrControls.removeAt(i);
    this.removeFileFromLocalStorage(i);
    this.sendAmount();
  }
  get pledgeArrControls() {
    return this.bankPledgeForm ? this.bankPledgeForm.get('pledgeArray') : null;
  }
  handleTabKeyDown() {
    if (this.otherData.refund || this.bankPledgeForm.invalid) {
      return;
    }
    if (this.otherData['amountExceeded']) {
      return;
    }
    if (!this.otherData?.isMultiCollect) this.addNewRow();
  }
  addNewRow() {
    if (this.getDisabledFormGroupCount() == 2 && this.otherData?.reverse) {
      let obj = {
        isReversed: false,
        isNew: true,
        lineNew: true
      };
      this.pledgeArrControls.push(this.pledgeFormControls(obj));
      this.bankPledgeForm.markAsUntouched();
    }
  }
  getDisabledFormGroupCount() {
    let disabledCount = 0;
    this.pledgeArrControls.controls.forEach(control => {
      if (control.disabled) disabledCount++;
    });
    return disabledCount;
  }
  handleSubmit() {
    if (this.bankPledgeForm.invalid) {
      this.bankPledgeForm.getRawValue();
      this.bankPledgeForm.markAllAsTouched();
    } else {
      console.log(this.bankPledgeForm.getRawValue());
      this.formValueEvent.emit({
        values: this.bankPledgeForm.getRawValue(),
        submit: true
      });
    }
  }
  get f() {
    return this.bankPledgeForm.controls;
  }
  sendAmount() {
    this.calculateAmount();
  }
  calculateAmount() {
    let amount = 0;
    for (let item of this.pledgeArrControls.controls) {
      let formGroup = item;
      amount += +formGroup.controls['pledgeAmountJod'].getRawValue();
    }
    this.amountEvent.emit({
      amount
    });
  }
  reverse(item, index) {
    const previousFormGroup = this.pledgeArrControls.at(index);
    const newFormGroup = this.fb.group({});
    Object.keys(previousFormGroup.controls).forEach(controlName => {
      const controlValue = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(previousFormGroup.get(controlName)?.value);
      newFormGroup.addControl(controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(controlValue));
    });
    let negativeValue = previousFormGroup.get('pledgeAmountJod').value * -1;
    newFormGroup.patchValue({
      pledgeAmountJod: negativeValue,
      isReversed: true,
      lineNew: true
    });
    previousFormGroup.get('isReversed').setValue(true);
    previousFormGroup.get('lineNew').setValue(false);
    this.pledgeArrControls.insert(index + 1, newFormGroup);
    let attachment = this.filesArray[index];
    this.filesArray.splice(index + 1, 0, attachment);
    this.pledgeArrControls.at(index).disable();
    this.pledgeArrControls.at(index + 1).disable();
    this.sendAmount();
  }
  resetForm() {
    this.bankPledgeForm.reset();
    this.bankPledgeForm.markAsUntouched();
    this.formValueEvent.emit({
      values: this.bankPledgeForm.getRawValue(),
      touched: false,
      reset: true
    });
    this.amountEvent.emit({
      amount: 0
    });
  }
  closeModal() {
    if (this._activeModal) this._activeModal.close();else this._commonService.NavigateToRoute(`/${this.otherData?.redirectRoute}`);
  }
}
BankPledgeComponent.ɵfac = function BankPledgeComponent_Factory(t) {
  return new (t || BankPledgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_3__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_collect_service__WEBPACK_IMPORTED_MODULE_4__.CollectService));
};
BankPledgeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: BankPledgeComponent,
  selectors: [["bankPledge"]],
  viewQuery: function BankPledgeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.inputRefList = _t);
    }
  },
  hostBindings: function BankPledgeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown.tab", function BankPledgeComponent_keydown_tab_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    banks: "banks",
    currencies: "currencies",
    otherData: "otherData",
    recentFormValues: "recentFormValues",
    isPending: "isPending"
  },
  outputs: {
    amountEvent: "amountEvent",
    formValueEvent: "formValueEvent"
  },
  decls: 37,
  vars: 8,
  consts: [[1, "tab-item"], [1, "row"], [3, "formGroup", "submit"], [1, "col-md-12"], [1, "card-table"], [1, ""], [1, "table"], ["width", "15%"], ["width", "20%"], ["formArrayName", "pledgeArray", 4, "ngFor", "ngForOf"], ["class", "col-md-12 d-flex mt-2", 4, "ngIf"], ["class", "col-12 mb-4", 4, "ngIf"], [1, "btns-group", "my-2", "me-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], ["class", "fa-solid fa-circle-notch fa-spin", 4, "ngIf"], ["formArrayName", "pledgeArray"], [3, "formGroupName"], [1, "form-group"], ["type", "number", "placeholder", "Amount", "formControlName", "pledgeAmountJod", "appDecimalNumber", "", 1, "form-control", 3, "change", "input"], [4, "ngIf"], [1, "ngselect-curruncy", "form-group"], ["placeholder", "Currency", "bindLabel", "name", "bindValue", "lookupId", "formControlName", "currencyId", 3, "items"], ["type", "date", "formControlName", "bankPledgeDate", 1, "form-control"], ["id", "bankId", "placeholder", " Select Bank ", "bindLabel", "name", "bindValue", "id", "formControlName", "bankId", 3, "items"], ["type", "text", "formControlName", "bankPledgeNumber", 1, "form-control"], [1, "custom-file", "align-items-center"], ["type", "file", "class", "file-input__input", 3, "id", "change", 4, "ngIf"], [1, "file-input__label"], ["reverseCase", ""], ["class", "error", 4, "ngIf"], [1, "error"], ["type", "file", 1, "file-input__input", 3, "id", "change"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"], [4, "ngIf", "ngIfElse"], ["src", "assets/images/trash.png", "alt", "", 1, "cursor-pointer", 2, "width", "25px", 3, "click"], ["reverseTemp", ""], [1, "cursor-pointer", "green-clr", "fas", "fa-rotate-left", "font-20", 3, "click"], [1, "col-md-12", "d-flex", "mt-2"], [1, "blue-clr", "d-flex", "align-items-center", "fw-500", "gap-1"], [1, "fa-solid", "fa-circle-plus", "primary-clr", "fa-2x"], [1, "col-12", "mb-4"], [1, "input-label"], [1, "form-control", 3, "change"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function BankPledgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function BankPledgeComponent_Template_form_submit_2_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "table", 6)(8, "thead")(9, "tr")(10, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Pledge Amount*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Currency*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Bank Pledge Date*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Bank Name*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Bank Pledge");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " Number*");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Pledge Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, BankPledgeComponent_ng_container_27_Template, 33, 18, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, BankPledgeComponent_div_28_Template, 4, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, BankPledgeComponent_div_29_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 3)(31, "div", 12)(32, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BankPledgeComponent_Template_button_click_32_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, BankPledgeComponent_i_36_Template, 1, 0, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.bankPledgeForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.pledgeArrControls == null ? null : ctx.pledgeArrControls.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.otherData == null ? null : ctx.otherData.reverse);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.otherData.collectionType == 7001 || ctx.otherData.collectionType == 7004 || ctx.otherData.collectionType == 7005 || ctx.otherData.collectionType == 7008 || ctx.otherData.collectionType == 7009 || ctx.otherData.collectionType == 7002 && ctx.otherData.refund);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.colllectedViaMachine);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isPending);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.isPending && "Saving" || "Confirm", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isPending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_5__.DecimalNumberDirective],
  styles: [".form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n  .ng-dropdown-panel {\n  z-index: 9999999 !important;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 0px 10px 15px !important;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n}\n\n\n.custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  height: 46px;\n  border-radius: 0.375rem;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n\n.file-input__input[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.file-input__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-500);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvYmFuay1wbGVkZ2UvYmFuay1wbGVkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQU1BO0VBQ0UsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLHNDQUFBO0FBSEY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdBLFNBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gIH1cblxuICAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gIHotaW5kZXg6IDk5OTk5OTkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE1cHggIWltcG9ydGFudDtcbn1cbi5jYXJkLXRhYmxlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jYXJkLXRhYmxlIHRkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb3JtLWNoZWNrLWlucHV0IHtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLyoqKkZJTEUqL1xuLmN1c3RvbS1maWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZmlsZS1pbnB1dF9faW5wdXQge1xuICB3aWR0aDogMC4xcHg7XG4gIGhlaWdodDogMC4xcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5maWxlLWlucHV0X19sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 44303:
/*!**********************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/bank-transfer/bank-transfer.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankTransferComponent": () => (/* binding */ BankTransferComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view-file/view-file.component */ 32298);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/collect.service */ 43346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/directive/character.directive */ 80145);















const _c0 = ["fileInput"];
function BankTransferComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BankTransferComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_5_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Value must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_5_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, BankTransferComponent_ng_container_32_ng_container_5_ng_container_1_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("paidAmountJod")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_1_0 = item_r8.get("paidAmountJod")) == null ? null : tmp_1_0.errors["min"]);
  }
}
function BankTransferComponent_ng_container_32_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("paidAmountJod")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("paidAmountJod")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("paidAmountJod")) == null ? null : tmp_0_0.dirty));
  }
}
function BankTransferComponent_ng_container_32_ng_container_9_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_9_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("currencyId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function BankTransferComponent_ng_container_32_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("currencyId")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("currencyId")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("currencyId")) == null ? null : tmp_0_0.dirty));
  }
}
function BankTransferComponent_ng_container_32_ng_container_13_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_13_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("transfereDate")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function BankTransferComponent_ng_container_32_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_13_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("transfereDate")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("transfereDate")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("transfereDate")) == null ? null : tmp_0_0.dirty));
  }
}
function BankTransferComponent_ng_container_32_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r34 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((item_r34 == null ? null : item_r34.name) + " - " + (item_r34 == null ? null : item_r34.accountNumber));
  }
}
function BankTransferComponent_ng_container_32_ng_container_18_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_18_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("markaziaBankAccountId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function BankTransferComponent_ng_container_32_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_18_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("markaziaBankAccountId")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("markaziaBankAccountId")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("markaziaBankAccountId")) == null ? null : tmp_0_0.dirty));
  }
}
function BankTransferComponent_ng_container_32_ng_container_22_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_22_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input allows only digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_22_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, BankTransferComponent_ng_container_32_ng_container_22_ng_container_1_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("transfereReference")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_1_0 = item_r8.get("transfereReference")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function BankTransferComponent_ng_container_32_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_22_ng_container_1_Template, 3, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("transfereReference")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("transfereReference")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("transfereReference")) == null ? null : tmp_0_0.dirty));
  }
}
function BankTransferComponent_ng_container_32_input_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BankTransferComponent_ng_container_32_input_25_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r44.onFileChange($event, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", i_r9 + "file-input");
  }
}
function BankTransferComponent_ng_container_32_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BankTransferComponent_ng_container_32_ng_container_28_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const item_r8 = ctx_r49.$implicit;
      const i_r9 = ctx_r49.index;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r48.fileAction(item_r8 == null ? null : item_r8.value.attachment, i_r9, "view"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BankTransferComponent_ng_container_32_ng_container_28_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const item_r8 = ctx_r52.$implicit;
      const i_r9 = ctx_r52.index;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r51.fileAction(item_r8 == null ? null : item_r8.value.attachment, i_r9, "delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_29_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, BankTransferComponent_ng_container_32_ng_container_29_ng_container_1_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("attachment")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function BankTransferComponent_ng_container_32_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_29_ng_container_1_Template, 3, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("attachment")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("attachment")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("attachment")) == null ? null : tmp_0_0.dirty));
  }
}
function BankTransferComponent_ng_container_32_ng_container_33_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BankTransferComponent_ng_container_32_ng_container_33_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_33_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardPayerName")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function BankTransferComponent_ng_container_32_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_ng_container_33_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardPayerName")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardPayerName")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardPayerName")) == null ? null : tmp_0_0.dirty));
  }
}
function BankTransferComponent_ng_container_32_td_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BankTransferComponent_ng_container_32_td_37_ng_container_1_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r64.removeItem(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function BankTransferComponent_ng_container_32_td_37_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BankTransferComponent_ng_container_32_td_37_ng_template_2_ng_container_0_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r70.removeItem(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function BankTransferComponent_ng_container_32_td_37_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BankTransferComponent_ng_container_32_td_37_ng_template_2_ng_template_1_ng_container_0_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      const item_r8 = ctx_r75.$implicit;
      const i_r9 = ctx_r75.index;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r74.reverse(item_r8, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function BankTransferComponent_ng_container_32_td_37_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, BankTransferComponent_ng_container_32_td_37_ng_template_2_ng_template_1_ng_container_0_Template, 2, 0, "ng-container", 10);
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !item_r8.get("isReversed").value);
  }
}
function BankTransferComponent_ng_container_32_td_37_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, BankTransferComponent_ng_container_32_td_37_ng_template_2_ng_container_0_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_td_37_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8.get("isNew").value)("ngIfElse", _r68);
  }
}
function BankTransferComponent_ng_container_32_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BankTransferComponent_ng_container_32_td_37_ng_container_1_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, BankTransferComponent_ng_container_32_td_37_ng_template_2_Template, 3, 2, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r20.otherData == null ? null : ctx_r20.otherData.reverse))("ngIfElse", _r62);
  }
}
function BankTransferComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tr", 21)(2, "td")(3, "div", 22)(4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BankTransferComponent_ng_container_32_Template_input_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r79.sendAmount());
    })("input", function BankTransferComponent_ng_container_32_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r80);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r81.handleAmountFocus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, BankTransferComponent_ng_container_32_ng_container_5_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td")(7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ng-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, BankTransferComponent_ng_container_32_ng_container_9_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td")(11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, BankTransferComponent_ng_container_32_ng_container_13_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td")(15, "div", 22)(16, "ng-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, BankTransferComponent_ng_container_32_ng_template_17_Template, 2, 1, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, BankTransferComponent_ng_container_32_ng_container_18_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td")(20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, BankTransferComponent_ng_container_32_ng_container_22_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "td")(24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, BankTransferComponent_ng_container_32_input_25_Template, 1, 1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, BankTransferComponent_ng_container_32_ng_container_28_Template, 3, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, BankTransferComponent_ng_container_32_ng_container_29_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "td")(31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, BankTransferComponent_ng_container_32_ng_container_33_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "td")(35, "div", 34)(36, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BankTransferComponent_ng_container_32_Template_input_change_36_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r80);
      const i_r9 = restoredCtx.index;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r82.isSameCustomer($event, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, BankTransferComponent_ng_container_32_td_37_Template, 4, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_14_0;
    let tmp_15_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_1_0 = item_r8.get("paidAmountJod")) == null ? null : tmp_1_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx_r2.currencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = item_r8.get("currencyId")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_4_0 = item_r8.get("transfereDate")) == null ? null : tmp_4_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx_r2.accounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_6_0 = item_r8.get("markaziaBankAccountId")) == null ? null : tmp_6_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_7_0 = item_r8.get("transfereReference")) == null ? null : tmp_7_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disable-elm", ctx_r2.otherData.refund);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8.get("isNew").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-success", item_r8 == null ? null : item_r8.value.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("for", i_r9 + "file-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((item_r8 == null ? null : item_r8.value.attachment) && (item_r8 == null ? null : item_r8.value.attachment) || "Upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : item_r8.value.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_14_0 = item_r8.get("attachment")) == null ? null : tmp_14_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_15_0 = item_r8.get("cardPayerName")) == null ? null : tmp_15_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r2.otherData == null ? null : ctx_r2.otherData.isMultiCollect) && !ctx_r2.otherData.refund);
  }
}
function BankTransferComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 46)(1, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Press Tab to add payment in another currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function BankTransferComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Cashier Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BankTransferComponent_div_34_Template_textarea_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r83._subjectService.cashierNote.next($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function BankTransferComponent_i_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 52);
  }
}
class BankTransferComponent {
  onKeydownHandler() {
    this.handleTabKeyDown();
  }
  constructor(fb, _modalService, _activeModal, _commonService, _subjectService, _collectService) {
    this.fb = fb;
    this._modalService = _modalService;
    this._activeModal = _activeModal;
    this._commonService = _commonService;
    this._subjectService = _subjectService;
    this._collectService = _collectService;
    this.invalidFileType = '';
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    this.accounts = [];
    this.filesArray = [];
    this.uploadedFiles = [];
    this.filesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.amountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.formValueEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.colllectedViaMachine = false;
  }
  ngOnInit() {
    this.colllectedViaMachine = JSON.parse(localStorage.getItem('pos_mc'));
    this.getBankAccounts();
    this.accounts = [{
      id: 1,
      name: 78954
    }, {
      id: 1,
      name: 78954
    }];
    this.initForm();
    this.bankTransferForm.statusChanges.subscribe(x => {
      let touched;
      if (this.otherData?.reverse) touched = x == 'VALID' || x == 'DISABLED' ? false : true;else touched = x == 'VALID' ? false : true;
      this.bankTransferForm.markAllAsTouched();
      this.formValueEvent.emit({
        values: this.bankTransferForm.getRawValue(),
        touched
      });
    });
    // ONLY IN CASE OF Refund
    if (this.otherData?.refund) this.bankArrControls.disable({
      emitEvent: false
    });
    // ONLY IN CASE OF REVERSE
    if (this.otherData?.reverse) {
      this.disableReversedItems();
    }
  }
  disableReversedItems() {
    this.bankArrControls.controls.forEach(control => {
      // THIS OPERATION IS DONE BECAUSE WHILE REVERSE IN BELOW CONTROLS THE VALUE IS FULL URL OF FILE FROM SERVER,
      // SO IN TEMPLATE WE NEED TO SHOW TEXT OF ATTACHMENT ONLY INSTEAD OF FULL URL.
      let attachment = control.get('attachment');
      // PUSH VALUES ARRAY TO MANUPLATE THE ARRAY ACCORDING TO FORMARRY LENGTH
      let attachmentValue = attachment.getRawValue();
      this.filesArray.push(attachmentValue);
      if (attachmentValue) {
        attachment.setValue('Attachment');
      }
      // END HERE
      let isNew = control.get('isNew').value;
      if (!isNew) control.disable();
    });
  }
  getBankAccounts() {
    let params = `?AccountType=15001&currencyId=9001&Status=2001&PageNo=0&PageSize=1000`;
    this._collectService.getBankAccounts(params).subscribe(response => {
      if (response.isSuccess) {
        this.accounts = response['data'].map(x => {
          return {
            id: x.accountId,
            name: x.bankNameEnglish,
            accountNumber: x.accountNumber
          };
        });
        console.log(response);
      }
    });
  }
  initForm() {
    this.bankTransferForm = this.fb.group({
      bankArray: this.fb.array([this.bankFormControls()])
    });
    if (this.recentFormValues?.bankTransfer?.bankArray?.length) {
      let values = this.recentFormValues['bankTransfer'].bankArray;
      let formArray = this.bankTransferForm.get('bankArray');
      formArray.removeAt(0);
      for (let item of values) {
        formArray.push(this.bankFormControls(item));
      }
      let filesSub = this._subjectService.bankTransferFiles.subscribe(files => {
        if (files?.length > 0) {
          this.filesArray = files;
        }
      });
      this.filesSubscription.add(filesSub);
    }
  }
  ngOnDestroy() {
    if (this.recentFormValues?.bankTransfer?.bankArray[0]?.paidAmountJod > 0) {
      this.formValueEvent.emit({
        values: this.bankTransferForm.getRawValue(),
        touched: false
      });
      this._subjectService.bankTransferFiles.next(this.filesArray);
      this.filesSubscription.unsubscribe();
    }
  }
  handleAmountFocus() {
    this.bankTransferForm.markAllAsTouched();
  }
  bankFormControls(item) {
    if (item) {
      return this.fb.group({
        sameCustomer: [item?.sameCustomer],
        paidAmountJod: [item?.paidAmountJod, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.0000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        transfereDate: [item?.transfereDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        markaziaBankAccountId: [item?.markaziaBankAccountId, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        transfereReference: [item?.transfereReference, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]*$')]],
        transfereAttachment: [item?.transfereAttachment],
        attachment: [item?.attachment],
        cardPayerName: [item?.cardPayerName, this.otherData.collectionType != 7004 && [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        currencyId: [item?.currencyId, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        isReversed: [(item?.isReversed ?? item?.isReversed) || false],
        isNew: [(item?.isNew ?? item?.isNew) || false],
        lineNew: [(item?.lineNew ?? item?.lineNew) || false]
      });
    } else {
      return this.fb.group({
        sameCustomer: [true],
        paidAmountJod: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.0000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        transfereDate: [new Date().toISOString().substring(0, 10), [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        markaziaBankAccountId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        transfereReference: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]*$')]],
        transfereAttachment: [''],
        attachment: [''],
        cardPayerName: [localStorage.getItem('pmcn') || 'No Customer', this.otherData.collectionType != 7004 && [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        currencyId: [9001, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        isReversed: [false],
        isNew: [true],
        lineNew: [true]
      });
    }
  }
  fileAction(fileName, index, action) {
    if (action == 'view') {
      const modelRef = this._modalService.open(_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewFileComponent, {
        size: 'md'
      });
      let isReversed = this.bankArrControls.at(index).get('isReversed').getRawValue();
      let isNew = this.bankArrControls.at(index).get('isNew').getRawValue();
      if (!this.otherData?.reverse || isReversed === false) {
        let file = this.filesArray[index];
        if (isNew) modelRef.componentInstance.imageUploadedView = file;else modelRef.componentInstance.imageUploadedView = {
          viewOnly: true,
          url: file
        };
      } else {
        // IN CASE OF REVERSE ONLY
        if (isReversed === null || isReversed) {
          let file = this.filesArray[index];
          modelRef.componentInstance.imageUploadedView = {
            viewOnly: true,
            url: file
          };
        }
      }
    } else {
      if (this.otherData?.reverse) {
        let isNew = this.bankArrControls.at(index).get('isNew').getRawValue();
        if (!isNew) return;
      }
      this.filesArray.splice(index, 1, {});
      let inputRef = this.inputRefList.toArray()[index];
      this.bankTransferForm.get('bankArray').at(index).get('attachment')?.setValue('');
      this.bankTransferForm.get('bankArray').at(index).get('transfereAttachment')?.setValue('');
      inputRef.nativeElement.value = null;
      this.removeFileFromLocalStorage(index);
    }
  }
  removeFileFromLocalStorage(index) {
    let files = localStorage.getItem('bpUploadedFiles');
    if (files) {
      this.uploadedFiles = [...JSON.parse(localStorage.getItem('btUploadedFiles'))];
      this.uploadedFiles.splice(index, 1, 'noFile');
      localStorage.setItem('btUploadedFiles', JSON.stringify(this.uploadedFiles));
    }
  }
  onFileChange(event, i) {
    let files = [...event.target.files];
    //this.filesArray.splice(i, 1);
    let formArray = this.bankTransferForm.get('bankArray');
    if (files.length > 0) {
      let isInvalid = this.checkInvalidImageFormat(files);
      if (!isInvalid) {
        files.forEach(file => {
          this.uploadFile(file, i);
          this._commonService.fileToBase64(file).then(response => {
            this.filesArray.splice(i, 1, response);
            formArray.at(i).get('attachment')?.setValue('Attachment');
          });
        });
      }
    }
  }
  uploadFile(file, index) {
    const formData = new FormData();
    formData.append('Folder', 'BankTransfer');
    formData.append('File', file);
    this._collectService.uploadFile(formData).subscribe(response => {
      if (response.isSuccess) {
        this.uploadedFiles.splice(index, 1, response['data']);
        this.bankTransferForm.get('bankArray').at(index).get('transfereAttachment')?.setValue(response['data']);
        localStorage.setItem('btUploadedFiles', JSON.stringify(this.uploadedFiles));
      }
    });
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
        this.bankTransferForm.get('attachment')?.patchValue('');
        setTimeout(() => this.invalidFileType = '', 3000);
        break;
      }
    }
    return invalidExtentions;
  }
  removeItem(i) {
    if (this.otherData.refund) return;
    this.filesArray.splice(i, 1);
    this.bankArrControls.removeAt(i);
    this.removeFileFromLocalStorage(i);
    this.sendAmount();
  }
  get bankArrControls() {
    return this.bankTransferForm ? this.bankTransferForm.get('bankArray') : null;
  }
  handleTabKeyDown() {
    if (this.otherData.refund || this.bankTransferForm.invalid) {
      return;
    }
    if (this.otherData['amountExceeded']) {
      return;
    }
    if (!this.otherData?.isMultiCollect) this.addNewRow();
  }
  addNewRow() {
    this.bankArrControls.push(this.bankFormControls());
    this.bankTransferForm.markAsUntouched();
  }
  isSameCustomer(event, index) {
    let formGroup = this.bankArrControls.at(index);
    if (event.target.checked) {
      if (this.otherData.collectionType == 7004) {
        formGroup.controls['cardPayerName'].setValue('No Customer');
      } else {
        let customerName = localStorage.getItem('pmcn');
        formGroup.controls['cardPayerName'].setValue(customerName);
      }
    } else {
      formGroup.controls['cardPayerName'].setValue('');
    }
  }
  handleSubmit() {
    if (this.bankTransferForm.invalid) {
      this.bankTransferForm.markAllAsTouched();
    } else {
      console.log(this.bankTransferForm.getRawValue());
      this.formValueEvent.emit({
        values: this.bankTransferForm.getRawValue(),
        submit: true
      });
    }
  }
  get f() {
    return this.bankTransferForm.controls;
  }
  sendAmount() {
    this.calculateAmount();
  }
  calculateAmount() {
    let amount = 0;
    for (let item of this.bankArrControls.controls) {
      let formGroup = item;
      amount += +formGroup.controls['paidAmountJod'].getRawValue();
    }
    this.amountEvent.emit({
      amount
    });
  }
  reverse(item, index) {
    const previousFormGroup = this.bankArrControls.at(index);
    const newFormGroup = this.fb.group({});
    Object.keys(previousFormGroup.controls).forEach(controlName => {
      const controlValue = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(previousFormGroup.get(controlName)?.value);
      newFormGroup.addControl(controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(controlValue));
    });
    let negativeValue = previousFormGroup.get('paidAmountJod').value * -1;
    newFormGroup.patchValue({
      paidAmountJod: negativeValue,
      isReversed: true,
      lineNew: true
    });
    previousFormGroup.get('isReversed').setValue(true);
    previousFormGroup.get('lineNew').setValue(false);
    this.bankArrControls.insert(index + 1, newFormGroup);
    let attachment = this.filesArray[index];
    this.filesArray.splice(index + 1, 0, attachment);
    this.bankArrControls.at(index).disable();
    this.bankArrControls.at(index + 1).disable();
    this.sendAmount();
  }
  resetForm() {
    this.bankArrControls.clear();
    this.bankArrControls.push(this.bankFormControls());
    this.bankTransferForm.markAsUntouched();
    this.formValueEvent.emit({
      values: this.bankTransferForm.getRawValue(),
      touched: false,
      reset: true
    });
    this.amountEvent.emit({
      amount: 0
    });
  }
  closeModal() {
    if (this._activeModal) this._activeModal.close();else this._commonService.NavigateToRoute(`/${this.otherData?.redirectRoute}`);
  }
}
BankTransferComponent.ɵfac = function BankTransferComponent_Factory(t) {
  return new (t || BankTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbActiveModal, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_3__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_collect_service__WEBPACK_IMPORTED_MODULE_4__.CollectService));
};
BankTransferComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: BankTransferComponent,
  selectors: [["bankTransfer"]],
  viewQuery: function BankTransferComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.inputRefList = _t);
    }
  },
  hostBindings: function BankTransferComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.tab", function BankTransferComponent_keydown_tab_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    accounts: "accounts",
    currencies: "currencies",
    recentFormValues: "recentFormValues",
    isPending: "isPending",
    otherData: "otherData"
  },
  outputs: {
    amountEvent: "amountEvent",
    formValueEvent: "formValueEvent"
  },
  decls: 42,
  vars: 10,
  consts: [[1, "tab-item"], [1, "row"], [1, "col-md-12", "text-end", "my-2"], ["type", "button", "class", "btn btn-trash", 3, "click", 4, "ngIf"], [3, "formGroup", "submit"], [1, "col-md-12"], [1, "card-table"], [1, ""], [1, "table"], ["width", "15%"], [4, "ngIf"], ["formArrayName", "bankArray", 4, "ngFor", "ngForOf"], ["class", "col-md-12 d-flex mt-2", 4, "ngIf"], ["class", "col-12 mb-4", 4, "ngIf"], [1, "btns-group", "my-2", "me-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], ["class", "fa-solid fa-circle-notch fa-spin", 4, "ngIf"], ["type", "button", 1, "btn", "btn-trash", 3, "click"], ["src", "assets/images/reload.png", "alt", "", 2, "width", "25px"], ["formArrayName", "bankArray"], [3, "formGroupName"], [1, "form-group"], ["type", "number", "placeholder", "Amount", "formControlName", "paidAmountJod", "appDecimalNumber", "", 1, "form-control", 3, "change", "input"], [1, "ngselect-curruncy", "form-group"], ["placeholder", "Currency", "bindLabel", "name", "bindValue", "lookupId", "formControlName", "currencyId", 3, "items"], ["type", "date", "formControlName", "transfereDate", 1, "form-control"], ["id", "accountNo", "placeholder", " Select Bank Account ", "bindLabel", "name", "bindValue", "id", "formControlName", "markaziaBankAccountId", 3, "items"], ["ng-option-tmp", ""], ["type", "text", "formControlName", "transfereReference", 1, "form-control"], [1, "custom-file", "align-items-center"], ["type", "file", "class", "file-input__input", 3, "id", "change", 4, "ngIf"], [1, "file-input__label"], ["type", "text", "placeholder", "", "formControlName", "cardPayerName", "OnlyCharacter", "", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControlName", "sameCustomer", 1, "form-check-input", 3, "change"], ["class", "error", 4, "ngIf"], [1, "error"], ["type", "file", 1, "file-input__input", 3, "id", "change"], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"], [4, "ngIf", "ngIfElse"], ["reverseCase", ""], ["src", "assets/images/trash.png", "alt", "", 1, "cursor-pointer", 2, "width", "25px", 3, "click"], ["reverseTemp", ""], [1, "cursor-pointer", "green-clr", "fas", "fa-rotate-left", "font-20", 3, "click"], [1, "col-md-12", "d-flex", "mt-2"], [1, "blue-clr", "d-flex", "align-items-center", "fw-500", "gap-1"], [1, "fa-solid", "fa-circle-plus", "primary-clr", "fa-2x"], [1, "col-12", "mb-4"], [1, "input-label"], [1, "form-control", 3, "change"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function BankTransferComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, BankTransferComponent_button_3_Template, 2, 0, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function BankTransferComponent_Template_form_submit_4_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "table", 8)(10, "thead")(11, "tr")(12, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Paid Amount*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Currency*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Transfer Date*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Markazia Bank");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Account No*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Transfer Refernece*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Transfer Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Same Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, BankTransferComponent_th_30_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, BankTransferComponent_ng_container_32_Template, 38, 19, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, BankTransferComponent_div_33_Template, 4, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, BankTransferComponent_div_34_Template, 4, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 5)(36, "div", 14)(37, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BankTransferComponent_Template_button_click_37_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, BankTransferComponent_i_41_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.otherData.reverse && !ctx.otherData.refund);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.bankTransferForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.bankArrControls == null ? null : ctx.bankArrControls.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect) && !ctx.otherData.refund);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.otherData.collectionType == 7001 || ctx.otherData.collectionType == 7004 || ctx.otherData.collectionType == 7005 || ctx.otherData.collectionType == 7008 || ctx.otherData.collectionType == 7009 || ctx.otherData.collectionType == 7002 && ctx.otherData.refund);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.colllectedViaMachine);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isPending);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.isPending && "Saving" || "Confirm", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isPending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgOptionTemplateDirective, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_5__.DecimalNumberDirective, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_6__.CharacterDirective],
  styles: [".form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n  .ng-dropdown-panel {\n  z-index: 9999999 !important;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 0px 10px 15px !important;\n  font-weight: 500;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n\n.custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  height: 46px;\n  border-radius: 0.375rem;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n\n.file-input__input[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.file-input__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-500);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvYmFuay10cmFuc2Zlci9iYW5rLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0FBREo7QUFJRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFNQTtFQUNFLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQ0FBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFLQTtFQUNFLGlCQUFBO0FBRkY7O0FBS0EsU0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNDZweDtcbiAgfVxuXG4gIC5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG46Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgei1pbmRleDogOTk5OTk5OSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDo1MDA7XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0IHtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmNhcmQtdGFibGUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqKkZJTEUqL1xuLmN1c3RvbS1maWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgZ2FwOjVweDtcbiAgYmFja2dyb3VuZDojZmZmO1xufVxuLmZpbGUtaW5wdXRfX2lucHV0IHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZmlsZS1pbnB1dF9fbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWdyYXktNTAwKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 25553:
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/card-form/card-form.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardFormComponent": () => (/* binding */ CardFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/response-modal/response-modal.component */ 77876);
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/confirm-modal/confirm-modal.component */ 87192);
/* harmony import */ var _terminal_provider_modal_terminal_provider_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terminal-provider-modal/terminal-provider-modal.component */ 94854);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/collect.service */ 43346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/http.service */ 6858);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/directive/character.directive */ 80145);



















function CardFormComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CardFormComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r6.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_5_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Value must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_5_ng_container_1_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CardFormComponent_ng_container_36_ng_container_5_ng_container_1_span_2_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardCollectionJod")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_1_0 = item_r8.get("cardCollectionJod")) == null ? null : tmp_1_0.errors["min"]);
  }
}
function CardFormComponent_ng_container_36_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardCollectionJod")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardCollectionJod")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardCollectionJod")) == null ? null : tmp_0_0.dirty));
  }
}
function CardFormComponent_ng_container_36_ng_container_9_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_9_ng_container_1_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("currencyId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CardFormComponent_ng_container_36_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("currencyId")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("currencyId")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("currencyId")) == null ? null : tmp_0_0.dirty));
  }
}
function CardFormComponent_ng_container_36_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CardFormComponent_ng_container_36_ng_container_15_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r28.handlePOSMachineClick(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_19_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_19_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input allows min and max 4 digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_19_ng_container_1_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CardFormComponent_ng_container_36_ng_container_19_ng_container_1_span_2_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardLast4Digits")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_1_0 = item_r8.get("cardLast4Digits")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function CardFormComponent_ng_container_36_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_19_ng_container_1_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardLast4Digits")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardLast4Digits")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardLast4Digits")) == null ? null : tmp_0_0.dirty));
  }
}
function CardFormComponent_ng_container_36_ng_container_23_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_23_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input allows only digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_23_ng_container_1_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CardFormComponent_ng_container_36_ng_container_23_ng_container_1_span_2_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("machineReceiptNumber")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_1_0 = item_r8.get("machineReceiptNumber")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function CardFormComponent_ng_container_36_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_23_ng_container_1_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("machineReceiptNumber")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("machineReceiptNumber")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("machineReceiptNumber")) == null ? null : tmp_0_0.dirty));
  }
}
function CardFormComponent_ng_container_36_ng_container_27_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_27_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_27_ng_container_1_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardTerminalProviderId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CardFormComponent_ng_container_36_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_27_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardTerminalProviderId")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardTerminalProviderId")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardTerminalProviderId")) == null ? null : tmp_0_0.dirty));
  }
}
function CardFormComponent_ng_container_36_ng_container_31_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_31_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input allows only alphabets");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_31_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_31_ng_container_1_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CardFormComponent_ng_container_36_ng_container_31_ng_container_1_span_2_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("machineID")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_1_0 = item_r8.get("machineID")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function CardFormComponent_ng_container_36_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_31_ng_container_1_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("machineID")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("machineID")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("machineID")) == null ? null : tmp_0_0.dirty));
  }
}
function CardFormComponent_ng_container_36_ng_container_35_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CardFormComponent_ng_container_36_ng_container_35_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_35_ng_container_1_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardPayerName")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CardFormComponent_ng_container_36_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_ng_container_35_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardPayerName")) == null ? null : tmp_0_0.invalid) && (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardPayerName")) == null ? null : tmp_0_0.touched) || (item_r8 == null ? null : (tmp_0_0 = item_r8.get("cardPayerName")) == null ? null : tmp_0_0.dirty));
  }
}
function CardFormComponent_ng_container_36_td_39_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CardFormComponent_ng_container_36_td_39_ng_container_1_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r59);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).index;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r57.removeItem(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
}
function CardFormComponent_ng_container_36_td_39_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CardFormComponent_ng_container_36_td_39_ng_template_2_ng_container_0_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r65);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).index;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r63.removeItem(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
}
function CardFormComponent_ng_container_36_td_39_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CardFormComponent_ng_container_36_td_39_ng_template_2_ng_template_1_ng_container_0_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      const item_r8 = ctx_r68.$implicit;
      const i_r9 = ctx_r68.index;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r67.reverse(item_r8, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
}
function CardFormComponent_ng_container_36_td_39_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CardFormComponent_ng_container_36_td_39_ng_template_2_ng_template_1_ng_container_0_Template, 2, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !item_r8.get("isReversed").value);
  }
}
function CardFormComponent_ng_container_36_td_39_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CardFormComponent_ng_container_36_td_39_ng_template_2_ng_container_0_Template, 2, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_td_39_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8.get("isNew").value)("ngIfElse", _r61);
  }
}
function CardFormComponent_ng_container_36_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CardFormComponent_ng_container_36_td_39_ng_container_1_Template, 2, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CardFormComponent_ng_container_36_td_39_ng_template_2_Template, 3, 2, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(ctx_r18.otherData == null ? null : ctx_r18.otherData.reverse))("ngIfElse", _r55);
  }
}
function CardFormComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "tr", 20)(2, "td")(3, "div", 21)(4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CardFormComponent_ng_container_36_Template_input_change_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r73);
      const i_r9 = restoredCtx.index;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r72.convertCash(i_r9));
    })("input", function CardFormComponent_ng_container_36_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r73);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r74.handleAmountFocus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, CardFormComponent_ng_container_36_ng_container_5_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td")(7, "div", 23)(8, "ng-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CardFormComponent_ng_container_36_Template_ng_select_change_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r73);
      const i_r9 = restoredCtx.index;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r75.chooseCurrency($event, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, CardFormComponent_ng_container_36_ng_container_9_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td")(13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, CardFormComponent_ng_container_36_ng_container_15_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td")(17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, CardFormComponent_ng_container_36_ng_container_19_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "td")(21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, CardFormComponent_ng_container_36_ng_container_23_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "td")(25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "ng-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, CardFormComponent_ng_container_36_ng_container_27_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "td")(29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, CardFormComponent_ng_container_36_ng_container_31_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "td")(33, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, CardFormComponent_ng_container_36_ng_container_35_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "td")(37, "div", 31)(38, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CardFormComponent_ng_container_36_Template_input_change_38_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r73);
      const i_r9 = restoredCtx.index;
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r76.isSameCustomer($event, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, CardFormComponent_ng_container_36_td_39_Template, 4, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_1_0 = item_r8.get("cardCollectionJod")) == null ? null : tmp_1_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r2.currencyList);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (tmp_3_0 = item_r8.get("currencyId")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((item_r8 == null ? null : (tmp_4_0 = item_r8.get("rate")) == null ? null : tmp_4_0.value) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (item_r8 == null ? null : item_r8.value == null ? null : item_r8.value.vjod) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.paymentTypeId == 13013 && !ctx_r2.otherData.refund);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_7_0 = item_r8.get("cardLast4Digits")) == null ? null : tmp_7_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_8_0 = item_r8.get("machineReceiptNumber")) == null ? null : tmp_8_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r2.terminals);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_10_0 = item_r8.get("cardTerminalProviderId")) == null ? null : tmp_10_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_11_0 = item_r8.get("machineID")) == null ? null : tmp_11_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r8 == null ? null : (tmp_12_0 = item_r8.get("cardPayerName")) == null ? null : tmp_12_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(ctx_r2.otherData == null ? null : ctx_r2.otherData.isMultiCollect) && !ctx_r2.otherData.refund);
  }
}
function CardFormComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 41)(1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Press Tab to add payment in another currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CardFormComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 44)(1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cashier Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CardFormComponent_div_38_Template_textarea_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r77._subjectService.cashierNote.next($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CardFormComponent_i_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 47);
  }
}
class CardFormComponent {
  onKeydownHandler() {
    this.handleTabKeyDown();
  }
  constructor(collectService, fb, _activeModal, _commonService, _subjectService, _modalService, _httpService, _sharedService) {
    this.collectService = collectService;
    this.fb = fb;
    this._activeModal = _activeModal;
    this._commonService = _commonService;
    this._subjectService = _subjectService;
    this._modalService = _modalService;
    this._httpService = _httpService;
    this._sharedService = _sharedService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    this.terminals = [];
    this.currencies = [];
    this.currencyList = [];
    this.providerMachineList = [];
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
    this.isMachineResponse = false;
    this.amountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.formValueEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.colllectedViaMachine = false;
    this.isMachineFgReset = false;
  }
  ngOnInit() {
    //console.log(this.otherData);
    this.colllectedViaMachine = JSON.parse(localStorage.getItem('pos_mc'));
    this.isMachineFgReset = JSON.parse(localStorage.getItem('isMachineFgReset'));
    this.isMachineResponse = this.paymentTypeId == 13013 ? false : true;
    if (this.otherData?.refund) this.isMachineResponse = true;
    this.currencyList = this.currencies.filter(x => x.lookupId == 9001);
    if (this.paymentTypeId == 13013 && this.isMachineFgReset) {
      this.cardArrayControl.clear();
    }
    if (this.cardArrayControl.length == 0) {
      this.cardArrayControl.push(this.cardControls());
      // bind all the remaining amount to POS Machine collection when we collect via POS machine
      if (!this.colllectedViaMachine && this.paymentTypeId == 13013) {
        let initialAmount = '';
        let amount = +this.otherData?.remainingAmountAfterSomeCollection || 0;
        initialAmount = amount > 0 && amount || this.otherData?.remainingAmount;
        //Zero index because the POS Machine can only have one row for collection.
        this.cardArrayControl.at(0).get('cardCollectionJod').setValue(initialAmount);
        this.convertCash(0);
        localStorage.setItem('isMachineFgReset', JSON.stringify(false));
      }
    }
    this.form.statusChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(x => {
      let touched;
      if (this.otherData?.reverse) touched = x == 'VALID' || x == 'DISABLED' ? false : true;else touched = x == 'VALID' ? false : true;
      this.form.markAllAsTouched();
      this.formValueEvent.emit({
        values: this.form.value,
        touched
      });
    });
    // ONLY IN CASE OF Refund
    if (this.otherData?.refund) this.cardArrayControl.disable({
      emitEvent: false
    });
    // ONLY IN CASE OF REVERSE
    if (this.otherData?.reverse) {
      this.disableReversedItems();
    }
  }
  disableReversedItems() {
    this.cardArrayControl.controls.forEach(control => {
      //let isReversed = control.get('isReversed').getRawValue();
      //if (isReversed)
      //  control.disable();
      let isNew = control.get('isNew').value;
      if (!isNew) control.disable();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }
  cardControls() {
    return this.fb.group({
      isChecked: [true],
      cardCollectionJod: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0.0000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      machineReceiptNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern('^[0-9]*$')]],
      cardTerminalProviderId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      machineID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      cardPayerName: [localStorage.getItem('pmcn') || 'No Customer', this.otherData.collectionType != 7004 && [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      cardLast4Digits: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern('^[0-9]{4}$')]],
      paymentCardTypeId: [this.paymentTypeId],
      currencyId: [9001, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      rate: [''],
      vjod: [''],
      isReversed: [false],
      isNew: [true],
      lineNew: [true]
    });
  }
  get cardArrayControl() {
    return this.form ? this.form.get('card') : null;
  }
  handleTabKeyDown() {
    if (this.otherData.refund || this.form.invalid) {
      return;
    }
    if (this.otherData?.['amountExceeded']) {
      return;
    }
    if (!this.otherData?.isMultiCollect) this.addNewRow();
  }
  chooseCurrency(event, i) {
    this.form.markAllAsTouched();
    let control = this.cardArrayControl.at(i).get('vjod');
    let value = this.cardArrayControl.at(i).get('cardCollectionJod').getRawValue();
    this.cardArrayControl.at(i).get('rate').setValue(event?.rate);
    if (event?.lookupId == 9001) {
      control.patchValue((value * 1).toFixed(3));
    } else if (event?.lookupId == 9002) {
      control.patchValue((value * +event?.rate).toFixed(3));
    } else if (event?.lookupId == 9003) {
      control.patchValue((value * +event?.rate).toFixed(3));
    }
    this.calculateAmount();
  }
  convertCash(i) {
    let control = this.cardArrayControl.at(i).get('vjod');
    let row = this.cardArrayControl.at(i);
    let value = this.cardArrayControl.at(i).get('cardCollectionJod').getRawValue();
    let currencyId = this.cardArrayControl.at(i).get('currencyId').getRawValue();
    if (currencyId == 9001) {
      control.patchValue((value * 1).toFixed(3));
    } else if (currencyId == 9002) {
      control.patchValue((value * 0.71).toFixed(3));
    } else if (currencyId == 9003) {
      control.patchValue((value * 0.76).toFixed(3));
    }
    this.calculateAmount();
  }
  getTerminalProviderMachine(data) {
    let registerId = +this._sharedService.getRegister?.registerObj?.id || 0;
    if (!registerId) return;
    this._httpService._spinnerService.show();
    let URL = this._httpService.apiUrl.POSMachine.GetTerminalProviderMachine + `?registerId=${registerId}&status=2001&pageSize=1000`;
    this._httpService.get(URL, 'admin').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.isSuccess) {
          this.providerMachineList = response.data;
          if (this.providerMachineList?.length) {
            if (this.providerMachineList.length == 1) {
              this.handleConfirmCardRequest({
                ...data,
                ...this.providerMachineList[0]
              });
            } else {
              const ref = this._modalService.open(_terminal_provider_modal_terminal_provider_modal_component__WEBPACK_IMPORTED_MODULE_3__.TerminalProviderModalComponent, {
                size: 'md',
                centered: true
              });
              ref.componentInstance.data = {
                providerList: this.providerMachineList
              };
              ref.componentInstance.eventData.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(res => {
                ref.close();
                this.handleConfirmCardRequest({
                  ...data,
                  ...res
                });
              });
            }
          } else this.responseModal('error', 'Their is no POS terminal machine defined for this register.');
        }
      },
      error: err => {
        this.responseModal('error', err?.error.errors[0].errorMessageEn || err?.error.errors[0].ErrorMessageEn || err?.error?.info);
      }
    }).add(() => {
      this._httpService._spinnerService.hide();
    });
  }
  handleConfirmCardRequest(terminalData) {
    this.confirmCreditCardRequest(terminalData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe({
      next: res => {
        if (res) {
          this.sendCreditCardRequest(terminalData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe({
            next: response => {
              if (response.isSuccess) {
                let row = terminalData?.formGroup;
                let data = response.data;
                if (data?.posRespStatus == 1) {
                  let cardLast4Digits = data?.posPan.split('*').pop();
                  let obj = {
                    cardLast4Digits,
                    machineReceiptNumber: data?.posInvoiceNumber,
                    cardTerminalProviderId: terminalData?.providerName?.providerId,
                    machineID: terminalData?.machineID
                  };
                  row.patchValue(obj);
                  this.isMachineResponse = true;
                  row.disable({
                    emitEvent: false
                  });
                  localStorage.setItem('pos_mc', 'true');
                  this.colllectedViaMachine = true;
                  this.responseModal('success', data?.posRespText);
                } else if (data?.posRespStatus == 0) {
                  this.responseModal('error', data?.posRespText || data?.webResponseErrorDesc);
                }
              }
            },
            error: err => {
              this.responseModal('error', err?.error.errors[0].errorMessageEn || err?.error.errors[0].ErrorMessageEn || err?.error?.info);
            }
          }).add(() => {
            this._httpService._spinnerService.hide();
          });
        }
      }
    });
  }
  handlePOSMachineClick(row) {
    if (this.colllectedViaMachine) return;
    let amount = row.get('vjod').value;
    if (+amount <= 0) {
      this.responseModal('error', 'Please enter amount to pay via POS machine.');
      return;
    } else {
      this.getTerminalProviderMachine({
        amount,
        formGroup: row
      });
      return;
    }
  }
  sendCreditCardRequest(data) {
    this._httpService._spinnerService.show();
    const formData = new FormData();
    formData.append('MID', data?.machineID);
    formData.append('TerminalID', data?.terminalID);
    formData.append('SecurityKey', data?.secretKey);
    formData.append('Amount', data?.amount);
    //formData.append('MID', '111111111111111');
    //formData.append('TerminalID', '99000084');
    //formData.append('SecurityKey', '0123456789ABCDEF0123456789ABCDEF');
    //formData.append('Amount', amount);
    let URL = this._httpService.apiUrl.POSMachine.SendCreditCardRequest;
    return this._httpService.post(`${URL}`, formData);
  }
  responseModal(type, message) {
    const modalRef = this._modalService.open(_shared_components_response_modal_response_modal_component__WEBPACK_IMPORTED_MODULE_1__.ResponseModalComponent, {
      centered: true
    });
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.message = message;
  }
  confirmCreditCardRequest(data) {
    const modalRef = this._modalService.open(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.data = {
      headingText: 'Confirm Request',
      body: `Are you sure you want to pay <span class='primary-clr'>${this._httpService._helperService.transformDecimal(data?.amount)} JOD</span> using POS machine?`
    };
    return modalRef.componentInstance.eventData;
  }
  addNewRow() {
    if (this.paymentTypeId == 13013 && this.cardArrayControl.length == 1) {
      this.responseModal('error', 'Only one line allowed to pay via POS machine');
      return;
    }
    this.cardArrayControl.push(this.cardControls());
    this.form.markAsUntouched();
  }
  removeItem(i) {
    // Don't allow reset if collected via machine
    if (this.colllectedViaMachine && this.paymentTypeId == 13013) {
      return;
    }
    if (this.otherData.refund) return;
    this.cardArrayControl.removeAt(i);
    this.sendAmount();
  }
  handleAmountFocus() {
    this.form.markAllAsTouched();
  }
  sendAmount() {
    this.calculateAmount();
  }
  reverse(item, index) {
    const previousFormGroup = this.cardArrayControl.at(index);
    if (+previousFormGroup.value.cardCollectionJod <= 0) return;
    previousFormGroup.get('isReversed').setValue(true);
    previousFormGroup.get('lineNew').setValue(false);
    const newFormGroup = this.fb.group({});
    Object.keys(previousFormGroup.controls).forEach(controlName => {
      const controlValue = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(previousFormGroup.get(controlName)?.value);
      newFormGroup.addControl(controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(controlValue));
    });
    let negativeValue = previousFormGroup.get('vjod').getRawValue() * -1;
    newFormGroup.patchValue({
      vjod: negativeValue,
      cardCollectionJod: negativeValue,
      isReversed: true,
      lineNew: true
    });
    this.cardArrayControl.insert(index + 1, newFormGroup);
    this.cardArrayControl.at(index).disable();
    this.cardArrayControl.at(index + 1).disable();
    this.sendAmount();
  }
  calculateAmount() {
    let amount = 0;
    for (let item of this.cardArrayControl.controls) {
      let formGroup = item;
      amount += +formGroup.controls['vjod'].getRawValue();
    }
    this.amountEvent.emit({
      amount
    });
  }
  handleSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.formValueEvent.emit({
        submit: true
      });
    }
  }
  resetForm() {
    // Don't allow reset if collected via machine
    if (this.colllectedViaMachine && this.paymentTypeId == 13013) {
      return;
    }
    if (this.paymentTypeId == 13013) {
      localStorage.setItem('isMachineFgReset', JSON.stringify(true));
    }
    this.cardArrayControl.clear();
    this.cardArrayControl.push(this.cardControls());
    this.form.markAsUntouched();
    this.formValueEvent.emit({
      touched: false,
      reset: true
    });
    this.amountEvent.emit({
      amount: 0
    });
  }
  isSameCustomer(event, index) {
    let formGroup = this.cardArrayControl.at(index);
    if (event.target.checked) {
      if (this.otherData.collectionType == 7004) {
        formGroup.controls['cardPayerName'].setValue('No Customer');
      } else {
        let customerName = localStorage.getItem('pmcn');
        formGroup.controls['cardPayerName'].setValue(customerName);
      }
    } else {
      formGroup.controls['cardPayerName'].setValue('');
    }
  }
  closeModal() {
    if (this._activeModal) this._activeModal.close();else this._commonService.NavigateToRoute(`/${this.otherData?.redirectRoute}`);
  }
}
CardFormComponent.ɵfac = function CardFormComponent_Factory(t) {
  return new (t || CardFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_collect_service__WEBPACK_IMPORTED_MODULE_4__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbActiveModal, 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_6__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_7__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_8__.SharedService));
};
CardFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CardFormComponent,
  selectors: [["card-form"]],
  hostBindings: function CardFormComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keydown.tab", function CardFormComponent_keydown_tab_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    form: "form",
    terminals: "terminals",
    currencies: "currencies",
    recentFormValues: "recentFormValues",
    isPending: "isPending",
    otherData: "otherData",
    paymentTypeId: "paymentTypeId"
  },
  outputs: {
    amountEvent: "amountEvent",
    formValueEvent: "formValueEvent"
  },
  decls: 46,
  vars: 10,
  consts: [[1, "tab-item"], [1, "row"], [1, "col-md-12", "text-end", "my-2"], ["type", "button", "class", "btn btn-trash", 3, "click", 4, "ngIf"], [3, "formGroup", "submit"], [1, "col-md-12"], [1, "card-table"], [1, ""], [1, "table"], [4, "ngIf"], ["formArrayName", "card", 4, "ngFor", "ngForOf"], ["class", "col-md-12 d-flex mt-2", 4, "ngIf"], ["class", "col-12 mb-4", 4, "ngIf"], [1, "btns-group", "my-2", "me-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], ["class", "fa-solid fa-circle-notch fa-spin", 4, "ngIf"], ["type", "button", 1, "btn", "btn-trash", 3, "click"], ["src", "assets/images/reload.png", "alt", "", 2, "width", "25px"], ["formArrayName", "card"], [3, "formGroupName"], [1, "form-group"], ["type", "number", "placeholder", "Amount", "formControlName", "cardCollectionJod", "appDecimalNumber", "", 1, "form-control", 3, "change", "input"], [1, "ngselect-curruncy", "form-group"], ["placeholder", "Currency", "bindLabel", "name", "bindValue", "lookupId", "formControlName", "currencyId", 3, "items", "change"], [1, "d-flex", "gap-2", "align-items-center"], ["type", "text", "placeholder", "", "formControlName", "cardLast4Digits", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "machineReceiptNumber", 1, "form-control"], ["id", "cardTerminalProviderId", "placeholder", " Select Terminal ", "bindLabel", "name", "bindValue", "id", "formControlName", "cardTerminalProviderId", 3, "items"], ["type", "text", "formControlName", "machineID", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "cardPayerName", "OnlyCharacter", "", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControlName", "isChecked", 1, "form-check-input", 3, "change"], ["class", "error", 4, "ngIf"], [1, "error"], ["height", "40", "src", "/assets/images/pos-machine.png", 1, "cursor-pointer", 3, "click"], [4, "ngIf", "ngIfElse"], ["reverseCase", ""], ["src", "assets/images/trash.png", "alt", "", 1, "cursor-pointer", 2, "width", "25px", 3, "click"], ["reverseTemp", ""], [1, "cursor-pointer", "green-clr", "fas", "fa-rotate-left", "font-20", 3, "click"], [1, "col-md-12", "d-flex", "mt-2"], [1, "blue-clr", "d-flex", "align-items-center", "fw-500", "gap-1"], [1, "fa-solid", "fa-circle-plus", "primary-clr", "fa-2x"], [1, "col-12", "mb-4"], [1, "input-label"], [1, "form-control", 3, "change"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function CardFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, CardFormComponent_button_3_Template, 2, 0, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("submit", function CardFormComponent_Template_form_submit_4_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "table", 8)(10, "thead")(11, "tr")(12, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Paid Amount*");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Currency*");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Value in JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Last 4 Card #*");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Credit Card Machince ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " Recepit No");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Terminal Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Merchant ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Same Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, CardFormComponent_th_34_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, CardFormComponent_ng_container_36_Template, 40, 14, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, CardFormComponent_div_37_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, CardFormComponent_div_38_Template, 4, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 5)(40, "div", 13)(41, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CardFormComponent_Template_button_click_41_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, CardFormComponent_i_45_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.otherData.reverse && !ctx.otherData.refund);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.cardArrayControl == null ? null : ctx.cardArrayControl.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect) && !ctx.otherData.refund);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.otherData.collectionType == 7001 || ctx.otherData.collectionType == 7004 || ctx.otherData.collectionType == 7005 || ctx.otherData.collectionType == 7008 || ctx.otherData.collectionType == 7009 || ctx.otherData.collectionType == 7002 && ctx.otherData.refund);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.colllectedViaMachine);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.isPending || !ctx.isMachineResponse);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.isPending && "Saving" || "Confirm", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isPending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormArrayName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_9__.DecimalNumberDirective, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_10__.CharacterDirective],
  styles: [".form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n  .ng-dropdown-panel {\n  z-index: 9999999 !important;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 0px 10px 15px !important;\n  font-weight: 500;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvY2FyZC1mb3JtL2NhcmQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDRSwyQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gIH1cblxuICAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gIHotaW5kZXg6IDk5OTk5OTkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQge1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jYXJkLXRhYmxlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 86337:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/cash/cash.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashComponent": () => (/* binding */ CashComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/directive/character.directive */ 80145);













function CashComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CashComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CashComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CashComponent_ng_container_26_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CashComponent_ng_container_26_ng_container_5_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Value must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CashComponent_ng_container_26_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CashComponent_ng_container_26_ng_container_5_ng_container_1_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CashComponent_ng_container_26_ng_container_5_ng_container_1_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("collectedAmount")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_1_0 = item_r9.get("collectedAmount")) == null ? null : tmp_1_0.errors["min"]);
  }
}
function CashComponent_ng_container_26_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CashComponent_ng_container_26_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("collectedAmount")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("collectedAmount")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("collectedAmount")) == null ? null : tmp_0_0.dirty));
  }
}
function CashComponent_ng_container_26_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = ctx.item;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r12.currenciesArray.includes(item_r21.lookupId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r21.name, " ");
  }
}
function CashComponent_ng_container_26_ng_container_10_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CashComponent_ng_container_26_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CashComponent_ng_container_26_ng_container_10_ng_container_1_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("currencyId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CashComponent_ng_container_26_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CashComponent_ng_container_26_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("currencyId")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("currencyId")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("currencyId")) == null ? null : tmp_0_0.dirty));
  }
}
function CashComponent_ng_container_26_ng_container_18_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CashComponent_ng_container_26_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CashComponent_ng_container_26_ng_container_18_ng_container_1_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("cashPayerName")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function CashComponent_ng_container_26_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CashComponent_ng_container_26_ng_container_18_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("cashPayerName")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("cashPayerName")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("cashPayerName")) == null ? null : tmp_0_0.dirty));
  }
}
function CashComponent_ng_container_26_td_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CashComponent_ng_container_26_td_22_ng_container_1_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.removeItem(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function CashComponent_ng_container_26_td_22_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CashComponent_ng_container_26_td_22_ng_template_2_ng_container_0_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).index;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r40.removeItem(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function CashComponent_ng_container_26_td_22_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CashComponent_ng_container_26_td_22_ng_template_2_ng_template_1_ng_container_0_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      const item_r9 = ctx_r45.$implicit;
      const i_r10 = ctx_r45.index;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r44.reverse(item_r9, i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function CashComponent_ng_container_26_td_22_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CashComponent_ng_container_26_td_22_ng_template_2_ng_template_1_ng_container_0_Template, 2, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r9.get("isReversed").value);
  }
}
function CashComponent_ng_container_26_td_22_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CashComponent_ng_container_26_td_22_ng_template_2_ng_container_0_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CashComponent_ng_container_26_td_22_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r9.get("isNew").value)("ngIfElse", _r38);
  }
}
function CashComponent_ng_container_26_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CashComponent_ng_container_26_td_22_ng_container_1_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CashComponent_ng_container_26_td_22_ng_template_2_Template, 3, 2, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r15.otherData == null ? null : ctx_r15.otherData.reverse))("ngIfElse", _r32);
  }
}
function CashComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr", 21)(2, "td")(3, "div", 22)(4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function CashComponent_ng_container_26_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r49.handleAmountFocus());
    })("change", function CashComponent_ng_container_26_Template_input_change_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);
      const i_r10 = restoredCtx.index;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.handleAmountChange(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CashComponent_ng_container_26_ng_container_5_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td")(7, "div", 24)(8, "ng-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CashComponent_ng_container_26_Template_ng_select_change_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);
      const i_r10 = restoredCtx.index;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r52.chooseCurrency($event, i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CashComponent_ng_container_26_ng_template_9_Template, 2, 2, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CashComponent_ng_container_26_ng_container_10_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td")(16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CashComponent_ng_container_26_ng_container_18_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td")(20, "div", 28)(21, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CashComponent_ng_container_26_Template_input_change_21_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);
      const i_r10 = restoredCtx.index;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r53.isSameCustomer($event, i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CashComponent_ng_container_26_td_22_Template, 4, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = item_r9.get("collectedAmount")) == null ? null : tmp_1_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r2.currencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = item_r9.get("currencyId")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((item_r9 == null ? null : (tmp_4_0 = item_r9.get("rate")) == null ? null : tmp_4_0.value) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.value == null ? null : item_r9.value.vjod) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_6_0 = item_r9.get("cashPayerName")) == null ? null : tmp_6_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r2.otherData == null ? null : ctx_r2.otherData.isMultiCollect) && !ctx_r2.otherData.refund);
  }
}
function CashComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38)(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Press Tab to add payment in another currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CashComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cashier Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CashComponent_div_28_Template_textarea_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54._subjectService.cashierNote.next($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CashComponent_i_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 44);
  }
}
function CashComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45)(1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.otherData == null ? null : ctx_r6.otherData.remainingAmountMessage);
  }
}
class CashComponent {
  onKeydownHandler() {
    this.handleTabKeyDown();
  }
  constructor(fb, _activeModal, _commonService, _subjectService) {
    this.fb = fb;
    this._activeModal = _activeModal;
    this._commonService = _commonService;
    this._subjectService = _subjectService;
    this.curruncyAry = [];
    this.currenciesArray = [];
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.currencies = [];
    this.amountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.formValueEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.colllectedViaMachine = false;
  }
  ngOnInit() {
    this.colllectedViaMachine = JSON.parse(localStorage.getItem('pos_mc'));
    this.initForm();
    this.cashForm.statusChanges.subscribe(x => {
      this.cashForm.markAllAsTouched();
      let touched;
      if (this.otherData?.reverse) touched = x == 'VALID' || x == 'DISABLED' ? false : true;else touched = x == 'VALID' ? false : true;
      this.formValueEvent.emit({
        values: this.cashForm.getRawValue(),
        touched
      });
    });
    if (this.recentFormValues?.cash?.cashArray?.length) {
      let formArray = this.cashForm.controls["cashArray"];
      formArray.removeAt(0);
      for (let item of this.recentFormValues?.cash?.cashArray) {
        formArray.push(this.initCashForm(item));
        this.currenciesArray.push(item['currencyId']);
      }
      // ONLY IN CASE OF REVERSE
      if (this.otherData?.reverse) this.disableReversedItems();
    }
    // ONLY IN CASE OF Refund
    if (this.otherData?.refund) this.cashArrControls.disable({
      emitEvent: false
    });
  }
  disableReversedItems() {
    this.cashArrControls.controls.forEach(control => {
      let isNew = control.get('isNew').value;
      if (!isNew) control.disable();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.recentFormValues?.cash?.cashArray[0]?.collectedAmount > 0) this.formValueEvent.emit({
      values: this.cashForm.getRawValue(),
      touched: false
    });
  }
  closeModal() {
    if (this._activeModal) this._activeModal.close();else this._commonService.NavigateToRoute(`/${this.otherData?.redirectRoute}`);
  }
  initForm() {
    this.cashForm = this.fb.group({
      cashArray: this.fb.array([this.initCashForm()])
    });
  }
  initCashForm(item) {
    if (item) {
      return this.fb.group({
        currencyId: [item?.currencyId, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        collectedAmount: [item?.collectedAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0.0000000000000001)]],
        vjod: item?.vjod,
        sameCustomer: [item?.sameCustomer],
        cashPayerName: [item?.cashPayerName, this.otherData.collectionType != 7004 && [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        rate: [item?.rate],
        isReversed: [(item?.isReversed ?? item?.isReversed) || false],
        isNew: [(item?.isNew ?? item?.isNew) || false],
        lineNew: [(item?.lineNew ?? item?.lineNew) || false]
      });
    } else {
      return this.fb.group({
        currencyId: [9001, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        collectedAmount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0.0000000000000001)]],
        vjod: null,
        sameCustomer: [true],
        cashPayerName: [localStorage.getItem('pmcn') || 'No Customer', this.otherData.collectionType != 7004 && [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        rate: [1],
        isReversed: [false],
        isNew: true,
        lineNew: true
      });
    }
  }
  handleTabKeyDown() {
    if (this.otherData?.refund || this.cashForm.invalid) {
      return;
    }
    if (this.otherData['amountExceeded']) {
      return;
    }
    //NEW WILL BE ADDED IF ITS NO MULTI COLLECT
    if (!this.otherData?.isMultiCollect) {
      this.addNewCurrency();
    }
  }
  handleAmountFocus() {
    this.cashForm.markAllAsTouched();
  }
  chooseCurrency(event, i) {
    this.cashForm.markAllAsTouched();
    let control = this.cashArrControls.at(i).get('vjod');
    let value = +this.cashArrControls.at(i).get('collectedAmount').value;
    let rate = +event?.rate;
    let convertedAmount = (value * rate).toFixed(3);
    this.cashArrControls.at(i).get('rate').setValue(event?.rate);
    if (event?.lookupId == 9001) {
      control.setValue((value * 1).toFixed(3));
    } else if (event?.lookupId == 9002) {
      control.setValue(convertedAmount);
    } else if (event?.lookupId == 9003) {
      control.setValue(convertedAmount);
    }
    this.currenciesArray = [];
    for (let item of this.cashArrControls.controls) {
      let formGroup = item;
      this.currenciesArray.push(formGroup.controls['currencyId'].value);
    }
    this.calculateAmount();
  }
  handleAmountChange(i) {
    let vjod = this.cashArrControls.at(i).get('vjod');
    let value = +this.cashArrControls.at(i).get('collectedAmount').value;
    let rate = +this.cashArrControls.at(i).get('rate').value;
    let convertedAmount = (value * rate).toFixed(3);
    vjod.setValue(convertedAmount);
    this.calculateAmount();
  }
  reverse(item, index) {
    const previousFormGroup = this.cashArrControls.at(index);
    if (previousFormGroup.invalid) return;
    const newFormGroup = this.fb.group({});
    Object.keys(previousFormGroup.controls).forEach(controlName => {
      const controlValue = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(previousFormGroup.get(controlName)?.value);
      newFormGroup.addControl(controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(controlValue));
    });
    let amountJOD = +previousFormGroup.get('vjod').value;
    let negativeValue = previousFormGroup.get('collectedAmount').value * -1;
    let negativeJODValue = amountJOD * -1;
    newFormGroup.patchValue({
      vjod: negativeJODValue,
      collectedAmount: negativeValue,
      isReversed: true,
      lineNew: true
    });
    previousFormGroup.get('isReversed').setValue(true);
    previousFormGroup.get('lineNew').setValue(false);
    this.cashArrControls.insert(index + 1, newFormGroup);
    this.cashArrControls.at(index).disable();
    this.cashArrControls.at(index + 1).disable();
    this.calculateAmount();
  }
  calculateAmount() {
    let amount = 0;
    for (let item of this.cashArrControls.controls) {
      let formGroup = item;
      amount += +formGroup.controls['vjod'].getRawValue();
    }
    this.amountEvent.emit({
      amount
    });
  }
  removeItem(i) {
    if (this.otherData.refund) return;
    this.cashArrControls.removeAt(i);
    this.currenciesArray = [];
    for (let item of this.cashArrControls.controls) {
      let formGroup = item;
      this.currenciesArray.push(formGroup.controls['currencyId'].value);
    }
    this.calculateAmount();
  }
  addNewCurrency() {
    let length = this.cashArrControls.length + 1;
    if (this.otherData?.reverse) length = length - this.getDisabledFormGroupCount();
    if (length <= this.currencies.length) {
      this.cashArrControls.push(this.initCashForm());
    }
    this.cashForm.markAsUntouched();
  }
  getDisabledFormGroupCount() {
    let disabledCount = 0;
    this.cashArrControls.controls.forEach(control => {
      if (control.disabled) disabledCount++;
    });
    return disabledCount;
  }
  resetForm() {
    this.cashArrControls.clear();
    this.cashArrControls.push(this.initCashForm());
    this.cashForm.markAsUntouched();
    this.formValueEvent.emit({
      values: this.cashForm.getRawValue(),
      touched: false,
      reset: true
    });
    this.calculateAmount();
    this.currenciesArray = [];
    this.amountEvent.emit({
      amount: 0
    });
  }
  isSameCustomer(event, index) {
    let formGroup = this.cashArrControls.at(index);
    if (event.target.checked) {
      if (this.otherData.collectionType == 7004) formGroup.controls['cashPayerName'].setValue('No Customer');else {
        let customerName = localStorage.getItem('pmcn');
        formGroup.controls['cashPayerName'].setValue(customerName);
      }
    } else {
      formGroup.controls['cashPayerName'].setValue('');
    }
  }
  get cashArrControls() {
    return this.cashForm ? this.cashForm.get('cashArray') : null;
  }
  get f() {
    return this.cashForm.controls;
  }
  handleSubmit() {
    if (this.cashForm.invalid) {
      this.cashForm.markAllAsTouched();
    } else {
      this.formValueEvent.emit({
        values: this.cashForm.getRawValue(),
        submit: true
      });
    }
  }
}
CashComponent.ɵfac = function CashComponent_Factory(t) {
  return new (t || CashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_2__.SubjectService));
};
CashComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CashComponent,
  selectors: [["paymentCashForm"]],
  hostBindings: function CashComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.tab", function CashComponent_keydown_tab_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    currencies: "currencies",
    isPending: "isPending",
    recentFormValues: "recentFormValues",
    otherData: "otherData"
  },
  outputs: {
    amountEvent: "amountEvent",
    formValueEvent: "formValueEvent"
  },
  decls: 37,
  vars: 11,
  consts: [[1, "tab-item"], [1, "row"], [1, "col-md-12", "text-end", "my-2"], ["type", "button", "class", "btn btn-trash", 3, "click", 4, "ngIf"], [3, "formGroup", "submit"], [1, "col-md-12"], [1, "card-table"], [1, ""], [1, "table"], [4, "ngIf"], ["formArrayName", "cashArray", 4, "ngFor", "ngForOf"], ["class", "col-md-12 d-flex mt-2", 4, "ngIf"], ["class", "col-12 mb-4", 4, "ngIf"], [1, "btns-group", "my-2", "me-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], ["class", "fa-solid fa-circle-notch fa-spin", 4, "ngIf"], ["class", "col-12 ng_validation", 4, "ngIf"], ["type", "button", 1, "btn", "btn-trash", 3, "click"], ["src", "assets/images/reload.png", "alt", "", 2, "width", "25px"], ["formArrayName", "cashArray"], [3, "formGroupName"], [1, "form-group"], ["type", "number", "placeholder", "Amount", "formControlName", "collectedAmount", "appDecimalNumber", "", 1, "form-control", 3, "input", "change"], [1, "ngselect-curruncy", "form-group"], ["placeholder", "Currency", "bindLabel", "name", "bindValue", "lookupId", "formControlName", "currencyId", 3, "items", "change"], ["ng-option-tmp", ""], ["type", "text", "placeholder", "", "formControlName", "cashPayerName", "OnlyCharacter", "", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControlName", "sameCustomer", 1, "form-check-input", 3, "change"], ["class", "error", 4, "ngIf"], [1, "error"], [3, "hidden"], [4, "ngIf", "ngIfElse"], ["reverseCase", ""], ["src", "assets/images/trash.png", "alt", "", 1, "cursor-pointer", 2, "width", "25px", 3, "click"], ["reverseTemp", ""], [1, "cursor-pointer", "green-clr", "fas", "fa-rotate-left", "font-20", 3, "click"], [1, "col-md-12", "d-flex", "mt-2"], [1, "blue-clr", "d-flex", "align-items-center", "fw-500", "gap-1"], [1, "fa-solid", "fa-circle-plus", "primary-clr", "fa-2x"], [1, "col-12", "mb-4"], [1, "input-label"], [1, "form-control", 3, "change"], [1, "fa-solid", "fa-circle-notch", "fa-spin"], [1, "col-12", "ng_validation"], [1, "alert", "alert-danger"]],
  template: function CashComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CashComponent_button_3_Template, 2, 0, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function CashComponent_Template_form_submit_4_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "table", 8)(10, "thead")(11, "tr")(12, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Amount To Pay");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Value in JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Payer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Same Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CashComponent_th_24_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CashComponent_ng_container_26_Template, 23, 8, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, CashComponent_div_27_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CashComponent_div_28_Template, 4, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 5)(30, "div", 13)(31, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CashComponent_Template_button_click_31_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, CashComponent_i_35_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CashComponent_div_36_Template, 3, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.otherData.reverse && !(ctx.otherData == null ? null : ctx.otherData.refund));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.cashForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.cashArrControls == null ? null : ctx.cashArrControls.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect) && !(ctx.otherData == null ? null : ctx.otherData.refund));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.otherData.collectionType == 7001 || ctx.otherData.collectionType == 7004 || ctx.otherData.collectionType == 7005 || ctx.otherData.collectionType == 7008 || ctx.otherData.collectionType == 7009 || ctx.otherData.collectionType == 7002 && ctx.otherData.refund);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.colllectedViaMachine);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isPending);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.isPending && "Saving" || "Confirm", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isPending);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.otherData == null ? null : ctx.otherData.remainingAmountMessage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgOptionTemplateDirective, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_3__.DecimalNumberDirective, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_4__.CharacterDirective],
  styles: [".form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n  .ng-dropdown-panel {\n  z-index: 9999999 !important;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 0px 10px 15px !important;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvY2FzaC9jYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0FBREo7QUFJRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFNQTtFQUNFLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQ0FBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcbiAgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICB9XG5cbiAgLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwge1xuICB6LWluZGV4OiA5OTk5OTk5ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0IHtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY2FyZC10YWJsZSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uY2FyZC10YWJsZSB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 34204:
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/cheque/cheque.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentChequeComponent": () => (/* binding */ PaymentChequeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view-file/view-file.component */ 32298);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/collect.service */ 43346);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/directive/character.directive */ 80145);
















const _c0 = ["fileInput"];
const _c1 = ["fileInput2"];
function PaymentChequeComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentChequeComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Finance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_5_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Value must be greater than zero");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_5_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PaymentChequeComponent_ng_container_37_ng_container_5_ng_container_1_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeCollectionJod")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_1_0 = item_r9.get("chequeCollectionJod")) == null ? null : tmp_1_0.errors["min"]);
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeCollectionJod")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeCollectionJod")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeCollectionJod")) == null ? null : tmp_0_0.dirty));
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_9_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_9_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("currencyId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("currencyId")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("currencyId")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("currencyId")) == null ? null : tmp_0_0.dirty));
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_17_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_17_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeDate")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_17_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeDate")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeDate")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeDate")) == null ? null : tmp_0_0.dirty));
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_21_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_21_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input allows only digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_21_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PaymentChequeComponent_ng_container_37_ng_container_21_ng_container_1_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeNo")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_1_0 = item_r9.get("chequeNo")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_21_ng_container_1_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeNo")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeNo")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeNo")) == null ? null : tmp_0_0.dirty));
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_25_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_25_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("bankId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_25_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("bankId")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("bankId")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("bankId")) == null ? null : tmp_0_0.dirty));
  }
}
function PaymentChequeComponent_ng_container_37_input_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PaymentChequeComponent_ng_container_37_input_28_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r45.onFileChange($event, i_r10, "chequeImage"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", i_r10 + "file-input");
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentChequeComponent_ng_container_37_ng_container_31_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const item_r9 = ctx_r50.$implicit;
      const i_r10 = ctx_r50.index;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.fileAction(item_r9 == null ? null : item_r9.value.attachment, i_r10, "view", "chequeImage"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentChequeComponent_ng_container_37_ng_container_31_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const item_r9 = ctx_r53.$implicit;
      const i_r10 = ctx_r53.index;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r52.fileAction(item_r9 == null ? null : item_r9.value.attachment, i_r10, "delete", "chequeImage"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_32_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_32_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PaymentChequeComponent_ng_container_37_ng_container_32_ng_container_1_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("attachment")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_32_ng_container_1_Template, 3, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("attachment")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("attachment")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("attachment")) == null ? null : tmp_0_0.dirty));
  }
}
function PaymentChequeComponent_ng_container_37_td_33_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 38, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PaymentChequeComponent_ng_container_37_td_33_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r62.onFileChange($event, i_r10, "financeApproval"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", i_r10 + "file-input2");
  }
}
function PaymentChequeComponent_ng_container_37_td_33_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentChequeComponent_ng_container_37_td_33_ng_container_5_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      const item_r9 = ctx_r67.$implicit;
      const i_r10 = ctx_r67.index;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r66.fileAction(item_r9 == null ? null : item_r9.value.tempFinanceAttachment, i_r10, "view", "financeApproval"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentChequeComponent_ng_container_37_td_33_ng_container_5_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      const item_r9 = ctx_r70.$implicit;
      const i_r10 = ctx_r70.index;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r69.fileAction(item_r9 == null ? null : item_r9.value.tempFinanceAttachment, i_r10, "delete", "financeApproval"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_td_33_ng_container_6_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_td_33_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PaymentChequeComponent_ng_container_37_td_33_ng_container_6_ng_container_1_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("tempFinanceAttachment")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function PaymentChequeComponent_ng_container_37_td_33_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_td_33_ng_container_6_ng_container_1_Template, 3, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("tempFinanceAttachment")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("tempFinanceAttachment")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("tempFinanceAttachment")) == null ? null : tmp_0_0.dirty));
  }
}
function PaymentChequeComponent_ng_container_37_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PaymentChequeComponent_ng_container_37_td_33_input_2_Template, 2, 1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, PaymentChequeComponent_ng_container_37_td_33_ng_container_5_Template, 3, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, PaymentChequeComponent_ng_container_37_td_33_ng_container_6_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const item_r9 = ctx_r75.$implicit;
    const i_r10 = ctx_r75.index;
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9.get("isNew").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-success", item_r9 == null ? null : item_r9.value.tempFinanceAttachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("for", i_r10 + "file-input2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.value.tempFinanceAttachment) && (item_r9 == null ? null : item_r9.value.tempFinanceAttachment) || "Upload", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : item_r9.value.tempFinanceAttachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_5_0 = item_r9.get("tempFinanceAttachment")) == null ? null : tmp_5_0.errors);
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_37_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_37_ng_container_1_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeDrawerName")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function PaymentChequeComponent_ng_container_37_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_ng_container_37_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeDrawerName")) == null ? null : tmp_0_0.invalid) && (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeDrawerName")) == null ? null : tmp_0_0.touched) || (item_r9 == null ? null : (tmp_0_0 = item_r9.get("chequeDrawerName")) == null ? null : tmp_0_0.dirty));
  }
}
function PaymentChequeComponent_ng_container_37_td_41_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentChequeComponent_ng_container_37_td_41_ng_container_1_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r85);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r83.removeItem(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_td_41_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentChequeComponent_ng_container_37_td_41_ng_template_2_ng_container_0_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r91);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r89.removeItem(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_td_41_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentChequeComponent_ng_container_37_td_41_ng_template_2_ng_template_1_ng_container_0_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r95);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      const item_r9 = ctx_r94.$implicit;
      const i_r10 = ctx_r94.index;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r93.reverse(item_r9, i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function PaymentChequeComponent_ng_container_37_td_41_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PaymentChequeComponent_ng_container_37_td_41_ng_template_2_ng_template_1_ng_container_0_Template, 2, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !item_r9.get("isReversed").value);
  }
}
function PaymentChequeComponent_ng_container_37_td_41_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, PaymentChequeComponent_ng_container_37_td_41_ng_template_2_ng_container_0_Template, 2, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_td_41_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9.get("isNew").value)("ngIfElse", _r87);
  }
}
function PaymentChequeComponent_ng_container_37_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentChequeComponent_ng_container_37_td_41_ng_container_1_Template, 2, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PaymentChequeComponent_ng_container_37_td_41_ng_template_2_Template, 3, 2, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r21.otherData == null ? null : ctx_r21.otherData.reverse))("ngIfElse", _r81);
  }
}
const _c2 = function () {
  return {
    containerClass: "theme-red",
    dateInputFormat: "DD-MM-YYYY"
  };
};
function PaymentChequeComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tr", 22)(2, "td")(3, "div", 23)(4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function PaymentChequeComponent_ng_container_37_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r99);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r98.handleAmountFocus());
    })("change", function PaymentChequeComponent_ng_container_37_Template_input_change_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r99);
      const i_r10 = restoredCtx.index;
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r100.convertCash(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, PaymentChequeComponent_ng_container_37_ng_container_5_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td")(7, "div", 25)(8, "ng-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PaymentChequeComponent_ng_container_37_Template_ng_select_change_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r99);
      const i_r10 = restoredCtx.index;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r101.chooseCurrency($event, i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, PaymentChequeComponent_ng_container_37_ng_container_9_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td")(15, "div", 23)(16, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("bsValueChange", function PaymentChequeComponent_ng_container_37_Template_input_bsValueChange_16_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r99);
      const i_r10 = restoredCtx.index;
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r102.onDateValueChange($event, i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, PaymentChequeComponent_ng_container_37_ng_container_17_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td")(19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PaymentChequeComponent_ng_container_37_ng_container_21_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "td")(23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "ng-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, PaymentChequeComponent_ng_container_37_ng_container_25_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "td")(27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, PaymentChequeComponent_ng_container_37_input_28_Template, 2, 1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, PaymentChequeComponent_ng_container_37_ng_container_31_Template, 3, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, PaymentChequeComponent_ng_container_37_ng_container_32_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, PaymentChequeComponent_ng_container_37_td_33_Template, 7, 7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "td")(35, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, PaymentChequeComponent_ng_container_37_ng_container_37_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "td")(39, "div", 34)(40, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PaymentChequeComponent_ng_container_37_Template_input_change_40_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r99);
      const i_r10 = restoredCtx.index;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r103.isSameCustomer($event, i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, PaymentChequeComponent_ng_container_37_td_41_Template, 4, 2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_19_0;
    let tmp_21_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_1_0 = item_r9.get("chequeCollectionJod")) == null ? null : tmp_1_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx_r3.currencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = item_r9.get("currencyId")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((item_r9 == null ? null : (tmp_4_0 = item_r9.get("rate")) == null ? null : tmp_4_0.value) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r9 == null ? null : item_r9.value == null ? null : item_r9.value.vjod) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("minDate", ctx_r3.minDate)("maxDate", ctx_r3.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](25, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_9_0 = item_r9.get("chequeDate")) == null ? null : tmp_9_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_10_0 = item_r9.get("chequeNo")) == null ? null : tmp_10_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx_r3.banks);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_12_0 = item_r9.get("bankId")) == null ? null : tmp_12_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disable-elm", ctx_r3.otherData.refund);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9.get("isNew").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-success", item_r9 == null ? null : item_r9.value.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("for", i_r10 + "file-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((item_r9 == null ? null : item_r9.value.attachment) && (item_r9 == null ? null : item_r9.value.attachment) || "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : item_r9.value.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_19_0 = item_r9.get("attachment")) == null ? null : tmp_19_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.otherData.collectionType == 7001 || ctx_r3.otherData.collectionType == 7003);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : (tmp_21_0 = item_r9.get("chequeDrawerName")) == null ? null : tmp_21_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r3.otherData == null ? null : ctx_r3.otherData.isMultiCollect) && !ctx_r3.otherData.refund);
  }
}
function PaymentChequeComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Press Tab to add payment in another currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function PaymentChequeComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Cashier Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "textarea", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PaymentChequeComponent_div_39_Template_textarea_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r105);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r104._subjectService.cashierNote.next($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function PaymentChequeComponent_i_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 54);
  }
}
class PaymentChequeComponent {
  onKeydownHandler() {
    this.handleTabKeyDown();
  }
  constructor(fb, _activeModal, _datePipe, _commonService, _modalService, _collectService, _subjectService) {
    this.fb = fb;
    this._activeModal = _activeModal;
    this._datePipe = _datePipe;
    this._commonService = _commonService;
    this._modalService = _modalService;
    this._collectService = _collectService;
    this._subjectService = _subjectService;
    this.banks = [];
    this.amountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.formValueEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.filesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    this.filesArray = [];
    this.financeApprovalFiles = [];
    this.uploadedFiles = [];
    this.colllectedViaMachine = false;
  }
  ngOnInit() {
    this.colllectedViaMachine = JSON.parse(localStorage.getItem('pos_mc'));
    let flagType = this.otherData.collectionType == 7002 && this.otherData?.flag?.toLowerCase();
    if (flagType == 'cash') {
      this.minDate = new Date();
      const startDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth() - 1, 1);
      this.minDate = startDate;
      this.maxDate = new Date();
      this.maxDate.setDate(this.maxDate.getDate() + 4);
    }
    this.initForm();
    this.chequeForm.statusChanges.subscribe(x => {
      let touched;
      if (this.otherData?.reverse) touched = x == 'VALID' || x == 'DISABLED' ? false : true;else touched = x == 'VALID' ? false : true;
      this.chequeForm.markAllAsTouched();
      this.formValueEvent.emit({
        values: this.chequeForm.getRawValue(),
        touched
      });
    });
    let chequeImages = this._subjectService.chequeFiles.subscribe(files => {
      if (files?.length > 0) {
        this.filesArray = files;
      }
    });
    let financeApproval = this._subjectService.chequeFinanceApprovalFiles.subscribe(files => {
      if (files?.length > 0) {
        this.financeApprovalFiles = files;
      }
    });
    this.filesSubscription.add(chequeImages);
    this.filesSubscription.add(financeApproval);
    // ONLY IN CASE OF Refund
    if (this.otherData?.refund) this.chequeArrControls.disable({
      emitEvent: false
    });
    // ONLY IN CASE OF REVERSE
    if (this.otherData?.reverse) {
      this.disableReversedItems();
    }
  }
  disableReversedItems() {
    this.chequeArrControls.controls.forEach(control => {
      // THIS OPERATION IS DONE BECAUSE WHILE REVERSE IN BELOW CONTROLS THE VALUE IS FULL URL OF FILE FROM SERVER,
      // SO IN TEMPLATE WE NEED TO SHOW TEXT OF ATTACHMENT ONLY INSTEAD OF FULL URL.
      let cheque = control.get('attachment');
      // PUSH VALUES ARRAY TO MANUPLATE THE ARRAY ACCORDING TO FORMARRY LENGTH
      let chequeValue = cheque.getRawValue();
      this.filesArray.push(chequeValue);
      if (chequeValue) {
        cheque.setValue('Attachment');
      }
      let financeApp = control.get('tempFinanceAttachment');
      // PUSH VALUES ARRAY TO MANUPLATE THE ARRAY ACCORDING TO FORMARRY LENGTH
      let financeAppValue = financeApp.getRawValue();
      this.financeApprovalFiles.push(financeAppValue);
      if (financeAppValue) {
        financeApp.setValue('Attachment');
      }
      // END HERE
      let isNew = control.get('isNew').value;
      if (!isNew) control.disable();
    });
  }
  ngOnDestroy() {
    if (this.recentFormValues?.cheque?.chequeArray[0]?.chequeCollectionJod > 0) this.formValueEvent.emit({
      values: this.chequeForm.getRawValue(),
      touched: false
    });
    this._subjectService.chequeFiles.next(this.filesArray);
    this._subjectService.chequeFinanceApprovalFiles.next(this.financeApprovalFiles);
    this.filesSubscription.unsubscribe();
  }
  initForm() {
    this.chequeForm = this.fb.group({
      chequeArray: this.fb.array([this.chequeFormControls()])
    });
    if (this.recentFormValues?.cheque?.chequeArray?.length) {
      let values = this.recentFormValues['cheque'].chequeArray;
      let formArray = this.chequeForm.get('chequeArray');
      formArray.removeAt(0);
      for (let item of values) {
        formArray.push(this.chequeFormControls(item));
      }
    }
    //this.subscribeToChequeDateChanges();
  }

  onDateValueChange(newDateValue, index) {
    if (newDateValue) {
      const normalizedDate = new Date(Date.UTC(newDateValue.getFullYear(), newDateValue.getMonth(), newDateValue.getDate()));
      let row = this.chequeArrControls.at(index);
      setTimeout(() => {
        row.get('chequeDate').setValue(normalizedDate, {
          emitEvent: false
        });
      }, 1000);
    }
  }
  chooseCurrency(event, i) {
    this.chequeForm.markAllAsTouched();
    let control = this.chequeArrControls.at(i).get('vjod');
    let value = this.chequeArrControls.at(i).get('chequeCollectionJod').value;
    this.chequeArrControls.at(i).get('rate').setValue(event?.rate);
    if (event?.lookupId == 9001) {
      control.patchValue((value * 1).toFixed(3));
    } else if (event?.lookupId == 9002) {
      control.patchValue((value * +event?.rate).toFixed(3));
    } else if (event?.lookupId == 9003) {
      control.patchValue((value * +event?.rate).toFixed(3));
    }
    this.calculateAmount();
  }
  convertCash(i) {
    let control = this.chequeArrControls.at(i).get('vjod');
    let value = this.chequeArrControls.at(i).get('chequeCollectionJod').value;
    let currencyId = this.chequeArrControls.at(i).get('currencyId').value;
    if (currencyId == 9001) {
      control.patchValue((value * 1).toFixed(3));
    } else if (currencyId == 9002) {
      control.patchValue((value * 0.71).toFixed(3));
    } else if (currencyId == 9003) {
      control.patchValue((value * 0.76).toFixed(3));
    }
    this.calculateAmount();
  }
  fileAction(fileName, index, action, from) {
    if (action == 'view') {
      const modelRef = this._modalService.open(_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewFileComponent, {
        size: 'md'
      });
      let isReversed = this.chequeArrControls.at(index).get('isReversed').getRawValue();
      let isNew = this.chequeArrControls.at(index).get('isNew').getRawValue();
      if (!this.otherData?.reverse || isReversed === false) {
        let file;
        if (from == 'chequeImage') file = this.filesArray[index];else file = this.financeApprovalFiles[index];
        if (isNew) modelRef.componentInstance.imageUploadedView = file;else modelRef.componentInstance.imageUploadedView = {
          viewOnly: true,
          url: file
        };
      } else {
        // IN CASE OF REVERSE ONLY
        if (isReversed === null || isReversed) {
          let file;
          if (from == 'chequeImage') file = this.filesArray[index];else file = this.financeApprovalFiles[index];
          modelRef.componentInstance.imageUploadedView = {
            viewOnly: true,
            url: file
          };
        }
      }
    } else {
      if (this.otherData?.reverse) {
        let isNew = this.chequeArrControls.at(index).get('isNew').getRawValue();
        if (!isNew) return;
      }
      if (from == 'chequeImage') {
        let inputRef = this.inputRefList.toArray()[index];
        this.filesArray.splice(index, 1, {});
        this.chequeArrControls.at(index).get('attachment')?.setValue('');
        this.chequeArrControls.at(index).get('chequeImage')?.setValue('');
        inputRef.nativeElement.value = null;
      } else {
        let inputRef = this.input2RefList.toArray()[index];
        this.financeApprovalFiles.splice(index, 1, {});
        this.chequeArrControls.at(index).get('financeApprovalAttachment')?.setValue('');
        this.chequeArrControls.at(index).get('tempFinanceAttachment')?.setValue('');
        inputRef.nativeElement.value = null;
      }
    }
  }
  onFileChange(event, i, from) {
    let files = [...event.target.files];
    if (files.length > 0) {
      let isInvalid = this._commonService.checkInvalidImageFormat(files);
      if (!isInvalid) {
        files.forEach(file => {
          this.uploadFile(file, i, from);
          this._commonService.fileToBase64(file).then(response => {
            if (from == 'chequeImage') this.filesArray.splice(i, 1, response);else this.financeApprovalFiles.splice(i, 1, response);
          });
        });
      }
    }
  }
  uploadFile(file, index, from) {
    const formData = new FormData();
    formData.append('Folder', 'Cheques');
    formData.append('File', file);
    this._collectService.uploadFile(formData).subscribe(response => {
      if (response.isSuccess) {
        if (from == 'chequeImage') {
          this.uploadedFiles.splice(index, 1, response['data']);
          this.chequeArrControls.at(index).get('chequeImage')?.setValue(response['data']);
          this.chequeArrControls.at(index).get('attachment')?.setValue('Attachment');
        } else {
          this.chequeArrControls.at(index).get('financeApprovalAttachment')?.setValue(response['data']);
          this.chequeArrControls.at(index).get('tempFinanceAttachment')?.setValue('Attachment');
        }
      }
    });
  }
  closeModal() {
    if (this._activeModal) this._activeModal.close();else this._commonService.NavigateToRoute(`/${this.otherData?.redirectRoute}`);
  }
  chequeFormControls(item) {
    if (item) {
      return this.fb.group({
        isChecked: [item?.isChecked],
        chequeCollectionJod: [item?.chequeCollectionJod, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.0000000000000001)]],
        currencyId: [item?.currencyId, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        chequeNo: [item?.chequeNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]*$')]],
        chequeDate: [item?.chequeDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        bankId: [item?.bankId, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        chequeDrawerName: [item?.chequeDrawerName, this.otherData.collectionType != 7004 && [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        chequeImage: [item?.chequeImage],
        attachment: [item?.attachment, (this.otherData.collectionType == 7001 || this.otherData.collectionType == 7003) && [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        financeApprovalAttachment: [item?.financeApprovalAttachment],
        tempFinanceAttachment: [item?.tempFinanceAttachment, (this.otherData.collectionType == 7001 || this.otherData.collectionType == 7003) && [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        rate: [item?.rate],
        vjod: item?.vjod,
        isReversed: [(item?.isReversed ?? item?.isReversed) || false],
        isNew: [(item?.isNew ?? item?.isNew) || false],
        lineNew: [(item?.lineNew ?? item?.lineNew) || false]
      });
    } else {
      return this.fb.group({
        isChecked: [true],
        chequeCollectionJod: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.0000000000000001)]],
        currencyId: [9001, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        chequeNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]*$')]],
        chequeDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        bankId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        chequeDrawerName: [localStorage.getItem('pmcn') || 'No Customer', this.otherData.collectionType != 7004 && [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        chequeImage: [''],
        attachment: ['', (this.otherData.collectionType == 7001 || this.otherData.collectionType == 7003) && [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        financeApprovalAttachment: [''],
        tempFinanceAttachment: ['', (this.otherData.collectionType == 7001 || this.otherData.collectionType == 7003) && [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        vjod: null,
        rate: [1],
        isReversed: [false],
        isNew: [true],
        lineNew: [true]
      });
    }
  }
  reverse(item, index) {
    const previousFormGroup = this.chequeArrControls.at(index);
    if (previousFormGroup.invalid) return;
    const newFormGroup = this.fb.group({});
    Object.keys(previousFormGroup.controls).forEach(controlName => {
      const controlValue = lodash__WEBPACK_IMPORTED_MODULE_1___default().cloneDeep(previousFormGroup.get(controlName)?.value);
      newFormGroup.addControl(controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(controlValue));
    });
    let vjod = previousFormGroup.get('vjod').value * -1;
    let chequeCollectionJod = previousFormGroup.get('chequeCollectionJod').value * -1;
    newFormGroup.patchValue({
      vjod,
      chequeCollectionJod,
      isReversed: true,
      lineNew: true
    });
    previousFormGroup.get('isReversed').setValue(true);
    previousFormGroup.get('lineNew').setValue(false);
    this.chequeArrControls.insert(index + 1, newFormGroup);
    this.chequeArrControls.at(index).disable();
    this.chequeArrControls.at(index + 1).disable();
    let cheque = this.filesArray[index];
    let finance = this.financeApprovalFiles[index];
    this.filesArray.splice(index + 1, 0, cheque);
    this.financeApprovalFiles.splice(index + 1, 0, finance);
    this.sendAmount();
  }
  removeItem(i) {
    if (this.otherData?.refund) return;
    this.chequeArrControls.removeAt(i);
    this.sendAmount();
  }
  get chequeArrControls() {
    return this.chequeForm ? this.chequeForm.get('chequeArray') : null;
  }
  handleTabKeyDown() {
    if (this.otherData?.refund || this.chequeForm.invalid) {
      return;
    }
    if (this.otherData['amountExceeded']) {
      return;
    }
    if (!this.otherData?.isMultiCollect) this.addNewRow();
  }
  addNewRow() {
    this.chequeArrControls.push(this.chequeFormControls());
    // Below code is to patch last formgroup data to newly added formgroup
    const lastFormGroupValue = this.chequeArrControls.at(this.chequeArrControls.length - 2).getRawValue();
    const currentFormGroup = this.chequeArrControls.at(this.chequeArrControls.length - 1);
    let values = {
      bankId: lastFormGroupValue['bankId'],
      chequeDrawerName: lastFormGroupValue['chequeDrawerName'],
      isChecked: lastFormGroupValue['isChecked']
    };
    currentFormGroup.patchValue(values);
    this.chequeForm.markAsUntouched();
  }
  handleAmountFocus() {
    this.chequeForm.markAllAsTouched();
  }
  isSameCustomer(event, index) {
    let formGroup = this.chequeArrControls.at(index);
    if (event.target.checked) {
      if (this.otherData.collectionType == 7004) {
        formGroup.controls['chequeDrawerName'].setValue('No Customer');
      } else {
        let customerName = localStorage.getItem('pmcn');
        formGroup.controls['chequeDrawerName'].setValue(customerName);
      }
    } else {
      formGroup.controls['chequeDrawerName'].setValue('');
    }
  }
  handleSubmit() {
    if (this.chequeForm.invalid) {
      this.chequeForm.markAllAsTouched();
    } else {
      this.formValueEvent.emit({
        values: this.chequeForm.getRawValue(),
        submit: true
      });
    }
  }
  get f() {
    return this.chequeForm.controls;
  }
  sendAmount() {
    this.calculateAmount();
  }
  calculateAmount() {
    let amount = 0;
    for (let item of this.chequeArrControls.controls) {
      let formGroup = item;
      let value = parseFloat(formGroup.controls['vjod'].getRawValue());
      amount += value;
    }
    this.amountEvent.emit({
      amount
    });
  }
  resetForm() {
    this.chequeArrControls.clear();
    this.chequeArrControls.push(this.chequeFormControls());
    this.chequeForm.markAsUntouched();
    this.formValueEvent.emit({
      values: this.chequeForm.getRawValue(),
      touched: false,
      reset: true
    });
    this.amountEvent.emit({
      amount: 0
    });
  }
}
PaymentChequeComponent.ɵfac = function PaymentChequeComponent_Factory(t) {
  return new (t || PaymentChequeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbActiveModal, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_collect_service__WEBPACK_IMPORTED_MODULE_3__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_4__.SubjectService));
};
PaymentChequeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: PaymentChequeComponent,
  selectors: [["paymentChequeForm"]],
  viewQuery: function PaymentChequeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.inputRefList = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.input2RefList = _t);
    }
  },
  hostBindings: function PaymentChequeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.tab", function PaymentChequeComponent_keydown_tab_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    banks: "banks",
    currencies: "currencies",
    recentFormValues: "recentFormValues",
    isPending: "isPending",
    otherData: "otherData"
  },
  outputs: {
    amountEvent: "amountEvent",
    formValueEvent: "formValueEvent"
  },
  decls: 47,
  vars: 11,
  consts: [[1, "tab-item"], [1, "row"], [1, "col-md-12", "text-end", "my-2"], ["type", "button", "class", "btn btn-trash", 3, "click", 4, "ngIf"], [3, "formGroup", "submit"], [1, "col-md-12"], [1, "card-table"], [1, ""], [1, "table"], ["width", "10%"], ["width", "15%"], [4, "ngIf"], ["formArrayName", "chequeArray", 4, "ngFor", "ngForOf"], ["class", "col-md-12 d-flex mt-2", 4, "ngIf"], ["class", "col-12 mb-4", 4, "ngIf"], [1, "btns-group", "my-2", "me-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], ["class", "fa-solid fa-circle-notch fa-spin", 4, "ngIf"], ["type", "button", 1, "btn", "btn-trash", 3, "click"], ["src", "assets/images/reload.png", "alt", "", 2, "width", "25px"], ["formArrayName", "chequeArray"], [3, "formGroupName"], [1, "form-group"], ["type", "number", "placeholder", "Amount", "formControlName", "chequeCollectionJod", "appDecimalNumber", "", 1, "form-control", 3, "input", "change"], [1, "ngselect-curruncy", "form-group"], ["placeholder", "Currency", "bindLabel", "name", "bindValue", "lookupId", "formControlName", "currencyId", 3, "items", "change"], ["type", "text", "placeholder", "Cheque Date", "formControlName", "chequeDate", "placement", "top", "bsDatepicker", "", 1, "form-control", 3, "minDate", "maxDate", "bsConfig", "bsValueChange"], ["type", "text", "placeholder", "", "formControlName", "chequeNo", "name", "chequeNo", 1, "form-control"], ["placeholder", " Select Bank ", "bindLabel", "name", "bindValue", "id", "formControlName", "bankId", 3, "items"], [1, "custom-file", "align-items-center"], ["type", "file", "class", "file-input__input", 3, "id", "change", 4, "ngIf"], [1, "file-input__label"], ["type", "text", "placeholder", "", "formControlName", "chequeDrawerName", "OnlyCharacter", "", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControlName", "isChecked", 1, "form-check-input", 3, "change"], ["class", "error", 4, "ngIf"], [1, "error"], ["type", "file", 1, "file-input__input", 3, "id", "change"], ["fileInput", ""], ["height", "20", "src", "assets/images/eye.png", 1, "cursor-pointer", 3, "click"], ["height", "20", "src", "assets/images/trash.png", 1, "cursor-pointer", 3, "click"], ["fileInput2", ""], [4, "ngIf", "ngIfElse"], ["reverseCase", ""], ["src", "assets/images/trash.png", "alt", "", 1, "cursor-pointer", 2, "width", "25px", 3, "click"], ["reverseTemp", ""], [1, "cursor-pointer", "green-clr", "fas", "fa-rotate-left", "font-20", 3, "click"], [1, "col-md-12", "d-flex", "mt-2"], [1, "blue-clr", "d-flex", "align-items-center", "fw-500", "gap-1"], [1, "fa-solid", "fa-circle-plus", "primary-clr", "fa-2x"], [1, "col-12", "mb-4"], [1, "input-label"], [1, "form-control", 3, "change"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function PaymentChequeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PaymentChequeComponent_button_3_Template, 2, 0, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function PaymentChequeComponent_Template_form_submit_4_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 1)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "table", 8)(10, "thead")(11, "tr")(12, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Cheque Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Value in JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Cheque No");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Cheque Bank");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, PaymentChequeComponent_th_30_Template, 4, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Drawer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Same Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, PaymentChequeComponent_th_35_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, PaymentChequeComponent_ng_container_37_Template, 42, 26, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, PaymentChequeComponent_div_38_Template, 4, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, PaymentChequeComponent_div_39_Template, 4, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 5)(41, "div", 15)(42, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentChequeComponent_Template_button_click_42_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, PaymentChequeComponent_i_46_Template, 1, 0, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.otherData.reverse && !(ctx.otherData == null ? null : ctx.otherData.refund));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.chequeForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.otherData.collectionType == 7001 || ctx.otherData.collectionType == 7003);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.chequeArrControls == null ? null : ctx.chequeArrControls.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect) && !(ctx.otherData == null ? null : ctx.otherData.refund));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.otherData.collectionType == 7001 || ctx.otherData.collectionType == 7004 || ctx.otherData.collectionType == 7005 || ctx.otherData.collectionType == 7008 || ctx.otherData.collectionType == 7009 || ctx.otherData.collectionType == 7002 && ctx.otherData.refund);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.colllectedViaMachine);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isPending);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.isPending && "Saving" || "Confirm", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isPending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_5__.DecimalNumberDirective, _shared_directive_character_directive__WEBPACK_IMPORTED_MODULE_6__.CharacterDirective],
  styles: [".form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n  .ng-dropdown-panel {\n  z-index: 9999999 !important;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 0px 10px 15px !important;\n  font-weight: 500;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n\n.custom-file[_ngcontent-%COMP%] {\n  border: 1px solid #dadada;\n  display: flex;\n  height: 46px;\n  border-radius: 0.375rem;\n  justify-content: center;\n  gap: 5px;\n  background: #fff;\n}\n\n.file-input__input[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.file-input__label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gray-500);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvY2hlcXVlL2NoZXF1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDRSwyQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBSEY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUlBLFNBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gIH1cblxuICAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gIHotaW5kZXg6IDk5OTk5OTkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQge1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4uY2FyZC10YWJsZSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLyoqKkZJTEUqL1xuLmN1c3RvbS1maWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZmlsZS1pbnB1dF9faW5wdXQge1xuICB3aWR0aDogMC4xcHg7XG4gIGhlaWdodDogMC4xcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5maWxlLWlucHV0X19sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 77379:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/confirm-payment-modal/confirm-payment-modal.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPaymentModalComponent": () => (/* binding */ ConfirmPaymentModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function ConfirmPaymentModalComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The remaining amount after this payment: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r0.data == null ? null : ctx_r0.data.remainingAmount, "2.3-3"), " JOD");
  }
}
class ConfirmPaymentModalComponent {
  constructor(_activeModal) {
    this._activeModal = _activeModal;
  }
  ngOnInit() {}
}
ConfirmPaymentModalComponent.ɵfac = function ConfirmPaymentModalComponent_Factory(t) {
  return new (t || ConfirmPaymentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
};
ConfirmPaymentModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmPaymentModalComponent,
  selectors: [["app-confirm-payment-modal"]],
  inputs: {
    data: "data"
  },
  decls: 13,
  vars: 3,
  consts: [[1, "modal-header"], [1, "font-18", "fw-600"], [1, "modal-body"], [1, "m-0", "font-16", "fw-600"], [4, "ngIf"], [1, "modal-footer"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-save", 3, "click"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "mt-2", "font-14", "fw-500"]],
  template: function ConfirmPaymentModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConfirmPaymentModalComponent_ng_container_6_Template, 4, 4, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmPaymentModalComponent_Template_button_click_9_listener() {
        return ctx._activeModal.close("close");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmPaymentModalComponent_Template_button_click_11_listener() {
        return ctx._activeModal.dismiss("dissmiss");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!(ctx.data == null ? null : ctx.data.refund) && "Confirm Payment" || "Confirm Refund Payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!(ctx.data == null ? null : ctx.data.refund) && "Do you want to continue?" || "Are you sure you want to refund this payment?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.collectionType == 7001 || ctx.data.collectionType == 7002 || ctx.data.collectionType == 7003);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 90903:
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/on-account/on-account.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnAccountComponent": () => (/* binding */ OnAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal-payment/modal-pay-done/modal-pay-done.component */ 55034);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/collect.service */ 43346);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_saving_loader_saving_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/saving-loader/saving-loader.component */ 53823);











function OnAccountComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cashier Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "textarea", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OnAccountComponent_div_0_Template_textarea_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.cashierNotes = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.cashierNotes);
  }
}
function OnAccountComponent_div_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OnAccountComponent_div_1_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OnAccountComponent_div_1_saving_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "saving-loader");
  }
}
function OnAccountComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OnAccountComponent_div_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, OnAccountComponent_div_1_button_4_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, OnAccountComponent_div_1_saving_loader_5_Template, 1, 0, "saving-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isPending);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isPending);
  }
}
class OnAccountComponent {
  constructor(_activeModal, _modalService, _collectService, _subjectService, _commonService, _spinner) {
    this._activeModal = _activeModal;
    this._modalService = _modalService;
    this._collectService = _collectService;
    this._subjectService = _subjectService;
    this._commonService = _commonService;
    this._spinner = _spinner;
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.cashierNotes = '';
  }
  ngOnInit() {
    console.log(this.otherData);
  }
  closeModal() {
    if (this._activeModal) this._activeModal.close();else this._commonService.NavigateToRoute(`/${this.otherData?.redirectRoute}`);
  }
  confirm() {
    this._spinner.show();
    if (this.otherData['isMultiCollect']) {
      this.isPending = true;
      let obj = {
        ordersCollection: {
          orderCollectionType: this.otherData?.collectionType,
          orderNo: this.otherData?.orderNo
        },
        ordersOnAccountCollection: {
          onAccountCollectionJod: this.otherData?.grandAmount,
          onAccountPayerName: this.otherData?.customerName
        }
      };
      this._collectService.collectionOrderV2MultiCollect(obj).subscribe(response => {
        if (response.isSuccess) {
          this.openSuccessModal('ok', response);
        } else {
          this.openSuccessModal('no', response);
        }
      }, error => {
        this.openSuccessModal('no', error);
      }).add(() => this._spinner.hide());
    } else {
      let orderId = 0;
      if (this.otherData?.collectionType == 7001) orderId = this.otherData.servicesSalesOrderNo || this.otherData.order?.servicesSalesOrderNo;else if (this.otherData?.collectionType == 7003) orderId = this.otherData?.sparePartsSalesOrderOpportunityNo || this.otherData?.order?.sparePartsSalesOrderOpportunityNo;
      this.isPending = true;
      let obj = {
        ordersCollection: {
          orderCollectionType: this.otherData?.collectionType,
          orderNo: orderId,
          isReplace: this.otherData?.isFromReturn,
          cashierNotes: this.cashierNotes
        },
        ordersOnAccountCollection: {
          onAccountCollectionJod: this.otherData?.grandAmount || this.otherData?.order?.grandAmount,
          onAccountPayerName: this.otherData?.customer?.customerName
        }
      };
      this._collectService.collectionOrderV2(obj).subscribe(response => {
        if (response.isSuccess) {
          this._subjectService.isCollectionPaymentDone.next(true);
          this._subjectService.collectedOrder.next({
            orderId
          });
          this.openSuccessModal('ok', response);
        } else {
          this.openSuccessModal('no', response);
        }
      }, error => {
        this.openSuccessModal('no', error);
      }).add(() => this._spinner.hide());
    }
  }
  openSuccessModal(name, response, error) {
    this.isPending = false;
    const modalRef = this._modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
    modalRef.componentInstance.name = name;
    if ((this.otherData.collectionType == 7001 || this.otherData.collectionType == 7002 || this.otherData.collectionType == 7003) && !this.otherData['isMultiCollect']) {
      let receipt, invoice, summary;
      if (response.data.statusObj[0].lookupId == 10005)
        //partial status
        receipt = response.data?.receipt;else if (response.data.statusObj[0].lookupId == 10004)
        //collected status
        {
          receipt = response.data?.receipt;
          invoice = response.data?.invoices;
          summary = response.data?.summaryInvoice;
        }
      modalRef.componentInstance.data = {
        collectionType: this.otherData.collectionType,
        status: response.data.statusObj[0].lookupId,
        invoice,
        receipt,
        summary,
        invoiceType: this.otherData?.invoiceType?.toLowerCase()
      };
    } else if (this.otherData['isMultiCollect']) {
      modalRef.componentInstance.data = {
        collectionType: this.otherData?.collectionType,
        isMultiCollect: this.otherData['isMultiCollect']
      };
    } else {
      modalRef.componentInstance.data = {
        collectionType: this.otherData.collectionType,
        invoices: response.data
      };
    }
    if (response) {
      if (response.error) modalRef.componentInstance.errors = response.error['errors'];else modalRef.componentInstance.response = response;
    } else modalRef.componentInstance.errors = error.error.errors || error.error.Errors;
  }
}
OnAccountComponent.ɵfac = function OnAccountComponent_Factory(t) {
  return new (t || OnAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_collect_service__WEBPACK_IMPORTED_MODULE_1__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_2__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService));
};
OnAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: OnAccountComponent,
  selectors: [["on-account"]],
  inputs: {
    otherData: "otherData"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "col-12 mb-4", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "col-12", "mb-4"], [1, "input-label"], [1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], [1, "btns-group", "my-2", "me-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", "class", "btn btn-save", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-save", 3, "click"]],
  template: function OnAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, OnAccountComponent_div_0_Template, 4, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OnAccountComponent_div_1_Template, 6, 2, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.otherData.collectionType == 7001 || ctx.otherData.collectionType == 7004 || ctx.otherData.collectionType == 7005);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.otherData == null ? null : ctx.otherData.invoiceType == null ? null : ctx.otherData.invoiceType.toLowerCase()) == "credit" || (ctx.otherData == null ? null : ctx.otherData.invoiceType == null ? null : ctx.otherData.invoiceType.toLowerCase()) == "internal" || (ctx.otherData == null ? null : ctx.otherData.invoiceType == null ? null : ctx.otherData.invoiceType.toLowerCase()) == "tmc");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _shared_components_saving_loader_saving_loader_component__WEBPACK_IMPORTED_MODULE_4__.SavingLoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 82401:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/other-revenue-form/components/add-new-customer/add-new-customer.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewCustomerComponent": () => (/* binding */ AddNewCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/collect.service */ 43346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/directive/numbers-only.directive */ 82757);









function AddNewCustomerComponent_ng_container_5_ng_container_31_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNewCustomerComponent_ng_container_5_ng_container_31_tr_1_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.selectCustomer(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selectedRow", (item_r8 == null ? null : item_r8.customerNo) == ctx_r7.selectedCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.customerNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.customerPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((item_r8 == null ? null : item_r8.customerCategory) == 1 ? "Individual" : "Corporate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", (item_r8 == null ? null : item_r8.customerCredit) == 1 && "fa-check green-clr" || "fa-times primary-clr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", (item_r8 == null ? null : item_r8.confirmed) && "fa-check green-clr" || "fa-times primary-clr");
  }
}
function AddNewCustomerComponent_ng_container_5_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_container_5_ng_container_31_tr_1_Template, 13, 8, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.customerList);
  }
}
function AddNewCustomerComponent_ng_container_5_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No records to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AddNewCustomerComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6)(2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Search (Account No. | Name | Mobile)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 8)(5, "div", 9)(6, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddNewCustomerComponent_ng_container_5_Template_input_input_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.handleSearch($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 14)(11, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Credit Customers Only");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddNewCustomerComponent_ng_container_5_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.isCreditCustomer = $event);
    })("change", function AddNewCustomerComponent_ng_container_5_Template_input_change_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.handleCreditCustomerChange($event, _r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 17)(15, "table", 18)(16, "thead")(17, "tr")(18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Account No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Phone 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Customer Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Credit Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Confirmed Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AddNewCustomerComponent_ng_container_5_ng_container_31_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AddNewCustomerComponent_ng_container_5_ng_template_32_Template, 3, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20)(35, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNewCustomerComponent_ng_container_5_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.handleSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNewCustomerComponent_ng_container_5_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.addNewCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Add New");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.isCreditCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.customerList == null ? null : ctx_r0.customerList.length)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.selectedCustomer <= 0);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_15_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r26 == null ? null : item_r26.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r26 == null ? null : item_r26.text);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_15_ng_container_10_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_15_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_15_ng_container_10_ng_container_1_span_1_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r27.f == null ? null : (tmp_0_0 = ctx_r27.f.get("title")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_15_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_15_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r25.f == null ? null : (tmp_0_0 = ctx_r25.f.get("title")) == null ? null : tmp_0_0.invalid) && (ctx_r25.f == null ? null : (tmp_0_0 = ctx_r25.f.get("title")) == null ? null : tmp_0_0.touched) || (ctx_r25.f == null ? null : (tmp_0_0 = ctx_r25.f.get("title")) == null ? null : tmp_0_0.dirty));
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28)(2, "div", 29)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 37)(6, "select", 44)(7, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "---Select Title---");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AddNewCustomerComponent_ng_template_6_ng_container_15_option_9_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AddNewCustomerComponent_ng_template_6_ng_container_15_ng_container_10_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r17.titleList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.f == null ? null : (tmp_1_0 = ctx_r17.f.get("title")) == null ? null : tmp_1_0.errors);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_24_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_24_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input allows only characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_24_ng_container_1_span_1_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddNewCustomerComponent_ng_template_6_ng_container_24_ng_container_1_span_2_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r29.f == null ? null : (tmp_0_0 = ctx_r29.f.get("fname")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r29.f == null ? null : (tmp_1_0 = ctx_r29.f.get("fname")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_24_ng_container_1_Template, 3, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r18.f == null ? null : (tmp_0_0 = ctx_r18.f.get("fname")) == null ? null : tmp_0_0.invalid) && (ctx_r18.f == null ? null : (tmp_0_0 = ctx_r18.f.get("fname")) == null ? null : tmp_0_0.touched) || (ctx_r18.f == null ? null : (tmp_0_0 = ctx_r18.f.get("fname")) == null ? null : tmp_0_0.dirty));
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_3_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input allows only characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_3_ng_container_1_span_1_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_3_ng_container_1_span_2_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r35.f == null ? null : (tmp_0_0 = ctx_r35.f.get("sname")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r35.f == null ? null : (tmp_1_0 = ctx_r35.f.get("sname")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r32.f == null ? null : (tmp_0_0 = ctx_r32.f.get("sname")) == null ? null : tmp_0_0.invalid) && (ctx_r32.f == null ? null : (tmp_0_0 = ctx_r32.f.get("sname")) == null ? null : tmp_0_0.touched) || (ctx_r32.f == null ? null : (tmp_0_0 = ctx_r32.f.get("sname")) == null ? null : tmp_0_0.dirty));
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_6_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_6_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input allows only characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_6_ng_container_1_span_1_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_6_ng_container_1_span_2_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r38.f == null ? null : (tmp_0_0 = ctx_r38.f.get("thName")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r38.f == null ? null : (tmp_1_0 = ctx_r38.f.get("thName")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r33.f == null ? null : (tmp_0_0 = ctx_r33.f.get("thName")) == null ? null : tmp_0_0.invalid) && (ctx_r33.f == null ? null : (tmp_0_0 = ctx_r33.f.get("thName")) == null ? null : tmp_0_0.touched) || (ctx_r33.f == null ? null : (tmp_0_0 = ctx_r33.f.get("thName")) == null ? null : tmp_0_0.dirty));
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_9_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_9_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input allows only characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_9_ng_container_1_span_1_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_9_ng_container_1_span_2_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r41.f == null ? null : (tmp_0_0 = ctx_r41.f.get("fourthName")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r41.f == null ? null : (tmp_1_0 = ctx_r41.f.get("fourthName")) == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_9_ng_container_1_Template, 3, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r34.f == null ? null : (tmp_0_0 = ctx_r34.f.get("fourthName")) == null ? null : tmp_0_0.invalid) && (ctx_r34.f == null ? null : (tmp_0_0 = ctx_r34.f.get("fourthName")) == null ? null : tmp_0_0.touched) || (ctx_r34.f == null ? null : (tmp_0_0 = ctx_r34.f.get("fourthName")) == null ? null : tmp_0_0.dirty));
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_3_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_6_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AddNewCustomerComponent_ng_template_6_ng_container_25_ng_container_9_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.f == null ? null : (tmp_0_0 = ctx_r19.f.get("sname")) == null ? null : tmp_0_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.f == null ? null : (tmp_1_0 = ctx_r19.f.get("thName")) == null ? null : tmp_1_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.f == null ? null : (tmp_2_0 = ctx_r19.f.get("fourthName")) == null ? null : tmp_2_0.errors);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28)(2, "div", 29)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30)(6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_37_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_37_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Minimum 9 digits required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_37_ng_container_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Maximum 10 digits allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_37_ng_container_1_span_1_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddNewCustomerComponent_ng_template_6_ng_container_37_ng_container_1_span_2_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddNewCustomerComponent_ng_template_6_ng_container_37_ng_container_1_span_3_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r44.f == null ? null : (tmp_0_0 = ctx_r44.f.get("mobile")) == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r44.f == null ? null : (tmp_1_0 = ctx_r44.f.get("mobile")) == null ? null : tmp_1_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r44.f == null ? null : (tmp_2_0 = ctx_r44.f.get("mobile")) == null ? null : tmp_2_0.errors["maxlength"]);
  }
}
function AddNewCustomerComponent_ng_template_6_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddNewCustomerComponent_ng_template_6_ng_container_37_ng_container_1_Template, 4, 3, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r21.f == null ? null : (tmp_0_0 = ctx_r21.f.get("mobile")) == null ? null : tmp_0_0.invalid) && (ctx_r21.f == null ? null : (tmp_0_0 = ctx_r21.f.get("mobile")) == null ? null : tmp_0_0.touched) || (ctx_r21.f == null ? null : (tmp_0_0 = ctx_r21.f.get("mobile")) == null ? null : tmp_0_0.dirty));
  }
}
function AddNewCustomerComponent_ng_template_6_p_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r22.responseMessage);
  }
}
function AddNewCustomerComponent_ng_template_6_i_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 58);
  }
}
function AddNewCustomerComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function AddNewCustomerComponent_ng_template_6_Template_form_submit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r48.saveCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28)(2, "div", 29)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Customer Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30)(6, "div", 31)(7, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddNewCustomerComponent_ng_template_6_Template_input_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.handleCetegoryChange(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 31)(11, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddNewCustomerComponent_ng_template_6_Template_input_change_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r51.handleCetegoryChange(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Corporate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AddNewCustomerComponent_ng_template_6_ng_container_15_Template, 12, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 28)(17, "div", 29)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 37)(21, "div", 28)(22, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AddNewCustomerComponent_ng_template_6_ng_container_24_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AddNewCustomerComponent_ng_template_6_ng_container_25_Template, 10, 3, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AddNewCustomerComponent_ng_template_6_ng_container_27_Template, 15, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 28)(29, "div", 29)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 37)(33, "div", 9)(34, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "962");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, AddNewCustomerComponent_ng_template_6_ng_container_37_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, AddNewCustomerComponent_ng_template_6_p_39_Template, 2, 1, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 20)(41, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNewCustomerComponent_ng_template_6_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r52.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, AddNewCustomerComponent_ng_template_6_i_45_Template, 1, 0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_4_0;
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isIndividual);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("col-12", !ctx_r2.isIndividual);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx_r2.isIndividual && "First Name" || "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f == null ? null : (tmp_4_0 = ctx_r2.f.get("fname")) == null ? null : tmp_4_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isIndividual);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isIndividual);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f == null ? null : (tmp_7_0 = ctx_r2.f.get("mobile")) == null ? null : tmp_7_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.responseMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.isSubmitted && "Saving" || "Save", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isSubmitted);
  }
}
class AddNewCustomerComponent {
  constructor(_collectService, fb, _activeModal) {
    this._collectService = _collectService;
    this.fb = fb;
    this._activeModal = _activeModal;
    this.isSubmitted = false;
    this.isNewCustomer = false;
    this.isIndividual = true;
    this.customerList = [];
    this.selectedCustomer = 0;
    this.isCreditCustomer = false;
    this.titleList = [/*{ value: 0, text: 'Messrs' }, */{
      value: 1,
      text: 'Mr.'
    }, {
      value: 2,
      text: 'Ms.'
    }, {
      value: 11,
      text: 'Dr.'
    }, {
      value: 12,
      text: 'Eng.'
    }];
    this.sendData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.searchSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  }
  ngOnInit() {
    this.initCustomerForm();
    this.searchSubscription = this.searchSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(value => this._collectService.getMarkaziaCustomers(value, Number(this.isCreditCustomer)))).subscribe(response => {
      this.customerList = response['data'];
    });
  }
  initCustomerForm() {
    this.formGroup = this.fb.group({
      title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      fname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z]*$')]],
      sname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z]*$')]],
      thName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z]*$')]],
      fourthName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z]*$')]],
      gender: ['0'],
      customerCategory: ['1'],
      mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(10)]]
    });
  }
  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
  handleCreditCustomerChange(event, value) {
    if (value) {
      this._collectService.getMarkaziaCustomers(value, Number(this.isCreditCustomer)).subscribe(response => {
        this.customerList = response['data'];
      });
    }
  }
  handleSearch(event) {
    const value = event.target.value;
    this.searchSubject.next(value);
  }
  handleCetegoryChange(value) {
    this.isIndividual = value == 1 ? true : false;
    if (this.isIndividual) {
      this.f.get('title').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
      this.f.get('title').updateValueAndValidity();
      this.f.get('sname').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z]*$')]);
      this.f.get('sname').updateValueAndValidity();
      this.f.get('thName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z]*$')]);
      this.f.get('thName').updateValueAndValidity();
      this.f.get('fourthName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z]*$')]);
      this.f.get('fourthName').updateValueAndValidity();
    } else {
      this.f.get('title').clearValidators();
      this.f.get('title').updateValueAndValidity();
      this.f.get('sname').clearValidators();
      this.f.get('sname').updateValueAndValidity();
      this.f.get('thName').clearValidators();
      this.f.get('thName').updateValueAndValidity();
      this.f.get('fourthName').clearValidators();
      this.f.get('fourthName').updateValueAndValidity();
    }
  }
  removeByIndex(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
  }
  saveCustomer() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    } else {
      this.isSubmitted = true;
      let obj;
      let values = this.formGroup.value;
      let mobile = values?.mobile;
      if (mobile.charAt(0) == 0) {
        mobile = this.removeByIndex(values?.mobile, 0);
      }
      values = {
        ...values,
        customerCategory: +values?.customerCategory,
        gender: +values?.customerCategory,
        mobile: `962${mobile}`
      };
      if (this.isIndividual) obj = values;else {
        obj = {
          corporateName: values?.fname,
          customerCategory: values?.customerCategory,
          mobile: values?.mobile
        };
      }
      this._collectService.addMarkaziaCustomer(obj).subscribe(response => {
        this.isSubmitted = false;
        console.log(response);
        if (response['isSuccess']) {
          this.sendData.emit(response['data']);
          this._activeModal.close();
        }
      }, error => {
        this.isSubmitted = false;
        this.responseMessage = error.error?.errors[0]?.ErrorMessageEn;
        setTimeout(() => {
          this.responseMessage = '';
        }, 5000);
      });
    }
  }
  selectCustomer(item) {
    this.selectedItem = item;
    this.selectedCustomer = item?.customerNo;
  }
  handleSelect() {
    let data = {
      customerNo: this.selectedItem?.customerNo,
      corporateName: this.selectedItem?.customerName,
      mobile: this.selectedItem?.customerPhone
    };
    this.sendData.emit(data);
    this._activeModal.close();
  }
  addNewCustomer() {
    this.isNewCustomer = true;
  }
  goBack() {
    this.isNewCustomer = false;
  }
  get f() {
    return this.formGroup;
  }
}
AddNewCustomerComponent.ɵfac = function AddNewCustomerComponent_Factory(t) {
  return new (t || AddNewCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_collect_service__WEBPACK_IMPORTED_MODULE_0__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal));
};
AddNewCustomerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AddNewCustomerComponent,
  selectors: [["app-add-new-customer"]],
  outputs: {
    sendData: "sendData"
  },
  decls: 8,
  vars: 3,
  consts: [[1, "modal-body"], [1, "d-flex", "mb-4", "justify-content-between"], [1, "fw-500", "mb-0"], [1, "fas", "fa-times-circle", "fa-2x", "primary-clr", "cursor-pointer", 3, "click"], [4, "ngIf", "ngIfElse"], ["newCustomer", ""], [1, "d-flex", "align-items-center"], [1, "flex-grow-1", "m-0"], [1, "flex-grow-1"], [1, "input-group"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "input"], ["inputSearch", ""], [1, "input-group-text"], [1, "fas", "fa-search"], [1, "d-flex", "align-items-center", "gap-1"], ["for", "check", 1, "font-13"], ["id", "check", "type", "checkbox", 1, "ms-1", "m-0", "form-check-input", "input-checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "scrollable-table-wrapper"], [1, "table", "table-striped", "my-4", "table-bordered"], ["noCustomers", ""], [1, "d-flex", "gap-2"], ["type", "button", 1, "redBtn", 3, "disabled", "click"], ["type", "button", 1, "redBtn", 3, "click"], ["class", "cursor-pointer", 3, "selectedRow", "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", 3, "click"], [1, "fas", "cursor-pointer", 3, "ngClass"], ["colspan", "6"], [1, "add-cutsomer", 3, "formGroup", "submit"], [1, "row"], [1, "col-2"], [1, "col-10", "d-flex", "gap-2"], [1, "form-check"], ["value", "1", "type", "radio", "id", "individual", "formControlName", "customerCategory", 1, "form-check-input", 3, "change"], ["for", "individual", 1, "form-check-label"], ["value", "2", "type", "radio", "id", "corporate", "formControlName", "customerCategory", 1, "form-check-input", 3, "change"], ["for", "corporate", 1, "form-check-label"], [4, "ngIf"], [1, "col-10"], [1, "col-3"], ["type", "text", "formControlName", "fname", 1, "form-control", 3, "placeholder"], ["type", "text", "placeholder", "e.g (7xxxxxxxx) or (07xxxxxxxx)", "numbersOnly", "", "formControlName", "mobile", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "redBtn"], ["class", "fa-solid fa-circle-notch fa-spin", 4, "ngIf"], ["formControlName", "title", 1, "form-control"], ["selected", "", "disabled", "", "value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "error", 4, "ngIf"], [1, "error"], ["type", "text", "placeholder", "Last Name", "formControlName", "sname", 1, "form-control"], ["type", "text", "placeholder", "Third Name", "formControlName", "thName", 1, "form-control"], ["type", "text", "placeholder", "Fourth Name", "formControlName", "fourthName", 1, "form-control"], ["value", "0", "type", "radio", "id", "flexRadioDefault1", "formControlName", "gender", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["value", "1", "type", "radio", "id", "flexRadioDefault2", "formControlName", "gender", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], [1, "alert", "alert-danger"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function AddNewCustomerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddNewCustomerComponent_Template_i_click_4_listener() {
        return ctx._activeModal.close("");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AddNewCustomerComponent_ng_container_5_Template, 39, 4, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddNewCustomerComponent_ng_template_6_Template, 46, 12, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isNewCustomer && "New Account" || "Search Customer Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isNewCustomer)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _shared_directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_1__.NumberDirective],
  styles: ["div.scrollable-table-wrapper[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow-y: auto;\n  margin-bottom: 30px;\n}\ndiv.scrollable-table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ndiv.scrollable-table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #F6F6F6;\n}\ndiv.scrollable-table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  position: sticky;\n  top: 0;\n  background: #cfcfcf;\n}\ndiv.scrollable-table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .selectedRow[_ngcontent-%COMP%] {\n  background: #ffe2e4;\n  font-weight: 600;\n}\n\n.add-cutsomer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.add-cutsomer[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvb3RoZXItcmV2ZW51ZS1mb3JtL2NvbXBvbmVudHMvYWRkLW5ldy1jdXN0b21lci9hZGQtbmV3LWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBQ007RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFHSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFETjs7QUFPRTtFQUNFLGVBQUE7QUFKSjtBQU9FO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnNjcm9sbGFibGUtdGFibGUtd3JhcHBlciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XG5cbiAgICAgIHRoIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2ZjZmNmO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3RlZFJvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZlMmU0O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbn1cblxuLmFkZC1jdXRzb21lciB7XG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2356:
/*!********************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/other-revenue-form/other-revenue-form.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherRevenueFormComponent": () => (/* binding */ OtherRevenueFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_add_new_customer_add_new_customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-new-customer/add-new-customer.component */ 82401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/modal-message/modal-message.component */ 86260);
/* harmony import */ var _markazia_vouchers_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../markazia-vouchers/services/markazia-voucher.service */ 81181);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/collect.service */ 43346);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/general.service */ 21864);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/shared.service */ 69082);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/directive/decimal-number.directive */ 55134);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/validation-error/validation-error.component */ 67711);


















function OtherRevenueFormComponent_ng_container_10_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Customer info is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function OtherRevenueFormComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, OtherRevenueFormComponent_ng_container_10_ng_container_1_span_1_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.f["customerName"] == null ? null : ctx_r7.f["customerName"].errors == null ? null : ctx_r7.f["customerName"].errors["required"]);
  }
}
function OtherRevenueFormComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, OtherRevenueFormComponent_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r0.f["customerName"] == null ? null : ctx_r0.f["customerName"].invalid) && (ctx_r0.f["customerName"] == null ? null : ctx_r0.f["customerName"].touched) || (ctx_r0.f["customerName"] == null ? null : ctx_r0.f["customerName"].dirty));
  }
}
function OtherRevenueFormComponent_ng_container_18_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function OtherRevenueFormComponent_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, OtherRevenueFormComponent_ng_container_18_ng_container_1_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.f["revenueCategoryId"] == null ? null : ctx_r9.f["revenueCategoryId"].errors == null ? null : ctx_r9.f["revenueCategoryId"].errors["required"]);
  }
}
function OtherRevenueFormComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, OtherRevenueFormComponent_ng_container_18_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r1.f["revenueCategoryId"] == null ? null : ctx_r1.f["revenueCategoryId"].invalid) && (ctx_r1.f["revenueCategoryId"] == null ? null : ctx_r1.f["revenueCategoryId"].touched) || (ctx_r1.f["revenueCategoryId"] == null ? null : ctx_r1.f["revenueCategoryId"].dirty));
  }
}
function OtherRevenueFormComponent_div_19_ng_container_4_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function OtherRevenueFormComponent_div_19_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, OtherRevenueFormComponent_div_19_ng_container_4_ng_container_1_span_1_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.f["costCenterId"] == null ? null : ctx_r12.f["costCenterId"].errors["required"]);
  }
}
function OtherRevenueFormComponent_div_19_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, OtherRevenueFormComponent_div_19_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r11.f["costCenterId"] == null ? null : ctx_r11.f["costCenterId"].invalid) && (ctx_r11.f["costCenterId"] == null ? null : ctx_r11.f["costCenterId"].touched) || (ctx_r11.f["costCenterId"] == null ? null : ctx_r11.f["costCenterId"].dirty));
  }
}
function OtherRevenueFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8)(1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Cost Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ng-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, OtherRevenueFormComponent_div_19_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r2.costCenterList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.f["costCenterId"] == null ? null : ctx_r2.f["costCenterId"].errors);
  }
}
function OtherRevenueFormComponent_ng_container_25_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function OtherRevenueFormComponent_ng_container_25_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select payment category first");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function OtherRevenueFormComponent_ng_container_25_ng_container_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Can't be zero or negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function OtherRevenueFormComponent_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, OtherRevenueFormComponent_ng_container_25_ng_container_1_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, OtherRevenueFormComponent_ng_container_25_ng_container_1_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, OtherRevenueFormComponent_ng_container_25_ng_container_1_span_3_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.f["amount"] == null ? null : ctx_r14.f["amount"].errors == null ? null : ctx_r14.f["amount"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r14.revenueForm.get("revenueCategoryId").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.f["amount"] == null ? null : ctx_r14.f["amount"].errors == null ? null : ctx_r14.f["amount"].errors["min"]);
  }
}
function OtherRevenueFormComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, OtherRevenueFormComponent_ng_container_25_ng_container_1_Template, 4, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r3.f["amount"] == null ? null : ctx_r3.f["amount"].invalid) && (ctx_r3.f["amount"] == null ? null : ctx_r3.f["amount"].touched) || (ctx_r3.f["amount"] == null ? null : ctx_r3.f["amount"].dirty));
  }
}
function OtherRevenueFormComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r18 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r18.text, "% ");
  }
}
function OtherRevenueFormComponent_ng_template_36_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r19.text, "% ");
  }
}
function OtherRevenueFormComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, OtherRevenueFormComponent_ng_template_36_ng_container_0_Template, 2, 1, "ng-container", 5);
  }
  if (rf & 2) {
    const item_r19 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.text);
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function OtherRevenueFormComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21)(1, "div", 33)(2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function OtherRevenueFormComponent_div_48_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.handleNoAmountChange($event));
    })("ngModelChange", function OtherRevenueFormComponent_div_48_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.noTotalAmount = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "No Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r6.noTotalAmount)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](2, _c0));
  }
}
const _c1 = function () {
  return {
    required: "Input is required"
  };
};
class OtherRevenueFormComponent {
  constructor(fb, _vocuherService, collectService, _subjectService, _generalService, cdRef, sharedService, _commonService, _modalService) {
    this.fb = fb;
    this._vocuherService = _vocuherService;
    this.collectService = collectService;
    this._subjectService = _subjectService;
    this._generalService = _generalService;
    this.cdRef = cdRef;
    this.sharedService = sharedService;
    this._commonService = _commonService;
    this._modalService = _modalService;
    this.costCenterList = [];
    this.taxesList = [];
    this.noTotalAmount = false;
    this.calcRevenueRemainingAmount = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
  }
  ngOnInit() {
    this.initRevenuForm();
    this.getCategories();
    //this.getCustomers();
    this.getLookups();
  }
  ngOnChanges(changes) {
    console.log(changes);
    if (changes['data']) {
      let value = changes['data'].currentValue?.totalCollectedAmount;
      if (value > 0) {
        this.calcuateTaxAndAmountFromTotalAmount(value);
      }
    }
  }
  initRevenuForm() {
    this.revenueForm = this.fb.group({
      customerId: [null],
      customerName: ['', this.data.collectionType == 7005 && [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      revenueCategoryId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      costCenterId: [null, this.data.collectionType == 7004 && [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(0.0000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      tax: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      taxPercent: '',
      taxAmount: '',
      totalAmount: '',
      mobile: '',
      note: ['']
    });
  }
  calcuateTaxAndAmountFromTotalAmount(totalAmount) {
    let taxPercentage = +this.f['taxPercent'].value;
    const taxAmount = (+totalAmount * taxPercentage / 100).toFixed(3);
    const amount = (totalAmount - +taxAmount).toFixed(3);
    this.f['taxAmount'].setValue(taxAmount);
    this.f['amount'].setValue(amount);
    this.f['totalAmount'].setValue(totalAmount);
    let formValue = this.revenueForm.value;
    formValue = {
      ...formValue,
      totalAmount: +totalAmount,
      amount: +formValue['amount']
    };
    this.calcRevenueRemainingAmount.emit({
      formValue,
      noTotalAmount: true
    });
  }
  handleNoAmountChange(event) {
    this.noTotalAmount = event.target.checked;
    let value = {
      ...this.revenueForm.value
    };
    if (this.noTotalAmount) {
      let obj = {
        revenueCategoryId: value.revenueCategoryId,
        tax: value.tax,
        taxPercent: value.taxPercent
      };
      if (this.data.collectionType == 7004 || this.data.collectionType == 7005) {
        obj['customerId'] = value.customerId;
        obj['customerName'] = value.customerName;
      }
      this.revenueForm.reset(obj);
      this.calcRevenueRemainingAmount.emit({
        noTotalAmount: true
      });
    } else {
      this.calcRevenueRemainingAmount.emit({
        formValue: {},
        amount: 0
      });
    }
    this.toggleValidation();
  }
  toggleValidation() {
    let amountControl = this.f['amount'];
    if (this.noTotalAmount) {
      amountControl.removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
    } else {
      amountControl.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
    }
    amountControl.updateValueAndValidity();
  }
  responseModal(type, message) {
    const modalRef = this._modalService.open(_shared_components_modal_message_modal_message_component__WEBPACK_IMPORTED_MODULE_1__.ModalMessageComponent);
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.message = message;
  }
  getLookups() {
    const costCenter = this._vocuherService.getCostCenter(`?StatusId=2001&PageSize=1000`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(error)));
    let params = `?lookupTypeId=23&status=2001&pageSize=1000`;
    const taxes = this._generalService.getLookupsWithParams(params);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.forkJoin)([costCenter, taxes]).subscribe(data => {
      this.costCenterList = data[0].data;
      this.taxesList = data[1].data.map(x => {
        return {
          ...x,
          text: x.name[0].lookupName
        };
      });
    });
  }
  handleTaxChange(event) {
    if (event) {
      this.revenueForm.get('taxPercent').setValue(event.text);
      this.calcTotalAmount();
    } else {
      this.noTotalAmount = false;
      this.toggleValidation();
      this.calcRevenueRemainingAmount.emit({
        formValue: {},
        amount: 0
      });
    }
  }
  searchForCustomer() {
    let modalRef = this._modalService.open(_components_add_new_customer_add_new_customer_component__WEBPACK_IMPORTED_MODULE_0__.AddNewCustomerComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.sendData.subscribe(data => {
      let corporate = data?.corporateName;
      let individual = `${data?.fname} ${data?.sname} ${data?.thName} ${data?.fourthName}`;
      let obj = {
        customerId: data?.customerNo,
        customerName: corporate || individual,
        mobile: data?.mobile
      };
      localStorage.setItem('pmcn', obj?.customerName);
      this.revenueForm.patchValue(obj);
      if (this.emittedValues) {
        let formValue = {
          ...this.emittedValues?.['formValue'],
          ...obj
        };
        this.emittedValues = {
          ...this.emittedValues,
          formValue
        };
        if (this.emittedValues?.['formValue']['revenueCategoryId']) this.calcRevenueRemainingAmount.emit({
          ...this.emittedValues,
          fromCustomer: true
        });
      }
    });
  }
  calcTotalAmount() {
    let amount = this.revenueForm.get('amount').value;
    if (amount > 0) {
      let taxAmount = +this.revenueForm.get('taxPercent').value * amount / 100;
      this.revenueForm.get('taxAmount').patchValue(this._commonService.transformDecimal(taxAmount));
      let totalAmount = +this.revenueForm.get('amount').value + +taxAmount;
      this.revenueForm.get('totalAmount').setValue(this._commonService.transformDecimal(totalAmount));
      let formValues = this.revenueForm.value;
      formValues = {
        ...formValues,
        totalAmount: +totalAmount,
        amount: formValues['amount']
      };
      this.noTotalAmount = false;
      this.emittedValues = {
        formValue: formValues,
        amount: +totalAmount,
        noTotalAmount: false
      };
      if (this.data.collectionType == 7004) {
        if (formValues['revenueCategoryId']) this.calcRevenueRemainingAmount.emit(this.emittedValues);
      } else {
        if (formValues['customerId'] && formValues['revenueCategoryId']) this.calcRevenueRemainingAmount.emit(this.emittedValues);
      }
    } else {
      this.revenueForm.get('totalAmount').patchValue('');
      this.calcRevenueRemainingAmount.emit({
        formValue: {},
        amount: 0
      });
    }
  }
  chooseCategory(e) {
    this.revenueForm.markAllAsTouched();
    this.revenueForm.get('taxPercent').patchValue(e?.taxPercent);
    this.revenueForm.get('tax').setValue(e?.taxPercentId);
    this.revenueForm.get('note').patchValue(e?.note);
    let taxId = +this.revenueForm.get('tax').value;
    let taxPercentage = +this.taxesList.find(x => x.id == taxId)?.name[0]?.lookupName;
    let amount = +this.revenueForm.get('amount').value;
    let taxAmount = taxPercentage / 100 * amount;
    this.revenueForm.get('taxAmount').patchValue(this._commonService.transformDecimal(taxAmount));
    let totalAmount = amount + taxAmount;
    this.revenueForm.get('totalAmount').patchValue(this._commonService.transformDecimal(totalAmount));
    let formValues = this.revenueForm.value;
    formValues = {
      ...formValues,
      totalAmount: +totalAmount,
      amount: formValues['amount']
    };
    this.emittedValues = {
      formValue: formValues,
      amount: +totalAmount
    };
    if (!this.noTotalAmount) {
      if (this.data.collectionType == 7004) {
        if (formValues['revenueCategoryId']) this.calcRevenueRemainingAmount.emit(this.emittedValues);
      } else {
        if (formValues['customerId'] && formValues['revenueCategoryId']) this.calcRevenueRemainingAmount.emit(this.emittedValues);
      }
    }
  }
  clearCategory(e) {
    if (!e) {
      this.noTotalAmount = false;
      this.toggleValidation();
    }
    this.revenueForm.get('taxPercent').patchValue(0);
    this.revenueForm.get('tax').patchValue(null);
    this.revenueForm.get('totalAmount').patchValue(0);
    let revenueCategoryId = null;
    this.emittedValues = {
      formValue: {
        ...this.revenueForm.value,
        revenueCategoryId
      },
      amount: 0
    };
    this.calcRevenueRemainingAmount.emit(this.emittedValues);
  }
  get f() {
    return this.revenueForm.controls;
  }
  getCustomers() {
    return this.collectService.customersList('').subscribe(response => {
      if (response) {
        this.customers = response.data;
      }
    });
  }
  getCategories() {
    if (this.data['collectionType'] == 7004) {
      this.collectService.GetCategories().subscribe(response => {
        if (response) {
          this.categories = response.data;
          console.log(this.categories);
        }
      });
    } else {
      this.collectService.getCustomerPaymentCategories().subscribe(response => {
        if (response) {
          this.categories = response.data;
        }
      });
    }
  }
}
OtherRevenueFormComponent.ɵfac = function OtherRevenueFormComponent_Factory(t) {
  return new (t || OtherRevenueFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_markazia_vouchers_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_2__.MarkaziaVoucherService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_collect_service__WEBPACK_IMPORTED_MODULE_3__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_4__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal));
};
OtherRevenueFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: OtherRevenueFormComponent,
  selectors: [["otherRevenueForm"]],
  inputs: {
    data: "data"
  },
  outputs: {
    calcRevenueRemainingAmount: "calcRevenueRemainingAmount"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]],
  decls: 49,
  vars: 14,
  consts: [[1, "add-customer-container", "mb-5"], [1, "d-flex", "align-items-center", "gap-5"], ["ngbAutoFocus", "", 1, "font-18", "fw-700", "m-0"], [1, "text-decoration-underline", "blue-clr", "cursor-pointer", 3, "click"], [1, "customer-info"], [4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col"], [1, "form-group"], ["id", "categoryId", "placeholder", "Select category", "bindLabel", "categoryName", "bindValue", "categoryId", "formControlName", "revenueCategoryId", 3, "items", "change", "clear"], ["class", "col", 4, "ngIf"], ["type", "text", "formControlName", "amount", "name", "amount", "placeholder", "", "appDecimalNumber", "", 1, "form-control", 3, "readOnly", "change"], [1, "form-group", "position-relative"], ["type", "text", "formControlName", "taxAmount", "placeholder", "", "readonly", "", 1, "form-control", "bg-gray"], [1, "input-label"], ["formControlName", "tax", "placeholder", "Tax Percentage", "bindLabel", "text", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "change"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [3, "control", "errorMessages"], ["type", "text", "formControlName", "totalAmount", "name", "totalAmount", "placeholder", "", "readonly", "", 1, "form-control", "bg-gray"], [1, "col-12", "mt-2"], ["type", "text", "placeholder", "Note", "readonly", "", "formControlName", "note", "name", "note", 1, "form-control", "bg-gray"], ["class", "col-12 mt-2", 4, "ngIf"], ["class", "text-danger font-14 fw-500", 4, "ngIf"], [1, "text-danger", "font-14", "fw-500"], ["class", "error", 4, "ngIf"], [1, "error"], ["placeholder", "Cost Center", "bindLabel", "costCenterName", "bindValue", "costCenterId", "formControlName", "costCenterId", 3, "items"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"], ["class", "error d-block", 4, "ngIf"], [1, "error", "d-block"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "checkbox", "id", "nta", 1, "checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "nta"]],
  template: function OtherRevenueFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h6", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OtherRevenueFormComponent_Template_p_click_4_listener() {
        return ctx.searchForCustomer();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Search for a Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, OtherRevenueFormComponent_ng_container_10_Template, 2, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "form", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Payment Category * ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function OtherRevenueFormComponent_Template_ng_select_change_17_listener($event) {
        return ctx.chooseCategory($event);
      })("clear", function OtherRevenueFormComponent_Template_ng_select_clear_17_listener($event) {
        return ctx.clearCategory($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, OtherRevenueFormComponent_ng_container_18_Template, 2, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, OtherRevenueFormComponent_div_19_Template, 5, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Amount JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function OtherRevenueFormComponent_Template_input_change_24_listener() {
        return ctx.calcTotalAmount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, OtherRevenueFormComponent_ng_container_25_Template, 2, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 8)(27, "div", 13)(28, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Tax Amount JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 8)(32, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Tax Percentage %");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "ng-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function OtherRevenueFormComponent_Template_ng_select_change_34_listener($event) {
        return ctx.handleTaxChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, OtherRevenueFormComponent_ng_template_35_Template, 1, 1, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, OtherRevenueFormComponent_ng_template_36_Template, 1, 1, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "validation-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 8)(39, "div", 9)(40, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Total Amount JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 21)(44, "div", 9)(45, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Note ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, OtherRevenueFormComponent_div_48_Template, 5, 3, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](((tmp_0_0 = ctx.revenueForm.get("customerName")) == null ? null : tmp_0_0.value) || "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](((tmp_1_0 = ctx.revenueForm.get("mobile")) == null ? null : tmp_1_0.value) || "Mobile");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.f["customerName"] == null ? null : ctx.f["customerName"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.revenueForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.f["revenueCategoryId"] == null ? null : ctx.f["revenueCategoryId"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.data.collectionType == 7004);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readOnly", !ctx.revenueForm.get("revenueCategoryId").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.f["amount"] == null ? null : ctx.f["amount"]["errors"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.taxesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.revenueForm.get("tax"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.f["revenueCategoryId"].value && ctx.f["tax"].value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgLabelTemplateDirective, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_8__.DecimalNumberDirective, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_9__.ValidationErrorComponent],
  styles: [".card-form[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0;\n  padding: 10px 0px 30px;\n}\n\n.card-sm[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #1b212d;\n}\n.card-sm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #929eae;\n}\n\n.bg-gray[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n}\n\n.tax-percent[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  bottom: 10px;\n}\n\n.card-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n.form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.total2[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 30px;\n  display: block;\n  border-radius: 9px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n  margin: 0px;\n}\n\n.add-customer-container[_ngcontent-%COMP%] {\n  height: 91px;\n  border-radius: 8px;\n  border: 1px solid #F2F2F2;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2509803922);\n  padding: 0px 20px;\n}\n.add-customer-container[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%] {\n  background: #D3D3D3;\n  width: 207px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  border-radius: 8px;\n  font-size: 14px;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  accent-color: var(--primary);\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvb3RoZXItcmV2ZW51ZS1mb3JtL290aGVyLXJldmVudWUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQURKOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBTUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7QUFKSjtBQU9FO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVNBO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1REFBQTtFQUNBLGlCQUFBO0FBTkY7QUFPRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZm9ybSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweCBzb2xpZCAjYzRjZGQ1O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwcHggMzBweDtcbn1cblxuLmNhcmQtc20ge1xuICBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMWIyMTJkO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjOTI5ZWFlO1xuICB9XG59XG5cbi5iZy1ncmF5IHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cblxuLnRheC1wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNDZweDtcbiAgfVxuXG4gIC5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4udG90YWwyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFkZC1jdXN0b21lci1jb250YWluZXIge1xuICBoZWlnaHQ6IDkxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YyRjJGMjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4ICMwMDAwMDA0MDtcbiAgcGFkZGluZzowcHggMjBweDtcbiAgLmN1c3RvbWVyLWluZm97XG4gICAgYmFja2dyb3VuZDogI0QzRDNEMztcbiAgICB3aWR0aDogMjA3cHg7XG4gICAgaGVpZ2h0OjQ4cHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICBib3JkZXItcmFkaXVzOjhweDtcbiAgICBmb250LXNpemU6MTRweDtcbiAgfVxufVxuLmNoZWNrYm94e1xuICAgIGFjY2VudC1jb2xvcjp2YXIoLS1wcmltYXJ5KTtcbiAgICBoZWlnaHQ6MjBweDtcbiAgICB3aWR0aDoyMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 82045:
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/payment-modal.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentModalComponent": () => (/* binding */ PaymentModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-payment/modal-pay-done/modal-pay-done.component */ 55034);
/* harmony import */ var _confirm_payment_modal_confirm_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-payment-modal/confirm-payment-modal.component */ 77379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _services_collect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/collect.service */ 43346);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/shared.service */ 69082);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/common.service */ 5620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/subject.service */ 29444);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _cash_cash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cash/cash.component */ 86337);
/* harmony import */ var _cheque_cheque_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cheque/cheque.component */ 34204);
/* harmony import */ var _other_revenue_form_other_revenue_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./other-revenue-form/other-revenue-form.component */ 2356);
/* harmony import */ var _bank_transfer_bank_transfer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bank-transfer/bank-transfer.component */ 44303);
/* harmony import */ var _bank_pledge_bank_pledge_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bank-pledge/bank-pledge.component */ 62443);
/* harmony import */ var _on_account_on_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./on-account/on-account.component */ 90903);
/* harmony import */ var _card_form_card_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card-form/card-form.component */ 25553);
/* harmony import */ var _voucher_voucher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./voucher/voucher.component */ 74185);






















function PaymentModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Customer name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (ctx_r0.detailsItem == null ? null : ctx_r0.detailsItem.customer == null ? null : ctx_r0.detailsItem.customer.customerName) || (ctx_r0.detailsItem == null ? null : ctx_r0.detailsItem.customerName), " ");
  }
}
function PaymentModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10)(1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PaymentModalComponent_div_10_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Minimum Payment: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, (ctx_r7.detailsItem == null ? null : ctx_r7.detailsItem.minAmount) || (ctx_r7.details == null ? null : ctx_r7.details.order == null ? null : ctx_r7.details.order.minAmount) || 0, "2.3-3"), " JOD ");
  }
}
function PaymentModalComponent_div_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 23)(1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r8.remainingAmountMessage);
  }
}
function PaymentModalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "div", 1)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "div", 16)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, " Grand Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, PaymentModalComponent_div_10_span_11_Template, 3, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 13)(13, "div", 19)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Remaining Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, PaymentModalComponent_div_10_div_19_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](10, 4, ctx_r2.grandAmount, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.collectionType == 7001 || ctx_r2.collectionType == 7002 || ctx_r2.collectionType == 7003);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](18, 7, ctx_r2.remainingAmount - ctx_r2.paymentSum, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.remainingAmountMessage);
  }
}
function PaymentModalComponent_div_11_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 29)(1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r10.remainingAmountMessage);
  }
}
function PaymentModalComponent_div_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 27)(2, "div", 19)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Remaining Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, PaymentModalComponent_div_11_ng_container_2_div_8_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 2, ctx_r9.remainingAmount - ctx_r9.paymentSum, "2.3-3"), " JOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.remainingAmountMessage);
  }
}
function PaymentModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 25)(1, "otherRevenueForm", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("calcRevenueRemainingAmount", function PaymentModalComponent_div_11_Template_otherRevenueForm_calcRevenueRemainingAmount_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.calcRemainingAmount($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PaymentModalComponent_div_11_ng_container_2_Template, 9, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx_r3.otherRevenueData);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r3.noTotalAmountFromOrAndCp);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 37)(2, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PaymentModalComponent_ng_container_12_ng_container_1_ng_container_3_ng_container_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const payItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r24.chooseTab(payItem_r22 == null ? null : payItem_r22.paymentTypeId, payItem_r22 == null ? null : payItem_r22.cat));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const payItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r23.selected == (payItem_r22 == null ? null : payItem_r22.paymentTypeId));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", payItem_r22 == null ? null : payItem_r22.paymentTypeImage, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("alt", payItem_r22 == null ? null : payItem_r22.paymentTypeImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](payItem_r22 == null ? null : payItem_r22.translations[0] == null ? null : payItem_r22.translations[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](9, 6, payItem_r22 == null ? null : payItem_r22.currentAmount, "2.3-3"));
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PaymentModalComponent_ng_container_12_ng_container_1_ng_container_3_ng_container_1_Template, 10, 9, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const payItem_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", payItem_r22 == null ? null : payItem_r22.show);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_paymentCashForm_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "paymentCashForm", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("amountEvent", function PaymentModalComponent_ng_container_12_ng_container_1_paymentCashForm_6_Template_paymentCashForm_amountEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r29.getAmount($event, "cash"));
    })("formValueEvent", function PaymentModalComponent_ng_container_12_ng_container_1_paymentCashForm_6_Template_paymentCashForm_formValueEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r31.getFormValue($event, "cash"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("otherData", ctx_r15.otherData)("isPending", ctx_r15.isPending)("currencies", ctx_r15.registerCurrencies)("recentFormValues", ctx_r15.paymentFormsValue);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_paymentChequeForm_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "paymentChequeForm", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("amountEvent", function PaymentModalComponent_ng_container_12_ng_container_1_paymentChequeForm_7_Template_paymentChequeForm_amountEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r32.getAmount($event, "cheque"));
    })("formValueEvent", function PaymentModalComponent_ng_container_12_ng_container_1_paymentChequeForm_7_Template_paymentChequeForm_formValueEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r34.getFormValue($event, "cheque"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("otherData", ctx_r16.otherData)("banks", ctx_r16.banks)("isPending", ctx_r16.isPending)("currencies", ctx_r16.registerCurrencies)("recentFormValues", ctx_r16.paymentFormsValue);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_ng_container_8_card_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "card-form", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("amountEvent", function PaymentModalComponent_ng_container_12_ng_container_1_ng_container_8_card_form_1_Template_card_form_amountEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);
      const index_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r38.getAmount($event, "card", ctx_r38.cardsList[index_r36].paymentTypeId));
    })("formValueEvent", function PaymentModalComponent_ng_container_12_ng_container_1_ng_container_8_card_form_1_Template_card_form_formValueEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r41.getFormValue($event, "card"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const formGroup_r35 = ctx_r42.$implicit;
    const index_r36 = ctx_r42.index;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", formGroup_r35)("currencies", ctx_r37.registerCurrencies)("isPending", ctx_r37.isPending)("otherData", ctx_r37.otherData)("terminals", ctx_r37.terminals)("paymentTypeId", ctx_r37.cardsList[index_r36].paymentTypeId);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PaymentModalComponent_ng_container_12_ng_container_1_ng_container_8_card_form_1_Template, 1, 6, "card-form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const index_r36 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.selected == ctx_r17.cardsList[index_r36].paymentTypeId);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_bankTransfer_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "bankTransfer", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("amountEvent", function PaymentModalComponent_ng_container_12_ng_container_1_bankTransfer_9_Template_bankTransfer_amountEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r43.getAmount($event, "bankTransfer"));
    })("formValueEvent", function PaymentModalComponent_ng_container_12_ng_container_1_bankTransfer_9_Template_bankTransfer_formValueEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r45.getFormValue($event, "bankTransfer"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("otherData", ctx_r18.otherData)("isPending", ctx_r18.isPending)("currencies", ctx_r18.jodCurrencyOnly)("recentFormValues", ctx_r18.paymentFormsValue);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_bankPledge_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "bankPledge", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("amountEvent", function PaymentModalComponent_ng_container_12_ng_container_1_bankPledge_10_Template_bankPledge_amountEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r46.getAmount($event, "bankPledge"));
    })("formValueEvent", function PaymentModalComponent_ng_container_12_ng_container_1_bankPledge_10_Template_bankPledge_formValueEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r48.getFormValue($event, "bankPledge"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("otherData", ctx_r19.otherData)("banks", ctx_r19.banks)("isPending", ctx_r19.isPending)("currencies", ctx_r19.jodCurrencyOnly)("recentFormValues", ctx_r19.paymentFormsValue);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_on_account_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "on-account", 46);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("otherData", ctx_r20.onAccountData);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_voucher_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "voucher", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("amountEvent", function PaymentModalComponent_ng_container_12_ng_container_1_voucher_12_Template_voucher_amountEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r49.getAmount($event, "voucher"));
    })("formValueEvent", function PaymentModalComponent_ng_container_12_ng_container_1_voucher_12_Template_voucher_formValueEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r51.getFormValue($event, "voucher"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("otherData", ctx_r21.otherData)("isPending", ctx_r21.isPending)("currencies", ctx_r21.jodCurrencyOnly)("recentFormValues", ctx_r21.paymentFormsValue);
  }
}
function PaymentModalComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 2)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, PaymentModalComponent_ng_container_12_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 2)(5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, PaymentModalComponent_ng_container_12_ng_container_1_paymentCashForm_6_Template, 2, 4, "paymentCashForm", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, PaymentModalComponent_ng_container_12_ng_container_1_paymentChequeForm_7_Template, 1, 5, "paymentChequeForm", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, PaymentModalComponent_ng_container_12_ng_container_1_ng_container_8_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, PaymentModalComponent_ng_container_12_ng_container_1_bankTransfer_9_Template, 1, 4, "bankTransfer", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, PaymentModalComponent_ng_container_12_ng_container_1_bankPledge_10_Template, 1, 5, "bankPledge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, PaymentModalComponent_ng_container_12_ng_container_1_on_account_11_Template, 1, 1, "on-account", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, PaymentModalComponent_ng_container_12_ng_container_1_voucher_12_Template, 1, 4, "voucher", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r13.paymentTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.registerCurrencies && ctx_r13.selected == 27001);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.registerCurrencies && ctx_r13.selected == 27002);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r13.formGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.selected == 27006);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.selected == 27005);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.selected == 27004);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.selected == 27007);
  }
}
function PaymentModalComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PaymentModalComponent_ng_container_12_ng_container_1_Template, 13, 8, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.selected > 0)("ngIfElse", _r5);
  }
}
function PaymentModalComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "You have no permissions to collect from this type of order!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
class PaymentModalComponent {
  //REVERSE PROPS END
  constructor(collectService, sharedService, activeModal, modalService, _commonService, _decimalPipe, _subjectService, _spinner, fb) {
    this.collectService = collectService;
    this.sharedService = sharedService;
    this.activeModal = activeModal;
    this.modalService = modalService;
    this._commonService = _commonService;
    this._decimalPipe = _decimalPipe;
    this._subjectService = _subjectService;
    this._spinner = _spinner;
    this.fb = fb;
    this.selected = 0;
    this.totalCash = 0;
    this.totalCheque = 0;
    this.totalVisa = 0;
    this.totalMaster = 0;
    this.totalExpress = 0;
    this.totalAccount = 0;
    this.totalBankTransfer = 0;
    this.totalPledge = 0;
    this.totalVoucher = 0;
    this.remainingAmount = 0;
    this.grandAmount = 0;
    this.paymentSum = 0;
    //USING THIS PROPERTY FOR SPAREPART AND SERVICE SALES ORDER TO CHECK WHETHER INOVICE TYPE IS CASH OR CREDIT
    this.sparePartInvoiceType = '';
    this.remainingAmountMessage = '';
    this.isCash = true;
    this.isBankTransfer = true;
    this.isBankPledge = true;
    this.paymentTabItem = {
      isCash: true,
      isCheque: false,
      isVisa: false,
      isMaster: false,
      isExpress: false,
      isAccount: false,
      bankTransfer: false,
      bankPledge: false
    };
    this.terminals = [];
    this.banks = [];
    this.paymentTypes = [];
    this.cardsList = [];
    this.cardCollectedAmount = [];
    this.formGroups = [];
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription();
    this.noTotalAmountFromOrAndCp = false;
    //REVERSE PROPS START
    this.isReverse = false;
    this.isRefund = false;
    this.reversedAmount = 0;
    this.totalCollectedAmountByPaymentTypeList = [];
  }
  ngOnInit() {
    // Reverse Case Start
    this.isReverse = this.detailsItem?.reverse;
    this.isRefund = this.detailsItem?.refund;
    if (this.isReverse || this.isRefund) {
      this.collectionType = this.detailsItem.collectionType;
    }
    // Reverse Case End
    let sub = this._subjectService.cashierNote.subscribe(note => {
      this.ordersCollectionForm.get('cashierNotes').setValue(note);
    });
    this.subscription.add(sub);
    this.getRegisterDetails();
    this.getTerminalProviders();
    this.getBanks();
    this.getRegisterPaymentTypesForOrders();
    this.initForm();
    this.sparePartInvoiceType = this.detailsItem?.invoiceType?.toLowerCase();
    this.onAccountData = {
      ...this.detailsItem,
      collectionType: this.collectionType
    };
    this.otherData = {
      ...this.detailsItem,
      collectionType: this.collectionType
    };
    this.otherRevenueData = {
      ...this.otherRevenueData,
      collectionType: this.collectionType
    };
    if (this.detailsItem && !this.isReverse && !this.isRefund) {
      // FOR MULTI COLLECTION
      if (this.detailsItem['isMultiCollect']) {
        this.sparePartInvoiceType = this.detailsItem.invoiceType;
        this.grandAmount = this.detailsItem['grandAmount'];
        this.remainingAmount = this.detailsItem['remainingAmount'];
        this.ordersCollectionForm.get('orderNo').setValue(this.detailsItem['orderNo']);
        localStorage.setItem('pmcn', this.detailsItem?.customerName);
      } else {
        //FOR SINGLE COLLECTION
        localStorage.setItem('pmcn', this.detailsItem?.customer?.customerName || this.detailsItem?.customerName);
        if (this.collectionType == 7002) {
          this.GetDirectPaymentSalesOrdersDetails();
        } else if (this.collectionType == 7001) {
          this.GetServicesSalesOrderDetails();
        } else if (this.collectionType == 7003) {
          this.GetSparePartsSalesOrdersDetails();
        } else if (this.collectionType == 7006) {
          this.getBanksUnderTakingSalesOrdersDetails();
        } else if (this.collectionType == 7007) {
          this.getInhouseFinancingOrderDetails();
        } else if (this.collectionType == 7008) {
          this.getPnOrderDetails();
        } else if (this.collectionType == 7009) {
          this.getTransferFeesOrderDetails();
        }
      }
    }
    // Clear POS Machine Collection Flag Because New Collection Process started;
    localStorage.removeItem('pos_mc');
    // Clear POS machine FormGroup isReset Flag Because New Collection Process started;
    localStorage.removeItem('isMachineFgReset');
  }
  handleReverse() {
    this.grandAmount = this.detailsItem.collectedAmount;
    this.remainingAmount = this.detailsItem.collectedAmount;
    this.paymentSum = this.detailsItem.collectedAmount;
    this.collectedOrderDetails = this.detailsItem.collectedOrderDetails;
    this.ordersCollectionForm.get('orderNo').setValue(this.detailsItem['orderNo']);
    this.detailsItem.minAmount = 0;
    localStorage.setItem('pmcn', this.detailsItem?.customerName);
    this.bindCollectedValueToPaymentType(this.collectedOrderDetails?.ordersCashCollections, 'cash');
    this.bindCollectedValueToPaymentType(this.collectedOrderDetails?.ordersChequeCollection, 'cheque');
    this.bindCollectedValueToPaymentType(this.collectedOrderDetails?.bankPledge, 'bankPledge');
    this.bindCollectedValueToPaymentType(this.collectedOrderDetails?.bankTransfere, 'bankTransfer');
    this.bindCollectedValueToPaymentType(this.collectedOrderDetails?.ordersCardsCollection, 'card');
  }
  bindCollectedValueToPaymentType(values, type) {
    if (!values?.length) return;
    const getImageSavedPath = URL => {
      if (URL) {
        let path = URL.split('/').slice(-3).join('/');
        return path;
      } else return '';
    };
    if (type == 'cash') {
      let data = values.map(x => {
        return {
          currencyId: x?.currencyId,
          collectedAmount: x?.collectedAmount,
          vjod: x?.collectedAmountJOD,
          sameCustomer: x?.cashPayerName == this.detailsItem.customerName,
          cashPayerName: x?.cashPayerName,
          rate: x?.rate,
          isDisabled: true
        };
      });
      let cash = {
        cashArray: data
      };
      this.paymentFormsValue = {
        ...this.paymentFormsValue,
        ...{
          cash
        }
      };
      let amount = this.sumCollectedAmounts(data, 'vjod');
      this.totalCash = amount;
      this.totalCollectedAmountByPaymentTypeList.push({
        id: 27001,
        amount
      });
    } else if (type == 'cheque') {
      let data = values.map(x => {
        return {
          isChecked: x?.chequeDrawerName == this.detailsItem.customerName,
          chequeCollectionJod: x?.collectedAmount,
          currencyId: x?.currencyId,
          chequeNo: x?.chequeNo,
          chequeDate: new Date(x?.chequeDate),
          bankId: x?.bankId,
          chequeDrawerName: x?.chequeDrawerName,
          chequeImage: getImageSavedPath(x?.chequeImage),
          attachment: x?.chequeImage,
          financeApprovalAttachment: getImageSavedPath(x?.financeApprovalAttachment),
          tempFinanceAttachment: x?.financeApprovalAttachment,
          vjod: x?.chequeCollectionJod,
          rate: x?.rate ?? ''
        };
      });
      let cheque = {
        chequeArray: data
      };
      this.paymentFormsValue = {
        ...this.paymentFormsValue,
        ...{
          cheque
        }
      };
      let amount = this.sumCollectedAmounts(data, 'vjod');
      this.totalCheque = amount;
      this.totalCollectedAmountByPaymentTypeList.push({
        id: 27002,
        amount
      });
    } else if (type == 'bankPledge') {
      let data = values.map(x => {
        return {
          pledgeAmountJod: x?.pledgeAmountJod,
          bankPledgeDate: this._commonService.transformDate(x?.bankPledgeDate),
          bankId: x?.bankId,
          bankPledgeNumber: x?.bankPledgeNumber,
          pledgeAttachment: getImageSavedPath(x?.pledgeAttachment),
          attachment: x?.pledgeAttachment,
          currencyId: 9001,
          isNew: false
        };
      });
      let bankPledge = {
        pledgeArray: data
      };
      this.paymentFormsValue = {
        ...this.paymentFormsValue,
        ...{
          bankPledge
        }
      };
      let amount = this.sumCollectedAmounts(data, 'pledgeAmountJod');
      this.totalPledge = amount;
      this.totalCollectedAmountByPaymentTypeList.push({
        id: 27005,
        amount
      });
    } else if (type == 'bankTransfer') {
      let data = values.map(x => {
        return {
          sameCustomer: x?.cardPayerName == this.detailsItem.customerName,
          paidAmountJod: x?.paidAmountJod,
          transfereDate: this._commonService.transformDate(x?.transfereDate),
          markaziaBankAccountId: x?.markaziaBankAccountId,
          transfereReference: x?.transfereReference,
          transfereAttachment: getImageSavedPath(x?.transfereAttachment),
          attachment: x?.transfereAttachment,
          cardPayerName: x?.cardPayerName,
          currencyId: 9001
        };
      });
      let bankTransfer = {
        bankArray: data
      };
      this.paymentFormsValue = {
        ...this.paymentFormsValue,
        ...{
          bankTransfer
        }
      };
      let amount = this.sumCollectedAmounts(data, 'paidAmountJod');
      this.totalBankTransfer = amount;
      this.totalCollectedAmountByPaymentTypeList.push({
        id: 27006,
        amount
      });
    } else if (type == 'card') {
      this.cardsList.forEach((x, index) => {
        let cardType = values.find(y => y.paymentCardTypeId == x.paymentTypeId);
        if (!cardType) {
          let obj = {
            paymentCardTypeId: x.paymentTypeId
          };
          values.push(obj);
        }
      });
      this.formGroups = [];
      let cards = {};
      values.forEach(card => {
        if (!cards[card?.paymentCardTypeId]) {
          cards[card?.paymentCardTypeId] = {
            items: []
          };
        }
        cards[card?.paymentCardTypeId].items.push(card);
      });
      for (let key in cards) {
        const formGroup = this.fb.group({
          card: this.fb.array([])
        });
        let cardArray = formGroup.get('card');
        let cardItems = cards[key]?.items;
        let amount = 0;
        cardItems.forEach((x, index) => {
          if (x?.cardCollectionJod > 0) {
            let fg = this.fb.group({
              isChecked: x?.cardPayerName == this.detailsItem.customerName,
              cardCollectionJod: [x?.cardCollectionJod, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0.0000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
              machineReceiptNumber: [x?.machineReceiptNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('^[0-9]*$')]],
              cardTerminalProviderId: [x?.cardTerminalProviderId, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
              machineID: [x?.machineID, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('^[a-zA-Z0-9 ]*$')]],
              cardPayerName: [x?.cardPayerName, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
              cardLast4Digits: [x?.cardLast4Digits, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('^[0-9]{4}$')]],
              paymentCardTypeId: x?.paymentCardTypeId,
              currencyId: [x?.currencyId, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
              rate: x?.rate,
              vjod: x?.cardCollectionJod,
              isReversed: false,
              isNew: +x?.cardCollectionJod > 0 ? false : true,
              lineNew: false
            });
            cardArray.push(fg);
            amount += +(x?.cardCollectionJod || 0);
            if (cardItems.length - 1 == index) {
              this.totalCollectedAmountByPaymentTypeList.push({
                id: x?.paymentCardTypeId,
                amount
              });
              this.cardCollectedAmount.push({
                paymentTypeId: x?.paymentCardTypeId,
                amount
              });
              this.totalVisa += amount;
              this.totalVisa = +this.totalVisa.toFixed(3);
            }
          }
        });
        this.formGroups.push(formGroup);
      }
    }
  }
  updateCollectedAmountReverse() {
    this.paymentTypes.forEach(type => {
      let find = this.totalCollectedAmountByPaymentTypeList.find(item => item.id == type.paymentTypeId);
      if (find) type.currentAmount = find.amount;
    });
  }
  sumCollectedAmounts(value, key) {
    return value.reduce((acc, cur) => {
      return acc += +cur[key];
    }, 0);
  }
  chooseTab(val, cat) {
    // Check if collection via POS machine then, don't allow user to navigate to other tab untill the collection is done via Machine
    let collectedViaPOSMachine = localStorage.getItem('pos_mc');
    let posMachine = this.cardCollectedAmount.length && this.cardCollectedAmount.find(x => x.paymentTypeId == 13013);
    if (posMachine && +posMachine?.amount > 0 && !collectedViaPOSMachine) {
      this.remainingAmountMessage = 'Complete the payment process via POS machine or reset to collect via other payment methods.';
      setTimeout(() => {
        this.remainingAmountMessage = '';
      }, 5000);
      return;
    }
    // THIS CONDITION ONLY WOKS IN MULTI COLLECT
    if (!this.touched && this.detailsItem?.['isMultiCollect'] && this.paymentSum > 0) {
      this.remainingAmountMessage = 'You can collect order using single payment type only.';
      setTimeout(() => {
        this.remainingAmountMessage = '';
      }, 5000);
      return;
    }
    if (!this.noTotalAmountFromOrAndCp) {
      // noTotalAmountFromOrAndCp false means when the total amount is passed from other revenue or customer payment
      if (this.touched || this.paymentSum > this.remainingAmount) {
        if (this.paymentSum > this.remainingAmount) {
          this.remainingAmountMessage = 'Collected amount exceeds the remaining amount,please correct your payment.';
          setTimeout(() => {
            this.remainingAmountMessage = '';
          }, 5000);
        }
        return;
      }
    }
    this.selected = val;
    this.remainingAmountMessage = '';
    //Object.keys(this.paymentTabItem).forEach(v => this.paymentTabItem[v] = false);
    this.paymentTabItem[val] = true;
  }
  getAmount(event, component, paymentTypeId) {
    if (component == 'cash') {
      this.totalCash = event['amount'];
      this.updateCollectedAmount(27001, event['amount']);
    } else if (component == 'cheque') {
      this.totalCheque = event['amount'];
      this.updateCollectedAmount(27002, event['amount']);
    } else if (component == 'card') {
      let index = this.cardCollectedAmount.findIndex(x => x.paymentTypeId == paymentTypeId);
      if (index >= 0) {
        this.cardCollectedAmount[index].amount = event['amount'];
      } else {
        this.cardCollectedAmount.push({
          paymentTypeId,
          amount: event['amount']
        });
      }
      let totalCardCollection = +(+this.cardCollectedAmount.reduce((acc, obj) => acc + obj.amount, 0)).toFixed(3);
      this.totalVisa = totalCardCollection;
      this.updateCollectedAmount(paymentTypeId, event['amount']);
    } else if (component == 'bankTransfer') {
      this.totalBankTransfer = event['amount'];
      this.updateCollectedAmount(27006, event['amount']);
    } else if (component == 'bankPledge') {
      this.totalPledge = event['amount'];
      this.updateCollectedAmount(27005, event['amount']);
    } else if (component == 'voucher') {
      this.totalVoucher = event['amount'];
      this.updateCollectedAmount(27007, event['amount']);
    }
    this.paymentSum = +(this.totalCash + this.totalCheque + this.totalVisa + this.totalBankTransfer + this.totalPledge + this.totalVoucher).toFixed(3);
    // The amount remains after collection by different payment methods
    this.otherData = {
      ...this.otherData,
      remainingAmountAfterSomeCollection: this._decimalPipe.transform(this.remainingAmount - this.paymentSum, '2.3-3')
    };
    //this.paymentSum = +(this.totalCash + this.totalCheque + this.totalVisa + this.totalMaster + this.totalExpress + this.totalBankTransfer + this.totalPledge).toFixed(3);
    // IF LESS THAN REMAINING AMOUNT
    if (!this.isReset) {
      if (this.collectionType != 7002) {
        if (this.paymentSum == this.remainingAmount) {
          this.remainingAmountMessage = '';
        }
      }
    } else {
      this.remainingAmountMessage = '';
    }
    if (this.paymentSum > this.remainingAmount) {
      this.otherData = {
        ...this.otherData,
        amountExceeded: true
      };
    } else {
      this.otherData = {
        ...this.otherData,
        amountExceeded: false
      };
    }
    if (this.noTotalAmountFromOrAndCp) {
      this.otherRevenueData = {
        ...this.otherRevenueData,
        totalCollectedAmount: this.paymentSum
      };
      this.otherData = {
        ...this.otherData,
        amountExceeded: false
      };
    }
  }
  updateCollectedAmount(id, amount) {
    let itemIndex, updateItem;
    itemIndex = this.paymentTypes.findIndex(x => x.paymentTypeId == id);
    updateItem = this.paymentTypes[itemIndex];
    updateItem.currentAmount = amount;
    this.paymentTypes.splice(itemIndex, 1, updateItem);
  }
  getFormValue(event, component) {
    let reset = event['reset'];
    this.isReset = reset;
    if (component == 'cash') {
      reset ? delete this.paymentFormsValue['cash'] : this.paymentFormsValue = {
        ...this.paymentFormsValue,
        cash: event.values
      };
      this.touched = event['touched'] || false;
    } else if (component == 'cheque') {
      reset ? delete this.paymentFormsValue['cheque'] : this.paymentFormsValue = {
        ...this.paymentFormsValue,
        cheque: event.values
      };
      this.touched = event['touched'] || false;
    } else if (component == 'card') {
      this.touched = event['touched'] || false;
    } else if (component == 'bankTransfer') {
      reset ? delete this.paymentFormsValue['bankTransfer'] : this.paymentFormsValue = {
        ...this.paymentFormsValue,
        bankTransfer: event.values
      };
      this.touched = event['touched'] || false;
    } else if (component == 'bankPledge') {
      reset ? delete this.paymentFormsValue['bankPledge'] : this.paymentFormsValue = {
        ...this.paymentFormsValue,
        bankPledge: event.values
      };
      this.touched = event['touched'] || false;
    } else if (component == 'voucher') {
      reset ? delete this.paymentFormsValue['voucher'] : this.paymentFormsValue = {
        ...this.paymentFormsValue,
        voucher: event.values
      };
      this.touched = event['touched'] || false;
    }
    if (event['submit']) {
      if (this.collectionType != 7001 && this.collectionType != 7002 && this.collectionType != 7003 && this.collectionType != 7008) {
        if (this.remainingAmount == this.paymentSum) {
          this.confirmPaymentModal();
        } else if (this.paymentSum > this.remainingAmount) {
          this.remainingAmountMessage = `Collected amount exceeds the remaining amount (${this._decimalPipe.transform(this.remainingAmount - this.paymentSum, '2.3-3')}) JOD, please correct your payment.`;
        } else {
          this.remainingAmountMessage = 'Collected amount must be equal to remaining amount';
        }
        setTimeout(() => {
          this.remainingAmountMessage = '';
        }, 5000);
      } else {
        if (this.paymentSum > this.remainingAmount) {
          this.remainingAmountMessage = `Collected amount exceeds the remaining amount (${this._decimalPipe.transform(this.remainingAmount - this.paymentSum, '2.3-3')}) JOD, please correct your payment.`;
        } else {
          if (this.paymentSum < this.detailsItem?.minAmount) {
            this.remainingAmountMessage = `Minimum ${this.detailsItem.minAmount} is required`;
          }
          // WILL WORK ONLY IN CASE OF SERVICE AND SPAREPARTS 
          else if (this.paymentSum < this.remainingAmount && this.detailsItem?.minAmount == 0 && this.collectionType != 7002) {
            this.remainingAmountMessage = 'Collected amount must be equal to remaining amount';
          } else {
            this.confirmPaymentModal();
          }
        }
        setTimeout(() => {
          this.remainingAmountMessage = '';
        }, 5000);
      }
    }
  }
  closeModal() {
    let colllectedViaMachine = JSON.parse(localStorage.getItem('pos_mc'));
    if (colllectedViaMachine) {
      return;
    }
    if (this.activeModal) this.activeModal.close();
  }
  ngOnDestroy() {
    localStorage.removeItem('pmcn');
    localStorage.removeItem('bpUploadedFiles');
  }
  initForm() {
    this.ordersCollectionForm = this.fb.group({
      orderCollectionType: [this.collectionType],
      orderNo: 0,
      isReplace: [false],
      cashierNotes: ['']
    });
    if (this.collectionType == 7008) {
      this.ordersCollectionForm.addControl('pnBoogkNotesIds', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.detailsItem?.pnBookNotesIds || ''));
      this.ordersCollectionForm.addControl('earlysettlement', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.detailsItem?.earlysettlement));
      if (!this.detailsItem?.pnBookNotesIds) this.ordersCollectionForm.addControl('amountToPay', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.detailsItem?.grandAmount));
    }
  }
  getRegisterPaymentTypesForOrders() {
    this.collectService.getRegisterPaymentTypesForOrders(this.sharedService.getRegister.registerObj?.id, this.collectionType).subscribe(response => {
      let data = response['data'];
      // Certain condition will work only is case of collection of direct payment.
      //We are doing here show and hide payment collection type on the base of flag 'In-House' or 'Cash'.
      let flagType = this.collectionType == 7002 && this.detailsItem?.flag?.toLowerCase();
      if (this.collectionType == 7002 && flagType == 'in-house') {
        this.selected = 27002;
        this.paymentTypes = data.map(x => {
          return {
            ...x,
            show: x.paymentTypeId == 27002 && true || false
          };
        });
      } else {
        this.paymentTypes = data.map(x => {
          return {
            ...x,
            show: true
          };
        });
        this.cardsList = this.paymentTypes.filter(x => x.cat == 2); // 2 means cards type and 1 means other payment type. 
        if (this.cardsList.length > 0) {
          for (let i = 0; i < this.cardsList.length; i++) {
            const formGroup = this.fb.group({
              card: this.fb.array([])
            });
            this.formGroups.push(formGroup);
          }
        }
        let invoiceTypes = ['credit', 'internal', 'tmc'];
        if (invoiceTypes.includes(this.sparePartInvoiceType) && (this.collectionType == 7003 || this.collectionType == 7001)) {
          this.paymentTypes = this.paymentTypes.filter(x => x.paymentTypeId == 27004);
          //Show grand amount as collected amount in case of sparepart order type is CREDIT OR INTERNAL
          this.paymentTypes[0].currentAmount = this.detailsItem?.grandAmount || this.detailsItem?.order?.grandAmount;
        } else {
          this.paymentTypes = this.paymentTypes.filter(x => x.paymentTypeId != 27004);
        }
        this.selected = this.paymentTypes[0]?.paymentTypeId;
      }
      if (this.isReverse || this.isRefund) {
        this.handleReverse();
        this.updateCollectedAmountReverse();
      }
    });
  }
  getBanks() {
    this.collectService.getLookupsById(11).subscribe(response => {
      this.banks = response.data.map(x => {
        return {
          id: x.id,
          name: x.name[0].lookupName
        };
      });
    });
  }
  getTerminalProviders() {
    this.collectService.getTerminalProviders().subscribe(response => {
      this.terminals = response.data.map(x => {
        return {
          id: x.providerId,
          name: x.providerName
        };
      });
    });
  }
  //THIS FUNCTION WILL RUN IN REVENE AND CUSTOMER PAYMENT COLLECTION IN BOTH
  calcRemainingAmount(event) {
    this.noTotalAmountFromOrAndCp = event['noTotalAmount'];
    let value = event['formValue'];
    if (this.noTotalAmountFromOrAndCp && value?.totalAmount > 0 && value?.amount > 0) {
      this.remainingAmount = this.paymentSum;
      this.generateRevenueFormValue(event);
    } else if (this.noTotalAmountFromOrAndCp) {
      return;
    } else {
      this.remainingAmount = +(+event['amount']).toFixed(3);
      this.otherData = {
        ...this.otherData,
        remainingAmount: this.remainingAmount
      };
      this.generateRevenueFormValue(event);
    }
    // This code will execute only if we select or change the customer and we have total amount of revenue and customer payment.
    //if (event?.formValue?.totalAmount > 0 && event?.fromCustomer) {
    //let value = event?.formValue;
    //console.log(value);
    //}
  }

  generateRevenueFormValue(event) {
    console.log(event);
    if (this.collectionType == 7004) {
      this.revenueFormValue = event['formValue'];
      this.revenueFormValue = {
        ...this.revenueFormValue,
        totalAmount: (+this.revenueFormValue['totalAmount']).toFixed(3),
        amount: (+this.revenueFormValue['amount']).toFixed(3),
        //tax: this._commonService.replaceValue(this.revenueFormValue['tax'], ',', ''),
        tax: this.revenueFormValue['tax']
      };
    } else {
      let formValues = event['formValue'];
      this.customerPaymentFormValue = {
        ...formValues,
        customerPaymentCategoryId: formValues['revenueCategoryId']
      };
      this.customerPaymentFormValue = {
        ...this.customerPaymentFormValue,
        amount: (+this.customerPaymentFormValue['amount']).toFixed(3),
        totalAmount: (+this.customerPaymentFormValue['totalAmount']).toFixed(3)
      };
    }
  }
  confirmPaymentModal() {
    const modalRef = this.modalService.open(_confirm_payment_modal_confirm_payment_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmPaymentModalComponent, {
      centered: true,
      backdrop: 'static'
    });
    modalRef.componentInstance.data = {
      collectionType: this.collectionType,
      reverse: this.isReverse,
      refund: this.isRefund,
      remainingAmount: this.remainingAmount - this.paymentSum
    };
    modalRef.result.then(resolve => {
      this.isPending = true;
      this.collectPayments();
    }, reject => {});
  }
  //Collected amount less than mimum allowed amount
  collectPayments() {
    this._spinner.show();
    let cardsArray = [];
    let markaziaVouchers = [];
    this.formGroups.forEach(form => {
      cardsArray.push(...form.getRawValue().card);
    });
    //Transform interger values to string because backend does not support some integer values that's why conversion to string needed
    if (this.paymentFormsValue?.cheque?.chequeArray?.length > 0) this.paymentFormsValue.cheque.chequeArray = [...this.paymentFormsValue.cheque?.chequeArray.map(x => {
      return {
        ...x,
        chequeNo: x.chequeNo.toString()
      };
    })];
    if (this.paymentFormsValue?.bankTransfer?.bankArray?.length > 0) this.paymentFormsValue.bankTransfer.bankArray = [...this.paymentFormsValue.bankTransfer?.bankArray?.map(x => {
      return {
        ...x,
        transfereReference: x.transfereReference.toString()
      };
    })];
    if (this.paymentFormsValue?.bankPledge?.pledgeAmountJod > 0) this.paymentFormsValue.bankPledge = {
      ...this.paymentFormsValue?.bankPledge,
      bankPledgeNumber: this.paymentFormsValue?.bankPledge?.bankPledgeNumber.toString()
    };
    if (cardsArray?.length > 0) {
      const cards = cardsArray.filter(x => x.cardCollectionJod).map(y => {
        return {
          ...y,
          machineReceiptNumber: y?.machineReceiptNumber?.toString(),
          cardLast4Digits: y?.cardLast4Digits?.toString()
        };
      });
      cardsArray = [...cards];
      //  cardsArray = [...cardsArray.map(x => { return { ...x, machineReceiptNumber: x?.machineReceiptNumber?.toString(), cardLast4Digits: x?.cardLast4Digits?.toString() } })]
    }

    if (this.paymentFormsValue?.voucher?.voucherArray?.length > 0) {
      markaziaVouchers = this.paymentFormsValue?.voucher?.voucherArray.map(x => {
        return {
          amountJod: x.amountJod,
          voucherNumber: x.voucherSequence
        };
      });
    }
    let obj = {
      //Added object properties conditionally
      ordersCollection: this.ordersCollectionForm.value,
      ...(this.paymentFormsValue?.cash?.cashArray[0].collectedAmount > 0 && {
        ordersCashCollections: this._commonService.roundValue(this.paymentFormsValue?.cash?.cashArray, 'collectedAmount')
      }),
      ...(this.paymentFormsValue?.cheque?.chequeArray?.length > 0 && {
        ordersChequeCollection: this._commonService.roundValue(this.paymentFormsValue.cheque?.chequeArray, 'chequeCollectionJod')
      }),
      ...(this.revenueFormValue?.revenueCategoryId > 0 && {
        revenueCollection: this.revenueFormValue
      }),
      ...(this.customerPaymentFormValue?.customerId > 0 && this.customerPaymentFormValue?.customerPaymentCategoryId > 0 && {
        customerPaymentCollection: this.customerPaymentFormValue
      }),
      ...(cardsArray?.length && {
        ordersCardsCollection: this._commonService.roundValue(cardsArray, 'cardCollectionJod')
      }),
      ...(this.paymentFormsValue?.bankTransfer?.bankArray?.length > 0 && {
        orderBankTransfereCollections: this._commonService.roundValue(this.paymentFormsValue?.bankTransfer?.bankArray, 'paidAmountJod')
      }),
      //...(this.paymentFormsValue?.bankPledge?.pledgeArray?.length > 0 && { ordersBanksPledgeCollectionModel: this._commonService.roundValue(this.paymentFormsValue?.bankPledge?.pledgeArray, 'pledgeAmountJod') }),
      //...(this.paymentFormsValue?.bankPledge?.pledgeAmountJod > 0 && { ordersBanksPledgeCollectionModel: this._commonService.roundValue(this.paymentFormsValue?.bankPledge, 'pledgeAmountJod') }),
      ...(this.paymentFormsValue?.voucher?.voucherArray?.length > 0 && {
        markaziaVouchers
      })
    };
    // Data mapping for Bank pledge because in reverse case we ha an array but in collection case we have single obj
    let ordersBanksPledgeCollectionModel;
    if (this.isReverse || this.isRefund) {
      let pledgeArray = this.paymentFormsValue?.bankPledge?.pledgeArray;
      if (pledgeArray?.length) {
        ordersBanksPledgeCollectionModel = this._commonService.roundValue(pledgeArray, 'pledgeAmountJod');
        obj['ordersBanksPledgeCollectionModel'] = ordersBanksPledgeCollectionModel;
      }
    } else {
      let pledgeData = this.paymentFormsValue?.bankPledge?.pledgeArray[0];
      if (+pledgeData?.pledgeAmountJod > 0) {
        ordersBanksPledgeCollectionModel = this._commonService.roundValue(pledgeData, 'pledgeAmountJod');
        obj['ordersBanksPledgeCollectionModel'] = ordersBanksPledgeCollectionModel;
      }
    }
    console.log(obj);
    if (!this.isReverse && !this.isRefund) {
      if (this.collectionType == 7004) {
        this.collectService.addOtherRevenueOrdersV2(obj).subscribe(response => {
          if (response.isSuccess) {
            this.isPending = false;
            const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
            modalRef.componentInstance.name = 'ok';
            modalRef.componentInstance.response = response;
            modalRef.componentInstance.data = {
              collectionType: this.collectionType
            };
            setTimeout(() => {
              this.sendtoLoadData.emit();
            }, 2000);
          } else {
            this.isPending = false;
            const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
            modalRef.componentInstance.name = 'no';
            modalRef.componentInstance.errors = response.Errors || response.errors;
            // console.log(error), (this.errorMessage = error.statusText);
          }
        }, error => {
          this.isPending = false;
          const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
          modalRef.componentInstance.name = 'no';
          modalRef.componentInstance.errors = error.error.errors || error.error.Errors;
        }).add(() => this._spinner.hide());
      } else if (this.collectionType == 7005) {
        this.collectService.addCustomerPaymentOrders(obj).subscribe(response => {
          if (response.isSuccess) {
            this.isPending = false;
            const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
            modalRef.componentInstance.name = 'ok';
            modalRef.componentInstance.response = response;
            modalRef.componentInstance.data = {
              collectionType: this.collectionType
            };
            setTimeout(() => {
              this.sendtoLoadData.emit();
            }, 2000);
          } else {
            this.isPending = false;
            const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
            modalRef.componentInstance.name = 'no';
            modalRef.componentInstance.errors = response.Errors || response.errors;
            // console.log(error), (this.errorMessage = error.statusText);
          }
        }, error => {
          this.isPending = false;
          const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
          modalRef.componentInstance.name = 'no';
          modalRef.componentInstance.errors = error.error.errors || error.error.Errors;
        }).add(() => this._spinner.hide());
      } else if (this.collectionType == 7008) {
        this.collectService.collectionOrderV2PNOrder(obj).subscribe(response => {
          if (response.isSuccess) {
            this.isPending = false;
            const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
            modalRef.componentInstance.data = {
              collectionType: 7008
            };
            modalRef.componentInstance.name = 'ok';
            modalRef.componentInstance.response = response;
            //modalRef.componentInstance.routeName = 'collect';
            modalRef.componentInstance.notAutoDismiss = true;
            this.sendtoLoadData.emit();
          } else {
            this.isPending = false;
            const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
            modalRef.componentInstance.name = 'no';
            modalRef.componentInstance.errors = response.Errors || response.errors;
            // console.log(error), (this.errorMessage = error.statusText);
          }
        }, error => {
          this.isPending = false;
          const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
          modalRef.componentInstance.name = 'no';
          modalRef.componentInstance.errors = error.error.errors || error.error.Errors;
        }).add(() => this._spinner.hide());
      } else {
        // IN CASE OF SINGLE COLLECTION
        if (!this.detailsItem['isMultiCollect']) {
          let URL;
          if (this.collectionType == 7001) URL = this.collectService.servicesOrdersCollection(obj);else URL = this.collectService.collectionOrderV3(obj);
          URL.subscribe(response => {
            if (response.isSuccess) {
              this.paymentSum = 0;
              this.openSuccessModal('ok', response);
              this.sendtoLoadData.emit();
            } else {
              this.openSuccessModal('no', response);
            }
          }, error => {
            this.openSuccessModal('no', error);
          }).add(() => this._spinner.hide());
        }
        // IN CASE OF MULTI COLLECTION 
        else {
          this.collectService.collectionOrderV2MultiCollect(obj).subscribe(response => {
            if (response.isSuccess) {
              this.paymentSum = 0;
              this.openSuccessModal('ok', response);
              this.sendtoLoadData.emit();
            } else {
              this.openSuccessModal('no', response);
            }
          }, error => {
            this.openSuccessModal('no', error);
          }).add(() => this._spinner.hide());
        }
      }
    } else if (this.isReverse) {
      let URL;
      obj.ordersCollection.reversedCollectionId = this.detailsItem.orderCollectionId;
      obj.ordersCollection.corrospondingSessionId = this.detailsItem.corrospondingSessionId;
      URL = this.collectService.reverseCollection(obj);
      URL.subscribe({
        next: response => {
          if (response.isSuccess) {
            this.openSuccessModal('ok', response);
            this.sendtoLoadData.emit();
          } else {
            this.openSuccessModal('no', response);
          }
        },
        error: error => {
          this.openSuccessModal('no', error);
        }
      }).add(() => this._spinner.hide());
    } else if (this.isRefund) {
      let URL;
      obj.ordersCollection.reversedCollectionId = this.detailsItem.orderCollectionId;
      const currentSesssionID = +localStorage.getItem('current_session');
      obj.ordersCollection.corrospondingSessionId = currentSesssionID;
      URL = this.collectService.refundReciptsForAllOrders(obj);
      URL.subscribe({
        next: response => {
          if (response.isSuccess) {
            this.openSuccessModal('ok', response);
            this.sendtoLoadData.emit();
          } else {
            this.openSuccessModal('no', response);
          }
        },
        error: error => {
          this.openSuccessModal('no', error);
        }
      }).add(() => this._spinner.hide());
    }
  }
  openSuccessModal(name, response, error) {
    this.isPending = false;
    const modalRef = this.modalService.open(_modal_payment_modal_pay_done_modal_pay_done_component__WEBPACK_IMPORTED_MODULE_0__.ModalPayDoneComponent);
    modalRef.componentInstance.name = name;
    if (response?.error) {
      modalRef.componentInstance.errors = response.error['errors'] || response.error['Errors'];
      return;
    }
    if ((this.collectionType == 7001 || this.collectionType == 7002 || this.collectionType == 7003) && !this.detailsItem['isMultiCollect']) {
      let receipt, invoice, summary;
      if (response.data.statusObj[0].lookupId == 10005)
        //partial status
        receipt = response.data?.receipt;else if (response.data.statusObj[0].lookupId == 10004)
        //collected status
        {
          receipt = response.data?.receipt;
          invoice = response.data?.invoices;
          summary = response.data?.summaryInvoice;
        }
      modalRef.componentInstance.data = {
        collectionType: this.collectionType,
        status: response.data.statusObj[0].lookupId,
        invoice,
        receipt,
        summary,
        reverse: this.isReverse,
        refund: this.isRefund
      };
    } else if (this.detailsItem['isMultiCollect']) {
      modalRef.componentInstance.data = {
        collectionType: this.collectionType,
        isMultiCollect: this.detailsItem['isMultiCollect']
      };
    } else {
      modalRef.componentInstance.data = {
        collectionType: this.collectionType,
        invoices: response.data,
        reverse: this.isReverse,
        refund: this.isRefund
      };
    }
    if (response) {
      if (response.error) {
        modalRef.componentInstance.errors = response.error['errors'];
      } else {
        modalRef.componentInstance.response = response;
      }
    } else {
      modalRef.componentInstance.errors = error.error.errors || error.error.Errors;
    }
  }
  GetServicesSalesOrderDetails() {
    // INCASE OF RETURN ORDER 
    if (this.detailsItem?.isFromReturn) {
      this.remainingAmount = this.detailsItem?.grandAmount;
      this.grandAmount = this.detailsItem?.grandAmount;
      this.ordersCollectionForm.controls['orderNo'].setValue(this.detailsItem?.servicesSalesOrderNo);
      this.ordersCollectionForm.get('isReplace').setValue(true);
    } else {
      const id = this.detailsItem.servicesSalesOrderNo || this.detailsItem.order.servicesSalesOrderNo;
      this.collectService.GetServicesSalesOrderDetails(id).subscribe(response => {
        if (response) {
          this.details = response.data;
          if (this.sparePartInvoiceType !== 'credit' && this.sparePartInvoiceType !== 'internal') this.remainingAmount = this.details.order.remainingAmount;else this.remainingAmount = 0;
          this.grandAmount = this.details.order.grandAmount;
          this.ordersCollectionForm.controls['orderNo'].setValue(this.details.order.servicesSalesOrderNo);
        }
      });
    }
  }
  GetDirectPaymentSalesOrdersDetails() {
    const id = this.detailsItem.directPaymentSalesOrderOpportunityNo || this.detailsItem.order.directPaymentSalesOrderOpportunityNo;
    this.collectService.GetDirectPaymentSalesOrdersDetails(id).subscribe(response => {
      if (response) {
        this.details = response.data;
        this.remainingAmount = this.details.order.remainingAmount;
        this.grandAmount = this.details.order.grandAmount;
        this.ordersCollectionForm.controls['orderNo'].setValue(this.details.order.directPaymentSalesOrderOpportunityNo);
      }
    });
  }
  GetSparePartsSalesOrdersDetails() {
    // INCASE OF RETURN ORDER 
    if (this.detailsItem?.isFromReturn) {
      //Show remaining amount zero(0) in case of sparepart order type is CREDIT
      if (this.sparePartInvoiceType !== 'credit' && this.sparePartInvoiceType !== 'internal') this.remainingAmount = this.detailsItem?.grandAmount;else this.remainingAmount = 0;
      this.grandAmount = this.detailsItem?.grandAmount;
      this.ordersCollectionForm.controls['orderNo'].setValue(this.detailsItem?.sparePartsSalesOrderOpportunityNo);
      this.ordersCollectionForm.get('isReplace').setValue(true);
    } else {
      const id = this.detailsItem?.sparePartsSalesOrderOpportunityNo || this.detailsItem?.order?.sparePartsSalesOrderOpportunityNo;
      this.collectService.GetSparePartsSalesOrdersDetails(id).subscribe(response => {
        if (response) {
          this.details = response.data;
          //Show remaining amount greter than zero in case of sparepart order type is CASH
          if (this.sparePartInvoiceType !== 'credit' && this.sparePartInvoiceType !== 'internal') this.remainingAmount = this.details.remainingAmount;else this.remainingAmount = 0;
          this.grandAmount = this.details.order.grandAmount;
          this.ordersCollectionForm.controls['orderNo'].setValue(this.details.order.sparePartsSalesOrderOpportunityNo);
        }
      });
    }
  }
  getBanksUnderTakingSalesOrdersDetails() {
    const id = this.detailsItem?.order?.banksUnderTakingSalesOrderOpportunityNo || this.detailsItem?.banksUnderTakingSalesOrderOpportunityNo;
    this.remainingAmount = this.detailsItem?.order?.remainingAmount || this.detailsItem?.remainingAmount;
    this.grandAmount = this.detailsItem?.order?.grandAmount || this.detailsItem?.grandAmount;
    this.ordersCollectionForm.controls['orderNo'].setValue(id);
  }
  getInhouseFinancingOrderDetails() {
    const id = this.detailsItem?.order?.banksUnderTakingSalesOrderOpportunityNo || this.detailsItem?.inHouceFinancingSalesOrderOpportunityNo;
    this.remainingAmount = this.detailsItem?.order?.remainingAmount || this.detailsItem?.remainingAmount;
    this.grandAmount = this.detailsItem?.order?.grandAmount || this.detailsItem?.grandAmount;
    this.ordersCollectionForm.controls['orderNo'].setValue(id);
  }
  getTransferFeesOrderDetails() {
    const id = this.detailsItem?.transferFeesOrderId;
    this.remainingAmount = this.detailsItem?.feesAmount;
    this.grandAmount = this.detailsItem?.feesAmount;
    this.ordersCollectionForm.controls['orderNo'].setValue(id);
  }
  getPnOrderDetails() {
    const id = this.detailsItem?.pnOrderId;
    this.remainingAmount = this.detailsItem?.grandAmount;
    this.grandAmount = this.detailsItem?.remainingAmount;
    this.ordersCollectionForm.controls['orderNo'].setValue(id);
  }
  getRegisterDetails() {
    return this.collectService.GetRegisterDetails(this.sharedService.getRegister.registerObj?.id).subscribe(response => {
      if (response) {
        this.registers = response.data;
        this.registerCurrencies = this.registers.registerCurrencies.map(x => ({
          id: x.id,
          name: x.currency[0].lookupName,
          lookupId: x.currency[0].lookupId,
          rate: x?.rate
        }));
        this.jodCurrencyOnly = [...this.registerCurrencies.filter(x => x.lookupId == 9001)];
        this.isCash = this.registers.cash;
        this.isCheque = this.registers.cheque;
        this.isVisa = this.registers.visa;
        this.isMaster = this.registers.mastercard;
        this.isExpress = this.registers.americanExpress;
        this.isAccount = this.registers.onCustomerAccount;
      }
    });
  }
}
PaymentModalComponent.ɵfac = function PaymentModalComponent_Factory(t) {
  return new (t || PaymentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_collect_service__WEBPACK_IMPORTED_MODULE_2__.CollectService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbActiveModal, 8), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_5__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder));
};
PaymentModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: PaymentModalComponent,
  selectors: [["app-payment-modal"]],
  inputs: {
    detailsItem: "detailsItem",
    multiCollection: "multiCollection",
    collectionType: "collectionType"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  decls: 15,
  vars: 5,
  consts: [[1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "d-flex", "justify-content-between", "align-items-center"], ["class", "payment-head", 4, "ngIf"], [1, "fas", "fa-times-circle", "primary-clr", "cursor-pointer", "fa-2x", 3, "click"], ["class", "card-payment", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], [4, "ngIf"], ["noPermissionToCollect", ""], [1, "payment-head"], [1, "py-2"], [1, "card-payment"], [1, "col-sm-6"], [1, "total-card"], [1, "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "gap-1"], [1, "total"], ["class", "font-13", 4, "ngIf"], [1, "total-card", "justify-content-end"], [1, "total2"], ["class", "col-12", 4, "ngIf"], [1, "font-13"], [1, "col-12"], [1, "alert", "alert-danger"], [1, "mb-4"], [3, "data", "calcRevenueRemainingAmount"], [1, "col-sm-12", "card-payment", "mt-4"], ["class", "col-12 mt-3", 4, "ngIf"], [1, "col-12", "mt-3"], [4, "ngIf", "ngIfElse"], [1, "tab-nav"], [4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "otherData", "isPending", "currencies", "recentFormValues", "amountEvent", "formValueEvent", 4, "ngIf"], [3, "otherData", "banks", "isPending", "currencies", "recentFormValues", "amountEvent", "formValueEvent", 4, "ngIf"], [3, "otherData", 4, "ngIf"], [1, "payitem"], ["type", "button", 1, "btn", 3, "click"], [1, "imag"], [3, "src"], [3, "otherData", "isPending", "currencies", "recentFormValues", "amountEvent", "formValueEvent"], ["cashComponent", ""], [3, "otherData", "banks", "isPending", "currencies", "recentFormValues", "amountEvent", "formValueEvent"], [3, "form", "currencies", "isPending", "otherData", "terminals", "paymentTypeId", "amountEvent", "formValueEvent", 4, "ngIf"], [3, "form", "currencies", "isPending", "otherData", "terminals", "paymentTypeId", "amountEvent", "formValueEvent"], [3, "otherData"], [1, "fw-600", "primary-clr"]],
  template: function PaymentModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PaymentModalComponent_div_5_Template, 5, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, PaymentModalComponent_div_6_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PaymentModalComponent_Template_i_click_7_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, PaymentModalComponent_div_10_Template, 20, 10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, PaymentModalComponent_div_11_Template, 3, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, PaymentModalComponent_ng_container_12_Template, 2, 2, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, PaymentModalComponent_ng_template_13_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.detailsItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.detailsItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.detailsItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.detailsItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.remainingAmount > 0 || ctx.isReverse || ctx.isRefund || ctx.noTotalAmountFromOrAndCp || (ctx.sparePartInvoiceType == "credit" || ctx.sparePartInvoiceType == "internal") && (ctx.collectionType == 7003 || ctx.collectionType == 7001));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _cash_cash_component__WEBPACK_IMPORTED_MODULE_6__.CashComponent, _cheque_cheque_component__WEBPACK_IMPORTED_MODULE_7__.PaymentChequeComponent, _other_revenue_form_other_revenue_form_component__WEBPACK_IMPORTED_MODULE_8__.OtherRevenueFormComponent, _bank_transfer_bank_transfer_component__WEBPACK_IMPORTED_MODULE_9__.BankTransferComponent, _bank_pledge_bank_pledge_component__WEBPACK_IMPORTED_MODULE_10__.BankPledgeComponent, _on_account_on_account_component__WEBPACK_IMPORTED_MODULE_11__.OnAccountComponent, _card_form_card_form_component__WEBPACK_IMPORTED_MODULE_12__.CardFormComponent, _voucher_voucher_component__WEBPACK_IMPORTED_MODULE_13__.VoucherComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe],
  styles: [".modal-body[_ngcontent-%COMP%] {\n  padding: 20px 25px;\n}\n\n.payment-head[_ngcontent-%COMP%] {\n  \n}\n.payment-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #1b212d;\n  margin: 0px;\n}\n.payment-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #929eae;\n  margin-bottom: 10px;\n}\n\n.card-payment[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.card-payment[_ngcontent-%COMP%]   .total-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin: 5px 0;\n}\n.card-payment[_ngcontent-%COMP%]   .total-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #000;\n  margin: 0px;\n}\n.card-payment[_ngcontent-%COMP%]   .total-card[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 30px;\n  display: block;\n  border-radius: 9px;\n}\n.card-payment[_ngcontent-%COMP%]   .total-card[_ngcontent-%COMP%]   .total2[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 30px;\n  display: block;\n  border-radius: 9px;\n}\n\n.paytitle[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 20px;\n  color: #1b212d;\n  margin-bottom: 10px;\n}\n\n.tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n}\n.tab-nav[_ngcontent-%COMP%]   .payitem[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0px;\n  width: 16.666%;\n  padding: 5px;\n}\n.tab-nav[_ngcontent-%COMP%]   .payitem[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n  color: #000000;\n  padding: 15px 5px 5px;\n  margin: 0px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #d1d1d1;\n  border-radius: 15px;\n  height: 140px;\n  width: 100%;\n  padding: 3px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .imag[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 60px;\n  display: flex;\n  margin: 0px auto;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: #929eae;\n  padding: 15px 5px;\n  margin: 0px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dc3545;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n}\n.tab-nav[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.card-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 0px solid #c4cdd5;\n  box-shadow: none;\n  border-radius: 8px;\n  margin: 0px;\n  padding: 0px;\n}\n.card-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.card-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.btn-trash[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.btn-push[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  padding: 0px;\n}\n.btn-push[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 24px;\n  vertical-align: bottom;\n  margin-inline-end: 5px;\n}\n\n.convert[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px;\n}\n\n.btnacount.disabled[_ngcontent-%COMP%], .btnacount[_ngcontent-%COMP%]:disabled {\n  background-color: #eee !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvcGF5bWVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFESjtBQUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFETjtBQUlJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0k7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFITjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0FBTEY7QUFPRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUxKO0FBT0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUxOO0FBU0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQSjtBQVNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFQTjtBQVVJO0VBQ0UsV0FBQTtBQVJOO0FBV0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBVE47QUFhRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBWEo7QUFhSTtFQUNFLFdBQUE7QUFYTjs7QUFnQkE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBYkY7QUFlRTtFQUNFLG1CQUFBO0FBYko7QUFnQkU7RUFDRSxlQUFBO0FBZEo7O0FBbUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBaEJKOztBQXFCRTtFQUNFLFdBQUE7QUFsQko7O0FBc0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQW5CRjtBQXFCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQW5CSjs7QUF1QkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQXBCRjs7QUF3QkE7RUFDRSxpQ0FBQTtBQXJCRiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMjBweCAyNXB4O1xufVxuXG4ucGF5bWVudC1oZWFkIHtcbiAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0Y2RkNTsqL1xuXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzFiMjEyZDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjOTI5ZWFlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLmNhcmQtcGF5bWVudCB7XG4gIG1hcmdpbjogNXB4IDA7XG5cbiAgLnRvdGFsLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luOiA1cHggMDtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgLnRvdGFsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgfVxuXG4gICAgLnRvdGFsMiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICB9XG4gIH1cbn1cblxuLnBheXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICMxYjIxMmQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YWItbmF2IHtcbiAgZGlzcGxheTogZmxleDtcblxuICAucGF5aXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB3aWR0aDogMTYuNjY2JTtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICBoNiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIHBhZGRpbmc6IDE1cHggNXB4IDVweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4O1xuXG4gICAgLmltYWcge1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGg1IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzkyOWVhZTtcbiAgICAgIHBhZGRpbmc6IDE1cHggNXB4O1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gICAgaDUge1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkLWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDBweCBzb2xpZCAjYzRjZGQ1O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi5idG4tdHJhc2gge1xuICBpbWcge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG5cbi5idG4tcHVzaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMHB4O1xuXG4gIGkge1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XG4gIH1cbn1cblxuLmNvbnZlcnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuXG4uYnRuYWNvdW50LmRpc2FibGVkLCAuYnRuYWNvdW50OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 94854:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/terminal-provider-modal/terminal-provider-modal.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminalProviderModalComponent": () => (/* binding */ TerminalProviderModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../shared/components/validation-error/validation-error.component */ 67711);







function TerminalProviderModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (item_r2 == null ? null : item_r2.machineName) + " - " + (item_r2 == null ? null : item_r2.machineID), " ");
  }
}
function TerminalProviderModalComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (item_r3 == null ? null : item_r3.machineName) + " - " + (item_r3 == null ? null : item_r3.machineID), " ");
  }
}
const _c0 = function () {
  return {
    required: "Input is required"
  };
};
class TerminalProviderModalComponent {
  constructor(_activeModal) {
    this._activeModal = _activeModal;
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.providerMachineID = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
  }
  handleConfirmClick() {
    if (!this.providerMachineID.valid) {
      this.providerMachineID.markAllAsTouched();
      return;
    }
    this.eventData.emit({
      ...this.providerMachineID.value
    });
  }
}
TerminalProviderModalComponent.ɵfac = function TerminalProviderModalComponent_Factory(t) {
  return new (t || TerminalProviderModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal));
};
TerminalProviderModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TerminalProviderModalComponent,
  selectors: [["app-terminal-provider-modal"]],
  inputs: {
    data: "data"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 17,
  vars: 5,
  consts: [[1, "modal-header", "align-items-center", "justify-content-between"], ["ngbAutoFocus", "", 1, "modal-title", "font-20", "fw-700"], [1, "modal-body"], [1, "row"], [1, "col-12"], [1, "input-label"], ["placeholder", "Select POS Machine", "bindLabel", "machineName", 3, "items", "formControl"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [3, "control", "errorMessages"], [1, "modal-footer", "mt-3"], ["type", "button", 1, "redBtn", 3, "click"]],
  template: function TerminalProviderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Terminal Providers Machine");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Plese select the POS machine through which you want to process the payment.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ng-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TerminalProviderModalComponent_ng_template_9_Template, 1, 1, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TerminalProviderModalComponent_ng_template_10_Template, 1, 1, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "validation-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TerminalProviderModalComponent_Template_button_click_13_listener() {
        return ctx._activeModal.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TerminalProviderModalComponent_Template_button_click_15_listener() {
        return ctx.handleConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.data == null ? null : ctx.data.providerList)("formControl", ctx.providerMachineID);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.providerMachineID)("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgLabelTemplateDirective, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_0__.ValidationErrorComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

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

/***/ 74185:
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/modules/cashier/collect/payment-modal/voucher/voucher.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherComponent": () => (/* binding */ VoucherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/common.service */ 5620);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/subject.service */ 29444);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _markazia_vouchers_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../markazia-vouchers/services/markazia-voucher.service */ 81181);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/directive/decimal-number.directive */ 55134);













const _c0 = ["fileInput"];
function VoucherComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VoucherComponent_ng_container_27_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 30);
  }
}
function VoucherComponent_ng_container_27_ng_container_6_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VoucherComponent_ng_container_27_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VoucherComponent_ng_container_27_ng_container_6_ng_container_1_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5 == null ? null : (tmp_0_0 = item_r5.get("voucherNumber")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function VoucherComponent_ng_container_27_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VoucherComponent_ng_container_27_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (item_r5 == null ? null : (tmp_0_0 = item_r5.get("voucherNumber")) == null ? null : tmp_0_0.invalid) && (item_r5 == null ? null : (tmp_0_0 = item_r5.get("voucherNumber")) == null ? null : tmp_0_0.touched) || (item_r5 == null ? null : (tmp_0_0 = item_r5.get("voucherNumber")) == null ? null : tmp_0_0.dirty));
  }
}
function VoucherComponent_ng_container_27_small_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Voucher Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r9.markaziaVoucher == null ? null : ctx_r9.markaziaVoucher.markaziaVAmount, "2.3-3"), " JOD ");
  }
}
function VoucherComponent_ng_container_27_ng_container_10_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VoucherComponent_ng_container_27_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VoucherComponent_ng_container_27_ng_container_10_ng_container_1_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5 == null ? null : (tmp_0_0 = item_r5.get("amountJod")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function VoucherComponent_ng_container_27_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VoucherComponent_ng_container_27_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (item_r5 == null ? null : (tmp_0_0 = item_r5.get("amountJod")) == null ? null : tmp_0_0.invalid) && (item_r5 == null ? null : (tmp_0_0 = item_r5.get("amountJod")) == null ? null : tmp_0_0.touched) || (item_r5 == null ? null : (tmp_0_0 = item_r5.get("amountJod")) == null ? null : tmp_0_0.dirty));
  }
}
function VoucherComponent_ng_container_27_ng_container_14_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VoucherComponent_ng_container_27_ng_container_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VoucherComponent_ng_container_27_ng_container_14_ng_container_1_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5 == null ? null : (tmp_0_0 = item_r5.get("currencyId")) == null ? null : tmp_0_0.errors["required"]);
  }
}
function VoucherComponent_ng_container_27_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VoucherComponent_ng_container_27_ng_container_14_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (item_r5 == null ? null : (tmp_0_0 = item_r5.get("currencyId")) == null ? null : tmp_0_0.invalid) && (item_r5 == null ? null : (tmp_0_0 = item_r5.get("currencyId")) == null ? null : tmp_0_0.touched) || (item_r5 == null ? null : (tmp_0_0 = item_r5.get("currencyId")) == null ? null : tmp_0_0.dirty));
  }
}
function VoucherComponent_ng_container_27_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td")(1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoucherComponent_ng_container_27_td_21_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.removeItem(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VoucherComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 19)(2, "td")(3, "div", 20)(4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VoucherComponent_ng_container_27_Template_input_change_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const i_r6 = restoredCtx.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.handleSearch($event, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, VoucherComponent_ng_container_27_i_5_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, VoucherComponent_ng_container_27_ng_container_6_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VoucherComponent_ng_container_27_Template_input_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.sendAmount());
    })("input", function VoucherComponent_ng_container_27_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.handleAmountFocus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, VoucherComponent_ng_container_27_small_9_Template, 3, 4, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, VoucherComponent_ng_container_27_ng_container_10_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "ng-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, VoucherComponent_ng_container_27_ng_container_14_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, VoucherComponent_ng_container_27_td_21_Template, 3, 0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_4_0;
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isLoading && ctx_r1.searchIndex == i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5 == null ? null : (tmp_2_0 = item_r5.get("voucherNumber")) == null ? null : tmp_2_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r1.markaziaVoucher == null ? null : ctx_r1.markaziaVoucher.markaziaVAmount) > ctx_r1.otherData.grandAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5 == null ? null : (tmp_4_0 = item_r5.get("amountJod")) == null ? null : tmp_4_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r1.currencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_6_0 = item_r5.get("currencyId")) == null ? null : tmp_6_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r1.otherData == null ? null : ctx_r1.otherData.isMultiCollect));
  }
}
function VoucherComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35)(1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Press Tab to add payment in another currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VoucherComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38)(1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cashier Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VoucherComponent_div_29_Template_textarea_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32._subjectService.cashierNote.next($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VoucherComponent_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 41);
  }
}
class VoucherComponent {
  onKeydownHandler() {
    this.handleTabKeyDown();
  }
  constructor(fb, _modalService, _activeModal, _datePipe, _commonService, _subjectService, _toastr, _vocuherService) {
    this.fb = fb;
    this._modalService = _modalService;
    this._activeModal = _activeModal;
    this._datePipe = _datePipe;
    this._commonService = _commonService;
    this._subjectService = _subjectService;
    this._toastr = _toastr;
    this._vocuherService = _vocuherService;
    this.invalidFileType = '';
    this.fileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    this.accounts = [];
    this.vouchersList = [];
    this.filesArray = [];
    this.uploadedFiles = [];
    this.filesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    this.isLoading = false;
    this.amountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.formValueEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.searchSequenceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.searchSequenceSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(1000)).subscribe(term => {
      this.getMarkaziaVouchers(term);
    });
  }
  ngOnInit() {
    console.log(this.otherData);
    this.initForm();
    this.voucherForm.statusChanges.subscribe(x => {
      this.voucherForm.markAllAsTouched();
      this.formValueEvent.emit({
        values: this.voucherForm.getRawValue(),
        touched: x == 'VALID' ? false : true
      });
    });
  }
  initForm() {
    this.voucherForm = this.fb.group({
      voucherArray: this.fb.array([this.initVoucherFormgroup()])
    });
    if (this.recentFormValues?.voucher?.voucherArray?.length) {
      let values = this.recentFormValues['voucher'].voucherArray;
      let formArray = this.voucherForm.get('voucherArray');
      formArray.removeAt(0);
      for (let item of values) {
        formArray.push(this.initVoucherFormgroup(item));
      }
    }
  }
  ngOnDestroy() {
    if (this.recentFormValues?.voucher?.voucherArray[0]?.amountJod > 0) {
      this.formValueEvent.emit({
        values: this.voucherForm.getRawValue(),
        touched: false
      });
    }
  }
  handleAmountFocus() {
    this.voucherForm.markAllAsTouched();
  }
  initVoucherFormgroup(item) {
    return this.fb.group({
      voucherSequence: [item?.voucherSequence || ''],
      voucherNumber: [item?.voucherNumber || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      amountJod: [{
        value: item?.amountJod || '',
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      currencyId: [{
        value: 9001,
        disabled: true
      }],
      brand: [{
        value: item?.brand || '',
        disabled: true
      }],
      campaign: [{
        value: item?.campaign || '',
        disabled: true
      }],
      validityTo: [{
        value: item?.validityTo || '',
        disabled: true
      }]
    });
  }
  handleSearch(event, index) {
    let value = event.target.value;
    this.searchIndex = index;
    if (value) {
      this.searchSequenceSubject.next(value);
    } else {
      this.voucherArray.at(this.searchIndex).reset();
    }
  }
  getMarkaziaVouchers(value) {
    this.isLoading = true;
    let params = `?pageSize=1000&sequence=${value}`;
    this._vocuherService.getMarkaziaVoucherList(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500)).subscribe(response => {
      let voucher = response.data[0];
      this.markaziaVoucher = voucher;
      let obj = {
        amountJod: voucher?.markaziaVAmount,
        voucherSequence: voucher?.markaziaVSequence,
        brand: voucher?.brand?.brand,
        campaign: voucher?.markaziaVCampaign,
        validityTo: this._datePipe.transform(voucher?.markaziaVValidityTo, 'mediumDate')
      };
      if (voucher) {
        if (voucher.markaziaVStatus == 39001) {
          //VALID VOUCHER
          this.voucherArray.at(this.searchIndex).patchValue(obj);
          if (obj?.amountJod > this.otherData.grandAmount) {
            this.voucherArray.at(this.searchIndex).get('amountJod').enable();
          } else {
            this.voucherArray.at(this.searchIndex).get('amountJod').disable();
            this.sendAmount();
          }
        } else {
          this._toastr.error('Invalid Voucher', 'Invalid');
          this.voucherArray.at(this.searchIndex).reset();
          this.sendAmount();
        }
      } else {
        this.voucherArray.at(this.searchIndex).reset();
        this._toastr.error('No voucher found', 'Not Found');
        this.sendAmount();
      }
    }).add(() => this.isLoading = false);
  }
  removeItem(i) {
    this.voucherArray.removeAt(i);
    this.sendAmount();
  }
  get voucherArray() {
    return this.voucherForm ? this.voucherForm.get('voucherArray') : null;
  }
  handleTabKeyDown() {
    if (this.voucherForm.invalid) {
      return;
    }
    if (this.otherData['amountExceeded']) {
      return;
    }
    if (!this.otherData?.isMultiCollect) this.addNewRow();
  }
  addNewRow() {
    this.voucherArray.push(this.initVoucherFormgroup());
    this.voucherForm.markAsUntouched();
  }
  handleSubmit() {
    if (this.voucherForm.invalid) {
      this.voucherForm.markAllAsTouched();
    } else {
      this.formValueEvent.emit({
        values: this.voucherForm.getRawValue(),
        submit: true
      });
    }
  }
  get f() {
    return this.voucherForm.controls;
  }
  sendAmount() {
    this.calculateAmount();
  }
  calculateAmount() {
    let amount = 0;
    for (let item of this.voucherArray.controls) {
      let formGroup = item;
      amount += parseFloat((+formGroup.controls['amountJod'].value).toFixed(3));
    }
    this.amountEvent.emit({
      amount
    });
  }
  resetForm() {
    this.voucherForm.reset();
    this.voucherForm.markAsUntouched();
    this.formValueEvent.emit({
      values: this.voucherForm.getRawValue(),
      touched: false,
      reset: true
    });
    this.amountEvent.emit({
      amount: 0
    });
  }
  closeModal() {
    if (this._activeModal) this._activeModal.close();else this._commonService.NavigateToRoute(`/${this.otherData?.redirectRoute}`);
  }
}
VoucherComponent.ɵfac = function VoucherComponent_Factory(t) {
  return new (t || VoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_1__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_markazia_vouchers_services_markazia_voucher_service__WEBPACK_IMPORTED_MODULE_2__.MarkaziaVoucherService));
};
VoucherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: VoucherComponent,
  selectors: [["voucher"]],
  viewQuery: function VoucherComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.inputRefList = _t);
    }
  },
  hostBindings: function VoucherComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.tab", function VoucherComponent_keydown_tab_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    accounts: "accounts",
    currencies: "currencies",
    recentFormValues: "recentFormValues",
    isPending: "isPending",
    otherData: "otherData"
  },
  outputs: {
    amountEvent: "amountEvent",
    formValueEvent: "formValueEvent"
  },
  decls: 37,
  vars: 8,
  consts: [[1, "tab-item"], [1, "row"], [1, "col-md-12", "text-end", "my-2"], ["type", "button", 1, "btn", "btn-trash", 3, "click"], ["src", "assets/images/reload.png", "alt", "", 2, "width", "25px"], [3, "formGroup", "submit"], [1, "col-md-12"], [1, "card-table"], [1, ""], [1, "table"], [4, "ngIf"], ["formArrayName", "voucherArray", 4, "ngFor", "ngForOf"], ["class", "col-md-12 d-flex mt-2", 4, "ngIf"], ["class", "col-12 mb-4", 4, "ngIf"], [1, "btns-group", "my-2", "me-0"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], ["class", "fa-solid fa-circle-notch fa-spin", 4, "ngIf"], ["formArrayName", "voucherArray"], [3, "formGroupName"], [1, "position-relative"], ["type", "text", "placeholder", "Voucher Sequence", "formControlName", "voucherNumber", 1, "form-control", 3, "change"], ["class", "fa-solid fa-circle-notch fa-spin fa-2x primary-clr search-loader", 4, "ngIf"], ["type", "number", "placeholder", "Amount", "formControlName", "amountJod", "appDecimalNumber", "", 1, "form-control", 3, "change", "input"], ["class", "primary-clr d-block", 4, "ngIf"], [1, "ngselect-curruncy", "form-group"], ["placeholder", "Currency", "bindLabel", "name", "bindValue", "lookupId", "formControlName", "currencyId", 3, "items"], ["type", "text", "placeholder", "Validiy To", "formControlName", "validityTo", 1, "form-control"], ["type", "text", "placeholder", "Brand", "formControlName", "brand", 1, "form-control"], ["type", "text", "placeholder", "Campaign", "formControlName", "campaign", 1, "form-control"], [1, "fa-solid", "fa-circle-notch", "fa-spin", "fa-2x", "primary-clr", "search-loader"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "primary-clr", "d-block"], ["src", "assets/images/trash.png", "alt", "", 2, "width", "25px"], [1, "col-md-12", "d-flex", "mt-2"], [1, "blue-clr", "d-flex", "align-items-center", "fw-500", "gap-1"], [1, "fa-solid", "fa-circle-plus", "primary-clr", "fa-2x"], [1, "col-12", "mb-4"], [1, "input-label"], [1, "form-control", 3, "change"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]],
  template: function VoucherComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoucherComponent_Template_button_click_3_listener() {
        return ctx.resetForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function VoucherComponent_Template_form_submit_5_listener() {
        return ctx.handleSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 1)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "table", 9)(11, "thead")(12, "tr")(13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Voucher Sequence*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Validity To");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Brand");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Campaign");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, VoucherComponent_th_25_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, VoucherComponent_ng_container_27_Template, 22, 8, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, VoucherComponent_div_28_Template, 4, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, VoucherComponent_div_29_Template, 4, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 6)(31, "div", 14)(32, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoucherComponent_Template_button_click_32_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, VoucherComponent_i_36_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.voucherForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.voucherArray == null ? null : ctx.voucherArray.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.otherData == null ? null : ctx.otherData.isMultiCollect));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.otherData.collectionType == 7001 || ctx.otherData.collectionType == 7004 || ctx.otherData.collectionType == 7005 || ctx.otherData.collectionType == 7008 || ctx.otherData.collectionType == 7009);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isPending);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isPending && "Saving" || "Confirm", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isPending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _shared_directive_decimal_number_directive__WEBPACK_IMPORTED_MODULE_3__.DecimalNumberDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe],
  styles: [".ng-dropdown-panel {\n  z-index: 9999999 !important;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 46px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.search-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.card-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 0px 10px 15px !important;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL21vZHVsZXMvY2FzaGllci9jb2xsZWN0L3BheW1lbnQtbW9kYWwvdm91Y2hlci92b3VjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSUo7O0FBRkE7RUFDRSxzQ0FBQTtFQUNBLGdCQUFBO0FBS0YiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgei1pbmRleDogOTk5OTk5OSAhaW1wb3J0YW50O1xufVxuLmNhcmQtdGFibGUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA0NnB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2VhcmNoLWxvYWRlcntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICByaWdodDoxMHB4O1xuICAgIHRvcDoxMHB4O1xufVxuLmNhcmQtdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

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

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _shared_routes_appRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/routes/appRoutes */ 53870);
/* harmony import */ var _shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/routes/apiUrl */ 15411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ 5620);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ 69082);










class HttpService {
  constructor(http, _spinnerService, _helperService, _sharedService) {
    this.http = http;
    this._spinnerService = _spinnerService;
    this._helperService = _helperService;
    this._sharedService = _sharedService;
    this.appRoutes = _shared_routes_appRoutes__WEBPACK_IMPORTED_MODULE_1__.AppRoutes;
    this.apiUrl = _shared_routes_apiUrl__WEBPACK_IMPORTED_MODULE_2__.ApiUrls;
  }
  get getToken() {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }
  get(api, apiBaseUrl) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': '*'
    });
    headers = headers.set('Authorization', 'Bearer ' + this.getToken);
    let options = {
      headers
    };
    let baseUrl = '';
    if (apiBaseUrl === 'admin') {
      baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl2;
    } else if (apiBaseUrl === 'master') {
      baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.masterBaseUrl;
    } else if (apiBaseUrl === 'cm') {
      baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cmBaseUrl;
    } else {
      baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    return this.http.get(baseUrl + api, {
      ...options
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      if (typeof response == "string") {
        return this.JsonParseData(response);
      } else {
        return response;
      }
    }));
  }
  post(api, data, apiBaseUrl) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      ...(!(data instanceof FormData) && {
        'Content-Type': 'application/json; charset=utf-8'
      }),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': '*'
    });
    headers = headers.set('Authorization', 'Bearer ' + this.getToken);
    let options = {
      headers
    };
    let baseUrl = '';
    if (apiBaseUrl === 'admin') {
      baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl2;
    } else if (apiBaseUrl === 'master') {
      baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.masterBaseUrl;
    } else if (apiBaseUrl === 'cm') {
      baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cmBaseUrl;
    } else {
      baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    // If data is a FormData object, send it directly; otherwise, stringify it
    const requestData = data instanceof FormData ? data : JSON.stringify(data);
    return this.http.post(baseUrl + api, requestData, {
      ...options
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      if (typeof response == "string") {
        return this.JsonParseData(response);
      } else {
        return response;
      }
    }));
  }
  JsonParseData(data) {
    let result = data;
    try {
      result = JSON.parse(data);
    } catch (e) {
      console.log(e);
    }
    return result;
  }
}
HttpService.ɵfac = function HttpService_Factory(t) {
  return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService));
};
HttpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: HttpService,
  factory: HttpService.ɵfac,
  providedIn: 'root'
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

/***/ }),

/***/ 15411:
/*!*****************************************!*\
  !*** ./src/app/shared/routes/apiUrl.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiUrls": () => (/* binding */ ApiUrls)
/* harmony export */ });
const ApiUrls = {
  Lookup: {
    GetLookups: "Lookup/GetLookups",
    GetAdminLookup: "Lookups/GetLookups",
    AddLookup: "Lookup/AddLookup",
    EditLookup: "Lookup/EditLookup",
    DeleteLookup: "Lookup/DeleteLookup"
  },
  PNsFollowUpControler: {
    AddPNNoteFollowUp: 'PNsFollowUpControler/AddPNNoteFollowUp'
  },
  POSMachine: {
    SendCreditCardRequest: 'POSMachine/send-credit-card-request',
    GetTerminalProviderMachine: 'TerminalProviders/GetTerminalProviderMachine'
  },
  Treasury: {
    GetRefundedOrders: 'Treasury/GetRefundedOrders'
  },
  Regenerate: {
    RegenerateOrderOrigionalInvoiceServiceOrder: 'Cashier/RegenerateOrderOrigionalInvoiceServiceOrder',
    RegenerateOrigionalReceiptServiceOrder: 'Cashier/RegenerateOrigionalReceiptServiceOrder',
    RegenerateOrigionalReceiptDirectPayment: 'Cashier/RegenerateOrigionalReceiptDirectPayment',
    RegenerateOrigionalInvoiceSpareParts: 'Cashier/RegenerateOrigionalInvoiceSpareParts',
    RegenerateOrigionalReceiptSpareParts: 'Cashier/RegenerateOrigionalReceiptSpareParts',
    RegenerateORReceipt: 'Cashier/RegenerateORReceipt',
    RegenerateOrigionalReceiptCustomer: 'Cashier/RegenerateOrigionalReceiptCustomer',
    RegenerateCashierFullRefundOrder: 'DirectPaymentReturnOrder/RegenerateCashierFullRefundOrder',
    RegenerateCashierRefundServiceOrder: 'ServiceLayerReturnOrder/RegenerateCashierRefundServiceOrder',
    RegenerateSparePartReturnOrderInvoice: 'SparePartsReturnOrder/RegenerateSparePartReturnOrderInvoice'
  }
};

/***/ }),

/***/ 53870:
/*!********************************************!*\
  !*** ./src/app/shared/routes/appRoutes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
const AppRoutes = {};

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_modules_cashier_collect_payment-modal_payment-modal_component_ts-sr-360cb3.js.map