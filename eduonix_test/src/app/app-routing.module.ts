import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'services',
		component: ServicesComponent,
	},
	{
		path: 'pricing',
		component: PricingComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
