<template>
    <div class="py-16">
        <h1 class="text-gray-800 mb-6 text-2xl font-bold">Курсеви</h1>
        <div class="row">
            <course v-for="(course, index) in courses"
                :key="`course-${index}`"
                :course="course" />
        </div>
    </div>
</template>

<script>
    import course from '~/components/course'

    export default {
      head() {
        return {
          title: 'Почетна'
        }
      },

      computed: {
        courses() {
          return this.$store.getters.courses
        }
      },

      components: {
        course
      }
    }
</script>
