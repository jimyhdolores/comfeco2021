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
	// @Input() type: string | undefined;
	@Input() carouselItems: Array<ITeamLeaderItem> | undefined;

	name = 'Angular';
	slideNo = 0;
	withAnim = true;
	resetAnim = true;
	// carouselItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	carouselConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 3, md: 3, lg: 4, xl: 4, all: 0 },
		// gridBreakpoints: { sm: 768, md: 992, lg: 1200, xl: 1400 },
		slide: 4,
		interval: { timing: 3000, initialDelay: 1000 },
		loop: true,
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
