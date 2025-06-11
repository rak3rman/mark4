<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

// Set SEO meta
useSeoMeta({
  title: "Licensing",
  description:
    "Legal stuff detailing how digital assets can and cannot be used.",
});

// Handle OG Image
defineOgImage({
  component: "Radical",
  props: {
    headline: "Radison Akerman",
    title: "Licensing",
    description:
      "Legal stuff detailing how digital assets can and cannot be used.",
  },
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <DocsHero>
      <template #head>Licensing</template>
      <template #desc
        >Legal stuff detailing how digital assets can and cannot be
        used.</template
      >
    </DocsHero>

    <!-- Licensing Content -->
    <ContentContainer class="container my-10 md:my-12">
      <div>
        <ProseH1>Personal Use License</ProseH1>

        <ProseP>
          The individual ("Content Provider") grants buyer a non-exclusive
          perpetual personal-use license to download and copy the accompanying
          image(s) or video(s) or other physical/digital media (collectively,
          "Media,") subject to the following restrictions:
        </ProseP>

        <ProseUl>
          <ProseLi>
            <em
              >This license is for personal use only. Personal use means
              non-commercial use of the Media for display on personal websites
              and computers, or making image prints or video copies for personal
              use. The Media may not be used in any way whatsoever in which you
              charge money, collect fees, or receive any form of remuneration.
              The Media may not be used in advertising. The Media may not be
              resold, relicensed, or sub-licensed.</em
            >
          </ProseLi>
          <ProseLi>
            <em
              >Title and ownership, and all rights now and in the future, of and
              for the Media remain exclusively with the Content Provider.</em
            >
          </ProseLi>
          <ProseLi>
            <em
              >There are no warranties, express or implied. The Media are
              provided 'as is.'</em
            >
          </ProseLi>
          <ProseLi>
            <em
              >The Content Provider will not be liable for any third party
              claims or incidental, consequential or other damages arising out
              of this license or buyer's use of the Media.</em
            >
          </ProseLi>
        </ProseUl>

        <ProseP>
          *All Media released or shared by the Content Provider anywhere on the
          web domain https://radison.io or https://rakerman.com or
          https://media.rakerman.com/ is subject by default to the Personal Use
          License unless specified otherwise. "The Media" includes post
          thumbnails, post images, as well as any other digital media provided
          directly by the Content Provider.
        </ProseP>

        <ProseH1>Commercial Use License</ProseH1>

        <ProseH2>What buyers can do:</ProseH2>

        <ProseP>
          The individual ("Content Provider") grants buyers a perpetual,
          non-exclusive, non-transferable, worldwide license to use the
          accompanying image(s) or video(s) or other physical/digital media
          (collectively, "Media,") for permitted commercial purposes, defined
          as:
        </ProseP>

        <ProseUl>
          <ProseLi>
            <em>advertising, promotion, brochures, packaging</em>
          </ProseLi>
          <ProseLi>
            <em>as part of a commercial website for promotional purposes</em>
          </ProseLi>
          <ProseLi>
            <em
              >prints, posters, flyers, tearsheets for promotional purposes (not
              for resale)</em
            >
          </ProseLi>
          <ProseLi>
            <em>prints, posters, or other commercial display of Media</em>
          </ProseLi>
          <ProseLi>
            <em>magazines, books, newspapers, other printed publications</em>
          </ProseLi>
          <ProseLi>
            <em>video, broadcast, theatrical</em>
          </ProseLi>
        </ProseUl>

        <ProseH2>What buyers may not do:</ProseH2>

        <ProseP>
          <em
            >Buyer may not resell, re-license, redistribute without express
            written permission from Content Provider. Use as a derivative work,
            and reselling or redistributing such derivative work is prohibited.
            Media may not be used in a pornographic, obscene, illegal, immoral,
            libelous or defamatory manner. Media may not be incorporated into
            trademarks, logos, or service marks. Media may not be made available
            for download.</em
          >
        </ProseP>

        <ProseP>
          <em
            >Content Provider retains all rights, license, copyright, title and
            ownership of the Media.</em
          >
        </ProseP>

        <ProseP>
          <em
            >There is no warranty, express or implied, with the purchase of this
            digital image or video file. The Content Provider will not be liable
            for any claims, or incidental, consequential or other damages
            arising out of this license or buyer's use of the Media.</em
          >
        </ProseP>
      </div>
    </ContentContainer>
  </div>
</template>
