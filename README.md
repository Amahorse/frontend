<p align="center">
  <a href="https://coreui.io/">
    <img
      src="https://coreui.io/images/brand/coreui-signet.svg"
      alt="CoreUI logo"
      width="200"
    />
  </a>
</p>

<h3 align="center">CoreUI PRO for React.js</h3>

<p align="center">
  React.js Components Library built on top of Bootstrap 5 and TypeScript.
  <br>
  <a href="https://coreui.io/react/docs/getting-started/introduction"><strong>Explore CoreUI for React.js docs »</strong></a>
  <br>
  <br>
  <a href="https://coreui.io/support/">Report bug</a>
  ·
  <a href="https://coreui.io/support/">Request feature</a>
  ·
  <a href="https://coreui.io/blog/">Blog</a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Components](#components)
- [Status](#status)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)

## Quick start

### Instalation

Several quick start options are available:

- [Download the latest release](https://github.com/coreui/coreui-react-pro/archive/v5.2.0.zip)
- Clone the repo: `git clone https://github.com/coreui/coreui-react-pro.git`
- Install with [npm](https://www.npmjs.com/): `npm install @coreui/react-pro`
- Install with [yarn](https://yarnpkg.com/): `yarn add @coreui/react-pro`

Read the [Getting started page](https://coreui.io/react/docs/getting-started/introduction/) for information on the framework contents, templates and examples, and more.

### Stylesheets

React components are styled using `@coreui/coreui-pro` CSS library, but you can use them also with bootstrap CSS library. That is possible because `@coreui/coreui-pro` library is compatible with bootstrap, it just extends its functionalities. The only exception are custom CoreUI components, which don't exist in the Bootstrap ecosystem.

#### CoreUI CSS files

##### Installation

```bash
yarn add @coreui/coreui
```

or

```bash
npm install @coreui/coreui --save
```

##### Basic usage

```js
import "@coreui/coreui-pro/dist/css/coreui.min.css";
```

## Documentation

The documentation for the CoreUI & CoreUI PRO is hosted at our website [CoreUI for React](https://coreui.io/react/docs/getting-started/introduction)

### Running documentation locally

1. Run `yarn install` or `npm install` to install the Node.js dependencies.
2. Run `yarn bootstrap` or `npm run bootstrap` to link local packages together and install remaining package dependencies.
3. From the root directory, run `yarn docs:dev` or `npm run docs:dev` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
4. Open `http://localhost:8000/` in your browser, and voilà.

## Community

Stay up to date on the development of CoreUI and reach out to the community with these helpful resources.

- Read and subscribe to [The Official CoreUI Blog](https://coreui.io/blog/).

You can also follow [@core_ui on Twitter](https://twitter.com/core_ui).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CoreUI is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui-react-pro/releases) for changelogs for each release version.

## Creators

**Łukasz Holeczek**

* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>

**Andrzej Kopański**

* <https://github.com/xidedix>

**CoreUI Team**

* <https://twitter.com/core_ui>
* <https://github.com/coreui>
* <https://github.com/orgs/coreui/people>
