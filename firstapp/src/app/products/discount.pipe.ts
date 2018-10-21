import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discountPipe'
})

export class DiscountPipe implements PipeTransform {
    transform(value: Number, ratio: String, type: String) {
        if (type === '+') {
            value = parseInt(value) + parseInt(ratio);
        } else {
            value = parseInt(value) - parseInt(ratio);
        }
        return value;
    }
}
