<template>
  <div>
    <SummarizePage>
      <!-- Personal header -->
      <SummarizeTitle>{{ resumeConfig.name }}</SummarizeTitle>
      <SummarizeSubtitle>
        {{ resumeConfig.email + (resumeConfig.email ? "&ensp;" : "") }}
        {{ resumeConfig.website + (resumeConfig.website ? "&ensp;" : "") }}
        {{ resumeConfig.linkedin + (resumeConfig.linkedin ? "&ensp;" : "") }}
      </SummarizeSubtitle>

      <!-- Experience section -->
      <SummarizeHeading>Experience</SummarizeHeading>
      <SummarizeExperience
        v-for="experience in resumeExperiences.filter(
          (item) => defaultExperienceFilters(item) && item.on_resume,
        )"
        :key="`${experience.organization}-${experience.title}`"
        :experience="experience"
      />

      <!-- Education section -->
      <SummarizeHeading>Education</SummarizeHeading>
      <SummarizeEducation
        v-for="education in resumeEducation.filter((item) => item.on_resume)"
        :key="education.organization"
        :education="education"
      />

      <!-- Skills section -->
      <SummarizeHeading>Skills</SummarizeHeading>
      <SummarizeSkillSet
        v-for="skillSet in resumeSkillSets"
        :key="skillSet.set"
        :skillset="skillSet"
      />

      <!-- Projects section -->
      <SummarizeHeading>Projects</SummarizeHeading>
      <SummarizeProject
        v-for="project in resumeProjects.filter(
          (item) => item.on_resume && item.bullets && item.bullets.length > 0,
        )"
        :key="project.title"
        :project="project"
      />

      <!-- Portfolio links -->
      <!-- <div class="mt-2 text-xs font-light italic">
        See all 20+ projects at
        <a class="font-medium" href="https://radison.io#projects"
          >radison.io#projects</a
        >, publications at
        <a class="font-medium" href="https://radison.io/publications"
          >radison.io/publications</a
        >
      </div> -->
    </SummarizePage>
  </div>
</template>

<script setup lang="ts">
import { defaultExperienceFilters } from "~/utils/defaultExperienceFilters";
import { loadResumeData } from "~/summarize/utils/resumeData";

const {
  config: resumeConfig,
  education: resumeEducation,
  experiences: resumeExperiences,
  projects: resumeProjects,
  skillSets: resumeSkillSets,
} = loadResumeData();
</script>
