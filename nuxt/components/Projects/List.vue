<template>
    <div class="flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-accent/30">
                    <thead>
                    <tr class="text-accent">
                        <th
                            scope="col"
                            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 md:pl-0"
                        >
                            Period
                        </th>
                        <th
                            scope="col"
                            class="py-3.5 px-3 text-left text-sm font-semibold"
                        >
                            Title
                        </th>
                        <th
                            scope="col"
                            class="py-3.5 px-3 text-left text-sm font-semibold hidden md:table-cell"
                        >
                            Made at
                        </th>
                        <th
                            scope="col"
                            class="py-3.5 px-3 text-left text-sm font-semibold"
                        >
                            Built with
                        </th>
                        <th
                            scope="col"
                            class="py-3.5 px-3 text-left text-sm font-semibold hidden md:table-cell"
                        >
                            Link
                        </th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-accent/20">
                    <tr
                        v-for="project in ProjectsParsed"
                        :key="project.title"
                        @click="emit('quick', project)"
                    >
                        <td
                            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 md:pl-0"
                            :class="
                              project.dates[project.dates.length - 1].end !== undefined
                                ? 'text-secondary'
                                : 'text-success'
                            "
                        >
                            {{
                                formatEventDates(project.dates)
                            }}
                        </td>
                        <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral">
                            {{ project.title }}
                            <RectangleGroupIcon
                                class="h-4 w-4 text-secondary inline -mt-[3px]"
                                aria-hidden="true"
                                v-if="project.type === 'website'"
                            />
                            <ComputerDesktopIcon
                                class="h-4 w-4 text-secondary inline -mt-[3px]"
                                aria-hidden="true"
                                v-else-if="project.type === 'application'"
                            />
                            <PuzzlePieceIcon
                                class="h-4 w-4 text-secondary inline -mt-[3px]"
                                aria-hidden="true"
                                v-else-if="project.type === 'microservice'"
                            />
                            <TagIcon
                                class="h-4 w-4 text-secondary inline -mt-[3px]"
                                aria-hidden="true"
                                v-else-if="project.type === 'package'"
                            />
                            <CpuChipIcon
                                class="h-4 w-4 text-secondary inline -mt-[3px]"
                                aria-hidden="true"
                                v-else-if="project.type === 'electronics'"
                            />
                            <WrenchIcon
                                class="h-4 w-4 text-secondary inline -mt-[3px]"
                                aria-hidden="true"
                                v-else-if="project.type === 'utility'"
                            />
                            <FolderIcon
                                class="h-4 w-4 text-secondary inline -mt-[3px]"
                                aria-hidden="true"
                                v-else
                            />
                            <span class="table-cell md:hidden text-accent font-light">
                              {{ project.organization }}
                            </span>
                        </td>
                        <td
                            class="whitespace-nowrap py-4 px-3 text-sm text-accent hidden md:table-cell"
                        >
                            {{ project.organization }}
                        </td>
                        <td
                            class="whitespace-nowrap py-4 px-3 text-xs text-accent font-mono text-accent font-light"
                        >
                            <div class="flex flex-wrap">
                                <h6 v-for="tool in project.tools" :class="'pr-4'">
                                    {{ tool }}
                                </h6>
                            </div>
                        </td>
                        <td
                            class="whitespace-nowrap py-4 px-3 text-sm text-accent hidden md:table-cell"
                        >
                            <div class="flex items-center">
                                <ProjectsExtIcons :project="project"/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    FolderIcon,
    CpuChipIcon,
    ComputerDesktopIcon,
    RectangleGroupIcon,
    PuzzlePieceIcon,
    WrenchIcon,
    TagIcon,
} from "@heroicons/vue/24/outline";
import {DateTime} from "luxon";
import {z} from "zod";
import {sortEventDates} from "~/utils/sortEventDates";
import {Project} from "~/summarize/models/Project";
import ProjectsJSON from "~/summarize/data/projects.json";

type Project = z.infer<typeof Project>;

const ProjectsParsed: Project[] = ProjectsJSON.map((obj: any) =>
    Project.readonly().parse(obj)
).sort(sortEventDates);

const emit = defineEmits(["quick"]);
</script>