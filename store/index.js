export const state = () => {
  return {
    courses: [
      {
        slug: 'es6',
        playlist: 'PL7ld9GQky3Rku6S6pwwXVt2L56AhM4DOw',
        tags: ['javascript', 'es6'],
        level: 'advanced',
        name: 'Запознавање со ES6',
        image: 'courses/es6.png',
        lessons: require('~/lessons/es6').default
      },
      {
        slug: 'javascript-basics',
        tags: ['javascript', 'vanilla'],
        level: 'basic',
        playlist: '',
        name: 'Основи на Javascript',
        image: 'courses/javascript-basics.jpg',
        lessons: require('~/lessons/javascript-basics').default
      },
      {
        slug: 'nuxt-js',
        level: 'advanced',
        playlist: '',
        tags: ['javascript', 'vue', 'nuxt', 'ssr', 'spa'],
        name: 'Nuxt.js 101',
        image: 'courses/nuxt.jpg',
        lessons: require('~/lessons/nuxt-js').default
      },
      {
        slug: 'vue-js-basics',
        level: 'basic',
        playlist: '',
        tags: ['javascript', 'vue'],
        name: 'Основи на Vue.js',
        image: 'courses/vue-basics.jpeg',
        lessons: require('~/lessons/vue-js-basics').default
      },
      {
        slug: 'vue-js-advanced',
        level: 'advanced',
        playlist: '',
        tags: ['javascript', 'vue'],
        name: 'Vue.js - напредно ниво',
        image: 'courses/vue-advanced.jpg',
        lessons: require('~/lessons/vue-js-advanced').default
      },
      {
        slug: 'laravel-basics',
        level: 'basics',
        playlist: '',
        tags: ['php', 'laravel'],
        name: 'Основи на Laravel',
        image: 'courses/laravel-basics.png',
        lessons: require('~/lessons/laravel-basics').default
      },
      {
        slug: 'laravel-advanced',
        level: 'advanced',
        playlist: '',
        tags: ['php', 'laravel'],
        name: 'Laravel - напредно ниво',
        image: 'courses/laravel-advanced.jpg',
        lessons: require('~/lessons/laravel-advanced').default
      },
      {
        slug: 'tailwind-css',
        level: 'basic',
        playlist: '',
        tags: ['css', 'tailwind'],
        name: 'Запознавање со Tailwind CSS',
        image: 'courses/tailwind.png',
        lessons: require('~/lessons/tailwind-css').default
      },
      {
        slug: 'laravel-vue-forum',
        level: 'advanced',
        playlist: '',
        tags: ['php', 'laravel'],
        name: 'Изградба на форум со Laravel и Vue',
        image: 'courses/laravel-vue-forum.png',
        lessons: require('~/lessons/laravel-vue-forum').default
      }
    ]
  }
}

export const getters = {
  course: state => slug => state.courses.find(course => course.slug === slug),
  courses: state => state.courses
}
