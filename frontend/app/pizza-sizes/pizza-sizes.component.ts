import { Component, OnInit } from '@angular/core';
import { Size } from './sizes';
import { SizeService } from '../services/sizes.service';

@Component({
    moduleId: module.id,
    selector: 'pizza-size',
    templateUrl: './pizza-sizes.component.html',
    styleUrls: ['pizza-sizes.component.css']
})
export class PizzaSizeComponent implements OnInit {
    sizes: Size[];

    errorMessage: string;
    mode = 'Observable';

    constructor(private sizeService: SizeService) {}

    ngOnInit() { this.getSize(); }

    getSize(){
        this.sizeService.getSize()

            .subscribe(
                sizes => this.sizes = sizes,
                error => this.errorMessage = <any>error


            )

    }
}