import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '@team31/services/auth.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavMenuMovilComponent } from './nav-menu-movil/nav-menu-movil.component';
@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		HeaderComponent,
		FooterComponent,
		SocialFooterComponent,
		NavMenuComponent,
		UserProfileComponent,
		NavMenuMovilComponent
	],
	imports: [MatBadgeModule, MatIconModule, CommonModule, MatMenuModule],
	providers: [AuthService],
	exports: [HeaderComponent, FooterComponent]
})
export class HeaderBannerModule {}
