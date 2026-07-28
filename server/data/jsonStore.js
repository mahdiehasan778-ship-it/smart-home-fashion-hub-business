import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'data');

/**
 * Reads and parses a JSON file from server/data/.
 * @param {string} filename e.g. 'products.json'
 */
export async function readJson(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw);
}

/**
 * Overwrites a JSON file in server/data/ with new content.
 * Used by the newsletter endpoint to persist subscribers.
 * @param {string} filename e.g. 'newsletter-subscribers.json'
 * @param {any} data serializable data
 */
export async function writeJson(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}