import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { DevoirsaddComponent } from './devoirsadd/devoirsadd.component'
import { DevoirslistComponent } from './devoirslist/devoirslist.component'

import { AlertModule } from 'ngx-bootstrap/alert'

const appRoutes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'main', component: MainComponent },
	{ path: 'devoirslist', component: DevoirslistComponent },
	{ path: 'devoirsadd', component: DevoirsaddComponent },
	{ path: 'devoirsadd/:id', component: DevoirsaddComponent },
	{path: '**', redirectTo: ''}
	]

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		HeaderComponent,
		FooterComponent,
		DevoirsaddComponent,
		DevoirslistComponent
		],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		AlertModule.forRoot()
		],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }