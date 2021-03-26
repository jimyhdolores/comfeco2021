import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitysPageComponent } from './communitys-page/communitys-page.component';
import { CreatorsPageComponent } from './creators-page/creators-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent
	},
	{
		path: 'profile',
		component: ProfilePageComponent
	},
	{
		path: 'communitys',
		component: CommunitysPageComponent
	},
	{
		path: 'creators',
		component: CreatorsPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PrincipalRoutingModule {}
