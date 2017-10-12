import { Component, Input } from '@angular/core';

@Component({
    selector: 'donate-banner',
    styleUrls: ['./donate-banner.component.scss'],
    template: `
        <div class="banner">
            {{ balance | currency:'USD':true:'1.0-0' }} still needed for this project
        </div>
    `    
})
export class DonateBannerComponent {
    @Input() balance: number;
}
