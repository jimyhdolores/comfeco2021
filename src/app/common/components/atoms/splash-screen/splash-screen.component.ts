import { Component } from '@angular/core';
import { SplashScreenService } from '@team31/services/splash-screen.service';

@Component({
	selector: 'app-splash-screen',
	templateUrl: './splash-screen.component.html',
	styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {
	constructor(public splashScreenService: SplashScreenService) {}
}
