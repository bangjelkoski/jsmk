<template>
    <div class="col"
        @click="select">
        <div class="bg-white rounded shadow p-2">
            <div class="w-full h-48 rounded mb-4">
                <img :src="`https://img.youtube.com/vi/${lesson.video}/hqdefault.jpg`"
                    :alt="lesson.name"
                    class="rounded h-48 w-full" />
            </div>
            <h2 class="text-gray-800 text-xl px-1 cursor-pointer">
                {{ lesson.name }}
            </h2>
            <p class="px-1 text-gray-500 text-sm mb-4 flex flex-wrap items-center justify-between">
                <span>Времетраење: {{ lesson.runtime }}</span>
                <span class="font-bold px-2 text-xs text-white bg-red-500 rounded-lg"
                    v-if="isNew">Новo!</span>
            </p>
        </div>
    </div>
</template>

<script>
    const moment = require('moment')

    export default {
      props: {
        lesson: Object
      },

      data: () => ({
        selected: false
      }),

      computed: {
        isNew() {
          const today = moment()
          const lessonCreationTime = moment(this.lesson.created, 'YYYY/MM/DD')

          return today.diff(lessonCreationTime, 'days') > 3
        }
      },

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