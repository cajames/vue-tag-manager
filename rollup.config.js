const { readFileSync } = require('node:fs');
const typescript = require('rollup-plugin-typescript2');

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

const base = {
  plugins: [
    typescript()
  ]
}

const pluginCJS = {
  ...base,
  input: './src/index.ts',
  output: {
      file: pkg.main,
      format: 'cjs'
  }
}
const pluginESM = {
  ...base,
  input: './src/index.ts',
  output: {
      file: pkg.module,
      format: 'esm'
  }
}

const pluginUMD = {
  ...base,
  input: './src/index.ts',
  output: {
      file: pkg.unpkg,
      format: 'umd',
      name: 'VueTagManager'
  }
}

const native = {
  ...base,
  input: './src/native-entry.ts',
  output: {
      file: 'lib/TagManager.js',
      format: 'umd',
      name: 'VueTagManager'
  }
}

module.exports = [
    pluginCJS,
    pluginESM,
    pluginUMD,
    native
]
