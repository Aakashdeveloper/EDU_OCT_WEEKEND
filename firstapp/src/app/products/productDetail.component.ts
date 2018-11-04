import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
    templateUrl: './productDetail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    name: String;
    description: String;
    image: String;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._productService.getProductDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['products']);
    }

}


/*
ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];

        this._route
            .queryParams
            .subscribe((qdata) => {
                this.name = qdata['name'];
                this.description = qdata['desc'];
                this.image = qdata['img'];
            });
    }
*/
