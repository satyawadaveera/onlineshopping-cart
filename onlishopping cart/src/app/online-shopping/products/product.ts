export class Product {
  pimage:string;
  pname:string;
  pcode:string;
  pavailiable:string;
  pprice:number;
  qty:number=1;
  prating:number;
  constructor(pimage,pname,pcode,pavailiable,pprice,qty,prating){
    this.pimage=pimage;
    this.pname=pname;
    this.pcode=pcode;
    this.pavailiable=pavailiable;
    this.pprice=pprice;
    this.qty=qty;
    this.prating=prating;
  }
}