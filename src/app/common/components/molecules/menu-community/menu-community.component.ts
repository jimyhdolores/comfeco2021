import { Component } from '@angular/core';
import { Sponsor } from './../../../models/carousel';

@Component({
	selector: 'app-menu-community',
	templateUrl: './menu-community.component.html',
	styleUrls: ['./menu-community.component.scss']
})
export class MenuCommunityComponent {
	showMenu = false;
	listCommunity: Sponsor[] = [
		{ photo: 'assets/images/sponsors/CodelyTV.jpg', name: 'Codely Tv' },
		{ photo: 'assets/images/sponsors/codigofacilito.jpg', name: 'Codigo facilito' },
		{ photo: 'assets/images/sponsors/DominiCode.jpg', name: 'Domini Code' },
		{ photo: 'assets/images/sponsors/Egghead.jpg', name: 'Egghead' },
		{ photo: 'assets/images/sponsors/Egghead.jpg', name: 'Egghead' }
	];

	showMenuComunnity(): void {
		this.showMenu = !this.showMenu;
	}

	focuslost(): void {
		this.showMenu = false;
	}
}
