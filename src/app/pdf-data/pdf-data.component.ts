import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-pdf-data',
  templateUrl: './pdf-data.component.html',
  styleUrls: ['./pdf-data.component.css']
})
export class PdfDataComponent implements OnInit {


  excelData: any;
  arr :any = `Customer Invoice
  Load #
  Date
  PO#
  
  15865
  01/31/2022
  12533
  
  4012 Lasso Ct
  Bakersfield, CA 93313
  Phone: +1 661-889-5991
  
  Customer Information
  CENTER VALLEY LOGISTICS INC
  PO BOX 42106
  Phone: 661-218-4100
  
  Type
  
  Location
  
  Date / Time
  
  1
  
  Pickup
  
  Sunwest Fruit Co - Parlier, CA
  755 Manning Ave
  
  APT
  01/21/2022 12:00 PM
  
  2
  
  Delivery
  
  Walmart Distribution Center- Gordonsville,
  VA 22942, USA
  10695 James Madison Hwy
  
  APT
  01/26/2022 04:00 AM
  
  Pay Items
  Description
  
  Quantity
  
  Rates
  
  Amount
  
  Flat Rate
  
  1
  
  $8,000.00
  
  $8,000.00
  
  Total
  
  $8,000.00
  
  These General Terms and Conditions ("General Terms") apply to all transportation services provided by
  Mann Trans Inc, INC. ("Mann Trans Inc")or its subsidiaries, (whichever of Mann Trans Inc or its
  subsidiaries is providing services is referred to as "Company")
  Customer affirms that information furnished in its confirmation with Company is current and accurate. These General Terms
  supersede any prior termsor agreements between Company and Customer related to the subject matter of these General
  Terms and are effective for one (1) year, automaticallyrenewing for successive one (1) year periods, unless terminated by
  either party by providing 30 days written notice to the other party. If, however, theparties continue to conduct business after
  termination, these General Terms will apply.
  Payment receiving terms are NET 30 days from invoice date, and a finance charge of 1.5% per month is added to accounts
  30 days or more past due.Customer will pay all collection company costs, attorney fees, court costs, and any othercollection
  costs associated with collecting amounts due.
  Customer affirms that it is solvent, is not currently a party to any bankruptcy proceeding, is not being dissolved or otherwise
  liquidating its assets, cansatisfy all financial obligations to Company, and has authority to tender all freight for which it
  requests Company to arrange transport. Customer affirmsthat there are no open judgments, suits, or liens against Customer.
  Customer will promptly notify Company of any material change in ownership.
  Mann Trans Inc is a transportation broker only, arranging transportation of freight by independent third-party motor carriers
  ("Contract Carriers"). If Mann Trans Inc is listedon Bills of Lading, it is for convenience only and does not change Mann
  Trans Inc's status as a broker only.
  Customer consents to recording of phone calls for quality assurance and training purposes.
  Company may assist in processing claims for cargo loss, shortage, or damage, but Customer must file cargo claims relating
  to Contract Carriers withinnine (9) months from the date of such loss, shortage, or damage, which for purposes of these
  General Terms will be the delivery date or, in the event ofnon-delivery, the scheduled delivery date. Customer will fully
  cooperate with Company in processing Customer's cargo claims. If Company pays a claim,Customer automatically assigns
  any and all of its rights and interest in the claim to Company.
  Contract Carriers are required to maintain cargo insurance in the amount of $100,000 per load. Customer will not tender
  loads valued in excess of$100,000 without first giving Mann Trans Inc sufficient written notice to arrange for increased
  insurance limits. Failure to provide such written notice prior to tenderwill result in Customer's loads being insured by
  Contract Carriers to a maximum of $100,000.
  These General Terms will be governed by the laws of the State of California, except to the extent that federal transportation
  laws and regulationspreempt those laws. The state courts located in Kern County, CA will have exclusive and irrevocable
  jurisdiction over and will be the exclusive andmandatory venue for any claim, counterclaim, dispute, or lawsuit arising in
  connection with any transactions, loads, or other business between Companyand Customer, and Customer consents to and
  waives any objection to such jurisdiction.
  Customer agrees to indemnify, defend, reimburse, and hold Company harmless for Customer's negligence, willful
  misconduct, and/or breach of theseGeneral Terms to the fullest extent of the law.
  Customer agrees that all loads transported by a mode or service other than full truckload (including, without limitation, lessthan-truckload ("LTL"),intermodal, ocean, air, rail, and customs brokerage) and all loads transported outside the U.S.,
  regardless of mode, are subject to the Multi-Mode Termsand Conditions in effect on the date of load tender (“Multi-Mode
  Terms") which may be a copy will be provided to Customer upon written request. TheMulti-Mode Terms are incorporated
  into these General Terms as if fully rewritten in this Section.
  Customer acknowledges that By picking up this load they agree to the terms and conditions stated on this confirmation
  whether you sign it or not.13. Customer acknowledges that the individual executing these General Terms has authority to do
  so, agrees that these General Terms may also be signedby electronic means through Mann Trans Inc's system, and
  authorizes Mann Trans Inc to contact each credit/bank reference provided by customer.
  
  Print Name
  
  Signature
  
  Date
  
  `

  constructor() { }

  ngOnInit() {

    // this.mannInvoice()
  }

  readExcel(event: any) {

    let file =  event.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {

      var workBook = XLSX.read(fileReader.result, {type:'binary'});
      var sheetNames = workBook.SheetNames;
      this.excelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])      
      // console.log('this.excelData: ', this.excelData);
    }
    
  }





  mannInvoice_String() {

    this.arr = this.arr.replace(/[\r\n]+/g,"");
    this.arr = this.arr.split(' ');
    this.arr = this.arr.slice(0, 170)
    this.arr = this.arr.filter((n: any) => n);
    // console.log('this.arr: ', this.arr);


    {
    var loadNo =  this.arr[6]
    var date = this.arr[7]
    var PO = this.arr[8]
    var address =  this.arr.slice(9, 14).toString()
    var phone = this.arr[16] + ' ' + this.arr[17]

    var logistics = this.arr[20] + ' '+ this.arr[21] + ' '+ this.arr[22] + this.arr[23]
    var poBox = this.arr[24] + ' ' + this.arr[25] + ' ' + this.arr[26]
    var cPhone = this.arr[28]
   
    var pickupType = this.arr[35]
    var pickupAdderss = this.arr.slice(36, 44).toString()
    var pickupDateTime = this.arr[45] + ' '+ this.arr[46] + ' '+ this.arr[47] + this.arr[48]


    var deliveryType = this.arr[50]
    var deliveryAdderss = this.arr.slice(51, 61).toString()
    var deliveryDateTime = this.arr[62] + ' '+ this.arr[63] + ' '+ this.arr[64] + this.arr[65]
    }

   
    let String_Details = {

      invoiceDetails :  {
        loadNo: loadNo,
        date: date,
        PO: PO,
        address: address,
        phone: phone
      },
    
      customerInformation : {
        logistics: logistics,
        poBox: poBox,
        phone: cPhone
      },
      pickup : {
        type: pickupType,
        adderss: pickupAdderss,
        dateTime: pickupDateTime
      },
      delivery : {
        type: deliveryType,
        dateTime: deliveryDateTime,
        adderss: deliveryAdderss
      },
    }
    
    console.log('String_Details: ', String_Details);
    
  }





  mannInvoice_Excel() {
    
    this.excelData = this.excelData.slice(0, 19)

    let Excel_Details = {
      
      invoiceDetails : {
        loadNo: this.excelData[0]['__EMPTY'],
        date: this.excelData[1]['__EMPTY'],
        PO: this.excelData[2]['__EMPTY'],
        address: this.excelData[3]['Customer Invoice'] + " " + this.excelData[4]['Customer Invoice'],
        phone: this.excelData[5]['Customer Invoice']
      },
      customerInformation : {
        logistics: this.excelData[7]['Customer Invoice'],
        poBox: this.excelData[8]['Customer Invoice'],
        phone: this.excelData[9]['Customer Invoice']
      },
      pickup : {
        type: this.excelData[12]['__EMPTY'],
        dateTime: this.excelData[12]['__EMPTY_3'],
        adderss: this.excelData[11]['__EMPTY_1'] + " " + this.excelData[12]['__EMPTY_1']
        
      },
      delivery : {
        type: this.excelData[14]['__EMPTY'],
        dateTime: this.excelData[15]['__EMPTY_3'],
        adderss: this.excelData[13]['__EMPTY_1'] + " " + this.excelData[14]['__EMPTY_1'] + " " + this.excelData[15]['__EMPTY_1']
      },
      
    }



    console.log('Excel_Details: ', Excel_Details);

  }





}
