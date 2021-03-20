import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	HostListener,
	Input,
	OnInit,
	ViewChild
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { ITeamLeaderItem } from '@team31/models/interfaces/team-leader-item.interface';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnInit {
	@ViewChild('myCarousel') myCarousel: NguCarousel<unknown> | undefined;
	@Input() carouselItems: Array<ITeamLeaderItem> | undefined;

	name = 'Angular';
	slideNo = 0;
	withAnim = true;
	resetAnim = true;
	carouselConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 3, md: 3, lg: 4, xl: 4, all: 0 },
		slide: 4,
		interval: { timing: 3000, initialDelay: 1000 },
		loop: false,
		touch: true,
		velocity: 0.2,
		load: 4
		// animation: 'lazy'
	};
	constructor(private cdr: ChangeDetectorRef) {}

	responsiCarousel = '1440px';
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	@HostListener('window:resize', ['$event'])
	onResize() {
		if (window.innerWidth <= 1470) {
			this.responsiCarousel = String(window.innerWidth - 30) + 'px';
		} else {
			this.responsiCarousel = '1440px';
		}
	}

	ngOnInit(): void {
		this.onResize();
	}

	ngAfterViewInit(): void {
		this.cdr.detectChanges();
	}

	moveTo(slide: number): void {
		this.myCarousel?.moveTo(slide, !this.withAnim);
	}
}
