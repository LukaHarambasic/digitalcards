import { readdirSync } from 'fs'

export const routes = () => {
  const categories = readdirSync(`${process.cwd()}/content`, {
    withFileTypes: true,
  })
  const routes = categories.map((category) => {
    return readdirSync(`${process.cwd()}/content/${category.name}`, {
      withFileTypes: true,
    }).map((file) => {
      const slug = file.name.replace('.md', '')
      return `${category.name}/${slug}`
    })
  })
  return routes.flat()
}
