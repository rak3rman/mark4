/**
 * Extract image ID from Image Delivery URL
 * @param url - Full Image Delivery URL
 * @returns Image ID or null if not a valid URL
 */
export function extractImageId(url: string): string | null {
  const match = url.match(/imagedelivery\.net\/[^/]+\/([^/]+)\//);
  return match ? match[1] : null;
}

/**
 * Extract variant from Image Delivery URL
 * @param url - Full Image Delivery URL
 * @returns Variant (e.g., 'sm', 'lg') or 'sm' as default
 */
export function extractVariant(url: string): string {
  const parts = url.split("/");
  return parts[parts.length - 1] || "sm";
}

/**
 * Build Image Delivery URL from ID and variant
 * @param id - Image ID
 * @param variant - Size variant (defaults to 'sm')
 * @returns Full Image Delivery URL
 */
export function buildImageUrl(id: string, variant: string = "sm"): string {
  return `https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/${id}/${variant}`;
}
