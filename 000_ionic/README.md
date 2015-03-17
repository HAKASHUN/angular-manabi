# 000_ionic

## references

- http://ionicframework.com/getting-started/

## Install

```
$ npm install -g cordova ionic
```

## Generate Project

```
$ ionic start myApp tabs
```

## Structure

```bash
000_ionic
├── README.md
├── bower.json     // bower dependencies
├── config.xml     // cordova configuration
├── gulpfile.js    // gulp tasks
├── hooks          // custom cordova hooks to execute on specific commands
├── ionic.project  // ionic configuration
├── package.json   // node dependencies
├── platforms      // iOS/Android specific builds will reside here
├── plugins        // where your cordova/ionic plugins will be installed
├── scss           // scss code, which will output to www/css/
└── www            // application - JS code and libs, CSS, images, etc.
```

## serve project

```
$ cd {Project Root Directory}
$ ionic serve

Multiple addresses available.
Please select which address to use by entering its number from the list below:
 1) 100.100.100.100 (hoge)
 2) 100.100.100.101 (foo)
 3) 100.100.100.102 (bar)
 4) localhost
Std in before prompt
Address Selection:  {Select Number for Adress}

```

### preview

![2015-03-17 10 32 17](https://cloud.githubusercontent.com/assets/1150412/6688294/a7c0f440-ccf5-11e4-91bd-4a2dce653f12.png)

- live reload

### unserve

type `q`

```bash
$ ionic serve

...

q
$
```

## serve with ionic-lab

```
$ cd {Project Root Directory}
$ ionic serve --lab
```

- preview iOS view
- preview Android view
- live reload

![2015-03-17 11 06 16](https://cloud.githubusercontent.com/assets/1150412/6688902/45c76918-ccfa-11e4-989d-3b70d2d9f828.png)


### with build

```bash
$ ionic serve --lab --b
```

## set up sass files

```
$ cd {Project Root Directory}
$ ionic setup sass
```

``` bash
www/css
├── ionic.app.css //generated
├── ionic.app.min.css  //generated
└── style.css
```

## run ios app with livereload

```bash
$ cd {Project Root Directory}
$ ionic platform add ios
$ ionic run ios --livereload
```

- `ionic platform add ios` add this project as ios.
- `ionic run ios --livereload` build ios app and run with livereload.

![2015-03-17 11 26 35](https://cloud.githubusercontent.com/assets/1150412/6689374/1389ff6c-ccfd-11e4-9155-6f61fdc39784.png)

## run android app with livereload

```bash
$ cd {Project Root Directory}
$ ionic platform add android
$ ionic run android --livereload
```

## output console.log in commandline

```bash
$ cd {Project Root Directory}
$ ionic run ios --livereload
consolelogs
```

## Trouble

```bash
$ ionic platform add ios

npm http GET https://registry.npmjs.org/cordova-ios/3.6.32
npm http 401 https://registry.npmjs.org/cordova-ios/3.6.32
Unable to fetch platform ios: Error: unauthorized Name or password is incorrect.: cordova-ios/3.8.0

$ cat ~/.npmrc | grep -v email | grep -v _auth > ~/.npmrc
$ ionic platform add ios
```

```bash
$ ionic run ios --livereload

ios-sim was not found. Please download, build and install version 3.0.0 or greater from https://github.com/phonegap/ios-sim into your path. Or 'npm install -g ios-sim' using node.js: http://nodejs.org

$ npm install -g ios-sim
$ ionic run ios --livereload
```

``` bash
$ ionic run android --liverreload

ERROR: Error: Please install Android target: "android-21".

Hint: Open the SDK manager by running: /Applications/Android\ Studio.app/sdk/tools/android
You will require:
1. "SDK Platform" for android-21
2. "Android SDK Platform-tools (latest)
3. "Android SDK Build-tools" (latest)

ERROR running one or more of the platforms: Error: /Users/a12692/Documents/workspace/angular-manabi/000_ionic/platforms/android/cordova/run: Command failed with exit code 2
You may not have the required environment or OS to run this project

$ cd /Applications/Android\ Studio.app/sdk/tools
$ open .

```
android