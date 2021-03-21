import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SplashScreenService } from '@team31/services/splash-screen.service';
import { PathProject } from '@team31/static/path-project';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/internal/operators';

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
export class AppComponent implements OnDestroy {
	addHeigth = false;
	subscription!: Subscription;
	constructor(public splashScreenService: SplashScreenService, private router: Router) {
		this.subscription = this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event) => {
				const navigation = event as NavigationEnd;
				this.addHeigth = navigation.url.indexOf(PathProject.LOGIN) > -1;
			});
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
