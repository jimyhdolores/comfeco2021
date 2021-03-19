import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@team31/services/header.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor(
		private headerService: HeaderService,
		public breakpointObserver: BreakpointObserver
	) {}
	showMenuMovil = false;
	hiddenAll = false;
	showHeader = false;
	ngOnInit(): void {
		this.breakpointObserver.observe('(max-width: 698px)').subscribe((data) => {
			this.showMenuMovil = data.matches;
		});

		this.headerService.suscription().subscribe((data) => {
			this.showHeader = data;
		});
	}
}
