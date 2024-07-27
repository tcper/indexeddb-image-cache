# indexeddb-image-cache
Oh yeah, we have Image Cache uses IndexedDB!

## Usage

```
npm i indexeddb-image-cache
```

```
import ImageCache from 'indexeddb-image-cache'

const BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII';
  const cache = new ImageCache({ version: 1 });
  await cache.init();
  await cache.putImage('trophy', BASE64);
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

