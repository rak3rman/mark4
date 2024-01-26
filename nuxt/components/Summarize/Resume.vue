<template>
  <div>
    <SummarizePage>
      <SummarizeTitle> {{ ConfigParsed.name }}</SummarizeTitle>
      <SummarizeSubtitle>
        {{ ConfigParsed.email + (ConfigParsed.email ? "&ensp;" : "") }}
        {{ ConfigParsed.website + (ConfigParsed.website ? "&ensp;" : "") }}
        {{ ConfigParsed.linkedin + (ConfigParsed.linkedin ? "&ensp;" : "") }}
      </SummarizeSubtitle>

      <SummarizeHeading> Experience</SummarizeHeading>
      <SummarizeExperience
        v-for="obj in ExperiencesParsed.filter(
          (e: Experience) => defaultExperienceFilters(e) && e.on_resume,
        )"
        :experience="obj"
      />

      <SummarizeHeading> Education</SummarizeHeading>
      <SummarizeEducation
        v-for="obj in EducationParsed.filter((e) => e.on_resume)"
        :education="obj"
      />

      <SummarizeHeading> Skills</SummarizeHeading>
      <SummarizeSkillSet v-for="obj in SkillSetsParsed" :skillset="obj" />

      <SummarizeHeading> Projects</SummarizeHeading>
      <SummarizeProject
        v-for="obj in ProjectsParsed.filter(
          (e: Project) => e.on_resume && e.bullets && e.bullets.length > 0,
        )"
        :project="obj"
      />
      <div class="mt-2 text-xs font-light italic">
        See all 20+ projects at
        <a class="font-medium" href="https://rakerman.com#projects"
          >rakerman.com#projects</a
        >, publications at
        <a class="font-medium" href="https://rakerman.com/publications"
          >rakerman.com/publications</a
        >
      </div>
    </SummarizePage>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { sortEventDates } from "~/utils/sortEventDates";
import { defaultExperienceFilters } from "~/utils/defaultExperienceFilters";

import { Education } from "~/summarize/models/Education";
import { Experience } from "~/summarize/models/Experience";
import { Project } from "~/summarize/models/Project";
import { SkillSet } from "~/summarize/models/SkillSet";
import { Config } from "~/summarize/models/Config";

type Education = z.infer<typeof Education>;
type Experience = z.infer<typeof Experience>;
type Project = z.infer<typeof Project>;
type SkillSet = z.infer<typeof SkillSet>;
type Config = z.infer<typeof Config>;

import EducationJSON from "~/summarize/data/education.json";
import ExperiencesJSON from "~/summarize/data/experiences.json";
import ProjectsJSON from "~/summarize/data/projects.json";
import SkillSetsJSON from "~/summarize/data/skillsets.json";
import ConfigJSON from "~/summarize/data/config.json";

const EducationParsed: Education[] = EducationJSON.map((obj: any) =>
  Education.readonly().parse(obj),
).sort(sortEventDates);
const ExperiencesParsed: Experience[] = ExperiencesJSON.map((obj: any) =>
  Experience.readonly().parse(obj),
).sort(sortEventDates);
const ProjectsParsed: Project[] = ProjectsJSON.map((obj: any) =>
  Project.readonly().parse(obj),
);
const SkillSetsParsed: SkillSet[] = SkillSetsJSON.map((obj: any) =>
  SkillSet.readonly().parse(obj),
);
const ConfigParsed: Config = Config.readonly().parse(ConfigJSON);

const route = useRoute();
</script>
