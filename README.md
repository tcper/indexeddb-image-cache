# indexeddb-image-cache [![Build](https://github.com/tcper/indexeddb-image-cache/actions/workflows/npm-publish-github-packages.yml/badge.svg)](https://github.com/tcper/indexeddb-image-cache/actions/workflows/npm-publish-github-packages.yml)
Oh yeah, we have Image Cache uses IndexedDB!

Pros:
* No localStorage 5Mb size limit
* Keep the cache as long as you want
* Better for some expensive action cache (download/alogrithm calculated)

## Usage

```
npm i indexeddb-image-cache
```

```javascript
import ImageCache from 'indexeddb-image-cache'

const BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII';
const cache = new ImageCache({ version: 1 });
await cache.init();
await cache.putImage('trophy', BASE64);
// await cache.putBlob('blob', blobInstance)
// somewhere else
// it will return string by URL.createObjectURL()
// get blob easily by: let blob = await fetch(url).then(r => r.blob());
const image = await cache.getImage('trophy')
```

* More usage see image-cache.test.ts file

## Tech Stack

- Vite
- Vitest 
- Typescript

It includes test examples using vite test


# COMMANDS
## run build for local dist testing
npm run build

## run tests
npm run test

## check test coverage
npm run coverage

## build npm release package
npm pack

## Dry run the npm release package
npm pack --dry-run

## run eslint 
npm run lint

## run and fix eslint issues found
npm run lint-and-fix

## run prettier on your files
npm run pretty

## clean up the codebase by runnning eslint and prettier
npm run clean-up

