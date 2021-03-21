import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-submodule-groups',
	templateUrl: './submodule-groups.component.html',
	styleUrls: ['./submodule-groups.component.scss']
})
export class SubmoduleGroupsComponent implements OnInit, OnDestroy {
	constructor(private breackPointer: BreakpointObserver) {}

	showExpand = false;
	panelOpenState = false;
	subscription!: Subscription;

	ngOnInit(): void {
		this.subscription = this.breackPointer.observe('(max-width: 910px)').subscribe((data) => {
			this.showExpand = data.matches;
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
