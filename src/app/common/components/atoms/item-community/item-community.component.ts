import { Component, Input } from '@angular/core';
import { Sponsor } from './../../../models/carousel';

@Component({
	selector: 'app-item-community',
	templateUrl: './item-community.component.html',
	styleUrls: ['./item-community.component.scss']
})
export class ItemCommunityComponent {
	@Input() item: Sponsor = <Sponsor>{};
}
