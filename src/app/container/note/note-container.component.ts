import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../service/note-service';
import {NoteDto} from '../../model/note-dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-notes-container',
  templateUrl: 'note-container.component.html'
})
export class NoteContainerComponent implements OnInit {

  notes: Observable<NoteDto[]>;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteService.loadNotes();
    this.notes = this.noteService.getNotes();
  }

}
