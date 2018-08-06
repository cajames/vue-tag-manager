import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2';

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
  input: pkg.module,
  output: {
      file: 'lib/index.esm.js',
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

export default [
    pluginCJS,
    pluginESM,
    pluginUMD,
    native
]
