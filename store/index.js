export const state = () => {
  return {
    courses: [
      {
        slug: 'es6',
        tags: ['javascript', 'es6'],
        name: 'Запознавање со ES6',
        image: 'courses/es6.png',
        episodes: require('./episodes/es6')
      }
    ]
  }
}

export const getters = {
  course: state => slug => state.courses.find(course => course.slug === slug),
  courses: state => state.courses
}
