import { z } from "zod";
import { sortEventDates } from "~/utils/sortEventDates";
import { Config } from "~/summarize/models/Config";
import { Education } from "~/summarize/models/Education";
import { Experience } from "~/summarize/models/Experience";
import { Project } from "~/summarize/models/Project";
import { SkillSet } from "~/summarize/models/SkillSet";

import ConfigJSON from "~/summarize/data/config.json";
import EducationJSON from "~/summarize/data/education.json";
import ExperiencesJSON from "~/summarize/data/experiences.json";
import ProjectsJSON from "~/summarize/data/projects.json";
import SkillSetsJSON from "~/summarize/data/skillsets.json";

const EducationList = z.array(Education.readonly());
const ExperienceList = z.array(Experience.readonly());
const ProjectList = z.array(Project.readonly());
const SkillSetList = z.array(SkillSet.readonly());

export type ResumeEducation = z.infer<typeof Education>;
export type ResumeExperience = z.infer<typeof Experience>;
export type ResumeProject = z.infer<typeof Project>;
export type ResumeSkillSet = z.infer<typeof SkillSet>;
export type ResumeConfig = z.infer<typeof Config>;

export interface ResumeData {
  config: ResumeConfig;
  education: ResumeEducation[];
  experiences: ResumeExperience[];
  projects: ResumeProject[];
  skillSets: ResumeSkillSet[];
}

/**
 * Parse and normalize the data shared by resume renderers.
 *
 * @returns {ResumeData} Resume data ready for presentation.
 *
 * @example
 * const { experiences } = loadResumeData();
 */
export function loadResumeData(): ResumeData {
  return {
    config: Config.readonly().parse(ConfigJSON),
    education: EducationList.parse(EducationJSON).sort(sortEventDates),
    experiences: ExperienceList.parse(ExperiencesJSON).sort(sortEventDates),
    projects: ProjectList.parse(ProjectsJSON),
    skillSets: SkillSetList.parse(SkillSetsJSON),
  };
}
