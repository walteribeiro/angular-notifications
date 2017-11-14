/**
 * This is only for local test
 */
import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {NotificationsService, SimpleNotificationsModule} from 'angular-notifications';

@Component({
               selector: 'app',
               template: `
                   <button (click)="open()">Open</button>
                   <simple-notifications></simple-notifications>
               `
           })
class AppComponent {
    constructor(private service: NotificationsService) {
    }

    open() {
        this.service.create('bla', 'blu');
    }
}

console.log('test', SimpleNotificationsModule);

@NgModule({
              bootstrap: [AppComponent],
              declarations: [AppComponent],
              imports: [
                  BrowserModule,
                  SimpleNotificationsModule.forRoot(),
              ],
              providers: [
                  NotificationsService,
              ]
          })
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
