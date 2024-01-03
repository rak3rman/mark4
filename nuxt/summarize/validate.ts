import { Award } from "./models/Award";
import { Education } from "./models/Education";
import { Experience } from "./models/Experience";
import { Presentation } from "./models/Presentation";
import { Project } from "./models/Project";
import { SkillSet } from "./models/SkillSet";
import { Config } from "./models/Config";

import * as AwardJSON from "./data/awards.json";
import * as EducationJSON from "./data/education.json";
import * as ExperienceJSON from "./data/experiences.json";
import * as PresentationJSON from "./data/presentations.json";
import * as ProjectJSON from "./data/projects.json";
import * as SkillSetJSON from "./data/skillsets.json";
import * as ConfigJSON from "./data/config.json";

AwardJSON.forEach((e) => Award.parse(e));
EducationJSON.forEach((e) => Education.parse(e));
ExperienceJSON.forEach((e) => Experience.parse(e));
PresentationJSON.forEach((e) => Presentation.parse(e));
ProjectJSON.forEach((e) => Project.parse(e));
SkillSetJSON.forEach((e) => SkillSet.parse(e));
Config.parse(ConfigJSON);