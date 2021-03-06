import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceProduct } from '../../shared/Interfaces/product';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: InterfaceProduct;

  constructor(private storeService: StoreService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProductDetail();
  }

  loadProductDetail() {
    this.storeService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
    }, error => {
      console.log(error);
    });
  }

}
