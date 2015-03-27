# 001_angular2

## reference

- https://github.com/angular/quickstart
- https://angular.io/docs/js/latest/quickstart.html

## Angular 2 Quickstart

The Angular 2 quickstart includes all of the dependencies for writing Angular 2 in your browser.

The quickstart contains
 - Pre-built ES5 version of [Angular 2](https://www.npmjs.com/package/angular2) alpha-11
 - Pre-built ES5 version of [rtts-assert](https://www.npmjs.com/package/rtts-assert) alpha-6
 - The es6-shim, which includes Traceur, ES6 Module Loader, System, Zone, and Traceur options for meta-data annotations.

## Set up

### Clone the quickstart repository

```bash
$ git clone https://github.com/angular/quickstart.git
```

## Coding files

- `app.js` and `index.html`

```bash
root
├── some files
...
├── app.js
└── index.html

```

## `index.html`

```html
<!-- index.html -->
<html>
<head>
    <title>Angular 2 Quickstart</title>
    <script src="./dist/es6-shim.js"></script>
</head>
<body>

<!-- The app component created in app.es6 -->
<my-app></my-app>

<script>
    //Rewrite the paths to load the files
    System.paths = {
        'angular2/*':'./angular2/*.js', // Angular
        'rtts_assert/*': './rtts_assert/*.js', // Runtime assertions
        'app': 'app.js' // The my-app component
    };

    //Kick off the application
    System.import('app');

</script>
</body>
</html>
```

## `app.js`

```javascript
import {Component, Template, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app' // Defines the <my-app></my-app> tag
})
@Template({
    inline: '<h1>Hello {{ name }}</h1>' // Defines the inline template for the component
})

// Component controller
class MyAppComponent {
    constructor() {
        this.name = 'HAKASHUN';
    }
}

bootstrap(MyAppComponent);
```


## What is `es6-shim.js`?


