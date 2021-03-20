import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PathProject } from '@team31/static/path-project';

@Component({
	selector: 'app-nav-menu-movil',
	templateUrl: './nav-menu-movil.component.html',
	styleUrls: ['./nav-menu-movil.component.scss']
})
export class NavMenuMovilComponent {
	constructor(private router: Router) {}
	navigatePrincipal(): void {
		void this.router.navigateByUrl(PathProject.PRINCIPAL);
	}
}
