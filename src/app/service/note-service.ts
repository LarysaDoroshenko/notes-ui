import {Injectable} from '@angular/core';
import {NoteDto} from '../model/note-dto';

@Injectable()
export class NoteService {

  private notes: NoteDto[] = [
    {
      content: 'Note 1',
      createdAt: new Date()
    },
    {
      content: 'Note 2',
      createdAt: new Date()
    }
  ];

  getNotes(): NoteDto[] {
    return this.notes.slice();
  }

}
