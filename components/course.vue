<template>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 cursor-pointer"
        @click="goToCourse">
        <div class="bg-white rounded shadow p-2">
            <div class="w-full h-48 rounded mb-4">
                <img :src="course.image"
                    :alt="course.name"
                    class="rounded h-48 w-full" />
            </div>
            <h2 class="text-grey-800 text-xl px-1 mb-2 cursor-pointer">
                {{ course.name }}
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        course: Object
      },

      methods: {
        goToCourse() {
          return this.$router.push({ name: 'courses-slug', params: { slug: this.course.slug } })
        }
      }
    }
</script>