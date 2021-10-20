# shipping-label-maker - CLIENT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0

## Local versions
This project is running and compiling with:
node:                        10.16.0
npm:                         6.9.0
Angular CLI:                 9.0.1
angular-devkit/architect     0.900.1
@angular-devkit/core         9.0.1
@angular-devkit/schematics   9.0.1
@schematics/angular          9.0.1
@schematics/update           0.803.20
rxjs                         6.5.4

## CLI generator options

### Modules
ng g module [foldername] --flat --routing

### Components
ng g c [componentname]

## Development server

Run `ng s -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

# shipping-label-maker - REQUIREMENTS

1. Create a blank project called shipping-label-maker using angular-cli. 
- DONE
2. Scaffold a module called shared. Scaffold the WizardComponent inside the shared module. The shared module contains all the reusable UI components of your application. 
- DONE
3. Create a folder called features/shipping-label-maker. This is where you will create the ShippingLabelMaker component as well as the steps and the ShippingLabel component. The feature folder is intended for implementing application specific features. 
- DONE
4. Implement the basic Wizard component so that it can accept some steps and react to Prev, Next and End actions from the steps. Don’t worry about styling or passing wizardContext at this time. 
- DONE
5. Implement passing of the wizardContext and filling the sender’s address using the first step.
- DONE
6. Implement the remaining steps based on the wireframe provided. You should be able to fill in how the remaining steps look.
- DONE
7. [Bonus] Beautify your UI using raw CSS or any UI library of your choice.
- DONE (using angular materal, custom .scss and .css files, thats why we can find a mixing of different style sheets)
8. [Bonus] Add meaningful validations to your steps using FormsModule or
ReactiveFormsModule.
- DONE
9. [Bonus] Write the following tests using the scaffolded test files:
a. Wizard moves backwards and forwards based on actions sent by steps.
b. Wizard calls complete() of the parent when a step sends the End action.
c. Shipping Label maker prints the shipping label when complete() is called.
d. Shipping cost is printed correctly as specified by the formula above.
- PEDING
10. [Bonus] Create a login screen that will authenticate the user using a username and password. The wizard should be shown only after successful authentication. Build the authentication part as a service + dialog.
- DONE
11. Update the README.md file to tell us anything special about your solution. This will help us evaluate your solution in the best light.
-DONE

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

