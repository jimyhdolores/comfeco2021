import { BreakpointObserver } from '@angular/cdk/layout';
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
import { Sponsor } from '@team31/models/carousel';

@Component({
	selector: 'app-carousel-sponsors',
	templateUrl: './carousel-sponsors.component.html',
	styleUrls: ['./carousel-sponsors.component.scss']
})
export class CarouselSponsorsComponent implements AfterViewInit, OnInit {
	@ViewChild('myCarousel') myCarousel: NguCarousel<unknown> | undefined;
	// @Input() type: string | undefined;
	@Input() carouselItems: Array<Sponsor> | undefined;
	name = 'Angular';
	slideNo = 0;
	withAnim = true;
	resetAnim = true;
	carouselConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 3, md: 4, lg: 8, xl: 8, all: 0 },
		slide: 1,
		interval: { timing: 3000, initialDelay: 1000 },
		loop: false,
		touch: true,
		velocity: 0.2
	};
	responsiCarousel = '1440px';

	constructor(private cdr: ChangeDetectorRef, private breakpointObserver: BreakpointObserver) {}

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

	reset(): void {
		this.myCarousel?.reset(!this.resetAnim);
	}

	moveTo(slide: number): void {
		this.myCarousel?.moveTo(slide, !this.withAnim);
	}
}
