import { Component, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDataDialog } from '@team31/models/interfaces/data-dialog.interface';

@Component({
	selector: 'app-modal-terminos',
	templateUrl: './modal-terminos.component.html',
	styleUrls: ['./modal-terminos.component.scss']
})
export class ModalTerminosComponent {
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: IDataDialog,
		private mdDialogRef: MatDialogRef<ModalTerminosComponent>
	) {}

	public cancel(): void {
		this.close(false);
	}

	private close(value: boolean): void {
		this.mdDialogRef.close(value);
	}

	public confirm(): void {
		this.close(true);
	}

	@HostListener('keydown.esc')
	public onEsc(): void {
		this.close(false);
	}
}
