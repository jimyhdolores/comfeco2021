import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-social-login',
	templateUrl: './social-login.component.html',
	styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent {
	@Input() text = '';
	@Input() textLink = '';
	@Input() link = '';
}
