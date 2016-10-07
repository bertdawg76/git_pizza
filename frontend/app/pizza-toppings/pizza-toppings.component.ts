import { Component, OnInit } from '@angular/core';
import { Topping } from './topping';
import { ToppingService } from '../services/topping.service';

@Component({
    moduleId: module.id,
    selector: 'pizza-topping',
    templateUrl: './pizza-topping.component.html',
    styleUrls: ['pizza-topping.component.css']
})
export class PizzaToppingComponent implements OnInit {
    toppings: Topping[];

    errorMessage: string;
    mode = 'Observable';

    constructor(private toppingService: ToppingService) {}

    ngOnInit() { this.getToppings(); }

    getToppings(){
        this.toppingService.getToppings()

            .subscribe(
                toppings => this.toppings = toppings,
                error => this.errorMessage = <any>error


            )

    }
}