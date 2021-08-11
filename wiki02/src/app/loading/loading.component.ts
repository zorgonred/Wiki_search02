import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoadingService} from "./loading.service";


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Output() loadings = new EventEmitter<any>();
  public loading$;
  public error$;

  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
    this.error$ = this.loadingService.error$;


  }

  ngOnInit() {


  }


}
