# nuxt-multianalytics
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-multianalytics/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-multianalytics)
[![npm](https://img.shields.io/npm/dt/nuxt-multianalytics.svg?style=flat-square)](https://npmjs.com/package/nuxt-multianalytics)
[![Dependencies](https://david-dm.org/anteriovieira/nuxt-multianalytics/status.svg?style=flat-square)](https://david-dm.org/anteriovieira/nuxt-multianalytics)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Nuxt module for [vue-multianalytics](https://github.com/Glovo/vue-multianalytics)

## Features

The module features

## Setup
- Add `nuxt-multianalytics` dependency using yarn or npm to your project
- Add `nuxt-multianalytics` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    ['nuxt-multianalytics', {
      options: {},
      mixin: function() {},
      customModules: {}
    }],
 ]
}
```

or

```js
{
  modules: [
    'nuxt-multianalytics',
 ],
 multianalytics: {
   options: {},
   mixin: function() {},
   customModules: {}
 }
}
```

## License

[MIT License](./LICENSE)

Copyright (c) Antério Vieira <anteriovieira@gmail.com>
