import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { InflowFormComponent } from './inflow-form/inflow-form.component';
import { OutflowFormComponent } from './outflow-form/outflow-form.component';
import { BacklogFormComponent } from './backlog-form/backlog-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HighlightDirective } from './shared/highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatNativeDateModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ElmNumDirective } from './shared/elm-num.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    InflowFormComponent,
    OutflowFormComponent,
    BacklogFormComponent,
    HighlightDirective,
    ElmNumDirective
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    MatButtonModule,MatNativeDateModule,MatDatepickerModule,MatSelectModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
