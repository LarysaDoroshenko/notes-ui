import {Injectable} from '@angular/core';
import {NoteDto} from '../model/note-dto';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {NoteDtoList} from '../model/note-dto-list';

@Injectable()
export class NoteService {

  private notes = new BehaviorSubject<NoteDto[]>([]);

  constructor(private http: HttpClient) {
  }

  getNotes(): Observable<NoteDto[]> {
    return this.notes.asObservable();
  }

  loadNotes() {
    this.http.get<NoteDtoList>('http://localhost:8080/note/list')
      .subscribe(response => this.notes.next(response.noteDtos));
  }

}
