import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    title: String = '*****Product List';
    showImage: Boolean = false;
    filterText: String = 'sky';
    products: IProduct[] = [
        {
            '_id': '5a05dacc734d1d68d42d31f3',
            'productId': 1,
            'productName': 'Leaf Rake',
            'productCode': 'GDN-0011',
            'releaseDate': 'March 19, 2016',
            'description': 'Leaf rake with 48-inch wooden handle.',
            'price': 19.95,
            'starRating': 3.5,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            '_id': '5a05daec734d1d68d42d32ca',
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        },
        {
            '_id': '5a05daec734d1d68d42d32ca',
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        }
    ];

    toggleImage(): void {
        this.showImage  = !this.showImage;
    }
}



/*
one way
--Data binding   {{ }}
--Property Binding [ ]
--Event Binding ()
two way  [( )]


var a = 10
let b = 10
const c = 10

function add(){
    a = 12
    if(){
        let b = 12
    }
}


if(){
    let a = 12
}

function add(){
    return a+b
}

let add = () => {return a+b}

function calc(a,b){

    this.add = a+b
}

if(a== true)
if(a)
if(!a)
*/
