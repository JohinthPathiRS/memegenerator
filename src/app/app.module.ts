import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ColorChromeModule} from 'ngx-color/chrome';


@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorChromeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
