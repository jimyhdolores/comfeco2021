import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnDestroy {
	private subscription: Subscription;

	dateNow = new Date();
	dDay = new Date('Jan 01 2022 00:00:00');
	milliSecondsInASecond = 1000;
	hoursInADay = 24;
	minutesInAnHour = 60;
	SecondsInAMinute = 60;

	timeDifference = 0;
	secondsToDday = 0;
	minutesToDday = 0;
	hoursToDday = 0;
	daysToDday = 0;

	constructor() {
		this.subscription = interval(1000).subscribe(() => {
			this.getTimeDifference();
		});
	}

	private getTimeDifference(): void {
		this.timeDifference = this.dDay.getTime() - new Date().getTime();
		this.allocateTimeUnits(this.timeDifference);
	}

	private allocateTimeUnits(timeDifference: number): void {
		this.secondsToDday = Math.floor(
			(timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
		);
		this.minutesToDday = Math.floor(
			(timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) % this.SecondsInAMinute
		);
		this.hoursToDday = Math.floor(
			(timeDifference /
				(this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute)) %
				this.hoursInADay
		);
		this.daysToDday = Math.floor(
			timeDifference /
				(this.milliSecondsInASecond *
					this.minutesInAnHour *
					this.SecondsInAMinute *
					this.hoursInADay)
		);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
