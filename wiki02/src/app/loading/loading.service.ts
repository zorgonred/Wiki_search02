import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loading$ = new BehaviorSubject(false);
  public error$ = new BehaviorSubject(false);


  constructor() {
  }
}
