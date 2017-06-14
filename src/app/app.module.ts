import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HighlightDirective } from './highlight.directive';
import { RightClickDirective } from './right-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HighlightDirective,
    RightClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
