<!--
  Summarize CV Component
  Multi-page comprehensive CV layout
  
  Features:
  - Multi-page CV format (3 pages)
  - Complete professional history
  - Separate sections for professional and teaching experience
  - Awards, skills, presentations, and projects
  - Links to full portfolio and publications
  - Academic CV format with comprehensive details
-->
<template>
  <div>
    <!-- Page 1: Contact, Education, Professional Experience -->
    <SummarizePage :page="1" :total="total_pages">
      <!-- Personal header -->
      <SummarizeTitle>{{ ConfigParsed.name }}</SummarizeTitle>
      <SummarizeSubtitle>
        {{ ConfigParsed.email + (ConfigParsed.email ? "&ensp;" : "") }}
        {{ ConfigParsed.website + (ConfigParsed.website ? "&ensp;" : "") }}
        {{ ConfigParsed.linkedin + (ConfigParsed.linkedin ? "&ensp;" : "") }}
      </SummarizeSubtitle>

      <!-- Education section -->
      <SummarizeHeading>Education</SummarizeHeading>
      <SummarizeEducation v-for="obj in EducationParsed" :education="obj" />

      <!-- Professional experience section -->
      <SummarizeHeading>Professional Experience</SummarizeHeading>
      <SummarizeExperience
        v-for="obj in ExperiencesParsed.filter(
          (e: Experience) =>
            defaultExperienceFilters(e) && e.discipline === 'professional',
        )"
        :experience="obj"
      />
    </SummarizePage>

    <!-- Page 2: Teaching, Awards -->
    <SummarizePage :page="2" :total="total_pages">
      <!-- Teaching and mentoring section -->
      <SummarizeHeading>Teaching and Mentoring</SummarizeHeading>
      <SummarizeExperience
        v-for="obj in ExperiencesParsed.filter(
          (e: Experience) =>
            defaultExperienceFilters(e) && e.discipline === 'teaching',
        )"
        :experience="obj"
      />

      <!-- Awards section -->
      <SummarizeHeading>Honors and Awards</SummarizeHeading>
      <SummarizeAward v-for="obj in AwardsParsed" :award="obj" />
    </SummarizePage>

    <!-- Page 3: Skills, Presentations, Projects -->
    <SummarizePage :page="3" :total="total_pages">
      <!-- Skills section -->
      <SummarizeHeading>Skills</SummarizeHeading>
      <SummarizeSkillSet v-for="obj in SkillSetsParsed" :skillset="obj" />

      <!-- Presentations section -->
      <SummarizeHeading>Presentations</SummarizeHeading>
      <SummarizePresentation
        v-for="obj in PresentationsParsed"
        :presentation="obj"
      />
      <div class="mt-2 text-xs font-light italic">
        See all presentation details at
        <a class="font-medium" href="https://radison.io/publications"
          >radison.io/publications</a
        >
      </div>

      <!-- Projects section -->
      <SummarizeHeading>Projects</SummarizeHeading>
      <SummarizeProject
        v-for="obj in ProjectsParsed.filter(
          (e: Project) => e.bullets && e.bullets.length > 0,
        )"
        :project="obj"
        show-subheader
      />
      <div class="mt-2 text-xs font-light italic">
        See all project details at
        <a class="font-medium" href="https://radison.io#projects"
          >radison.io#projects</a
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
