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