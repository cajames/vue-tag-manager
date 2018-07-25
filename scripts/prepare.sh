#!/bin/bash

npx parcel build src/index.ts -d lib --target node
npx parcel build src/TagManager.ts -d lib --global TagManager --target node
npx tsc --emitDeclarationOnly