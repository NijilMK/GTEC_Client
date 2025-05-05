export interface BaseCompany {
  id: number;
  // Add other shared properties here, for example:
  // companyId: number;
  // createdDate?: Date;
}

export interface Qualification extends BaseCompany {
  name: string;
}

export interface OfferGroupType extends BaseCompany {
  name: string;
}

export interface Admission {
  id: number;
  name: string;
  qualificationID: number;
  qualification?: Qualification; // optional, depending on if it's populated
  installmentsCount: number;
  address?: string;
  parrent?: string;
  courseDuration: number;
  fastDuration: number;
  isFast: boolean;
  scheme?: string;
  firstInstallment: number;
  contactNo?: string;
  mobileNo?: string;
  optInSMS: boolean;
  totalFee: number;
  discountPrecent: number;
  admissionDate: Date;
  instalmentAmount: number;
  geneder?: string;
  discountAmount: number;
  netAmount: number;
  isEmployeed: boolean;
  remarks?: string;
  offerType?: string;
  offerGroupTypeID: number;
  offerGroupType?: OfferGroupType; // optional, depending on backend return
  offerAmount: number;
  photo?: Uint8Array; // or use string if you plan to send a base64 or URL
  registrationFee: number;
}
