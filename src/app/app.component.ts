import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Darkmode from 'darkmode-js';
import { Observable } from 'rxjs';

interface AppState {
  theme: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngrx-dark-mode';
  theme$: Observable<string>;
  darkMode: any;
  checkbox = false;

  constructor(private store: Store<AppState>) {
    this.theme$ = this.store.select('theme');
  }


  ngOnInit(): void {

    const options = {
      time: '0.5s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      label: '🌓',
      saveInCookies: false
    }

    this.darkMode = new Darkmode(options);
  }

  toggleTheme(isChecked: boolean): void {
    this.checkbox = !this.checkbox;
    if (isChecked) {
      this.darkTheme();
    }
    else {
      this.lightTheme();
    }
    this.darkMode.toggle();
  }

  darkTheme(): void {
    this.store.dispatch({ type: 'dark' });

  }

  lightTheme(): void {
    this.store.dispatch({ type: 'light' });
  }


}
