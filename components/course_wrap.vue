<template>
    <div class="-mx-4">
        <episode v-for="(episode, index) in episodes"
            :key="`episode-${index}`"
            :episode="episode"
            @select="current = $event" />
    </div>
</template>

<script>
    import episode from '~/components/episode'

    export default {
      props: {
        episodes: Array
      },

      data: () => ({
        current: null
      }),

      components: {
        episode
      }
    }
</script>