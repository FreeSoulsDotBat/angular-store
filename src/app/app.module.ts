import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { appReducers } from './store/reducers'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		StoreModule.forRoot(appReducers)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
