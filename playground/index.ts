/**
 * This is only for local test
 */
import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {NotificationsService, SimpleNotificationsModule} from 'angular4-simple-notifications';

@Component({
               selector: 'app',
               template: `
                   <button (click)="open()">Open</button>
                   <simple-notifications [options]="options"></simple-notifications>
               `
           })
class AppComponent {
    options: any;
    constructor(private service: NotificationsService) {
        this.options = {
            position: ['middle', 'center'],
            timeOut: 9000,
            lastOnBottom: true
        };
    }

    open() {
        this.service.success('Success!', 'Lorem ipsum dolor');
        this.service.info('Info!', 'Lorem ipsum dolor');
        this.service.error('Error!', 'Lorem ipsum dolor');
        this.service.warn('Warning!', 'Lorem ipsum dolor');
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
