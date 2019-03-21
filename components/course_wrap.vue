<template>
    <div class="-mx-4">
        <episode v-for="(episode, index) in episodes"
            :key="`episode-${index}`"
            :episode="episode"
            @removed="current = null"
            @selected="selected(episode)" />

        <div id="video" class="bg-gray-800 rounded-lg p-4 mt-4 mx-2 relative w-full md:w-3/4 mx-auto h-0" v-if="current" style="padding-bottom: 56.25%">
          <iframe width="100%" height="auto" :src="`https://www.youtube.com/embed/${current.video_id}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="w-full h-full absolute left-0 top-0 rounded-lg"></iframe>
        </div>

    </div>
</template>

<script>
    import episode from '~/components/episode'

    const scrollIt = element => {
        const rect = element.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: rect.top + scrollTop,
        });
    };

    export default {
      props: {
        episodes: Array
      },

      data: () => ({
        current: null
      }),

      methods: {
        selected(episode) {
          this.current = episode;

          this.$nextTick(() => {
            scrollIt(document.getElementById('video'));
          }, 400)
        }
      },

      components: {
        episode
      }
    }
</script>