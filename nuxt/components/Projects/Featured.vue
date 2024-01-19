<template>
    <div>
        <div
            class="overflow-hidden lg:bg-transparent mt-6"
            :class="fade ? 'fade-in' : ''"
            v-for="(project, index) in ProjectsFiltered"
        >
            <div class="wrap mx-auto">
                <div class="grid grid-cols-10">
                    <div
                        class="row-span-full col-span-8 md:col-span-6 self-center -m-2"
                        :class="
              index % 2 === 0
                ? 'col-start-1 md:col-start-1'
                : 'col-start-3 md:col-start-5'
            "
                    >
                        <img
                            class="object-cover brightness-50 md:brightness-100 z-0 rounded-lg"
                            :src="project?.media?.desktop_screenshot"
                            v-if="project?.media?.desktop_screenshot"
                            alt=""
                        />
                    </div>
                    <div
                        class="row-span-full col-span-9 md:col-span-4 self-center z-0"
                        :class="
              index % 2 === 0
                ? 'text-right col-end-11 md:col-end-11'
                : 'text-left col-end-9 md:col-end-5'
            "
                    >
                        <h6 class="text-secondary font-mono text-md mb-1 mx-3">
                            {{ project.organization }}
                        </h6>
                        <h6 class="text-neutral text-3xl mb-5 mx-3">
                            {{ project.title }}
                        </h6>
                        <div
                            class="p-4 bg-transparent md:bg-primary-focus backdrop-brightness-[0.4] backdrop-blur-[1.5px] shadow-xl rounded-lg mb-3"
                        >
                            <h6 class="text-accent text-md">
                                {{ project.long_description }}
                            </h6>
                        </div>
                        <div
                            class="flex flex-wrap text-xs text-accent font-light font-mono mb-1"
                            :class="index % 2 === 0 ? 'flex-row-reverse' : ''"
                        >
                            <h6
                                v-for="tool in project.tools"
                                class="pb-0.5"
                                :class="index % 2 === 0 ? 'pr-4' : 'pl-3'"
                            >
                                {{ tool }}
                            </h6>
                        </div>
                        <div
                            class="flex mx-3"
                            :class="index % 2 === 0 ? 'float-right' : 'float-left'"
                        >
                            <ProjectsExtIcons :project="project"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {z} from "zod";
import {sortEventDates} from "~/utils/sortEventDates";
import {Project} from "~/summarize/models/Project";
import ProjectsJSON from "~/summarize/data/projects.json";

type Project = z.infer<typeof Project>;

const ProjectsParsed: Project[] = ProjectsJSON.map((obj: any) =>
    Project.readonly().parse(obj)
);

const ProjectsFiltered: Project[] = ProjectsParsed.filter(
    (e: Project) => e.is_featured
);

defineProps({
    fade: Boolean,
});
</script>