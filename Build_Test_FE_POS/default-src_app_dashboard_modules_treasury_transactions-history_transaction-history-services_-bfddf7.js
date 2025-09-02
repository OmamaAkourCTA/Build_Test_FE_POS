"use strict";
(self["webpackChunkmarkaizaAdmin"] = self["webpackChunkmarkaizaAdmin"] || []).push([["default-src_app_dashboard_modules_treasury_transactions-history_transaction-history-services_-bfddf7"],{

/***/ 52124:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/dashboard/modules/treasury/transactions-history/transaction-history-services/transaction-history.service.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionHistoryService": () => (/* binding */ TransactionHistoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared.service */ 69082);



class TransactionHistoryService {
  constructor(http, sharedService) {
    this.http = http;
    this.sharedService = sharedService;
    this.apiUrl = this.sharedService.getUrl;
  }
  GetTreasuryExpensesReport(searchText, expenseId, sort, pageNo, lookupId, branches, registerName, registerNo, employee, startDate, endDate) {
    return this.http.get(this.apiUrl + `PettyCash/GetTreasuryExpensesReport?Search=${searchText}&expenseId=${expenseId}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&ExpenseCategoryId=${lookupId ? lookupId : ''}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}&CreatedBy=${employee}&fromDate=${startDate}&toDate=${endDate}`, this.sharedService.getHeaders());
  }
  /**
   * get category
   */
  GetCategory(limit) {
    let URL = `Lookups/GetLookups?lookupTypeId=12`;
    if (limit) {
      URL += limit;
    }
    return this.http.get(this.apiUrl + URL, this.sharedService.getHeaders());
  }
  /**
   * register Name
   */
  GetRegisterName(limit) {
    let URL = `Register/GetRegisters?Status=2001`;
    if (limit) {
      URL += limit;
    }
    return this.http.get(this.apiUrl + URL, this.sharedService.getHeaders());
  }
  /**
   * Branches
   */
  GetBranches(limit) {
    let URL = `Branches/GetBranches?Status=2001&sort=1`;
    if (limit) {
      URL += limit;
    }
    return this.http.get(this.apiUrl + URL, this.sharedService.getHeaders());
  }
  /**
   * employees
   */
  GetEmployees(limit) {
    let URL = `User/GetUsers?RoleId=1&Status=2001&Invitation=2004`;
    if (limit) {
      URL += limit;
    }
    return this.http.get(this.apiUrl + URL, this.sharedService.getHeaders());
  }
  /**
   * get Collected Amount
   */
  getCollectedAmount() {
    return this.http.get(this.apiUrl + `Treasury/GetCollectedAmounts`, this.sharedService.getHeaders());
  }
  getOrderCollectionPaymentTypes(collectionId) {
    return this.http.get(this.apiUrl + `Treasury/GetOrderCollectionPaymentTypes?CollectionId=${collectionId}`, this.sharedService.getHeaders());
  }
  getBankUnderTakenCollectionDetails(collectionId) {
    return this.http.get(this.apiUrl + `Treasury/GettBankUnderTakenCollectionDetails?CollectionId=${collectionId}`, this.sharedService.getHeaders());
  }
  getInhouseCollectionPaymentDetails(collectionId) {
    return this.http.get(this.apiUrl + `Treasury/GetInhouseCollectionPaymentDetails?CollectionId=${collectionId}`, this.sharedService.getHeaders());
  }
  getInhouseCollectionDetails(collectionId) {
    return this.http.get(this.apiUrl + `Treasury/GettInhouseCollectionDetails?CollectionId=${collectionId}`, this.sharedService.getHeaders());
  }
  /**
   * get Direct Payment List
   */
  GetDirectPaymentCollection(searchText, sort, pageNo, CustomerSearch, branches, registerName, registerNo, employee, payments, startDate, endDate) {
    return this.http.get(this.apiUrl + `Treasury/GetDirectPaymentCollections?CashCard=${searchText}&Customer=${CustomerSearch}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}&CollectedByEmployee=${employee}&CollectionDateFrom=${startDate ? startDate : ''}&CollectionDateTo=${endDate ? endDate : ''}`, this.sharedService.getHeaders());
  }
  getAllRegisterDirectDeposit(searchText, depositId, sort, pageNo, branches, registerName, registerNo, employee, payments, startDate, endDate) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetAllRegisterDirectDeposit?registerId=${this.sharedService.getRegister.registerObj?.id}&search=${searchText}&Sort=${sort}&PageNo=${pageNo}&PageSize=6
      &DepositType=${payments}&BranchId=${branches}&Registername=${registerName}&RegisterId=${registerNo}&DepositId=${depositId}&DepositedBy=${employee}&DepositeDateFrom=${startDate ? startDate : ''}&DepositeDateFrom=${endDate ? endDate : ''}`, this.sharedService.getHeaders());
  }
  getRegisterDirectCashDeposit(sageBankId, registerId, depositId) {
    return this.http.get(this.apiUrl + `AllocationOrdersService/GetRegisterDirectCashDeposit?sageAccountID=${sageBankId}&registerId=${registerId}&DepositeId=${depositId}`, this.sharedService.getHeaders());
  }
  getRegisterDirectDepositCheques(sageAccountID, registerId, depositId) {
    let endPoint = `AllocationOrdersService/GetRegisterDirectDepositCheques?sageAccountID=${sageAccountID}&registerId=${registerId}&DepositeId=${depositId}`;
    return this.http.get(this.apiUrl + endPoint, this.sharedService.getHeaders());
  }
  getDirectPaymentDetails(id) {
    return this.http.get(this.apiUrl + `Treasury/GetDirectPaymentCollectionDetails?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  // direct payment collection payment details
  getDirectPaymentCollectionPaymentDetails(id) {
    return this.http.get(this.apiUrl + `Treasury/GetDirectPaymentCollectionPaymentDetails?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  getPNOrderCollectionPayments(id) {
    return this.http.get(this.apiUrl + `Treasury/GetPNOrderCollectionPayments?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  // Revenu
  getOtherRevenueCollections(searchText, sort, pageNo, CustomerSearch, branches, registerName, registerNo, employee, payments, startDate, endDate) {
    return this.http.get(this.apiUrl + `Treasury/GetOtherRevenueCollections?Customer=${CustomerSearch}&Sort=${sort}&PageNo=${pageNo}&PageSize=6
      &CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}
      &CollectedByEmployee=${employee}&CollectionDateFrom=${startDate ? startDate : ''}&CollectionDateTo=${endDate ? endDate : ''}`, this.sharedService.getHeaders());
  }
  // Revenu
  getCustomerPaymentCollections(searchText, sort, pageNo, CustomerSearch, branches, registerName, registerNo, employee, payments, startDate, endDate) {
    return this.http.get(this.apiUrl + `Treasury/GetCustomerPaymentCollections?Search=${searchText}&Customer=${CustomerSearch}&Sort=${sort}&PageNo=${pageNo}&PageSize=6
      &CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}
      &CollectedByEmployee=${employee}&CollectionDateFrom=${startDate ? startDate : ''}&CollectionDateTo=${endDate ? endDate : ''}`, this.sharedService.getHeaders());
  }
  getOtherRevenueCollectionPayments(id) {
    return this.http.get(this.apiUrl + `Treasury/GetOtherRevenueCollectionPayments?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  getBankUnderTakenCollections(searchText, sort, pageNo, CustomerSearch, invoiceNumber, branches, registerName, registerNo, employee, payments, startDate, endDate) {
    return this.http.get(this.apiUrl + `Treasury/GetBankUnderTakenCollections?cashCard=${searchText}&Customer=${CustomerSearch}&invoiceNumber=${invoiceNumber}&Sort=${sort}&PageNo=${pageNo}&PageSize=6
      &CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}
      &CollectedByEmployee=${employee}&CollectionDateFrom=${startDate ? startDate : ''}&CollectionDateTo=${endDate ? endDate : ''}`, this.sharedService.getHeaders());
  }
  getInhouseCollections(searchText, sort, pageNo, CustomerSearch, invoiceNumber, branches, registerName, registerNo, employee, payments, startDate, endDate) {
    return this.http.get(this.apiUrl + `Treasury/GetInhouseCollections?cashCard=${searchText}&Customer=${CustomerSearch}&invoiceNumber=${invoiceNumber}&Sort=${sort}&PageNo=${pageNo}&PageSize=6
      &CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}
      &CollectedByEmployee=${employee}&CollectionDateFrom=${startDate ? startDate : ''}&CollectionDateTo=${endDate ? endDate : ''}`, this.sharedService.getHeaders());
  }
  getTransferFeesCollections(params) {
    return this.http.get(this.apiUrl + `Treasury/GetTransferFeesCollections${params}`, this.sharedService.getHeaders());
  }
  getPNOrdersCollections(params) {
    return this.http.get(this.apiUrl + `Treasury/GetPNOrdersCollections${params}`, this.sharedService.getHeaders());
  }
  getTransferFeesCollectionPayments(collectionId) {
    return this.http.get(this.apiUrl + `Treasury/GetTransferFeesCollectionPayments?CollectionId=${collectionId}`, this.sharedService.getHeaders());
  }
  getOtherRevenueCollectionDetails(id) {
    return this.http.get(this.apiUrl + `Treasury/GetOtherRevenueCollectionDetails?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  getCustomerPaymentCollectionDetails(id) {
    return this.http.get(this.apiUrl + `Treasury/GetCustomerPaymentCollectionPayments?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  getBanksUnderTakingCollectionPaymentDetails(id) {
    return this.http.get(this.apiUrl + `Treasury/GetBanksUnderTakingCollectionPaymentDetails?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  getCustomerPaymentsOrderDetails(id) {
    return this.http.get(this.apiUrl + `CustomerPayment/GetCustomerPaymentsOrderDetails?orderId=${id}`, this.sharedService.getHeaders());
  }
  /**
   * get Service Collection List
   */
  GetServiceCenterCollection(returned, searchText, sort, pageNo, CustomerSearch, branches, registerName, registerNo, employee, payments, startDate, endDate) {
    return this.http.get(this.apiUrl + `Treasury/GetServicesCollections?return=${returned}&CashCard=${searchText}&Customer=${CustomerSearch}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}&CollectedByEmployee=${employee}&CollectionDateFrom=${startDate ? startDate : ''}&CollectionDateTo=${endDate ? endDate : ''}`, this.sharedService.getHeaders());
  }
  // get direct payment details
  getServiceCenterDetails(id) {
    return this.http.get(this.apiUrl + `Treasury/GetServicesCollectionDetails?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  //get service center parts
  getServiceCenterParts(id, pageNo) {
    return this.http.get(this.apiUrl + `SalesOrders/GetServicesSalesOrderSpareparts?servicesSalesOrderNo=${id}&PageNo=${pageNo}&PageSize=2`, this.sharedService.getHeaders());
  }
  //get service center labour
  getServiceCenterLabour(id, pageNo) {
    return this.http.get(this.apiUrl + `SalesOrders/GetServicesSalesOrderLabors?servicesSalesOrderNo=${id}&PageNo=${pageNo}&PageSize=2`, this.sharedService.getHeaders());
  }
  //get service center Sublet
  getServiceCenterSublet(id, pageNo) {
    return this.http.get(this.apiUrl + `SalesOrders/GetServicesSalesOrderSublets?servicesSalesOrderNo=${id}&PageNo=${pageNo}&PageSize=2`, this.sharedService.getHeaders());
  }
  //modal API payment
  getServiceCenterCollectionPaymentDetails(id) {
    return this.http.get(this.apiUrl + `Treasury/GetServicesCollectionPayments?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  ////Spare Parts
  /**
   * get Service Collection List
   */
  GetSparePartsCollection(orderNo, returned, searchText, sort, pageNo, CustomerSearch, branches, registerName, registerNo, employee, payments, startDate, endDate) {
    return this.http.get(this.apiUrl + `Treasury/GetSparePartsCollections?orderNo=${orderNo}&return=${returned}&CashCard=${searchText}&Customer=${CustomerSearch}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}&CollectedByEmployee=${employee}&CollectionDateFrom=${startDate ? startDate : ''}&CollectionDateTo=${endDate ? endDate : ''}`, this.sharedService.getHeaders());
  }
  // get spare parts details
  getSparePartDetails(id) {
    return this.http.get(this.apiUrl + `Treasury/GetSparePartscollectionDetails?CollectionId=${id}`, this.sharedService.getHeaders());
  }
  //get sapre parts view table
  getSPParts(id, pageNo) {
    return this.http.get(this.apiUrl + `SalesOrders/GetSparePartsSalesOrderSpareparts?sparePartsSalesOrderOpportunityId=${id}&PageNo=${pageNo}&PageSize=2`, this.sharedService.getHeaders());
  }
  //modal API payment
  getSparePartsPaymentDetails(id) {
    return this.http.get(this.apiUrl + `Treasury/GetSparePartsCollectionPayments?CollectionId=${id}`, this.sharedService.getHeaders());
  }
}
TransactionHistoryService.ɵfac = function TransactionHistoryService_Factory(t) {
  return new (t || TransactionHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};
TransactionHistoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TransactionHistoryService,
  factory: TransactionHistoryService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_modules_treasury_transactions-history_transaction-history-services_-bfddf7.js.map