import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { SetValue } from './actions/setValue.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'baseApp2';

  public storeValue$: Observable<string> = this.store.select('Value');
  public storeValue: string;
  public inputValue = '';

  constructor(private store: Store<AppState>) { }


  ngOnInit() {
    this.storeValue$.subscribe(value => {
      this.storeValue = value;
      console.log(value);
    });
  }

  setValueOnStore() {
    const value = this.inputValue;
    this.store.dispatch(new SetValue(value));
    this.inputValue = '';
  }
}
