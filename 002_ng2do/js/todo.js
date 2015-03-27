import {Component, Template, bootstrap, Foreach} from 'angular2/angular2';

@Component({
  selector: 'todo-app'
})

@Template({
  url: '../templates/todo.html',
  directives: [Foreach]
})

class TodoApp {
  constructor() {

  }
}

export function main() {
  bootstrap(TodoApp)
}
