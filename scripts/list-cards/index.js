const { readdirSync } = require('fs')
const readlineSync = require('readline-sync')

const ROOT_PATH = process.cwd()
const CONTENT_PATH = `${ROOT_PATH}/content`

const printAbsoluteRoutes = (baseURL, route) =>
  console.log(`${baseURL}/${route}`)

;(() => {
  try {
    const baseURL = readlineSync.question('What is the base URL? ')
    const categories = readdirSync(`${CONTENT_PATH}`)
    const routes = categories.map((category) => {
      return readdirSync(`${CONTENT_PATH}/${category}`).map((file) => {
        const slug = file.replace('.md', '')
        return `${category}/${slug}`
      })
    }).flat()
    const categoriesWithAllOption = ['All', ...categories]
    const index = readlineSync.keyInSelect(
      categoriesWithAllOption,
      'Which category do you want?'
    )
    if (index === 0) {
      routes.forEach((route) => printAbsoluteRoutes(baseURL, route))
    } else {
      const selectedCategory = categoriesWithAllOption[index]
      const filteredRoutes = routes.filter((route) =>
        route.includes(selectedCategory)
      )
      filteredRoutes.forEach((route) => printAbsoluteRoutes(baseURL, route))
    }
  } catch (error) {
    console.log('Error:', error)
  }
})()
