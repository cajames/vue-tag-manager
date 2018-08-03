import typescript from 'rollup-plugin-typescript2';

const base = {
  plugins: [
    typescript()
  ]
}

const pluginCJS = {
  ...base,
  entry: './src/index.ts',
  output: {
      file: 'lib/index.cjs.js',
      format: 'cjs'
  }
}
const pluginESM = {
  ...base,
  entry: './src/index.ts',
  output: {
      file: 'lib/index.esm.js',
      format: 'esm'
  }
}

const pluginUMD = {
  ...base,
  entry: './src/index.ts',
  output: {
      file: 'lib/index.js',
      format: 'umd',
      name: 'VueTagManager'
  }
}

const native = {
  ...base,
  entry: './src/native-entry.ts',
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
