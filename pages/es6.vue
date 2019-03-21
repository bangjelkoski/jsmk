<template>
    <course-wrap :episodes="episodes" />
</template>

<script>
    import courseWrap from '~/components/course_wrap'

    const episodes = [
      {
        name: 'Buba Coreli - Balenciaga',
        runtime: '2:49',
        video_id: 'FmeVHlJOpzQ',
      }
    ]

    export default {
      data: () => ({
        episodes: [...episodes]
      }),

      components: {
        courseWrap
      }
    }
</script>