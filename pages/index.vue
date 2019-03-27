<template>
    <div class="py-16">
        <h1 class="text-gray-800 mb-2 text-2xl font-bold">Курсеви</h1>

        <div class="mb-6 w-full rounded bg-white shadow px-6 py-3">
            <div class="row items-center">
                <div class="col-third">
                    <input type="text"
                        class="input"
                        placeholder="Пребарај курс"
                        v-model="search" />
                </div>
                <div class="col-third">
                    <select class="input"
                        v-model="level">
                        <option value="">Избери Левел</option>
                        <option value="basic">Basic</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                <div class="col-third">
                    <input type="checkbox"
                        class="checkbox"
                        id="has-lessons"
                        v-model="hasLessons" />
                    <label for="has-lessons"> Мора да содржи лекции </label>
                </div>
            </div>
        </div>

        <div class="row">
            <course v-for="(course, index) in filteredCourses"
                :key="`course-${index}`"
                :course="course" />
        </div>
    </div>
</template>

<script>
    var convert = require('cyrillic-to-latin')

    import course from '~/components/course'

    export default {
      head() {
        return {
          title: 'Почетна'
        }
      },

      data: () => ({
        search: '',
        level: '',
        hasLessons: true
      }),

      computed: {
        courses() {
          return this.$store.getters.courses
        },

        filteredCourses() {
          return this.courses
            .filter(course => {
              const name = course.name.toLowerCase()
              const search = this.search.toLowerCase()

              /**
               * We search both in cyrilic and latin alphabet
               */
              const cyrilic = name.includes(search)
              const latin = convert(name).includes(search)

              return cyrilic || latin
            })
            .filter(course => (this.level ? course.level == this.level : true))
            .filter(course => (this.hasLessons ? course.lessons.length > 0 : true))
        }
      },

      components: {
        course
      }
    }
</script>
