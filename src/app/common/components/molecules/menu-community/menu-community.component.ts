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
		{ photo: 'assets/images/sponsors/CodelyTV.jpg', name: 'Codely Tv', url: 'https://codely.tv/' },
		{
			photo: 'assets/images/sponsors/codigofacilito.jpg',
			name: 'Codigo facilito',
			url: 'https://codigofacilito.com/'
		},
		{
			photo: 'assets/images/sponsors/DominiCode.jpg',
			name: 'Domini Code',
			url: 'https://dominicode.com/'
		}
	];

	showMenuComunnity(): void {
		this.showMenu = !this.showMenu;
	}

	focuslost(): void {
		setTimeout(() => {
			this.showMenu = false;
		}, 200);
	}
}
