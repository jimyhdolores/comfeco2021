import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SplashScreenService {
	private subject = new BehaviorSubject(false);

	showSplashScreen(showSplash: boolean): void {
		this.subject.next(showSplash);
	}

	suscription(): Observable<boolean> {
		return this.subject.asObservable();
	}
}
