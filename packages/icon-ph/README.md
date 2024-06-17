## Usage with Next.js
          
Add this to next.config.js:
    
```ts
modularizeImports: {
    // ...
    "@tamagui-icons/icon-ph": {
        transform: "@tamagui-icons/icon-ph/dist/esm/icons/{{kebabCase member}}",
        skipDefaultConversion: true,
    },
},
```

Make sure to re-install dependencies and re-build after cloning.
        