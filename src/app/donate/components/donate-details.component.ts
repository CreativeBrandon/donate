import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Progress } from '../../shared/utils';

@Component({
    selector: 'donate-details',
    template: `
        <div class="details">
            <p><span class="highlight">Only 3 days left</span> to fund this project.</p>
            <p>Join the {{ donors}} other donors who have already supported this project. Every dollar helps.</p>
        </div>
    `
})
export class DonateDetailsComponent {
    @Input() donors: number;
}
