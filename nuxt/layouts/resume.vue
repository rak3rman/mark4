<template>
  <div>
    <Html data-theme="resume" />
    <ResumePage>
      <ResumeTitle> Radison Akerman </ResumeTitle>
      <ResumeSubtitle>
        radison@rakerman.com &#8192;www.rakerman.com
        &#8192;linkedin.com/in/rakerman
      </ResumeSubtitle>

      <ResumeHeading> Experience </ResumeHeading>
      <ResumeExperience
        v-for="item in experiences
          .filter((e) => e.is_resume)
          .sort((a, b) => {
            let aa = Date.parse(a.end);
            let bb = Date.parse(b.end);
            return (
              (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa)
            );
          })"
        :exp="item"
      />

      <ResumeHeading> Education </ResumeHeading>
      <ResumeEducation
        v-for="item in education
          .filter((e) => e.is_resume)
          .sort((a, b) => {
            let aa = Date.parse(a.end);
            let bb = Date.parse(b.end);
            return (
              (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa)
            );
          })"
        :edu="item"
      />

      <ResumeHeading> Skills </ResumeHeading>
      <ResumeSkillBlock v-for="item in skillsets" :block="item" />

      <ResumeHeading> Projects </ResumeHeading>
      <ResumeProject
        v-for="item in projects.filter((e) => e.is_resume)"
        :proj="item"
      />
      <div class="text-xs font-light italic mt-2">
        See all 20+ projects at
        <a class="font-medium" href="https://rakerman.com#projects"
          >rakerman.com#projects</a
        >, publications at
        <a class="font-medium" href="https://rakerman.com/publications"
          >rakerman.com/publications</a
        >
      </div>
    </ResumePage>
  </div>
</template>

<script setup>
import experiences from "~/summarize/data/experiences.json";
import education from "~/summarize/data/education.json";
import skillsets from "~/summarize/data/skillsets.json";
import projects from "~/summarize/data/projects.json";
</script>