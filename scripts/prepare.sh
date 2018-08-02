#!/bin/bash

npx parcel build src/index.ts -d lib --no-minify --global VueTagManager --target node
npx parcel build src/native-entry.ts -d lib --global VueTagManager --out-file TagManager.js
npx tsc --emitDeclarationOnly