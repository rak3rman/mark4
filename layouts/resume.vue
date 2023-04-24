<template>
  <div class="p-10" id="resume-export">
    <Html data-theme="resume" />

    <ResumeTitle> Radison Akerman </ResumeTitle>
    <ResumeSubtitle>
      815-520-6031 radison@me.com rakerman.com linkedin.com/in/rakerman
    </ResumeSubtitle>

    <ResumeHeading> Experience </ResumeHeading>
    <ResumeExperience
      v-for="item in experience
        .filter((e) => e.is_resume)
        .sort((a, b) => {
          let aa = Date.parse(a.end);
          let bb = Date.parse(b.end);
          return (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa);
        })"
      :exp="item"
    />

    <ResumeHeading> Education </ResumeHeading>
    <ResumeEducation v-for="item in education" :edu="item" />

    <ResumeHeading> Skills </ResumeHeading>
    <ResumeSkillBlock v-for="item in skills" :block="item" />

    <ResumeHeading> Projects </ResumeHeading>
    <ResumeProject
      v-for="item in projects.filter((e) => e.is_resume)"
      :proj="item"
    />
    <div class="text-xs font-light italic mt-1.5">
      See all 20+ projects at
      <span class="font-medium">rakerman.com#projects</span>, publications at
      <span class="font-medium">rakerman.com/publications</span>
    </div>
  </div>
</template>

<script setup>
import experience from "../assets/experience.json";
import education from "../assets/education.json";
import skills from "../assets/skills.json";
import projects from "../assets/projects.json";
</script>