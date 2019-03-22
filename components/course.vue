<template>
    <div class="col"
        @click="goToCourse">
        <div class="bg-white rounded shadow p-2">
            <div class="w-full h-48 rounded mb-4 relative">
                <img :src="course.image"
                    :alt="course.name"
                    class="rounded h-48 w-full" />
                <span class="absolute top-0 right-0 mr-2 mt-2 text-sm font-bold px-3 py-1 text-white bg-teal-500 rounded-lg capitalize">{{ course.level }}</span>
            </div>
            <h2 class="text-gray-800 text-xl px-1 cursor-pointer">
                {{ course.name }}

            </h2>
            <p class="px-1 text-gray-500 text-sm mb-4 flex justify-between flex-wrap items-center">
                <span>Број на лекции: {{ course.episodes.length || 0 }}</span>
                <span class="font-bold px-2 text-xs text-white bg-red-500 rounded-lg"
                    v-if="hasNewEpisodes">Нови Епизоди!</span>
            </p>
        </div>
    </div>
</template>

<script>
    const moment = require('moment')

    export default {
      props: {
        course: Object
      },

      computed: {
        hasNewEpisodes() {
          const today = moment()

          const episode = this.course.episodes.find(episode => {
            const episodeCreationTime = moment(episode.created, 'YYYY/MM/DD')
            const diff = today.diff(episodeCreationTime, 'days')
            return diff > 3
          })

          return episode ? true : false
        }
      },

      methods: {
        goToCourse() {
          return this.$router.push({ name: 'courses-slug', params: { slug: this.course.slug } })
        }
      }
    }
</script>