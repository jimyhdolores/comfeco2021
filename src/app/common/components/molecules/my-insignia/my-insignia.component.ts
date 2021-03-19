import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-insignia',
	templateUrl: './my-insignia.component.html',
	styleUrls: ['./my-insignia.component.scss']
})
export class MyInsigniaComponent implements OnInit {
	@Input() name: string | undefined;
	@Input() urlImage: string | undefined;

	width = '5em';
	ngOnInit(): void {
		if (!this.name) {
			this.name = 'Aún no tienes una insignia!';
			this.urlImage = 'assets/svg/box.svg';
			this.width = '10em';
		}
	}
}
