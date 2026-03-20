<template>
  <div class="w-[54rem]">
    <div
      class="mt-1 font-serif text-[4.2rem] font-semibold leading-[0.92] tracking-tight text-secondary"
    >
      {{ resumeConfig.name }}
    </div>

    <ul class="mt-2 space-y-1.5">
      <li
        v-for="line in previewTextLines(contactLine, 1, 34)"
        :key="`contact-${line}`"
        class="flex"
      >
        <div
          class="h-2.5 rounded-full bg-primary/30"
          :style="{ width: previewBulletWidth(line) }"
        />
      </li>
    </ul>

    <div
      class="mt-4 font-serif text-[1.55rem] font-semibold tracking-tight text-secondary"
    >
      Experience
    </div>

    <div
      v-for="experience in resumeExperiences"
      :key="`${experience.organization}-${experience.title}`"
      class="mt-2.5"
    >
      <div class="text-[1.18rem] font-bold leading-[1.15] text-primary">
        {{ experience.title }}
        <span class="text-accent">@ {{ experience.organization }}</span>
      </div>

      <div class="mb-2 font-mono text-[0.98rem] leading-tight text-primary/90">
        {{ formatEventDates(experience.dates, false) }} //
        {{ experience.location }}
      </div>

      <ul class="space-y-1.5">
        <li
          v-for="bullet in experiencePreviewBullets(experience.bullets)"
          :key="`${experience.title}-${bullet.text}`"
          class="flex"
        >
          <div
            class="h-2.5 rounded-full bg-primary/30"
            :style="{ width: previewBulletWidth(bullet.text) }"
          />
        </li>
      </ul>
    </div>

    <div
      class="mt-4 font-serif text-[1.55rem] font-semibold tracking-tight text-secondary"
    >
      Education
    </div>

    <div
      v-for="education in resumeEducation"
      :key="education.organization"
      class="mt-2.5"
    >
      <div class="text-[1.18rem] font-bold leading-[1.15] text-primary">
        {{ education.organization }}
      </div>

      <div
        class="mb-1.5 font-mono text-[0.98rem] leading-tight text-primary/90"
      >
        {{ formatEventDates(education.dates, true) }} //
        {{ education.location }}
      </div>

      <ul class="space-y-1.5">
        <li
          v-for="line in previewTextLines(education.description, 2, 44)"
          :key="`${education.organization}-${line}`"
          class="flex"
        >
          <div
            class="h-2.5 rounded-full bg-primary/30"
            :style="{ width: previewBulletWidth(line) }"
          />
        </li>
      </ul>
    </div>

    <div
      class="mt-4 font-serif text-[1.55rem] font-semibold tracking-tight text-secondary"
    >
      Skills
    </div>

    <div
      v-for="skillSet in resumeSkillSets"
      :key="skillSet.set"
      class="mt-2 grid grid-cols-[auto,1fr] items-start gap-x-2 gap-y-0.5"
    >
      <div class="text-[1.08rem] font-semibold leading-tight text-primary">
        {{ skillSet.set }}
      </div>

      <ul class="space-y-1.5 pt-0.5">
        <li
          v-for="line in previewTextLines(skillSet.skills.join(', '), 2, 40)"
          :key="`${skillSet.set}-${line}`"
          class="flex"
        >
          <div
            class="h-2.5 rounded-full bg-primary/30"
            :style="{ width: previewBulletWidth(line) }"
          />
        </li>
      </ul>
    </div>

    <div
      class="mt-4 font-serif text-[1.55rem] font-semibold tracking-tight text-secondary"
    >
      Projects
    </div>

    <div v-for="project in resumeProjects" :key="project.title" class="mt-2.5">
      <div class="text-[1.18rem] font-bold leading-[1.15] text-primary">
        {{ project.title }}
      </div>

      <div class="mb-2 font-mono text-[0.98rem] leading-tight text-primary/90">
        {{ formatProjectMeta(project) }}
      </div>

      <ul class="space-y-1.5">
        <li
          v-for="bullet in project.bullets"
          :key="`${project.title}-${bullet.text}`"
          class="flex"
        >
          <div
            class="h-2.5 rounded-full bg-primary/30"
            :style="{ width: previewBulletWidth(bullet.text) }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatEventDates } from "~/utils/formatEventDates";
import { defaultExperienceFilters } from "~/utils/defaultExperienceFilters";
import {
  loadResumeData,
  type ResumeProject,
} from "~/summarize/utils/resumeData";

const {
  config: resumeConfig,
  education,
  experiences,
  projects,
  skillSets: resumeSkillSets,
} = loadResumeData();

const resumeEducation = education.filter((item) => item.on_resume);
const resumeExperiences = experiences.filter(
  (item) => defaultExperienceFilters(item) && item.on_resume,
);
const resumeProjects = projects.filter(
  (item) => item.on_resume && item.bullets && item.bullets.length > 0,
);
const contactLine = [
  resumeConfig.email,
  resumeConfig.website,
  resumeConfig.linkedin,
]
  .filter(Boolean)
  .join(" // ");

interface PreviewBullet {
  text: string;
}

/**
 * Drop the last experience bullet so the preview stays legible at small scale.
 *
 * @param {readonly PreviewBullet[]} bullets - Real bullet content for the entry.
 * @returns {PreviewBullet[]} Bullets represented in the preview.
 *
 * @example
 * experiencePreviewBullets([{ text: "One" }, { text: "Two" }]).length // => 1
 */
function experiencePreviewBullets(
  bullets: readonly PreviewBullet[],
): PreviewBullet[] {
  return bullets.slice(0, Math.max(bullets.length - 1, 0));
}

/**
 * Scale placeholder widths directly from the real bullet character count.
 *
 * @param {string} text - Bullet text represented by the preview bar.
 * @returns {string} CSS width value for the preview row.
 *
 * @example
 * previewBulletWidth("Built a data pipeline") // => "21ch"
 */
function previewBulletWidth(text: string): string {
  return `${Math.min(Math.max(text.length, 18), 84)}ch`;
}

/**
 * Split preview text into a small number of line-shaped chunks so the bars
 * track the source copy more closely.
 *
 * @param {string} text - Source text represented by the preview.
 * @param {number} maxLines - Maximum number of preview rows to render.
 * @param {number} targetLength - Preferred characters per row before wrapping.
 * @returns {string[]} Preview line segments.
 *
 * @example
 * previewTextLines("alpha beta gamma", 2, 8) // => ["alpha", "beta gamma"]
 */
function previewTextLines(
  text: string,
  maxLines: number,
  targetLength: number,
): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);

  if (!words.length) {
    return Array.from({ length: maxLines }, () => " ".repeat(18));
  }

  const lines: string[] = [];
  let currentLine = "";

  for (const [index, word] of words.entries()) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;

    if (candidate.length <= targetLength || !currentLine) {
      currentLine = candidate;
      continue;
    }

    lines.push(currentLine);

    if (lines.length === maxLines - 1) {
      const remainingWords = [word, ...words.slice(index + 1)];

      lines.push(remainingWords.join(" "));
      return lines.slice(0, maxLines);
    }

    currentLine = word;
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  while (lines.length < maxLines) {
    lines.push(lines[lines.length - 1]);
  }

  return lines.slice(0, maxLines);
}

/**
 * Build the compact metadata line for a project preview entry.
 *
 * @param {ResumeProject} project - Project being rendered.
 * @returns {string} Condensed project metadata.
 *
 * @example
 * formatProjectMeta(project)
 */
function formatProjectMeta(project: ResumeProject): string {
  const parts = [formatEventDates(project.dates, false)];

  if (project.media?.external) {
    parts.push(project.media.external.replace(/(^\w+:|^)\/\//, ""));
  }

  return parts.join(" // ");
}
</script>
