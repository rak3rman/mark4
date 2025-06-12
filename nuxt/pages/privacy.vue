<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

// Set SEO meta
useSeoMeta({
  title: "Privacy",
  description: "We don't collect your data and use it to track you. Period.",
});

// Handle OG Image
defineOgImage({
  component: "Radical",
  props: {
    headline: "Radison Akerman",
    title: "Privacy",
    description: "We don't collect your data and use it to track you. Period.",
  },
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <DocsHero>
      <template #head>Privacy</template>
      <template #desc
        >We don't collect your data and use it to track you. Period.</template
      >
    </DocsHero>

    <!-- Privacy Policy Content -->
    <ContentContainer class="container my-10 md:my-12">
      <div>
        <ProseH1>Privacy Policy</ProseH1>

        <ProseP>
          Throughout all services on radison.io or rakerman.com,
          <strong
            >none of them will collect your data and use it to track you as an
            individual</strong
          >. Rather, a few services may collect small amounts of anonymous,
          non-personal data needed to provide a key feature of the service. The
          data we collect is never related to anything about you – meaning no
          cookies, no ad tracking, and no data to be leaked in the first place.
          All data collection methods require some specific action by you.
          Simply visiting a site will not relinquish your data automatically to
          the service. All data is stored on a secure, sand-boxed database, not
          sold or distributed to external parties, nor linked to you or your
          browser.
        </ProseP>

        <ProseP>
          <strong>In a nutshell:</strong> Data used to track you: none. Data
          linked to you: none. Data not linked to you: identifiers, usage data,
          and diagnostics (only collected if you directly use the service,
          specifics found in Data Usages by Service).
        </ProseP>

        <ProseH1>Data Usages by Service</ProseH1>

        <ProseP>
          We've included a description of both internal (used directly by the
          application) and external (an outside service) data collection methods
          used by each service on radison.io or rakerman.com. Here we explain
          what we are collecting, why we need to collect it, and how we are
          managing the data in a safe and secure manner.
        </ProseP>

        <ProseUl>
          <ProseLi><strong>https://radison.io/:</strong> N/A</ProseLi>
          <ProseLi>
            <strong>https://chickens.rakerman.com/:</strong> Lobby data is
            stored for up to 24 hours to allow for users to play Exploding
            Chickens across the Internet, provide the "game analysis" feature,
            trace and fix possible issues that may arise in a lobby/game, and
            improve user experience on the platform. User data is stored
            indefintely to allow users to save profile defaults, games played,
            and purchased expansion packs. Lobby and some user data is stored on
            a secure, sand-boxed database, not sold or distributed to external
            parties, nor linked to you or your browser. Auth0 may store
            additional user data if you opt to use an SSO authentication method.
          </ProseLi>
          <ProseLi>
            <strong>https://rratfr.rakerman.com/:</strong> Your IP (localized
            address on the Internet) is logged when you choose to participate in
            the People's Choice contest. This data is used to help enforce
            People's Choice voting mechanisms. All data related to the People's
            Choice contest (except total vote counts) is deleted immediately
            after race day. IP data is stored on a secure, sand-boxed database,
            not sold or distributed to external parties, nor linked to you or
            your browser.
          </ProseLi>
          <ProseLi>
            <strong>https://informr.rakerman.com/:</strong> N/A, in development
          </ProseLi>
          <ProseLi>
            <strong>https://media.rakerman.com/:</strong> N/A, in development
          </ProseLi>
          <ProseLi><strong>https://link.rakerman.com/:</strong> N/A</ProseLi>
          <ProseLi>
            <strong>https://status.rakerman.com/:</strong> N/A
          </ProseLi>
        </ProseUl>

        <ProseH1>Miscellaneous Trackers</ProseH1>

        <ProseP>
          Because of the use of certain technologies on any radison.io or
          rakerman.com service, a few miscellaneous trackers may appear on a
          site privacy report. We have no control over these trackers unless we
          decide to terminate the use of that technology. Below is a list
          describing each tracker that may appear in addition to the
          <em>Data Usages by Service</em> section.
        </ProseP>

        <ProseUl>
          <ProseLi>
            <strong>Cloudflare:</strong> Web performance and security firewall,
            used to stop malicious attacks and secure digital assets
          </ProseLi>
          <ProseLi>
            <strong>jsDelivr:</strong> A JavaScript CDN (content delivery
            network) for opensource packages, used to serve required JS
            components
          </ProseLi>
          <ProseLi>
            <strong>UNPKG:</strong> A npm CDN (content delivery network) for
            Node.js packages, used to serve required Node.js components
          </ProseLi>
        </ProseUl>
      </div>
    </ContentContainer>
  </div>
</template>
