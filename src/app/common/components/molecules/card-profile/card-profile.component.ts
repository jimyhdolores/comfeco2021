import { Component, Input } from '@angular/core';
import { ICardProfile } from '@team31/models/interfaces/user-profile.interface';
import { ChannelProfileService } from '@team31/services/channel-submenus.service';

@Component({
	selector: 'app-card-profile',
	templateUrl: './card-profile.component.html',
	styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent {
	constructor(private channelProfileService: ChannelProfileService) {}

	@Input() profile: ICardProfile = <ICardProfile>{};

	clickEdit(): void {
		this.channelProfileService.showComponent('Editar Perfil');
	}

	showMessageInsignia(): boolean {
		return (
			!this.profile.area ||
			!this.profile.biography ||
			!this.profile.name ||
			!this.profile.redSocial ||
			Object.keys(this.profile.redSocial).length === 0
		);
	}
}
