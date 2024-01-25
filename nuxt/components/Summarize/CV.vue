<template>
  <div>
    <SummarizePage :page="1" :total="total_pages">
      <SummarizeTitle> {{ ConfigParsed.name }}</SummarizeTitle>
      <SummarizeSubtitle>
        {{ ConfigParsed.email + (ConfigParsed.email ? "&ensp;" : "") }}
        {{ ConfigParsed.website + (ConfigParsed.website ? "&ensp;" : "") }}
        {{ ConfigParsed.linkedin + (ConfigParsed.linkedin ? "&ensp;" : "") }}
      </SummarizeSubtitle>

      <SummarizeHeading> Education</SummarizeHeading>
      <SummarizeEducation v-for="obj in EducationParsed" :education="obj" />

      <SummarizeHeading> Professional Experience</SummarizeHeading>
      <SummarizeExperience
        v-for="obj in ExperiencesParsed.filter(
          (e: Experience) =>
            defaultExperienceFilters(e) && e.discipline === 'professional',
        )"
        :experience="obj"
      />
    </SummarizePage>

    <SummarizePage :page="2" :total="total_pages">
      <SummarizeHeading>
        Teaching and Mentoring scriptExperience
      </SummarizeHeading>
      <SummarizeExperience
        v-for="obj in ExperiencesParsed.filter(
          (e: Experience) =>
            defaultExperienceFilters(e) && e.discipline === 'teaching',
        )"
        :experience="obj"
      />

      <SummarizeHeading> Event Operations Experience</SummarizeHeading>
      <SummarizeExperience
        v-for="obj in ExperiencesParsed.filter(
          (e: Experience) =>
            defaultExperienceFilters(e) && e.discipline === 'operations',
        )"
        :experience="obj"
      />

      <SummarizeHeading> Skills</SummarizeHeading>
      <SummarizeSkillSet v-for="obj in SkillSetsParsed" :skillset="obj" />

      <SummarizeHeading> Honors and Awards</SummarizeHeading>
      <SummarizeAward v-for="obj in AwardsParsed.slice(0, 5)" :award="obj" />
    </SummarizePage>

    <SummarizePage :page="3" :total="total_pages">
      <SummarizeHeading> Honors and Awards (cont.)</SummarizeHeading>
      <SummarizeAward v-for="obj in AwardsParsed.slice(5)" :award="obj" />

      <SummarizeHeading> Presentations</SummarizeHeading>
      <SummarizePresentation
        v-for="obj in PresentationsParsed"
        :presentation="obj"
      />
      <div class="mt-2 text-xs font-light italic">
        See all presentation details at
        <a class="font-medium" href="https://rakerman.com/publications"
          >rakerman.com/publications</a
        >
      </div>

      <SummarizeHeading> Projects</SummarizeHeading>
      <SummarizeProject
        v-for="obj in ProjectsParsed.filter(
          (e: Project) => e.bullets && e.bullets.length > 0,
        )"
        :project="obj"
        show-subheader
      />
      <div class="mt-2 text-xs font-light italic">
        See all project details at
        <a class="font-medium" href="https://rakerman.com#projects"
          >rakerman.com#projects</a
        >
      </div>
    </SummarizePage>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { sortEventDates } from "~/utils/sortEventDates";
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

const AwardsParsed: Award[] = AwardsJSON.map((obj: any) =>
  Award.readonly().parse(obj),
).sort(sortEventDates);
const EducationParsed: Education[] = EducationJSON.map((obj: any) =>
  Education.readonly().parse(obj),
).sort(sortEventDates);
const ExperiencesParsed: Experience[] = ExperiencesJSON.map((obj: any) =>
  Experience.readonly().parse(obj),
).sort(sortEventDates);
const PresentationsParsed: Presentation[] = PresentationsJSON.map((obj: any) =>
  Presentation.readonly().parse(obj),
).sort(sortEventDates);
const ProjectsParsed: Project[] = ProjectsJSON.map((obj: any) =>
  Project.readonly().parse(obj),
).sort(sortEventDates);
const SkillSetsParsed: SkillSet[] = SkillSetsJSON.map((obj: any) =>
  SkillSet.readonly().parse(obj),
);
const ConfigParsed: Config = Config.readonly().parse(ConfigJSON);

const route = useRoute();

const total_pages = 3;
</script>
