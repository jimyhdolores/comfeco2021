import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderService {
	private subject = new BehaviorSubject(false);

	showMenu(showMenu: boolean): void {
		this.subject.next(showMenu);
	}

	suscription(): Observable<boolean> {
		return this.subject.asObservable();
	}
}
