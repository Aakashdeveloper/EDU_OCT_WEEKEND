import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/Router';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { MyUpper } from './upperCase.pipe';
import { DiscountPipe } from './discount.pipe';
import { FilterProduct } from './filterProduct.pipe';
import { ProductDetailComponent } from './productDetail.component';
import { ProductService } from './product.service';
import { RouterGaurds } from './product.gaurd';


@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'productDetails/:id', canActivate: [RouterGaurds], component: ProductDetailComponent},
        ]),
        SharedModule
    ],
    declarations: [
        ProductComponent,
        MyUpper,
        DiscountPipe,
        FilterProduct,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        RouterGaurds
    ]
})

export class ProductModule {

}
