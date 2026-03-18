/**
 * Decide whether a generated asset should be included in the service worker
 * precache manifest.
 *
 * Nuxt emits build metadata under `/_nuxt/builds/**` with a fresh build id and
 * timestamp on every production build, even when no source files changed. Those
 * files are useful for Nuxt's own outdated-build detection but they are not
 * stable enough to drive PWA update prompts.
 *
 * @param {string} url
 * @returns {boolean}
 * @example
 * shouldPrecachePwaAsset("_nuxt/entry.abc123.js") // => true
 * @example
 * shouldPrecachePwaAsset("_nuxt/builds/latest.json") // => false
 */
export function shouldPrecachePwaAsset(url: string): boolean {
  return !url.startsWith("_nuxt/builds/");
}
