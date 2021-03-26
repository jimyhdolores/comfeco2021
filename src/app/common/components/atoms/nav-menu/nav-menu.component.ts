import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PathProject } from '@team31/static/path-project';

@Component({
	selector: 'app-nav-menu',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
	constructor(private router: Router) {}
	navigatePrincipal(): void {
		void this.router.navigateByUrl(PathProject.PRINCIPAL);
	}

	navigateComunitys(): void {
		void this.router.navigateByUrl(PathProject.COMUNITYS);
	}

	navigateCreators(): void {
		void this.router.navigateByUrl(PathProject.CREATORS);
	}
}
