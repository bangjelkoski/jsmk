<template>
    <div class="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
        <div class=" bg-white rounded shadow p-2">
            <div class="w-full h-48 rounded mb-4">
                <img :src="`https://img.youtube.com/vi/${episode.video_id}/0.jpg`"
                    :alt="episode.name"
                    class="rounded h-48 w-full" />
            </div>
            <h2 class="text-blue-500 text-lg text-left cursor-pointer flex flex-wrap justify-between items-center"
                @click="select">
                {{ episode.name }}
                <span class="font-bold text-gray-800 text-lg" v-if="selected" @click.stop="remove">&times;</span>
            </h2>
            <p class="mb-4">
                <span class="px-3 py-1 text-yellow-900 text-sm bg-yellow-500 rounded-lg shadow">{{ episode.runtime }}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        episode: Object
      },

      data: () => ({
          selected: false,
      }),

      methods: {
          select() {
              this.$emit('selected');
              this.selected = true;
          },

          remove() {
              this.$emit('removed');
              this.selected = false;
          }
      },
    }
</script>