import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productId = 0;
  photoId = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      const interValue = params;
      this.productId = interValue.productId;
      this.photoId = interValue.photoId;
    });
   }

  ngOnInit(): void {
  }

}
