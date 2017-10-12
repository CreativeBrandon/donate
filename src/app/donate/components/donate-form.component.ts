import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Progress } from '../../shared/utils';

@Component({
    selector: 'donate-form',
    templateUrl: './donate-form.component.html'
})
export class DonateFormComponent {
    @Input() donors: number;
    @Input() progress: any;
    @Output() save = new EventEmitter<number>()
    @Output() submit = new EventEmitter<number>()
    @ViewChild('donateForm') donateForm: NgForm;

    model = {
        amount: 50
    }

    constructor() { }

    isValid(value: number | string) {
        if (typeof value === 'number' && value > 0) {
            return true
        } else {
            throw new Error('please enter a valid amount in $')
        }
    }

    onSave(amount: any) {
        amount = parseInt(amount)
        if (this.isValid(amount)) {
            this.save.emit(amount)
            this.donateForm.reset()
        }
    }

    onSubmit(amount: any) {
        amount = parseInt(amount)
        if (this.isValid(amount)) {
            this.submit.emit(amount)
            this.donateForm.reset()
        }
    }
}
