const { readFileSync, writeFileSync, readdirSync, mkdirSync } = require('fs')
const { v4: uuidv4 } = require('uuid')
const readlineSync = require('readline-sync')

const ROOT_PATH = process.cwd()
const TEMPLATE_PATH = `${ROOT_PATH}/scripts/generate-card/template.md`
const CONTENT_PATH = `${ROOT_PATH}/content`

const generateCard = (folder) => {
  const template = readFileSync(TEMPLATE_PATH, 'utf8')
  const slug = uuidv4()
  const FILE_PATH = `${CONTENT_PATH}/${folder}/${slug}.md`
  writeFileSync(FILE_PATH, template)
  console.log('The card was successfully generated:', slug)
}

;(() => {
  console.log('Creating new card...')
  try {
    const folders = readdirSync(CONTENT_PATH, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
    if (folders.length === 1) {
      generateCard(folders[0])
    } else if (folders.length === 0) {
      console.log("There isn't a folder. We need to create one.")
      const newFolderName = readlineSync.question(
        'How should your first folder be named? '
      )
      mkdirSync(`${CONTENT_PATH}/${newFolderName}`)
      generateCard(newFolderName)
    } else {
      const foldersWithCreateoption = ['Create new folder', ...folders]
      const index = readlineSync.keyInSelect(
          foldersWithCreateoption,
        'Which folder do you want?'
      )
      if (index === 0) {
        const newFolderName = readlineSync.question(
            'How should your the folder be named? '
        )
        mkdirSync(`${CONTENT_PATH}/${newFolderName}`)
        generateCard(newFolderName)
      } else {
        generateCard(folders[index])
      }
    }
  } catch (error) {
    console.log('Error:', error)
  }
})()
