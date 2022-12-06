# ESM-TS-Coverage

This repo try to solve Node.js in ESM and TypeScript with test coverage.

**[packages](package.json)**:

```bash
# Test framework, you can use mocha instead
npm i -D jasmine @types/jasmine
# Coverage, important! nyc not support good in ESM, see detailed in Misc
npm i -D c8
npm i -D ts-node typescript
```

<details>
  <summary>Jasmine additional config</summary>
  
  Create [jasmine.ts](jasmine.ts) to compatible with TypeScript.
  
</details>
</br>

**[tsconfig.json](tsconfig.json)**:

```jsonc
{
  "compilerOptions": {
    // ...
    "module": "es2022",
    "esModuleInterop": true
    // ...
  },
  "ts-node": {
    "esm": true // If not provided, use ts-node-esm instead
  }
}
```

## Start command

Test:

```bash
npx ts-node jasmine.ts
```

Or add to package.json

```jsonc
{
  "scripts": {
    "test": "ts-node jasmine.ts"
  }
}
```

Coverage:

```bash
npx c8 ts-node jasmine.ts
```

Or add to package.json

```jsonc
{
  "scripts": {
    "test": "c8 npm test"
  }
}
```

## Misc

Why use c8? according to [nyc officially](https://github.com/istanbuljs/esm-loader-hook):

> Until the node.js feature is stabilized breakage should not be unexpected.
> For more stable options to test coverage you can:
>
> -   Use [c8](https://github.com/bcoe/c8)
> -   Pre-instrument your code (run nyc instrument then test the output)
