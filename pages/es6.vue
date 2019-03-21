<template>
    <course-wrap :episodes="episodes" />
</template>

<script>
    import courseWrap from '~/components/course_wrap'

    const episodes = [
      {
        name: '',
        runtime: '',
        image: '',
        src: ''
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