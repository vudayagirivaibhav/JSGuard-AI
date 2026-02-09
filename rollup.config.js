import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

const basePlugins = [
  resolve({
    browser: true,
    preferBuiltins: false,
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: true,
    declarationDir: './dist/types',
    rootDir: './src',
  }),
];

const productionPlugins = isProduction
  ? [
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
        },
        mangle: {
          properties: false,
        },
      }),
    ]
  : [];

const createConfig = (input, outputName, external = []) => ({
  input,
  external,
  plugins: [...basePlugins, ...productionPlugins],
  output: [
    {
      file: `dist/esm/${outputName}.js`,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: `dist/cjs/${outputName}.js`,
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
  ],
});

const createUMDConfig = (input, name, outputName) => ({
  input,
  external: [],
  plugins: [...basePlugins, ...productionPlugins],
  output: {
    file: `dist/umd/${outputName}.js`,
    format: 'umd',
    name,
    sourcemap: true,
    globals: {},
  },
});

export default [
  // Core library
  createConfig('src/index.ts', 'index'),
  createUMDConfig('src/index.ts', 'JSGuard', 'jsguard-ai'),

  // React integration
  createConfig('src/react/index.ts', 'react/index', ['react']),

  // Next.js integration
  createConfig('src/next/index.ts', 'next/index', ['next']),

  // Express/Server integration
  createConfig('src/server/index.ts', 'server/index', ['express']),

  // AI module (optional, heavier)
  createConfig('src/ai/index.ts', 'ai/index', ['onnxruntime-web']),

  // CLI tool
  {
    input: 'src/cli/index.ts',
    external: ['fs', 'path', 'util'],
    plugins: basePlugins,
    output: {
      file: 'dist/cli/index.js',
      format: 'cjs',
      banner: '#!/usr/bin/env node',
      sourcemap: true,
    },
  },
];
