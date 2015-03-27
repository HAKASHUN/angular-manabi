# 002_ng2do

## `build.sh`

- quiclstartから基本的なプロジェクト群を持ってくるshellコマンド

```bash
rm -rf quickstart
git clone https://github.com/angular/quickstart.git
cd quickstart
rm -rf .git
cd ..
```

### build.shの実行

```bash
$ ./build.sh
Cloning into 'quickstart'...
remote: Counting objects: 430, done.
remote: Total 430 (delta 0), reused 0 (delta 0), pack-reused 430
Receiving objects: 100% (430/430), 753.90 KiB | 382.00 KiB/s, done.
Resolving deltas: 100% (195/195), done.
Checking connectivity... done.
```

#### 実行後のDirectory構造

```bash
root
├── build.sh
└── quickstart
    ├── LICENSE
    ├── README.md
    ├── angular2
    ├── dist
    ├── gulpfile.js
    ├── ng2build.sh
    ├── package.json
    ├── rtts_assert
    ├── strip_maps.sh
    └── traceurOptions.js
```

- プロジェクトフォルダ内に、`quickstart`ディレクトリがあることを想定してAngular2アプリを作成していく

## Setup gulp tasks

- ローカルサーバーを立ち上げる処理
  - `gulp serve`で`localhost:3456`を起動
  - 向き先は`index.html`

```bash
var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var port = 3456;

gulp.task('connect', function() {
    connect.server({
        root: __dirname,
        port: port,
        livereload: true
    });
});

gulp.task('open', function(){
    var options = {
        url: 'http://localhost:' + port
    };
    gulp.src('./index.html')
        .pipe(open('', options));
});


gulp.task('serve', ['connect', 'open']);
```


## Setup `index.html`

### link `es6-shim.js`

```html
<script src="/quickstart/dist/es6-shim.js"></script>
```

### load module with systemjs

- angular2では、内部で`Systemjs`を使っている

#### `System.paths`

> Provides aliases for locations. Similar to map, but for URI's, not modules. Currently supports wildcards.

- [Documentation](https://github.com/systemjs/systemjs/wiki/Configuration-Options#paths-unstable)


```javascript
System.paths = {
    'angular2/*':'quickstart/angular2/*.js', // Angular
    'rtts_assert/*': 'quickstart/rtts_assert/*.js', //Runtime assertions
    'todo': 'js/todo.js'
};
```

これで、System.import('todo')とすれば`todo.js`を読み込めるようになる

#### `System.import`

- [Documentation](https://github.com/systemjs/systemjs/wiki/Basic-Use)

```javascript
System.import('todo')
  .then(function(module){
    // module is loaded module
    module.main();
  });
```

### Use todo-app component

```html
<todo-app>Loading...</todo-app>
```

- todo-appが展開されるまで、`Loading...`という文字を出す

## Setup `js/todo.js`

### export entry point

```javascript
export function main() {

  ...

}

```

### import from angular2

```javascript
import {Component, Template, bootstrap, Foreach} from 'angular2/angular2';
```

以下をimportする

- Component
- Template
- bootstrap
- Foreach


### todo-app component

- `@`から始まるのがいわゆる`AtScript`

```javascript
@Component({
  selector: 'todo-app'
})

@Template({
  url: '../templates/todo.html'
})

class TodoApp {
  constructor() {
    ...
  }
}
```

### execute bootstrap

```javascript
export function main() {
  // Kick Off TodoApp
  bootstrap(TodoApp)
}
```