import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  gadgetprice:number;
  oldphone:number;
  paymentterms:number;
  interestpayable:number;
  financedamount:number;
  monthlypayment:number;

  calculateFinancedAmount() {
    this.financedamount = this.gadgetprice - this.oldphone;
    this.financedamount = parseFloat(this.financedamount.toFixed(2));
  }
  calculateMonthlyPayment(){
    this.interestpayable = 12*(1.3/100)*this.financedamount;
    this.interestpayable = parseFloat(this.interestpayable.toFixed(2));
    this.monthlypayment = (this.financedamount+this.interestpayable)/this.paymentterms;
    this.monthlypayment = parseFloat(this.monthlypayment.toFixed(2));


  }


  constructor(public navCtrl: NavController) {

  }

}
