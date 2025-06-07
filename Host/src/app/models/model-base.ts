import { number } from "echarts";

export class ModelBase {
  id: number=0;
  isDeleted:boolean = false;
  createdDate!: Date;
  updatedDate!: Date;
  referenceId! : number;
  referenceType : string = "angular"
  mainId!:string;
}

export class CompanyBase extends ModelBase
{
  companyId : number = 0;
}
