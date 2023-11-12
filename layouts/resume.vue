<template>
  <div class="p-10 pb-0" id="resume-export">
    <Html data-theme="resume" />

    <ResumeTitle> Radison Akerman </ResumeTitle>
    <ResumeSubtitle>
      rak3rman@gmail.com &#8192;www.rakerman.com &#8192;linkedin.com/in/rakerman
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
    <ResumeEducation
      v-for="item in education
        .filter((e) => e.is_resume)
        .sort((a, b) => {
          let aa = Date.parse(a.end);
          let bb = Date.parse(b.end);
          return (isNaN(bb) ? Date.now() : bb) - (isNaN(aa) ? Date.now() : aa);
        })"
      :edu="item"
    />

    <ResumeHeading> Skills </ResumeHeading>
    <ResumeSkillBlock v-for="item in skills" :block="item" />

    <ResumeHeading> Projects </ResumeHeading>
    <ResumeProject
      v-for="item in projects.filter((e) => e.is_resume)"
      :proj="item"
    />
    <div class="text-xs font-light italic mt-2">
      See all 20+ projects at
      <a class="font-medium" href="https://rakerman.com#projects"
        >rakerman.com#projects</a
      >, publications at
      <a class="font-medium" href="https://rakerman.com/publications"
        >rakerman.com/publications</a
      >
    </div>
  </div>
</template>

<script setup>
import experience from "../assets/experience.json";
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
  let element = document.getElementById("resume-export");
  element.style.width = "1200px";
  var opt = {
    margin: 0.25,
    filename: "radison-akerman-resume.pdf",
    html2canvas: { width: 950, scrollX: 0, scrollY: 0 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
};

onMounted(() => {
  genPDF();
});
</script>