<template>
    <div class="col"
        @click="goToCourse">
        <div class="bg-white rounded shadow p-2">
            <div class="w-full h-48 rounded mb-4 relative">
                <img :src="course.image"
                    :alt="course.name"
                    class="rounded h-48 w-full course-img" />
                <span class="absolute top-0 right-0 mr-2 mt-2 text-sm font-bold px-3 py-1 text-white bg-teal-500 rounded-lg capitalize shadow-lg">{{ course.level }}</span>
            </div>
            <h2 class="text-gray-800 text-xl px-1 cursor-pointer">
                {{ course.name }}

            </h2>
            <p class="px-1 text-gray-500 text-sm mb-4 flex justify-between flex-wrap items-center"
                v-if="course.lessons.length > 0">
                <span>Број на лекции: {{ course.lessons.length }}</span>
                <span class="font-bold px-2 text-xs text-white bg-red-500 rounded-lg"
                    v-if="hasNewlessons">Нови Лекции!</span>
            </p>
            <p class="px-1 text-red-400 text-xs mb-4 font-bold"
                v-else>
                Овој курс сеуште нема лекции.
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
        hasNewlessons() {
          const today = moment()

          const lesson = this.course.lessons.find(lesson => {
            const lessonCreationTime = moment(lesson.created, 'YYYY/MM/DD')
            const diff = today.diff(lessonCreationTime, 'days')
            return diff > 3
          })

          return lesson ? true : false
        }
      },

      methods: {
        goToCourse() {
          return this.$router.push({ name: 'courses-slug', params: { slug: this.course.slug } })
        }
      }
    }
</script>