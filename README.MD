# angular-notifications

## Installation

To install this library, run:

```bash
$ npm i angular4-simple-notifications --save
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
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Walter Ribeiro](mailto:walterjunioranalise@gmail.com)
