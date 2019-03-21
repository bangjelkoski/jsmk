<template>
    <div id="video"
        class="bg-gray-800 rounded-lg p-4 mt-4 mx-2 relative w-full md:w-3/4 mx-auto h-0"
        style="padding-bottom: 48.25%">
        <iframe width="100%"
            height="auto"
            :src="`https://www.youtube.com/embed/${video}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            class="w-full h-full absolute left-0 top-0 rounded-lg"></iframe>
    </div>
</template>

<script>
    export default {
      props: {
        video: String
      }
    }
</script>