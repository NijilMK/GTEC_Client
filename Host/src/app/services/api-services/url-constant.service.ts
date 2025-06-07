import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class URLConstantService {

  URLList = new Map<string, string>();

  constructor() {

    this.URLList.set('UserType', 'General/UserType');
    this.URLList.set('Company', 'General/Company');
    this.URLList.set('AddCompany', 'General/Company/NewCompany');
    this.URLList.set('Country', 'General/Country');
    this.URLList.set('State', 'General/State');
    this.URLList.set('District', 'General/District');
    this.URLList.set('TaxType', 'General/TaxType');
    this.URLList.set('Currency', 'General/Currency');
    this.URLList.set('Branch', 'General/Branch');
    this.URLList.set('ItemCategory', 'General/ItemCategory');
    this.URLList.set('AddItemCategory', 'General/ItemCategory/NewItemCategory');
    this.URLList.set('Designation', 'General/Designation');
    this.URLList.set('User', 'General/User');
    this.URLList.set('Cess', 'General/Cess');
    this.URLList.set('Vehicle', 'General/Vehicle');
    this.URLList.set('Driver', 'General/Driver');
    this.URLList.set('Size', 'General/Size');
    this.URLList.set('Bank', 'General/Bank');
    this.URLList.set('NewUser', 'General/User/NewUser');
    this.URLList.set('Currency', 'General/Currency');
    this.URLList.set('TaxType', 'General/TaxType');
    this.URLList.set('Item', 'General/Item');
    this.URLList.set('Manufacturer', 'General/Manufacturer');
    this.URLList.set('Tax', 'General/Tax');
    this.URLList.set('Sku', 'General/Sku');
    this.URLList.set('BillFormat', 'General/BillFormat');
    this.URLList.set('Coupon', 'General/Coupon');
    this.URLList.set('Employee', 'HR/Employee');
    this.URLList.set('Area', 'General/Area');
    this.URLList.set('Customer', 'General/Customer');
    this.URLList.set('NewCustomer', 'General/Customer/NewCustomer');
    this.URLList.set('Printer', 'General/Printer');
    this.URLList.set('Routes', 'General/Routes');
    this.URLList.set('FinancialYear', 'General/FinancialYear');
    this.URLList.set('Manufacturer', 'General/Manufacturer');
    this.URLList.set('PackageStatus', 'General/PackageStatus');
    this.URLList.set('EmployeeDocument', 'HR/EmployeeDocument');
    this.URLList.set('CustomerAddress', 'General/CustomerAddress');
    this.URLList.set('GetBillType', 'General/BillType/GetBillType?transactions=');
    this.URLList.set('BillType','General/BillType');
    this.URLList.set('SalesOrder', 'Inventory/SalesOrder/NewSalesOrder');
    this.URLList.set('SalesOrderList', 'Inventory/SalesOrder');
    this.URLList.set('Warehouse', 'General/Warehouse');
    this.URLList.set('PrintType','General/PrintType');
    this.URLList.set('Leadger', 'Accounts/Ledger');
    this.URLList.set('Ledger', 'Accounts/Ledger');
    this.URLList.set('LedgerGroup', 'Accounts/LedgerGroup');
    this.URLList.set('Package', 'Inventory/Package/NewPackage');
    this.URLList.set('Sales', 'Inventory/Sales/NewSales');
    this.URLList.set('Purchase', 'Inventory/Purchase/NewPurchase');
    this.URLList.set('PurchaseOrder', 'Inventory/PurchaseOrder');
    this.URLList.set('PurchaseRequest', 'Inventory/PurchaseRequest');
    this.URLList.set('SalesList', 'Inventory/Sales');
    this.URLList.set('SalesReturn', 'Inventory/SalesReturn');
    this.URLList.set('PurchaseReturn', 'Inventory/PurchaseReturn');
    this.URLList.set('PurchaseList', 'Inventory/Purchase');
    this.URLList.set('PackageList', 'Inventory/Package');
    this.URLList.set('PackageLog', 'Inventory/PackageLog');
    this.URLList.set('Reason', 'General/Reason');
    this.URLList.set('CompanySettings', 'General/CompanySettings');
    this.URLList.set('Voucher', 'Inventory/Voucher');
    this.URLList.set('UserSettings', 'General/UserSettings');
    this.URLList.set('Report', 'Reports/StockReport');
    this.URLList.set('CostCentre', 'General/CostCentre');
    this.URLList.set('Accounts', 'Reports/Accounts');
    this.URLList.set('Brand', 'General/Brand');
    this.URLList.set('Hsn', 'General/Hsn');
    this.URLList.set('PageSettings', 'General/PageSettings');
    this.URLList.set('Quotation','Inventory/Quotation');
    this.URLList.set('QuotationList','Inventory/Quotation');
    this.URLList.set('PurchaseReport', 'Reports/PurchaseReport');


  }

  getServerURL(): string {
   //return "https://localhost:7235/";
   return  "https://localhost:7052/";
  }

  getUploadedURL() {
    return this.getServerURL() + "UploadedFiles/";
  }

}
