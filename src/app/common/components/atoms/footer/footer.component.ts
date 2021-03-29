import { Component } from '@angular/core';
import { ModalService } from '@team31/services/modal.service';
import { VariableStatic } from '@team31/static/variable-static';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	constructor(private _modalService: ModalService) {}

	clickModalTerms(): void {
		this._modalService.open(VariableStatic.REGISTRATION_TERMS_CONDITIONS);
	}
}
