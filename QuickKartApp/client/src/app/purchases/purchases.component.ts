import { Component, OnInit } from '@angular/core';
import { IPurchaseDetails } from '../interfaces/IPurchaseDetails';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent implements OnInit {
  purchases: IPurchaseDetails[];
  errorMsg: string = '';

  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {
    this.getPurchases();
  }

  getPurchases() {
    this.purchaseService.getPurchaseDetails().subscribe(
      (purchases) => {
        console.log(purchases);
        this.purchases = purchases;
      },
      (error) => {
        this.purchases = null;
        this.errorMsg = error;
      }
    );
  }
}
