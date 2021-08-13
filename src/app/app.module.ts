import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoteContainerComponent} from './container/notes/note-container.component';
import {NoteService} from './service/note-service';

@NgModule({
  declarations: [
    AppComponent,
    NoteContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
