import { Component } from '@angular/core';
import { Order } from './pizza-order';
import { OrderService } from '../services/order.service';

@Component({
    moduleId: module.id,
    selector: 'pizza-order',
    templateUrl: './pizza-order.component.html',
    styleUrls: ['pizza-order.component.css']

})
export class PizzaOrderComponent {
    private order: Array<any>;

    errorMessage: string;
    model = 'Observable';

    constructor(private orderService: OrderService) {}

    addOrder (order: string) {
        console.log(order);
        if (!order) { return; }
        this.orderService.addOrder(order)
            .subscribe(
                order  => this.order.push(order),
                error =>  this.errorMessage = <any>error);
        console.log('you submitted: ', order)

    }

   /* addOrder(form: any): void {
        console.log('you submitted: ', form)
    }*/



}


