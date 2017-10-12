import { Component, Input } from '@angular/core';

@Component({
    selector: 'donate-banner',
    template: `<div class="banner">{{ balance | currency:'USD':true:'1.0-0' }} still needed for this project</div>`,
    styles: [
        `
            :host {
                .banner {
                    color: #FFF;
                    background-color: #666;
                }
            }
        `,
    ],
})
export class DonateBannerComponent {
    @Input() balance: number;
}
