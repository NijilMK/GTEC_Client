import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/auth.models';
// import { SelectedCompany, User } from 'src/app/core/models/auth.models';
// import { CompanySettingModel } from 'src/app/models/masters/company/company-model';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() { }

	private readonly currentCompany = 'currentCompany';
	private readonly currentUser = 'currentUser';
	private readonly currentCompanySetting = 'currentCompanySetting';
	private readonly reportsData = 'reportsData';
	expiryLength = 60 * 60 * 1000; //1Hr Seconds

	setWithExpiry(key: string, value: any, ttl: number) {
		const now = new Date()

		// `item` is an object which contains the original value
		// as well as the time when it's supposed to expire
		const item = {
			value: value,
			expiry: now.getTime() + ttl,
		}
		localStorage.setItem(key, JSON.stringify(item))
	}

	getWithExpiry(key: string) {
		const itemStr = localStorage.getItem(key)
		// if the item doesn't exist, return null
		if (!itemStr) {
			return null
		}
		const item = JSON.parse(itemStr)
		const now = new Date()
		// compare the expiry time of the item with the current time
		if (now.getTime() > item.expiry) {
			// If the item is expired, delete the item from storage
			// and return null
			localStorage.removeItem(key)
			return null
		}
		return item.value
	}

  setValue(key: string, item: string)
  {
    localStorage.setItem(key, item);
  }

  getValue(key: string) {
		const itemStr = localStorage.getItem(key);

    return itemStr;
  }

	// setCompany(company: SelectedCompany) {
	// 	localStorage.setItem(this.currentCompany, JSON.stringify(company));
	// }

	// getCompany(): SelectedCompany {
	// 	const company = JSON.parse(localStorage.getItem(this.currentCompany) || "");

	// 	return company;
	// }

	// setCompanySetting(company: CompanySettingModel) {
	// 	localStorage.setItem(this.currentCompanySetting, JSON.stringify(company));
	// }

	getCompanySetting() {
		const setting = localStorage.getItem(this.currentCompanySetting);
		return setting ? JSON.parse(setting) : null;
	}

	setUser(user: User) {
		this.setWithExpiry(this.currentUser, JSON.stringify(user), this.expiryLength);
		//localStorage.setItem(this.currentUser, JSON.stringify(user));
	}

	getUser() {
		const itemStr = this.getWithExpiry(this.currentUser);// localStorage.getItem(this.currentUser)

		if (!itemStr) {
			return null
		}

		const item = JSON.parse(itemStr)
		return item;
	}

	setReportsData(data: any) {
		let newReportsData;
		let reportsData = localStorage.getItem(this.reportsData);
		if (!reportsData || !JSON.parse(reportsData).search) {
			newReportsData = { search: [data] }
		} else {
			newReportsData = JSON.parse(reportsData);
			let reportdata = newReportsData.search.findIndex((item: any) => item.type === data.type);
			if (reportdata > -1)
				newReportsData.search.splice(reportdata, 1);
			newReportsData.search.push(data);
		}
		localStorage.setItem(this.reportsData, JSON.stringify(newReportsData));
	}

	getReportsData(type: string) {
		const reportsDataString = localStorage.getItem(this.reportsData);
		if (reportsDataString) {
			const reportsData = JSON.parse(reportsDataString);
			if (reportsData)
				return reportsData.search.find((item: any) => item.type === type);
		}
		return null;
	}

	removeReportsData(type: string) {
		const reportsDataString = localStorage.getItem(this.reportsData);
		if (reportsDataString) {
			const reportsData = JSON.parse(reportsDataString)
			const reportdata = reportsData.search.findIndex((item: any) => item.type === type);
			if (reportdata > -1) {
				reportsData.search.splice(reportdata, 1);
				localStorage.setItem(this.reportsData, JSON.stringify(reportsData));
			}
		}
	}

}
