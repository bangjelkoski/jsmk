<template>
    <div class="py-16">
        <h1 class="text-gray-800 mb-6 text-2xl font-bold">{{ course.name }} <span class="text-sm"
                v-if="course.playlist"> <a :href="`https://www.youtube.com/playlist?list=${course.playlist}`"
                    class="text-blue-500"
                    target="_blank">Плејлиста на youtube</a></span></h1>

        <div class="row"
            v-if="lessons.length > 0">
            <lesson v-for="(lesson, index) in sortedLessons"
                :key="`lesson-${index}`"
                :lesson="lesson"
                @removed="current = null"
                @selected="selected(lesson)" />
        </div>
        <div v-else>
            <h3 class="text-gray-700 font-bold text-lg">Сеуште нема лекции за овој курс.</h3>
        </div>

        <yt-video v-if="current"
            :video="current.video"></yt-video>

    </div>
</template>

<script>
    import lesson from '~/components/lesson'
    import ytVideo from '~/components/video'
    import { scrollIt } from '~/helpers'
    import { mapGetters } from 'vuex'

    export default {
      head() {
        return {
          title: this.course.name
        }
      },

      data: () => ({
        current: null
      }),

      computed: {
        course() {
          return this.$store.getters.course(this.$route.params.slug)
        },

        lessons() {
          return this.course ? this.course.lessons : []
        },

        sortedLessons() {
          return [...this.lessons].sort((a, b) => a.position - b.position)
        }
      },

      methods: {
        selected(lesson) {
          this.current = lesson

          this.$nextTick(() => {
            scrollIt(document.getElementById('video'))
          }, 400)
        }
      },

      components: {
        lesson,
        ytVideo
      }
    }
</script>