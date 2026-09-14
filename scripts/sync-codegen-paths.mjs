#!/usr/bin/env node
/**
 * Rewrite .codegen/.zero-codegen-merged.json paths to absolute (cwd = repo root).
 * Preserves paths.output from zero-codegen.json / existing merged config.
 * Usage: node scripts/sync-codegen-paths.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const configPath = join(root, '.codegen', '.zero-codegen-merged.json');
const basePath = join(root, '.codegen', 'zero-codegen.json');
const cfg = JSON.parse(readFileSync(configPath, 'utf8'));
const base = existsSync(basePath) ? JSON.parse(readFileSync(basePath, 'utf8')) : {};

const output = cfg.paths?.output ?? base.paths?.output;

cfg.paths = {
  ...cfg.paths,
  project_root: root,
  openapi_dir: join(root, 'packages', 'openapi-core', 'src'),
  bundled_dir: join(root, 'packages', 'openapi-core', 'src', '.bundled'),
  ...(output ? { output } : {}),
};

if (!cfg.package_scope) {
  cfg.package_scope = base.package_scope || '@assayline';
}

writeFileSync(configPath, JSON.stringify(cfg, null, 2) + '\n');
console.log('Updated codegen paths for', root);
