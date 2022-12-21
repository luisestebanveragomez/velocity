import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: './vel-card.js',
    output:
      {
        file: 'dist/iife/index.js',
        format: 'iife'
      },
    plugins: [
      nodeResolve(),
      terser(),
      commonjs()
    ]
  },
  {
    input: './index.js',
    output: {
      file: 'dist/esm/index.js',
      format: 'esm'
    },
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  }
];
