# subscription-container [![npm](https://img.shields.io/npm/v/subscription-container.svg?style=flat-square)](https://www.npmjs.com/package/subscription-container)

[![Gitter](https://img.shields.io/gitter/room/koleok/help.svg?style=flat-square)](https://gitter.im/koleok/help)

[![CircleCI](https://img.shields.io/circleci/project/koleok/subscription-container.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/koleok/subscription-container)
[![AppVeyor](https://img.shields.io/appveyor/ci/koleok/subscription-container.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/koleok/subscription-container)
[![Coverage](https://img.shields.io/codecov/c/github/koleok/subscription-container.svg?style=flat-square)](https://codecov.io/github/koleok/subscription-container?branch=master)
[![Dependencies](https://img.shields.io/david/koleok/subscription-container.svg?style=flat-square)](https://david-dm.org/koleok/subscription-container)
[![Dev Dependencies](https://img.shields.io/david/dev/koleok/subscription-container.svg?style=flat-square)](https://david-dm.org/koleok/subscription-container#info=devDependencies)

A react component that dispatches start and stop redux actions to drive a meteor subscription

## Installation

### NPM
```sh
npm install --save react subscription-container
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://unpkg.com/subscription-container/bower.zip
```


### 1998 Script Tag:
```html
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/subscription-container/build/subscription-container.js"></script>
(Module exposed as `SubContainer`)
```


## Demo

[http://koleok.github.io/subscription-container](http://koleok.github.io/subscription-container)

## Codepen demo

```js
// TODO
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {SubContainer} from 'subscription-container';

const App = () => (
  <div>
    <SubContainer />
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options

```js
// TODO
```

## Development and testing

Currently is being developed and tested with the latest stable `Node 6` on `OSX` and `Windows`.

To run example covering all `SubContainer` features, use `npm start dev`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:koleok/subscription-container.git
cd subscription-container
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT