import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () =>
			import('./pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
	},
	{
		path: 'principal',
		canActivate: [AuthGuard],
		loadChildren: () => import('./pages/principal/principal.module').then((m) => m.PrincipalModule)
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
