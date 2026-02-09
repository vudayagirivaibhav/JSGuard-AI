import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        'tests/',
        '**/*.config.{js,ts}',
        '**/*.d.ts',
        '**/types/',
      ],
    },
    include: ['tests/**/*.{test,spec}.{js,ts,tsx}'],
    exclude: ['node_modules', 'dist', 'examples', 'training', 'benchmarks'],
  },
  resolve: {
    alias: {
      '@jsguard/core': path.resolve(__dirname, './src/core'),
      '@jsguard/types': path.resolve(__dirname, './src/types'),
      '@jsguard/detectors': path.resolve(__dirname, './src/detectors'),
      '@jsguard/watchers': path.resolve(__dirname, './src/watchers'),
      '@jsguard/actions': path.resolve(__dirname, './src/actions'),
      '@jsguard/scoring': path.resolve(__dirname, './src/scoring'),
      '@jsguard/compliance': path.resolve(__dirname, './src/compliance'),
      '@jsguard/ai': path.resolve(__dirname, './src/ai'),
      '@jsguard/utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
