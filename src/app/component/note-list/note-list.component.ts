import {Component, Input} from '@angular/core';
import {NoteDto} from '../../model/note-dto';

@Component({
  selector: 'app-note-list',
  templateUrl: 'note-list.component.html'
})
export class NoteListComponent {

  @Input() notes: NoteDto[];

}
