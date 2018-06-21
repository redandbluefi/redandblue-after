export default function register({ localeCode }) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const SERVICE_WORKER = `/service-worker.js?locale=${localeCode}`;
      navigator.serviceWorker.register(SERVICE_WORKER).catch(err => {
        console.error('Error during service worker registration:', err);
      });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
