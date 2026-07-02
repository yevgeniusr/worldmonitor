import { jsonResponse } from './_json-response.js';

export const config = { runtime: 'edge' };

export default async function handler() {
  return jsonResponse({ status: 'ok' }, 200, {
    'Cache-Control': 'private, no-store, max-age=0',
  });
}
