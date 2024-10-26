import { type RouteLocationNormalized } from "vue-router";

const allowedSlugs: string[] = [
  "ofertas-extremas",
  "megadescuentos",
  "coleccion-milenio-arte",
];

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
  if (to.params.slug && !allowedSlugs.includes(to.params.slug as string)) {
    throw new Error("Page Not Found");
  }
});
