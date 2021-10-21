import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Material Imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
/* ! Material Imports */

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    /* For sharing Modules we import CommonModule */
    BrowserModule,
    BrowserAnimationsModule,
    /* ! For sharing Modules we import CommonModule */

    /* Material Imports */
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    /* ! Material Imports */
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
