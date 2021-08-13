import {Component, Input} from '@angular/core';
import {NoteDto} from '../../model/note-dto';

@Component({
  selector: 'app-note-list-item',
  templateUrl: 'note-list-item.component.html'
})
export class NoteListItemComponent {

  @Input() note: NoteDto;

}
