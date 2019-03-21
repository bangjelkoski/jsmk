<template>
    <div class="-mx-4">
        <course v-for="(course, index) in courses"
            :key="`course-${index}`"
            :course="course" />
    </div>
</template>

<script>
    import course from '~/components/course'

    const courses = [
      {
        slug: 'es6',
        name: 'Курс за ES6',
        image: '/courses/es6.png'
      }
    ]

    export default {
      data: () => ({
        courses: [...courses]
      }),

      components: {
        course
      }
    }
</script>
