#!/bin/bash

npx parcel build src/index.ts -d lib --global VueTagManager --target node
npx parcel build src/TagManager.ts -d lib --global TagManager --target node
npx tsc --emitDeclarationOnly