export const state = () => {
  return {
    courses: [
      {
        slug: 'es6',
        playlist: '',
        tags: ['javascript', 'es6'],
        level: 'advanced',
        name: 'Запознавање со ES6',
        image: 'courses/es6.png',
        episodes: require('~/episodes/es6').default
      },
      {
        slug: 'javascript-basics',
        tags: ['javascript', 'vanilla'],
        level: 'basic',
        playlist: '',
        name: 'Основи на Javascript',
        image: 'courses/javascript-basics.png',
        episodes: require('~/episodes/javascript-basics').default
      },
      {
        slug: 'nuxt-js',
        level: 'advanced',
        playlist: '',
        tags: ['javascript', 'vue', 'nuxt', 'ssr', 'spa'],
        name: 'Nuxt.js 101',
        image: 'courses/nuxt-js.png',
        episodes: require('~/episodes/nuxt-js').default
      },
      {
        slug: 'vue-js-basics',
        level: 'basic',
        playlist: '',
        tags: ['javascript', 'vue'],
        name: 'Основи на Vue.js',
        image: 'courses/vue-js-basics.png',
        episodes: require('~/episodes/vue-js-basics').default
      },
      {
        slug: 'vue-js-advanced',
        level: 'advanced',
        playlist: '',
        tags: ['javascript', 'vue'],
        name: 'Vue.js - напредно ниво',
        image: 'courses/vue-js-advanced.png',
        episodes: require('~/episodes/vue-js-advanced').default
      },
      {
        slug: 'laravel-basics',
        level: 'basics',
        playlist: '',
        tags: ['php', 'laravel'],
        name: 'Основи на Laravel',
        image: 'courses/laravel-basics.png',
        episodes: require('~/episodes/laravel-basics').default
      },
      {
        slug: 'laravel-advanced',
        level: 'advanced',
        playlist: '',
        tags: ['php', 'laravel'],
        name: 'Laravel - напредно ниво',
        image: 'courses/laravel-advanced.png',
        episodes: require('~/episodes/laravel-advanced').default
      },
      {
        slug: 'tailwind-css',
        level: 'basic',
        playlist: '',
        tags: ['css', 'tailwind'],
        name: 'Запознавање со Tailwind CSS',
        image: 'courses/tailwind.png',
        episodes: require('~/episodes/tailwind-css').default
      },
      {
        slug: 'laravel-vue-forum',
        level: 'advanced',
        playlist: '',
        tags: ['php', 'laravel'],
        name: 'Изградба на форум со Laravel и Vue',
        image: 'courses/laravel-vue-forum.png',
        episodes: require('~/episodes/laravel-vue-forum').default
      }
    ]
  }
}

export const getters = {
  course: state => slug => state.courses.find(course => course.slug === slug),
  courses: state => state.courses
}
