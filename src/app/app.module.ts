import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoteContainerComponent} from './container/note/note-container.component';
import {NoteService} from './service/note-service';
import {NoteListComponent} from './component/note-list/note-list.component';
import {NoteListItemComponent} from './component/note-list-item/note-list-item.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NoteContainerComponent,
    NoteListComponent,
    NoteListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
