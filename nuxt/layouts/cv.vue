<template>
  <div>
    <Html data-theme="resume" />

    <ResumePage :page="1" :total="total_pages">
      <ResumeTitle class="-pt-4"> {{ ConfigParsed.name }} </ResumeTitle>
      <ResumeSubtitle>
        {{ ConfigParsed.email + (ConfigParsed.email ? "&ensp;" : "") }}
        {{ ConfigParsed.website + (ConfigParsed.website ? "&ensp;" : "") }}
        {{ ConfigParsed.linkedin + (ConfigParsed.linkedin ? "&ensp;" : "") }}
      </ResumeSubtitle>

      <ResumeHeading> Education </ResumeHeading>
      <ResumeEducation v-for="obj in EducationParsed" :education="obj" />

      <ResumeHeading> Professional Experience </ResumeHeading>
      <ResumeExperience
        v-for="obj in ExperiencesParsed.filter(
                (e: Experience) => defaultExperienceFilters(e) && e.discipline === 'professional'
              )"
        :experience="obj"
      />
    </ResumePage>

    <ResumePage :page="2" :total="total_pages">
      <ResumeHeading> Teaching and Mentoring Experience </ResumeHeading>
      <ResumeExperience
        v-for="obj in ExperiencesParsed.filter(
                (e: Experience) =>
                  defaultExperienceFilters(e) && e.discipline === 'teaching'
              )"
        :experience="obj"
      />

      <ResumeHeading> Event Operations Experience </ResumeHeading>
      <ResumeExperience
        v-for="obj in ExperiencesParsed.filter(
                (e: Experience) => defaultExperienceFilters(e) && e.discipline === 'operations'
              )"
        :experience="obj"
      />

      <ResumeHeading> Skills </ResumeHeading>
      <ResumeSkillSet v-for="obj in SkillSetsParsed" :skillset="obj" />

      <ResumeHeading> Honors and Awards </ResumeHeading>
      <ResumeAward v-for="obj in AwardsParsed.slice(0, 5)" :award="obj" />
    </ResumePage>

    <ResumePage :page="3" :total="total_pages">
      <ResumeHeading> Honors and Awards (cont.) </ResumeHeading>
      <ResumeAward v-for="obj in AwardsParsed.slice(5)" :award="obj" />

      <ResumeHeading> Presentations </ResumeHeading>
      <ResumePresentation
        v-for="obj in PresentationsParsed"
        :presentation="obj"
      />
      <div class="text-xs font-light italic mt-2">
        See all presentation details at
        <a class="font-medium" href="https://rakerman.com/publications"
          >rakerman.com/publications</a
        >
      </div>

      <ResumeHeading> Projects </ResumeHeading>
      <ResumeProject
        v-for="obj in ProjectsParsed.filter((e: Project) => e.bullets && e.bullets.length > 0)"
        :project="obj"
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

<script setup lang="ts">
import { z } from "zod";
import { defaultExperienceFilters } from "~/utils/defaultExperienceFilters";

import { Award } from "~/summarize/models/Award";
import { Education } from "~/summarize/models/Education";
import { Experience } from "~/summarize/models/Experience";
import { Presentation } from "~/summarize/models/Presentation";
import { Project } from "~/summarize/models/Project";
import { SkillSet } from "~/summarize/models/SkillSet";
import { Config } from "~/summarize/models/Config";

type Award = z.infer<typeof Award>;
type Education = z.infer<typeof Education>;
type Experience = z.infer<typeof Experience>;
type Presentation = z.infer<typeof Presentation>;
type Project = z.infer<typeof Project>;
type SkillSet = z.infer<typeof SkillSet>;
type Config = z.infer<typeof Config>;

import AwardsJSON from "~/summarize/data/awards.json";
import EducationJSON from "~/summarize/data/education.json";
import ExperiencesJSON from "~/summarize/data/experiences.json";
import PresentationsJSON from "~/summarize/data/presentations.json";
import ProjectsJSON from "~/summarize/data/projects.json";
import SkillSetsJSON from "~/summarize/data/skillsets.json";
import ConfigJSON from "~/summarize/data/config.json";

const AwardsParsed: Award[] = AwardsJSON.map((e: any) =>
  Award.readonly().parse(e)
);
const EducationParsed = EducationJSON.map((e: any) =>
  Education.readonly().parse(e)
);
const ExperiencesParsed = ExperiencesJSON.map((e: any) =>
  Experience.readonly().parse(e)
);
const PresentationsParsed = PresentationsJSON.map((e: any) =>
  Presentation.readonly().parse(e)
);
const ProjectsParsed = ProjectsJSON.map((e: any) =>
  Project.readonly().parse(e)
);
const SkillSetsParsed = SkillSetsJSON.map((e: any) =>
  SkillSet.readonly().parse(e)
);
const ConfigParsed = Config.readonly().parse(ConfigJSON);

const total_pages = 3;

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