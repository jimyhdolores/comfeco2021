import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { NguCarouselModule } from '@ngu/carousel';
import { AtomModule } from '@team31/components-atoms/atoms.module';
import { ActivitiesComponent } from './activities/activities.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CarouselComponent } from './carousel-leaders/carousel.component';
import { EventsUserComponent } from './events-user/events-user.component';
import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './groups/groups.component';
import { MenuCommunityComponent } from './menu-community/menu-community.component';
import { MyGroupComponent } from './my-group/my-group.component';
import { MyInsigniaComponent } from './my-insignia/my-insignia.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		CarouselComponent,
		MenuCommunityComponent,
		EventsComponent,
		UserEditComponent,
		CardProfileComponent,
		ActivitiesComponent,
		EventsUserComponent,
		MyInsigniaComponent,
		MyGroupComponent,
		GroupsComponent
	],
	imports: [
		NguCarouselModule,
		CommonModule,
		AtomModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule
	],
	exports: [
		CarouselComponent,
		MenuCommunityComponent,
		EventsComponent,
		UserEditComponent,
		CardProfileComponent,
		ActivitiesComponent,
		EventsUserComponent,
		MyInsigniaComponent,
		MyGroupComponent,
		GroupsComponent
	],
	providers: [MatDatepickerModule]
})
export class MoleculesModule {}
