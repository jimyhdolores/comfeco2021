import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { AtomModule } from '@team31/components-atoms/atoms.module';
import { MoleculesModule } from '@team31/components-molecules/molecules.module';
import { AuthService } from '@team31/services/auth.service';
import { MessageService } from '@team31/services/message.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CustomValidatorsService } from '../authentication/common/service/custom-validators.service';
import { HomePageComponent } from './home-page/home-page.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { SubMenuComponent } from './profile-page/common/components/sub-menu/sub-menu.component';
import { SubmoduleEventsComponent } from './profile-page/common/components/submodule-events/submodule-events.component';
import { SubmoduleGroupsComponent } from './profile-page/common/components/submodule-groups/submodule-groups.component';
import { SubmoduleInsigniaComponent } from './profile-page/common/components/submodule-insignia/submodule-insignia.component';
import { SubmoduleProfileComponent } from './profile-page/common/components/submodule-profile/submodule-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CreatorsPageComponent } from './creators-page/creators-page.component';
import { CommunitysPageComponent } from './communitys-page/communitys-page.component';
@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		HomePageComponent,
		ProfilePageComponent,
		SubmoduleEventsComponent,
		SubmoduleProfileComponent,
		SubMenuComponent,
		SubmoduleGroupsComponent,
		SubmoduleInsigniaComponent,
		CreatorsPageComponent,
		CommunitysPageComponent
	],
	imports: [
		PrincipalRoutingModule,
		MoleculesModule,
		AtomModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatExpansionModule,
		NgxSkeletonLoaderModule.forRoot()
	],
	exports: [],
	providers: [AuthService, CustomValidatorsService, MessageService]
})
export class PrincipalModule {}
