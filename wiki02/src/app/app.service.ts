import { Injectable } from '@angular/core';
import {BaseService} from "./shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:BaseService) { }

  getSearchResultFromWikipedia(searchPhrase:string){
    return this.http.get('&srsearch=' + searchPhrase + '&srlimit=10')
  }
}
