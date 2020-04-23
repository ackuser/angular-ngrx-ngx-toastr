import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { counterReducer } from "./counter.reducer";
import { CounterEffects } from "./counter.effects";
import { MyCounterComponent } from "./my-counter/my-counter.component";

import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [AppComponent, MyCounterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([CounterEffects]),
    ToastrModule.forRoot({
      positionClass: "toast-bottom-full-width",
      preventDuplicates: true
    }),
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
