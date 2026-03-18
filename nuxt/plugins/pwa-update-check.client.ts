import {
  activateWaitingPwaUpdate,
  getPwaRegistration,
  shouldRefreshPwa,
} from "~/utils/pwaUpdate";

type PwaClient = {
  getSWRegistration?: () => ServiceWorkerRegistration | undefined;
  needRefresh?: { value: boolean } | boolean;
  updateServiceWorker?: (reloadPage?: boolean) => Promise<void>;
};

export default defineNuxtPlugin({
  name: "pwa-update-on-navigation",
  enforce: "post",
  setup(nuxtApp) {
    if (!import.meta.client || !("serviceWorker" in navigator)) {
      return;
    }

    const router = useRouter();
    const pwa = nuxtApp.$pwa as PwaClient | undefined;

    const applyAvailableUpdate = async (): Promise<boolean> => {
      const registration = await getPwaRegistration(pwa?.getSWRegistration);

      if (registration?.waiting) {
        return activateWaitingPwaUpdate(registration, () => {
          window.location.reload();
        });
      }

      if (shouldRefreshPwa(pwa?.needRefresh) && pwa?.updateServiceWorker) {
        await pwa.updateServiceWorker(true);
        return true;
      }

      return false;
    };

    const checkForUpdate = async (): Promise<void> => {
      if (navigator.onLine === false) {
        return;
      }

      const registration = await getPwaRegistration(pwa?.getSWRegistration);
      if (!registration || registration.installing) {
        return;
      }

      await registration.update().catch(() => {});
    };

    const runSilentUpgrade = async (): Promise<void> => {
      if (await applyAvailableUpdate()) {
        return;
      }

      await checkForUpdate();
      await applyAvailableUpdate();
    };

    nuxtApp.hook("app:mounted", () => {
      void runSilentUpgrade();

      router.afterEach((to, from) => {
        if (to.path === from.path) {
          return;
        }

        void runSilentUpgrade();
      });
    });
  },
});
