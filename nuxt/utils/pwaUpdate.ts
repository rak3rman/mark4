const PWA_UPDATE_ACTIVATION_TIMEOUT_MS = 10_000;

let isActivatingPwaUpdate = false;

/**
 * Return the current service worker registration for the app scope.
 *
 * @param {(() => ServiceWorkerRegistration | undefined) | undefined} getRegistration
 * @returns {Promise<ServiceWorkerRegistration | undefined>}
 */
export async function getPwaRegistration(
  getRegistration?: () => ServiceWorkerRegistration | undefined,
): Promise<ServiceWorkerRegistration | undefined> {
  const registration = getRegistration?.();
  if (registration) {
    return registration;
  }

  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
    return undefined;
  }

  return navigator.serviceWorker.getRegistration();
}

/**
 * Return whether the current registration has an installed update waiting to
 * take control.
 *
 * @param {ServiceWorkerRegistration | undefined | null} registration
 * @returns {boolean}
 */
export function hasWaitingPwaUpdate(
  registration: ServiceWorkerRegistration | undefined | null,
): boolean {
  return Boolean(registration?.waiting);
}

/**
 * Resolve the PWA refresh state from either a plain boolean or a ref-like
 * object exposed by the PWA runtime.
 *
 * @param {{ value: boolean } | boolean | undefined | null} needRefresh
 * @returns {boolean}
 * @example
 * shouldRefreshPwa({ value: true }) // => true
 * @example
 * shouldRefreshPwa(false) // => false
 */
export function shouldRefreshPwa(
  needRefresh: { value: boolean } | boolean | undefined | null,
): boolean {
  if (typeof needRefresh === "object" && needRefresh !== null) {
    return Boolean(needRefresh.value);
  }

  return Boolean(needRefresh);
}

/**
 * Promote the waiting service worker to active and reload once it takes
 * control of the page.
 *
 * @param {ServiceWorkerRegistration | undefined} registration
 * @param {() => void} onActivated
 * @returns {Promise<boolean>}
 */
export async function activateWaitingPwaUpdate(
  registration: ServiceWorkerRegistration | undefined,
  onActivated: () => void,
): Promise<boolean> {
  if (!registration?.waiting || typeof navigator === "undefined") {
    return false;
  }

  if (isActivatingPwaUpdate) {
    return true;
  }

  isActivatingPwaUpdate = true;

  const cleanup = (): void => {
    isActivatingPwaUpdate = false;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    navigator.serviceWorker.removeEventListener(
      "controllerchange",
      onControllerChange,
    );
  };

  const onControllerChange = (): void => {
    cleanup();
    onActivated();
  };

  navigator.serviceWorker.addEventListener(
    "controllerchange",
    onControllerChange,
  );

  const timeoutId = setTimeout(cleanup, PWA_UPDATE_ACTIVATION_TIMEOUT_MS);

  try {
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
    return true;
  } catch (error) {
    cleanup();
    throw error;
  }
}
