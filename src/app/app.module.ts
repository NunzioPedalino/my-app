import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { PrincipaltoolbarComponent } from './principaltoolbar/principaltoolbar.component';
import { HambugermenuComponent } from './hambugermenu/hambugermenu.component';
import { MatSelectModule } from '@angular/material/select';
import { ListparkComponent } from './listpark/listpark.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PrincipaltoolbarComponent,
    HambugermenuComponent,
    ListparkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
