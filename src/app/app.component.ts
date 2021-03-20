import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { SplashScreenService } from '@team31/services/splash-screen.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('200ms ease-out', style({ opacity: 1 }))
			]),
			transition(':leave', [style({ opacity: 1 }), animate('200ms ease-in', style({ opacity: 0 }))])
		])
	]
})
export class AppComponent {
	constructor(public splashScreenService: SplashScreenService) {}
}
