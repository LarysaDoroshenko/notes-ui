import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../service/note-service';
import {NoteDto} from '../../model/note-dto';

@Component({
  selector: 'app-notes-container',
  templateUrl: 'notes-container.component.html'
})
export class NotesContainerComponent implements OnInit {

  notes: NoteDto[] = [];

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

}
