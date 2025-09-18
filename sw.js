self.addEventListener("install", e => {
  console.log("Service Worker instalado");
});

self.addEventListener("activate", e => {
  console.log("Service Worker activo");
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(
    clients.openWindow("/") // abre la app si tocan la notificación
  );
});