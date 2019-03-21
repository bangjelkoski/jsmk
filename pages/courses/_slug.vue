<template>
    <div class="py-16">
        <h1 class="text-gray-800 mb-6 text-2xl font-bold">Курс - {{ course.name }}</h1>

        <div class="mx-0 md:-mx-4">
            <episode v-for="(episode, index) in episodes"
                :key="`episode-${index}`"
                :episode="episode"
                @removed="current = null"
                @selected="selected(episode)" />

            <yt-video v-if="current"
                :video="current.video_id"></yt-video>
        </div>
    </div>
</template>

<script>
    import episode from '~/components/episode'
    import ytVideo from '~/components/video'
    import { scrollIt } from '~/helpers'
    import { mapGetters } from 'vuex'

    export default {
      data: () => ({
        current: null
      }),

      computed: {
        course() {
          return this.$store.getters.course(this.$route.params.slug)
        },

        episodes() {
          return this.course ? this.course.episodes : []
        }
      },

      methods: {
        selected(episode) {
          this.current = episode

          this.$nextTick(() => {
            scrollIt(document.getElementById('video'))
          }, 400)
        }
      },

      components: {
        episode,
        ytVideo
      }
    }
</script>