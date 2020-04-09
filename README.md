<h1 align="center">Welcome to angular4-simple-notifications 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/angular4-simple-notifications" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/angular4-simple-notifications.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D6.0.0-blue.svg" />
  <a href="https://github.com/walteribeiro/angular-notifications#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/walteribeiro/angular-notifications/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/walteribeiro/angular-notifications/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/walteribeiro/angular4-simple-notifications" />
  </a>
  <a href="https://twitter.com/walter19921" target="_blank">
    <img alt="Twitter: walter19921" src="https://img.shields.io/twitter/follow/walter19921.svg?style=social" />
  </a>
</p>

> Simple notifications for Angular apps

## Prerequisites

- node >=6.0.0

## Installation

To install this library, run:

```bash
$ yarn add angular4-simple-notifications
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the Module
import {SimpleNotificationsModule} from 'angular4-simple-notifications';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule, // Need to import for the animations
    SimpleNotificationsModule.forRoot() // Use forRoot() method
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ yarn build
```

To lint all `*.ts` files:

```bash
$ yarn lint
```

## Author

👤 **Walter Ribeiro**

* Twitter: [@walter19921](https://twitter.com/walter19921)
* Github: [@walteribeiro](https://github.com/walteribeiro)
* LinkedIn: [@walterribeiroti](https://linkedin.com/in/walterribeiroti)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/walteribeiro/angular-notifications/issues). You can also take a look at the [contributing guide](https://github.com/walteribeiro/angular-notifications/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Walter Ribeiro](https://github.com/walteribeiro).<br />
This project is [MIT](https://github.com/walteribeiro/angular-notifications/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_