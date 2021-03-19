import { Component, Input } from '@angular/core';
import { IInsignia } from '@team31/models/interfaces/profile-module.interface';

@Component({
	selector: 'app-insignia',
	templateUrl: './insignia.component.html',
	styleUrls: ['./insignia.component.scss']
})
export class InsigniaComponent {
	@Input() item: IInsignia = <IInsignia>{};
}
