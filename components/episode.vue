<template>
    <div class="col"
        @click="select">
        <div class="bg-white rounded shadow p-2">
            <div class="w-full h-48 rounded mb-4">
                <img :src="`https://img.youtube.com/vi/${episode.video}/hqdefault.jpg`"
                    :alt="episode.name"
                    class="rounded h-48 w-full" />
            </div>
            <h2 class="text-gray-800 text-xl px-1 cursor-pointer">
                {{ episode.name }}
            </h2>
            <p class="px-1 text-gray-500 text-sm mb-4">Времетраење: {{ episode.runtime }}</p>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        episode: Object
      },

      data: () => ({
        selected: false
      }),

      methods: {
        select() {
          this.$emit('selected')
          this.selected = true
        },

        remove() {
          this.$emit('removed')
          this.selected = false
        }
      }
    }
</script>