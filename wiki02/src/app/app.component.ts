import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wiki02';

  entries = [];
  searchPhrase = "";
  replacement = "";

  ngOnInit(): void {

    this.entries = [];
    this.searchPhrase = "Cars";
    this.replacement = "";

  }

  constructor(private appService: AppService) {

  }

  getSearchResultFromWikipediaWithDelay(searchPhrase: string){
    setTimeout(() =>{

      this.getSearchResultFromWikipedia(searchPhrase)

    }, 1000);
  }

  getSearchResultFromWikipedia(searchPhrase: string) {
    this.entries = [];
    this.appService.getSearchResultFromWikipedia(searchPhrase).subscribe(
      data => {

        // @ts-ignore
        let stringifyData = JSON.stringify(data);
        let parsed = JSON.parse(stringifyData)

        this.entries = parsed.body.query.search;
      }
    )
  }


  replaceFirstOccurrence = (replacement: string) => {

    const firstOccurrence = document.querySelectorAll('span.searchmatch');
    firstOccurrence[0].innerHTML = replacement;


  }

  replaceAll = (replacement: string) => {
    const allOccurrence = document.querySelectorAll('span.searchmatch');

    allOccurrence.forEach(occurrence => occurrence.innerHTML = replacement);

  }
}
