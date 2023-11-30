<template>
  <div class="w-[58rem] p-10 pb-0" id="cv-export">
    <Html data-theme="resume" />

    <div style="height: 1205px">
      <ResumeTitle class="-pt-4"> Radison Akerman </ResumeTitle>
      <ResumeSubtitle>
        radison@rakerman.com &#8192;www.rakerman.com
        &#8192;linkedin.com/in/rakerman
      </ResumeSubtitle>

      <ResumeHeading> Education </ResumeHeading>
      <ResumeEducation
        v-for="item in education.sort((a, b) => {
          let aa = Date.parse(a.end);
          let bb = Date.parse(b.end);
          return (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa);
        })"
        :edu="item"
      />

      <ResumeHeading> Professional Experience </ResumeHeading>
      <ResumeExperience
        v-for="item in experience
          .filter((e) => e.tags.includes('professional'))
          .sort((a, b) => {
            let aa = Date.parse(a.end);
            let bb = Date.parse(b.end);
            return (
              (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa)
            );
          })"
        :exp="item"
      />
    </div>

    <div style="height: 1230px">
      <ResumeHeading> Teaching and Mentoring Experience </ResumeHeading>
      <ResumeExperience
        v-for="item in experience
          .filter((e) => e.tags.includes('teach') || e.tags.includes('mentor'))
          .sort((a, b) => {
            let aa = Date.parse(a.end);
            let bb = Date.parse(b.end);
            return (
              (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa)
            );
          })"
        :exp="item"
      />

      <ResumeHeading> Event Operations Experience </ResumeHeading>
      <ResumeExperience
        v-for="item in experience
          .filter((e) => e.tags.includes('events'))
          .sort((a, b) => {
            let aa = Date.parse(a.end);
            let bb = Date.parse(b.end);
            return (
              (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa)
            );
          })"
        :exp="item"
      />

      <ResumeHeading> Honors and Awards </ResumeHeading>
      <ResumeAward
        v-for="item in awards.sort((a, b) => {
          let aa = Date.parse(a.given.slice(-1));
          let bb = Date.parse(b.given.slice(-1));
          return (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa);
        })"
        :award="item"
      />

      <ResumeHeading> Presentations </ResumeHeading>
      <ResumePresentation
        v-for="item in presentations.sort((a, b) => {
          let aa = Date.parse(a.given.slice(-1));
          let bb = Date.parse(b.given.slice(-1));
          return (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa);
        })"
        :pres="item"
      />
      <div class="text-xs font-light italic mt-2">
        See all presentation details at
        <a class="font-medium" href="https://rakerman.com/publications"
          >rakerman.com/publications</a
        >
      </div>
    </div>

    <div>
      <ResumeHeading> Skills </ResumeHeading>
      <ResumeSkillBlock v-for="item in skills" :block="item" />

      <ResumeHeading> Projects </ResumeHeading>
      <ResumeProject
        v-for="item in projects.filter((e) => e.bullets.length > 0)"
        :proj="item"
      />
      <div class="text-xs font-light italic mt-2">
        See all project details at
        <a class="font-medium" href="https://rakerman.com#projects"
          >rakerman.com#projects</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import awards from "../assets/awards.json";
import experience from "../assets/experience.json";
import presentations from "../assets/presentations.json";
import education from "../assets/education.json";
import skills from "../assets/skills.json";
import projects from "../assets/projects.json";

useHead({
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",
      integrity:
        "sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==",
      crossOrigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
  ],
});

const genPDF = () => {
  let element = document.getElementById("cv-export");
  element.style.width = "1200px";
  var opt = {
    margin: [0.3, 0.25, 0.3, 0.25],
    filename: "radison-akerman-cv.pdf",
    html2canvas: { width: 950, scrollX: 0, scrollY: 0 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
};

onMounted(() => {
  // genPDF();
});
</script>