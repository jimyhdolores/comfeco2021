import { Component, OnDestroy, OnInit } from '@angular/core';
import { IInsignia } from '@team31/models/interfaces/profile-module.interface';
import { Subscription } from 'rxjs';
import { ProfileService } from '../../../../../../common/services/profile.service';

@Component({
	selector: 'app-submodule-insignia',
	templateUrl: './submodule-insignia.component.html',
	styleUrls: ['./submodule-insignia.component.scss']
})
export class SubmoduleInsigniaComponent implements OnInit, OnDestroy {
	constructor(public profileService: ProfileService) {}

	subscriptionInsignia!: Subscription;
	listInsignia: IInsignia[] = [];
	listSkeleton = [1, 2, 3, 4];
	ngOnInit(): void {
		this.subscriptionInsignia = this.profileService.getInsignias().subscribe(
			(data) => {
				this.listInsignia = data;
			},
			(error) => {
				console.error('Hubo un error al obtener las insignias: ', error);
			}
		);
	}

	ngOnDestroy(): void {
		this.subscriptionInsignia.unsubscribe();
	}
}
