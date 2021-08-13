import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoteContainerComponent} from './container/notes/note-container.component';
import {NoteService} from './service/note-service';
import {NoteListComponent} from './component/note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteContainerComponent,
    NoteListComponent
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
