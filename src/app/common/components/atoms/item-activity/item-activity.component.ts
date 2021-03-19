import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-item-activity',
	templateUrl: './item-activity.component.html',
	styleUrls: ['./item-activity.component.scss']
})
export class ItemActivityComponent {
	@Input() activity: string | undefined;
}
