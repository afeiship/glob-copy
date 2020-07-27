# glob-copy
> Copy based on globby.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/glob-copy
```

## usage
```js
import globCopy from '@feizheng/glob-copy';

// code goes here
globCopy.sync([ "*.js", 'dist','!.md' ], 'dist');
```

## resources
- https://github.com/akre54/glob-copy

## license
Code released under [the MIT license](./LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/glob-copy
[version-url]: https://npmjs.org/package/@feizheng/glob-copy

[license-image]: https://img.shields.io/npm/l/@feizheng/glob-copy
[license-url]: https://github.com/afeiship/glob-copy/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/glob-copy
[size-url]: https://github.com/afeiship/glob-copy/blob/master/dist/glob-copy.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/glob-copy
[download-url]: https://www.npmjs.com/package/@feizheng/glob-copy
