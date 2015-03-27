## Angular2

https://angular2-intro.firebaseapp.com/

- work in progress

### Motivation

#### Background

- Angular1.x i aging
	- コードベースは2009年で古い
- Web Standardsの変化
	- Shadow DOMがTransclusionに取って代わる
	- ES6のモジュールがあればAngularにおけるモジュールはいらなくなる

#### Performance

- スピードは何よりも重要だという認識

![preview](https://angular2-intro.firebaseapp.com/images/ng-perf.png)

- 2/10時点で、Angular2は5倍速い
	- めちゃくちゃネストされた重いページでベンチマークとった

#### Simple cognitive model

##### 反省

- Angular 1.x はコンセプトが多すぎた
- コンセプトが多くて、はじめは簡単だったが、だんだん深くしていくと難しくなっていく

##### Angular1.x

1. Controller
2. Factory
3. Service
4. Provider
5. Directive
6. Transclusion
7. Module

7個も勉強しないといけない

##### Angular2

#### Your not-so first look

```javascript
@Template({
  url: 'todos.html'
})
@Component({
  selector: 'todo-app',
})
class TodoApp {
  todos: string[];
  constructor() {
    this.todos = ['Item1', 'Item2'];
  }
}
```

@からはじまるシンタックスはなんだ？
これこそが`AtScript`である
そして、`TypeScript`となる

##### TypeScript

- TypeScriptはJavascriptの代替言語ではない
- あくまでもJavascriptの上位として存在するもの
- ES5にもES6にも変換できるし、Angular2独自のものではない

#### Compoents

```javascript
@Template({
  url: 'todos.html'
})
@Component({
  selector: 'todo-app',
})
class TodoApp {
  constructor() {
    this.todos = ['Item1', 'Item2'];
  }
}
```

> An entire Angular application is just a tree of components

##### Component Annotation

```javascript
@Template({
  url: 'todos.html'
})
@Component({
  selector: 'todo-app',
})
```

```html
<todo-app></todo-app>
```

##### Component Controller


```javascript

class TodoApp {
  constructor() {
    this.todos = ['Item1', 'Item2'];
  }
}
```
- ただのES6のクラスである

#### BootStrapping

##### Angular 1.x

アプリ起動までの6ステップ

1. Create Module
	- モジュール定義して,,,

	```javascript
	var app = angular.module('app', []);
	```

2. Declare ng-app
	- htmlにアプリ定義して...

	```html
	<body ng-app="app">
	</body>
	```
3. Create Controller
4. Attach items to $scope
	- controllerを定義して$scopeにバインドして...

	```javascript
	app.controller('MyCrl', function($scope) {
    	$scope.name = 'David';
	});
	```

5. Declare Controller
6. Create Template
	- controllerもhtmlに定義してテンプレート整えて...

	```html
	<body ng-app="app">
	  	<div ng-controller="MyCtrl">
    		My name is {{ name }}
  		</div>
	</body>
	```

この6ステップは依存関係であり、どこかで間違えると困ったことになる

##### Angular2

- とてもしんぷるになった

1. Create Component
2. Create Template
3. bootstrap
4. Transpilation (<= ES5にコンパイルするのは将来なくなる)

```javascript
@Component({
  selector: 'todo-app',
})
@Template({ url: 'todos.html' })
export class TodoApp {
  todos;
  constructor() {
    this.todos = ['Item1', 'Item2'];
  }
}
```

```javascript
import {bootstrap} from 'angular';
import {TodoApp} from 'todoapp';
bootstrap(TodoApp);
```

#### Template Syntax

- Angular1.xからいくつか新しくなった

##### Angular2

```javascript
@Template({
  url: 'name-change.html'
})
@Component({
  selector: 'name-change',
})
class NameChange {
  constructor() {
    this.name = '';
  }
  changeName(newName) {
    this.name = newName;
  }
}
```

```html
<div> My name is {{ name }} </div>
<div>
  <input #newname type="text">
  <button (click)="changeName(newname.value)"
          [disabled]="newname.value == 'David'"> Change Name
  </button>
</div>


Local Variables

<div>
  <input #newname type="text">
  {{ newname.value }}
</div>


Event Handlers

<div>
  <input #newname type="text">
  <button (click)="changeName($event, newname.value)">
</div>


Property Bindings

<div>
  <input #newname type="text">
  <span [textContent]="newname.value"></span>
</div>


```


##### Local Variables

```html
<div>
  <input #newname type="text">
  {{ newname.value }}
</div>
```

- テンプレートの中だけで完全に完結する変数


##### Event Handlers


```html
<div>
  <input #newname type="text">
  <button (click)="changeName($event, newname.value)">
</div>
```

##### Property Bindings

```html
<div>
  <input #newname type="text">
  <span [textContent]="newname.value"></span>
</div>
```

これまでは、htmlの属性に対してデータをバインドしていたが、これからはDOM要素のプロパティに対してデータバインディングすることになる。

上記はspanタグのtextContentに対してデータをバインドしている


##### uniformity

(event) - for events
[property] - for properties


### before after

```html
<div>My name is {{name}}</div>
<div>
  <input type="text" ng-model="name">
  <button ng-name-change="changeName(name)">Change Name</button>
</div>
```

```html
<div>My name is {{name}}</div>
<div>
  <input type="text" #newname>
  <button (namechange)="changeName(newname.value)">Change Name</button>
</div>
```
