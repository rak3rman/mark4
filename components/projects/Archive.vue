<template>
  <div class="flex flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-accent/30">
          <thead>
          <tr class="text-accent">
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 md:pl-0">Period</th>
            <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold">Title</th>
            <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold hidden md:table-cell">Made at</th>
            <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold">Built with</th>
            <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold">Link</th>
          </tr>
          </thead>
          <tbody class="divide-y divide-accent/20">
          <tr v-for="project in filtered" :key="project.title" class="">
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-secondary sm:pl-6 md:pl-0">{{ DateTime.fromMillis(Date.parse(project.start)).toFormat('LLL yyyy') }}</td>
            <td class="whitespace-nowrap py-4 px-3 text-sm text-neutral">{{ project.title }} <span class="table-cell md:hidden text-accent font-light">@ {{ project.made_at }}</span></td>
            <td class="whitespace-nowrap py-4 px-3 text-sm text-accent hidden md:table-cell">{{ project.made_at }}</td>
            <td class="whitespace-nowrap py-4 px-3 text-xs text-accent font-mono text-accent font-light"><div class="flex flex-wrap"><h6 v-for="tool in project.tools" :class="'pr-4'">{{ tool }}</h6></div></td>
            <td class="whitespace-nowrap py-4 px-3 text-sm text-accent"><div class="flex items-center"><ProjectsExtIcons :project="project" /></div></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import raw from '../../assets/projects.json'

export default {
  data () {
    return {
      DateTime: DateTime
    }
  },
  computed: {
    filtered() {
      return raw
          .sort((a,b) => {
            return Date.parse(b.start) - Date.parse(a.start)
          })
    },
  },
}
</script>