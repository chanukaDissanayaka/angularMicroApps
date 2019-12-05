import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testApp2';
  public storedata$: Observable<string> = this.store.select('Value');
  public storedata: string;

  constructor(private store: Store<AppState>) {

  }
  ngOnInit() {
    this.storedata$.subscribe(data => {
      this.storedata = data;
    });
  }
}
