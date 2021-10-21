# challenge-four-front-end - CLIENT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0

## Local versions
This project is running and compiling with:
node:                        15.14.0
npm:                         7.7.6
Angular CLI:                 12.2.11
angular-devkit/architect     0.900.1
@angular-devkit/core         12.2.11
@angular-devkit/schematics   12.2.11
@schematics/angular          12.2.11
@schematics/update           0.803.20
rxjs                         6.5.4

## CLI generator options

### Modules
ng g module [foldername] --flat --routing

### Components
ng g c [componentname]

## Development server

Run `ng s -o` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

the valid users in order to login into the app are:

    {
        name: "admin",
        password: "123456"
    },
    {
        name: "user",
        password: "user"
    },
    {
        name: "local",
        password: "local"
    },
    {
        name: "custom",
        password: "custom"
    }

which are found in the user-mocks.model.ts

as part of the dynamic forms, I created a normal validator in random inputs.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Base structure for the project

client:

```
app
│   app.component.html
│   app-routing.module.ts
│   app.component.ts
│   app.module.ts
│   app.component.scss
│
└───config
│
└───models
│
└───guards - pending
│
└───interfaces
│
└───models
│
└───services
│
└───modules
│   │   
│   └───features
│   └───shared
│       
└───styles
│       
└───utils
```

# challenge-four-front-end - REQUIREMENTS

1. Your proposal must include a homepage, category pages, and product pages, plus a search page with the capability of searching for products by name. Each page must include its own metadata and favor the use of reusable components.​

## EN

Here we will define the basic configurations for the correct excecution of the unit testing that Karma performs, it is not necessary to install additional dependiencies, because Angular has by default some tools for this process

##.spec.ts Files configuration

Each .spec.ts file, is independent and therefore must be added manually the necessary imports for the component you want to test, in this section is attached an example of the most used in the application

## Configuración de archivos .spec.ts

Cada archivo .spec.ts es independiente y por ende se deben agregar de forma manual los imports necesarios para el componente que se desea probar, en este apartado se anexa un ejemplo de los imports mas utilizados en el aplicativo

Translate:
```
import { TranslateLoader, TranslateModule, } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

TestBed.configureTestingModule({
imports: [
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ],
})
```

Forms:
```
import { FormsModule } from '@angular/forms';

TestBed.configureTestingModule({
imports: [
        FormsModule,
      ],
})
```

Material Dialog - Material SnackBar:
```
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

TestBed.configureTestingModule({
providers: [
        { provide: MatSnackBar, useValue: {} },
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
})
```

Routing;
```
import { RouterTestingModule } from '@angular/router/testing';

TestBed.configureTestingModule({
imports: [
        RouterTestingModule,
      ],
})
```

RequestProvider:
```
import { RequestProvider } from './../../../providers/request';

TestBed.configureTestingModule({
providers: [
        RequestProvider,
      ],
})
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
...

