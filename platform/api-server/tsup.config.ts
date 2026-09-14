import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  target: 'node20',
  outDir: 'dist',
  external: [/^@assayline\//, /^@aws-sdk\//, /^@fastify\//, 'fastify', 'zod'],
});
