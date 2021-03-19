import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-submodule-groups',
	templateUrl: './submodule-groups.component.html',
	styleUrls: ['./submodule-groups.component.scss']
})
export class SubmoduleGroupsComponent implements OnInit {
	constructor(private breackPointer: BreakpointObserver) {}

	showExpand = false;
	panelOpenState = false;

	ngOnInit(): void {
		this.breackPointer.observe('(max-width: 910px)').subscribe((data) => {
			this.showExpand = data.matches;
		});
	}
}
