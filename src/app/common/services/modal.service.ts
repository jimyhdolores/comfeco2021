import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalTerminosComponent } from '@team31/components-atoms/modal-terminos/modal-terminos.component';
import { Observable } from 'rxjs';
import { IDataDialog } from '@team31/models/interfaces/data-dialog.interface';

@Injectable()
export class ModalService {
	constructor(private dialog: MatDialog) {}
	dialogRef!: MatDialogRef<ModalTerminosComponent, boolean>;

	public open(options: IDataDialog): void {
		this.dialogRef = this.dialog.open(ModalTerminosComponent, {
			data: {
				titleModal: options.titleModal,
				contentModal: options.contentModal
			}
		});
	}

	public confirmed(): Observable<boolean | undefined> {
		return this.dialogRef.afterClosed();
	}
}
