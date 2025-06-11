import { defineCollection, defineContentConfig } from "@nuxt/content";
import { asRobotsCollection } from "@nuxtjs/robots/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";
import { asOgImageCollection } from "nuxt-og-image/content";

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asRobotsCollection(
        asSitemapCollection(
          asOgImageCollection({
            type: "page",
            source: "**/*.md",
          }),
        ),
      ),
    ),
  },
});
