<template>
  <div>
    <Html data-theme="resume" />

    <ResumePage :page="1" :total="total_pages">
      <ResumeTitle class="-pt-4"> Radison Akerman </ResumeTitle>
      <ResumeSubtitle>
        radison@rakerman.com &#8192;www.rakerman.com
        &#8192;linkedin.com/in/rakerman
      </ResumeSubtitle>

      <ResumeHeading> Education </ResumeHeading>
      <ResumeEducation v-for="item in education.sort(singleSort)" :edu="item" />

      <ResumeHeading> Professional Experience </ResumeHeading>
      <ResumeExperience
        v-for="item in experience
          .filter(
            (e) =>
              defaultExperienceFilters(e) && e.tags.includes('professional')
          )
          .sort(singleSort)"
        :exp="item"
      />
    </ResumePage>

    <ResumePage :page="2" :total="total_pages">
      <ResumeHeading> Teaching and Mentoring Experience </ResumeHeading>
      <ResumeExperience
        v-for="item in experience
          .filter(
            (e) =>
              defaultExperienceFilters(e) &&
              (e.tags.includes('teach') || e.tags.includes('mentor'))
          )
          .sort(singleSort)"
        :exp="item"
      />

      <ResumeHeading> Event Operations Experience </ResumeHeading>
      <ResumeExperience
        v-for="item in experience
          .filter(
            (e) => defaultExperienceFilters(e) && e.tags.includes('events')
          )
          .sort(singleSort)"
        :exp="item"
      />

      <ResumeHeading> Skills </ResumeHeading>
      <ResumeSkillBlock v-for="item in skills" :block="item" />

      <ResumeHeading> Honors and Awards </ResumeHeading>
      <ResumeAward
        v-for="item in awards.sort(multipleSort).slice(0, 5)"
        :award="item"
      />
    </ResumePage>

    <ResumePage :page="3" :total="total_pages">
      <ResumeHeading> Honors and Awards (cont.) </ResumeHeading>
      <ResumeAward
        v-for="item in awards.sort(multipleSort).slice(5)"
        :award="item"
      />

      <ResumeHeading> Presentations </ResumeHeading>
      <ResumePresentation
        v-for="item in presentations.sort(multipleSort)"
        :pres="item"
      />
      <div class="text-xs font-light italic mt-2">
        See all presentation details at
        <a class="font-medium" href="https://rakerman.com/publications"
          >rakerman.com/publications</a
        >
      </div>

      <ResumeHeading> Projects </ResumeHeading>
      <ResumeProject
        v-for="item in projects.filter((e) => e.bullets.length > 0)"
        :proj="item"
        show-subheader
      />
      <div class="text-xs font-light italic mt-2">
        See all project details at
        <a class="font-medium" href="https://rakerman.com#projects"
          >rakerman.com#projects</a
        >
      </div>
    </ResumePage>
  </div>
</template>

<script setup>
import awards from "../assets/awards.json";
import experience from "../assets/experience.json";
import presentations from "../assets/presentations.json";
import education from "../assets/education.json";
import skills from "../assets/skills.json";
import projects from "../assets/projects.json";

import { defaultExperienceFilters } from "~/utils/defaultExperienceFilters.ts";

const total_pages = 3;

const singleSort = (a, b) => {
  let aa = Date.parse(a.end);
  let bb = Date.parse(b.end);
  return (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa);
};

const multipleSort = (a, b) => {
  let a_idx = a.given.length - 1;
  let b_idx = b.given.length - 1;
  while (a_idx >= 0 && b_idx >= 0) {
    let aa = Date.parse(a.given[a_idx]);
    let bb = Date.parse(b.given[b_idx]);
    if (aa !== bb) {
      break;
    }
    a_idx--;
    b_idx--;
  }
  let aa = a_idx >= 0 ? Date.parse(a.given[a_idx]) : undefined;
  let bb = b_idx >= 0 ? Date.parse(b.given[b_idx]) : undefined;
  return (
    (bb === undefined ? Date.now() : bb) - (aa === undefined ? Date.now() : aa)
  );
};
</script>